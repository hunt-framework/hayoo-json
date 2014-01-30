[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the ideas in \n \u003ca\u003ehttp://www.cs.ubc.ca/local/reading/proceedings/spe91-95/spe/vol25/issue12/spe986.pdf\u003c/a\u003e.\n Inspired also by \u003ca\u003eData.Map\u003c/a\u003e and the OCaml version of ropes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "module",
        "fct-source": "src/Data-Rope.html",
        "fct-type": "module",
        "title": "Rope"
      },
      "index": {
        "description": "Implementation of the ideas in http www.cs.ubc.ca local reading proceedings spe91-95 spe vol25 issue12 spe986.pdf Inspired also by Data.Map and the OCaml version of ropes",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "Rope",
        "normalized": "",
        "package": "data-rope",
        "partial": "Rope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#t:Rope",
      "description": {
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "data",
        "fct-source": "src/Data-Rope.html#Rope",
        "fct-type": "data",
        "title": "Rope"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "Rope",
        "normalized": "",
        "package": "data-rope",
        "partial": "Rope",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n) Concatenates two \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Rope -\u003e Rope",
        "fct-source": "src/Data-Rope.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "log Concatenates two Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "append",
        "normalized": "Rope-\u003eRope-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eRope-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:breakByte",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakByte\u003c/a\u003e\u003c/code\u003e c r\u003c/code\u003e breaks \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e before the first occurence of \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Word8 -\u003e Rope -\u003e (Rope, Rope)",
        "fct-source": "src/Data-Rope.html#breakByte",
        "fct-type": "function",
        "title": "breakByte"
      },
      "index": {
        "description": "breakByte breaks Rope before the first occurence of",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "breakByte",
        "normalized": "Word-\u003eRope-\u003e(Rope,Rope)",
        "package": "data-rope",
        "partial": "Byte",
        "signature": "Word-\u003eRope-\u003e(Rope,Rope)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:breaks",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreaks\u003c/a\u003e\u003c/code\u003e w r\u003c/code\u003e breaks \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003er\u003c/code\u003e between each occurence of \u003ccode\u003ew\u003c/code\u003e (non-inclusive).\n This function is not tail-recursive, uses \u003ccode\u003ememchr\u003c/code\u003e and constructs the list in parallel\n using \u003ccode\u003e\u003ccode\u003e\u003ca\u003epar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Word8 -\u003e Rope -\u003e [Rope]",
        "fct-source": "src/Data-Rope.html#breaks",
        "fct-type": "function",
        "title": "breaks"
      },
      "index": {
        "description": "breaks breaks Rope between each occurence of non-inclusive This function is not tail-recursive uses memchr and constructs the list in parallel using par",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "breaks",
        "normalized": "Word-\u003eRope-\u003e[Rope]",
        "package": "data-rope",
        "partial": "",
        "signature": "Word-\u003eRope-\u003e[Rope]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Appends the specified byte at the beginning of the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Word8 -\u003e Rope -\u003e Rope",
        "fct-source": "src/Data-Rope.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "log Appends the specified byte at the beginning of the Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "cons",
        "normalized": "Word-\u003eRope-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Word-\u003eRope-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:drop",
      "description": {
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Int -\u003e Rope -\u003e Rope",
        "fct-source": "src/Data-Rope.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "drop",
        "normalized": "Int-\u003eRope-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Int-\u003eRope-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:elemIndex",
      "description": {
        "fct-descr": "\u003cp\u003eO(n) returns the index of the first element equal to the query element. This implementation\n uses memchr at leaves, and explores the rope in parallel (with \u003ccode\u003e\u003ca\u003epar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Word8 -\u003e Rope -\u003e Maybe Int",
        "fct-source": "src/Data-Rope.html#elemIndex",
        "fct-type": "function",
        "title": "elemIndex"
      },
      "index": {
        "description": "returns the index of the first element equal to the query element This implementation uses memchr at leaves and explores the rope in parallel with par",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "elemIndex",
        "normalized": "Word-\u003eRope-\u003eMaybe Int",
        "package": "data-rope",
        "partial": "Index",
        "signature": "Word-\u003eRope-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:elemIndex-39-",
      "description": {
        "fct-descr": "\u003cp\u003eO(n) Same as \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, but explores the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e sequentially. Useful for\n \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003es loaded lazily with \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Word8 -\u003e Rope -\u003e Maybe Int",
        "fct-source": "src/Data-Rope.html#elemIndex%27",
        "fct-type": "function",
        "title": "elemIndex'"
      },
      "index": {
        "description": "Same as elemIndex but explores the Rope sequentially Useful for Rope loaded lazily with readFile",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "elemIndex'",
        "normalized": "Word-\u003eRope-\u003eMaybe Int",
        "package": "data-rope",
        "partial": "Index'",
        "signature": "Word-\u003eRope-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:elemIndices",
      "description": {
        "fct-descr": "\u003cp\u003eO(n) returns the list of all positions where the queried elements occurs in the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e.\n This implementation uses memchr.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Word8 -\u003e Rope -\u003e [Int]",
        "fct-source": "src/Data-Rope.html#elemIndices",
        "fct-type": "function",
        "title": "elemIndices"
      },
      "index": {
        "description": "returns the list of all positions where the queried elements occurs in the Rope This implementation uses memchr",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "elemIndices",
        "normalized": "Word-\u003eRope-\u003e[Int]",
        "package": "data-rope",
        "partial": "Indices",
        "signature": "Word-\u003eRope-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eO(1) The empty \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope",
        "fct-source": "src/Data-Rope.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "empty",
        "normalized": "",
        "package": "data-rope",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). fold over a \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e.\n This implementation is not tail-recursive but never pushes more than\n O(log n) calls on the stack.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e Rope -\u003e a",
        "fct-source": "src/Data-Rope.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "fold over Rope This implementation is not tail-recursive but never pushes more than log calls on the stack",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "foldl",
        "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eRope-\u003ea",
        "package": "data-rope",
        "partial": "",
        "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eRope-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e but strict.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e Rope -\u003e a",
        "fct-source": "src/Data-Rope.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "like foldl but strict",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "foldl'",
        "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eRope-\u003ea",
        "package": "data-rope",
        "partial": "",
        "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eRope-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Right fold. Again not tail-recursive but never uses more than\n O(log n) on the stack.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "(Word8 -\u003e a -\u003e a) -\u003e a -\u003e Rope -\u003e a",
        "fct-source": "src/Data-Rope.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Right fold Again not tail-recursive but never uses more than log on the stack",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "foldr",
        "normalized": "(Word-\u003ea-\u003ea)-\u003ea-\u003eRope-\u003ea",
        "package": "data-rope",
        "partial": "",
        "signature": "(Word-\u003ea-\u003ea)-\u003ea-\u003eRope-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:fromByteString",
      "description": {
        "fct-descr": "\u003cp\u003eO(n) Conversion from a strict \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "ByteString -\u003e Rope",
        "fct-source": "src/Data-Rope.html#fromByteString",
        "fct-type": "function",
        "title": "fromByteString"
      },
      "index": {
        "description": "Conversion from strict ByteString",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "fromByteString",
        "normalized": "ByteString-\u003eRope",
        "package": "data-rope",
        "partial": "Byte String",
        "signature": "ByteString-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:hGet",
      "description": {
        "fct-descr": "\u003cp\u003eStrict hGet. The whole rope is constructed.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Handle -\u003e Int -\u003e IO Rope",
        "fct-source": "src/Data-Rope.html#hGet",
        "fct-type": "function",
        "title": "hGet"
      },
      "index": {
        "description": "Strict hGet The whole rope is constructed",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "hGet",
        "normalized": "Handle-\u003eInt-\u003eIO Rope",
        "package": "data-rope",
        "partial": "Get",
        "signature": "Handle-\u003eInt-\u003eIO Rope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eReads the contents of a file handle strictly, then closes it.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Handle -\u003e IO Rope",
        "fct-source": "src/Data-Rope.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Reads the contents of file handle strictly then closes it",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "hGetContents",
        "normalized": "Handle-\u003eIO Rope",
        "package": "data-rope",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO Rope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:hGetLine",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the next line in the input \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. If you need to iterate \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e,\n it may be more efficient to first \u003ccode\u003emmap\u003c/code\u003e the file using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e, or even load\n it with then iterate\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreakByte\u003c/a\u003e\u003c/code\u003e 0x0a\u003c/code\u003e : \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e allocates a buffer to read the file\n and may waste most of this space if the lines are shorter than the standard buffer\n size of this module.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Handle -\u003e IO Rope",
        "fct-source": "src/Data-Rope.html#hGetLine",
        "fct-type": "function",
        "title": "hGetLine"
      },
      "index": {
        "description": "Returns the next line in the input Handle If you need to iterate hGetLine it may be more efficient to first mmap the file using readFile or even load it with then iterate breakByte x0a hGetLine allocates buffer to read the file and may waste most of this space if the lines are shorter than the standard buffer size of this module",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "hGetLine",
        "normalized": "Handle-\u003eIO Rope",
        "package": "data-rope",
        "partial": "Get Line",
        "signature": "Handle-\u003eIO Rope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:hPut",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the contents of the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e on the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Handle -\u003e Rope -\u003e IO ()",
        "fct-source": "src/Data-Rope.html#hPut",
        "fct-type": "function",
        "title": "hPut"
      },
      "index": {
        "description": "Writes the contents of the Rope on the specified Handle",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "hPut",
        "normalized": "Handle-\u003eRope-\u003eIO()",
        "package": "data-rope",
        "partial": "Put",
        "signature": "Handle-\u003eRope-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:hPutStr",
      "description": {
        "fct-descr": "\u003cp\u003esynonym for \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Handle -\u003e Rope -\u003e IO ()",
        "fct-source": "src/Data-Rope.html#hPutStr",
        "fct-type": "function",
        "title": "hPutStr"
      },
      "index": {
        "description": "synonym for hPut",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "hPutStr",
        "normalized": "Handle-\u003eRope-\u003eIO()",
        "package": "data-rope",
        "partial": "Put Str",
        "signature": "Handle-\u003eRope-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:hPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e, but with a newline character at the end of the output\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Handle -\u003e Rope -\u003e IO ()",
        "fct-source": "src/Data-Rope.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "like hPut but with newline character at the end of the output",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eRope-\u003eIO()",
        "package": "data-rope",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eRope-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n) First element of the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e. Raises an error if the argument is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Word8",
        "fct-source": "src/Data-Rope.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "log First element of the Rope Raises an error if the argument is empty",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "head",
        "normalized": "Rope-\u003eWord",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n) returns the \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e at given index in the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Int -\u003e Char",
        "fct-source": "src/Data-Rope.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "log returns the Word8 at given index in the Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "index",
        "normalized": "Rope-\u003eInt-\u003eChar",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eInt-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n) The elements in the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e except the last one.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Rope",
        "fct-source": "src/Data-Rope.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "log The elements in the Rope except the last one",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "init",
        "normalized": "Rope-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n) \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e a i b\u003c/code\u003e inserts \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eb\u003c/code\u003e after the \u003ccode\u003ei\u003c/code\u003eth element of \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Int -\u003e Rope -\u003e Rope",
        "fct-source": "src/Data-Rope.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log insert inserts Rope in Rope after the th element of",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "insert",
        "normalized": "Rope-\u003eInt-\u003eRope-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eInt-\u003eRope-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:intercalate",
      "description": {
        "fct-descr": "\u003cp\u003eO(n) intercalate an element between each element of the list of \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003es\n and concatenates the result.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e [Rope] -\u003e Rope",
        "fct-source": "src/Data-Rope.html#intercalate",
        "fct-type": "function",
        "title": "intercalate"
      },
      "index": {
        "description": "intercalate an element between each element of the list of Rope and concatenates the result",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "intercalate",
        "normalized": "Rope-\u003e[Rope]-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003e[Rope]-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Last element of a \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Word8",
        "fct-source": "src/Data-Rope.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "log Last element of Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "last",
        "normalized": "Rope-\u003eWord",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eO(1) Length of a \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Int",
        "fct-source": "src/Data-Rope.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Length of Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "length",
        "normalized": "Rope-\u003eInt",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Satisfies \u003ccode\u003elines r == breaks 0x0a r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e [Rope]",
        "fct-source": "src/Data-Rope.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Satisfies lines breaks x0a",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "lines",
        "normalized": "Rope-\u003e[Rope]",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003e[Rope]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). \u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f r\u003c/code\u003e applies \u003ccode\u003ef\u003c/code\u003e on each element of \u003ccode\u003er\u003c/code\u003e and returns the\n concatenation of the result.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "(Word8 -\u003e Word8) -\u003e Rope -\u003e Rope",
        "fct-source": "src/Data-Rope.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map applies on each element of and returns the concatenation of the result",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "map",
        "normalized": "(Word-\u003eWord)-\u003eRope-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "(Word-\u003eWord)-\u003eRope-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eO(1) Tests whether a \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Bool",
        "fct-source": "src/Data-Rope.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Tests whether Rope is empty",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "null",
        "normalized": "Rope-\u003eBool",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003eO(n) Convert a list of \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "[Word8] -\u003e Rope",
        "fct-source": "src/Data-Rope.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Convert list of Word8 into Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "pack",
        "normalized": "[Word]-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "[Word]-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:putStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the contents of the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e on the standard output.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e IO ()",
        "fct-source": "src/Data-Rope.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "Writes the contents of the Rope on the standard output",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "putStr",
        "normalized": "Rope-\u003eIO()",
        "package": "data-rope",
        "partial": "Str",
        "signature": "Rope-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:putStrLn",
      "description": {
        "fct-descr": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e but with a newline character at the end of the output\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e IO ()",
        "fct-source": "src/Data-Rope.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "like putStr but with newline character at the end of the output",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "putStrLn",
        "normalized": "Rope-\u003eIO()",
        "package": "data-rope",
        "partial": "Str Ln",
        "signature": "Rope-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eLazy file reading, using \u003ccode\u003emmap\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "FilePath -\u003e IO Rope",
        "fct-source": "src/Data-Rope.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "Lazy file reading using mmap",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO Rope",
        "package": "data-rope",
        "partial": "File",
        "signature": "FilePath-\u003eIO Rope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003eO(n) efficient way to reverse a \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Rope",
        "fct-source": "src/Data-Rope.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "efficient way to reverse Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "reverse",
        "normalized": "Rope-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1) Convert a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Word8 -\u003e Rope",
        "fct-source": "src/Data-Rope.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Convert Word8 into Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "singleton",
        "normalized": "Word-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Word-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:snoc",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Appends the specified byte at the end of the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Word8 -\u003e Rope",
        "fct-source": "src/Data-Rope.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "log Appends the specified byte at the end of the Rope",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "snoc",
        "normalized": "Rope-\u003eWord-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eWord-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e is equivalent to (take n xs, drop n xs), but a little faster.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Int -\u003e Rope -\u003e (Rope, Rope)",
        "fct-source": "src/Data-Rope.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "log splitAt xs is equivalent to take xs drop xs but little faster",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "splitAt",
        "normalized": "Int-\u003eRope-\u003e(Rope,Rope)",
        "package": "data-rope",
        "partial": "At",
        "signature": "Int-\u003eRope-\u003e(Rope,Rope)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:splitAt-35-",
      "description": {
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Int -\u003e Rope -\u003e (#Rope, Rope#)",
        "fct-source": "src/Data-Rope.html#splitAt%23",
        "fct-type": "function",
        "title": "splitAt#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "splitAt#",
        "normalized": "Int-\u003eRope-\u003e(#Rope,Rope #)",
        "package": "data-rope",
        "partial": "At",
        "signature": "Int-\u003eRope-\u003e(#Rope,Rope #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n) The elements after the head. An error is raised if the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Rope",
        "fct-source": "src/Data-Rope.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "log The elements after the head An error is raised if the Rope is empty",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "tail",
        "normalized": "Rope-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:take",
      "description": {
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Int -\u003e Rope -\u003e Rope",
        "fct-source": "src/Data-Rope.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "take",
        "normalized": "Int-\u003eRope-\u003eRope",
        "package": "data-rope",
        "partial": "",
        "signature": "Int-\u003eRope-\u003eRope"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:toByteString",
      "description": {
        "fct-descr": "\u003cp\u003eO(n) Conversion to a strict \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e ByteString",
        "fct-source": "src/Data-Rope.html#toByteString",
        "fct-type": "function",
        "title": "toByteString"
      },
      "index": {
        "description": "Conversion to strict ByteString",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "toByteString",
        "normalized": "Rope-\u003eByteString",
        "package": "data-rope",
        "partial": "Byte String",
        "signature": "Rope-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003eO(log n). Returns the first element of the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e, and the \u003ccode\u003e\u003ca\u003eRope\u003c/a\u003e\u003c/code\u003e of the\n remaining elements.\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e Maybe (Word8, Rope)",
        "fct-source": "src/Data-Rope.html#uncons",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "log Returns the first element of the Rope and the Rope of the remaining elements",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "uncons",
        "normalized": "Rope-\u003eMaybe(Word,Rope)",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003eMaybe(Word,Rope)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-rope/docs/Data-Rope.html#v:unpack",
      "description": {
        "fct-descr": "\u003cp\u003eO(n) Inverse conversion\n\u003c/p\u003e",
        "fct-module": "Data.Rope",
        "fct-package": "data-rope",
        "fct-signature": "Rope -\u003e [Word8]",
        "fct-source": "src/Data-Rope.html#unpack",
        "fct-type": "function",
        "title": "unpack"
      },
      "index": {
        "description": "Inverse conversion",
        "hierarchy": "Data Rope",
        "module": "Data.Rope",
        "name": "unpack",
        "normalized": "Rope-\u003e[Word]",
        "package": "data-rope",
        "partial": "",
        "signature": "Rope-\u003e[Word]"
      }
    }
  }
]