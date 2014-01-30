[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module handles building multipart/form-data. Example usage:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n import Network\n import Network.HTTP.Conduit\n import Network.HTTP.Conduit.MultipartFormData\n\n import Data.Text.Encoding as TE\n\n import Control.Monad\n\n main = withSocketsDo $ withManager $ \\m -\u003e do\n     req1 \u003c- parseUrl \"http://random-cat-photo.net/cat.jpg\"\n     res \u003c- httpLbs req1 m\n     req2 \u003c- parseUrl \"http://example.org/~friedrich/blog/addPost.hs\"\n     flip httpLbs m =\u003c\u003c\n         (formDataBody [partBS \"title\" \"Bleaurgh\"\n                       ,partBS \"text\" $ TE.encodeUtf8 \"&#30690;&#30000;&#30690;&#30000;&#30690;&#30000;&#30690;&#30000;&#30690;&#30000;\"\n                       ,partFileSource \"file1\" \"/home/friedrich/Photos/MyLittlePony.jpg\"\n                       ,partFileRequestBody \"file2\" \"cat.jpg\" $ RequestBodyLBS $ responseBody res]\n             req2)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html",
        "fct-type": "module",
        "title": "MultipartFormData"
      },
      "index": {
        "description": "This module handles building multipart form-data Example usage LANGUAGE OverloadedStrings import Network import Network.HTTP.Conduit import Network.HTTP.Conduit.MultipartFormData import Data.Text.Encoding as TE import Control.Monad main withSocketsDo withManager do req1 parseUrl http random-cat-photo.net cat.jpg res httpLbs req1 req2 parseUrl http example.org friedrich blog addPost.hs flip httpLbs formDataBody partBS title Bleaurgh partBS text TE.encodeUtf8 partFileSource file1 home friedrich Photos MyLittlePony.jpg partFileRequestBody file2 cat.jpg RequestBodyLBS responseBody res req2",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "MultipartFormData",
        "normalized": "",
        "package": "http-client-multipart",
        "partial": "Multipart Form Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#t:Part",
      "description": {
        "fct-descr": "\u003cp\u003eA single part of a multipart message.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#Part",
        "fct-type": "data",
        "title": "Part"
      },
      "index": {
        "description": "single part of multipart message",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "Part",
        "normalized": "",
        "package": "http-client-multipart",
        "partial": "Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:Part",
      "description": {
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Part",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#Part",
        "fct-type": "function",
        "title": "Part"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "Part",
        "normalized": "",
        "package": "http-client-multipart",
        "partial": "Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:formDataBody",
      "description": {
        "fct-descr": "\u003cp\u003eAdd form data to the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis sets a new \u003ccode\u003e\u003ca\u003erequestBody\u003c/a\u003e\u003c/code\u003e, adds a content-type request header and changes the method to POST.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "[Part] -\u003e Request -\u003e m Request",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#formDataBody",
        "fct-type": "function",
        "title": "formDataBody"
      },
      "index": {
        "description": "Add form data to the Request This sets new requestBody adds content-type request header and changes the method to POST",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "formDataBody",
        "normalized": "[Part]-\u003eRequest-\u003ea Request",
        "package": "http-client-multipart",
        "partial": "Data Body",
        "signature": "[Part]-\u003eRequest-\u003em Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:formDataBodyWithBoundary",
      "description": {
        "fct-descr": "\u003cp\u003eAdd form data with supplied boundary\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "ByteString -\u003e [Part] -\u003e Request -\u003e IO Request",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#formDataBodyWithBoundary",
        "fct-type": "function",
        "title": "formDataBodyWithBoundary"
      },
      "index": {
        "description": "Add form data with supplied boundary",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "formDataBodyWithBoundary",
        "normalized": "ByteString-\u003e[Part]-\u003eRequest-\u003eIO Request",
        "package": "http-client-multipart",
        "partial": "Data Body With Boundary",
        "signature": "ByteString-\u003e[Part]-\u003eRequest-\u003eIO Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partBS",
      "description": {
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Text -\u003e ByteString -\u003e Part",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#partBS",
        "fct-type": "function",
        "title": "partBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partBS",
        "normalized": "Text-\u003eByteString-\u003ePart",
        "package": "http-client-multipart",
        "partial": "BS",
        "signature": "Text-\u003eByteString-\u003ePart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partContentType",
      "description": {
        "fct-descr": "\u003cp\u003eContent type\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Maybe MimeType",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#Part",
        "fct-type": "function",
        "title": "partContentType"
      },
      "index": {
        "description": "Content type",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partContentType",
        "normalized": "",
        "package": "http-client-multipart",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partFile",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003ePart\u003c/a\u003e\u003c/code\u003e from a file, the entire file will reside in memory at once.\n If you want constant memory usage use \u003ccode\u003e\u003ca\u003epartFileSource\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Text -\u003e FilePath -\u003e Part",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#partFile",
        "fct-type": "function",
        "title": "partFile"
      },
      "index": {
        "description": "Make Part from file the entire file will reside in memory at once If you want constant memory usage use partFileSource",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partFile",
        "normalized": "Text-\u003eFilePath-\u003ePart",
        "package": "http-client-multipart",
        "partial": "File",
        "signature": "Text-\u003eFilePath-\u003ePart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partFileRequestBody",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003ePart\u003c/a\u003e\u003c/code\u003e from form name, filepath and a \u003ccode\u003e\u003ca\u003eRequestBody\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e partFileRequestBody \"who_calls\" \"caller.json\" $ RequestBodyBS \"{\\\"caller\\\":\\\"Jason J Jason\\\"}\"\n\u003c/pre\u003e\u003cpre\u003e -- empty upload form\n partFileRequestBody \"file\" mempty mempty\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Text -\u003e FilePath -\u003e RequestBody -\u003e Part",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#partFileRequestBody",
        "fct-type": "function",
        "title": "partFileRequestBody"
      },
      "index": {
        "description": "Construct Part from form name filepath and RequestBody partFileRequestBody who calls caller.json RequestBodyBS caller Jason Jason empty upload form partFileRequestBody file mempty mempty",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partFileRequestBody",
        "normalized": "Text-\u003eFilePath-\u003eRequestBody-\u003ePart",
        "package": "http-client-multipart",
        "partial": "File Request Body",
        "signature": "Text-\u003eFilePath-\u003eRequestBody-\u003ePart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partFileRequestBodyM",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003ePart\u003c/a\u003e\u003c/code\u003e from action returning the \u003ccode\u003e\u003ca\u003eRequestBody\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e partFileRequestBodyM \"cat_photo\" \"haskell-the-cat.jpg\" $ do\n     size \u003c- fromInteger \u003c$\u003e withBinaryFile \"haskell-the-cat.jpg\" ReadMode hFileSize\n     return $ RequestBodySource size $ CB.sourceFile \"haskell-the-cat.jpg\" $= CL.map fromByteString\n\u003c/pre\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Text -\u003e FilePath -\u003e IO RequestBody -\u003e Part",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#partFileRequestBodyM",
        "fct-type": "function",
        "title": "partFileRequestBodyM"
      },
      "index": {
        "description": "Construct Part from action returning the RequestBody partFileRequestBodyM cat photo haskell-the-cat.jpg do size fromInteger withBinaryFile haskell-the-cat.jpg ReadMode hFileSize return RequestBodySource size CB.sourceFile haskell-the-cat.jpg CL.map fromByteString",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partFileRequestBodyM",
        "normalized": "Text-\u003eFilePath-\u003eIO RequestBody-\u003ePart",
        "package": "http-client-multipart",
        "partial": "File Request Body",
        "signature": "Text-\u003eFilePath-\u003eIO RequestBody-\u003ePart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partFileSource",
      "description": {
        "fct-descr": "\u003cp\u003eStream \u003ccode\u003e\u003ca\u003ePart\u003c/a\u003e\u003c/code\u003e from a file.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Text -\u003e FilePath -\u003e Part",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#partFileSource",
        "fct-type": "function",
        "title": "partFileSource"
      },
      "index": {
        "description": "Stream Part from file",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partFileSource",
        "normalized": "Text-\u003eFilePath-\u003ePart",
        "package": "http-client-multipart",
        "partial": "File Source",
        "signature": "Text-\u003eFilePath-\u003ePart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partFileSourceChunked",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epartFileSourceChunked\u003c/a\u003e\u003c/code\u003e will read a file and send it in chunks.\n\u003c/p\u003e\u003cp\u003eNote that not all servers support this. Only use \u003ccode\u003e\u003ca\u003epartFileSourceChunked\u003c/a\u003e\u003c/code\u003e\n if you know the server you're sending to supports chunked request bodies.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Text -\u003e FilePath -\u003e Part",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#partFileSourceChunked",
        "fct-type": "function",
        "title": "partFileSourceChunked"
      },
      "index": {
        "description": "partFileSourceChunked will read file and send it in chunks Note that not all servers support this Only use partFileSourceChunked if you know the server you re sending to supports chunked request bodies",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partFileSourceChunked",
        "normalized": "Text-\u003eFilePath-\u003ePart",
        "package": "http-client-multipart",
        "partial": "File Source Chunked",
        "signature": "Text-\u003eFilePath-\u003ePart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partFilename",
      "description": {
        "fct-descr": "\u003cp\u003eA file name, if this is an attached file\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#Part",
        "fct-type": "function",
        "title": "partFilename"
      },
      "index": {
        "description": "file name if this is an attached file",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partFilename",
        "normalized": "",
        "package": "http-client-multipart",
        "partial": "Filename",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partGetBody",
      "description": {
        "fct-descr": "\u003cp\u003eAction in m which returns the body\n of a message.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "IO RequestBody",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#Part",
        "fct-type": "function",
        "title": "partGetBody"
      },
      "index": {
        "description": "Action in which returns the body of message",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partGetBody",
        "normalized": "",
        "package": "http-client-multipart",
        "partial": "Get Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partLBS",
      "description": {
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Text -\u003e ByteString -\u003e Part",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#partLBS",
        "fct-type": "function",
        "title": "partLBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partLBS",
        "normalized": "Text-\u003eByteString-\u003ePart",
        "package": "http-client-multipart",
        "partial": "LBS",
        "signature": "Text-\u003eByteString-\u003ePart"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:partName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the corresponding \u003cinput\u003e\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "Text",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#Part",
        "fct-type": "function",
        "title": "partName"
      },
      "index": {
        "description": "Name of the corresponding input",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "partName",
        "normalized": "",
        "package": "http-client-multipart",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:renderPart",
      "description": {
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "ByteString -\u003e Part -\u003e IO RequestBody",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#renderPart",
        "fct-type": "function",
        "title": "renderPart"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "renderPart",
        "normalized": "ByteString-\u003ePart-\u003eIO RequestBody",
        "package": "http-client-multipart",
        "partial": "Part",
        "signature": "ByteString-\u003ePart-\u003eIO RequestBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:renderParts",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the \u003ccode\u003e\u003ca\u003ePart\u003c/a\u003e\u003c/code\u003es to form multipart/form-data body\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "ByteString -\u003e [Part] -\u003e IO RequestBody",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#renderParts",
        "fct-type": "function",
        "title": "renderParts"
      },
      "index": {
        "description": "Combine the Part to form multipart form-data body",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "renderParts",
        "normalized": "ByteString-\u003e[Part]-\u003eIO RequestBody",
        "package": "http-client-multipart",
        "partial": "Parts",
        "signature": "ByteString-\u003e[Part]-\u003eIO RequestBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:webkitBoundary",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a boundary simillar to those generated by WebKit-based browsers.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "IO ByteString",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#webkitBoundary",
        "fct-type": "function",
        "title": "webkitBoundary"
      },
      "index": {
        "description": "Generate boundary simillar to those generated by WebKit-based browsers",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "webkitBoundary",
        "normalized": "",
        "package": "http-client-multipart",
        "partial": "Boundary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-client-multipart/docs/Network-HTTP-Client-MultipartFormData.html#v:webkitBoundaryPure",
      "description": {
        "fct-module": "Network.HTTP.Client.MultipartFormData",
        "fct-package": "http-client-multipart",
        "fct-signature": "g -\u003e (ByteString, g)",
        "fct-source": "src/Network-HTTP-Client-MultipartFormData.html#webkitBoundaryPure",
        "fct-type": "function",
        "title": "webkitBoundaryPure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Client MultipartFormData",
        "module": "Network.HTTP.Client.MultipartFormData",
        "name": "webkitBoundaryPure",
        "normalized": "a-\u003e(ByteString,a)",
        "package": "http-client-multipart",
        "partial": "Boundary Pure",
        "signature": "g-\u003e(ByteString,g)"
      }
    }
  }
]