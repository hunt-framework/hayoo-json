[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConceptually, this library provides a way to arbitrarily extend the\nglobal state represented by the IO monad. Viewed another way, this\nlibrary provides a basic facility for setting and retrieving values\nfrom global variables.\n\u003c/p\u003e\u003cp\u003eThe interface takes the form of a very basic key-value store, with\nmultiple different stores made available through the \u003ccode\u003e\u003ca\u003ewithStore\u003c/a\u003e\u003c/code\u003e\nfunction. Stores are referenced by arbitrary strings, and keys\nwithin those stores are treated likewise. The \u003ccode\u003e\u003ca\u003eputValue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetValue\u003c/a\u003e\u003c/code\u003e,\nand \u003ccode\u003e\u003ca\u003edelValue\u003c/a\u003e\u003c/code\u003e functions allow you to store, retrieve, and delete\ndata from the store.\n\u003c/p\u003e\u003cp\u003eInternally, data is stored within an IORef which is created using the\n'unsafePerformIO hack', but this is hidden within the library so that\nit can easily be modified if and when a more \u003ccode\u003eproper\u003c/code\u003e solution is\nimplemented.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Storage",
        "fct-package": "io-storage",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Storage.html",
        "fct-type": "module",
        "title": "Storage"
      },
      "index": {
        "description": "Conceptually this library provides way to arbitrarily extend the global state represented by the IO monad Viewed another way this library provides basic facility for setting and retrieving values from global variables The interface takes the form of very basic key-value store with multiple different stores made available through the withStore function Stores are referenced by arbitrary strings and keys within those stores are treated likewise The putValue getValue and delValue functions allow you to store retrieve and delete data from the store Internally data is stored within an IORef which is created using the unsafePerformIO hack but this is hidden within the library so that it can easily be modified if and when more proper solution is implemented",
        "hierarchy": "System IO Storage",
        "module": "System.IO.Storage",
        "name": "Storage",
        "normalized": "",
        "package": "io-storage",
        "partial": "Storage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:delValue",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a value from the given data-store.\n\u003c/p\u003e",
        "fct-module": "System.IO.Storage",
        "fct-package": "io-storage",
        "fct-signature": "String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-IO-Storage.html#delValue",
        "fct-type": "function",
        "title": "delValue"
      },
      "index": {
        "description": "Delete value from the given data-store",
        "hierarchy": "System IO Storage",
        "module": "System.IO.Storage",
        "name": "delValue",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "io-storage",
        "partial": "Value",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:getDefaultValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet a value from the given store, with a default if it\n   doesn't exist.\n\u003c/p\u003e",
        "fct-module": "System.IO.Storage",
        "fct-package": "io-storage",
        "fct-signature": "String -\u003e String -\u003e a -\u003e IO a",
        "fct-source": "src/System-IO-Storage.html#getDefaultValue",
        "fct-type": "function",
        "title": "getDefaultValue"
      },
      "index": {
        "description": "Get value from the given store with default if it doesn exist",
        "hierarchy": "System IO Storage",
        "module": "System.IO.Storage",
        "name": "getDefaultValue",
        "normalized": "String-\u003eString-\u003ea-\u003eIO a",
        "package": "io-storage",
        "partial": "Default Value",
        "signature": "String-\u003eString-\u003ea-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:getValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet a value from the given data-store, if it exists. If it\n   doesn't exist, obviously, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be returned.\n\u003c/p\u003e",
        "fct-module": "System.IO.Storage",
        "fct-package": "io-storage",
        "fct-signature": "String -\u003e String -\u003e IO (Maybe a)",
        "fct-source": "src/System-IO-Storage.html#getValue",
        "fct-type": "function",
        "title": "getValue"
      },
      "index": {
        "description": "Get value from the given data-store if it exists If it doesn exist obviously Nothing will be returned",
        "hierarchy": "System IO Storage",
        "module": "System.IO.Storage",
        "name": "getValue",
        "normalized": "String-\u003eString-\u003eIO(Maybe a)",
        "package": "io-storage",
        "partial": "Value",
        "signature": "String-\u003eString-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:putValue",
      "description": {
        "fct-descr": "\u003cp\u003ePut a value into the given data-store.\n\u003c/p\u003e",
        "fct-module": "System.IO.Storage",
        "fct-package": "io-storage",
        "fct-signature": "String -\u003e String -\u003e a -\u003e IO ()",
        "fct-source": "src/System-IO-Storage.html#putValue",
        "fct-type": "function",
        "title": "putValue"
      },
      "index": {
        "description": "Put value into the given data-store",
        "hierarchy": "System IO Storage",
        "module": "System.IO.Storage",
        "name": "putValue",
        "normalized": "String-\u003eString-\u003ea-\u003eIO()",
        "package": "io-storage",
        "partial": "Value",
        "signature": "String-\u003eString-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-storage/docs/System-IO-Storage.html#v:withStore",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a named key-value store, and then execute the given\n   IO action within its extent. Calls to \u003ccode\u003e\u003ca\u003ewithStore\u003c/a\u003e\u003c/code\u003e can be\n   nested, and calling it again with the name of a data-store\n   that has already been initialized will cause the original\n   to be shadowed for the duration of the call to \u003ccode\u003e\u003ca\u003ewithStore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.Storage",
        "fct-package": "io-storage",
        "fct-signature": "String -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-IO-Storage.html#withStore",
        "fct-type": "function",
        "title": "withStore"
      },
      "index": {
        "description": "Create named key-value store and then execute the given IO action within its extent Calls to withStore can be nested and calling it again with the name of data-store that has already been initialized will cause the original to be shadowed for the duration of the call to withStore",
        "hierarchy": "System IO Storage",
        "module": "System.IO.Storage",
        "name": "withStore",
        "normalized": "String-\u003eIO a-\u003eIO a",
        "package": "io-storage",
        "partial": "Store",
        "signature": "String-\u003eIO a-\u003eIO a"
      }
    }
  }
]