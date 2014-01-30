[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/apache-md5/docs/Data-Digest-ApacheMD5.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApacheMD5 is one of the hash algorithms used by Apache HTTP server for basic\n authentication. It is Apache specific, but e.g. nginx supports this\n algorithm since version 1.0.3\n \u003ca\u003ehttp://wiki.nginx.org/HttpAuthBasicModule#auth_basic_user_file\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis is a naive implementation that doesn't aim for high speed, but to be\n reasonably fast it uses \u003ccode\u003eMD5()\u003c/code\u003e function from OpenSSL library so during\n compilation you'll nead to have it installed including header files.\n Many Linux distributions have separate dev packages for this.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.ApacheMD5",
        "fct-package": "apache-md5",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-ApacheMD5.html",
        "fct-type": "module",
        "title": "ApacheMD5"
      },
      "index": {
        "description": "ApacheMD5 is one of the hash algorithms used by Apache HTTP server for basic authentication It is Apache specific but e.g nginx supports this algorithm since version http wiki.nginx.org HttpAuthBasicModule auth basic user file This is naive implementation that doesn aim for high speed but to be reasonably fast it uses MD5 function from OpenSSL library so during compilation you ll nead to have it installed including header files Many Linux distributions have separate dev packages for this",
        "hierarchy": "Data Digest ApacheMD5",
        "module": "Data.Digest.ApacheMD5",
        "name": "ApacheMD5",
        "normalized": "",
        "package": "apache-md5",
        "partial": "Apache MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/apache-md5/docs/Data-Digest-ApacheMD5.html#v:alpha64",
      "description": {
        "fct-descr": "\u003cp\u003eAlphabet used by \u003ccode\u003e\u003ca\u003eencode64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.ApacheMD5",
        "fct-package": "apache-md5",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Digest-ApacheMD5.html#alpha64",
        "fct-type": "function",
        "title": "alpha64"
      },
      "index": {
        "description": "Alphabet used by encode64",
        "hierarchy": "Data Digest ApacheMD5",
        "module": "Data.Digest.ApacheMD5",
        "name": "alpha64",
        "normalized": "",
        "package": "apache-md5",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/apache-md5/docs/Data-Digest-ApacheMD5.html#v:apacheMD5",
      "description": {
        "fct-descr": "\u003cp\u003eTaking password and salt this function produces resulting ApacheMD5 hash\n which is already base 64 encoded.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.ApacheMD5",
        "fct-package": "apache-md5",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Data-Digest-ApacheMD5.html#apacheMD5",
        "fct-type": "function",
        "title": "apacheMD5"
      },
      "index": {
        "description": "Taking password and salt this function produces resulting ApacheMD5 hash which is already base encoded",
        "hierarchy": "Data Digest ApacheMD5",
        "module": "Data.Digest.ApacheMD5",
        "name": "apacheMD5",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "apache-md5",
        "partial": "MD",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/apache-md5/docs/Data-Digest-ApacheMD5.html#v:apacheMD5-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRaw Apache MD5 implementation that is parametrized by MD5 implementation\n and doesn't encode result in to base 64.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.ApacheMD5",
        "fct-package": "apache-md5",
        "fct-signature": "(ByteString -\u003e ByteString)-\u003e ByteString-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "apacheMD5'"
      },
      "index": {
        "description": "Raw Apache MD5 implementation that is parametrized by MD5 implementation and doesn encode result in to base",
        "hierarchy": "Data Digest ApacheMD5",
        "module": "Data.Digest.ApacheMD5",
        "name": "apacheMD5'",
        "normalized": "(ByteString-\u003eByteString)-\u003eByteString-\u003eByteString-\u003eByteString",
        "package": "apache-md5",
        "partial": "MD",
        "signature": "(ByteString-\u003eByteString)-\u003eByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/apache-md5/docs/Data-Digest-ApacheMD5.html#v:encode64",
      "description": {
        "fct-module": "Data.Digest.ApacheMD5",
        "fct-package": "apache-md5",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-Digest-ApacheMD5.html#encode64",
        "fct-type": "function",
        "title": "encode64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest ApacheMD5",
        "module": "Data.Digest.ApacheMD5",
        "name": "encode64",
        "normalized": "ByteString-\u003eByteString",
        "package": "apache-md5",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/apache-md5/docs/Data-Digest-ApacheMD5.html#v:md5DigestLength",
      "description": {
        "fct-module": "Data.Digest.ApacheMD5",
        "fct-package": "apache-md5",
        "fct-signature": "Int",
        "fct-source": "src/Data-Digest-ApacheMD5-Internal.html#md5DigestLength",
        "fct-type": "function",
        "title": "md5DigestLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest ApacheMD5",
        "module": "Data.Digest.ApacheMD5",
        "name": "md5DigestLength",
        "normalized": "",
        "package": "apache-md5",
        "partial": "Digest Length",
        "signature": ""
      }
    }
  }
]