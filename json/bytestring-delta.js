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
        "word": "bytestring-delta"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinary diff/patch for \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, and produces a \"patch\" that\n can later be applied with the \u003ccode\u003e\u003ca\u003epatch\u003c/a\u003e\u003c/code\u003e function to the first string to produce\n the second string.  It exploits common subsequences between the two strings,\n and can be used to save bandwidth and disk space when many strings differing\n by a small number of bytes need to be transmitted or stored.\n\u003c/p\u003e\u003cp\u003eDeltas produced by this version of the library can be applied using\n current or future versions, but may not be compatible with past versions.\n\u003c/p\u003e\u003cp\u003ebytestring-delta implements the algorithm described in\n \u003cem\u003eAn O(ND) Difference Algorithm and Its Variations\u003c/em\u003e by Eugene W. Myers.\n Because its memory usage and expected running time are O(N + D^2),\n it works well only when the strings differ by a small number of bytes.\n This implementation stops trying when the strings differ by more than\n 1000 bytes, and falls back to producing a patch that simply emits the new\n string.\n\u003c/p\u003e\u003cp\u003eThus, bytestring-delta does not save any space when given two strings that\n differ by more than 1000 bytes.  This may be improved in a future version of\n the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Delta",
          "name": "Delta",
          "package": "bytestring-delta",
          "source": "src/Data-ByteString-Delta.html",
          "type": "module"
        },
        "index": {
          "description": "Binary diff patch for ByteString The diff function takes two ByteString and produces patch that can later be applied with the patch function to the first string to produce the second string It exploits common subsequences between the two strings and can be used to save bandwidth and disk space when many strings differing by small number of bytes need to be transmitted or stored Deltas produced by this version of the library can be applied using current or future versions but may not be compatible with past versions bytestring-delta implements the algorithm described in An ND Difference Algorithm and Its Variations by Eugene Myers Because its memory usage and expected running time are it works well only when the strings differ by small number of bytes This implementation stops trying when the strings differ by more than bytes and falls back to producing patch that simply emits the new string Thus bytestring-delta does not save any space when given two strings that differ by more than bytes This may be improved in future version of the library",
          "hierarchy": "Data ByteString Delta",
          "module": "Data.ByteString.Delta",
          "name": "Delta",
          "package": "bytestring-delta",
          "partial": "Delta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-delta/docs/Data-ByteString-Delta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a delta between two \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e patch old (diff old new) == Right new\n\u003c/pre\u003e",
          "module": "Data.ByteString.Delta",
          "name": "diff",
          "package": "bytestring-delta",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Delta.html#diff",
          "type": "function"
        },
        "index": {
          "description": "Compute delta between two ByteString patch old diff old new Right new",
          "hierarchy": "Data ByteString Delta",
          "module": "Data.ByteString.Delta",
          "name": "diff",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "bytestring-delta",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-delta/docs/Data-ByteString-Delta.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a delta produced by \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the patch cannot be applied, this function returns \u003ccode\u003eLeft errmsg\u003c/code\u003e,\n where \u003ccode\u003eerrmsg\u003c/code\u003e is a string describing the error.\n\u003c/p\u003e",
          "module": "Data.ByteString.Delta",
          "name": "patch",
          "package": "bytestring-delta",
          "signature": "ByteString -\u003e ByteString -\u003e Either String ByteString",
          "source": "src/Data-ByteString-Delta.html#patch",
          "type": "function"
        },
        "index": {
          "description": "Apply delta produced by diff If the patch cannot be applied this function returns Left errmsg where errmsg is string describing the error",
          "hierarchy": "Data ByteString Delta",
          "module": "Data.ByteString.Delta",
          "name": "patch",
          "normalized": "ByteString-\u003eByteString-\u003eEither String ByteString",
          "package": "bytestring-delta",
          "signature": "ByteString-\u003eByteString-\u003eEither String ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-delta/docs/Data-ByteString-Delta.html#v:patch"
      }
    }
  ]
]