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
        "word": "download-curl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA binding to curl, an efficient, high level library for\n retrieving files using Uniform Resource Locators (URLs).\n\u003c/p\u003e\u003cp\u003eContent may be retrieved as a lazy \u003ca\u003eByteString\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eError handling is encapsulated in the \u003ca\u003eEither\u003c/a\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curl.Download.Lazy",
          "name": "Lazy",
          "package": "download-curl",
          "source": "src/Network-Curl-Download-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "binding to curl an efficient high level library for retrieving files using Uniform Resource Locators URLs Content may be retrieved as lazy ByteString Error handling is encapsulated in the Either type",
          "hierarchy": "Network Curl Download Lazy",
          "module": "Network.Curl.Download.Lazy",
          "name": "Lazy",
          "package": "download-curl",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload content specified by a url using curl, returning the\n content as a lazy \u003ca\u003eByteString\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf an error occurs, \u003ca\u003eLeft\u003c/a\u003e is returned, with a\n protocol-specific error string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openLazyURI \"http://haskell.org\"\n\u003c/pre\u003e",
          "module": "Network.Curl.Download.Lazy",
          "name": "openLazyURI",
          "package": "download-curl",
          "signature": "String -\u003e IO (Either String ByteString)",
          "source": "src/Network-Curl-Download-Lazy.html#openLazyURI",
          "type": "function"
        },
        "index": {
          "description": "Download content specified by url using curl returning the content as lazy ByteString If an error occurs Left is returned with protocol-specific error string Examples openLazyURI http haskell.org",
          "hierarchy": "Network Curl Download Lazy",
          "module": "Network.Curl.Download.Lazy",
          "name": "openLazyURI",
          "normalized": "String-\u003eIO(Either String ByteString)",
          "package": "download-curl",
          "partial": "Lazy URI",
          "signature": "String-\u003eIO(Either String ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download-Lazy.html#v:openLazyURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike openURI, but takes curl options.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openLazyURIWithOpts [CurlPost True] \"http://haskell.org\"\n\u003c/pre\u003e",
          "module": "Network.Curl.Download.Lazy",
          "name": "openLazyURIWithOpts",
          "package": "download-curl",
          "signature": "[CurlOption] -\u003e String -\u003e IO (Either String ByteString)",
          "source": "src/Network-Curl-Download-Lazy.html#openLazyURIWithOpts",
          "type": "function"
        },
        "index": {
          "description": "Like openURI but takes curl options Examples openLazyURIWithOpts CurlPost True http haskell.org",
          "hierarchy": "Network Curl Download Lazy",
          "module": "Network.Curl.Download.Lazy",
          "name": "openLazyURIWithOpts",
          "normalized": "[CurlOption]-\u003eString-\u003eIO(Either String ByteString)",
          "package": "download-curl",
          "partial": "Lazy URIWith Opts",
          "signature": "[CurlOption]-\u003eString-\u003eIO(Either String ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download-Lazy.html#v:openLazyURIWithOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA binding to curl, an efficient, high level library for\n retrieving files using Uniform Resource Locators (URLs).\n\u003c/p\u003e\u003cp\u003eContent may be retrieved as a strings, \u003ca\u003eByteString\u003c/a\u003e or parsed\n as HTML tags, XML or RSS and Atom feeds.\n\u003c/p\u003e\u003cp\u003eError handling is encapsulated in the \u003ca\u003eEither\u003c/a\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Curl.Download",
          "name": "Download",
          "package": "download-curl",
          "source": "src/Network-Curl-Download.html",
          "type": "module"
        },
        "index": {
          "description": "binding to curl an efficient high level library for retrieving files using Uniform Resource Locators URLs Content may be retrieved as strings ByteString or parsed as HTML tags XML or RSS and Atom feeds Error handling is encapsulated in the Either type",
          "hierarchy": "Network Curl Download",
          "module": "Network.Curl.Download",
          "name": "Download",
          "package": "download-curl",
          "partial": "Download",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload the content as for \u003ca\u003eopenURI\u003c/a\u003e, but return it as parsed RSS\n or Atom content, using the feed library parser.\n\u003c/p\u003e",
          "module": "Network.Curl.Download",
          "name": "openAsFeed",
          "package": "download-curl",
          "signature": "String -\u003e IO (Either String Feed)",
          "source": "src/Network-Curl-Download.html#openAsFeed",
          "type": "function"
        },
        "index": {
          "description": "Download the content as for openURI but return it as parsed RSS or Atom content using the feed library parser",
          "hierarchy": "Network Curl Download",
          "module": "Network.Curl.Download",
          "name": "openAsFeed",
          "normalized": "String-\u003eIO(Either String Feed)",
          "package": "download-curl",
          "partial": "As Feed",
          "signature": "String-\u003eIO(Either String Feed)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openAsFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload the content as for \u003ca\u003eopenURI\u003c/a\u003e, but return it as a list of\n parsed tags using the tagsoup html parser.\n\u003c/p\u003e",
          "module": "Network.Curl.Download",
          "name": "openAsTags",
          "package": "download-curl",
          "signature": "String -\u003e IO (Either String [Tag String])",
          "source": "src/Network-Curl-Download.html#openAsTags",
          "type": "function"
        },
        "index": {
          "description": "Download the content as for openURI but return it as list of parsed tags using the tagsoup html parser",
          "hierarchy": "Network Curl Download",
          "module": "Network.Curl.Download",
          "name": "openAsTags",
          "normalized": "String-\u003eIO(Either String[Tag String])",
          "package": "download-curl",
          "partial": "As Tags",
          "signature": "String-\u003eIO(Either String[Tag String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openAsTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload the content as for \u003ca\u003eopenURI\u003c/a\u003e, but return it as parsed XML,\n using the xml-light parser.\n\u003c/p\u003e",
          "module": "Network.Curl.Download",
          "name": "openAsXML",
          "package": "download-curl",
          "signature": "String -\u003e IO (Either String [Content])",
          "source": "src/Network-Curl-Download.html#openAsXML",
          "type": "function"
        },
        "index": {
          "description": "Download the content as for openURI but return it as parsed XML using the xml-light parser",
          "hierarchy": "Network Curl Download",
          "module": "Network.Curl.Download",
          "name": "openAsXML",
          "normalized": "String-\u003eIO(Either String[Content])",
          "package": "download-curl",
          "partial": "As XML",
          "signature": "String-\u003eIO(Either String[Content])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openAsXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload content specified by a url using curl, returning the\n content as a strict \u003ca\u003eByteString\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf an error occurs, \u003ca\u003eLeft\u003c/a\u003e is returned, with a\n protocol-specific error string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openURI \"http://haskell.org\"\n\u003c/pre\u003e",
          "module": "Network.Curl.Download",
          "name": "openURI",
          "package": "download-curl",
          "signature": "String -\u003e IO (Either String ByteString)",
          "source": "src/Network-Curl-Download.html#openURI",
          "type": "function"
        },
        "index": {
          "description": "Download content specified by url using curl returning the content as strict ByteString If an error occurs Left is returned with protocol-specific error string Examples openURI http haskell.org",
          "hierarchy": "Network Curl Download",
          "module": "Network.Curl.Download",
          "name": "openURI",
          "normalized": "String-\u003eIO(Either String ByteString)",
          "package": "download-curl",
          "partial": "URI",
          "signature": "String-\u003eIO(Either String ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike openURI, but returns the result as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openURIString \"http://haskell.org\"\n\u003c/pre\u003e",
          "module": "Network.Curl.Download",
          "name": "openURIString",
          "package": "download-curl",
          "signature": "String -\u003e IO (Either String String)",
          "source": "src/Network-Curl-Download.html#openURIString",
          "type": "function"
        },
        "index": {
          "description": "Like openURI but returns the result as String Examples openURIString http haskell.org",
          "hierarchy": "Network Curl Download",
          "module": "Network.Curl.Download",
          "name": "openURIString",
          "normalized": "String-\u003eIO(Either String String)",
          "package": "download-curl",
          "partial": "URIString",
          "signature": "String-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openURIString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike openURI, but takes curl options.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openURIWithOpts [CurlPost True] \"http://haskell.org\"\n\u003c/pre\u003e",
          "module": "Network.Curl.Download",
          "name": "openURIWithOpts",
          "package": "download-curl",
          "signature": "[CurlOption] -\u003e String -\u003e IO (Either String ByteString)",
          "source": "src/Network-Curl-Download.html#openURIWithOpts",
          "type": "function"
        },
        "index": {
          "description": "Like openURI but takes curl options Examples openURIWithOpts CurlPost True http haskell.org",
          "hierarchy": "Network Curl Download",
          "module": "Network.Curl.Download",
          "name": "openURIWithOpts",
          "normalized": "[CurlOption]-\u003eString-\u003eIO(Either String ByteString)",
          "package": "download-curl",
          "partial": "URIWith Opts",
          "signature": "[CurlOption]-\u003eString-\u003eIO(Either String ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/download-curl/docs/Network-Curl-Download.html#v:openURIWithOpts"
      }
    }
  ]
]