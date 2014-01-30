[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a variant of the \u003ca\u003eForeign.C.Error\u003c/a\u003e API which returns\n errors explicitly, instead of throwing exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.5\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "module",
        "fct-source": "src/Foreign-C-Error-Safe.html",
        "fct-type": "module",
        "title": "Safe"
      },
      "index": {
        "description": "Provides variant of the Foreign.C.Error API which returns errors explicitly instead of throwing exceptions Since",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "Safe",
        "normalized": "",
        "package": "unix-bytestring",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#v:eitherErrnoIf",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ethrowErrnoIf\u003c/a\u003e\u003c/code\u003e which returns \u003ccode\u003eEither\u003c/code\u003e instead\n of throwing an errno error.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "(a -\u003e Bool)-\u003e IO a-\u003e IO (Either Errno a)",
        "fct-type": "function",
        "title": "eitherErrnoIf"
      },
      "index": {
        "description": "variant of throwErrnoIf which returns Either instead of throwing an errno error",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "eitherErrnoIf",
        "normalized": "(a-\u003eBool)-\u003eIO a-\u003eIO(Either Errno a)",
        "package": "unix-bytestring",
        "partial": "Errno If",
        "signature": "(a-\u003eBool)-\u003eIO a-\u003eIO(Either Errno a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#v:eitherErrnoIfMinus1",
      "description": {
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "IO a -\u003e IO (Either Errno a)",
        "fct-source": "src/Foreign-C-Error-Safe.html#eitherErrnoIfMinus1",
        "fct-type": "function",
        "title": "eitherErrnoIfMinus1"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "eitherErrnoIfMinus1",
        "normalized": "IO a-\u003eIO(Either Errno a)",
        "package": "unix-bytestring",
        "partial": "Errno If Minus",
        "signature": "IO a-\u003eIO(Either Errno a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#v:eitherErrnoIfMinus1Retry",
      "description": {
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "IO a -\u003e IO (Either Errno a)",
        "fct-source": "src/Foreign-C-Error-Safe.html#eitherErrnoIfMinus1Retry",
        "fct-type": "function",
        "title": "eitherErrnoIfMinus1Retry"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "eitherErrnoIfMinus1Retry",
        "normalized": "IO a-\u003eIO(Either Errno a)",
        "package": "unix-bytestring",
        "partial": "Errno If Minus Retry",
        "signature": "IO a-\u003eIO(Either Errno a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#v:eitherErrnoIfMinus1RetryMayBlock",
      "description": {
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "IO a -\u003e IO b -\u003e IO (Either Errno a)",
        "fct-source": "src/Foreign-C-Error-Safe.html#eitherErrnoIfMinus1RetryMayBlock",
        "fct-type": "function",
        "title": "eitherErrnoIfMinus1RetryMayBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "eitherErrnoIfMinus1RetryMayBlock",
        "normalized": "IO a-\u003eIO b-\u003eIO(Either Errno a)",
        "package": "unix-bytestring",
        "partial": "Errno If Minus Retry May Block",
        "signature": "IO a-\u003eIO b-\u003eIO(Either Errno a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#v:eitherErrnoIfNull",
      "description": {
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "IO (Ptr a) -\u003e IO (Either Errno (Ptr a))",
        "fct-source": "src/Foreign-C-Error-Safe.html#eitherErrnoIfNull",
        "fct-type": "function",
        "title": "eitherErrnoIfNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "eitherErrnoIfNull",
        "normalized": "IO(Ptr a)-\u003eIO(Either Errno(Ptr a))",
        "package": "unix-bytestring",
        "partial": "Errno If Null",
        "signature": "IO(Ptr a)-\u003eIO(Either Errno(Ptr a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#v:eitherErrnoIfNullRetry",
      "description": {
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "IO (Ptr a) -\u003e IO (Either Errno (Ptr a))",
        "fct-source": "src/Foreign-C-Error-Safe.html#eitherErrnoIfNullRetry",
        "fct-type": "function",
        "title": "eitherErrnoIfNullRetry"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "eitherErrnoIfNullRetry",
        "normalized": "IO(Ptr a)-\u003eIO(Either Errno(Ptr a))",
        "package": "unix-bytestring",
        "partial": "Errno If Null Retry",
        "signature": "IO(Ptr a)-\u003eIO(Either Errno(Ptr a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#v:eitherErrnoIfNullRetryMayBlock",
      "description": {
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "IO (Ptr a) -\u003e IO b -\u003e IO (Either Errno (Ptr a))",
        "fct-source": "src/Foreign-C-Error-Safe.html#eitherErrnoIfNullRetryMayBlock",
        "fct-type": "function",
        "title": "eitherErrnoIfNullRetryMayBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "eitherErrnoIfNullRetryMayBlock",
        "normalized": "IO(Ptr a)-\u003eIO b-\u003eIO(Either Errno(Ptr a))",
        "package": "unix-bytestring",
        "partial": "Errno If Null Retry May Block",
        "signature": "IO(Ptr a)-\u003eIO b-\u003eIO(Either Errno(Ptr a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#v:eitherErrnoIfRetry",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ethrowErrnoIfRetry\u003c/a\u003e\u003c/code\u003e which returns \u003ccode\u003eEither\u003c/code\u003e\n instead of throwing an errno error.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "(a -\u003e Bool)-\u003e IO a-\u003e IO (Either Errno a)",
        "fct-type": "function",
        "title": "eitherErrnoIfRetry"
      },
      "index": {
        "description": "variant of throwErrnoIfRetry which returns Either instead of throwing an errno error",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "eitherErrnoIfRetry",
        "normalized": "(a-\u003eBool)-\u003eIO a-\u003eIO(Either Errno a)",
        "package": "unix-bytestring",
        "partial": "Errno If Retry",
        "signature": "(a-\u003eBool)-\u003eIO a-\u003eIO(Either Errno a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/Foreign-C-Error-Safe.html#v:eitherErrnoIfRetryMayBlock",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ethrowErrnoIfRetryMayBlock\u003c/a\u003e\u003c/code\u003e which returns\n \u003ccode\u003eEither\u003c/code\u003e instead of throwing an errno error.\n\u003c/p\u003e",
        "fct-module": "Foreign.C.Error.Safe",
        "fct-package": "unix-bytestring",
        "fct-signature": "(a -\u003e Bool)-\u003e IO a-\u003e IO b-\u003e IO (Either Errno a)",
        "fct-type": "function",
        "title": "eitherErrnoIfRetryMayBlock"
      },
      "index": {
        "description": "variant of throwErrnoIfRetryMayBlock which returns Either instead of throwing an errno error",
        "hierarchy": "Foreign C Error Safe",
        "module": "Foreign.C.Error.Safe",
        "name": "eitherErrnoIfRetryMayBlock",
        "normalized": "(a-\u003eBool)-\u003eIO a-\u003eIO b-\u003eIO(Either Errno a)",
        "package": "unix-bytestring",
        "partial": "Errno If Retry May Block",
        "signature": "(a-\u003eBool)-\u003eIO a-\u003eIO b-\u003eIO(Either Errno a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a lazy-\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e file-descriptor based I/O\n API, designed loosely after the \u003ccode\u003eString\u003c/code\u003e file-descriptor based\n I/O API in \u003ca\u003eSystem.Posix.IO\u003c/a\u003e. The functions here wrap standard\n C implementations of the functions specified by the ISO/IEC\n 9945-1:1990 (``POSIX.1'') and X/Open Portability Guide Issue\n 4, Version 2 (``XPG4.2'') specifications.\n\u003c/p\u003e\u003cp\u003eThese functions are provided mainly as a convenience to avoid\n boilerplate code converting between lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n strict \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e. It may be depricated in the future.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.IO.ByteString.Lazy",
        "fct-package": "unix-bytestring",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-IO-ByteString-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Provides lazy ByteString file-descriptor based API designed loosely after the String file-descriptor based API in System.Posix.IO The functions here wrap standard implementations of the functions specified by the ISO IEC POSIX.1 and Open Portability Guide Issue Version XPG4.2 specifications These functions are provided mainly as convenience to avoid boilerplate code converting between lazy ByteString and strict ByteString It may be depricated in the future",
        "hierarchy": "System Posix IO ByteString Lazy",
        "module": "System.Posix.IO.ByteString.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "unix-bytestring",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString-Lazy.html#v:fdPread",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from a specified position in the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and convert\n it to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, without altering the position stored\n in the \u003ccode\u003eFd\u003c/code\u003e. Throws an exception if this is an invalid descriptor,\n or EOF has been reached. This is a thin wrapper around\n \u003ccode\u003e\u003ca\u003efdPread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.1\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString.Lazy",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e ByteCount-\u003e FileOffset-\u003e IO ByteString",
        "fct-type": "function",
        "title": "fdPread"
      },
      "index": {
        "description": "Read data from specified position in the Fd and convert it to ByteString without altering the position stored in the Fd Throws an exception if this is an invalid descriptor or EOF has been reached This is thin wrapper around fdPread Since",
        "hierarchy": "System Posix IO ByteString Lazy",
        "module": "System.Posix.IO.ByteString.Lazy",
        "name": "fdPread",
        "normalized": "Fd-\u003eByteCount-\u003eFileOffset-\u003eIO ByteString",
        "package": "unix-bytestring",
        "partial": "Pread",
        "signature": "Fd-\u003eByteCount-\u003eFileOffset-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString-Lazy.html#v:fdRead",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and convert it to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n Throws an exception if this is an invalid descriptor, or EOF has\n been reached. This is a thin wrapper around \u003ccode\u003e\u003ca\u003efdRead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString.Lazy",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e ByteCount-\u003e IO ByteString",
        "fct-type": "function",
        "title": "fdRead"
      },
      "index": {
        "description": "Read data from an Fd and convert it to ByteString Throws an exception if this is an invalid descriptor or EOF has been reached This is thin wrapper around fdRead",
        "hierarchy": "System Posix IO ByteString Lazy",
        "module": "System.Posix.IO.ByteString.Lazy",
        "name": "fdRead",
        "normalized": "Fd-\u003eByteCount-\u003eIO ByteString",
        "package": "unix-bytestring",
        "partial": "Read",
        "signature": "Fd-\u003eByteCount-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString-Lazy.html#v:fdWrites",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e. This function makes one\n \u003ccode\u003ewrite(2)\u003c/code\u003e system call per chunk, as per \u003ccode\u003e\u003ca\u003efdWrites\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString.Lazy",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e ByteString-\u003e IO (ByteCount, ByteString)",
        "fct-type": "function",
        "title": "fdWrites"
      },
      "index": {
        "description": "Write ByteString to an Fd This function makes one write system call per chunk as per fdWrites",
        "hierarchy": "System Posix IO ByteString Lazy",
        "module": "System.Posix.IO.ByteString.Lazy",
        "name": "fdWrites",
        "normalized": "Fd-\u003eByteString-\u003eIO(ByteCount,ByteString)",
        "package": "unix-bytestring",
        "partial": "Writes",
        "signature": "Fd-\u003eByteString-\u003eIO(ByteCount,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString-Lazy.html#v:fdWritev",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e. This function makes a\n single \u003ccode\u003ewritev(2)\u003c/code\u003e system call, as per \u003ccode\u003e\u003ca\u003efdWritev\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString.Lazy",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e ByteString-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdWritev"
      },
      "index": {
        "description": "Write ByteString to an Fd This function makes single writev system call as per fdWritev",
        "hierarchy": "System Posix IO ByteString Lazy",
        "module": "System.Posix.IO.ByteString.Lazy",
        "name": "fdWritev",
        "normalized": "Fd-\u003eByteString-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Writev",
        "signature": "Fd-\u003eByteString-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a strict-\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e file-descriptor based I/O\n API, designed loosely after the \u003ccode\u003eString\u003c/code\u003e file-descriptor based\n I/O API in \u003ca\u003eSystem.Posix.IO\u003c/a\u003e. The functions here wrap standard\n C implementations of the functions specified by the ISO/IEC\n 9945-1:1990 (``POSIX.1'') and X/Open Portability Guide Issue\n 4, Version 2 (``XPG4.2'') specifications.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-IO-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "Provides strict ByteString file-descriptor based API designed loosely after the String file-descriptor based API in System.Posix.IO The functions here wrap standard implementations of the functions specified by the ISO IEC POSIX.1 and Open Portability Guide Issue Version XPG4.2 specifications",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "unix-bytestring",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdPread",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from a specified position in the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and convert\n it to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, without altering the position stored\n in the \u003ccode\u003eFd\u003c/code\u003e. Throws an exception if this is an invalid descriptor,\n or EOF has been reached. This is essentially equivalent to\n \u003ccode\u003e\u003ca\u003efdPreadBuf\u003c/a\u003e\u003c/code\u003e; the differences are that we allocate a byte buffer\n for the \u003ccode\u003eByteString\u003c/code\u003e, and that we detect EOF and throw an\n \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e ByteCount-\u003e FileOffset-\u003e IO ByteString",
        "fct-type": "function",
        "title": "fdPread"
      },
      "index": {
        "description": "Read data from specified position in the Fd and convert it to ByteString without altering the position stored in the Fd Throws an exception if this is an invalid descriptor or EOF has been reached This is essentially equivalent to fdPreadBuf the differences are that we allocate byte buffer for the ByteString and that we detect EOF and throw an IOError Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdPread",
        "normalized": "Fd-\u003eByteCount-\u003eFileOffset-\u003eIO ByteString",
        "package": "unix-bytestring",
        "partial": "Pread",
        "signature": "Fd-\u003eByteCount-\u003eFileOffset-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdPreadBuf",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from a specified position in the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e into memory,\n without altering the position stored in the \u003ccode\u003eFd\u003c/code\u003e. This is exactly\n equivalent to the XPG4.2 \u003ccode\u003epread(2)\u003c/code\u003e system call, except that we\n return 0 bytes read if the \u003ccode\u003eInt\u003c/code\u003e argument is less than or equal\n to zero (instead of throwing an errno exception). If there are\n any errors, then they are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e FileOffset-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdPreadBuf"
      },
      "index": {
        "description": "Read data from specified position in the Fd into memory without altering the position stored in the Fd This is exactly equivalent to the XPG4.2 pread system call except that we return bytes read if the Int argument is less than or equal to zero instead of throwing an errno exception If there are any errors then they are thrown as IOError exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdPreadBuf",
        "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eFileOffset-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Pread Buf",
        "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eFileOffset-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdPreads",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from a specified position in the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and convert\n it to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, without altering the position stored\n in the \u003ccode\u003eFd\u003c/code\u003e. Throws an exception if this is an invalid descriptor,\n or EOF has been reached. This is a \u003ccode\u003e\u003ca\u003efdPreadBuf\u003c/a\u003e\u003c/code\u003e based version\n of \u003ccode\u003e\u003ca\u003efdReads\u003c/a\u003e\u003c/code\u003e; see those functions for more details.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.1\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "(ByteCount -\u003e a -\u003e Maybe a)-\u003e a-\u003e Fd-\u003e ByteCount-\u003e FileOffset-\u003e IO ByteString",
        "fct-type": "function",
        "title": "fdPreads"
      },
      "index": {
        "description": "Read data from specified position in the Fd and convert it to ByteString without altering the position stored in the Fd Throws an exception if this is an invalid descriptor or EOF has been reached This is fdPreadBuf based version of fdReads see those functions for more details Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdPreads",
        "normalized": "(ByteCount-\u003ea-\u003eMaybe a)-\u003ea-\u003eFd-\u003eByteCount-\u003eFileOffset-\u003eIO ByteString",
        "package": "unix-bytestring",
        "partial": "Preads",
        "signature": "(ByteCount-\u003ea-\u003eMaybe a)-\u003ea-\u003eFd-\u003eByteCount-\u003eFileOffset-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdPwrite",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data from memory to a specified position in the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e,\n but without altering the position stored in the \u003ccode\u003eFd\u003c/code\u003e. This is\n exactly equivalent to \u003ccode\u003e\u003ca\u003efdPwriteBuf\u003c/a\u003e\u003c/code\u003e; we just convert the\n \u003ccode\u003eByteString\u003c/code\u003e into its underlying \u003ccode\u003ePtr Word8\u003c/code\u003e and \u003ccode\u003eByteCount\u003c/code\u003e\n components for passing to \u003ccode\u003e\u003ca\u003efdPwriteBuf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e ByteString-\u003e FileOffset-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdPwrite"
      },
      "index": {
        "description": "Write data from memory to specified position in the Fd but without altering the position stored in the Fd This is exactly equivalent to fdPwriteBuf we just convert the ByteString into its underlying Ptr Word8 and ByteCount components for passing to fdPwriteBuf Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdPwrite",
        "normalized": "Fd-\u003eByteString-\u003eFileOffset-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Pwrite",
        "signature": "Fd-\u003eByteString-\u003eFileOffset-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdPwriteBuf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data from memory to a specified position in the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e,\n but without altering the position stored in the \u003ccode\u003eFd\u003c/code\u003e. This is\n exactly equivalent to the XPG4.2 \u003ccode\u003epwrite(2)\u003c/code\u003e system call, except\n that we return 0 bytes written if the \u003ccode\u003eByteCount\u003c/code\u003e argument is\n less than or equal to zero (instead of throwing an errno exception).\n If there are any errors, then they are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e\n exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e FileOffset-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdPwriteBuf"
      },
      "index": {
        "description": "Write data from memory to specified position in the Fd but without altering the position stored in the Fd This is exactly equivalent to the XPG4.2 pwrite system call except that we return bytes written if the ByteCount argument is less than or equal to zero instead of throwing an errno exception If there are any errors then they are thrown as IOError exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdPwriteBuf",
        "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eFileOffset-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Pwrite Buf",
        "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eFileOffset-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdRead",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and convert it to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n Throws an exception if this is an invalid descriptor, or EOF has\n been reached. This is essentially equivalent to \u003ccode\u003e\u003ca\u003efdReadBuf\u003c/a\u003e\u003c/code\u003e; the\n differences are that we allocate a byte buffer for the \u003ccode\u003eByteString\u003c/code\u003e,\n and that we detect EOF and throw an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e ByteCount-\u003e IO ByteString",
        "fct-type": "function",
        "title": "fdRead"
      },
      "index": {
        "description": "Read data from an Fd and convert it to ByteString Throws an exception if this is an invalid descriptor or EOF has been reached This is essentially equivalent to fdReadBuf the differences are that we allocate byte buffer for the ByteString and that we detect EOF and throw an IOError",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdRead",
        "normalized": "Fd-\u003eByteCount-\u003eIO ByteString",
        "package": "unix-bytestring",
        "partial": "Read",
        "signature": "Fd-\u003eByteCount-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdReadBuf",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e into memory. This is exactly equivalent\n to the POSIX.1 \u003ccode\u003eread(2)\u003c/code\u003e system call, except that we return 0\n bytes read if the \u003ccode\u003eByteCount\u003c/code\u003e argument is less than or equal to\n zero (instead of throwing an errno exception). \u003cem\u003eN.B.\u003c/em\u003e, this\n behavior is different from the version in \u003ccode\u003eunix-2.4.2.0\u003c/code\u003e which\n only checks for equality to zero. If there are any errors, then\n they are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdReadBuf"
      },
      "index": {
        "description": "Read data from an Fd into memory This is exactly equivalent to the POSIX.1 read system call except that we return bytes read if the ByteCount argument is less than or equal to zero instead of throwing an errno exception N.B this behavior is different from the version in unix-2.4.2.0 which only checks for equality to zero If there are any errors then they are thrown as IOError exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdReadBuf",
        "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Read Buf",
        "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdReads",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and convert it to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n Throws an exception if this is an invalid descriptor, or EOF has\n been reached.\n\u003c/p\u003e\u003cp\u003eThis version takes a kind of stateful predicate for whether and\n how long to keep retrying. Assume the function is called as\n \u003ccode\u003efdReads f z0 fd n0\u003c/code\u003e. We will attempt to read \u003ccode\u003en0\u003c/code\u003e bytes from\n \u003ccode\u003efd\u003c/code\u003e. If we fall short, then we will call \u003ccode\u003ef len z\u003c/code\u003e where \u003ccode\u003elen\u003c/code\u003e\n is the total number of bytes read so far and \u003ccode\u003ez\u003c/code\u003e is the current\n state (initially \u003ccode\u003ez0\u003c/code\u003e). If it returns \u003ccode\u003eNothing\u003c/code\u003e then we will\n give up and return the current buffer; otherwise we will retry\n with the new state, continuing from where we left off.\n\u003c/p\u003e\u003cp\u003eFor example, to define a function that tries up to \u003ccode\u003en\u003c/code\u003e times,\n we can use:\n\u003c/p\u003e\u003cpre\u003e fdReadUptoNTimes :: Int -\u003e Fd -\u003e ByteCount -\u003e IO ByteString\n fdReadUptoNTimes n0 = fdReads retry n0\n     where\n     retry _ 0 = Nothing\n     retry _ n = Just $! n-1\n\u003c/pre\u003e\u003cp\u003eThe benefit of doing this instead of the naive approach of calling\n \u003ccode\u003e\u003ca\u003efdRead\u003c/a\u003e\u003c/code\u003e repeatedly is that we only need to allocate one byte\n buffer, and trim it once at the end--- whereas the naive approach\n would allocate a buffer, trim it to the number of bytes read,\n and then concatenate with the previous one (another allocation,\n plus copying everything over) for each time around the loop.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.2.1\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "(ByteCount -\u003e a -\u003e Maybe a)-\u003e a-\u003e Fd-\u003e ByteCount-\u003e IO ByteString",
        "fct-type": "function",
        "title": "fdReads"
      },
      "index": {
        "description": "Read data from an Fd and convert it to ByteString Throws an exception if this is an invalid descriptor or EOF has been reached This version takes kind of stateful predicate for whether and how long to keep retrying Assume the function is called as fdReads z0 fd n0 We will attempt to read n0 bytes from fd If we fall short then we will call len where len is the total number of bytes read so far and is the current state initially z0 If it returns Nothing then we will give up and return the current buffer otherwise we will retry with the new state continuing from where we left off For example to define function that tries up to times we can use fdReadUptoNTimes Int Fd ByteCount IO ByteString fdReadUptoNTimes n0 fdReads retry n0 where retry Nothing retry Just n-1 The benefit of doing this instead of the naive approach of calling fdRead repeatedly is that we only need to allocate one byte buffer and trim it once at the end whereas the naive approach would allocate buffer trim it to the number of bytes read and then concatenate with the previous one another allocation plus copying everything over for each time around the loop Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdReads",
        "normalized": "(ByteCount-\u003ea-\u003eMaybe a)-\u003ea-\u003eFd-\u003eByteCount-\u003eIO ByteString",
        "package": "unix-bytestring",
        "partial": "Reads",
        "signature": "(ByteCount-\u003ea-\u003eMaybe a)-\u003ea-\u003eFd-\u003eByteCount-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdReadvBuf",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and scatter it into memory. This is\n exactly equivalent to the XPG4.2 \u003ccode\u003ereadv(2)\u003c/code\u003e system call, except\n that we return 0 bytes read if the \u003ccode\u003eInt\u003c/code\u003e argument is less than\n or equal to zero (instead of throwing an \u003ccode\u003e\u003ca\u003eeINVAL\u003c/a\u003e\u003c/code\u003e exception).\n If there are any errors, then they are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e\n exceptions.\n\u003c/p\u003e\u003cp\u003eTODO: better documentation.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr CIovec-\u003e Int-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdReadvBuf"
      },
      "index": {
        "description": "Read data from an Fd and scatter it into memory This is exactly equivalent to the XPG4.2 readv system call except that we return bytes read if the Int argument is less than or equal to zero instead of throwing an eINVAL exception If there are any errors then they are thrown as IOError exceptions TODO better documentation Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdReadvBuf",
        "normalized": "Fd-\u003ePtr CIovec-\u003eInt-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Readv Buf",
        "signature": "Fd-\u003ePtr CIovec-\u003eInt-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdSeek",
      "description": {
        "fct-descr": "\u003cp\u003eRepositions the offset of the file descriptor according to the\n offset and the seeking mode. This is exactly equivalent to the\n POSIX.1 \u003ccode\u003elseek(2)\u003c/code\u003e system call. If there are any errors, then\n they are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exceptions.\n\u003c/p\u003e\u003cp\u003eThis is the same as \u003ccode\u003e\u003ca\u003efdSeek\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003eunix-2.6.0.1\u003c/code\u003e,\n but provided here for consistency.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.5\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd -\u003e SeekMode -\u003e FileOffset -\u003e IO FileOffset",
        "fct-source": "src/System-Posix-IO-ByteString.html#fdSeek",
        "fct-type": "function",
        "title": "fdSeek"
      },
      "index": {
        "description": "Repositions the offset of the file descriptor according to the offset and the seeking mode This is exactly equivalent to the POSIX.1 lseek system call If there are any errors then they are thrown as IOError exceptions This is the same as fdSeek in unix-2.6.0.1 but provided here for consistency Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdSeek",
        "normalized": "Fd-\u003eSeekMode-\u003eFileOffset-\u003eIO FileOffset",
        "package": "unix-bytestring",
        "partial": "Seek",
        "signature": "Fd-\u003eSeekMode-\u003eFileOffset-\u003eIO FileOffset"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdWrite",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e. The return value is the\n total number of bytes actually written. This is exactly equivalent\n to \u003ccode\u003e\u003ca\u003efdWriteBuf\u003c/a\u003e\u003c/code\u003e; we just convert the \u003ccode\u003eByteString\u003c/code\u003e into its\n underlying \u003ccode\u003ePtr Word8\u003c/code\u003e and \u003ccode\u003eByteCount\u003c/code\u003e components for passing\n to \u003ccode\u003e\u003ca\u003efdWriteBuf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e ByteString-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdWrite"
      },
      "index": {
        "description": "Write ByteString to an Fd The return value is the total number of bytes actually written This is exactly equivalent to fdWriteBuf we just convert the ByteString into its underlying Ptr Word8 and ByteCount components for passing to fdWriteBuf",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdWrite",
        "normalized": "Fd-\u003eByteString-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Write",
        "signature": "Fd-\u003eByteString-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdWriteBuf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data from memory to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e. This is exactly equivalent\n to the POSIX.1 \u003ccode\u003ewrite(2)\u003c/code\u003e system call, except that we return 0\n bytes written if the \u003ccode\u003eByteCount\u003c/code\u003e argument is less than or equal\n to zero (instead of throwing an errno exception). \u003cem\u003eN.B.\u003c/em\u003e, this\n behavior is different from the version in \u003ccode\u003eunix-2.4.2.0\u003c/code\u003e which\n doesn't check the byte count. If there are any errors, then they\n are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdWriteBuf"
      },
      "index": {
        "description": "Write data from memory to an Fd This is exactly equivalent to the POSIX.1 write system call except that we return bytes written if the ByteCount argument is less than or equal to zero instead of throwing an errno exception N.B this behavior is different from the version in unix-2.4.2.0 which doesn check the byte count If there are any errors then they are thrown as IOError exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdWriteBuf",
        "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Write Buf",
        "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdWrites",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a sequence of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e. The return\n value is a triple of: the total number of bytes written, the\n number of bytes written from the first of the remaining strings,\n and the remaining (unwritten) strings. We return this triple\n instead of a pair adjusting the head of the remaining strings\n (i.e., removing the bytes already written) in case there is some\n semantic significance to the way the input is split into chunks.\n\u003c/p\u003e\u003cp\u003eThis version consumes the list lazily and will call \u003ccode\u003e\u003ca\u003efdWrite\u003c/a\u003e\u003c/code\u003e\n once for each \u003ccode\u003eByteString\u003c/code\u003e, thus making \u003cem\u003eO(n)\u003c/em\u003e system calls.\n This laziness allows the early parts of the list to be garbage\n collected and prevents needing to hold the whole list of\n \u003ccode\u003eByteString\u003c/code\u003es in memory at once. Compare against \u003ccode\u003e\u003ca\u003efdWritev\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e [ByteString]-\u003e IO (ByteCount, ByteCount, [ByteString])",
        "fct-type": "function",
        "title": "fdWrites"
      },
      "index": {
        "description": "Write sequence of ByteString to an Fd The return value is triple of the total number of bytes written the number of bytes written from the first of the remaining strings and the remaining unwritten strings We return this triple instead of pair adjusting the head of the remaining strings i.e removing the bytes already written in case there is some semantic significance to the way the input is split into chunks This version consumes the list lazily and will call fdWrite once for each ByteString thus making system calls This laziness allows the early parts of the list to be garbage collected and prevents needing to hold the whole list of ByteString in memory at once Compare against fdWritev",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdWrites",
        "normalized": "Fd-\u003e[ByteString]-\u003eIO(ByteCount,ByteCount,[ByteString])",
        "package": "unix-bytestring",
        "partial": "Writes",
        "signature": "Fd-\u003e[ByteString]-\u003eIO(ByteCount,ByteCount,[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdWritev",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a sequence of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e. The return\n value is the total number of bytes written. Unfortunately the\n \u003ccode\u003ewritev(2)\u003c/code\u003e system call does not provide enough information to\n return the triple that \u003ccode\u003e\u003ca\u003efdWrites\u003c/a\u003e\u003c/code\u003e does.\n\u003c/p\u003e\u003cp\u003eThis version will force the spine of the list, converting each\n \u003ccode\u003eByteString\u003c/code\u003e into an \u003ccode\u003eiovec\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003eCIovec\u003c/a\u003e\u003c/code\u003e), and then call\n \u003ccode\u003e\u003ca\u003efdWritevBuf\u003c/a\u003e\u003c/code\u003e. This means we only make one system call, which\n reduces the overhead of performing context switches. But it also\n means that we must store the whole list of \u003ccode\u003eByteString\u003c/code\u003es in\n memory at once, and that we must perform some allocation and\n conversion. Compare against \u003ccode\u003e\u003ca\u003efdWrites\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e [ByteString]-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdWritev"
      },
      "index": {
        "description": "Write sequence of ByteString to an Fd The return value is the total number of bytes written Unfortunately the writev system call does not provide enough information to return the triple that fdWrites does This version will force the spine of the list converting each ByteString into an iovec see CIovec and then call fdWritevBuf This means we only make one system call which reduces the overhead of performing context switches But it also means that we must store the whole list of ByteString in memory at once and that we must perform some allocation and conversion Compare against fdWrites",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdWritev",
        "normalized": "Fd-\u003e[ByteString]-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Writev",
        "signature": "Fd-\u003e[ByteString]-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:fdWritevBuf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data from memory to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e. This is exactly equivalent\n to the XPG4.2 \u003ccode\u003ewritev(2)\u003c/code\u003e system call, except that we return 0\n bytes written if the \u003ccode\u003eInt\u003c/code\u003e argument is less than or equal to\n zero (instead of throwing an \u003ccode\u003e\u003ca\u003eeINVAL\u003c/a\u003e\u003c/code\u003e exception). If there are\n any errors, then they are thrown as \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exceptions.\n\u003c/p\u003e\u003cp\u003eTODO: better documentation.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.0\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr CIovec-\u003e Int-\u003e IO ByteCount",
        "fct-type": "function",
        "title": "fdWritevBuf"
      },
      "index": {
        "description": "Write data from memory to an Fd This is exactly equivalent to the XPG4.2 writev system call except that we return bytes written if the Int argument is less than or equal to zero instead of throwing an eINVAL exception If there are any errors then they are thrown as IOError exceptions TODO better documentation Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "fdWritevBuf",
        "normalized": "Fd-\u003ePtr CIovec-\u003eInt-\u003eIO ByteCount",
        "package": "unix-bytestring",
        "partial": "Writev Buf",
        "signature": "Fd-\u003ePtr CIovec-\u003eInt-\u003eIO ByteCount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:tryFdPreadBuf",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from a specified position in the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e into memory,\n without altering the position stored in the \u003ccode\u003eFd\u003c/code\u003e. This is a\n variation of \u003ccode\u003e\u003ca\u003efdPreadBuf\u003c/a\u003e\u003c/code\u003e which returns errors with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n instead of throwing exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.3\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e FileOffset-\u003e IO (Either Errno ByteCount)",
        "fct-type": "function",
        "title": "tryFdPreadBuf"
      },
      "index": {
        "description": "Read data from specified position in the Fd into memory without altering the position stored in the Fd This is variation of fdPreadBuf which returns errors with an Either instead of throwing exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "tryFdPreadBuf",
        "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eFileOffset-\u003eIO(Either Errno ByteCount)",
        "package": "unix-bytestring",
        "partial": "Fd Pread Buf",
        "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eFileOffset-\u003eIO(Either Errno ByteCount)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:tryFdPwriteBuf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data from memory to a specified position in the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e,\n but without altering the position stored in the \u003ccode\u003eFd\u003c/code\u003e. This is a\n variation of \u003ccode\u003e\u003ca\u003efdPwriteBuf\u003c/a\u003e\u003c/code\u003e which returns errors with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n instead of throwing exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.3\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e FileOffset-\u003e IO (Either Errno ByteCount)",
        "fct-type": "function",
        "title": "tryFdPwriteBuf"
      },
      "index": {
        "description": "Write data from memory to specified position in the Fd but without altering the position stored in the Fd This is variation of fdPwriteBuf which returns errors with an Either instead of throwing exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "tryFdPwriteBuf",
        "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eFileOffset-\u003eIO(Either Errno ByteCount)",
        "package": "unix-bytestring",
        "partial": "Fd Pwrite Buf",
        "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eFileOffset-\u003eIO(Either Errno ByteCount)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:tryFdReadBuf",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e into memory. This is a variation of\n \u003ccode\u003e\u003ca\u003efdReadBuf\u003c/a\u003e\u003c/code\u003e which returns errors with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e instead of\n throwing exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.3\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e IO (Either Errno ByteCount)",
        "fct-type": "function",
        "title": "tryFdReadBuf"
      },
      "index": {
        "description": "Read data from an Fd into memory This is variation of fdReadBuf which returns errors with an Either instead of throwing exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "tryFdReadBuf",
        "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO(Either Errno ByteCount)",
        "package": "unix-bytestring",
        "partial": "Fd Read Buf",
        "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO(Either Errno ByteCount)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:tryFdReadvBuf",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e and scatter it into memory. This is a\n variation of \u003ccode\u003e\u003ca\u003efdReadvBuf\u003c/a\u003e\u003c/code\u003e which returns errors with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e\n instead of throwing exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.3\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr CIovec-\u003e Int-\u003e IO (Either Errno ByteCount)",
        "fct-type": "function",
        "title": "tryFdReadvBuf"
      },
      "index": {
        "description": "Read data from an Fd and scatter it into memory This is variation of fdReadvBuf which returns errors with an Either instead of throwing exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "tryFdReadvBuf",
        "normalized": "Fd-\u003ePtr CIovec-\u003eInt-\u003eIO(Either Errno ByteCount)",
        "package": "unix-bytestring",
        "partial": "Fd Readv Buf",
        "signature": "Fd-\u003ePtr CIovec-\u003eInt-\u003eIO(Either Errno ByteCount)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:tryFdSeek",
      "description": {
        "fct-descr": "\u003cp\u003eRepositions the offset of the file descriptor according to the\n offset and the seeking mode. This is a variation of \u003ccode\u003e\u003ca\u003efdSeek\u003c/a\u003e\u003c/code\u003e\n which returns errors with an \u003ccode\u003eEither\u003c/code\u003e instead of throwing\n exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.5\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd -\u003e SeekMode -\u003e FileOffset -\u003e IO (Either Errno FileOffset)",
        "fct-source": "src/System-Posix-IO-ByteString.html#tryFdSeek",
        "fct-type": "function",
        "title": "tryFdSeek"
      },
      "index": {
        "description": "Repositions the offset of the file descriptor according to the offset and the seeking mode This is variation of fdSeek which returns errors with an Either instead of throwing exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "tryFdSeek",
        "normalized": "Fd-\u003eSeekMode-\u003eFileOffset-\u003eIO(Either Errno FileOffset)",
        "package": "unix-bytestring",
        "partial": "Fd Seek",
        "signature": "Fd-\u003eSeekMode-\u003eFileOffset-\u003eIO(Either Errno FileOffset)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:tryFdWriteBuf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data from memory to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e. This is a variation of\n \u003ccode\u003e\u003ca\u003efdWriteBuf\u003c/a\u003e\u003c/code\u003e which returns errors with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e instead of\n throwing exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.3\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr Word8-\u003e ByteCount-\u003e IO (Either Errno ByteCount)",
        "fct-type": "function",
        "title": "tryFdWriteBuf"
      },
      "index": {
        "description": "Write data from memory to an Fd This is variation of fdWriteBuf which returns errors with an Either instead of throwing exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "tryFdWriteBuf",
        "normalized": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO(Either Errno ByteCount)",
        "package": "unix-bytestring",
        "partial": "Fd Write Buf",
        "signature": "Fd-\u003ePtr Word-\u003eByteCount-\u003eIO(Either Errno ByteCount)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-IO-ByteString.html#v:tryFdWritevBuf",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data from memory to an \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e. This is a variation of\n \u003ccode\u003e\u003ca\u003efdWritevBuf\u003c/a\u003e\u003c/code\u003e which returns errors with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e instead of\n throwing exceptions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 0.3.3\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "System.Posix.IO.ByteString",
        "fct-package": "unix-bytestring",
        "fct-signature": "Fd-\u003e Ptr CIovec-\u003e Int-\u003e IO (Either Errno ByteCount)",
        "fct-type": "function",
        "title": "tryFdWritevBuf"
      },
      "index": {
        "description": "Write data from memory to an Fd This is variation of fdWritevBuf which returns errors with an Either instead of throwing exceptions Since",
        "hierarchy": "System Posix IO ByteString",
        "module": "System.Posix.IO.ByteString",
        "name": "tryFdWritevBuf",
        "normalized": "Fd-\u003ePtr CIovec-\u003eInt-\u003eIO(Either Errno ByteCount)",
        "package": "unix-bytestring",
        "partial": "Fd Writev Buf",
        "signature": "Fd-\u003ePtr CIovec-\u003eInt-\u003eIO(Either Errno ByteCount)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-Types-Iovec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImports the C \u003ccode\u003estruct iovec\u003c/code\u003e type and provides conversion between\n \u003ccode\u003e\u003ca\u003eCIovec\u003c/a\u003e\u003c/code\u003es and strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Types.Iovec",
        "fct-package": "unix-bytestring",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Types-Iovec.html",
        "fct-type": "module",
        "title": "Iovec"
      },
      "index": {
        "description": "Imports the struct iovec type and provides conversion between CIovec and strict ByteString",
        "hierarchy": "System Posix Types Iovec",
        "module": "System.Posix.Types.Iovec",
        "name": "Iovec",
        "normalized": "",
        "package": "unix-bytestring",
        "partial": "Iovec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-Types-Iovec.html#t:CIovec",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell type representing the C \u003ccode\u003estruct iovec\u003c/code\u003e type. This is\n exactly like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e except there's actually struct\n definition on the C side.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Types.Iovec",
        "fct-package": "unix-bytestring",
        "fct-signature": "data",
        "fct-source": "src/System-Posix-Types-Iovec.html#CIovec",
        "fct-type": "data",
        "title": "CIovec"
      },
      "index": {
        "description": "Haskell type representing the struct iovec type This is exactly like CStringLen except there actually struct definition on the side",
        "hierarchy": "System Posix Types Iovec",
        "module": "System.Posix.Types.Iovec",
        "name": "CIovec",
        "normalized": "",
        "package": "unix-bytestring",
        "partial": "CIovec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-Types-Iovec.html#v:CIovec",
      "description": {
        "fct-module": "System.Posix.Types.Iovec",
        "fct-package": "unix-bytestring",
        "fct-signature": "CIovec",
        "fct-source": "src/System-Posix-Types-Iovec.html#CIovec",
        "fct-type": "function",
        "title": "CIovec"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Types Iovec",
        "module": "System.Posix.Types.Iovec",
        "name": "CIovec",
        "normalized": "",
        "package": "unix-bytestring",
        "partial": "CIovec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-Types-Iovec.html#v:iov_base",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Posix.Types.Iovec",
        "fct-package": "unix-bytestring",
        "fct-signature": "!(Ptr Word8)",
        "fct-source": "src/System-Posix-Types-Iovec.html#CIovec",
        "fct-type": "function",
        "title": "iov_base"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Types Iovec",
        "module": "System.Posix.Types.Iovec",
        "name": "iov_base",
        "normalized": "",
        "package": "unix-bytestring",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-Types-Iovec.html#v:iov_len",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Posix.Types.Iovec",
        "fct-package": "unix-bytestring",
        "fct-signature": "!CSize",
        "fct-source": "src/System-Posix-Types-Iovec.html#CIovec",
        "fct-type": "function",
        "title": "iov_len"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix Types Iovec",
        "module": "System.Posix.Types.Iovec",
        "name": "iov_len",
        "normalized": "",
        "package": "unix-bytestring",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-Types-Iovec.html#v:touchByteString",
      "description": {
        "fct-descr": "\u003cp\u003eKeep the \u003ccode\u003eByteString\u003c/code\u003e alive. See \u003ccode\u003e\u003ca\u003eunsafeByteString2CIovec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Types.Iovec",
        "fct-package": "unix-bytestring",
        "fct-signature": "ByteString -\u003e IO ()",
        "fct-source": "src/System-Posix-Types-Iovec.html#touchByteString",
        "fct-type": "function",
        "title": "touchByteString"
      },
      "index": {
        "description": "Keep the ByteString alive See unsafeByteString2CIovec",
        "hierarchy": "System Posix Types Iovec",
        "module": "System.Posix.Types.Iovec",
        "name": "touchByteString",
        "normalized": "ByteString-\u003eIO()",
        "package": "unix-bytestring",
        "partial": "Byte String",
        "signature": "ByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-Types-Iovec.html#v:unsafeByteString2CIovec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1) construction\u003c/em\u003e Convert a \u003ccode\u003eByteString\u003c/code\u003e into an \u003ccode\u003eCIovec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e in two ways:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e After calling this function the \u003ccode\u003eCIovec\u003c/code\u003e shares the underlying\n byte buffer with the original \u003ccode\u003eByteString\u003c/code\u003e. Thus, modifying the\n \u003ccode\u003eCIovec\u003c/code\u003e either in C or using poke will cause the contents of\n the \u003ccode\u003eByteString\u003c/code\u003e to change, breaking referential transparency.\n Other \u003ccode\u003eByteStrings\u003c/code\u003e created by sharing (such as those produced\n via \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e) will also reflect these changes.\n\u003c/li\u003e\u003cli\u003e Also, even though the \u003ccode\u003eCIovec\u003c/code\u003e shares the underlying byte\n buffer, it does so in a way that will not keep the original\n \u003ccode\u003eByteString\u003c/code\u003e alive with respect to garbage collection. Thus, the\n byte buffer could be collected out from under the \u003ccode\u003eCIovec\u003c/code\u003e. To\n prevent this, you must use \u003ccode\u003e\u003ca\u003etouchByteString\u003c/a\u003e\u003c/code\u003e after the last point\n where the \u003ccode\u003eCIovec\u003c/code\u003e is needed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Posix.Types.Iovec",
        "fct-package": "unix-bytestring",
        "fct-signature": "ByteString -\u003e CIovec",
        "fct-source": "src/System-Posix-Types-Iovec.html#unsafeByteString2CIovec",
        "fct-type": "function",
        "title": "unsafeByteString2CIovec"
      },
      "index": {
        "description": "construction Convert ByteString into an CIovec This function is unsafe in two ways After calling this function the CIovec shares the underlying byte buffer with the original ByteString Thus modifying the CIovec either in or using poke will cause the contents of the ByteString to change breaking referential transparency Other ByteStrings created by sharing such as those produced via take or drop will also reflect these changes Also even though the CIovec shares the underlying byte buffer it does so in way that will not keep the original ByteString alive with respect to garbage collection Thus the byte buffer could be collected out from under the CIovec To prevent this you must use touchByteString after the last point where the CIovec is needed",
        "hierarchy": "System Posix Types Iovec",
        "module": "System.Posix.Types.Iovec",
        "name": "unsafeByteString2CIovec",
        "normalized": "ByteString-\u003eCIovec",
        "package": "unix-bytestring",
        "partial": "Byte String CIovec",
        "signature": "ByteString-\u003eCIovec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-Types-Iovec.html#v:unsafeUseAsCIovec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring\n a \u003ccode\u003eCIovec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does zero copying, and merely unwraps a \u003ccode\u003eByteString\u003c/code\u003e\n to appear as an \u003ccode\u003eCIovec\u003c/code\u003e. It is \u003cem\u003eunsafe\u003c/em\u003e in the same way as\n \u003ccode\u003e\u003ca\u003eunsafeByteString2CIovec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Types.Iovec",
        "fct-package": "unix-bytestring",
        "fct-signature": "ByteString -\u003e (CIovec -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-Posix-Types-Iovec.html#unsafeUseAsCIovec",
        "fct-type": "function",
        "title": "unsafeUseAsCIovec"
      },
      "index": {
        "description": "construction Use ByteString with function requiring CIovec This function does zero copying and merely unwraps ByteString to appear as an CIovec It is unsafe in the same way as unsafeByteString2CIovec",
        "hierarchy": "System Posix Types Iovec",
        "module": "System.Posix.Types.Iovec",
        "name": "unsafeUseAsCIovec",
        "normalized": "ByteString-\u003e(CIovec-\u003eIO a)-\u003eIO a",
        "package": "unix-bytestring",
        "partial": "Use As CIovec",
        "signature": "ByteString-\u003e(CIovec-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unix-bytestring/docs/System-Posix-Types-Iovec.html#v:useAsCIovec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring\n a \u003ccode\u003eCIovec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003euseAsCString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003euseAsCStringLen\u003c/a\u003e\u003c/code\u003e, this function\n makes a copy of the original \u003ccode\u003eByteString\u003c/code\u003e via \u003ccode\u003ememcpy(3)\u003c/code\u003e. The\n copy will be freed automatically. See \u003ccode\u003e\u003ca\u003eunsafeUseAsCIovec\u003c/a\u003e\u003c/code\u003e for a\n zero-copying version.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Types.Iovec",
        "fct-package": "unix-bytestring",
        "fct-signature": "ByteString -\u003e (CIovec -\u003e IO a) -\u003e IO a",
        "fct-source": "src/System-Posix-Types-Iovec.html#useAsCIovec",
        "fct-type": "function",
        "title": "useAsCIovec"
      },
      "index": {
        "description": "construction Use ByteString with function requiring CIovec As with useAsCString and useAsCStringLen this function makes copy of the original ByteString via memcpy The copy will be freed automatically See unsafeUseAsCIovec for zero-copying version",
        "hierarchy": "System Posix Types Iovec",
        "module": "System.Posix.Types.Iovec",
        "name": "useAsCIovec",
        "normalized": "ByteString-\u003e(CIovec-\u003eIO a)-\u003eIO a",
        "package": "unix-bytestring",
        "partial": "As CIovec",
        "signature": "ByteString-\u003e(CIovec-\u003eIO a)-\u003eIO a"
      }
    }
  }
]