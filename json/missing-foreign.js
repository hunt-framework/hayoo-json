[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingAlloc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module \u003ca\u003eForeign.Marshal.MissingAlloc\u003c/a\u003e provides access to\n \u003ccode\u003e\u003ca\u003ecalloc\u003c/a\u003e\u003c/code\u003e (e.g., allocated 0-initialized chunks of memory\n outside of the Haskell storage manager).\n\u003c/p\u003e\u003cp\u003eIf any of these allocation functions fails, an exception is\n raised.\n\u003c/p\u003e\u003cp\u003eThe storage allocated is alligned to store any basic\n foreign types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.Marshal.MissingAlloc",
        "fct-package": "missing-foreign",
        "fct-signature": "module",
        "fct-source": "src/Foreign-Marshal-MissingAlloc.html",
        "fct-type": "module",
        "title": "MissingAlloc"
      },
      "index": {
        "description": "The module Foreign.Marshal.MissingAlloc provides access to calloc e.g allocated initialized chunks of memory outside of the Haskell storage manager If any of these allocation functions fails an exception is raised The storage allocated is alligned to store any basic foreign types",
        "hierarchy": "Foreign Marshal MissingAlloc",
        "module": "Foreign.Marshal.MissingAlloc",
        "name": "MissingAlloc",
        "normalized": "",
        "package": "missing-foreign",
        "partial": "Missing Alloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingAlloc.html#v:calloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a block of memory that is sufficient to hold values of type\n \u003ccode\u003ea\u003c/code\u003e.  The size of the area allocated is determined by the \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e\n method from the instance of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e for the appropriate type.\n The memory is initalized to 0.\n\u003c/p\u003e\u003cp\u003eThe memory may be deallocated using \u003ccode\u003efree\u003c/code\u003e or \u003ccode\u003efinalizerFree\u003c/code\u003e when\n no longer required.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.MissingAlloc",
        "fct-package": "missing-foreign",
        "fct-signature": "IO (Ptr a)",
        "fct-source": "src/Foreign-Marshal-MissingAlloc.html#calloc",
        "fct-type": "function",
        "title": "calloc"
      },
      "index": {
        "description": "Allocate block of memory that is sufficient to hold values of type The size of the area allocated is determined by the sizeOf method from the instance of Storable for the appropriate type The memory is initalized to The memory may be deallocated using free or finalizerFree when no longer required",
        "hierarchy": "Foreign Marshal MissingAlloc",
        "module": "Foreign.Marshal.MissingAlloc",
        "name": "calloc",
        "normalized": "",
        "package": "missing-foreign",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingAlloc.html#v:callocBytes",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a block of memory of the given number of bytes.\n The block of memory is sufficiently aligned for any of the basic\n foreign tyes that fit into a memory block of the allocated size.\n The memory is initialized to 0.\n\u003c/p\u003e\u003cp\u003eThe memory may be deallocated using \u003ccode\u003efree\u003c/code\u003e or \u003ccode\u003efinalizerFree\u003c/code\u003e when\n no longer required.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.MissingAlloc",
        "fct-package": "missing-foreign",
        "fct-signature": "Int -\u003e IO (Ptr a)",
        "fct-source": "src/Foreign-Marshal-MissingAlloc.html#callocBytes",
        "fct-type": "function",
        "title": "callocBytes"
      },
      "index": {
        "description": "Allocate block of memory of the given number of bytes The block of memory is sufficiently aligned for any of the basic foreign tyes that fit into memory block of the allocated size The memory is initialized to The memory may be deallocated using free or finalizerFree when no longer required",
        "hierarchy": "Foreign Marshal MissingAlloc",
        "module": "Foreign.Marshal.MissingAlloc",
        "name": "callocBytes",
        "normalized": "Int-\u003eIO(Ptr a)",
        "package": "missing-foreign",
        "partial": "Bytes",
        "signature": "Int-\u003eIO(Ptr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingUtils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for primitive marshaling\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.Marshal.MissingUtils",
        "fct-package": "missing-foreign",
        "fct-signature": "module",
        "fct-source": "src/Foreign-Marshal-MissingUtils.html",
        "fct-type": "module",
        "title": "MissingUtils"
      },
      "index": {
        "description": "Utilities for primitive marshaling",
        "hierarchy": "Foreign Marshal MissingUtils",
        "module": "Foreign.Marshal.MissingUtils",
        "name": "MissingUtils",
        "normalized": "",
        "package": "missing-foreign",
        "partial": "Missing Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingUtils.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e to copy bytes from the second area (source) into the\n first (destination); the copied areas may \u003cem\u003enot\u003c/em\u003e overlap\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.MissingUtils",
        "fct-package": "missing-foreign",
        "fct-signature": "Ptr a -\u003e Ptr a -\u003e IO ()",
        "fct-source": "src/Foreign-Marshal-MissingUtils.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Uses sizeOf to copy bytes from the second area source into the first destination the copied areas may not overlap",
        "hierarchy": "Foreign Marshal MissingUtils",
        "module": "Foreign.Marshal.MissingUtils",
        "name": "copy",
        "normalized": "Ptr a-\u003ePtr a-\u003eIO()",
        "package": "missing-foreign",
        "partial": "",
        "signature": "Ptr a-\u003ePtr a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/missing-foreign/docs/Foreign-Marshal-MissingUtils.html#v:move",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e to copy bytes from the second area (source) into the\n first (destination); the copied areas \u003cem\u003emay\u003c/em\u003e overlap\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.MissingUtils",
        "fct-package": "missing-foreign",
        "fct-signature": "Ptr a -\u003e Ptr a -\u003e IO ()",
        "fct-source": "src/Foreign-Marshal-MissingUtils.html#move",
        "fct-type": "function",
        "title": "move"
      },
      "index": {
        "description": "Uses sizeOf to copy bytes from the second area source into the first destination the copied areas may overlap",
        "hierarchy": "Foreign Marshal MissingUtils",
        "module": "Foreign.Marshal.MissingUtils",
        "name": "move",
        "normalized": "Ptr a-\u003ePtr a-\u003eIO()",
        "package": "missing-foreign",
        "partial": "",
        "signature": "Ptr a-\u003ePtr a-\u003eIO()"
      }
    }
  }
]