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
        "word": "yesod-auth-ldap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "LDAP",
          "package": "yesod-auth-ldap",
          "source": "src/Yesod-Auth-LDAP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "LDAP",
          "package": "yesod-auth-ldap",
          "partial": "LDAP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "LDAPConfig",
          "package": "yesod-auth-ldap",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "LDAPConfig",
          "package": "yesod-auth-ldap",
          "partial": "LDAPConfig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#t:LDAPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "LDAPConfig",
          "package": "yesod-auth-ldap",
          "signature": "LDAPConfig",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "LDAPConfig",
          "package": "yesod-auth-ldap",
          "partial": "LDAPConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:LDAPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "baseDN",
          "package": "yesod-auth-ldap",
          "signature": "Maybe String",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "baseDN",
          "package": "yesod-auth-ldap",
          "partial": "DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:baseDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "genericAuthLDAP",
          "package": "yesod-auth-ldap",
          "signature": "LDAPConfig -\u003e AuthPlugin m",
          "source": "src/Yesod-Auth-LDAP.html#genericAuthLDAP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "genericAuthLDAP",
          "normalized": "LDAPConfig-\u003eAuthPlugin a",
          "package": "yesod-auth-ldap",
          "partial": "Auth LDAP",
          "signature": "LDAPConfig-\u003eAuthPlugin m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:genericAuthLDAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a user gives username x, f(x) will be passed to Yesod\n\u003c/p\u003e",
          "module": "Yesod.Auth.LDAP",
          "name": "identifierModifier",
          "package": "yesod-auth-ldap",
          "signature": "Text -\u003e [LDAPEntry] -\u003e Text",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "description": "When user gives username will be passed to Yesod",
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "identifierModifier",
          "normalized": "Text-\u003e[LDAPEntry]-\u003eText",
          "package": "yesod-auth-ldap",
          "partial": "Modifier",
          "signature": "Text-\u003e[LDAPEntry]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:identifierModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "initDN",
          "package": "yesod-auth-ldap",
          "signature": "String",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "initDN",
          "package": "yesod-auth-ldap",
          "partial": "DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:initDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "initPass",
          "package": "yesod-auth-ldap",
          "signature": "String",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "initPass",
          "package": "yesod-auth-ldap",
          "partial": "Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:initPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "ldapHost",
          "package": "yesod-auth-ldap",
          "signature": "String",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "ldapHost",
          "package": "yesod-auth-ldap",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:ldapHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "ldapPort'",
          "package": "yesod-auth-ldap",
          "signature": "LDAPInt",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "ldapPort'",
          "package": "yesod-auth-ldap",
          "partial": "Port'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:ldapPort-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Auth.LDAP",
          "name": "ldapScope",
          "package": "yesod-auth-ldap",
          "signature": "LDAPScope",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "ldapScope",
          "package": "yesod-auth-ldap",
          "partial": "Scope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:ldapScope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuring the second bind, the username must be converted to a valid DN\n\u003c/p\u003e",
          "module": "Yesod.Auth.LDAP",
          "name": "nameToDN",
          "package": "yesod-auth-ldap",
          "signature": "Text -\u003e String",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "description": "During the second bind the username must be converted to valid DN",
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "nameToDN",
          "normalized": "Text-\u003eString",
          "package": "yesod-auth-ldap",
          "partial": "To DN",
          "signature": "Text-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:nameToDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a user gives username x, f(x) will be passed to LDAP\n\u003c/p\u003e",
          "module": "Yesod.Auth.LDAP",
          "name": "usernameModifier",
          "package": "yesod-auth-ldap",
          "signature": "Text -\u003e Text",
          "source": "src/Yesod-Auth-LDAP.html#LDAPConfig",
          "type": "function"
        },
        "index": {
          "description": "When user gives username will be passed to LDAP",
          "hierarchy": "Yesod Auth LDAP",
          "module": "Yesod.Auth.LDAP",
          "name": "usernameModifier",
          "normalized": "Text-\u003eText",
          "package": "yesod-auth-ldap",
          "partial": "Modifier",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-auth-ldap/docs/Yesod-Auth-LDAP.html#v:usernameModifier"
      }
    }
  ]
]