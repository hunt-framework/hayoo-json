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
        "word": "scotty"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIt should be noted that most of the code snippets below depend on the\n OverloadedStrings language pragma.\n\u003c/p\u003e\u003cp\u003eThe functions in this module allow an arbitrary monad to be embedded\n in Scotty's monad transformer stack in order that Scotty be combined\n with other DSLs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Scotty.Trans",
          "name": "Trans",
          "package": "scotty",
          "source": "src/Web-Scotty-Trans.html",
          "type": "module"
        },
        "index": {
          "description": "It should be noted that most of the code snippets below depend on the OverloadedStrings language pragma The functions in this module allow an arbitrary monad to be embedded in Scotty monad transformer stack in order that Scotty be combined with other DSLs",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "Trans",
          "package": "scotty",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Trans",
          "name": "ActionT",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#ActionT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "ActionT",
          "package": "scotty",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#t:ActionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Trans",
          "name": "File",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#File",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "File",
          "package": "scotty",
          "partial": "File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Trans",
          "name": "Options",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#Options",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "Options",
          "package": "scotty",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Trans",
          "name": "Param",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#Param",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "Param",
          "package": "scotty",
          "partial": "Param",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum implemention: \u003ccode\u003e\u003ca\u003eparseParam\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "Parsable",
          "package": "scotty",
          "source": "src/Web-Scotty-Action.html#Parsable",
          "type": "class"
        },
        "index": {
          "description": "Minimum implemention parseParam",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "Parsable",
          "package": "scotty",
          "partial": "Parsable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#t:Parsable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Trans",
          "name": "RoutePattern",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#RoutePattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "RoutePattern",
          "package": "scotty",
          "partial": "Route Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#t:RoutePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to use a custom exception type (aside from \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e), you must\n define an instance of \u003ccode\u003e\u003ca\u003eScottyError\u003c/a\u003e\u003c/code\u003e for that type. \n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "ScottyError",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#ScottyError",
          "type": "class"
        },
        "index": {
          "description": "In order to use custom exception type aside from Text you must define an instance of ScottyError for that type",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "ScottyError",
          "package": "scotty",
          "partial": "Scotty Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#t:ScottyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Trans",
          "name": "ScottyT",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#ScottyT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "ScottyT",
          "package": "scotty",
          "partial": "Scotty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#t:ScottyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Web.Scotty.Trans\",\"Web.Scotty\"]",
          "name": "Options",
          "package": "scotty",
          "signature": "Options",
          "source": "src/Web-Scotty-Types.html#Options",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:Options\",\"http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:Options\"]"
        },
        "index": {
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "Options",
          "package": "scotty",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd to the response headers. Header names are case-insensitive.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "addHeader",
          "package": "scotty",
          "signature": "Text -\u003e Text -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Action.html#addHeader",
          "type": "function"
        },
        "index": {
          "description": "Add to the response headers Header names are case-insensitive",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "addHeader",
          "normalized": "Text-\u003eText-\u003eActionT a b()",
          "package": "scotty",
          "partial": "Header",
          "signature": "Text-\u003eText-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a route with a \u003ccode\u003e\u003ca\u003eStdMethod\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value representing the path spec,\n and a body (\u003ccode\u003eAction\u003c/code\u003e) which modifies the response.\n\u003c/p\u003e\u003cpre\u003e addroute GET \"/\" $ text \"beam me up!\"\n\u003c/pre\u003e\u003cp\u003eThe path spec can include values starting with a colon, which are interpreted\n as \u003cem\u003ecaptures\u003c/em\u003e. These are named wildcards that can be looked up with \u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e addroute GET \"/foo/:bar\" $ do\n     v \u003c- param \"bar\"\n     text v\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecurl http://localhost:3000/foo/something\n\u003c/code\u003e\u003c/strong\u003esomething\n\u003c/pre\u003e",
          "module": "Web.Scotty.Trans",
          "name": "addroute",
          "package": "scotty",
          "signature": "StdMethod -\u003e RoutePattern -\u003e ActionT e m () -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Route.html#addroute",
          "type": "function"
        },
        "index": {
          "description": "Define route with StdMethod Text value representing the path spec and body Action which modifies the response addroute GET text beam me up The path spec can include values starting with colon which are interpreted as captures These are named wildcards that can be looked up with param addroute GET foo bar do param bar text curl http localhost foo something something",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "addroute",
          "normalized": "StdMethod-\u003eRoutePattern-\u003eActionT a b()-\u003eScottyT a b()",
          "package": "scotty",
          "signature": "StdMethod-\u003eRoutePattern-\u003eActionT e m()-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:addroute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the request body.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "body",
          "package": "scotty",
          "signature": "ActionT e m ByteString",
          "source": "src/Web-Scotty-Action.html#body",
          "type": "function"
        },
        "index": {
          "description": "Get the request body",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "body",
          "package": "scotty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard Sinatra-style route. Named captures are prepended with colons.\n   This is the default route type generated by OverloadedString routes. i.e.\n\u003c/p\u003e\u003cpre\u003e get (capture \"/foo/:bar\") $ ...\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n ...\n get \"/foo/:bar\" $ ...\n\u003c/pre\u003e\u003cp\u003eare equivalent.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "capture",
          "package": "scotty",
          "signature": "String -\u003e RoutePattern",
          "source": "src/Web-Scotty-Route.html#capture",
          "type": "function"
        },
        "index": {
          "description": "Standard Sinatra-style route Named captures are prepended with colons This is the default route type generated by OverloadedString routes i.e get capture foo bar and LANGUAGE OverloadedStrings get foo bar are equivalent",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "capture",
          "normalized": "String-\u003eRoutePattern",
          "package": "scotty",
          "signature": "String-\u003eRoutePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:capture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal handler for uncaught exceptions. \n\u003c/p\u003e\u003cp\u003eUncaught exceptions normally become 500 responses. \n You can use this to selectively override that behavior.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "defaultHandler",
          "package": "scotty",
          "signature": "(e -\u003e ActionT e m ()) -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Trans.html#defaultHandler",
          "type": "function"
        },
        "index": {
          "description": "Global handler for uncaught exceptions Uncaught exceptions normally become responses You can use this to selectively override that behavior",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "defaultHandler",
          "normalized": "(a-\u003eActionT a b())-\u003eScottyT a b()",
          "package": "scotty",
          "partial": "Handler",
          "signature": "(e-\u003eActionT e m())-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:defaultHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDELETE\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "delete",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionT e m () -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Route.html#delete",
          "type": "function"
        },
        "index": {
          "description": "delete addroute DELETE",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "delete",
          "normalized": "RoutePattern-\u003eActionT a b()-\u003eScottyT a b()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionT e m()-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a file as the response. Doesn't set the \"Content-Type\" header, so you probably\n want to do that on your own with \u003ccode\u003e\u003ca\u003esetHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "file",
          "package": "scotty",
          "signature": "FilePath -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Action.html#file",
          "type": "function"
        },
        "index": {
          "description": "Send file as the response Doesn set the Content-Type header so you probably want to do that on your own with setHeader",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "file",
          "normalized": "FilePath-\u003eActionT a b()",
          "package": "scotty",
          "signature": "FilePath-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet list of uploaded files.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "files",
          "package": "scotty",
          "signature": "ActionT e m [File]",
          "source": "src/Web-Scotty-Action.html#files",
          "type": "function"
        },
        "index": {
          "description": "Get list of uploaded files",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "files",
          "normalized": "ActionT a b[File]",
          "package": "scotty",
          "signature": "ActionT e m[File]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a route based on a function which can match using the entire \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates the route does not match. A \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value indicates\n   a successful match, optionally returning a list of key-value pairs accessible\n   by \u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e get (function $ \\req -\u003e Just [(\"version\", T.pack $ show $ httpVersion req)]) $ do\n     v \u003c- param \"version\"\n     text v\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecurl http://localhost:3000/\n\u003c/code\u003e\u003c/strong\u003eHTTP/1.1\n\u003c/pre\u003e",
          "module": "Web.Scotty.Trans",
          "name": "function",
          "package": "scotty",
          "signature": "(Request -\u003e Maybe [Param]) -\u003e RoutePattern",
          "source": "src/Web-Scotty-Route.html#function",
          "type": "function"
        },
        "index": {
          "description": "Build route based on function which can match using the entire Request object Nothing indicates the route does not match Just value indicates successful match optionally returning list of key-value pairs accessible by param get function req Just version T.pack show httpVersion req do param version text curl http localhost HTTP",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "function",
          "normalized": "(Request-\u003eMaybe[Param])-\u003eRoutePattern",
          "package": "scotty",
          "signature": "(Request-\u003eMaybe[Param])-\u003eRoutePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "get",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionT e m () -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Route.html#get",
          "type": "function"
        },
        "index": {
          "description": "get addroute GET",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "get",
          "normalized": "RoutePattern-\u003eActionT a b()-\u003eScottyT a b()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionT e m()-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value. Also sets \"Content-Type\"\n header to \"text/html\".\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "html",
          "package": "scotty",
          "signature": "Text -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Action.html#html",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to the given Text value Also sets Content-Type header to text html",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "html",
          "normalized": "Text-\u003eActionT a b()",
          "package": "scotty",
          "signature": "Text-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to the JSON encoding of the given value. Also sets \"Content-Type\"\n header to \"application/json\".\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "json",
          "package": "scotty",
          "signature": "a -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Action.html#json",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to the JSON encoding of the given value Also sets Content-Type header to application json",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "json",
          "normalized": "a-\u003eActionT b c()",
          "package": "scotty",
          "signature": "a-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the request body as a JSON object and return it. Raises an exception if parse is unsuccessful.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "jsonData",
          "package": "scotty",
          "signature": "ActionT e m a",
          "source": "src/Web-Scotty-Action.html#jsonData",
          "type": "function"
        },
        "index": {
          "description": "Parse the request body as JSON object and return it Raises an exception if parse is unsuccessful",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "jsonData",
          "package": "scotty",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:jsonData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a route that requires the requested path match exactly, without captures.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "literal",
          "package": "scotty",
          "signature": "String -\u003e RoutePattern",
          "source": "src/Web-Scotty-Route.html#literal",
          "type": "function"
        },
        "index": {
          "description": "Build route that requires the requested path match exactly without captures",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "literal",
          "normalized": "String-\u003eRoutePattern",
          "package": "scotty",
          "signature": "String-\u003eRoutePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a route that matches regardless of the HTTP verb.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "matchAny",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionT e m () -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Route.html#matchAny",
          "type": "function"
        },
        "index": {
          "description": "Add route that matches regardless of the HTTP verb",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "matchAny",
          "normalized": "RoutePattern-\u003eActionT a b()-\u003eScottyT a b()",
          "package": "scotty",
          "partial": "Any",
          "signature": "RoutePattern-\u003eActionT e m()-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:matchAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse given middleware. Middleware is nested such that the first declared\n is the outermost middleware (it has first dibs on the request and last action\n on the response). Every middleware is run on each request.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "middleware",
          "package": "scotty",
          "signature": "Middleware -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Trans.html#middleware",
          "type": "function"
        },
        "index": {
          "description": "Use given middleware Middleware is nested such that the first declared is the outermost middleware it has first dibs on the request and last action on the response Every middleware is run on each request",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "middleware",
          "normalized": "Middleware-\u003eScottyT a b()",
          "package": "scotty",
          "signature": "Middleware-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:middleware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort execution of this action and continue pattern matching routes.\n Like an exception, any code after \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e is not executed.\n\u003c/p\u003e\u003cp\u003eAs an example, these two routes overlap. The only way the second one will\n ever run is if the first one calls \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e get \"/foo/:bar\" $ do\n   w :: Text \u003c- param \"bar\"\n   unless (w == \"special\") next\n   text \"You made a request to /foo/special\"\n\n get \"/foo/:baz\" $ do\n   w \u003c- param \"baz\"\n   text $ \"You made a request to: \" \u003c\u003e w\n\u003c/pre\u003e",
          "module": "Web.Scotty.Trans",
          "name": "next",
          "package": "scotty",
          "signature": "ActionT e m a",
          "source": "src/Web-Scotty-Action.html#next",
          "type": "function"
        },
        "index": {
          "description": "Abort execution of this action and continue pattern matching routes Like an exception any code after next is not executed As an example these two routes overlap The only way the second one will ever run is if the first one calls next get foo bar do Text param bar unless special next text You made request to foo special get foo baz do param baz text You made request to",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "next",
          "package": "scotty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify an action to take if nothing else is found. Note: this _always_ matches,\n so should generally be the last route specified.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "notFound",
          "package": "scotty",
          "signature": "ActionT e m () -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Route.html#notFound",
          "type": "function"
        },
        "index": {
          "description": "Specify an action to take if nothing else is found Note this always matches so should generally be the last route specified",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "notFound",
          "normalized": "ActionT a b()-\u003eScottyT a b()",
          "package": "scotty",
          "partial": "Found",
          "signature": "ActionT e m()-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:notFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a parameter. First looks in captures, then form data, then query parameters.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Raises an exception which can be caught by \u003ccode\u003e\u003ca\u003erescue\u003c/a\u003e\u003c/code\u003e if parameter is not found.\n\u003c/li\u003e\u003cli\u003e If parameter is found, but \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e fails to parse to the correct type, \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e is called.\n   This means captures are somewhat typed, in that a route won't match if a correctly typed\n   capture cannot be parsed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Scotty.Trans",
          "name": "param",
          "package": "scotty",
          "signature": "Text -\u003e ActionT e m a",
          "source": "src/Web-Scotty-Action.html#param",
          "type": "function"
        },
        "index": {
          "description": "Get parameter First looks in captures then form data then query parameters Raises an exception which can be caught by rescue if parameter is not found If parameter is found but read fails to parse to the correct type next is called This means captures are somewhat typed in that route won match if correctly typed capture cannot be parsed",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "param",
          "normalized": "Text-\u003eActionT a b c",
          "package": "scotty",
          "signature": "Text-\u003eActionT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all parameters from capture, form and query (in that order).\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "params",
          "package": "scotty",
          "signature": "ActionT e m [Param]",
          "source": "src/Web-Scotty-Action.html#params",
          "type": "function"
        },
        "index": {
          "description": "Get all parameters from capture form and query in that order",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "params",
          "normalized": "ActionT a b[Param]",
          "package": "scotty",
          "signature": "ActionT e m[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value and parse it as \u003ccode\u003ea\u003c/code\u003e, or fail with a message.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "parseParam",
          "package": "scotty",
          "signature": "Text -\u003e Either Text a",
          "source": "src/Web-Scotty-Action.html#parseParam",
          "type": "method"
        },
        "index": {
          "description": "Take Text value and parse it as or fail with message",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "parseParam",
          "normalized": "Text-\u003eEither Text a",
          "package": "scotty",
          "partial": "Param",
          "signature": "Text-\u003eEither Text a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:parseParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation parses comma-delimited lists.\n\u003c/p\u003e\u003cpre\u003e parseParamList t = mapM parseParam (T.split (== ',') t)\n\u003c/pre\u003e",
          "module": "Web.Scotty.Trans",
          "name": "parseParamList",
          "package": "scotty",
          "signature": "Text -\u003e Either Text [a]",
          "source": "src/Web-Scotty-Action.html#parseParamList",
          "type": "method"
        },
        "index": {
          "description": "Default implementation parses comma-delimited lists parseParamList mapM parseParam T.split",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "parseParamList",
          "normalized": "Text-\u003eEither Text[a]",
          "package": "scotty",
          "partial": "Param List",
          "signature": "Text-\u003eEither Text[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:parseParamList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epatch = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePATCH\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "patch",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionT e m () -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Route.html#patch",
          "type": "function"
        },
        "index": {
          "description": "patch addroute PATCH",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "patch",
          "normalized": "RoutePattern-\u003eActionT a b()-\u003eScottyT a b()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionT e m()-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:patch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epost = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "post",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionT e m () -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Route.html#post",
          "type": "function"
        },
        "index": {
          "description": "post addroute POST",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "post",
          "normalized": "RoutePattern-\u003eActionT a b()-\u003eScottyT a b()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionT e m()-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eput = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "put",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionT e m () -\u003e ScottyT e m ()",
          "source": "src/Web-Scotty-Route.html#put",
          "type": "function"
        },
        "index": {
          "description": "put addroute PUT",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "put",
          "normalized": "RoutePattern-\u003eActionT a b()-\u003eScottyT a b()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionT e m()-\u003eScottyT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception, which can be caught with \u003ccode\u003e\u003ca\u003erescue\u003c/a\u003e\u003c/code\u003e. Uncaught exceptions\n turn into HTTP 500 responses.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "raise",
          "package": "scotty",
          "signature": "e -\u003e ActionT e m a",
          "source": "src/Web-Scotty-Action.html#raise",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception which can be caught with rescue Uncaught exceptions turn into HTTP responses",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "raise",
          "normalized": "a-\u003eActionT a b c",
          "package": "scotty",
          "signature": "e-\u003eActionT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e value. Doesn't set the\n \"Content-Type\" header, so you probably want to do that on your\n own with \u003ccode\u003e\u003ca\u003esetHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "raw",
          "package": "scotty",
          "signature": "ByteString -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Action.html#raw",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to the given ByteString value Doesn set the Content-Type header so you probably want to do that on your own with setHeader",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "raw",
          "normalized": "ByteString-\u003eActionT a b()",
          "package": "scotty",
          "signature": "ByteString-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful for creating \u003ccode\u003e\u003ca\u003eParsable\u003c/a\u003e\u003c/code\u003e instances for things that already implement \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e. Ex:\n\u003c/p\u003e\u003cpre\u003e instance Parsable Int where parseParam = readEither\n\u003c/pre\u003e",
          "module": "[\"Web.Scotty.Trans\",\"Web.Scotty\"]",
          "name": "readEither",
          "package": "scotty",
          "signature": "Text -\u003e Either Text a",
          "source": "src/Web-Scotty-Action.html#readEither",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:readEither\",\"http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:readEither\"]"
        },
        "index": {
          "description": "Useful for creating Parsable instances for things that already implement Read Ex instance Parsable Int where parseParam readEither",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "readEither",
          "normalized": "Text-\u003eEither Text a",
          "package": "scotty",
          "partial": "Either",
          "signature": "Text-\u003eEither Text a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:readEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect to given URL. Like throwing an uncatchable exception. Any code after the call to redirect\n will not be run.\n\u003c/p\u003e\u003cpre\u003e redirect \"http://www.google.com\"\n\u003c/pre\u003e\u003cp\u003eOR\n\u003c/p\u003e\u003cpre\u003e redirect \"/foo/bar\"\n\u003c/pre\u003e",
          "module": "Web.Scotty.Trans",
          "name": "redirect",
          "package": "scotty",
          "signature": "Text -\u003e ActionT e m a",
          "source": "src/Web-Scotty-Action.html#redirect",
          "type": "function"
        },
        "index": {
          "description": "Redirect to given URL Like throwing an uncatchable exception Any code after the call to redirect will not be run redirect http www.google.com OR redirect foo bar",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "redirect",
          "normalized": "Text-\u003eActionT a b c",
          "package": "scotty",
          "signature": "Text-\u003eActionT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch requests using a regular expression.\n   Named captures are not yet supported.\n\u003c/p\u003e\u003cpre\u003e get (regex \"^/f(.*)r$\") $ do\n    path \u003c- param \"0\"\n    cap \u003c- param \"1\"\n    text $ mconcat [\"Path: \", path, \"\\nCapture: \", cap]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecurl http://localhost:3000/foo/bar\n\u003c/code\u003e\u003c/strong\u003ePath: /foo/bar\nCapture: oo/ba\n\u003c/pre\u003e",
          "module": "Web.Scotty.Trans",
          "name": "regex",
          "package": "scotty",
          "signature": "String -\u003e RoutePattern",
          "source": "src/Web-Scotty-Route.html#regex",
          "type": "function"
        },
        "index": {
          "description": "Match requests using regular expression Named captures are not yet supported get regex do path param cap param text mconcat Path path nCapture cap curl http localhost foo bar Path foo bar Capture oo ba",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "regex",
          "normalized": "String-\u003eRoutePattern",
          "package": "scotty",
          "signature": "String-\u003eRoutePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a request header. Header name is case-insensitive.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "reqHeader",
          "package": "scotty",
          "signature": "Text -\u003e ActionT e m (Maybe Text)",
          "source": "src/Web-Scotty-Action.html#reqHeader",
          "type": "function"
        },
        "index": {
          "description": "Get request header Header name is case-insensitive",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "reqHeader",
          "normalized": "Text-\u003eActionT a b(Maybe Text)",
          "package": "scotty",
          "partial": "Header",
          "signature": "Text-\u003eActionT e m(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:reqHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "request",
          "package": "scotty",
          "signature": "ActionT e m Request",
          "source": "src/Web-Scotty-Action.html#request",
          "type": "function"
        },
        "index": {
          "description": "Get the Request object",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "request",
          "package": "scotty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an exception thrown by \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e raise \"just kidding\" `rescue` (\\msg -\u003e text msg)\n\u003c/pre\u003e",
          "module": "Web.Scotty.Trans",
          "name": "rescue",
          "package": "scotty",
          "signature": "ActionT e m a -\u003e (e -\u003e ActionT e m a) -\u003e ActionT e m a",
          "source": "src/Web-Scotty-Action.html#rescue",
          "type": "function"
        },
        "index": {
          "description": "Catch an exception thrown by raise raise just kidding rescue msg text msg",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "rescue",
          "normalized": "ActionT a b c-\u003e(a-\u003eActionT a b c)-\u003eActionT a b c",
          "package": "scotty",
          "signature": "ActionT e m a-\u003e(e-\u003eActionT e m a)-\u003eActionT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:rescue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a scotty application into a WAI \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e, which can be\n run with any WAI handler.\n NB: \u003ccode\u003escottyApp\u003c/code\u003e === 'scottyAppT id id'\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "scottyAppT",
          "package": "scotty",
          "signature": "(forall a.  m a -\u003e n a)-\u003e (m Response -\u003e IO Response)-\u003e ScottyT e m ()-\u003e n Application",
          "type": "function"
        },
        "index": {
          "description": "Turn scotty application into WAI Application which can be run with any WAI handler NB scottyApp scottyAppT id id",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "scottyAppT",
          "normalized": "(a b c d-\u003ee d)-\u003e(c Response-\u003eIO Response)-\u003eScottyT f c()-\u003ee Application",
          "package": "scotty",
          "partial": "App",
          "signature": "(forall a. m a-\u003en a)-\u003e(m Response-\u003eIO Response)-\u003eScottyT e m()-\u003en Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:scottyAppT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a scotty application using the warp server, passing extra options.\n NB: 'scottyOpts opts' === 'scottyOptsT opts id id'\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "scottyOptsT",
          "package": "scotty",
          "signature": "Options-\u003e (forall a.  m a -\u003e n a)-\u003e (m Response -\u003e IO Response)-\u003e ScottyT e m ()-\u003e n ()",
          "type": "function"
        },
        "index": {
          "description": "Run scotty application using the warp server passing extra options NB scottyOpts opts scottyOptsT opts id id",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "scottyOptsT",
          "normalized": "Options-\u003e(a b c d-\u003ee d)-\u003e(c Response-\u003eIO Response)-\u003eScottyT f c()-\u003ee()",
          "package": "scotty",
          "partial": "Opts",
          "signature": "Options-\u003e(forall a. m a-\u003en a)-\u003e(m Response-\u003eIO Response)-\u003eScottyT e m()-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:scottyOptsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a scotty application using the warp server.\n NB: 'scotty p' === 'scottyT p id id'\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "scottyT",
          "package": "scotty",
          "signature": "Port-\u003e (forall a.  m a -\u003e n a)-\u003e (m Response -\u003e IO Response)-\u003e ScottyT e m ()-\u003e n ()",
          "type": "function"
        },
        "index": {
          "description": "Run scotty application using the warp server NB scotty scottyT id id",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "scottyT",
          "normalized": "Port-\u003e(a b c d-\u003ee d)-\u003e(c Response-\u003eIO Response)-\u003eScottyT f c()-\u003ee()",
          "package": "scotty",
          "signature": "Port-\u003e(forall a. m a-\u003en a)-\u003e(m Response-\u003eIO Response)-\u003eScottyT e m()-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:scottyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet one of the response headers. Will override any previously set value for that header.\n Header names are case-insensitive.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "setHeader",
          "package": "scotty",
          "signature": "Text -\u003e Text -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Action.html#setHeader",
          "type": "function"
        },
        "index": {
          "description": "Set one of the response headers Will override any previously set value for that header Header names are case-insensitive",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "setHeader",
          "normalized": "Text-\u003eText-\u003eActionT a b()",
          "package": "scotty",
          "partial": "Header",
          "signature": "Text-\u003eText-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWarp \u003ccode\u003e\u003ca\u003eSettings\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Web.Scotty.Trans\",\"Web.Scotty\"]",
          "name": "settings",
          "package": "scotty",
          "signature": "Settings",
          "source": "src/Web-Scotty-Types.html#Options",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:settings\",\"http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:settings\"]"
        },
        "index": {
          "description": "Warp Settings",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "settings",
          "package": "scotty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Trans",
          "name": "showError",
          "package": "scotty",
          "signature": "e -\u003e Text",
          "source": "src/Web-Scotty-Types.html#showError",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "showError",
          "normalized": "a-\u003eText",
          "package": "scotty",
          "partial": "Error",
          "signature": "e-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:showError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to a Source. Doesn't set the\n \"Content-Type\" header, so you probably want to do that on your\n own with \u003ccode\u003e\u003ca\u003esetHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "source",
          "package": "scotty",
          "signature": "Source IO (Flush Builder) -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Action.html#source",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to Source Doesn set the Content-Type header so you probably want to do that on your own with setHeader",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "source",
          "normalized": "Source IO(Flush Builder)-\u003eActionT a b()",
          "package": "scotty",
          "signature": "Source IO(Flush Builder)-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the HTTP response status. Default is 200.\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "status",
          "package": "scotty",
          "signature": "Status -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Action.html#status",
          "type": "function"
        },
        "index": {
          "description": "Set the HTTP response status Default is",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "status",
          "normalized": "Status-\u003eActionT a b()",
          "package": "scotty",
          "signature": "Status-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Trans",
          "name": "stringError",
          "package": "scotty",
          "signature": "String -\u003e e",
          "source": "src/Web-Scotty-Types.html#stringError",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "stringError",
          "normalized": "String-\u003ea",
          "package": "scotty",
          "partial": "Error",
          "signature": "String-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:stringError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value. Also sets \"Content-Type\"\n header to \"text/plain\".\n\u003c/p\u003e",
          "module": "Web.Scotty.Trans",
          "name": "text",
          "package": "scotty",
          "signature": "Text -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Action.html#text",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to the given Text value Also sets Content-Type header to text plain",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "text",
          "normalized": "Text-\u003eActionT a b()",
          "package": "scotty",
          "signature": "Text-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0 = silent, 1(def) = startup banner\n\u003c/p\u003e",
          "module": "[\"Web.Scotty.Trans\",\"Web.Scotty\"]",
          "name": "verbose",
          "package": "scotty",
          "signature": "Int",
          "source": "src/Web-Scotty-Types.html#Options",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:verbose\",\"http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:verbose\"]"
        },
        "index": {
          "description": "silent def startup banner",
          "hierarchy": "Web Scotty Trans",
          "module": "Web.Scotty.Trans",
          "name": "verbose",
          "package": "scotty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty-Trans.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIt should be noted that most of the code snippets below depend on the\n OverloadedStrings language pragma.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Scotty",
          "name": "Scotty",
          "package": "scotty",
          "source": "src/Web-Scotty.html",
          "type": "module"
        },
        "index": {
          "description": "It should be noted that most of the code snippets below depend on the OverloadedStrings language pragma",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "Scotty",
          "package": "scotty",
          "partial": "Scotty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty",
          "name": "ActionM",
          "package": "scotty",
          "source": "src/Web-Scotty.html#ActionM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "ActionM",
          "package": "scotty",
          "partial": "Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#t:ActionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty",
          "name": "File",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#File",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "File",
          "package": "scotty",
          "partial": "File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty",
          "name": "Options",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#Options",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "Options",
          "package": "scotty",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty",
          "name": "Param",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#Param",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "Param",
          "package": "scotty",
          "partial": "Param",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum implemention: \u003ccode\u003e\u003ca\u003eparseParam\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "Parsable",
          "package": "scotty",
          "source": "src/Web-Scotty-Action.html#Parsable",
          "type": "class"
        },
        "index": {
          "description": "Minimum implemention parseParam",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "Parsable",
          "package": "scotty",
          "partial": "Parsable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#t:Parsable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty",
          "name": "RoutePattern",
          "package": "scotty",
          "source": "src/Web-Scotty-Types.html#RoutePattern",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "RoutePattern",
          "package": "scotty",
          "partial": "Route Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#t:RoutePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty",
          "name": "ScottyM",
          "package": "scotty",
          "source": "src/Web-Scotty.html#ScottyM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "ScottyM",
          "package": "scotty",
          "partial": "Scotty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#t:ScottyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd to the response headers. Header names are case-insensitive.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "addHeader",
          "package": "scotty",
          "signature": "Text -\u003e Text -\u003e ActionM ()",
          "source": "src/Web-Scotty.html#addHeader",
          "type": "function"
        },
        "index": {
          "description": "Add to the response headers Header names are case-insensitive",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "addHeader",
          "normalized": "Text-\u003eText-\u003eActionM()",
          "package": "scotty",
          "partial": "Header",
          "signature": "Text-\u003eText-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a route with a \u003ccode\u003e\u003ca\u003eStdMethod\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value representing the path spec,\n and a body (\u003ccode\u003eAction\u003c/code\u003e) which modifies the response.\n\u003c/p\u003e\u003cpre\u003e addroute GET \"/\" $ text \"beam me up!\"\n\u003c/pre\u003e\u003cp\u003eThe path spec can include values starting with a colon, which are interpreted\n as \u003cem\u003ecaptures\u003c/em\u003e. These are named wildcards that can be looked up with \u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e addroute GET \"/foo/:bar\" $ do\n     v \u003c- param \"bar\"\n     text v\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecurl http://localhost:3000/foo/something\n\u003c/code\u003e\u003c/strong\u003esomething\n\u003c/pre\u003e",
          "module": "Web.Scotty",
          "name": "addroute",
          "package": "scotty",
          "signature": "StdMethod -\u003e RoutePattern -\u003e ActionM () -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#addroute",
          "type": "function"
        },
        "index": {
          "description": "Define route with StdMethod Text value representing the path spec and body Action which modifies the response addroute GET text beam me up The path spec can include values starting with colon which are interpreted as captures These are named wildcards that can be looked up with param addroute GET foo bar do param bar text curl http localhost foo something something",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "addroute",
          "normalized": "StdMethod-\u003eRoutePattern-\u003eActionM()-\u003eScottyM()",
          "package": "scotty",
          "signature": "StdMethod-\u003eRoutePattern-\u003eActionM()-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:addroute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the request body.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "body",
          "package": "scotty",
          "signature": "ActionM ByteString",
          "source": "src/Web-Scotty.html#body",
          "type": "function"
        },
        "index": {
          "description": "Get the request body",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "body",
          "package": "scotty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard Sinatra-style route. Named captures are prepended with colons.\n   This is the default route type generated by OverloadedString routes. i.e.\n\u003c/p\u003e\u003cpre\u003e get (capture \"/foo/:bar\") $ ...\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n ...\n get \"/foo/:bar\" $ ...\n\u003c/pre\u003e\u003cp\u003eare equivalent.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "capture",
          "package": "scotty",
          "signature": "String -\u003e RoutePattern",
          "source": "src/Web-Scotty.html#capture",
          "type": "function"
        },
        "index": {
          "description": "Standard Sinatra-style route Named captures are prepended with colons This is the default route type generated by OverloadedString routes i.e get capture foo bar and LANGUAGE OverloadedStrings get foo bar are equivalent",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "capture",
          "normalized": "String-\u003eRoutePattern",
          "package": "scotty",
          "signature": "String-\u003eRoutePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:capture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal handler for uncaught exceptions. \n\u003c/p\u003e\u003cp\u003eUncaught exceptions normally become 500 responses. \n You can use this to selectively override that behavior.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "defaultHandler",
          "package": "scotty",
          "signature": "(Text -\u003e ActionM ()) -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#defaultHandler",
          "type": "function"
        },
        "index": {
          "description": "Global handler for uncaught exceptions Uncaught exceptions normally become responses You can use this to selectively override that behavior",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "defaultHandler",
          "normalized": "(Text-\u003eActionM())-\u003eScottyM()",
          "package": "scotty",
          "partial": "Handler",
          "signature": "(Text-\u003eActionM())-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:defaultHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eDELETE\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "delete",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionM () -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#delete",
          "type": "function"
        },
        "index": {
          "description": "delete addroute DELETE",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "delete",
          "normalized": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a file as the response. Doesn't set the \"Content-Type\" header, so you probably\n want to do that on your own with \u003ccode\u003e\u003ca\u003esetHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "file",
          "package": "scotty",
          "signature": "FilePath -\u003e ActionM ()",
          "source": "src/Web-Scotty.html#file",
          "type": "function"
        },
        "index": {
          "description": "Send file as the response Doesn set the Content-Type header so you probably want to do that on your own with setHeader",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "file",
          "normalized": "FilePath-\u003eActionM()",
          "package": "scotty",
          "signature": "FilePath-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet list of uploaded files.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "files",
          "package": "scotty",
          "signature": "ActionM [File]",
          "source": "src/Web-Scotty.html#files",
          "type": "function"
        },
        "index": {
          "description": "Get list of uploaded files",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "files",
          "normalized": "ActionM[File]",
          "package": "scotty",
          "signature": "ActionM[File]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a route based on a function which can match using the entire \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates the route does not match. A \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value indicates\n   a successful match, optionally returning a list of key-value pairs accessible\n   by \u003ccode\u003e\u003ca\u003eparam\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e get (function $ \\req -\u003e Just [(\"version\", pack $ show $ httpVersion req)]) $ do\n     v \u003c- param \"version\"\n     text v\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecurl http://localhost:3000/\n\u003c/code\u003e\u003c/strong\u003eHTTP/1.1\n\u003c/pre\u003e",
          "module": "Web.Scotty",
          "name": "function",
          "package": "scotty",
          "signature": "(Request -\u003e Maybe [Param]) -\u003e RoutePattern",
          "source": "src/Web-Scotty.html#function",
          "type": "function"
        },
        "index": {
          "description": "Build route based on function which can match using the entire Request object Nothing indicates the route does not match Just value indicates successful match optionally returning list of key-value pairs accessible by param get function req Just version pack show httpVersion req do param version text curl http localhost HTTP",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "function",
          "normalized": "(Request-\u003eMaybe[Param])-\u003eRoutePattern",
          "package": "scotty",
          "signature": "(Request-\u003eMaybe[Param])-\u003eRoutePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eGET\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "get",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionM () -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#get",
          "type": "function"
        },
        "index": {
          "description": "get addroute GET",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "get",
          "normalized": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value. Also sets \"Content-Type\"\n header to \"text/html\".\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "html",
          "package": "scotty",
          "signature": "Text -\u003e ActionM ()",
          "source": "src/Web-Scotty.html#html",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to the given Text value Also sets Content-Type header to text html",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "html",
          "normalized": "Text-\u003eActionM()",
          "package": "scotty",
          "signature": "Text-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to the JSON encoding of the given value. Also sets \"Content-Type\"\n header to \"application/json\".\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "json",
          "package": "scotty",
          "signature": "a -\u003e ActionM ()",
          "source": "src/Web-Scotty.html#json",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to the JSON encoding of the given value Also sets Content-Type header to application json",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "json",
          "normalized": "a-\u003eActionM()",
          "package": "scotty",
          "signature": "a-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the request body as a JSON object and return it. Raises an exception if parse is unsuccessful.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "jsonData",
          "package": "scotty",
          "signature": "ActionM a",
          "source": "src/Web-Scotty.html#jsonData",
          "type": "function"
        },
        "index": {
          "description": "Parse the request body as JSON object and return it Raises an exception if parse is unsuccessful",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "jsonData",
          "package": "scotty",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:jsonData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a route that requires the requested path match exactly, without captures.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "literal",
          "package": "scotty",
          "signature": "String -\u003e RoutePattern",
          "source": "src/Web-Scotty.html#literal",
          "type": "function"
        },
        "index": {
          "description": "Build route that requires the requested path match exactly without captures",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "literal",
          "normalized": "String-\u003eRoutePattern",
          "package": "scotty",
          "signature": "String-\u003eRoutePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a route that matches regardless of the HTTP verb.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "matchAny",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionM () -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#matchAny",
          "type": "function"
        },
        "index": {
          "description": "Add route that matches regardless of the HTTP verb",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "matchAny",
          "normalized": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "package": "scotty",
          "partial": "Any",
          "signature": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:matchAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse given middleware. Middleware is nested such that the first declared\n is the outermost middleware (it has first dibs on the request and last action\n on the response). Every middleware is run on each request.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "middleware",
          "package": "scotty",
          "signature": "Middleware -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#middleware",
          "type": "function"
        },
        "index": {
          "description": "Use given middleware Middleware is nested such that the first declared is the outermost middleware it has first dibs on the request and last action on the response Every middleware is run on each request",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "middleware",
          "normalized": "Middleware-\u003eScottyM()",
          "package": "scotty",
          "signature": "Middleware-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:middleware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort execution of this action and continue pattern matching routes.\n Like an exception, any code after \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e is not executed.\n\u003c/p\u003e\u003cp\u003eAs an example, these two routes overlap. The only way the second one will\n ever run is if the first one calls \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e get \"/foo/:bar\" $ do\n   w :: Text \u003c- param \"bar\"\n   unless (w == \"special\") next\n   text \"You made a request to /foo/special\"\n\n get \"/foo/:baz\" $ do\n   w \u003c- param \"baz\"\n   text $ \"You made a request to: \" \u003c\u003e w\n\u003c/pre\u003e",
          "module": "Web.Scotty",
          "name": "next",
          "package": "scotty",
          "signature": "ActionM a",
          "source": "src/Web-Scotty.html#next",
          "type": "function"
        },
        "index": {
          "description": "Abort execution of this action and continue pattern matching routes Like an exception any code after next is not executed As an example these two routes overlap The only way the second one will ever run is if the first one calls next get foo bar do Text param bar unless special next text You made request to foo special get foo baz do param baz text You made request to",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "next",
          "package": "scotty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify an action to take if nothing else is found. Note: this _always_ matches,\n so should generally be the last route specified.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "notFound",
          "package": "scotty",
          "signature": "ActionM () -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#notFound",
          "type": "function"
        },
        "index": {
          "description": "Specify an action to take if nothing else is found Note this always matches so should generally be the last route specified",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "notFound",
          "normalized": "ActionM()-\u003eScottyM()",
          "package": "scotty",
          "partial": "Found",
          "signature": "ActionM()-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:notFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a parameter. First looks in captures, then form data, then query parameters.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Raises an exception which can be caught by \u003ccode\u003e\u003ca\u003erescue\u003c/a\u003e\u003c/code\u003e if parameter is not found.\n\u003c/li\u003e\u003cli\u003e If parameter is found, but \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e fails to parse to the correct type, \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e is called.\n   This means captures are somewhat typed, in that a route won't match if a correctly typed\n   capture cannot be parsed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Scotty",
          "name": "param",
          "package": "scotty",
          "signature": "Text -\u003e ActionM a",
          "source": "src/Web-Scotty.html#param",
          "type": "function"
        },
        "index": {
          "description": "Get parameter First looks in captures then form data then query parameters Raises an exception which can be caught by rescue if parameter is not found If parameter is found but read fails to parse to the correct type next is called This means captures are somewhat typed in that route won match if correctly typed capture cannot be parsed",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "param",
          "normalized": "Text-\u003eActionM a",
          "package": "scotty",
          "signature": "Text-\u003eActionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all parameters from capture, form and query (in that order).\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "params",
          "package": "scotty",
          "signature": "ActionM [Param]",
          "source": "src/Web-Scotty.html#params",
          "type": "function"
        },
        "index": {
          "description": "Get all parameters from capture form and query in that order",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "params",
          "normalized": "ActionM[Param]",
          "package": "scotty",
          "signature": "ActionM[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value and parse it as \u003ccode\u003ea\u003c/code\u003e, or fail with a message.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "parseParam",
          "package": "scotty",
          "signature": "Text -\u003e Either Text a",
          "source": "src/Web-Scotty-Action.html#parseParam",
          "type": "method"
        },
        "index": {
          "description": "Take Text value and parse it as or fail with message",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "parseParam",
          "normalized": "Text-\u003eEither Text a",
          "package": "scotty",
          "partial": "Param",
          "signature": "Text-\u003eEither Text a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:parseParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation parses comma-delimited lists.\n\u003c/p\u003e\u003cpre\u003e parseParamList t = mapM parseParam (T.split (== ',') t)\n\u003c/pre\u003e",
          "module": "Web.Scotty",
          "name": "parseParamList",
          "package": "scotty",
          "signature": "Text -\u003e Either Text [a]",
          "source": "src/Web-Scotty-Action.html#parseParamList",
          "type": "method"
        },
        "index": {
          "description": "Default implementation parses comma-delimited lists parseParamList mapM parseParam T.split",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "parseParamList",
          "normalized": "Text-\u003eEither Text[a]",
          "package": "scotty",
          "partial": "Param List",
          "signature": "Text-\u003eEither Text[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:parseParamList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epatch = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ePATCH\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "patch",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionM () -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#patch",
          "type": "function"
        },
        "index": {
          "description": "patch addroute PATCH",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "patch",
          "normalized": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:patch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epost = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ePOST\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "post",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionM () -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#post",
          "type": "function"
        },
        "index": {
          "description": "post addroute POST",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "post",
          "normalized": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eput = \u003ccode\u003e\u003ca\u003eaddroute\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ePUT\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "put",
          "package": "scotty",
          "signature": "RoutePattern -\u003e ActionM () -\u003e ScottyM ()",
          "source": "src/Web-Scotty.html#put",
          "type": "function"
        },
        "index": {
          "description": "put addroute PUT",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "put",
          "normalized": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "package": "scotty",
          "signature": "RoutePattern-\u003eActionM()-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception, which can be caught with \u003ccode\u003e\u003ca\u003erescue\u003c/a\u003e\u003c/code\u003e. Uncaught exceptions\n turn into HTTP 500 responses.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "raise",
          "package": "scotty",
          "signature": "Text -\u003e ActionM a",
          "source": "src/Web-Scotty.html#raise",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception which can be caught with rescue Uncaught exceptions turn into HTTP responses",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "raise",
          "normalized": "Text-\u003eActionM a",
          "package": "scotty",
          "signature": "Text-\u003eActionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e value. Doesn't set the\n \"Content-Type\" header, so you probably want to do that on your own with \u003ccode\u003e\u003ca\u003esetHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "raw",
          "package": "scotty",
          "signature": "ByteString -\u003e ActionM ()",
          "source": "src/Web-Scotty.html#raw",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to the given ByteString value Doesn set the Content-Type header so you probably want to do that on your own with setHeader",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "raw",
          "normalized": "ByteString-\u003eActionM()",
          "package": "scotty",
          "signature": "ByteString-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect to given URL. Like throwing an uncatchable exception. Any code after the call to redirect\n will not be run.\n\u003c/p\u003e\u003cpre\u003e redirect \"http://www.google.com\"\n\u003c/pre\u003e\u003cp\u003eOR\n\u003c/p\u003e\u003cpre\u003e redirect \"/foo/bar\"\n\u003c/pre\u003e",
          "module": "Web.Scotty",
          "name": "redirect",
          "package": "scotty",
          "signature": "Text -\u003e ActionM a",
          "source": "src/Web-Scotty.html#redirect",
          "type": "function"
        },
        "index": {
          "description": "Redirect to given URL Like throwing an uncatchable exception Any code after the call to redirect will not be run redirect http www.google.com OR redirect foo bar",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "redirect",
          "normalized": "Text-\u003eActionM a",
          "package": "scotty",
          "signature": "Text-\u003eActionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch requests using a regular expression.\n   Named captures are not yet supported.\n\u003c/p\u003e\u003cpre\u003e get (regex \"^/f(.*)r$\") $ do\n    path \u003c- param \"0\"\n    cap \u003c- param \"1\"\n    text $ mconcat [\"Path: \", path, \"\\nCapture: \", cap]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecurl http://localhost:3000/foo/bar\n\u003c/code\u003e\u003c/strong\u003ePath: /foo/bar\nCapture: oo/ba\n\u003c/pre\u003e",
          "module": "Web.Scotty",
          "name": "regex",
          "package": "scotty",
          "signature": "String -\u003e RoutePattern",
          "source": "src/Web-Scotty.html#regex",
          "type": "function"
        },
        "index": {
          "description": "Match requests using regular expression Named captures are not yet supported get regex do path param cap param text mconcat Path path nCapture cap curl http localhost foo bar Path foo bar Capture oo ba",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "regex",
          "normalized": "String-\u003eRoutePattern",
          "package": "scotty",
          "signature": "String-\u003eRoutePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:regex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a request header. Header name is case-insensitive.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "reqHeader",
          "package": "scotty",
          "signature": "Text -\u003e ActionM (Maybe Text)",
          "source": "src/Web-Scotty.html#reqHeader",
          "type": "function"
        },
        "index": {
          "description": "Get request header Header name is case-insensitive",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "reqHeader",
          "normalized": "Text-\u003eActionM(Maybe Text)",
          "package": "scotty",
          "partial": "Header",
          "signature": "Text-\u003eActionM(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:reqHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "request",
          "package": "scotty",
          "signature": "ActionM Request",
          "source": "src/Web-Scotty.html#request",
          "type": "function"
        },
        "index": {
          "description": "Get the Request object",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "request",
          "package": "scotty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an exception thrown by \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e raise \"just kidding\" `rescue` (\\msg -\u003e text msg)\n\u003c/pre\u003e",
          "module": "Web.Scotty",
          "name": "rescue",
          "package": "scotty",
          "signature": "ActionM a -\u003e (Text -\u003e ActionM a) -\u003e ActionM a",
          "source": "src/Web-Scotty.html#rescue",
          "type": "function"
        },
        "index": {
          "description": "Catch an exception thrown by raise raise just kidding rescue msg text msg",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "rescue",
          "normalized": "ActionM a-\u003e(Text-\u003eActionM a)-\u003eActionM a",
          "package": "scotty",
          "signature": "ActionM a-\u003e(Text-\u003eActionM a)-\u003eActionM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:rescue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a scotty application using the warp server.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "scotty",
          "package": "scotty",
          "signature": "Port -\u003e ScottyM () -\u003e IO ()",
          "source": "src/Web-Scotty.html#scotty",
          "type": "function"
        },
        "index": {
          "description": "Run scotty application using the warp server",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "scotty",
          "normalized": "Port-\u003eScottyM()-\u003eIO()",
          "package": "scotty",
          "signature": "Port-\u003eScottyM()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:scotty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a scotty application into a WAI \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e, which can be\n run with any WAI handler.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "scottyApp",
          "package": "scotty",
          "signature": "ScottyM () -\u003e IO Application",
          "source": "src/Web-Scotty.html#scottyApp",
          "type": "function"
        },
        "index": {
          "description": "Turn scotty application into WAI Application which can be run with any WAI handler",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "scottyApp",
          "normalized": "ScottyM()-\u003eIO Application",
          "package": "scotty",
          "partial": "App",
          "signature": "ScottyM()-\u003eIO Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:scottyApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a scotty application using the warp server, passing extra options.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "scottyOpts",
          "package": "scotty",
          "signature": "Options -\u003e ScottyM () -\u003e IO ()",
          "source": "src/Web-Scotty.html#scottyOpts",
          "type": "function"
        },
        "index": {
          "description": "Run scotty application using the warp server passing extra options",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "scottyOpts",
          "normalized": "Options-\u003eScottyM()-\u003eIO()",
          "package": "scotty",
          "partial": "Opts",
          "signature": "Options-\u003eScottyM()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:scottyOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet one of the response headers. Will override any previously set value for that header.\n Header names are case-insensitive.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "setHeader",
          "package": "scotty",
          "signature": "Text -\u003e Text -\u003e ActionM ()",
          "source": "src/Web-Scotty.html#setHeader",
          "type": "function"
        },
        "index": {
          "description": "Set one of the response headers Will override any previously set value for that header Header names are case-insensitive",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "setHeader",
          "normalized": "Text-\u003eText-\u003eActionM()",
          "package": "scotty",
          "partial": "Header",
          "signature": "Text-\u003eText-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to a Source. Doesn't set the\n \"Content-Type\" header, so you probably want to do that on your\n own with \u003ccode\u003e\u003ca\u003esetHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "source",
          "package": "scotty",
          "signature": "Source IO (Flush Builder) -\u003e ActionM ()",
          "source": "src/Web-Scotty.html#source",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to Source Doesn set the Content-Type header so you probably want to do that on your own with setHeader",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "source",
          "normalized": "Source IO(Flush Builder)-\u003eActionM()",
          "package": "scotty",
          "signature": "Source IO(Flush Builder)-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the HTTP response status. Default is 200.\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "status",
          "package": "scotty",
          "signature": "Status -\u003e ActionM ()",
          "source": "src/Web-Scotty.html#status",
          "type": "function"
        },
        "index": {
          "description": "Set the HTTP response status Default is",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "status",
          "normalized": "Status-\u003eActionM()",
          "package": "scotty",
          "signature": "Status-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the body of the response to the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value. Also sets \"Content-Type\"\n header to \"text/plain\".\n\u003c/p\u003e",
          "module": "Web.Scotty",
          "name": "text",
          "package": "scotty",
          "signature": "Text -\u003e ActionM ()",
          "source": "src/Web-Scotty.html#text",
          "type": "function"
        },
        "index": {
          "description": "Set the body of the response to the given Text value Also sets Content-Type header to text plain",
          "hierarchy": "Web Scotty",
          "module": "Web.Scotty",
          "name": "text",
          "normalized": "Text-\u003eActionM()",
          "package": "scotty",
          "signature": "Text-\u003eActionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty/docs/Web-Scotty.html#v:text"
      }
    }
  ]
]