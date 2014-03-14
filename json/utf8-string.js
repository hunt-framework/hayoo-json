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
        "word": "utf8-string"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "Generic",
          "package": "utf8-string",
          "source": "src/Codec-Binary-UTF8-Generic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "Generic",
          "package": "utf8-string",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "UTF8Bytes",
          "package": "utf8-string",
          "source": "src/Codec-Binary-UTF8-Generic.html#UTF8Bytes",
          "type": "class"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "UTF8Bytes",
          "package": "utf8-string",
          "partial": "UTF Bytes",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#t:UTF8Bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "bdrop",
          "package": "utf8-string",
          "signature": "s -\u003e b -\u003e b",
          "source": "src/Codec-Binary-UTF8-Generic.html#bdrop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "bdrop",
          "normalized": "a-\u003eb-\u003eb",
          "package": "utf8-string",
          "signature": "s-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:bdrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that do not satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "break",
          "package": "utf8-string",
          "signature": "(Char -\u003e Bool) -\u003e b -\u003e (b, b)",
          "source": "src/Codec-Binary-UTF8-Generic.html#break",
          "type": "function"
        },
        "index": {
          "description": "Split string into two parts the first is the longest prefix that contains only characters that do not satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "utf8-string",
          "signature": "(Char-\u003eBool)-\u003eb-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "bsplit",
          "package": "utf8-string",
          "signature": "s -\u003e b -\u003e (b, b)",
          "source": "src/Codec-Binary-UTF8-Generic.html#bsplit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "bsplit",
          "normalized": "a-\u003eb-\u003e(b,b)",
          "package": "utf8-string",
          "signature": "s-\u003eb-\u003e(b,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:bsplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "buncons",
          "package": "utf8-string",
          "signature": "b -\u003e Maybe (Word8, b)",
          "source": "src/Codec-Binary-UTF8-Generic.html#buncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "buncons",
          "normalized": "a-\u003eMaybe(Word,a)",
          "package": "utf8-string",
          "signature": "b-\u003eMaybe(Word,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:buncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to extract a character from a byte string.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no more bytes in the byte string.\n Otherwise, it returns a decoded character and the number of\n bytes used in its representation.\n Errors are replaced by character '\\0xFFFD'.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "decode",
          "package": "utf8-string",
          "signature": "b -\u003e Maybe (Char, s)",
          "source": "src/Codec-Binary-UTF8-Generic.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Try to extract character from byte string Returns Nothing if there are no more bytes in the byte string Otherwise it returns decoded character and the number of bytes used in its representation Errors are replaced by character xFFFD",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "decode",
          "normalized": "a-\u003eMaybe(Char,b)",
          "package": "utf8-string",
          "signature": "b-\u003eMaybe(Char,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edrop n s\u003c/code\u003e returns the \u003ccode\u003es\u003c/code\u003e without its first \u003ccode\u003en\u003c/code\u003e characters.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return an empty string.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "drop",
          "package": "utf8-string",
          "signature": "s -\u003e b -\u003e b",
          "source": "src/Codec-Binary-UTF8-Generic.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop returns the without its first characters If has less than characters then we return an empty string",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "drop",
          "normalized": "a-\u003eb-\u003eb",
          "package": "utf8-string",
          "signature": "s-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "elemIndex",
          "package": "utf8-string",
          "signature": "Word8 -\u003e b -\u003e Maybe s",
          "source": "src/Codec-Binary-UTF8-Generic.html#elemIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "elemIndex",
          "normalized": "Word-\u003ea-\u003eMaybe b",
          "package": "utf8-string",
          "partial": "Index",
          "signature": "Word-\u003eb-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "empty",
          "package": "utf8-string",
          "signature": "b",
          "source": "src/Codec-Binary-UTF8-Generic.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "empty",
          "package": "utf8-string",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a bytestring (left biased).\n This function is strict in the accumulator.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "foldl",
          "package": "utf8-string",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e b -\u003e a",
          "source": "src/Codec-Binary-UTF8-Generic.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Traverse bytestring left biased This function is strict in the accumulator",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eb-\u003ea",
          "package": "utf8-string",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a bytestring (right biased).\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "foldr",
          "package": "utf8-string",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e b -\u003e a",
          "source": "src/Codec-Binary-UTF8-Generic.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Traverse bytestring right biased",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eb-\u003ea",
          "package": "utf8-string",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Haskell string into a UTF8 encoded bytestring.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "fromString",
          "package": "utf8-string",
          "signature": "String -\u003e b",
          "source": "src/Codec-Binary-UTF8-Generic.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Converts Haskell string into UTF8 encoded bytestring",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "utf8-string",
          "partial": "String",
          "signature": "String-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of characters encoded in the bytestring.\n Note that this includes replacement characters.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "length",
          "package": "utf8-string",
          "signature": "b -\u003e s",
          "source": "src/Codec-Binary-UTF8-Generic.html#length",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of characters encoded in the bytestring Note that this includes replacement characters",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "length",
          "normalized": "a-\u003eb",
          "package": "utf8-string",
          "signature": "b-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n See also 'lines\\''.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "lines",
          "package": "utf8-string",
          "signature": "b -\u003e [b]",
          "source": "src/Codec-Binary-UTF8-Generic.html#lines",
          "type": "function"
        },
        "index": {
          "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string See also lines",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "lines",
          "normalized": "a-\u003e[a]",
          "package": "utf8-string",
          "signature": "b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n This function preserves the terminators.\n See also \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "lines'",
          "package": "utf8-string",
          "signature": "b -\u003e [b]",
          "source": "src/Codec-Binary-UTF8-Generic.html#lines%27",
          "type": "function"
        },
        "index": {
          "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string This function preserves the terminators See also lines",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "lines'",
          "normalized": "a-\u003e[a]",
          "package": "utf8-string",
          "signature": "b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:lines-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "null",
          "package": "utf8-string",
          "signature": "b -\u003e Bool",
          "source": "src/Codec-Binary-UTF8-Generic.html#null",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "utf8-string",
          "signature": "b-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "pack",
          "package": "utf8-string",
          "signature": "[Word8] -\u003e b",
          "source": "src/Codec-Binary-UTF8-Generic.html#pack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "pack",
          "normalized": "[Word]-\u003ea",
          "package": "utf8-string",
          "signature": "[Word]-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis character is used to mark errors in a UTF8 encoded string.\n\u003c/p\u003e",
          "module": "[\"Codec.Binary.UTF8.Generic\",\"Data.String.UTF8\"]",
          "name": "replacement_char",
          "package": "utf8-string",
          "signature": "Char",
          "source": "src/Codec-Binary-UTF8-Generic.html#replacement_char",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:replacement_char\",\"http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:replacement_char\"]"
        },
        "index": {
          "description": "This character is used to mark errors in UTF8 encoded string",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "replacement_char",
          "package": "utf8-string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:replacement_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "span",
          "package": "utf8-string",
          "signature": "(Char -\u003e Bool) -\u003e b -\u003e (b, b)",
          "source": "src/Codec-Binary-UTF8-Generic.html#span",
          "type": "function"
        },
        "index": {
          "description": "Split string into two parts the first is the longest prefix that contains only characters that satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "utf8-string",
          "signature": "(Char-\u003eBool)-\u003eb-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit after a given number of characters.\n Negative values are treated as if they are 0.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "splitAt",
          "package": "utf8-string",
          "signature": "s -\u003e b -\u003e (b, b)",
          "source": "src/Codec-Binary-UTF8-Generic.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "Split after given number of characters Negative values are treated as if they are",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "splitAt",
          "normalized": "a-\u003eb-\u003e(b,b)",
          "package": "utf8-string",
          "partial": "At",
          "signature": "s-\u003eb-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Generic",
          "name": "tail",
          "package": "utf8-string",
          "signature": "b -\u003e b",
          "source": "src/Codec-Binary-UTF8-Generic.html#tail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "tail",
          "normalized": "a-\u003ea",
          "package": "utf8-string",
          "signature": "b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etake n s\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e characters of \u003ccode\u003es\u003c/code\u003e.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return the whole of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "take",
          "package": "utf8-string",
          "signature": "s -\u003e b -\u003e b",
          "source": "src/Codec-Binary-UTF8-Generic.html#take",
          "type": "function"
        },
        "index": {
          "description": "take returns the first characters of If has less than characters then we return the whole of",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "take",
          "normalized": "a-\u003eb-\u003eb",
          "package": "utf8-string",
          "signature": "s-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a UTF8 encoded bytestring into a Haskell string.\n Invalid characters are replaced with '\\xFFFD'.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "toString",
          "package": "utf8-string",
          "signature": "b -\u003e String",
          "source": "src/Codec-Binary-UTF8-Generic.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Convert UTF8 encoded bytestring into Haskell string Invalid characters are replaced with xFFFD",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "utf8-string",
          "partial": "String",
          "signature": "b-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first character of a byte string, if any.\n Malformed characters are replaced by '\\0xFFFD'.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "uncons",
          "package": "utf8-string",
          "signature": "b -\u003e Maybe (Char, b)",
          "source": "src/Codec-Binary-UTF8-Generic.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Get the first character of byte string if any Malformed characters are replaced by xFFFD",
          "hierarchy": "Codec Binary UTF8 Generic",
          "module": "Codec.Binary.UTF8.Generic",
          "name": "uncons",
          "normalized": "a-\u003eMaybe(Char,a)",
          "package": "utf8-string",
          "signature": "b-\u003eMaybe(Char,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for encoding UTF8 Strings to and from \u003ccode\u003e[Word8]\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.UTF8.String",
          "name": "String",
          "package": "utf8-string",
          "source": "src/Codec-Binary-UTF8-String.html",
          "type": "module"
        },
        "index": {
          "description": "Support for encoding UTF8 Strings to and from Word8",
          "hierarchy": "Codec Binary UTF8 String",
          "module": "Codec.Binary.UTF8.String",
          "name": "String",
          "package": "utf8-string",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a UTF8 string packed into a list of Word8 values, directly to String\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.String",
          "name": "decode",
          "package": "utf8-string",
          "signature": "[Word8] -\u003e String",
          "source": "src/Codec-Binary-UTF8-String.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode UTF8 string packed into list of Word8 values directly to String",
          "hierarchy": "Codec Binary UTF8 String",
          "module": "Codec.Binary.UTF8.String",
          "name": "decode",
          "normalized": "[Word]-\u003eString",
          "package": "utf8-string",
          "signature": "[Word]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a string using \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e using a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as input.\n | This is not safe but it is necessary if UTF-8 encoded text\n | has been loaded into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e prior to being decoded.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.String",
          "name": "decodeString",
          "package": "utf8-string",
          "signature": "String -\u003e String",
          "source": "src/Codec-Binary-UTF8-String.html#decodeString",
          "type": "function"
        },
        "index": {
          "description": "Decode string using decode using String as input This is not safe but it is necessary if UTF-8 encoded text has been loaded into String prior to being decoded",
          "hierarchy": "Codec Binary UTF8 String",
          "module": "Codec.Binary.UTF8.String",
          "name": "decodeString",
          "normalized": "String-\u003eString",
          "package": "utf8-string",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:decodeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a Haskell String to a list of Word8 values, in UTF8 format.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.String",
          "name": "encode",
          "package": "utf8-string",
          "signature": "String -\u003e [Word8]",
          "source": "src/Codec-Binary-UTF8-String.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode Haskell String to list of Word8 values in UTF8 format",
          "hierarchy": "Codec Binary UTF8 String",
          "module": "Codec.Binary.UTF8.String",
          "name": "encode",
          "normalized": "String-\u003e[Word]",
          "package": "utf8-string",
          "signature": "String-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a single Haskell Char to a list of Word8 values, in UTF8 format.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.String",
          "name": "encodeChar",
          "package": "utf8-string",
          "signature": "Char -\u003e [Word8]",
          "source": "src/Codec-Binary-UTF8-String.html#encodeChar",
          "type": "function"
        },
        "index": {
          "description": "Encode single Haskell Char to list of Word8 values in UTF8 format",
          "hierarchy": "Codec Binary UTF8 String",
          "module": "Codec.Binary.UTF8.String",
          "name": "encodeChar",
          "normalized": "Char-\u003e[Word]",
          "package": "utf8-string",
          "partial": "Char",
          "signature": "Char-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:encodeChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string using \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e and store the result in a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.String",
          "name": "encodeString",
          "package": "utf8-string",
          "signature": "String -\u003e String",
          "source": "src/Codec-Binary-UTF8-String.html#encodeString",
          "type": "function"
        },
        "index": {
          "description": "Encode string using encode and store the result in String",
          "hierarchy": "Codec Binary UTF8 String",
          "module": "Codec.Binary.UTF8.String",
          "name": "encodeString",
          "normalized": "String-\u003eString",
          "package": "utf8-string",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:encodeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eisUTF8Encoded str\u003c/code\u003e tries to recognize input string as being in UTF-8 form.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.String",
          "name": "isUTF8Encoded",
          "package": "utf8-string",
          "signature": "String -\u003e Bool",
          "source": "src/Codec-Binary-UTF8-String.html#isUTF8Encoded",
          "type": "function"
        },
        "index": {
          "description": "isUTF8Encoded str tries to recognize input string as being in UTF-8 form",
          "hierarchy": "Codec Binary UTF8 String",
          "module": "Codec.Binary.UTF8.String",
          "name": "isUTF8Encoded",
          "normalized": "String-\u003eBool",
          "package": "utf8-string",
          "partial": "UTF Encoded",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:isUTF8Encoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eutf8Encode str\u003c/code\u003e is a convenience function; checks to see if\n \u003ccode\u003estr\u003c/code\u003e isn't UTF-8 encoded before doing so. Sometimes useful, but\n you are better off keeping track of the encoding so as to avoid\n the cost of checking.\n\u003c/p\u003e",
          "module": "Codec.Binary.UTF8.String",
          "name": "utf8Encode",
          "package": "utf8-string",
          "signature": "String -\u003e String",
          "source": "src/Codec-Binary-UTF8-String.html#utf8Encode",
          "type": "function"
        },
        "index": {
          "description": "utf8Encode str is convenience function checks to see if str isn UTF-8 encoded before doing so Sometimes useful but you are better off keeping track of the encoding so as to avoid the cost of checking",
          "hierarchy": "Codec Binary UTF8 String",
          "module": "Codec.Binary.UTF8.String",
          "name": "utf8Encode",
          "normalized": "String-\u003eString",
          "package": "utf8-string",
          "partial": "Encode",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:utf8Encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "source": "src/Data-ByteString-Lazy-UTF8.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "partial": "UTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "ByteString",
          "package": "utf8-string",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "ByteString",
          "package": "utf8-string",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that do not satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "break",
          "package": "utf8-string",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy-UTF8.html#break",
          "type": "function"
        },
        "index": {
          "description": "Split string into two parts the first is the longest prefix that contains only characters that do not satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "utf8-string",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to extract a character from a byte string.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no more bytes in the byte string.\n Otherwise, it returns a decoded character and the number of\n bytes used in its representation.\n Errors are replaced by character '\\0xFFFD'.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "decode",
          "package": "utf8-string",
          "signature": "ByteString -\u003e Maybe (Char, Int64)",
          "source": "src/Data-ByteString-Lazy-UTF8.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Try to extract character from byte string Returns Nothing if there are no more bytes in the byte string Otherwise it returns decoded character and the number of bytes used in its representation Errors are replaced by character xFFFD",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "decode",
          "normalized": "ByteString-\u003eMaybe(Char,Int)",
          "package": "utf8-string",
          "signature": "ByteString-\u003eMaybe(Char,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edrop n s\u003c/code\u003e returns the \u003ccode\u003es\u003c/code\u003e without its first \u003ccode\u003en\u003c/code\u003e characters.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return an empty string.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "drop",
          "package": "utf8-string",
          "signature": "Int64 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-UTF8.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop returns the without its first characters If has less than characters then we return an empty string",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "drop",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "utf8-string",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a bytestring (left biased).\n This function is strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "foldl",
          "package": "utf8-string",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy-UTF8.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Traverse bytestring left biased This function is strict in the accumulator",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "utf8-string",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a bytestring (right biased).\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "foldr",
          "package": "utf8-string",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy-UTF8.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Traverse bytestring right biased",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "utf8-string",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Haskell string into a UTF8 encoded bytestring.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "fromString",
          "package": "utf8-string",
          "signature": "String -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-UTF8.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Converts Haskell string into UTF8 encoded bytestring",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "fromString",
          "normalized": "String-\u003eByteString",
          "package": "utf8-string",
          "partial": "String",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of characters encoded in the bytestring.\n Note that this includes replacement characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "length",
          "package": "utf8-string",
          "signature": "ByteString -\u003e Int",
          "source": "src/Data-ByteString-Lazy-UTF8.html#length",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of characters encoded in the bytestring Note that this includes replacement characters",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "length",
          "normalized": "ByteString-\u003eInt",
          "package": "utf8-string",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n See also 'lines\\''.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "lines",
          "package": "utf8-string",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy-UTF8.html#lines",
          "type": "function"
        },
        "index": {
          "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string See also lines",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "lines",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "utf8-string",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n This function preserves the terminators.\n See also \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "lines'",
          "package": "utf8-string",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy-UTF8.html#lines%27",
          "type": "function"
        },
        "index": {
          "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string This function preserves the terminators See also lines",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "lines'",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "utf8-string",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:lines-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis character is used to mark errors in a UTF8 encoded string.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "replacement_char",
          "package": "utf8-string",
          "signature": "Char",
          "source": "src/Data-ByteString-Lazy-UTF8.html#replacement_char",
          "type": "function"
        },
        "index": {
          "description": "This character is used to mark errors in UTF8 encoded string",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "replacement_char",
          "package": "utf8-string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:replacement_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "span",
          "package": "utf8-string",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy-UTF8.html#span",
          "type": "function"
        },
        "index": {
          "description": "Split string into two parts the first is the longest prefix that contains only characters that satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "utf8-string",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit after a given number of characters.\n Negative values are treated as if they are 0.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "splitAt",
          "package": "utf8-string",
          "signature": "Int64 -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy-UTF8.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "Split after given number of characters Negative values are treated as if they are",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "splitAt",
          "normalized": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "utf8-string",
          "partial": "At",
          "signature": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etake n s\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e characters of \u003ccode\u003es\u003c/code\u003e.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return the whole of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "take",
          "package": "utf8-string",
          "signature": "Int64 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-UTF8.html#take",
          "type": "function"
        },
        "index": {
          "description": "take returns the first characters of If has less than characters then we return the whole of",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "take",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "utf8-string",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a UTF8 encoded bytestring into a Haskell string.\n Invalid characters are replaced with '\\xFFFD'.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "toString",
          "package": "utf8-string",
          "signature": "ByteString -\u003e String",
          "source": "src/Data-ByteString-Lazy-UTF8.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Convert UTF8 encoded bytestring into Haskell string Invalid characters are replaced with xFFFD",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "toString",
          "normalized": "ByteString-\u003eString",
          "package": "utf8-string",
          "partial": "String",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first character of a byte string, if any.\n Malformed characters are replaced by '\\0xFFFD'.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "uncons",
          "package": "utf8-string",
          "signature": "ByteString -\u003e Maybe (Char, ByteString)",
          "source": "src/Data-ByteString-Lazy-UTF8.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Get the first character of byte string if any Malformed characters are replaced by xFFFD",
          "hierarchy": "Data ByteString Lazy UTF8",
          "module": "Data.ByteString.Lazy.UTF8",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Char,ByteString)",
          "package": "utf8-string",
          "signature": "ByteString-\u003eMaybe(Char,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ByteString.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "source": "src/Data-ByteString-UTF8.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "partial": "UTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "ByteString",
          "package": "utf8-string",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "ByteString",
          "package": "utf8-string",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that do not satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "break",
          "package": "utf8-string",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-UTF8.html#break",
          "type": "function"
        },
        "index": {
          "description": "Split string into two parts the first is the longest prefix that contains only characters that do not satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "utf8-string",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to extract a character from a byte string.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no more bytes in the byte string.\n Otherwise, it returns a decoded character and the number of\n bytes used in its representation.\n Errors are replaced by character '\\0xFFFD'.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "decode",
          "package": "utf8-string",
          "signature": "ByteString -\u003e Maybe (Char, Int)",
          "source": "src/Data-ByteString-UTF8.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Try to extract character from byte string Returns Nothing if there are no more bytes in the byte string Otherwise it returns decoded character and the number of bytes used in its representation Errors are replaced by character xFFFD",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "decode",
          "normalized": "ByteString-\u003eMaybe(Char,Int)",
          "package": "utf8-string",
          "signature": "ByteString-\u003eMaybe(Char,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edrop n s\u003c/code\u003e returns the \u003ccode\u003es\u003c/code\u003e without its first \u003ccode\u003en\u003c/code\u003e characters.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return an empty string.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "drop",
          "package": "utf8-string",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-UTF8.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop returns the without its first characters If has less than characters then we return an empty string",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "drop",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "utf8-string",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a bytestring (left biased).\n This function is strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "foldl",
          "package": "utf8-string",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-UTF8.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Traverse bytestring left biased This function is strict in the accumulator",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "utf8-string",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a bytestring (right biased).\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "foldr",
          "package": "utf8-string",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-UTF8.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Traverse bytestring right biased",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "utf8-string",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Haskell string into a UTF8 encoded bytestring.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "fromString",
          "package": "utf8-string",
          "signature": "String -\u003e ByteString",
          "source": "src/Data-ByteString-UTF8.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Converts Haskell string into UTF8 encoded bytestring",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "fromString",
          "normalized": "String-\u003eByteString",
          "package": "utf8-string",
          "partial": "String",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of characters encoded in the bytestring.\n Note that this includes replacement characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "length",
          "package": "utf8-string",
          "signature": "ByteString -\u003e Int",
          "source": "src/Data-ByteString-UTF8.html#length",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of characters encoded in the bytestring Note that this includes replacement characters",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "length",
          "normalized": "ByteString-\u003eInt",
          "package": "utf8-string",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n See also 'lines\\''.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "lines",
          "package": "utf8-string",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-UTF8.html#lines",
          "type": "function"
        },
        "index": {
          "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string See also lines",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "lines",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "utf8-string",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n This function preserves the terminators.\n See also \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "lines'",
          "package": "utf8-string",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-UTF8.html#lines%27",
          "type": "function"
        },
        "index": {
          "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string This function preserves the terminators See also lines",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "lines'",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "utf8-string",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:lines-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis character is used to mark errors in a UTF8 encoded string.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "replacement_char",
          "package": "utf8-string",
          "signature": "Char",
          "source": "src/Data-ByteString-UTF8.html#replacement_char",
          "type": "function"
        },
        "index": {
          "description": "This character is used to mark errors in UTF8 encoded string",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "replacement_char",
          "package": "utf8-string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:replacement_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "span",
          "package": "utf8-string",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-UTF8.html#span",
          "type": "function"
        },
        "index": {
          "description": "Split string into two parts the first is the longest prefix that contains only characters that satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "utf8-string",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit after a given number of characters.\n Negative values are treated as if they are 0.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "splitAt",
          "package": "utf8-string",
          "signature": "Int -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-UTF8.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "Split after given number of characters Negative values are treated as if they are",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "splitAt",
          "normalized": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "utf8-string",
          "partial": "At",
          "signature": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etake n s\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e characters of \u003ccode\u003es\u003c/code\u003e.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return the whole of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "take",
          "package": "utf8-string",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-UTF8.html#take",
          "type": "function"
        },
        "index": {
          "description": "take returns the first characters of If has less than characters then we return the whole of",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "take",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "utf8-string",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a UTF8 encoded bytestring into a Haskell string.\n Invalid characters are replaced with '\\xFFFD'.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "toString",
          "package": "utf8-string",
          "signature": "ByteString -\u003e String",
          "source": "src/Data-ByteString-UTF8.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Convert UTF8 encoded bytestring into Haskell string Invalid characters are replaced with xFFFD",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "toString",
          "normalized": "ByteString-\u003eString",
          "package": "utf8-string",
          "partial": "String",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first character of a byte string, if any.\n Malformed characters are replaced by '\\0xFFFD'.\n\u003c/p\u003e",
          "module": "Data.ByteString.UTF8",
          "name": "uncons",
          "package": "utf8-string",
          "signature": "ByteString -\u003e Maybe (Char, ByteString)",
          "source": "src/Data-ByteString-UTF8.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Get the first character of byte string if any Malformed characters are replaced by xFFFD",
          "hierarchy": "Data ByteString UTF8",
          "module": "Data.ByteString.UTF8",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Char,ByteString)",
          "package": "utf8-string",
          "signature": "ByteString-\u003eMaybe(Char,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "source": "src/Data-String-UTF8.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "partial": "UTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of strings that are represented using the UTF8 encoding.\n The parameter is the type of the container for the representation.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "source": "src/Data-String-UTF8.html#UTF8",
          "type": "data"
        },
        "index": {
          "description": "The type of strings that are represented using the UTF8 encoding The parameter is the type of the container for the representation",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "partial": "UTF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#t:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.UTF8",
          "name": "UTF8Bytes",
          "package": "utf8-string",
          "source": "src/Codec-Binary-UTF8-Generic.html#UTF8Bytes",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "UTF8Bytes",
          "package": "utf8-string",
          "partial": "UTF Bytes",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#t:UTF8Bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that do not satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as \u003ccode\u003ereplacement_char\u003c/code\u003e to the predicate.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "break",
          "package": "utf8-string",
          "signature": "(Char -\u003e Bool) -\u003e UTF8 string -\u003e (UTF8 string, UTF8 string)",
          "source": "src/Data-String-UTF8.html#break",
          "type": "function"
        },
        "index": {
          "description": "Split string into two parts the first is the longest prefix that contains only characters that do not satisfy the predicate the second part is the rest of the string Invalid characters are passed as replacement char to the predicate",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eUTF a-\u003e(UTF a,UTF a)",
          "package": "utf8-string",
          "signature": "(Char-\u003eBool)-\u003eUTF string-\u003e(UTF string,UTF string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop the given number of bytes from the underlying representation.\n See also \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "byteDrop",
          "package": "utf8-string",
          "signature": "index -\u003e UTF8 string -\u003e UTF8 string",
          "source": "src/Data-String-UTF8.html#byteDrop",
          "type": "function"
        },
        "index": {
          "description": "Drop the given number of bytes from the underlying representation See also drop",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "byteDrop",
          "normalized": "a-\u003eUTF b-\u003eUTF b",
          "package": "utf8-string",
          "partial": "Drop",
          "signature": "index-\u003eUTF string-\u003eUTF string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:byteDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit after a given number of bytes in the underlying representation.\n See also \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "byteSplitAt",
          "package": "utf8-string",
          "signature": "index -\u003e UTF8 string -\u003e (UTF8 string, UTF8 string)",
          "source": "src/Data-String-UTF8.html#byteSplitAt",
          "type": "function"
        },
        "index": {
          "description": "Split after given number of bytes in the underlying representation See also splitAt",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "byteSplitAt",
          "normalized": "a-\u003eUTF b-\u003e(UTF b,UTF b)",
          "package": "utf8-string",
          "partial": "Split At",
          "signature": "index-\u003eUTF string-\u003e(UTF string,UTF string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:byteSplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake only the given number of bytes from the underlying representation.\n See also \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "byteTake",
          "package": "utf8-string",
          "signature": "index -\u003e UTF8 string -\u003e UTF8 string",
          "source": "src/Data-String-UTF8.html#byteTake",
          "type": "function"
        },
        "index": {
          "description": "Take only the given number of bytes from the underlying representation See also take",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "byteTake",
          "normalized": "a-\u003eUTF b-\u003eUTF b",
          "package": "utf8-string",
          "partial": "Take",
          "signature": "index-\u003eUTF string-\u003eUTF string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:byteTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first character for the underlying representation,\n if one is available.  It also returns the number of bytes used\n in the representation of the character.\n See also \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003edropBytes\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "decode",
          "package": "utf8-string",
          "signature": "UTF8 string -\u003e Maybe (Char, index)",
          "source": "src/Data-String-UTF8.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Extract the first character for the underlying representation if one is available It also returns the number of bytes used in the representation of the character See also uncons dropBytes",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "decode",
          "normalized": "UTF a-\u003eMaybe(Char,b)",
          "package": "utf8-string",
          "signature": "UTF string-\u003eMaybe(Char,index)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edrop n s\u003c/code\u003e returns the \u003ccode\u003es\u003c/code\u003e without its first \u003ccode\u003en\u003c/code\u003e characters.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return an empty string.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "drop",
          "package": "utf8-string",
          "signature": "index -\u003e UTF8 string -\u003e UTF8 string",
          "source": "src/Data-String-UTF8.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop returns the without its first characters If has less than characters then we return an empty string",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "drop",
          "normalized": "a-\u003eUTF b-\u003eUTF b",
          "package": "utf8-string",
          "signature": "index-\u003eUTF string-\u003eUTF string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a bytestring (left biased).\n This function is strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "foldl",
          "package": "utf8-string",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e UTF8 string -\u003e a",
          "source": "src/Data-String-UTF8.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Traverse bytestring left biased This function is strict in the accumulator",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eUTF b-\u003ea",
          "package": "utf8-string",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eUTF string-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a bytestring (right biased).\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "foldr",
          "package": "utf8-string",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e UTF8 string -\u003e a",
          "source": "src/Data-String-UTF8.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Traverse bytestring right biased",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eUTF b-\u003ea",
          "package": "utf8-string",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eUTF string-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.UTF8",
          "name": "fromRep",
          "package": "utf8-string",
          "signature": "string -\u003e UTF8 string",
          "source": "src/Data-String-UTF8.html#fromRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "fromRep",
          "normalized": "a-\u003eUTF a",
          "package": "utf8-string",
          "partial": "Rep",
          "signature": "string-\u003eUTF string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:fromRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Haskell string into a UTF8 encoded string.\n Complexity: linear.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "fromString",
          "package": "utf8-string",
          "signature": "String -\u003e UTF8 string",
          "source": "src/Data-String-UTF8.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Converts Haskell string into UTF8 encoded string Complexity linear",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "fromString",
          "normalized": "String-\u003eUTF a",
          "package": "utf8-string",
          "partial": "String",
          "signature": "String-\u003eUTF string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of characters encoded in the bytestring.\n Note that this includes replacement characters.\n The function is linear in the number of bytes in the representation.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "length",
          "package": "utf8-string",
          "signature": "UTF8 string -\u003e index",
          "source": "src/Data-String-UTF8.html#length",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of characters encoded in the bytestring Note that this includes replacement characters The function is linear in the number of bytes in the representation",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "length",
          "normalized": "UTF a-\u003eb",
          "package": "utf8-string",
          "signature": "UTF string-\u003eindex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n See also 'lines\\''.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "lines",
          "package": "utf8-string",
          "signature": "UTF8 string -\u003e [UTF8 string]",
          "source": "src/Data-String-UTF8.html#lines",
          "type": "function"
        },
        "index": {
          "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string See also lines",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "lines",
          "normalized": "UTF a-\u003e[UTF a]",
          "package": "utf8-string",
          "signature": "UTF string-\u003e[UTF string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n This function preserves the terminators.\n See also \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "lines'",
          "package": "utf8-string",
          "signature": "UTF8 string -\u003e [UTF8 string]",
          "source": "src/Data-String-UTF8.html#lines%27",
          "type": "function"
        },
        "index": {
          "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string This function preserves the terminators See also lines",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "lines'",
          "normalized": "UTF a-\u003e[UTF a]",
          "package": "utf8-string",
          "signature": "UTF string-\u003e[UTF string]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:lines-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if there are no more bytes in the underlying representation.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "null",
          "package": "utf8-string",
          "signature": "UTF8 string -\u003e Bool",
          "source": "src/Data-String-UTF8.html#null",
          "type": "function"
        },
        "index": {
          "description": "Checks if there are no more bytes in the underlying representation",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "null",
          "normalized": "UTF a-\u003eBool",
          "package": "utf8-string",
          "signature": "UTF string-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "span",
          "package": "utf8-string",
          "signature": "(Char -\u003e Bool) -\u003e UTF8 string -\u003e (UTF8 string, UTF8 string)",
          "source": "src/Data-String-UTF8.html#span",
          "type": "function"
        },
        "index": {
          "description": "Split string into two parts the first is the longest prefix that contains only characters that satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eUTF a-\u003e(UTF a,UTF a)",
          "package": "utf8-string",
          "signature": "(Char-\u003eBool)-\u003eUTF string-\u003e(UTF string,UTF string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit after a given number of characters.\n Negative values are treated as if they are 0.\n See also \u003ccode\u003ebytesSplitAt\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "splitAt",
          "package": "utf8-string",
          "signature": "index -\u003e UTF8 string -\u003e (UTF8 string, UTF8 string)",
          "source": "src/Data-String-UTF8.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "Split after given number of characters Negative values are treated as if they are See also bytesSplitAt",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "splitAt",
          "normalized": "a-\u003eUTF b-\u003e(UTF b,UTF b)",
          "package": "utf8-string",
          "partial": "At",
          "signature": "index-\u003eUTF string-\u003e(UTF string,UTF string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etake n s\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e characters of \u003ccode\u003es\u003c/code\u003e.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return the whole of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "take",
          "package": "utf8-string",
          "signature": "index -\u003e UTF8 string -\u003e UTF8 string",
          "source": "src/Data-String-UTF8.html#take",
          "type": "function"
        },
        "index": {
          "description": "take returns the first characters of If has less than characters then we return the whole of",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "take",
          "normalized": "a-\u003eUTF b-\u003eUTF b",
          "package": "utf8-string",
          "signature": "index-\u003eUTF string-\u003eUTF string",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.UTF8",
          "name": "toRep",
          "package": "utf8-string",
          "signature": "UTF8 string -\u003e string",
          "source": "src/Data-String-UTF8.html#toRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "toRep",
          "normalized": "UTF a-\u003ea",
          "package": "utf8-string",
          "partial": "Rep",
          "signature": "UTF string-\u003estring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:toRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a UTF8 encoded string into a Haskell string.\n Invalid characters are replaced by \u003ccode\u003ereplacement_char\u003c/code\u003e.\n Complexity: linear.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "toString",
          "package": "utf8-string",
          "signature": "UTF8 string -\u003e String",
          "source": "src/Data-String-UTF8.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Convert UTF8 encoded string into Haskell string Invalid characters are replaced by replacement char Complexity linear",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "toString",
          "normalized": "UTF a-\u003eString",
          "package": "utf8-string",
          "partial": "String",
          "signature": "UTF string-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the first character of a byte string, if any.\n Invalid characters are replaced by \u003ccode\u003ereplacement_char\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.UTF8",
          "name": "uncons",
          "package": "utf8-string",
          "signature": "UTF8 string -\u003e Maybe (Char, UTF8 string)",
          "source": "src/Data-String-UTF8.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Get the first character of byte string if any Invalid characters are replaced by replacement char",
          "hierarchy": "Data String UTF8",
          "module": "Data.String.UTF8",
          "name": "uncons",
          "normalized": "UTF a-\u003eMaybe(Char,UTF a)",
          "package": "utf8-string",
          "signature": "UTF string-\u003eMaybe(Char,UTF string)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for UTF-8 based environment manipulation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Environment.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "source": "src/System-Environment-UTF8.html",
          "type": "module"
        },
        "index": {
          "description": "Support for UTF-8 based environment manipulation",
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "partial": "UTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.UTF8",
          "name": "getArgs",
          "package": "utf8-string",
          "signature": "IO [String]",
          "source": "src/System-Environment-UTF8.html#getArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "getArgs",
          "normalized": "IO[String]",
          "package": "utf8-string",
          "partial": "Args",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:getArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.UTF8",
          "name": "getEnv",
          "package": "utf8-string",
          "signature": "String -\u003e IO String",
          "source": "src/System-Environment-UTF8.html#getEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "getEnv",
          "normalized": "String-\u003eIO String",
          "package": "utf8-string",
          "partial": "Env",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.UTF8",
          "name": "getEnvironment",
          "package": "utf8-string",
          "signature": "IO [(String, String)]",
          "source": "src/System-Environment-UTF8.html#getEnvironment",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "getEnvironment",
          "normalized": "IO[(String,String)]",
          "package": "utf8-string",
          "partial": "Environment",
          "signature": "IO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:getEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.UTF8",
          "name": "getProgName",
          "package": "utf8-string",
          "signature": "IO String",
          "source": "src/System-Environment-UTF8.html#getProgName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "getProgName",
          "package": "utf8-string",
          "partial": "Prog Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:getProgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.UTF8",
          "name": "withArgs",
          "package": "utf8-string",
          "signature": "[String] -\u003e IO a -\u003e IO a",
          "source": "src/System-Environment-UTF8.html#withArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "withArgs",
          "normalized": "[String]-\u003eIO a-\u003eIO a",
          "package": "utf8-string",
          "partial": "Args",
          "signature": "[String]-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:withArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Environment.UTF8",
          "name": "withProgName",
          "package": "utf8-string",
          "signature": "String -\u003e IO a -\u003e IO a",
          "source": "src/System-Environment-UTF8.html#withProgName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Environment UTF8",
          "module": "System.Environment.UTF8",
          "name": "withProgName",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "utf8-string",
          "partial": "Prog Name",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:withProgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString IO preserving UTF8 encoding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "source": "src/System-IO-UTF8.html",
          "type": "module"
        },
        "index": {
          "description": "String IO preserving UTF8 encoding",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "UTF8",
          "package": "utf8-string",
          "partial": "UTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the UTF8 string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "appendFile",
          "package": "utf8-string",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/System-IO-UTF8.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "The computation appendFile file str function appends the UTF8 string str to the file file",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "appendFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "utf8-string",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read stdin as a UTF8 string.\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "getContents",
          "package": "utf8-string",
          "signature": "IO String",
          "source": "src/System-IO-UTF8.html#getContents",
          "type": "function"
        },
        "index": {
          "description": "Lazily read stdin as UTF8 string",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "getContents",
          "package": "utf8-string",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a UTF8 line from the standard input device\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "getLine",
          "package": "utf8-string",
          "signature": "IO String",
          "source": "src/System-IO-UTF8.html#getLine",
          "type": "function"
        },
        "index": {
          "description": "Read UTF8 line from the standard input device",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "getLine",
          "package": "utf8-string",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read a UTF8 string from a Handle\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "hGetContents",
          "package": "utf8-string",
          "signature": "Handle -\u003e IO String",
          "source": "src/System-IO-UTF8.html#hGetContents",
          "type": "function"
        },
        "index": {
          "description": "Lazily read UTF8 string from Handle",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO String",
          "package": "utf8-string",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a UTF8 line from a Handle\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "hGetLine",
          "package": "utf8-string",
          "signature": "Handle -\u003e IO String",
          "source": "src/System-IO-UTF8.html#hGetLine",
          "type": "function"
        },
        "index": {
          "description": "Read UTF8 line from Handle",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO String",
          "package": "utf8-string",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a UTF8 string to a Handle.\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "hPutStr",
          "package": "utf8-string",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "source": "src/System-IO-UTF8.html#hPutStr",
          "type": "function"
        },
        "index": {
          "description": "Write UTF8 string to Handle",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "hPutStr",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "utf8-string",
          "partial": "Put Str",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a UTF8 string to a Handle, appending a newline.\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "hPutStrLn",
          "package": "utf8-string",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "source": "src/System-IO-UTF8.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write UTF8 string to Handle appending newline",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "utf8-string",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.UTF8",
          "name": "interact",
          "package": "utf8-string",
          "signature": "(String -\u003e String) -\u003e IO ()",
          "source": "src/System-IO-UTF8.html#interact",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "interact",
          "normalized": "(String-\u003eString)-\u003eIO()",
          "package": "utf8-string",
          "signature": "(String-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.UTF8",
          "name": "openBinaryFile",
          "package": "utf8-string",
          "signature": "FilePath -\u003e IOMode -\u003e IO Handle",
          "source": "src/System-IO-UTF8.html#openBinaryFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "openBinaryFile",
          "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
          "package": "utf8-string",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:openBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device. This function differs from the\n System.IO.print in that it preserves any UTF8 encoding of the shown value.\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "print",
          "package": "utf8-string",
          "signature": "a -\u003e IO ()",
          "source": "src/System-IO-UTF8.html#print",
          "type": "function"
        },
        "index": {
          "description": "The print function outputs value of any printable type to the standard output device This function differs from the System.IO.print in that it preserves any UTF8 encoding of the shown value",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "utf8-string",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a UTF8 string to the standard output device\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "putStr",
          "package": "utf8-string",
          "signature": "String -\u003e IO ()",
          "source": "src/System-IO-UTF8.html#putStr",
          "type": "function"
        },
        "index": {
          "description": "Write UTF8 string to the standard output device",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "utf8-string",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "putStrLn",
          "package": "utf8-string",
          "signature": "String -\u003e IO ()",
          "source": "src/System-IO-UTF8.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "utf8-string",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a UTF8 string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "readFile",
          "package": "utf8-string",
          "signature": "FilePath -\u003e IO String",
          "source": "src/System-IO-UTF8.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as UTF8 string The file is read lazily on demand as with getContents",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "utf8-string",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003ereadIO\u003c/code\u003e, preserving UTF8\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "readLn",
          "package": "utf8-string",
          "signature": "IO a",
          "source": "src/System-IO-UTF8.html#readLn",
          "type": "function"
        },
        "index": {
          "description": "The readLn function combines getLine and readIO preserving UTF8",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "readLn",
          "package": "utf8-string",
          "partial": "Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:readLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.IO.UTF8",
          "name": "withBinaryFile",
          "package": "utf8-string",
          "signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
          "source": "src/System-IO-UTF8.html#withBinaryFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "withBinaryFile",
          "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "utf8-string",
          "partial": "Binary File",
          "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:withBinaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the UTF8 string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.UTF8",
          "name": "writeFile",
          "package": "utf8-string",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/System-IO-UTF8.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "The computation writeFile file str function writes the UTF8 string str to the file file",
          "hierarchy": "System IO UTF8",
          "module": "System.IO.UTF8",
          "name": "writeFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "utf8-string",
          "partial": "File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:writeFile"
      }
    }
  ]
]