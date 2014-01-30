[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXAttr provides bindings to the glibc function for reading and manipulating extended attributes (setxattr, getxattr, listxattr, ...).\n\u003c/p\u003e\u003cp\u003eEach function in this module has two variants: the one with the name\nprefixed by \"l\" and \"fd\".  Both of these are identical to the original\nversion except that the \"l\"-variant does not follow symbolic link but\nacts on the link itself, and the \"fd\"-variant take a file descriptor\nas argument rather than a filepath.  \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "module",
        "fct-source": "src/System-XAttr.html",
        "fct-type": "module",
        "title": "XAttr"
      },
      "index": {
        "description": "XAttr provides bindings to the glibc function for reading and manipulating extended attributes setxattr getxattr listxattr Each function in this module has two variants the one with the name prefixed by and fd Both of these are identical to the original version except that the variant does not follow symbolic link but acts on the link itself and the fd variant take file descriptor as argument rather than filepath",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "XAttr",
        "normalized": "",
        "package": "XAttr",
        "partial": "XAttr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:createXAttr",
      "description": {
        "fct-descr": "\u003cp\u003ecreateXAttr is identical to setXAttr, but if the attribute\n already exists it fails and sets errno to EEXIST.\n\u003c/p\u003e",
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#createXAttr",
        "fct-type": "function",
        "title": "createXAttr"
      },
      "index": {
        "description": "createXAttr is identical to setXAttr but if the attribute already exists it fails and sets errno to EEXIST",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "createXAttr",
        "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdCreateXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "Fd -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#fdCreateXAttr",
        "fct-type": "function",
        "title": "fdCreateXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "fdCreateXAttr",
        "normalized": "Fd-\u003eString-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "Create XAttr",
        "signature": "Fd-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdGetXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "Fd -\u003e String -\u003e IO String",
        "fct-source": "src/System-XAttr.html#fdGetXAttr",
        "fct-type": "function",
        "title": "fdGetXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "fdGetXAttr",
        "normalized": "Fd-\u003eString-\u003eIO String",
        "package": "XAttr",
        "partial": "Get XAttr",
        "signature": "Fd-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdListXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "Fd -\u003e IO [String]",
        "fct-source": "src/System-XAttr.html#fdListXAttr",
        "fct-type": "function",
        "title": "fdListXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "fdListXAttr",
        "normalized": "Fd-\u003eIO[String]",
        "package": "XAttr",
        "partial": "List XAttr",
        "signature": "Fd-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdRemoveXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "Fd -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#fdRemoveXAttr",
        "fct-type": "function",
        "title": "fdRemoveXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "fdRemoveXAttr",
        "normalized": "Fd-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "Remove XAttr",
        "signature": "Fd-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdReplaceXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "Fd -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#fdReplaceXAttr",
        "fct-type": "function",
        "title": "fdReplaceXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "fdReplaceXAttr",
        "normalized": "Fd-\u003eString-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "Replace XAttr",
        "signature": "Fd-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:fdSetXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "Fd -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#fdSetXAttr",
        "fct-type": "function",
        "title": "fdSetXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "fdSetXAttr",
        "normalized": "Fd-\u003eString-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "Set XAttr",
        "signature": "Fd-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:getXAttr",
      "description": {
        "fct-descr": "\u003cp\u003egetXAttr retrieves the value of an extended attribute \n\u003c/p\u003e",
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath-\u003e String-\u003e IO String",
        "fct-type": "function",
        "title": "getXAttr"
      },
      "index": {
        "description": "getXAttr retrieves the value of an extended attribute",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "getXAttr",
        "normalized": "FilePath-\u003eString-\u003eIO String",
        "package": "XAttr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lCreateXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#lCreateXAttr",
        "fct-type": "function",
        "title": "lCreateXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "lCreateXAttr",
        "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "Create XAttr",
        "signature": "FilePath-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lGetXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath -\u003e String -\u003e IO String",
        "fct-source": "src/System-XAttr.html#lGetXAttr",
        "fct-type": "function",
        "title": "lGetXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "lGetXAttr",
        "normalized": "FilePath-\u003eString-\u003eIO String",
        "package": "XAttr",
        "partial": "Get XAttr",
        "signature": "FilePath-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lListXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath -\u003e IO [String]",
        "fct-source": "src/System-XAttr.html#lListXAttr",
        "fct-type": "function",
        "title": "lListXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "lListXAttr",
        "normalized": "FilePath-\u003eIO[String]",
        "package": "XAttr",
        "partial": "List XAttr",
        "signature": "FilePath-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lRemoveXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#lRemoveXAttr",
        "fct-type": "function",
        "title": "lRemoveXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "lRemoveXAttr",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "Remove XAttr",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lReplaceXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#lReplaceXAttr",
        "fct-type": "function",
        "title": "lReplaceXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "lReplaceXAttr",
        "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "Replace XAttr",
        "signature": "FilePath-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:lSetXAttr",
      "description": {
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#lSetXAttr",
        "fct-type": "function",
        "title": "lSetXAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "lSetXAttr",
        "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "Set XAttr",
        "signature": "FilePath-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:listXAttr",
      "description": {
        "fct-descr": "\u003cp\u003elistXAttr retrieves the list of attribute names associated with\n the given filepath.\n\u003c/p\u003e",
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath-\u003e IO [String]",
        "fct-type": "function",
        "title": "listXAttr"
      },
      "index": {
        "description": "listXAttr retrieves the list of attribute names associated with the given filepath",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "listXAttr",
        "normalized": "FilePath-\u003eIO[String]",
        "package": "XAttr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:removeXAttr",
      "description": {
        "fct-descr": "\u003cp\u003eremoveXAttr removes an extended attribute from the give filepath.\n\u003c/p\u003e",
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "removeXAttr"
      },
      "index": {
        "description": "removeXAttr removes an extended attribute from the give filepath",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "removeXAttr",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:replaceXAttr",
      "description": {
        "fct-descr": "\u003cp\u003ereplaceXAttr is identical to setXAttr, but if the attribute\n does not exist it fails and sets errno to ENOATTR.\n\u003c/p\u003e",
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-XAttr.html#replaceXAttr",
        "fct-type": "function",
        "title": "replaceXAttr"
      },
      "index": {
        "description": "replaceXAttr is identical to setXAttr but if the attribute does not exist it fails and sets errno to ENOATTR",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "replaceXAttr",
        "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/XAttr/docs/System-XAttr.html#v:setXAttr",
      "description": {
        "fct-descr": "\u003cp\u003esetXAttr sets the value of an extended attribute.\n\u003c/p\u003e",
        "fct-module": "System.XAttr",
        "fct-package": "XAttr",
        "fct-signature": "FilePath-\u003e String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "setXAttr"
      },
      "index": {
        "description": "setXAttr sets the value of an extended attribute",
        "hierarchy": "System XAttr",
        "module": "System.XAttr",
        "name": "setXAttr",
        "normalized": "FilePath-\u003eString-\u003eString-\u003eIO()",
        "package": "XAttr",
        "partial": "XAttr",
        "signature": "FilePath-\u003eString-\u003eString-\u003eIO()"
      }
    }
  }
]