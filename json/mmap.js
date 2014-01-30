[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides a wrapper to mmap(2) or MapViewOfFile,\n allowing files or devices to be lazily loaded into memory as strict\n or lazy ByteStrings, ForeignPtrs or plain Ptrs, using the virtual\n memory subsystem to do on-demand loading.  Modifications are also\n supported.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "module",
        "fct-source": "src/System-IO-MMap.html",
        "fct-type": "module",
        "title": "MMap"
      },
      "index": {
        "description": "This library provides wrapper to mmap or MapViewOfFile allowing files or devices to be lazily loaded into memory as strict or lazy ByteStrings ForeignPtrs or plain Ptrs using the virtual memory subsystem to do on-demand loading Modifications are also supported",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "MMap",
        "normalized": "",
        "package": "mmap",
        "partial": "MMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eMode of mapping. Four cases are supported.\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "data",
        "fct-source": "src/System-IO-MMap.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "Mode of mapping Four cases are supported",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "Mode",
        "normalized": "",
        "package": "mmap",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:ReadOnly",
      "description": {
        "fct-descr": "\u003cp\u003efile is mapped read-only, file must\n exist\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "ReadOnly",
        "fct-source": "src/System-IO-MMap.html#Mode",
        "fct-type": "function",
        "title": "ReadOnly"
      },
      "index": {
        "description": "file is mapped read-only file must exist",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "ReadOnly",
        "normalized": "",
        "package": "mmap",
        "partial": "Read Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:ReadWrite",
      "description": {
        "fct-descr": "\u003cp\u003efile is mapped read-write, file must\n exist\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "ReadWrite",
        "fct-source": "src/System-IO-MMap.html#Mode",
        "fct-type": "function",
        "title": "ReadWrite"
      },
      "index": {
        "description": "file is mapped read-write file must exist",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "ReadWrite",
        "normalized": "",
        "package": "mmap",
        "partial": "Read Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:ReadWriteEx",
      "description": {
        "fct-descr": "\u003cp\u003efile is mapped read-write, if file does\n not exist it will be created with default\n permissions, region parameter specifies\n size, if file size is lower it will be\n extended with zeros\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "ReadWriteEx",
        "fct-source": "src/System-IO-MMap.html#Mode",
        "fct-type": "function",
        "title": "ReadWriteEx"
      },
      "index": {
        "description": "file is mapped read-write if file does not exist it will be created with default permissions region parameter specifies size if file size is lower it will be extended with zeros",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "ReadWriteEx",
        "normalized": "",
        "package": "mmap",
        "partial": "Read Write Ex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:WriteCopy",
      "description": {
        "fct-descr": "\u003cp\u003efile is mapped read-write, but changes\n aren't propagated to disk, file must exist\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "WriteCopy",
        "fct-source": "src/System-IO-MMap.html#Mode",
        "fct-type": "function",
        "title": "WriteCopy"
      },
      "index": {
        "description": "file is mapped read-write but changes aren propagated to disk file must exist",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "WriteCopy",
        "normalized": "",
        "package": "mmap",
        "partial": "Write Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:mmapFileByteString",
      "description": {
        "fct-descr": "\u003cp\u003eMaps region of file and returns it as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  File is\n mapped in in \u003ccode\u003e\u003ca\u003eReadOnly\u003c/a\u003e\u003c/code\u003e mode. See \u003ccode\u003e\u003ca\u003emmapFilePtr\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "FilePath-\u003e Maybe (Int64, Int)-\u003e IO ByteString",
        "fct-type": "function",
        "title": "mmapFileByteString"
      },
      "index": {
        "description": "Maps region of file and returns it as ByteString File is mapped in in ReadOnly mode See mmapFilePtr for details",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "mmapFileByteString",
        "normalized": "FilePath-\u003eMaybe(Int,Int)-\u003eIO ByteString",
        "package": "mmap",
        "partial": "File Byte String",
        "signature": "FilePath-\u003eMaybe(Int,Int)-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:mmapFileByteStringLazy",
      "description": {
        "fct-descr": "\u003cp\u003eMaps region of file and returns it as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. File is\n mapped in in \u003ccode\u003e\u003ca\u003eReadOnly\u003c/a\u003e\u003c/code\u003e mode. See \u003ccode\u003e\u003ca\u003emmapFileForeignPtrLazy\u003c/a\u003e\u003c/code\u003e for\n details.\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "FilePath-\u003e Maybe (Int64, Int64)-\u003e IO ByteString",
        "fct-type": "function",
        "title": "mmapFileByteStringLazy"
      },
      "index": {
        "description": "Maps region of file and returns it as ByteString File is mapped in in ReadOnly mode See mmapFileForeignPtrLazy for details",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "mmapFileByteStringLazy",
        "normalized": "FilePath-\u003eMaybe(Int,Int)-\u003eIO ByteString",
        "package": "mmap",
        "partial": "File Byte String Lazy",
        "signature": "FilePath-\u003eMaybe(Int,Int)-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:mmapFileForeignPtr",
      "description": {
        "fct-descr": "\u003cp\u003eMaps region of file and returns it as \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003emmapFilePtr\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "FilePath-\u003e Mode-\u003e Maybe (Int64, Int)-\u003e IO (ForeignPtr a, Int, Int)",
        "fct-type": "function",
        "title": "mmapFileForeignPtr"
      },
      "index": {
        "description": "Maps region of file and returns it as ForeignPtr See mmapFilePtr for details",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "mmapFileForeignPtr",
        "normalized": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003eIO(ForeignPtr a,Int,Int)",
        "package": "mmap",
        "partial": "File Foreign Ptr",
        "signature": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003eIO(ForeignPtr a,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:mmapFileForeignPtrLazy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emmapFileForeignPtrLazy\u003c/a\u003e\u003c/code\u003e function maps a file or device into\n memory, returning a list of tuples with the same meaning as in\n function \u003ccode\u003e\u003ca\u003emmapFileForeignPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eChunks are really mapped into memory at the first inspection of a\n chunk. They are kept in memory while they are referenced, garbage\n collector takes care of the later.\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "FilePath-\u003e Mode-\u003e Maybe (Int64, Int64)-\u003e IO [(ForeignPtr a, Int, Int)]",
        "fct-type": "function",
        "title": "mmapFileForeignPtrLazy"
      },
      "index": {
        "description": "The mmapFileForeignPtrLazy function maps file or device into memory returning list of tuples with the same meaning as in function mmapFileForeignPtr Chunks are really mapped into memory at the first inspection of chunk They are kept in memory while they are referenced garbage collector takes care of the later",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "mmapFileForeignPtrLazy",
        "normalized": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003eIO[(ForeignPtr a,Int,Int)]",
        "package": "mmap",
        "partial": "File Foreign Ptr Lazy",
        "signature": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003eIO[(ForeignPtr a,Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:mmapFilePtr",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emmapFilePtr\u003c/a\u003e\u003c/code\u003e function maps a file or device into memory,\n returning a tuple \u003ccode\u003e(ptr,rawsize,offset,size)\u003c/code\u003e where:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eptr\u003c/code\u003e is pointer to mmapped region\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003erawsize\u003c/code\u003e is length (in bytes) of mapped data, rawsize might be\n greater than size because of alignment\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eoffset\u003c/code\u003e tell where your data lives: \u003ccode\u003eplusPtr ptr offset\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esize\u003c/code\u003e your data length (in bytes)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003emmapFilePtr\u003c/a\u003e\u003c/code\u003e fails for some reason, a \u003ccode\u003e\u003ca\u003ethrowErrno\u003c/a\u003e\u003c/code\u003e is used.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003emunmapFilePtr ptr rawsize\u003c/code\u003e to unmap memory.\n\u003c/p\u003e\u003cp\u003eMemory mapped files will behave as if they were read lazily\n pages from the file will be loaded into memory on demand.\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "FilePath-\u003e Mode-\u003e Maybe (Int64, Int)-\u003e IO (Ptr a, Int, Int, Int)",
        "fct-type": "function",
        "title": "mmapFilePtr"
      },
      "index": {
        "description": "The mmapFilePtr function maps file or device into memory returning tuple ptr rawsize offset size where ptr is pointer to mmapped region rawsize is length in bytes of mapped data rawsize might be greater than size because of alignment offset tell where your data lives plusPtr ptr offset size your data length in bytes If mmapFilePtr fails for some reason throwErrno is used Use munmapFilePtr ptr rawsize to unmap memory Memory mapped files will behave as if they were read lazily pages from the file will be loaded into memory on demand",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "mmapFilePtr",
        "normalized": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003eIO(Ptr a,Int,Int,Int)",
        "package": "mmap",
        "partial": "File Ptr",
        "signature": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003eIO(Ptr a,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:mmapWithFilePtr",
      "description": {
        "fct-descr": "\u003cp\u003eMemory map region of file using autounmap semantics. See\n \u003ccode\u003e\u003ca\u003emmapFilePtr\u003c/a\u003e\u003c/code\u003e for description of parameters.  The \u003ccode\u003eaction\u003c/code\u003e will be\n executed with tuple \u003ccode\u003e(ptr,size)\u003c/code\u003e as single argument. This is the\n pointer to mapped data already adjusted and size of requested\n region. Return value is that of action.\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "FilePath-\u003e Mode-\u003e Maybe (Int64, Int)-\u003e ((Ptr (), Int) -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "mmapWithFilePtr"
      },
      "index": {
        "description": "Memory map region of file using autounmap semantics See mmapFilePtr for description of parameters The action will be executed with tuple ptr size as single argument This is the pointer to mapped data already adjusted and size of requested region Return value is that of action",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "mmapWithFilePtr",
        "normalized": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003e((Ptr(),Int)-\u003eIO a)-\u003eIO a",
        "package": "mmap",
        "partial": "With File Ptr",
        "signature": "FilePath-\u003eMode-\u003eMaybe(Int,Int)-\u003e((Ptr(),Int)-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mmap/docs/System-IO-MMap.html#v:munmapFilePtr",
      "description": {
        "fct-descr": "\u003cp\u003eUnmaps memory region. As parameters use values marked as ptr and\n rawsize in description of \u003ccode\u003e\u003ca\u003emmapFilePtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.IO.MMap",
        "fct-package": "mmap",
        "fct-signature": "Ptr a-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "munmapFilePtr"
      },
      "index": {
        "description": "Unmaps memory region As parameters use values marked as ptr and rawsize in description of mmapFilePtr",
        "hierarchy": "System IO MMap",
        "module": "System.IO.MMap",
        "name": "munmapFilePtr",
        "normalized": "Ptr a-\u003eInt-\u003eIO()",
        "package": "mmap",
        "partial": "File Ptr",
        "signature": "Ptr a-\u003eInt-\u003eIO()"
      }
    }
  }
]