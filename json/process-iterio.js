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
        "word": "process-iterio"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for enumerating OS process input and output with IterIO's stream transformers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Process",
          "name": "Process",
          "package": "process-iterio",
          "source": "src/Data-IterIO-Process.html",
          "type": "module"
        },
        "index": {
          "description": "library for enumerating OS process input and output with IterIO stream transformers",
          "hierarchy": "Data IterIO Process",
          "module": "Data.IterIO.Process",
          "name": "Process",
          "package": "process-iterio",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/process-iterio/docs/Data-IterIO-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Inum that starts and executable at the given FilePath,\n   and passing it args.  The Inum's input stream is routed to stdin,\n   and stdout goes to the Inum's output stream.  If the executable\n   fails, an exception is thrown with the contents of stderr.\n\u003c/p\u003e",
          "module": "Data.IterIO.Process",
          "name": "cmd",
          "package": "process-iterio",
          "signature": "FilePath -\u003e [String] -\u003e Inum ByteString ByteString m a",
          "source": "src/Data-IterIO-Process.html#cmd",
          "type": "function"
        },
        "index": {
          "description": "Create an Inum that starts and executable at the given FilePath and passing it args The Inum input stream is routed to stdin and stdout goes to the Inum output stream If the executable fails an exception is thrown with the contents of stderr",
          "hierarchy": "Data IterIO Process",
          "module": "Data.IterIO.Process",
          "name": "cmd",
          "normalized": "FilePath-\u003e[String]-\u003eInum ByteString ByteString a b",
          "package": "process-iterio",
          "signature": "FilePath-\u003e[String]-\u003eInum ByteString ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-iterio/docs/Data-IterIO-Process.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Onum that starts and executable at the given FilePath,\n   passing it args, and routing the process's stdout to the Onum's\n   output stream.    If the executable fails, an exception is \n   thrown with the contents of stderr.\n\u003c/p\u003e",
          "module": "Data.IterIO.Process",
          "name": "enumProcess",
          "package": "process-iterio",
          "signature": "FilePath -\u003e [String] -\u003e Onum ByteString IO a",
          "source": "src/Data-IterIO-Process.html#enumProcess",
          "type": "function"
        },
        "index": {
          "description": "Create an Onum that starts and executable at the given FilePath passing it args and routing the process stdout to the Onum output stream If the executable fails an exception is thrown with the contents of stderr",
          "hierarchy": "Data IterIO Process",
          "module": "Data.IterIO.Process",
          "name": "enumProcess",
          "normalized": "FilePath-\u003e[String]-\u003eOnum ByteString IO a",
          "package": "process-iterio",
          "partial": "Process",
          "signature": "FilePath-\u003e[String]-\u003eOnum ByteString IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/process-iterio/docs/Data-IterIO-Process.html#v:enumProcess"
      }
    }
  ]
]