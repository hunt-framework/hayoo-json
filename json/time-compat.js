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
        "word": "time-compat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompatibility with the\n   \u003ca\u003eold-time\u003c/a\u003e package for the\n   \"new\" \u003ca\u003etime\u003c/a\u003e package.\n\u003c/p\u003e\u003cp\u003eThis is useful for writing portable code; in particular, if you're\n   using the \u003ca\u003edirectory\u003c/a\u003e\n   package and you want your code to build with both GHC 7.6 and earlier\n   versions.  The version of \u003ccode\u003edirectory\u003c/code\u003e used with GHC 7.6 changed\n   a dependency from \u003ccode\u003eold-time\u003c/code\u003e to \u003ccode\u003etime\u003c/code\u003e which means its\n   \u003ccode\u003egetModificationTime\u003c/code\u003e function now returns a \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e instead of\n   a \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e.  This type affects the public API of many\n   libraries that use it.  To make such libraries portable, port your\n   code to use the \u003ccode\u003etime\u003c/code\u003e package and to only rely on \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e in\n   its public API, and call \u003ccode\u003e\u003ca\u003etoUTCTime\u003c/a\u003e\u003c/code\u003e on the values returned by\n   functions like \u003ccode\u003egetModificationTime\u003c/code\u003e, for example:\n\u003c/p\u003e\u003cpre\u003efmap toUTCTime getModificationTime\n\u003c/pre\u003e\u003cp\u003eIf you're using \u003ccode\u003edirectory-1.2\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etoUTCTime\u003c/a\u003e\u003c/code\u003e will just be \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e and the\n   original value is returned intact.  If you're using an older\n   \u003ccode\u003edirectory\u003c/code\u003e, for example because you're building with GHC 7.4, the\n   \u003ccode\u003e\u003ca\u003eClockTime\u003c/a\u003e\u003c/code\u003e returned by \u003ccode\u003egetModificationTime\u003c/code\u003e will be\n   converted to a \u003ccode\u003e\u003ca\u003eUTCTime\u003c/a\u003e\u003c/code\u003e and will be compatible with your code\n   ported to the new \u003ccode\u003etime\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Time.Compat",
          "name": "Compat",
          "package": "time-compat",
          "source": "src/Data-Time-Compat.html",
          "type": "module"
        },
        "index": {
          "description": "Compatibility with the old-time package for the new time package This is useful for writing portable code in particular if you re using the directory package and you want your code to build with both GHC and earlier versions The version of directory used with GHC changed dependency from old-time to time which means its getModificationTime function now returns UTCTime instead of ClockTime This type affects the public API of many libraries that use it To make such libraries portable port your code to use the time package and to only rely on UTCTime in its public API and call toUTCTime on the values returned by functions like getModificationTime for example fmap toUTCTime getModificationTime If you re using directory-1.2 toUTCTime will just be id and the original value is returned intact If you re using an older directory for example because you re building with GHC the ClockTime returned by getModificationTime will be converted to UTCTime and will be compatible with your code ported to the new time package",
          "hierarchy": "Data Time Compat",
          "module": "Data.Time.Compat",
          "name": "Compat",
          "package": "time-compat",
          "partial": "Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/time-compat/docs/Data-Time-Compat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Compat",
          "name": "ToUTCTime",
          "package": "time-compat",
          "source": "src/Data-Time-Compat.html#ToUTCTime",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Time Compat",
          "module": "Data.Time.Compat",
          "name": "ToUTCTime",
          "package": "time-compat",
          "partial": "To UTCTime",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/time-compat/docs/Data-Time-Compat.html#t:ToUTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Time.Compat",
          "name": "toUTCTime",
          "package": "time-compat",
          "signature": "a -\u003e UTCTime",
          "source": "src/Data-Time-Compat.html#toUTCTime",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Time Compat",
          "module": "Data.Time.Compat",
          "name": "toUTCTime",
          "normalized": "a-\u003eUTCTime",
          "package": "time-compat",
          "partial": "UTCTime",
          "signature": "a-\u003eUTCTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/time-compat/docs/Data-Time-Compat.html#v:toUTCTime"
      }
    }
  ]
]