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
        "word": "XAttr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXAttr provides bindings to the glibc function for reading and manipulating extended attributes (setxattr, getxattr, listxattr, ...).\n\u003c/p\u003e\u003cp\u003eEach function in this module has two variants: the one with the name\nprefixed by \"l\" and \"fd\".  Both of these are identical to the original\nversion except that the \"l\"-variant does not follow symbolic link but\nacts on the link itself, and the \"fd\"-variant take a file descriptor\nas argument rather than a filepath.  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.XAttr",
          "name": "XAttr",
          "package": "XAttr",
          "source": "src/System-XAttr.html",
          "type": "module"
        },
        "index": {
          "description": "XAttr provides bindings to the glibc function for reading and manipulating extended attributes setxattr getxattr listxattr Each function in this module has two variants the one with the name prefixed by and fd Both of these are identical to the original version except that the variant does not follow symbolic link but acts on the link itself and the fd variant take file descriptor as argument rather than filepath",
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "XAttr",
          "package": "XAttr",
          "partial": "XAttr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreateXAttr is identical to setXAttr, but if the attribute\n already exists it fails and sets errno to EEXIST.\n\u003c/p\u003e",
          "module": "System.XAttr",
          "name": "createXAttr",
          "package": "XAttr",
          "signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#createXAttr",
          "type": "function"
        },
        "index": {
          "description": "createXAttr is identical to setXAttr but if the attribute already exists it fails and sets errno to EEXIST",
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "createXAttr",
          "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:createXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "fdCreateXAttr",
          "package": "XAttr",
          "signature": "Fd -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#fdCreateXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "fdCreateXAttr",
          "normalized": "Fd-\u003eString-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "Create XAttr",
          "signature": "Fd-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdCreateXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "fdGetXAttr",
          "package": "XAttr",
          "signature": "Fd -\u003e String -\u003e IO String",
          "source": "src/System-XAttr.html#fdGetXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "fdGetXAttr",
          "normalized": "Fd-\u003eString-\u003eIO String",
          "package": "XAttr",
          "partial": "Get XAttr",
          "signature": "Fd-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdGetXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "fdListXAttr",
          "package": "XAttr",
          "signature": "Fd -\u003e IO [String]",
          "source": "src/System-XAttr.html#fdListXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "fdListXAttr",
          "normalized": "Fd-\u003eIO[String]",
          "package": "XAttr",
          "partial": "List XAttr",
          "signature": "Fd-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdListXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "fdRemoveXAttr",
          "package": "XAttr",
          "signature": "Fd -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#fdRemoveXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "fdRemoveXAttr",
          "normalized": "Fd-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "Remove XAttr",
          "signature": "Fd-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdRemoveXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "fdReplaceXAttr",
          "package": "XAttr",
          "signature": "Fd -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#fdReplaceXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "fdReplaceXAttr",
          "normalized": "Fd-\u003eString-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "Replace XAttr",
          "signature": "Fd-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdReplaceXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "fdSetXAttr",
          "package": "XAttr",
          "signature": "Fd -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#fdSetXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "fdSetXAttr",
          "normalized": "Fd-\u003eString-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "Set XAttr",
          "signature": "Fd-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdSetXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetXAttr retrieves the value of an extended attribute \n\u003c/p\u003e",
          "module": "System.XAttr",
          "name": "getXAttr",
          "package": "XAttr",
          "signature": "FilePath-\u003e String-\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "getXAttr retrieves the value of an extended attribute",
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "getXAttr",
          "normalized": "FilePath-\u003eString-\u003eIO String",
          "package": "XAttr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:getXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "lCreateXAttr",
          "package": "XAttr",
          "signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#lCreateXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "lCreateXAttr",
          "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "Create XAttr",
          "signature": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lCreateXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "lGetXAttr",
          "package": "XAttr",
          "signature": "FilePath -\u003e String -\u003e IO String",
          "source": "src/System-XAttr.html#lGetXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "lGetXAttr",
          "normalized": "FilePath-\u003eString-\u003eIO String",
          "package": "XAttr",
          "partial": "Get XAttr",
          "signature": "FilePath-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lGetXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "lListXAttr",
          "package": "XAttr",
          "signature": "FilePath -\u003e IO [String]",
          "source": "src/System-XAttr.html#lListXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "lListXAttr",
          "normalized": "FilePath-\u003eIO[String]",
          "package": "XAttr",
          "partial": "List XAttr",
          "signature": "FilePath-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lListXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "lRemoveXAttr",
          "package": "XAttr",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#lRemoveXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "lRemoveXAttr",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "Remove XAttr",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lRemoveXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "lReplaceXAttr",
          "package": "XAttr",
          "signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#lReplaceXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "lReplaceXAttr",
          "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "Replace XAttr",
          "signature": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lReplaceXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.XAttr",
          "name": "lSetXAttr",
          "package": "XAttr",
          "signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#lSetXAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "lSetXAttr",
          "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "Set XAttr",
          "signature": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lSetXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elistXAttr retrieves the list of attribute names associated with\n the given filepath.\n\u003c/p\u003e",
          "module": "System.XAttr",
          "name": "listXAttr",
          "package": "XAttr",
          "signature": "FilePath-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "listXAttr retrieves the list of attribute names associated with the given filepath",
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "listXAttr",
          "normalized": "FilePath-\u003eIO[String]",
          "package": "XAttr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:listXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremoveXAttr removes an extended attribute from the give filepath.\n\u003c/p\u003e",
          "module": "System.XAttr",
          "name": "removeXAttr",
          "package": "XAttr",
          "signature": "FilePath-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "removeXAttr removes an extended attribute from the give filepath",
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "removeXAttr",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:removeXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereplaceXAttr is identical to setXAttr, but if the attribute\n does not exist it fails and sets errno to ENOATTR.\n\u003c/p\u003e",
          "module": "System.XAttr",
          "name": "replaceXAttr",
          "package": "XAttr",
          "signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/System-XAttr.html#replaceXAttr",
          "type": "function"
        },
        "index": {
          "description": "replaceXAttr is identical to setXAttr but if the attribute does not exist it fails and sets errno to ENOATTR",
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "replaceXAttr",
          "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:replaceXAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esetXAttr sets the value of an extended attribute.\n\u003c/p\u003e",
          "module": "System.XAttr",
          "name": "setXAttr",
          "package": "XAttr",
          "signature": "FilePath-\u003e String-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "setXAttr sets the value of an extended attribute",
          "hierarchy": "System XAttr",
          "module": "System.XAttr",
          "name": "setXAttr",
          "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "package": "XAttr",
          "partial": "XAttr",
          "signature": "FilePath-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:setXAttr"
      }
    }
  ]
]