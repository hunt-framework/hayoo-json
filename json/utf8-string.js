[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "module",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "utf8-string",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#t:UTF8Bytes",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "class",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#UTF8Bytes",
        "fct-type": "class",
        "title": "UTF8Bytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "UTF8Bytes",
        "normalized": "",
        "package": "utf8-string",
        "partial": "UTF Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:bdrop",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "s -\u003e b -\u003e b",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#bdrop",
        "fct-type": "method",
        "title": "bdrop"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "bdrop",
        "normalized": "a-\u003eb-\u003eb",
        "package": "utf8-string",
        "partial": "",
        "signature": "s-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that do not satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e Bool) -\u003e b -\u003e (b, b)",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "Split string into two parts the first is the longest prefix that contains only characters that do not satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "break",
        "normalized": "(Char-\u003eBool)-\u003ea-\u003e(a,a)",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eb-\u003e(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:bsplit",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "s -\u003e b -\u003e (b, b)",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#bsplit",
        "fct-type": "method",
        "title": "bsplit"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "bsplit",
        "normalized": "a-\u003eb-\u003e(b,b)",
        "package": "utf8-string",
        "partial": "",
        "signature": "s-\u003eb-\u003e(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:buncons",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b -\u003e Maybe (Word8, b)",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#buncons",
        "fct-type": "method",
        "title": "buncons"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "buncons",
        "normalized": "a-\u003eMaybe(Word,a)",
        "package": "utf8-string",
        "partial": "",
        "signature": "b-\u003eMaybe(Word,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eTry to extract a character from a byte string.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no more bytes in the byte string.\n Otherwise, it returns a decoded character and the number of\n bytes used in its representation.\n Errors are replaced by character '\\0xFFFD'.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b -\u003e Maybe (Char, s)",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Try to extract character from byte string Returns Nothing if there are no more bytes in the byte string Otherwise it returns decoded character and the number of bytes used in its representation Errors are replaced by character xFFFD",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "decode",
        "normalized": "a-\u003eMaybe(Char,b)",
        "package": "utf8-string",
        "partial": "",
        "signature": "b-\u003eMaybe(Char,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edrop n s\u003c/code\u003e returns the \u003ccode\u003es\u003c/code\u003e without its first \u003ccode\u003en\u003c/code\u003e characters.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return an empty string.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "s -\u003e b -\u003e b",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop returns the without its first characters If has less than characters then we return an empty string",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "drop",
        "normalized": "a-\u003eb-\u003eb",
        "package": "utf8-string",
        "partial": "",
        "signature": "s-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:elemIndex",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "Word8 -\u003e b -\u003e Maybe s",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#elemIndex",
        "fct-type": "method",
        "title": "elemIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "elemIndex",
        "normalized": "Word-\u003ea-\u003eMaybe b",
        "package": "utf8-string",
        "partial": "Index",
        "signature": "Word-\u003eb-\u003eMaybe s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:empty",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "empty",
        "normalized": "",
        "package": "utf8-string",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a bytestring (left biased).\n This function is strict in the accumulator.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e b -\u003e a",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Traverse bytestring left biased This function is strict in the accumulator",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "foldl",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eb-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a bytestring (right biased).\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e b -\u003e a",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Traverse bytestring right biased",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "foldr",
        "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eb-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Haskell string into a UTF8 encoded bytestring.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e b",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Converts Haskell string into UTF8 encoded bytestring",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "fromString",
        "normalized": "String-\u003ea",
        "package": "utf8-string",
        "partial": "String",
        "signature": "String-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the number of characters encoded in the bytestring.\n Note that this includes replacement characters.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b -\u003e s",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Counts the number of characters encoded in the bytestring Note that this includes replacement characters",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "length",
        "normalized": "a-\u003eb",
        "package": "utf8-string",
        "partial": "",
        "signature": "b-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n See also 'lines\\''.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b -\u003e [b]",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string See also lines",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "lines",
        "normalized": "a-\u003e[a]",
        "package": "utf8-string",
        "partial": "",
        "signature": "b-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:lines-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n This function preserves the terminators.\n See also \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b -\u003e [b]",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#lines%27",
        "fct-type": "function",
        "title": "lines'"
      },
      "index": {
        "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string This function preserves the terminators See also lines",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "lines'",
        "normalized": "a-\u003e[a]",
        "package": "utf8-string",
        "partial": "",
        "signature": "b-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:null",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b -\u003e Bool",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "null",
        "normalized": "a-\u003eBool",
        "package": "utf8-string",
        "partial": "",
        "signature": "b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:pack",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "[Word8] -\u003e b",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#pack",
        "fct-type": "method",
        "title": "pack"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "pack",
        "normalized": "[Word]-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "[Word]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:replacement_char",
      "description": {
        "fct-descr": "\u003cp\u003eThis character is used to mark errors in a UTF8 encoded string.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "Char",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#replacement_char",
        "fct-type": "function",
        "title": "replacement_char"
      },
      "index": {
        "description": "This character is used to mark errors in UTF8 encoded string",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "replacement_char",
        "normalized": "",
        "package": "utf8-string",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e Bool) -\u003e b -\u003e (b, b)",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "Split string into two parts the first is the longest prefix that contains only characters that satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "span",
        "normalized": "(Char-\u003eBool)-\u003ea-\u003e(a,a)",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eb-\u003e(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eSplit after a given number of characters.\n Negative values are treated as if they are 0.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "s -\u003e b -\u003e (b, b)",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "Split after given number of characters Negative values are treated as if they are",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "splitAt",
        "normalized": "a-\u003eb-\u003e(b,b)",
        "package": "utf8-string",
        "partial": "At",
        "signature": "s-\u003eb-\u003e(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:tail",
      "description": {
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b -\u003e b",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#tail",
        "fct-type": "method",
        "title": "tail"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "tail",
        "normalized": "a-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etake n s\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e characters of \u003ccode\u003es\u003c/code\u003e.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return the whole of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "s -\u003e b -\u003e b",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take returns the first characters of If has less than characters then we return the whole of",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "take",
        "normalized": "a-\u003eb-\u003eb",
        "package": "utf8-string",
        "partial": "",
        "signature": "s-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a UTF8 encoded bytestring into a Haskell string.\n Invalid characters are replaced with '\\xFFFD'.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b -\u003e String",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Convert UTF8 encoded bytestring into Haskell string Invalid characters are replaced with xFFFD",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "toString",
        "normalized": "a-\u003eString",
        "package": "utf8-string",
        "partial": "String",
        "signature": "b-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-Generic.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003eGet the first character of a byte string, if any.\n Malformed characters are replaced by '\\0xFFFD'.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.Generic",
        "fct-package": "utf8-string",
        "fct-signature": "b -\u003e Maybe (Char, b)",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#uncons",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "Get the first character of byte string if any Malformed characters are replaced by xFFFD",
        "hierarchy": "Codec Binary UTF8 Generic",
        "module": "Codec.Binary.UTF8.Generic",
        "name": "uncons",
        "normalized": "a-\u003eMaybe(Char,a)",
        "package": "utf8-string",
        "partial": "",
        "signature": "b-\u003eMaybe(Char,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for encoding UTF8 Strings to and from \u003ccode\u003e[Word8]\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Binary.UTF8.String",
        "fct-package": "utf8-string",
        "fct-signature": "module",
        "fct-source": "src/Codec-Binary-UTF8-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "Support for encoding UTF8 Strings to and from Word8",
        "hierarchy": "Codec Binary UTF8 String",
        "module": "Codec.Binary.UTF8.String",
        "name": "String",
        "normalized": "",
        "package": "utf8-string",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a UTF8 string packed into a list of Word8 values, directly to String\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.String",
        "fct-package": "utf8-string",
        "fct-signature": "[Word8] -\u003e String",
        "fct-source": "src/Codec-Binary-UTF8-String.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode UTF8 string packed into list of Word8 values directly to String",
        "hierarchy": "Codec Binary UTF8 String",
        "module": "Codec.Binary.UTF8.String",
        "name": "decode",
        "normalized": "[Word]-\u003eString",
        "package": "utf8-string",
        "partial": "",
        "signature": "[Word]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:decodeString",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a string using \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e using a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as input.\n | This is not safe but it is necessary if UTF-8 encoded text\n | has been loaded into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e prior to being decoded.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.String",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Codec-Binary-UTF8-String.html#decodeString",
        "fct-type": "function",
        "title": "decodeString"
      },
      "index": {
        "description": "Decode string using decode using String as input This is not safe but it is necessary if UTF-8 encoded text has been loaded into String prior to being decoded",
        "hierarchy": "Codec Binary UTF8 String",
        "module": "Codec.Binary.UTF8.String",
        "name": "decodeString",
        "normalized": "String-\u003eString",
        "package": "utf8-string",
        "partial": "String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a Haskell String to a list of Word8 values, in UTF8 format.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.String",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e [Word8]",
        "fct-source": "src/Codec-Binary-UTF8-String.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode Haskell String to list of Word8 values in UTF8 format",
        "hierarchy": "Codec Binary UTF8 String",
        "module": "Codec.Binary.UTF8.String",
        "name": "encode",
        "normalized": "String-\u003e[Word]",
        "package": "utf8-string",
        "partial": "",
        "signature": "String-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:encodeChar",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a single Haskell Char to a list of Word8 values, in UTF8 format.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.String",
        "fct-package": "utf8-string",
        "fct-signature": "Char -\u003e [Word8]",
        "fct-source": "src/Codec-Binary-UTF8-String.html#encodeChar",
        "fct-type": "function",
        "title": "encodeChar"
      },
      "index": {
        "description": "Encode single Haskell Char to list of Word8 values in UTF8 format",
        "hierarchy": "Codec Binary UTF8 String",
        "module": "Codec.Binary.UTF8.String",
        "name": "encodeChar",
        "normalized": "Char-\u003e[Word]",
        "package": "utf8-string",
        "partial": "Char",
        "signature": "Char-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:encodeString",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a string using \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e and store the result in a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.String",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Codec-Binary-UTF8-String.html#encodeString",
        "fct-type": "function",
        "title": "encodeString"
      },
      "index": {
        "description": "Encode string using encode and store the result in String",
        "hierarchy": "Codec Binary UTF8 String",
        "module": "Codec.Binary.UTF8.String",
        "name": "encodeString",
        "normalized": "String-\u003eString",
        "package": "utf8-string",
        "partial": "String",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:isUTF8Encoded",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eisUTF8Encoded str\u003c/code\u003e tries to recognize input string as being in UTF-8 form.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.String",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Codec-Binary-UTF8-String.html#isUTF8Encoded",
        "fct-type": "function",
        "title": "isUTF8Encoded"
      },
      "index": {
        "description": "isUTF8Encoded str tries to recognize input string as being in UTF-8 form",
        "hierarchy": "Codec Binary UTF8 String",
        "module": "Codec.Binary.UTF8.String",
        "name": "isUTF8Encoded",
        "normalized": "String-\u003eBool",
        "package": "utf8-string",
        "partial": "UTF Encoded",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Codec-Binary-UTF8-String.html#v:utf8Encode",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eutf8Encode str\u003c/code\u003e is a convenience function; checks to see if\n \u003ccode\u003estr\u003c/code\u003e isn't UTF-8 encoded before doing so. Sometimes useful, but\n you are better off keeping track of the encoding so as to avoid\n the cost of checking.\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.UTF8.String",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Codec-Binary-UTF8-String.html#utf8Encode",
        "fct-type": "function",
        "title": "utf8Encode"
      },
      "index": {
        "description": "utf8Encode str is convenience function checks to see if str isn UTF-8 encoded before doing so Sometimes useful but you are better off keeping track of the encoding so as to avoid the cost of checking",
        "hierarchy": "Codec Binary UTF8 String",
        "module": "Codec.Binary.UTF8.String",
        "name": "utf8Encode",
        "normalized": "String-\u003eString",
        "package": "utf8-string",
        "partial": "Encode",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#",
      "description": {
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html",
        "fct-type": "module",
        "title": "UTF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "UTF8",
        "normalized": "",
        "package": "utf8-string",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#t:ByteString",
      "description": {
        "fct-descr": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ByteString"
      },
      "index": {
        "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "ByteString",
        "normalized": "",
        "package": "utf8-string",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that do not satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "Split string into two parts the first is the longest prefix that contains only characters that do not satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "break",
        "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eTry to extract a character from a byte string.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no more bytes in the byte string.\n Otherwise, it returns a decoded character and the number of\n bytes used in its representation.\n Errors are replaced by character '\\0xFFFD'.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e Maybe (Char, Int64)",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Try to extract character from byte string Returns Nothing if there are no more bytes in the byte string Otherwise it returns decoded character and the number of bytes used in its representation Errors are replaced by character xFFFD",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "decode",
        "normalized": "ByteString-\u003eMaybe(Char,Int)",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003eMaybe(Char,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edrop n s\u003c/code\u003e returns the \u003ccode\u003es\u003c/code\u003e without its first \u003ccode\u003en\u003c/code\u003e characters.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return an empty string.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Int64 -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop returns the without its first characters If has less than characters then we return an empty string",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "drop",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "utf8-string",
        "partial": "",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a bytestring (left biased).\n This function is strict in the accumulator.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Traverse bytestring left biased This function is strict in the accumulator",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "foldl",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a bytestring (right biased).\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Traverse bytestring right biased",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "foldr",
        "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Haskell string into a UTF8 encoded bytestring.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Converts Haskell string into UTF8 encoded bytestring",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "fromString",
        "normalized": "String-\u003eByteString",
        "package": "utf8-string",
        "partial": "String",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the number of characters encoded in the bytestring.\n Note that this includes replacement characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e Int",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Counts the number of characters encoded in the bytestring Note that this includes replacement characters",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "length",
        "normalized": "ByteString-\u003eInt",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n See also 'lines\\''.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e [ByteString]",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string See also lines",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "lines",
        "normalized": "ByteString-\u003e[ByteString]",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:lines-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n This function preserves the terminators.\n See also \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e [ByteString]",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#lines%27",
        "fct-type": "function",
        "title": "lines'"
      },
      "index": {
        "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string This function preserves the terminators See also lines",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "lines'",
        "normalized": "ByteString-\u003e[ByteString]",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:replacement_char",
      "description": {
        "fct-descr": "\u003cp\u003eThis character is used to mark errors in a UTF8 encoded string.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Char",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#replacement_char",
        "fct-type": "function",
        "title": "replacement_char"
      },
      "index": {
        "description": "This character is used to mark errors in UTF8 encoded string",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "replacement_char",
        "normalized": "",
        "package": "utf8-string",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "Split string into two parts the first is the longest prefix that contains only characters that satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "span",
        "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eSplit after a given number of characters.\n Negative values are treated as if they are 0.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Int64 -\u003e ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "Split after given number of characters Negative values are treated as if they are",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "splitAt",
        "normalized": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "utf8-string",
        "partial": "At",
        "signature": "Int-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etake n s\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e characters of \u003ccode\u003es\u003c/code\u003e.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return the whole of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Int64 -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take returns the first characters of If has less than characters then we return the whole of",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "take",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "utf8-string",
        "partial": "",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a UTF8 encoded bytestring into a Haskell string.\n Invalid characters are replaced with '\\xFFFD'.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e String",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Convert UTF8 encoded bytestring into Haskell string Invalid characters are replaced with xFFFD",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "toString",
        "normalized": "ByteString-\u003eString",
        "package": "utf8-string",
        "partial": "String",
        "signature": "ByteString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-Lazy-UTF8.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003eGet the first character of a byte string, if any.\n Malformed characters are replaced by '\\0xFFFD'.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lazy.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e Maybe (Char, ByteString)",
        "fct-source": "src/Data-ByteString-Lazy-UTF8.html#uncons",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "Get the first character of byte string if any Malformed characters are replaced by xFFFD",
        "hierarchy": "Data ByteString Lazy UTF8",
        "module": "Data.ByteString.Lazy.UTF8",
        "name": "uncons",
        "normalized": "ByteString-\u003eMaybe(Char,ByteString)",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003eMaybe(Char,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#",
      "description": {
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-UTF8.html",
        "fct-type": "module",
        "title": "UTF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "UTF8",
        "normalized": "",
        "package": "utf8-string",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#t:ByteString",
      "description": {
        "fct-descr": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ByteString"
      },
      "index": {
        "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "ByteString",
        "normalized": "",
        "package": "utf8-string",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that do not satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-ByteString-UTF8.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "Split string into two parts the first is the longest prefix that contains only characters that do not satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "break",
        "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eTry to extract a character from a byte string.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no more bytes in the byte string.\n Otherwise, it returns a decoded character and the number of\n bytes used in its representation.\n Errors are replaced by character '\\0xFFFD'.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e Maybe (Char, Int)",
        "fct-source": "src/Data-ByteString-UTF8.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Try to extract character from byte string Returns Nothing if there are no more bytes in the byte string Otherwise it returns decoded character and the number of bytes used in its representation Errors are replaced by character xFFFD",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "decode",
        "normalized": "ByteString-\u003eMaybe(Char,Int)",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003eMaybe(Char,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edrop n s\u003c/code\u003e returns the \u003ccode\u003es\u003c/code\u003e without its first \u003ccode\u003en\u003c/code\u003e characters.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return an empty string.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Int -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-UTF8.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop returns the without its first characters If has less than characters then we return an empty string",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "drop",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "utf8-string",
        "partial": "",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a bytestring (left biased).\n This function is strict in the accumulator.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
        "fct-source": "src/Data-ByteString-UTF8.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Traverse bytestring left biased This function is strict in the accumulator",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "foldl",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a bytestring (right biased).\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
        "fct-source": "src/Data-ByteString-UTF8.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Traverse bytestring right biased",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "foldr",
        "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Haskell string into a UTF8 encoded bytestring.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/Data-ByteString-UTF8.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Converts Haskell string into UTF8 encoded bytestring",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "fromString",
        "normalized": "String-\u003eByteString",
        "package": "utf8-string",
        "partial": "String",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the number of characters encoded in the bytestring.\n Note that this includes replacement characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e Int",
        "fct-source": "src/Data-ByteString-UTF8.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Counts the number of characters encoded in the bytestring Note that this includes replacement characters",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "length",
        "normalized": "ByteString-\u003eInt",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n See also 'lines\\''.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e [ByteString]",
        "fct-source": "src/Data-ByteString-UTF8.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string See also lines",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "lines",
        "normalized": "ByteString-\u003e[ByteString]",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:lines-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n This function preserves the terminators.\n See also \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e [ByteString]",
        "fct-source": "src/Data-ByteString-UTF8.html#lines%27",
        "fct-type": "function",
        "title": "lines'"
      },
      "index": {
        "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string This function preserves the terminators See also lines",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "lines'",
        "normalized": "ByteString-\u003e[ByteString]",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:replacement_char",
      "description": {
        "fct-descr": "\u003cp\u003eThis character is used to mark errors in a UTF8 encoded string.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Char",
        "fct-source": "src/Data-ByteString-UTF8.html#replacement_char",
        "fct-type": "function",
        "title": "replacement_char"
      },
      "index": {
        "description": "This character is used to mark errors in UTF8 encoded string",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "replacement_char",
        "normalized": "",
        "package": "utf8-string",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-ByteString-UTF8.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "Split string into two parts the first is the longest prefix that contains only characters that satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "span",
        "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eSplit after a given number of characters.\n Negative values are treated as if they are 0.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Int -\u003e ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-ByteString-UTF8.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "Split after given number of characters Negative values are treated as if they are",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "splitAt",
        "normalized": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
        "package": "utf8-string",
        "partial": "At",
        "signature": "Int-\u003eByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etake n s\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e characters of \u003ccode\u003es\u003c/code\u003e.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return the whole of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Int -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-UTF8.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take returns the first characters of If has less than characters then we return the whole of",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "take",
        "normalized": "Int-\u003eByteString-\u003eByteString",
        "package": "utf8-string",
        "partial": "",
        "signature": "Int-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a UTF8 encoded bytestring into a Haskell string.\n Invalid characters are replaced with '\\xFFFD'.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e String",
        "fct-source": "src/Data-ByteString-UTF8.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Convert UTF8 encoded bytestring into Haskell string Invalid characters are replaced with xFFFD",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "toString",
        "normalized": "ByteString-\u003eString",
        "package": "utf8-string",
        "partial": "String",
        "signature": "ByteString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-ByteString-UTF8.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003eGet the first character of a byte string, if any.\n Malformed characters are replaced by '\\0xFFFD'.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "ByteString -\u003e Maybe (Char, ByteString)",
        "fct-source": "src/Data-ByteString-UTF8.html#uncons",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "Get the first character of byte string if any Malformed characters are replaced by xFFFD",
        "hierarchy": "Data ByteString UTF8",
        "module": "Data.ByteString.UTF8",
        "name": "uncons",
        "normalized": "ByteString-\u003eMaybe(Char,ByteString)",
        "package": "utf8-string",
        "partial": "",
        "signature": "ByteString-\u003eMaybe(Char,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#",
      "description": {
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "module",
        "fct-source": "src/Data-String-UTF8.html",
        "fct-type": "module",
        "title": "UTF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "UTF8",
        "normalized": "",
        "package": "utf8-string",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#t:UTF8",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of strings that are represented using the UTF8 encoding.\n The parameter is the type of the container for the representation.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "data",
        "fct-source": "src/Data-String-UTF8.html#UTF8",
        "fct-type": "data",
        "title": "UTF8"
      },
      "index": {
        "description": "The type of strings that are represented using the UTF8 encoding The parameter is the type of the container for the representation",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "UTF8",
        "normalized": "",
        "package": "utf8-string",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#t:UTF8Bytes",
      "description": {
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "class",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#UTF8Bytes",
        "fct-type": "class",
        "title": "UTF8Bytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "UTF8Bytes",
        "normalized": "",
        "package": "utf8-string",
        "partial": "UTF Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that do not satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as \u003ccode\u003ereplacement_char\u003c/code\u003e to the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e Bool) -\u003e UTF8 string -\u003e (UTF8 string, UTF8 string)",
        "fct-source": "src/Data-String-UTF8.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "Split string into two parts the first is the longest prefix that contains only characters that do not satisfy the predicate the second part is the rest of the string Invalid characters are passed as replacement char to the predicate",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "break",
        "normalized": "(Char-\u003eBool)-\u003eUTF a-\u003e(UTF a,UTF a)",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eUTF string-\u003e(UTF string,UTF string)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:byteDrop",
      "description": {
        "fct-descr": "\u003cp\u003eDrop the given number of bytes from the underlying representation.\n See also \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "index -\u003e UTF8 string -\u003e UTF8 string",
        "fct-source": "src/Data-String-UTF8.html#byteDrop",
        "fct-type": "function",
        "title": "byteDrop"
      },
      "index": {
        "description": "Drop the given number of bytes from the underlying representation See also drop",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "byteDrop",
        "normalized": "a-\u003eUTF b-\u003eUTF b",
        "package": "utf8-string",
        "partial": "Drop",
        "signature": "index-\u003eUTF string-\u003eUTF string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:byteSplitAt",
      "description": {
        "fct-descr": "\u003cp\u003eSplit after a given number of bytes in the underlying representation.\n See also \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "index -\u003e UTF8 string -\u003e (UTF8 string, UTF8 string)",
        "fct-source": "src/Data-String-UTF8.html#byteSplitAt",
        "fct-type": "function",
        "title": "byteSplitAt"
      },
      "index": {
        "description": "Split after given number of bytes in the underlying representation See also splitAt",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "byteSplitAt",
        "normalized": "a-\u003eUTF b-\u003e(UTF b,UTF b)",
        "package": "utf8-string",
        "partial": "Split At",
        "signature": "index-\u003eUTF string-\u003e(UTF string,UTF string)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:byteTake",
      "description": {
        "fct-descr": "\u003cp\u003eTake only the given number of bytes from the underlying representation.\n See also \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "index -\u003e UTF8 string -\u003e UTF8 string",
        "fct-source": "src/Data-String-UTF8.html#byteTake",
        "fct-type": "function",
        "title": "byteTake"
      },
      "index": {
        "description": "Take only the given number of bytes from the underlying representation See also take",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "byteTake",
        "normalized": "a-\u003eUTF b-\u003eUTF b",
        "package": "utf8-string",
        "partial": "Take",
        "signature": "index-\u003eUTF string-\u003eUTF string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the first character for the underlying representation,\n if one is available.  It also returns the number of bytes used\n in the representation of the character.\n See also \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003edropBytes\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "UTF8 string -\u003e Maybe (Char, index)",
        "fct-source": "src/Data-String-UTF8.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Extract the first character for the underlying representation if one is available It also returns the number of bytes used in the representation of the character See also uncons dropBytes",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "decode",
        "normalized": "UTF a-\u003eMaybe(Char,b)",
        "package": "utf8-string",
        "partial": "",
        "signature": "UTF string-\u003eMaybe(Char,index)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edrop n s\u003c/code\u003e returns the \u003ccode\u003es\u003c/code\u003e without its first \u003ccode\u003en\u003c/code\u003e characters.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return an empty string.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "index -\u003e UTF8 string -\u003e UTF8 string",
        "fct-source": "src/Data-String-UTF8.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop returns the without its first characters If has less than characters then we return an empty string",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "drop",
        "normalized": "a-\u003eUTF b-\u003eUTF b",
        "package": "utf8-string",
        "partial": "",
        "signature": "index-\u003eUTF string-\u003eUTF string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a bytestring (left biased).\n This function is strict in the accumulator.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e UTF8 string -\u003e a",
        "fct-source": "src/Data-String-UTF8.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Traverse bytestring left biased This function is strict in the accumulator",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "foldl",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eUTF b-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eUTF string-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse a bytestring (right biased).\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e UTF8 string -\u003e a",
        "fct-source": "src/Data-String-UTF8.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Traverse bytestring right biased",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "foldr",
        "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eUTF b-\u003ea",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eUTF string-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:fromRep",
      "description": {
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "string -\u003e UTF8 string",
        "fct-source": "src/Data-String-UTF8.html#fromRep",
        "fct-type": "function",
        "title": "fromRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "fromRep",
        "normalized": "a-\u003eUTF a",
        "package": "utf8-string",
        "partial": "Rep",
        "signature": "string-\u003eUTF string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Haskell string into a UTF8 encoded string.\n Complexity: linear.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e UTF8 string",
        "fct-source": "src/Data-String-UTF8.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Converts Haskell string into UTF8 encoded string Complexity linear",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "fromString",
        "normalized": "String-\u003eUTF a",
        "package": "utf8-string",
        "partial": "String",
        "signature": "String-\u003eUTF string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the number of characters encoded in the bytestring.\n Note that this includes replacement characters.\n The function is linear in the number of bytes in the representation.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "UTF8 string -\u003e index",
        "fct-source": "src/Data-String-UTF8.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Counts the number of characters encoded in the bytestring Note that this includes replacement characters The function is linear in the number of bytes in the representation",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "length",
        "normalized": "UTF a-\u003eb",
        "package": "utf8-string",
        "partial": "",
        "signature": "UTF string-\u003eindex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n See also 'lines\\''.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "UTF8 string -\u003e [UTF8 string]",
        "fct-source": "src/Data-String-UTF8.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string See also lines",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "lines",
        "normalized": "UTF a-\u003e[UTF a]",
        "package": "utf8-string",
        "partial": "",
        "signature": "UTF string-\u003e[UTF string]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:lines-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into a list of lines.\n Lines are terminated by '\\n' or the end of the string.\n Empty lines may not be terminated by the end of the string.\n This function preserves the terminators.\n See also \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "UTF8 string -\u003e [UTF8 string]",
        "fct-source": "src/Data-String-UTF8.html#lines%27",
        "fct-type": "function",
        "title": "lines'"
      },
      "index": {
        "description": "Split string into list of lines Lines are terminated by or the end of the string Empty lines may not be terminated by the end of the string This function preserves the terminators See also lines",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "lines'",
        "normalized": "UTF a-\u003e[UTF a]",
        "package": "utf8-string",
        "partial": "",
        "signature": "UTF string-\u003e[UTF string]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if there are no more bytes in the underlying representation.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "UTF8 string -\u003e Bool",
        "fct-source": "src/Data-String-UTF8.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Checks if there are no more bytes in the underlying representation",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "null",
        "normalized": "UTF a-\u003eBool",
        "package": "utf8-string",
        "partial": "",
        "signature": "UTF string-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:replacement_char",
      "description": {
        "fct-descr": "\u003cp\u003eThis character is used to mark errors in a UTF8 encoded string.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Char",
        "fct-source": "src/Codec-Binary-UTF8-Generic.html#replacement_char",
        "fct-type": "function",
        "title": "replacement_char"
      },
      "index": {
        "description": "This character is used to mark errors in UTF8 encoded string",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "replacement_char",
        "normalized": "",
        "package": "utf8-string",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a string into two parts:  the first is the longest prefix\n that contains only characters that satisfy the predicate; the second\n part is the rest of the string.\n Invalid characters are passed as '\\0xFFFD' to the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(Char -\u003e Bool) -\u003e UTF8 string -\u003e (UTF8 string, UTF8 string)",
        "fct-source": "src/Data-String-UTF8.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "Split string into two parts the first is the longest prefix that contains only characters that satisfy the predicate the second part is the rest of the string Invalid characters are passed as xFFFD to the predicate",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "span",
        "normalized": "(Char-\u003eBool)-\u003eUTF a-\u003e(UTF a,UTF a)",
        "package": "utf8-string",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eUTF string-\u003e(UTF string,UTF string)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eSplit after a given number of characters.\n Negative values are treated as if they are 0.\n See also \u003ccode\u003ebytesSplitAt\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "index -\u003e UTF8 string -\u003e (UTF8 string, UTF8 string)",
        "fct-source": "src/Data-String-UTF8.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "Split after given number of characters Negative values are treated as if they are See also bytesSplitAt",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "splitAt",
        "normalized": "a-\u003eUTF b-\u003e(UTF b,UTF b)",
        "package": "utf8-string",
        "partial": "At",
        "signature": "index-\u003eUTF string-\u003e(UTF string,UTF string)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etake n s\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e characters of \u003ccode\u003es\u003c/code\u003e.\n If \u003ccode\u003es\u003c/code\u003e has less than \u003ccode\u003en\u003c/code\u003e characters, then we return the whole of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "index -\u003e UTF8 string -\u003e UTF8 string",
        "fct-source": "src/Data-String-UTF8.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take returns the first characters of If has less than characters then we return the whole of",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "take",
        "normalized": "a-\u003eUTF b-\u003eUTF b",
        "package": "utf8-string",
        "partial": "",
        "signature": "index-\u003eUTF string-\u003eUTF string"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:toRep",
      "description": {
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "UTF8 string -\u003e string",
        "fct-source": "src/Data-String-UTF8.html#toRep",
        "fct-type": "function",
        "title": "toRep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "toRep",
        "normalized": "UTF a-\u003ea",
        "package": "utf8-string",
        "partial": "Rep",
        "signature": "UTF string-\u003estring"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a UTF8 encoded string into a Haskell string.\n Invalid characters are replaced by \u003ccode\u003ereplacement_char\u003c/code\u003e.\n Complexity: linear.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "UTF8 string -\u003e String",
        "fct-source": "src/Data-String-UTF8.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Convert UTF8 encoded string into Haskell string Invalid characters are replaced by replacement char Complexity linear",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "toString",
        "normalized": "UTF a-\u003eString",
        "package": "utf8-string",
        "partial": "String",
        "signature": "UTF string-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/Data-String-UTF8.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003eGet the first character of a byte string, if any.\n Invalid characters are replaced by \u003ccode\u003ereplacement_char\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.String.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "UTF8 string -\u003e Maybe (Char, UTF8 string)",
        "fct-source": "src/Data-String-UTF8.html#uncons",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "Get the first character of byte string if any Invalid characters are replaced by replacement char",
        "hierarchy": "Data String UTF8",
        "module": "Data.String.UTF8",
        "name": "uncons",
        "normalized": "UTF a-\u003eMaybe(Char,UTF a)",
        "package": "utf8-string",
        "partial": "",
        "signature": "UTF string-\u003eMaybe(Char,UTF string)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for UTF-8 based environment manipulation\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Environment.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "module",
        "fct-source": "src/System-Environment-UTF8.html",
        "fct-type": "module",
        "title": "UTF8"
      },
      "index": {
        "description": "Support for UTF-8 based environment manipulation",
        "hierarchy": "System Environment UTF8",
        "module": "System.Environment.UTF8",
        "name": "UTF8",
        "normalized": "",
        "package": "utf8-string",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:getArgs",
      "description": {
        "fct-module": "System.Environment.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "IO [String]",
        "fct-source": "src/System-Environment-UTF8.html#getArgs",
        "fct-type": "function",
        "title": "getArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Environment UTF8",
        "module": "System.Environment.UTF8",
        "name": "getArgs",
        "normalized": "IO[String]",
        "package": "utf8-string",
        "partial": "Args",
        "signature": "IO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:getEnv",
      "description": {
        "fct-module": "System.Environment.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e IO String",
        "fct-source": "src/System-Environment-UTF8.html#getEnv",
        "fct-type": "function",
        "title": "getEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "System Environment UTF8",
        "module": "System.Environment.UTF8",
        "name": "getEnv",
        "normalized": "String-\u003eIO String",
        "package": "utf8-string",
        "partial": "Env",
        "signature": "String-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:getEnvironment",
      "description": {
        "fct-module": "System.Environment.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "IO [(String, String)]",
        "fct-source": "src/System-Environment-UTF8.html#getEnvironment",
        "fct-type": "function",
        "title": "getEnvironment"
      },
      "index": {
        "description": "",
        "hierarchy": "System Environment UTF8",
        "module": "System.Environment.UTF8",
        "name": "getEnvironment",
        "normalized": "IO[(String,String)]",
        "package": "utf8-string",
        "partial": "Environment",
        "signature": "IO[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:getProgName",
      "description": {
        "fct-module": "System.Environment.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "IO String",
        "fct-source": "src/System-Environment-UTF8.html#getProgName",
        "fct-type": "function",
        "title": "getProgName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Environment UTF8",
        "module": "System.Environment.UTF8",
        "name": "getProgName",
        "normalized": "",
        "package": "utf8-string",
        "partial": "Prog Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:withArgs",
      "description": {
        "fct-module": "System.Environment.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "[String] -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-Environment-UTF8.html#withArgs",
        "fct-type": "function",
        "title": "withArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "System Environment UTF8",
        "module": "System.Environment.UTF8",
        "name": "withArgs",
        "normalized": "[String]-\u003eIO a-\u003eIO a",
        "package": "utf8-string",
        "partial": "Args",
        "signature": "[String]-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-Environment-UTF8.html#v:withProgName",
      "description": {
        "fct-module": "System.Environment.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-Environment-UTF8.html#withProgName",
        "fct-type": "function",
        "title": "withProgName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Environment UTF8",
        "module": "System.Environment.UTF8",
        "name": "withProgName",
        "normalized": "String-\u003eIO a-\u003eIO a",
        "package": "utf8-string",
        "partial": "Prog Name",
        "signature": "String-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString IO preserving UTF8 encoding.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "module",
        "fct-source": "src/System-IO-UTF8.html",
        "fct-type": "module",
        "title": "UTF8"
      },
      "index": {
        "description": "String IO preserving UTF8 encoding",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "UTF8",
        "normalized": "",
        "package": "utf8-string",
        "partial": "UTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003eappendFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function appends the UTF8 string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-UTF8.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "The computation appendFile file str function appends the UTF8 string str to the file file",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "appendFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "utf8-string",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:getContents",
      "description": {
        "fct-descr": "\u003cp\u003eLazily read stdin as a UTF8 string.\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "IO String",
        "fct-source": "src/System-IO-UTF8.html#getContents",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "Lazily read stdin as UTF8 string",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "getContents",
        "normalized": "",
        "package": "utf8-string",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:getLine",
      "description": {
        "fct-descr": "\u003cp\u003eRead a UTF8 line from the standard input device\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "IO String",
        "fct-source": "src/System-IO-UTF8.html#getLine",
        "fct-type": "function",
        "title": "getLine"
      },
      "index": {
        "description": "Read UTF8 line from the standard input device",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "getLine",
        "normalized": "",
        "package": "utf8-string",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eLazily read a UTF8 string from a Handle\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "src/System-IO-UTF8.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Lazily read UTF8 string from Handle",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "hGetContents",
        "normalized": "Handle-\u003eIO String",
        "package": "utf8-string",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:hGetLine",
      "description": {
        "fct-descr": "\u003cp\u003eRead a UTF8 line from a Handle\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "src/System-IO-UTF8.html#hGetLine",
        "fct-type": "function",
        "title": "hGetLine"
      },
      "index": {
        "description": "Read UTF8 line from Handle",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "hGetLine",
        "normalized": "Handle-\u003eIO String",
        "package": "utf8-string",
        "partial": "Get Line",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:hPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a UTF8 string to a Handle.\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Handle -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-UTF8.html#hPutStr",
        "fct-type": "function",
        "title": "hPutStr"
      },
      "index": {
        "description": "Write UTF8 string to Handle",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "hPutStr",
        "normalized": "Handle-\u003eString-\u003eIO()",
        "package": "utf8-string",
        "partial": "Put Str",
        "signature": "Handle-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:hPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a UTF8 string to a Handle, appending a newline.\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "Handle -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-UTF8.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "Write UTF8 string to Handle appending newline",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eString-\u003eIO()",
        "package": "utf8-string",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:interact",
      "description": {
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "(String -\u003e String) -\u003e IO ()",
        "fct-source": "src/System-IO-UTF8.html#interact",
        "fct-type": "function",
        "title": "interact"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "interact",
        "normalized": "(String-\u003eString)-\u003eIO()",
        "package": "utf8-string",
        "partial": "",
        "signature": "(String-\u003eString)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:openBinaryFile",
      "description": {
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "FilePath -\u003e IOMode -\u003e IO Handle",
        "fct-source": "src/System-IO-UTF8.html#openBinaryFile",
        "fct-type": "function",
        "title": "openBinaryFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "openBinaryFile",
        "normalized": "FilePath-\u003eIOMode-\u003eIO Handle",
        "package": "utf8-string",
        "partial": "Binary File",
        "signature": "FilePath-\u003eIOMode-\u003eIO Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:print",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device. This function differs from the\n System.IO.print in that it preserves any UTF8 encoding of the shown value.\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-IO-UTF8.html#print",
        "fct-type": "function",
        "title": "print"
      },
      "index": {
        "description": "The print function outputs value of any printable type to the standard output device This function differs from the System.IO.print in that it preserves any UTF8 encoding of the shown value",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "print",
        "normalized": "a-\u003eIO()",
        "package": "utf8-string",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:putStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a UTF8 string to the standard output device\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-IO-UTF8.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "Write UTF8 string to the standard output device",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "putStr",
        "normalized": "String-\u003eIO()",
        "package": "utf8-string",
        "partial": "Str",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:putStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-IO-UTF8.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "The same as putStr but adds newline character",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "putStrLn",
        "normalized": "String-\u003eIO()",
        "package": "utf8-string",
        "partial": "Str Ln",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a UTF8 string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/System-IO-UTF8.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "The readFile function reads file and returns the contents of the file as UTF8 string The file is read lazily on demand as with getContents",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO String",
        "package": "utf8-string",
        "partial": "File",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:readLn",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadLn\u003c/a\u003e\u003c/code\u003e function combines \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003ereadIO\u003c/code\u003e, preserving UTF8\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "IO a",
        "fct-source": "src/System-IO-UTF8.html#readLn",
        "fct-type": "function",
        "title": "readLn"
      },
      "index": {
        "description": "The readLn function combines getLine and readIO preserving UTF8",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "readLn",
        "normalized": "",
        "package": "utf8-string",
        "partial": "Ln",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:withBinaryFile",
      "description": {
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-IO-UTF8.html#withBinaryFile",
        "fct-type": "function",
        "title": "withBinaryFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "withBinaryFile",
        "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a",
        "package": "utf8-string",
        "partial": "Binary File",
        "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/utf8-string/docs/System-IO-UTF8.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe computation \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003efile str\u003c/code\u003e function writes the UTF8 string \u003ccode\u003estr\u003c/code\u003e,\n to the file \u003ccode\u003efile\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.UTF8",
        "fct-package": "utf8-string",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-UTF8.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "The computation writeFile file str function writes the UTF8 string str to the file file",
        "hierarchy": "System IO UTF8",
        "module": "System.IO.UTF8",
        "name": "writeFile",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "utf8-string",
        "partial": "File",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  }
]