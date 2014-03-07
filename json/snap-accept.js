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
        "word": "snap-accept"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a simple interface for routing based on the value of the Accept\n header in the client's request.  The functions \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eaccepts\u003c/a\u003e\u003c/code\u003e\n mirror Snap's standard \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emethods\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e\u003cp\u003eThe most convenient way of building \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e values is to use the\n \u003ccode\u003eIsString\u003c/code\u003e instance with OverloadedStrings.\n\u003c/p\u003e\u003cpre\u003e accept \"application/json\" serveJson\n\u003c/pre\u003e\u003cp\u003eSimple constructor operators are also supplied if you prefer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Accept",
          "name": "Accept",
          "package": "snap-accept",
          "source": "src/Snap-Accept.html",
          "type": "module"
        },
        "index": {
          "description": "Provides simple interface for routing based on the value of the Accept header in the client request The functions accept and accepts mirror Snap standard method and methods functions The most convenient way of building MediaType values is to use the IsString instance with OverloadedStrings accept application json serveJson Simple constructor operators are also supplied if you prefer",
          "hierarchy": "Snap Accept",
          "module": "Snap.Accept",
          "name": "Accept",
          "package": "snap-accept",
          "partial": "Accept",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-accept/docs/Snap-Accept.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn HTTP media type, consisting of the type, subtype, and parameters.\n\u003c/p\u003e",
          "module": "Snap.Accept",
          "name": "MediaType",
          "package": "snap-accept",
          "type": "data"
        },
        "index": {
          "description": "An HTTP media type consisting of the type subtype and parameters",
          "hierarchy": "Snap Accept",
          "module": "Snap.Accept",
          "name": "MediaType",
          "package": "snap-accept",
          "partial": "Media Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-accept/docs/Snap-Accept.html#t:MediaType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e without parameters. Can produce an error if\n either type is invalid.\n\u003c/p\u003e",
          "module": "Snap.Accept",
          "name": "(//)",
          "package": "snap-accept",
          "signature": "ByteString -\u003e ByteString -\u003e MediaType",
          "type": "function"
        },
        "index": {
          "description": "Builds MediaType without parameters Can produce an error if either type is invalid",
          "hierarchy": "Snap Accept",
          "module": "Snap.Accept",
          "name": "(//) //",
          "normalized": "ByteString-\u003eByteString-\u003eMediaType",
          "package": "snap-accept",
          "signature": "ByteString-\u003eByteString-\u003eMediaType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-accept/docs/Snap-Accept.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a parameter to a \u003ccode\u003e\u003ca\u003eMediaType\u003c/a\u003e\u003c/code\u003e. Can produce an error if either\n string is invalid.\n\u003c/p\u003e",
          "module": "Snap.Accept",
          "name": "(/:)",
          "package": "snap-accept",
          "signature": "MediaType -\u003e (ByteString, ByteString) -\u003e MediaType",
          "type": "function"
        },
        "index": {
          "description": "Adds parameter to MediaType Can produce an error if either string is invalid",
          "hierarchy": "Snap Accept",
          "module": "Snap.Accept",
          "name": "(/:) /:",
          "normalized": "MediaType-\u003e(ByteString,ByteString)-\u003eMediaType",
          "package": "snap-accept",
          "signature": "MediaType-\u003e(ByteString,ByteString)-\u003eMediaType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-accept/docs/Snap-Accept.html#v:-47-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a Snap monad only if the request's Accept header allows for the\n given media type.  If accepted, the response's Content-Type header is\n automatically filled in.\n\u003c/p\u003e",
          "module": "Snap.Accept",
          "name": "accept",
          "package": "snap-accept",
          "signature": "MediaType -\u003e m a -\u003e m a",
          "source": "src/Snap-Accept.html#accept",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap monad only if the request Accept header allows for the given media type If accepted the response Content-Type header is automatically filled in",
          "hierarchy": "Snap Accept",
          "module": "Snap.Accept",
          "name": "accept",
          "normalized": "MediaType-\u003ea b-\u003ea b",
          "package": "snap-accept",
          "signature": "MediaType-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-accept/docs/Snap-Accept.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a Snap monad only if the request's Accept header allows for one of\n the given media types.  If accepted, the expected type is passed to the\n given function and the response's Content-Type header is automatically\n filled in.\n\u003c/p\u003e",
          "module": "Snap.Accept",
          "name": "accepts",
          "package": "snap-accept",
          "signature": "[(MediaType, m a)] -\u003e m a",
          "source": "src/Snap-Accept.html#accepts",
          "type": "function"
        },
        "index": {
          "description": "Runs Snap monad only if the request Accept header allows for one of the given media types If accepted the expected type is passed to the given function and the response Content-Type header is automatically filled in",
          "hierarchy": "Snap Accept",
          "module": "Snap.Accept",
          "name": "accepts",
          "normalized": "[(MediaType,a b)]-\u003ea b",
          "package": "snap-accept",
          "signature": "[(MediaType,m a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-accept/docs/Snap-Accept.html#v:accepts"
      }
    }
  ]
]