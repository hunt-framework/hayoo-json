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
        "word": "yesod-auth-kerberos"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn-built kerberos authentication for Yesod.\n\u003c/p\u003e\u003cp\u003ePlease note that all configuration should have been done\n manually on the machine prior to running the code.\n\u003c/p\u003e\u003cp\u003eOn linux machines the configuration might be in \u003cem\u003eetc\u003c/em\u003ekrb5.conf.\n It's worth checking if the Kerberos service provider (e.g. your university)\n already provide a complete configuration file.\n\u003c/p\u003e\u003cp\u003eBe certain that you can manually login from a shell by typing\n\u003c/p\u003e\u003cpre\u003e kinit username\n\u003c/pre\u003e\u003cp\u003eIf you fill in your password and the program returns no error code,\n then your kerberos configuration is setup properly.\n Only then can this module be of any use.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Auth.Kerberos",
          "name": "Kerberos",
          "package": "yesod-auth-kerberos",
          "source": "src/Yesod-Auth-Kerberos.html",
          "type": "module"
        },
        "index": {
          "description": "In-built kerberos authentication for Yesod Please note that all configuration should have been done manually on the machine prior to running the code On linux machines the configuration might be in etc krb5.conf It worth checking if the Kerberos service provider e.g your university already provide complete configuration file Be certain that you can manually login from shell by typing kinit username If you fill in your password and the program returns no error code then your kerberos configuration is setup properly Only then can this module be of any use",
          "hierarchy": "Yesod Auth Kerberos",
          "module": "Yesod.Auth.Kerberos",
          "name": "Kerberos",
          "package": "yesod-auth-kerberos",
          "partial": "Kerberos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-kerberos/docs/Yesod-Auth-Kerberos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Kerberos",
          "name": "KerberosConfig",
          "package": "yesod-auth-kerberos",
          "source": "src/Yesod-Auth-Kerberos.html#KerberosConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Auth Kerberos",
          "module": "Yesod.Auth.Kerberos",
          "name": "KerberosConfig",
          "package": "yesod-auth-kerberos",
          "partial": "Kerberos Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-kerberos/docs/Yesod-Auth-Kerberos.html#t:KerberosConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.Kerberos",
          "name": "KerberosConfig",
          "package": "yesod-auth-kerberos",
          "signature": "KerberosConfig",
          "source": "src/Yesod-Auth-Kerberos.html#KerberosConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth Kerberos",
          "module": "Yesod.Auth.Kerberos",
          "name": "KerberosConfig",
          "package": "yesod-auth-kerberos",
          "partial": "Kerberos Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-kerberos/docs/Yesod-Auth-Kerberos.html#v:KerberosConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKerberos with \u003ccode\u003e\u003ca\u003edefaultKerberosConfig\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Yesod.Auth.Kerberos",
          "name": "authKerberos",
          "package": "yesod-auth-kerberos",
          "signature": "AuthPlugin m",
          "source": "src/Yesod-Auth-Kerberos.html#authKerberos",
          "type": "function"
        },
        "index": {
          "description": "Kerberos with defaultKerberosConfig",
          "hierarchy": "Yesod Auth Kerberos",
          "module": "Yesod.Auth.Kerberos",
          "name": "authKerberos",
          "package": "yesod-auth-kerberos",
          "partial": "Kerberos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-kerberos/docs/Yesod-Auth-Kerberos.html#v:authKerberos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA configuration where the username the user provides is the one passed\n to both kerberos and yesod\n\u003c/p\u003e",
          "module": "Yesod.Auth.Kerberos",
          "name": "defaultKerberosConfig",
          "package": "yesod-auth-kerberos",
          "signature": "KerberosConfig",
          "source": "src/Yesod-Auth-Kerberos.html#defaultKerberosConfig",
          "type": "function"
        },
        "index": {
          "description": "configuration where the username the user provides is the one passed to both kerberos and yesod",
          "hierarchy": "Yesod Auth Kerberos",
          "module": "Yesod.Auth.Kerberos",
          "name": "defaultKerberosConfig",
          "package": "yesod-auth-kerberos",
          "partial": "Kerberos Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-kerberos/docs/Yesod-Auth-Kerberos.html#v:defaultKerberosConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA configurable version of \u003ccode\u003e\u003ca\u003eauthKerberos\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Yesod.Auth.Kerberos",
          "name": "genericAuthKerberos",
          "package": "yesod-auth-kerberos",
          "signature": "KerberosConfig -\u003e AuthPlugin m",
          "source": "src/Yesod-Auth-Kerberos.html#genericAuthKerberos",
          "type": "function"
        },
        "index": {
          "description": "configurable version of authKerberos",
          "hierarchy": "Yesod Auth Kerberos",
          "module": "Yesod.Auth.Kerberos",
          "name": "genericAuthKerberos",
          "normalized": "KerberosConfig-\u003eAuthPlugin a",
          "package": "yesod-auth-kerberos",
          "partial": "Auth Kerberos",
          "signature": "KerberosConfig-\u003eAuthPlugin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-kerberos/docs/Yesod-Auth-Kerberos.html#v:genericAuthKerberos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a user gives username x, f(x) will be passed to Yesod\n\u003c/p\u003e",
          "module": "Yesod.Auth.Kerberos",
          "name": "identifierModifier",
          "package": "yesod-auth-kerberos",
          "signature": "Text -\u003e Text",
          "source": "src/Yesod-Auth-Kerberos.html#KerberosConfig",
          "type": "function"
        },
        "index": {
          "description": "When user gives username will be passed to Yesod",
          "hierarchy": "Yesod Auth Kerberos",
          "module": "Yesod.Auth.Kerberos",
          "name": "identifierModifier",
          "normalized": "Text-\u003eText",
          "package": "yesod-auth-kerberos",
          "partial": "Modifier",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-kerberos/docs/Yesod-Auth-Kerberos.html#v:identifierModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a user gives username x, f(x) will be passed to Kerberos\n\u003c/p\u003e",
          "module": "Yesod.Auth.Kerberos",
          "name": "usernameModifier",
          "package": "yesod-auth-kerberos",
          "signature": "Text -\u003e Text",
          "source": "src/Yesod-Auth-Kerberos.html#KerberosConfig",
          "type": "function"
        },
        "index": {
          "description": "When user gives username will be passed to Kerberos",
          "hierarchy": "Yesod Auth Kerberos",
          "module": "Yesod.Auth.Kerberos",
          "name": "usernameModifier",
          "normalized": "Text-\u003eText",
          "package": "yesod-auth-kerberos",
          "partial": "Modifier",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-kerberos/docs/Yesod-Auth-Kerberos.html#v:usernameModifier"
      }
    }
  ]
]