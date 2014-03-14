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
        "word": "http-media"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e type class, designed to unify types on the\n matching functions in the Media module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Media.Match",
          "name": "Match",
          "package": "http-media",
          "source": "src/Network-HTTP-Media-Match.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the Match type class designed to unify types on the matching functions in the Media module",
          "hierarchy": "Network HTTP Media Match",
          "module": "Network.HTTP.Media.Match",
          "name": "Match",
          "package": "http-media",
          "partial": "Match",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-Match.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines methods for a type whose values can be matched against each\n other in terms of a HTTP media header.\n\u003c/p\u003e\u003cp\u003eThis allows functions to work on both the standard Accept header and\n others such as Accept-Language that still may use quality values.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media.Match",
          "name": "Match",
          "package": "http-media",
          "source": "src/Network-HTTP-Media-Match.html#Match",
          "type": "class"
        },
        "index": {
          "description": "Defines methods for type whose values can be matched against each other in terms of HTTP media header This allows functions to work on both the standard Accept header and others such as Accept-Language that still may use quality values",
          "hierarchy": "Network HTTP Media Match",
          "module": "Network.HTTP.Media.Match",
          "name": "Match",
          "package": "http-media",
          "partial": "Match",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-Match.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates whether either the left argument matches the right one\n (order may be important).\n\u003c/p\u003e",
          "module": "Network.HTTP.Media.Match",
          "name": "matches",
          "package": "http-media",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Network-HTTP-Media-Match.html#matches",
          "type": "method"
        },
        "index": {
          "description": "Evaluates whether either the left argument matches the right one order may be important",
          "hierarchy": "Network HTTP Media Match",
          "module": "Network.HTTP.Media.Match",
          "name": "matches",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "http-media",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-Match.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates whether the left argument is more specific than the right.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media.Match",
          "name": "moreSpecificThan",
          "package": "http-media",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Network-HTTP-Media-Match.html#moreSpecificThan",
          "type": "method"
        },
        "index": {
          "description": "Evaluates whether the left argument is more specific than the right",
          "hierarchy": "Network HTTP Media Match",
          "module": "Network.HTTP.Media.Match",
          "name": "moreSpecificThan",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "http-media",
          "partial": "Specific Than",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-Match.html#v:moreSpecificThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates to whichever argument is more specific. Left biased.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media.Match",
          "name": "mostSpecific",
          "package": "http-media",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Network-HTTP-Media-Match.html#mostSpecific",
          "type": "function"
        },
        "index": {
          "description": "Evaluates to whichever argument is more specific Left biased",
          "hierarchy": "Network HTTP Media Match",
          "module": "Network.HTTP.Media.Match",
          "name": "mostSpecific",
          "normalized": "a-\u003ea-\u003ea",
          "package": "http-media",
          "partial": "Specific",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-Match.html#v:mostSpecific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the media type types and functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Media.MediaType",
          "name": "MediaType",
          "package": "http-media",
          "source": "src/Network-HTTP-Media-MediaType.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the media type types and functions",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "MediaType",
          "package": "http-media",
          "partial": "Media Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP media type, consisting of the type, subtype, and parameters.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media.MediaType",
          "name": "MediaType",
          "package": "http-media",
          "source": "src/Network-HTTP-Media-MediaType-Internal.html#MediaType",
          "type": "data"
        },
        "index": {
          "description": "An HTTP media type consisting of the type subtype and parameters",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "MediaType",
          "package": "http-media",
          "partial": "Media Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#t:MediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e parameters.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media.MediaType",
          "name": "Parameters",
          "package": "http-media",
          "source": "src/Network-HTTP-Media-MediaType-Internal.html#Parameters",
          "type": "type"
        },
        "index": {
          "description": "MediaType parameters",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "Parameters",
          "package": "http-media",
          "partial": "Parameters",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#t:Parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e without parameters. Can produce an error if\n either type is invalid.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Media.MediaType\",\"Network.HTTP.Media\"]",
          "name": "(//)",
          "package": "http-media",
          "signature": "ByteString -\u003e ByteString -\u003e MediaType",
          "source": "src/Network-HTTP-Media-MediaType.html#%2F%2F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:-47--47-\",\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:-47--47-\"]"
        },
        "index": {
          "description": "Builds MediaType without parameters Can produce an error if either type is invalid",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "(//) //",
          "normalized": "ByteString-\u003eByteString-\u003eMediaType",
          "package": "http-media",
          "signature": "ByteString-\u003eByteString-\u003eMediaType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates if a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e has a parameter of the given name.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Media.MediaType\",\"Network.HTTP.Media\"]",
          "name": "(/?)",
          "package": "http-media",
          "signature": "MediaType -\u003e ByteString -\u003e Bool",
          "source": "src/Network-HTTP-Media-MediaType.html#%2F%3F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:-47--63-\",\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:-47--63-\"]"
        },
        "index": {
          "description": "Evaluates if MediaType has parameter of the given name",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "(/?) /?",
          "normalized": "MediaType-\u003eByteString-\u003eBool",
          "package": "http-media",
          "signature": "MediaType-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:-47--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a parameter from a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Media.MediaType\",\"Network.HTTP.Media\"]",
          "name": "(/.)",
          "package": "http-media",
          "signature": "MediaType -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Network-HTTP-Media-MediaType.html#%2F.",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:-47-.\",\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:-47-.\"]"
        },
        "index": {
          "description": "Retrieves parameter from MediaType",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "(/.) /.",
          "normalized": "MediaType-\u003eByteString-\u003eMaybe ByteString",
          "package": "http-media",
          "signature": "MediaType-\u003eByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:-47-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a parameter to a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e. Can produce an error if either\n string is invalid.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Media.MediaType\",\"Network.HTTP.Media\"]",
          "name": "(/:)",
          "package": "http-media",
          "signature": "MediaType -\u003e (ByteString, ByteString) -\u003e MediaType",
          "source": "src/Network-HTTP-Media-MediaType.html#%2F%3A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:-47-:\",\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:-47-:\"]"
        },
        "index": {
          "description": "Adds parameter to MediaType Can produce an error if either string is invalid",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "(/:) /:",
          "normalized": "MediaType-\u003e(ByteString,ByteString)-\u003eMediaType",
          "package": "http-media",
          "signature": "MediaType-\u003e(ByteString,ByteString)-\u003eMediaType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:-47-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the main type of a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Media.MediaType\",\"Network.HTTP.Media\"]",
          "name": "mainType",
          "package": "http-media",
          "signature": "MediaType -\u003e ByteString",
          "source": "src/Network-HTTP-Media-MediaType.html#mainType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:mainType\",\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:mainType\"]"
        },
        "index": {
          "description": "Retrieves the main type of MediaType",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "mainType",
          "normalized": "MediaType-\u003eByteString",
          "package": "http-media",
          "partial": "Type",
          "signature": "MediaType-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:mainType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the parameters of a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Media.MediaType\",\"Network.HTTP.Media\"]",
          "name": "parameters",
          "package": "http-media",
          "signature": "MediaType -\u003e Parameters",
          "source": "src/Network-HTTP-Media-MediaType.html#parameters",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:parameters\",\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:parameters\"]"
        },
        "index": {
          "description": "Retrieves the parameters of MediaType",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "parameters",
          "normalized": "MediaType-\u003eParameters",
          "package": "http-media",
          "signature": "MediaType-\u003eParameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a media type header into a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media.MediaType",
          "name": "parse",
          "package": "http-media",
          "signature": "ByteString -\u003e Maybe MediaType",
          "source": "src/Network-HTTP-Media-MediaType-Internal.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parses media type header into MediaType",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "parse",
          "normalized": "ByteString-\u003eMaybe MediaType",
          "package": "http-media",
          "signature": "ByteString-\u003eMaybe MediaType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the sub type of a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Network.HTTP.Media.MediaType\",\"Network.HTTP.Media\"]",
          "name": "subType",
          "package": "http-media",
          "signature": "MediaType -\u003e ByteString",
          "source": "src/Network-HTTP-Media-MediaType.html#subType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:subType\",\"http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:subType\"]"
        },
        "index": {
          "description": "Retrieves the sub type of MediaType",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "subType",
          "normalized": "MediaType-\u003eByteString",
          "package": "http-media",
          "partial": "Type",
          "signature": "MediaType-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:subType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media.MediaType",
          "name": "toByteString",
          "package": "http-media",
          "signature": "MediaType -\u003e ByteString",
          "source": "src/Network-HTTP-Media-MediaType-Internal.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "Converts MediaType to ByteString",
          "hierarchy": "Network HTTP Media MediaType",
          "module": "Network.HTTP.Media.MediaType",
          "name": "toByteString",
          "normalized": "MediaType-\u003eByteString",
          "package": "http-media",
          "partial": "Byte String",
          "signature": "MediaType-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media-MediaType.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA framework for parsing HTTP media type headers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Media",
          "name": "Media",
          "package": "http-media",
          "source": "src/Network-HTTP-Media.html",
          "type": "module"
        },
        "index": {
          "description": "framework for parsing HTTP media type headers",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "Media",
          "package": "http-media",
          "partial": "Media",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines methods for a type whose values can be matched against each\n other in terms of a HTTP media header.\n\u003c/p\u003e\u003cp\u003eThis allows functions to work on both the standard Accept header and\n others such as Accept-Language that still may use quality values.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media",
          "name": "Match",
          "package": "http-media",
          "source": "src/Network-HTTP-Media-Match.html#Match",
          "type": "class"
        },
        "index": {
          "description": "Defines methods for type whose values can be matched against each other in terms of HTTP media header This allows functions to work on both the standard Accept header and others such as Accept-Language that still may use quality values",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "Match",
          "package": "http-media",
          "partial": "Match",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP media type, consisting of the type, subtype, and parameters.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media",
          "name": "MediaType",
          "package": "http-media",
          "source": "src/Network-HTTP-Media-MediaType-Internal.html#MediaType",
          "type": "data"
        },
        "index": {
          "description": "An HTTP media type consisting of the type subtype and parameters",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "MediaType",
          "package": "http-media",
          "partial": "Media Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#t:MediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttaches a quality value to data.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media",
          "name": "Quality",
          "package": "http-media",
          "source": "src/Network-HTTP-Media-Quality.html#Quality",
          "type": "data"
        },
        "index": {
          "description": "Attaches quality value to data",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "Quality",
          "package": "http-media",
          "partial": "Quality",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#t:Quality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent of \u003ccode\u003e\u003ca\u003ematchAccept\u003c/a\u003e\u003c/code\u003e above, except the resulting choice is\n mapped to another value. Convenient for specifying how to translate the\n resource into each of its available formats.\n\u003c/p\u003e\u003cpre\u003e maybe render406Error renderResource $ parseAccepts header \u003e\u003e= mapQuality\n     [ (\"text/html\",        asHtml)\n     , (\"application/json\", asJson)\n     ]\n\u003c/pre\u003e",
          "module": "Network.HTTP.Media",
          "name": "mapAccept",
          "package": "http-media",
          "signature": "[(a, b)]-\u003e [Quality a]-\u003e Maybe b",
          "type": "function"
        },
        "index": {
          "description": "The equivalent of matchAccept above except the resulting choice is mapped to another value Convenient for specifying how to translate the resource into each of its available formats maybe render406Error renderResource parseAccepts header mapQuality text html asHtml application json asJson",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "mapAccept",
          "normalized": "[(a,b)]-\u003e[Quality a]-\u003eMaybe b",
          "package": "http-media",
          "partial": "Accept",
          "signature": "[(a,b)]-\u003e[Quality a]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:mapAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent of \u003ccode\u003e\u003ca\u003ematchContent\u003c/a\u003e\u003c/code\u003e above, except the resulting choice is\n mapped to another value.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media",
          "name": "mapContent",
          "package": "http-media",
          "signature": "a-\u003e [(a, b)]-\u003e Maybe b",
          "type": "function"
        },
        "index": {
          "description": "The equivalent of matchContent above except the resulting choice is mapped to another value",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "mapContent",
          "normalized": "a-\u003e[(a,b)]-\u003eMaybe b",
          "package": "http-media",
          "partial": "Content",
          "signature": "a-\u003e[(a,b)]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:mapContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a list of server-side resource options against a quality-marked\n list of client-side preferences. A result of \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that nothing\n matched (which should indicate a 406 error). If two or more results arise\n with the same quality level and specificity, then the first one in the\n server list is chosen.\n\u003c/p\u003e\u003cp\u003eThe use of the \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e type class allows the application of either\n \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e for the standard Accept header or \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e for any other\n Accept header which can be marked with a quality value. The standard\n application of this function for \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e should be in conjunction with\n \u003ccode\u003eparseAccepts\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e parseAccepts header \u003e\u003e= matchQuality resourceTypeOptions\n\u003c/pre\u003e\u003cp\u003eFor more information on the matching process see RFC 2616, section 14.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media",
          "name": "matchAccept",
          "package": "http-media",
          "signature": "[a]-\u003e [Quality a]-\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "Matches list of server-side resource options against quality-marked list of client-side preferences result of Nothing means that nothing matched which should indicate error If two or more results arise with the same quality level and specificity then the first one in the server list is chosen The use of the Match type class allows the application of either MediaType for the standard Accept header or ByteString for any other Accept header which can be marked with quality value The standard application of this function for MediaType should be in conjunction with parseAccepts parseAccepts header matchQuality resourceTypeOptions For more information on the matching process see RFC section",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "matchAccept",
          "normalized": "[a]-\u003e[Quality a]-\u003eMaybe a",
          "package": "http-media",
          "partial": "Accept",
          "signature": "[a]-\u003e[Quality a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:matchAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a list of server-side parsing options against a the client-side\n content value. A result of \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means that nothing matched (which\n should indicate a 415 error).\n\u003c/p\u003e\u003cp\u003eAs with the Accept parsing, he use of the \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e type class allows the\n application of either \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media",
          "name": "matchContent",
          "package": "http-media",
          "signature": "a-\u003e [a]-\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "Matches list of server-side parsing options against the client-side content value result of Nothing means that nothing matched which should indicate error As with the Accept parsing he use of the Match type class allows the application of either MediaType or ByteString",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "matchContent",
          "normalized": "a-\u003e[a]-\u003eMaybe a",
          "package": "http-media",
          "partial": "Content",
          "signature": "a-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:matchContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates whether either the left argument matches the right one\n (order may be important).\n\u003c/p\u003e",
          "module": "Network.HTTP.Media",
          "name": "matches",
          "package": "http-media",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Network-HTTP-Media-Match.html#matches",
          "type": "method"
        },
        "index": {
          "description": "Evaluates whether either the left argument matches the right one order may be important",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "matches",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "http-media",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates whether the left argument is more specific than the right.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media",
          "name": "moreSpecificThan",
          "package": "http-media",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Network-HTTP-Media-Match.html#moreSpecificThan",
          "type": "method"
        },
        "index": {
          "description": "Evaluates whether the left argument is more specific than the right",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "moreSpecificThan",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "http-media",
          "partial": "Specific Than",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:moreSpecificThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a full Accept header into a list of quality-valued media types.\n\u003c/p\u003e",
          "module": "Network.HTTP.Media",
          "name": "parseAccept",
          "package": "http-media",
          "signature": "ByteString -\u003e Maybe [Quality MediaType]",
          "source": "src/Network-HTTP-Media.html#parseAccept",
          "type": "function"
        },
        "index": {
          "description": "Parses full Accept header into list of quality-valued media types",
          "hierarchy": "Network HTTP Media",
          "module": "Network.HTTP.Media",
          "name": "parseAccept",
          "normalized": "ByteString-\u003eMaybe[Quality MediaType]",
          "package": "http-media",
          "partial": "Accept",
          "signature": "ByteString-\u003eMaybe[Quality MediaType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-media/docs/Network-HTTP-Media.html#v:parseAccept"
      }
    }
  ]
]