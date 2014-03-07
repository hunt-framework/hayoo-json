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
        "word": "linux-xattr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXAttr provides bindings to the glibc functions for reading and\nmanipulating extended attributes (\u003ccode\u003esetxattr\u003c/code\u003e, \u003ccode\u003egetxattr\u003c/code\u003e, \u003ccode\u003elistxattr\u003c/code\u003e,\n...).  Each function in this module has two variants: the one with the\nname prefixed by \"l\" and \"fd\".  Both of these are identical to the\noriginal version except that the \"l\"-variant does not follow\nsymbolic link but acts on the link itself, and the \"fd\"-variant take\na file descriptor as argument rather than a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Linux.XAttr",
          "name": "XAttr",
          "package": "linux-xattr",
          "source": "src/System-Linux-XAttr.html",
          "type": "module"
        },
        "index": {
          "description": "XAttr provides bindings to the glibc functions for reading and manipulating extended attributes setxattr getxattr listxattr Each function in this module has two variants the one with the name prefixed by and fd Both of these are identical to the original version except that the variant does not follow symbolic link but acts on the link itself and the fd variant take file descriptor as argument rather than FilePath",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "XAttr",
          "package": "linux-xattr",
          "partial": "XAttr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute already exists\n fail and set errno to EEXIST.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "createXAttr",
          "package": "linux-xattr",
          "signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#createXAttr",
          "type": "function"
        },
        "index": {
          "description": "Identical to setXAttr but if the attribute already exists fail and set errno to EEXIST",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "createXAttr",
          "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:createXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003efdSetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute already exists\n fail and set errno to EEXIST.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "fdCreateXAttr",
          "package": "linux-xattr",
          "signature": "Fd -\u003e String -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#fdCreateXAttr",
          "type": "function"
        },
        "index": {
          "description": "Identical to fdSetXAttr but if the attribute already exists fail and set errno to EEXIST",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "fdCreateXAttr",
          "normalized": "Fd-\u003eString-\u003eByteString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "Create XAttr",
          "signature": "Fd-\u003eString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdCreateXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of an extended attribute.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "fdGetXAttr",
          "package": "linux-xattr",
          "signature": "Fd -\u003e String -\u003e IO ByteString",
          "source": "src/System-Linux-XAttr.html#fdGetXAttr",
          "type": "function"
        },
        "index": {
          "description": "Get the value of an extended attribute",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "fdGetXAttr",
          "normalized": "Fd-\u003eString-\u003eIO ByteString",
          "package": "linux-xattr",
          "partial": "Get XAttr",
          "signature": "Fd-\u003eString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdGetXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of attribute names associated with the given file\n descriptor.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "fdListXAttr",
          "package": "linux-xattr",
          "signature": "Fd -\u003e IO [String]",
          "source": "src/System-Linux-XAttr.html#fdListXAttr",
          "type": "function"
        },
        "index": {
          "description": "Get the list of attribute names associated with the given file descriptor",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "fdListXAttr",
          "normalized": "Fd-\u003eIO[String]",
          "package": "linux-xattr",
          "partial": "List XAttr",
          "signature": "Fd-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdListXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an extended attribute from the given file descriptor.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "fdRemoveXAttr",
          "package": "linux-xattr",
          "signature": "Fd -\u003e String -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#fdRemoveXAttr",
          "type": "function"
        },
        "index": {
          "description": "Remove an extended attribute from the given file descriptor",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "fdRemoveXAttr",
          "normalized": "Fd-\u003eString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "Remove XAttr",
          "signature": "Fd-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdRemoveXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003efdSetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute does not exist\n fail and set errno to ENOATTR.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "fdReplaceXAttr",
          "package": "linux-xattr",
          "signature": "Fd -\u003e String -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#fdReplaceXAttr",
          "type": "function"
        },
        "index": {
          "description": "Identical to fdSetXAttr but if the attribute does not exist fail and set errno to ENOATTR",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "fdReplaceXAttr",
          "normalized": "Fd-\u003eString-\u003eByteString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "Replace XAttr",
          "signature": "Fd-\u003eString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdReplaceXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of an extended attribute.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "fdSetXAttr",
          "package": "linux-xattr",
          "signature": "Fd -\u003e String -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#fdSetXAttr",
          "type": "function"
        },
        "index": {
          "description": "Set the value of an extended attribute",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "fdSetXAttr",
          "normalized": "Fd-\u003eString-\u003eByteString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "Set XAttr",
          "signature": "Fd-\u003eString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:fdSetXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of an extended attribute.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "getXAttr",
          "package": "linux-xattr",
          "signature": "FilePath-\u003e String-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Get the value of an extended attribute",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "getXAttr",
          "normalized": "FilePath-\u003eString-\u003eIO ByteString",
          "package": "linux-xattr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:getXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003elSetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute already exists\n fail and set errno to EEXIST.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "lCreateXAttr",
          "package": "linux-xattr",
          "signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#lCreateXAttr",
          "type": "function"
        },
        "index": {
          "description": "Identical to lSetXAttr but if the attribute already exists fail and set errno to EEXIST",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "lCreateXAttr",
          "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "Create XAttr",
          "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lCreateXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of an extended attribute (do not follow symbolic\n links).\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "lGetXAttr",
          "package": "linux-xattr",
          "signature": "FilePath -\u003e String -\u003e IO ByteString",
          "source": "src/System-Linux-XAttr.html#lGetXAttr",
          "type": "function"
        },
        "index": {
          "description": "Get the value of an extended attribute do not follow symbolic links",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "lGetXAttr",
          "normalized": "FilePath-\u003eString-\u003eIO ByteString",
          "package": "linux-xattr",
          "partial": "Get XAttr",
          "signature": "FilePath-\u003eString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lGetXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of attribute names associated with the given\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (do not follow symbolic links).\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "lListXAttr",
          "package": "linux-xattr",
          "signature": "FilePath -\u003e IO [String]",
          "source": "src/System-Linux-XAttr.html#lListXAttr",
          "type": "function"
        },
        "index": {
          "description": "Get the list of attribute names associated with the given FilePath do not follow symbolic links",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "lListXAttr",
          "normalized": "FilePath-\u003eIO[String]",
          "package": "linux-xattr",
          "partial": "List XAttr",
          "signature": "FilePath-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lListXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an extended attribute from the given \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (do not follow\n symbolic links).\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "lRemoveXAttr",
          "package": "linux-xattr",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#lRemoveXAttr",
          "type": "function"
        },
        "index": {
          "description": "Remove an extended attribute from the given FilePath do not follow symbolic links",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "lRemoveXAttr",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "Remove XAttr",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lRemoveXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003elSetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute does not exist\n fail and set errno to ENOATTR.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "lReplaceXAttr",
          "package": "linux-xattr",
          "signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#lReplaceXAttr",
          "type": "function"
        },
        "index": {
          "description": "Identical to lSetXAttr but if the attribute does not exist fail and set errno to ENOATTR",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "lReplaceXAttr",
          "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "Replace XAttr",
          "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lReplaceXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of an extended attribute (do not follow symbolic\n links).\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "lSetXAttr",
          "package": "linux-xattr",
          "signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#lSetXAttr",
          "type": "function"
        },
        "index": {
          "description": "Set the value of an extended attribute do not follow symbolic links",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "lSetXAttr",
          "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "Set XAttr",
          "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:lSetXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of attribute names associated with the given\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "listXAttr",
          "package": "linux-xattr",
          "signature": "FilePath-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Get the list of attribute names associated with the given FilePath",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "listXAttr",
          "normalized": "FilePath-\u003eIO[String]",
          "package": "linux-xattr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:listXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an extended attribute from the given \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "removeXAttr",
          "package": "linux-xattr",
          "signature": "FilePath-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Remove an extended attribute from the given FilePath",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "removeXAttr",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:removeXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esetXAttr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but if the attribute does not exist\n fail and set errno to ENOATTR.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "replaceXAttr",
          "package": "linux-xattr",
          "signature": "FilePath -\u003e String -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Linux-XAttr.html#replaceXAttr",
          "type": "function"
        },
        "index": {
          "description": "Identical to setXAttr but if the attribute does not exist fail and set errno to ENOATTR",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "replaceXAttr",
          "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:replaceXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of an extended attribute.\n\u003c/p\u003e",
          "module": "System.Linux.XAttr",
          "name": "setXAttr",
          "package": "linux-xattr",
          "signature": "FilePath-\u003e String-\u003e ByteString-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the value of an extended attribute",
          "hierarchy": "System Linux XAttr",
          "module": "System.Linux.XAttr",
          "name": "setXAttr",
          "normalized": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "package": "linux-xattr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/linux-xattr/docs/System-Linux-XAttr.html#v:setXAttr"
      }
    }
  ]
]