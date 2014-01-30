[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/Data-UUID.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e datatype.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.UUID",
        "fct-package": "system-uuid",
        "fct-signature": "module",
        "fct-source": "src/Data-UUID.html",
        "fct-type": "module",
        "title": "UUID"
      },
      "index": {
        "description": "The UUID datatype",
        "hierarchy": "Data UUID",
        "module": "Data.UUID",
        "name": "UUID",
        "normalized": "",
        "package": "system-uuid",
        "partial": "UUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/Data-UUID.html#t:UUID",
      "description": {
        "fct-descr": "\u003cp\u003eA type for Uniform Unique Identifiers. The \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance allows \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003es\n    to be specified with \u003ccode\u003e0\u003c/code\u003e, \u003ccode\u003e1\u003c/code\u003e, &c. -- testing for the null \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e is\n    easier that way. The \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance is compatible with most (all?)\n    systems' native representation of \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.UUID",
        "fct-package": "system-uuid",
        "fct-signature": "data",
        "fct-source": "src/Data-UUID.html#UUID",
        "fct-type": "data",
        "title": "UUID"
      },
      "index": {
        "description": "type for Uniform Unique Identifiers The Num instance allows UUID to be specified with testing for the null UUID is easier that way The Storable instance is compatible with most all systems native representation of UUID",
        "hierarchy": "Data UUID",
        "module": "Data.UUID",
        "name": "UUID",
        "normalized": "",
        "package": "system-uuid",
        "partial": "UUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/Data-UUID.html#v:asWord32s",
      "description": {
        "fct-module": "Data.UUID",
        "fct-package": "system-uuid",
        "fct-signature": "UUID -\u003e (Word32, Word32, Word32, Word32)",
        "fct-source": "src/Data-UUID.html#asWord32s",
        "fct-type": "function",
        "title": "asWord32s"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UUID",
        "module": "Data.UUID",
        "name": "asWord32s",
        "normalized": "UUID-\u003e(Word,Word,Word,Word)",
        "package": "system-uuid",
        "partial": "Word",
        "signature": "UUID-\u003e(Word,Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/Data-UUID.html#v:asWord64s",
      "description": {
        "fct-module": "Data.UUID",
        "fct-package": "system-uuid",
        "fct-signature": "UUID -\u003e (Word64, Word64)",
        "fct-source": "src/Data-UUID.html#asWord64s",
        "fct-type": "function",
        "title": "asWord64s"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UUID",
        "module": "Data.UUID",
        "name": "asWord64s",
        "normalized": "UUID-\u003e(Word,Word)",
        "package": "system-uuid",
        "partial": "Word",
        "signature": "UUID-\u003e(Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-FromForeign.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for fetching the results from foreign functions. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.UUID.FromForeign",
        "fct-package": "system-uuid",
        "fct-signature": "module",
        "fct-source": "src/System-UUID-FromForeign.html",
        "fct-type": "module",
        "title": "FromForeign"
      },
      "index": {
        "description": "Utilities for fetching the results from foreign functions",
        "hierarchy": "System UUID FromForeign",
        "module": "System.UUID.FromForeign",
        "name": "FromForeign",
        "normalized": "",
        "package": "system-uuid",
        "partial": "From Foreign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-FromForeign.html#v:runAndRead",
      "description": {
        "fct-descr": "\u003cp\u003eAllocates a pointer to capture the output of a foreign function, runs the\n    function and interprets the sixteen bytes following the pointer as a UUID.\n\u003c/p\u003e",
        "fct-module": "System.UUID.FromForeign",
        "fct-package": "system-uuid",
        "fct-signature": "(Ptr CChar -\u003e IO ()) -\u003e IO UUID",
        "fct-source": "src/System-UUID-FromForeign.html#runAndRead",
        "fct-type": "function",
        "title": "runAndRead"
      },
      "index": {
        "description": "Allocates pointer to capture the output of foreign function runs the function and interprets the sixteen bytes following the pointer as UUID",
        "hierarchy": "System UUID FromForeign",
        "module": "System.UUID.FromForeign",
        "name": "runAndRead",
        "normalized": "(Ptr CChar-\u003eIO())-\u003eIO UUID",
        "package": "system-uuid",
        "partial": "And Read",
        "signature": "(Ptr CChar-\u003eIO())-\u003eIO UUID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-V1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion 1 \u003ccode\u003eUUID\u003c/code\u003e utilities. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.UUID.V1",
        "fct-package": "system-uuid",
        "fct-signature": "module",
        "fct-source": "src/System-UUID-V1.html",
        "fct-type": "module",
        "title": "V1"
      },
      "index": {
        "description": "Version UUID utilities",
        "hierarchy": "System UUID V1",
        "module": "System.UUID.V1",
        "name": "V1",
        "normalized": "",
        "package": "system-uuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-V1.html#v:uuid",
      "description": {
        "fct-module": "System.UUID.V1",
        "fct-package": "system-uuid",
        "fct-signature": "IO UUID",
        "fct-source": "src/System-UUID-V1.html#uuid",
        "fct-type": "function",
        "title": "uuid"
      },
      "index": {
        "description": "",
        "hierarchy": "System UUID V1",
        "module": "System.UUID.V1",
        "name": "uuid",
        "normalized": "",
        "package": "system-uuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-V4.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion 4 \u003ccode\u003eUUID\u003c/code\u003e utilities. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.UUID.V4",
        "fct-package": "system-uuid",
        "fct-signature": "module",
        "fct-source": "src/System-UUID-V4.html",
        "fct-type": "module",
        "title": "V4"
      },
      "index": {
        "description": "Version UUID utilities",
        "hierarchy": "System UUID V4",
        "module": "System.UUID.V4",
        "name": "V4",
        "normalized": "",
        "package": "system-uuid",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-V4.html#v:uuid",
      "description": {
        "fct-module": "System.UUID.V4",
        "fct-package": "system-uuid",
        "fct-signature": "IO UUID",
        "fct-source": "src/System-UUID-V4.html#uuid",
        "fct-type": "function",
        "title": "uuid"
      },
      "index": {
        "description": "",
        "hierarchy": "System UUID V4",
        "module": "System.UUID.V4",
        "name": "uuid",
        "normalized": "",
        "package": "system-uuid",
        "partial": "",
        "signature": ""
      }
    }
  }
]