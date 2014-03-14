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
        "word": "packedstring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis API is deprecated.  You might be able to use Data.ByteString\n or Data.ByteString.Char8 from the bytestring package, provided you\n don't need full Unicode support.\n The long term aim is to provide a Unicode layer on Data.ByteString,\n and then to provide a replacement for this \u003ca\u003eData.PackedString\u003c/a\u003e API based on\n that.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PackedString",
          "name": "PackedString",
          "package": "packedstring",
          "source": "src/Data-PackedString.html",
          "type": "module"
        },
        "index": {
          "description": "This API is deprecated You might be able to use Data.ByteString or Data.ByteString.Char8 from the bytestring package provided you don need full Unicode support The long term aim is to provide Unicode layer on Data.ByteString and then to provide replacement for this Data.PackedString API based on that",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "PackedString",
          "package": "packedstring",
          "partial": "Packed String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, which supports various\n efficient operations.  A \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e contains full Unicode \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "PackedString",
          "package": "packedstring",
          "source": "src/Data-PackedString.html#PackedString",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of String which supports various efficient operations PackedString contains full Unicode Char",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "PackedString",
          "package": "packedstring",
          "partial": "Packed String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#t:PackedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eappendPS\u003c/a\u003e\u003c/code\u003e function appends the second string onto the first.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "appendPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#appendPS",
          "type": "function"
        },
        "index": {
          "description": "The appendPS function appends the second string onto the first",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "appendPS",
          "normalized": "PackedString-\u003ePackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003ePackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:appendPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebreakPS\u003c/a\u003e\u003c/code\u003e function breaks a string at the first position which\n satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "breakPS",
          "package": "packedstring",
          "signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e (PackedString, PackedString)",
          "source": "src/Data-PackedString.html#breakPS",
          "type": "function"
        },
        "index": {
          "description": "The breakPS function breaks string at the first position which satisfies the predicate",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "breakPS",
          "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003e(PackedString,PackedString)",
          "package": "packedstring",
          "partial": "PS",
          "signature": "(Char-\u003eBool)-\u003ePackedString-\u003e(PackedString,PackedString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:breakPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003econcatPS\u003c/a\u003e\u003c/code\u003e function concatenates a list of \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "concatPS",
          "package": "packedstring",
          "signature": "[PackedString] -\u003e PackedString",
          "source": "src/Data-PackedString.html#concatPS",
          "type": "function"
        },
        "index": {
          "description": "The concatPS function concatenates list of PackedString",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "concatPS",
          "normalized": "[PackedString]-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "[PackedString]-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:concatPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003econsPS\u003c/a\u003e\u003c/code\u003e function prepends the given character to the\n given string.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "consPS",
          "package": "packedstring",
          "signature": "Char -\u003e PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#consPS",
          "type": "function"
        },
        "index": {
          "description": "The consPS function prepends the given character to the given string",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "consPS",
          "normalized": "Char-\u003ePackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "Char-\u003ePackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:consPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edropPS\u003c/a\u003e\u003c/code\u003e function drops the first \u003ccode\u003en\u003c/code\u003e characters of a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "dropPS",
          "package": "packedstring",
          "signature": "Int -\u003e PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#dropPS",
          "type": "function"
        },
        "index": {
          "description": "The dropPS function drops the first characters of PackedString",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "dropPS",
          "normalized": "Int-\u003ePackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "Int-\u003ePackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:dropPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edropWhilePS\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "dropWhilePS",
          "package": "packedstring",
          "signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#dropWhilePS",
          "type": "function"
        },
        "index": {
          "description": "The dropWhilePS function is analogous to the dropWhile function",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "dropWhilePS",
          "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "While PS",
          "signature": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:dropWhilePS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemPS\u003c/a\u003e\u003c/code\u003e function returns True iff the given element is in the string.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "elemPS",
          "package": "packedstring",
          "signature": "Char -\u003e PackedString -\u003e Bool",
          "source": "src/Data-PackedString.html#elemPS",
          "type": "function"
        },
        "index": {
          "description": "The elemPS function returns True iff the given element is in the string",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "elemPS",
          "normalized": "Char-\u003ePackedString-\u003eBool",
          "package": "packedstring",
          "partial": "PS",
          "signature": "Char-\u003ePackedString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:elemPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efilterPS\u003c/a\u003e\u003c/code\u003e function filters out the appropriate substring.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "filterPS",
          "package": "packedstring",
          "signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#filterPS",
          "type": "function"
        },
        "index": {
          "description": "The filterPS function filters out the appropriate substring",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "filterPS",
          "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:filterPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldlPS\u003c/a\u003e\u003c/code\u003e function behaves like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "foldlPS",
          "package": "packedstring",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e PackedString -\u003e a",
          "source": "src/Data-PackedString.html#foldlPS",
          "type": "function"
        },
        "index": {
          "description": "The foldlPS function behaves like foldl on PackedString",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "foldlPS",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003ePackedString-\u003ea",
          "package": "packedstring",
          "partial": "PS",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003ePackedString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:foldlPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldrPS\u003c/a\u003e\u003c/code\u003e function behaves like \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "foldrPS",
          "package": "packedstring",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e PackedString -\u003e a",
          "source": "src/Data-PackedString.html#foldrPS",
          "type": "function"
        },
        "index": {
          "description": "The foldrPS function behaves like foldr on PackedString",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "foldrPS",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003ePackedString-\u003ea",
          "package": "packedstring",
          "partial": "PS",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003ePackedString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:foldrPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n This is far more efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n and then using \u003ccode\u003e\u003ca\u003epackString\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eNOTE: as with \u003ccode\u003e\u003ca\u003ehPutPS\u003c/a\u003e\u003c/code\u003e, the string representation in the file is \n assumed to be ISO-8859-1.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "hGetPS",
          "package": "packedstring",
          "signature": "Handle -\u003e Int -\u003e IO PackedString",
          "source": "src/Data-PackedString.html#hGetPS",
          "type": "function"
        },
        "index": {
          "description": "Read PackedString directly from the specified Handle This is far more efficient than reading the characters into String and then using packString NOTE as with hPutPS the string representation in the file is assumed to be ISO-8859-1",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "hGetPS",
          "normalized": "Handle-\u003eInt-\u003eIO PackedString",
          "package": "packedstring",
          "partial": "Get PS",
          "signature": "Handle-\u003eInt-\u003eIO PackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:hGetPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: the representation of the \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e in the file is assumed to\n be in the ISO-8859-1 encoding.  In other words, only the least significant\n byte is taken from each character in the \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "hPutPS",
          "package": "packedstring",
          "signature": "Handle -\u003e PackedString -\u003e IO ()",
          "source": "src/Data-PackedString.html#hPutPS",
          "type": "function"
        },
        "index": {
          "description": "Outputs PackedString to the specified Handle NOTE the representation of the PackedString in the file is assumed to be in the ISO-8859-1 encoding In other words only the least significant byte is taken from each character in the PackedString",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "hPutPS",
          "normalized": "Handle-\u003ePackedString-\u003eIO()",
          "package": "packedstring",
          "partial": "Put PS",
          "signature": "Handle-\u003ePackedString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:hPutPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eheadPS\u003c/a\u003e\u003c/code\u003e function returns the first element of a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e or throws an\n error if the string is empty.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "headPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e Char",
          "source": "src/Data-PackedString.html#headPS",
          "type": "function"
        },
        "index": {
          "description": "The headPS function returns the first element of PackedString or throws an error if the string is empty",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "headPS",
          "normalized": "PackedString-\u003eChar",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:headPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eindexPS\u003c/a\u003e\u003c/code\u003e function returns the character in the string at the given position.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "indexPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e Int -\u003e Char",
          "source": "src/Data-PackedString.html#indexPS",
          "type": "function"
        },
        "index": {
          "description": "The indexPS function returns the character in the string at the given position",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "indexPS",
          "normalized": "PackedString-\u003eInt-\u003eChar",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003eInt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:indexPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoinPS\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e and a list of \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003es\n and concatenates the list after interspersing the first argument between\n each element of the list.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "joinPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e [PackedString] -\u003e PackedString",
          "source": "src/Data-PackedString.html#joinPS",
          "type": "function"
        },
        "index": {
          "description": "The joinPS function takes PackedString and list of PackedString and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "joinPS",
          "normalized": "PackedString-\u003e[PackedString]-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003e[PackedString]-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:joinPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elengthPS\u003c/a\u003e\u003c/code\u003e function returns the length of the input list.  Analogous to \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "lengthPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e Int",
          "source": "src/Data-PackedString.html#lengthPS",
          "type": "function"
        },
        "index": {
          "description": "The lengthPS function returns the length of the input list Analogous to length",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "lengthPS",
          "normalized": "PackedString-\u003eInt",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:lengthPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elinesPS\u003c/a\u003e\u003c/code\u003e function splits the input on line-breaks.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "linesPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e [PackedString]",
          "source": "src/Data-PackedString.html#linesPS",
          "type": "function"
        },
        "index": {
          "description": "The linesPS function splits the input on line-breaks",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "linesPS",
          "normalized": "PackedString-\u003e[PackedString]",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003e[PackedString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:linesPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapPS\u003c/a\u003e\u003c/code\u003e function applies a function to each character in the string.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "mapPS",
          "package": "packedstring",
          "signature": "(Char -\u003e Char) -\u003e PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#mapPS",
          "type": "function"
        },
        "index": {
          "description": "The mapPS function applies function to each character in the string",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "mapPS",
          "normalized": "(Char-\u003eChar)-\u003ePackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "(Char-\u003eChar)-\u003ePackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:mapPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enilPS\u003c/a\u003e\u003c/code\u003e value is the empty string.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "nilPS",
          "package": "packedstring",
          "signature": "PackedString",
          "source": "src/Data-PackedString.html#nilPS",
          "type": "function"
        },
        "index": {
          "description": "The nilPS value is the empty string",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "nilPS",
          "package": "packedstring",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:nilPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enullPS\u003c/a\u003e\u003c/code\u003e function returns True iff the argument is null.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "nullPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e Bool",
          "source": "src/Data-PackedString.html#nullPS",
          "type": "function"
        },
        "index": {
          "description": "The nullPS function returns True iff the argument is null",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "nullPS",
          "normalized": "PackedString-\u003eBool",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:nullPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "packString",
          "package": "packedstring",
          "signature": "String -\u003e PackedString",
          "source": "src/Data-PackedString.html#packString",
          "type": "function"
        },
        "index": {
          "description": "Convert String into PackedString",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "packString",
          "normalized": "String-\u003ePackedString",
          "package": "packedstring",
          "partial": "String",
          "signature": "String-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:packString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereversePS\u003c/a\u003e\u003c/code\u003e function reverses the string.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "reversePS",
          "package": "packedstring",
          "signature": "PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#reversePS",
          "type": "function"
        },
        "index": {
          "description": "The reversePS function reverses the string",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "reversePS",
          "normalized": "PackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:reversePS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003espanPS\u003c/a\u003e\u003c/code\u003e function returns a pair containing the result of\n running both \u003ccode\u003e\u003ca\u003etakeWhilePS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edropWhilePS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "spanPS",
          "package": "packedstring",
          "signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e (PackedString, PackedString)",
          "source": "src/Data-PackedString.html#spanPS",
          "type": "function"
        },
        "index": {
          "description": "The spanPS function returns pair containing the result of running both takeWhilePS and dropWhilePS",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "spanPS",
          "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003e(PackedString,PackedString)",
          "package": "packedstring",
          "partial": "PS",
          "signature": "(Char-\u003eBool)-\u003ePackedString-\u003e(PackedString,PackedString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:spanPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplitWithPS\u003c/a\u003e\u003c/code\u003e function splits a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e at a given index.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "splitAtPS",
          "package": "packedstring",
          "signature": "Int -\u003e PackedString -\u003e (PackedString, PackedString)",
          "source": "src/Data-PackedString.html#splitAtPS",
          "type": "function"
        },
        "index": {
          "description": "The splitWithPS function splits PackedString at given index",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "splitAtPS",
          "normalized": "Int-\u003ePackedString-\u003e(PackedString,PackedString)",
          "package": "packedstring",
          "partial": "At PS",
          "signature": "Int-\u003ePackedString-\u003e(PackedString,PackedString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:splitAtPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplitPS\u003c/a\u003e\u003c/code\u003e function splits the input string on each occurrence of the given \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "splitPS",
          "package": "packedstring",
          "signature": "Char -\u003e PackedString -\u003e [PackedString]",
          "source": "src/Data-PackedString.html#splitPS",
          "type": "function"
        },
        "index": {
          "description": "The splitPS function splits the input string on each occurrence of the given Char",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "splitPS",
          "normalized": "Char-\u003ePackedString-\u003e[PackedString]",
          "package": "packedstring",
          "partial": "PS",
          "signature": "Char-\u003ePackedString-\u003e[PackedString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:splitPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplitWithPS\u003c/a\u003e\u003c/code\u003e function takes a character predicate and splits the input string\n at each character which satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "splitWithPS",
          "package": "packedstring",
          "signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e [PackedString]",
          "source": "src/Data-PackedString.html#splitWithPS",
          "type": "function"
        },
        "index": {
          "description": "The splitWithPS function takes character predicate and splits the input string at each character which satisfies the predicate",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "splitWithPS",
          "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003e[PackedString]",
          "package": "packedstring",
          "partial": "With PS",
          "signature": "(Char-\u003eBool)-\u003ePackedString-\u003e[PackedString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:splitWithPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubstrPS\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e and two indices\n and returns the substring of the input string between (and including)\n these indices.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "substrPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e Int -\u003e Int -\u003e PackedString",
          "source": "src/Data-PackedString.html#substrPS",
          "type": "function"
        },
        "index": {
          "description": "The substrPS function takes PackedString and two indices and returns the substring of the input string between and including these indices",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "substrPS",
          "normalized": "PackedString-\u003eInt-\u003eInt-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003eInt-\u003eInt-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:substrPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etailPS\u003c/a\u003e\u003c/code\u003e function returns the tail of a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e or throws an error\n if the string is empty.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "tailPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#tailPS",
          "type": "function"
        },
        "index": {
          "description": "The tailPS function returns the tail of PackedString or throws an error if the string is empty",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "tailPS",
          "normalized": "PackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:tailPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etakePS\u003c/a\u003e\u003c/code\u003e function takes the first \u003ccode\u003en\u003c/code\u003e characters of a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "takePS",
          "package": "packedstring",
          "signature": "Int -\u003e PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#takePS",
          "type": "function"
        },
        "index": {
          "description": "The takePS function takes the first characters of PackedString",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "takePS",
          "normalized": "Int-\u003ePackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "Int-\u003ePackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:takePS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etakeWhilePS\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "takeWhilePS",
          "package": "packedstring",
          "signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e PackedString",
          "source": "src/Data-PackedString.html#takeWhilePS",
          "type": "function"
        },
        "index": {
          "description": "The takeWhilePS function is analogous to the takeWhile function",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "takeWhilePS",
          "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString",
          "package": "packedstring",
          "partial": "While PS",
          "signature": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:takeWhilePS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunlinesPS\u003c/a\u003e\u003c/code\u003e function concatenates the input list after\n interspersing newlines.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "unlinesPS",
          "package": "packedstring",
          "signature": "[PackedString] -\u003e PackedString",
          "source": "src/Data-PackedString.html#unlinesPS",
          "type": "function"
        },
        "index": {
          "description": "The unlinesPS function concatenates the input list after interspersing newlines",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "unlinesPS",
          "normalized": "[PackedString]-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "[PackedString]-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:unlinesPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "unpackPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e String",
          "source": "src/Data-PackedString.html#unpackPS",
          "type": "function"
        },
        "index": {
          "description": "Convert PackedString into String",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "unpackPS",
          "normalized": "PackedString-\u003eString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:unpackPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwordsPS\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "unwordsPS",
          "package": "packedstring",
          "signature": "[PackedString] -\u003e PackedString",
          "source": "src/Data-PackedString.html#unwordsPS",
          "type": "function"
        },
        "index": {
          "description": "The unwordsPS function is analogous to the unwords function",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "unwordsPS",
          "normalized": "[PackedString]-\u003ePackedString",
          "package": "packedstring",
          "partial": "PS",
          "signature": "[PackedString]-\u003ePackedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:unwordsPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewordsPS\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.PackedString",
          "name": "wordsPS",
          "package": "packedstring",
          "signature": "PackedString -\u003e [PackedString]",
          "source": "src/Data-PackedString.html#wordsPS",
          "type": "function"
        },
        "index": {
          "description": "The wordsPS function is analogous to the words function",
          "hierarchy": "Data PackedString",
          "module": "Data.PackedString",
          "name": "wordsPS",
          "normalized": "PackedString-\u003e[PackedString]",
          "package": "packedstring",
          "partial": "PS",
          "signature": "PackedString-\u003e[PackedString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:wordsPS"
      }
    }
  ]
]