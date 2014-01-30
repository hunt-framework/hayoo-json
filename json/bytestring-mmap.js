[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-mmap/docs/System-IO-Posix-MMap-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow level mmap access.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Posix.MMap.Internal",
        "fct-package": "bytestring-mmap",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Posix-MMap-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Low level mmap access",
        "hierarchy": "System IO Posix MMap Internal",
        "module": "System.IO.Posix.MMap.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "bytestring-mmap",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-mmap/docs/System-IO-Posix-MMap-Internal.html#v:c_mmap",
      "description": {
        "fct-module": "System.IO.Posix.MMap.Internal",
        "fct-package": "bytestring-mmap",
        "fct-signature": "CSize -\u003e CInt -\u003e IO (Ptr Word8)",
        "fct-source": "src/System-IO-Posix-MMap-Internal.html#c_mmap",
        "fct-type": "function",
        "title": "c_mmap"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Posix MMap Internal",
        "module": "System.IO.Posix.MMap.Internal",
        "name": "c_mmap",
        "normalized": "CSize-\u003eCInt-\u003eIO(Ptr Word)",
        "package": "bytestring-mmap",
        "partial": "",
        "signature": "CSize-\u003eCInt-\u003eIO(Ptr Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-mmap/docs/System-IO-Posix-MMap-Internal.html#v:c_munmap",
      "description": {
        "fct-module": "System.IO.Posix.MMap.Internal",
        "fct-package": "bytestring-mmap",
        "fct-signature": "Ptr Word8 -\u003e CSize -\u003e IO CInt",
        "fct-source": "src/System-IO-Posix-MMap-Internal.html#c_munmap",
        "fct-type": "function",
        "title": "c_munmap"
      },
      "index": {
        "description": "",
        "hierarchy": "System IO Posix MMap Internal",
        "module": "System.IO.Posix.MMap.Internal",
        "name": "c_munmap",
        "normalized": "Ptr Word-\u003eCSize-\u003eIO CInt",
        "package": "bytestring-mmap",
        "partial": "",
        "signature": "Ptr Word-\u003eCSize-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-mmap/docs/System-IO-Posix-MMap-Internal.html#v:unsafePackMMapPtr",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a bytestring from a memory mapped Ptr.\n A finalizer will be associated with the resource, that will call\n munmap when the storage manager detects that the resource is no longer\n in use.\n\u003c/p\u003e",
        "fct-module": "System.IO.Posix.MMap.Internal",
        "fct-package": "bytestring-mmap",
        "fct-signature": "Ptr Word8 -\u003e CSize -\u003e IO ByteString",
        "fct-source": "src/System-IO-Posix-MMap-Internal.html#unsafePackMMapPtr",
        "fct-type": "function",
        "title": "unsafePackMMapPtr"
      },
      "index": {
        "description": "Create bytestring from memory mapped Ptr finalizer will be associated with the resource that will call munmap when the storage manager detects that the resource is no longer in use",
        "hierarchy": "System IO Posix MMap Internal",
        "module": "System.IO.Posix.MMap.Internal",
        "name": "unsafePackMMapPtr",
        "normalized": "Ptr Word-\u003eCSize-\u003eIO ByteString",
        "package": "bytestring-mmap",
        "partial": "Pack MMap Ptr",
        "signature": "Ptr Word-\u003eCSize-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-mmap/docs/System-IO-Posix-MMap-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy, chunk-wise memory mapping.\n\u003c/p\u003e\u003cp\u003eMemory map a file as a lazy ByteString. Finalisers are associated\n cached-sized portions of the file, which will be deallocated as\n those chunks go out of scope.\n\u003c/p\u003e\u003cp\u003eUnlike strict Bytestrings, mmapFile for Lazy ByteStrings will\n deallocate chunks of the file.\n\u003c/p\u003e\u003cp\u003eThe storage manager is used to free chunks of the mapped memory. When\n the garbage collector notices there are no further references to \n a chunk, a call to munmap is made.\n\u003c/p\u003e\u003cp\u003eIn effect, the file is mmapped once, lazily, then covered with finalizers\n for each chunk. When any chunk goes out of scope, that part is\n deallocated. We must allocate the spine of the structure strictly\n though, to ensure finalizers are registered for the entire file.\n\u003c/p\u003e\u003cp\u003eThe Haskell garbage collector decides when to run based on heap\n pressure, however the mmap stores memory outside the Haskell heap, \n so those resources are not counted when deciding to run the garbage\n collect. The result is that finalizers run less often than you might\n expect, and it is possible to write a lazy bytestring mmap program \n that never deallocates (and thus doesn't run in constant space).\n \u003ccode\u003eperformGC\u003c/code\u003e or \u003ccode\u003efinalizerForeignPtr\u003c/code\u003e can be used to trigger collection\n at sensible points.\n\u003c/p\u003e\u003cp\u003eNote: this operation may break referential transparency! If \n any other process on the system changes the file when it is mapped\n into Haskell, the contents of your \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e will change.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Posix.MMap.Lazy",
        "fct-package": "bytestring-mmap",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Posix-MMap-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lazy chunk-wise memory mapping Memory map file as lazy ByteString Finalisers are associated cached-sized portions of the file which will be deallocated as those chunks go out of scope Unlike strict Bytestrings mmapFile for Lazy ByteStrings will deallocate chunks of the file The storage manager is used to free chunks of the mapped memory When the garbage collector notices there are no further references to chunk call to munmap is made In effect the file is mmapped once lazily then covered with finalizers for each chunk When any chunk goes out of scope that part is deallocated We must allocate the spine of the structure strictly though to ensure finalizers are registered for the entire file The Haskell garbage collector decides when to run based on heap pressure however the mmap stores memory outside the Haskell heap so those resources are not counted when deciding to run the garbage collect The result is that finalizers run less often than you might expect and it is possible to write lazy bytestring mmap program that never deallocates and thus doesn run in constant space performGC or finalizerForeignPtr can be used to trigger collection at sensible points Note this operation may break referential transparency If any other process on the system changes the file when it is mapped into Haskell the contents of your ByteString will change",
        "hierarchy": "System IO Posix MMap Lazy",
        "module": "System.IO.Posix.MMap.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "bytestring-mmap",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-mmap/docs/System-IO-Posix-MMap-Lazy.html#v:unsafeMMapFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunsafeMMapFile\u003c/a\u003e\u003c/code\u003e function maps a file or device into memory as\n a lazy ByteString, made of 64*pagesize unmappable chunks of bytes.\n\u003c/p\u003e\u003cp\u003eMemory mapped files will behave as if they were read lazily -- \n pages from the file will be loaded into memory on demand.\n\u003c/p\u003e\u003cp\u003eThe storage manager is used to free chunks that go out of scope,\n and unlike strict bytestrings, memory mapped lazy ByteStrings will\n be deallocated in chunks (so you can write traversals that run in\n constant space).\n\u003c/p\u003e\u003cp\u003eHowever, the size of the mmapped resource is not known by the Haskell\n GC, it appears only as a small ForeignPtr. This means that the\n Haskell GC may not not run as often as you'd like, leading to delays\n in unmapping chunks.\n\u003c/p\u003e\u003cp\u003eAppropriate use of performGC or finalizerForeignPtr may be required\n to ensure deallocation, as resources allocated by mmap are not\n tracked by the Haskell garbage collector.\n\u003c/p\u003e\u003cp\u003eFor example, when writing out a lazy bytestring allocated with mmap,\n you may wish to finalizeForeignPtr when each chunk is written, as the \n chunk goes out of scope, rather than relying on the garbage collector\n to notice the chunk has gone.\n\u003c/p\u003e\u003cp\u003eThis operation is unsafe: if the file is written to by any other\n process on the system, the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contents will change in\n Haskell.\n\u003c/p\u003e",
        "fct-module": "System.IO.Posix.MMap.Lazy",
        "fct-package": "bytestring-mmap",
        "fct-signature": "FilePath -\u003e IO ByteString",
        "fct-source": "src/System-IO-Posix-MMap-Lazy.html#unsafeMMapFile",
        "fct-type": "function",
        "title": "unsafeMMapFile"
      },
      "index": {
        "description": "The unsafeMMapFile function maps file or device into memory as lazy ByteString made of pagesize unmappable chunks of bytes Memory mapped files will behave as if they were read lazily pages from the file will be loaded into memory on demand The storage manager is used to free chunks that go out of scope and unlike strict bytestrings memory mapped lazy ByteStrings will be deallocated in chunks so you can write traversals that run in constant space However the size of the mmapped resource is not known by the Haskell GC it appears only as small ForeignPtr This means that the Haskell GC may not not run as often as you like leading to delays in unmapping chunks Appropriate use of performGC or finalizerForeignPtr may be required to ensure deallocation as resources allocated by mmap are not tracked by the Haskell garbage collector For example when writing out lazy bytestring allocated with mmap you may wish to finalizeForeignPtr when each chunk is written as the chunk goes out of scope rather than relying on the garbage collector to notice the chunk has gone This operation is unsafe if the file is written to by any other process on the system the ByteString contents will change in Haskell",
        "hierarchy": "System IO Posix MMap Lazy",
        "module": "System.IO.Posix.MMap.Lazy",
        "name": "unsafeMMapFile",
        "normalized": "FilePath-\u003eIO ByteString",
        "package": "bytestring-mmap",
        "partial": "MMap File",
        "signature": "FilePath-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-mmap/docs/System-IO-Posix-MMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003emmap a file or device into memory as a strict ByteString.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Posix.MMap",
        "fct-package": "bytestring-mmap",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Posix-MMap.html",
        "fct-type": "module",
        "title": "MMap"
      },
      "index": {
        "description": "mmap file or device into memory as strict ByteString",
        "hierarchy": "System IO Posix MMap",
        "module": "System.IO.Posix.MMap",
        "name": "MMap",
        "normalized": "",
        "package": "bytestring-mmap",
        "partial": "MMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-mmap/docs/System-IO-Posix-MMap.html#v:unsafeMMapFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunsafeMMapFile\u003c/a\u003e\u003c/code\u003e function maps a file or device into memory,\n returning a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e that accesses the mapped file.\n If the mmap fails for some reason, an error is thrown.\n\u003c/p\u003e\u003cp\u003eMemory mapped files will behave as if they were read lazily -- \n pages from the file will be loaded into memory on demand.\n\u003c/p\u003e\u003cp\u003eThe storage manager is used to free the mapped memory. When\n the garbage collector notices there are no further references to the \n mapped memory, a call to munmap is made. It is not necessary to do\n this yourself. In tight memory situations, it may be profitable to\n use \u003ccode\u003eperformGC\u003c/code\u003e or \u003ccode\u003efinalizeForeignPtr\u003c/code\u003e to force an unmap.\n\u003c/p\u003e\u003cp\u003eNote: this operation may break referential transparency! If \n any other process on the system changes the file when it is mapped\n into Haskell, the contents of your \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e will change.\n\u003c/p\u003e",
        "fct-module": "System.IO.Posix.MMap",
        "fct-package": "bytestring-mmap",
        "fct-signature": "FilePath -\u003e IO ByteString",
        "fct-source": "src/System-IO-Posix-MMap.html#unsafeMMapFile",
        "fct-type": "function",
        "title": "unsafeMMapFile"
      },
      "index": {
        "description": "The unsafeMMapFile function maps file or device into memory returning strict ByteString that accesses the mapped file If the mmap fails for some reason an error is thrown Memory mapped files will behave as if they were read lazily pages from the file will be loaded into memory on demand The storage manager is used to free the mapped memory When the garbage collector notices there are no further references to the mapped memory call to munmap is made It is not necessary to do this yourself In tight memory situations it may be profitable to use performGC or finalizeForeignPtr to force an unmap Note this operation may break referential transparency If any other process on the system changes the file when it is mapped into Haskell the contents of your ByteString will change",
        "hierarchy": "System IO Posix MMap",
        "module": "System.IO.Posix.MMap",
        "name": "unsafeMMapFile",
        "normalized": "FilePath-\u003eIO ByteString",
        "package": "bytestring-mmap",
        "partial": "MMap File",
        "signature": "FilePath-\u003eIO ByteString"
      }
    }
  }
]