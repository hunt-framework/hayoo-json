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
        "word": "web-routes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversions between raw pathinfos and decoded path segments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Routes.Base",
          "name": "Base",
          "package": "web-routes",
          "source": "src/Web-Routes-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Conversions between raw pathinfos and decoded path segments",
          "hierarchy": "Web Routes Base",
          "module": "Web.Routes.Base",
          "name": "Base",
          "package": "web-routes",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the inverse operation of \u003ccode\u003e\u003ca\u003eencodePathInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn particular, this function:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Splits a string at each occurence of a forward slash.\n\u003c/li\u003e\u003cli\u003e Percent-decodes the individual pieces.\n\u003c/li\u003e\u003cli\u003e UTF-8 decodes the resulting data.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis utilizes \u003ccode\u003e\u003ca\u003edecodeString\u003c/a\u003e\u003c/code\u003e from the utf8-string library, and thus all UTF-8\ndecoding errors are handled as per that library.\n\u003c/p\u003e\u003cp\u003eIn general, you will want to strip the leading slash from a pathinfo before\npassing it to this function. For example:\n\u003c/p\u003e\u003cpre\u003e decodePathInfo \\\"\\\"\n\u003c/pre\u003e\u003cp\u003e[]\n\u003c/p\u003e\u003cpre\u003e decodePathInfo \\\"\\/\\\"\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003e\"\"\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eNote that while function accepts a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value, it is expected that \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e will only contain the subset of characters which are allowed to appear in a URL.\n\u003c/p\u003e",
          "module": "Web.Routes.Base",
          "name": "decodePathInfo",
          "package": "web-routes",
          "signature": "ByteString -\u003e [Text]",
          "source": "src/Web-Routes-Base.html#decodePathInfo",
          "type": "function"
        },
        "index": {
          "description": "Performs the inverse operation of encodePathInfo In particular this function Splits string at each occurence of forward slash Percent-decodes the individual pieces UTF-8 decodes the resulting data This utilizes decodeString from the utf8-string library and thus all UTF-8 decoding errors are handled as per that library In general you will want to strip the leading slash from pathinfo before passing it to this function For example decodePathInfo decodePathInfo Note that while function accepts Text value it is expected that Text will only contain the subset of characters which are allowed to appear in URL",
          "hierarchy": "Web Routes Base",
          "module": "Web.Routes.Base",
          "name": "decodePathInfo",
          "normalized": "ByteString-\u003e[Text]",
          "package": "web-routes",
          "partial": "Path Info",
          "signature": "ByteString-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Base.html#v:decodePathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a list of path segments into a valid URL fragment.\n\u003c/p\u003e\u003cp\u003eThis function takes the following three steps:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e UTF-8 encodes the characters.\n\u003c/li\u003e\u003cli\u003e Performs percent encoding on all unreserved characters, as well as :@=+$,\n\u003c/li\u003e\u003cli\u003e Intercalates with a slash.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e encodePathInfo [\\\"foo\\\", \\\"bar\\\", \\\"baz\\\"]\n\u003c/pre\u003e\u003cp\u003e\"foo/bar/baz\"\n\u003c/p\u003e\u003cpre\u003e encodePathInfo [\\\"foo bar\\\", \\\"baz\\/bin\\\"]\n\u003c/pre\u003e\u003cp\u003e\"foo%20bar/baz%2Fbin\"\n\u003c/p\u003e\u003cpre\u003e encodePathInfo [\\\"&#1513;&#1500;&#1493;&#1501;\\\"]\n\u003c/pre\u003e\u003cp\u003e\"%D7%A9%D7%9C%D7%95%D7%9D\"\n\u003c/p\u003e",
          "module": "Web.Routes.Base",
          "name": "encodePathInfo",
          "package": "web-routes",
          "signature": "[Text] -\u003e [(Text, Maybe Text)] -\u003e Text",
          "source": "src/Web-Routes-Base.html#encodePathInfo",
          "type": "function"
        },
        "index": {
          "description": "Encodes list of path segments into valid URL fragment This function takes the following three steps UTF-8 encodes the characters Performs percent encoding on all unreserved characters as well as Intercalates with slash For example encodePathInfo foo bar baz foo bar baz encodePathInfo foo bar baz bin foo bar baz Fbin encodePathInfo D7 A9 D7 D7 D7",
          "hierarchy": "Web Routes Base",
          "module": "Web.Routes.Base",
          "name": "encodePathInfo",
          "normalized": "[Text]-\u003e[(Text,Maybe Text)]-\u003eText",
          "package": "web-routes",
          "partial": "Path Info",
          "signature": "[Text]-\u003e[(Text,Maybe Text)]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Base.html#v:encodePathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.PathInfo",
          "name": "PathInfo",
          "package": "web-routes",
          "source": "src/Web-Routes-PathInfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "PathInfo",
          "package": "web-routes",
          "partial": "Path Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentable types of kind *.\n This class is derivable in GHC with the DeriveGeneric flag on.\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "Generic",
          "package": "web-routes",
          "type": "class"
        },
        "index": {
          "description": "Representable types of kind This class is derivable in GHC with the DeriveGeneric flag on",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "Generic",
          "package": "web-routes",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#t:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple parsing and rendering for a type to and from URL path segments.\n\u003c/p\u003e\u003cp\u003eIf you're using GHC 7.2 or later, you can use \u003ccode\u003eDeriveGeneric\u003c/code\u003e to derive\n instances of this class:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n data Sitemap = Home | BlogPost Int deriving Generic\n instance PathInfo Sitemap\n\u003c/pre\u003e\u003cp\u003eThis results in the following instance:\n\u003c/p\u003e\u003cpre\u003e instance PathInfo Sitemap where\n     toPathSegments Home = [\"home\"]\n     toPathSegments (BlogPost x) = \"blog-post\" : toPathSegments x\n     fromPathSegments = Home \u003c$ segment \"home\"\n                    \u003c|\u003e BlogPost \u003c$ segment \"blog-post\" \u003c*\u003e fromPathSegments\n\u003c/pre\u003e\u003cp\u003eAnd here it is in action:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoPathInfo (BlogPost 123)\n\u003c/code\u003e\u003c/strong\u003e\"/blog-post/123\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromPathInfo \"/blog-post/123\" :: Either String Sitemap\n\u003c/code\u003e\u003c/strong\u003eRight (BlogPost 123)\n\u003c/pre\u003e\u003cp\u003eTo instead derive instances using \u003ccode\u003eTemplateHaskell\u003c/code\u003e, see\n \u003ca\u003eweb-routes-th\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "PathInfo",
          "package": "web-routes",
          "source": "src/Web-Routes-PathInfo.html#PathInfo",
          "type": "class"
        },
        "index": {
          "description": "Simple parsing and rendering for type to and from URL path segments If you re using GHC or later you can use DeriveGeneric to derive instances of this class LANGUAGE DeriveGeneric data Sitemap Home BlogPost Int deriving Generic instance PathInfo Sitemap This results in the following instance instance PathInfo Sitemap where toPathSegments Home home toPathSegments BlogPost blog-post toPathSegments fromPathSegments Home segment home BlogPost segment blog-post fromPathSegments And here it is in action toPathInfo BlogPost blog-post fromPathInfo blog-post Either String Sitemap Right BlogPost To instead derive instances using TemplateHaskell see web-routes-th",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "PathInfo",
          "package": "web-routes",
          "partial": "Path Info",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#t:PathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.PathInfo",
          "name": "URLParser",
          "package": "web-routes",
          "source": "src/Web-Routes-PathInfo.html#URLParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "URLParser",
          "package": "web-routes",
          "partial": "URLParser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#t:URLParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch on any string\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "anySegment",
          "package": "web-routes",
          "signature": "URLParser Text",
          "source": "src/Web-Routes-PathInfo.html#anySegment",
          "type": "function"
        },
        "index": {
          "description": "match on any string",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "anySegment",
          "package": "web-routes",
          "partial": "Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:anySegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003eurl\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ereturns \u003ccode\u003eLeft \u003ca\u003eparse error\u003c/a\u003e\u003c/code\u003e on failure\n\u003c/p\u003e\u003cp\u003ereturns \u003ccode\u003eRight url\u003c/code\u003e on success\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "fromPathInfo",
          "package": "web-routes",
          "signature": "ByteString -\u003e Either String url",
          "source": "src/Web-Routes-PathInfo.html#fromPathInfo",
          "type": "function"
        },
        "index": {
          "description": "parse String into url using PathInfo returns Left parse error on failure returns Right url on success",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "fromPathInfo",
          "normalized": "ByteString-\u003eEither String a",
          "package": "web-routes",
          "partial": "Path Info",
          "signature": "ByteString-\u003eEither String url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:fromPathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.PathInfo",
          "name": "fromPathSegments",
          "package": "web-routes",
          "signature": "URLParser url",
          "source": "src/Web-Routes-PathInfo.html#fromPathSegments",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "fromPathSegments",
          "package": "web-routes",
          "partial": "Path Segments",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:fromPathSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturn a routing function into a \u003ccode\u003e\u003ca\u003eSite\u003c/a\u003e\u003c/code\u003e value using the \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e class\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "mkSitePI",
          "package": "web-routes",
          "signature": "((url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e a)-\u003e Site url a",
          "type": "function"
        },
        "index": {
          "description": "turn routing function into Site value using the PathInfo class",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "mkSitePI",
          "normalized": "((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eb)-\u003eSite a b",
          "package": "web-routes",
          "partial": "Site PI",
          "signature": "((url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003ea)-\u003eSite url a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:mkSitePI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.PathInfo",
          "name": "pToken",
          "package": "web-routes",
          "signature": "tok -\u003e (Text -\u003e Maybe a) -\u003e URLParser a",
          "source": "src/Web-Routes-PathInfo.html#pToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "pToken",
          "normalized": "a-\u003e(Text-\u003eMaybe b)-\u003eURLParser b",
          "package": "web-routes",
          "partial": "Token",
          "signature": "tok-\u003e(Text-\u003eMaybe a)-\u003eURLParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:pToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a \u003ccode\u003e\u003ca\u003eURLParser\u003c/a\u003e\u003c/code\u003e on a list of path segments\n\u003c/p\u003e\u003cp\u003ereturns \u003ccode\u003eLeft \u003ca\u003eparse error\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e\u003cp\u003ereturns \u003ccode\u003eRight a\u003c/code\u003e on success\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "parseSegments",
          "package": "web-routes",
          "signature": "URLParser a -\u003e [Text] -\u003e Either String a",
          "source": "src/Web-Routes-PathInfo.html#parseSegments",
          "type": "function"
        },
        "index": {
          "description": "run URLParser on list of path segments returns Left parse error on failure returns Right on success",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "parseSegments",
          "normalized": "URLParser a-\u003e[Text]-\u003eEither String a",
          "package": "web-routes",
          "partial": "Segments",
          "signature": "URLParser a-\u003e[Text]-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:parseSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.PathInfo",
          "name": "patternParse",
          "package": "web-routes",
          "signature": "([Text] -\u003e Either String a) -\u003e URLParser a",
          "source": "src/Web-Routes-PathInfo.html#patternParse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "patternParse",
          "normalized": "([Text]-\u003eEither String a)-\u003eURLParser a",
          "package": "web-routes",
          "partial": "Parse",
          "signature": "([Text]-\u003eEither String a)-\u003eURLParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:patternParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ematch on a specific string\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "segment",
          "package": "web-routes",
          "signature": "Text -\u003e URLParser Text",
          "source": "src/Web-Routes-PathInfo.html#segment",
          "type": "function"
        },
        "index": {
          "description": "match on specific string",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "segment",
          "normalized": "Text-\u003eURLParser Text",
          "package": "web-routes",
          "signature": "Text-\u003eURLParser Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshow Parsec \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e using terms that relevant to parsing a url\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "showParseError",
          "package": "web-routes",
          "signature": "ParseError -\u003e String",
          "source": "src/Web-Routes-PathInfo.html#showParseError",
          "type": "function"
        },
        "index": {
          "description": "show Parsec ParseError using terms that relevant to parsing url",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "showParseError",
          "normalized": "ParseError-\u003eString",
          "package": "web-routes",
          "partial": "Parse Error",
          "signature": "ParseError-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:showParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.PathInfo",
          "name": "stripOverlap",
          "package": "web-routes",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Web-Routes-PathInfo.html#stripOverlap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "stripOverlap",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "web-routes",
          "partial": "Overlap",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:stripOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.PathInfo",
          "name": "stripOverlapBS",
          "package": "web-routes",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Web-Routes-PathInfo.html#stripOverlapBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "stripOverlapBS",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "web-routes",
          "partial": "Overlap BS",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:stripOverlapBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.PathInfo",
          "name": "stripOverlapText",
          "package": "web-routes",
          "signature": "Text -\u003e Text -\u003e Text",
          "source": "src/Web-Routes-PathInfo.html#stripOverlapText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "stripOverlapText",
          "normalized": "Text-\u003eText-\u003eText",
          "package": "web-routes",
          "partial": "Overlap Text",
          "signature": "Text-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:stripOverlapText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert url into the path info portion of a URL\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "toPathInfo",
          "package": "web-routes",
          "signature": "url -\u003e Text",
          "source": "src/Web-Routes-PathInfo.html#toPathInfo",
          "type": "function"
        },
        "index": {
          "description": "convert url into the path info portion of URL",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "toPathInfo",
          "normalized": "a-\u003eText",
          "package": "web-routes",
          "partial": "Path Info",
          "signature": "url-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:toPathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert url + params into the path info portion of a URL + a query string\n\u003c/p\u003e",
          "module": "Web.Routes.PathInfo",
          "name": "toPathInfoParams",
          "package": "web-routes",
          "signature": "url-\u003e [(Text, Maybe Text)]-\u003e Text",
          "type": "function"
        },
        "index": {
          "description": "convert url params into the path info portion of URL query string",
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "toPathInfoParams",
          "normalized": "a-\u003e[(Text,Maybe Text)]-\u003eText",
          "package": "web-routes",
          "partial": "Path Info Params",
          "signature": "url-\u003e[(Text,Maybe Text)]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:toPathInfoParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.PathInfo",
          "name": "toPathSegments",
          "package": "web-routes",
          "signature": "url -\u003e [Text]",
          "source": "src/Web-Routes-PathInfo.html#toPathSegments",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web Routes PathInfo",
          "module": "Web.Routes.PathInfo",
          "name": "toPathSegments",
          "normalized": "a-\u003e[Text]",
          "package": "web-routes",
          "partial": "Path Segments",
          "signature": "url-\u003e[Text]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-PathInfo.html#v:toPathSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.QuickCheck",
          "name": "QuickCheck",
          "package": "web-routes",
          "source": "src/Web-Routes-QuickCheck.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Routes QuickCheck",
          "module": "Web.Routes.QuickCheck",
          "name": "QuickCheck",
          "package": "web-routes",
          "partial": "Quick Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-QuickCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest that a \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e instance is valid\n\u003c/p\u003e\u003cp\u003eGenerates \u003ccode\u003eArbitrary\u003c/code\u003e \u003ccode\u003eurl\u003c/code\u003e values and checks that:\n\u003c/p\u003e\u003cp\u003efromPathInfo . toPathInfo == id\n\u003c/p\u003e",
          "module": "Web.Routes.QuickCheck",
          "name": "pathInfoInverse_prop",
          "package": "web-routes",
          "signature": "url -\u003e Bool",
          "source": "src/Web-Routes-QuickCheck.html#pathInfoInverse_prop",
          "type": "function"
        },
        "index": {
          "description": "test that PathInfo instance is valid Generates Arbitrary url values and checks that fromPathInfo toPathInfo id",
          "hierarchy": "Web Routes QuickCheck",
          "module": "Web.Routes.QuickCheck",
          "name": "pathInfoInverse_prop",
          "normalized": "a-\u003eBool",
          "package": "web-routes",
          "partial": "Info Inverse",
          "signature": "url-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-QuickCheck.html#v:pathInfoInverse_prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of the \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e monad transformer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Routes.RouteT",
          "name": "RouteT",
          "package": "web-routes",
          "source": "src/Web-Routes-RouteT.html",
          "type": "module"
        },
        "index": {
          "description": "Declaration of the RouteT monad transformer",
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "RouteT",
          "package": "web-routes",
          "partial": "Route",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.RouteT",
          "name": "MonadRoute",
          "package": "web-routes",
          "source": "src/Web-Routes-RouteT.html#MonadRoute",
          "type": "class"
        },
        "index": {
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "MonadRoute",
          "package": "web-routes",
          "partial": "Monad Route",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#t:MonadRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonad transformer for generating URLs\n\u003c/p\u003e",
          "module": "Web.Routes.RouteT",
          "name": "RouteT",
          "package": "web-routes",
          "source": "src/Web-Routes-RouteT.html#RouteT",
          "type": "newtype"
        },
        "index": {
          "description": "monad transformer for generating URLs",
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "RouteT",
          "package": "web-routes",
          "partial": "Route",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#t:RouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.RouteT",
          "name": "RouteT",
          "package": "web-routes",
          "signature": "RouteT",
          "source": "src/Web-Routes-RouteT.html#RouteT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "RouteT",
          "package": "web-routes",
          "partial": "Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:RouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.RouteT",
          "name": "askRouteFn",
          "package": "web-routes",
          "signature": "m (URL m -\u003e [(Text, Maybe Text)] -\u003e Text)",
          "source": "src/Web-Routes-RouteT.html#askRouteFn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "askRouteFn",
          "normalized": "a(URL a-\u003e[(Text,Maybe Text)]-\u003eText)",
          "package": "web-routes",
          "partial": "Route Fn",
          "signature": "m(URL m-\u003e[(Text,Maybe Text)]-\u003eText)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:askRouteFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.RouteT",
          "name": "askRouteT",
          "package": "web-routes",
          "signature": "RouteT url m (url -\u003e [(Text, Maybe Text)] -\u003e Text)",
          "source": "src/Web-Routes-RouteT.html#askRouteT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "askRouteT",
          "normalized": "RouteT a b(a-\u003e[(Text,Maybe Text)]-\u003eText)",
          "package": "web-routes",
          "partial": "Route",
          "signature": "RouteT url m(url-\u003e[(Text,Maybe Text)]-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:askRouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.RouteT",
          "name": "liftRouteT",
          "package": "web-routes",
          "signature": "m a -\u003e RouteT url m a",
          "source": "src/Web-Routes-RouteT.html#liftRouteT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "liftRouteT",
          "normalized": "a b-\u003eRouteT c a b",
          "package": "web-routes",
          "partial": "Route",
          "signature": "m a-\u003eRouteT url m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:liftRouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the computation inside a \u003ccode\u003eRouteT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Routes.RouteT",
          "name": "mapRouteT",
          "package": "web-routes",
          "signature": "(m a -\u003e n b) -\u003e RouteT url m a -\u003e RouteT url n b",
          "source": "src/Web-Routes-RouteT.html#mapRouteT",
          "type": "function"
        },
        "index": {
          "description": "Transform the computation inside RouteT",
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "mapRouteT",
          "normalized": "(a b-\u003ec d)-\u003eRouteT e a b-\u003eRouteT e c d",
          "package": "web-routes",
          "partial": "Route",
          "signature": "(m a-\u003en b)-\u003eRouteT url m a-\u003eRouteT url n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:mapRouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.RouteT",
          "name": "nestURL",
          "package": "web-routes",
          "signature": "(url1 -\u003e url2) -\u003e RouteT url1 m a -\u003e RouteT url2 m a",
          "source": "src/Web-Routes-RouteT.html#nestURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "nestURL",
          "normalized": "(a-\u003ea)-\u003eRouteT a b c-\u003eRouteT a b c",
          "package": "web-routes",
          "partial": "URL",
          "signature": "(url-\u003eurl)-\u003eRouteT url m a-\u003eRouteT url m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:nestURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e based route handler to a handler that can be used with the \u003ccode\u003eSite\u003c/code\u003e type\n\u003c/p\u003e\u003cp\u003eNOTE: this function used to be the same as \u003ccode\u003e\u003ca\u003eunRouteT\u003c/a\u003e\u003c/code\u003e. If you want the old behavior, just call \u003ccode\u003e\u003ca\u003eunRouteT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Routes.RouteT",
          "name": "runRouteT",
          "package": "web-routes",
          "signature": "(url -\u003e RouteT url m a) -\u003e (url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e m a",
          "source": "src/Web-Routes-RouteT.html#runRouteT",
          "type": "function"
        },
        "index": {
          "description": "convert RouteT based route handler to handler that can be used with the Site type NOTE this function used to be the same as unRouteT If you want the old behavior just call unRouteT",
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "runRouteT",
          "normalized": "(a-\u003eRouteT a b c)-\u003e(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eb c",
          "package": "web-routes",
          "partial": "Route",
          "signature": "(url-\u003eRouteT url m a)-\u003e(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:runRouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.RouteT",
          "name": "showURL",
          "package": "web-routes",
          "signature": "URL m -\u003e m Text",
          "source": "src/Web-Routes-RouteT.html#showURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "showURL",
          "normalized": "URL a-\u003ea Text",
          "package": "web-routes",
          "partial": "URL",
          "signature": "URL m-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:showURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.RouteT",
          "name": "showURLParams",
          "package": "web-routes",
          "signature": "URL m -\u003e [(Text, Maybe Text)] -\u003e m Text",
          "source": "src/Web-Routes-RouteT.html#showURLParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "showURLParams",
          "normalized": "URL a-\u003e[(Text,Maybe Text)]-\u003ea Text",
          "package": "web-routes",
          "partial": "URLParams",
          "signature": "URL m-\u003e[(Text,Maybe Text)]-\u003em Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:showURLParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.RouteT",
          "name": "unRouteT",
          "package": "web-routes",
          "signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e m a",
          "source": "src/Web-Routes-RouteT.html#RouteT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "unRouteT",
          "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eb c",
          "package": "web-routes",
          "partial": "Route",
          "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:unRouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation in a modified environment\n\u003c/p\u003e",
          "module": "Web.Routes.RouteT",
          "name": "withRouteT",
          "package": "web-routes",
          "signature": "((url' -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e RouteT url m a -\u003e RouteT url' m a",
          "source": "src/Web-Routes-RouteT.html#withRouteT",
          "type": "function"
        },
        "index": {
          "description": "Execute computation in modified environment",
          "hierarchy": "Web Routes RouteT",
          "module": "Web.Routes.RouteT",
          "name": "withRouteT",
          "normalized": "((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eb-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eRouteT b c d-\u003eRouteT a c d",
          "package": "web-routes",
          "partial": "Route",
          "signature": "((url'-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eRouteT url m a-\u003eRouteT url' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-RouteT.html#v:withRouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.Site",
          "name": "Site",
          "package": "web-routes",
          "source": "src/Web-Routes-Site.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Routes Site",
          "module": "Web.Routes.Site",
          "name": "Site",
          "package": "web-routes",
          "partial": "Site",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA site groups together the three functions necesary to make an application:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A function to convert from the URL type to path segments.\n\u003c/li\u003e\u003cli\u003e A function to convert from path segments to the URL, if possible.\n\u003c/li\u003e\u003cli\u003e A function to return the application for a given URL.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere are two type parameters for Site: the first is the URL datatype, the\nsecond is the application datatype. The application datatype will depend upon\nyour server backend.\n\u003c/p\u003e",
          "module": "Web.Routes.Site",
          "name": "Site",
          "package": "web-routes",
          "source": "src/Web-Routes-Site.html#Site",
          "type": "data"
        },
        "index": {
          "description": "site groups together the three functions necesary to make an application function to convert from the URL type to path segments function to convert from path segments to the URL if possible function to return the application for given URL There are two type parameters for Site the first is the URL datatype the second is the application datatype The application datatype will depend upon your server backend",
          "hierarchy": "Web Routes Site",
          "module": "Web.Routes.Site",
          "name": "Site",
          "package": "web-routes",
          "partial": "Site",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#t:Site"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.Site",
          "name": "Site",
          "package": "web-routes",
          "signature": "Site",
          "source": "src/Web-Routes-Site.html#Site",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Routes Site",
          "module": "Web.Routes.Site",
          "name": "Site",
          "package": "web-routes",
          "partial": "Site",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:Site"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function must be the inverse of \u003ccode\u003e\u003ca\u003eparsePathSegments\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Routes.Site",
          "name": "formatPathSegments",
          "package": "web-routes",
          "signature": "url -\u003e ([Text], [(Text, Maybe Text)])",
          "source": "src/Web-Routes-Site.html#Site",
          "type": "function"
        },
        "index": {
          "description": "This function must be the inverse of parsePathSegments",
          "hierarchy": "Web Routes Site",
          "module": "Web.Routes.Site",
          "name": "formatPathSegments",
          "normalized": "a-\u003e([Text],[(Text,Maybe Text)])",
          "package": "web-routes",
          "partial": "Path Segments",
          "signature": "url-\u003e([Text],[(Text,Maybe Text)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:formatPathSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the appropriate application for a given URL.\n\u003c/p\u003e\u003cp\u003eThe first argument is a function which will give an appropriate\n               URL (as a String) for a URL datatype. This is usually\n               constructed by a combination of \u003ccode\u003e\u003ca\u003eformatPathSegments\u003c/a\u003e\u003c/code\u003e and the\n               prepending of an absolute application root.\n\u003c/p\u003e\u003cp\u003eWell behaving applications should use this function to\n               generating all internal URLs.\n\u003c/p\u003e",
          "module": "Web.Routes.Site",
          "name": "handleSite",
          "package": "web-routes",
          "signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e a",
          "source": "src/Web-Routes-Site.html#Site",
          "type": "function"
        },
        "index": {
          "description": "Return the appropriate application for given URL The first argument is function which will give an appropriate URL as String for URL datatype This is usually constructed by combination of formatPathSegments and the prepending of an absolute application root Well behaving applications should use this function to generating all internal URLs",
          "hierarchy": "Web Routes Site",
          "module": "Web.Routes.Site",
          "name": "handleSite",
          "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eb",
          "package": "web-routes",
          "partial": "Site",
          "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:handleSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function must be the inverse of \u003ccode\u003e\u003ca\u003eformatPathSegments\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Routes.Site",
          "name": "parsePathSegments",
          "package": "web-routes",
          "signature": "[Text] -\u003e Either String url",
          "source": "src/Web-Routes-Site.html#Site",
          "type": "function"
        },
        "index": {
          "description": "This function must be the inverse of formatPathSegments",
          "hierarchy": "Web Routes Site",
          "module": "Web.Routes.Site",
          "name": "parsePathSegments",
          "normalized": "[Text]-\u003eEither String a",
          "package": "web-routes",
          "partial": "Path Segments",
          "signature": "[Text]-\u003eEither String url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:parsePathSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the application to handle a given request.\n\u003c/p\u003e\u003cp\u003eNOTE: use \u003ccode\u003e\u003ca\u003edecodePathInfo\u003c/a\u003e\u003c/code\u003e to convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e url to a properly decoded list of path segments\n\u003c/p\u003e",
          "module": "Web.Routes.Site",
          "name": "runSite",
          "package": "web-routes",
          "signature": "Text-\u003e Site url a-\u003e [Text]-\u003e Either String a",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the application to handle given request NOTE use decodePathInfo to convert ByteString url to properly decoded list of path segments",
          "hierarchy": "Web Routes Site",
          "module": "Web.Routes.Site",
          "name": "runSite",
          "normalized": "Text-\u003eSite a b-\u003e[Text]-\u003eEither String b",
          "package": "web-routes",
          "partial": "Site",
          "signature": "Text-\u003eSite url a-\u003e[Text]-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:runSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride the \"default\" URL, ie the result of \u003ccode\u003e\u003ca\u003eparsePathSegments\u003c/a\u003e\u003c/code\u003e [].\n\u003c/p\u003e",
          "module": "Web.Routes.Site",
          "name": "setDefault",
          "package": "web-routes",
          "signature": "url -\u003e Site url a -\u003e Site url a",
          "source": "src/Web-Routes-Site.html#setDefault",
          "type": "function"
        },
        "index": {
          "description": "Override the default URL ie the result of parsePathSegments",
          "hierarchy": "Web Routes Site",
          "module": "Web.Routes.Site",
          "name": "setDefault",
          "normalized": "a-\u003eSite a b-\u003eSite a b",
          "package": "web-routes",
          "partial": "Default",
          "signature": "url-\u003eSite url a-\u003eSite url a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes-Site.html#v:setDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes",
          "name": "Routes",
          "package": "web-routes",
          "source": "src/Web-Routes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Routes",
          "module": "Web.Routes",
          "name": "Routes",
          "package": "web-routes",
          "partial": "Routes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-routes/docs/Web-Routes.html#"
      }
    }
  ]
]