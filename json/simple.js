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
        "word": "simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFrank is a Sinatra-inspired DSL (see \u003ca\u003ehttp://www.sinatrarb.com\u003c/a\u003e) for creating\nroutes. It is composable with all \u003ccode\u003e\u003ca\u003eToApplication\u003c/a\u003e\u003c/code\u003e types, but is designed to be used\nwith \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003es. Each verb (\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, etc') takes a\nURL pattern of the form \"/dir/:paramname/dir\" (see \u003ccode\u003e\u003ca\u003eroutePattern\u003c/a\u003e\u003c/code\u003e for\ndetails) and a \u003ccode\u003e\u003ca\u003eToApplication\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n  main :: IO ()\n  main = run 3000 $ controllerApp () $ do\n    get \"/\" $ do\n      req \u003c- request\n      return $ okHtml $ fromString $\n        \"Welcome Home \" ++ (show $ serverName req)\n    get \"/user/:id\" $ do\n      userId \u003c- queryParam \"id\" \u003e\u003e= fromMaybe \"\"\n      return $ ok \"text/json\" $ fromString $\n        \"{\\\"myid\\\": \" ++ (show userId) ++ \"}\"\n    put \"/user/:id\" $ do\n      ...\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Web.Frank",
          "name": "Frank",
          "package": "simple",
          "source": "src/Web-Frank.html",
          "type": "module"
        },
        "index": {
          "description": "Frank is Sinatra-inspired DSL see http www.sinatrarb.com for creating routes It is composable with all ToApplication types but is designed to be used with Controller Each verb get post put etc takes URL pattern of the form dir paramname dir see routePattern for details and ToApplication main IO main run controllerApp do get do req request return okHtml fromString Welcome Home show serverName req get user id do userId queryParam id fromMaybe return ok text json fromString myid show userId put user id do",
          "hierarchy": "Web Frank",
          "module": "Web.Frank",
          "name": "Frank",
          "package": "simple",
          "partial": "Frank",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Frank.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches the DELETE method on the given URL pattern\n\u003c/p\u003e",
          "module": "Web.Frank",
          "name": "delete",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Frank.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Matches the DELETE method on the given URL pattern",
          "hierarchy": "Web Frank",
          "module": "Web.Frank",
          "name": "delete",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Frank.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches the GET method on the given URL pattern\n\u003c/p\u003e",
          "module": "Web.Frank",
          "name": "get",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Frank.html#get",
          "type": "function"
        },
        "index": {
          "description": "Matches the GET method on the given URL pattern",
          "hierarchy": "Web Frank",
          "module": "Web.Frank",
          "name": "get",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Frank.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches the OPTIONS method on the given URL pattern\n\u003c/p\u003e",
          "module": "Web.Frank",
          "name": "options",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Frank.html#options",
          "type": "function"
        },
        "index": {
          "description": "Matches the OPTIONS method on the given URL pattern",
          "hierarchy": "Web Frank",
          "module": "Web.Frank",
          "name": "options",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Frank.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches the POST method on the given URL pattern\n\u003c/p\u003e",
          "module": "Web.Frank",
          "name": "post",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Frank.html#post",
          "type": "function"
        },
        "index": {
          "description": "Matches the POST method on the given URL pattern",
          "hierarchy": "Web Frank",
          "module": "Web.Frank",
          "name": "post",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Frank.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches the PUT method on the given URL pattern\n\u003c/p\u003e",
          "module": "Web.Frank",
          "name": "put",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Frank.html#put",
          "type": "function"
        },
        "index": {
          "description": "Matches the PUT method on the given URL pattern",
          "hierarchy": "Web Frank",
          "module": "Web.Frank",
          "name": "put",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Frank.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "REST",
          "package": "simple",
          "source": "src/Web-REST.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "REST",
          "package": "simple",
          "partial": "REST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "REST",
          "package": "simple",
          "source": "src/Web-REST.html#REST",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "REST",
          "package": "simple",
          "partial": "REST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#t:REST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "RESTController",
          "package": "simple",
          "source": "src/Web-REST.html#RESTController",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "RESTController",
          "package": "simple",
          "partial": "RESTController",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#t:RESTController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "REST",
          "package": "simple",
          "signature": "REST",
          "source": "src/Web-REST.html#REST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "REST",
          "package": "simple",
          "partial": "REST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:REST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "create",
          "package": "simple",
          "signature": "Controller r a -\u003e RESTController r",
          "source": "src/Web-REST.html#create",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "create",
          "normalized": "Controller a b-\u003eRESTController a",
          "package": "simple",
          "signature": "Controller r a-\u003eRESTController r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "delete",
          "package": "simple",
          "signature": "Controller r a -\u003e RESTController r",
          "source": "src/Web-REST.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "delete",
          "normalized": "Controller a b-\u003eRESTController a",
          "package": "simple",
          "signature": "Controller r a-\u003eRESTController r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "edit",
          "package": "simple",
          "signature": "Controller r a -\u003e RESTController r",
          "source": "src/Web-REST.html#edit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "edit",
          "normalized": "Controller a b-\u003eRESTController a",
          "package": "simple",
          "signature": "Controller r a-\u003eRESTController r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:edit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "index",
          "package": "simple",
          "signature": "Controller r a -\u003e RESTController r",
          "source": "src/Web-REST.html#index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "index",
          "normalized": "Controller a b-\u003eRESTController a",
          "package": "simple",
          "signature": "Controller r a-\u003eRESTController r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "new",
          "package": "simple",
          "signature": "Controller r a -\u003e RESTController r",
          "source": "src/Web-REST.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "new",
          "normalized": "Controller a b-\u003eRESTController a",
          "package": "simple",
          "signature": "Controller r a-\u003eRESTController r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "rest",
          "package": "simple",
          "signature": "RESTControllerM r a -\u003e REST r",
          "source": "src/Web-REST.html#rest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "rest",
          "normalized": "RESTControllerM a b-\u003eREST a",
          "package": "simple",
          "signature": "RESTControllerM r a-\u003eREST r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "restCreate",
          "package": "simple",
          "signature": "Controller r ()",
          "source": "src/Web-REST.html#REST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "restCreate",
          "normalized": "Controller a()",
          "package": "simple",
          "partial": "Create",
          "signature": "Controller r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:restCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "restDelete",
          "package": "simple",
          "signature": "Controller r ()",
          "source": "src/Web-REST.html#REST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "restDelete",
          "normalized": "Controller a()",
          "package": "simple",
          "partial": "Delete",
          "signature": "Controller r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:restDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "restEdit",
          "package": "simple",
          "signature": "Controller r ()",
          "source": "src/Web-REST.html#REST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "restEdit",
          "normalized": "Controller a()",
          "package": "simple",
          "partial": "Edit",
          "signature": "Controller r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:restEdit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "restIndex",
          "package": "simple",
          "signature": "Controller r ()",
          "source": "src/Web-REST.html#REST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "restIndex",
          "normalized": "Controller a()",
          "package": "simple",
          "partial": "Index",
          "signature": "Controller r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:restIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "restNew",
          "package": "simple",
          "signature": "Controller r ()",
          "source": "src/Web-REST.html#REST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "restNew",
          "normalized": "Controller a()",
          "package": "simple",
          "partial": "New",
          "signature": "Controller r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:restNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "restShow",
          "package": "simple",
          "signature": "Controller r ()",
          "source": "src/Web-REST.html#REST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "restShow",
          "normalized": "Controller a()",
          "package": "simple",
          "partial": "Show",
          "signature": "Controller r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:restShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "restUpdate",
          "package": "simple",
          "signature": "Controller r ()",
          "source": "src/Web-REST.html#REST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "restUpdate",
          "normalized": "Controller a()",
          "package": "simple",
          "partial": "Update",
          "signature": "Controller r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:restUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "routeREST",
          "package": "simple",
          "signature": "REST r -\u003e Controller r ()",
          "source": "src/Web-REST.html#routeREST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "routeREST",
          "normalized": "REST a-\u003eController a()",
          "package": "simple",
          "partial": "REST",
          "signature": "REST r-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:routeREST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "show",
          "package": "simple",
          "signature": "Controller r a -\u003e RESTController r",
          "source": "src/Web-REST.html#show",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "show",
          "normalized": "Controller a b-\u003eRESTController a",
          "package": "simple",
          "signature": "Controller r a-\u003eRESTController r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.REST",
          "name": "update",
          "package": "simple",
          "signature": "Controller r a -\u003e RESTController r",
          "source": "src/Web-REST.html#update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web REST",
          "module": "Web.REST",
          "name": "update",
          "normalized": "Controller a b-\u003eRESTController a",
          "package": "simple",
          "signature": "Controller r a-\u003eRESTController r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-REST.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides HTTP Basic Authentication.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Simple.Auth",
          "name": "Auth",
          "package": "simple",
          "source": "src/Web-Simple-Auth.html",
          "type": "module"
        },
        "index": {
          "description": "Provides HTTP Basic Authentication",
          "hierarchy": "Web Simple Auth",
          "module": "Web.Simple.Auth",
          "name": "Auth",
          "package": "simple",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAuthRouter\u003c/a\u003e\u003c/code\u003e authenticates a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and, if successful, forwards the\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003eRouteable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Auth",
          "name": "AuthRouter",
          "package": "simple",
          "source": "src/Web-Simple-Auth.html#AuthRouter",
          "type": "type"
        },
        "index": {
          "description": "An AuthRouter authenticates Request and if successful forwards the Request to the Routeable",
          "hierarchy": "Web Simple Auth",
          "module": "Web.Simple.Auth",
          "name": "AuthRouter",
          "package": "simple",
          "partial": "Auth Router",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Auth.html#t:AuthRouter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps an \u003ccode\u003e\u003ca\u003eAuthRouter\u003c/a\u003e\u003c/code\u003e to take a simpler authentication function (that just\n just takes a username and password, and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e). It also\n adds an \"X-User\" header to the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e with the authenticated user's\n name (the first argument to the authentication function).\n\u003c/p\u003e",
          "module": "Web.Simple.Auth",
          "name": "authRewriteReq",
          "package": "simple",
          "signature": "AuthRouter r a -\u003e (ByteString -\u003e ByteString -\u003e Controller r Bool) -\u003e Controller r a -\u003e Controller r a",
          "source": "src/Web-Simple-Auth.html#authRewriteReq",
          "type": "function"
        },
        "index": {
          "description": "Wraps an AuthRouter to take simpler authentication function that just just takes username and password and returns True or False It also adds an X-User header to the Request with the authenticated user name the first argument to the authentication function",
          "hierarchy": "Web Simple Auth",
          "module": "Web.Simple.Auth",
          "name": "authRewriteReq",
          "normalized": "AuthRouter a b-\u003e(ByteString-\u003eByteString-\u003eController a Bool)-\u003eController a b-\u003eController a b",
          "package": "simple",
          "partial": "Rewrite Req",
          "signature": "AuthRouter r a-\u003e(ByteString-\u003eByteString-\u003eController r Bool)-\u003eController r a-\u003eController r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Auth.html#v:authRewriteReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eRoute\u003c/code\u003e that uses HTTP basic authentication to authenticate a request for a realm\n with the given username ans password. The request is rewritten with an 'X-User' header\n containing the authenticated username before being passed to the next \u003ccode\u003eRoute\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Auth",
          "name": "basicAuth",
          "package": "simple",
          "signature": "String-\u003e ByteString-\u003e ByteString-\u003e Controller r a-\u003e Controller r a",
          "type": "function"
        },
        "index": {
          "description": "Route that uses HTTP basic authentication to authenticate request for realm with the given username ans password The request is rewritten with an X-User header containing the authenticated username before being passed to the next Route",
          "hierarchy": "Web Simple Auth",
          "module": "Web.Simple.Auth",
          "name": "basicAuth",
          "normalized": "String-\u003eByteString-\u003eByteString-\u003eController a b-\u003eController a b",
          "package": "simple",
          "partial": "Auth",
          "signature": "String-\u003eByteString-\u003eByteString-\u003eController r a-\u003eController r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Auth.html#v:basicAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAuthRouter\u003c/a\u003e\u003c/code\u003e that uses HTTP basic authentication to authenticate a request\n in a particular realm.\n\u003c/p\u003e",
          "module": "Web.Simple.Auth",
          "name": "basicAuthRoute",
          "package": "simple",
          "signature": "String -\u003e AuthRouter r a",
          "source": "src/Web-Simple-Auth.html#basicAuthRoute",
          "type": "function"
        },
        "index": {
          "description": "An AuthRouter that uses HTTP basic authentication to authenticate request in particular realm",
          "hierarchy": "Web Simple Auth",
          "module": "Web.Simple.Auth",
          "name": "basicAuthRoute",
          "normalized": "String-\u003eAuthRouter a b",
          "package": "simple",
          "partial": "Auth Route",
          "signature": "String-\u003eAuthRouter r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Auth.html#v:basicAuthRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e provides a convenient syntax for writting \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n  code as a Monadic action with access to an HTTP request as well as app\n  specific data (e.g. a database connection pool, app configuration etc.)\n  This module also defines some\n  helper functions that leverage this feature. For example, \u003ccode\u003e\u003ca\u003eredirectBack\u003c/a\u003e\u003c/code\u003e\n  reads the underlying request to extract the referer and returns a redirect\n  response:\n\u003c/p\u003e\u003cpre\u003e\n    myController = do\n      ...\n      if badLogin then\n        redirectBack\n        else\n          ...\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Web.Simple.Controller",
          "name": "Controller",
          "package": "simple",
          "source": "src/Web-Simple-Controller.html",
          "type": "module"
        },
        "index": {
          "description": "Controller provides convenient syntax for writting Application code as Monadic action with access to an HTTP request as well as app specific data e.g database connection pool app configuration etc This module also defines some helper functions that leverage this feature For example redirectBack reads the underlying request to extract the referer and returns redirect response myController do if badLogin then redirectBack else",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "Controller",
          "package": "simple",
          "partial": "Controller",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Controller Monad is both a State-like monad which, when run, computes\n either a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e or a result. Within the Controller Monad, the remainder\n of the computation can be short-circuited by \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003eing with a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "Controller",
          "package": "simple",
          "source": "src/Web-Simple-Controller.html#Controller",
          "type": "newtype"
        },
        "index": {
          "description": "The Controller Monad is both State-like monad which when run computes either Response or result Within the Controller Monad the remainder of the computation can be short-circuited by respond ing with Response",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "Controller",
          "package": "simple",
          "partial": "Controller",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#t:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Controller",
          "name": "ControllerException",
          "package": "simple",
          "source": "src/Web-Simple-Controller.html#ControllerException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "ControllerException",
          "package": "simple",
          "partial": "Controller Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#t:ControllerException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of types into which query parameters may be converted\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "Parseable",
          "package": "simple",
          "source": "src/Web-Simple-Controller.html#Parseable",
          "type": "class"
        },
        "index": {
          "description": "The class of types into which query parameters may be converted",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "Parseable",
          "package": "simple",
          "partial": "Parseable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#t:Parseable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of types that can be converted to an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "ToApplication",
          "package": "simple",
          "source": "src/Web-Simple-Controller.html#ToApplication",
          "type": "class"
        },
        "index": {
          "description": "The class of types that can be converted to an Application",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "ToApplication",
          "package": "simple",
          "partial": "To Application",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#t:ToApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Controller",
          "name": "Controller",
          "package": "simple",
          "signature": "Controller (ControllerState r -\u003e IO (Either Response a, ControllerState r))",
          "source": "src/Web-Simple-Controller.html#Controller",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "Controller",
          "normalized": "Controller(ControllerState a-\u003eIO(Either Response b,ControllerState a))",
          "package": "simple",
          "partial": "Controller",
          "signature": "Controller(ControllerState r-\u003eIO(Either Response a,ControllerState r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads and returns the body of the HTTP request.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "body",
          "package": "simple",
          "signature": "Controller r ByteString",
          "source": "src/Web-Simple-Controller.html#body",
          "type": "function"
        },
        "index": {
          "description": "Reads and returns the body of the HTTP request",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "body",
          "package": "simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the controller into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "controllerApp",
          "package": "simple",
          "signature": "r -\u003e Controller r a -\u003e Application",
          "source": "src/Web-Simple-Controller.html#controllerApp",
          "type": "function"
        },
        "index": {
          "description": "Convert the controller into an Application",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "controllerApp",
          "normalized": "a-\u003eController a b-\u003eApplication",
          "package": "simple",
          "partial": "App",
          "signature": "r-\u003eController r a-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:controllerApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the application-specific state\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "controllerState",
          "package": "simple",
          "signature": "Controller r r",
          "source": "src/Web-Simple-Controller.html#controllerState",
          "type": "function"
        },
        "index": {
          "description": "Extract the application-specific state",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "controllerState",
          "package": "simple",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:controllerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an application to a controller\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "fromApp",
          "package": "simple",
          "signature": "a -\u003e Controller r ()",
          "source": "src/Web-Simple-Controller.html#fromApp",
          "type": "function"
        },
        "index": {
          "description": "Lift an application to controller",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "fromApp",
          "normalized": "a-\u003eController b()",
          "package": "simple",
          "partial": "App",
          "signature": "a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:fromApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the request for the given computation\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "localRequest",
          "package": "simple",
          "signature": "(Request -\u003e Request) -\u003e Controller r a -\u003e Controller r a",
          "source": "src/Web-Simple-Controller.html#localRequest",
          "type": "function"
        },
        "index": {
          "description": "Modify the request for the given computation",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "localRequest",
          "normalized": "(Request-\u003eRequest)-\u003eController a b-\u003eController a b",
          "package": "simple",
          "partial": "Request",
          "signature": "(Request-\u003eRequest)-\u003eController r a-\u003eController r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:localRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a HTML form from the request body. It returns a list of \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003es as\n well as a list of \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003es, which are pairs mapping the name of a \u003cem\u003efile\u003c/em\u003e form\n field to a \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e pointing to a temporary file with the contents of the\n upload.\n\u003c/p\u003e\u003cpre\u003e\n   myController = do\n     (prms, files) \u003c- parseForm\n     let mPicFile = lookup \"profile_pic\" files\n     case mPicFile of\n       Just (picFile) -\u003e do\n         sourceFile (fileContent picFile) $$\n           sinkFile (\"images/\" ++ (fileName picFile))\n         respond $ redirectTo \"/\"\n       Nothing -\u003e redirectBack\n\u003c/pre\u003e",
          "module": "Web.Simple.Controller",
          "name": "parseForm",
          "package": "simple",
          "signature": "Controller r ([Param], [(ByteString, FileInfo ByteString)])",
          "source": "src/Web-Simple-Controller.html#parseForm",
          "type": "function"
        },
        "index": {
          "description": "Parses HTML form from the request body It returns list of Param as well as list of File which are pairs mapping the name of file form field to FileInfo pointing to temporary file with the contents of the upload myController do prms files parseForm let mPicFile lookup profile pic files case mPicFile of Just picFile do sourceFile fileContent picFile sinkFile images fileName picFile respond redirectTo Nothing redirectBack",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "parseForm",
          "normalized": "Controller a([Param],[(ByteString,FileInfo ByteString)])",
          "package": "simple",
          "partial": "Form",
          "signature": "Controller r([Param],[(ByteString,FileInfo ByteString)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:parseForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Controller",
          "name": "putState",
          "package": "simple",
          "signature": "r -\u003e Controller r ()",
          "source": "src/Web-Simple-Controller.html#putState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "putState",
          "normalized": "a-\u003eController a()",
          "package": "simple",
          "partial": "State",
          "signature": "r-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:putState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up the parameter name in the request's query string and returns the\n \u003ccode\u003eParseable\u003c/code\u003e value or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, for a request with query string: \"?foo=bar&baz=7\",\n \u003ccode\u003equeryParam \"foo\"\u003c/code\u003e\n would return \u003ccode\u003eJust \u003ca\u003ebar\u003c/a\u003e\u003c/code\u003e, but\n \u003ccode\u003equeryParam \"zap\"\u003c/code\u003e\n would return \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "queryParam",
          "package": "simple",
          "signature": "ByteString-\u003e Controller r (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Looks up the parameter name in the request query string and returns the Parseable value or Nothing For example for request with query string foo bar baz queryParam foo would return Just bar but queryParam zap would return Nothing",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "queryParam",
          "normalized": "ByteString-\u003eController a(Maybe b)",
          "package": "simple",
          "partial": "Param",
          "signature": "ByteString-\u003eController r(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:queryParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equeryParam\u003c/a\u003e\u003c/code\u003e, but throws an exception if the parameter is not present.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "queryParam'",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a",
          "source": "src/Web-Simple-Controller.html#queryParam%27",
          "type": "function"
        },
        "index": {
          "description": "Like queryParam but throws an exception if the parameter is not present",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "queryParam'",
          "normalized": "ByteString-\u003eController a b",
          "package": "simple",
          "partial": "Param'",
          "signature": "ByteString-\u003eController r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:queryParam-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects all values with the given parameter name\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "queryParams",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r [a]",
          "source": "src/Web-Simple-Controller.html#queryParams",
          "type": "function"
        },
        "index": {
          "description": "Selects all values with the given parameter name",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "queryParams",
          "normalized": "ByteString-\u003eController a[b]",
          "package": "simple",
          "partial": "Params",
          "signature": "ByteString-\u003eController r[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:queryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equeryParam\u003c/a\u003e\u003c/code\u003e, but further processes the parameter value with \u003ccode\u003eread\u003c/code\u003e.\n If that conversion fails, an exception is thrown.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "readQueryParam",
          "package": "simple",
          "signature": "ByteString-\u003e Controller r (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Like queryParam but further processes the parameter value with read If that conversion fails an exception is thrown",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "readQueryParam",
          "normalized": "ByteString-\u003eController a(Maybe b)",
          "package": "simple",
          "partial": "Query Param",
          "signature": "ByteString-\u003eController r(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:readQueryParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereadQueryParam\u003c/a\u003e\u003c/code\u003e, but throws an exception if the parameter is not present.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "readQueryParam'",
          "package": "simple",
          "signature": "ByteString-\u003e Controller r a",
          "type": "function"
        },
        "index": {
          "description": "Like readQueryParam but throws an exception if the parameter is not present",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "readQueryParam'",
          "normalized": "ByteString-\u003eController a b",
          "package": "simple",
          "partial": "Query Param'",
          "signature": "ByteString-\u003eController r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:readQueryParam-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equeryParams\u003c/a\u003e\u003c/code\u003e, but further processes the parameter values with \u003ccode\u003eread\u003c/code\u003e.\n If any read-conversion fails, an exception is thrown.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "readQueryParams",
          "package": "simple",
          "signature": "ByteString-\u003e Controller r [a]",
          "type": "function"
        },
        "index": {
          "description": "Like queryParams but further processes the parameter values with read If any read-conversion fails an exception is thrown",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "readQueryParams",
          "normalized": "ByteString-\u003eController a[b]",
          "package": "simple",
          "partial": "Query Params",
          "signature": "ByteString-\u003eController r[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:readQueryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect back to the referer. If the referer header is not present\n redirect to root (i.e., \u003ccode\u003e/\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "redirectBack",
          "package": "simple",
          "signature": "Controller r ()",
          "source": "src/Web-Simple-Controller.html#redirectBack",
          "type": "function"
        },
        "index": {
          "description": "Redirect back to the referer If the referer header is not present redirect to root i.e",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "redirectBack",
          "normalized": "Controller a()",
          "package": "simple",
          "partial": "Back",
          "signature": "Controller r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:redirectBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect back to the referer. If the referer header is not present\n fallback on the given \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "redirectBackOr",
          "package": "simple",
          "signature": "Response-\u003e Controller r ()",
          "type": "function"
        },
        "index": {
          "description": "Redirect back to the referer If the referer header is not present fallback on the given Response",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "redirectBackOr",
          "normalized": "Response-\u003eController a()",
          "package": "simple",
          "partial": "Back Or",
          "signature": "Response-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:redirectBackOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the request\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "request",
          "package": "simple",
          "signature": "Controller r Request",
          "source": "src/Web-Simple-Controller.html#request",
          "type": "function"
        },
        "index": {
          "description": "Extract the request",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "request",
          "package": "simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value of the given request header or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is not\n present in the HTTP request.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "requestHeader",
          "package": "simple",
          "signature": "HeaderName -\u003e Controller r (Maybe ByteString)",
          "source": "src/Web-Simple-Controller.html#requestHeader",
          "type": "function"
        },
        "index": {
          "description": "Returns the value of the given request header or Nothing if it is not present in the HTTP request",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "requestHeader",
          "normalized": "HeaderName-\u003eController a(Maybe ByteString)",
          "package": "simple",
          "partial": "Header",
          "signature": "HeaderName-\u003eController r(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:requestHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a response\n\u003c/p\u003e\u003cpre\u003erespond r \u003e\u003e= f === respond r\u003c/pre\u003e",
          "module": "Web.Simple.Controller",
          "name": "respond",
          "package": "simple",
          "signature": "Response -\u003e Controller r a",
          "source": "src/Web-Simple-Controller.html#respond",
          "type": "function"
        },
        "index": {
          "description": "Provide response respond respond",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "respond",
          "normalized": "Response-\u003eController a b",
          "package": "simple",
          "signature": "Response-\u003eController r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:respond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the request's Content-Type exactly matches the given string\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "routeAccept",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Simple-Controller.html#routeAccept",
          "type": "function"
        },
        "index": {
          "description": "Matches if the request Content-Type exactly matches the given string",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "routeAccept",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "partial": "Accept",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:routeAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches on the hostname from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. The route only succeeds on\n exact matches.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "routeHost",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Simple-Controller.html#routeHost",
          "type": "function"
        },
        "index": {
          "description": "Matches on the hostname from the Request The route only succeeds on exact matches",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "routeHost",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "partial": "Host",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:routeHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches on the HTTP request method (e.g. \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "routeMethod",
          "package": "simple",
          "signature": "StdMethod -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Simple-Controller.html#routeMethod",
          "type": "function"
        },
        "index": {
          "description": "Matches on the HTTP request method e.g GET POST PUT",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "routeMethod",
          "normalized": "StdMethod-\u003eController a b-\u003eController a()",
          "package": "simple",
          "partial": "Method",
          "signature": "StdMethod-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:routeMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the first directory in the path matches the given \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "routeName",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Simple-Controller.html#routeName",
          "type": "function"
        },
        "index": {
          "description": "Matches if the first directory in the path matches the given ByteString",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "routeName",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "partial": "Name",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:routeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes the given URL pattern. Patterns can include\n directories as well as variable patterns (prefixed with \u003ccode\u003e:\u003c/code\u003e) to be added\n to \u003ccode\u003e\u003ca\u003equeryString\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003erouteVar\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e /posts/:id\n\u003c/li\u003e\u003cli\u003e /posts/:id/new\n\u003c/li\u003e\u003cli\u003e /:date/posts/:category/new\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Simple.Controller",
          "name": "routePattern",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Simple-Controller.html#routePattern",
          "type": "function"
        },
        "index": {
          "description": "Routes the given URL pattern Patterns can include directories as well as variable patterns prefixed with to be added to queryString see routeVar posts id posts id new date posts category new",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "routePattern",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "partial": "Pattern",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:routePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the path is empty.\n\u003c/p\u003e\u003cp\u003eNote that this route checks that \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e\n is empty, so it works as expected in nested contexts that have\n popped components from the \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "routeTop",
          "package": "simple",
          "signature": "Controller r a -\u003e Controller r ()",
          "source": "src/Web-Simple-Controller.html#routeTop",
          "type": "function"
        },
        "index": {
          "description": "Matches if the path is empty Note that this route checks that pathInfo is empty so it works as expected in nested contexts that have popped components from the pathInfo list",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "routeTop",
          "normalized": "Controller a b-\u003eController a()",
          "package": "simple",
          "partial": "Top",
          "signature": "Controller r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:routeTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways matches if there is at least one directory in \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e but and\n adds a parameter to \u003ccode\u003e\u003ca\u003equeryString\u003c/a\u003e\u003c/code\u003e where the key is the first parameter and\n the value is the directory consumed from the path.\n\u003c/p\u003e",
          "module": "Web.Simple.Controller",
          "name": "routeVar",
          "package": "simple",
          "signature": "ByteString -\u003e Controller r a -\u003e Controller r ()",
          "source": "src/Web-Simple-Controller.html#routeVar",
          "type": "function"
        },
        "index": {
          "description": "Always matches if there is at least one directory in pathInfo but and adds parameter to queryString where the key is the first parameter and the value is the directory consumed from the path",
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "routeVar",
          "normalized": "ByteString-\u003eController a b-\u003eController a()",
          "package": "simple",
          "partial": "Var",
          "signature": "ByteString-\u003eController r a-\u003eController r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:routeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Controller",
          "name": "runController",
          "package": "simple",
          "signature": "Controller r a -\u003e r -\u003e Request -\u003e IO (Either Response a)",
          "source": "src/Web-Simple-Controller.html#runController",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "runController",
          "normalized": "Controller a b-\u003ea-\u003eRequest-\u003eIO(Either Response b)",
          "package": "simple",
          "partial": "Controller",
          "signature": "Controller r a-\u003er-\u003eRequest-\u003eIO(Either Response a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:runController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Controller",
          "name": "toApp",
          "package": "simple",
          "signature": "r -\u003e Application",
          "source": "src/Web-Simple-Controller.html#toApp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web Simple Controller",
          "module": "Web.Simple.Controller",
          "name": "toApp",
          "normalized": "a-\u003eApplication",
          "package": "simple",
          "partial": "App",
          "signature": "r-\u003eApplication",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Controller.html#v:toApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some convenience functions for creating responses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Simple.Responses",
          "name": "Responses",
          "package": "simple",
          "source": "src/Web-Simple-Responses.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines some convenience functions for creating responses",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "Responses",
          "package": "simple",
          "partial": "Responses",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a 400 (Bad Request) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "badRequest",
          "package": "simple",
          "signature": "Response",
          "source": "src/Web-Simple-Responses.html#badRequest",
          "type": "function"
        },
        "index": {
          "description": "Returns Bad Request Response",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "badRequest",
          "package": "simple",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:badRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a 403 (Forbidden) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "forbidden",
          "package": "simple",
          "signature": "Response",
          "source": "src/Web-Simple-Responses.html#forbidden",
          "type": "function"
        },
        "index": {
          "description": "Returns Forbidden Response",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "forbidden",
          "package": "simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:forbidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a URL returns a 301 (Moved Permanently) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e redirecting to\n that URL.\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "movedTo",
          "package": "simple",
          "signature": "String -\u003e Response",
          "source": "src/Web-Simple-Responses.html#movedTo",
          "type": "function"
        },
        "index": {
          "description": "Given URL returns Moved Permanently Response redirecting to that URL",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "movedTo",
          "normalized": "String-\u003eResponse",
          "package": "simple",
          "partial": "To",
          "signature": "String-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:movedTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a 404 (Not Found) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "notFound",
          "package": "simple",
          "signature": "Response",
          "source": "src/Web-Simple-Responses.html#notFound",
          "type": "function"
        },
        "index": {
          "description": "Returns Not Found Response",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "notFound",
          "package": "simple",
          "partial": "Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:notFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a 200 (OK) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with the given content-type and resposne\n body\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "ok",
          "package": "simple",
          "signature": "ContentType -\u003e ByteString -\u003e Response",
          "source": "src/Web-Simple-Responses.html#ok",
          "type": "function"
        },
        "index": {
          "description": "Creates OK Response with the given content-type and resposne body",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "ok",
          "normalized": "ContentType-\u003eByteString-\u003eResponse",
          "package": "simple",
          "signature": "ContentType-\u003eByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a 200 (OK) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with content-type \"text/html\" and the\n given resposne body\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "okHtml",
          "package": "simple",
          "signature": "ByteString -\u003e Response",
          "source": "src/Web-Simple-Responses.html#okHtml",
          "type": "function"
        },
        "index": {
          "description": "Creates OK Response with content-type text html and the given resposne body",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "okHtml",
          "normalized": "ByteString-\u003eResponse",
          "package": "simple",
          "partial": "Html",
          "signature": "ByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:okHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a 200 (OK) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with content-type \"application/json\" and the\n given resposne body\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "okJson",
          "package": "simple",
          "signature": "ByteString -\u003e Response",
          "source": "src/Web-Simple-Responses.html#okJson",
          "type": "function"
        },
        "index": {
          "description": "Creates OK Response with content-type application json and the given resposne body",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "okJson",
          "normalized": "ByteString-\u003eResponse",
          "package": "simple",
          "partial": "Json",
          "signature": "ByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:okJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a URL returns a 303 (See Other) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e redirecting to that URL.\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "redirectTo",
          "package": "simple",
          "signature": "ByteString -\u003e Response",
          "source": "src/Web-Simple-Responses.html#redirectTo",
          "type": "function"
        },
        "index": {
          "description": "Given URL returns See Other Response redirecting to that URL",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "redirectTo",
          "normalized": "ByteString-\u003eResponse",
          "package": "simple",
          "partial": "To",
          "signature": "ByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:redirectTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a 401 (Authorization Required) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e requiring basic\n authentication in the given realm.\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "requireBasicAuth",
          "package": "simple",
          "signature": "String -\u003e Response",
          "source": "src/Web-Simple-Responses.html#requireBasicAuth",
          "type": "function"
        },
        "index": {
          "description": "Returns Authorization Required Response requiring basic authentication in the given realm",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "requireBasicAuth",
          "normalized": "String-\u003eResponse",
          "package": "simple",
          "partial": "Basic Auth",
          "signature": "String-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:requireBasicAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a 500 (Server Error) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Simple.Responses",
          "name": "serverError",
          "package": "simple",
          "signature": "ByteString -\u003e Response",
          "source": "src/Web-Simple-Responses.html#serverError",
          "type": "function"
        },
        "index": {
          "description": "Returns Server Error Response",
          "hierarchy": "Web Simple Responses",
          "module": "Web.Simple.Responses",
          "name": "serverError",
          "normalized": "ByteString-\u003eResponse",
          "package": "simple",
          "partial": "Error",
          "signature": "ByteString-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Responses.html#v:serverError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Static",
          "name": "Static",
          "package": "simple",
          "source": "src/Web-Simple-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Simple Static",
          "module": "Web.Simple.Static",
          "name": "Static",
          "package": "simple",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Static",
          "name": "serveStatic",
          "package": "simple",
          "signature": "FilePath -\u003e Controller a ()",
          "source": "src/Web-Simple-Static.html#serveStatic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Static",
          "module": "Web.Simple.Static",
          "name": "serveStatic",
          "normalized": "FilePath-\u003eController a()",
          "package": "simple",
          "partial": "Static",
          "signature": "FilePath-\u003eController a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Static.html#v:serveStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "Templates",
          "package": "simple",
          "source": "src/Web-Simple-Templates.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "Templates",
          "package": "simple",
          "partial": "Templates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA funcation that's callable from inside a template\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "Function",
          "package": "simple",
          "type": "newtype"
        },
        "index": {
          "description": "funcation that callable from inside template",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "Function",
          "package": "simple",
          "partial": "Function",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "FunctionMap",
          "package": "simple",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "FunctionMap",
          "package": "simple",
          "partial": "Function Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#t:FunctionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "HasTemplates",
          "package": "simple",
          "source": "src/Web-Simple-Templates.html#HasTemplates",
          "type": "class"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "HasTemplates",
          "package": "simple",
          "partial": "Has Templates",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#t:HasTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "ToFunction",
          "package": "simple",
          "type": "class"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "ToFunction",
          "package": "simple",
          "partial": "To Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#t:ToFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "Function",
          "package": "simple",
          "signature": "Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "Function",
          "package": "simple",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "call",
          "package": "simple",
          "signature": "[Value] -\u003e Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "call",
          "normalized": "[Value]-\u003eValue",
          "package": "simple",
          "signature": "[Value]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "defaultFunctionMap",
          "package": "simple",
          "signature": "FunctionMap",
          "source": "src/Web-Simple-Templates.html#defaultFunctionMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "defaultFunctionMap",
          "package": "simple",
          "partial": "Function Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:defaultFunctionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "defaultGetTemplate",
          "package": "simple",
          "signature": "FilePath -\u003e Controller hs Template",
          "source": "src/Web-Simple-Templates.html#defaultGetTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "defaultGetTemplate",
          "normalized": "FilePath-\u003eController a Template",
          "package": "simple",
          "partial": "Get Template",
          "signature": "FilePath-\u003eController hs Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:defaultGetTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe layout to use by default. Layouts are just templates that embed\n views. They are rendered with the a global object containing the rendered\n view in the \"yield\" field, and the object the view was rendered with in\n the \"page\" field. By default, no template is used.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "defaultLayout",
          "package": "simple",
          "signature": "Controller hs (Maybe Template)",
          "source": "src/Web-Simple-Templates.html#defaultLayout",
          "type": "method"
        },
        "index": {
          "description": "The layout to use by default Layouts are just templates that embed views They are rendered with the global object containing the rendered view in the yield field and the object the view was rendered with in the page field By default no template is used",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "defaultLayout",
          "package": "simple",
          "partial": "Layout",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:defaultLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "defaultRender",
          "package": "simple",
          "signature": "FilePath -\u003e a -\u003e Controller hs ()",
          "source": "src/Web-Simple-Templates.html#defaultRender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "defaultRender",
          "normalized": "FilePath-\u003ea-\u003eController b()",
          "package": "simple",
          "partial": "Render",
          "signature": "FilePath-\u003ea-\u003eController hs()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:defaultRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e Construct a map with the supplied mappings.  If the\n list contains duplicate mappings, the later mappings take\n precedence.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "fromList",
          "package": "simple",
          "signature": "[(k, v)] -\u003e HashMap k v",
          "type": "function"
        },
        "index": {
          "description": "log Construct map with the supplied mappings If the list contains duplicate mappings the later mappings take precedence",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eHashMap a b",
          "package": "simple",
          "partial": "List",
          "signature": "[(k,v)]-\u003eHashMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map of pure functions that can be called from within a template. See\n \u003ccode\u003e\u003ca\u003eFunctionMap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "functionMap",
          "package": "simple",
          "signature": "Controller hs FunctionMap",
          "source": "src/Web-Simple-Templates.html#functionMap",
          "type": "method"
        },
        "index": {
          "description": "map of pure functions that can be called from within template See FunctionMap and Function for details",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "functionMap",
          "package": "simple",
          "partial": "Map",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:functionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to use to get a template. By default, it looks in the\n \u003ccode\u003e\u003ca\u003eviewDirectory\u003c/a\u003e\u003c/code\u003e for the given file name and compiles the file into a\n template. This can be overriden to, for example, cache compiled templates\n in memory.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "getTemplate",
          "package": "simple",
          "signature": "FilePath -\u003e Controller hs Template",
          "source": "src/Web-Simple-Templates.html#getTemplate",
          "type": "method"
        },
        "index": {
          "description": "Function to use to get template By default it looks in the viewDirectory for the given file name and compiles the file into template This can be overriden to for example cache compiled templates in memory",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "getTemplate",
          "normalized": "FilePath-\u003eController a Template",
          "package": "simple",
          "partial": "Template",
          "signature": "FilePath-\u003eController hs Template",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:getTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a view template with the default layout and a global used to\n evaluate variables in the template.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "render",
          "package": "simple",
          "signature": "FilePath -\u003e a -\u003e Controller hs ()",
          "source": "src/Web-Simple-Templates.html#render",
          "type": "method"
        },
        "index": {
          "description": "Renders view template with the default layout and global used to evaluate variables in the template",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "render",
          "normalized": "FilePath-\u003ea-\u003eController b()",
          "package": "simple",
          "signature": "FilePath-\u003ea-\u003eController hs()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a view using the layout named by the first argument.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "renderLayout",
          "package": "simple",
          "signature": "FilePath -\u003e FilePath -\u003e a -\u003e Controller hs ()",
          "source": "src/Web-Simple-Templates.html#renderLayout",
          "type": "method"
        },
        "index": {
          "description": "Render view using the layout named by the first argument",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "renderLayout",
          "normalized": "FilePath-\u003eFilePath-\u003ea-\u003eController b()",
          "package": "simple",
          "partial": "Layout",
          "signature": "FilePath-\u003eFilePath-\u003ea-\u003eController hs()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:renderLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erenderLayout\u003c/a\u003e\u003c/code\u003e but uses an already compiled layout.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "renderLayout'",
          "package": "simple",
          "signature": "Template -\u003e FilePath -\u003e a -\u003e Controller hs ()",
          "source": "src/Web-Simple-Templates.html#renderLayout%27",
          "type": "method"
        },
        "index": {
          "description": "Same as renderLayout but uses an already compiled layout",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "renderLayout'",
          "normalized": "Template-\u003eFilePath-\u003ea-\u003eController b()",
          "package": "simple",
          "partial": "Layout'",
          "signature": "Template-\u003eFilePath-\u003ea-\u003eController hs()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:renderLayout-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e but without a template.\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "renderPlain",
          "package": "simple",
          "signature": "FilePath -\u003e a -\u003e Controller hs ()",
          "source": "src/Web-Simple-Templates.html#renderPlain",
          "type": "method"
        },
        "index": {
          "description": "Same as render but without template",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "renderPlain",
          "normalized": "FilePath-\u003ea-\u003eController b()",
          "package": "simple",
          "partial": "Plain",
          "signature": "FilePath-\u003ea-\u003eController hs()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:renderPlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Simple.Templates",
          "name": "toFunction",
          "package": "simple",
          "signature": "a -\u003e Function",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "toFunction",
          "normalized": "a-\u003eFunction",
          "package": "simple",
          "partial": "Function",
          "signature": "a-\u003eFunction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:toFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe directory to look for views passed to \u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e. This defaults to\n \"views\", so\n\u003c/p\u003e\u003cpre\u003e\n render \"index.html.tmpl\" ...\n\u003c/pre\u003e\u003cp\u003ewill look for a view template in \"views/index.html.tmpl\".\n\u003c/p\u003e",
          "module": "Web.Simple.Templates",
          "name": "viewDirectory",
          "package": "simple",
          "signature": "Controller hs FilePath",
          "source": "src/Web-Simple-Templates.html#viewDirectory",
          "type": "method"
        },
        "index": {
          "description": "The directory to look for views passed to render This defaults to views so render index.html.tmpl will look for view template in views index.html.tmpl",
          "hierarchy": "Web Simple Templates",
          "module": "Web.Simple.Templates",
          "name": "viewDirectory",
          "package": "simple",
          "partial": "Directory",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple-Templates.html#v:viewDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eSimple\u003c/em\u003e is based on WAI - an standard interface for communicating between web\nservers (like warp) and web applications. You can use \u003cem\u003eSimple\u003c/em\u003e completely\nindependently (and of course, use any WAI server to run it). Alternatively, you\ncan embed existing existing WAI applications inside an app built with \u003cem\u003eSimple\u003c/em\u003e,\nand embed an app built with simple in another WAI app.\n\u003c/p\u003e\u003cp\u003eAll the components in \u003cem\u003eSimple\u003c/em\u003e are designed to be small and simple\nenough to understand, replaceable, and work as well independantly as they do\ntogether.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Simple",
          "name": "Simple",
          "package": "simple",
          "source": "src/Web-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "Simple is based on WAI an standard interface for communicating between web servers like warp and web applications You can use Simple completely independently and of course use any WAI server to run it Alternatively you can embed existing existing WAI applications inside an app built with Simple and embed an app built with simple in another WAI app All the components in Simple are designed to be small and simple enough to understand replaceable and work as well independantly as they do together",
          "hierarchy": "Web Simple",
          "module": "Web.Simple",
          "name": "Simple",
          "package": "simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple/docs/Web-Simple.html#"
      }
    }
  ]
]