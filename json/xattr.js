[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRelatively low-level interface to work with extended attributes on Unix\n systems. This is a fairly straightforward port of the API exposed by SGI's\n libattr.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "module",
        "fct-source": "src/System-Xattr.html",
        "fct-type": "module",
        "title": "Xattr"
      },
      "index": {
        "description": "Relatively low-level interface to work with extended attributes on Unix systems This is fairly straightforward port of the API exposed by SGI libattr",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "Xattr",
        "normalized": "",
        "package": "xattr",
        "partial": "Xattr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#t:AttrName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of an attribute. Some filesystems support arbitrarily\n long names, but for portability it is recommended to use relatively\n short names (less than 256 bytes).\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "type",
        "fct-source": "src/System-Xattr.html#AttrName",
        "fct-type": "type",
        "title": "AttrName"
      },
      "index": {
        "description": "The name of an attribute Some filesystems support arbitrarily long names but for portability it is recommended to use relatively short names less than bytes",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "AttrName",
        "normalized": "",
        "package": "xattr",
        "partial": "Attr Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#t:AttrValue",
      "description": {
        "fct-descr": "\u003cp\u003eThevalue of an attribute. Most filesystems allow for arbitrary\n binary data with relatively. It is recommended that the length of\n the value be at most 64KB.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "type",
        "fct-source": "src/System-Xattr.html#AttrValue",
        "fct-type": "type",
        "title": "AttrValue"
      },
      "index": {
        "description": "Thevalue of an attribute Most filesystems allow for arbitrary binary data with relatively It is recommended that the length of the value be at most KB",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "AttrValue",
        "normalized": "",
        "package": "xattr",
        "partial": "Attr Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#t:XattrMode",
      "description": {
        "fct-descr": "\u003cp\u003eMode for setting attributes.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "data",
        "fct-source": "src/System-Xattr.html#XattrMode",
        "fct-type": "data",
        "title": "XattrMode"
      },
      "index": {
        "description": "Mode for setting attributes",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "XattrMode",
        "normalized": "",
        "package": "xattr",
        "partial": "Xattr Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:CreateMode",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a pure create, which fails if the named attribute\n exists already.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "CreateMode",
        "fct-source": "src/System-Xattr.html#XattrMode",
        "fct-type": "function",
        "title": "CreateMode"
      },
      "index": {
        "description": "Specifies pure create which fails if the named attribute exists already",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "CreateMode",
        "normalized": "",
        "package": "xattr",
        "partial": "Create Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:RegularMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe attribute will be created if it does not yet exist,\n and replace the existing named attribute otherwise.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "RegularMode",
        "fct-source": "src/System-Xattr.html#XattrMode",
        "fct-type": "function",
        "title": "RegularMode"
      },
      "index": {
        "description": "The attribute will be created if it does not yet exist and replace the existing named attribute otherwise",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "RegularMode",
        "normalized": "",
        "package": "xattr",
        "partial": "Regular Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:ReplaceMode",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies a pure replace operation, which fails if the\n named attribute does not already exist.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "ReplaceMode",
        "fct-source": "src/System-Xattr.html#XattrMode",
        "fct-type": "function",
        "title": "ReplaceMode"
      },
      "index": {
        "description": "Specifies pure replace operation which fails if the named attribute does not already exist",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "ReplaceMode",
        "normalized": "",
        "package": "xattr",
        "partial": "Replace Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:fgetxattr",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetxattr\u003c/a\u003e\u003c/code\u003e, but get the attribute of an open handle.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "Handle -\u003e AttrName -\u003e IO AttrValue",
        "fct-source": "src/System-Xattr.html#fgetxattr",
        "fct-type": "function",
        "title": "fgetxattr"
      },
      "index": {
        "description": "Same as getxattr but get the attribute of an open handle",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "fgetxattr",
        "normalized": "Handle-\u003eAttrName-\u003eIO AttrValue",
        "package": "xattr",
        "partial": "",
        "signature": "Handle-\u003eAttrName-\u003eIO AttrValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:flistxattr",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elistxattr\u003c/a\u003e\u003c/code\u003e, but get the attributes of an open handle.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "Handle -\u003e IO [AttrName]",
        "fct-source": "src/System-Xattr.html#flistxattr",
        "fct-type": "function",
        "title": "flistxattr"
      },
      "index": {
        "description": "Same as listxattr but get the attributes of an open handle",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "flistxattr",
        "normalized": "Handle-\u003eIO[AttrName]",
        "package": "xattr",
        "partial": "",
        "signature": "Handle-\u003eIO[AttrName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:fsetxattr",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esetxattr\u003c/a\u003e\u003c/code\u003e, but set the attribute of an open handle.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "Handle -\u003e AttrName -\u003e AttrValue -\u003e XattrMode -\u003e IO ()",
        "fct-source": "src/System-Xattr.html#fsetxattr",
        "fct-type": "function",
        "title": "fsetxattr"
      },
      "index": {
        "description": "Same as setxattr but set the attribute of an open handle",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "fsetxattr",
        "normalized": "Handle-\u003eAttrName-\u003eAttrValue-\u003eXattrMode-\u003eIO()",
        "package": "xattr",
        "partial": "",
        "signature": "Handle-\u003eAttrName-\u003eAttrValue-\u003eXattrMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:getxattr",
      "description": {
        "fct-descr": "\u003cp\u003eGet extended attribute of an object.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "FilePath -\u003e AttrName -\u003e IO AttrValue",
        "fct-source": "src/System-Xattr.html#getxattr",
        "fct-type": "function",
        "title": "getxattr"
      },
      "index": {
        "description": "Get extended attribute of an object",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "getxattr",
        "normalized": "FilePath-\u003eAttrName-\u003eIO AttrValue",
        "package": "xattr",
        "partial": "",
        "signature": "FilePath-\u003eAttrName-\u003eIO AttrValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:lgetxattr",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetxattr\u003c/a\u003e\u003c/code\u003e, but if the object is a symbolic link, the\n attribute is retrieved from the link itself and not the referenced\n object.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "FilePath -\u003e AttrName -\u003e IO AttrValue",
        "fct-source": "src/System-Xattr.html#lgetxattr",
        "fct-type": "function",
        "title": "lgetxattr"
      },
      "index": {
        "description": "Same as getxattr but if the object is symbolic link the attribute is retrieved from the link itself and not the referenced object",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "lgetxattr",
        "normalized": "FilePath-\u003eAttrName-\u003eIO AttrValue",
        "package": "xattr",
        "partial": "",
        "signature": "FilePath-\u003eAttrName-\u003eIO AttrValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:listxattr",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all of the extended attributes of an object.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "FilePath -\u003e IO [AttrName]",
        "fct-source": "src/System-Xattr.html#listxattr",
        "fct-type": "function",
        "title": "listxattr"
      },
      "index": {
        "description": "Get list of all of the extended attributes of an object",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "listxattr",
        "normalized": "FilePath-\u003eIO[AttrName]",
        "package": "xattr",
        "partial": "",
        "signature": "FilePath-\u003eIO[AttrName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:llistxattr",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elistxattr\u003c/a\u003e\u003c/code\u003e, but if the object is a symbolic link, the\n attributes of the link itself are returned, not on the referenced object.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "FilePath -\u003e IO [AttrName]",
        "fct-source": "src/System-Xattr.html#llistxattr",
        "fct-type": "function",
        "title": "llistxattr"
      },
      "index": {
        "description": "Same as listxattr but if the object is symbolic link the attributes of the link itself are returned not on the referenced object",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "llistxattr",
        "normalized": "FilePath-\u003eIO[AttrName]",
        "package": "xattr",
        "partial": "",
        "signature": "FilePath-\u003eIO[AttrName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:lsetxattr",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esetxattr\u003c/a\u003e\u003c/code\u003e, but if the object is a symbolic link the\n attribute is set on the symbolic link itself, not the object\n refered to by the link.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "FilePath -\u003e AttrName -\u003e AttrValue -\u003e XattrMode -\u003e IO ()",
        "fct-source": "src/System-Xattr.html#lsetxattr",
        "fct-type": "function",
        "title": "lsetxattr"
      },
      "index": {
        "description": "Same as setxattr but if the object is symbolic link the attribute is set on the symbolic link itself not the object refered to by the link",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "lsetxattr",
        "normalized": "FilePath-\u003eAttrName-\u003eAttrValue-\u003eXattrMode-\u003eIO()",
        "package": "xattr",
        "partial": "",
        "signature": "FilePath-\u003eAttrName-\u003eAttrValue-\u003eXattrMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/xattr/docs/System-Xattr.html#v:setxattr",
      "description": {
        "fct-descr": "\u003cp\u003eSet extended attribute of a filesystem object.\n\u003c/p\u003e",
        "fct-module": "System.Xattr",
        "fct-package": "xattr",
        "fct-signature": "FilePath-\u003e AttrName-\u003e AttrValue-\u003e XattrMode-\u003e IO ()",
        "fct-type": "function",
        "title": "setxattr"
      },
      "index": {
        "description": "Set extended attribute of filesystem object",
        "hierarchy": "System Xattr",
        "module": "System.Xattr",
        "name": "setxattr",
        "normalized": "FilePath-\u003eAttrName-\u003eAttrValue-\u003eXattrMode-\u003eIO()",
        "package": "xattr",
        "partial": "",
        "signature": "FilePath-\u003eAttrName-\u003eAttrValue-\u003eXattrMode-\u003eIO()"
      }
    }
  }
]