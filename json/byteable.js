[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#",
      "description": {
        "fct-module": "Data.Byteable",
        "fct-package": "byteable",
        "fct-signature": "module",
        "fct-source": "src/Data-Byteable.html",
        "fct-type": "module",
        "title": "Byteable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Byteable",
        "module": "Data.Byteable",
        "name": "Byteable",
        "normalized": "",
        "package": "byteable",
        "partial": "Byteable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#t:Byteable",
      "description": {
        "fct-descr": "\u003cp\u003eClass of things that can generate sequence of bytes\n\u003c/p\u003e",
        "fct-module": "Data.Byteable",
        "fct-package": "byteable",
        "fct-signature": "class",
        "fct-source": "src/Data-Byteable.html#Byteable",
        "fct-type": "class",
        "title": "Byteable"
      },
      "index": {
        "description": "Class of things that can generate sequence of bytes",
        "hierarchy": "Data Byteable",
        "module": "Data.Byteable",
        "name": "Byteable",
        "normalized": "",
        "package": "byteable",
        "partial": "Byteable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#v:byteableLength",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the size of the byteable .\n\u003c/p\u003e",
        "fct-module": "Data.Byteable",
        "fct-package": "byteable",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Byteable.html#byteableLength",
        "fct-type": "method",
        "title": "byteableLength"
      },
      "index": {
        "description": "Return the size of the byteable",
        "hierarchy": "Data Byteable",
        "module": "Data.Byteable",
        "name": "byteableLength",
        "normalized": "a-\u003eInt",
        "package": "byteable",
        "partial": "Length",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#v:constEqBytes",
      "description": {
        "fct-descr": "\u003cp\u003eA constant time equality test for 2 byteable objects.\n\u003c/p\u003e\u003cp\u003eIf objects are of 2 different sizes, the function will abort early\n without comparing any bytes.\n\u003c/p\u003e\u003cp\u003ecompared to == , this function will go over all the bytes\n present before yielding a result even when knowing the\n overall result early in the processing.\n\u003c/p\u003e",
        "fct-module": "Data.Byteable",
        "fct-package": "byteable",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Byteable.html#constEqBytes",
        "fct-type": "function",
        "title": "constEqBytes"
      },
      "index": {
        "description": "constant time equality test for byteable objects If objects are of different sizes the function will abort early without comparing any bytes compared to this function will go over all the bytes present before yielding result even when knowing the overall result early in the processing",
        "hierarchy": "Data Byteable",
        "module": "Data.Byteable",
        "name": "constEqBytes",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "byteable",
        "partial": "Eq Bytes",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#v:toBytes",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a byteable type to a bytestring\n\u003c/p\u003e",
        "fct-module": "Data.Byteable",
        "fct-package": "byteable",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Byteable.html#toBytes",
        "fct-type": "method",
        "title": "toBytes"
      },
      "index": {
        "description": "Convert byteable type to bytestring",
        "hierarchy": "Data Byteable",
        "module": "Data.Byteable",
        "name": "toBytes",
        "normalized": "a-\u003eByteString",
        "package": "byteable",
        "partial": "Bytes",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#v:withBytePtr",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a way to look at the data of a byteable type with a ptr.\n\u003c/p\u003e",
        "fct-module": "Data.Byteable",
        "fct-package": "byteable",
        "fct-signature": "a -\u003e (Ptr Word8 -\u003e IO b) -\u003e IO b",
        "fct-source": "src/Data-Byteable.html#withBytePtr",
        "fct-type": "method",
        "title": "withBytePtr"
      },
      "index": {
        "description": "Provide way to look at the data of byteable type with ptr",
        "hierarchy": "Data Byteable",
        "module": "Data.Byteable",
        "name": "withBytePtr",
        "normalized": "a-\u003e(Ptr Word-\u003eIO b)-\u003eIO b",
        "package": "byteable",
        "partial": "Byte Ptr",
        "signature": "a-\u003e(Ptr Word-\u003eIO b)-\u003eIO b"
      }
    }
  }
]