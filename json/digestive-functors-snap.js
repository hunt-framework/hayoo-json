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
        "word": "digestive-functors-snap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing a Snap backend for the digestive-functors library\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.Snap",
          "name": "Snap",
          "package": "digestive-functors-snap",
          "source": "src/Text-Digestive-Snap.html",
          "type": "module"
        },
        "index": {
          "description": "Module providing Snap backend for the digestive-functors library",
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "Snap",
          "package": "digestive-functors-snap",
          "partial": "Snap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Snap",
          "name": "SnapFormConfig",
          "package": "digestive-functors-snap",
          "source": "src/Text-Digestive-Snap.html#SnapFormConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "SnapFormConfig",
          "package": "digestive-functors-snap",
          "partial": "Snap Form Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#t:SnapFormConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Snap",
          "name": "SnapPartPolicy",
          "package": "digestive-functors-snap",
          "source": "src/Text-Digestive-Snap.html#SnapPartPolicy",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "SnapPartPolicy",
          "package": "digestive-functors-snap",
          "partial": "Snap Part Policy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#t:SnapPartPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Snap",
          "name": "SnapFormConfig",
          "package": "digestive-functors-snap",
          "signature": "SnapFormConfig",
          "source": "src/Text-Digestive-Snap.html#SnapFormConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "SnapFormConfig",
          "package": "digestive-functors-snap",
          "partial": "Snap Form Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#v:SnapFormConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Snap",
          "name": "defaultSnapFormConfig",
          "package": "digestive-functors-snap",
          "signature": "SnapFormConfig",
          "source": "src/Text-Digestive-Snap.html#defaultSnapFormConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "defaultSnapFormConfig",
          "package": "digestive-functors-snap",
          "partial": "Snap Form Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#v:defaultSnapFormConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan be used to override the method detected by Snap, in case you e.g.\n want to perform a \u003ccode\u003e\u003ca\u003epostForm\u003c/a\u003e\u003c/code\u003e even in case of a GET request.\n\u003c/p\u003e",
          "module": "Text.Digestive.Snap",
          "name": "method",
          "package": "digestive-functors-snap",
          "signature": "Maybe Method",
          "source": "src/Text-Digestive-Snap.html#SnapFormConfig",
          "type": "function"
        },
        "index": {
          "description": "Can be used to override the method detected by Snap in case you e.g want to perform postForm even in case of GET request",
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "method",
          "package": "digestive-functors-snap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Snap",
          "name": "partPolicy",
          "package": "digestive-functors-snap",
          "signature": "SnapPartPolicy",
          "source": "src/Text-Digestive-Snap.html#SnapFormConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "partPolicy",
          "package": "digestive-functors-snap",
          "partial": "Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#v:partPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a form with the HTTP input provided by Snap.\n\u003c/p\u003e\u003cp\u003eAutomatically picks between \u003ccode\u003e\u003ca\u003egetForm\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epostForm\u003c/a\u003e\u003c/code\u003e based on the request\n method. Set \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eSnapFormConfig\u003c/a\u003e\u003c/code\u003e to override this behaviour.\n\u003c/p\u003e",
          "module": "Text.Digestive.Snap",
          "name": "runForm",
          "package": "digestive-functors-snap",
          "signature": "Text-\u003e Form v m a-\u003e m (View v, Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Runs form with the HTTP input provided by Snap Automatically picks between getForm and postForm based on the request method Set method in the SnapFormConfig to override this behaviour",
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "runForm",
          "normalized": "Text-\u003eForm a b c-\u003eb(View a,Maybe c)",
          "package": "digestive-functors-snap",
          "partial": "Form",
          "signature": "Text-\u003eForm v m a-\u003em(View v,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#v:runForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a form with a custom upload policy, and HTTP input from snap.\n\u003c/p\u003e\u003cp\u003eAutomatically picks between \u003ccode\u003e\u003ca\u003egetForm\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epostForm\u003c/a\u003e\u003c/code\u003e based on request\n method. Set \u003ccode\u003e\u003ca\u003emethod\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eSnapFormConfig\u003c/a\u003e\u003c/code\u003e to override this behaviour.\n\u003c/p\u003e",
          "module": "Text.Digestive.Snap",
          "name": "runFormWith",
          "package": "digestive-functors-snap",
          "signature": "SnapFormConfig-\u003e Text-\u003e Form v m a-\u003e m (View v, Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Runs form with custom upload policy and HTTP input from snap Automatically picks between getForm and postForm based on request method Set method in the SnapFormConfig to override this behaviour",
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "runFormWith",
          "normalized": "SnapFormConfig-\u003eText-\u003eForm a b c-\u003eb(View a,Maybe c)",
          "package": "digestive-functors-snap",
          "partial": "Form With",
          "signature": "SnapFormConfig-\u003eText-\u003eForm v m a-\u003em(View v,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#v:runFormWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Snap",
          "name": "temporaryDirectory",
          "package": "digestive-functors-snap",
          "signature": "Maybe FilePath",
          "source": "src/Text-Digestive-Snap.html#SnapFormConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "temporaryDirectory",
          "package": "digestive-functors-snap",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#v:temporaryDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Snap",
          "name": "uploadPolicy",
          "package": "digestive-functors-snap",
          "signature": "UploadPolicy",
          "source": "src/Text-Digestive-Snap.html#SnapFormConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Snap",
          "module": "Text.Digestive.Snap",
          "name": "uploadPolicy",
          "package": "digestive-functors-snap",
          "partial": "Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors-snap/docs/Text-Digestive-Snap.html#v:uploadPolicy"
      }
    }
  ]
]