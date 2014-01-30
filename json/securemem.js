[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#",
      "description": {
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "module",
        "fct-source": "src/Data-SecureMem.html",
        "fct-type": "module",
        "title": "SecureMem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "SecureMem",
        "normalized": "",
        "package": "securemem",
        "partial": "Secure Mem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#t:SecureMem",
      "description": {
        "fct-descr": "\u003cp\u003eSecureMem is a memory chunk which have the properties of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Being scrubbed after its goes out of scope.\n * A Show instance that doesn't actually show any content\n * A Eq instance that is constant time\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "data",
        "fct-source": "src/Data-SecureMem.html#SecureMem",
        "fct-type": "data",
        "title": "SecureMem"
      },
      "index": {
        "description": "SecureMem is memory chunk which have the properties of Being scrubbed after its goes out of scope Show instance that doesn actually show any content Eq instance that is constant time",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "SecureMem",
        "normalized": "",
        "package": "securemem",
        "partial": "Secure Mem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#t:ToSecureMem",
      "description": {
        "fct-descr": "\u003cp\u003eTypes that can be converted to a secure mem object.\n\u003c/p\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "class",
        "fct-source": "src/Data-SecureMem.html#ToSecureMem",
        "fct-type": "class",
        "title": "ToSecureMem"
      },
      "index": {
        "description": "Types that can be converted to secure mem object",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "ToSecureMem",
        "normalized": "",
        "package": "securemem",
        "partial": "To Secure Mem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:allocateSecureMem",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a new SecureMem\n\u003c/p\u003e\u003cp\u003eThe memory is allocated on the haskell heap, and will be scrubed\n before being released.\n\u003c/p\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "Int -\u003e IO SecureMem",
        "fct-source": "src/Data-SecureMem.html#allocateSecureMem",
        "fct-type": "function",
        "title": "allocateSecureMem"
      },
      "index": {
        "description": "Allocate new SecureMem The memory is allocated on the haskell heap and will be scrubed before being released",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "allocateSecureMem",
        "normalized": "Int-\u003eIO SecureMem",
        "package": "securemem",
        "partial": "Secure Mem",
        "signature": "Int-\u003eIO SecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:createSecureMem",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new secure mem and running an initializer function\n\u003c/p\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e IO SecureMem",
        "fct-source": "src/Data-SecureMem.html#createSecureMem",
        "fct-type": "function",
        "title": "createSecureMem"
      },
      "index": {
        "description": "Create new secure mem and running an initializer function",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "createSecureMem",
        "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003eIO SecureMem",
        "package": "securemem",
        "partial": "Secure Mem",
        "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003eIO SecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:finalizeSecureMem",
      "description": {
        "fct-descr": "\u003cp\u003eFinalize a SecureMem early\n\u003c/p\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "SecureMem -\u003e IO ()",
        "fct-source": "src/Data-SecureMem.html#finalizeSecureMem",
        "fct-type": "function",
        "title": "finalizeSecureMem"
      },
      "index": {
        "description": "Finalize SecureMem early",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "finalizeSecureMem",
        "normalized": "SecureMem-\u003eIO()",
        "package": "securemem",
        "partial": "Secure Mem",
        "signature": "SecureMem-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:secureMemCopy",
      "description": {
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "SecureMem -\u003e IO SecureMem",
        "fct-source": "src/Data-SecureMem.html#secureMemCopy",
        "fct-type": "function",
        "title": "secureMemCopy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "secureMemCopy",
        "normalized": "SecureMem-\u003eIO SecureMem",
        "package": "securemem",
        "partial": "Mem Copy",
        "signature": "SecureMem-\u003eIO SecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:secureMemFromByteString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a SecureMem from a bytestring\n\u003c/p\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "ByteString -\u003e SecureMem",
        "fct-source": "src/Data-SecureMem.html#secureMemFromByteString",
        "fct-type": "function",
        "title": "secureMemFromByteString"
      },
      "index": {
        "description": "Create SecureMem from bytestring",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "secureMemFromByteString",
        "normalized": "ByteString-\u003eSecureMem",
        "package": "securemem",
        "partial": "Mem From Byte String",
        "signature": "ByteString-\u003eSecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:secureMemGetSize",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the size of the memory allocated by this secure mem.\n\u003c/p\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "SecureMem -\u003e Int",
        "fct-source": "src/Data-SecureMem.html#secureMemGetSize",
        "fct-type": "function",
        "title": "secureMemGetSize"
      },
      "index": {
        "description": "Return the size of the memory allocated by this secure mem",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "secureMemGetSize",
        "normalized": "SecureMem-\u003eInt",
        "package": "securemem",
        "partial": "Mem Get Size",
        "signature": "SecureMem-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:toSecureMem",
      "description": {
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "a -\u003e SecureMem",
        "fct-source": "src/Data-SecureMem.html#toSecureMem",
        "fct-type": "method",
        "title": "toSecureMem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "toSecureMem",
        "normalized": "a-\u003eSecureMem",
        "package": "securemem",
        "partial": "Secure Mem",
        "signature": "a-\u003eSecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:unsafeCreateSecureMem",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new secure mem using inline perform IO to create a pure\n result.\n\u003c/p\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e SecureMem",
        "fct-source": "src/Data-SecureMem.html#unsafeCreateSecureMem",
        "fct-type": "function",
        "title": "unsafeCreateSecureMem"
      },
      "index": {
        "description": "Create new secure mem using inline perform IO to create pure result",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "unsafeCreateSecureMem",
        "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003eSecureMem",
        "package": "securemem",
        "partial": "Create Secure Mem",
        "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003eSecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:withSecureMemCopy",
      "description": {
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "SecureMem -\u003e (Ptr Word8 -\u003e IO ()) -\u003e IO SecureMem",
        "fct-source": "src/Data-SecureMem.html#withSecureMemCopy",
        "fct-type": "function",
        "title": "withSecureMemCopy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "withSecureMemCopy",
        "normalized": "SecureMem-\u003e(Ptr Word-\u003eIO())-\u003eIO SecureMem",
        "package": "securemem",
        "partial": "Secure Mem Copy",
        "signature": "SecureMem-\u003e(Ptr Word-\u003eIO())-\u003eIO SecureMem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:withSecureMemPtr",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a way to look at the pointer living inside a foreign object. This\n function takes a function which is applied to that pointer. The resulting IO\n action is then executed\n\u003c/p\u003e\u003cp\u003ethis is similary to withForeignPtr for a ForeignPtr\n\u003c/p\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "SecureMem -\u003e (Ptr Word8 -\u003e IO b) -\u003e IO b",
        "fct-source": "src/Data-SecureMem.html#withSecureMemPtr",
        "fct-type": "function",
        "title": "withSecureMemPtr"
      },
      "index": {
        "description": "This is way to look at the pointer living inside foreign object This function takes function which is applied to that pointer The resulting IO action is then executed this is similary to withForeignPtr for ForeignPtr",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "withSecureMemPtr",
        "normalized": "SecureMem-\u003e(Ptr Word-\u003eIO a)-\u003eIO a",
        "package": "securemem",
        "partial": "Secure Mem Ptr",
        "signature": "SecureMem-\u003e(Ptr Word-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/securemem/docs/Data-SecureMem.html#v:withSecureMemPtrSz",
      "description": {
        "fct-descr": "\u003cp\u003esimilar to withSecureMem but also include the size of the pointed memory.\n\u003c/p\u003e",
        "fct-module": "Data.SecureMem",
        "fct-package": "securemem",
        "fct-signature": "SecureMem -\u003e (Int -\u003e Ptr Word8 -\u003e IO b) -\u003e IO b",
        "fct-source": "src/Data-SecureMem.html#withSecureMemPtrSz",
        "fct-type": "function",
        "title": "withSecureMemPtrSz"
      },
      "index": {
        "description": "similar to withSecureMem but also include the size of the pointed memory",
        "hierarchy": "Data SecureMem",
        "module": "Data.SecureMem",
        "name": "withSecureMemPtrSz",
        "normalized": "SecureMem-\u003e(Int-\u003ePtr Word-\u003eIO a)-\u003eIO a",
        "package": "securemem",
        "partial": "Secure Mem Ptr Sz",
        "signature": "SecureMem-\u003e(Int-\u003ePtr Word-\u003eIO b)-\u003eIO b"
      }
    }
  }
]