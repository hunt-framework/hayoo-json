[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXAttr provides bindings to the glibc functions for reading and\nmanipulating extended attributes (\u003ccode\u003esetxattr\u003c/code\u003e, \u003ccode\u003egetxattr\u003c/code\u003e, \u003ccode\u003elistxattr\u003c/code\u003e,\n...).  Each function in this module has two variants: the one with the\nname prefixed by \"l\" and \"fd\".  Both of these are identical to the\noriginal version except that the \"l\"-variant does not follow\nsymbolic link but acts on the link itself, and the \"fd\"-variant take\na file descriptor as argument rather than a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "module",
        "fct-source": "src/System-Linux-XAttr.html",
        "fct-type": "module",
        "title": "XAttr"
      },
      "index": {
        "description": "XAttr provides bindings to the glibc functions for reading and manipulating extended attributes setxattr getxattr listxattr Each function in this module has two variants the one with the name prefixed by and fd Both of these are identical to the original version except that the variant does not follow symbolic link but acts on the link itself and the fd variant take file descriptor as argument rather than FilePath",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "XAttr",
        "normalized": "",
        "package": "linux-xattr",
        "partial": "XAttr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:createXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute already exists\n fail and set errno to EEXIST.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#createXAttr",
        "fct-type": "function",
        "title": "createXAttr"
      },
      "index": {
        "description": "Identical to setXAttr but if the attribute already exists fail and set errno to EEXIST",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "createXAttr",
        "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdCreateXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003efdSetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute already exists\n fail and set errno to EEXIST.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "Fd -\u003e String -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#fdCreateXAttr",
        "fct-type": "function",
        "title": "fdCreateXAttr"
      },
      "index": {
        "description": "Identical to fdSetXAttr but if the attribute already exists fail and set errno to EEXIST",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "fdCreateXAttr",
        "normalized": "Fd-\u003eString-\u003eByteString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "Create XAttr",
        "signature": "Fd-\u003eString-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdGetXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of an extended attribute.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "Fd -\u003e String -\u003e IO ByteString",
        "fct-source": "src/System-Linux-XAttr.html#fdGetXAttr",
        "fct-type": "function",
        "title": "fdGetXAttr"
      },
      "index": {
        "description": "Get the value of an extended attribute",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "fdGetXAttr",
        "normalized": "Fd-\u003eString-\u003eIO ByteString",
        "package": "linux-xattr",
        "partial": "Get XAttr",
        "signature": "Fd-\u003eString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdListXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eGet the list of attribute names associated with the given file\n descriptor.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "Fd -\u003e IO [String]",
        "fct-source": "src/System-Linux-XAttr.html#fdListXAttr",
        "fct-type": "function",
        "title": "fdListXAttr"
      },
      "index": {
        "description": "Get the list of attribute names associated with the given file descriptor",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "fdListXAttr",
        "normalized": "Fd-\u003eIO[String]",
        "package": "linux-xattr",
        "partial": "List XAttr",
        "signature": "Fd-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdRemoveXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an extended attribute from the given file descriptor.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "Fd -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#fdRemoveXAttr",
        "fct-type": "function",
        "title": "fdRemoveXAttr"
      },
      "index": {
        "description": "Remove an extended attribute from the given file descriptor",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "fdRemoveXAttr",
        "normalized": "Fd-\u003eString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "Remove XAttr",
        "signature": "Fd-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdReplaceXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003efdSetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute does not exist\n fail and set errno to ENOATTR.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "Fd -\u003e String -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#fdReplaceXAttr",
        "fct-type": "function",
        "title": "fdReplaceXAttr"
      },
      "index": {
        "description": "Identical to fdSetXAttr but if the attribute does not exist fail and set errno to ENOATTR",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "fdReplaceXAttr",
        "normalized": "Fd-\u003eString-\u003eByteString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "Replace XAttr",
        "signature": "Fd-\u003eString-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdSetXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eSet the value of an extended attribute.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "Fd -\u003e String -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#fdSetXAttr",
        "fct-type": "function",
        "title": "fdSetXAttr"
      },
      "index": {
        "description": "Set the value of an extended attribute",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "fdSetXAttr",
        "normalized": "Fd-\u003eString-\u003eByteString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "Set XAttr",
        "signature": "Fd-\u003eString-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:getXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of an extended attribute.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath-\u003e String-\u003e IO ByteString",
        "fct-type": "function",
        "title": "getXAttr"
      },
      "index": {
        "description": "Get the value of an extended attribute",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "getXAttr",
        "normalized": "FilePath-\u003eString-\u003eIO ByteString",
        "package": "linux-xattr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lCreateXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003elSetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute already exists\n fail and set errno to EEXIST.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#lCreateXAttr",
        "fct-type": "function",
        "title": "lCreateXAttr"
      },
      "index": {
        "description": "Identical to lSetXAttr but if the attribute already exists fail and set errno to EEXIST",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "lCreateXAttr",
        "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "Create XAttr",
        "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lGetXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of an extended attribute (do not follow symbolic\n links).\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath -\u003e String -\u003e IO ByteString",
        "fct-source": "src/System-Linux-XAttr.html#lGetXAttr",
        "fct-type": "function",
        "title": "lGetXAttr"
      },
      "index": {
        "description": "Get the value of an extended attribute do not follow symbolic links",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "lGetXAttr",
        "normalized": "FilePath-\u003eString-\u003eIO ByteString",
        "package": "linux-xattr",
        "partial": "Get XAttr",
        "signature": "FilePath-\u003eString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lListXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eGet the list of attribute names associated with the given\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (do not follow symbolic links).\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath -\u003e IO [String]",
        "fct-source": "src/System-Linux-XAttr.html#lListXAttr",
        "fct-type": "function",
        "title": "lListXAttr"
      },
      "index": {
        "description": "Get the list of attribute names associated with the given FilePath do not follow symbolic links",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "lListXAttr",
        "normalized": "FilePath-\u003eIO[String]",
        "package": "linux-xattr",
        "partial": "List XAttr",
        "signature": "FilePath-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lRemoveXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an extended attribute from the given \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (do not follow\n symbolic links).\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#lRemoveXAttr",
        "fct-type": "function",
        "title": "lRemoveXAttr"
      },
      "index": {
        "description": "Remove an extended attribute from the given FilePath do not follow symbolic links",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "lRemoveXAttr",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "Remove XAttr",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lReplaceXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003elSetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute does not exist\n fail and set errno to ENOATTR.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#lReplaceXAttr",
        "fct-type": "function",
        "title": "lReplaceXAttr"
      },
      "index": {
        "description": "Identical to lSetXAttr but if the attribute does not exist fail and set errno to ENOATTR",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "lReplaceXAttr",
        "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "Replace XAttr",
        "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lSetXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eSet the value of an extended attribute (do not follow symbolic\n links).\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#lSetXAttr",
        "fct-type": "function",
        "title": "lSetXAttr"
      },
      "index": {
        "description": "Set the value of an extended attribute do not follow symbolic links",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "lSetXAttr",
        "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "Set XAttr",
        "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:listXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eGet the list of attribute names associated with the given\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath-\u003e IO [String]",
        "fct-type": "function",
        "title": "listXAttr"
      },
      "index": {
        "description": "Get the list of attribute names associated with the given FilePath",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "listXAttr",
        "normalized": "FilePath-\u003eIO[String]",
        "package": "linux-xattr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:removeXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an extended attribute from the given \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "removeXAttr"
      },
      "index": {
        "description": "Remove an extended attribute from the given FilePath",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "removeXAttr",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:replaceXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute does not exist\n fail and set errno to ENOATTR.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Linux-XAttr.html#replaceXAttr",
        "fct-type": "function",
        "title": "replaceXAttr"
      },
      "index": {
        "description": "Identical to setXAttr but if the attribute does not exist fail and set errno to ENOATTR",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "replaceXAttr",
        "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:setXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eSet the value of an extended attribute.\n\u003c/p\u003e",
        "fct-module": "System.Linux.XAttr",
        "fct-package": "linux-xattr",
        "fct-signature": "FilePath-\u003e String-\u003e ByteString-\u003e IO ()",
        "fct-type": "function",
        "title": "setXAttr"
      },
      "index": {
        "description": "Set the value of an extended attribute",
        "hierarchy": "System Linux XAttr",
        "module": "System.Linux.XAttr",
        "name": "setXAttr",
        "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
        "package": "linux-xattr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()"
      }
    }
  }
]