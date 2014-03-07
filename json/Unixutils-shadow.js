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
        "word": "Unixutils-shadow"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esupport for \u003cem\u003eetc\u003c/em\u003eshadow\n\u003c/p\u003e\u003cp\u003eTODO: This module is modelled after System.Posix.User but lacks many \n of the #ifdefs. Those are probably important.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Unix.Shadow",
          "name": "Shadow",
          "package": "Unixutils-shadow",
          "source": "src/System-Unix-Shadow.html",
          "type": "module"
        },
        "index": {
          "description": "support for etc shadow TODO This module is modelled after System.Posix.User but lacks many of the ifdefs Those are probably important",
          "hierarchy": "System Unix Shadow",
          "module": "System.Unix.Shadow",
          "name": "Shadow",
          "package": "Unixutils-shadow",
          "partial": "Shadow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry returned by \u003ccode\u003e\u003ca\u003egetSUserEntryForName\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTODO: add other fields\n\u003c/p\u003e",
          "module": "System.Unix.Shadow",
          "name": "SUserEntry",
          "package": "Unixutils-shadow",
          "source": "src/System-Unix-Shadow.html#SUserEntry",
          "type": "data"
        },
        "index": {
          "description": "Entry returned by getSUserEntryForName TODO add other fields",
          "hierarchy": "System Unix Shadow",
          "module": "System.Unix.Shadow",
          "name": "SUserEntry",
          "package": "Unixutils-shadow",
          "partial": "SUser Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#t:SUserEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unix.Shadow",
          "name": "SUserEntry",
          "package": "Unixutils-shadow",
          "signature": "SUserEntry",
          "source": "src/System-Unix-Shadow.html#SUserEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unix Shadow",
          "module": "System.Unix.Shadow",
          "name": "SUserEntry",
          "package": "Unixutils-shadow",
          "partial": "SUser Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#v:SUserEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetSUserEntryForName name\u003c/code\u003e calls \u003ccode\u003egetspnam\u003c/code\u003e to obtain\n   the \u003ccode\u003eSUserEntry\u003c/code\u003e information associated with the user login\n   \u003ccode\u003ename\u003c/code\u003e.p\n\u003c/p\u003e",
          "module": "System.Unix.Shadow",
          "name": "getSUserEntryForName",
          "package": "Unixutils-shadow",
          "signature": "String -\u003e IO SUserEntry",
          "source": "src/System-Unix-Shadow.html#getSUserEntryForName",
          "type": "function"
        },
        "index": {
          "description": "getSUserEntryForName name calls getspnam to obtain the SUserEntry information associated with the user login name",
          "hierarchy": "System Unix Shadow",
          "module": "System.Unix.Shadow",
          "name": "getSUserEntryForName",
          "normalized": "String-\u003eIO SUserEntry",
          "package": "Unixutils-shadow",
          "partial": "SUser Entry For Name",
          "signature": "String-\u003eIO SUserEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#v:getSUserEntryForName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTextual name of this user (pw_name)\n\u003c/p\u003e",
          "module": "System.Unix.Shadow",
          "name": "sUserName",
          "package": "Unixutils-shadow",
          "signature": "String",
          "source": "src/System-Unix-Shadow.html#SUserEntry",
          "type": "function"
        },
        "index": {
          "description": "Textual name of this user pw name",
          "hierarchy": "System Unix Shadow",
          "module": "System.Unix.Shadow",
          "name": "sUserName",
          "package": "Unixutils-shadow",
          "partial": "User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#v:sUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePassword -- may be empty or fake if shadow is in use (pw_passwd)\n\u003c/p\u003e",
          "module": "System.Unix.Shadow",
          "name": "sUserPassword",
          "package": "Unixutils-shadow",
          "signature": "String",
          "source": "src/System-Unix-Shadow.html#SUserEntry",
          "type": "function"
        },
        "index": {
          "description": "Password may be empty or fake if shadow is in use pw passwd",
          "hierarchy": "System Unix Shadow",
          "module": "System.Unix.Shadow",
          "name": "sUserPassword",
          "package": "Unixutils-shadow",
          "partial": "User Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Unixutils-shadow/docs/System-Unix-Shadow.html#v:sUserPassword"
      }
    }
  ]
]