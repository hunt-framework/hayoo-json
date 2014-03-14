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
        "word": "snap-loader-static"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Loader.Static",
          "name": "Static",
          "package": "snap-loader-static",
          "source": "src/Snap-Loader-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Loader Static",
          "module": "Snap.Loader.Static",
          "name": "Static",
          "package": "snap-loader-static",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-loader-static/docs/Snap-Loader-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function provides a non-magical type-compatible loader for\n the one in snap-dynamic's Snap.Loader.Devel, allowing switching one\n import to provide production-mode compilation.\n\u003c/p\u003e\u003cp\u003eThis could be considered a TH wrapper around a function\n\u003c/p\u003e\u003cpre\u003e loadSnap :: Typeable a =\u003e IO a -\u003e (a -\u003e IO (Snap (), IO ()))\n                        -\u003e [String] -\u003e IO (a, Snap (), IO ())\n\u003c/pre\u003e\u003cp\u003eThe third argument is unused, and only present for\n type-compatibility with Snap.Loader.Devel\n\u003c/p\u003e",
          "module": "Snap.Loader.Static",
          "name": "loadSnapTH",
          "package": "snap-loader-static",
          "signature": "Q Exp -\u003e Name -\u003e [String] -\u003e Q Exp",
          "source": "src/Snap-Loader-Static.html#loadSnapTH",
          "type": "function"
        },
        "index": {
          "description": "This function provides non-magical type-compatible loader for the one in snap-dynamic Snap.Loader.Devel allowing switching one import to provide production-mode compilation This could be considered TH wrapper around function loadSnap Typeable IO IO Snap IO String IO Snap IO The third argument is unused and only present for type-compatibility with Snap.Loader.Devel",
          "hierarchy": "Snap Loader Static",
          "module": "Snap.Loader.Static",
          "name": "loadSnapTH",
          "normalized": "Q Exp-\u003eName-\u003e[String]-\u003eQ Exp",
          "package": "snap-loader-static",
          "partial": "Snap TH",
          "signature": "Q Exp-\u003eName-\u003e[String]-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-loader-static/docs/Snap-Loader-Static.html#v:loadSnapTH"
      }
    }
  ]
]