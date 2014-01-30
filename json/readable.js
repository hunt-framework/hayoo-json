[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readable/docs/Data-Readable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Read type class is very useful for building data types from String\nrepresentations.  But String has high overhead, so sometimes it isn't suitable\nfor applications where space usage and performance are important.  This\nlibrary provides a simpler version of Read's functionality for Text and UTF8\nencoded ByteStrings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Readable",
        "fct-package": "readable",
        "fct-signature": "module",
        "fct-source": "src/Data-Readable.html",
        "fct-type": "module",
        "title": "Readable"
      },
      "index": {
        "description": "The Read type class is very useful for building data types from String representations But String has high overhead so sometimes it isn suitable for applications where space usage and performance are important This library provides simpler version of Read functionality for Text and UTF8 encoded ByteStrings",
        "hierarchy": "Data Readable",
        "module": "Data.Readable",
        "name": "Readable",
        "normalized": "",
        "package": "readable",
        "partial": "Readable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readable/docs/Data-Readable.html#t:Readable",
      "description": {
        "fct-descr": "\u003cp\u003eByteString and Text reading using MonadPlus to handle parse failure.  On\n error, fromText and fromBS will return mzero.  You can use mplus to provide\n fallback defaults.\n\u003c/p\u003e",
        "fct-module": "Data.Readable",
        "fct-package": "readable",
        "fct-signature": "class",
        "fct-source": "src/Data-Readable.html#Readable",
        "fct-type": "class",
        "title": "Readable"
      },
      "index": {
        "description": "ByteString and Text reading using MonadPlus to handle parse failure On error fromText and fromBS will return mzero You can use mplus to provide fallback defaults",
        "hierarchy": "Data Readable",
        "module": "Data.Readable",
        "name": "Readable",
        "normalized": "",
        "package": "readable",
        "partial": "Readable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readable/docs/Data-Readable.html#v:fromBS",
      "description": {
        "fct-descr": "\u003cp\u003eReads data from a UTF8 encoded ByteString.\n\u003c/p\u003e",
        "fct-module": "Data.Readable",
        "fct-package": "readable",
        "fct-signature": "ByteString -\u003e m a",
        "fct-source": "src/Data-Readable.html#fromBS",
        "fct-type": "method",
        "title": "fromBS"
      },
      "index": {
        "description": "Reads data from UTF8 encoded ByteString",
        "hierarchy": "Data Readable",
        "module": "Data.Readable",
        "name": "fromBS",
        "normalized": "ByteString-\u003ea b",
        "package": "readable",
        "partial": "BS",
        "signature": "ByteString-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readable/docs/Data-Readable.html#v:fromText",
      "description": {
        "fct-descr": "\u003cp\u003eReads data from a Text representation.\n\u003c/p\u003e",
        "fct-module": "Data.Readable",
        "fct-package": "readable",
        "fct-signature": "Text -\u003e m a",
        "fct-source": "src/Data-Readable.html#fromText",
        "fct-type": "method",
        "title": "fromText"
      },
      "index": {
        "description": "Reads data from Text representation",
        "hierarchy": "Data Readable",
        "module": "Data.Readable",
        "name": "fromText",
        "normalized": "Text-\u003ea b",
        "package": "readable",
        "partial": "Text",
        "signature": "Text-\u003em a"
      }
    }
  }
]