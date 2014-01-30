[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis API is deprecated.  You might be able to use Data.ByteString\n or Data.ByteString.Char8 from the bytestring package, provided you\n don't need full Unicode support.\n The long term aim is to provide a Unicode layer on Data.ByteString,\n and then to provide a replacement for this \u003ca\u003eData.PackedString\u003c/a\u003e API based on\n that.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "module",
        "fct-source": "src/Data-PackedString.html",
        "fct-type": "module",
        "title": "PackedString"
      },
      "index": {
        "description": "This API is deprecated You might be able to use Data.ByteString or Data.ByteString.Char8 from the bytestring package provided you don need full Unicode support The long term aim is to provide Unicode layer on Data.ByteString and then to provide replacement for this Data.PackedString API based on that",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "PackedString",
        "normalized": "",
        "package": "packedstring",
        "partial": "Packed String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#t:PackedString",
      "description": {
        "fct-descr": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, which supports various\n efficient operations.  A \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e contains full Unicode \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "data",
        "fct-source": "src/Data-PackedString.html#PackedString",
        "fct-type": "data",
        "title": "PackedString"
      },
      "index": {
        "description": "space-efficient representation of String which supports various efficient operations PackedString contains full Unicode Char",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "PackedString",
        "normalized": "",
        "package": "packedstring",
        "partial": "Packed String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:appendPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eappendPS\u003c/a\u003e\u003c/code\u003e function appends the second string onto the first.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#appendPS",
        "fct-type": "function",
        "title": "appendPS"
      },
      "index": {
        "description": "The appendPS function appends the second string onto the first",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "appendPS",
        "normalized": "PackedString-\u003ePackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003ePackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:breakPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebreakPS\u003c/a\u003e\u003c/code\u003e function breaks a string at the first position which\n satisfies the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e (PackedString, PackedString)",
        "fct-source": "src/Data-PackedString.html#breakPS",
        "fct-type": "function",
        "title": "breakPS"
      },
      "index": {
        "description": "The breakPS function breaks string at the first position which satisfies the predicate",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "breakPS",
        "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003e(PackedString,PackedString)",
        "package": "packedstring",
        "partial": "PS",
        "signature": "(Char-\u003eBool)-\u003ePackedString-\u003e(PackedString,PackedString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:concatPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003econcatPS\u003c/a\u003e\u003c/code\u003e function concatenates a list of \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "[PackedString] -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#concatPS",
        "fct-type": "function",
        "title": "concatPS"
      },
      "index": {
        "description": "The concatPS function concatenates list of PackedString",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "concatPS",
        "normalized": "[PackedString]-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "[PackedString]-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:consPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003econsPS\u003c/a\u003e\u003c/code\u003e function prepends the given character to the\n given string.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "Char -\u003e PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#consPS",
        "fct-type": "function",
        "title": "consPS"
      },
      "index": {
        "description": "The consPS function prepends the given character to the given string",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "consPS",
        "normalized": "Char-\u003ePackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "Char-\u003ePackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:dropPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edropPS\u003c/a\u003e\u003c/code\u003e function drops the first \u003ccode\u003en\u003c/code\u003e characters of a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "Int -\u003e PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#dropPS",
        "fct-type": "function",
        "title": "dropPS"
      },
      "index": {
        "description": "The dropPS function drops the first characters of PackedString",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "dropPS",
        "normalized": "Int-\u003ePackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "Int-\u003ePackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:dropWhilePS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edropWhilePS\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#dropWhilePS",
        "fct-type": "function",
        "title": "dropWhilePS"
      },
      "index": {
        "description": "The dropWhilePS function is analogous to the dropWhile function",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "dropWhilePS",
        "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "While PS",
        "signature": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:elemPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemPS\u003c/a\u003e\u003c/code\u003e function returns True iff the given element is in the string.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "Char -\u003e PackedString -\u003e Bool",
        "fct-source": "src/Data-PackedString.html#elemPS",
        "fct-type": "function",
        "title": "elemPS"
      },
      "index": {
        "description": "The elemPS function returns True iff the given element is in the string",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "elemPS",
        "normalized": "Char-\u003ePackedString-\u003eBool",
        "package": "packedstring",
        "partial": "PS",
        "signature": "Char-\u003ePackedString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:filterPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efilterPS\u003c/a\u003e\u003c/code\u003e function filters out the appropriate substring.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#filterPS",
        "fct-type": "function",
        "title": "filterPS"
      },
      "index": {
        "description": "The filterPS function filters out the appropriate substring",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "filterPS",
        "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:foldlPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldlPS\u003c/a\u003e\u003c/code\u003e function behaves like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e PackedString -\u003e a",
        "fct-source": "src/Data-PackedString.html#foldlPS",
        "fct-type": "function",
        "title": "foldlPS"
      },
      "index": {
        "description": "The foldlPS function behaves like foldl on PackedString",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "foldlPS",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003ePackedString-\u003ea",
        "package": "packedstring",
        "partial": "PS",
        "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003ePackedString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:foldrPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldrPS\u003c/a\u003e\u003c/code\u003e function behaves like \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e PackedString -\u003e a",
        "fct-source": "src/Data-PackedString.html#foldrPS",
        "fct-type": "function",
        "title": "foldrPS"
      },
      "index": {
        "description": "The foldrPS function behaves like foldr on PackedString",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "foldrPS",
        "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003ePackedString-\u003ea",
        "package": "packedstring",
        "partial": "PS",
        "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003ePackedString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:hGetPS",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n This is far more efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n and then using \u003ccode\u003e\u003ca\u003epackString\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eNOTE: as with \u003ccode\u003e\u003ca\u003ehPutPS\u003c/a\u003e\u003c/code\u003e, the string representation in the file is \n assumed to be ISO-8859-1.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "Handle -\u003e Int -\u003e IO PackedString",
        "fct-source": "src/Data-PackedString.html#hGetPS",
        "fct-type": "function",
        "title": "hGetPS"
      },
      "index": {
        "description": "Read PackedString directly from the specified Handle This is far more efficient than reading the characters into String and then using packString NOTE as with hPutPS the string representation in the file is assumed to be ISO-8859-1",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "hGetPS",
        "normalized": "Handle-\u003eInt-\u003eIO PackedString",
        "package": "packedstring",
        "partial": "Get PS",
        "signature": "Handle-\u003eInt-\u003eIO PackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:hPutPS",
      "description": {
        "fct-descr": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: the representation of the \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e in the file is assumed to\n be in the ISO-8859-1 encoding.  In other words, only the least significant\n byte is taken from each character in the \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "Handle -\u003e PackedString -\u003e IO ()",
        "fct-source": "src/Data-PackedString.html#hPutPS",
        "fct-type": "function",
        "title": "hPutPS"
      },
      "index": {
        "description": "Outputs PackedString to the specified Handle NOTE the representation of the PackedString in the file is assumed to be in the ISO-8859-1 encoding In other words only the least significant byte is taken from each character in the PackedString",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "hPutPS",
        "normalized": "Handle-\u003ePackedString-\u003eIO()",
        "package": "packedstring",
        "partial": "Put PS",
        "signature": "Handle-\u003ePackedString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:headPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eheadPS\u003c/a\u003e\u003c/code\u003e function returns the first element of a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e or throws an\n error if the string is empty.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e Char",
        "fct-source": "src/Data-PackedString.html#headPS",
        "fct-type": "function",
        "title": "headPS"
      },
      "index": {
        "description": "The headPS function returns the first element of PackedString or throws an error if the string is empty",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "headPS",
        "normalized": "PackedString-\u003eChar",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:indexPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eindexPS\u003c/a\u003e\u003c/code\u003e function returns the character in the string at the given position.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e Int -\u003e Char",
        "fct-source": "src/Data-PackedString.html#indexPS",
        "fct-type": "function",
        "title": "indexPS"
      },
      "index": {
        "description": "The indexPS function returns the character in the string at the given position",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "indexPS",
        "normalized": "PackedString-\u003eInt-\u003eChar",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003eInt-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:joinPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoinPS\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e and a list of \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003es\n and concatenates the list after interspersing the first argument between\n each element of the list.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e [PackedString] -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#joinPS",
        "fct-type": "function",
        "title": "joinPS"
      },
      "index": {
        "description": "The joinPS function takes PackedString and list of PackedString and concatenates the list after interspersing the first argument between each element of the list",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "joinPS",
        "normalized": "PackedString-\u003e[PackedString]-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003e[PackedString]-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:lengthPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elengthPS\u003c/a\u003e\u003c/code\u003e function returns the length of the input list.  Analogous to \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e Int",
        "fct-source": "src/Data-PackedString.html#lengthPS",
        "fct-type": "function",
        "title": "lengthPS"
      },
      "index": {
        "description": "The lengthPS function returns the length of the input list Analogous to length",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "lengthPS",
        "normalized": "PackedString-\u003eInt",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:linesPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elinesPS\u003c/a\u003e\u003c/code\u003e function splits the input on line-breaks.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e [PackedString]",
        "fct-source": "src/Data-PackedString.html#linesPS",
        "fct-type": "function",
        "title": "linesPS"
      },
      "index": {
        "description": "The linesPS function splits the input on line-breaks",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "linesPS",
        "normalized": "PackedString-\u003e[PackedString]",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003e[PackedString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:mapPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapPS\u003c/a\u003e\u003c/code\u003e function applies a function to each character in the string.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "(Char -\u003e Char) -\u003e PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#mapPS",
        "fct-type": "function",
        "title": "mapPS"
      },
      "index": {
        "description": "The mapPS function applies function to each character in the string",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "mapPS",
        "normalized": "(Char-\u003eChar)-\u003ePackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "(Char-\u003eChar)-\u003ePackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:nilPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enilPS\u003c/a\u003e\u003c/code\u003e value is the empty string.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString",
        "fct-source": "src/Data-PackedString.html#nilPS",
        "fct-type": "function",
        "title": "nilPS"
      },
      "index": {
        "description": "The nilPS value is the empty string",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "nilPS",
        "normalized": "",
        "package": "packedstring",
        "partial": "PS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:nullPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enullPS\u003c/a\u003e\u003c/code\u003e function returns True iff the argument is null.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e Bool",
        "fct-source": "src/Data-PackedString.html#nullPS",
        "fct-type": "function",
        "title": "nullPS"
      },
      "index": {
        "description": "The nullPS function returns True iff the argument is null",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "nullPS",
        "normalized": "PackedString-\u003eBool",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:packString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "String -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#packString",
        "fct-type": "function",
        "title": "packString"
      },
      "index": {
        "description": "Convert String into PackedString",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "packString",
        "normalized": "String-\u003ePackedString",
        "package": "packedstring",
        "partial": "String",
        "signature": "String-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:reversePS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereversePS\u003c/a\u003e\u003c/code\u003e function reverses the string.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#reversePS",
        "fct-type": "function",
        "title": "reversePS"
      },
      "index": {
        "description": "The reversePS function reverses the string",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "reversePS",
        "normalized": "PackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:spanPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003espanPS\u003c/a\u003e\u003c/code\u003e function returns a pair containing the result of\n running both \u003ccode\u003e\u003ca\u003etakeWhilePS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edropWhilePS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e (PackedString, PackedString)",
        "fct-source": "src/Data-PackedString.html#spanPS",
        "fct-type": "function",
        "title": "spanPS"
      },
      "index": {
        "description": "The spanPS function returns pair containing the result of running both takeWhilePS and dropWhilePS",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "spanPS",
        "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003e(PackedString,PackedString)",
        "package": "packedstring",
        "partial": "PS",
        "signature": "(Char-\u003eBool)-\u003ePackedString-\u003e(PackedString,PackedString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:splitAtPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplitWithPS\u003c/a\u003e\u003c/code\u003e function splits a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e at a given index.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "Int -\u003e PackedString -\u003e (PackedString, PackedString)",
        "fct-source": "src/Data-PackedString.html#splitAtPS",
        "fct-type": "function",
        "title": "splitAtPS"
      },
      "index": {
        "description": "The splitWithPS function splits PackedString at given index",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "splitAtPS",
        "normalized": "Int-\u003ePackedString-\u003e(PackedString,PackedString)",
        "package": "packedstring",
        "partial": "At PS",
        "signature": "Int-\u003ePackedString-\u003e(PackedString,PackedString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:splitPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplitPS\u003c/a\u003e\u003c/code\u003e function splits the input string on each occurrence of the given \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "Char -\u003e PackedString -\u003e [PackedString]",
        "fct-source": "src/Data-PackedString.html#splitPS",
        "fct-type": "function",
        "title": "splitPS"
      },
      "index": {
        "description": "The splitPS function splits the input string on each occurrence of the given Char",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "splitPS",
        "normalized": "Char-\u003ePackedString-\u003e[PackedString]",
        "package": "packedstring",
        "partial": "PS",
        "signature": "Char-\u003ePackedString-\u003e[PackedString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:splitWithPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplitWithPS\u003c/a\u003e\u003c/code\u003e function takes a character predicate and splits the input string\n at each character which satisfies the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e [PackedString]",
        "fct-source": "src/Data-PackedString.html#splitWithPS",
        "fct-type": "function",
        "title": "splitWithPS"
      },
      "index": {
        "description": "The splitWithPS function takes character predicate and splits the input string at each character which satisfies the predicate",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "splitWithPS",
        "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003e[PackedString]",
        "package": "packedstring",
        "partial": "With PS",
        "signature": "(Char-\u003eBool)-\u003ePackedString-\u003e[PackedString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:substrPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubstrPS\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e and two indices\n and returns the substring of the input string between (and including)\n these indices.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e Int -\u003e Int -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#substrPS",
        "fct-type": "function",
        "title": "substrPS"
      },
      "index": {
        "description": "The substrPS function takes PackedString and two indices and returns the substring of the input string between and including these indices",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "substrPS",
        "normalized": "PackedString-\u003eInt-\u003eInt-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003eInt-\u003eInt-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:tailPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etailPS\u003c/a\u003e\u003c/code\u003e function returns the tail of a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e or throws an error\n if the string is empty.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#tailPS",
        "fct-type": "function",
        "title": "tailPS"
      },
      "index": {
        "description": "The tailPS function returns the tail of PackedString or throws an error if the string is empty",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "tailPS",
        "normalized": "PackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:takePS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etakePS\u003c/a\u003e\u003c/code\u003e function takes the first \u003ccode\u003en\u003c/code\u003e characters of a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "Int -\u003e PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#takePS",
        "fct-type": "function",
        "title": "takePS"
      },
      "index": {
        "description": "The takePS function takes the first characters of PackedString",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "takePS",
        "normalized": "Int-\u003ePackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "Int-\u003ePackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:takeWhilePS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etakeWhilePS\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "(Char -\u003e Bool) -\u003e PackedString -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#takeWhilePS",
        "fct-type": "function",
        "title": "takeWhilePS"
      },
      "index": {
        "description": "The takeWhilePS function is analogous to the takeWhile function",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "takeWhilePS",
        "normalized": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString",
        "package": "packedstring",
        "partial": "While PS",
        "signature": "(Char-\u003eBool)-\u003ePackedString-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:unlinesPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunlinesPS\u003c/a\u003e\u003c/code\u003e function concatenates the input list after\n interspersing newlines.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "[PackedString] -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#unlinesPS",
        "fct-type": "function",
        "title": "unlinesPS"
      },
      "index": {
        "description": "The unlinesPS function concatenates the input list after interspersing newlines",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "unlinesPS",
        "normalized": "[PackedString]-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "[PackedString]-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:unpackPS",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePackedString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e String",
        "fct-source": "src/Data-PackedString.html#unpackPS",
        "fct-type": "function",
        "title": "unpackPS"
      },
      "index": {
        "description": "Convert PackedString into String",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "unpackPS",
        "normalized": "PackedString-\u003eString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:unwordsPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwordsPS\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "[PackedString] -\u003e PackedString",
        "fct-source": "src/Data-PackedString.html#unwordsPS",
        "fct-type": "function",
        "title": "unwordsPS"
      },
      "index": {
        "description": "The unwordsPS function is analogous to the unwords function",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "unwordsPS",
        "normalized": "[PackedString]-\u003ePackedString",
        "package": "packedstring",
        "partial": "PS",
        "signature": "[PackedString]-\u003ePackedString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packedstring/docs/Data-PackedString.html#v:wordsPS",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewordsPS\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Data.PackedString",
        "fct-package": "packedstring",
        "fct-signature": "PackedString -\u003e [PackedString]",
        "fct-source": "src/Data-PackedString.html#wordsPS",
        "fct-type": "function",
        "title": "wordsPS"
      },
      "index": {
        "description": "The wordsPS function is analogous to the words function",
        "hierarchy": "Data PackedString",
        "module": "Data.PackedString",
        "name": "wordsPS",
        "normalized": "PackedString-\u003e[PackedString]",
        "package": "packedstring",
        "partial": "PS",
        "signature": "PackedString-\u003e[PackedString]"
      }
    }
  }
]