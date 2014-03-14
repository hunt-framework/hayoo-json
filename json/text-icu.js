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
        "word": "text-icu"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString breaking functions for Unicode, implemented as bindings to\n the International Components for Unicode (ICU) libraries.\n\u003c/p\u003e\u003cp\u003eThe text boundary positions are found according to the rules described in\n Unicode Standard Annex #29, Text Boundaries, and Unicode Standard Annex\n #14, Line Breaking Properties.  These are available at\n \u003ca\u003ehttp://www.unicode.org/reports/tr14/\u003c/a\u003e and\n \u003ca\u003ehttp://www.unicode.org/reports/tr29/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "Break",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Break.html",
          "type": "module"
        },
        "index": {
          "description": "String breaking functions for Unicode implemented as bindings to the International Components for Unicode ICU libraries The text boundary positions are found according to the rules described in Unicode Standard Annex Text Boundaries and Unicode Standard Annex Line Breaking Properties These are available at http www.unicode.org reports tr14 and http www.unicode.org reports tr29",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Break",
          "package": "text-icu",
          "partial": "Break",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Break",
          "name": "BreakIterator",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Break-Types.html#BreakIterator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "BreakIterator",
          "package": "text-icu",
          "partial": "Break Iterator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#t:BreakIterator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine break status.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "Line",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Break.html#Line",
          "type": "data"
        },
        "index": {
          "description": "Line break status",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Line",
          "package": "text-icu",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWord break status.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "Word",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Break.html#Word",
          "type": "data"
        },
        "index": {
          "description": "Word break status",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Word",
          "package": "text-icu",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Text.ICU.Break\",\"Data.Text.ICU\"]",
          "name": "Hard",
          "package": "text-icu",
          "signature": "Hard",
          "source": "src/Data-Text-ICU-Break.html#Line",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Hard\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Hard\"]"
        },
        "index": {
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Hard",
          "package": "text-icu",
          "partial": "Hard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Hard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word containing ideographic characters.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Break\",\"Data.Text.ICU\"]",
          "name": "Ideograph",
          "package": "text-icu",
          "signature": "Ideograph",
          "source": "src/Data-Text-ICU-Break.html#Word",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Ideograph\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Ideograph\"]"
        },
        "index": {
          "description": "word containing ideographic characters",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Ideograph",
          "package": "text-icu",
          "partial": "Ideograph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Ideograph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word containing kana characters.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Break\",\"Data.Text.ICU\"]",
          "name": "Kana",
          "package": "text-icu",
          "signature": "Kana",
          "source": "src/Data-Text-ICU-Break.html#Word",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Kana\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Kana\"]"
        },
        "index": {
          "description": "word containing kana characters",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Kana",
          "package": "text-icu",
          "partial": "Kana",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Kana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word containing letters, excluding\n hiragana, katakana or ideographic\n characters.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Break\",\"Data.Text.ICU\"]",
          "name": "Letter",
          "package": "text-icu",
          "signature": "Letter",
          "source": "src/Data-Text-ICU-Break.html#Word",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Letter\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Letter\"]"
        },
        "index": {
          "description": "word containing letters excluding hiragana katakana or ideographic characters",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Letter",
          "package": "text-icu",
          "partial": "Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word that appears to be a number.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Break\",\"Data.Text.ICU\"]",
          "name": "Number",
          "package": "text-icu",
          "signature": "Number",
          "source": "src/Data-Text-ICU-Break.html#Word",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Number\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Number\"]"
        },
        "index": {
          "description": "word that appears to be number",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Number",
          "package": "text-icu",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA soft line break is a position at\n which a line break is acceptable, but not\n required.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Break\",\"Data.Text.ICU\"]",
          "name": "Soft",
          "package": "text-icu",
          "signature": "Soft",
          "source": "src/Data-Text-ICU-Break.html#Line",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Soft\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Soft\"]"
        },
        "index": {
          "description": "soft line break is position at which line break is acceptable but not required",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Soft",
          "package": "text-icu",
          "partial": "Soft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Soft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"word\" that does not fit into another\n category.  Includes spaces and most\n punctuation.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Break\",\"Data.Text.ICU\"]",
          "name": "Uncategorized",
          "package": "text-icu",
          "signature": "Uncategorized",
          "source": "src/Data-Text-ICU-Break.html#Word",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Uncategorized\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Uncategorized\"]"
        },
        "index": {
          "description": "word that does not fit into another category Includes spaces and most punctuation",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "Uncategorized",
          "package": "text-icu",
          "partial": "Uncategorized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:Uncategorized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocales for which text breaking information is available.  A\n \u003ccode\u003e\u003ca\u003eBreakIterator\u003c/a\u003e\u003c/code\u003e in a locale in this list will perform the correct\n text breaking for the locale.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "available",
          "package": "text-icu",
          "signature": "[LocaleName]",
          "source": "src/Data-Text-ICU-Break.html#available",
          "type": "function"
        },
        "index": {
          "description": "Locales for which text breaking information is available BreakIterator in locale in this list will perform the correct text breaking for the locale",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "available",
          "normalized": "[LocaleName]",
          "package": "text-icu",
          "signature": "[LocaleName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:available"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on character boundaries.\n\u003c/p\u003e\u003cp\u003eCharacter boundary analysis identifies the boundaries of \"Extended\n Grapheme Clusters\", which are groupings of codepoints that should be\n treated as character-like units for many text operations.  Please see\n Unicode Standard Annex #29, Unicode Text Segmentation,\n \u003ca\u003ehttp://www.unicode.org/reports/tr29/\u003c/a\u003e for additional information on\n grapheme clusters and guidelines on their use.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "breakCharacter",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Text -\u003e IO (BreakIterator ())",
          "source": "src/Data-Text-ICU-Break.html#breakCharacter",
          "type": "function"
        },
        "index": {
          "description": "Break string on character boundaries Character boundary analysis identifies the boundaries of Extended Grapheme Clusters which are groupings of codepoints that should be treated as character-like units for many text operations Please see Unicode Standard Annex Unicode Text Segmentation http www.unicode.org reports tr29 for additional information on grapheme clusters and guidelines on their use",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "breakCharacter",
          "normalized": "LocaleName-\u003eText-\u003eIO(BreakIterator())",
          "package": "text-icu",
          "partial": "Character",
          "signature": "LocaleName-\u003eText-\u003eIO(BreakIterator())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:breakCharacter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on line boundaries.\n\u003c/p\u003e\u003cp\u003eLine boundary analysis determines where a text string can be broken when\n line wrapping. The mechanism correctly handles punctuation and hyphenated\n words.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "breakLine",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Text -\u003e IO (BreakIterator Line)",
          "source": "src/Data-Text-ICU-Break.html#breakLine",
          "type": "function"
        },
        "index": {
          "description": "Break string on line boundaries Line boundary analysis determines where text string can be broken when line wrapping The mechanism correctly handles punctuation and hyphenated words",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "breakLine",
          "normalized": "LocaleName-\u003eText-\u003eIO(BreakIterator Line)",
          "package": "text-icu",
          "partial": "Line",
          "signature": "LocaleName-\u003eText-\u003eIO(BreakIterator Line)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:breakLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on sentence boundaries.\n\u003c/p\u003e\u003cp\u003eSentence boundary analysis allows selection with correct interpretation\n of periods within numbers and abbreviations, and trailing punctuation\n marks such as quotation marks and parentheses.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "breakSentence",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Text -\u003e IO (BreakIterator ())",
          "source": "src/Data-Text-ICU-Break.html#breakSentence",
          "type": "function"
        },
        "index": {
          "description": "Break string on sentence boundaries Sentence boundary analysis allows selection with correct interpretation of periods within numbers and abbreviations and trailing punctuation marks such as quotation marks and parentheses",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "breakSentence",
          "normalized": "LocaleName-\u003eText-\u003eIO(BreakIterator())",
          "package": "text-icu",
          "partial": "Sentence",
          "signature": "LocaleName-\u003eText-\u003eIO(BreakIterator())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:breakSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on word boundaries.\n\u003c/p\u003e\u003cp\u003eWord boundary analysis is used by search and replace functions, as well\n as within text editing applications that allow the user to select words\n with a double click. Word selection provides correct interpretation of\n punctuation marks within and following words. Characters that are not\n part of a word, such as symbols or punctuation marks, have word breaks on\n both sides.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "breakWord",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Text -\u003e IO (BreakIterator Word)",
          "source": "src/Data-Text-ICU-Break.html#breakWord",
          "type": "function"
        },
        "index": {
          "description": "Break string on word boundaries Word boundary analysis is used by search and replace functions as well as within text editing applications that allow the user to select words with double click Word selection provides correct interpretation of punctuation marks within and following words Characters that are not part of word such as symbols or punctuation marks have word breaks on both sides",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "breakWord",
          "normalized": "LocaleName-\u003eText-\u003eIO(BreakIterator Word)",
          "package": "text-icu",
          "partial": "Word",
          "signature": "LocaleName-\u003eText-\u003eIO(BreakIterator Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:breakWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThread safe cloning operation.  This is substantially faster than\n creating a new \u003ccode\u003e\u003ca\u003eBreakIterator\u003c/a\u003e\u003c/code\u003e from scratch.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "clone",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e IO (BreakIterator a)",
          "source": "src/Data-Text-ICU-Break.html#clone",
          "type": "function"
        },
        "index": {
          "description": "Thread safe cloning operation This is substantially faster than creating new BreakIterator from scratch",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "clone",
          "normalized": "BreakIterator a-\u003eIO(BreakIterator a)",
          "package": "text-icu",
          "signature": "BreakIterator a-\u003eIO(BreakIterator a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the character index most recently returned by \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eprevious\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "current",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e IO (Maybe I16)",
          "source": "src/Data-Text-ICU-Break.html#current",
          "type": "function"
        },
        "index": {
          "description": "Return the character index most recently returned by next previous first or last",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "current",
          "normalized": "BreakIterator a-\u003eIO(Maybe I)",
          "package": "text-icu",
          "signature": "BreakIterator a-\u003eIO(Maybe I)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the breaker to the beginning of the text to be scanned.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "first",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e IO I16",
          "source": "src/Data-Text-ICU-Break.html#first",
          "type": "function"
        },
        "index": {
          "description": "Reset the breaker to the beginning of the text to be scanned",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "first",
          "normalized": "BreakIterator a-\u003eIO I",
          "package": "text-icu",
          "signature": "BreakIterator a-\u003eIO I",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the text boundary following the specified offset.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "following",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e Int -\u003e IO (Maybe I16)",
          "source": "src/Data-Text-ICU-Break.html#following",
          "type": "function"
        },
        "index": {
          "description": "Determine the text boundary following the specified offset",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "following",
          "normalized": "BreakIterator a-\u003eInt-\u003eIO(Maybe I)",
          "package": "text-icu",
          "signature": "BreakIterator a-\u003eInt-\u003eIO(Maybe I)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:following"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the status from the break rule that determined the most recently\n returned break position.  For rules that do not specify a status, a\n default value of \u003ccode\u003e()\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "getStatus",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e IO a",
          "source": "src/Data-Text-ICU-Break.html#getStatus",
          "type": "function"
        },
        "index": {
          "description": "Return the status from the break rule that determined the most recently returned break position For rules that do not specify status default value of is returned",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "getStatus",
          "normalized": "BreakIterator a-\u003eIO a",
          "package": "text-icu",
          "partial": "Status",
          "signature": "BreakIterator a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:getStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn statuses from all of the break rules that determined the most\n recently returned break position.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "getStatuses",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e IO [a]",
          "source": "src/Data-Text-ICU-Break.html#getStatuses",
          "type": "function"
        },
        "index": {
          "description": "Return statuses from all of the break rules that determined the most recently returned break position",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "getStatuses",
          "normalized": "BreakIterator a-\u003eIO[a]",
          "package": "text-icu",
          "partial": "Statuses",
          "signature": "BreakIterator a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:getStatuses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether the specfied position is a boundary position.\n As a side effect, leaves the iterator pointing to the first\n boundary position at or after the given offset.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "isBoundary",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e Int -\u003e IO Bool",
          "source": "src/Data-Text-ICU-Break.html#isBoundary",
          "type": "function"
        },
        "index": {
          "description": "Determine whether the specfied position is boundary position As side effect leaves the iterator pointing to the first boundary position at or after the given offset",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "isBoundary",
          "normalized": "BreakIterator a-\u003eInt-\u003eIO Bool",
          "package": "text-icu",
          "partial": "Boundary",
          "signature": "BreakIterator a-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:isBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the breaker to the end of the text to be scanned.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "last",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e IO I16",
          "source": "src/Data-Text-ICU-Break.html#last",
          "type": "function"
        },
        "index": {
          "description": "Reset the breaker to the end of the text to be scanned",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "last",
          "normalized": "BreakIterator a-\u003eIO I",
          "package": "text-icu",
          "signature": "BreakIterator a-\u003eIO I",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvance the iterator and break at the text boundary that follows the\n current text boundary.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "next",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e IO (Maybe I16)",
          "source": "src/Data-Text-ICU-Break.html#next",
          "type": "function"
        },
        "index": {
          "description": "Advance the iterator and break at the text boundary that follows the current text boundary",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "next",
          "normalized": "BreakIterator a-\u003eIO(Maybe I)",
          "package": "text-icu",
          "signature": "BreakIterator a-\u003eIO(Maybe I)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the text boundary preceding the specified offset.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "preceding",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e Int -\u003e IO (Maybe I16)",
          "source": "src/Data-Text-ICU-Break.html#preceding",
          "type": "function"
        },
        "index": {
          "description": "Determine the text boundary preceding the specified offset",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "preceding",
          "normalized": "BreakIterator a-\u003eInt-\u003eIO(Maybe I)",
          "package": "text-icu",
          "signature": "BreakIterator a-\u003eInt-\u003eIO(Maybe I)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:preceding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvance the iterator and break at the text boundary that precedes the\n current text boundary.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "previous",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e IO (Maybe I16)",
          "source": "src/Data-Text-ICU-Break.html#previous",
          "type": "function"
        },
        "index": {
          "description": "Advance the iterator and break at the text boundary that precedes the current text boundary",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "previous",
          "normalized": "BreakIterator a-\u003eIO(Maybe I)",
          "package": "text-icu",
          "signature": "BreakIterator a-\u003eIO(Maybe I)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:previous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint an existing \u003ccode\u003e\u003ca\u003eBreakIterator\u003c/a\u003e\u003c/code\u003e at a new piece of text.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Break",
          "name": "setText",
          "package": "text-icu",
          "signature": "BreakIterator a -\u003e Text -\u003e IO ()",
          "source": "src/Data-Text-ICU-Break.html#setText",
          "type": "function"
        },
        "index": {
          "description": "Point an existing BreakIterator at new piece of text",
          "hierarchy": "Data Text ICU Break",
          "module": "Data.Text.ICU.Break",
          "name": "setText",
          "normalized": "BreakIterator a-\u003eText-\u003eIO()",
          "package": "text-icu",
          "partial": "Text",
          "signature": "BreakIterator a-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Break.html#v:setText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess to the Unicode Character Database, implemented as bindings\n to the International Components for Unicode (ICU) libraries.\n\u003c/p\u003e\u003cp\u003eUnicode assigns each code point (not just assigned character) values for\n many properties.  Most are simple boolean flags, or constants from a\n small enumerated list.  For some, values are relatively more complex\n types.\n\u003c/p\u003e\u003cp\u003eFor more information see \"About the Unicode Character Database\"\n \u003ca\u003ehttp://www.unicode.org/ucd/\u003c/a\u003e and the ICU User Guide chapter on\n Properties \u003ca\u003ehttp://icu-project.org/userguide/properties.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "Char",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html",
          "type": "module"
        },
        "index": {
          "description": "Access to the Unicode Character Database implemented as bindings to the International Components for Unicode ICU libraries Unicode assigns each code point not just assigned character values for many properties Most are simple boolean flags or constants from small enumerated list For some values are relatively more complex types For more information see About the Unicode Character Database http www.unicode.org ucd and the ICU User Guide chapter on Properties http icu-project.org userguide properties.html",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Char",
          "package": "text-icu",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BidiClass_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#BidiClass_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BidiClass_",
          "package": "text-icu",
          "partial": "Bidi Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:BidiClass_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescriptions of Unicode blocks.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "BlockCode",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "data"
        },
        "index": {
          "description": "Descriptions of Unicode blocks",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BlockCode",
          "package": "text-icu",
          "partial": "Block Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:BlockCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Block_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#Block_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Block_",
          "package": "text-icu",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:Block_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Bool_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Bool_",
          "package": "text-icu",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:Bool_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CanonicalCombiningClass_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#CanonicalCombiningClass_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CanonicalCombiningClass_",
          "package": "text-icu",
          "partial": "Canonical Combining Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:CanonicalCombiningClass_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Decomposition",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Decomposition",
          "package": "text-icu",
          "partial": "Decomposition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:Decomposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Decomposition_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#Decomposition_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Decomposition_",
          "package": "text-icu",
          "partial": "Decomposition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:Decomposition_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe language directional property of a character set.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "Direction",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "data"
        },
        "index": {
          "description": "The language directional property of character set",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Direction",
          "package": "text-icu",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EastAsianWidth",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EastAsianWidth",
          "package": "text-icu",
          "partial": "East Asian Width",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:EastAsianWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EastAsianWidth_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EastAsianWidth_",
          "package": "text-icu",
          "partial": "East Asian Width",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:EastAsianWidth_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GeneralCategory",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GeneralCategory",
          "package": "text-icu",
          "partial": "General Category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:GeneralCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GeneralCategory_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GeneralCategory_",
          "package": "text-icu",
          "partial": "General Category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:GeneralCategory_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeClusterBreak",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeClusterBreak",
          "package": "text-icu",
          "partial": "Grapheme Cluster Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:GraphemeClusterBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeClusterBreak_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeClusterBreak_",
          "package": "text-icu",
          "partial": "Grapheme Cluster Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:GraphemeClusterBreak_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HangulSyllableType",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#HangulSyllableType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HangulSyllableType",
          "package": "text-icu",
          "partial": "Hangul Syllable Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:HangulSyllableType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HangulSyllableType_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#HangulSyllableType_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HangulSyllableType_",
          "package": "text-icu",
          "partial": "Hangul Syllable Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:HangulSyllableType_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JoiningGroup",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JoiningGroup",
          "package": "text-icu",
          "partial": "Joining Group",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:JoiningGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JoiningGroup_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JoiningGroup_",
          "package": "text-icu",
          "partial": "Joining Group",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:JoiningGroup_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JoiningType",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#JoiningType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JoiningType",
          "package": "text-icu",
          "partial": "Joining Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:JoiningType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JoiningType_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#JoiningType_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JoiningType_",
          "package": "text-icu",
          "partial": "Joining Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:JoiningType_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LeadCanonicalCombiningClass_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#LeadCanonicalCombiningClass_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LeadCanonicalCombiningClass_",
          "package": "text-icu",
          "partial": "Lead Canonical Combining Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:LeadCanonicalCombiningClass_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LineBreak",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LineBreak",
          "package": "text-icu",
          "partial": "Line Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:LineBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LineBreak_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#LineBreak_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LineBreak_",
          "package": "text-icu",
          "partial": "Line Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:LineBreak_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NFCQuickCheck_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#NFCQuickCheck_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFCQuickCheck_",
          "package": "text-icu",
          "partial": "NFCQuick Check",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:NFCQuickCheck_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NFDQuickCheck_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#NFDQuickCheck_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFDQuickCheck_",
          "package": "text-icu",
          "partial": "NFDQuick Check",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:NFDQuickCheck_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NFKCQuickCheck_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#NFKCQuickCheck_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFKCQuickCheck_",
          "package": "text-icu",
          "partial": "NFKCQuick Check",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:NFKCQuickCheck_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NFKDQuickCheck_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#NFKDQuickCheck_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFKDQuickCheck_",
          "package": "text-icu",
          "partial": "NFKDQuick Check",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:NFKDQuickCheck_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NumericType",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#NumericType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NumericType",
          "package": "text-icu",
          "partial": "Numeric Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:NumericType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NumericType_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#NumericType_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NumericType_",
          "package": "text-icu",
          "partial": "Numeric Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:NumericType_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Property",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#Property",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Property",
          "package": "text-icu",
          "partial": "Property",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SentenceBreak",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SentenceBreak",
          "package": "text-icu",
          "partial": "Sentence Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:SentenceBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SentenceBreak_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SentenceBreak_",
          "package": "text-icu",
          "partial": "Sentence Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:SentenceBreak_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "TrailingCanonicalCombiningClass_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#TrailingCanonicalCombiningClass_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "TrailingCanonicalCombiningClass_",
          "package": "text-icu",
          "partial": "Trailing Canonical Combining Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:TrailingCanonicalCombiningClass_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WordBreak",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WordBreak",
          "package": "text-icu",
          "partial": "Word Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:WordBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WordBreak_",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Char.html#WordBreak_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WordBreak_",
          "package": "text-icu",
          "partial": "Word Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#t:WordBreak_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0-9, A-F, a-f\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "ASCIIHexDigit",
          "package": "text-icu",
          "signature": "ASCIIHexDigit",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "A-F a-f",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ASCIIHexDigit",
          "package": "text-icu",
          "partial": "ASCIIHex Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ASCIIHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "AegeanNumbers",
          "package": "text-icu",
          "signature": "AegeanNumbers",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "AegeanNumbers",
          "package": "text-icu",
          "partial": "Aegean Numbers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:AegeanNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Ain",
          "package": "text-icu",
          "signature": "Ain",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Ain",
          "package": "text-icu",
          "partial": "Ain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Ain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Alaph",
          "package": "text-icu",
          "signature": "Alaph",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Alaph",
          "package": "text-icu",
          "partial": "Alaph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Alaph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Alef",
          "package": "text-icu",
          "signature": "Alef",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Alef",
          "package": "text-icu",
          "partial": "Alef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Alef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Alphabetic",
          "package": "text-icu",
          "signature": "Alphabetic",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Alphabetic",
          "package": "text-icu",
          "partial": "Alphabetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Alphabetic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "AlphabeticPresentationForms",
          "package": "text-icu",
          "signature": "AlphabeticPresentationForms",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "AlphabeticPresentationForms",
          "package": "text-icu",
          "partial": "Alphabetic Presentation Forms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:AlphabeticPresentationForms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Ambiguous",
          "package": "text-icu",
          "signature": "Ambiguous",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Ambiguous",
          "package": "text-icu",
          "partial": "Ambiguous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Ambiguous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "AncientGreekMusicalNotation",
          "package": "text-icu",
          "signature": "AncientGreekMusicalNotation",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "AncientGreekMusicalNotation",
          "package": "text-icu",
          "partial": "Ancient Greek Musical Notation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:AncientGreekMusicalNotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "AncientGreekNumbers",
          "package": "text-icu",
          "signature": "AncientGreekNumbers",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "AncientGreekNumbers",
          "package": "text-icu",
          "partial": "Ancient Greek Numbers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:AncientGreekNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "AncientSymbols",
          "package": "text-icu",
          "signature": "AncientSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "AncientSymbols",
          "package": "text-icu",
          "partial": "Ancient Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:AncientSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Arabic",
          "package": "text-icu",
          "signature": "Arabic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Arabic",
          "package": "text-icu",
          "partial": "Arabic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Arabic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ArabicNumber",
          "package": "text-icu",
          "signature": "ArabicNumber",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ArabicNumber",
          "package": "text-icu",
          "partial": "Arabic Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ArabicNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ArabicPresentationFormsA",
          "package": "text-icu",
          "signature": "ArabicPresentationFormsA",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ArabicPresentationFormsA",
          "package": "text-icu",
          "partial": "Arabic Presentation Forms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ArabicPresentationFormsA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ArabicPresentationFormsB",
          "package": "text-icu",
          "signature": "ArabicPresentationFormsB",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ArabicPresentationFormsB",
          "package": "text-icu",
          "partial": "Arabic Presentation Forms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ArabicPresentationFormsB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ArabicSupplement",
          "package": "text-icu",
          "signature": "ArabicSupplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ArabicSupplement",
          "package": "text-icu",
          "partial": "Arabic Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ArabicSupplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Armenian",
          "package": "text-icu",
          "signature": "Armenian",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Armenian",
          "package": "text-icu",
          "partial": "Armenian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Armenian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Arrows",
          "package": "text-icu",
          "signature": "Arrows",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Arrows",
          "package": "text-icu",
          "partial": "Arrows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Arrows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Balinese",
          "package": "text-icu",
          "signature": "Balinese",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Balinese",
          "package": "text-icu",
          "partial": "Balinese",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Balinese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BasicLatin",
          "package": "text-icu",
          "signature": "BasicLatin",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BasicLatin",
          "package": "text-icu",
          "partial": "Basic Latin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BasicLatin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Beh",
          "package": "text-icu",
          "signature": "Beh",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Beh",
          "package": "text-icu",
          "partial": "Beh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Beh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Bengali",
          "package": "text-icu",
          "signature": "Bengali",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Bengali",
          "package": "text-icu",
          "partial": "Bengali",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Bengali"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Beth",
          "package": "text-icu",
          "signature": "Beth",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Beth",
          "package": "text-icu",
          "partial": "Beth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Beth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BidiClass",
          "package": "text-icu",
          "signature": "BidiClass",
          "source": "src/Data-Text-ICU-Char.html#BidiClass_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BidiClass",
          "package": "text-icu",
          "partial": "Bidi Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BidiClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat controls which have specific functions in the Bidi Algorithm.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "BidiControl",
          "package": "text-icu",
          "signature": "BidiControl",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Format controls which have specific functions in the Bidi Algorithm",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BidiControl",
          "package": "text-icu",
          "partial": "Bidi Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BidiControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacters that may change display in RTL text.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "BidiMirrored",
          "package": "text-icu",
          "signature": "BidiMirrored",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Characters that may change display in RTL text",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BidiMirrored",
          "package": "text-icu",
          "partial": "Bidi Mirrored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BidiMirrored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Block",
          "package": "text-icu",
          "signature": "Block",
          "source": "src/Data-Text-ICU-Char.html#Block_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Block",
          "package": "text-icu",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BlockElements",
          "package": "text-icu",
          "signature": "BlockElements",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BlockElements",
          "package": "text-icu",
          "partial": "Block Elements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BlockElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BlockSeparator",
          "package": "text-icu",
          "signature": "BlockSeparator",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BlockSeparator",
          "package": "text-icu",
          "partial": "Block Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BlockSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Bopomofo",
          "package": "text-icu",
          "signature": "Bopomofo",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Bopomofo",
          "package": "text-icu",
          "partial": "Bopomofo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Bopomofo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BopomofoExtended",
          "package": "text-icu",
          "signature": "BopomofoExtended",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BopomofoExtended",
          "package": "text-icu",
          "partial": "Bopomofo Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BopomofoExtended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BoundaryNeutral",
          "package": "text-icu",
          "signature": "BoundaryNeutral",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BoundaryNeutral",
          "package": "text-icu",
          "partial": "Boundary Neutral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BoundaryNeutral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BoxDrawing",
          "package": "text-icu",
          "signature": "BoxDrawing",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BoxDrawing",
          "package": "text-icu",
          "partial": "Box Drawing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BoxDrawing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BraillePatterns",
          "package": "text-icu",
          "signature": "BraillePatterns",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BraillePatterns",
          "package": "text-icu",
          "partial": "Braille Patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BraillePatterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BreakAfter",
          "package": "text-icu",
          "signature": "BreakAfter",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BreakAfter",
          "package": "text-icu",
          "partial": "Break After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BreakAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BreakBefore",
          "package": "text-icu",
          "signature": "BreakBefore",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BreakBefore",
          "package": "text-icu",
          "partial": "Break Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BreakBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BreakBoth",
          "package": "text-icu",
          "signature": "BreakBoth",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BreakBoth",
          "package": "text-icu",
          "partial": "Break Both",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BreakBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BreakSymbols",
          "package": "text-icu",
          "signature": "BreakSymbols",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BreakSymbols",
          "package": "text-icu",
          "partial": "Break Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BreakSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Buginese",
          "package": "text-icu",
          "signature": "Buginese",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Buginese",
          "package": "text-icu",
          "partial": "Buginese",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Buginese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Buhid",
          "package": "text-icu",
          "signature": "Buhid",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Buhid",
          "package": "text-icu",
          "partial": "Buhid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Buhid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "BurushaskiYehBarree",
          "package": "text-icu",
          "signature": "BurushaskiYehBarree",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "BurushaskiYehBarree",
          "package": "text-icu",
          "partial": "Burushaski Yeh Barree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:BurushaskiYehBarree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ByzantineMusicalSymbols",
          "package": "text-icu",
          "signature": "ByzantineMusicalSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ByzantineMusicalSymbols",
          "package": "text-icu",
          "partial": "Byzantine Musical Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ByzantineMusicalSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKCompatibility",
          "package": "text-icu",
          "signature": "CJKCompatibility",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKCompatibility",
          "package": "text-icu",
          "partial": "CJKCompatibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKCompatibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKCompatibilityForms",
          "package": "text-icu",
          "signature": "CJKCompatibilityForms",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKCompatibilityForms",
          "package": "text-icu",
          "partial": "CJKCompatibility Forms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKCompatibilityForms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKCompatibilityIdeographs",
          "package": "text-icu",
          "signature": "CJKCompatibilityIdeographs",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKCompatibilityIdeographs",
          "package": "text-icu",
          "partial": "CJKCompatibility Ideographs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKCompatibilityIdeographs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKCompatibilityIdeographsSupplement",
          "package": "text-icu",
          "signature": "CJKCompatibilityIdeographsSupplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKCompatibilityIdeographsSupplement",
          "package": "text-icu",
          "partial": "CJKCompatibility Ideographs Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKCompatibilityIdeographsSupplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKRadicalsSupplement",
          "package": "text-icu",
          "signature": "CJKRadicalsSupplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKRadicalsSupplement",
          "package": "text-icu",
          "partial": "CJKRadicals Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKRadicalsSupplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKStrokes",
          "package": "text-icu",
          "signature": "CJKStrokes",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKStrokes",
          "package": "text-icu",
          "partial": "CJKStrokes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKStrokes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKSymbolsAndPunctuation",
          "package": "text-icu",
          "signature": "CJKSymbolsAndPunctuation",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKSymbolsAndPunctuation",
          "package": "text-icu",
          "partial": "CJKSymbols And Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKSymbolsAndPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKUnifiedIdeographs",
          "package": "text-icu",
          "signature": "CJKUnifiedIdeographs",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKUnifiedIdeographs",
          "package": "text-icu",
          "partial": "CJKUnified Ideographs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKUnifiedIdeographs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKUnifiedIdeographsExtensionA",
          "package": "text-icu",
          "signature": "CJKUnifiedIdeographsExtensionA",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKUnifiedIdeographsExtensionA",
          "package": "text-icu",
          "partial": "CJKUnified Ideographs Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKUnifiedIdeographsExtensionA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CJKUnifiedIdeographsExtensionB",
          "package": "text-icu",
          "signature": "CJKUnifiedIdeographsExtensionB",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CJKUnifiedIdeographsExtensionB",
          "package": "text-icu",
          "partial": "CJKUnified Ideographs Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CJKUnifiedIdeographsExtensionB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CR",
          "package": "text-icu",
          "signature": "CR",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CR",
          "package": "text-icu",
          "partial": "CR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Canonical",
          "package": "text-icu",
          "signature": "Canonical",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Canonical",
          "package": "text-icu",
          "partial": "Canonical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Canonical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CanonicalCombiningClass",
          "package": "text-icu",
          "signature": "CanonicalCombiningClass",
          "source": "src/Data-Text-ICU-Char.html#CanonicalCombiningClass_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CanonicalCombiningClass",
          "package": "text-icu",
          "partial": "Canonical Combining Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CanonicalCombiningClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Carian",
          "package": "text-icu",
          "signature": "Carian",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Carian",
          "package": "text-icu",
          "partial": "Carian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Carian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CarriageReturn",
          "package": "text-icu",
          "signature": "CarriageReturn",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CarriageReturn",
          "package": "text-icu",
          "partial": "Carriage Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CarriageReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither the source of a case mapping or \u003cem\u003ein\u003c/em\u003e the target of a case\n mapping. Not the same as the general category \u003ccode\u003eCased_Letter\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "CaseSensitive",
          "package": "text-icu",
          "signature": "CaseSensitive",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Either the source of case mapping or in the target of case mapping Not the same as the general category Cased Letter",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CaseSensitive",
          "package": "text-icu",
          "partial": "Case Sensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CaseSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Cham",
          "package": "text-icu",
          "signature": "Cham",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Cham",
          "package": "text-icu",
          "partial": "Cham",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Cham"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Cherokee",
          "package": "text-icu",
          "signature": "Cherokee",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Cherokee",
          "package": "text-icu",
          "partial": "Cherokee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Cherokee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Circle",
          "package": "text-icu",
          "signature": "Circle",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Circle",
          "package": "text-icu",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ClosePunctuation",
          "package": "text-icu",
          "signature": "ClosePunctuation",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ClosePunctuation",
          "package": "text-icu",
          "partial": "Close Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ClosePunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CombiningDiacriticalMarks",
          "package": "text-icu",
          "signature": "CombiningDiacriticalMarks",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CombiningDiacriticalMarks",
          "package": "text-icu",
          "partial": "Combining Diacritical Marks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CombiningDiacriticalMarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CombiningDiacriticalMarksForSymbols",
          "package": "text-icu",
          "signature": "CombiningDiacriticalMarksForSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CombiningDiacriticalMarksForSymbols",
          "package": "text-icu",
          "partial": "Combining Diacritical Marks For Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CombiningDiacriticalMarksForSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CombiningDiacriticalMarksSupplement",
          "package": "text-icu",
          "signature": "CombiningDiacriticalMarksSupplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CombiningDiacriticalMarksSupplement",
          "package": "text-icu",
          "partial": "Combining Diacritical Marks Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CombiningDiacriticalMarksSupplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CombiningHalfMarks",
          "package": "text-icu",
          "signature": "CombiningHalfMarks",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CombiningHalfMarks",
          "package": "text-icu",
          "partial": "Combining Half Marks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CombiningHalfMarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CombiningMark",
          "package": "text-icu",
          "signature": "CombiningMark",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CombiningMark",
          "package": "text-icu",
          "partial": "Combining Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CombiningMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CombiningSpacingMark",
          "package": "text-icu",
          "signature": "CombiningSpacingMark",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CombiningSpacingMark",
          "package": "text-icu",
          "partial": "Combining Spacing Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CombiningSpacingMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CommonNumberSeparator",
          "package": "text-icu",
          "signature": "CommonNumberSeparator",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CommonNumberSeparator",
          "package": "text-icu",
          "partial": "Common Number Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CommonNumberSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Compat",
          "package": "text-icu",
          "signature": "Compat",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Compat",
          "package": "text-icu",
          "partial": "Compat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Compat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ComplexContext",
          "package": "text-icu",
          "signature": "ComplexContext",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ComplexContext",
          "package": "text-icu",
          "partial": "Complex Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ComplexContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ConnectorPunctuation",
          "package": "text-icu",
          "signature": "ConnectorPunctuation",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ConnectorPunctuation",
          "package": "text-icu",
          "partial": "Connector Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ConnectorPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ContingentBreak",
          "package": "text-icu",
          "signature": "ContingentBreak",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ContingentBreak",
          "package": "text-icu",
          "partial": "Contingent Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ContingentBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Control",
          "package": "text-icu",
          "signature": "Control",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Control",
          "package": "text-icu",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ControlChar",
          "package": "text-icu",
          "signature": "ControlChar",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ControlChar",
          "package": "text-icu",
          "partial": "Control Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ControlChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ControlPictures",
          "package": "text-icu",
          "signature": "ControlPictures",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ControlPictures",
          "package": "text-icu",
          "partial": "Control Pictures",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ControlPictures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Coptic",
          "package": "text-icu",
          "signature": "Coptic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Coptic",
          "package": "text-icu",
          "partial": "Coptic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Coptic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Count",
          "package": "text-icu",
          "signature": "Count",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Count",
          "package": "text-icu",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CountingRodNumerals",
          "package": "text-icu",
          "signature": "CountingRodNumerals",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CountingRodNumerals",
          "package": "text-icu",
          "partial": "Counting Rod Numerals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CountingRodNumerals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Cuneiform",
          "package": "text-icu",
          "signature": "Cuneiform",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Cuneiform",
          "package": "text-icu",
          "partial": "Cuneiform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Cuneiform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CuneiformNumbersAndPunctuation",
          "package": "text-icu",
          "signature": "CuneiformNumbersAndPunctuation",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CuneiformNumbersAndPunctuation",
          "package": "text-icu",
          "partial": "Cuneiform Numbers And Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CuneiformNumbersAndPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CurrencySymbol",
          "package": "text-icu",
          "signature": "CurrencySymbol",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CurrencySymbol",
          "package": "text-icu",
          "partial": "Currency Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CurrencySymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CurrencySymbols",
          "package": "text-icu",
          "signature": "CurrencySymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CurrencySymbols",
          "package": "text-icu",
          "partial": "Currency Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CurrencySymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CypriotSyllabary",
          "package": "text-icu",
          "signature": "CypriotSyllabary",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CypriotSyllabary",
          "package": "text-icu",
          "partial": "Cypriot Syllabary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CypriotSyllabary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Cyrillic",
          "package": "text-icu",
          "signature": "Cyrillic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Cyrillic",
          "package": "text-icu",
          "partial": "Cyrillic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Cyrillic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CyrillicExtendedA",
          "package": "text-icu",
          "signature": "CyrillicExtendedA",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CyrillicExtendedA",
          "package": "text-icu",
          "partial": "Cyrillic Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CyrillicExtendedA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CyrillicExtendedB",
          "package": "text-icu",
          "signature": "CyrillicExtendedB",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CyrillicExtendedB",
          "package": "text-icu",
          "partial": "Cyrillic Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CyrillicExtendedB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "CyrillicSupplement",
          "package": "text-icu",
          "signature": "CyrillicSupplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "CyrillicSupplement",
          "package": "text-icu",
          "partial": "Cyrillic Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:CyrillicSupplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Dal",
          "package": "text-icu",
          "signature": "Dal",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Dal",
          "package": "text-icu",
          "partial": "Dal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Dal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "DalathRish",
          "package": "text-icu",
          "signature": "DalathRish",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "DalathRish",
          "package": "text-icu",
          "partial": "Dalath Rish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:DalathRish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariations of dashes.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "Dash",
          "package": "text-icu",
          "signature": "Dash",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Variations of dashes",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Dash",
          "package": "text-icu",
          "partial": "Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Dash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "DashPunctuation",
          "package": "text-icu",
          "signature": "DashPunctuation",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "DashPunctuation",
          "package": "text-icu",
          "partial": "Dash Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:DashPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "DecimalDigitNumber",
          "package": "text-icu",
          "signature": "DecimalDigitNumber",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "DecimalDigitNumber",
          "package": "text-icu",
          "partial": "Decimal Digit Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:DecimalDigitNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Decomposition",
          "package": "text-icu",
          "signature": "Decomposition",
          "source": "src/Data-Text-ICU-Char.html#Decomposition_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Decomposition",
          "package": "text-icu",
          "partial": "Decomposition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Decomposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnorable in most processing.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "DefaultIgnorable",
          "package": "text-icu",
          "signature": "DefaultIgnorable",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Ignorable in most processing",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "DefaultIgnorable",
          "package": "text-icu",
          "partial": "Default Ignorable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:DefaultIgnorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe usage of deprecated characters is strongly discouraged.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "Deprecated",
          "package": "text-icu",
          "signature": "Deprecated",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "The usage of deprecated characters is strongly discouraged",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Deprecated",
          "package": "text-icu",
          "partial": "Deprecated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Deprecated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Deseret",
          "package": "text-icu",
          "signature": "Deseret",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Deseret",
          "package": "text-icu",
          "partial": "Deseret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Deseret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Devanagari",
          "package": "text-icu",
          "signature": "Devanagari",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Devanagari",
          "package": "text-icu",
          "partial": "Devanagari",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Devanagari"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacters that linguistically modify the meaning of another\n character to which they apply.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "Diacritic",
          "package": "text-icu",
          "signature": "Diacritic",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Characters that linguistically modify the meaning of another character to which they apply",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Diacritic",
          "package": "text-icu",
          "partial": "Diacritic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Diacritic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Dingbats",
          "package": "text-icu",
          "signature": "Dingbats",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Dingbats",
          "package": "text-icu",
          "partial": "Dingbats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Dingbats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "DirNonSpacingMark",
          "package": "text-icu",
          "signature": "DirNonSpacingMark",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "DirNonSpacingMark",
          "package": "text-icu",
          "partial": "Dir Non Spacing Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:DirNonSpacingMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "DominoTiles",
          "package": "text-icu",
          "signature": "DominoTiles",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "DominoTiles",
          "package": "text-icu",
          "partial": "Domino Tiles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:DominoTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "DualJoining",
          "package": "text-icu",
          "signature": "DualJoining",
          "source": "src/Data-Text-ICU-Char.html#JoiningType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "DualJoining",
          "package": "text-icu",
          "partial": "Dual Joining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:DualJoining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "E",
          "package": "text-icu",
          "signature": "E",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "E",
          "package": "text-icu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EAAmbiguous",
          "package": "text-icu",
          "signature": "EAAmbiguous",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EAAmbiguous",
          "package": "text-icu",
          "partial": "EAAmbiguous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EAAmbiguous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EACount",
          "package": "text-icu",
          "signature": "EACount",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EACount",
          "package": "text-icu",
          "partial": "EACount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EACount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EAFull",
          "package": "text-icu",
          "signature": "EAFull",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EAFull",
          "package": "text-icu",
          "partial": "EAFull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EAFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EAHalf",
          "package": "text-icu",
          "signature": "EAHalf",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EAHalf",
          "package": "text-icu",
          "partial": "EAHalf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EAHalf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EANarrow",
          "package": "text-icu",
          "signature": "EANarrow",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EANarrow",
          "package": "text-icu",
          "partial": "EANarrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EANarrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EANeutral",
          "package": "text-icu",
          "signature": "EANeutral",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EANeutral",
          "package": "text-icu",
          "partial": "EANeutral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EANeutral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EAWide",
          "package": "text-icu",
          "signature": "EAWide",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EAWide",
          "package": "text-icu",
          "partial": "EAWide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EAWide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EastAsianWidth",
          "package": "text-icu",
          "signature": "EastAsianWidth",
          "source": "src/Data-Text-ICU-Char.html#EastAsianWidth_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EastAsianWidth",
          "package": "text-icu",
          "partial": "East Asian Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EastAsianWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EnclosedAlphanumerics",
          "package": "text-icu",
          "signature": "EnclosedAlphanumerics",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EnclosedAlphanumerics",
          "package": "text-icu",
          "partial": "Enclosed Alphanumerics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EnclosedAlphanumerics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EnclosedCJKLettersAndMonths",
          "package": "text-icu",
          "signature": "EnclosedCJKLettersAndMonths",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EnclosedCJKLettersAndMonths",
          "package": "text-icu",
          "partial": "Enclosed CJKLetters And Months",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EnclosedCJKLettersAndMonths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EnclosingMark",
          "package": "text-icu",
          "signature": "EnclosingMark",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EnclosingMark",
          "package": "text-icu",
          "partial": "Enclosing Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EnclosingMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EndPunctuation",
          "package": "text-icu",
          "signature": "EndPunctuation",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EndPunctuation",
          "package": "text-icu",
          "partial": "End Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EndPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Ethiopic",
          "package": "text-icu",
          "signature": "Ethiopic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Ethiopic",
          "package": "text-icu",
          "partial": "Ethiopic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Ethiopic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EthiopicExtended",
          "package": "text-icu",
          "signature": "EthiopicExtended",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EthiopicExtended",
          "package": "text-icu",
          "partial": "Ethiopic Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EthiopicExtended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EthiopicSupplement",
          "package": "text-icu",
          "signature": "EthiopicSupplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EthiopicSupplement",
          "package": "text-icu",
          "partial": "Ethiopic Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EthiopicSupplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EuropeanNumber",
          "package": "text-icu",
          "signature": "EuropeanNumber",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EuropeanNumber",
          "package": "text-icu",
          "partial": "European Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EuropeanNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EuropeanNumberSeparator",
          "package": "text-icu",
          "signature": "EuropeanNumberSeparator",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EuropeanNumberSeparator",
          "package": "text-icu",
          "partial": "European Number Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EuropeanNumberSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "EuropeanNumberTerminator",
          "package": "text-icu",
          "signature": "EuropeanNumberTerminator",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "EuropeanNumberTerminator",
          "package": "text-icu",
          "partial": "European Number Terminator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:EuropeanNumberTerminator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Exclamation",
          "package": "text-icu",
          "signature": "Exclamation",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Exclamation",
          "package": "text-icu",
          "partial": "Exclamation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Exclamation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Extend",
          "package": "text-icu",
          "signature": "Extend",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Extend",
          "package": "text-icu",
          "partial": "Extend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the value or shape of a preceding alphabetic character,\n e.g. length and iteration marks.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "Extender",
          "package": "text-icu",
          "signature": "Extender",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Extend the value or shape of preceding alphabetic character e.g length and iteration marks",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Extender",
          "package": "text-icu",
          "partial": "Extender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Extender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Fe",
          "package": "text-icu",
          "signature": "Fe",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Fe",
          "package": "text-icu",
          "partial": "Fe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Fe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Feh",
          "package": "text-icu",
          "signature": "Feh",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Feh",
          "package": "text-icu",
          "partial": "Feh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Feh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Final",
          "package": "text-icu",
          "signature": "Final",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Final",
          "package": "text-icu",
          "partial": "Final",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "FinalPunctuation",
          "package": "text-icu",
          "signature": "FinalPunctuation",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "FinalPunctuation",
          "package": "text-icu",
          "partial": "Final Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:FinalPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "FinalSemkath",
          "package": "text-icu",
          "signature": "FinalSemkath",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "FinalSemkath",
          "package": "text-icu",
          "partial": "Final Semkath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:FinalSemkath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Font",
          "package": "text-icu",
          "signature": "Font",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Font",
          "package": "text-icu",
          "partial": "Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "FormatChar",
          "package": "text-icu",
          "signature": "FormatChar",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "FormatChar",
          "package": "text-icu",
          "partial": "Format Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:FormatChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Fraction",
          "package": "text-icu",
          "signature": "Fraction",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Fraction",
          "package": "text-icu",
          "partial": "Fraction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Fraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "FullCompositionExclusion",
          "package": "text-icu",
          "signature": "FullCompositionExclusion",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "FullCompositionExclusion",
          "package": "text-icu",
          "partial": "Full Composition Exclusion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:FullCompositionExclusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Gaf",
          "package": "text-icu",
          "signature": "Gaf",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Gaf",
          "package": "text-icu",
          "partial": "Gaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Gaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Gamal",
          "package": "text-icu",
          "signature": "Gamal",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Gamal",
          "package": "text-icu",
          "partial": "Gamal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Gamal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GeneralCategory",
          "package": "text-icu",
          "signature": "GeneralCategory",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GeneralCategory",
          "package": "text-icu",
          "partial": "General Category",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GeneralCategory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GeneralOtherType",
          "package": "text-icu",
          "signature": "GeneralOtherType",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GeneralOtherType",
          "package": "text-icu",
          "partial": "General Other Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GeneralOtherType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GeneralPunctuation",
          "package": "text-icu",
          "signature": "GeneralPunctuation",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GeneralPunctuation",
          "package": "text-icu",
          "partial": "General Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GeneralPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GeometricShapes",
          "package": "text-icu",
          "signature": "GeometricShapes",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GeometricShapes",
          "package": "text-icu",
          "partial": "Geometric Shapes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GeometricShapes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Georgian",
          "package": "text-icu",
          "signature": "Georgian",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Georgian",
          "package": "text-icu",
          "partial": "Georgian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Georgian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GeorgianSupplement",
          "package": "text-icu",
          "signature": "GeorgianSupplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GeorgianSupplement",
          "package": "text-icu",
          "partial": "Georgian Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GeorgianSupplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Glagolitic",
          "package": "text-icu",
          "signature": "Glagolitic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Glagolitic",
          "package": "text-icu",
          "partial": "Glagolitic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Glagolitic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Glue",
          "package": "text-icu",
          "signature": "Glue",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Glue",
          "package": "text-icu",
          "partial": "Glue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Glue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Gothic",
          "package": "text-icu",
          "signature": "Gothic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Gothic",
          "package": "text-icu",
          "partial": "Gothic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Gothic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor programmatic determination of grapheme cluster boundaries.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeBase",
          "package": "text-icu",
          "signature": "GraphemeBase",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "For programmatic determination of grapheme cluster boundaries",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeBase",
          "package": "text-icu",
          "partial": "Grapheme Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GraphemeBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeClusterBreak",
          "package": "text-icu",
          "signature": "GraphemeClusterBreak",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeClusterBreak",
          "package": "text-icu",
          "partial": "Grapheme Cluster Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GraphemeClusterBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor programmatic determination of grapheme cluster boundaries.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeExtend",
          "package": "text-icu",
          "signature": "GraphemeExtend",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "For programmatic determination of grapheme cluster boundaries",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeExtend",
          "package": "text-icu",
          "partial": "Grapheme Extend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GraphemeExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor programmatic determination of grapheme cluster boundaries.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeLink",
          "package": "text-icu",
          "signature": "GraphemeLink",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "For programmatic determination of grapheme cluster boundaries",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GraphemeLink",
          "package": "text-icu",
          "partial": "Grapheme Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GraphemeLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GreekAndCoptic",
          "package": "text-icu",
          "signature": "GreekAndCoptic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GreekAndCoptic",
          "package": "text-icu",
          "partial": "Greek And Coptic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GreekAndCoptic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "GreekExtended",
          "package": "text-icu",
          "signature": "GreekExtended",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "GreekExtended",
          "package": "text-icu",
          "partial": "Greek Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:GreekExtended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Gujarati",
          "package": "text-icu",
          "signature": "Gujarati",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Gujarati",
          "package": "text-icu",
          "partial": "Gujarati",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Gujarati"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Gurmukhi",
          "package": "text-icu",
          "signature": "Gurmukhi",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Gurmukhi",
          "package": "text-icu",
          "partial": "Gurmukhi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Gurmukhi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "H2",
          "package": "text-icu",
          "signature": "H2",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "H2",
          "package": "text-icu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:H2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "H3",
          "package": "text-icu",
          "signature": "H3",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "H3",
          "package": "text-icu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:H3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Hah",
          "package": "text-icu",
          "signature": "Hah",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Hah",
          "package": "text-icu",
          "partial": "Hah",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Hah"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HalfwidthAndFullwidthForms",
          "package": "text-icu",
          "signature": "HalfwidthAndFullwidthForms",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HalfwidthAndFullwidthForms",
          "package": "text-icu",
          "partial": "Halfwidth And Fullwidth Forms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HalfwidthAndFullwidthForms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HamzaOnHehGoal",
          "package": "text-icu",
          "signature": "HamzaOnHehGoal",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HamzaOnHehGoal",
          "package": "text-icu",
          "partial": "Hamza On Heh Goal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HamzaOnHehGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HangulCompatibilityJamo",
          "package": "text-icu",
          "signature": "HangulCompatibilityJamo",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HangulCompatibilityJamo",
          "package": "text-icu",
          "partial": "Hangul Compatibility Jamo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HangulCompatibilityJamo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HangulJamo",
          "package": "text-icu",
          "signature": "HangulJamo",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HangulJamo",
          "package": "text-icu",
          "partial": "Hangul Jamo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HangulJamo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HangulSyllableType",
          "package": "text-icu",
          "signature": "HangulSyllableType",
          "source": "src/Data-Text-ICU-Char.html#HangulSyllableType_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HangulSyllableType",
          "package": "text-icu",
          "partial": "Hangul Syllable Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HangulSyllableType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HangulSyllables",
          "package": "text-icu",
          "signature": "HangulSyllables",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HangulSyllables",
          "package": "text-icu",
          "partial": "Hangul Syllables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HangulSyllables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Hanunoo",
          "package": "text-icu",
          "signature": "Hanunoo",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Hanunoo",
          "package": "text-icu",
          "partial": "Hanunoo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Hanunoo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "He",
          "package": "text-icu",
          "signature": "He",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "He",
          "package": "text-icu",
          "partial": "He",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:He"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Hebrew",
          "package": "text-icu",
          "signature": "Hebrew",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Hebrew",
          "package": "text-icu",
          "partial": "Hebrew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Hebrew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Heh",
          "package": "text-icu",
          "signature": "Heh",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Heh",
          "package": "text-icu",
          "partial": "Heh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Heh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HehGoal",
          "package": "text-icu",
          "signature": "HehGoal",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HehGoal",
          "package": "text-icu",
          "partial": "Heh Goal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HehGoal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Heth",
          "package": "text-icu",
          "signature": "Heth",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Heth",
          "package": "text-icu",
          "partial": "Heth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Heth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacters commonly used for hexadecimal numbers.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "HexDigit",
          "package": "text-icu",
          "signature": "HexDigit",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Characters commonly used for hexadecimal numbers",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HexDigit",
          "package": "text-icu",
          "partial": "Hex Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HighPrivateUseSurrogates",
          "package": "text-icu",
          "signature": "HighPrivateUseSurrogates",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HighPrivateUseSurrogates",
          "package": "text-icu",
          "partial": "High Private Use Surrogates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HighPrivateUseSurrogates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "HighSurrogates",
          "package": "text-icu",
          "signature": "HighSurrogates",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "HighSurrogates",
          "package": "text-icu",
          "partial": "High Surrogates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:HighSurrogates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Hiragana",
          "package": "text-icu",
          "signature": "Hiragana",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Hiragana",
          "package": "text-icu",
          "partial": "Hiragana",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Hiragana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDashes used to mark connections between pieces of words, plus the\n Katakana middle dot.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "Hyphen",
          "package": "text-icu",
          "signature": "Hyphen",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Dashes used to mark connections between pieces of words plus the Katakana middle dot",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Hyphen",
          "package": "text-icu",
          "partial": "Hyphen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Hyphen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacters that can continue an identifier.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "IDContinue",
          "package": "text-icu",
          "signature": "IDContinue",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Characters that can continue an identifier",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "IDContinue",
          "package": "text-icu",
          "partial": "IDContinue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:IDContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor programmatic determination of Ideographic Description Sequences.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "IDSBinaryOperator",
          "package": "text-icu",
          "signature": "IDSBinaryOperator",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "For programmatic determination of Ideographic Description Sequences",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "IDSBinaryOperator",
          "package": "text-icu",
          "partial": "IDSBinary Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:IDSBinaryOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "IDSTrinaryOperator",
          "package": "text-icu",
          "signature": "IDSTrinaryOperator",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "IDSTrinaryOperator",
          "package": "text-icu",
          "partial": "IDSTrinary Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:IDSTrinaryOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacters that can start an identifier.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "IDStart",
          "package": "text-icu",
          "signature": "IDStart",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Characters that can start an identifier",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "IDStart",
          "package": "text-icu",
          "partial": "IDStart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:IDStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "IPAExtensions",
          "package": "text-icu",
          "signature": "IPAExtensions",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "IPAExtensions",
          "package": "text-icu",
          "partial": "IPAExtensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:IPAExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCJKV ideographs.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "Ideographic",
          "package": "text-icu",
          "signature": "Ideographic",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "CJKV ideographs",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Ideographic",
          "package": "text-icu",
          "partial": "Ideographic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Ideographic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "IdeographicDescriptionCharacters",
          "package": "text-icu",
          "signature": "IdeographicDescriptionCharacters",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "IdeographicDescriptionCharacters",
          "package": "text-icu",
          "partial": "Ideographic Description Characters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:IdeographicDescriptionCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "InfixNumeric",
          "package": "text-icu",
          "signature": "InfixNumeric",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "InfixNumeric",
          "package": "text-icu",
          "partial": "Infix Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:InfixNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Initial",
          "package": "text-icu",
          "signature": "Initial",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Initial",
          "package": "text-icu",
          "partial": "Initial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "InitialPunctuation",
          "package": "text-icu",
          "signature": "InitialPunctuation",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "InitialPunctuation",
          "package": "text-icu",
          "partial": "Initial Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:InitialPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Inseparable",
          "package": "text-icu",
          "signature": "Inseparable",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Inseparable",
          "package": "text-icu",
          "partial": "Inseparable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Inseparable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Isolated",
          "package": "text-icu",
          "signature": "Isolated",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Isolated",
          "package": "text-icu",
          "partial": "Isolated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Isolated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JL",
          "package": "text-icu",
          "signature": "JL",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JL",
          "package": "text-icu",
          "partial": "JL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:JL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JT",
          "package": "text-icu",
          "signature": "JT",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JT",
          "package": "text-icu",
          "partial": "JT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:JT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JV",
          "package": "text-icu",
          "signature": "JV",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JV",
          "package": "text-icu",
          "partial": "JV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:JV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JoinCausing",
          "package": "text-icu",
          "signature": "JoinCausing",
          "source": "src/Data-Text-ICU-Char.html#JoiningType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JoinCausing",
          "package": "text-icu",
          "partial": "Join Causing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:JoinCausing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat controls for cursive joining and ligation.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "JoinControl",
          "package": "text-icu",
          "signature": "JoinControl",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Format controls for cursive joining and ligation",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JoinControl",
          "package": "text-icu",
          "partial": "Join Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:JoinControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JoiningGroup",
          "package": "text-icu",
          "signature": "JoiningGroup",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JoiningGroup",
          "package": "text-icu",
          "partial": "Joining Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:JoiningGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "JoiningType",
          "package": "text-icu",
          "signature": "JoiningType",
          "source": "src/Data-Text-ICU-Char.html#JoiningType_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "JoiningType",
          "package": "text-icu",
          "partial": "Joining Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:JoiningType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Kaf",
          "package": "text-icu",
          "signature": "Kaf",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Kaf",
          "package": "text-icu",
          "partial": "Kaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Kaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Kanbun",
          "package": "text-icu",
          "signature": "Kanbun",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Kanbun",
          "package": "text-icu",
          "partial": "Kanbun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Kanbun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "KangxiRadicals",
          "package": "text-icu",
          "signature": "KangxiRadicals",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "KangxiRadicals",
          "package": "text-icu",
          "partial": "Kangxi Radicals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:KangxiRadicals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Kannada",
          "package": "text-icu",
          "signature": "Kannada",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Kannada",
          "package": "text-icu",
          "partial": "Kannada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Kannada"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Kaph",
          "package": "text-icu",
          "signature": "Kaph",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Kaph",
          "package": "text-icu",
          "partial": "Kaph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Kaph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Katakana",
          "package": "text-icu",
          "signature": "Katakana",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Katakana",
          "package": "text-icu",
          "partial": "Katakana",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Katakana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "KatakanaPhoneticExtensions",
          "package": "text-icu",
          "signature": "KatakanaPhoneticExtensions",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "KatakanaPhoneticExtensions",
          "package": "text-icu",
          "partial": "Katakana Phonetic Extensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:KatakanaPhoneticExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "KayahLi",
          "package": "text-icu",
          "signature": "KayahLi",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "KayahLi",
          "package": "text-icu",
          "partial": "Kayah Li",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:KayahLi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Khaph",
          "package": "text-icu",
          "signature": "Khaph",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Khaph",
          "package": "text-icu",
          "partial": "Khaph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Khaph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Kharoshthi",
          "package": "text-icu",
          "signature": "Kharoshthi",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Kharoshthi",
          "package": "text-icu",
          "partial": "Kharoshthi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Kharoshthi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Khmer",
          "package": "text-icu",
          "signature": "Khmer",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Khmer",
          "package": "text-icu",
          "partial": "Khmer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Khmer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "KhmerSymbols",
          "package": "text-icu",
          "signature": "KhmerSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "KhmerSymbols",
          "package": "text-icu",
          "partial": "Khmer Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:KhmerSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "KnottedHeh",
          "package": "text-icu",
          "signature": "KnottedHeh",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "KnottedHeh",
          "package": "text-icu",
          "partial": "Knotted Heh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:KnottedHeh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "L",
          "package": "text-icu",
          "signature": "L",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "L",
          "package": "text-icu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LBAlphabetic",
          "package": "text-icu",
          "signature": "LBAlphabetic",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LBAlphabetic",
          "package": "text-icu",
          "partial": "LBAlphabetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LBAlphabetic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LBHyphen",
          "package": "text-icu",
          "signature": "LBHyphen",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LBHyphen",
          "package": "text-icu",
          "partial": "LBHyphen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LBHyphen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LBIdeographic",
          "package": "text-icu",
          "signature": "LBIdeographic",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LBIdeographic",
          "package": "text-icu",
          "partial": "LBIdeographic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LBIdeographic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LBSurrogate",
          "package": "text-icu",
          "signature": "LBSurrogate",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LBSurrogate",
          "package": "text-icu",
          "partial": "LBSurrogate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LBSurrogate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LF",
          "package": "text-icu",
          "signature": "LF",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LF",
          "package": "text-icu",
          "partial": "LF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LV",
          "package": "text-icu",
          "signature": "LV",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LV",
          "package": "text-icu",
          "partial": "LV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LVSyllable",
          "package": "text-icu",
          "signature": "LVSyllable",
          "source": "src/Data-Text-ICU-Char.html#HangulSyllableType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LVSyllable",
          "package": "text-icu",
          "partial": "LVSyllable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LVSyllable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LVT",
          "package": "text-icu",
          "signature": "LVT",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LVT",
          "package": "text-icu",
          "partial": "LVT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LVT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LVTSyllable",
          "package": "text-icu",
          "signature": "LVTSyllable",
          "source": "src/Data-Text-ICU-Char.html#HangulSyllableType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LVTSyllable",
          "package": "text-icu",
          "partial": "LVTSyllable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LVTSyllable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Lam",
          "package": "text-icu",
          "signature": "Lam",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Lam",
          "package": "text-icu",
          "partial": "Lam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Lam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Lamadh",
          "package": "text-icu",
          "signature": "Lamadh",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Lamadh",
          "package": "text-icu",
          "partial": "Lamadh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Lamadh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Lao",
          "package": "text-icu",
          "signature": "Lao",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Lao",
          "package": "text-icu",
          "partial": "Lao",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Lao"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Latin1Supplement",
          "package": "text-icu",
          "signature": "Latin1Supplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Latin1Supplement",
          "package": "text-icu",
          "partial": "Latin Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Latin1Supplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedA",
          "package": "text-icu",
          "signature": "LatinExtendedA",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedA",
          "package": "text-icu",
          "partial": "Latin Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LatinExtendedA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedAdditional",
          "package": "text-icu",
          "signature": "LatinExtendedAdditional",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedAdditional",
          "package": "text-icu",
          "partial": "Latin Extended Additional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LatinExtendedAdditional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedB",
          "package": "text-icu",
          "signature": "LatinExtendedB",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedB",
          "package": "text-icu",
          "partial": "Latin Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LatinExtendedB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedC",
          "package": "text-icu",
          "signature": "LatinExtendedC",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedC",
          "package": "text-icu",
          "partial": "Latin Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LatinExtendedC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedD",
          "package": "text-icu",
          "signature": "LatinExtendedD",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LatinExtendedD",
          "package": "text-icu",
          "partial": "Latin Extended",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LatinExtendedD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LeadCanonicalCombiningClass",
          "package": "text-icu",
          "signature": "LeadCanonicalCombiningClass",
          "source": "src/Data-Text-ICU-Char.html#LeadCanonicalCombiningClass_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LeadCanonicalCombiningClass",
          "package": "text-icu",
          "partial": "Lead Canonical Combining Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LeadCanonicalCombiningClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LeadingJamo",
          "package": "text-icu",
          "signature": "LeadingJamo",
          "source": "src/Data-Text-ICU-Char.html#HangulSyllableType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LeadingJamo",
          "package": "text-icu",
          "partial": "Leading Jamo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LeadingJamo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LeftJoining",
          "package": "text-icu",
          "signature": "LeftJoining",
          "source": "src/Data-Text-ICU-Char.html#JoiningType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LeftJoining",
          "package": "text-icu",
          "partial": "Left Joining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LeftJoining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LeftToRight",
          "package": "text-icu",
          "signature": "LeftToRight",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LeftToRight",
          "package": "text-icu",
          "partial": "Left To Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LeftToRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LeftToRightEmbedding",
          "package": "text-icu",
          "signature": "LeftToRightEmbedding",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LeftToRightEmbedding",
          "package": "text-icu",
          "partial": "Left To Right Embedding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LeftToRightEmbedding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LeftToRightOverride",
          "package": "text-icu",
          "signature": "LeftToRightOverride",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LeftToRightOverride",
          "package": "text-icu",
          "partial": "Left To Right Override",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LeftToRightOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Lepcha",
          "package": "text-icu",
          "signature": "Lepcha",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Lepcha",
          "package": "text-icu",
          "partial": "Lepcha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Lepcha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LetterNumber",
          "package": "text-icu",
          "signature": "LetterNumber",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LetterNumber",
          "package": "text-icu",
          "partial": "Letter Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LetterNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LetterlikeSymbols",
          "package": "text-icu",
          "signature": "LetterlikeSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LetterlikeSymbols",
          "package": "text-icu",
          "partial": "Letterlike Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LetterlikeSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Limbu",
          "package": "text-icu",
          "signature": "Limbu",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Limbu",
          "package": "text-icu",
          "partial": "Limbu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Limbu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LineBreak",
          "package": "text-icu",
          "signature": "LineBreak",
          "source": "src/Data-Text-ICU-Char.html#LineBreak_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LineBreak",
          "package": "text-icu",
          "partial": "Line Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LineBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LineFeed",
          "package": "text-icu",
          "signature": "LineFeed",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LineFeed",
          "package": "text-icu",
          "partial": "Line Feed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LineFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LineSeparator",
          "package": "text-icu",
          "signature": "LineSeparator",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LineSeparator",
          "package": "text-icu",
          "partial": "Line Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LineSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LinearBIdeograms",
          "package": "text-icu",
          "signature": "LinearBIdeograms",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LinearBIdeograms",
          "package": "text-icu",
          "partial": "Linear BIdeograms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LinearBIdeograms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LinearBSyllabary",
          "package": "text-icu",
          "signature": "LinearBSyllabary",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LinearBSyllabary",
          "package": "text-icu",
          "partial": "Linear BSyllabary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LinearBSyllabary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacters that do not use logical order and require special handling\n in most processing.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "LogicalOrderException",
          "package": "text-icu",
          "signature": "LogicalOrderException",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Characters that do not use logical order and require special handling in most processing",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LogicalOrderException",
          "package": "text-icu",
          "partial": "Logical Order Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LogicalOrderException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LowSurrogates",
          "package": "text-icu",
          "signature": "LowSurrogates",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LowSurrogates",
          "package": "text-icu",
          "partial": "Low Surrogates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LowSurrogates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Lowercase",
          "package": "text-icu",
          "signature": "Lowercase",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Lowercase",
          "package": "text-icu",
          "partial": "Lowercase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Lowercase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "LowercaseLetter",
          "package": "text-icu",
          "signature": "LowercaseLetter",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "LowercaseLetter",
          "package": "text-icu",
          "partial": "Lowercase Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:LowercaseLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Lycian",
          "package": "text-icu",
          "signature": "Lycian",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Lycian",
          "package": "text-icu",
          "partial": "Lycian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Lycian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Lydian",
          "package": "text-icu",
          "signature": "Lydian",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Lydian",
          "package": "text-icu",
          "partial": "Lydian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Lydian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MahjongTiles",
          "package": "text-icu",
          "signature": "MahjongTiles",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MahjongTiles",
          "package": "text-icu",
          "partial": "Mahjong Tiles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MahjongTiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Malayalam",
          "package": "text-icu",
          "signature": "Malayalam",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Malayalam",
          "package": "text-icu",
          "partial": "Malayalam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Malayalam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MandatoryBreak",
          "package": "text-icu",
          "signature": "MandatoryBreak",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MandatoryBreak",
          "package": "text-icu",
          "partial": "Mandatory Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MandatoryBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Math",
          "package": "text-icu",
          "signature": "Math",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Math",
          "package": "text-icu",
          "partial": "Math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Math"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MathSymbol",
          "package": "text-icu",
          "signature": "MathSymbol",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MathSymbol",
          "package": "text-icu",
          "partial": "Math Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MathSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MathematicalAlphanumericSymbols",
          "package": "text-icu",
          "signature": "MathematicalAlphanumericSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MathematicalAlphanumericSymbols",
          "package": "text-icu",
          "partial": "Mathematical Alphanumeric Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MathematicalAlphanumericSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MathematicalOperators",
          "package": "text-icu",
          "signature": "MathematicalOperators",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MathematicalOperators",
          "package": "text-icu",
          "partial": "Mathematical Operators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MathematicalOperators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Medial",
          "package": "text-icu",
          "signature": "Medial",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Medial",
          "package": "text-icu",
          "partial": "Medial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Medial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Meem",
          "package": "text-icu",
          "signature": "Meem",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Meem",
          "package": "text-icu",
          "partial": "Meem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Meem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Mim",
          "package": "text-icu",
          "signature": "Mim",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Mim",
          "package": "text-icu",
          "partial": "Mim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Mim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousMathematicalSymbolsA",
          "package": "text-icu",
          "signature": "MiscellaneousMathematicalSymbolsA",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousMathematicalSymbolsA",
          "package": "text-icu",
          "partial": "Miscellaneous Mathematical Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MiscellaneousMathematicalSymbolsA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousMathematicalSymbolsB",
          "package": "text-icu",
          "signature": "MiscellaneousMathematicalSymbolsB",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousMathematicalSymbolsB",
          "package": "text-icu",
          "partial": "Miscellaneous Mathematical Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MiscellaneousMathematicalSymbolsB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousSymbols",
          "package": "text-icu",
          "signature": "MiscellaneousSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousSymbols",
          "package": "text-icu",
          "partial": "Miscellaneous Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MiscellaneousSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousSymbolsAndArrows",
          "package": "text-icu",
          "signature": "MiscellaneousSymbolsAndArrows",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousSymbolsAndArrows",
          "package": "text-icu",
          "partial": "Miscellaneous Symbols And Arrows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MiscellaneousSymbolsAndArrows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousTechnical",
          "package": "text-icu",
          "signature": "MiscellaneousTechnical",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MiscellaneousTechnical",
          "package": "text-icu",
          "partial": "Miscellaneous Technical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MiscellaneousTechnical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ModifierLetter",
          "package": "text-icu",
          "signature": "ModifierLetter",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ModifierLetter",
          "package": "text-icu",
          "partial": "Modifier Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ModifierLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ModifierSymbol",
          "package": "text-icu",
          "signature": "ModifierSymbol",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ModifierSymbol",
          "package": "text-icu",
          "partial": "Modifier Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ModifierSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ModifierToneLetters",
          "package": "text-icu",
          "signature": "ModifierToneLetters",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ModifierToneLetters",
          "package": "text-icu",
          "partial": "Modifier Tone Letters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ModifierToneLetters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Mongolian",
          "package": "text-icu",
          "signature": "Mongolian",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Mongolian",
          "package": "text-icu",
          "partial": "Mongolian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Mongolian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "MusicalSymbols",
          "package": "text-icu",
          "signature": "MusicalSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "MusicalSymbols",
          "package": "text-icu",
          "partial": "Musical Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:MusicalSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Myanmar",
          "package": "text-icu",
          "signature": "Myanmar",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Myanmar",
          "package": "text-icu",
          "partial": "Myanmar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Myanmar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "N'Ko",
          "package": "text-icu",
          "signature": "N'Ko",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "N'Ko",
          "package": "text-icu",
          "partial": "N' Ko",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:N-39-Ko"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eICU-specific property for characters that are inert under NFC,\n i.e. they do not interact with adjacent characters.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "NFCInert",
          "package": "text-icu",
          "signature": "NFCInert",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "ICU-specific property for characters that are inert under NFC i.e they do not interact with adjacent characters",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFCInert",
          "package": "text-icu",
          "partial": "NFCInert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NFCInert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NFCQuickCheck",
          "package": "text-icu",
          "signature": "NFCQuickCheck",
          "source": "src/Data-Text-ICU-Char.html#NFCQuickCheck_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFCQuickCheck",
          "package": "text-icu",
          "partial": "NFCQuick Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NFCQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eICU-specific property for characters that are inert under NFD, i.e.\n they do not interact with adjacent characters.  Used for example in\n normalizing transforms in incremental mode to find the boundary of\n safely normalizable text despite possible text additions.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "NFDInert",
          "package": "text-icu",
          "signature": "NFDInert",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "ICU-specific property for characters that are inert under NFD i.e they do not interact with adjacent characters Used for example in normalizing transforms in incremental mode to find the boundary of safely normalizable text despite possible text additions",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFDInert",
          "package": "text-icu",
          "partial": "NFDInert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NFDInert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NFDQuickCheck",
          "package": "text-icu",
          "signature": "NFDQuickCheck",
          "source": "src/Data-Text-ICU-Char.html#NFDQuickCheck_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFDQuickCheck",
          "package": "text-icu",
          "partial": "NFDQuick Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NFDQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eICU-specific property for characters that are inert under NFKC,\n i.e. they do not interact with adjacent characters.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "NFKCInert",
          "package": "text-icu",
          "signature": "NFKCInert",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "ICU-specific property for characters that are inert under NFKC i.e they do not interact with adjacent characters",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFKCInert",
          "package": "text-icu",
          "partial": "NFKCInert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NFKCInert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NFKCQuickCheck",
          "package": "text-icu",
          "signature": "NFKCQuickCheck",
          "source": "src/Data-Text-ICU-Char.html#NFKCQuickCheck_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFKCQuickCheck",
          "package": "text-icu",
          "partial": "NFKCQuick Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NFKCQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eICU-specific property for characters that are inert under NFKD, i.e.\n they do not interact with adjacent characters.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "NFKDInert",
          "package": "text-icu",
          "signature": "NFKDInert",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "ICU-specific property for characters that are inert under NFKD i.e they do not interact with adjacent characters",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFKDInert",
          "package": "text-icu",
          "partial": "NFKDInert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NFKDInert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NFKDQuickCheck",
          "package": "text-icu",
          "signature": "NFKDQuickCheck",
          "source": "src/Data-Text-ICU-Char.html#NFKDQuickCheck_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NFKDQuickCheck",
          "package": "text-icu",
          "partial": "NFKDQuick Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NFKDQuickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NTDecimal",
          "package": "text-icu",
          "signature": "NTDecimal",
          "source": "src/Data-Text-ICU-Char.html#NumericType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NTDecimal",
          "package": "text-icu",
          "partial": "NTDecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NTDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NTDigit",
          "package": "text-icu",
          "signature": "NTDigit",
          "source": "src/Data-Text-ICU-Char.html#NumericType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NTDigit",
          "package": "text-icu",
          "partial": "NTDigit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NTDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NTNumeric",
          "package": "text-icu",
          "signature": "NTNumeric",
          "source": "src/Data-Text-ICU-Char.html#NumericType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NTNumeric",
          "package": "text-icu",
          "partial": "NTNumeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NTNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Narrow",
          "package": "text-icu",
          "signature": "Narrow",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Narrow",
          "package": "text-icu",
          "partial": "Narrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Narrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NewTaiLue",
          "package": "text-icu",
          "signature": "NewTaiLue",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NewTaiLue",
          "package": "text-icu",
          "partial": "New Tai Lue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NewTaiLue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NextLine",
          "package": "text-icu",
          "signature": "NextLine",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NextLine",
          "package": "text-icu",
          "partial": "Next Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NextLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NoBlock",
          "package": "text-icu",
          "signature": "NoBlock",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NoBlock",
          "package": "text-icu",
          "partial": "No Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NoBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NoBreak",
          "package": "text-icu",
          "signature": "NoBreak",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NoBreak",
          "package": "text-icu",
          "partial": "No Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NoBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode points that are explicitly defined as illegal for the encoding\n of characters.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "NonCharacter",
          "package": "text-icu",
          "signature": "NonCharacter",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Code points that are explicitly defined as illegal for the encoding of characters",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NonCharacter",
          "package": "text-icu",
          "partial": "Non Character",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NonCharacter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NonSpacingMark",
          "package": "text-icu",
          "signature": "NonSpacingMark",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NonSpacingMark",
          "package": "text-icu",
          "partial": "Non Spacing Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NonSpacingMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Nonstarter",
          "package": "text-icu",
          "signature": "Nonstarter",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Nonstarter",
          "package": "text-icu",
          "partial": "Nonstarter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Nonstarter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Noon",
          "package": "text-icu",
          "signature": "Noon",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Noon",
          "package": "text-icu",
          "partial": "Noon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Noon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NumberForms",
          "package": "text-icu",
          "signature": "NumberForms",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NumberForms",
          "package": "text-icu",
          "partial": "Number Forms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NumberForms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Numeric",
          "package": "text-icu",
          "signature": "Numeric",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Numeric",
          "package": "text-icu",
          "partial": "Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "NumericType",
          "package": "text-icu",
          "signature": "NumericType",
          "source": "src/Data-Text-ICU-Char.html#NumericType_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "NumericType",
          "package": "text-icu",
          "partial": "Numeric Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:NumericType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Nun",
          "package": "text-icu",
          "signature": "Nun",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Nun",
          "package": "text-icu",
          "partial": "Nun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Nun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Ogham",
          "package": "text-icu",
          "signature": "Ogham",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Ogham",
          "package": "text-icu",
          "partial": "Ogham",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Ogham"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OlChiki",
          "package": "text-icu",
          "signature": "OlChiki",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OlChiki",
          "package": "text-icu",
          "partial": "Ol Chiki",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OlChiki"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OldItalic",
          "package": "text-icu",
          "signature": "OldItalic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OldItalic",
          "package": "text-icu",
          "partial": "Old Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OldItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OldPersian",
          "package": "text-icu",
          "signature": "OldPersian",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OldPersian",
          "package": "text-icu",
          "partial": "Old Persian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OldPersian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OpenPunctuation",
          "package": "text-icu",
          "signature": "OpenPunctuation",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OpenPunctuation",
          "package": "text-icu",
          "partial": "Open Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OpenPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OpticalCharacterRecognition",
          "package": "text-icu",
          "signature": "OpticalCharacterRecognition",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OpticalCharacterRecognition",
          "package": "text-icu",
          "partial": "Optical Character Recognition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OpticalCharacterRecognition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Oriya",
          "package": "text-icu",
          "signature": "Oriya",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Oriya",
          "package": "text-icu",
          "partial": "Oriya",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Oriya"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Osmanya",
          "package": "text-icu",
          "signature": "Osmanya",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Osmanya",
          "package": "text-icu",
          "partial": "Osmanya",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Osmanya"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OtherLetter",
          "package": "text-icu",
          "signature": "OtherLetter",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OtherLetter",
          "package": "text-icu",
          "partial": "Other Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OtherLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OtherNeutral",
          "package": "text-icu",
          "signature": "OtherNeutral",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OtherNeutral",
          "package": "text-icu",
          "partial": "Other Neutral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OtherNeutral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OtherNumber",
          "package": "text-icu",
          "signature": "OtherNumber",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OtherNumber",
          "package": "text-icu",
          "partial": "Other Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OtherNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OtherPunctuation",
          "package": "text-icu",
          "signature": "OtherPunctuation",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OtherPunctuation",
          "package": "text-icu",
          "partial": "Other Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OtherPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "OtherSymbol",
          "package": "text-icu",
          "signature": "OtherSymbol",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "OtherSymbol",
          "package": "text-icu",
          "partial": "Other Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:OtherSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlphanumeric character class.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXAlNum",
          "package": "text-icu",
          "signature": "POSIXAlNum",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Alphanumeric character class",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXAlNum",
          "package": "text-icu",
          "partial": "POSIXAl Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:POSIXAlNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlank character class.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXBlank",
          "package": "text-icu",
          "signature": "POSIXBlank",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Blank character class",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXBlank",
          "package": "text-icu",
          "partial": "POSIXBlank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:POSIXBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGraph character class.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXGraph",
          "package": "text-icu",
          "signature": "POSIXGraph",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Graph character class",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXGraph",
          "package": "text-icu",
          "partial": "POSIXGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:POSIXGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrintable character class.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXPrint",
          "package": "text-icu",
          "signature": "POSIXPrint",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Printable character class",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXPrint",
          "package": "text-icu",
          "partial": "POSIXPrint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:POSIXPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHex digit character class.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXXDigit",
          "package": "text-icu",
          "signature": "POSIXXDigit",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Hex digit character class",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "POSIXXDigit",
          "package": "text-icu",
          "partial": "POSIXXDigit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:POSIXXDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ParagraphSeparator",
          "package": "text-icu",
          "signature": "ParagraphSeparator",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ParagraphSeparator",
          "package": "text-icu",
          "partial": "Paragraph Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ParagraphSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee UAX #31 Identifier and Pattern Syntax\n \u003ca\u003ehttp://www.unicode.org/reports/tr31/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "PatternSyntax",
          "package": "text-icu",
          "signature": "PatternSyntax",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "See UAX Identifier and Pattern Syntax http www.unicode.org reports tr31",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PatternSyntax",
          "package": "text-icu",
          "partial": "Pattern Syntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PatternSyntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee UAX #31 Identifier and Pattern Syntax\n \u003ca\u003ehttp://www.unicode.org/reports/tr31/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "PatternWhiteSpace",
          "package": "text-icu",
          "signature": "PatternWhiteSpace",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "See UAX Identifier and Pattern Syntax http www.unicode.org reports tr31",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PatternWhiteSpace",
          "package": "text-icu",
          "partial": "Pattern White Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PatternWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Pe",
          "package": "text-icu",
          "signature": "Pe",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Pe",
          "package": "text-icu",
          "partial": "Pe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Pe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "PhagsPa",
          "package": "text-icu",
          "signature": "PhagsPa",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PhagsPa",
          "package": "text-icu",
          "partial": "Phags Pa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PhagsPa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "PhaistosDisc",
          "package": "text-icu",
          "signature": "PhaistosDisc",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PhaistosDisc",
          "package": "text-icu",
          "partial": "Phaistos Disc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PhaistosDisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Phoenician",
          "package": "text-icu",
          "signature": "Phoenician",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Phoenician",
          "package": "text-icu",
          "partial": "Phoenician",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Phoenician"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "PhoneticExtensions",
          "package": "text-icu",
          "signature": "PhoneticExtensions",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PhoneticExtensions",
          "package": "text-icu",
          "partial": "Phonetic Extensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PhoneticExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "PhoneticExtensionsSupplement",
          "package": "text-icu",
          "signature": "PhoneticExtensionsSupplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PhoneticExtensionsSupplement",
          "package": "text-icu",
          "partial": "Phonetic Extensions Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PhoneticExtensionsSupplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "PopDirectionalFormat",
          "package": "text-icu",
          "signature": "PopDirectionalFormat",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PopDirectionalFormat",
          "package": "text-icu",
          "partial": "Pop Directional Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PopDirectionalFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "PostfixNumeric",
          "package": "text-icu",
          "signature": "PostfixNumeric",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PostfixNumeric",
          "package": "text-icu",
          "partial": "Postfix Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PostfixNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "PrefixNumeric",
          "package": "text-icu",
          "signature": "PrefixNumeric",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PrefixNumeric",
          "package": "text-icu",
          "partial": "Prefix Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PrefixNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Prepend",
          "package": "text-icu",
          "signature": "Prepend",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Prepend",
          "package": "text-icu",
          "partial": "Prepend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Prepend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "PrivateUseArea",
          "package": "text-icu",
          "signature": "PrivateUseArea",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PrivateUseArea",
          "package": "text-icu",
          "partial": "Private Use Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PrivateUseArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "PrivateUseChar",
          "package": "text-icu",
          "signature": "PrivateUseChar",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "PrivateUseChar",
          "package": "text-icu",
          "partial": "Private Use Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:PrivateUseChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Qaf",
          "package": "text-icu",
          "signature": "Qaf",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Qaf",
          "package": "text-icu",
          "partial": "Qaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Qaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Qaph",
          "package": "text-icu",
          "signature": "Qaph",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Qaph",
          "package": "text-icu",
          "partial": "Qaph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Qaph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Quotation",
          "package": "text-icu",
          "signature": "Quotation",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Quotation",
          "package": "text-icu",
          "partial": "Quotation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Quotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "QuotationMark",
          "package": "text-icu",
          "signature": "QuotationMark",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "QuotationMark",
          "package": "text-icu",
          "partial": "Quotation Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:QuotationMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor programmatic determination of Ideographic Description Sequences.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "Radical",
          "package": "text-icu",
          "signature": "Radical",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "For programmatic determination of Ideographic Description Sequences",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Radical",
          "package": "text-icu",
          "partial": "Radical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Radical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Reh",
          "package": "text-icu",
          "signature": "Reh",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Reh",
          "package": "text-icu",
          "partial": "Reh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Reh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Rejang",
          "package": "text-icu",
          "signature": "Rejang",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Rejang",
          "package": "text-icu",
          "partial": "Rejang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Rejang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "ReversedPe",
          "package": "text-icu",
          "signature": "ReversedPe",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "ReversedPe",
          "package": "text-icu",
          "partial": "Reversed Pe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:ReversedPe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "RightJoining",
          "package": "text-icu",
          "signature": "RightJoining",
          "source": "src/Data-Text-ICU-Char.html#JoiningType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "RightJoining",
          "package": "text-icu",
          "partial": "Right Joining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:RightJoining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "RightToLeft",
          "package": "text-icu",
          "signature": "RightToLeft",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "RightToLeft",
          "package": "text-icu",
          "partial": "Right To Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:RightToLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "RightToLeftArabic",
          "package": "text-icu",
          "signature": "RightToLeftArabic",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "RightToLeftArabic",
          "package": "text-icu",
          "partial": "Right To Left Arabic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:RightToLeftArabic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "RightToLeftEmbedding",
          "package": "text-icu",
          "signature": "RightToLeftEmbedding",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "RightToLeftEmbedding",
          "package": "text-icu",
          "partial": "Right To Left Embedding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:RightToLeftEmbedding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "RightToLeftOverride",
          "package": "text-icu",
          "signature": "RightToLeftOverride",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "RightToLeftOverride",
          "package": "text-icu",
          "partial": "Right To Left Override",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:RightToLeftOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Runic",
          "package": "text-icu",
          "signature": "Runic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Runic",
          "package": "text-icu",
          "partial": "Runic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Runic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBATerm",
          "package": "text-icu",
          "signature": "SBATerm",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBATerm",
          "package": "text-icu",
          "partial": "SBATerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBATerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBCR",
          "package": "text-icu",
          "signature": "SBCR",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBCR",
          "package": "text-icu",
          "partial": "SBCR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBClose",
          "package": "text-icu",
          "signature": "SBClose",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBClose",
          "package": "text-icu",
          "partial": "SBClose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBExtend",
          "package": "text-icu",
          "signature": "SBExtend",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBExtend",
          "package": "text-icu",
          "partial": "SBExtend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBFormat",
          "package": "text-icu",
          "signature": "SBFormat",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBFormat",
          "package": "text-icu",
          "partial": "SBFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBLF",
          "package": "text-icu",
          "signature": "SBLF",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBLF",
          "package": "text-icu",
          "partial": "SBLF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBLower",
          "package": "text-icu",
          "signature": "SBLower",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBLower",
          "package": "text-icu",
          "partial": "SBLower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBNumeric",
          "package": "text-icu",
          "signature": "SBNumeric",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBNumeric",
          "package": "text-icu",
          "partial": "SBNumeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBOLetter",
          "package": "text-icu",
          "signature": "SBOLetter",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBOLetter",
          "package": "text-icu",
          "partial": "SBOLetter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBOLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBSContinue",
          "package": "text-icu",
          "signature": "SBSContinue",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBSContinue",
          "package": "text-icu",
          "partial": "SBSContinue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBSContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBSP",
          "package": "text-icu",
          "signature": "SBSP",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBSP",
          "package": "text-icu",
          "partial": "SBSP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBSP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBSTerm",
          "package": "text-icu",
          "signature": "SBSTerm",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBSTerm",
          "package": "text-icu",
          "partial": "SBSTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBSTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBSep",
          "package": "text-icu",
          "signature": "SBSep",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBSep",
          "package": "text-icu",
          "partial": "SBSep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBSep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SBUpper",
          "package": "text-icu",
          "signature": "SBUpper",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SBUpper",
          "package": "text-icu",
          "partial": "SBUpper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SBUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSentence Terminal. Used in UAX #29: Text Boundaries\n \u003ca\u003ehttp://www.unicode.org/reports/tr29/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "STerm",
          "package": "text-icu",
          "signature": "STerm",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Sentence Terminal Used in UAX Text Boundaries http www.unicode.org reports tr29",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "STerm",
          "package": "text-icu",
          "partial": "STerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:STerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Sad",
          "package": "text-icu",
          "signature": "Sad",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Sad",
          "package": "text-icu",
          "partial": "Sad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Sad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Sadhe",
          "package": "text-icu",
          "signature": "Sadhe",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Sadhe",
          "package": "text-icu",
          "partial": "Sadhe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Sadhe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Saurashtra",
          "package": "text-icu",
          "signature": "Saurashtra",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Saurashtra",
          "package": "text-icu",
          "partial": "Saurashtra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Saurashtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Seen",
          "package": "text-icu",
          "signature": "Seen",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Seen",
          "package": "text-icu",
          "partial": "Seen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Seen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SegmentSeparator",
          "package": "text-icu",
          "signature": "SegmentSeparator",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SegmentSeparator",
          "package": "text-icu",
          "partial": "Segment Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SegmentSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eICU-specific property for characters that are starters in terms of\n Unicode normalization and combining character sequences.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "SegmentStarter",
          "package": "text-icu",
          "signature": "SegmentStarter",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "ICU-specific property for characters that are starters in terms of Unicode normalization and combining character sequences",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SegmentStarter",
          "package": "text-icu",
          "partial": "Segment Starter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SegmentStarter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Semkath",
          "package": "text-icu",
          "signature": "Semkath",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Semkath",
          "package": "text-icu",
          "partial": "Semkath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Semkath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SentenceBreak",
          "package": "text-icu",
          "signature": "SentenceBreak",
          "source": "src/Data-Text-ICU-Char.html#SentenceBreak_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SentenceBreak",
          "package": "text-icu",
          "partial": "Sentence Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SentenceBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Shavian",
          "package": "text-icu",
          "signature": "Shavian",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Shavian",
          "package": "text-icu",
          "partial": "Shavian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Shavian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Shin",
          "package": "text-icu",
          "signature": "Shin",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Shin",
          "package": "text-icu",
          "partial": "Shin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Shin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Sinhala",
          "package": "text-icu",
          "signature": "Sinhala",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Sinhala",
          "package": "text-icu",
          "partial": "Sinhala",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Sinhala"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Small",
          "package": "text-icu",
          "signature": "Small",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Small",
          "package": "text-icu",
          "partial": "Small",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SmallFormVariants",
          "package": "text-icu",
          "signature": "SmallFormVariants",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SmallFormVariants",
          "package": "text-icu",
          "partial": "Small Form Variants",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SmallFormVariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacters with a \u003ca\u003esoft dot\u003c/a\u003e, like i or j. An accent placed on these\n characters causes the dot to disappear.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "SoftDotted",
          "package": "text-icu",
          "signature": "SoftDotted",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Characters with soft dot like or An accent placed on these characters causes the dot to disappear",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SoftDotted",
          "package": "text-icu",
          "partial": "Soft Dotted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SoftDotted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Space",
          "package": "text-icu",
          "signature": "Space",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Space",
          "package": "text-icu",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SpaceSeparator",
          "package": "text-icu",
          "signature": "SpaceSeparator",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SpaceSeparator",
          "package": "text-icu",
          "partial": "Space Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SpaceSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SpacingMark",
          "package": "text-icu",
          "signature": "SpacingMark",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SpacingMark",
          "package": "text-icu",
          "partial": "Spacing Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SpacingMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SpacingModifierLetters",
          "package": "text-icu",
          "signature": "SpacingModifierLetters",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SpacingModifierLetters",
          "package": "text-icu",
          "partial": "Spacing Modifier Letters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SpacingModifierLetters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Specials",
          "package": "text-icu",
          "signature": "Specials",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Specials",
          "package": "text-icu",
          "partial": "Specials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Specials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Square",
          "package": "text-icu",
          "signature": "Square",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Square",
          "package": "text-icu",
          "partial": "Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "StartPunctuation",
          "package": "text-icu",
          "signature": "StartPunctuation",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "StartPunctuation",
          "package": "text-icu",
          "partial": "Start Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:StartPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Sub",
          "package": "text-icu",
          "signature": "Sub",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Sub",
          "package": "text-icu",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Sundanese",
          "package": "text-icu",
          "signature": "Sundanese",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Sundanese",
          "package": "text-icu",
          "partial": "Sundanese",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Sundanese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Super",
          "package": "text-icu",
          "signature": "Super",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Super",
          "package": "text-icu",
          "partial": "Super",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Super"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SuperscriptsAndSubscripts",
          "package": "text-icu",
          "signature": "SuperscriptsAndSubscripts",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SuperscriptsAndSubscripts",
          "package": "text-icu",
          "partial": "Superscripts And Subscripts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SuperscriptsAndSubscripts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SupplementalArrowsA",
          "package": "text-icu",
          "signature": "SupplementalArrowsA",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SupplementalArrowsA",
          "package": "text-icu",
          "partial": "Supplemental Arrows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SupplementalArrowsA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SupplementalArrowsB",
          "package": "text-icu",
          "signature": "SupplementalArrowsB",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SupplementalArrowsB",
          "package": "text-icu",
          "partial": "Supplemental Arrows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SupplementalArrowsB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SupplementalMathematicalOperators",
          "package": "text-icu",
          "signature": "SupplementalMathematicalOperators",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SupplementalMathematicalOperators",
          "package": "text-icu",
          "partial": "Supplemental Mathematical Operators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SupplementalMathematicalOperators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SupplementalPunctuation",
          "package": "text-icu",
          "signature": "SupplementalPunctuation",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SupplementalPunctuation",
          "package": "text-icu",
          "partial": "Supplemental Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SupplementalPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SupplementaryPrivateUseAreaA",
          "package": "text-icu",
          "signature": "SupplementaryPrivateUseAreaA",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SupplementaryPrivateUseAreaA",
          "package": "text-icu",
          "partial": "Supplementary Private Use Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SupplementaryPrivateUseAreaA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SupplementaryPrivateUseAreaB",
          "package": "text-icu",
          "signature": "SupplementaryPrivateUseAreaB",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SupplementaryPrivateUseAreaB",
          "package": "text-icu",
          "partial": "Supplementary Private Use Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SupplementaryPrivateUseAreaB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Surrogate",
          "package": "text-icu",
          "signature": "Surrogate",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Surrogate",
          "package": "text-icu",
          "partial": "Surrogate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Surrogate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SwashKaf",
          "package": "text-icu",
          "signature": "SwashKaf",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SwashKaf",
          "package": "text-icu",
          "partial": "Swash Kaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SwashKaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SylotiNagri",
          "package": "text-icu",
          "signature": "SylotiNagri",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SylotiNagri",
          "package": "text-icu",
          "partial": "Syloti Nagri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SylotiNagri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Syriac",
          "package": "text-icu",
          "signature": "Syriac",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Syriac",
          "package": "text-icu",
          "partial": "Syriac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Syriac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "SyriacWaw",
          "package": "text-icu",
          "signature": "SyriacWaw",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "SyriacWaw",
          "package": "text-icu",
          "partial": "Syriac Waw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:SyriacWaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "T",
          "package": "text-icu",
          "signature": "T",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "T",
          "package": "text-icu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Tagalog",
          "package": "text-icu",
          "signature": "Tagalog",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Tagalog",
          "package": "text-icu",
          "partial": "Tagalog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Tagalog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Tagbanwa",
          "package": "text-icu",
          "signature": "Tagbanwa",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Tagbanwa",
          "package": "text-icu",
          "partial": "Tagbanwa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Tagbanwa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Tags",
          "package": "text-icu",
          "signature": "Tags",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Tags",
          "package": "text-icu",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Tah",
          "package": "text-icu",
          "signature": "Tah",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Tah",
          "package": "text-icu",
          "partial": "Tah",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Tah"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "TaiLe",
          "package": "text-icu",
          "signature": "TaiLe",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "TaiLe",
          "package": "text-icu",
          "partial": "Tai Le",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:TaiLe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "TaiXuanJingSymbols",
          "package": "text-icu",
          "signature": "TaiXuanJingSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "TaiXuanJingSymbols",
          "package": "text-icu",
          "partial": "Tai Xuan Jing Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:TaiXuanJingSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Tamil",
          "package": "text-icu",
          "signature": "Tamil",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Tamil",
          "package": "text-icu",
          "partial": "Tamil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Tamil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Taw",
          "package": "text-icu",
          "signature": "Taw",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Taw",
          "package": "text-icu",
          "partial": "Taw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Taw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "TehMarbuta",
          "package": "text-icu",
          "signature": "TehMarbuta",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "TehMarbuta",
          "package": "text-icu",
          "partial": "Teh Marbuta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:TehMarbuta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Telugu",
          "package": "text-icu",
          "signature": "Telugu",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Telugu",
          "package": "text-icu",
          "partial": "Telugu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Telugu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePunctuation characters that generally mark the end of textual units.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "TerminalPunctuation",
          "package": "text-icu",
          "signature": "TerminalPunctuation",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Punctuation characters that generally mark the end of textual units",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "TerminalPunctuation",
          "package": "text-icu",
          "partial": "Terminal Punctuation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:TerminalPunctuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Teth",
          "package": "text-icu",
          "signature": "Teth",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Teth",
          "package": "text-icu",
          "partial": "Teth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Teth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Thaana",
          "package": "text-icu",
          "signature": "Thaana",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Thaana",
          "package": "text-icu",
          "partial": "Thaana",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Thaana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Thai",
          "package": "text-icu",
          "signature": "Thai",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Thai",
          "package": "text-icu",
          "partial": "Thai",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Thai"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Tibetan",
          "package": "text-icu",
          "signature": "Tibetan",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Tibetan",
          "package": "text-icu",
          "partial": "Tibetan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Tibetan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Tifinagh",
          "package": "text-icu",
          "signature": "Tifinagh",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Tifinagh",
          "package": "text-icu",
          "partial": "Tifinagh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Tifinagh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "TitlecaseLetter",
          "package": "text-icu",
          "signature": "TitlecaseLetter",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "TitlecaseLetter",
          "package": "text-icu",
          "partial": "Titlecase Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:TitlecaseLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "TrailingCanonicalCombiningClass",
          "package": "text-icu",
          "signature": "TrailingCanonicalCombiningClass",
          "source": "src/Data-Text-ICU-Char.html#TrailingCanonicalCombiningClass_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "TrailingCanonicalCombiningClass",
          "package": "text-icu",
          "partial": "Trailing Canonical Combining Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:TrailingCanonicalCombiningClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "TrailingJamo",
          "package": "text-icu",
          "signature": "TrailingJamo",
          "source": "src/Data-Text-ICU-Char.html#HangulSyllableType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "TrailingJamo",
          "package": "text-icu",
          "partial": "Trailing Jamo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:TrailingJamo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Transparent",
          "package": "text-icu",
          "signature": "Transparent",
          "source": "src/Data-Text-ICU-Char.html#JoiningType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Transparent",
          "package": "text-icu",
          "partial": "Transparent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Transparent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Ugaritic",
          "package": "text-icu",
          "signature": "Ugaritic",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Ugaritic",
          "package": "text-icu",
          "partial": "Ugaritic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Ugaritic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "UnifiedCanadianAboriginalSyllabics",
          "package": "text-icu",
          "signature": "UnifiedCanadianAboriginalSyllabics",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "UnifiedCanadianAboriginalSyllabics",
          "package": "text-icu",
          "partial": "Unified Canadian Aboriginal Syllabics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:UnifiedCanadianAboriginalSyllabics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor programmatic determination of Ideographic Description Sequences.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "UnifiedIdeograph",
          "package": "text-icu",
          "signature": "UnifiedIdeograph",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "For programmatic determination of Ideographic Description Sequences",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "UnifiedIdeograph",
          "package": "text-icu",
          "partial": "Unified Ideograph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:UnifiedIdeograph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Uppercase",
          "package": "text-icu",
          "signature": "Uppercase",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Uppercase",
          "package": "text-icu",
          "partial": "Uppercase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Uppercase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "UppercaseLetter",
          "package": "text-icu",
          "signature": "UppercaseLetter",
          "source": "src/Data-Text-ICU-Char.html#GeneralCategory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "UppercaseLetter",
          "package": "text-icu",
          "partial": "Uppercase Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:UppercaseLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "V",
          "package": "text-icu",
          "signature": "V",
          "source": "src/Data-Text-ICU-Char.html#GraphemeClusterBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "V",
          "package": "text-icu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Vai",
          "package": "text-icu",
          "signature": "Vai",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Vai",
          "package": "text-icu",
          "partial": "Vai",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Vai"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates all those characters that qualify as Variation\n Selectors. For details on the behavior of these characters, see\n \u003ca\u003ehttp://unicode.org/Public/UNIDATA/StandardizedVariants.html\u003c/a\u003e and 15.6\n Variation Selectors.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "VariationSelector",
          "package": "text-icu",
          "signature": "VariationSelector",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "Indicates all those characters that qualify as Variation Selectors For details on the behavior of these characters see http unicode.org Public UNIDATA StandardizedVariants.html and Variation Selectors",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "VariationSelector",
          "package": "text-icu",
          "partial": "Variation Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:VariationSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "VariationSelectors",
          "package": "text-icu",
          "signature": "VariationSelectors",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "VariationSelectors",
          "package": "text-icu",
          "partial": "Variation Selectors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:VariationSelectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "VariationSelectorsSupplement",
          "package": "text-icu",
          "signature": "VariationSelectorsSupplement",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "VariationSelectorsSupplement",
          "package": "text-icu",
          "partial": "Variation Selectors Supplement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:VariationSelectorsSupplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Vertical",
          "package": "text-icu",
          "signature": "Vertical",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Vertical",
          "package": "text-icu",
          "partial": "Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Vertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "VerticalForms",
          "package": "text-icu",
          "signature": "VerticalForms",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "VerticalForms",
          "package": "text-icu",
          "partial": "Vertical Forms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:VerticalForms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "VowelJamo",
          "package": "text-icu",
          "signature": "VowelJamo",
          "source": "src/Data-Text-ICU-Char.html#HangulSyllableType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "VowelJamo",
          "package": "text-icu",
          "partial": "Vowel Jamo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:VowelJamo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBALetter",
          "package": "text-icu",
          "signature": "WBALetter",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBALetter",
          "package": "text-icu",
          "partial": "WBALetter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBALetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBCR",
          "package": "text-icu",
          "signature": "WBCR",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBCR",
          "package": "text-icu",
          "partial": "WBCR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBExtend",
          "package": "text-icu",
          "signature": "WBExtend",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBExtend",
          "package": "text-icu",
          "partial": "WBExtend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBExtend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBExtendNumLet",
          "package": "text-icu",
          "signature": "WBExtendNumLet",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBExtendNumLet",
          "package": "text-icu",
          "partial": "WBExtend Num Let",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBExtendNumLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBFormat",
          "package": "text-icu",
          "signature": "WBFormat",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBFormat",
          "package": "text-icu",
          "partial": "WBFormat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBKatakana",
          "package": "text-icu",
          "signature": "WBKatakana",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBKatakana",
          "package": "text-icu",
          "partial": "WBKatakana",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBKatakana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBLF",
          "package": "text-icu",
          "signature": "WBLF",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBLF",
          "package": "text-icu",
          "partial": "WBLF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBMidLetter",
          "package": "text-icu",
          "signature": "WBMidLetter",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBMidLetter",
          "package": "text-icu",
          "partial": "WBMid Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBMidLetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBMidNum",
          "package": "text-icu",
          "signature": "WBMidNum",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBMidNum",
          "package": "text-icu",
          "partial": "WBMid Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBMidNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBMidNumLet",
          "package": "text-icu",
          "signature": "WBMidNumLet",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBMidNumLet",
          "package": "text-icu",
          "partial": "WBMid Num Let",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBMidNumLet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBNewline",
          "package": "text-icu",
          "signature": "WBNewline",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBNewline",
          "package": "text-icu",
          "partial": "WBNewline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBNewline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WBNumeric",
          "package": "text-icu",
          "signature": "WBNumeric",
          "source": "src/Data-Text-ICU-Char.html#WordBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WBNumeric",
          "package": "text-icu",
          "partial": "WBNumeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WBNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Waw",
          "package": "text-icu",
          "signature": "Waw",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Waw",
          "package": "text-icu",
          "partial": "Waw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Waw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WhiteSpace",
          "package": "text-icu",
          "signature": "WhiteSpace",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WhiteSpace",
          "package": "text-icu",
          "partial": "White Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WhiteSpaceNeutral",
          "package": "text-icu",
          "signature": "WhiteSpaceNeutral",
          "source": "src/Data-Text-ICU-Char.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WhiteSpaceNeutral",
          "package": "text-icu",
          "partial": "White Space Neutral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WhiteSpaceNeutral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Wide",
          "package": "text-icu",
          "signature": "Wide",
          "source": "src/Data-Text-ICU-Char.html#Decomposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Wide",
          "package": "text-icu",
          "partial": "Wide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Wide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WordBreak",
          "package": "text-icu",
          "signature": "WordBreak",
          "source": "src/Data-Text-ICU-Char.html#WordBreak_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WordBreak",
          "package": "text-icu",
          "partial": "Word Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WordBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "WordJoiner",
          "package": "text-icu",
          "signature": "WordJoiner",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "WordJoiner",
          "package": "text-icu",
          "partial": "Word Joiner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:WordJoiner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIDContinue\u003c/a\u003e\u003c/code\u003e modified to allow closure under normalization forms\n NFKC and NFKD.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "XidContinue",
          "package": "text-icu",
          "signature": "XidContinue",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "IDContinue modified to allow closure under normalization forms NFKC and NFKD",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "XidContinue",
          "package": "text-icu",
          "partial": "Xid Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:XidContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eIDStart\u003c/a\u003e\u003c/code\u003e modified to allow closure under normalization forms NFKC\n and NFKD.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "XidStart",
          "package": "text-icu",
          "signature": "XidStart",
          "source": "src/Data-Text-ICU-Char.html#Bool_",
          "type": "function"
        },
        "index": {
          "description": "IDStart modified to allow closure under normalization forms NFKC and NFKD",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "XidStart",
          "package": "text-icu",
          "partial": "Xid Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:XidStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Yeh",
          "package": "text-icu",
          "signature": "Yeh",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Yeh",
          "package": "text-icu",
          "partial": "Yeh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Yeh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "YehBarree",
          "package": "text-icu",
          "signature": "YehBarree",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "YehBarree",
          "package": "text-icu",
          "partial": "Yeh Barree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:YehBarree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "YehWithTail",
          "package": "text-icu",
          "signature": "YehWithTail",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "YehWithTail",
          "package": "text-icu",
          "partial": "Yeh With Tail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:YehWithTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "YiRadicals",
          "package": "text-icu",
          "signature": "YiRadicals",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "YiRadicals",
          "package": "text-icu",
          "partial": "Yi Radicals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:YiRadicals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "YiSyllables",
          "package": "text-icu",
          "signature": "YiSyllables",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "YiSyllables",
          "package": "text-icu",
          "partial": "Yi Syllables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:YiSyllables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "YijingHexagramSymbols",
          "package": "text-icu",
          "signature": "YijingHexagramSymbols",
          "source": "src/Data-Text-ICU-Char.html#BlockCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "YijingHexagramSymbols",
          "package": "text-icu",
          "partial": "Yijing Hexagram Symbols",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:YijingHexagramSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Yudh",
          "package": "text-icu",
          "signature": "Yudh",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Yudh",
          "package": "text-icu",
          "partial": "Yudh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Yudh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "YudhHe",
          "package": "text-icu",
          "signature": "YudhHe",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "YudhHe",
          "package": "text-icu",
          "partial": "Yudh He",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:YudhHe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Zain",
          "package": "text-icu",
          "signature": "Zain",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Zain",
          "package": "text-icu",
          "partial": "Zain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Zain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Zhain",
          "package": "text-icu",
          "signature": "Zhain",
          "source": "src/Data-Text-ICU-Char.html#JoiningGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Zhain",
          "package": "text-icu",
          "partial": "Zhain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Zhain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "Zwspace",
          "package": "text-icu",
          "signature": "Zwspace",
          "source": "src/Data-Text-ICU-Char.html#LineBreak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "Zwspace",
          "package": "text-icu",
          "partial": "Zwspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:Zwspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the Unicode allocation block that contains the given\n character.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "blockCode",
          "package": "text-icu",
          "signature": "Char -\u003e BlockCode",
          "source": "src/Data-Text-ICU-Char.html#blockCode",
          "type": "function"
        },
        "index": {
          "description": "Return the Unicode allocation block that contains the given character",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "blockCode",
          "normalized": "Char-\u003eBlockCode",
          "package": "text-icu",
          "partial": "Code",
          "signature": "Char-\u003eBlockCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:blockCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a Unicode character by its full or extended name, and return\n its code point value.\n\u003c/p\u003e\u003cp\u003eThe name is matched exactly and completely.\n\u003c/p\u003e\u003cp\u003eA Unicode 1.0 name is matched only if it differs from the modern\n name.\n\u003c/p\u003e\u003cp\u003eCompared to \u003ccode\u003e\u003ca\u003echarFromName\u003c/a\u003e\u003c/code\u003e, this function gives each Unicode code\n point a unique extended name. Extended names are lowercase followed\n by an uppercase hexadecimal number, within angle brackets.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "charFromFullName",
          "package": "text-icu",
          "signature": "String -\u003e Maybe Char",
          "source": "src/Data-Text-ICU-Char.html#charFromFullName",
          "type": "function"
        },
        "index": {
          "description": "Find Unicode character by its full or extended name and return its code point value The name is matched exactly and completely Unicode name is matched only if it differs from the modern name Compared to charFromName this function gives each Unicode code point unique extended name Extended names are lowercase followed by an uppercase hexadecimal number within angle brackets",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "charFromFullName",
          "normalized": "String-\u003eMaybe Char",
          "package": "text-icu",
          "partial": "From Full Name",
          "signature": "String-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:charFromFullName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a Unicode character by its full name, and return its code\n point value.\n\u003c/p\u003e\u003cp\u003eThe name is matched exactly and completely.\n\u003c/p\u003e\u003cp\u003eA Unicode 1.0 name is matched only if it differs from the modern\n name.  Unicode names are all uppercase.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "charFromName",
          "package": "text-icu",
          "signature": "String -\u003e Maybe Char",
          "source": "src/Data-Text-ICU-Char.html#charFromName",
          "type": "function"
        },
        "index": {
          "description": "Find Unicode character by its full name and return its code point value The name is matched exactly and completely Unicode name is matched only if it differs from the modern name Unicode names are all uppercase",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "charFromName",
          "normalized": "String-\u003eMaybe Char",
          "package": "text-icu",
          "partial": "From Name",
          "signature": "String-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:charFromName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the full name of a Unicode character.\n\u003c/p\u003e\u003cp\u003eCompared to \u003ccode\u003e\u003ca\u003echarName\u003c/a\u003e\u003c/code\u003e, this function gives each Unicode code point\n a unique extended name. Extended names are lowercase followed by an\n uppercase hexadecimal number, within angle brackets.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "charFullName",
          "package": "text-icu",
          "signature": "Char -\u003e String",
          "source": "src/Data-Text-ICU-Char.html#charFullName",
          "type": "function"
        },
        "index": {
          "description": "Return the full name of Unicode character Compared to charName this function gives each Unicode code point unique extended name Extended names are lowercase followed by an uppercase hexadecimal number within angle brackets",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "charFullName",
          "normalized": "Char-\u003eString",
          "package": "text-icu",
          "partial": "Full Name",
          "signature": "Char-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:charFullName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the name of a Unicode character.\n\u003c/p\u003e\u003cp\u003eThe names of all unassigned characters are empty.\n\u003c/p\u003e\u003cp\u003eThe name contains only \u003ca\u003einvariant\u003c/a\u003e characters like A-Z, 0-9, space,\n and '-'.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "charName",
          "package": "text-icu",
          "signature": "Char -\u003e String",
          "source": "src/Data-Text-ICU-Char.html#charName",
          "type": "function"
        },
        "index": {
          "description": "Return the name of Unicode character The names of all unassigned characters are empty The name contains only invariant characters like A-Z space and",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "charName",
          "normalized": "Char-\u003eString",
          "package": "text-icu",
          "partial": "Name",
          "signature": "Char-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:charName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "combiningClass",
          "package": "text-icu",
          "signature": "Char -\u003e Int",
          "source": "src/Data-Text-ICU-Char.html#combiningClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "combiningClass",
          "normalized": "Char-\u003eInt",
          "package": "text-icu",
          "partial": "Class",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:combiningClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the decimal digit value of a decimal digit character.\n Such characters have the general category \u003ccode\u003eNd\u003c/code\u003e (decimal digit\n numbers) and a \u003ccode\u003e\u003ca\u003eNumericType\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eNTDecimal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNo digit values are returned for any Han characters, because Han\n number characters are often used with a special Chinese-style\n number format (with characters for powers of 10 in between) instead\n of in decimal-positional notation.  Unicode 4 explicitly assigns\n Han number characters a \u003ccode\u003e\u003ca\u003eNumericType\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eNTNumeric\u003c/a\u003e\u003c/code\u003e instead of\n \u003ccode\u003e\u003ca\u003eNTDecimal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "digitToInt",
          "package": "text-icu",
          "signature": "Char -\u003e Maybe Int",
          "source": "src/Data-Text-ICU-Char.html#digitToInt",
          "type": "function"
        },
        "index": {
          "description": "Return the decimal digit value of decimal digit character Such characters have the general category Nd decimal digit numbers and NumericType of NTDecimal No digit values are returned for any Han characters because Han number characters are often used with special Chinese-style number format with characters for powers of in between instead of in decimal-positional notation Unicode explicitly assigns Han number characters NumericType of NTNumeric instead of NTDecimal",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "digitToInt",
          "normalized": "Char-\u003eMaybe Int",
          "package": "text-icu",
          "partial": "To Int",
          "signature": "Char-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:digitToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the bidirectional category value for the code point,\n which is used in the Unicode bidirectional algorithm (UAX #9\n \u003ca\u003ehttp://www.unicode.org/reports/tr9/\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "direction",
          "package": "text-icu",
          "signature": "Char -\u003e Direction",
          "source": "src/Data-Text-ICU-Char.html#direction",
          "type": "function"
        },
        "index": {
          "description": "Return the bidirectional category value for the code point which is used in the Unicode bidirectional algorithm UAX http www.unicode.org reports tr9",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "direction",
          "normalized": "Char-\u003eDirection",
          "package": "text-icu",
          "signature": "Char-\u003eDirection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether the code point has the \u003ccode\u003e\u003ca\u003eBidiMirrored\u003c/a\u003e\u003c/code\u003e property.  This\n property is set for characters that are commonly used in Right-To-Left\n contexts and need to be displayed with a \u003ca\u003emirrored\u003c/a\u003e glyph.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "isMirrored",
          "package": "text-icu",
          "signature": "Char -\u003e Bool",
          "source": "src/Data-Text-ICU-Char.html#isMirrored",
          "type": "function"
        },
        "index": {
          "description": "Determine whether the code point has the BidiMirrored property This property is set for characters that are commonly used in Right-To-Left contexts and need to be displayed with mirrored glyph",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "isMirrored",
          "normalized": "Char-\u003eBool",
          "package": "text-icu",
          "partial": "Mirrored",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:isMirrored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the ISO 10646 comment for a character.\n\u003c/p\u003e\u003cp\u003eIf a character does not have an associated comment, the empty\n string is returned.\n\u003c/p\u003e\u003cp\u003eThe ISO 10646 comment is an informative field in the Unicode\n Character Database (\u003ccode\u003eUnicodeData.txt\u003c/code\u003e field 11) and is from the ISO\n 10646 names list.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "isoComment",
          "package": "text-icu",
          "signature": "Char -\u003e String",
          "source": "src/Data-Text-ICU-Char.html#isoComment",
          "type": "function"
        },
        "index": {
          "description": "Return the ISO comment for character If character does not have an associated comment the empty string is returned The ISO comment is an informative field in the Unicode Character Database UnicodeData.txt field and is from the ISO names list",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "isoComment",
          "normalized": "Char-\u003eString",
          "package": "text-icu",
          "partial": "Comment",
          "signature": "Char-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:isoComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "mirror",
          "package": "text-icu",
          "signature": "Char -\u003e Char",
          "source": "src/Data-Text-ICU-Char.html#mirror",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "mirror",
          "normalized": "Char-\u003eChar",
          "package": "text-icu",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:mirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the numeric value for a Unicode code point as defined in the\n Unicode Character Database.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e return type is necessary because some numeric values are\n fractions, negative, or too large to fit in a fixed-width integral type.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Char",
          "name": "numericValue",
          "package": "text-icu",
          "signature": "Char -\u003e Maybe Double",
          "source": "src/Data-Text-ICU-Char.html#numericValue",
          "type": "function"
        },
        "index": {
          "description": "Return the numeric value for Unicode code point as defined in the Unicode Character Database Double return type is necessary because some numeric values are fractions negative or too large to fit in fixed-width integral type",
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "numericValue",
          "normalized": "Char-\u003eMaybe Double",
          "package": "text-icu",
          "partial": "Value",
          "signature": "Char-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:numericValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Char",
          "name": "property",
          "package": "text-icu",
          "signature": "p -\u003e Char -\u003e v",
          "source": "src/Data-Text-ICU-Char.html#property",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Char",
          "module": "Data.Text.ICU.Char",
          "name": "property",
          "normalized": "a-\u003eChar-\u003eb",
          "package": "text-icu",
          "signature": "p-\u003eChar-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Char.html#v:property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString collation functions for Unicode, implemented as bindings to\n the International Components for Unicode (ICU) libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "Collate",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Collate.html",
          "type": "module"
        },
        "index": {
          "description": "String collation functions for Unicode implemented as bindings to the International Components for Unicode ICU libraries",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Collate",
          "package": "text-icu",
          "partial": "Collate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl the handling of variable weight elements.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "AlternateHandling",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Collate.html#AlternateHandling",
          "type": "data"
        },
        "index": {
          "description": "Control the handling of variable weight elements",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "AlternateHandling",
          "package": "text-icu",
          "partial": "Alternate Handling",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#t:AlternateHandling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Collate",
          "name": "Attribute",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Collate.html#Attribute",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Attribute",
          "package": "text-icu",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl the ordering of upper and lower case letters.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "CaseFirst",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Collate.html#CaseFirst",
          "type": "data"
        },
        "index": {
          "description": "Control the ordering of upper and lower case letters",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "CaseFirst",
          "package": "text-icu",
          "partial": "Case First",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#t:CaseFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString collator type.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "MCollator",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Collate-Internal.html#MCollator",
          "type": "data"
        },
        "index": {
          "description": "String collator type",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "MCollator",
          "package": "text-icu",
          "partial": "MCollator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#t:MCollator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strength attribute. The usual strength for most locales (except\n Japanese) is tertiary. Quaternary strength is useful when combined with\n shifted setting for alternate handling attribute and for JIS x 4061\n collation, when it is used to distinguish between Katakana and Hiragana\n (this is achieved by setting \u003ccode\u003e\u003ca\u003eHiraganaQuaternaryMode\u003c/a\u003e\u003c/code\u003e mode to\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e). Otherwise, quaternary level is affected only by the number of\n non ignorable code points in the string. Identical strength is rarely\n useful, as it amounts to codepoints of the \u003ccode\u003eNFD\u003c/code\u003e form of the string.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "Strength",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Collate.html#Strength",
          "type": "data"
        },
        "index": {
          "description": "The strength attribute The usual strength for most locales except Japanese is tertiary Quaternary strength is useful when combined with shifted setting for alternate handling attribute and for JIS collation when it is used to distinguish between Katakana and Hiragana this is achieved by setting HiraganaQuaternaryMode mode to True Otherwise quaternary level is affected only by the number of non ignorable code points in the string Identical strength is rarely useful as it amounts to codepoints of the NFD form of the string",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Strength",
          "package": "text-icu",
          "partial": "Strength",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#t:Strength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor handling variable elements.  \u003ccode\u003e\u003ca\u003eNonIgnorable\u003c/a\u003e\u003c/code\u003e is\n default.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "AlternateHandling",
          "package": "text-icu",
          "signature": "AlternateHandling AlternateHandling",
          "source": "src/Data-Text-ICU-Collate.html#Attribute",
          "type": "function"
        },
        "index": {
          "description": "For handling variable elements NonIgnorable is default",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "AlternateHandling",
          "package": "text-icu",
          "partial": "Alternate Handling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:AlternateHandling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl the ordering of upper and lower case letters.\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e (the default) orders upper and lower case\n letters in accordance to their tertiary weights.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "CaseFirst",
          "package": "text-icu",
          "signature": "CaseFirst (Maybe CaseFirst)",
          "source": "src/Data-Text-ICU-Collate.html#Attribute",
          "type": "function"
        },
        "index": {
          "description": "Control the ordering of upper and lower case letters Nothing the default orders upper and lower case letters in accordance to their tertiary weights",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "CaseFirst",
          "package": "text-icu",
          "partial": "Case First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:CaseFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControls whether an extra case level (positioned\n before the third level) is generated or not.  When\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e (default), case level is not generated; when\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the case level is generated. Contents of the\n case level are affected by the value of the \u003ccode\u003e\u003ca\u003eCaseFirst\u003c/a\u003e\u003c/code\u003e\n attribute. A simple way to ignore accent differences in\n a string is to set the strength to \u003ccode\u003e\u003ca\u003ePrimary\u003c/a\u003e\u003c/code\u003e and enable\n case level.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "CaseLevel",
          "package": "text-icu",
          "signature": "CaseLevel Bool",
          "source": "src/Data-Text-ICU-Collate.html#Attribute",
          "type": "function"
        },
        "index": {
          "description": "Controls whether an extra case level positioned before the third level is generated or not When False default case level is not generated when True the case level is generated Contents of the case level are affected by the value of the CaseFirst attribute simple way to ignore accent differences in string is to set the strength to Primary and enable case level",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "CaseLevel",
          "package": "text-icu",
          "partial": "Case Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:CaseLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirection of secondary weights, used in French.  \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n results in secondary weights being considered backwards,\n while \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e treats secondary weights in the order in\n which they appear.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "French",
          "package": "text-icu",
          "signature": "French Bool",
          "source": "src/Data-Text-ICU-Collate.html#Attribute",
          "type": "function"
        },
        "index": {
          "description": "Direction of secondary weights used in French True results in secondary weights being considered backwards while False treats secondary weights in the order in which they appear",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "French",
          "package": "text-icu",
          "partial": "French",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:French"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen turned on, this attribute positions Hiragana\n before all non-ignorables on quaternary level. This is a\n sneaky way to produce JIS sort order.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "HiraganaQuaternaryMode",
          "package": "text-icu",
          "signature": "HiraganaQuaternaryMode Bool",
          "source": "src/Data-Text-ICU-Collate.html#Attribute",
          "type": "function"
        },
        "index": {
          "description": "When turned on this attribute positions Hiragana before all non-ignorables on quaternary level This is sneaky way to produce JIS sort order",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "HiraganaQuaternaryMode",
          "package": "text-icu",
          "partial": "Hiragana Quaternary Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:HiraganaQuaternaryMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Collate",
          "name": "Identical",
          "package": "text-icu",
          "signature": "Identical",
          "source": "src/Data-Text-ICU-Collate.html#Strength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Identical",
          "package": "text-icu",
          "partial": "Identical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:Identical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce lower case letters to sort before\n upper case.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "LowerFirst",
          "package": "text-icu",
          "signature": "LowerFirst",
          "source": "src/Data-Text-ICU-Collate.html#CaseFirst",
          "type": "function"
        },
        "index": {
          "description": "Force lower case letters to sort before upper case",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "LowerFirst",
          "package": "text-icu",
          "partial": "Lower First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:LowerFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat all codepoints with non-ignorable primary\n weights in the same way.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "NonIgnorable",
          "package": "text-icu",
          "signature": "NonIgnorable",
          "source": "src/Data-Text-ICU-Collate.html#AlternateHandling",
          "type": "function"
        },
        "index": {
          "description": "Treat all codepoints with non-ignorable primary weights in the same way",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "NonIgnorable",
          "package": "text-icu",
          "partial": "Non Ignorable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:NonIgnorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControls whether the normalization check and necessary\n normalizations are performed. When \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e (default) no\n normalization check is performed. The correctness of the\n result is guaranteed only if the input data is in\n so-called \u003ccode\u003eFCD\u003c/code\u003e form (see users manual for more info).\n When \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, an incremental check is performed to see\n whether the input data is in \u003ccode\u003eFCD\u003c/code\u003e form. If the data is\n not in \u003ccode\u003eFCD\u003c/code\u003e form, incremental \u003ccode\u003eNFD\u003c/code\u003e normalization is\n performed.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "NormalizationMode",
          "package": "text-icu",
          "signature": "NormalizationMode Bool",
          "source": "src/Data-Text-ICU-Collate.html#Attribute",
          "type": "function"
        },
        "index": {
          "description": "Controls whether the normalization check and necessary normalizations are performed When False default no normalization check is performed The correctness of the result is guaranteed only if the input data is in so-called FCD form see users manual for more info When True an incremental check is performed to see whether the input data is in FCD form If the data is not in FCD form incremental NFD normalization is performed",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "NormalizationMode",
          "package": "text-icu",
          "partial": "Normalization Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:NormalizationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen enabled, this attribute generates a collation key\n for the numeric value of substrings of digits.  This is\n a way to get '100' to sort \u003cem\u003eafter\u003c/em\u003e '2'.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "Numeric",
          "package": "text-icu",
          "signature": "Numeric Bool",
          "source": "src/Data-Text-ICU-Collate.html#Attribute",
          "type": "function"
        },
        "index": {
          "description": "When enabled this attribute generates collation key for the numeric value of substrings of digits This is way to get to sort after",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Numeric",
          "package": "text-icu",
          "partial": "Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:Numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Collate",
          "name": "Primary",
          "package": "text-icu",
          "signature": "Primary",
          "source": "src/Data-Text-ICU-Collate.html#Strength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Primary",
          "package": "text-icu",
          "partial": "Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:Primary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Collate",
          "name": "Quaternary",
          "package": "text-icu",
          "signature": "Quaternary",
          "source": "src/Data-Text-ICU-Collate.html#Strength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Quaternary",
          "package": "text-icu",
          "partial": "Quaternary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:Quaternary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Collate",
          "name": "Secondary",
          "package": "text-icu",
          "signature": "Secondary",
          "source": "src/Data-Text-ICU-Collate.html#Strength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Secondary",
          "package": "text-icu",
          "partial": "Secondary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:Secondary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCause codepoints with primary weights that are\n equal to or below the variable top value to be\n ignored on primary level and moved to the\n quaternary level.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "Shifted",
          "package": "text-icu",
          "signature": "Shifted",
          "source": "src/Data-Text-ICU-Collate.html#AlternateHandling",
          "type": "function"
        },
        "index": {
          "description": "Cause codepoints with primary weights that are equal to or below the variable top value to be ignored on primary level and moved to the quaternary level",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Shifted",
          "package": "text-icu",
          "partial": "Shifted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:Shifted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Collate",
          "name": "Strength",
          "package": "text-icu",
          "signature": "Strength Strength",
          "source": "src/Data-Text-ICU-Collate.html#Attribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Strength",
          "package": "text-icu",
          "partial": "Strength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:Strength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Collate",
          "name": "Tertiary",
          "package": "text-icu",
          "signature": "Tertiary",
          "source": "src/Data-Text-ICU-Collate.html#Strength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "Tertiary",
          "package": "text-icu",
          "partial": "Tertiary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:Tertiary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce upper case letters to sort before\n lower case.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "UpperFirst",
          "package": "text-icu",
          "signature": "UpperFirst",
          "source": "src/Data-Text-ICU-Collate.html#CaseFirst",
          "type": "function"
        },
        "index": {
          "description": "Force upper case letters to sort before lower case",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "UpperFirst",
          "package": "text-icu",
          "partial": "Upper First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:UpperFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a copy of a mutable \u003ccode\u003e\u003ca\u003eMCollator\u003c/a\u003e\u003c/code\u003e.\n Subsequent changes to the input \u003ccode\u003e\u003ca\u003eMCollator\u003c/a\u003e\u003c/code\u003e will not affect the state of\n the returned \u003ccode\u003e\u003ca\u003eMCollator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "clone",
          "package": "text-icu",
          "signature": "MCollator -\u003e IO MCollator",
          "source": "src/Data-Text-ICU-Collate.html#clone",
          "type": "function"
        },
        "index": {
          "description": "Make copy of mutable MCollator Subsequent changes to the input MCollator will not affect the state of the returned MCollator",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "clone",
          "normalized": "MCollator-\u003eIO MCollator",
          "package": "text-icu",
          "signature": "MCollator-\u003eIO MCollator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two strings.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "collate",
          "package": "text-icu",
          "signature": "MCollator -\u003e Text -\u003e Text -\u003e IO Ordering",
          "source": "src/Data-Text-ICU-Collate.html#collate",
          "type": "function"
        },
        "index": {
          "description": "Compare two strings",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "collate",
          "normalized": "MCollator-\u003eText-\u003eText-\u003eIO Ordering",
          "package": "text-icu",
          "signature": "MCollator-\u003eText-\u003eText-\u003eIO Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:collate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eCharIterator\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eIf either iterator was constructed from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, it does not need\n to be copied or converted internally, so this function can be quite\n cheap.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "collateIter",
          "package": "text-icu",
          "signature": "MCollator -\u003e CharIterator -\u003e CharIterator -\u003e IO Ordering",
          "source": "src/Data-Text-ICU-Collate.html#collateIter",
          "type": "function"
        },
        "index": {
          "description": "Compare two CharIterator If either iterator was constructed from ByteString it does not need to be copied or converted internally so this function can be quite cheap",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "collateIter",
          "normalized": "MCollator-\u003eCharIterator-\u003eCharIterator-\u003eIO Ordering",
          "package": "text-icu",
          "partial": "Iter",
          "signature": "MCollator-\u003eCharIterator-\u003eCharIterator-\u003eIO Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:collateIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMCollator\u003c/a\u003e\u003c/code\u003es are considered equal if they will sort strings\n identically. This means that both the current attributes and the rules\n must be equivalent.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "equals",
          "package": "text-icu",
          "signature": "MCollator -\u003e MCollator -\u003e IO Bool",
          "source": "src/Data-Text-ICU-Collate-Internal.html#equals",
          "type": "function"
        },
        "index": {
          "description": "MCollator are considered equal if they will sort strings identically This means that both the current attributes and the rules must be equivalent",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "equals",
          "normalized": "MCollator-\u003eMCollator-\u003eIO Bool",
          "package": "text-icu",
          "signature": "MCollator-\u003eMCollator-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a safe copy of a mutable \u003ccode\u003e\u003ca\u003eMCollator\u003c/a\u003e\u003c/code\u003e for use in pure code.\n Subsequent changes to the \u003ccode\u003e\u003ca\u003eMCollator\u003c/a\u003e\u003c/code\u003e will not affect the state of\n the returned \u003ccode\u003e\u003ca\u003eCollator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "freeze",
          "package": "text-icu",
          "signature": "MCollator -\u003e IO Collator",
          "source": "src/Data-Text-ICU-Collate.html#freeze",
          "type": "function"
        },
        "index": {
          "description": "Make safe copy of mutable MCollator for use in pure code Subsequent changes to the MCollator will not affect the state of the returned Collator",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "freeze",
          "normalized": "MCollator-\u003eIO Collator",
          "package": "text-icu",
          "signature": "MCollator-\u003eIO Collator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of an \u003ccode\u003e\u003ca\u003eMCollator\u003c/a\u003e\u003c/code\u003e attribute.\n\u003c/p\u003e\u003cp\u003eIt is safe to provide a dummy argument to an \u003ccode\u003e\u003ca\u003eAttribute\u003c/a\u003e\u003c/code\u003e constructor when\n using this function, so the following will work:\n\u003c/p\u003e\u003cpre\u003e getAttribute mcol (NormalizationMode undefined)\n\u003c/pre\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "getAttribute",
          "package": "text-icu",
          "signature": "MCollator -\u003e Attribute -\u003e IO Attribute",
          "source": "src/Data-Text-ICU-Collate.html#getAttribute",
          "type": "function"
        },
        "index": {
          "description": "Get the value of an MCollator attribute It is safe to provide dummy argument to an Attribute constructor when using this function so the following will work getAttribute mcol NormalizationMode undefined",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "getAttribute",
          "normalized": "MCollator-\u003eAttribute-\u003eIO Attribute",
          "package": "text-icu",
          "partial": "Attribute",
          "signature": "MCollator-\u003eAttribute-\u003eIO Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:getAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a \u003ccode\u003e\u003ca\u003eCollator\u003c/a\u003e\u003c/code\u003e for comparing strings.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "open",
          "package": "text-icu",
          "signature": "LocaleName-\u003e IO MCollator",
          "type": "function"
        },
        "index": {
          "description": "Open Collator for comparing strings",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "open",
          "normalized": "LocaleName-\u003eIO MCollator",
          "package": "text-icu",
          "signature": "LocaleName-\u003eIO MCollator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of an \u003ccode\u003e\u003ca\u003eMCollator\u003c/a\u003e\u003c/code\u003e attribute.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "setAttribute",
          "package": "text-icu",
          "signature": "MCollator -\u003e Attribute -\u003e IO ()",
          "source": "src/Data-Text-ICU-Collate.html#setAttribute",
          "type": "function"
        },
        "index": {
          "description": "Set the value of an MCollator attribute",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "setAttribute",
          "normalized": "MCollator-\u003eAttribute-\u003eIO()",
          "package": "text-icu",
          "partial": "Attribute",
          "signature": "MCollator-\u003eAttribute-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:setAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a key for sorting the \u003ccode\u003eText\u003c/code\u003e using the given \u003ccode\u003e\u003ca\u003eCollator\u003c/a\u003e\u003c/code\u003e.\n The result of comparing two \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es that have been\n transformed with \u003ccode\u003e\u003ca\u003esortKey\u003c/a\u003e\u003c/code\u003e will be the same as the result of\n \u003ccode\u003e\u003ca\u003ecollate\u003c/a\u003e\u003c/code\u003e on the two untransformed \u003ccode\u003eText\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Collate",
          "name": "sortKey",
          "package": "text-icu",
          "signature": "MCollator -\u003e Text -\u003e IO ByteString",
          "source": "src/Data-Text-ICU-Collate.html#sortKey",
          "type": "function"
        },
        "index": {
          "description": "Create key for sorting the Text using the given Collator The result of comparing two ByteString that have been transformed with sortKey will be the same as the result of collate on the two untransformed Text",
          "hierarchy": "Data Text ICU Collate",
          "module": "Data.Text.ICU.Collate",
          "name": "sortKey",
          "normalized": "MCollator-\u003eText-\u003eIO ByteString",
          "package": "text-icu",
          "partial": "Key",
          "signature": "MCollator-\u003eText-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Collate.html#v:sortKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCharacter set conversion functions for Unicode, implemented as\n bindings to the International Components for Unicode (ICU)\n libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "Convert",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Convert.html",
          "type": "module"
        },
        "index": {
          "description": "Character set conversion functions for Unicode implemented as bindings to the International Components for Unicode ICU libraries",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "Convert",
          "package": "text-icu",
          "partial": "Convert",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter set converter type.  \u003cem\u003eNote\u003c/em\u003e: this structure is not\n thread safe. It is \u003cem\u003enot\u003c/em\u003e safe to use value of this type\n simultaneously from multiple threads.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "Converter",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Convert-Internal.html#Converter",
          "type": "data"
        },
        "index": {
          "description": "Character set converter type Note this structure is not thread safe It is not safe to use value of this type simultaneously from multiple threads",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "Converter",
          "package": "text-icu",
          "partial": "Converter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#t:Converter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the aliases for a given converter or alias name.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "aliases",
          "package": "text-icu",
          "signature": "String -\u003e [String]",
          "source": "src/Data-Text-ICU-Convert.html#aliases",
          "type": "function"
        },
        "index": {
          "description": "Return the aliases for given converter or alias name",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "aliases",
          "normalized": "String-\u003e[String]",
          "package": "text-icu",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:aliases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo a fuzzy compare of two converter/alias names.  The comparison\n is case-insensitive, ignores leading zeroes if they are not\n followed by further digits, and ignores all but letters and digits.\n Thus the strings \u003ccode\u003e\"UTF-8\"\u003c/code\u003e, \u003ccode\u003e\"utf_8\"\u003c/code\u003e, \u003ccode\u003e\"u*T@f08\"\u003c/code\u003e and\n \u003ccode\u003e\"Utf 8\"\u003c/code\u003e are exactly equivalent.  See section 1.4, Charset Alias\n Matching in Unicode Technical Standard #22 at\n \u003ca\u003ehttp://www.unicode.org/reports/tr22/\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "compareNames",
          "package": "text-icu",
          "signature": "String -\u003e String -\u003e Ordering",
          "source": "src/Data-Text-ICU-Convert.html#compareNames",
          "type": "function"
        },
        "index": {
          "description": "Do fuzzy compare of two converter alias names The comparison is case-insensitive ignores leading zeroes if they are not followed by further digits and ignores all but letters and digits Thus the strings UTF-8 utf T@f08 and Utf are exactly equivalent See section Charset Alias Matching in Unicode Technical Standard at http www.unicode.org reports tr22",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "compareNames",
          "normalized": "String-\u003eString-\u003eOrdering",
          "package": "text-icu",
          "partial": "Names",
          "signature": "String-\u003eString-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:compareNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of the canonical names of all available converters.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "converterNames",
          "package": "text-icu",
          "signature": "[String]",
          "source": "src/Data-Text-ICU-Convert.html#converterNames",
          "type": "function"
        },
        "index": {
          "description": "list of the canonical names of all available converters",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "converterNames",
          "normalized": "[String]",
          "package": "text-icu",
          "partial": "Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:converterNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the Unicode string into a codepage string using the given\n converter.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "fromUnicode",
          "package": "text-icu",
          "signature": "Converter -\u003e Text -\u003e ByteString",
          "source": "src/Data-Text-ICU-Convert.html#fromUnicode",
          "type": "function"
        },
        "index": {
          "description": "Convert the Unicode string into codepage string using the given converter",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "fromUnicode",
          "normalized": "Converter-\u003eText-\u003eByteString",
          "package": "text-icu",
          "partial": "Unicode",
          "signature": "Converter-\u003eText-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:fromUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current default converter name. If you want to \u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e\n a default converter, you do not need to use this function.  It is\n faster to pass the empty string to \u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e the default converter.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "getDefaultName",
          "package": "text-icu",
          "signature": "IO String",
          "source": "src/Data-Text-ICU-Convert.html#getDefaultName",
          "type": "function"
        },
        "index": {
          "description": "Returns the current default converter name If you want to open default converter you do not need to use this function It is faster to pass the empty string to open the default converter",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "getDefaultName",
          "package": "text-icu",
          "partial": "Default Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:getDefaultName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the internal, canonical name of the converter.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "getName",
          "package": "text-icu",
          "signature": "Converter -\u003e String",
          "source": "src/Data-Text-ICU-Convert-Internal.html#getName",
          "type": "function"
        },
        "index": {
          "description": "Gets the internal canonical name of the converter",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "getName",
          "normalized": "Converter-\u003eString",
          "package": "text-icu",
          "partial": "Name",
          "signature": "Converter-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether the converter contains ambiguous mappings of\n the same character or not.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "isAmbiguous",
          "package": "text-icu",
          "signature": "Converter -\u003e Bool",
          "source": "src/Data-Text-ICU-Convert.html#isAmbiguous",
          "type": "function"
        },
        "index": {
          "description": "Indicates whether the converter contains ambiguous mappings of the same character or not",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "isAmbiguous",
          "normalized": "Converter-\u003eBool",
          "package": "text-icu",
          "partial": "Ambiguous",
          "signature": "Converter-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:isAmbiguous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eConverter\u003c/a\u003e\u003c/code\u003e with the name of a coded character set\n specified as a string.  The actual name will be resolved with the\n alias file using a case-insensitive string comparison that ignores\n leading zeroes and all non-alphanumeric characters.  E.g., the\n names \u003ccode\u003e\"UTF8\"\u003c/code\u003e, \u003ccode\u003e\"utf-8\"\u003c/code\u003e, \u003ccode\u003e\"u*T@f08\"\u003c/code\u003e and \u003ccode\u003e\"Utf 8\"\u003c/code\u003e are\n all equivalent (see also \u003ccode\u003e\u003ca\u003ecompareNames\u003c/a\u003e\u003c/code\u003e).  If an empty string is\n passed for the converter name, it will create one with the\n \u003ccode\u003e\u003ca\u003egetDefaultName\u003c/a\u003e\u003c/code\u003e return value.\n\u003c/p\u003e\u003cp\u003eA converter name may contain options like a locale specification to\n control the specific behavior of the newly instantiated converter.\n The meaning of the options depends on the particular converter.  If\n an option is not defined for or recognized by a given converter,\n then it is ignored.\n\u003c/p\u003e\u003cp\u003eOptions are appended to the converter name string, with a comma\n between the name and the first option and also between adjacent\n options.\n\u003c/p\u003e\u003cp\u003eIf the alias is ambiguous, then the preferred converter is used.\n\u003c/p\u003e\u003cp\u003eThe conversion behavior and names can vary between platforms. ICU\n may convert some characters differently from other\n platforms. Details on this topic are in the ICU User's Guide at\n \u003ca\u003ehttp://icu-project.org/userguide/conversion.html\u003c/a\u003e. Aliases\n starting with a \u003ccode\u003e\"cp\"\u003c/code\u003e prefix have no specific meaning other than\n its an alias starting with the letters \u003ccode\u003e\"cp\"\u003c/code\u003e. Please do not\n associate any meaning to these aliases.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "open",
          "package": "text-icu",
          "signature": "String-\u003e Maybe Bool-\u003e IO Converter",
          "type": "function"
        },
        "index": {
          "description": "Create Converter with the name of coded character set specified as string The actual name will be resolved with the alias file using case-insensitive string comparison that ignores leading zeroes and all non-alphanumeric characters E.g the names UTF8 utf-8 T@f08 and Utf are all equivalent see also compareNames If an empty string is passed for the converter name it will create one with the getDefaultName return value converter name may contain options like locale specification to control the specific behavior of the newly instantiated converter The meaning of the options depends on the particular converter If an option is not defined for or recognized by given converter then it is ignored Options are appended to the converter name string with comma between the name and the first option and also between adjacent options If the alias is ambiguous then the preferred converter is used The conversion behavior and names can vary between platforms ICU may convert some characters differently from other platforms Details on this topic are in the ICU User Guide at http icu-project.org userguide conversion.html Aliases starting with cp prefix have no specific meaning other than its an alias starting with the letters cp Please do not associate any meaning to these aliases",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "open",
          "normalized": "String-\u003eMaybe Bool-\u003eIO Converter",
          "package": "text-icu",
          "signature": "String-\u003eMaybe Bool-\u003eIO Converter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the current default converter name. If this function needs\n to be called, it should be called during application\n initialization. Most of the time, the results from \u003ccode\u003e\u003ca\u003egetDefaultName\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e with an empty string argument is sufficient for your\n application.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: this function is not thread safe. \u003cem\u003eDo not\u003c/em\u003e call this\n function when \u003cem\u003eany\u003c/em\u003e ICU function is being used from more than one\n thread!\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "setDefaultName",
          "package": "text-icu",
          "signature": "String -\u003e IO ()",
          "source": "src/Data-Text-ICU-Convert.html#setDefaultName",
          "type": "function"
        },
        "index": {
          "description": "Sets the current default converter name If this function needs to be called it should be called during application initialization Most of the time the results from getDefaultName or open with an empty string argument is sufficient for your application Note this function is not thread safe Do not call this function when any ICU function is being used from more than one thread",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "setDefaultName",
          "normalized": "String-\u003eIO()",
          "package": "text-icu",
          "partial": "Default Name",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:setDefaultName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of supported standard names.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "standardNames",
          "package": "text-icu",
          "signature": "[String]",
          "source": "src/Data-Text-ICU-Convert.html#standardNames",
          "type": "function"
        },
        "index": {
          "description": "The list of supported standard names",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "standardNames",
          "normalized": "[String]",
          "package": "text-icu",
          "partial": "Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:standardNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the codepage string into a Unicode string using the given\n converter.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "toUnicode",
          "package": "text-icu",
          "signature": "Converter -\u003e ByteString -\u003e Text",
          "source": "src/Data-Text-ICU-Convert.html#toUnicode",
          "type": "function"
        },
        "index": {
          "description": "Convert the codepage string into Unicode string using the given converter",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "toUnicode",
          "normalized": "Converter-\u003eByteString-\u003eText",
          "package": "text-icu",
          "partial": "Unicode",
          "signature": "Converter-\u003eByteString-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:toUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether the converter uses fallback mappings or not.\n This flag has restrictions.  Regardless of this flag, the converter\n will always use fallbacks from Unicode Private Use code points, as\n well as reverse fallbacks (to Unicode).  For details see \".ucm\n File Format\" in the Conversion Data chapter of the ICU User Guide:\n \u003ca\u003ehttp://www.icu-project.org/userguide/conversion-data.html#ucmformat\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Convert",
          "name": "usesFallback",
          "package": "text-icu",
          "signature": "Converter -\u003e Bool",
          "source": "src/Data-Text-ICU-Convert.html#usesFallback",
          "type": "function"
        },
        "index": {
          "description": "Determines whether the converter uses fallback mappings or not This flag has restrictions Regardless of this flag the converter will always use fallbacks from Unicode Private Use code points as well as reverse fallbacks to Unicode For details see ucm File Format in the Conversion Data chapter of the ICU User Guide http www.icu-project.org userguide conversion-data.html ucmformat",
          "hierarchy": "Data Text ICU Convert",
          "module": "Data.Text.ICU.Convert",
          "name": "usesFallback",
          "normalized": "Converter-\u003eBool",
          "package": "text-icu",
          "partial": "Fallback",
          "signature": "Converter-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Convert.html#v:usesFallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "Error",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "Error",
          "package": "text-icu",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eICU error type.  This is an instance of the \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e type\n class.  A value of this type may be thrown as an exception by most\n ICU functions.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Error",
          "name": "ICUError",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Error-Internal.html#ICUError",
          "type": "data"
        },
        "index": {
          "description": "ICU error type This is an instance of the Exception type class value of this type may be thrown as an exception by most ICU functions",
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "ICUError",
          "package": "text-icu",
          "partial": "ICUError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#t:ICUError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed information about parsing errors.  Used by ICU parsing\n engines that parse long rules, patterns, or programs, where the\n text being parsed is long enough that more information than an\n \u003ccode\u003e\u003ca\u003eICUError\u003c/a\u003e\u003c/code\u003e is needed to localize the error.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Error",
          "name": "ParseError",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Error-Internal.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "Detailed information about parsing errors Used by ICU parsing engines that parse long rules patterns or programs where the text being parsed is long enough that more information than an ICUError is needed to localize the error",
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "ParseError",
          "package": "text-icu",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a string representing the name of the given error code.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Error",
          "name": "errorName",
          "package": "text-icu",
          "signature": "ICUError -\u003e String",
          "source": "src/Data-Text-ICU-Error-Internal.html#errorName",
          "type": "function"
        },
        "index": {
          "description": "Return string representing the name of the given error code",
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "errorName",
          "normalized": "ICUError-\u003eString",
          "package": "text-icu",
          "partial": "Name",
          "signature": "ICUError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:errorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether the given error code is a failure.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Error",
          "name": "isFailure",
          "package": "text-icu",
          "signature": "ICUError -\u003e Bool",
          "source": "src/Data-Text-ICU-Error-Internal.html#isFailure",
          "type": "function"
        },
        "index": {
          "description": "Indicate whether the given error code is failure",
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "isFailure",
          "normalized": "ICUError-\u003eBool",
          "package": "text-icu",
          "partial": "Failure",
          "signature": "ICUError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:isFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "isRegexError",
          "package": "text-icu",
          "signature": "ICUError -\u003e Bool",
          "source": "src/Data-Text-ICU-Error.html#isRegexError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "isRegexError",
          "normalized": "ICUError-\u003eBool",
          "package": "text-icu",
          "partial": "Regex Error",
          "signature": "ICUError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:isRegexError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether the given error code is a success.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Error",
          "name": "isSuccess",
          "package": "text-icu",
          "signature": "ICUError -\u003e Bool",
          "source": "src/Data-Text-ICU-Error-Internal.html#isSuccess",
          "type": "function"
        },
        "index": {
          "description": "Indicate whether the given error code is success",
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "isSuccess",
          "normalized": "ICUError-\u003eBool",
          "package": "text-icu",
          "partial": "Success",
          "signature": "ICUError-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:isSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_AMBIGUOUS_ALIAS_WARNING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_AMBIGUOUS_ALIAS_WARNING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_AMBIGUOUS_ALIAS_WARNING",
          "package": "text-icu",
          "partial": "AMBIGUOUS ALIAS WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_AMBIGUOUS_ALIAS_WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_ARGUMENT_TYPE_MISMATCH",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_ARGUMENT_TYPE_MISMATCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_ARGUMENT_TYPE_MISMATCH",
          "package": "text-icu",
          "partial": "ARGUMENT TYPE MISMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_ARGUMENT_TYPE_MISMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BAD_VARIABLE_DEFINITION",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BAD_VARIABLE_DEFINITION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BAD_VARIABLE_DEFINITION",
          "package": "text-icu",
          "partial": "BAD VARIABLE DEFINITION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BAD_VARIABLE_DEFINITION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_ASSIGN_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_ASSIGN_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_ASSIGN_ERROR",
          "package": "text-icu",
          "partial": "BRK ASSIGN ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_ASSIGN_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_HEX_DIGITS_EXPECTED",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_HEX_DIGITS_EXPECTED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_HEX_DIGITS_EXPECTED",
          "package": "text-icu",
          "partial": "BRK HEX DIGITS EXPECTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_HEX_DIGITS_EXPECTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_INIT_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_INIT_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_INIT_ERROR",
          "package": "text-icu",
          "partial": "BRK INIT ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_INIT_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_INTERNAL_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_INTERNAL_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_INTERNAL_ERROR",
          "package": "text-icu",
          "partial": "BRK INTERNAL ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_INTERNAL_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_MALFORMED_RULE_TAG",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_MALFORMED_RULE_TAG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_MALFORMED_RULE_TAG",
          "package": "text-icu",
          "partial": "BRK MALFORMED RULE TAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_MALFORMED_RULE_TAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_MISMATCHED_PAREN",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_MISMATCHED_PAREN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_MISMATCHED_PAREN",
          "package": "text-icu",
          "partial": "BRK MISMATCHED PAREN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_MISMATCHED_PAREN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_NEW_LINE_IN_QUOTED_STRING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_NEW_LINE_IN_QUOTED_STRING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_NEW_LINE_IN_QUOTED_STRING",
          "package": "text-icu",
          "partial": "BRK NEW LINE IN QUOTED STRING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_NEW_LINE_IN_QUOTED_STRING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_RULE_EMPTY_SET",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_RULE_EMPTY_SET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_RULE_EMPTY_SET",
          "package": "text-icu",
          "partial": "BRK RULE EMPTY SET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_RULE_EMPTY_SET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_RULE_SYNTAX",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_RULE_SYNTAX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_RULE_SYNTAX",
          "package": "text-icu",
          "partial": "BRK RULE SYNTAX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_RULE_SYNTAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_SEMICOLON_EXPECTED",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_SEMICOLON_EXPECTED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_SEMICOLON_EXPECTED",
          "package": "text-icu",
          "partial": "BRK SEMICOLON EXPECTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_SEMICOLON_EXPECTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_UNCLOSED_SET",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_UNCLOSED_SET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_UNCLOSED_SET",
          "package": "text-icu",
          "partial": "BRK UNCLOSED SET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_UNCLOSED_SET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_UNDEFINED_VARIABLE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_UNDEFINED_VARIABLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_UNDEFINED_VARIABLE",
          "package": "text-icu",
          "partial": "BRK UNDEFINED VARIABLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_UNDEFINED_VARIABLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_UNRECOGNIZED_OPTION",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_UNRECOGNIZED_OPTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_UNRECOGNIZED_OPTION",
          "package": "text-icu",
          "partial": "BRK UNRECOGNIZED OPTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_UNRECOGNIZED_OPTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_VARIABLE_REDFINITION",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BRK_VARIABLE_REDFINITION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BRK_VARIABLE_REDFINITION",
          "package": "text-icu",
          "partial": "BRK VARIABLE REDFINITION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BRK_VARIABLE_REDFINITION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_BUFFER_OVERFLOW_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_BUFFER_OVERFLOW_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_BUFFER_OVERFLOW_ERROR",
          "package": "text-icu",
          "partial": "BUFFER OVERFLOW ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_BUFFER_OVERFLOW_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_CE_NOT_FOUND_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_CE_NOT_FOUND_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_CE_NOT_FOUND_ERROR",
          "package": "text-icu",
          "partial": "CE NOT FOUND ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_CE_NOT_FOUND_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_COLLATOR_VERSION_MISMATCH",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_COLLATOR_VERSION_MISMATCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_COLLATOR_VERSION_MISMATCH",
          "package": "text-icu",
          "partial": "COLLATOR VERSION MISMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_COLLATOR_VERSION_MISMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_DEFAULT_KEYWORD_MISSING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_DEFAULT_KEYWORD_MISSING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_DEFAULT_KEYWORD_MISSING",
          "package": "text-icu",
          "partial": "DEFAULT KEYWORD MISSING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_DEFAULT_KEYWORD_MISSING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_DIFFERENT_UCA_VERSION",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_DIFFERENT_UCA_VERSION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_DIFFERENT_UCA_VERSION",
          "package": "text-icu",
          "partial": "DIFFERENT UCA VERSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_DIFFERENT_UCA_VERSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_DUPLICATE_KEYWORD",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_DUPLICATE_KEYWORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_DUPLICATE_KEYWORD",
          "package": "text-icu",
          "partial": "DUPLICATE KEYWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_DUPLICATE_KEYWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_ENUM_OUT_OF_SYNC_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_ENUM_OUT_OF_SYNC_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_ENUM_OUT_OF_SYNC_ERROR",
          "package": "text-icu",
          "partial": "ENUM OUT OF SYNC ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_ENUM_OUT_OF_SYNC_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_FILE_ACCESS_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_FILE_ACCESS_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_FILE_ACCESS_ERROR",
          "package": "text-icu",
          "partial": "FILE ACCESS ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_FILE_ACCESS_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_ACE_PREFIX_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_IDNA_ACE_PREFIX_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_ACE_PREFIX_ERROR",
          "package": "text-icu",
          "partial": "IDNA ACE PREFIX ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_IDNA_ACE_PREFIX_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_CHECK_BIDI_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_IDNA_CHECK_BIDI_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_CHECK_BIDI_ERROR",
          "package": "text-icu",
          "partial": "IDNA CHECK BIDI ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_IDNA_CHECK_BIDI_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_DOMAIN_NAME_TOO_LONG_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_IDNA_DOMAIN_NAME_TOO_LONG_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_DOMAIN_NAME_TOO_LONG_ERROR",
          "package": "text-icu",
          "partial": "IDNA DOMAIN NAME TOO LONG ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_IDNA_DOMAIN_NAME_TOO_LONG_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_LABEL_TOO_LONG_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_IDNA_LABEL_TOO_LONG_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_LABEL_TOO_LONG_ERROR",
          "package": "text-icu",
          "partial": "IDNA LABEL TOO LONG ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_IDNA_LABEL_TOO_LONG_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_PROHIBITED_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_IDNA_PROHIBITED_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_PROHIBITED_ERROR",
          "package": "text-icu",
          "partial": "IDNA PROHIBITED ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_IDNA_PROHIBITED_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_STD3_ASCII_RULES_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_IDNA_STD3_ASCII_RULES_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_STD3_ASCII_RULES_ERROR",
          "package": "text-icu",
          "partial": "IDNA STD ASCII RULES ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_IDNA_STD3_ASCII_RULES_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_UNASSIGNED_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_IDNA_UNASSIGNED_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_UNASSIGNED_ERROR",
          "package": "text-icu",
          "partial": "IDNA UNASSIGNED ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_IDNA_UNASSIGNED_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_VERIFICATION_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_IDNA_VERIFICATION_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_VERIFICATION_ERROR",
          "package": "text-icu",
          "partial": "IDNA VERIFICATION ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_IDNA_VERIFICATION_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_ZERO_LENGTH_LABEL_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_IDNA_ZERO_LENGTH_LABEL_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_IDNA_ZERO_LENGTH_LABEL_ERROR",
          "package": "text-icu",
          "partial": "IDNA ZERO LENGTH LABEL ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_IDNA_ZERO_LENGTH_LABEL_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_ARGUMENT_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_ILLEGAL_ARGUMENT_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_ARGUMENT_ERROR",
          "package": "text-icu",
          "partial": "ILLEGAL ARGUMENT ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_ILLEGAL_ARGUMENT_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_CHARACTER",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_ILLEGAL_CHARACTER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_CHARACTER",
          "package": "text-icu",
          "partial": "ILLEGAL CHARACTER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_ILLEGAL_CHARACTER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_CHAR_FOUND",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_ILLEGAL_CHAR_FOUND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_CHAR_FOUND",
          "package": "text-icu",
          "partial": "ILLEGAL CHAR FOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_ILLEGAL_CHAR_FOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_ESCAPE_SEQUENCE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_ILLEGAL_ESCAPE_SEQUENCE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_ESCAPE_SEQUENCE",
          "package": "text-icu",
          "partial": "ILLEGAL ESCAPE SEQUENCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_ILLEGAL_ESCAPE_SEQUENCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_PAD_POSITION",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_ILLEGAL_PAD_POSITION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_ILLEGAL_PAD_POSITION",
          "package": "text-icu",
          "partial": "ILLEGAL PAD POSITION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_ILLEGAL_PAD_POSITION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INDEX_OUTOFBOUNDS_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INDEX_OUTOFBOUNDS_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INDEX_OUTOFBOUNDS_ERROR",
          "package": "text-icu",
          "partial": "INDEX OUTOFBOUNDS ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INDEX_OUTOFBOUNDS_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INTERNAL_PROGRAM_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INTERNAL_PROGRAM_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INTERNAL_PROGRAM_ERROR",
          "package": "text-icu",
          "partial": "INTERNAL PROGRAM ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INTERNAL_PROGRAM_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INTERNAL_TRANSLITERATOR_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INTERNAL_TRANSLITERATOR_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INTERNAL_TRANSLITERATOR_ERROR",
          "package": "text-icu",
          "partial": "INTERNAL TRANSLITERATOR ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INTERNAL_TRANSLITERATOR_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_CHAR_FOUND",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INVALID_CHAR_FOUND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_CHAR_FOUND",
          "package": "text-icu",
          "partial": "INVALID CHAR FOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INVALID_CHAR_FOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_FORMAT_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INVALID_FORMAT_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_FORMAT_ERROR",
          "package": "text-icu",
          "partial": "INVALID FORMAT ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INVALID_FORMAT_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_FUNCTION",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INVALID_FUNCTION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_FUNCTION",
          "package": "text-icu",
          "partial": "INVALID FUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INVALID_FUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_ID",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INVALID_ID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_ID",
          "package": "text-icu",
          "partial": "INVALID ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INVALID_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_RBT_SYNTAX",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INVALID_RBT_SYNTAX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_RBT_SYNTAX",
          "package": "text-icu",
          "partial": "INVALID RBT SYNTAX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INVALID_RBT_SYNTAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_STATE_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INVALID_STATE_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_STATE_ERROR",
          "package": "text-icu",
          "partial": "INVALID STATE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INVALID_STATE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_TABLE_FILE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INVALID_TABLE_FILE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_TABLE_FILE",
          "package": "text-icu",
          "partial": "INVALID TABLE FILE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INVALID_TABLE_FILE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_TABLE_FORMAT",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INVALID_TABLE_FORMAT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INVALID_TABLE_FORMAT",
          "package": "text-icu",
          "partial": "INVALID TABLE FORMAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INVALID_TABLE_FORMAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_INVARIANT_CONVERSION_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_INVARIANT_CONVERSION_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_INVARIANT_CONVERSION_ERROR",
          "package": "text-icu",
          "partial": "INVARIANT CONVERSION ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_INVARIANT_CONVERSION_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_EXPONENTIAL_PATTERN",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MALFORMED_EXPONENTIAL_PATTERN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_EXPONENTIAL_PATTERN",
          "package": "text-icu",
          "partial": "MALFORMED EXPONENTIAL PATTERN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MALFORMED_EXPONENTIAL_PATTERN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_PRAGMA",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MALFORMED_PRAGMA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_PRAGMA",
          "package": "text-icu",
          "partial": "MALFORMED PRAGMA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MALFORMED_PRAGMA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_RULE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MALFORMED_RULE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_RULE",
          "package": "text-icu",
          "partial": "MALFORMED RULE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MALFORMED_RULE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_SET",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MALFORMED_SET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_SET",
          "package": "text-icu",
          "partial": "MALFORMED SET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MALFORMED_SET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_UNICODE_ESCAPE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MALFORMED_UNICODE_ESCAPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_UNICODE_ESCAPE",
          "package": "text-icu",
          "partial": "MALFORMED UNICODE ESCAPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MALFORMED_UNICODE_ESCAPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_VARIABLE_DEFINITION",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MALFORMED_VARIABLE_DEFINITION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_VARIABLE_DEFINITION",
          "package": "text-icu",
          "partial": "MALFORMED VARIABLE DEFINITION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MALFORMED_VARIABLE_DEFINITION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_VARIABLE_REFERENCE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MALFORMED_VARIABLE_REFERENCE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MALFORMED_VARIABLE_REFERENCE",
          "package": "text-icu",
          "partial": "MALFORMED VARIABLE REFERENCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MALFORMED_VARIABLE_REFERENCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MEMORY_ALLOCATION_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MEMORY_ALLOCATION_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MEMORY_ALLOCATION_ERROR",
          "package": "text-icu",
          "partial": "MEMORY ALLOCATION ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MEMORY_ALLOCATION_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MESSAGE_PARSE_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MESSAGE_PARSE_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MESSAGE_PARSE_ERROR",
          "package": "text-icu",
          "partial": "MESSAGE PARSE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MESSAGE_PARSE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MISPLACED_COMPOUND_FILTER",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MISPLACED_COMPOUND_FILTER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MISPLACED_COMPOUND_FILTER",
          "package": "text-icu",
          "partial": "MISPLACED COMPOUND FILTER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MISPLACED_COMPOUND_FILTER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MISPLACED_CURSOR_OFFSET",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MISPLACED_CURSOR_OFFSET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MISPLACED_CURSOR_OFFSET",
          "package": "text-icu",
          "partial": "MISPLACED CURSOR OFFSET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MISPLACED_CURSOR_OFFSET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MISPLACED_QUANTIFIER",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MISPLACED_QUANTIFIER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MISPLACED_QUANTIFIER",
          "package": "text-icu",
          "partial": "MISPLACED QUANTIFIER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MISPLACED_QUANTIFIER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MISSING_OPERATOR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MISSING_OPERATOR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MISSING_OPERATOR",
          "package": "text-icu",
          "partial": "MISSING OPERATOR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MISSING_OPERATOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MISSING_RESOURCE_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MISSING_RESOURCE_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MISSING_RESOURCE_ERROR",
          "package": "text-icu",
          "partial": "MISSING RESOURCE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MISSING_RESOURCE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_ANTE_CONTEXTS",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MULTIPLE_ANTE_CONTEXTS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_ANTE_CONTEXTS",
          "package": "text-icu",
          "partial": "MULTIPLE ANTE CONTEXTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MULTIPLE_ANTE_CONTEXTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_COMPOUND_FILTERS",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MULTIPLE_COMPOUND_FILTERS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_COMPOUND_FILTERS",
          "package": "text-icu",
          "partial": "MULTIPLE COMPOUND FILTERS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MULTIPLE_COMPOUND_FILTERS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_CURSORS",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MULTIPLE_CURSORS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_CURSORS",
          "package": "text-icu",
          "partial": "MULTIPLE CURSORS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MULTIPLE_CURSORS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_DECIMAL_SEPARATORS",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MULTIPLE_DECIMAL_SEPARATORS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_DECIMAL_SEPARATORS",
          "package": "text-icu",
          "partial": "MULTIPLE DECIMAL SEPARATORS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MULTIPLE_DECIMAL_SEPARATORS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_EXPONENTIAL_SYMBOLS",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MULTIPLE_EXPONENTIAL_SYMBOLS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_EXPONENTIAL_SYMBOLS",
          "package": "text-icu",
          "partial": "MULTIPLE EXPONENTIAL SYMBOLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MULTIPLE_EXPONENTIAL_SYMBOLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_PAD_SPECIFIERS",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MULTIPLE_PAD_SPECIFIERS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_PAD_SPECIFIERS",
          "package": "text-icu",
          "partial": "MULTIPLE PAD SPECIFIERS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MULTIPLE_PAD_SPECIFIERS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_PERCENT_SYMBOLS",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MULTIPLE_PERCENT_SYMBOLS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_PERCENT_SYMBOLS",
          "package": "text-icu",
          "partial": "MULTIPLE PERCENT SYMBOLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MULTIPLE_PERCENT_SYMBOLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_PERMILL_SYMBOLS",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MULTIPLE_PERMILL_SYMBOLS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_PERMILL_SYMBOLS",
          "package": "text-icu",
          "partial": "MULTIPLE PERMILL SYMBOLS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MULTIPLE_PERMILL_SYMBOLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_POST_CONTEXTS",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_MULTIPLE_POST_CONTEXTS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_MULTIPLE_POST_CONTEXTS",
          "package": "text-icu",
          "partial": "MULTIPLE POST CONTEXTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_MULTIPLE_POST_CONTEXTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_NO_SPACE_AVAILABLE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_NO_SPACE_AVAILABLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_NO_SPACE_AVAILABLE",
          "package": "text-icu",
          "partial": "NO SPACE AVAILABLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_NO_SPACE_AVAILABLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_NO_WRITE_PERMISSION",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_NO_WRITE_PERMISSION",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_NO_WRITE_PERMISSION",
          "package": "text-icu",
          "partial": "NO WRITE PERMISSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_NO_WRITE_PERMISSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_PARSE_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_PARSE_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_PARSE_ERROR",
          "package": "text-icu",
          "partial": "PARSE ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_PARSE_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_PATTERN_SYNTAX_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_PATTERN_SYNTAX_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_PATTERN_SYNTAX_ERROR",
          "package": "text-icu",
          "partial": "PATTERN SYNTAX ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_PATTERN_SYNTAX_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_PRIMARY_TOO_LONG_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_PRIMARY_TOO_LONG_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_PRIMARY_TOO_LONG_ERROR",
          "package": "text-icu",
          "partial": "PRIMARY TOO LONG ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_PRIMARY_TOO_LONG_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_BAD_ESCAPE_SEQUENCE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_BAD_ESCAPE_SEQUENCE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_BAD_ESCAPE_SEQUENCE",
          "package": "text-icu",
          "partial": "REGEX BAD ESCAPE SEQUENCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_BAD_ESCAPE_SEQUENCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_BAD_INTERVAL",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_BAD_INTERVAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_BAD_INTERVAL",
          "package": "text-icu",
          "partial": "REGEX BAD INTERVAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_BAD_INTERVAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INTERNAL_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_INTERNAL_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INTERNAL_ERROR",
          "package": "text-icu",
          "partial": "REGEX INTERNAL ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_INTERNAL_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INVALID_BACK_REF",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_INVALID_BACK_REF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INVALID_BACK_REF",
          "package": "text-icu",
          "partial": "REGEX INVALID BACK REF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_INVALID_BACK_REF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INVALID_FLAG",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_INVALID_FLAG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INVALID_FLAG",
          "package": "text-icu",
          "partial": "REGEX INVALID FLAG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_INVALID_FLAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INVALID_RANGE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_INVALID_RANGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INVALID_RANGE",
          "package": "text-icu",
          "partial": "REGEX INVALID RANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_INVALID_RANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INVALID_STATE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_INVALID_STATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_INVALID_STATE",
          "package": "text-icu",
          "partial": "REGEX INVALID STATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_INVALID_STATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_MAX_LT_MIN",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_MAX_LT_MIN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_MAX_LT_MIN",
          "package": "text-icu",
          "partial": "REGEX MAX LT MIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_MAX_LT_MIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_MISMATCHED_PAREN",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_MISMATCHED_PAREN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_MISMATCHED_PAREN",
          "package": "text-icu",
          "partial": "REGEX MISMATCHED PAREN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_MISMATCHED_PAREN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_NUMBER_TOO_BIG",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_NUMBER_TOO_BIG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_NUMBER_TOO_BIG",
          "package": "text-icu",
          "partial": "REGEX NUMBER TOO BIG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_NUMBER_TOO_BIG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_OCTAL_TOO_BIG",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_OCTAL_TOO_BIG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_OCTAL_TOO_BIG",
          "package": "text-icu",
          "partial": "REGEX OCTAL TOO BIG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_OCTAL_TOO_BIG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_PROPERTY_SYNTAX",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_PROPERTY_SYNTAX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_PROPERTY_SYNTAX",
          "package": "text-icu",
          "partial": "REGEX PROPERTY SYNTAX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_PROPERTY_SYNTAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_RULE_SYNTAX",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_RULE_SYNTAX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_RULE_SYNTAX",
          "package": "text-icu",
          "partial": "REGEX RULE SYNTAX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_RULE_SYNTAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_SET_CONTAINS_STRING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_SET_CONTAINS_STRING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_SET_CONTAINS_STRING",
          "package": "text-icu",
          "partial": "REGEX SET CONTAINS STRING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_SET_CONTAINS_STRING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_STACK_OVERFLOW",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_STACK_OVERFLOW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_STACK_OVERFLOW",
          "package": "text-icu",
          "partial": "REGEX STACK OVERFLOW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_STACK_OVERFLOW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_STOPPED_BY_CALLER",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_STOPPED_BY_CALLER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_STOPPED_BY_CALLER",
          "package": "text-icu",
          "partial": "REGEX STOPPED BY CALLER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_STOPPED_BY_CALLER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_TIME_OUT",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_TIME_OUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_TIME_OUT",
          "package": "text-icu",
          "partial": "REGEX TIME OUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_TIME_OUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_UNIMPLEMENTED",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_REGEX_UNIMPLEMENTED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_REGEX_UNIMPLEMENTED",
          "package": "text-icu",
          "partial": "REGEX UNIMPLEMENTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_REGEX_UNIMPLEMENTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_RESOURCE_TYPE_MISMATCH",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_RESOURCE_TYPE_MISMATCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_RESOURCE_TYPE_MISMATCH",
          "package": "text-icu",
          "partial": "RESOURCE TYPE MISMATCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_RESOURCE_TYPE_MISMATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_RULE_MASK_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_RULE_MASK_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_RULE_MASK_ERROR",
          "package": "text-icu",
          "partial": "RULE MASK ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_RULE_MASK_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_SAFECLONE_ALLOCATED_WARNING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_SAFECLONE_ALLOCATED_WARNING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_SAFECLONE_ALLOCATED_WARNING",
          "package": "text-icu",
          "partial": "SAFECLONE ALLOCATED WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_SAFECLONE_ALLOCATED_WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_SORT_KEY_TOO_SHORT_WARNING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_SORT_KEY_TOO_SHORT_WARNING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_SORT_KEY_TOO_SHORT_WARNING",
          "package": "text-icu",
          "partial": "SORT KEY TOO SHORT WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_SORT_KEY_TOO_SHORT_WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_STATE_OLD_WARNING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_STATE_OLD_WARNING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_STATE_OLD_WARNING",
          "package": "text-icu",
          "partial": "STATE OLD WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_STATE_OLD_WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_STATE_TOO_OLD_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_STATE_TOO_OLD_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_STATE_TOO_OLD_ERROR",
          "package": "text-icu",
          "partial": "STATE TOO OLD ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_STATE_TOO_OLD_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_STRING_NOT_TERMINATED_WARNING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_STRING_NOT_TERMINATED_WARNING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_STRING_NOT_TERMINATED_WARNING",
          "package": "text-icu",
          "partial": "STRING NOT TERMINATED WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_STRING_NOT_TERMINATED_WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_TOO_MANY_ALIASES_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_TOO_MANY_ALIASES_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_TOO_MANY_ALIASES_ERROR",
          "package": "text-icu",
          "partial": "TOO MANY ALIASES ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_TOO_MANY_ALIASES_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_TRAILING_BACKSLASH",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_TRAILING_BACKSLASH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_TRAILING_BACKSLASH",
          "package": "text-icu",
          "partial": "TRAILING BACKSLASH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_TRAILING_BACKSLASH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_TRUNCATED_CHAR_FOUND",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_TRUNCATED_CHAR_FOUND",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_TRUNCATED_CHAR_FOUND",
          "package": "text-icu",
          "partial": "TRUNCATED CHAR FOUND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_TRUNCATED_CHAR_FOUND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNCLOSED_SEGMENT",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNCLOSED_SEGMENT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNCLOSED_SEGMENT",
          "package": "text-icu",
          "partial": "UNCLOSED SEGMENT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNCLOSED_SEGMENT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNDEFINED_KEYWORD",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNDEFINED_KEYWORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNDEFINED_KEYWORD",
          "package": "text-icu",
          "partial": "UNDEFINED KEYWORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNDEFINED_KEYWORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNDEFINED_SEGMENT_REFERENCE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNDEFINED_SEGMENT_REFERENCE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNDEFINED_SEGMENT_REFERENCE",
          "package": "text-icu",
          "partial": "UNDEFINED SEGMENT REFERENCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNDEFINED_SEGMENT_REFERENCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNDEFINED_VARIABLE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNDEFINED_VARIABLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNDEFINED_VARIABLE",
          "package": "text-icu",
          "partial": "UNDEFINED VARIABLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNDEFINED_VARIABLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNEXPECTED_TOKEN",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNEXPECTED_TOKEN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNEXPECTED_TOKEN",
          "package": "text-icu",
          "partial": "UNEXPECTED TOKEN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNEXPECTED_TOKEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNMATCHED_BRACES",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNMATCHED_BRACES",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNMATCHED_BRACES",
          "package": "text-icu",
          "partial": "UNMATCHED BRACES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNMATCHED_BRACES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNQUOTED_SPECIAL",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNQUOTED_SPECIAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNQUOTED_SPECIAL",
          "package": "text-icu",
          "partial": "UNQUOTED SPECIAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNQUOTED_SPECIAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNSUPPORTED_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNSUPPORTED_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNSUPPORTED_ERROR",
          "package": "text-icu",
          "partial": "UNSUPPORTED ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNSUPPORTED_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNSUPPORTED_ESCAPE_SEQUENCE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNSUPPORTED_ESCAPE_SEQUENCE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNSUPPORTED_ESCAPE_SEQUENCE",
          "package": "text-icu",
          "partial": "UNSUPPORTED ESCAPE SEQUENCE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNSUPPORTED_ESCAPE_SEQUENCE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_UNTERMINATED_QUOTE",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_UNTERMINATED_QUOTE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_UNTERMINATED_QUOTE",
          "package": "text-icu",
          "partial": "UNTERMINATED QUOTE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_UNTERMINATED_QUOTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_USELESS_COLLATOR_ERROR",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_USELESS_COLLATOR_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_USELESS_COLLATOR_ERROR",
          "package": "text-icu",
          "partial": "USELESS COLLATOR ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_USELESS_COLLATOR_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_USING_DEFAULT_WARNING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_USING_DEFAULT_WARNING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_USING_DEFAULT_WARNING",
          "package": "text-icu",
          "partial": "USING DEFAULT WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_USING_DEFAULT_WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_USING_FALLBACK_WARNING",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_USING_FALLBACK_WARNING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_USING_FALLBACK_WARNING",
          "package": "text-icu",
          "partial": "USING FALLBACK WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_USING_FALLBACK_WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_VARIABLE_RANGE_EXHAUSTED",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_VARIABLE_RANGE_EXHAUSTED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_VARIABLE_RANGE_EXHAUSTED",
          "package": "text-icu",
          "partial": "VARIABLE RANGE EXHAUSTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_VARIABLE_RANGE_EXHAUSTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.ICU.Error",
          "name": "u_VARIABLE_RANGE_OVERLAP",
          "package": "text-icu",
          "signature": "ICUError",
          "source": "src/Data-Text-ICU-Error.html#u_VARIABLE_RANGE_OVERLAP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text ICU Error",
          "module": "Data.Text.ICU.Error",
          "name": "u_VARIABLE_RANGE_OVERLAP",
          "package": "text-icu",
          "partial": "VARIABLE RANGE OVERLAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Error.html#v:u_VARIABLE_RANGE_OVERLAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCharacter set normalization functions for Unicode, implemented as\n bindings to the International Components for Unicode (ICU)\n libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.ICU.Normalize",
          "name": "Normalize",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Normalize.html",
          "type": "module"
        },
        "index": {
          "description": "Character set normalization functions for Unicode implemented as bindings to the International Components for Unicode ICU libraries",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "Normalize",
          "package": "text-icu",
          "partial": "Normalize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions to \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Normalize",
          "name": "CompareOption",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Normalize.html#CompareOption",
          "type": "data"
        },
        "index": {
          "description": "Options to compare",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "CompareOption",
          "package": "text-icu",
          "partial": "Compare Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#t:CompareOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalization modes.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Normalize",
          "name": "NormalizationMode",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Normalize.html#NormalizationMode",
          "type": "data"
        },
        "index": {
          "description": "Normalization modes",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "NormalizationMode",
          "package": "text-icu",
          "partial": "Normalization Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#t:NormalizationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare strings case-insensitively using case\n folding, instead of case-sensitively.  If set,\n then the following case folding options are\n used.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "CompareIgnoreCase",
          "package": "text-icu",
          "signature": "CompareIgnoreCase",
          "source": "src/Data-Text-ICU-Normalize.html#CompareOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:CompareIgnoreCase\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:CompareIgnoreCase\"]"
        },
        "index": {
          "description": "Compare strings case-insensitively using case folding instead of case-sensitively If set then the following case folding options are used",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "CompareIgnoreCase",
          "package": "text-icu",
          "partial": "Compare Ignore Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:CompareIgnoreCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Fast C or D\" form.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "FCD",
          "package": "text-icu",
          "signature": "FCD",
          "source": "src/Data-Text-ICU-Normalize.html#NormalizationMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:FCD\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:FCD\"]"
        },
        "index": {
          "description": "Fast or form",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "FCD",
          "package": "text-icu",
          "partial": "FCD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:FCD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen case folding, exclude the special I\n character.  For use with Turkic\n (Turkish/Azerbaijani) text data.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "FoldCaseExcludeSpecialI",
          "package": "text-icu",
          "signature": "FoldCaseExcludeSpecialI",
          "source": "src/Data-Text-ICU-Normalize.html#CompareOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:FoldCaseExcludeSpecialI\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:FoldCaseExcludeSpecialI\"]"
        },
        "index": {
          "description": "When case folding exclude the special character For use with Turkic Turkish Azerbaijani text data",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "FoldCaseExcludeSpecialI",
          "package": "text-icu",
          "partial": "Fold Case Exclude Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:FoldCaseExcludeSpecialI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe caller knows that both strings fulfill the\n \u003ccode\u003e\u003ca\u003eFCD\u003c/a\u003e\u003c/code\u003e conditions.  If \u003cem\u003enot\u003c/em\u003e set, \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e will\n \u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eFCD\u003c/a\u003e\u003c/code\u003e and normalize if\n necessary.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "InputIsFCD",
          "package": "text-icu",
          "signature": "InputIsFCD",
          "source": "src/Data-Text-ICU-Normalize.html#CompareOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:InputIsFCD\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:InputIsFCD\"]"
        },
        "index": {
          "description": "The caller knows that both strings fulfill the FCD conditions If not set compare will quickCheck for FCD and normalize if necessary",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "InputIsFCD",
          "package": "text-icu",
          "partial": "Input Is FCD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:InputIsFCD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonical decomposition followed by canonical composition.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "NFC",
          "package": "text-icu",
          "signature": "NFC",
          "source": "src/Data-Text-ICU-Normalize.html#NormalizationMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:NFC\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:NFC\"]"
        },
        "index": {
          "description": "Canonical decomposition followed by canonical composition",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "NFC",
          "package": "text-icu",
          "partial": "NFC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:NFC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonical decomposition.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "NFD",
          "package": "text-icu",
          "signature": "NFD",
          "source": "src/Data-Text-ICU-Normalize.html#NormalizationMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:NFD\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:NFD\"]"
        },
        "index": {
          "description": "Canonical decomposition",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "NFD",
          "package": "text-icu",
          "partial": "NFD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:NFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility decomposition followed by canonical composition.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "NFKC",
          "package": "text-icu",
          "signature": "NFKC",
          "source": "src/Data-Text-ICU-Normalize.html#NormalizationMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:NFKC\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:NFKC\"]"
        },
        "index": {
          "description": "Compatibility decomposition followed by canonical composition",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "NFKC",
          "package": "text-icu",
          "partial": "NFKC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:NFKC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility decomposition.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "NFKD",
          "package": "text-icu",
          "signature": "NFKD",
          "source": "src/Data-Text-ICU-Normalize.html#NormalizationMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:NFKD\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:NFKD\"]"
        },
        "index": {
          "description": "Compatibility decomposition",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "NFKD",
          "package": "text-icu",
          "partial": "NFKD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:NFKD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo decomposition/composition.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "None",
          "package": "text-icu",
          "signature": "None",
          "source": "src/Data-Text-ICU-Normalize.html#NormalizationMode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:None\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:None\"]"
        },
        "index": {
          "description": "No decomposition composition",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "None",
          "package": "text-icu",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two strings for canonical equivalence.  Further options\n include case-insensitive comparison and code point order (as\n opposed to code unit order).\n\u003c/p\u003e\u003cp\u003eCanonical equivalence between two strings is defined as their\n normalized forms (\u003ccode\u003e\u003ca\u003eNFD\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNFC\u003c/a\u003e\u003c/code\u003e) being identical.  This function\n compares strings incrementally instead of normalizing (and\n optionally case-folding) both strings entirely, improving\n performance significantly.\n\u003c/p\u003e\u003cp\u003eBulk normalization is only necessary if the strings do not fulfill\n the \u003ccode\u003e\u003ca\u003eFCD\u003c/a\u003e\u003c/code\u003e conditions. Only in this case, and only if the strings\n are relatively long, is memory allocated temporarily.  For \u003ccode\u003e\u003ca\u003eFCD\u003c/a\u003e\u003c/code\u003e\n strings and short non-\u003ccode\u003e\u003ca\u003eFCD\u003c/a\u003e\u003c/code\u003e strings there is no memory allocation.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "compare",
          "package": "text-icu",
          "signature": "[CompareOption] -\u003e Text -\u003e Text -\u003e Ordering",
          "source": "src/Data-Text-ICU-Normalize.html#compare",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:compare\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:compare\"]"
        },
        "index": {
          "description": "Compare two strings for canonical equivalence Further options include case-insensitive comparison and code point order as opposed to code unit order Canonical equivalence between two strings is defined as their normalized forms NFD or NFC being identical This function compares strings incrementally instead of normalizing and optionally case-folding both strings entirely improving performance significantly Bulk normalization is only necessary if the strings do not fulfill the FCD conditions Only in this case and only if the strings are relatively long is memory allocated temporarily For FCD strings and short non FCD strings there is no memory allocation",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "compare",
          "normalized": "[CompareOption]-\u003eText-\u003eText-\u003eOrdering",
          "package": "text-icu",
          "signature": "[CompareOption]-\u003eText-\u003eText-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether a string is in a given normalization form.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e, this function returns a definitive result.\n For \u003ccode\u003e\u003ca\u003eNFD\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNFKD\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eFCD\u003c/a\u003e\u003c/code\u003e normalization forms, both functions\n work in exactly the same ways.  For \u003ccode\u003e\u003ca\u003eNFC\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNFKC\u003c/a\u003e\u003c/code\u003e forms, where\n \u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e may return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, this function will perform\n further tests to arrive at a definitive result.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "isNormalized",
          "package": "text-icu",
          "signature": "NormalizationMode -\u003e Text -\u003e Bool",
          "source": "src/Data-Text-ICU-Normalize.html#isNormalized",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:isNormalized\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:isNormalized\"]"
        },
        "index": {
          "description": "Indicate whether string is in given normalization form Unlike quickCheck this function returns definitive result For NFD NFKD and FCD normalization forms both functions work in exactly the same ways For NFC and NFKC forms where quickCheck may return Nothing this function will perform further tests to arrive at definitive result",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "isNormalized",
          "normalized": "NormalizationMode-\u003eText-\u003eBool",
          "package": "text-icu",
          "partial": "Normalized",
          "signature": "NormalizationMode-\u003eText-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:isNormalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize a string according the specified normalization mode.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "normalize",
          "package": "text-icu",
          "signature": "NormalizationMode -\u003e Text -\u003e Text",
          "source": "src/Data-Text-ICU-Normalize.html#normalize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:normalize\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:normalize\"]"
        },
        "index": {
          "description": "Normalize string according the specified normalization mode",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "normalize",
          "normalized": "NormalizationMode-\u003eText-\u003eText",
          "package": "text-icu",
          "signature": "NormalizationMode-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an efficient check on a string, to quickly determine if\n the string is in a particular normalization form.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e result indicates that a definite answer could not be\n determined quickly, and a more thorough check is required,\n e.g. with \u003ccode\u003e\u003ca\u003eisNormalized\u003c/a\u003e\u003c/code\u003e.  The user may have to convert the string\n to its normalized form and compare the results.\n\u003c/p\u003e\u003cp\u003eA result of \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e indicates that the\n string definitely is, or is not, in the given normalization form.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Normalize\",\"Data.Text.ICU\"]",
          "name": "quickCheck",
          "package": "text-icu",
          "signature": "NormalizationMode -\u003e Text -\u003e Maybe Bool",
          "source": "src/Data-Text-ICU-Normalize.html#quickCheck",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:quickCheck\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:quickCheck\"]"
        },
        "index": {
          "description": "Perform an efficient check on string to quickly determine if the string is in particular normalization form Nothing result indicates that definite answer could not be determined quickly and more thorough check is required e.g with isNormalized The user may have to convert the string to its normalized form and compare the results result of Just True or Just False indicates that the string definitely is or is not in the given normalization form",
          "hierarchy": "Data Text ICU Normalize",
          "module": "Data.Text.ICU.Normalize",
          "name": "quickCheck",
          "normalized": "NormalizationMode-\u003eText-\u003eMaybe Bool",
          "package": "text-icu",
          "partial": "Check",
          "signature": "NormalizationMode-\u003eText-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Normalize.html#v:quickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRegular expression support for Unicode, implemented as bindings to\n the International Components for Unicode (ICU) libraries.\n\u003c/p\u003e\u003cp\u003eThe syntax and behaviour of ICU regular expressions are Perl-like.\n For complete details, see the ICU User Guide entry at\n \u003ca\u003ehttp://userguide.icu-project.org/strings/regexp\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: The functions in this module are not thread safe.  For\n thread safe use, see \u003ccode\u003e\u003ca\u003eclone\u003c/a\u003e\u003c/code\u003e below, or use the pure functions in\n \u003ccode\u003e\u003ca\u003eICU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "Regex",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Regex.html",
          "type": "module"
        },
        "index": {
          "description": "Regular expression support for Unicode implemented as bindings to the International Components for Unicode ICU libraries The syntax and behaviour of ICU regular expressions are Perl-like For complete details see the ICU User Guide entry at http userguide.icu-project.org strings regexp Note The functions in this module are not thread safe For thread safe use see clone below or use the pure functions in ICU",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "Regex",
          "package": "text-icu",
          "partial": "Regex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for controlling matching behaviour.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "MatchOption",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "data"
        },
        "index": {
          "description": "Options for controlling matching behaviour",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "MatchOption",
          "package": "text-icu",
          "partial": "Match Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#t:MatchOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed information about parsing errors.  Used by ICU parsing\n engines that parse long rules, patterns, or programs, where the\n text being parsed is long enough that more information than an\n \u003ccode\u003e\u003ca\u003eICUError\u003c/a\u003e\u003c/code\u003e is needed to localize the error.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "ParseError",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Error-Internal.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "Detailed information about parsing errors Used by ICU parsing engines that parse long rules patterns or programs where the text being parsed is long enough that more information than an ICUError is needed to localize the error",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "ParseError",
          "package": "text-icu",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e values are usually constructed using the \u003ccode\u003e\u003ca\u003eregex\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003eregex'\u003c/code\u003e functions.  This type is also an instance of \u003ccode\u003eIsString\u003c/code\u003e,\n so if you have the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension enabled,\n you can construct a \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e by simply writing the pattern in\n quotes (though this does not allow you to specify any \u003ccode\u003eOption\u003c/code\u003es).\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "Regex",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Regex-Internal.html#Regex",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression Regex values are usually constructed using the regex or regex functions This type is also an instance of IsString so if you have the OverloadedStrings language extension enabled you can construct Regex by simply writing the pattern in quotes though this does not allow you to specify any Option",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "Regex",
          "package": "text-icu",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable case insensitive matching.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "CaseInsensitive",
          "package": "text-icu",
          "signature": "CaseInsensitive",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:CaseInsensitive\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:CaseInsensitive\"]"
        },
        "index": {
          "description": "Enable case insensitive matching",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "CaseInsensitive",
          "package": "text-icu",
          "partial": "Case Insensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:CaseInsensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow comments and white space within patterns.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "Comments",
          "package": "text-icu",
          "signature": "Comments",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:Comments\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Comments\"]"
        },
        "index": {
          "description": "Allow comments and white space within patterns",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "Comments",
          "package": "text-icu",
          "partial": "Comments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:Comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, \u003ccode\u003e'.'\u003c/code\u003e matches line terminators. Otherwise \u003ccode\u003e'.'\u003c/code\u003e\n matching stops at line end.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "DotAll",
          "package": "text-icu",
          "signature": "DotAll",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:DotAll\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:DotAll\"]"
        },
        "index": {
          "description": "If set matches line terminators Otherwise matching stops at line end",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "DotAll",
          "package": "text-icu",
          "partial": "Dot All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:DotAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an error on unrecognized backslash escapes.  If set,\n fail with an error on patterns that contain backslash-escaped\n ASCII letters without a known special meaning.  If this flag is\n not set, these escaped letters represent themselves.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "ErrorOnUnknownEscapes",
          "package": "text-icu",
          "signature": "ErrorOnUnknownEscapes",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:ErrorOnUnknownEscapes\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:ErrorOnUnknownEscapes\"]"
        },
        "index": {
          "description": "Throw an error on unrecognized backslash escapes If set fail with an error on patterns that contain backslash-escaped ASCII letters without known special meaning If this flag is not set these escaped letters represent themselves",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "ErrorOnUnknownEscapes",
          "package": "text-icu",
          "partial": "Error On Unknown Escapes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:ErrorOnUnknownEscapes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell-only line endings.  When this mode is enabled, only\n \u003ccode\u003e'\\n'\u003c/code\u003e is recognized as a line ending in the behavior of\n \u003ccode\u003e'.'\u003c/code\u003e, \u003ccode\u003e'^'\u003c/code\u003e, and \u003ccode\u003e'$'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "HaskellLines",
          "package": "text-icu",
          "signature": "HaskellLines",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:HaskellLines\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:HaskellLines\"]"
        },
        "index": {
          "description": "Haskell-only line endings When this mode is enabled only is recognized as line ending in the behavior of and",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "HaskellLines",
          "package": "text-icu",
          "partial": "Haskell Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:HaskellLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, treat the entire pattern as a literal string.\n  Metacharacters or escape sequences in the input sequence will\n  be given no special meaning.\n\u003c/p\u003e\u003cp\u003eThe option \u003ccode\u003e\u003ca\u003eCaseInsensitive\u003c/a\u003e\u003c/code\u003e retains its meanings on matching\n  when used in conjunction with this option.  Other options\n  become superfluous.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "Literal",
          "package": "text-icu",
          "signature": "Literal",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:Literal\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Literal\"]"
        },
        "index": {
          "description": "If set treat the entire pattern as literal string Metacharacters or escape sequences in the input sequence will be given no special meaning The option CaseInsensitive retains its meanings on matching when used in conjunction with this option Other options become superfluous",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "Literal",
          "package": "text-icu",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl behaviour of \u003ccode\u003e'$'\u003c/code\u003e and \u003ccode\u003e'^'\u003c/code\u003e. If set, recognize\n line terminators within string, Otherwise, match only at start\n and end of input string.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "Multiline",
          "package": "text-icu",
          "signature": "Multiline",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:Multiline\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Multiline\"]"
        },
        "index": {
          "description": "Control behaviour of and If set recognize line terminators within string Otherwise match only at start and end of input string",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "Multiline",
          "package": "text-icu",
          "partial": "Multiline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:Multiline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the amount of heap storage avaliable for use by the match\n backtracking stack.\n\u003c/p\u003e\u003cp\u003eICU uses a backtracking regular expression engine, with the\n backtrack stack maintained on the heap.  This function sets the\n limit to the amount of memory that can be used for this\n purpose.  A backtracking stack overflow will result in an error\n from the match operation that caused it.\n\u003c/p\u003e\u003cp\u003eA limit is desirable because a malicious or poorly designed\n pattern can use excessive memory, potentially crashing the\n process.  A limit is enabled by default.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "StackLimit",
          "package": "text-icu",
          "signature": "StackLimit Int",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:StackLimit\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:StackLimit\"]"
        },
        "index": {
          "description": "Set the amount of heap storage avaliable for use by the match backtracking stack ICU uses backtracking regular expression engine with the backtrack stack maintained on the heap This function sets the limit to the amount of memory that can be used for this purpose backtracking stack overflow will result in an error from the match operation that caused it limit is desirable because malicious or poorly designed pattern can use excessive memory potentially crashing the process limit is enabled by default",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "StackLimit",
          "package": "text-icu",
          "partial": "Stack Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:StackLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnicode word boundaries.  If set, \u003ccode\u003e'\\\\b'\u003c/code\u003e uses the\n Unicode TR 29 definition of word boundaries.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: Unicode word boundaries are quite different from\n traditional regular expression word boundaries.  See\n \u003ca\u003ehttp://unicode.org/reports/tr29/#Word_Boundaries\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "UnicodeWord",
          "package": "text-icu",
          "signature": "UnicodeWord",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:UnicodeWord\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:UnicodeWord\"]"
        },
        "index": {
          "description": "Unicode word boundaries If set uses the Unicode TR definition of word boundaries Warning Unicode word boundaries are quite different from traditional regular expression word boundaries See http unicode.org reports tr29 Word Boundaries",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "UnicodeWord",
          "package": "text-icu",
          "partial": "Unicode Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:UnicodeWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a processing limit for match operations.\n\u003c/p\u003e\u003cp\u003eSome patterns, when matching certain strings, can run in\n exponential time.  For practical purposes, the match operation\n may appear to be in an infinite loop.  When a limit is set a\n match operation will fail with an error if the limit is\n exceeded.\n\u003c/p\u003e\u003cp\u003eThe units of the limit are steps of the match engine.\n Correspondence with actual processor time will depend on the\n speed of the processor and the details of the specific pattern,\n but will typically be on the order of milliseconds.\n\u003c/p\u003e\u003cp\u003eBy default, the matching time is not limited.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Regex\",\"Data.Text.ICU\"]",
          "name": "WorkLimit",
          "package": "text-icu",
          "signature": "WorkLimit Int",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:WorkLimit\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:WorkLimit\"]"
        },
        "index": {
          "description": "Set processing limit for match operations Some patterns when matching certain strings can run in exponential time For practical purposes the match operation may appear to be in an infinite loop When limit is set match operation will fail with an error if the limit is exceeded The units of the limit are steps of the match engine Correspondence with actual processor time will depend on the speed of the processor and the details of the specific pattern but will typically be on the order of milliseconds By default the matching time is not limited",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "WorkLimit",
          "package": "text-icu",
          "partial": "Work Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:WorkLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a copy of a compiled regular expression.  Cloning a regular\n expression is faster than opening a second instance from the source\n form of the expression, and requires less memory.\n\u003c/p\u003e\u003cp\u003eNote that the current input string and the position of any matched\n text within it are not cloned; only the pattern itself and and the\n match mode flags are copied.\n\u003c/p\u003e\u003cp\u003eCloning can be particularly useful to threaded applications that\n perform multiple match operations in parallel.  Each concurrent RE\n operation requires its own instance of a \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "clone",
          "package": "text-icu",
          "signature": "Regex -\u003e IO Regex",
          "source": "src/Data-Text-ICU-Regex.html#clone",
          "type": "function"
        },
        "index": {
          "description": "Make copy of compiled regular expression Cloning regular expression is faster than opening second instance from the source form of the expression and requires less memory Note that the current input string and the position of any matched text within it are not cloned only the pattern itself and and the match mode flags are copied Cloning can be particularly useful to threaded applications that perform multiple match operations in parallel Each concurrent RE operation requires its own instance of Regex",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "clone",
          "normalized": "Regex-\u003eIO Regex",
          "package": "text-icu",
          "signature": "Regex-\u003eIO Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the index in the input string of the end of the text\n matched by the specified capture group during the previous match\n operation.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the capture group was not part of\n the last match.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "end",
          "package": "text-icu",
          "signature": "Regex -\u003e Int -\u003e IO (Maybe I16)",
          "source": "src/Data-Text-ICU-Regex.html#end",
          "type": "function"
        },
        "index": {
          "description": "Returns the index in the input string of the end of the text matched by the specified capture group during the previous match operation Returns Nothing if the capture group was not part of the last match",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "end",
          "normalized": "Regex-\u003eInt-\u003eIO(Maybe I)",
          "package": "text-icu",
          "signature": "Regex-\u003eInt-\u003eIO(Maybe I)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the index in the input string of the end of the text\n matched by the specified capture group during the previous match\n operation.  Returns \u003ccode\u003e-1\u003c/code\u003e if the capture group was not part of\n the last match.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "end_",
          "package": "text-icu",
          "signature": "Regex -\u003e Int -\u003e IO I16",
          "source": "src/Data-Text-ICU-Regex.html#end_",
          "type": "function"
        },
        "index": {
          "description": "Returns the index in the input string of the end of the text matched by the specified capture group during the previous match operation Returns if the capture group was not part of the last match",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "end_",
          "normalized": "Regex-\u003eInt-\u003eIO I",
          "package": "text-icu",
          "signature": "Regex-\u003eInt-\u003eIO I",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:end_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the first matching substring of the input string that\n matches the pattern.\n\u003c/p\u003e\u003cp\u003eIf \u003cem\u003en\u003c/em\u003e is non-negative, the search for a match begins at the\n specified index, and any match region is reset.\n\u003c/p\u003e\u003cp\u003eIf \u003cem\u003en\u003c/em\u003e is -1, the search begins at the start of the input region,\n or at the start of the full string if no region has been specified.\n\u003c/p\u003e\u003cp\u003eIf a match is found, \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003egroup\u003c/code\u003e will provide more\n information regarding the match.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "find",
          "package": "text-icu",
          "signature": "Regex -\u003e I16 -\u003e IO Bool",
          "source": "src/Data-Text-ICU-Regex.html#find",
          "type": "function"
        },
        "index": {
          "description": "Find the first matching substring of the input string that matches the pattern If is non-negative the search for match begins at the specified index and any match region is reset If is the search begins at the start of the input region or at the start of the full string if no region has been specified If match is found start end and group will provide more information regarding the match",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "find",
          "normalized": "Regex-\u003eI-\u003eIO Bool",
          "package": "text-icu",
          "signature": "Regex-\u003eI-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the next pattern match in the input string.  Begin searching\n the input at the location following the end of he previous match,\n or at the start of the string (or region) if there is no previous\n match.\n\u003c/p\u003e\u003cp\u003eIf a match is found, \u003ccode\u003e\u003ca\u003estart\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eend\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003egroup\u003c/code\u003e will provide more\n information regarding the match.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "findNext",
          "package": "text-icu",
          "signature": "Regex -\u003e IO Bool",
          "source": "src/Data-Text-ICU-Regex.html#findNext",
          "type": "function"
        },
        "index": {
          "description": "Find the next pattern match in the input string Begin searching the input at the location following the end of he previous match or at the start of the string or region if there is no previous match If match is found start end and group will provide more information regarding the match",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "findNext",
          "normalized": "Regex-\u003eIO Bool",
          "package": "text-icu",
          "partial": "Next",
          "signature": "Regex-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:findNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the subject text that is currently associated with this\n regular expression object.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "getText",
          "package": "text-icu",
          "signature": "Regex -\u003e IO (ForeignPtr Word16, I16)",
          "source": "src/Data-Text-ICU-Regex.html#getText",
          "type": "function"
        },
        "index": {
          "description": "Get the subject text that is currently associated with this regular expression object",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "getText",
          "normalized": "Regex-\u003eIO(ForeignPtr Word,I)",
          "package": "text-icu",
          "partial": "Text",
          "signature": "Regex-\u003eIO(ForeignPtr Word,I)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:getText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of capturing groups in this regular\n expression's pattern.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "groupCount",
          "package": "text-icu",
          "signature": "Regex -\u003e IO Int",
          "source": "src/Data-Text-ICU-Regex.html#groupCount",
          "type": "function"
        },
        "index": {
          "description": "Return the number of capturing groups in this regular expression pattern",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "groupCount",
          "normalized": "Regex-\u003eIO Int",
          "package": "text-icu",
          "partial": "Count",
          "signature": "Regex-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:groupCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the source form of the pattern used to construct this\n regular expression or match.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "pattern",
          "package": "text-icu",
          "signature": "Regex -\u003e Text",
          "source": "src/Data-Text-ICU-Regex.html#pattern",
          "type": "function"
        },
        "index": {
          "description": "Return the source form of the pattern used to construct this regular expression or match",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "pattern",
          "normalized": "Regex-\u003eText",
          "package": "text-icu",
          "signature": "Regex-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a regular expression with the given options.  This\n function throws a \u003ccode\u003eParseError\u003c/code\u003e if the pattern is invalid.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e is initialized with empty text to search against.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "regex",
          "package": "text-icu",
          "signature": "[MatchOption] -\u003e Text -\u003e IO Regex",
          "source": "src/Data-Text-ICU-Regex-Internal.html#regex",
          "type": "function"
        },
        "index": {
          "description": "Compile regular expression with the given options This function throws ParseError if the pattern is invalid The Regex is initialized with empty text to search against",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "regex",
          "normalized": "[MatchOption]-\u003eText-\u003eIO Regex",
          "package": "text-icu",
          "signature": "[MatchOption]-\u003eText-\u003eIO Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a regular expression with the given options.  This is\n safest to use when the pattern is constructed at run time.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "regex'",
          "package": "text-icu",
          "signature": "[MatchOption] -\u003e Text -\u003e IO (Either ParseError Regex)",
          "source": "src/Data-Text-ICU-Regex.html#regex%27",
          "type": "function"
        },
        "index": {
          "description": "Compile regular expression with the given options This is safest to use when the pattern is constructed at run time",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "regex'",
          "normalized": "[MatchOption]-\u003eText-\u003eIO(Either ParseError Regex)",
          "package": "text-icu",
          "signature": "[MatchOption]-\u003eText-\u003eIO(Either ParseError Regex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:regex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the subject text string upon which the regular expression\n will look for matches.  This function may be called any number of\n times, allowing the regular expression pattern to be applied to\n different strings.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "setText",
          "package": "text-icu",
          "signature": "Regex -\u003e Text -\u003e IO ()",
          "source": "src/Data-Text-ICU-Regex.html#setText",
          "type": "function"
        },
        "index": {
          "description": "Set the subject text string upon which the regular expression will look for matches This function may be called any number of times allowing the regular expression pattern to be applied to different strings",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "setText",
          "normalized": "Regex-\u003eText-\u003eIO()",
          "package": "text-icu",
          "partial": "Text",
          "signature": "Regex-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:setText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the index in the input string of the start of the text\n matched by the specified capture group during the previous match\n operation.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the capture group was not part of\n the last match.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "start",
          "package": "text-icu",
          "signature": "Regex -\u003e Int -\u003e IO (Maybe I16)",
          "source": "src/Data-Text-ICU-Regex.html#start",
          "type": "function"
        },
        "index": {
          "description": "Returns the index in the input string of the start of the text matched by the specified capture group during the previous match operation Returns Nothing if the capture group was not part of the last match",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "start",
          "normalized": "Regex-\u003eInt-\u003eIO(Maybe I)",
          "package": "text-icu",
          "signature": "Regex-\u003eInt-\u003eIO(Maybe I)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the index in the input string of the start of the text\n matched by the specified capture group during the previous match\n operation.  Returns \u003ccode\u003e-1\u003c/code\u003e if the capture group was not part of the\n last match.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Regex",
          "name": "start_",
          "package": "text-icu",
          "signature": "Regex -\u003e Int -\u003e IO I16",
          "source": "src/Data-Text-ICU-Regex.html#start_",
          "type": "function"
        },
        "index": {
          "description": "Returns the index in the input string of the start of the text matched by the specified capture group during the previous match operation Returns if the capture group was not part of the last match",
          "hierarchy": "Data Text ICU Regex",
          "module": "Data.Text.ICU.Regex",
          "name": "start_",
          "normalized": "Regex-\u003eInt-\u003eIO I",
          "package": "text-icu",
          "signature": "Regex-\u003eInt-\u003eIO I",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Regex.html#v:start_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for use when manipulating Unicode text, using the bindings to\n the International Components for Unicode (ICU) libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.ICU.Types",
          "name": "Types",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for use when manipulating Unicode text using the bindings to the International Components for Unicode ICU libraries",
          "hierarchy": "Data Text ICU Types",
          "module": "Data.Text.ICU.Types",
          "name": "Types",
          "package": "text-icu",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a locale.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Types",
          "name": "LocaleName",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Internal.html#LocaleName",
          "type": "data"
        },
        "index": {
          "description": "The name of locale",
          "hierarchy": "Data Text ICU Types",
          "module": "Data.Text.ICU.Types",
          "name": "LocaleName",
          "package": "text-icu",
          "partial": "Locale Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Types.html#t:LocaleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed information about parsing errors.  Used by ICU parsing\n engines that parse long rules, patterns, or programs, where the\n text being parsed is long enough that more information than an\n \u003ccode\u003e\u003ca\u003eICUError\u003c/a\u003e\u003c/code\u003e is needed to localize the error.\n\u003c/p\u003e",
          "module": "Data.Text.ICU.Types",
          "name": "ParseError",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Error-Internal.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "Detailed information about parsing errors Used by ICU parsing engines that parse long rules patterns or programs where the text being parsed is long enough that more information than an ICUError is needed to localize the error",
          "hierarchy": "Data Text ICU Types",
          "module": "Data.Text.ICU.Types",
          "name": "ParseError",
          "package": "text-icu",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Types.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe program's current locale.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Types\",\"Data.Text.ICU\"]",
          "name": "Current",
          "package": "text-icu",
          "signature": "Current",
          "source": "src/Data-Text-ICU-Internal.html#LocaleName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Types.html#v:Current\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Current\"]"
        },
        "index": {
          "description": "The program current locale",
          "hierarchy": "Data Text ICU Types",
          "module": "Data.Text.ICU.Types",
          "name": "Current",
          "package": "text-icu",
          "partial": "Current",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Types.html#v:Current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific locale.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Types\",\"Data.Text.ICU\"]",
          "name": "Locale",
          "package": "text-icu",
          "signature": "Locale String",
          "source": "src/Data-Text-ICU-Internal.html#LocaleName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Types.html#v:Locale\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Locale\"]"
        },
        "index": {
          "description": "specific locale",
          "hierarchy": "Data Text ICU Types",
          "module": "Data.Text.ICU.Types",
          "name": "Locale",
          "package": "text-icu",
          "partial": "Locale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Types.html#v:Locale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe root locale.  For a description of resource bundles\n and the root resource, see\n \u003ca\u003ehttp://userguide.icu-project.org/locale/resources\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Text.ICU.Types\",\"Data.Text.ICU\"]",
          "name": "Root",
          "package": "text-icu",
          "signature": "Root",
          "source": "src/Data-Text-ICU-Internal.html#LocaleName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Types.html#v:Root\",\"http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:Root\"]"
        },
        "index": {
          "description": "The root locale For description of resource bundles and the root resource see http userguide.icu-project.org locale resources",
          "hierarchy": "Data Text ICU Types",
          "module": "Data.Text.ICU.Types",
          "name": "Root",
          "package": "text-icu",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU-Types.html#v:Root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used functions for Unicode, implemented as bindings to the\n International Components for Unicode (ICU) libraries.\n\u003c/p\u003e\u003cp\u003eThis module contains only the most commonly used types and\n functions.  Other modules in this package expose richer interfaces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.ICU",
          "name": "ICU",
          "package": "text-icu",
          "source": "src/Data-Text-ICU.html",
          "type": "module"
        },
        "index": {
          "description": "Commonly used functions for Unicode implemented as bindings to the International Components for Unicode ICU libraries This module contains only the most commonly used types and functions Other modules in this package expose richer interfaces",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "ICU",
          "package": "text-icu",
          "partial": "ICU",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA break in a string.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "Break",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Break-Pure.html#Break",
          "type": "data"
        },
        "index": {
          "description": "break in string",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "Break",
          "package": "text-icu",
          "partial": "Break",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA boundary analyser.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "Breaker",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Break-Pure.html#Breaker",
          "type": "data"
        },
        "index": {
          "description": "boundary analyser",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "Breaker",
          "package": "text-icu",
          "partial": "Breaker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:Breaker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that supports efficient iteration over Unicode characters.\n\u003c/p\u003e\u003cp\u003eAs an example of where this may be useful, a function using this\n type may be able to iterate over a UTF-8 \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e directly,\n rather than first copying and converting it to an intermediate\n form.  This type also allows e.g. comparison between \u003ccode\u003eText\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, with minimal overhead.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "CharIterator",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Internal.html#CharIterator",
          "type": "data"
        },
        "index": {
          "description": "type that supports efficient iteration over Unicode characters As an example of where this may be useful function using this type may be able to iterate over UTF-8 ByteString directly rather than first copying and converting it to an intermediate form This type also allows e.g comparison between Text and ByteString with minimal overhead",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "CharIterator",
          "package": "text-icu",
          "partial": "Char Iterator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:CharIterator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString collator type.  \u003ccode\u003e\u003ca\u003eCollator\u003c/a\u003e\u003c/code\u003es are considered equal if they\n will sort strings identically.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "Collator",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Collate-Internal.html#Collator",
          "type": "data"
        },
        "index": {
          "description": "String collator type Collator are considered equal if they will sort strings identically",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "Collator",
          "package": "text-icu",
          "partial": "Collator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:Collator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions to \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "CompareOption",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Normalize.html#CompareOption",
          "type": "data"
        },
        "index": {
          "description": "Options to compare",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "CompareOption",
          "package": "text-icu",
          "partial": "Compare Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:CompareOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine break status.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "Line",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Break.html#Line",
          "type": "data"
        },
        "index": {
          "description": "Line break status",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "Line",
          "package": "text-icu",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a locale.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "LocaleName",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Internal.html#LocaleName",
          "type": "data"
        },
        "index": {
          "description": "The name of locale",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "LocaleName",
          "package": "text-icu",
          "partial": "Locale Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:LocaleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA match for a regular expression.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "Match",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Regex-Pure.html#Match",
          "type": "data"
        },
        "index": {
          "description": "match for regular expression",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "Match",
          "package": "text-icu",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for controlling matching behaviour.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "MatchOption",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Regex-Internal.html#MatchOption",
          "type": "data"
        },
        "index": {
          "description": "Options for controlling matching behaviour",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "MatchOption",
          "package": "text-icu",
          "partial": "Match Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:MatchOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalization modes.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "NormalizationMode",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Normalize.html#NormalizationMode",
          "type": "data"
        },
        "index": {
          "description": "Normalization modes",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "NormalizationMode",
          "package": "text-icu",
          "partial": "Normalization Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:NormalizationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed information about parsing errors.  Used by ICU parsing\n engines that parse long rules, patterns, or programs, where the\n text being parsed is long enough that more information than an\n \u003ccode\u003e\u003ca\u003eICUError\u003c/a\u003e\u003c/code\u003e is needed to localize the error.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "ParseError",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Error-Internal.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "Detailed information about parsing errors Used by ICU parsing engines that parse long rules patterns or programs where the text being parsed is long enough that more information than an ICUError is needed to localize the error",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "ParseError",
          "package": "text-icu",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled regular expression.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e values are usually constructed using the \u003ccode\u003e\u003ca\u003eregex\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eregex'\u003c/a\u003e\u003c/code\u003e functions.  This type is also an instance of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e,\n so if you have the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension enabled,\n you can construct a \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e by simply writing the pattern in\n quotes (though this does not allow you to specify any \u003ccode\u003eOption\u003c/code\u003es).\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "Regex",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Regex-Pure.html#Regex",
          "type": "data"
        },
        "index": {
          "description": "compiled regular expression Regex values are usually constructed using the regex or regex functions This type is also an instance of IsString so if you have the OverloadedStrings language extension enabled you can construct Regex by simply writing the pattern in quotes though this does not allow you to specify any Option",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "Regex",
          "package": "text-icu",
          "partial": "Regex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:Regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass for functions common to both \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e\n types.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "Regular",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Regex-Pure.html#Regular",
          "type": "class"
        },
        "index": {
          "description": "typeclass for functions common to both Match and Regex types",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "Regular",
          "package": "text-icu",
          "partial": "Regular",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:Regular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWord break status.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "Word",
          "package": "text-icu",
          "source": "src/Data-Text-ICU-Break.html#Word",
          "type": "data"
        },
        "index": {
          "description": "Word break status",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "Word",
          "package": "text-icu",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on character boundaries.\n\u003c/p\u003e\u003cp\u003eCharacter boundary analysis identifies the boundaries of \u003ca\u003eExtended\n Grapheme Clusters\u003c/a\u003e, which are groupings of codepoints that should be\n treated as character-like units for many text operations.  Please see\n Unicode Standard Annex #29, Unicode Text Segmentation,\n \u003ca\u003ehttp://www.unicode.org/reports/tr29/\u003c/a\u003e for additional information on\n grapheme clusters and guidelines on their use.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "breakCharacter",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Breaker ()",
          "source": "src/Data-Text-ICU-Break-Pure.html#breakCharacter",
          "type": "function"
        },
        "index": {
          "description": "Break string on character boundaries Character boundary analysis identifies the boundaries of Extended Grapheme Clusters which are groupings of codepoints that should be treated as character-like units for many text operations Please see Unicode Standard Annex Unicode Text Segmentation http www.unicode.org reports tr29 for additional information on grapheme clusters and guidelines on their use",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "breakCharacter",
          "normalized": "LocaleName-\u003eBreaker()",
          "package": "text-icu",
          "partial": "Character",
          "signature": "LocaleName-\u003eBreaker()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:breakCharacter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on line boundaries.\n\u003c/p\u003e\u003cp\u003eLine boundary analysis determines where a text string can be broken when\n line wrapping. The mechanism correctly handles punctuation and hyphenated\n words.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "breakLine",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Breaker Line",
          "source": "src/Data-Text-ICU-Break-Pure.html#breakLine",
          "type": "function"
        },
        "index": {
          "description": "Break string on line boundaries Line boundary analysis determines where text string can be broken when line wrapping The mechanism correctly handles punctuation and hyphenated words",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "breakLine",
          "normalized": "LocaleName-\u003eBreaker Line",
          "package": "text-icu",
          "partial": "Line",
          "signature": "LocaleName-\u003eBreaker Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:breakLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on sentence boundaries.\n\u003c/p\u003e\u003cp\u003eSentence boundary analysis allows selection with correct interpretation\n of periods within numbers and abbreviations, and trailing punctuation\n marks such as quotation marks and parentheses.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "breakSentence",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Breaker ()",
          "source": "src/Data-Text-ICU-Break-Pure.html#breakSentence",
          "type": "function"
        },
        "index": {
          "description": "Break string on sentence boundaries Sentence boundary analysis allows selection with correct interpretation of periods within numbers and abbreviations and trailing punctuation marks such as quotation marks and parentheses",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "breakSentence",
          "normalized": "LocaleName-\u003eBreaker()",
          "package": "text-icu",
          "partial": "Sentence",
          "signature": "LocaleName-\u003eBreaker()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:breakSentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on word boundaries.\n\u003c/p\u003e\u003cp\u003eWord boundary analysis is used by search and replace functions, as well\n as within text editing applications that allow the user to select words\n with a double click. Word selection provides correct interpretation of\n punctuation marks within and following words. Characters that are not\n part of a word, such as symbols or punctuation marks, have word breaks on\n both sides.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "breakWord",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Breaker Word",
          "source": "src/Data-Text-ICU-Break-Pure.html#breakWord",
          "type": "function"
        },
        "index": {
          "description": "Break string on word boundaries Word boundary analysis is used by search and replace functions as well as within text editing applications that allow the user to select words with double click Word selection provides correct interpretation of punctuation marks within and following words Characters that are not part of word such as symbols or punctuation marks have word breaks on both sides",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "breakWord",
          "normalized": "LocaleName-\u003eBreaker Word",
          "package": "text-icu",
          "partial": "Word",
          "signature": "LocaleName-\u003eBreaker Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:breakWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all breaks in a string, from left to right.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "breaks",
          "package": "text-icu",
          "signature": "Breaker a -\u003e Text -\u003e [Break a]",
          "source": "src/Data-Text-ICU-Break-Pure.html#breaks",
          "type": "function"
        },
        "index": {
          "description": "Return list of all breaks in string from left to right",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "breaks",
          "normalized": "Breaker a-\u003eText-\u003e[Break a]",
          "package": "text-icu",
          "signature": "Breaker a-\u003eText-\u003e[Break a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:breaks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all breaks in a string, from right to left.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "breaksRight",
          "package": "text-icu",
          "signature": "Breaker a -\u003e Text -\u003e [Break a]",
          "source": "src/Data-Text-ICU-Break-Pure.html#breaksRight",
          "type": "function"
        },
        "index": {
          "description": "Return list of all breaks in string from right to left",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "breaksRight",
          "normalized": "Breaker a-\u003eText-\u003e[Break a]",
          "package": "text-icu",
          "partial": "Right",
          "signature": "Breaker a-\u003eText-\u003e[Break a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:breaksRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText of the current break.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "brkBreak",
          "package": "text-icu",
          "signature": "Break a -\u003e Text",
          "source": "src/Data-Text-ICU-Break-Pure.html#brkBreak",
          "type": "function"
        },
        "index": {
          "description": "Text of the current break",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "brkBreak",
          "normalized": "Break a-\u003eText",
          "package": "text-icu",
          "partial": "Break",
          "signature": "Break a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:brkBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix of the current break.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "brkPrefix",
          "package": "text-icu",
          "signature": "Break a -\u003e Text",
          "source": "src/Data-Text-ICU-Break-Pure.html#brkPrefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix of the current break",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "brkPrefix",
          "normalized": "Break a-\u003eText",
          "package": "text-icu",
          "partial": "Prefix",
          "signature": "Break a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:brkPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of the current break (only meaningful if \u003ccode\u003e\u003ca\u003eLine\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "brkStatus",
          "package": "text-icu",
          "signature": "Break a -\u003e a",
          "source": "src/Data-Text-ICU-Break-Pure.html#brkStatus",
          "type": "function"
        },
        "index": {
          "description": "Status of the current break only meaningful if Line or Word",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "brkStatus",
          "normalized": "Break a-\u003ea",
          "package": "text-icu",
          "partial": "Status",
          "signature": "Break a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:brkStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuffix of the current break.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "brkSuffix",
          "package": "text-icu",
          "signature": "Break a -\u003e Text",
          "source": "src/Data-Text-ICU-Break-Pure.html#brkSuffix",
          "type": "function"
        },
        "index": {
          "description": "Suffix of the current break",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "brkSuffix",
          "normalized": "Break a-\u003eText",
          "package": "text-icu",
          "partial": "Suffix",
          "signature": "Break a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:brkSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two strings.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "collate",
          "package": "text-icu",
          "signature": "Collator -\u003e Text -\u003e Text -\u003e Ordering",
          "source": "src/Data-Text-ICU-Collate-Pure.html#collate",
          "type": "function"
        },
        "index": {
          "description": "Compare two strings",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "collate",
          "normalized": "Collator-\u003eText-\u003eText-\u003eOrdering",
          "package": "text-icu",
          "signature": "Collator-\u003eText-\u003eText-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:collate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eCharIterator\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eIf either iterator was constructed from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, it does not\n need to be copied or converted beforehand, so this function can be\n quite cheap.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "collateIter",
          "package": "text-icu",
          "signature": "Collator -\u003e CharIterator -\u003e CharIterator -\u003e Ordering",
          "source": "src/Data-Text-ICU-Collate-Pure.html#collateIter",
          "type": "function"
        },
        "index": {
          "description": "Compare two CharIterator If either iterator was constructed from ByteString it does not need to be copied or converted beforehand so this function can be quite cheap",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "collateIter",
          "normalized": "Collator-\u003eCharIterator-\u003eCharIterator-\u003eOrdering",
          "package": "text-icu",
          "partial": "Iter",
          "signature": "Collator-\u003eCharIterator-\u003eCharIterator-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:collateIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an immutable \u003ccode\u003e\u003ca\u003eCollator\u003c/a\u003e\u003c/code\u003e for comparing strings.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eRoot\u003c/a\u003e\u003c/code\u003e is passed as the locale, UCA collation rules will be\n used.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "collator",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Collator",
          "source": "src/Data-Text-ICU-Collate-Pure.html#collator",
          "type": "function"
        },
        "index": {
          "description": "Create an immutable Collator for comparing strings If Root is passed as the locale UCA collation rules will be used",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "collator",
          "normalized": "LocaleName-\u003eCollator",
          "package": "text-icu",
          "signature": "LocaleName-\u003eCollator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:collator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an immutable \u003ccode\u003e\u003ca\u003eCollator\u003c/a\u003e\u003c/code\u003e with the given \u003ccode\u003eAttribute\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "collatorWith",
          "package": "text-icu",
          "signature": "LocaleName -\u003e [Attribute] -\u003e Collator",
          "source": "src/Data-Text-ICU-Collate-Pure.html#collatorWith",
          "type": "function"
        },
        "index": {
          "description": "Create an immutable Collator with the given Attribute",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "collatorWith",
          "normalized": "LocaleName-\u003e[Attribute]-\u003eCollator",
          "package": "text-icu",
          "partial": "With",
          "signature": "LocaleName-\u003e[Attribute]-\u003eCollator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:collatorWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the first match for the regular expression in the given text.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "find",
          "package": "text-icu",
          "signature": "Regex -\u003e Text -\u003e Maybe Match",
          "source": "src/Data-Text-ICU-Regex-Pure.html#find",
          "type": "function"
        },
        "index": {
          "description": "Find the first match for the regular expression in the given text",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "find",
          "normalized": "Regex-\u003eText-\u003eMaybe Match",
          "package": "text-icu",
          "signature": "Regex-\u003eText-\u003eMaybe Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily find all matches for the regular expression in the given\n text.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "findAll",
          "package": "text-icu",
          "signature": "Regex -\u003e Text -\u003e [Match]",
          "source": "src/Data-Text-ICU-Regex-Pure.html#findAll",
          "type": "function"
        },
        "index": {
          "description": "Lazily find all matches for the regular expression in the given text",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "findAll",
          "normalized": "Regex-\u003eText-\u003e[Match]",
          "package": "text-icu",
          "partial": "All",
          "signature": "Regex-\u003eText-\u003e[Match]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:findAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCharIterator\u003c/a\u003e\u003c/code\u003e from a Unicode string.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "fromString",
          "package": "text-icu",
          "signature": "String -\u003e CharIterator",
          "source": "src/Data-Text-ICU-Iterator.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Construct CharIterator from Unicode string",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "fromString",
          "normalized": "String-\u003eCharIterator",
          "package": "text-icu",
          "partial": "String",
          "signature": "String-\u003eCharIterator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCharIterator\u003c/a\u003e\u003c/code\u003e from a Unicode string.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "fromText",
          "package": "text-icu",
          "signature": "Text -\u003e CharIterator",
          "source": "src/Data-Text-ICU-Iterator.html#fromText",
          "type": "function"
        },
        "index": {
          "description": "Construct CharIterator from Unicode string",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "fromText",
          "normalized": "Text-\u003eCharIterator",
          "package": "text-icu",
          "partial": "Text",
          "signature": "Text-\u003eCharIterator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:fromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCharIterator\u003c/a\u003e\u003c/code\u003e from a Unicode string encoded as a\n UTF-8 \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The validity of the encoded string is *not*\n checked.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "fromUtf8",
          "package": "text-icu",
          "signature": "ByteString -\u003e CharIterator",
          "source": "src/Data-Text-ICU-Iterator.html#fromUtf8",
          "type": "function"
        },
        "index": {
          "description": "Construct CharIterator from Unicode string encoded as UTF-8 ByteString The validity of the encoded string is not checked",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "fromUtf8",
          "normalized": "ByteString-\u003eCharIterator",
          "package": "text-icu",
          "partial": "Utf",
          "signature": "ByteString-\u003eCharIterator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:fromUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003cem\u003en\u003c/em\u003eth capturing group in a match, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003cem\u003en\u003c/em\u003e\n is out of bounds.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "group",
          "package": "text-icu",
          "signature": "Int -\u003e Match -\u003e Maybe Text",
          "source": "src/Data-Text-ICU-Regex-Pure.html#group",
          "type": "function"
        },
        "index": {
          "description": "Return the th capturing group in match or Nothing if is out of bounds",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "group",
          "normalized": "Int-\u003eMatch-\u003eMaybe Text",
          "package": "text-icu",
          "signature": "Int-\u003eMatch-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of capturing groups in this regular\n expression or match's pattern.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "groupCount",
          "package": "text-icu",
          "signature": "r -\u003e Int",
          "source": "src/Data-Text-ICU-Regex-Pure.html#groupCount",
          "type": "function"
        },
        "index": {
          "description": "Return the number of capturing groups in this regular expression or match pattern",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "groupCount",
          "normalized": "a-\u003eInt",
          "package": "text-icu",
          "partial": "Count",
          "signature": "r-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:groupCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the source form of the pattern used to construct this\n regular expression or match.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "pattern",
          "package": "text-icu",
          "signature": "r -\u003e Text",
          "source": "src/Data-Text-ICU-Regex-Pure.html#pattern",
          "type": "function"
        },
        "index": {
          "description": "Return the source form of the pattern used to construct this regular expression or match",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "pattern",
          "normalized": "a-\u003eText",
          "package": "text-icu",
          "signature": "r-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the prefix of the \u003cem\u003en\u003c/em\u003eth capturing group in a match (the\n text from the start of the string to the start of the match), or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003cem\u003en\u003c/em\u003e is out of bounds.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "prefix",
          "package": "text-icu",
          "signature": "Int -\u003e Match -\u003e Maybe Text",
          "source": "src/Data-Text-ICU-Regex-Pure.html#prefix",
          "type": "function"
        },
        "index": {
          "description": "Return the prefix of the th capturing group in match the text from the start of the string to the start of the match or Nothing if is out of bounds",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "prefix",
          "normalized": "Int-\u003eMatch-\u003eMaybe Text",
          "package": "text-icu",
          "signature": "Int-\u003eMatch-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a regular expression with the given options.  This\n function throws a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e if the pattern is invalid, so it is\n best for use when the pattern is statically known.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "regex",
          "package": "text-icu",
          "signature": "[MatchOption] -\u003e Text -\u003e Regex",
          "source": "src/Data-Text-ICU-Regex-Pure.html#regex",
          "type": "function"
        },
        "index": {
          "description": "Compile regular expression with the given options This function throws ParseError if the pattern is invalid so it is best for use when the pattern is statically known",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "regex",
          "normalized": "[MatchOption]-\u003eText-\u003eRegex",
          "package": "text-icu",
          "signature": "[MatchOption]-\u003eText-\u003eRegex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a regular expression with the given options.  This is\n safest to use when the pattern is constructed at run time.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "regex'",
          "package": "text-icu",
          "signature": "[MatchOption] -\u003e Text -\u003e Either ParseError Regex",
          "source": "src/Data-Text-ICU-Regex-Pure.html#regex%27",
          "type": "function"
        },
        "index": {
          "description": "Compile regular expression with the given options This is safest to use when the pattern is constructed at run time",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "regex'",
          "normalized": "[MatchOption]-\u003eText-\u003eEither ParseError Regex",
          "package": "text-icu",
          "signature": "[MatchOption]-\u003eText-\u003eEither ParseError Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:regex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a key for sorting the \u003ccode\u003eText\u003c/code\u003e using the given \u003ccode\u003e\u003ca\u003eCollator\u003c/a\u003e\u003c/code\u003e.\n The result of comparing two \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es that have been\n transformed with \u003ccode\u003e\u003ca\u003esortKey\u003c/a\u003e\u003c/code\u003e will be the same as the result of\n \u003ccode\u003e\u003ca\u003ecollate\u003c/a\u003e\u003c/code\u003e on the two untransformed \u003ccode\u003eText\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "sortKey",
          "package": "text-icu",
          "signature": "Collator -\u003e Text -\u003e ByteString",
          "source": "src/Data-Text-ICU-Collate-Pure.html#sortKey",
          "type": "function"
        },
        "index": {
          "description": "Create key for sorting the Text using the given Collator The result of comparing two ByteString that have been transformed with sortKey will be the same as the result of collate on the two untransformed Text",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "sortKey",
          "normalized": "Collator-\u003eText-\u003eByteString",
          "package": "text-icu",
          "partial": "Key",
          "signature": "Collator-\u003eText-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:sortKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the span of text between the end of the previous match and\n the beginning of the current match.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "span",
          "package": "text-icu",
          "signature": "Match -\u003e Text",
          "source": "src/Data-Text-ICU-Regex-Pure.html#span",
          "type": "function"
        },
        "index": {
          "description": "Return the span of text between the end of the previous match and the beginning of the current match",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "span",
          "normalized": "Match-\u003eText",
          "package": "text-icu",
          "signature": "Match-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the suffix of the \u003cem\u003en\u003c/em\u003eth capturing group in a match (the\n text from the end of the match to the end of the string), or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003cem\u003en\u003c/em\u003e is out of bounds.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "suffix",
          "package": "text-icu",
          "signature": "Int -\u003e Match -\u003e Maybe Text",
          "source": "src/Data-Text-ICU-Regex-Pure.html#suffix",
          "type": "function"
        },
        "index": {
          "description": "Return the suffix of the th capturing group in match the text from the end of the match to the end of the string or Nothing if is out of bounds",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "suffix",
          "normalized": "Int-\u003eMatch-\u003eMaybe Text",
          "package": "text-icu",
          "signature": "Int-\u003eMatch-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase-fold the characters in a string.\n\u003c/p\u003e\u003cp\u003eCase folding is locale independent and not context sensitive, but\n there is an option for treating the letter I specially for Turkic\n languages.  The result may be longer or shorter than the original.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "toCaseFold",
          "package": "text-icu",
          "signature": "Bool-\u003e Text-\u003e Text",
          "type": "function"
        },
        "index": {
          "description": "Case-fold the characters in string Case folding is locale independent and not context sensitive but there is an option for treating the letter specially for Turkic languages The result may be longer or shorter than the original",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "toCaseFold",
          "normalized": "Bool-\u003eText-\u003eText",
          "package": "text-icu",
          "partial": "Case Fold",
          "signature": "Bool-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:toCaseFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowercase the characters in a string.\n\u003c/p\u003e\u003cp\u003eCasing is locale dependent and context sensitive.  The result may\n be longer or shorter than the original.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "toLower",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Text -\u003e Text",
          "source": "src/Data-Text-ICU-Text.html#toLower",
          "type": "function"
        },
        "index": {
          "description": "Lowercase the characters in string Casing is locale dependent and context sensitive The result may be longer or shorter than the original",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "toLower",
          "normalized": "LocaleName-\u003eText-\u003eText",
          "package": "text-icu",
          "partial": "Lower",
          "signature": "LocaleName-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:toLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUppercase the characters in a string.\n\u003c/p\u003e\u003cp\u003eCasing is locale dependent and context sensitive.  The result may\n be longer or shorter than the original.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "toUpper",
          "package": "text-icu",
          "signature": "LocaleName -\u003e Text -\u003e Text",
          "source": "src/Data-Text-ICU-Text.html#toUpper",
          "type": "function"
        },
        "index": {
          "description": "Uppercase the characters in string Casing is locale dependent and context sensitive The result may be longer or shorter than the original",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "toUpper",
          "normalized": "LocaleName-\u003eText-\u003eText",
          "package": "text-icu",
          "partial": "Upper",
          "signature": "LocaleName-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:toUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCollator\u003c/a\u003e\u003c/code\u003e that uses the Unicode Collation Algorithm (UCA).\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "uca",
          "package": "text-icu",
          "signature": "Collator",
          "source": "src/Data-Text-ICU-Collate-Pure.html#uca",
          "type": "function"
        },
        "index": {
          "description": "Collator that uses the Unicode Collation Algorithm UCA",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "uca",
          "package": "text-icu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:uca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combinator for returning a list of all capturing groups on a\n \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Text.ICU",
          "name": "unfold",
          "package": "text-icu",
          "signature": "(Int -\u003e Match -\u003e Maybe Text) -\u003e Match -\u003e [Text]",
          "source": "src/Data-Text-ICU-Regex-Pure.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "combinator for returning list of all capturing groups on Match",
          "hierarchy": "Data Text ICU",
          "module": "Data.Text.ICU",
          "name": "unfold",
          "normalized": "(Int-\u003eMatch-\u003eMaybe Text)-\u003eMatch-\u003e[Text]",
          "package": "text-icu",
          "signature": "(Int-\u003eMatch-\u003eMaybe Text)-\u003eMatch-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-icu/docs/Data-Text-ICU.html#v:unfold"
      }
    }
  ]
]