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
        "word": "authenticate-ldap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for using LDAP as an authentication service\n\u003c/p\u003e\u003cp\u003eThis code was written for yesod-auth-ldap, but maybe it can be used in any \n given Haskell web framwork?\n For now, the only usage examples will be Yesod specific. So you can find\n them in the yesod-auth-ldap repo \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Authenticate.LDAP",
          "name": "LDAP",
          "package": "authenticate-ldap",
          "source": "src/Web-Authenticate-LDAP.html",
          "type": "module"
        },
        "index": {
          "description": "Module for using LDAP as an authentication service This code was written for yesod-auth-ldap but maybe it can be used in any given Haskell web framwork For now the only usage examples will be Yesod specific So you can find them in the yesod-auth-ldap repo",
          "hierarchy": "Web Authenticate LDAP",
          "module": "Web.Authenticate.LDAP",
          "name": "LDAP",
          "package": "authenticate-ldap",
          "partial": "LDAP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-ldap/docs/Web-Authenticate-LDAP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.LDAP",
          "name": "LDAPAuthResult",
          "package": "authenticate-ldap",
          "source": "src/Web-Authenticate-LDAP.html#LDAPAuthResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Authenticate LDAP",
          "module": "Web.Authenticate.LDAP",
          "name": "LDAPAuthResult",
          "package": "authenticate-ldap",
          "partial": "LDAPAuth Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-ldap/docs/Web-Authenticate-LDAP.html#t:LDAPAuthResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.LDAP",
          "name": "InitialBindFail",
          "package": "authenticate-ldap",
          "signature": "InitialBindFail",
          "source": "src/Web-Authenticate-LDAP.html#LDAPAuthResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate LDAP",
          "module": "Web.Authenticate.LDAP",
          "name": "InitialBindFail",
          "package": "authenticate-ldap",
          "partial": "Initial Bind Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-ldap/docs/Web-Authenticate-LDAP.html#v:InitialBindFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.LDAP",
          "name": "NoSuchUser",
          "package": "authenticate-ldap",
          "signature": "NoSuchUser",
          "source": "src/Web-Authenticate-LDAP.html#LDAPAuthResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate LDAP",
          "module": "Web.Authenticate.LDAP",
          "name": "NoSuchUser",
          "package": "authenticate-ldap",
          "partial": "No Such User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-ldap/docs/Web-Authenticate-LDAP.html#v:NoSuchUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.LDAP",
          "name": "Ok",
          "package": "authenticate-ldap",
          "signature": "Ok [LDAPEntry]",
          "source": "src/Web-Authenticate-LDAP.html#LDAPAuthResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate LDAP",
          "module": "Web.Authenticate.LDAP",
          "name": "Ok",
          "normalized": "Ok[LDAPEntry]",
          "package": "authenticate-ldap",
          "partial": "Ok",
          "signature": "Ok[LDAPEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-ldap/docs/Web-Authenticate-LDAP.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.LDAP",
          "name": "WrongPassword",
          "package": "authenticate-ldap",
          "signature": "WrongPassword",
          "source": "src/Web-Authenticate-LDAP.html#LDAPAuthResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate LDAP",
          "module": "Web.Authenticate.LDAP",
          "name": "WrongPassword",
          "package": "authenticate-ldap",
          "partial": "Wrong Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-ldap/docs/Web-Authenticate-LDAP.html#v:WrongPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.LDAP",
          "name": "loginLDAP",
          "package": "authenticate-ldap",
          "signature": "Text -\u003e String -\u003e String -\u003e String -\u003e LDAPInt -\u003e String -\u003e String -\u003e Maybe String -\u003e LDAPScope -\u003e IO LDAPAuthResult",
          "source": "src/Web-Authenticate-LDAP.html#loginLDAP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate LDAP",
          "module": "Web.Authenticate.LDAP",
          "name": "loginLDAP",
          "normalized": "Text-\u003eString-\u003eString-\u003eString-\u003eLDAPInt-\u003eString-\u003eString-\u003eMaybe String-\u003eLDAPScope-\u003eIO LDAPAuthResult",
          "package": "authenticate-ldap",
          "partial": "LDAP",
          "signature": "Text-\u003eString-\u003eString-\u003eString-\u003eLDAPInt-\u003eString-\u003eString-\u003eMaybe String-\u003eLDAPScope-\u003eIO LDAPAuthResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-ldap/docs/Web-Authenticate-LDAP.html#v:loginLDAP"
      }
    }
  ]
]