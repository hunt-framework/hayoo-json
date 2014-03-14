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
        "word": "authenticate-kerberos"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for using a kerberos authentication service.\n\u003c/p\u003e\u003cp\u003ePlease note that all configuration should have been done\n manually on the machine prior to running the code.\n\u003c/p\u003e\u003cp\u003eOn linux machines the configuration might be in \u003cem\u003eetc\u003c/em\u003ekrb5.conf.\n It's worth checking if the Kerberos service provider (e.g. your university)\n already provide a complete configuration file.\n\u003c/p\u003e\u003cp\u003eBe certain that you can manually login from a shell by typing\n\u003c/p\u003e\u003cpre\u003e kinit username\n\u003c/pre\u003e\u003cp\u003eIf you fill in your password and the program returns no error code,\n then your kerberos configuration is setup properly.\n Only then can this module be of any use.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Web.Authenticate.Kerberos",
          "name": "Kerberos",
          "package": "authenticate-kerberos",
          "source": "src/Web-Authenticate-Kerberos.html",
          "type": "module"
        },
        "index": {
          "description": "Module for using kerberos authentication service Please note that all configuration should have been done manually on the machine prior to running the code On linux machines the configuration might be in etc krb5.conf It worth checking if the Kerberos service provider e.g your university already provide complete configuration file Be certain that you can manually login from shell by typing kinit username If you fill in your password and the program returns no error code then your kerberos configuration is setup properly Only then can this module be of any use",
          "hierarchy": "Web Authenticate Kerberos",
          "module": "Web.Authenticate.Kerberos",
          "name": "Kerberos",
          "package": "authenticate-kerberos",
          "partial": "Kerberos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-kerberos/docs/Web-Authenticate-Kerberos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOccurreable results of a Kerberos login\n\u003c/p\u003e",
          "module": "Web.Authenticate.Kerberos",
          "name": "KerberosAuthResult",
          "package": "authenticate-kerberos",
          "source": "src/Web-Authenticate-Kerberos.html#KerberosAuthResult",
          "type": "data"
        },
        "index": {
          "description": "Occurreable results of Kerberos login",
          "hierarchy": "Web Authenticate Kerberos",
          "module": "Web.Authenticate.Kerberos",
          "name": "KerberosAuthResult",
          "package": "authenticate-kerberos",
          "partial": "Kerberos Auth Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-kerberos/docs/Web-Authenticate-Kerberos.html#t:KerberosAuthResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.Kerberos",
          "name": "NoSuchUser",
          "package": "authenticate-kerberos",
          "signature": "NoSuchUser",
          "source": "src/Web-Authenticate-Kerberos.html#KerberosAuthResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate Kerberos",
          "module": "Web.Authenticate.Kerberos",
          "name": "NoSuchUser",
          "package": "authenticate-kerberos",
          "partial": "No Such User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-kerberos/docs/Web-Authenticate-Kerberos.html#v:NoSuchUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.Kerberos",
          "name": "Ok",
          "package": "authenticate-kerberos",
          "signature": "Ok",
          "source": "src/Web-Authenticate-Kerberos.html#KerberosAuthResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate Kerberos",
          "module": "Web.Authenticate.Kerberos",
          "name": "Ok",
          "package": "authenticate-kerberos",
          "partial": "Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-kerberos/docs/Web-Authenticate-Kerberos.html#v:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.Kerberos",
          "name": "TimeOut",
          "package": "authenticate-kerberos",
          "signature": "TimeOut",
          "source": "src/Web-Authenticate-Kerberos.html#KerberosAuthResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate Kerberos",
          "module": "Web.Authenticate.Kerberos",
          "name": "TimeOut",
          "package": "authenticate-kerberos",
          "partial": "Time Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-kerberos/docs/Web-Authenticate-Kerberos.html#v:TimeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.Kerberos",
          "name": "UnknownError",
          "package": "authenticate-kerberos",
          "signature": "UnknownError Text",
          "source": "src/Web-Authenticate-Kerberos.html#KerberosAuthResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate Kerberos",
          "module": "Web.Authenticate.Kerberos",
          "name": "UnknownError",
          "package": "authenticate-kerberos",
          "partial": "Unknown Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-kerberos/docs/Web-Authenticate-Kerberos.html#v:UnknownError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Authenticate.Kerberos",
          "name": "WrongPassword",
          "package": "authenticate-kerberos",
          "signature": "WrongPassword",
          "source": "src/Web-Authenticate-Kerberos.html#KerberosAuthResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Authenticate Kerberos",
          "module": "Web.Authenticate.Kerberos",
          "name": "WrongPassword",
          "package": "authenticate-kerberos",
          "partial": "Wrong Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-kerberos/docs/Web-Authenticate-Kerberos.html#v:WrongPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the username and password, try login to Kerberos service\n\u003c/p\u003e",
          "module": "Web.Authenticate.Kerberos",
          "name": "loginKerberos",
          "package": "authenticate-kerberos",
          "signature": "Text-\u003e Text-\u003e IO KerberosAuthResult",
          "type": "function"
        },
        "index": {
          "description": "Given the username and password try login to Kerberos service",
          "hierarchy": "Web Authenticate Kerberos",
          "module": "Web.Authenticate.Kerberos",
          "name": "loginKerberos",
          "normalized": "Text-\u003eText-\u003eIO KerberosAuthResult",
          "package": "authenticate-kerberos",
          "partial": "Kerberos",
          "signature": "Text-\u003eText-\u003eIO KerberosAuthResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/authenticate-kerberos/docs/Web-Authenticate-Kerberos.html#v:loginKerberos"
      }
    }
  ]
]