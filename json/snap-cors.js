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
        "word": "snap-cors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdd \u003ca\u003eCORS\u003c/a\u003e (cross-origin resource sharing)\n headers to a Snap application. CORS headers can be added either conditionally\n or unconditionally to the entire site, or you can apply CORS headers to a\n single route.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.CORS",
          "name": "CORS",
          "package": "snap-cors",
          "source": "src/Snap-CORS.html",
          "type": "module"
        },
        "index": {
          "description": "Add CORS cross-origin resource sharing headers to Snap application CORS headers can be added either conditionally or unconditionally to the entire site or you can apply CORS headers to single route",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "CORS",
          "package": "snap-cors",
          "partial": "CORS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the options to use when building CORS headers for a response. Most\n of these options are \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e actions to allow you to conditionally\n determine the setting of each header.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "CORSOptions",
          "package": "snap-cors",
          "source": "src/Snap-CORS.html#CORSOptions",
          "type": "data"
        },
        "index": {
          "description": "Specify the options to use when building CORS headers for response Most of these options are Handler actions to allow you to conditionally determine the setting of each header",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "CORSOptions",
          "package": "snap-cors",
          "partial": "CORSOptions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#t:CORSOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.CORS",
          "name": "HashableMethod",
          "package": "snap-cors",
          "source": "src/Snap-CORS.html#HashableMethod",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "HashableMethod",
          "package": "snap-cors",
          "partial": "Hashable Method",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#t:HashableMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003enewtype\u003c/code\u003e over \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "HashableURI",
          "package": "snap-cors",
          "source": "src/Snap-CORS.html#HashableURI",
          "type": "newtype"
        },
        "index": {
          "description": "newtype over URI with Hashable instance",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "HashableURI",
          "package": "snap-cors",
          "partial": "Hashable URI",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#t:HashableURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to specify the contents of the \u003ccode\u003eAccess-Control-Allow-Origin\u003c/code\u003e header.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "OriginList",
          "package": "snap-cors",
          "source": "src/Snap-CORS.html#OriginList",
          "type": "data"
        },
        "index": {
          "description": "Used to specify the contents of the Access-Control-Allow-Origin header",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "OriginList",
          "package": "snap-cors",
          "partial": "Origin List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#t:OriginList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of origins. RFC 6454 specifies that origins are a scheme, host and\n port, so the \u003ccode\u003e\u003ca\u003eOriginSet\u003c/a\u003e\u003c/code\u003e wrapper around a \u003ccode\u003e\u003ca\u003eHashSet\u003c/a\u003e\u003c/code\u003e ensures that each\n \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e constists of nothing more than this.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "OriginSet",
          "package": "snap-cors",
          "source": "src/Snap-CORS.html#OriginSet",
          "type": "data"
        },
        "index": {
          "description": "set of origins RFC specifies that origins are scheme host and port so the OriginSet wrapper around HashSet ensures that each URI constists of nothing more than this",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "OriginSet",
          "package": "snap-cors",
          "partial": "Origin Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#t:OriginSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.CORS",
          "name": "CORSOptions",
          "package": "snap-cors",
          "signature": "CORSOptions",
          "source": "src/Snap-CORS.html#CORSOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "CORSOptions",
          "package": "snap-cors",
          "partial": "CORSOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:CORSOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow any origin to access this resource. Corresponds to\n \u003ccode\u003eAccess-Control-Allow-Origin: *\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "Everywhere",
          "package": "snap-cors",
          "signature": "Everywhere",
          "source": "src/Snap-CORS.html#OriginList",
          "type": "function"
        },
        "index": {
          "description": "Allow any origin to access this resource Corresponds to Access-Control-Allow-Origin",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "Everywhere",
          "package": "snap-cors",
          "partial": "Everywhere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:Everywhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.CORS",
          "name": "HashableMethod",
          "package": "snap-cors",
          "signature": "HashableMethod Method",
          "source": "src/Snap-CORS.html#HashableMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "HashableMethod",
          "package": "snap-cors",
          "partial": "Hashable Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:HashableMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.CORS",
          "name": "HashableURI",
          "package": "snap-cors",
          "signature": "HashableURI URI",
          "source": "src/Snap-CORS.html#HashableURI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "HashableURI",
          "package": "snap-cors",
          "partial": "Hashable URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:HashableURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not allow cross-origin requests\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "Nowhere",
          "package": "snap-cors",
          "signature": "Nowhere",
          "source": "src/Snap-CORS.html#OriginList",
          "type": "function"
        },
        "index": {
          "description": "Do not allow cross-origin requests",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "Nowhere",
          "package": "snap-cors",
          "partial": "Nowhere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:Nowhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow cross-origin requests from these origins.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "Origins",
          "package": "snap-cors",
          "signature": "Origins OriginSet",
          "source": "src/Snap-CORS.html#OriginList",
          "type": "function"
        },
        "index": {
          "description": "Allow cross-origin requests from these origins",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "Origins",
          "package": "snap-cors",
          "partial": "Origins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:Origins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply CORS headers to a specific request. This is useful if you only have\n a single action that needs CORS headers, and you don't want to pay for\n conditional checks on every request.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "applyCORS",
          "package": "snap-cors",
          "signature": "CORSOptions m -\u003e m () -\u003e m ()",
          "source": "src/Snap-CORS.html#applyCORS",
          "type": "function"
        },
        "index": {
          "description": "Apply CORS headers to specific request This is useful if you only have single action that needs CORS headers and you don want to pay for conditional checks on every request",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "applyCORS",
          "normalized": "CORSOptions a-\u003ea()-\u003ea()",
          "package": "snap-cors",
          "partial": "CORS",
          "signature": "CORSOptions m-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:applyCORS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not to allow exposing the response when the omit credentials\n flag is unset.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "corsAllowCredentials",
          "package": "snap-cors",
          "signature": "m Bool",
          "source": "src/Snap-CORS.html#CORSOptions",
          "type": "function"
        },
        "index": {
          "description": "Whether or not to allow exposing the response when the omit credentials flag is unset",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "corsAllowCredentials",
          "package": "snap-cors",
          "partial": "Allow Credentials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:corsAllowCredentials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich origins are allowed to make cross-origin requests.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "corsAllowOrigin",
          "package": "snap-cors",
          "signature": "m OriginList",
          "source": "src/Snap-CORS.html#CORSOptions",
          "type": "function"
        },
        "index": {
          "description": "Which origins are allowed to make cross-origin requests",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "corsAllowOrigin",
          "package": "snap-cors",
          "partial": "Allow Origin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:corsAllowOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to determine which of the request headers are allowed.\n This action is supplied the parsed contents of\n \u003ccode\u003eAccess-Control-Request-Headers\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "corsAllowedHeaders",
          "package": "snap-cors",
          "signature": "HashSet String -\u003e m (HashSet String)",
          "source": "src/Snap-CORS.html#CORSOptions",
          "type": "function"
        },
        "index": {
          "description": "An action to determine which of the request headers are allowed This action is supplied the parsed contents of Access-Control-Request-Headers",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "corsAllowedHeaders",
          "normalized": "HashSet String-\u003ea(HashSet String)",
          "package": "snap-cors",
          "partial": "Allowed Headers",
          "signature": "HashSet String-\u003em(HashSet String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:corsAllowedHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of request methods that are allowed.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "corsAllowedMethods",
          "package": "snap-cors",
          "signature": "m (HashSet HashableMethod)",
          "source": "src/Snap-CORS.html#CORSOptions",
          "type": "function"
        },
        "index": {
          "description": "list of request methods that are allowed",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "corsAllowedMethods",
          "package": "snap-cors",
          "partial": "Allowed Methods",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:corsAllowedMethods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of headers that are exposed to clients. This allows clients to\n read the values of these headers, if the response includes them.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "corsExposeHeaders",
          "package": "snap-cors",
          "signature": "m (HashSet (CI ByteString))",
          "source": "src/Snap-CORS.html#CORSOptions",
          "type": "function"
        },
        "index": {
          "description": "list of headers that are exposed to clients This allows clients to read the values of these headers if the response includes them",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "corsExposeHeaders",
          "package": "snap-cors",
          "partial": "Expose Headers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:corsExposeHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiberal default options. Specifies that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All origins may make cross-origin requests\n * \u003ccode\u003eallow-credentials\u003c/code\u003e is true.\n * No extra headers beyond simple headers are exposed.\n * \u003ccode\u003eGET\u003c/code\u003e, \u003ccode\u003ePOST\u003c/code\u003e, \u003ccode\u003ePUT\u003c/code\u003e, \u003ccode\u003eDELETE\u003c/code\u003e and \u003ccode\u003eHEAD\u003c/code\u003e are all allowed.\n * All request headers are allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll options are determined unconditionally.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "defaultOptions",
          "package": "snap-cors",
          "signature": "CORSOptions m",
          "source": "src/Snap-CORS.html#defaultOptions",
          "type": "function"
        },
        "index": {
          "description": "Liberal default options Specifies that All origins may make cross-origin requests allow-credentials is true No extra headers beyond simple headers are exposed GET POST PUT DELETE and HEAD are all allowed All request headers are allowed All options are determined unconditionally",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "defaultOptions",
          "package": "snap-cors",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:defaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.CORS",
          "name": "mkOriginSet",
          "package": "snap-cors",
          "signature": "[URI] -\u003e OriginSet",
          "source": "src/Snap-CORS.html#mkOriginSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "mkOriginSet",
          "normalized": "[URI]-\u003eOriginSet",
          "package": "snap-cors",
          "partial": "Origin Set",
          "signature": "[URI]-\u003eOriginSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:mkOriginSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.CORS",
          "name": "origins",
          "package": "snap-cors",
          "signature": "OriginSet -\u003e HashSet HashableURI",
          "source": "src/Snap-CORS.html#origins",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "origins",
          "normalized": "OriginSet-\u003eHashSet HashableURI",
          "package": "snap-cors",
          "signature": "OriginSet-\u003eHashSet HashableURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:origins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply CORS for every request, unconditionally.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ewrapCors\u003c/code\u003e &#8801; \u003ccode\u003e\u003ca\u003ewrapCORSWithOptions\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "wrapCORS",
          "package": "snap-cors",
          "signature": "Initializer b v ()",
          "source": "src/Snap-CORS.html#wrapCORS",
          "type": "function"
        },
        "index": {
          "description": "Apply CORS for every request unconditionally wrapCors wrapCORSWithOptions defaultOptions",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "wrapCORS",
          "normalized": "Initializer a b()",
          "package": "snap-cors",
          "partial": "CORS",
          "signature": "Initializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:wrapCORS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize CORS for all requests with specific options.\n\u003c/p\u003e",
          "module": "Snap.CORS",
          "name": "wrapCORSWithOptions",
          "package": "snap-cors",
          "signature": "CORSOptions (Handler b v) -\u003e Initializer b v ()",
          "source": "src/Snap-CORS.html#wrapCORSWithOptions",
          "type": "function"
        },
        "index": {
          "description": "Initialize CORS for all requests with specific options",
          "hierarchy": "Snap CORS",
          "module": "Snap.CORS",
          "name": "wrapCORSWithOptions",
          "normalized": "CORSOptions(Handler a b)-\u003eInitializer a b()",
          "package": "snap-cors",
          "partial": "CORSWith Options",
          "signature": "CORSOptions(Handler b v)-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-cors/docs/Snap-CORS.html#v:wrapCORSWithOptions"
      }
    }
  ]
]