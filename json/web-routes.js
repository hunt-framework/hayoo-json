[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversions between raw pathinfos and decoded path segments.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Web.Routes.Base",
        "fct-package": "web-routes",
        "fct-signature": "module",
        "fct-source": "src/Web-Routes-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Conversions between raw pathinfos and decoded path segments",
        "hierarchy": "Web Routes Base",
        "module": "Web.Routes.Base",
        "name": "Base",
        "normalized": "",
        "package": "web-routes",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Base.html#v:decodePathInfo",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the inverse operation of \u003ccode\u003e\u003ca\u003eencodePathInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn particular, this function:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Splits a string at each occurence of a forward slash.\n\u003c/li\u003e\u003cli\u003e Percent-decodes the individual pieces.\n\u003c/li\u003e\u003cli\u003e UTF-8 decodes the resulting data.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis utilizes \u003ccode\u003e\u003ca\u003edecodeString\u003c/a\u003e\u003c/code\u003e from the utf8-string library, and thus all UTF-8\ndecoding errors are handled as per that library.\n\u003c/p\u003e\u003cp\u003eIn general, you will want to strip the leading slash from a pathinfo before\npassing it to this function. For example:\n\u003c/p\u003e\u003cpre\u003e decodePathInfo \\\"\\\"\n\u003c/pre\u003e\u003cp\u003e[]\n\u003c/p\u003e\u003cpre\u003e decodePathInfo \\\"\\/\\\"\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\"\"\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eNote that while function accepts a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value, it is expected that \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e will only contain the subset of characters which are allowed to appear in a URL.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Base",
        "fct-package": "web-routes",
        "fct-signature": "ByteString -\u003e [Text]",
        "fct-source": "src/Web-Routes-Base.html#decodePathInfo",
        "fct-type": "function",
        "title": "decodePathInfo"
      },
      "index": {
        "description": "Performs the inverse operation of encodePathInfo In particular this function Splits string at each occurence of forward slash Percent-decodes the individual pieces UTF-8 decodes the resulting data This utilizes decodeString from the utf8-string library and thus all UTF-8 decoding errors are handled as per that library In general you will want to strip the leading slash from pathinfo before passing it to this function For example decodePathInfo decodePathInfo Note that while function accepts Text value it is expected that Text will only contain the subset of characters which are allowed to appear in URL",
        "hierarchy": "Web Routes Base",
        "module": "Web.Routes.Base",
        "name": "decodePathInfo",
        "normalized": "ByteString-\u003e[Text]",
        "package": "web-routes",
        "partial": "Path Info",
        "signature": "ByteString-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Base.html#v:encodePathInfo",
      "description": {
        "fct-descr": "\u003cp\u003eEncodes a list of path segments into a valid URL fragment.\n\u003c/p\u003e\u003cp\u003eThis function takes the following three steps:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e UTF-8 encodes the characters.\n\u003c/li\u003e\u003cli\u003e Performs percent encoding on all unreserved characters, as well as :@=+$,\n\u003c/li\u003e\u003cli\u003e Intercalates with a slash.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e encodePathInfo [\\\"foo\\\", \\\"bar\\\", \\\"baz\\\"]\n\u003c/pre\u003e\u003cp\u003e\"foo/bar/baz\"\n\u003c/p\u003e\u003cpre\u003e encodePathInfo [\\\"foo bar\\\", \\\"baz\\/bin\\\"]\n\u003c/pre\u003e\u003cp\u003e\"foo%20bar/baz%2Fbin\"\n\u003c/p\u003e\u003cpre\u003e encodePathInfo [\\\"&#1513;&#1500;&#1493;&#1501;\\\"]\n\u003c/pre\u003e\u003cp\u003e\"%D7%A9%D7%9C%D7%95%D7%9D\"\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Base",
        "fct-package": "web-routes",
        "fct-signature": "[Text] -\u003e [(Text, Maybe Text)] -\u003e Text",
        "fct-source": "src/Web-Routes-Base.html#encodePathInfo",
        "fct-type": "function",
        "title": "encodePathInfo"
      },
      "index": {
        "description": "Encodes list of path segments into valid URL fragment This function takes the following three steps UTF-8 encodes the characters Performs percent encoding on all unreserved characters as well as Intercalates with slash For example encodePathInfo foo bar baz foo bar baz encodePathInfo foo bar baz bin foo bar baz Fbin encodePathInfo D7 A9 D7 D7 D7",
        "hierarchy": "Web Routes Base",
        "module": "Web.Routes.Base",
        "name": "encodePathInfo",
        "normalized": "[Text]-\u003e[(Text,Maybe Text)]-\u003eText",
        "package": "web-routes",
        "partial": "Path Info",
        "signature": "[Text]-\u003e[(Text,Maybe Text)]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#",
      "description": {
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "module",
        "fct-source": "src/Web-Routes-PathInfo.html",
        "fct-type": "module",
        "title": "PathInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "PathInfo",
        "normalized": "",
        "package": "web-routes",
        "partial": "Path Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#t:Generic",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentable types of kind *.\n This class is derivable in GHC with the DeriveGeneric flag on.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Generic"
      },
      "index": {
        "description": "Representable types of kind This class is derivable in GHC with the DeriveGeneric flag on",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "Generic",
        "normalized": "",
        "package": "web-routes",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#t:PathInfo",
      "description": {
        "fct-descr": "\u003cp\u003eSimple parsing and rendering for a type to and from URL path segments.\n\u003c/p\u003e\u003cp\u003eIf you're using GHC 7.2 or later, you can use \u003ccode\u003eDeriveGeneric\u003c/code\u003e to derive\n instances of this class:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n data Sitemap = Home | BlogPost Int deriving Generic\n instance PathInfo Sitemap\n\u003c/pre\u003e\u003cp\u003eThis results in the following instance:\n\u003c/p\u003e\u003cpre\u003e instance PathInfo Sitemap where\n     toPathSegments Home = [\"home\"]\n     toPathSegments (BlogPost x) = \"blog-post\" : toPathSegments x\n     fromPathSegments = Home \u003c$ segment \"home\"\n                    \u003c|\u003e BlogPost \u003c$ segment \"blog-post\" \u003c*\u003e fromPathSegments\n\u003c/pre\u003e\u003cp\u003eAnd here it is in action:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoPathInfo (BlogPost 123)\n\u003c/code\u003e\u003c/strong\u003e\"/blog-post/123\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromPathInfo \"/blog-post/123\" :: Either String Sitemap\n\u003c/code\u003e\u003c/strong\u003eRight (BlogPost 123)\n\u003c/pre\u003e\u003cp\u003eTo instead derive instances using \u003ccode\u003eTemplateHaskell\u003c/code\u003e, see\n \u003ca\u003eweb-routes-th\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "class",
        "fct-source": "src/Web-Routes-PathInfo.html#PathInfo",
        "fct-type": "class",
        "title": "PathInfo"
      },
      "index": {
        "description": "Simple parsing and rendering for type to and from URL path segments If you re using GHC or later you can use DeriveGeneric to derive instances of this class LANGUAGE DeriveGeneric data Sitemap Home BlogPost Int deriving Generic instance PathInfo Sitemap This results in the following instance instance PathInfo Sitemap where toPathSegments Home home toPathSegments BlogPost blog-post toPathSegments fromPathSegments Home segment home BlogPost segment blog-post fromPathSegments And here it is in action toPathInfo BlogPost blog-post fromPathInfo blog-post Either String Sitemap Right BlogPost To instead derive instances using TemplateHaskell see web-routes-th",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "PathInfo",
        "normalized": "",
        "package": "web-routes",
        "partial": "Path Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#t:URLParser",
      "description": {
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "type",
        "fct-source": "src/Web-Routes-PathInfo.html#URLParser",
        "fct-type": "type",
        "title": "URLParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "URLParser",
        "normalized": "",
        "package": "web-routes",
        "partial": "URLParser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:anySegment",
      "description": {
        "fct-descr": "\u003cp\u003ematch on any string\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "URLParser Text",
        "fct-source": "src/Web-Routes-PathInfo.html#anySegment",
        "fct-type": "function",
        "title": "anySegment"
      },
      "index": {
        "description": "match on any string",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "anySegment",
        "normalized": "",
        "package": "web-routes",
        "partial": "Segment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:fromPathInfo",
      "description": {
        "fct-descr": "\u003cp\u003eparse a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003eurl\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ereturns \u003ccode\u003eLeft \u003ca\u003eparse error\u003c/a\u003e\u003c/code\u003e on failure\n\u003c/p\u003e\u003cp\u003ereturns \u003ccode\u003eRight url\u003c/code\u003e on success\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "ByteString -\u003e Either String url",
        "fct-source": "src/Web-Routes-PathInfo.html#fromPathInfo",
        "fct-type": "function",
        "title": "fromPathInfo"
      },
      "index": {
        "description": "parse String into url using PathInfo returns Left parse error on failure returns Right url on success",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "fromPathInfo",
        "normalized": "ByteString-\u003eEither String a",
        "package": "web-routes",
        "partial": "Path Info",
        "signature": "ByteString-\u003eEither String url"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:fromPathSegments",
      "description": {
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "URLParser url",
        "fct-source": "src/Web-Routes-PathInfo.html#fromPathSegments",
        "fct-type": "method",
        "title": "fromPathSegments"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "fromPathSegments",
        "normalized": "",
        "package": "web-routes",
        "partial": "Path Segments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:mkSitePI",
      "description": {
        "fct-descr": "\u003cp\u003eturn a routing function into a \u003ccode\u003e\u003ca\u003eSite\u003c/a\u003e\u003c/code\u003e value using the \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e class\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "((url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e a)-\u003e Site url a",
        "fct-type": "function",
        "title": "mkSitePI"
      },
      "index": {
        "description": "turn routing function into Site value using the PathInfo class",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "mkSitePI",
        "normalized": "((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eb)-\u003eSite a b",
        "package": "web-routes",
        "partial": "Site PI",
        "signature": "((url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003ea)-\u003eSite url a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:pToken",
      "description": {
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "tok -\u003e (Text -\u003e Maybe a) -\u003e URLParser a",
        "fct-source": "src/Web-Routes-PathInfo.html#pToken",
        "fct-type": "function",
        "title": "pToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "pToken",
        "normalized": "a-\u003e(Text-\u003eMaybe b)-\u003eURLParser b",
        "package": "web-routes",
        "partial": "Token",
        "signature": "tok-\u003e(Text-\u003eMaybe a)-\u003eURLParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:parseSegments",
      "description": {
        "fct-descr": "\u003cp\u003erun a \u003ccode\u003e\u003ca\u003eURLParser\u003c/a\u003e\u003c/code\u003e on a list of path segments\n\u003c/p\u003e\u003cp\u003ereturns \u003ccode\u003eLeft \u003ca\u003eparse error\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e\u003cp\u003ereturns \u003ccode\u003eRight a\u003c/code\u003e on success\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "URLParser a -\u003e [Text] -\u003e Either String a",
        "fct-source": "src/Web-Routes-PathInfo.html#parseSegments",
        "fct-type": "function",
        "title": "parseSegments"
      },
      "index": {
        "description": "run URLParser on list of path segments returns Left parse error on failure returns Right on success",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "parseSegments",
        "normalized": "URLParser a-\u003e[Text]-\u003eEither String a",
        "package": "web-routes",
        "partial": "Segments",
        "signature": "URLParser a-\u003e[Text]-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:patternParse",
      "description": {
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "([Text] -\u003e Either String a) -\u003e URLParser a",
        "fct-source": "src/Web-Routes-PathInfo.html#patternParse",
        "fct-type": "function",
        "title": "patternParse"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "patternParse",
        "normalized": "([Text]-\u003eEither String a)-\u003eURLParser a",
        "package": "web-routes",
        "partial": "Parse",
        "signature": "([Text]-\u003eEither String a)-\u003eURLParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:segment",
      "description": {
        "fct-descr": "\u003cp\u003ematch on a specific string\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "Text -\u003e URLParser Text",
        "fct-source": "src/Web-Routes-PathInfo.html#segment",
        "fct-type": "function",
        "title": "segment"
      },
      "index": {
        "description": "match on specific string",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "segment",
        "normalized": "Text-\u003eURLParser Text",
        "package": "web-routes",
        "partial": "",
        "signature": "Text-\u003eURLParser Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:showParseError",
      "description": {
        "fct-descr": "\u003cp\u003eshow Parsec \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e using terms that relevant to parsing a url\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "ParseError -\u003e String",
        "fct-source": "src/Web-Routes-PathInfo.html#showParseError",
        "fct-type": "function",
        "title": "showParseError"
      },
      "index": {
        "description": "show Parsec ParseError using terms that relevant to parsing url",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "showParseError",
        "normalized": "ParseError-\u003eString",
        "package": "web-routes",
        "partial": "Parse Error",
        "signature": "ParseError-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:stripOverlap",
      "description": {
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Web-Routes-PathInfo.html#stripOverlap",
        "fct-type": "function",
        "title": "stripOverlap"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "stripOverlap",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "web-routes",
        "partial": "Overlap",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:stripOverlapBS",
      "description": {
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Web-Routes-PathInfo.html#stripOverlapBS",
        "fct-type": "function",
        "title": "stripOverlapBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "stripOverlapBS",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "web-routes",
        "partial": "Overlap BS",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:stripOverlapText",
      "description": {
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "Text -\u003e Text -\u003e Text",
        "fct-source": "src/Web-Routes-PathInfo.html#stripOverlapText",
        "fct-type": "function",
        "title": "stripOverlapText"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "stripOverlapText",
        "normalized": "Text-\u003eText-\u003eText",
        "package": "web-routes",
        "partial": "Overlap Text",
        "signature": "Text-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:toPathInfo",
      "description": {
        "fct-descr": "\u003cp\u003econvert url into the path info portion of a URL\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "url -\u003e Text",
        "fct-source": "src/Web-Routes-PathInfo.html#toPathInfo",
        "fct-type": "function",
        "title": "toPathInfo"
      },
      "index": {
        "description": "convert url into the path info portion of URL",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "toPathInfo",
        "normalized": "a-\u003eText",
        "package": "web-routes",
        "partial": "Path Info",
        "signature": "url-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:toPathInfoParams",
      "description": {
        "fct-descr": "\u003cp\u003econvert url + params into the path info portion of a URL + a query string\n\u003c/p\u003e",
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "url-\u003e [(Text, Maybe Text)]-\u003e Text",
        "fct-type": "function",
        "title": "toPathInfoParams"
      },
      "index": {
        "description": "convert url params into the path info portion of URL query string",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "toPathInfoParams",
        "normalized": "a-\u003e[(Text,Maybe Text)]-\u003eText",
        "package": "web-routes",
        "partial": "Path Info Params",
        "signature": "url-\u003e[(Text,Maybe Text)]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:toPathSegments",
      "description": {
        "fct-module": "Web.Routes.PathInfo",
        "fct-package": "web-routes",
        "fct-signature": "url -\u003e [Text]",
        "fct-source": "src/Web-Routes-PathInfo.html#toPathSegments",
        "fct-type": "method",
        "title": "toPathSegments"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes PathInfo",
        "module": "Web.Routes.PathInfo",
        "name": "toPathSegments",
        "normalized": "a-\u003e[Text]",
        "package": "web-routes",
        "partial": "Path Segments",
        "signature": "url-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-QuickCheck.html#",
      "description": {
        "fct-module": "Web.Routes.QuickCheck",
        "fct-package": "web-routes",
        "fct-signature": "module",
        "fct-source": "src/Web-Routes-QuickCheck.html",
        "fct-type": "module",
        "title": "QuickCheck"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes QuickCheck",
        "module": "Web.Routes.QuickCheck",
        "name": "QuickCheck",
        "normalized": "",
        "package": "web-routes",
        "partial": "Quick Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-QuickCheck.html#v:pathInfoInverse_prop",
      "description": {
        "fct-descr": "\u003cp\u003etest that a \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e instance is valid\n\u003c/p\u003e\u003cp\u003eGenerates \u003ccode\u003eArbitrary\u003c/code\u003e \u003ccode\u003eurl\u003c/code\u003e values and checks that:\n\u003c/p\u003e\u003cp\u003efromPathInfo . toPathInfo == id\n\u003c/p\u003e",
        "fct-module": "Web.Routes.QuickCheck",
        "fct-package": "web-routes",
        "fct-signature": "url -\u003e Bool",
        "fct-source": "src/Web-Routes-QuickCheck.html#pathInfoInverse_prop",
        "fct-type": "function",
        "title": "pathInfoInverse_prop"
      },
      "index": {
        "description": "test that PathInfo instance is valid Generates Arbitrary url values and checks that fromPathInfo toPathInfo id",
        "hierarchy": "Web Routes QuickCheck",
        "module": "Web.Routes.QuickCheck",
        "name": "pathInfoInverse_prop",
        "normalized": "a-\u003eBool",
        "package": "web-routes",
        "partial": "Info Inverse",
        "signature": "url-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of the \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e monad transformer\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "module",
        "fct-source": "src/Web-Routes-RouteT.html",
        "fct-type": "module",
        "title": "RouteT"
      },
      "index": {
        "description": "Declaration of the RouteT monad transformer",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "RouteT",
        "normalized": "",
        "package": "web-routes",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#t:MonadRoute",
      "description": {
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "class",
        "fct-source": "src/Web-Routes-RouteT.html#MonadRoute",
        "fct-type": "class",
        "title": "MonadRoute"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "MonadRoute",
        "normalized": "",
        "package": "web-routes",
        "partial": "Monad Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#t:RouteT",
      "description": {
        "fct-descr": "\u003cp\u003emonad transformer for generating URLs\n\u003c/p\u003e",
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "newtype",
        "fct-source": "src/Web-Routes-RouteT.html#RouteT",
        "fct-type": "newtype",
        "title": "RouteT"
      },
      "index": {
        "description": "monad transformer for generating URLs",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "RouteT",
        "normalized": "",
        "package": "web-routes",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:RouteT",
      "description": {
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "RouteT",
        "fct-source": "src/Web-Routes-RouteT.html#RouteT",
        "fct-type": "function",
        "title": "RouteT"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "RouteT",
        "normalized": "",
        "package": "web-routes",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:askRouteFn",
      "description": {
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "m (URL m -\u003e [(Text, Maybe Text)] -\u003e Text)",
        "fct-source": "src/Web-Routes-RouteT.html#askRouteFn",
        "fct-type": "method",
        "title": "askRouteFn"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "askRouteFn",
        "normalized": "a(URL a-\u003e[(Text,Maybe Text)]-\u003eText)",
        "package": "web-routes",
        "partial": "Route Fn",
        "signature": "m(URL m-\u003e[(Text,Maybe Text)]-\u003eText)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:askRouteT",
      "description": {
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "RouteT url m (url -\u003e [(Text, Maybe Text)] -\u003e Text)",
        "fct-source": "src/Web-Routes-RouteT.html#askRouteT",
        "fct-type": "function",
        "title": "askRouteT"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "askRouteT",
        "normalized": "RouteT a b(a-\u003e[(Text,Maybe Text)]-\u003eText)",
        "package": "web-routes",
        "partial": "Route",
        "signature": "RouteT url m(url-\u003e[(Text,Maybe Text)]-\u003eText)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:liftRouteT",
      "description": {
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "m a -\u003e RouteT url m a",
        "fct-source": "src/Web-Routes-RouteT.html#liftRouteT",
        "fct-type": "function",
        "title": "liftRouteT"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "liftRouteT",
        "normalized": "a b-\u003eRouteT c a b",
        "package": "web-routes",
        "partial": "Route",
        "signature": "m a-\u003eRouteT url m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:mapRouteT",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the computation inside a \u003ccode\u003eRouteT\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "(m a -\u003e n b) -\u003e RouteT url m a -\u003e RouteT url n b",
        "fct-source": "src/Web-Routes-RouteT.html#mapRouteT",
        "fct-type": "function",
        "title": "mapRouteT"
      },
      "index": {
        "description": "Transform the computation inside RouteT",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "mapRouteT",
        "normalized": "(a b-\u003ec d)-\u003eRouteT e a b-\u003eRouteT e c d",
        "package": "web-routes",
        "partial": "Route",
        "signature": "(m a-\u003en b)-\u003eRouteT url m a-\u003eRouteT url n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:nestURL",
      "description": {
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "(url1 -\u003e url2) -\u003e RouteT url1 m a -\u003e RouteT url2 m a",
        "fct-source": "src/Web-Routes-RouteT.html#nestURL",
        "fct-type": "function",
        "title": "nestURL"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "nestURL",
        "normalized": "(a-\u003ea)-\u003eRouteT a b c-\u003eRouteT a b c",
        "package": "web-routes",
        "partial": "URL",
        "signature": "(url-\u003eurl)-\u003eRouteT url m a-\u003eRouteT url m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:runRouteT",
      "description": {
        "fct-descr": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e based route handler to a handler that can be used with the \u003ccode\u003eSite\u003c/code\u003e type\n\u003c/p\u003e\u003cp\u003eNOTE: this function used to be the same as \u003ccode\u003e\u003ca\u003eunRouteT\u003c/a\u003e\u003c/code\u003e. If you want the old behavior, just call \u003ccode\u003e\u003ca\u003eunRouteT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "(url -\u003e RouteT url m a) -\u003e (url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e m a",
        "fct-source": "src/Web-Routes-RouteT.html#runRouteT",
        "fct-type": "function",
        "title": "runRouteT"
      },
      "index": {
        "description": "convert RouteT based route handler to handler that can be used with the Site type NOTE this function used to be the same as unRouteT If you want the old behavior just call unRouteT",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "runRouteT",
        "normalized": "(a-\u003eRouteT a b c)-\u003e(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eb c",
        "package": "web-routes",
        "partial": "Route",
        "signature": "(url-\u003eRouteT url m a)-\u003e(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:showURL",
      "description": {
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "URL m -\u003e m Text",
        "fct-source": "src/Web-Routes-RouteT.html#showURL",
        "fct-type": "function",
        "title": "showURL"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "showURL",
        "normalized": "URL a-\u003ea Text",
        "package": "web-routes",
        "partial": "URL",
        "signature": "URL m-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:showURLParams",
      "description": {
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "URL m -\u003e [(Text, Maybe Text)] -\u003e m Text",
        "fct-source": "src/Web-Routes-RouteT.html#showURLParams",
        "fct-type": "function",
        "title": "showURLParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "showURLParams",
        "normalized": "URL a-\u003e[(Text,Maybe Text)]-\u003ea Text",
        "package": "web-routes",
        "partial": "URLParams",
        "signature": "URL m-\u003e[(Text,Maybe Text)]-\u003em Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:unRouteT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e m a",
        "fct-source": "src/Web-Routes-RouteT.html#RouteT",
        "fct-type": "function",
        "title": "unRouteT"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "unRouteT",
        "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eb c",
        "package": "web-routes",
        "partial": "Route",
        "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:withRouteT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in a modified environment\n\u003c/p\u003e",
        "fct-module": "Web.Routes.RouteT",
        "fct-package": "web-routes",
        "fct-signature": "((url' -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e RouteT url m a -\u003e RouteT url' m a",
        "fct-source": "src/Web-Routes-RouteT.html#withRouteT",
        "fct-type": "function",
        "title": "withRouteT"
      },
      "index": {
        "description": "Execute computation in modified environment",
        "hierarchy": "Web Routes RouteT",
        "module": "Web.Routes.RouteT",
        "name": "withRouteT",
        "normalized": "((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eb-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eRouteT b c d-\u003eRouteT a c d",
        "package": "web-routes",
        "partial": "Route",
        "signature": "((url'-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eRouteT url m a-\u003eRouteT url' m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#",
      "description": {
        "fct-module": "Web.Routes.Site",
        "fct-package": "web-routes",
        "fct-signature": "module",
        "fct-source": "src/Web-Routes-Site.html",
        "fct-type": "module",
        "title": "Site"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes Site",
        "module": "Web.Routes.Site",
        "name": "Site",
        "normalized": "",
        "package": "web-routes",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#t:Site",
      "description": {
        "fct-descr": "\u003cp\u003eA site groups together the three functions necesary to make an application:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A function to convert from the URL type to path segments.\n\u003c/li\u003e\u003cli\u003e A function to convert from path segments to the URL, if possible.\n\u003c/li\u003e\u003cli\u003e A function to return the application for a given URL.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere are two type parameters for Site: the first is the URL datatype, the\nsecond is the application datatype. The application datatype will depend upon\nyour server backend.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Site",
        "fct-package": "web-routes",
        "fct-signature": "data",
        "fct-source": "src/Web-Routes-Site.html#Site",
        "fct-type": "data",
        "title": "Site"
      },
      "index": {
        "description": "site groups together the three functions necesary to make an application function to convert from the URL type to path segments function to convert from path segments to the URL if possible function to return the application for given URL There are two type parameters for Site the first is the URL datatype the second is the application datatype The application datatype will depend upon your server backend",
        "hierarchy": "Web Routes Site",
        "module": "Web.Routes.Site",
        "name": "Site",
        "normalized": "",
        "package": "web-routes",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:Site",
      "description": {
        "fct-module": "Web.Routes.Site",
        "fct-package": "web-routes",
        "fct-signature": "Site",
        "fct-source": "src/Web-Routes-Site.html#Site",
        "fct-type": "function",
        "title": "Site"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes Site",
        "module": "Web.Routes.Site",
        "name": "Site",
        "normalized": "",
        "package": "web-routes",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:formatPathSegments",
      "description": {
        "fct-descr": "\u003cp\u003eThis function must be the inverse of \u003ccode\u003e\u003ca\u003eparsePathSegments\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Site",
        "fct-package": "web-routes",
        "fct-signature": "url -\u003e ([Text], [(Text, Maybe Text)])",
        "fct-source": "src/Web-Routes-Site.html#Site",
        "fct-type": "function",
        "title": "formatPathSegments"
      },
      "index": {
        "description": "This function must be the inverse of parsePathSegments",
        "hierarchy": "Web Routes Site",
        "module": "Web.Routes.Site",
        "name": "formatPathSegments",
        "normalized": "a-\u003e([Text],[(Text,Maybe Text)])",
        "package": "web-routes",
        "partial": "Path Segments",
        "signature": "url-\u003e([Text],[(Text,Maybe Text)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:handleSite",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the appropriate application for a given URL.\n\u003c/p\u003e\u003cp\u003eThe first argument is a function which will give an appropriate\n               URL (as a String) for a URL datatype. This is usually\n               constructed by a combination of \u003ccode\u003e\u003ca\u003eformatPathSegments\u003c/a\u003e\u003c/code\u003e and the\n               prepending of an absolute application root.\n\u003c/p\u003e\u003cp\u003eWell behaving applications should use this function to\n               generating all internal URLs.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Site",
        "fct-package": "web-routes",
        "fct-signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e a",
        "fct-source": "src/Web-Routes-Site.html#Site",
        "fct-type": "function",
        "title": "handleSite"
      },
      "index": {
        "description": "Return the appropriate application for given URL The first argument is function which will give an appropriate URL as String for URL datatype This is usually constructed by combination of formatPathSegments and the prepending of an absolute application root Well behaving applications should use this function to generating all internal URLs",
        "hierarchy": "Web Routes Site",
        "module": "Web.Routes.Site",
        "name": "handleSite",
        "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eb",
        "package": "web-routes",
        "partial": "Site",
        "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:parsePathSegments",
      "description": {
        "fct-descr": "\u003cp\u003eThis function must be the inverse of \u003ccode\u003e\u003ca\u003eformatPathSegments\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Site",
        "fct-package": "web-routes",
        "fct-signature": "[Text] -\u003e Either String url",
        "fct-source": "src/Web-Routes-Site.html#Site",
        "fct-type": "function",
        "title": "parsePathSegments"
      },
      "index": {
        "description": "This function must be the inverse of formatPathSegments",
        "hierarchy": "Web Routes Site",
        "module": "Web.Routes.Site",
        "name": "parsePathSegments",
        "normalized": "[Text]-\u003eEither String a",
        "package": "web-routes",
        "partial": "Path Segments",
        "signature": "[Text]-\u003eEither String url"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:runSite",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the application to handle a given request.\n\u003c/p\u003e\u003cp\u003eNOTE: use \u003ccode\u003e\u003ca\u003edecodePathInfo\u003c/a\u003e\u003c/code\u003e to convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e url to a properly decoded list of path segments\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Site",
        "fct-package": "web-routes",
        "fct-signature": "Text-\u003e Site url a-\u003e [Text]-\u003e Either String a",
        "fct-type": "function",
        "title": "runSite"
      },
      "index": {
        "description": "Retrieve the application to handle given request NOTE use decodePathInfo to convert ByteString url to properly decoded list of path segments",
        "hierarchy": "Web Routes Site",
        "module": "Web.Routes.Site",
        "name": "runSite",
        "normalized": "Text-\u003eSite a b-\u003e[Text]-\u003eEither String b",
        "package": "web-routes",
        "partial": "Site",
        "signature": "Text-\u003eSite url a-\u003e[Text]-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:setDefault",
      "description": {
        "fct-descr": "\u003cp\u003eOverride the \"default\" URL, ie the result of \u003ccode\u003e\u003ca\u003eparsePathSegments\u003c/a\u003e\u003c/code\u003e [].\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Site",
        "fct-package": "web-routes",
        "fct-signature": "url -\u003e Site url a -\u003e Site url a",
        "fct-source": "src/Web-Routes-Site.html#setDefault",
        "fct-type": "function",
        "title": "setDefault"
      },
      "index": {
        "description": "Override the default URL ie the result of parsePathSegments",
        "hierarchy": "Web Routes Site",
        "module": "Web.Routes.Site",
        "name": "setDefault",
        "normalized": "a-\u003eSite a b-\u003eSite a b",
        "package": "web-routes",
        "partial": "Default",
        "signature": "url-\u003eSite url a-\u003eSite url a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes.html#",
      "description": {
        "fct-module": "Web.Routes",
        "fct-package": "web-routes",
        "fct-signature": "module",
        "fct-source": "src/Web-Routes.html",
        "fct-type": "module",
        "title": "Routes"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes",
        "module": "Web.Routes",
        "name": "Routes",
        "normalized": "",
        "package": "web-routes",
        "partial": "Routes",
        "signature": ""
      }
    }
  }
]