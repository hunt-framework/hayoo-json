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
        "word": "happstack-lite"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003ehappstack-lite\u003c/code\u003e provides a simplied introduction to\n\u003ccode\u003ehappstack-server\u003c/code\u003e. (Nearly) all the functions in \u003ccode\u003ehappstack-lite\u003c/code\u003e are simple re-exports from the \u003ccode\u003ehappstack-server\u003c/code\u003e package. \u003ccode\u003ehappstack-lite\u003c/code\u003e offers two\nkey advantages over \u003ccode\u003ehappstack-server\u003c/code\u003e:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e it only contains the most commonly used functions, gathered in one convenient location.\n\u003c/li\u003e\u003cli\u003e the type signatures have been simplified to remove most references\n    to type classes, monad transformers, and other potentially confusing\n    type signatures.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe beautiful part about \u003ccode\u003ehappstack-lite\u003c/code\u003e is that because it merely \u003ccode\u003ere-exports\u003c/code\u003e functions and types from \u003ccode\u003ehappstack-server\u003c/code\u003e it is possible to gradually import extra functionality from \u003ccode\u003ehappstack-server\u003c/code\u003e on an as-need basis.\n\u003c/p\u003e\u003cp\u003eThere is a brief introduction to \u003ccode\u003ehappstack-lite\u003c/code\u003e located here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.happstack.com/C/ViewPage/9\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eMore detailed examples and information can be found in the Happstack Crash Course:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.happstack.com/docs/crashcourse/index.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe Happstack Crash Course is written against \u003ccode\u003ehappstack-server\u003c/code\u003e but the behavior of the functions available in \u003ccode\u003ehappstack-lite\u003c/code\u003e is almost identical.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Lite",
          "name": "Lite",
          "package": "happstack-lite",
          "source": "src/Happstack-Lite.html",
          "type": "module"
        },
        "index": {
          "description": "happstack-lite provides simplied introduction to happstack-server Nearly all the functions in happstack-lite are simple re-exports from the happstack-server package happstack-lite offers two key advantages over happstack-server it only contains the most commonly used functions gathered in one convenient location the type signatures have been simplified to remove most references to type classes monad transformers and other potentially confusing type signatures The beautiful part about happstack-lite is that because it merely re-exports functions and types from happstack-server it is possible to gradually import extra functionality from happstack-server on an as-need basis There is brief introduction to happstack-lite located here http www.happstack.com ViewPage More detailed examples and information can be found in the Happstack Crash Course http www.happstack.com docs crashcourse index.html The Happstack Crash Course is written against happstack-server but the behavior of the functions available in happstack-lite is almost identical",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Lite",
          "package": "happstack-lite",
          "partial": "Lite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "Browsing",
          "package": "happstack-lite",
          "type": "data"
        },
        "index": {
          "description": "see serveDirectory",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Browsing",
          "package": "happstack-lite",
          "partial": "Browsing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:Browsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA MIME media type value.\n   The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance is derived automatically.\n   Use \u003ccode\u003eshowContentType\u003c/code\u003e to obtain the standard\n   string representation.\n   See \u003ca\u003ehttp://www.ietf.org/rfc/rfc2046.txt\u003c/a\u003e for more\n   information about MIME media types.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "ContentType",
          "package": "happstack-lite",
          "type": "data"
        },
        "index": {
          "description": "MIME media type value The Show instance is derived automatically Use showContentType to obtain the standard string representation See http www.ietf.org rfc rfc2046.txt for more information about MIME media types",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ContentType",
          "package": "happstack-lite",
          "partial": "Content Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea type for HTTP cookies. Usually created using \u003ccode\u003e\u003ca\u003emkCookie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "Cookie",
          "package": "happstack-lite",
          "type": "data"
        },
        "index": {
          "description": "type for HTTP cookies Usually created using mkCookie",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Cookie",
          "package": "happstack-lite",
          "partial": "Cookie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the lifetime of a cookie.\n\u003c/p\u003e\u003cp\u003eNote that we always set the max-age and expires headers because\n internet explorer does not honor max-age. You can specific \u003ccode\u003e\u003ca\u003eMaxAge\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eExpires\u003c/a\u003e\u003c/code\u003e and the other will be calculated for you. Choose which\n ever one makes your life easiest.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "CookieLife",
          "package": "happstack-lite",
          "type": "data"
        },
        "index": {
          "description": "Specify the lifetime of cookie Note that we always set the max-age and expires headers because internet explorer does not honor max-age You can specific MaxAge or Expires and the other will be calculated for you Choose which ever one makes your life easiest",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "CookieLife",
          "package": "happstack-lite",
          "partial": "Cookie Life",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:CookieLife"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is used by \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e to parse a path component into a\n value.\n\u003c/p\u003e\u003cp\u003eThe instances for number types (\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, etc) use \u003ccode\u003e\u003ca\u003ereadM\u003c/a\u003e\u003c/code\u003e to\n parse the path component.\n\u003c/p\u003e\u003cp\u003eThe instance for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, on the other hand, returns the\n unmodified path component.\n\u003c/p\u003e\u003cp\u003eSee the following section of the Happstack Crash Course for\n detailed instructions using and extending \u003ccode\u003e\u003ca\u003eFromReqURI\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.happstack.com/docs/crashcourse/RouteFilters.html#FromReqURI\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "FromReqURI",
          "package": "happstack-lite",
          "type": "class"
        },
        "index": {
          "description": "This class is used by path to parse path component into value The instances for number types Int Float etc use readM to parse the path component The instance for String on the other hand returns the unmodified path component See the following section of the Happstack Crash Course for detailed instructions using and extending FromReqURI http www.happstack.com docs crashcourse RouteFilters.html FromReqURI",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "FromReqURI",
          "package": "happstack-lite",
          "partial": "From Req URI",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:FromReqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einstances of this class provide a variety of ways to match on the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e method.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e method GET                  -- match GET or HEAD\n method [GET, POST]          -- match GET, HEAD or POST\n method HEAD                 -- match HEAD /but not/ GET\n method (== GET)             -- match GET or HEAD\n method (not . (==) DELETE)  -- match any method except DELETE\n method ()                   -- match any method\n\u003c/pre\u003e\u003cp\u003eAs you can see, GET implies that HEAD should match as well.  This is to\n make it harder to write an application that uses HTTP incorrectly.\n Happstack handles HEAD requests automatically, but we still need to make\n sure our handlers don't mismatch or a HEAD will result in a 404.\n\u003c/p\u003e\u003cp\u003eIf you must, you can still do something like this\n to match GET without HEAD:\n\u003c/p\u003e\u003cpre\u003e guardRq ((== GET) . rqMethod)\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "MatchMethod",
          "package": "happstack-lite",
          "type": "class"
        },
        "index": {
          "description": "instances of this class provide variety of ways to match on the Request method Examples method GET match GET or HEAD method GET POST match GET HEAD or POST method HEAD match HEAD but not GET method GET match GET or HEAD method not DELETE match any method except DELETE method match any method As you can see GET implies that HEAD should match as well This is to make it harder to write an application that uses HTTP incorrectly Happstack handles HEAD requests automatically but we still need to make sure our handlers don mismatch or HEAD will result in If you must you can still do something like this to match GET without HEAD guardRq GET rqMethod",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "MatchMethod",
          "package": "happstack-lite",
          "partial": "Match Method",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:MatchMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTTP request method\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "Method",
          "package": "happstack-lite",
          "type": "data"
        },
        "index": {
          "description": "HTTP request method",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Method",
          "package": "happstack-lite",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from file extensions to content-types\n\u003c/p\u003e\u003cp\u003eexample:\n\u003c/p\u003e\u003cpre\u003e myMimeMap :: MimeMap\n myMimeMap = Map.fromList [(\"gz\",\"application/x-gzip\"), ... ]\n\u003c/pre\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003emimeTypes\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "MimeMap",
          "package": "happstack-lite",
          "type": "type"
        },
        "index": {
          "description": "Map from file extensions to content-types example myMimeMap MimeMap myMimeMap Map.fromList gz application x-gzip see also mimeTypes",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "MimeMap",
          "package": "happstack-lite",
          "partial": "Mime Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:MimeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads that also support choice and failure.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "MonadPlus",
          "package": "happstack-lite",
          "type": "class"
        },
        "index": {
          "description": "Monads that also support choice and failure",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "MonadPlus",
          "package": "happstack-lite",
          "partial": "Monad Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:MonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean HTTP request\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "Request",
          "package": "happstack-lite",
          "type": "data"
        },
        "index": {
          "description": "an HTTP request",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Request",
          "package": "happstack-lite",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean HTTP Response\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "Response",
          "package": "happstack-lite",
          "type": "data"
        },
        "index": {
          "description": "an HTTP Response",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Response",
          "package": "happstack-lite",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econfiguration to be used with \u003ccode\u003e\u003ca\u003eserve\u003c/a\u003e\u003c/code\u003e function\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "ServerConfig",
          "package": "happstack-lite",
          "source": "src/Happstack-Lite.html#ServerConfig",
          "type": "data"
        },
        "index": {
          "description": "configuration to be used with serve function",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ServerConfig",
          "package": "happstack-lite",
          "partial": "Server Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:ServerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eServerPartT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "ServerPart",
          "package": "happstack-lite",
          "type": "type"
        },
        "index": {
          "description": "An alias for ServerPartT IO",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ServerPart",
          "package": "happstack-lite",
          "partial": "Server Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:ServerPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoResponse\u003c/a\u003e\u003c/code\u003e will convert a value into a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body,\n set the \u003ccode\u003econtent-type\u003c/code\u003e, and set the default response code for that type.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehappstack-server\u003c/code\u003e Example:\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ toResponse \"hello, world!\"\n\u003c/pre\u003e\u003cp\u003ewill generate a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with the content-type \u003ccode\u003etext/plain\u003c/code\u003e,\n the response code \u003ccode\u003e200 OK\u003c/code\u003e, and the body: \u003ccode\u003ehello, world!\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esimpleHTTP\u003c/code\u003e will call \u003ccode\u003e\u003ca\u003etoResponse\u003c/a\u003e\u003c/code\u003e automatically, so the above can be shortened to:\n\u003c/p\u003e\u003cpre\u003e main = simpleHTTP nullConf $ \"hello, world!\"\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ehappstack-lite\u003c/code\u003e Example:\n\u003c/p\u003e\u003cpre\u003e main = serve Nothing $ toResponse \"hello, world!\"\n\u003c/pre\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003etoMessage\u003c/a\u003e\u003c/code\u003e (and usually \u003ccode\u003e\u003ca\u003etoContentType\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "ToMessage",
          "package": "happstack-lite",
          "type": "class"
        },
        "index": {
          "description": "toResponse will convert value into Response body set the content-type and set the default response code for that type happstack-server Example main simpleHTTP nullConf toResponse hello world will generate Response with the content-type text plain the response code OK and the body hello world simpleHTTP will call toResponse automatically so the above can be shortened to main simpleHTTP nullConf hello world happstack-lite Example main serve Nothing toResponse hello world Minimal definition toMessage and usually toContentType",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ToMessage",
          "package": "happstack-lite",
          "partial": "To Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#t:ToMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "CONNECT",
          "package": "happstack-lite",
          "signature": "CONNECT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "CONNECT",
          "package": "happstack-lite",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "ContentType",
          "package": "happstack-lite",
          "signature": "ContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ContentType",
          "package": "happstack-lite",
          "partial": "Content Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "Cookie",
          "package": "happstack-lite",
          "signature": "Cookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Cookie",
          "package": "happstack-lite",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:Cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "DELETE",
          "package": "happstack-lite",
          "signature": "DELETE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "DELETE",
          "package": "happstack-lite",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "DisableBrowsing",
          "package": "happstack-lite",
          "signature": "DisableBrowsing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "DisableBrowsing",
          "package": "happstack-lite",
          "partial": "Disable Browsing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:DisableBrowsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "EnableBrowsing",
          "package": "happstack-lite",
          "signature": "EnableBrowsing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "EnableBrowsing",
          "package": "happstack-lite",
          "partial": "Enable Browsing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:EnableBrowsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecookie already expired\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "Expired",
          "package": "happstack-lite",
          "signature": "Expired",
          "type": "function"
        },
        "index": {
          "description": "cookie already expired",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Expired",
          "package": "happstack-lite",
          "partial": "Expired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:Expired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecookie expiration date\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "Expires",
          "package": "happstack-lite",
          "signature": "Expires UTCTime",
          "type": "function"
        },
        "index": {
          "description": "cookie expiration date",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Expires",
          "package": "happstack-lite",
          "partial": "Expires",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:Expires"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "GET",
          "package": "happstack-lite",
          "signature": "GET",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "GET",
          "package": "happstack-lite",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "HEAD",
          "package": "happstack-lite",
          "signature": "HEAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "HEAD",
          "package": "happstack-lite",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elife time of cookie in seconds\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "MaxAge",
          "package": "happstack-lite",
          "signature": "MaxAge Int",
          "type": "function"
        },
        "index": {
          "description": "life time of cookie in seconds",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "MaxAge",
          "package": "happstack-lite",
          "partial": "Max Age",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:MaxAge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "OPTIONS",
          "package": "happstack-lite",
          "signature": "OPTIONS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "OPTIONS",
          "package": "happstack-lite",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "POST",
          "package": "happstack-lite",
          "signature": "POST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "POST",
          "package": "happstack-lite",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "PUT",
          "package": "happstack-lite",
          "signature": "PUT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "PUT",
          "package": "happstack-lite",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "ServerConfig",
          "package": "happstack-lite",
          "signature": "ServerConfig",
          "source": "src/Happstack-Lite.html#ServerConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ServerConfig",
          "package": "happstack-lite",
          "partial": "Server Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:ServerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esession cookie - expires when browser is closed\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "Session",
          "package": "happstack-lite",
          "signature": "Session",
          "type": "function"
        },
        "index": {
          "description": "session cookie expires when browser is closed",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "Session",
          "package": "happstack-lite",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "TRACE",
          "package": "happstack-lite",
          "signature": "TRACE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "TRACE",
          "package": "happstack-lite",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the list \u003ccode\u003e\u003ca\u003eCookie\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "addCookies",
          "package": "happstack-lite",
          "signature": "[(CookieLife, Cookie)] -\u003e ServerPart ()",
          "source": "src/Happstack-Lite.html#addCookies",
          "type": "function"
        },
        "index": {
          "description": "Add the list Cookie to the Response",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "addCookies",
          "normalized": "[(CookieLife,Cookie)]-\u003eServerPart()",
          "package": "happstack-lite",
          "partial": "Cookies",
          "signature": "[(CookieLife,Cookie)]-\u003eServerPart()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:addCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd headers into the response.  This method does not overwrite\n any existing header of the same name, hence the name \u003ccode\u003e\u003ca\u003eaddHeaderM\u003c/a\u003e\u003c/code\u003e.\n If you want to replace a header use \u003ccode\u003e\u003ca\u003esetHeaderM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "addHeaderM",
          "package": "happstack-lite",
          "signature": "String -\u003e String -\u003e ServerPart ()",
          "source": "src/Happstack-Lite.html#addHeaderM",
          "type": "function"
        },
        "index": {
          "description": "Add headers into the response This method does not overwrite any existing header of the same name hence the name addHeaderM If you want to replace header use setHeaderM",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "addHeaderM",
          "normalized": "String-\u003eString-\u003eServerPart()",
          "package": "happstack-lite",
          "partial": "Header",
          "signature": "String-\u003eString-\u003eServerPart()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:addHeaderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a specific content type, completely ignoring the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e\u003cp\u003eUse this with \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e if you want to explicitly specify the\n content-type.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "asContentType",
          "package": "happstack-lite",
          "signature": "String-\u003e FilePath -\u003e ServerPart String",
          "type": "function"
        },
        "index": {
          "description": "returns specific content type completely ignoring the FilePath argument Use this with serveFile if you want to explicitly specify the content-type see also serveFile",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "asContentType",
          "normalized": "String-\u003eFilePath-\u003eServerPart String",
          "package": "happstack-lite",
          "partial": "Content Type",
          "signature": "String-\u003eFilePath-\u003eServerPart String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:asContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "cookieDomain",
          "package": "happstack-lite",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "cookieDomain",
          "package": "happstack-lite",
          "partial": "Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:cookieDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "cookieName",
          "package": "happstack-lite",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "cookieName",
          "package": "happstack-lite",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:cookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "cookiePath",
          "package": "happstack-lite",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "cookiePath",
          "package": "happstack-lite",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:cookiePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "cookieValue",
          "package": "happstack-lite",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "cookieValue",
          "package": "happstack-lite",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:cookieValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "cookieVersion",
          "package": "happstack-lite",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "cookieVersion",
          "package": "happstack-lite",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:cookieVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMedia type parameters. On common example is\n   the charset parameter for the \"text\"\n   top-level type, e.g. \u003ccode\u003e(\"charset\",\"ISO-8859-1\")\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "ctParameters",
          "package": "happstack-lite",
          "signature": "[(String, String)]",
          "type": "function"
        },
        "index": {
          "description": "Media type parameters On common example is the charset parameter for the text top-level type e.g charset ISO-8859-1",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ctParameters",
          "normalized": "[(String,String)]",
          "package": "happstack-lite",
          "partial": "Parameters",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:ctParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe media subtype, the specific data format.\n   Examples include \"plain\", \"html\",\n   \"jpeg\", \"form-data\", etc.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "ctSubtype",
          "package": "happstack-lite",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "The media subtype the specific data format Examples include plain html jpeg form-data etc",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ctSubtype",
          "package": "happstack-lite",
          "partial": "Subtype",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:ctSubtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-level media type, the general type\n   of the data. Common examples are\n   \"text\", \"image\", \"audio\", \"video\",\n   \"multipart\", and \"application\".\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "ctType",
          "package": "happstack-lite",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "The top-level media type the general type of the data Common examples are text image audio video multipart and application",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ctType",
          "package": "happstack-lite",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:ctType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea reasonable default \u003ccode\u003e\u003ca\u003eServerConfig\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e ServerConfig { port      = 8000\n              , ramQuota  = 1 * 10^6\n              , diskQuota = 20 * 10^6\n              , tmpDir    = \"/tmp/\"\n              }\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "defaultServerConfig",
          "package": "happstack-lite",
          "signature": "ServerConfig",
          "source": "src/Happstack-Lite.html#defaultServerConfig",
          "type": "function"
        },
        "index": {
          "description": "reasonable default ServerConfig ServerConfig port ramQuota diskQuota tmpDir tmp",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "defaultServerConfig",
          "package": "happstack-lite",
          "partial": "Server Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:defaultServerConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop a path element and run the supplied handler if it matches the\n given string.\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler = dir \"foo\" $ dir \"bar\" $ subHandler\n\u003c/pre\u003e\u003cp\u003eThe path element can not contain '/'. See also \u003ccode\u003edirs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "dir",
          "package": "happstack-lite",
          "signature": "String -\u003e ServerPart a -\u003e ServerPart a",
          "source": "src/Happstack-Lite.html#dir",
          "type": "function"
        },
        "index": {
          "description": "Pop path element and run the supplied handler if it matches the given string handler ServerPart Response handler dir foo dir bar subHandler The path element can not contain See also dirs",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "dir",
          "normalized": "String-\u003eServerPart a-\u003eServerPart a",
          "package": "happstack-lite",
          "signature": "String-\u003eServerPart a-\u003eServerPart a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum file upload size (in bytes)\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "diskQuota",
          "package": "happstack-lite",
          "signature": "Int64",
          "source": "src/Happstack-Lite.html#ServerConfig",
          "type": "function"
        },
        "index": {
          "description": "maximum file upload size in bytes",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "diskQuota",
          "package": "happstack-lite",
          "partial": "Quota",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:diskQuota"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpire the named cookie immediately and set the cookie value to \u003ccode\u003e\"\"\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e main = serve Nothing $\n   do expireCookie \"name\"\n      ok $ \"The cookie has been expired.\"\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "expireCookie",
          "package": "happstack-lite",
          "signature": "String -\u003e ServerPart ()",
          "source": "src/Happstack-Lite.html#expireCookie",
          "type": "function"
        },
        "index": {
          "description": "Expire the named cookie immediately and set the cookie value to main serve Nothing do expireCookie name ok The cookie has been expired",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "expireCookie",
          "normalized": "String-\u003eServerPart()",
          "package": "happstack-lite",
          "partial": "Cookie",
          "signature": "String-\u003eServerPart()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:expireCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "fromReqURI",
          "package": "happstack-lite",
          "signature": "String -\u003e Maybe a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "fromReqURI",
          "normalized": "String-\u003eMaybe a",
          "package": "happstack-lite",
          "partial": "Req URI",
          "signature": "String-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:fromReqURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a header out of the request.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "getHeaderM",
          "package": "happstack-lite",
          "signature": "String -\u003e ServerPart (Maybe ByteString)",
          "source": "src/Happstack-Lite.html#getHeaderM",
          "type": "function"
        },
        "index": {
          "description": "Get header out of the request",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "getHeaderM",
          "normalized": "String-\u003eServerPart(Maybe ByteString)",
          "package": "happstack-lite",
          "partial": "Header",
          "signature": "String-\u003eServerPart(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:getHeaderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard using an arbitrary function on the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "guardRq",
          "package": "happstack-lite",
          "signature": "(Request -\u003e Bool) -\u003e ServerPart ()",
          "source": "src/Happstack-Lite.html#guardRq",
          "type": "function"
        },
        "index": {
          "description": "Guard using an arbitrary function on the Request",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "guardRq",
          "normalized": "(Request-\u003eBool)-\u003eServerPart()",
          "package": "happstack-lite",
          "partial": "Rq",
          "signature": "(Request-\u003eBool)-\u003eServerPart()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:guardRq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to guess the content-type of a file based on its extension\n\u003c/p\u003e\u003cp\u003edefaults to \u003ca\u003eapplication/octet-stream\u003c/a\u003e if no match was found.\n\u003c/p\u003e\u003cp\u003eUseful as an argument to \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emimeTypes\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "guessContentTypeM",
          "package": "happstack-lite",
          "signature": "MimeMap-\u003e FilePath -\u003e ServerPart String",
          "type": "function"
        },
        "index": {
          "description": "try to guess the content-type of file based on its extension defaults to application octet-stream if no match was found Useful as an argument to serveFile see also serveFile mimeTypes",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "guessContentTypeM",
          "normalized": "MimeMap-\u003eFilePath-\u003eServerPart String",
          "package": "happstack-lite",
          "partial": "Content Type",
          "signature": "MimeMap-\u003eFilePath-\u003eServerPart String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:guessContentTypeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "httpOnly",
          "package": "happstack-lite",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "httpOnly",
          "package": "happstack-lite",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:httpOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e500 Internal Server Error\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = serve Nothing $ internalServerError \"Sorry, there was an internal server error.\"\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "internalServerError",
          "package": "happstack-lite",
          "signature": "a -\u003e ServerPart a",
          "source": "src/Happstack-Lite.html#internalServerError",
          "type": "function"
        },
        "index": {
          "description": "Respond with Internal Server Error main serve Nothing internalServerError Sorry there was an internal server error",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "internalServerError",
          "normalized": "a-\u003eServerPart a",
          "package": "happstack-lite",
          "partial": "Server Error",
          "signature": "a-\u003eServerPart a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:internalServerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named input parameter as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookBSs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "lookBS",
          "package": "happstack-lite",
          "signature": "String -\u003e ServerPart ByteString",
          "source": "src/Happstack-Lite.html#lookBS",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named input parameter as lazy ByteString Searches the QUERY STRING followed by the Request body see also lookBSs",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "lookBS",
          "normalized": "String-\u003eServerPart ByteString",
          "package": "happstack-lite",
          "partial": "BS",
          "signature": "String-\u003eServerPart ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:lookBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all matches for the named input parameter as lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookBS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "lookBSs",
          "package": "happstack-lite",
          "signature": "String -\u003e ServerPart [ByteString]",
          "source": "src/Happstack-Lite.html#lookBSs",
          "type": "function"
        },
        "index": {
          "description": "Gets all matches for the named input parameter as lazy ByteString Searches the QUERY STRING followed by the Request body see also lookBS",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "lookBSs",
          "normalized": "String-\u003eServerPart[ByteString]",
          "package": "happstack-lite",
          "partial": "BSs",
          "signature": "String-\u003eServerPart[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:lookBSs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egets the named cookie as a string\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "lookCookieValue",
          "package": "happstack-lite",
          "signature": "String -\u003e ServerPart String",
          "source": "src/Happstack-Lite.html#lookCookieValue",
          "type": "function"
        },
        "index": {
          "description": "gets the named cookie as string",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "lookCookieValue",
          "normalized": "String-\u003eServerPart String",
          "package": "happstack-lite",
          "partial": "Cookie Value",
          "signature": "String-\u003eServerPart String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:lookCookieValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named file\n\u003c/p\u003e\u003cp\u003eFiles can only appear in the request body. Additionally, the form\n must set enctype=\"multipart/form-data\".\n\u003c/p\u003e\u003cp\u003eThis function returns a tuple consisting of:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The temporary location of the uploaded file\n\u003c/li\u003e\u003cli\u003e The local filename supplied by the browser\n\u003c/li\u003e\u003cli\u003e The content-type supplied by the browser\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eNOTE: You must move the file from the temporary location before the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e is sent. The temporary files are automatically removed\n after the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e is sent.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "lookFile",
          "package": "happstack-lite",
          "signature": "String-\u003e ServerPart (FilePath, FilePath, ContentType)",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named file Files can only appear in the request body Additionally the form must set enctype multipart form-data This function returns tuple consisting of The temporary location of the uploaded file The local filename supplied by the browser The content-type supplied by the browser NOTE You must move the file from the temporary location before the Response is sent The temporary files are automatically removed after the Response is sent",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "lookFile",
          "normalized": "String-\u003eServerPart(FilePath,FilePath,ContentType)",
          "package": "happstack-lite",
          "partial": "File",
          "signature": "String-\u003eServerPart(FilePath,FilePath,ContentType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:lookFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the first matching named input parameter as a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookTexts\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "lookText",
          "package": "happstack-lite",
          "signature": "String -\u003e ServerPart Text",
          "source": "src/Happstack-Lite.html#lookText",
          "type": "function"
        },
        "index": {
          "description": "Gets the first matching named input parameter as lazy Text Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also lookTexts",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "lookText",
          "normalized": "String-\u003eServerPart Text",
          "package": "happstack-lite",
          "partial": "Text",
          "signature": "String-\u003eServerPart Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:lookText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets all matches for the named input parameter as lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003eSearches the QUERY_STRING followed by the Request body.\n\u003c/p\u003e\u003cp\u003eThis function assumes the underlying octets are UTF-8 encoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elookText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "lookTexts",
          "package": "happstack-lite",
          "signature": "String -\u003e ServerPart [Text]",
          "source": "src/Happstack-Lite.html#lookTexts",
          "type": "function"
        },
        "index": {
          "description": "Gets all matches for the named input parameter as lazy Text Searches the QUERY STRING followed by the Request body This function assumes the underlying octets are UTF-8 encoded see also lookText",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "lookTexts",
          "normalized": "String-\u003eServerPart[Text]",
          "package": "happstack-lite",
          "partial": "Texts",
          "signature": "String-\u003eServerPart[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:lookTexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "matchMethod",
          "package": "happstack-lite",
          "signature": "m -\u003e Method -\u003e Bool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "matchMethod",
          "normalized": "a-\u003eMethod-\u003eBool",
          "package": "happstack-lite",
          "partial": "Method",
          "signature": "m-\u003eMethod-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:matchMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGuard against the request method\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e handler :: ServerPart Response\n handler =\n     do method [GET, HEAD]\n        ...\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "method",
          "package": "happstack-lite",
          "signature": "method -\u003e ServerPart ()",
          "source": "src/Happstack-Lite.html#method",
          "type": "function"
        },
        "index": {
          "description": "Guard against the request method Example handler ServerPart Response handler do method GET HEAD",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "method",
          "normalized": "a-\u003eServerPart()",
          "package": "happstack-lite",
          "signature": "method-\u003eServerPart()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReady collection of common mime types.\n Except for the first two entries, the mappings come from an Ubuntu 8.04 /etc/mime.types file.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "mimeTypes",
          "package": "happstack-lite",
          "signature": "MimeMap",
          "type": "function"
        },
        "index": {
          "description": "Ready collection of common mime types Except for the first two entries the mappings come from an Ubuntu etc mime.types file",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "mimeTypes",
          "package": "happstack-lite",
          "partial": "Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:mimeTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a cookie with a default version of 1, empty domain, a\n path of \u003ca\u003e/\u003c/a\u003e, secure == False and httpOnly == False\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003eaddCookie\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "mkCookie",
          "package": "happstack-lite",
          "signature": "String-\u003e String-\u003e Cookie",
          "type": "function"
        },
        "index": {
          "description": "Creates cookie with default version of empty domain path of secure False and httpOnly False see also addCookie",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "mkCookie",
          "normalized": "String-\u003eString-\u003eCookie",
          "package": "happstack-lite",
          "partial": "Cookie",
          "signature": "String-\u003eString-\u003eCookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:mkCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean associative operation\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "mplus",
          "package": "happstack-lite",
          "signature": "m a -\u003e m a -\u003e m a",
          "type": "method"
        },
        "index": {
          "description": "an associative operation",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "mplus",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "happstack-lite",
          "signature": "m a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:mplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "msum",
          "package": "happstack-lite",
          "signature": "[m a] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based concat function",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "msum",
          "normalized": "[a b]-\u003ea b",
          "package": "happstack-lite",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe identity of \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e.  It should also satisfy the equations\n\u003c/p\u003e\u003cpre\u003e mzero \u003e\u003e= f  =  mzero\n v \u003e\u003e mzero   =  mzero\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "mzero",
          "package": "happstack-lite",
          "signature": "m a",
          "type": "method"
        },
        "index": {
          "description": "the identity of mplus It should also satisfy the equations mzero mzero mzero mzero",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "mzero",
          "package": "happstack-lite",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:mzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e404 Not Found\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = serve Nothing $ notFound \"What you are looking for has not been found.\"\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "notFound",
          "package": "happstack-lite",
          "signature": "a -\u003e ServerPart a",
          "source": "src/Happstack-Lite.html#notFound",
          "type": "function"
        },
        "index": {
          "description": "Respond with Not Found main serve Nothing notFound What you are looking for has not been found",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "notFound",
          "normalized": "a-\u003eServerPart a",
          "package": "happstack-lite",
          "partial": "Found",
          "signature": "a-\u003eServerPart a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:notFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eguard which only succeeds if there are no remaining path segments\n\u003c/p\u003e\u003cp\u003eOften used if you want to explicitly assign a route for \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "nullDir",
          "package": "happstack-lite",
          "signature": "ServerPart ()",
          "source": "src/Happstack-Lite.html#nullDir",
          "type": "function"
        },
        "index": {
          "description": "guard which only succeeds if there are no remaining path segments Often used if you want to explicitly assign route for",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "nullDir",
          "normalized": "ServerPart()",
          "package": "happstack-lite",
          "partial": "Dir",
          "signature": "ServerPart()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:nullDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e200 OK\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = serve Nothing $ ok \"Everything is OK\"\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "ok",
          "package": "happstack-lite",
          "signature": "a -\u003e ServerPart a",
          "source": "src/Happstack-Lite.html#ok",
          "type": "function"
        },
        "index": {
          "description": "Respond with OK main serve Nothing ok Everything is OK",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ok",
          "normalized": "a-\u003eServerPart a",
          "package": "happstack-lite",
          "signature": "a-\u003eServerPart a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop a path element and parse it using the \u003ccode\u003efromReqURI\u003c/code\u003e in the\n \u003ccode\u003e\u003ca\u003eFromReqURI\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "path",
          "package": "happstack-lite",
          "signature": "(a -\u003e ServerPart b) -\u003e ServerPart b",
          "source": "src/Happstack-Lite.html#path",
          "type": "function"
        },
        "index": {
          "description": "Pop path element and parse it using the fromReqURI in the FromReqURI class",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "path",
          "normalized": "(a-\u003eServerPart b)-\u003eServerPart b",
          "package": "happstack-lite",
          "signature": "(a-\u003eServerPart b)-\u003eServerPart b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eport to listen on\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "port",
          "package": "happstack-lite",
          "signature": "Int",
          "source": "src/Happstack-Lite.html#ServerConfig",
          "type": "function"
        },
        "index": {
          "description": "port to listen on",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "port",
          "package": "happstack-lite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum amount of POST data (in bytes)\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "ramQuota",
          "package": "happstack-lite",
          "signature": "Int64",
          "source": "src/Happstack-Lite.html#ServerConfig",
          "type": "function"
        },
        "index": {
          "description": "maximum amount of POST data in bytes",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "ramQuota",
          "package": "happstack-lite",
          "partial": "Quota",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:ramQuota"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "secure",
          "package": "happstack-lite",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "secure",
          "package": "happstack-lite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:secure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e303 See Other\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = serve Nothing $ seeOther \"http://example.org/\" \"What you are looking for is now at http://example.org/\"\n\u003c/pre\u003e\u003cp\u003eNOTE: The second argument of \u003ccode\u003e\u003ca\u003eseeOther\u003c/a\u003e\u003c/code\u003e is the message body which will sent to the browser. According to the HTTP 1.1 spec,\n\u003c/p\u003e\u003cpre\u003ethe entity of the response SHOULD contain a short hypertext note with a hyperlink to the new URI(s).\u003c/pre\u003e\u003cp\u003eThis is because pre-HTTP/1.1 user agents do not support 303. However, in practice you can probably just use \u003ccode\u003e\"\"\u003c/code\u003e as the second argument.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "seeOther",
          "package": "happstack-lite",
          "signature": "uri -\u003e a -\u003e ServerPart a",
          "source": "src/Happstack-Lite.html#seeOther",
          "type": "function"
        },
        "index": {
          "description": "Respond with See Other main serve Nothing seeOther http example.org What you are looking for is now at http example.org NOTE The second argument of seeOther is the message body which will sent to the browser According to the HTTP spec the entity of the response SHOULD contain short hypertext note with hyperlink to the new URI This is because pre-HTTP user agents do not support However in practice you can probably just use as the second argument",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "seeOther",
          "normalized": "a-\u003eb-\u003eServerPart b",
          "package": "happstack-lite",
          "partial": "Other",
          "signature": "uri-\u003ea-\u003eServerPart a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:seeOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart the server and handle requests using the supplied \u003ccode\u003e\u003ca\u003eServerPart\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "serve",
          "package": "happstack-lite",
          "signature": "Maybe ServerConfig-\u003e ServerPart Response-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "start the server and handle requests using the supplied ServerPart",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "serve",
          "normalized": "Maybe ServerConfig-\u003eServerPart Response-\u003eIO()",
          "package": "happstack-lite",
          "signature": "Maybe ServerConfig-\u003eServerPart Response-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe files and directories from a directory and its subdirectories using \u003ccode\u003esendFile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e serveDirectory EnableBrowsing [\"index.html\"] \"path/to/files/on/disk\"\n\u003c/pre\u003e\u003cp\u003eIf the requested path does not match a file or directory on the\n disk, then \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e calls \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the requested path is a file then the file is served normally.\n\u003c/p\u003e\u003cp\u003eIf the requested path is a directory, then the result depends on\n what the first two arguments to the function are.\n\u003c/p\u003e\u003cp\u003eThe first argument controls whether directory browsing is\n enabled.\n\u003c/p\u003e\u003cp\u003eThe second argument is a list of index files (such as\n index.html).\n\u003c/p\u003e\u003cp\u003eWhen a directory is requested, \u003ccode\u003e\u003ca\u003eserveDirectory\u003c/a\u003e\u003c/code\u003e will first try to\n find one of the index files (in the order they are listed). If that\n fails, it will show a directory listing if \u003ccode\u003eEnableBrowsing\u003c/code\u003e is set,\n otherwise it will return \u003ccode\u003eforbidden \"Directory index forbidden\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere is an explicit list of all the possible outcomes when the\n argument is a (valid) directory:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ccode\u003eDisableBrowsing\u003c/code\u003e, empty index file list\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThis will always return, forbidden \"Directory index forbidden\"\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ccode\u003eDisableBrowsing\u003c/code\u003e, non-empty index file list\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003col\u003e\u003cli\u003e If an index file is found it will be shown.\n\u003c/li\u003e\u003cli\u003e Otherwise returns, forbidden \"Directory index forbidden\"\n\u003c/li\u003e\u003c/ol\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ccode\u003eEnableBrowsing\u003c/code\u003e, empty index file list\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eAlways shows a directory index.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e\u003ccode\u003eEnableBrowsing\u003c/code\u003e, non-empty index file list\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003col\u003e\u003cli\u003e If an index file is found it will be shown\n\u003c/li\u003e\u003cli\u003e Otherwise shows a directory index\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eserveFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "serveDirectory",
          "package": "happstack-lite",
          "signature": "Browsing-\u003e [FilePath]-\u003e FilePath-\u003e ServerPart Response",
          "type": "function"
        },
        "index": {
          "description": "Serve files and directories from directory and its subdirectories using sendFile Usage serveDirectory EnableBrowsing index.html path to files on disk If the requested path does not match file or directory on the disk then serveDirectory calls mzero If the requested path is file then the file is served normally If the requested path is directory then the result depends on what the first two arguments to the function are The first argument controls whether directory browsing is enabled The second argument is list of index files such as index.html When directory is requested serveDirectory will first try to find one of the index files in the order they are listed If that fails it will show directory listing if EnableBrowsing is set otherwise it will return forbidden Directory index forbidden Here is an explicit list of all the possible outcomes when the argument is valid directory DisableBrowsing empty index file list This will always return forbidden Directory index forbidden DisableBrowsing non-empty index file list If an index file is found it will be shown Otherwise returns forbidden Directory index forbidden EnableBrowsing empty index file list Always shows directory index EnableBrowsing non-empty index file list If an index file is found it will be shown Otherwise shows directory index see also serveFile",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "serveDirectory",
          "normalized": "Browsing-\u003e[FilePath]-\u003eFilePath-\u003eServerPart Response",
          "package": "happstack-lite",
          "partial": "Directory",
          "signature": "Browsing-\u003e[FilePath]-\u003eFilePath-\u003eServerPart Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:serveDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe a single, specified file. The name of the file being served is specified explicity. It is not derived automatically from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e url.\n\u003c/p\u003e\u003cp\u003eexample 1:\n\u003c/p\u003e\u003cp\u003eServe as a specific content-type:\n\u003c/p\u003e\u003cpre\u003e serveFile (asContentType \"image/jpeg\") \"/srv/data/image.jpg\"\n\u003c/pre\u003e\u003cp\u003eexample 2:\n\u003c/p\u003e\u003cp\u003eServe guessing the content-type from the extension:\n\u003c/p\u003e\u003cpre\u003e serveFile (guessContentTypeM mimeTypes) \"/srv/data/image.jpg\"\n\u003c/pre\u003e\u003cp\u003eIf the specified path does not exist or is not a file, this function will return \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWARNING: No security checks are performed.\n\u003c/p\u003e\u003cp\u003eNOTE: alias for \u003ccode\u003eserveFileUsing\u003c/code\u003e \u003ccode\u003efilePathSendFile\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "serveFile",
          "package": "happstack-lite",
          "signature": "(FilePath -\u003e ServerPart String)-\u003e FilePath-\u003e ServerPart Response",
          "type": "function"
        },
        "index": {
          "description": "Serve single specified file The name of the file being served is specified explicity It is not derived automatically from the Request url example Serve as specific content-type serveFile asContentType image jpeg srv data image.jpg example Serve guessing the content-type from the extension serveFile guessContentTypeM mimeTypes srv data image.jpg If the specified path does not exist or is not file this function will return mzero WARNING No security checks are performed NOTE alias for serveFileUsing filePathSendFile",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "serveFile",
          "normalized": "(FilePath-\u003eServerPart String)-\u003eFilePath-\u003eServerPart Response",
          "package": "happstack-lite",
          "partial": "File",
          "signature": "(FilePath-\u003eServerPart String)-\u003eFilePath-\u003eServerPart Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:serveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a header into the response.  This will replace an existing\n header of the same name.  Use \u003ccode\u003e\u003ca\u003eaddHeaderM\u003c/a\u003e\u003c/code\u003e if you want to add more\n than one header of the same name.\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "setHeaderM",
          "package": "happstack-lite",
          "signature": "String -\u003e String -\u003e ServerPart ()",
          "source": "src/Happstack-Lite.html#setHeaderM",
          "type": "function"
        },
        "index": {
          "description": "Set header into the response This will replace an existing header of the same name Use addHeaderM if you want to add more than one header of the same name",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "setHeaderM",
          "normalized": "String-\u003eString-\u003eServerPart()",
          "package": "happstack-lite",
          "partial": "Header",
          "signature": "String-\u003eString-\u003eServerPart()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:setHeaderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an arbitrary return code in your response.\n\u003c/p\u003e\u003cp\u003eA filter for setting the response code. Generally you will use a\n helper function like \u003ccode\u003e\u003ca\u003eok\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eseeOther\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = serve Nothing $ do setResponseCode 200\n                           return \"Everything is OK\"\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "setResponseCode",
          "package": "happstack-lite",
          "signature": "Int-\u003e ServerPart ()",
          "type": "function"
        },
        "index": {
          "description": "Set an arbitrary return code in your response filter for setting the response code Generally you will use helper function like ok or seeOther main serve Nothing do setResponseCode return Everything is OK",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "setResponseCode",
          "normalized": "Int-\u003eServerPart()",
          "package": "happstack-lite",
          "partial": "Response Code",
          "signature": "Int-\u003eServerPart()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:setResponseCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etemporary directory for file uploads\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "tmpDir",
          "package": "happstack-lite",
          "signature": "FilePath",
          "source": "src/Happstack-Lite.html#ServerConfig",
          "type": "function"
        },
        "index": {
          "description": "temporary directory for file uploads",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "tmpDir",
          "package": "happstack-lite",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:tmpDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "toContentType",
          "package": "happstack-lite",
          "signature": "a -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "toContentType",
          "normalized": "a-\u003eByteString",
          "package": "happstack-lite",
          "partial": "Content Type",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:toContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "toMessage",
          "package": "happstack-lite",
          "signature": "a -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "toMessage",
          "normalized": "a-\u003eByteString",
          "package": "happstack-lite",
          "partial": "Message",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:toMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Lite",
          "name": "toResponse",
          "package": "happstack-lite",
          "signature": "a -\u003e Response",
          "type": "method"
        },
        "index": {
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "toResponse",
          "normalized": "a-\u003eResponse",
          "package": "happstack-lite",
          "partial": "Response",
          "signature": "a-\u003eResponse",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:toResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA low-level function to build a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from a content-type\n and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e in a manner similar to the \u003ccode\u003e\u003ca\u003eToMessage\u003c/a\u003e\u003c/code\u003e class,\n but without requiring an instance declaration.\n\u003c/p\u003e\u003cp\u003eexample:\n\u003c/p\u003e\u003cpre\u003e import Data.ByteString.Char8 as C\n import Data.ByteString.Lazy.Char8 as L\n import Happstack.Lite\n\n main = serve Nothing $ ok $ toResponseBS (C.pack \"text/plain\") (L.pack \"hello, world\")\n\u003c/pre\u003e\u003cp\u003e(note: \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e only work for ascii. For unicode strings you would need to use \u003ccode\u003eutf8-string\u003c/code\u003e, \u003ccode\u003etext\u003c/code\u003e, or something similar to create a valid \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Happstack.Lite",
          "name": "toResponseBS",
          "package": "happstack-lite",
          "signature": "ByteString-\u003e ByteString-\u003e Response",
          "type": "function"
        },
        "index": {
          "description": "low-level function to build Response from content-type and ByteString Creates Response in manner similar to the ToMessage class but without requiring an instance declaration example import Data.ByteString.Char8 as import Data.ByteString.Lazy.Char8 as import Happstack.Lite main serve Nothing ok toResponseBS C.pack text plain L.pack hello world note pack and pack only work for ascii For unicode strings you would need to use utf8-string text or something similar to create valid ByteString",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "toResponseBS",
          "normalized": "ByteString-\u003eByteString-\u003eResponse",
          "package": "happstack-lite",
          "partial": "Response BS",
          "signature": "ByteString-\u003eByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:toResponseBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond with \u003ccode\u003e401 Unauthorized\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e main = serve Nothing $ unauthorized \"You are not authorized.\"\n\u003c/pre\u003e",
          "module": "Happstack.Lite",
          "name": "unauthorized",
          "package": "happstack-lite",
          "signature": "a -\u003e ServerPart a",
          "source": "src/Happstack-Lite.html#unauthorized",
          "type": "function"
        },
        "index": {
          "description": "Respond with Unauthorized main serve Nothing unauthorized You are not authorized",
          "hierarchy": "Happstack Lite",
          "module": "Happstack.Lite",
          "name": "unauthorized",
          "normalized": "a-\u003eServerPart a",
          "package": "happstack-lite",
          "signature": "a-\u003eServerPart a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-lite/docs/Happstack-Lite.html#v:unauthorized"
      }
    }
  ]
]