[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esupport for \u003cem\u003eetc\u003c/em\u003eshadow\n\u003c/p\u003e\u003cp\u003eTODO: This module is modelled after System.Posix.User but lacks many \n of the #ifdefs. Those are probably important.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Unix.Shadow",
        "fct-package": "Unixutils-shadow",
        "fct-signature": "module",
        "fct-source": "src/System-Unix-Shadow.html",
        "fct-type": "module",
        "title": "Shadow"
      },
      "index": {
        "description": "support for etc shadow TODO This module is modelled after System.Posix.User but lacks many of the ifdefs Those are probably important",
        "hierarchy": "System Unix Shadow",
        "module": "System.Unix.Shadow",
        "name": "Shadow",
        "normalized": "",
        "package": "Unixutils-shadow",
        "partial": "Shadow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#t:SUserEntry",
      "description": {
        "fct-descr": "\u003cp\u003eEntry returned by \u003ccode\u003e\u003ca\u003egetSUserEntryForName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTODO: add other fields\n\u003c/p\u003e",
        "fct-module": "System.Unix.Shadow",
        "fct-package": "Unixutils-shadow",
        "fct-signature": "data",
        "fct-source": "src/System-Unix-Shadow.html#SUserEntry",
        "fct-type": "data",
        "title": "SUserEntry"
      },
      "index": {
        "description": "Entry returned by getSUserEntryForName TODO add other fields",
        "hierarchy": "System Unix Shadow",
        "module": "System.Unix.Shadow",
        "name": "SUserEntry",
        "normalized": "",
        "package": "Unixutils-shadow",
        "partial": "SUser Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#v:SUserEntry",
      "description": {
        "fct-module": "System.Unix.Shadow",
        "fct-package": "Unixutils-shadow",
        "fct-signature": "SUserEntry",
        "fct-source": "src/System-Unix-Shadow.html#SUserEntry",
        "fct-type": "function",
        "title": "SUserEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "System Unix Shadow",
        "module": "System.Unix.Shadow",
        "name": "SUserEntry",
        "normalized": "",
        "package": "Unixutils-shadow",
        "partial": "SUser Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#v:getSUserEntryForName",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetSUserEntryForName name\u003c/code\u003e calls \u003ccode\u003egetspnam\u003c/code\u003e to obtain\n   the \u003ccode\u003eSUserEntry\u003c/code\u003e information associated with the user login\n   \u003ccode\u003ename\u003c/code\u003e.p\n\u003c/p\u003e",
        "fct-module": "System.Unix.Shadow",
        "fct-package": "Unixutils-shadow",
        "fct-signature": "String -\u003e IO SUserEntry",
        "fct-source": "src/System-Unix-Shadow.html#getSUserEntryForName",
        "fct-type": "function",
        "title": "getSUserEntryForName"
      },
      "index": {
        "description": "getSUserEntryForName name calls getspnam to obtain the SUserEntry information associated with the user login name",
        "hierarchy": "System Unix Shadow",
        "module": "System.Unix.Shadow",
        "name": "getSUserEntryForName",
        "normalized": "String-\u003eIO SUserEntry",
        "package": "Unixutils-shadow",
        "partial": "SUser Entry For Name",
        "signature": "String-\u003eIO SUserEntry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#v:sUserName",
      "description": {
        "fct-descr": "\u003cp\u003eTextual name of this user (pw_name)\n\u003c/p\u003e",
        "fct-module": "System.Unix.Shadow",
        "fct-package": "Unixutils-shadow",
        "fct-signature": "String",
        "fct-source": "src/System-Unix-Shadow.html#SUserEntry",
        "fct-type": "function",
        "title": "sUserName"
      },
      "index": {
        "description": "Textual name of this user pw name",
        "hierarchy": "System Unix Shadow",
        "module": "System.Unix.Shadow",
        "name": "sUserName",
        "normalized": "",
        "package": "Unixutils-shadow",
        "partial": "User Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#v:sUserPassword",
      "description": {
        "fct-descr": "\u003cp\u003ePassword -- may be empty or fake if shadow is in use (pw_passwd)\n\u003c/p\u003e",
        "fct-module": "System.Unix.Shadow",
        "fct-package": "Unixutils-shadow",
        "fct-signature": "String",
        "fct-source": "src/System-Unix-Shadow.html#SUserEntry",
        "fct-type": "function",
        "title": "sUserPassword"
      },
      "index": {
        "description": "Password may be empty or fake if shadow is in use pw passwd",
        "hierarchy": "System Unix Shadow",
        "module": "System.Unix.Shadow",
        "name": "sUserPassword",
        "normalized": "",
        "package": "Unixutils-shadow",
        "partial": "User Password",
        "signature": ""
      }
    }
  }
]