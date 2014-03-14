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
        "word": "bytestring-show"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficiently convert from values to lazy byte strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Show.ByteString",
          "name": "ByteString",
          "package": "bytestring-show",
          "source": "src/Text-Show-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Efficiently convert from values to lazy byte strings",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "ByteString",
          "package": "bytestring-show",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut merely lifts Builder into a Writer monad, applied to ().\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "Put",
          "package": "bytestring-show",
          "type": "type"
        },
        "index": {
          "description": "Put merely lifts Builder into Writer monad applied to",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "Put",
          "package": "bytestring-show",
          "partial": "Put",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#t:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PutM type. A Writer monad over the efficient Builder monoid.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "PutM",
          "package": "bytestring-show",
          "type": "newtype"
        },
        "index": {
          "description": "The PutM type Writer monad over the efficient Builder monoid",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "PutM",
          "package": "bytestring-show",
          "partial": "Put",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#t:PutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion of values to readable byte strings.\n Minimal complete definition: \u003ccode\u003e\u003ca\u003eshowp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshowpPrec\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "Show",
          "package": "bytestring-show",
          "source": "src/Text-Show-ByteString.html#Show",
          "type": "class"
        },
        "index": {
          "description": "Conversion of values to readable byte strings Minimal complete definition showp or showpPrec",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "Show",
          "package": "bytestring-show",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#t:Show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.ByteString",
          "name": "Put",
          "package": "bytestring-show",
          "signature": "Put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "Put",
          "package": "bytestring-show",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a value to the standard output\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "print",
          "package": "bytestring-show",
          "signature": "a -\u003e IO ()",
          "source": "src/Text-Show-ByteString.html#print",
          "type": "function"
        },
        "index": {
          "description": "Print value to the standard output",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "bytestring-show",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a single Char to a byte string, assuming it's ascii.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "putAscii",
          "package": "bytestring-show",
          "signature": "Char -\u003e Put",
          "source": "src/Text-Show-ByteString-Util.html#putAscii",
          "type": "function"
        },
        "index": {
          "description": "Writes single Char to byte string assuming it ascii",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "putAscii",
          "normalized": "Char-\u003ePut",
          "package": "bytestring-show",
          "partial": "Ascii",
          "signature": "Char-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:putAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a string of ascii characters to a byte string\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "putAsciiStr",
          "package": "bytestring-show",
          "signature": "String -\u003e Put",
          "source": "src/Text-Show-ByteString-Util.html#putAsciiStr",
          "type": "function"
        },
        "index": {
          "description": "Writes string of ascii characters to byte string",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "putAsciiStr",
          "normalized": "String-\u003ePut",
          "package": "bytestring-show",
          "partial": "Ascii Str",
          "signature": "String-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:putAsciiStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts the digit corresponding to the Int passed in.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "putDigit",
          "package": "bytestring-show",
          "signature": "Int -\u003e Put",
          "source": "src/Text-Show-ByteString.html#putDigit",
          "type": "function"
        },
        "index": {
          "description": "Puts the digit corresponding to the Int passed in",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "putDigit",
          "normalized": "Int-\u003ePut",
          "package": "bytestring-show",
          "partial": "Digit",
          "signature": "Int-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:putDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a single Char to a byte string, properly UTF-8 encoded\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "putUTF8",
          "package": "bytestring-show",
          "signature": "Char -\u003e Put",
          "source": "src/Text-Show-ByteString-Util.html#putUTF8",
          "type": "function"
        },
        "index": {
          "description": "Writes single Char to byte string properly UTF-8 encoded",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "putUTF8",
          "normalized": "Char-\u003ePut",
          "package": "bytestring-show",
          "partial": "UTF",
          "signature": "Char-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:putUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a string of unicode characters to a byte string,\n properly UTF-8 encoded\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "putUTF8Str",
          "package": "bytestring-show",
          "signature": "String -\u003e Put",
          "source": "src/Text-Show-ByteString-Util.html#putUTF8Str",
          "type": "function"
        },
        "index": {
          "description": "Writes string of unicode characters to byte string properly UTF-8 encoded",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "putUTF8Str",
          "normalized": "String-\u003ePut",
          "package": "bytestring-show",
          "partial": "UTF Str",
          "signature": "String-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:putUTF8Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "runPut",
          "package": "bytestring-show",
          "signature": "Put -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad with serialiser",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "runPut",
          "normalized": "Put-\u003eByteString",
          "package": "bytestring-show",
          "partial": "Put",
          "signature": "Put-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:runPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a single value into a byte string\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "show",
          "package": "bytestring-show",
          "signature": "a -\u003e ByteString",
          "source": "src/Text-Show-ByteString.html#show",
          "type": "function"
        },
        "index": {
          "description": "Encode single value into byte string",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "show",
          "normalized": "a-\u003eByteString",
          "package": "bytestring-show",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a value to an efficient byte string builder.\n Values of type Put can be efficiently combined, so this\n is available for building strings from multiple values.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "showp",
          "package": "bytestring-show",
          "signature": "a -\u003e Put",
          "source": "src/Text-Show-ByteString.html#showp",
          "type": "method"
        },
        "index": {
          "description": "Encodes value to an efficient byte string builder Values of type Put can be efficiently combined so this is available for building strings from multiple values",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "showp",
          "normalized": "a-\u003ePut",
          "package": "bytestring-show",
          "signature": "a-\u003ePut",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:showp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed RealFloat value using scientific (exponential) notation.\n The optional integer can be used to specify precision.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "showpEFloat",
          "package": "bytestring-show",
          "signature": "Maybe Int -\u003e a -\u003e Put",
          "source": "src/Text-Show-ByteString-Float.html#showpEFloat",
          "type": "function"
        },
        "index": {
          "description": "Show signed RealFloat value using scientific exponential notation The optional integer can be used to specify precision",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "showpEFloat",
          "normalized": "Maybe Int-\u003ea-\u003ePut",
          "package": "bytestring-show",
          "partial": "EFloat",
          "signature": "Maybe Int-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:showpEFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed RealFloat value using decimal notation. The optional\n integer can be used to specify precision.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "showpFFloat",
          "package": "bytestring-show",
          "signature": "Maybe Int -\u003e a -\u003e Put",
          "source": "src/Text-Show-ByteString-Float.html#showpFFloat",
          "type": "function"
        },
        "index": {
          "description": "Show signed RealFloat value using decimal notation The optional integer can be used to specify precision",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "showpFFloat",
          "normalized": "Maybe Int-\u003ea-\u003ePut",
          "package": "bytestring-show",
          "partial": "FFloat",
          "signature": "Maybe Int-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:showpFFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed RealFloat value using decimal notation when the\n absolute value lies between 0.1 and 9,999,999, and scientific\n notation otherwise. The optional integer can be used to specify\n precision.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "showpGFloat",
          "package": "bytestring-show",
          "signature": "Maybe Int -\u003e a -\u003e Put",
          "source": "src/Text-Show-ByteString-Float.html#showpGFloat",
          "type": "function"
        },
        "index": {
          "description": "Show signed RealFloat value using decimal notation when the absolute value lies between and and scientific notation otherwise The optional integer can be used to specify precision",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "showpGFloat",
          "normalized": "Maybe Int-\u003ea-\u003ePut",
          "package": "bytestring-show",
          "partial": "GFloat",
          "signature": "Maybe Int-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:showpGFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows an Integral number using the base specified by the first\n argument and the chracter representation specified by the second.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "showpIntAtBase",
          "package": "bytestring-show",
          "signature": "a -\u003e (Int -\u003e Char) -\u003e a -\u003e Put",
          "source": "src/Text-Show-ByteString-Integer.html#showpIntAtBase",
          "type": "function"
        },
        "index": {
          "description": "Shows an Integral number using the base specified by the first argument and the chracter representation specified by the second",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "showpIntAtBase",
          "normalized": "a-\u003e(Int-\u003eChar)-\u003ea-\u003ePut",
          "package": "bytestring-show",
          "partial": "Int At Base",
          "signature": "a-\u003e(Int-\u003eChar)-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:showpIntAtBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows for specialized display of lists of values.\n This is used, for example, when showing arrays of Chars.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "showpList",
          "package": "bytestring-show",
          "signature": "[a] -\u003e Put",
          "source": "src/Text-Show-ByteString.html#showpList",
          "type": "method"
        },
        "index": {
          "description": "Allows for specialized display of lists of values This is used for example when showing arrays of Chars",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "showpList",
          "normalized": "[a]-\u003ePut",
          "package": "bytestring-show",
          "partial": "List",
          "signature": "[a]-\u003ePut",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:showpList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA utility function for surrounding output by parentheses\n conditionally.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "showpParen",
          "package": "bytestring-show",
          "signature": "Bool -\u003e Put -\u003e Put",
          "source": "src/Text-Show-ByteString.html#showpParen",
          "type": "function"
        },
        "index": {
          "description": "utility function for surrounding output by parentheses conditionally",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "showpParen",
          "normalized": "Bool-\u003ePut-\u003ePut",
          "package": "bytestring-show",
          "partial": "Paren",
          "signature": "Bool-\u003ePut-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:showpParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a value to an efficient byte string builder.\n The precedence is used to determine where to put\n parentheses in a shown expression involving operators.\n\u003c/p\u003e\u003cp\u003eValues of type Put can be efficiently combined, so the\n showp functions are available for showing multiple values\n before producing an output byte string.\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "showpPrec",
          "package": "bytestring-show",
          "signature": "Int -\u003e a -\u003e Put",
          "source": "src/Text-Show-ByteString.html#showpPrec",
          "type": "method"
        },
        "index": {
          "description": "Encodes value to an efficient byte string builder The precedence is used to determine where to put parentheses in shown expression involving operators Values of type Put can be efficiently combined so the showp functions are available for showing multiple values before producing an output byte string",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "showpPrec",
          "normalized": "Int-\u003ea-\u003ePut",
          "package": "bytestring-show",
          "partial": "Prec",
          "signature": "Int-\u003ea-\u003ePut",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:showpPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Show.ByteString",
          "name": "unPut",
          "package": "bytestring-show",
          "signature": "PairS a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "unPut",
          "package": "bytestring-show",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:unPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge several string builders, separating them by newlines\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "unlinesP",
          "package": "bytestring-show",
          "signature": "[Put] -\u003e Put",
          "source": "src/Text-Show-ByteString.html#unlinesP",
          "type": "function"
        },
        "index": {
          "description": "Merge several string builders separating them by newlines",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "unlinesP",
          "normalized": "[Put]-\u003ePut",
          "package": "bytestring-show",
          "signature": "[Put]-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:unlinesP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts the decimal digit corresponding to the given Int without\n checking that it is in the interval [0,9]\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "unsafePutDigit",
          "package": "bytestring-show",
          "signature": "Int -\u003e Put",
          "source": "src/Text-Show-ByteString-Util.html#unsafePutDigit",
          "type": "function"
        },
        "index": {
          "description": "Puts the decimal digit corresponding to the given Int without checking that it is in the interval",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "unsafePutDigit",
          "normalized": "Int-\u003ePut",
          "package": "bytestring-show",
          "partial": "Put Digit",
          "signature": "Int-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:unsafePutDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge several string builders, separating them by spaces\n\u003c/p\u003e",
          "module": "Text.Show.ByteString",
          "name": "unwordsP",
          "package": "bytestring-show",
          "signature": "[Put] -\u003e Put",
          "source": "src/Text-Show-ByteString.html#unwordsP",
          "type": "function"
        },
        "index": {
          "description": "Merge several string builders separating them by spaces",
          "hierarchy": "Text Show ByteString",
          "module": "Text.Show.ByteString",
          "name": "unwordsP",
          "normalized": "[Put]-\u003ePut",
          "package": "bytestring-show",
          "signature": "[Put]-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-show/docs/Text-Show-ByteString.html#v:unwordsP"
      }
    }
  ]
]