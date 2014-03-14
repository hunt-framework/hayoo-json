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
        "word": "text-latin1"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eASCII utility functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Ascii",
          "name": "Ascii",
          "package": "text-latin1",
          "source": "src/Text-Ascii.html",
          "type": "module"
        },
        "index": {
          "description": "ASCII utility functions",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "Ascii",
          "package": "text-latin1",
          "partial": "Ascii",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Ascii",
          "name": "Ascii",
          "package": "text-latin1",
          "source": "src/Text-Ascii.html#Ascii",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "Ascii",
          "package": "text-latin1",
          "partial": "Ascii",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#t:Ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Ascii",
          "name": "IsAscii",
          "package": "text-latin1",
          "source": "src/Text-Ascii.html#IsAscii",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "IsAscii",
          "package": "text-latin1",
          "partial": "Is Ascii",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#t:IsAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Ascii",
          "name": "IsAscii",
          "package": "text-latin1",
          "signature": "IsAscii",
          "source": "src/Text-Ascii.html#IsAscii",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "IsAscii",
          "package": "text-latin1",
          "partial": "Is Ascii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:IsAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an ASCII character. No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "ascii",
          "package": "text-latin1",
          "signature": "Char -\u003e Word8",
          "source": "src/Text-Ascii.html#ascii",
          "type": "function"
        },
        "index": {
          "description": "Encode an ASCII character No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "ascii",
          "normalized": "Char-\u003eWord",
          "package": "text-latin1",
          "signature": "Char-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap binary digits to the corresponding numbers. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on\n   other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromBinDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromBinDigit",
          "type": "function"
        },
        "index": {
          "description": "Map binary digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromBinDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Bin Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromBinDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a binary digit to the corresponding number.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromBinDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromBinDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of binary digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromBinDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Bin Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromBinDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a decimal digit to the corresponding number. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on\n   other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromDecDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromDecDigit",
          "type": "function"
        },
        "index": {
          "description": "Map decimal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromDecDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Dec Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromDecDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a decimal digit to the corresponding number.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromDecDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromDecDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of decimal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromDecDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Dec Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromDecDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap hexadecimal digits to the corresponding numbers.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Map hexadecimal digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromHexDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Hex Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a hexadecimal digit to the corresponding\n   number. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of hexadecimal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromHexDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Hex Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap lower-case hexadecimal digits to the corresponding numbers.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromLowHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromLowHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Map lower-case hexadecimal digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromLowHexDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Low Hex Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromLowHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a lower-case hexadecimal digit to the corresponding\n   number. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromLowHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromLowHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of lower-case hexadecimal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromLowHexDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Low Hex Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromLowHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the digit \u003cem\u003e'1'\u003c/em\u003e to the number \u003cem\u003e1\u003c/em\u003e. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzBinDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzBinDigit",
          "type": "function"
        },
        "index": {
          "description": "Map the digit to the number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzBinDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Bin Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzBinDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of the digit \u003cem\u003e'1'\u003c/em\u003e to the number \u003cem\u003e1\u003c/em\u003e.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzBinDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzBinDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of the digit to the number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzBinDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Bin Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzBinDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap non-zero decimal digits to the corresponding numbers. Return\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzDecDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzDecDigit",
          "type": "function"
        },
        "index": {
          "description": "Map non-zero decimal digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzDecDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Dec Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzDecDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a non-zero decimal digit to the corresponding number.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzDecDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzDecDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of non-zero decimal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzDecDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Dec Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzDecDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap non-zero hexadecimal digits to the corresponding numbers.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Map non-zero hexadecimal digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzHexDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Hex Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a non-zero hexadecimal digit to the corresponding\n   number. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of non-zero hexadecimal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzHexDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Hex Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap non-zero lower-case hexadecimal digits to the corresponding numbers.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzLowHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzLowHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Map non-zero lower-case hexadecimal digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzLowHexDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Low Hex Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzLowHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a non-zero lower-case hexadecimal digit to\n   the corresponding number. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzLowHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzLowHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of non-zero lower-case hexadecimal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzLowHexDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Low Hex Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzLowHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap non-zero octal digits to the corresponding numbers. Return\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzOctDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzOctDigit",
          "type": "function"
        },
        "index": {
          "description": "Map non-zero octal digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzOctDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Oct Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzOctDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a non-zero octal digit to the corresponding number.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzOctDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzOctDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of non-zero octal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzOctDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Oct Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzOctDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap non-zero upper-case hexadecimal digits to the corresponding numbers.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzUpHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzUpHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Map non-zero upper-case hexadecimal digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzUpHexDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Up Hex Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzUpHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a non-zero upper-case hexadecimal digit to\n   the corresponding number. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromNzUpHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromNzUpHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of non-zero upper-case hexadecimal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromNzUpHexDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Nz Up Hex Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromNzUpHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap octal digits to the corresponding numbers. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on\n   other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromOctDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromOctDigit",
          "type": "function"
        },
        "index": {
          "description": "Map octal digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromOctDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Oct Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromOctDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of an octal digit to the corresponding number.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromOctDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromOctDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of an octal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromOctDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Oct Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromOctDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap upper-case hexadecimal digits to the corresponding numbers.\n   Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromUpHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromUpHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Map upper-case hexadecimal digits to the corresponding numbers Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromUpHexDigit",
          "normalized": "Char-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Up Hex Digit",
          "signature": "Char-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromUpHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of an upper-case hexadecimal digit to the corresponding\n   number. Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on other inputs.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "fromUpHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Maybe a",
          "source": "src/Text-Ascii.html#fromUpHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of an upper-case hexadecimal digit to the corresponding number Return Nothing on other inputs",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "fromUpHexDigit8",
          "normalized": "Word-\u003eMaybe a",
          "package": "text-latin1",
          "partial": "Up Hex Digit",
          "signature": "Word-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:fromUpHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is an ASCII letter.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isAlpha",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isAlpha",
          "type": "function"
        },
        "index": {
          "description": "Test if character is an ASCII letter",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isAlpha",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Alpha",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of an ASCII letter.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isAlpha8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isAlpha8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of an ASCII letter",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isAlpha8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Alpha",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isAlpha8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is either an ASCII letter or a decimal digit.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isAlphaNum",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isAlphaNum",
          "type": "function"
        },
        "index": {
          "description": "Test if character is either an ASCII letter or decimal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isAlphaNum",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Alpha Num",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of either an ASCII letter\n   or a decimal digit.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isAlphaNum8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isAlphaNum8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of either an ASCII letter or decimal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isAlphaNum8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Alpha Num",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isAlphaNum8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Ascii",
          "name": "isAscii",
          "package": "text-latin1",
          "signature": "v -\u003e Bool",
          "source": "src/Text-Ascii.html#isAscii",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isAscii",
          "normalized": "a-\u003eBool",
          "package": "text-latin1",
          "partial": "Ascii",
          "signature": "v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a binary digit (\u003cem\u003e'0'\u003c/em\u003e or \u003cem\u003e'1'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isBinDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isBinDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is binary digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isBinDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Bin Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isBinDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a binary digit (\u003cem\u003e'0'\u003c/em\u003e or \u003cem\u003e'1'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isBinDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isBinDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of binary digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isBinDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Bin Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isBinDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is an ASCII control character.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isControl",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isControl",
          "type": "function"
        },
        "index": {
          "description": "Test if character is an ASCII control character",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isControl",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Control",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of an ASCII control character.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isControl8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isControl8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of an ASCII control character",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isControl8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Control",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isControl8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a decimal digit (\u003cem\u003e'0' ... '9'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isDecDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isDecDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is decimal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isDecDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Dec Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isDecDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a decimal digit (\u003cem\u003e'0' ... '9'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isDecDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isDecDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of decimal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isDecDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Dec Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isDecDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a hexadecimal digit\n   (\u003cem\u003e'0' ... '9'\u003c/em\u003e or \u003cem\u003e'a' ... 'f'\u003c/em\u003e or \u003cem\u003e'A' ... 'F'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is hexadecimal digit or or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a hexadecimal digit\n   (\u003cem\u003e'0' ... '9'\u003c/em\u003e or \u003cem\u003e'a' ... 'f'\u003c/em\u003e or \u003cem\u003e'A' ... 'F'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of hexadecimal digit or or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isHexDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Hex Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a lower-case hexadecimal digit\n   (\u003cem\u003e'0' ... '9'\u003c/em\u003e or \u003cem\u003e'a' ... 'f'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isLowHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isLowHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is lower-case hexadecimal digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isLowHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Low Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isLowHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a lower-case hexadecimal digit\n   (\u003cem\u003e'0' ... '9'\u003c/em\u003e or \u003cem\u003e'a' ... 'f'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isLowHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isLowHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of lower-case hexadecimal digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isLowHexDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Low Hex Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isLowHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is an ASCII lower-case letter.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isLower",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isLower",
          "type": "function"
        },
        "index": {
          "description": "Test if character is an ASCII lower-case letter",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isLower",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Lower",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of an ASCII lower-case letter.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isLower8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isLower8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of an ASCII lower-case letter",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isLower8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Lower",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isLower8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is the non-zero binary digit (\u003cem\u003e'1'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzBinDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzBinDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is the non-zero binary digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzBinDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Bin Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzBinDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of the non-zero binary digit (\u003cem\u003e'1'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzBinDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzBinDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of the non-zero binary digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzBinDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Bin Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzBinDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a non-zero decimal digit (\u003cem\u003e'1' ... '9'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzDecDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzDecDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is non-zero decimal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzDecDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Dec Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzDecDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a non-zero decimal digit\n   (\u003cem\u003e'1' ... '9'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzDecDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzDecDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of non-zero decimal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzDecDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Dec Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzDecDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a non-zero hexadecimal digit\n   (\u003cem\u003e'1' ... '9'\u003c/em\u003e or \u003cem\u003e'a' ... 'f'\u003c/em\u003e or \u003cem\u003e'A' ... 'F'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is non-zero hexadecimal digit or or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a non-zero hexadecimal digit\n   (\u003cem\u003e'1' ... '9'\u003c/em\u003e or \u003cem\u003e'a' ... 'f'\u003c/em\u003e or \u003cem\u003e'A' ... 'F'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of non-zero hexadecimal digit or or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzHexDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Hex Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a non-zero lower-case hexadecimal digit\n   (\u003cem\u003e'1' ... '9'\u003c/em\u003e or \u003cem\u003e'a' ... 'f'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzLowHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzLowHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is non-zero lower-case hexadecimal digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzLowHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Low Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzLowHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a non-zero lower-case hexadecimal digit\n   (\u003cem\u003e'1' ... '9'\u003c/em\u003e or \u003cem\u003e'a' ... 'f'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzLowHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzLowHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of non-zero lower-case hexadecimal digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzLowHexDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Low Hex Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzLowHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a non-zero octal digit (\u003cem\u003e'1' ... '7'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzOctDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzOctDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is non-zero octal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzOctDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Oct Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzOctDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a non-zero octal digit\n   (\u003cem\u003e'1' ... '7'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzOctDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzOctDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of non-zero octal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzOctDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Oct Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzOctDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a non-zero upper-case hexadecimal digit\n   (\u003cem\u003e'1' ... '9'\u003c/em\u003e or \u003cem\u003e'A' ... 'F'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzUpHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzUpHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is non-zero upper-case hexadecimal digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzUpHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Up Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzUpHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a non-zero upper-case hexadecimal digit\n   (\u003cem\u003e'1' ... '9'\u003c/em\u003e or \u003cem\u003e'A' ... 'F'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isNzUpHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isNzUpHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of non-zero upper-case hexadecimal digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isNzUpHexDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Nz Up Hex Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isNzUpHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is an octal digit (\u003cem\u003e'0' ... '7'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isOctDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isOctDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is an octal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isOctDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Oct Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isOctDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of an octal digit (\u003cem\u003e'0' ... '7'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isOctDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isOctDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of an octal digit",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isOctDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Oct Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isOctDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is an ASCII printable character.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isPrintable",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isPrintable",
          "type": "function"
        },
        "index": {
          "description": "Test if character is an ASCII printable character",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isPrintable",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Printable",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isPrintable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of an ASCII printable character.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isPrintable8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isPrintable8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of an ASCII printable character",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isPrintable8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Printable",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isPrintable8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is the SPACE or the TAB character.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isSpaceOrTab",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isSpaceOrTab",
          "type": "function"
        },
        "index": {
          "description": "Test if character is the SPACE or the TAB character",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isSpaceOrTab",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Space Or Tab",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isSpaceOrTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of the SPACE or the TAB character.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isSpaceOrTab8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isSpaceOrTab8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of the SPACE or the TAB character",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isSpaceOrTab8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Space Or Tab",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isSpaceOrTab8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is an upper-case hexadecimal digit\n   (\u003cem\u003e'0' ... '9'\u003c/em\u003e or \u003cem\u003e'A' ... 'F'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isUpHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isUpHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Test if character is an upper-case hexadecimal digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isUpHexDigit",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Up Hex Digit",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isUpHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of an upper-case hexadecimal digit\n   (\u003cem\u003e'0' ... '9'\u003c/em\u003e or \u003cem\u003e'A' ... 'F'\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isUpHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isUpHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of an upper-case hexadecimal digit or",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isUpHexDigit8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Up Hex Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isUpHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is an ASCII upper-case letter.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isUpper",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isUpper",
          "type": "function"
        },
        "index": {
          "description": "Test if character is an ASCII upper-case letter",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isUpper",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Upper",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of an ASCII upper-case letter.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isUpper8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isUpper8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of an ASCII upper-case letter",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isUpper8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Upper",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isUpper8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is an ASCII whitespace character.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isWhiteSpace",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Ascii.html#isWhiteSpace",
          "type": "function"
        },
        "index": {
          "description": "Test if character is an ASCII whitespace character",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isWhiteSpace",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "White Space",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of an ASCII whitespace character.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "isWhiteSpace8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Ascii.html#isWhiteSpace8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of an ASCII whitespace character",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "isWhiteSpace8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "White Space",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:isWhiteSpace8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a character to its ASCII encoding if possible, otherwise\n   return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "maybeAscii",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe Word8",
          "source": "src/Text-Ascii.html#maybeAscii",
          "type": "function"
        },
        "index": {
          "description": "Map character to its ASCII encoding if possible otherwise return Nothing",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "maybeAscii",
          "normalized": "Char-\u003eMaybe Word",
          "package": "text-latin1",
          "partial": "Ascii",
          "signature": "Char-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:maybeAscii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap lower-case ASCII letters to the corresponding upper-case letters,\n   leaving other characters as is.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "toLower",
          "package": "text-latin1",
          "signature": "Char -\u003e Char",
          "source": "src/Text-Ascii.html#toLower",
          "type": "function"
        },
        "index": {
          "description": "Map lower-case ASCII letters to the corresponding upper-case letters leaving other characters as is",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "toLower",
          "normalized": "Char-\u003eChar",
          "package": "text-latin1",
          "partial": "Lower",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:toLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encodings of lower-case ASCII letters to the encodings of\n   the corresponding upper-case letters, leaving other bytes as is.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "toLower8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Text-Ascii.html#toLower8",
          "type": "function"
        },
        "index": {
          "description": "Map the encodings of lower-case ASCII letters to the encodings of the corresponding upper-case letters leaving other bytes as is",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "toLower8",
          "normalized": "Word-\u003eWord",
          "package": "text-latin1",
          "partial": "Lower",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:toLower8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap upper-case ASCII letters to the corresponding lower-case letters,\n   leaving other characters as is.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "toUpper",
          "package": "text-latin1",
          "signature": "Char -\u003e Char",
          "source": "src/Text-Ascii.html#toUpper",
          "type": "function"
        },
        "index": {
          "description": "Map upper-case ASCII letters to the corresponding lower-case letters leaving other characters as is",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "toUpper",
          "normalized": "Char-\u003eChar",
          "package": "text-latin1",
          "partial": "Upper",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:toUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encodings of upper-case ASCII letters to the encodings of\n   the corresponding lower-case letters, leaving other bytes as is.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "toUpper8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Text-Ascii.html#toUpper8",
          "type": "function"
        },
        "index": {
          "description": "Map the encodings of upper-case ASCII letters to the encodings of the corresponding lower-case letters leaving other bytes as is",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "toUpper8",
          "normalized": "Word-\u003eWord",
          "package": "text-latin1",
          "partial": "Upper",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:toUpper8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap binary digits to the corresponding numbers. No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromBinDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromBinDigit",
          "type": "function"
        },
        "index": {
          "description": "Map binary digits to the corresponding numbers No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromBinDigit",
          "normalized": "Char-\u003ea",
          "package": "text-latin1",
          "partial": "From Bin Digit",
          "signature": "Char-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromBinDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a binary digit to the corresponding number.\n   No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromBinDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromBinDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of binary digit to the corresponding number No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromBinDigit8",
          "normalized": "Word-\u003ea",
          "package": "text-latin1",
          "partial": "From Bin Digit",
          "signature": "Word-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromBinDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap decimal digits to the corresponding numbers. No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromDecDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromDecDigit",
          "type": "function"
        },
        "index": {
          "description": "Map decimal digits to the corresponding numbers No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromDecDigit",
          "normalized": "Char-\u003ea",
          "package": "text-latin1",
          "partial": "From Dec Digit",
          "signature": "Char-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromDecDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a decimal digit to the corresponding number.\n   No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromDecDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromDecDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of decimal digit to the corresponding number No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromDecDigit8",
          "normalized": "Word-\u003ea",
          "package": "text-latin1",
          "partial": "From Dec Digit",
          "signature": "Word-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromDecDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap hexadecimal digits to the corresponding numbers. No checks are\n   performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Map hexadecimal digits to the corresponding numbers No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromHexDigit",
          "normalized": "Char-\u003ea",
          "package": "text-latin1",
          "partial": "From Hex Digit",
          "signature": "Char-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a hexadecimal digit to the corresponding\n   number. No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of hexadecimal digit to the corresponding number No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromHexDigit8",
          "normalized": "Word-\u003ea",
          "package": "text-latin1",
          "partial": "From Hex Digit",
          "signature": "Word-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap lower-case hexadecimal digits to the corresponding numbers.\n   No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromLowHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromLowHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Map lower-case hexadecimal digits to the corresponding numbers No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromLowHexDigit",
          "normalized": "Char-\u003ea",
          "package": "text-latin1",
          "partial": "From Low Hex Digit",
          "signature": "Char-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromLowHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of a lower-case hexadecimal digit to the corresponding\n   number. No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromLowHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromLowHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of lower-case hexadecimal digit to the corresponding number No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromLowHexDigit8",
          "normalized": "Word-\u003ea",
          "package": "text-latin1",
          "partial": "From Low Hex Digit",
          "signature": "Word-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromLowHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap octal digits to the corresponding numbers. No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromOctDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromOctDigit",
          "type": "function"
        },
        "index": {
          "description": "Map octal digits to the corresponding numbers No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromOctDigit",
          "normalized": "Char-\u003ea",
          "package": "text-latin1",
          "partial": "From Oct Digit",
          "signature": "Char-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromOctDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of an octal digit to the corresponding number.\n   No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromOctDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromOctDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of an octal digit to the corresponding number No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromOctDigit8",
          "normalized": "Word-\u003ea",
          "package": "text-latin1",
          "partial": "From Oct Digit",
          "signature": "Word-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromOctDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap upper-case hexadecimal digits to the corresponding numbers.\n   No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromUpHexDigit",
          "package": "text-latin1",
          "signature": "Char -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromUpHexDigit",
          "type": "function"
        },
        "index": {
          "description": "Map upper-case hexadecimal digits to the corresponding numbers No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromUpHexDigit",
          "normalized": "Char-\u003ea",
          "package": "text-latin1",
          "partial": "From Up Hex Digit",
          "signature": "Char-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromUpHexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encoding of an upper-case hexadecimal digit to the corresponding\n   number. No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Ascii",
          "name": "unsafeFromUpHexDigit8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e a",
          "source": "src/Text-Ascii.html#unsafeFromUpHexDigit8",
          "type": "function"
        },
        "index": {
          "description": "Map the encoding of an upper-case hexadecimal digit to the corresponding number No checks are performed",
          "hierarchy": "Text Ascii",
          "module": "Text.Ascii",
          "name": "unsafeFromUpHexDigit8",
          "normalized": "Word-\u003ea",
          "package": "text-latin1",
          "partial": "From Up Hex Digit",
          "signature": "Word-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Ascii.html#v:unsafeFromUpHexDigit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLatin-1 utility functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Latin1",
          "name": "Latin1",
          "package": "text-latin1",
          "source": "src/Text-Latin1.html",
          "type": "module"
        },
        "index": {
          "description": "Latin-1 utility functions",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "Latin1",
          "package": "text-latin1",
          "partial": "Latin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Latin1",
          "name": "IsLatin1",
          "package": "text-latin1",
          "source": "src/Text-Latin1.html#IsLatin1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "IsLatin1",
          "package": "text-latin1",
          "partial": "Is Latin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#t:IsLatin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Latin1",
          "name": "Latin1",
          "package": "text-latin1",
          "source": "src/Text-Latin1.html#Latin1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "Latin1",
          "package": "text-latin1",
          "partial": "Latin",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#t:Latin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Latin1",
          "name": "IsLatin1",
          "package": "text-latin1",
          "signature": "IsLatin1",
          "source": "src/Text-Latin1.html#IsLatin1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "IsLatin1",
          "package": "text-latin1",
          "partial": "Is Latin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:IsLatin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASCII values are Latin-1 values.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "asciiIsLatin1",
          "package": "text-latin1",
          "signature": "Ascii α -\u003e Latin1 α",
          "source": "src/Text-Latin1.html#asciiIsLatin1",
          "type": "function"
        },
        "index": {
          "description": "ASCII values are Latin-1 values",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "asciiIsLatin1",
          "normalized": "Ascii a-\u003eLatin a",
          "package": "text-latin1",
          "partial": "Is Latin",
          "signature": "Ascii α-\u003eLatin α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:asciiIsLatin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a Latin-1 letter.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isAlpha",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Latin1.html#isAlpha",
          "type": "function"
        },
        "index": {
          "description": "Test if character is Latin-1 letter",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isAlpha",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Alpha",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a Latin-1 letter.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isAlpha8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Latin1.html#isAlpha8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of Latin-1 letter",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isAlpha8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Alpha",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isAlpha8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is either a Latin-1 letter or a decimal digit.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isAlphaNum",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Latin1.html#isAlphaNum",
          "type": "function"
        },
        "index": {
          "description": "Test if character is either Latin-1 letter or decimal digit",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isAlphaNum",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Alpha Num",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isAlphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of either a Latin-1 letter\n   or a decimal digit.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isAlphaNum8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Latin1.html#isAlphaNum8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of either Latin-1 letter or decimal digit",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isAlphaNum8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Alpha Num",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isAlphaNum8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a Latin-1 control character.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isControl",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Latin1.html#isControl",
          "type": "function"
        },
        "index": {
          "description": "Test if character is Latin-1 control character",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isControl",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Control",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a Latin-1 control character.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isControl8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Latin1.html#isControl8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of Latin-1 control character",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isControl8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Control",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isControl8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Latin1",
          "name": "isLatin1",
          "package": "text-latin1",
          "signature": "v -\u003e Bool",
          "source": "src/Text-Latin1.html#isLatin1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isLatin1",
          "normalized": "a-\u003eBool",
          "package": "text-latin1",
          "partial": "Latin",
          "signature": "v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isLatin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a Latin-1 lower-case letter.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isLower",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Latin1.html#isLower",
          "type": "function"
        },
        "index": {
          "description": "Test if character is Latin-1 lower-case letter",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isLower",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Lower",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a Latin-1 lower-case letter.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isLower8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Latin1.html#isLower8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of Latin-1 lower-case letter",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isLower8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Lower",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isLower8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a Latin-1 printable character.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isPrintable",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Latin1.html#isPrintable",
          "type": "function"
        },
        "index": {
          "description": "Test if character is Latin-1 printable character",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isPrintable",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Printable",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isPrintable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a Latin-1 printable character.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isPrintable8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Latin1.html#isPrintable8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of Latin-1 printable character",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isPrintable8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Printable",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isPrintable8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a Latin-1 upper-case letter.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isUpper",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Latin1.html#isUpper",
          "type": "function"
        },
        "index": {
          "description": "Test if character is Latin-1 upper-case letter",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isUpper",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "Upper",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a Latin-1 upper-case letter.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isUpper8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Latin1.html#isUpper8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of Latin-1 upper-case letter",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isUpper8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "Upper",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isUpper8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a character is a Latin-1 whitespace character.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isWhiteSpace",
          "package": "text-latin1",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-Latin1.html#isWhiteSpace",
          "type": "function"
        },
        "index": {
          "description": "Test if character is Latin-1 whitespace character",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isWhiteSpace",
          "normalized": "Char-\u003eBool",
          "package": "text-latin1",
          "partial": "White Space",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isWhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a byte is the encoding of a Latin-1 whitespace character.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "isWhiteSpace8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Text-Latin1.html#isWhiteSpace8",
          "type": "function"
        },
        "index": {
          "description": "Test if byte is the encoding of Latin-1 whitespace character",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "isWhiteSpace8",
          "normalized": "Word-\u003eBool",
          "package": "text-latin1",
          "partial": "White Space",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:isWhiteSpace8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a Latin-1 character. No checks are performed.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "latin1",
          "package": "text-latin1",
          "signature": "Char -\u003e Word8",
          "source": "src/Text-Latin1.html#latin1",
          "type": "function"
        },
        "index": {
          "description": "Encode Latin-1 character No checks are performed",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "latin1",
          "normalized": "Char-\u003eWord",
          "package": "text-latin1",
          "signature": "Char-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:latin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a character to its Latin-1 encoding if possible, otherwise\n   return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "maybeLatin1",
          "package": "text-latin1",
          "signature": "Char -\u003e Maybe Word8",
          "source": "src/Text-Latin1.html#maybeLatin1",
          "type": "function"
        },
        "index": {
          "description": "Map character to its Latin-1 encoding if possible otherwise return Nothing",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "maybeLatin1",
          "normalized": "Char-\u003eMaybe Word",
          "package": "text-latin1",
          "partial": "Latin",
          "signature": "Char-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:maybeLatin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap lower-case Latin-1 letters to the corresponding upper-case letters,\n   leaving other characters as is.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "toLower",
          "package": "text-latin1",
          "signature": "Char -\u003e Char",
          "source": "src/Text-Latin1.html#toLower",
          "type": "function"
        },
        "index": {
          "description": "Map lower-case Latin-1 letters to the corresponding upper-case letters leaving other characters as is",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "toLower",
          "normalized": "Char-\u003eChar",
          "package": "text-latin1",
          "partial": "Lower",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:toLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encodings of lower-case Latin-1 letters to the encodings of\n   the corresponding upper-case letters, leaving other bytes as is.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "toLower8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Text-Latin1.html#toLower8",
          "type": "function"
        },
        "index": {
          "description": "Map the encodings of lower-case Latin-1 letters to the encodings of the corresponding upper-case letters leaving other bytes as is",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "toLower8",
          "normalized": "Word-\u003eWord",
          "package": "text-latin1",
          "partial": "Lower",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:toLower8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap upper-case Latin-1 letters to the corresponding lower-case letters,\n   leaving other characters as is.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "toUpper",
          "package": "text-latin1",
          "signature": "Char -\u003e Char",
          "source": "src/Text-Latin1.html#toUpper",
          "type": "function"
        },
        "index": {
          "description": "Map upper-case Latin-1 letters to the corresponding lower-case letters leaving other characters as is",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "toUpper",
          "normalized": "Char-\u003eChar",
          "package": "text-latin1",
          "partial": "Upper",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:toUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the encodings of upper-case Latin-1 letters to the encodings of\n   the corresponding lower-case letters, leaving other bytes as is.\n\u003c/p\u003e",
          "module": "Text.Latin1",
          "name": "toUpper8",
          "package": "text-latin1",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Text-Latin1.html#toUpper8",
          "type": "function"
        },
        "index": {
          "description": "Map the encodings of upper-case Latin-1 letters to the encodings of the corresponding lower-case letters leaving other bytes as is",
          "hierarchy": "Text Latin1",
          "module": "Text.Latin1",
          "name": "toUpper8",
          "normalized": "Word-\u003eWord",
          "package": "text-latin1",
          "partial": "Upper",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-latin1/docs/Text-Latin1.html#v:toUpper8"
      }
    }
  ]
]