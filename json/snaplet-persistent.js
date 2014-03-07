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
        "word": "snaplet-persistent"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "Persistent",
          "package": "snaplet-persistent",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "Persistent",
          "package": "snaplet-persistent",
          "partial": "Persistent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "PersistAuthManager",
          "package": "snaplet-persistent",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#PersistAuthManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "PersistAuthManager",
          "package": "snaplet-persistent",
          "partial": "Persist Auth Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#t:PersistAuthManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "SnapAuthUser",
          "package": "snaplet-persistent",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "SnapAuthUser",
          "package": "snaplet-persistent",
          "partial": "Snap Auth User",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#t:SnapAuthUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "SnapAuthUserGeneric",
          "package": "snaplet-persistent",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "SnapAuthUserGeneric",
          "package": "snaplet-persistent",
          "partial": "Snap Auth User Generic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#t:SnapAuthUserGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "SnapAuthUserId",
          "package": "snaplet-persistent",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "SnapAuthUserId",
          "package": "snaplet-persistent",
          "partial": "Snap Auth User Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#t:SnapAuthUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "SnapAuthUser",
          "package": "snaplet-persistent",
          "signature": "SnapAuthUser",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "SnapAuthUser",
          "package": "snaplet-persistent",
          "partial": "Snap Auth User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:SnapAuthUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of entity definitions this snaplet exposes. You need\n them so that you can append to your application's list of\n entity definitions and perform the migration in one block.\n\u003c/p\u003e\u003cp\u003eSee how this example combined an app's own entity definitions and\n the auth snaplet's in one migration block:\n\u003c/p\u003e\u003cpre\u003e share [mkMigrate \"migrateAll\"] $\n    authEntityDefs ++\n    $(persistFileWith lowerCaseSettings \"schema.txt\")\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "authEntityDefs",
          "package": "snaplet-persistent",
          "signature": "[EntityDef SqlType]",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#authEntityDefs",
          "type": "function"
        },
        "index": {
          "description": "The list of entity definitions this snaplet exposes You need them so that you can append to your application list of entity definitions and perform the migration in one block See how this example combined an app own entity definitions and the auth snaplet in one migration block share mkMigrate migrateAll authEntityDefs persistFileWith lowerCaseSettings schema.txt",
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "authEntityDefs",
          "normalized": "[EntityDef SqlType]",
          "package": "snaplet-persistent",
          "partial": "Entity Defs",
          "signature": "[EntityDef SqlType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:authEntityDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to convert a \u003ccode\u003e\u003ca\u003eSnapAuthUser\u003c/a\u003e\u003c/code\u003e entity into the auth snaplet's\n \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "db2au",
          "package": "snaplet-persistent",
          "signature": "Entity SnapAuthUser -\u003e AuthUser",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#db2au",
          "type": "function"
        },
        "index": {
          "description": "Function to convert SnapAuthUser entity into the auth snaplet AuthUser",
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "db2au",
          "normalized": "Entity SnapAuthUser-\u003eAuthUser",
          "package": "snaplet-persistent",
          "signature": "Entity SnapAuthUser-\u003eAuthUser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:db2au"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplices for \u003ccode\u003e\u003ca\u003eSnapAuthUser\u003c/a\u003e\u003c/code\u003e that are equivalent to the ones for\n \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "dbUserSplices",
          "package": "snaplet-persistent",
          "signature": "[(Text, Promise (Entity SnapAuthUser) -\u003e Splice n)]",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#dbUserSplices",
          "type": "function"
        },
        "index": {
          "description": "Splices for SnapAuthUser that are equivalent to the ones for AuthUser",
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "dbUserSplices",
          "normalized": "[(Text,Promise(Entity SnapAuthUser)-\u003eSplice a)]",
          "package": "snaplet-persistent",
          "partial": "User Splices",
          "signature": "[(Text,Promise(Entity SnapAuthUser)-\u003eSplice n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:dbUserSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer that gets AuthSettings from a config file.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "initPersistAuthManager",
          "package": "snaplet-persistent",
          "signature": "SnapletLens b SessionManager -\u003e ConnectionPool -\u003e SnapletInit b (AuthManager b)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#initPersistAuthManager",
          "type": "function"
        },
        "index": {
          "description": "Initializer that gets AuthSettings from config file",
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "initPersistAuthManager",
          "normalized": "SnapletLens a SessionManager-\u003eConnectionPool-\u003eSnapletInit a(AuthManager a)",
          "package": "snaplet-persistent",
          "partial": "Persist Auth Manager",
          "signature": "SnapletLens b SessionManager-\u003eConnectionPool-\u003eSnapletInit b(AuthManager b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:initPersistAuthManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer that lets you specify AuthSettings.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "initPersistAuthManager'",
          "package": "snaplet-persistent",
          "signature": "AuthSettings -\u003e SnapletLens b SessionManager -\u003e ConnectionPool -\u003e SnapletInit b (AuthManager b)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#initPersistAuthManager%27",
          "type": "function"
        },
        "index": {
          "description": "Initializer that lets you specify AuthSettings",
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "initPersistAuthManager'",
          "normalized": "AuthSettings-\u003eSnapletLens a SessionManager-\u003eConnectionPool-\u003eSnapletInit a(AuthManager a)",
          "package": "snaplet-persistent",
          "partial": "Persist Auth Manager'",
          "signature": "AuthSettings-\u003eSnapletLens b SessionManager-\u003eConnectionPool-\u003eSnapletInit b(AuthManager b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:initPersistAuthManager-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "migrateAuth",
          "package": "snaplet-persistent",
          "signature": "Migration (SqlPersistT m)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#migrateAuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "migrateAuth",
          "package": "snaplet-persistent",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:migrateAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserActivatedAt",
          "package": "snaplet-persistent",
          "signature": "(Maybe UTCTime)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserActivatedAt",
          "package": "snaplet-persistent",
          "partial": "Auth User Activated At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserActivatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserCreatedAt",
          "package": "snaplet-persistent",
          "signature": "UTCTime",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserCreatedAt",
          "package": "snaplet-persistent",
          "partial": "Auth User Created At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserCreatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserCurrentIp",
          "package": "snaplet-persistent",
          "signature": "(Maybe Text)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserCurrentIp",
          "package": "snaplet-persistent",
          "partial": "Auth User Current Ip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserCurrentIp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserCurrentLoginAt",
          "package": "snaplet-persistent",
          "signature": "(Maybe UTCTime)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserCurrentLoginAt",
          "package": "snaplet-persistent",
          "partial": "Auth User Current Login At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserCurrentLoginAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserEmail",
          "package": "snaplet-persistent",
          "signature": "Text",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserEmail",
          "package": "snaplet-persistent",
          "partial": "Auth User Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserFailedLoginCount",
          "package": "snaplet-persistent",
          "signature": "Int",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserFailedLoginCount",
          "package": "snaplet-persistent",
          "partial": "Auth User Failed Login Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserFailedLoginCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLastIp",
          "package": "snaplet-persistent",
          "signature": "(Maybe Text)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLastIp",
          "package": "snaplet-persistent",
          "partial": "Auth User Last Ip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLastIp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLastLoginAt",
          "package": "snaplet-persistent",
          "signature": "(Maybe UTCTime)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLastLoginAt",
          "package": "snaplet-persistent",
          "partial": "Auth User Last Login At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLastLoginAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLockedOutUntil",
          "package": "snaplet-persistent",
          "signature": "(Maybe UTCTime)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLockedOutUntil",
          "package": "snaplet-persistent",
          "partial": "Auth User Locked Out Until",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLockedOutUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLogin",
          "package": "snaplet-persistent",
          "signature": "Text",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLogin",
          "package": "snaplet-persistent",
          "partial": "Auth User Login",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLoginCount",
          "package": "snaplet-persistent",
          "signature": "Int",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserLoginCount",
          "package": "snaplet-persistent",
          "partial": "Auth User Login Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserLoginCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserMeta",
          "package": "snaplet-persistent",
          "signature": "String",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserMeta",
          "package": "snaplet-persistent",
          "partial": "Auth User Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserPassword",
          "package": "snaplet-persistent",
          "signature": "Text",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserPassword",
          "package": "snaplet-persistent",
          "partial": "Auth User Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserRememberToken",
          "package": "snaplet-persistent",
          "signature": "(Maybe Text)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserRememberToken",
          "package": "snaplet-persistent",
          "partial": "Auth User Remember Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserRememberToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserResetRequestedAt",
          "package": "snaplet-persistent",
          "signature": "(Maybe UTCTime)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserResetRequestedAt",
          "package": "snaplet-persistent",
          "partial": "Auth User Reset Requested At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserResetRequestedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserResetToken",
          "package": "snaplet-persistent",
          "signature": "(Maybe Text)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserResetToken",
          "package": "snaplet-persistent",
          "partial": "Auth User Reset Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserResetToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserRoles",
          "package": "snaplet-persistent",
          "signature": "String",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserRoles",
          "package": "snaplet-persistent",
          "partial": "Auth User Roles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserRoles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserSuspendedAt",
          "package": "snaplet-persistent",
          "signature": "(Maybe UTCTime)",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserSuspendedAt",
          "package": "snaplet-persistent",
          "partial": "Auth User Suspended At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserSuspendedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserUpdatedAt",
          "package": "snaplet-persistent",
          "signature": "UTCTime",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent-Types.html#SnapAuthUserGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "snapAuthUserUpdatedAt",
          "package": "snaplet-persistent",
          "partial": "Auth User Updated At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:snapAuthUserUpdatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "textPassword",
          "package": "snaplet-persistent",
          "signature": "Password -\u003e Text",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#textPassword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "textPassword",
          "normalized": "Password-\u003eText",
          "package": "snaplet-persistent",
          "partial": "Password",
          "signature": "Password-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:textPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the db key from an \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "userDBKey",
          "package": "snaplet-persistent",
          "signature": "AuthUser -\u003e Maybe SnapAuthUserId",
          "source": "src/Snap-Snaplet-Auth-Backends-Persistent.html#userDBKey",
          "type": "function"
        },
        "index": {
          "description": "Get the db key from an AuthUser",
          "hierarchy": "Snap Snaplet Auth Backends Persistent",
          "module": "Snap.Snaplet.Auth.Backends.Persistent",
          "name": "userDBKey",
          "normalized": "AuthUser-\u003eMaybe SnapAuthUserId",
          "package": "snaplet-persistent",
          "partial": "DBKey",
          "signature": "AuthUser-\u003eMaybe SnapAuthUserId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Auth-Backends-Persistent.html#v:userDBKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Persistent",
          "name": "Persistent",
          "package": "snaplet-persistent",
          "source": "src/Snap-Snaplet-Persistent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "Persistent",
          "package": "snaplet-persistent",
          "partial": "Persistent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplement this type class to have any monad work with snaplet-persistent.\n A default instance is provided for (Handler b PersistState).\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "HasPersistPool",
          "package": "snaplet-persistent",
          "source": "src/Snap-Snaplet-Persistent.html#HasPersistPool",
          "type": "class"
        },
        "index": {
          "description": "Implement this type class to have any monad work with snaplet-persistent default instance is provided for Handler PersistState",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "HasPersistPool",
          "package": "snaplet-persistent",
          "partial": "Has Persist Pool",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#t:HasPersistPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Persistent",
          "name": "PersistState",
          "package": "snaplet-persistent",
          "source": "src/Snap-Snaplet-Persistent.html#PersistState",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "PersistState",
          "package": "snaplet-persistent",
          "partial": "Persist State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#t:PersistState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Persistent",
          "name": "PersistState",
          "package": "snaplet-persistent",
          "signature": "PersistState",
          "source": "src/Snap-Snaplet-Persistent.html#PersistState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "PersistState",
          "package": "snaplet-persistent",
          "partial": "Persist State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:PersistState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFollows a foreign key field in one entity and retrieves the corresponding\n entity from the database.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "followForeignKey",
          "package": "snaplet-persistent",
          "signature": "(t -\u003e Key a) -\u003e Entity t -\u003e m (Maybe (Entity a))",
          "source": "src/Snap-Snaplet-Persistent.html#followForeignKey",
          "type": "function"
        },
        "index": {
          "description": "Follows foreign key field in one entity and retrieves the corresponding entity from the database",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "followForeignKey",
          "normalized": "(a-\u003eKey b)-\u003eEntity a-\u003ec(Maybe(Entity b))",
          "package": "snaplet-persistent",
          "partial": "Foreign Key",
          "signature": "(t-\u003eKey a)-\u003eEntity t-\u003em(Maybe(Entity a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:followForeignKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Persistent",
          "name": "fromPersistValue'",
          "package": "snaplet-persistent",
          "signature": "PersistValue -\u003e c",
          "source": "src/Snap-Snaplet-Persistent.html#fromPersistValue%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "fromPersistValue'",
          "normalized": "PersistValue-\u003ea",
          "package": "snaplet-persistent",
          "partial": "Persist Value'",
          "signature": "PersistValue-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:fromPersistValue-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Persistent",
          "name": "getPersistPool",
          "package": "snaplet-persistent",
          "signature": "m ConnectionPool",
          "source": "src/Snap-Snaplet-Persistent.html#getPersistPool",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "getPersistPool",
          "package": "snaplet-persistent",
          "partial": "Persist Pool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:getPersistPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize Persistent with an initial SQL function called right\n after the connection pool has been created. This is most useful for\n calling migrations upfront right after initialization.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e initPersist (runMigrationUnsafe migrateAll)\n\u003c/pre\u003e\u003cp\u003ewhere migrateAll is the migration function that was auto-generated\n by the QQ statement in your persistent schema definition in the\n call to \u003ccode\u003emkMigrate\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "initPersist",
          "package": "snaplet-persistent",
          "signature": "SqlPersistT (NoLoggingT IO) a -\u003e SnapletInit b PersistState",
          "source": "src/Snap-Snaplet-Persistent.html#initPersist",
          "type": "function"
        },
        "index": {
          "description": "Initialize Persistent with an initial SQL function called right after the connection pool has been created This is most useful for calling migrations upfront right after initialization Example initPersist runMigrationUnsafe migrateAll where migrateAll is the migration function that was auto-generated by the QQ statement in your persistent schema definition in the call to mkMigrate",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "initPersist",
          "normalized": "SqlPersistT(NoLoggingT IO)a-\u003eSnapletInit b PersistState",
          "package": "snaplet-persistent",
          "partial": "Persist",
          "signature": "SqlPersistT(NoLoggingT IO)a-\u003eSnapletInit b PersistState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:initPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Key to Int.  Fails with error if the conversion fails.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkInt",
          "package": "snaplet-persistent",
          "signature": "Key a -\u003e Int",
          "source": "src/Snap-Snaplet-Persistent.html#mkInt",
          "type": "function"
        },
        "index": {
          "description": "Converts Key to Int Fails with error if the conversion fails",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkInt",
          "normalized": "Key a-\u003eInt",
          "package": "snaplet-persistent",
          "partial": "Int",
          "signature": "Key a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a Key from an Int.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkKey",
          "package": "snaplet-persistent",
          "signature": "Int -\u003e Key entity",
          "source": "src/Snap-Snaplet-Persistent.html#mkKey",
          "type": "function"
        },
        "index": {
          "description": "Make Key from an Int",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkKey",
          "normalized": "Int-\u003eKey a",
          "package": "snaplet-persistent",
          "partial": "Key",
          "signature": "Int-\u003eKey entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a Key from a ByteString.  Calls error on failure.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkKeyBS",
          "package": "snaplet-persistent",
          "signature": "ByteString -\u003e Key entity",
          "source": "src/Snap-Snaplet-Persistent.html#mkKeyBS",
          "type": "function"
        },
        "index": {
          "description": "Makes Key from ByteString Calls error on failure",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkKeyBS",
          "normalized": "ByteString-\u003eKey a",
          "package": "snaplet-persistent",
          "partial": "Key BS",
          "signature": "ByteString-\u003eKey entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkKeyBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a Key from Text.  Calls error on failure.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkKeyT",
          "package": "snaplet-persistent",
          "signature": "Text -\u003e Key entity",
          "source": "src/Snap-Snaplet-Persistent.html#mkKeyT",
          "type": "function"
        },
        "index": {
          "description": "Makes Key from Text Calls error on failure",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkKeyT",
          "normalized": "Text-\u003eKey a",
          "package": "snaplet-persistent",
          "partial": "Key",
          "signature": "Text-\u003eKey entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkKeyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a connection pool from Config.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkPgPool",
          "package": "snaplet-persistent",
          "signature": "Config -\u003e m ConnectionPool",
          "source": "src/Snap-Snaplet-Persistent.html#mkPgPool",
          "type": "function"
        },
        "index": {
          "description": "Constructs connection pool from Config",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkPgPool",
          "normalized": "Config-\u003ea ConnectionPool",
          "package": "snaplet-persistent",
          "partial": "Pg Pool",
          "signature": "Config-\u003em ConnectionPool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkPgPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConscruts a connection pool in a snaplet context.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkSnapletPgPool",
          "package": "snaplet-persistent",
          "signature": "m b v ConnectionPool",
          "source": "src/Snap-Snaplet-Persistent.html#mkSnapletPgPool",
          "type": "function"
        },
        "index": {
          "description": "Conscruts connection pool in snaplet context",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkSnapletPgPool",
          "package": "snaplet-persistent",
          "partial": "Snaplet Pg Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkSnapletPgPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Key to Word64.  Fails with error if the conversion fails.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkWord64",
          "package": "snaplet-persistent",
          "signature": "Key a -\u003e Word64",
          "source": "src/Snap-Snaplet-Persistent.html#mkWord64",
          "type": "function"
        },
        "index": {
          "description": "Converts Key to Word64 Fails with error if the conversion fails",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "mkWord64",
          "normalized": "Key a-\u003eWord",
          "package": "snaplet-persistent",
          "partial": "Word",
          "signature": "Key a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:mkWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Persistent",
          "name": "persistPool",
          "package": "snaplet-persistent",
          "signature": "ConnectionPool",
          "source": "src/Snap-Snaplet-Persistent.html#PersistState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "persistPool",
          "package": "snaplet-persistent",
          "partial": "Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:persistPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a SqlPersist action in any monad with a HasPersistPool instance.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "runPersist",
          "package": "snaplet-persistent",
          "signature": "SqlPersistT (ResourceT (NoLoggingT IO)) b-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Runs SqlPersist action in any monad with HasPersistPool instance",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "runPersist",
          "normalized": "SqlPersistT(ResourceT(NoLoggingT IO))a-\u003eb a",
          "package": "snaplet-persistent",
          "partial": "Persist",
          "signature": "SqlPersistT(ResourceT(NoLoggingT IO))b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:runPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a Text representation of a Key.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "showKey",
          "package": "snaplet-persistent",
          "signature": "Key e -\u003e Text",
          "source": "src/Snap-Snaplet-Persistent.html#showKey",
          "type": "function"
        },
        "index": {
          "description": "Makes Text representation of Key",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "showKey",
          "normalized": "Key a-\u003eText",
          "package": "snaplet-persistent",
          "partial": "Key",
          "signature": "Key e-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:showKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a ByteString representation of a Key.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "showKeyBS",
          "package": "snaplet-persistent",
          "signature": "Key e -\u003e ByteString",
          "source": "src/Snap-Snaplet-Persistent.html#showKeyBS",
          "type": "function"
        },
        "index": {
          "description": "Makes ByteString representation of Key",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "showKeyBS",
          "normalized": "Key a-\u003eByteString",
          "package": "snaplet-persistent",
          "partial": "Key BS",
          "signature": "Key e-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:showKeyBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a database action\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Persistent",
          "name": "withPool",
          "package": "snaplet-persistent",
          "signature": "ConnectionPool -\u003e SqlPersist (ResourceT (NoLoggingT IO)) a -\u003e m a",
          "source": "src/Snap-Snaplet-Persistent.html#withPool",
          "type": "function"
        },
        "index": {
          "description": "Run database action",
          "hierarchy": "Snap Snaplet Persistent",
          "module": "Snap.Snaplet.Persistent",
          "name": "withPool",
          "normalized": "ConnectionPool-\u003eSqlPersist(ResourceT(NoLoggingT IO))a-\u003eb a",
          "package": "snaplet-persistent",
          "partial": "Pool",
          "signature": "ConnectionPool-\u003eSqlPersist(ResourceT(NoLoggingT IO))a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-persistent/docs/Snap-Snaplet-Persistent.html#v:withPool"
      }
    }
  ]
]