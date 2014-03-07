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
        "word": "sys-auth-smbclient"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Authenticate.SmbClient",
          "name": "SmbClient",
          "package": "sys-auth-smbclient",
          "source": "src/System-Authenticate-SmbClient.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Authenticate SmbClient",
          "module": "System.Authenticate.SmbClient",
          "name": "SmbClient",
          "package": "sys-auth-smbclient",
          "partial": "Smb Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sys-auth-smbclient/docs/System-Authenticate-SmbClient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe login result type.\n\u003c/p\u003e\u003cp\u003eIf success, return Right with actual username.\n\u003c/p\u003e",
          "module": "System.Authenticate.SmbClient",
          "name": "SmbClientResult",
          "package": "sys-auth-smbclient",
          "source": "src/System-Authenticate-SmbClient.html#SmbClientResult",
          "type": "type"
        },
        "index": {
          "description": "The login result type If success return Right with actual username",
          "hierarchy": "System Authenticate SmbClient",
          "module": "System.Authenticate.SmbClient",
          "name": "SmbClientResult",
          "package": "sys-auth-smbclient",
          "partial": "Smb Client Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sys-auth-smbclient/docs/System-Authenticate-SmbClient.html#t:SmbClientResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthenticate with \u003ccode\u003esmbclient\u003c/code\u003e command.\n\u003c/p\u003e\u003cp\u003eReturn Right if login success, Left otherwise.\n\u003c/p\u003e\u003cp\u003eThis does not accept empty username or password,\n because those has always been success as Guest login.\n\u003c/p\u003e",
          "module": "System.Authenticate.SmbClient",
          "name": "loginSmbClient",
          "package": "sys-auth-smbclient",
          "signature": "Text-\u003e Text-\u003e Text-\u003e Text-\u003e IO SmbClientResult",
          "type": "function"
        },
        "index": {
          "description": "Authenticate with smbclient command Return Right if login success Left otherwise This does not accept empty username or password because those has always been success as Guest login",
          "hierarchy": "System Authenticate SmbClient",
          "module": "System.Authenticate.SmbClient",
          "name": "loginSmbClient",
          "normalized": "Text-\u003eText-\u003eText-\u003eText-\u003eIO SmbClientResult",
          "package": "sys-auth-smbclient",
          "partial": "Smb Client",
          "signature": "Text-\u003eText-\u003eText-\u003eText-\u003eIO SmbClientResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sys-auth-smbclient/docs/System-Authenticate-SmbClient.html#v:loginSmbClient"
      }
    }
  ]
]