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
        "word": "io-storage"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConceptually, this library provides a way to arbitrarily extend the\nglobal state represented by the IO monad. Viewed another way, this\nlibrary provides a basic facility for setting and retrieving values\nfrom global variables.\n\u003c/p\u003e\u003cp\u003eThe interface takes the form of a very basic key-value store, with\nmultiple different stores made available through the \u003ccode\u003e\u003ca\u003ewithStore\u003c/a\u003e\u003c/code\u003e\nfunction. Stores are referenced by arbitrary strings, and keys\nwithin those stores are treated likewise. The \u003ccode\u003e\u003ca\u003eputValue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e,\nand \u003ccode\u003e\u003ca\u003edelValue\u003c/a\u003e\u003c/code\u003e functions allow you to store, retrieve, and delete\ndata from the store.\n\u003c/p\u003e\u003cp\u003eInternally, data is stored within an IORef which is created using the\n'unsafePerformIO hack', but this is hidden within the library so that\nit can easily be modified if and when a more \u003ccode\u003eproper\u003c/code\u003e solution is\nimplemented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.Storage",
          "name": "Storage",
          "package": "io-storage",
          "source": "src/System-IO-Storage.html",
          "type": "module"
        },
        "index": {
          "description": "Conceptually this library provides way to arbitrarily extend the global state represented by the IO monad Viewed another way this library provides basic facility for setting and retrieving values from global variables The interface takes the form of very basic key-value store with multiple different stores made available through the withStore function Stores are referenced by arbitrary strings and keys within those stores are treated likewise The putValue getValue and delValue functions allow you to store retrieve and delete data from the store Internally data is stored within an IORef which is created using the unsafePerformIO hack but this is hidden within the library so that it can easily be modified if and when more proper solution is implemented",
          "hierarchy": "System IO Storage",
          "module": "System.IO.Storage",
          "name": "Storage",
          "package": "io-storage",
          "partial": "Storage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a value from the given data-store.\n\u003c/p\u003e",
          "module": "System.IO.Storage",
          "name": "delValue",
          "package": "io-storage",
          "signature": "String -\u003e String -\u003e IO ()",
          "source": "src/System-IO-Storage.html#delValue",
          "type": "function"
        },
        "index": {
          "description": "Delete value from the given data-store",
          "hierarchy": "System IO Storage",
          "module": "System.IO.Storage",
          "name": "delValue",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "io-storage",
          "partial": "Value",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:delValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a value from the given store, with a default if it\n   doesn't exist.\n\u003c/p\u003e",
          "module": "System.IO.Storage",
          "name": "getDefaultValue",
          "package": "io-storage",
          "signature": "String -\u003e String -\u003e a -\u003e IO a",
          "source": "src/System-IO-Storage.html#getDefaultValue",
          "type": "function"
        },
        "index": {
          "description": "Get value from the given store with default if it doesn exist",
          "hierarchy": "System IO Storage",
          "module": "System.IO.Storage",
          "name": "getDefaultValue",
          "normalized": "String-\u003eString-\u003ea-\u003eIO a",
          "package": "io-storage",
          "partial": "Default Value",
          "signature": "String-\u003eString-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:getDefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a value from the given data-store, if it exists. If it\n   doesn't exist, obviously, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be returned.\n\u003c/p\u003e",
          "module": "System.IO.Storage",
          "name": "getValue",
          "package": "io-storage",
          "signature": "String -\u003e String -\u003e IO (Maybe a)",
          "source": "src/System-IO-Storage.html#getValue",
          "type": "function"
        },
        "index": {
          "description": "Get value from the given data-store if it exists If it doesn exist obviously Nothing will be returned",
          "hierarchy": "System IO Storage",
          "module": "System.IO.Storage",
          "name": "getValue",
          "normalized": "String-\u003eString-\u003eIO(Maybe a)",
          "package": "io-storage",
          "partial": "Value",
          "signature": "String-\u003eString-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:getValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a value into the given data-store.\n\u003c/p\u003e",
          "module": "System.IO.Storage",
          "name": "putValue",
          "package": "io-storage",
          "signature": "String -\u003e String -\u003e a -\u003e IO ()",
          "source": "src/System-IO-Storage.html#putValue",
          "type": "function"
        },
        "index": {
          "description": "Put value into the given data-store",
          "hierarchy": "System IO Storage",
          "module": "System.IO.Storage",
          "name": "putValue",
          "normalized": "String-\u003eString-\u003ea-\u003eIO()",
          "package": "io-storage",
          "partial": "Value",
          "signature": "String-\u003eString-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:putValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a named key-value store, and then execute the given\n   IO action within its extent. Calls to \u003ccode\u003e\u003ca\u003ewithStore\u003c/a\u003e\u003c/code\u003e can be\n   nested, and calling it again with the name of a data-store\n   that has already been initialized will cause the original\n   to be shadowed for the duration of the call to \u003ccode\u003e\u003ca\u003ewithStore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.IO.Storage",
          "name": "withStore",
          "package": "io-storage",
          "signature": "String -\u003e IO a -\u003e IO a",
          "source": "src/System-IO-Storage.html#withStore",
          "type": "function"
        },
        "index": {
          "description": "Create named key-value store and then execute the given IO action within its extent Calls to withStore can be nested and calling it again with the name of data-store that has already been initialized will cause the original to be shadowed for the duration of the call to withStore",
          "hierarchy": "System IO Storage",
          "module": "System.IO.Storage",
          "name": "withStore",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "io-storage",
          "partial": "Store",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:withStore"
      }
    }
  ]
]