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
        "word": "missing-foreign"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module \u003ca\u003eForeign.Marshal.MissingAlloc\u003c/a\u003e provides access to\n \u003ccode\u003e\u003ca\u003ecalloc\u003c/a\u003e\u003c/code\u003e (e.g., allocated 0-initialized chunks of memory\n outside of the Haskell storage manager).\n\u003c/p\u003e\u003cp\u003eIf any of these allocation functions fails, an exception is\n raised.\n\u003c/p\u003e\u003cp\u003eThe storage allocated is alligned to store any basic\n foreign types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Marshal.MissingAlloc",
          "name": "MissingAlloc",
          "package": "missing-foreign",
          "source": "src/Foreign-Marshal-MissingAlloc.html",
          "type": "module"
        },
        "index": {
          "description": "The module Foreign.Marshal.MissingAlloc provides access to calloc e.g allocated initialized chunks of memory outside of the Haskell storage manager If any of these allocation functions fails an exception is raised The storage allocated is alligned to store any basic foreign types",
          "hierarchy": "Foreign Marshal MissingAlloc",
          "module": "Foreign.Marshal.MissingAlloc",
          "name": "MissingAlloc",
          "package": "missing-foreign",
          "partial": "Missing Alloc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingAlloc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a block of memory that is sufficient to hold values of type\n \u003ccode\u003ea\u003c/code\u003e.  The size of the area allocated is determined by the \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e\n method from the instance of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e for the appropriate type.\n The memory is initalized to 0.\n\u003c/p\u003e\u003cp\u003eThe memory may be deallocated using \u003ccode\u003efree\u003c/code\u003e or \u003ccode\u003efinalizerFree\u003c/code\u003e when\n no longer required.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.MissingAlloc",
          "name": "calloc",
          "package": "missing-foreign",
          "signature": "IO (Ptr a)",
          "source": "src/Foreign-Marshal-MissingAlloc.html#calloc",
          "type": "function"
        },
        "index": {
          "description": "Allocate block of memory that is sufficient to hold values of type The size of the area allocated is determined by the sizeOf method from the instance of Storable for the appropriate type The memory is initalized to The memory may be deallocated using free or finalizerFree when no longer required",
          "hierarchy": "Foreign Marshal MissingAlloc",
          "module": "Foreign.Marshal.MissingAlloc",
          "name": "calloc",
          "package": "missing-foreign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingAlloc.html#v:calloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a block of memory of the given number of bytes.\n The block of memory is sufficiently aligned for any of the basic\n foreign tyes that fit into a memory block of the allocated size.\n The memory is initialized to 0.\n\u003c/p\u003e\u003cp\u003eThe memory may be deallocated using \u003ccode\u003efree\u003c/code\u003e or \u003ccode\u003efinalizerFree\u003c/code\u003e when\n no longer required.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.MissingAlloc",
          "name": "callocBytes",
          "package": "missing-foreign",
          "signature": "Int -\u003e IO (Ptr a)",
          "source": "src/Foreign-Marshal-MissingAlloc.html#callocBytes",
          "type": "function"
        },
        "index": {
          "description": "Allocate block of memory of the given number of bytes The block of memory is sufficiently aligned for any of the basic foreign tyes that fit into memory block of the allocated size The memory is initialized to The memory may be deallocated using free or finalizerFree when no longer required",
          "hierarchy": "Foreign Marshal MissingAlloc",
          "module": "Foreign.Marshal.MissingAlloc",
          "name": "callocBytes",
          "normalized": "Int-\u003eIO(Ptr a)",
          "package": "missing-foreign",
          "partial": "Bytes",
          "signature": "Int-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingAlloc.html#v:callocBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for primitive marshaling\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Marshal.MissingUtils",
          "name": "MissingUtils",
          "package": "missing-foreign",
          "source": "src/Foreign-Marshal-MissingUtils.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for primitive marshaling",
          "hierarchy": "Foreign Marshal MissingUtils",
          "module": "Foreign.Marshal.MissingUtils",
          "name": "MissingUtils",
          "package": "missing-foreign",
          "partial": "Missing Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e to copy bytes from the second area (source) into the\n first (destination); the copied areas may \u003cem\u003enot\u003c/em\u003e overlap\n\u003c/p\u003e",
          "module": "Foreign.Marshal.MissingUtils",
          "name": "copy",
          "package": "missing-foreign",
          "signature": "Ptr a -\u003e Ptr a -\u003e IO ()",
          "source": "src/Foreign-Marshal-MissingUtils.html#copy",
          "type": "function"
        },
        "index": {
          "description": "Uses sizeOf to copy bytes from the second area source into the first destination the copied areas may not overlap",
          "hierarchy": "Foreign Marshal MissingUtils",
          "module": "Foreign.Marshal.MissingUtils",
          "name": "copy",
          "normalized": "Ptr a-\u003ePtr a-\u003eIO()",
          "package": "missing-foreign",
          "signature": "Ptr a-\u003ePtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingUtils.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e to copy bytes from the second area (source) into the\n first (destination); the copied areas \u003cem\u003emay\u003c/em\u003e overlap\n\u003c/p\u003e",
          "module": "Foreign.Marshal.MissingUtils",
          "name": "move",
          "package": "missing-foreign",
          "signature": "Ptr a -\u003e Ptr a -\u003e IO ()",
          "source": "src/Foreign-Marshal-MissingUtils.html#move",
          "type": "function"
        },
        "index": {
          "description": "Uses sizeOf to copy bytes from the second area source into the first destination the copied areas may overlap",
          "hierarchy": "Foreign Marshal MissingUtils",
          "module": "Foreign.Marshal.MissingUtils",
          "name": "move",
          "normalized": "Ptr a-\u003ePtr a-\u003eIO()",
          "package": "missing-foreign",
          "signature": "Ptr a-\u003ePtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingUtils.html#v:move"
      }
    }
  ]
]