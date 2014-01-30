[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download/docs/Network-Download.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA binding to libdownload, an efficient, high level library for\n retrieving files using Uniform Resource Locators (URLs). This\n provides simple, uniform access to file, FTP and HTTP resources.\n Content may be retrieved as a strings, \u003ca\u003eByteString\u003c/a\u003e or parsed\n as HTML tags, XML or RSS and Atom feeds.\n\u003c/p\u003e\u003cp\u003eError handling is encapsulated in the \u003ca\u003eEither\u003c/a\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Download",
        "fct-package": "download",
        "fct-signature": "module",
        "fct-source": "src/Network-Download.html",
        "fct-type": "module",
        "title": "Download"
      },
      "index": {
        "description": "binding to libdownload an efficient high level library for retrieving files using Uniform Resource Locators URLs This provides simple uniform access to file FTP and HTTP resources Content may be retrieved as strings ByteString or parsed as HTML tags XML or RSS and Atom feeds Error handling is encapsulated in the Either type",
        "hierarchy": "Network Download",
        "module": "Network.Download",
        "name": "Download",
        "normalized": "",
        "package": "download",
        "partial": "Download",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download/docs/Network-Download.html#v:openAsFeed",
      "description": {
        "fct-descr": "\u003cp\u003eDownload the content as for \u003ca\u003eopenURI\u003c/a\u003e, but return it as parsed RSS\n or Atom content, using the feed library parser.\n\u003c/p\u003e",
        "fct-module": "Network.Download",
        "fct-package": "download",
        "fct-signature": "String -\u003e IO (Either String Feed)",
        "fct-source": "src/Network-Download.html#openAsFeed",
        "fct-type": "function",
        "title": "openAsFeed"
      },
      "index": {
        "description": "Download the content as for openURI but return it as parsed RSS or Atom content using the feed library parser",
        "hierarchy": "Network Download",
        "module": "Network.Download",
        "name": "openAsFeed",
        "normalized": "String-\u003eIO(Either String Feed)",
        "package": "download",
        "partial": "As Feed",
        "signature": "String-\u003eIO(Either String Feed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download/docs/Network-Download.html#v:openAsTags",
      "description": {
        "fct-descr": "\u003cp\u003eDownload the content as for \u003ca\u003eopenURI\u003c/a\u003e, but return it as a list of\n parsed tags using the tagsoup html parser.\n\u003c/p\u003e",
        "fct-module": "Network.Download",
        "fct-package": "download",
        "fct-signature": "String -\u003e IO (Either String [Tag String])",
        "fct-source": "src/Network-Download.html#openAsTags",
        "fct-type": "function",
        "title": "openAsTags"
      },
      "index": {
        "description": "Download the content as for openURI but return it as list of parsed tags using the tagsoup html parser",
        "hierarchy": "Network Download",
        "module": "Network.Download",
        "name": "openAsTags",
        "normalized": "String-\u003eIO(Either String[Tag String])",
        "package": "download",
        "partial": "As Tags",
        "signature": "String-\u003eIO(Either String[Tag String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download/docs/Network-Download.html#v:openAsXML",
      "description": {
        "fct-descr": "\u003cp\u003eDownload the content as for \u003ca\u003eopenURI\u003c/a\u003e, but return it as parsed XML,\n using the xml-light parser.\n\u003c/p\u003e",
        "fct-module": "Network.Download",
        "fct-package": "download",
        "fct-signature": "String -\u003e IO (Either String [Content])",
        "fct-source": "src/Network-Download.html#openAsXML",
        "fct-type": "function",
        "title": "openAsXML"
      },
      "index": {
        "description": "Download the content as for openURI but return it as parsed XML using the xml-light parser",
        "hierarchy": "Network Download",
        "module": "Network.Download",
        "name": "openAsXML",
        "normalized": "String-\u003eIO(Either String[Content])",
        "package": "download",
        "partial": "As XML",
        "signature": "String-\u003eIO(Either String[Content])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download/docs/Network-Download.html#v:openURI",
      "description": {
        "fct-descr": "\u003cp\u003eDownload content specified by url (in RFC1738 form), using either\n FTP, HTTP or file protocols, returning the content as a strict\n \u003ca\u003eByteString\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIf the url is malformed, a \u003ca\u003eLeft\u003c/a\u003e value is returned.\n Similarly, if an error occurs, \u003ca\u003eLeft\u003c/a\u003e is returned, with a\n protocol-specific error string.\n\u003c/p\u003e\u003cp\u003eIf the file protocol is used, documents will be retrieved from the\n local filesystem. If the ftp scheme is used, the FTP protocol\n (RFC959) is used. If no user name or passoword are provided,\n anonymous login, with user name \u003ccode\u003eanonymous\u003c/code\u003e and password \u003ccode\u003eanonymous\u003c/code\u003e\n will be attempted.\n\u003c/p\u003e\u003cp\u003eIf the http method is used, HTTP/1.1 will be used.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openURI \"http://haskell.org\"\n\u003c/pre\u003e",
        "fct-module": "Network.Download",
        "fct-package": "download",
        "fct-signature": "String -\u003e IO (Either String ByteString)",
        "fct-source": "src/Network-Download.html#openURI",
        "fct-type": "function",
        "title": "openURI"
      },
      "index": {
        "description": "Download content specified by url in RFC1738 form using either FTP HTTP or file protocols returning the content as strict ByteString If the url is malformed Left value is returned Similarly if an error occurs Left is returned with protocol-specific error string If the file protocol is used documents will be retrieved from the local filesystem If the ftp scheme is used the FTP protocol RFC959 is used If no user name or passoword are provided anonymous login with user name anonymous and password anonymous will be attempted If the http method is used HTTP will be used Examples openURI http haskell.org",
        "hierarchy": "Network Download",
        "module": "Network.Download",
        "name": "openURI",
        "normalized": "String-\u003eIO(Either String ByteString)",
        "package": "download",
        "partial": "URI",
        "signature": "String-\u003eIO(Either String ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/download/docs/Network-Download.html#v:openURIString",
      "description": {
        "fct-descr": "\u003cp\u003eLike openURI, but returns the result as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e openURIString \"http://haskell.org\"\n\u003c/pre\u003e",
        "fct-module": "Network.Download",
        "fct-package": "download",
        "fct-signature": "String -\u003e IO (Either String String)",
        "fct-source": "src/Network-Download.html#openURIString",
        "fct-type": "function",
        "title": "openURIString"
      },
      "index": {
        "description": "Like openURI but returns the result as String Examples openURIString http haskell.org",
        "hierarchy": "Network Download",
        "module": "Network.Download",
        "name": "openURIString",
        "normalized": "String-\u003eIO(Either String String)",
        "package": "download",
        "partial": "URIString",
        "signature": "String-\u003eIO(Either String String)"
      }
    }
  }
]