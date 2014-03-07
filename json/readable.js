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
        "word": "readable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Read type class is very useful for building data types from String\nrepresentations.  But String has high overhead, so sometimes it isn't suitable\nfor applications where space usage and performance are important.  This\nlibrary provides a simpler version of Read's functionality for Text and UTF8\nencoded ByteStrings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Readable",
          "name": "Readable",
          "package": "readable",
          "source": "src/Data-Readable.html",
          "type": "module"
        },
        "index": {
          "description": "The Read type class is very useful for building data types from String representations But String has high overhead so sometimes it isn suitable for applications where space usage and performance are important This library provides simpler version of Read functionality for Text and UTF8 encoded ByteStrings",
          "hierarchy": "Data Readable",
          "module": "Data.Readable",
          "name": "Readable",
          "package": "readable",
          "partial": "Readable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/readable/docs/Data-Readable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eByteString and Text reading using MonadPlus to handle parse failure.  On\n error, fromText and fromBS will return mzero.  You can use mplus to provide\n fallback defaults.\n\u003c/p\u003e",
          "module": "Data.Readable",
          "name": "Readable",
          "package": "readable",
          "source": "src/Data-Readable.html#Readable",
          "type": "class"
        },
        "index": {
          "description": "ByteString and Text reading using MonadPlus to handle parse failure On error fromText and fromBS will return mzero You can use mplus to provide fallback defaults",
          "hierarchy": "Data Readable",
          "module": "Data.Readable",
          "name": "Readable",
          "package": "readable",
          "partial": "Readable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/readable/docs/Data-Readable.html#t:Readable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads data from a UTF8 encoded ByteString.\n\u003c/p\u003e",
          "module": "Data.Readable",
          "name": "fromBS",
          "package": "readable",
          "signature": "ByteString -\u003e m a",
          "source": "src/Data-Readable.html#fromBS",
          "type": "method"
        },
        "index": {
          "description": "Reads data from UTF8 encoded ByteString",
          "hierarchy": "Data Readable",
          "module": "Data.Readable",
          "name": "fromBS",
          "normalized": "ByteString-\u003ea b",
          "package": "readable",
          "partial": "BS",
          "signature": "ByteString-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/readable/docs/Data-Readable.html#v:fromBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads data from a Text representation.\n\u003c/p\u003e",
          "module": "Data.Readable",
          "name": "fromText",
          "package": "readable",
          "signature": "Text -\u003e m a",
          "source": "src/Data-Readable.html#fromText",
          "type": "method"
        },
        "index": {
          "description": "Reads data from Text representation",
          "hierarchy": "Data Readable",
          "module": "Data.Readable",
          "name": "fromText",
          "normalized": "Text-\u003ea b",
          "package": "readable",
          "partial": "Text",
          "signature": "Text-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/readable/docs/Data-Readable.html#v:fromText"
      }
    }
  ]
]