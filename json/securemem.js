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
        "word": "securemem"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SecureMem",
          "name": "SecureMem",
          "package": "securemem",
          "source": "src/Data-SecureMem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "SecureMem",
          "package": "securemem",
          "partial": "Secure Mem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecureMem is a memory chunk which have the properties of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Being scrubbed after its goes out of scope.\n * A Show instance that doesn't actually show any content\n * A Eq instance that is constant time\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.SecureMem",
          "name": "SecureMem",
          "package": "securemem",
          "source": "src/Data-SecureMem.html#SecureMem",
          "type": "data"
        },
        "index": {
          "description": "SecureMem is memory chunk which have the properties of Being scrubbed after its goes out of scope Show instance that doesn actually show any content Eq instance that is constant time",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "SecureMem",
          "package": "securemem",
          "partial": "Secure Mem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#t:SecureMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes that can be converted to a secure mem object.\n\u003c/p\u003e",
          "module": "Data.SecureMem",
          "name": "ToSecureMem",
          "package": "securemem",
          "source": "src/Data-SecureMem.html#ToSecureMem",
          "type": "class"
        },
        "index": {
          "description": "Types that can be converted to secure mem object",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "ToSecureMem",
          "package": "securemem",
          "partial": "To Secure Mem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#t:ToSecureMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new SecureMem\n\u003c/p\u003e\u003cp\u003eThe memory is allocated on the haskell heap, and will be scrubed\n before being released.\n\u003c/p\u003e",
          "module": "Data.SecureMem",
          "name": "allocateSecureMem",
          "package": "securemem",
          "signature": "Int -\u003e IO SecureMem",
          "source": "src/Data-SecureMem.html#allocateSecureMem",
          "type": "function"
        },
        "index": {
          "description": "Allocate new SecureMem The memory is allocated on the haskell heap and will be scrubed before being released",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "allocateSecureMem",
          "normalized": "Int-\u003eIO SecureMem",
          "package": "securemem",
          "partial": "Secure Mem",
          "signature": "Int-\u003eIO SecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:allocateSecureMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new secure mem and running an initializer function\n\u003c/p\u003e",
          "module": "Data.SecureMem",
          "name": "createSecureMem",
          "package": "securemem",
          "signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e IO SecureMem",
          "source": "src/Data-SecureMem.html#createSecureMem",
          "type": "function"
        },
        "index": {
          "description": "Create new secure mem and running an initializer function",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "createSecureMem",
          "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003eIO SecureMem",
          "package": "securemem",
          "partial": "Secure Mem",
          "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003eIO SecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:createSecureMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize a SecureMem early\n\u003c/p\u003e",
          "module": "Data.SecureMem",
          "name": "finalizeSecureMem",
          "package": "securemem",
          "signature": "SecureMem -\u003e IO ()",
          "source": "src/Data-SecureMem.html#finalizeSecureMem",
          "type": "function"
        },
        "index": {
          "description": "Finalize SecureMem early",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "finalizeSecureMem",
          "normalized": "SecureMem-\u003eIO()",
          "package": "securemem",
          "partial": "Secure Mem",
          "signature": "SecureMem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:finalizeSecureMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SecureMem",
          "name": "secureMemCopy",
          "package": "securemem",
          "signature": "SecureMem -\u003e IO SecureMem",
          "source": "src/Data-SecureMem.html#secureMemCopy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "secureMemCopy",
          "normalized": "SecureMem-\u003eIO SecureMem",
          "package": "securemem",
          "partial": "Mem Copy",
          "signature": "SecureMem-\u003eIO SecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:secureMemCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a SecureMem from a bytestring\n\u003c/p\u003e",
          "module": "Data.SecureMem",
          "name": "secureMemFromByteString",
          "package": "securemem",
          "signature": "ByteString -\u003e SecureMem",
          "source": "src/Data-SecureMem.html#secureMemFromByteString",
          "type": "function"
        },
        "index": {
          "description": "Create SecureMem from bytestring",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "secureMemFromByteString",
          "normalized": "ByteString-\u003eSecureMem",
          "package": "securemem",
          "partial": "Mem From Byte String",
          "signature": "ByteString-\u003eSecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:secureMemFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the size of the memory allocated by this secure mem.\n\u003c/p\u003e",
          "module": "Data.SecureMem",
          "name": "secureMemGetSize",
          "package": "securemem",
          "signature": "SecureMem -\u003e Int",
          "source": "src/Data-SecureMem.html#secureMemGetSize",
          "type": "function"
        },
        "index": {
          "description": "Return the size of the memory allocated by this secure mem",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "secureMemGetSize",
          "normalized": "SecureMem-\u003eInt",
          "package": "securemem",
          "partial": "Mem Get Size",
          "signature": "SecureMem-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:secureMemGetSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SecureMem",
          "name": "toSecureMem",
          "package": "securemem",
          "signature": "a -\u003e SecureMem",
          "source": "src/Data-SecureMem.html#toSecureMem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "toSecureMem",
          "normalized": "a-\u003eSecureMem",
          "package": "securemem",
          "partial": "Secure Mem",
          "signature": "a-\u003eSecureMem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:toSecureMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new secure mem using inline perform IO to create a pure\n result.\n\u003c/p\u003e",
          "module": "Data.SecureMem",
          "name": "unsafeCreateSecureMem",
          "package": "securemem",
          "signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e SecureMem",
          "source": "src/Data-SecureMem.html#unsafeCreateSecureMem",
          "type": "function"
        },
        "index": {
          "description": "Create new secure mem using inline perform IO to create pure result",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "unsafeCreateSecureMem",
          "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003eSecureMem",
          "package": "securemem",
          "partial": "Create Secure Mem",
          "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003eSecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:unsafeCreateSecureMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SecureMem",
          "name": "withSecureMemCopy",
          "package": "securemem",
          "signature": "SecureMem -\u003e (Ptr Word8 -\u003e IO ()) -\u003e IO SecureMem",
          "source": "src/Data-SecureMem.html#withSecureMemCopy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "withSecureMemCopy",
          "normalized": "SecureMem-\u003e(Ptr Word-\u003eIO())-\u003eIO SecureMem",
          "package": "securemem",
          "partial": "Secure Mem Copy",
          "signature": "SecureMem-\u003e(Ptr Word-\u003eIO())-\u003eIO SecureMem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:withSecureMemCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a way to look at the pointer living inside a foreign object. This\n function takes a function which is applied to that pointer. The resulting IO\n action is then executed\n\u003c/p\u003e\u003cp\u003ethis is similary to withForeignPtr for a ForeignPtr\n\u003c/p\u003e",
          "module": "Data.SecureMem",
          "name": "withSecureMemPtr",
          "package": "securemem",
          "signature": "SecureMem -\u003e (Ptr Word8 -\u003e IO b) -\u003e IO b",
          "source": "src/Data-SecureMem.html#withSecureMemPtr",
          "type": "function"
        },
        "index": {
          "description": "This is way to look at the pointer living inside foreign object This function takes function which is applied to that pointer The resulting IO action is then executed this is similary to withForeignPtr for ForeignPtr",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "withSecureMemPtr",
          "normalized": "SecureMem-\u003e(Ptr Word-\u003eIO a)-\u003eIO a",
          "package": "securemem",
          "partial": "Secure Mem Ptr",
          "signature": "SecureMem-\u003e(Ptr Word-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:withSecureMemPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to withSecureMem but also include the size of the pointed memory.\n\u003c/p\u003e",
          "module": "Data.SecureMem",
          "name": "withSecureMemPtrSz",
          "package": "securemem",
          "signature": "SecureMem -\u003e (Int -\u003e Ptr Word8 -\u003e IO b) -\u003e IO b",
          "source": "src/Data-SecureMem.html#withSecureMemPtrSz",
          "type": "function"
        },
        "index": {
          "description": "similar to withSecureMem but also include the size of the pointed memory",
          "hierarchy": "Data SecureMem",
          "module": "Data.SecureMem",
          "name": "withSecureMemPtrSz",
          "normalized": "SecureMem-\u003e(Int-\u003ePtr Word-\u003eIO a)-\u003eIO a",
          "package": "securemem",
          "partial": "Secure Mem Ptr Sz",
          "signature": "SecureMem-\u003e(Int-\u003ePtr Word-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:withSecureMemPtrSz"
      }
    }
  ]
]