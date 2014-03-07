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
        "word": "system-uuid"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e datatype.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.UUID",
          "name": "UUID",
          "package": "system-uuid",
          "source": "src/Data-UUID.html",
          "type": "module"
        },
        "index": {
          "description": "The UUID datatype",
          "hierarchy": "Data UUID",
          "module": "Data.UUID",
          "name": "UUID",
          "package": "system-uuid",
          "partial": "UUID",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/Data-UUID.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for Uniform Unique Identifiers. The \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance allows \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003es\n    to be specified with \u003ccode\u003e0\u003c/code\u003e, \u003ccode\u003e1\u003c/code\u003e, &c. -- testing for the null \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003e is\n    easier that way. The \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance is compatible with most (all?)\n    systems' native representation of \u003ccode\u003e\u003ca\u003eUUID\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.UUID",
          "name": "UUID",
          "package": "system-uuid",
          "source": "src/Data-UUID.html#UUID",
          "type": "data"
        },
        "index": {
          "description": "type for Uniform Unique Identifiers The Num instance allows UUID to be specified with testing for the null UUID is easier that way The Storable instance is compatible with most all systems native representation of UUID",
          "hierarchy": "Data UUID",
          "module": "Data.UUID",
          "name": "UUID",
          "package": "system-uuid",
          "partial": "UUID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/Data-UUID.html#t:UUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.UUID",
          "name": "asWord32s",
          "package": "system-uuid",
          "signature": "UUID -\u003e (Word32, Word32, Word32, Word32)",
          "source": "src/Data-UUID.html#asWord32s",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data UUID",
          "module": "Data.UUID",
          "name": "asWord32s",
          "normalized": "UUID-\u003e(Word,Word,Word,Word)",
          "package": "system-uuid",
          "partial": "Word",
          "signature": "UUID-\u003e(Word,Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/Data-UUID.html#v:asWord32s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.UUID",
          "name": "asWord64s",
          "package": "system-uuid",
          "signature": "UUID -\u003e (Word64, Word64)",
          "source": "src/Data-UUID.html#asWord64s",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data UUID",
          "module": "Data.UUID",
          "name": "asWord64s",
          "normalized": "UUID-\u003e(Word,Word)",
          "package": "system-uuid",
          "partial": "Word",
          "signature": "UUID-\u003e(Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/Data-UUID.html#v:asWord64s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for fetching the results from foreign functions. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.UUID.FromForeign",
          "name": "FromForeign",
          "package": "system-uuid",
          "source": "src/System-UUID-FromForeign.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for fetching the results from foreign functions",
          "hierarchy": "System UUID FromForeign",
          "module": "System.UUID.FromForeign",
          "name": "FromForeign",
          "package": "system-uuid",
          "partial": "From Foreign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-FromForeign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocates a pointer to capture the output of a foreign function, runs the\n    function and interprets the sixteen bytes following the pointer as a UUID.\n\u003c/p\u003e",
          "module": "System.UUID.FromForeign",
          "name": "runAndRead",
          "package": "system-uuid",
          "signature": "(Ptr CChar -\u003e IO ()) -\u003e IO UUID",
          "source": "src/System-UUID-FromForeign.html#runAndRead",
          "type": "function"
        },
        "index": {
          "description": "Allocates pointer to capture the output of foreign function runs the function and interprets the sixteen bytes following the pointer as UUID",
          "hierarchy": "System UUID FromForeign",
          "module": "System.UUID.FromForeign",
          "name": "runAndRead",
          "normalized": "(Ptr CChar-\u003eIO())-\u003eIO UUID",
          "package": "system-uuid",
          "partial": "And Read",
          "signature": "(Ptr CChar-\u003eIO())-\u003eIO UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-FromForeign.html#v:runAndRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion 1 \u003ccode\u003eUUID\u003c/code\u003e utilities. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.UUID.V1",
          "name": "V1",
          "package": "system-uuid",
          "source": "src/System-UUID-V1.html",
          "type": "module"
        },
        "index": {
          "description": "Version UUID utilities",
          "hierarchy": "System UUID V1",
          "module": "System.UUID.V1",
          "name": "V1",
          "package": "system-uuid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-V1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.UUID.V1",
          "name": "uuid",
          "package": "system-uuid",
          "signature": "IO UUID",
          "source": "src/System-UUID-V1.html#uuid",
          "type": "function"
        },
        "index": {
          "hierarchy": "System UUID V1",
          "module": "System.UUID.V1",
          "name": "uuid",
          "package": "system-uuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-V1.html#v:uuid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersion 4 \u003ccode\u003eUUID\u003c/code\u003e utilities. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.UUID.V4",
          "name": "V4",
          "package": "system-uuid",
          "source": "src/System-UUID-V4.html",
          "type": "module"
        },
        "index": {
          "description": "Version UUID utilities",
          "hierarchy": "System UUID V4",
          "module": "System.UUID.V4",
          "name": "V4",
          "package": "system-uuid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-V4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.UUID.V4",
          "name": "uuid",
          "package": "system-uuid",
          "signature": "IO UUID",
          "source": "src/System-UUID-V4.html#uuid",
          "type": "function"
        },
        "index": {
          "hierarchy": "System UUID V4",
          "module": "System.UUID.V4",
          "name": "uuid",
          "package": "system-uuid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/system-uuid/docs/System-UUID-V4.html#v:uuid"
      }
    }
  ]
]