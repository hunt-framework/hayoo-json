[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows access to the BSD sysctl(3) interface via the Haskell FFI.\n\u003c/p\u003e\u003cp\u003eConvenience functions to read and write the usual sysctl types are provided,\n as well as more advanced functions to handle binary values given a suitable\n \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance.  It is also possible to retrieve data whose size changes\n at runtime with the \u003ccode\u003e\u003ca\u003esysctlPeekArray\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eOn some platforms, there are sysctl nodes that accept parameters via\n additional components in the OID (see for instance the \"kern.proc.pid\"\n sysctl described in sysctl(3) on FreeBSD).  The \u003ccode\u003e\u003ca\u003esysctlNameToOidArgs\u003c/a\u003e\u003c/code\u003e\n function makes it easy to query such nodes as well.\n\u003c/p\u003e\u003cp\u003eNodes may be queried either by their OID as a list of integers, by their\n binary OID for maximum speed, or by their names on platforms that support it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "module",
        "fct-source": "src/System-BSD-Sysctl.html",
        "fct-type": "module",
        "title": "Sysctl"
      },
      "index": {
        "description": "This module allows access to the BSD sysctl interface via the Haskell FFI Convenience functions to read and write the usual sysctl types are provided as well as more advanced functions to handle binary values given suitable Storable instance It is also possible to retrieve data whose size changes at runtime with the sysctlPeekArray function On some platforms there are sysctl nodes that accept parameters via additional components in the OID see for instance the kern.proc.pid sysctl described in sysctl on FreeBSD The sysctlNameToOidArgs function makes it easy to query such nodes as well Nodes may be queried either by their OID as list of integers by their binary OID for maximum speed or by their names on platforms that support it",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "Sysctl",
        "normalized": "",
        "package": "bsd-sysctl",
        "partial": "Sysctl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#t:OID",
      "description": {
        "fct-descr": "\u003cp\u003eAn efficient representation of a sysctl \u003ccode\u003e\u003ca\u003eOID\u003c/a\u003e\u003c/code\u003e for maximum performance.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "data",
        "fct-source": "src/System-BSD-Sysctl.html#OID",
        "fct-type": "data",
        "title": "OID"
      },
      "index": {
        "description": "An efficient representation of sysctl OID for maximum performance",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "OID",
        "normalized": "",
        "package": "bsd-sysctl",
        "partial": "OID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#t:SysctlKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of types that can be used to identify a sysctl node.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "class",
        "fct-source": "src/System-BSD-Sysctl.html#SysctlKey",
        "fct-type": "class",
        "title": "SysctlKey"
      },
      "index": {
        "description": "The class of types that can be used to identify sysctl node",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "SysctlKey",
        "normalized": "",
        "package": "bsd-sysctl",
        "partial": "Sysctl Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlExtractOid",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the list of integers contained in an \u003ccode\u003e\u003ca\u003eOID\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "OID -\u003e IO [Int32]",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlExtractOid",
        "fct-type": "function",
        "title": "sysctlExtractOid"
      },
      "index": {
        "description": "Extract the list of integers contained in an OID",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlExtractOid",
        "normalized": "OID-\u003eIO[Int]",
        "package": "bsd-sysctl",
        "partial": "Extract Oid",
        "signature": "OID-\u003eIO[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlNameToOid",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eOID\u003c/a\u003e\u003c/code\u003e corresponding to a sysctl name.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "String -\u003e IO OID",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlNameToOid",
        "fct-type": "function",
        "title": "sysctlNameToOid"
      },
      "index": {
        "description": "Get the OID corresponding to sysctl name",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlNameToOid",
        "normalized": "String-\u003eIO OID",
        "package": "bsd-sysctl",
        "partial": "Name To Oid",
        "signature": "String-\u003eIO OID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlNameToOidArgs",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esysctlNameToOid\u003c/a\u003e\u003c/code\u003e, but allows to provide a list of\n additional integers to append to the OID, for specific sysctl\n nodes that support parameters this way.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "String -\u003e [Int32] -\u003e IO OID",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlNameToOidArgs",
        "fct-type": "function",
        "title": "sysctlNameToOidArgs"
      },
      "index": {
        "description": "Like sysctlNameToOid but allows to provide list of additional integers to append to the OID for specific sysctl nodes that support parameters this way",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlNameToOidArgs",
        "normalized": "String-\u003e[Int]-\u003eIO OID",
        "package": "bsd-sysctl",
        "partial": "Name To Oid Args",
        "signature": "String-\u003e[Int]-\u003eIO OID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlPeek",
      "description": {
        "fct-descr": "\u003cp\u003eRead a storable value from a sysctl node.\n This is useful to read binary values such as C structures, otherwise\n the ad-hoc reading functions should be used instead.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e IO a",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlPeek",
        "fct-type": "function",
        "title": "sysctlPeek"
      },
      "index": {
        "description": "Read storable value from sysctl node This is useful to read binary values such as structures otherwise the ad-hoc reading functions should be used instead",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlPeek",
        "normalized": "a-\u003eIO b",
        "package": "bsd-sysctl",
        "partial": "Peek",
        "signature": "k-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlPeekArray",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esysctlPeek\u003c/a\u003e\u003c/code\u003e, but allows to retrieve a list of elements whose\n length can possibly change at runtime.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e IO [a]",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlPeekArray",
        "fct-type": "function",
        "title": "sysctlPeekArray"
      },
      "index": {
        "description": "Like sysctlPeek but allows to retrieve list of elements whose length can possibly change at runtime",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlPeekArray",
        "normalized": "a-\u003eIO[b]",
        "package": "bsd-sysctl",
        "partial": "Peek Array",
        "signature": "k-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlPoke",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a storable value to a sysctl node.\n This is useful to write binary values such as C structures, otherwise\n the ad-hoc writing functions should be used instead.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e a -\u003e IO ()",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlPoke",
        "fct-type": "function",
        "title": "sysctlPoke"
      },
      "index": {
        "description": "Write storable value to sysctl node This is useful to write binary values such as structures otherwise the ad-hoc writing functions should be used instead",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlPoke",
        "normalized": "a-\u003eb-\u003eIO()",
        "package": "bsd-sysctl",
        "partial": "Poke",
        "signature": "k-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlPrepareOid",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare an \u003ccode\u003e\u003ca\u003eOID\u003c/a\u003e\u003c/code\u003e for later use.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "[Int32] -\u003e IO OID",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlPrepareOid",
        "fct-type": "function",
        "title": "sysctlPrepareOid"
      },
      "index": {
        "description": "Prepare an OID for later use",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlPrepareOid",
        "normalized": "[Int]-\u003eIO OID",
        "package": "bsd-sysctl",
        "partial": "Prepare Oid",
        "signature": "[Int]-\u003eIO OID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlReadInt",
      "description": {
        "fct-descr": "\u003cp\u003eRead a signed integer from a sysctl (the C int type).\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e IO Int32",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlReadInt",
        "fct-type": "function",
        "title": "sysctlReadInt"
      },
      "index": {
        "description": "Read signed integer from sysctl the int type",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlReadInt",
        "normalized": "a-\u003eIO Int",
        "package": "bsd-sysctl",
        "partial": "Read Int",
        "signature": "k-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlReadLong",
      "description": {
        "fct-descr": "\u003cp\u003eRead a signed long integer from a sysctl (the C long type).\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e IO Int32",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlReadLong",
        "fct-type": "function",
        "title": "sysctlReadLong"
      },
      "index": {
        "description": "Read signed long integer from sysctl the long type",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlReadLong",
        "normalized": "a-\u003eIO Int",
        "package": "bsd-sysctl",
        "partial": "Read Long",
        "signature": "k-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlReadQuad",
      "description": {
        "fct-descr": "\u003cp\u003eRead a signed 64-bit integer from a sysctl.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e IO Int64",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlReadQuad",
        "fct-type": "function",
        "title": "sysctlReadQuad"
      },
      "index": {
        "description": "Read signed bit integer from sysctl",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlReadQuad",
        "normalized": "a-\u003eIO Int",
        "package": "bsd-sysctl",
        "partial": "Read Quad",
        "signature": "k-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlReadString",
      "description": {
        "fct-descr": "\u003cp\u003eRead a string from a sysctl.  If the string can possibly change with\n time, use \u003ccode\u003e\u003ca\u003esysctlPeekArray\u003c/a\u003e\u003c/code\u003e for characters instead.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e IO String",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlReadString",
        "fct-type": "function",
        "title": "sysctlReadString"
      },
      "index": {
        "description": "Read string from sysctl If the string can possibly change with time use sysctlPeekArray for characters instead",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlReadString",
        "normalized": "a-\u003eIO String",
        "package": "bsd-sysctl",
        "partial": "Read String",
        "signature": "k-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlReadUInt",
      "description": {
        "fct-descr": "\u003cp\u003eRead an unsigned integer from a sysctl (the C unsigned int type).\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e IO Word32",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlReadUInt",
        "fct-type": "function",
        "title": "sysctlReadUInt"
      },
      "index": {
        "description": "Read an unsigned integer from sysctl the unsigned int type",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlReadUInt",
        "normalized": "a-\u003eIO Word",
        "package": "bsd-sysctl",
        "partial": "Read UInt",
        "signature": "k-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlReadULong",
      "description": {
        "fct-descr": "\u003cp\u003eRead an unsigned long integer from a sysctl (the C unsigned long type).\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e IO Word32",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlReadULong",
        "fct-type": "function",
        "title": "sysctlReadULong"
      },
      "index": {
        "description": "Read an unsigned long integer from sysctl the unsigned long type",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlReadULong",
        "normalized": "a-\u003eIO Word",
        "package": "bsd-sysctl",
        "partial": "Read ULong",
        "signature": "k-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlReadUQuad",
      "description": {
        "fct-descr": "\u003cp\u003eRead an unsigned 64-bit integer from a sysctl.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e IO Word64",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlReadUQuad",
        "fct-type": "function",
        "title": "sysctlReadUQuad"
      },
      "index": {
        "description": "Read an unsigned bit integer from sysctl",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlReadUQuad",
        "normalized": "a-\u003eIO Word",
        "package": "bsd-sysctl",
        "partial": "Read UQuad",
        "signature": "k-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlWriteInt",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a signed integer to a sysctl (the C int type).\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e Int32 -\u003e IO ()",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlWriteInt",
        "fct-type": "function",
        "title": "sysctlWriteInt"
      },
      "index": {
        "description": "Write signed integer to sysctl the int type",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlWriteInt",
        "normalized": "a-\u003eInt-\u003eIO()",
        "package": "bsd-sysctl",
        "partial": "Write Int",
        "signature": "k-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlWriteLong",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a signed long integer to a sysctl (the C long type).\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e Int32 -\u003e IO ()",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlWriteLong",
        "fct-type": "function",
        "title": "sysctlWriteLong"
      },
      "index": {
        "description": "Write signed long integer to sysctl the long type",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlWriteLong",
        "normalized": "a-\u003eInt-\u003eIO()",
        "package": "bsd-sysctl",
        "partial": "Write Long",
        "signature": "k-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlWriteQuad",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a signed 64-bit integer to a sysctl.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e Int64 -\u003e IO ()",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlWriteQuad",
        "fct-type": "function",
        "title": "sysctlWriteQuad"
      },
      "index": {
        "description": "Write signed bit integer to sysctl",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlWriteQuad",
        "normalized": "a-\u003eInt-\u003eIO()",
        "package": "bsd-sysctl",
        "partial": "Write Quad",
        "signature": "k-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlWriteString",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to a sysctl.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e String -\u003e IO ()",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlWriteString",
        "fct-type": "function",
        "title": "sysctlWriteString"
      },
      "index": {
        "description": "Write string to sysctl",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlWriteString",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "bsd-sysctl",
        "partial": "Write String",
        "signature": "k-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlWriteUInt",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an unsigned integer to a sysctl (the C unsigned int type).\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e Word32 -\u003e IO ()",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlWriteUInt",
        "fct-type": "function",
        "title": "sysctlWriteUInt"
      },
      "index": {
        "description": "Write an unsigned integer to sysctl the unsigned int type",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlWriteUInt",
        "normalized": "a-\u003eWord-\u003eIO()",
        "package": "bsd-sysctl",
        "partial": "Write UInt",
        "signature": "k-\u003eWord-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlWriteULong",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an unsigned long integer to a sysctl (the C unsigned long type).\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e Word32 -\u003e IO ()",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlWriteULong",
        "fct-type": "function",
        "title": "sysctlWriteULong"
      },
      "index": {
        "description": "Write an unsigned long integer to sysctl the unsigned long type",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlWriteULong",
        "normalized": "a-\u003eWord-\u003eIO()",
        "package": "bsd-sysctl",
        "partial": "Write ULong",
        "signature": "k-\u003eWord-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bsd-sysctl/docs/System-BSD-Sysctl.html#v:sysctlWriteUQuad",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an unsigned 64-bit integer to a sysctl.\n\u003c/p\u003e",
        "fct-module": "System.BSD.Sysctl",
        "fct-package": "bsd-sysctl",
        "fct-signature": "k -\u003e Word64 -\u003e IO ()",
        "fct-source": "src/System-BSD-Sysctl.html#sysctlWriteUQuad",
        "fct-type": "function",
        "title": "sysctlWriteUQuad"
      },
      "index": {
        "description": "Write an unsigned bit integer to sysctl",
        "hierarchy": "System BSD Sysctl",
        "module": "System.BSD.Sysctl",
        "name": "sysctlWriteUQuad",
        "normalized": "a-\u003eWord-\u003eIO()",
        "package": "bsd-sysctl",
        "partial": "Write UQuad",
        "signature": "k-\u003eWord-\u003eIO()"
      }
    }
  }
]