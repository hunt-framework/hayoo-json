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
        "word": "concurrentoutput"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides a simple interface to output status\n messages from more than one thread.\n\u003c/p\u003e\u003cp\u003eIt will continue adding information (such as dots, or \u003ca\u003edone\u003c/a\u003e)\n to the correct line corresponding to the issuing thread and continue\n scrolling when a line is done.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Terminal.Concurrent",
          "name": "Concurrent",
          "package": "concurrentoutput",
          "source": "src/System-Terminal-Concurrent.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides simple interface to output status messages from more than one thread It will continue adding information such as dots or done to the correct line corresponding to the issuing thread and continue scrolling when line is done",
          "hierarchy": "System Terminal Concurrent",
          "module": "System.Terminal.Concurrent",
          "name": "Concurrent",
          "package": "concurrentoutput",
          "partial": "Concurrent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrentoutput/docs/System-Terminal-Concurrent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an IO action to be called to output strings in a thread-safe manner.\n\u003c/p\u003e",
          "module": "System.Terminal.Concurrent",
          "name": "getConcurrentOutputter",
          "package": "concurrentoutput",
          "signature": "IO (String -\u003e IO ())",
          "source": "src/System-Terminal-Concurrent.html#getConcurrentOutputter",
          "type": "function"
        },
        "index": {
          "description": "Returns an IO action to be called to output strings in thread-safe manner",
          "hierarchy": "System Terminal Concurrent",
          "module": "System.Terminal.Concurrent",
          "name": "getConcurrentOutputter",
          "normalized": "IO(String-\u003eIO())",
          "package": "concurrentoutput",
          "partial": "Concurrent Outputter",
          "signature": "IO(String-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrentoutput/docs/System-Terminal-Concurrent.html#v:getConcurrentOutputter"
      }
    }
  ]
]