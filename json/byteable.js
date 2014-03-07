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
        "word": "byteable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Byteable",
          "name": "Byteable",
          "package": "byteable",
          "source": "src/Data-Byteable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Byteable",
          "module": "Data.Byteable",
          "name": "Byteable",
          "package": "byteable",
          "partial": "Byteable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of things that can generate sequence of bytes\n\u003c/p\u003e",
          "module": "Data.Byteable",
          "name": "Byteable",
          "package": "byteable",
          "source": "src/Data-Byteable.html#Byteable",
          "type": "class"
        },
        "index": {
          "description": "Class of things that can generate sequence of bytes",
          "hierarchy": "Data Byteable",
          "module": "Data.Byteable",
          "name": "Byteable",
          "package": "byteable",
          "partial": "Byteable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#t:Byteable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the size of the byteable .\n\u003c/p\u003e",
          "module": "Data.Byteable",
          "name": "byteableLength",
          "package": "byteable",
          "signature": "a -\u003e Int",
          "source": "src/Data-Byteable.html#byteableLength",
          "type": "method"
        },
        "index": {
          "description": "Return the size of the byteable",
          "hierarchy": "Data Byteable",
          "module": "Data.Byteable",
          "name": "byteableLength",
          "normalized": "a-\u003eInt",
          "package": "byteable",
          "partial": "Length",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#v:byteableLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constant time equality test for 2 byteable objects.\n\u003c/p\u003e\u003cp\u003eIf objects are of 2 different sizes, the function will abort early\n without comparing any bytes.\n\u003c/p\u003e\u003cp\u003ecompared to == , this function will go over all the bytes\n present before yielding a result even when knowing the\n overall result early in the processing.\n\u003c/p\u003e",
          "module": "Data.Byteable",
          "name": "constEqBytes",
          "package": "byteable",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-Byteable.html#constEqBytes",
          "type": "function"
        },
        "index": {
          "description": "constant time equality test for byteable objects If objects are of different sizes the function will abort early without comparing any bytes compared to this function will go over all the bytes present before yielding result even when knowing the overall result early in the processing",
          "hierarchy": "Data Byteable",
          "module": "Data.Byteable",
          "name": "constEqBytes",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "byteable",
          "partial": "Eq Bytes",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#v:constEqBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a byteable type to a bytestring\n\u003c/p\u003e",
          "module": "Data.Byteable",
          "name": "toBytes",
          "package": "byteable",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Byteable.html#toBytes",
          "type": "method"
        },
        "index": {
          "description": "Convert byteable type to bytestring",
          "hierarchy": "Data Byteable",
          "module": "Data.Byteable",
          "name": "toBytes",
          "normalized": "a-\u003eByteString",
          "package": "byteable",
          "partial": "Bytes",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#v:toBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a way to look at the data of a byteable type with a ptr.\n\u003c/p\u003e",
          "module": "Data.Byteable",
          "name": "withBytePtr",
          "package": "byteable",
          "signature": "a -\u003e (Ptr Word8 -\u003e IO b) -\u003e IO b",
          "source": "src/Data-Byteable.html#withBytePtr",
          "type": "method"
        },
        "index": {
          "description": "Provide way to look at the data of byteable type with ptr",
          "hierarchy": "Data Byteable",
          "module": "Data.Byteable",
          "name": "withBytePtr",
          "normalized": "a-\u003e(Ptr Word-\u003eIO b)-\u003eIO b",
          "package": "byteable",
          "partial": "Byte Ptr",
          "signature": "a-\u003e(Ptr Word-\u003eIO b)-\u003eIO b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/byteable/docs/Data-Byteable.html#v:withBytePtr"
      }
    }
  ]
]