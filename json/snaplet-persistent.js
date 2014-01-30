[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#",
      "description": {
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent.html",
        "fct-type": "module",
        "title": "Persistent"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "Persistent",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Persistent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#t:PersistAuthManager",
      "description": {
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#PersistAuthManager",
        "fct-type": "data",
        "title": "PersistAuthManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "PersistAuthManager",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Persist Auth Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#t:SnapAuthUser",
      "description": {
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUser",
        "fct-type": "type",
        "title": "SnapAuthUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "SnapAuthUser",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Snap Auth User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#t:SnapAuthUserGeneric",
      "description": {
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "data",
        "title": "SnapAuthUserGeneric"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "SnapAuthUserGeneric",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Snap Auth User Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#t:SnapAuthUserId",
      "description": {
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserId",
        "fct-type": "type",
        "title": "SnapAuthUserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "SnapAuthUserId",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Snap Auth User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:SnapAuthUser",
      "description": {
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "SnapAuthUser",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "SnapAuthUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "SnapAuthUser",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Snap Auth User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:authEntityDefs",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of entity definitions this snaplet exposes. You need\n them so that you can append to your application's list of\n entity definitions and perform the migration in one block.\n\u003c/p\u003e\u003cp\u003eSee how this example combined an app's own entity definitions and\n the auth snaplet's in one migration block:\n\u003c/p\u003e\u003cpre\u003e share [mkMigrate \"migrateAll\"] $\n    authEntityDefs ++\n    $(persistFileWith lowerCaseSettings \"schema.txt\")\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "[EntityDef SqlType]",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#authEntityDefs",
        "fct-type": "function",
        "title": "authEntityDefs"
      },
      "index": {
        "description": "The list of entity definitions this snaplet exposes You need them so that you can append to your application list of entity definitions and perform the migration in one block See how this example combined an app own entity definitions and the auth snaplet in one migration block share mkMigrate migrateAll authEntityDefs persistFileWith lowerCaseSettings schema.txt",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "authEntityDefs",
        "normalized": "[EntityDef SqlType]",
        "package": "snaplet-persistent",
        "partial": "Entity Defs",
        "signature": "[EntityDef SqlType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:db2au",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to convert a \u003ccode\u003e\u003ca\u003eSnapAuthUser\u003c/a\u003e\u003c/code\u003e entity into the auth snaplet's\n \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Entity SnapAuthUser -\u003e AuthUser",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#db2au",
        "fct-type": "function",
        "title": "db2au"
      },
      "index": {
        "description": "Function to convert SnapAuthUser entity into the auth snaplet AuthUser",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "db2au",
        "normalized": "Entity SnapAuthUser-\u003eAuthUser",
        "package": "snaplet-persistent",
        "partial": "",
        "signature": "Entity SnapAuthUser-\u003eAuthUser"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:dbUserSplices",
      "description": {
        "fct-descr": "\u003cp\u003eSplices for \u003ccode\u003e\u003ca\u003eSnapAuthUser\u003c/a\u003e\u003c/code\u003e that are equivalent to the ones for\n \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "[(Text, Promise (Entity SnapAuthUser) -\u003e Splice n)]",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#dbUserSplices",
        "fct-type": "function",
        "title": "dbUserSplices"
      },
      "index": {
        "description": "Splices for SnapAuthUser that are equivalent to the ones for AuthUser",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "dbUserSplices",
        "normalized": "[(Text,Promise(Entity SnapAuthUser)-\u003eSplice a)]",
        "package": "snaplet-persistent",
        "partial": "User Splices",
        "signature": "[(Text,Promise(Entity SnapAuthUser)-\u003eSplice n)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:initPersistAuthManager",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer that gets AuthSettings from a config file.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "SnapletLens b SessionManager -\u003e ConnectionPool -\u003e SnapletInit b (AuthManager b)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#initPersistAuthManager",
        "fct-type": "function",
        "title": "initPersistAuthManager"
      },
      "index": {
        "description": "Initializer that gets AuthSettings from config file",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "initPersistAuthManager",
        "normalized": "SnapletLens a SessionManager-\u003eConnectionPool-\u003eSnapletInit a(AuthManager a)",
        "package": "snaplet-persistent",
        "partial": "Persist Auth Manager",
        "signature": "SnapletLens b SessionManager-\u003eConnectionPool-\u003eSnapletInit b(AuthManager b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:initPersistAuthManager-39-",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer that lets you specify AuthSettings.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "AuthSettings -\u003e SnapletLens b SessionManager -\u003e ConnectionPool -\u003e SnapletInit b (AuthManager b)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#initPersistAuthManager%27",
        "fct-type": "function",
        "title": "initPersistAuthManager'"
      },
      "index": {
        "description": "Initializer that lets you specify AuthSettings",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "initPersistAuthManager'",
        "normalized": "AuthSettings-\u003eSnapletLens a SessionManager-\u003eConnectionPool-\u003eSnapletInit a(AuthManager a)",
        "package": "snaplet-persistent",
        "partial": "Persist Auth Manager'",
        "signature": "AuthSettings-\u003eSnapletLens b SessionManager-\u003eConnectionPool-\u003eSnapletInit b(AuthManager b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:migrateAuth",
      "description": {
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Migration (SqlPersistT m)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#migrateAuth",
        "fct-type": "function",
        "title": "migrateAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "migrateAuth",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserActivatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe UTCTime)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserActivatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserActivatedAt",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Activated At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserCreatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserCreatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserCreatedAt",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Created At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserCurrentIp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe Text)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserCurrentIp"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserCurrentIp",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Current Ip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserCurrentLoginAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe UTCTime)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserCurrentLoginAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserCurrentLoginAt",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Current Login At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserEmail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!Text",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserEmail",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserFailedLoginCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!Int",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserFailedLoginCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserFailedLoginCount",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Failed Login Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLastIp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe Text)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserLastIp"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserLastIp",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Last Ip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLastLoginAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe UTCTime)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserLastLoginAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserLastLoginAt",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Last Login At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLockedOutUntil",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe UTCTime)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserLockedOutUntil"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserLockedOutUntil",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Locked Out Until",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLogin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!Text",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserLogin"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserLogin",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Login",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLoginCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!Int",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserLoginCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserLoginCount",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Login Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserMeta",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!String",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserMeta"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserMeta",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!Text",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserPassword",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserRememberToken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe Text)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserRememberToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserRememberToken",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Remember Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserResetRequestedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe UTCTime)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserResetRequestedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserResetRequestedAt",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Reset Requested At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserResetToken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe Text)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserResetToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserResetToken",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Reset Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserRoles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!String",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserRoles"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserRoles",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Roles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserSuspendedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!(Maybe UTCTime)",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserSuspendedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserSuspendedAt",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Suspended At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserUpdatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "!UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
        "fct-type": "function",
        "title": "snapAuthUserUpdatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "snapAuthUserUpdatedAt",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Auth User Updated At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:textPassword",
      "description": {
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Password -\u003e Text",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#textPassword",
        "fct-type": "function",
        "title": "textPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "textPassword",
        "normalized": "Password-\u003eText",
        "package": "snaplet-persistent",
        "partial": "Password",
        "signature": "Password-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:userDBKey",
      "description": {
        "fct-descr": "\u003cp\u003eGet the db key from an \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "AuthUser -\u003e Maybe SnapAuthUserId",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#userDBKey",
        "fct-type": "function",
        "title": "userDBKey"
      },
      "index": {
        "description": "Get the db key from an AuthUser",
        "hierarchy": "Snap Snaplet Auth Backends Persistent",
        "module": "Snap.Snaplet.Auth.Backends.Persistent",
        "name": "userDBKey",
        "normalized": "AuthUser-\u003eMaybe SnapAuthUserId",
        "package": "snaplet-persistent",
        "partial": "DBKey",
        "signature": "AuthUser-\u003eMaybe SnapAuthUserId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#",
      "description": {
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Persistent.html",
        "fct-type": "module",
        "title": "Persistent"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "Persistent",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Persistent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#t:HasPersistPool",
      "description": {
        "fct-descr": "\u003cp\u003eImplement this type class to have any monad work with snaplet-persistent.\n A default instance is provided for (Handler b PersistState).\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-Persistent.html#HasPersistPool",
        "fct-type": "class",
        "title": "HasPersistPool"
      },
      "index": {
        "description": "Implement this type class to have any monad work with snaplet-persistent default instance is provided for Handler PersistState",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "HasPersistPool",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Has Persist Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#t:PersistState",
      "description": {
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "newtype",
        "fct-source": "src/Snap-Snaplet-Persistent.html#PersistState",
        "fct-type": "newtype",
        "title": "PersistState"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "PersistState",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Persist State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:PersistState",
      "description": {
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "PersistState",
        "fct-source": "src/Snap-Snaplet-Persistent.html#PersistState",
        "fct-type": "function",
        "title": "PersistState"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "PersistState",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Persist State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:followForeignKey",
      "description": {
        "fct-descr": "\u003cp\u003eFollows a foreign key field in one entity and retrieves the corresponding\n entity from the database.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "(t -\u003e Key a) -\u003e Entity t -\u003e m (Maybe (Entity a))",
        "fct-source": "src/Snap-Snaplet-Persistent.html#followForeignKey",
        "fct-type": "function",
        "title": "followForeignKey"
      },
      "index": {
        "description": "Follows foreign key field in one entity and retrieves the corresponding entity from the database",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "followForeignKey",
        "normalized": "(a-\u003eKey b)-\u003eEntity a-\u003ec(Maybe(Entity b))",
        "package": "snaplet-persistent",
        "partial": "Foreign Key",
        "signature": "(t-\u003eKey a)-\u003eEntity t-\u003em(Maybe(Entity a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:fromPersistValue-39-",
      "description": {
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "PersistValue -\u003e c",
        "fct-source": "src/Snap-Snaplet-Persistent.html#fromPersistValue%27",
        "fct-type": "function",
        "title": "fromPersistValue'"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "fromPersistValue'",
        "normalized": "PersistValue-\u003ea",
        "package": "snaplet-persistent",
        "partial": "Persist Value'",
        "signature": "PersistValue-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:getPersistPool",
      "description": {
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "m ConnectionPool",
        "fct-source": "src/Snap-Snaplet-Persistent.html#getPersistPool",
        "fct-type": "method",
        "title": "getPersistPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "getPersistPool",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Persist Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:initPersist",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize Persistent with an initial SQL function called right\n after the connection pool has been created. This is most useful for\n calling migrations upfront right after initialization.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e initPersist (runMigrationUnsafe migrateAll)\n\u003c/pre\u003e\u003cp\u003ewhere migrateAll is the migration function that was auto-generated\n by the QQ statement in your persistent schema definition in the\n call to \u003ccode\u003emkMigrate\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "SqlPersistT (NoLoggingT IO) a -\u003e SnapletInit b PersistState",
        "fct-source": "src/Snap-Snaplet-Persistent.html#initPersist",
        "fct-type": "function",
        "title": "initPersist"
      },
      "index": {
        "description": "Initialize Persistent with an initial SQL function called right after the connection pool has been created This is most useful for calling migrations upfront right after initialization Example initPersist runMigrationUnsafe migrateAll where migrateAll is the migration function that was auto-generated by the QQ statement in your persistent schema definition in the call to mkMigrate",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "initPersist",
        "normalized": "SqlPersistT(NoLoggingT IO)a-\u003eSnapletInit b PersistState",
        "package": "snaplet-persistent",
        "partial": "Persist",
        "signature": "SqlPersistT(NoLoggingT IO)a-\u003eSnapletInit b PersistState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkInt",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Key to Int.  Fails with error if the conversion fails.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Key a -\u003e Int",
        "fct-source": "src/Snap-Snaplet-Persistent.html#mkInt",
        "fct-type": "function",
        "title": "mkInt"
      },
      "index": {
        "description": "Converts Key to Int Fails with error if the conversion fails",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "mkInt",
        "normalized": "Key a-\u003eInt",
        "package": "snaplet-persistent",
        "partial": "Int",
        "signature": "Key a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkKey",
      "description": {
        "fct-descr": "\u003cp\u003eMake a Key from an Int.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Int -\u003e Key entity",
        "fct-source": "src/Snap-Snaplet-Persistent.html#mkKey",
        "fct-type": "function",
        "title": "mkKey"
      },
      "index": {
        "description": "Make Key from an Int",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "mkKey",
        "normalized": "Int-\u003eKey a",
        "package": "snaplet-persistent",
        "partial": "Key",
        "signature": "Int-\u003eKey entity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkKeyBS",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a Key from a ByteString.  Calls error on failure.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "ByteString -\u003e Key entity",
        "fct-source": "src/Snap-Snaplet-Persistent.html#mkKeyBS",
        "fct-type": "function",
        "title": "mkKeyBS"
      },
      "index": {
        "description": "Makes Key from ByteString Calls error on failure",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "mkKeyBS",
        "normalized": "ByteString-\u003eKey a",
        "package": "snaplet-persistent",
        "partial": "Key BS",
        "signature": "ByteString-\u003eKey entity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkKeyT",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a Key from Text.  Calls error on failure.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Text -\u003e Key entity",
        "fct-source": "src/Snap-Snaplet-Persistent.html#mkKeyT",
        "fct-type": "function",
        "title": "mkKeyT"
      },
      "index": {
        "description": "Makes Key from Text Calls error on failure",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "mkKeyT",
        "normalized": "Text-\u003eKey a",
        "package": "snaplet-persistent",
        "partial": "Key",
        "signature": "Text-\u003eKey entity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkPgPool",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a connection pool from Config.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Config -\u003e m ConnectionPool",
        "fct-source": "src/Snap-Snaplet-Persistent.html#mkPgPool",
        "fct-type": "function",
        "title": "mkPgPool"
      },
      "index": {
        "description": "Constructs connection pool from Config",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "mkPgPool",
        "normalized": "Config-\u003ea ConnectionPool",
        "package": "snaplet-persistent",
        "partial": "Pg Pool",
        "signature": "Config-\u003em ConnectionPool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkSnapletPgPool",
      "description": {
        "fct-descr": "\u003cp\u003eConscruts a connection pool in a snaplet context.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "m b v ConnectionPool",
        "fct-source": "src/Snap-Snaplet-Persistent.html#mkSnapletPgPool",
        "fct-type": "function",
        "title": "mkSnapletPgPool"
      },
      "index": {
        "description": "Conscruts connection pool in snaplet context",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "mkSnapletPgPool",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Snaplet Pg Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkWord64",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Key to Word64.  Fails with error if the conversion fails.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Key a -\u003e Word64",
        "fct-source": "src/Snap-Snaplet-Persistent.html#mkWord64",
        "fct-type": "function",
        "title": "mkWord64"
      },
      "index": {
        "description": "Converts Key to Word64 Fails with error if the conversion fails",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "mkWord64",
        "normalized": "Key a-\u003eWord",
        "package": "snaplet-persistent",
        "partial": "Word",
        "signature": "Key a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:persistPool",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "ConnectionPool",
        "fct-source": "src/Snap-Snaplet-Persistent.html#PersistState",
        "fct-type": "function",
        "title": "persistPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "persistPool",
        "normalized": "",
        "package": "snaplet-persistent",
        "partial": "Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:runPersist",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a SqlPersist action in any monad with a HasPersistPool instance.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "SqlPersistT (ResourceT (NoLoggingT IO)) b-\u003e m b",
        "fct-type": "function",
        "title": "runPersist"
      },
      "index": {
        "description": "Runs SqlPersist action in any monad with HasPersistPool instance",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "runPersist",
        "normalized": "SqlPersistT(ResourceT(NoLoggingT IO))a-\u003eb a",
        "package": "snaplet-persistent",
        "partial": "Persist",
        "signature": "SqlPersistT(ResourceT(NoLoggingT IO))b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:showKey",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a Text representation of a Key.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Key e -\u003e Text",
        "fct-source": "src/Snap-Snaplet-Persistent.html#showKey",
        "fct-type": "function",
        "title": "showKey"
      },
      "index": {
        "description": "Makes Text representation of Key",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "showKey",
        "normalized": "Key a-\u003eText",
        "package": "snaplet-persistent",
        "partial": "Key",
        "signature": "Key e-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:showKeyBS",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a ByteString representation of a Key.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "Key e -\u003e ByteString",
        "fct-source": "src/Snap-Snaplet-Persistent.html#showKeyBS",
        "fct-type": "function",
        "title": "showKeyBS"
      },
      "index": {
        "description": "Makes ByteString representation of Key",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "showKeyBS",
        "normalized": "Key a-\u003eByteString",
        "package": "snaplet-persistent",
        "partial": "Key BS",
        "signature": "Key e-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:withPool",
      "description": {
        "fct-descr": "\u003cp\u003eRun a database action\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Persistent",
        "fct-package": "snaplet-persistent",
        "fct-signature": "ConnectionPool -\u003e SqlPersist (ResourceT (NoLoggingT IO)) a -\u003e m a",
        "fct-source": "src/Snap-Snaplet-Persistent.html#withPool",
        "fct-type": "function",
        "title": "withPool"
      },
      "index": {
        "description": "Run database action",
        "hierarchy": "Snap Snaplet Persistent",
        "module": "Snap.Snaplet.Persistent",
        "name": "withPool",
        "normalized": "ConnectionPool-\u003eSqlPersist(ResourceT(NoLoggingT IO))a-\u003eb a",
        "package": "snaplet-persistent",
        "partial": "Pool",
        "signature": "ConnectionPool-\u003eSqlPersist(ResourceT(NoLoggingT IO))a-\u003em a"
      }
    }
  }
]