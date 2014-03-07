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
        "word": "snap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth.Backends.JsonFile",
          "name": "JsonFile",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth-Backends-JsonFile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth Backends JsonFile",
          "module": "Snap.Snaplet.Auth.Backends.JsonFile",
          "name": "JsonFile",
          "package": "snap",
          "partial": "Json File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth-Backends-JsonFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a JSON file backed \u003ccode\u003e\u003ca\u003eAuthManager\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth.Backends.JsonFile",
          "name": "initJsonFileAuthManager",
          "package": "snap",
          "signature": "AuthSettings-\u003e SnapletLens b SessionManager-\u003e FilePath-\u003e SnapletInit b (AuthManager b)",
          "type": "function"
        },
        "index": {
          "description": "Initialize JSON file backed AuthManager",
          "hierarchy": "Snap Snaplet Auth Backends JsonFile",
          "module": "Snap.Snaplet.Auth.Backends.JsonFile",
          "name": "initJsonFileAuthManager",
          "normalized": "AuthSettings-\u003eSnapletLens a SessionManager-\u003eFilePath-\u003eSnapletInit a(AuthManager a)",
          "package": "snap",
          "partial": "Json File Auth Manager",
          "signature": "AuthSettings-\u003eSnapletLens b SessionManager-\u003eFilePath-\u003eSnapletInit b(AuthManager b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth-Backends-JsonFile.html#v:initJsonFileAuthManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad/create a datafile into memory cache and return the manager.\n\u003c/p\u003e\u003cp\u003eThis data type can be used by itself for batch/non-handler processing.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth.Backends.JsonFile",
          "name": "mkJsonAuthMgr",
          "package": "snap",
          "signature": "FilePath -\u003e IO JsonFileAuthManager",
          "source": "src/Snap-Snaplet-Auth-Backends-JsonFile.html#mkJsonAuthMgr",
          "type": "function"
        },
        "index": {
          "description": "Load create datafile into memory cache and return the manager This data type can be used by itself for batch non-handler processing",
          "hierarchy": "Snap Snaplet Auth Backends JsonFile",
          "module": "Snap.Snaplet.Auth.Backends.JsonFile",
          "name": "mkJsonAuthMgr",
          "normalized": "FilePath-\u003eIO JsonFileAuthManager",
          "package": "snap",
          "partial": "Json Auth Mgr",
          "signature": "FilePath-\u003eIO JsonFileAuthManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth-Backends-JsonFile.html#v:mkJsonAuthMgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains all the central authentication functionality.\n\u003c/p\u003e\u003cp\u003eIt exports a number of high-level functions to be used directly in your\n application handlers.\n\u003c/p\u003e\u003cp\u003eWe also export a number of mid-level functions that should be helpful when\n you are integrating with another way of confirming the authentication of\n login requests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "Auth",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains all the central authentication functionality It exports number of high-level functions to be used directly in your application handlers We also export number of mid-level functions that should be helpful when you are integrating with another way of confirming the authentication of login requests",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "Auth",
          "package": "snap",
          "partial": "Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentication failures indicate what went wrong during authentication.\n They may provide useful information to the developer, although it is\n generally not advisable to show the user the exact details about why login\n failed.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthFailure",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "data"
        },
        "index": {
          "description": "Authentication failures indicate what went wrong during authentication They may provide useful information to the developer although it is generally not advisable to show the user the exact details about why login failed",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthFailure",
          "package": "snap",
          "partial": "Auth Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:AuthFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type holding all necessary information for auth operation\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthManager",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type holding all necessary information for auth operation",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthManager",
          "package": "snap",
          "partial": "Auth Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:AuthManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentication settings defined at initialization time\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthSettings",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
          "type": "data"
        },
        "index": {
          "description": "Authentication settings defined at initialization time",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthSettings",
          "package": "snap",
          "partial": "Auth Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:AuthSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representing the concept of a User in your application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthUser",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "data"
        },
        "index": {
          "description": "Type representing the concept of User in your application",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthUser",
          "package": "snap",
          "partial": "Auth User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:AuthUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll storage backends need to implement this typeclass\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "IAuthBackend",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#IAuthBackend",
          "type": "class"
        },
        "index": {
          "description": "All storage backends need to implement this typeclass",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "IAuthBackend",
          "package": "snap",
          "partial": "IAuth Backend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:IAuthBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePassword is clear when supplied by the user and encrypted later when\n returned from the db.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "Password",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth-Types.html#Password",
          "type": "data"
        },
        "index": {
          "description": "Password is clear when supplied by the user and encrypted later when returned from the db",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "Password",
          "package": "snap",
          "partial": "Password",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will be replaced by a role-based permission system.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "Role",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth-Types.html#Role",
          "type": "data"
        },
        "index": {
          "description": "This will be replaced by role-based permission system",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "Role",
          "package": "snap",
          "partial": "Role",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:Role"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal representation of a \u003ccode\u003eUser\u003c/code\u003e. By convention, we demand that the\n application is able to directly fetch a \u003ccode\u003eUser\u003c/code\u003e using this identifier.\n\u003c/p\u003e\u003cp\u003eThink of this type as a secure, authenticated user. You should normally\n never see this type unless a user has been authenticated.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "UserId",
          "package": "snap",
          "source": "src/Snap-Snaplet-Auth-Types.html#UserId",
          "type": "newtype"
        },
        "index": {
          "description": "Internal representation of User By convention we demand that the application is able to directly fetch User using this identifier Think of this type as secure authenticated user You should normally never see this type unless user has been authenticated",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "UserId",
          "package": "snap",
          "partial": "User Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:UserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "AuthError",
          "package": "snap",
          "signature": "AuthError String",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthError",
          "package": "snap",
          "partial": "Auth Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:AuthError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "AuthManager",
          "package": "snap",
          "signature": "AuthManager",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthManager",
          "package": "snap",
          "partial": "Auth Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:AuthManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "AuthSettings",
          "package": "snap",
          "signature": "AuthSettings",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthSettings",
          "package": "snap",
          "partial": "Auth Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:AuthSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "AuthUser",
          "package": "snap",
          "signature": "AuthUser",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "AuthUser",
          "package": "snap",
          "partial": "Auth User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:AuthUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "BackendError",
          "package": "snap",
          "signature": "BackendError",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "BackendError",
          "package": "snap",
          "partial": "Backend Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:BackendError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "ClearText",
          "package": "snap",
          "signature": "ClearText ByteString",
          "source": "src/Snap-Snaplet-Auth-Types.html#Password",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "ClearText",
          "package": "snap",
          "partial": "Clear Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:ClearText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "DuplicateLogin",
          "package": "snap",
          "signature": "DuplicateLogin",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "DuplicateLogin",
          "package": "snap",
          "partial": "Duplicate Login",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:DuplicateLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "Encrypted",
          "package": "snap",
          "signature": "Encrypted ByteString",
          "source": "src/Snap-Snaplet-Auth-Types.html#Password",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "Encrypted",
          "package": "snap",
          "partial": "Encrypted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:Encrypted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "EncryptedPassword",
          "package": "snap",
          "signature": "EncryptedPassword",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "EncryptedPassword",
          "package": "snap",
          "partial": "Encrypted Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:EncryptedPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "IncorrectPassword",
          "package": "snap",
          "signature": "IncorrectPassword",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "IncorrectPassword",
          "package": "snap",
          "partial": "Incorrect Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:IncorrectPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocked out until given time\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "LockedOut",
          "package": "snap",
          "signature": "LockedOut UTCTime",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "function"
        },
        "index": {
          "description": "Locked out until given time",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "LockedOut",
          "package": "snap",
          "partial": "Locked Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:LockedOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "PasswordMissing",
          "package": "snap",
          "signature": "PasswordMissing",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "PasswordMissing",
          "package": "snap",
          "partial": "Password Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:PasswordMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "Role",
          "package": "snap",
          "signature": "Role ByteString",
          "source": "src/Snap-Snaplet-Auth-Types.html#Role",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "Role",
          "package": "snap",
          "partial": "Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:Role"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "UserId",
          "package": "snap",
          "signature": "UserId",
          "source": "src/Snap-Snaplet-Auth-Types.html#UserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "UserId",
          "package": "snap",
          "partial": "User Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:UserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "UserNotFound",
          "package": "snap",
          "signature": "UserNotFound",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "UserNotFound",
          "package": "snap",
          "partial": "User Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:UserNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "UsernameMissing",
          "package": "snap",
          "signature": "UsernameMissing",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "UsernameMissing",
          "package": "snap",
          "partial": "Username Missing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:UsernameMissing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA per-request logged-in user cache\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "activeUser",
          "package": "snap",
          "signature": "Maybe AuthUser",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "description": "per-request logged-in user cache",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "activeUser",
          "package": "snap",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:activeUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd all standard auth splices to a Heist-enabled application.\n\u003c/p\u003e\u003cp\u003eThis adds the following splices:\n \u003cifLoggedIn\u003e\n \u003cifLoggedOut\u003e\n \u003cloggedInUser\u003e\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "addAuthSplices",
          "package": "snap",
          "signature": "Snaplet (Heist b)-\u003e SnapletLens b (AuthManager b)-\u003e Initializer b v ()",
          "type": "function"
        },
        "index": {
          "description": "Add all standard auth splices to Heist-enabled application This adds the following splices ifLoggedIn ifLoggedOut loggedInUser",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "addAuthSplices",
          "normalized": "Snaplet(Heist a)-\u003eSnapletLens a(AuthManager a)-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Auth Splices",
          "signature": "Snaplet(Heist b)-\u003eSnapletLens b(AuthManager b)-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:addAuthSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLockout strategy: ([MaxAttempts], [LockoutDuration])\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "asLockout",
          "package": "snap",
          "signature": "Maybe (Int, NominalDiffTime)",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
          "type": "function"
        },
        "index": {
          "description": "Lockout strategy MaxAttempts LockoutDuration",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "asLockout",
          "normalized": "Maybe(Int,NominalDiffTime)",
          "package": "snap",
          "partial": "Lockout",
          "signature": "Maybe(Int,NominalDiffTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asLockout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrently not used/checked\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "asMinPasswdLen",
          "package": "snap",
          "signature": "Int",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
          "type": "function"
        },
        "index": {
          "description": "Currently not used checked",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "asMinPasswdLen",
          "package": "snap",
          "partial": "Min Passwd Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asMinPasswdLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the desired remember cookie\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "asRememberCookieName",
          "package": "snap",
          "signature": "ByteString",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
          "type": "function"
        },
        "index": {
          "description": "Name of the desired remember cookie",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "asRememberCookieName",
          "package": "snap",
          "partial": "Remember Cookie Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asRememberCookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow long to remember when the option is used in rest of the API.\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means remember until end of session.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "asRememberPeriod",
          "package": "snap",
          "signature": "Maybe Int",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
          "type": "function"
        },
        "index": {
          "description": "How long to remember when the option is used in rest of the API Nothing means remember until end of session",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "asRememberPeriod",
          "package": "snap",
          "partial": "Remember Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asRememberPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of app's encryption key\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "asSiteKey",
          "package": "snap",
          "signature": "FilePath",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
          "type": "function"
        },
        "index": {
          "description": "Location of app encryption key",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "asSiteKey",
          "package": "snap",
          "partial": "Site Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asSiteKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to get auth settings from a config file.  This function can be\n used by the authors of auth snaplet backends in the initializer to let the\n user configure the auth snaplet from a config file.  All options are\n optional and default to what's in defAuthSettings if not supplied.\n Here's what the default options would look like in the config file:\n\u003c/p\u003e\u003cpre\u003e minPasswordLen = 8\n rememberCookie = \"_remember\"\n rememberPeriod = 1209600 # 2 weeks\n lockout = [5, 86400] # 5 attempts locks you out for 86400 seconds\n siteKey = \"site_key.txt\"\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "authSettingsFromConfig",
          "package": "snap",
          "signature": "Initializer b v AuthSettings",
          "source": "src/Snap-Snaplet-Auth-Types.html#authSettingsFromConfig",
          "type": "function"
        },
        "index": {
          "description": "Function to get auth settings from config file This function can be used by the authors of auth snaplet backends in the initializer to let the user configure the auth snaplet from config file All options are optional and default to what in defAuthSettings if not supplied Here what the default options would look like in the config file minPasswordLen rememberCookie remember rememberPeriod weeks lockout attempts locks you out for seconds siteKey site key.txt",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "authSettingsFromConfig",
          "package": "snap",
          "partial": "Settings From Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:authSettingsFromConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck password for a given user.\n\u003c/p\u003e\u003cp\u003eReturns \u003ca\u003eNothing\u003c/a\u003e if check is successful and an \u003ca\u003eIncorrectPassword\u003c/a\u003e error\n otherwise\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "authenticatePassword",
          "package": "snap",
          "signature": "AuthUser-\u003e Password-\u003e Maybe AuthFailure",
          "type": "function"
        },
        "index": {
          "description": "Check password for given user Returns Nothing if check is successful and an IncorrectPassword error otherwise",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "authenticatePassword",
          "normalized": "AuthUser-\u003ePassword-\u003eMaybe AuthFailure",
          "package": "snap",
          "partial": "Password",
          "signature": "AuthUser-\u003ePassword-\u003eMaybe AuthFailure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:authenticatePassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStorage back-end\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "backend",
          "package": "snap",
          "signature": "r",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "description": "Storage back-end",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "backend",
          "package": "snap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "checkPassword",
          "package": "snap",
          "signature": "Password -\u003e Password -\u003e Bool",
          "source": "src/Snap-Snaplet-Auth-Types.html#checkPassword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "checkPassword",
          "normalized": "Password-\u003ePassword-\u003eBool",
          "package": "snap",
          "partial": "Password",
          "signature": "Password-\u003ePassword-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:checkPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthenticate and log the user into the current session if successful.\n\u003c/p\u003e\u003cp\u003eThis is a mid-level function exposed to allow roll-your-own ways of looking\n up a user from the database.\n\u003c/p\u003e\u003cp\u003eThis function will:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Check the password\n\u003c/li\u003e\u003cli\u003e Login the user into the current session\n\u003c/li\u003e\u003cli\u003e Mark success/failure of the authentication trial on the user record\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "checkPasswordAndLogin",
          "package": "snap",
          "signature": "AuthUser-\u003e Password-\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
          "type": "function"
        },
        "index": {
          "description": "Authenticate and log the user into the current session if successful This is mid-level function exposed to allow roll-your-own ways of looking up user from the database This function will Check the password Login the user into the current session Mark success failure of the authentication trial on the user record",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "checkPasswordAndLogin",
          "normalized": "AuthUser-\u003ePassword-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
          "package": "snap",
          "partial": "Password And Login",
          "signature": "AuthUser-\u003ePassword-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:checkPasswordAndLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears a user's password reset token.  Call this when the user\n successfully changes their password to ensure that the password reset link\n cannot be used again.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "clearPasswordResetToken",
          "package": "snap",
          "signature": "Text -\u003e Handler b (AuthManager b) Bool",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#clearPasswordResetToken",
          "type": "function"
        },
        "index": {
          "description": "Clears user password reset token Call this when the user successfully changes their password to ensure that the password reset link cannot be used again",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "clearPasswordResetToken",
          "normalized": "Text-\u003eHandler a(AuthManager a)Bool",
          "package": "snap",
          "partial": "Password Reset Token",
          "signature": "Text-\u003eHandler b(AuthManager b)Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:clearPasswordResetToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList containing compiled splices for ifLoggedIn, ifLoggedOut, and\n loggedInUser.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "compiledAuthSplices",
          "package": "snap",
          "signature": "SnapletLens b (AuthManager b) -\u003e Splices (SnapletCSplice b)",
          "source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#compiledAuthSplices",
          "type": "function"
        },
        "index": {
          "description": "List containing compiled splices for ifLoggedIn ifLoggedOut and loggedInUser",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "compiledAuthSplices",
          "normalized": "SnapletLens a(AuthManager a)-\u003eSplices(SnapletCSplice a)",
          "package": "snap",
          "partial": "Auth Splices",
          "signature": "SnapletLens b(AuthManager b)-\u003eSplices(SnapletCSplice b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:compiledAuthSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new user from just a username and password\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "createUser",
          "package": "snap",
          "signature": "Text-\u003e ByteString-\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
          "type": "function"
        },
        "index": {
          "description": "Create new user from just username and password",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "createUser",
          "normalized": "Text-\u003eByteString-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
          "package": "snap",
          "partial": "User",
          "signature": "Text-\u003eByteString-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:createUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current user; trying to remember from cookie if possible.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "currentUser",
          "package": "snap",
          "signature": "Handler b (AuthManager b) (Maybe AuthUser)",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#currentUser",
          "type": "function"
        },
        "index": {
          "description": "Return the current user trying to remember from cookie if possible",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "currentUser",
          "package": "snap",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:currentUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault settings for Auth.\n\u003c/p\u003e\u003cpre\u003e asMinPasswdLen = 8\n asRememberCookieName = \"_remember\"\n asRememberPeriod = Just (2*7*24*60*60) = 2 weeks\n asLockout = Nothing\n asSiteKey = \"site_key.txt\"\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "defAuthSettings",
          "package": "snap",
          "signature": "AuthSettings",
          "source": "src/Snap-Snaplet-Auth-Types.html#defAuthSettings",
          "type": "function"
        },
        "index": {
          "description": "Default settings for Auth asMinPasswdLen asRememberCookieName remember asRememberPeriod Just weeks asLockout Nothing asSiteKey site key.txt",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "defAuthSettings",
          "package": "snap",
          "partial": "Auth Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:defAuthSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault AuthUser that has all empty values.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "defAuthUser",
          "package": "snap",
          "signature": "AuthUser",
          "source": "src/Snap-Snaplet-Auth-Types.html#defAuthUser",
          "type": "function"
        },
        "index": {
          "description": "Default AuthUser that has all empty values",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "defAuthUser",
          "package": "snap",
          "partial": "Auth User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:defAuthUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "destroy",
          "package": "snap",
          "signature": "r -\u003e AuthUser -\u003e IO ()",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#destroy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "destroy",
          "normalized": "a-\u003eAuthUser-\u003eIO()",
          "package": "snap",
          "signature": "r-\u003eAuthUser-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:destroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy the given user\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "destroyUser",
          "package": "snap",
          "signature": "AuthUser -\u003e Handler b (AuthManager b) ()",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#destroyUser",
          "type": "function"
        },
        "index": {
          "description": "Destroy the given user",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "destroyUser",
          "normalized": "AuthUser-\u003eHandler a(AuthManager a)()",
          "package": "snap",
          "partial": "User",
          "signature": "AuthUser-\u003eHandler b(AuthManager b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:destroyUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying encryption function, in case you need it for\n external processing.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "encrypt",
          "package": "snap",
          "signature": "ByteString -\u003e IO ByteString",
          "source": "src/Snap-Snaplet-Auth-Types.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "The underlying encryption function in case you need it for external processing",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "encrypt",
          "normalized": "ByteString-\u003eIO ByteString",
          "package": "snap",
          "signature": "ByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eClearText\u003c/a\u003e\u003c/code\u003e password into an \u003ccode\u003e\u003ca\u003eEncrypted\u003c/a\u003e\u003c/code\u003e password, ready to\n be stuffed into a database.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "encryptPassword",
          "package": "snap",
          "signature": "Password -\u003e IO Password",
          "source": "src/Snap-Snaplet-Auth-Types.html#encryptPassword",
          "type": "function"
        },
        "index": {
          "description": "Turn ClearText password into an Encrypted password ready to be stuffed into database",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "encryptPassword",
          "normalized": "Password-\u003eIO Password",
          "package": "snap",
          "partial": "Password",
          "signature": "Password-\u003eIO Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:encryptPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogin and persist the given \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e in the active session\n\u003c/p\u003e\u003cp\u003eMeant to be used if you have other means of being sure that the person is\n who she says she is.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "forceLogin",
          "package": "snap",
          "signature": "AuthUser-\u003e Handler b (AuthManager b) (Either AuthFailure ())",
          "type": "function"
        },
        "index": {
          "description": "Login and persist the given AuthUser in the active session Meant to be used if you have other means of being sure that the person is who she says she is",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "forceLogin",
          "normalized": "AuthUser-\u003eHandler a(AuthManager a)(Either AuthFailure())",
          "package": "snap",
          "partial": "Login",
          "signature": "AuthUser-\u003eHandler b(AuthManager b)(Either AuthFailure())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:forceLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splice that can be used to check for existence of a user. If a user is\n present, this will run the contents of the node.\n\u003c/p\u003e\u003cpre\u003e \u003cifLoggedIn\u003e Show this when there is a logged in user \u003c/ifLoggedIn\u003e\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "ifLoggedIn",
          "package": "snap",
          "signature": "SnapletLens b (AuthManager b) -\u003e SnapletISplice b",
          "source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#ifLoggedIn",
          "type": "function"
        },
        "index": {
          "description": "splice that can be used to check for existence of user If user is present this will run the contents of the node ifLoggedIn Show this when there is logged in user ifLoggedIn",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "ifLoggedIn",
          "normalized": "SnapletLens a(AuthManager a)-\u003eSnapletISplice a",
          "package": "snap",
          "partial": "Logged In",
          "signature": "SnapletLens b(AuthManager b)-\u003eSnapletISplice b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:ifLoggedIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splice that can be used to check for absence of a user. If a user is\n not present, this will run the contents of the node.\n\u003c/p\u003e\u003cpre\u003e \u003cifLoggedOut\u003e Show this when there is a logged in user \u003c/ifLoggedOut\u003e\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "ifLoggedOut",
          "package": "snap",
          "signature": "SnapletLens b (AuthManager b) -\u003e SnapletISplice b",
          "source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#ifLoggedOut",
          "type": "function"
        },
        "index": {
          "description": "splice that can be used to check for absence of user If user is not present this will run the contents of the node ifLoggedOut Show this when there is logged in user ifLoggedOut",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "ifLoggedOut",
          "normalized": "SnapletLens a(AuthManager a)-\u003eSnapletISplice a",
          "package": "snap",
          "partial": "Logged Out",
          "signature": "SnapletLens b(AuthManager b)-\u003eSnapletISplice b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:ifLoggedOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience wrapper around \u003ccode\u003erememberUser\u003c/code\u003e that returns a bool result\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "isLoggedIn",
          "package": "snap",
          "signature": "Handler b (AuthManager b) Bool",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#isLoggedIn",
          "type": "function"
        },
        "index": {
          "description": "Convenience wrapper around rememberUser that returns bool result",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "isLoggedIn",
          "package": "snap",
          "partial": "Logged In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:isLoggedIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLockout after x tries, re-allow entry after y seconds\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "lockout",
          "package": "snap",
          "signature": "Maybe (Int, NominalDiffTime)",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "description": "Lockout after tries re-allow entry after seconds",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "lockout",
          "normalized": "Maybe(Int,NominalDiffTime)",
          "package": "snap",
          "signature": "Maybe(Int,NominalDiffTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:lockout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA splice that will simply print the current user's login, if\n there is one.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "loggedInUser",
          "package": "snap",
          "signature": "SnapletLens b (AuthManager b) -\u003e SnapletISplice b",
          "source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#loggedInUser",
          "type": "function"
        },
        "index": {
          "description": "splice that will simply print the current user login if there is one",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "loggedInUser",
          "normalized": "SnapletLens a(AuthManager a)-\u003eSnapletISplice a",
          "package": "snap",
          "partial": "In User",
          "signature": "SnapletLens b(AuthManager b)-\u003eSnapletISplice b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:loggedInUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemember user from the remember token if possible and perform login\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "loginByRememberToken",
          "package": "snap",
          "signature": "Handler b (AuthManager b) (Either AuthFailure AuthUser)",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#loginByRememberToken",
          "type": "function"
        },
        "index": {
          "description": "Remember user from the remember token if possible and perform login",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "loginByRememberToken",
          "package": "snap",
          "partial": "By Remember Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:loginByRememberToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a user by her username, check given password and perform login\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "loginByUsername",
          "package": "snap",
          "signature": "Text-\u003e Password-\u003e Bool-\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
          "type": "function"
        },
        "index": {
          "description": "Lookup user by her username check given password and perform login",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "loginByUsername",
          "normalized": "Text-\u003ePassword-\u003eBool-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
          "package": "snap",
          "partial": "By Username",
          "signature": "Text-\u003ePassword-\u003eBool-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:loginByUsername"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e handler that processes a login form.\n\u003c/p\u003e\u003cp\u003eThe request paremeters are passed to \u003ccode\u003eperformLogin\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTo make your users stay logged in for longer than the session replay\n prevention timeout, you must pass a field name as the third parameter and\n that field must be set to a value of \"1\" by the submitting form.  This\n lets you use a user selectable check box.  Or if you want user remembering\n always turned on, you can use a hidden form field.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "loginUser",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Maybe ByteString-\u003e (AuthFailure -\u003e Handler b (AuthManager b) ())-\u003e Handler b (AuthManager b) ()-\u003e Handler b (AuthManager b) ()",
          "type": "function"
        },
        "index": {
          "description": "MonadSnap handler that processes login form The request paremeters are passed to performLogin To make your users stay logged in for longer than the session replay prevention timeout you must pass field name as the third parameter and that field must be set to value of by the submitting form This lets you use user selectable check box Or if you want user remembering always turned on you can use hidden form field",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "loginUser",
          "normalized": "ByteString-\u003eByteString-\u003eMaybe ByteString-\u003e(AuthFailure-\u003eHandler a(AuthManager a)())-\u003eHandler a(AuthManager a)()-\u003eHandler a(AuthManager a)()",
          "package": "snap",
          "partial": "User",
          "signature": "ByteString-\u003eByteString-\u003eMaybe ByteString-\u003e(AuthFailure-\u003eHandler b(AuthManager b)())-\u003eHandler b(AuthManager b)()-\u003eHandler b(AuthManager b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:loginUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogout the active user\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "logout",
          "package": "snap",
          "signature": "Handler b (AuthManager b) ()",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#logout",
          "type": "function"
        },
        "index": {
          "description": "Logout the active user",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "logout",
          "normalized": "Handler a(AuthManager a)()",
          "package": "snap",
          "signature": "Handler b(AuthManager b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:logout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple handler to log the user out. Deletes user from session.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "logoutUser",
          "package": "snap",
          "signature": "Handler b (AuthManager b) ()-\u003e Handler b (AuthManager b) ()",
          "type": "function"
        },
        "index": {
          "description": "Simple handler to log the user out Deletes user from session",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "logoutUser",
          "normalized": "Handler a(AuthManager a)()-\u003eHandler a(AuthManager a)()",
          "package": "snap",
          "partial": "User",
          "signature": "Handler b(AuthManager b)()-\u003eHandler b(AuthManager b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:logoutUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "lookupByLogin",
          "package": "snap",
          "signature": "r -\u003e Text -\u003e IO (Maybe AuthUser)",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#lookupByLogin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "lookupByLogin",
          "normalized": "a-\u003eText-\u003eIO(Maybe AuthUser)",
          "package": "snap",
          "partial": "By Login",
          "signature": "r-\u003eText-\u003eIO(Maybe AuthUser)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:lookupByLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "lookupByRememberToken",
          "package": "snap",
          "signature": "r -\u003e Text -\u003e IO (Maybe AuthUser)",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#lookupByRememberToken",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "lookupByRememberToken",
          "normalized": "a-\u003eText-\u003eIO(Maybe AuthUser)",
          "package": "snap",
          "partial": "By Remember Token",
          "signature": "r-\u003eText-\u003eIO(Maybe AuthUser)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:lookupByRememberToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "lookupByUserId",
          "package": "snap",
          "signature": "r -\u003e UserId -\u003e IO (Maybe AuthUser)",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#lookupByUserId",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "lookupByUserId",
          "normalized": "a-\u003eUserId-\u003eIO(Maybe AuthUser)",
          "package": "snap",
          "partial": "By User Id",
          "signature": "r-\u003eUserId-\u003eIO(Maybe AuthUser)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:lookupByUserId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate an \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e, marking failed authentication\n\u003c/p\u003e\u003cp\u003eThis will save the user to the backend.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "markAuthFail",
          "package": "snap",
          "signature": "AuthUser -\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#markAuthFail",
          "type": "function"
        },
        "index": {
          "description": "Mutate an AuthUser marking failed authentication This will save the user to the backend",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "markAuthFail",
          "normalized": "AuthUser-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
          "package": "snap",
          "partial": "Auth Fail",
          "signature": "AuthUser-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:markAuthFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate an \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e, marking successful authentication\n\u003c/p\u003e\u003cp\u003eThis will save the user to the backend.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "markAuthSuccess",
          "package": "snap",
          "signature": "AuthUser -\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#markAuthSuccess",
          "type": "function"
        },
        "index": {
          "description": "Mutate an AuthUser marking successful authentication This will save the user to the backend",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "markAuthSuccess",
          "normalized": "AuthUser-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
          "package": "snap",
          "partial": "Auth Success",
          "signature": "AuthUser-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:markAuthSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePassword length range\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "minPasswdLen",
          "package": "snap",
          "signature": "Int",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "description": "Password length range",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "minPasswdLen",
          "package": "snap",
          "partial": "Passwd Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:minPasswdLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom number generator\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "randomNumberGenerator",
          "package": "snap",
          "signature": "RNG",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "description": "Random number generator",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "randomNumberGenerator",
          "package": "snap",
          "partial": "Number Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:randomNumberGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister a new user by specifying login and password \u003ccode\u003eParam\u003c/code\u003e fields\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "registerUser",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
          "type": "function"
        },
        "index": {
          "description": "Register new user by specifying login and password Param fields",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "registerUser",
          "normalized": "ByteString-\u003eByteString-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
          "package": "snap",
          "partial": "User",
          "signature": "ByteString-\u003eByteString-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:registerUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookie name for the remember token\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "rememberCookieName",
          "package": "snap",
          "signature": "ByteString",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "description": "Cookie name for the remember token",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "rememberCookieName",
          "package": "snap",
          "partial": "Cookie Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:rememberCookieName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemember period in seconds. Defaults to 2 weeks.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "rememberPeriod",
          "package": "snap",
          "signature": "Maybe Int",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "description": "Remember period in seconds Defaults to weeks",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "rememberPeriod",
          "package": "snap",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:rememberPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire that an authenticated \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e is present in the current\n session.\n\u003c/p\u003e\u003cp\u003eThis function has no DB cost - only checks to see if a user_id is present\n in the current session.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "requireUser",
          "package": "snap",
          "signature": "SnapletLens b (AuthManager b)-\u003e Handler b v a-\u003e Handler b v a-\u003e Handler b v a",
          "type": "function"
        },
        "index": {
          "description": "Require that an authenticated AuthUser is present in the current session This function has no DB cost only checks to see if user id is present in the current session",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "requireUser",
          "normalized": "SnapletLens a(AuthManager a)-\u003eHandler a b c-\u003eHandler a b c-\u003eHandler a b c",
          "package": "snap",
          "partial": "User",
          "signature": "SnapletLens b(AuthManager b)-\u003eHandler b v a-\u003eHandler b v a-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:requireUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate or update the given \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e record.  A \u003ccode\u003e\u003ca\u003euserId\u003c/a\u003e\u003c/code\u003e of Nothing\n indicates that a new user should be created, otherwise the user\n information for that userId should be updated.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "save",
          "package": "snap",
          "signature": "r -\u003e AuthUser -\u003e IO (Either AuthFailure AuthUser)",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#save",
          "type": "method"
        },
        "index": {
          "description": "Create or update the given AuthUser record userId of Nothing indicates that new user should be created otherwise the user information for that userId should be updated",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "save",
          "normalized": "a-\u003eAuthUser-\u003eIO(Either AuthFailure AuthUser)",
          "package": "snap",
          "signature": "r-\u003eAuthUser-\u003eIO(Either AuthFailure AuthUser)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate or update a given user\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "saveUser",
          "package": "snap",
          "signature": "AuthUser -\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#saveUser",
          "type": "function"
        },
        "index": {
          "description": "Create or update given user",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "saveUser",
          "normalized": "AuthUser-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
          "package": "snap",
          "partial": "User",
          "signature": "AuthUser-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:saveUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens pointer to a SessionManager\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "session",
          "package": "snap",
          "signature": "SnapletLens b SessionManager",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "description": "lens pointer to SessionManager",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "session",
          "package": "snap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a new password for the given user. Given password should be\n clear-text; it will be encrypted into a \u003ccode\u003e\u003ca\u003eEncrypted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "setPassword",
          "package": "snap",
          "signature": "AuthUser -\u003e ByteString -\u003e IO AuthUser",
          "source": "src/Snap-Snaplet-Auth-Types.html#setPassword",
          "type": "function"
        },
        "index": {
          "description": "Set new password for the given user Given password should be clear-text it will be encrypted into Encrypted",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "setPassword",
          "normalized": "AuthUser-\u003eByteString-\u003eIO AuthUser",
          "package": "snap",
          "partial": "Password",
          "signature": "AuthUser-\u003eByteString-\u003eIO AuthUser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:setPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function generates a random password reset token and stores it in\n the database for the user.  Call this function when a user forgets their\n password.  Then use the token to autogenerate a link that the user can\n visit to reset their password.  This function also sets a timestamp so the\n reset token can be expired.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "setPasswordResetToken",
          "package": "snap",
          "signature": "Text -\u003e Handler b (AuthManager b) (Maybe Text)",
          "source": "src/Snap-Snaplet-Auth-Handlers.html#setPasswordResetToken",
          "type": "function"
        },
        "index": {
          "description": "This function generates random password reset token and stores it in the database for the user Call this function when user forgets their password Then use the token to autogenerate link that the user can visit to reset their password This function also sets timestamp so the reset token can be expired",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "setPasswordResetToken",
          "normalized": "Text-\u003eHandler a(AuthManager a)(Maybe Text)",
          "package": "snap",
          "partial": "Password Reset Token",
          "signature": "Text-\u003eHandler b(AuthManager b)(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:setPasswordResetToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unique encryption key used to encrypt remember cookie\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "siteKey",
          "package": "snap",
          "signature": "Key",
          "source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
          "type": "function"
        },
        "index": {
          "description": "unique encryption key used to encrypt remember cookie",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "siteKey",
          "package": "snap",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:siteKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "unUid",
          "package": "snap",
          "signature": "Text",
          "source": "src/Snap-Snaplet-Auth-Types.html#UserId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "unUid",
          "package": "snap",
          "partial": "Uid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:unUid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userActivatedAt",
          "package": "snap",
          "signature": "Maybe UTCTime",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userActivatedAt",
          "package": "snap",
          "partial": "Activated At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userActivatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiled splices for AuthUser.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "userCSplices",
          "package": "snap",
          "signature": "Splices (RuntimeSplice m AuthUser -\u003e Splice m)",
          "source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#userCSplices",
          "type": "function"
        },
        "index": {
          "description": "Compiled splices for AuthUser",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userCSplices",
          "normalized": "Splices(RuntimeSplice a AuthUser-\u003eSplice a)",
          "package": "snap",
          "partial": "CSplices",
          "signature": "Splices(RuntimeSplice m AuthUser-\u003eSplice m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userCSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userCreatedAt",
          "package": "snap",
          "signature": "Maybe UTCTime",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userCreatedAt",
          "package": "snap",
          "partial": "Created At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userCreatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userCurrentLoginAt",
          "package": "snap",
          "signature": "Maybe UTCTime",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userCurrentLoginAt",
          "package": "snap",
          "partial": "Current Login At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userCurrentLoginAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userCurrentLoginIp",
          "package": "snap",
          "signature": "Maybe ByteString",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userCurrentLoginIp",
          "package": "snap",
          "partial": "Current Login Ip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userCurrentLoginIp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userEmail",
          "package": "snap",
          "signature": "Maybe Text",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userEmail",
          "package": "snap",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userFailedLoginCount",
          "package": "snap",
          "signature": "Int",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userFailedLoginCount",
          "package": "snap",
          "partial": "Failed Login Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userFailedLoginCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to generate interpreted splices from an AuthUser.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "userISplices",
          "package": "snap",
          "signature": "AuthUser -\u003e Splices (Splice m)",
          "source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#userISplices",
          "type": "function"
        },
        "index": {
          "description": "Function to generate interpreted splices from an AuthUser",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userISplices",
          "normalized": "AuthUser-\u003eSplices(Splice a)",
          "package": "snap",
          "partial": "ISplices",
          "signature": "AuthUser-\u003eSplices(Splice m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userISplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userId",
          "package": "snap",
          "signature": "Maybe UserId",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userId",
          "package": "snap",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userLastLoginAt",
          "package": "snap",
          "signature": "Maybe UTCTime",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userLastLoginAt",
          "package": "snap",
          "partial": "Last Login At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLastLoginAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userLastLoginIp",
          "package": "snap",
          "signature": "Maybe ByteString",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userLastLoginIp",
          "package": "snap",
          "partial": "Last Login Ip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLastLoginIp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userLockedOutUntil",
          "package": "snap",
          "signature": "Maybe UTCTime",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userLockedOutUntil",
          "package": "snap",
          "partial": "Locked Out Until",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLockedOutUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userLogin",
          "package": "snap",
          "signature": "Text",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userLogin",
          "package": "snap",
          "partial": "Login",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLogin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userLoginCount",
          "package": "snap",
          "signature": "Int",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userLoginCount",
          "package": "snap",
          "partial": "Login Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLoginCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userMeta",
          "package": "snap",
          "signature": "HashMap Text Value",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userMeta",
          "package": "snap",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userPassword",
          "package": "snap",
          "signature": "Maybe Password",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userPassword",
          "package": "snap",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userRememberToken",
          "package": "snap",
          "signature": "Maybe Text",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userRememberToken",
          "package": "snap",
          "partial": "Remember Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userRememberToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userResetRequestedAt",
          "package": "snap",
          "signature": "Maybe UTCTime",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userResetRequestedAt",
          "package": "snap",
          "partial": "Reset Requested At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userResetRequestedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userResetToken",
          "package": "snap",
          "signature": "Maybe Text",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userResetToken",
          "package": "snap",
          "partial": "Reset Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userResetToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userRoles",
          "package": "snap",
          "signature": "[Role]",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userRoles",
          "normalized": "[Role]",
          "package": "snap",
          "partial": "Roles",
          "signature": "[Role]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userRoles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userSuspendedAt",
          "package": "snap",
          "signature": "Maybe UTCTime",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userSuspendedAt",
          "package": "snap",
          "partial": "Suspended At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userSuspendedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Auth",
          "name": "userUpdatedAt",
          "package": "snap",
          "signature": "Maybe UTCTime",
          "source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "userUpdatedAt",
          "package": "snap",
          "partial": "Updated At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userUpdatedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a user with the given username exists.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "usernameExists",
          "package": "snap",
          "signature": "Text-\u003e Handler b (AuthManager b) Bool",
          "type": "function"
        },
        "index": {
          "description": "Check whether user with the given username exists",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "usernameExists",
          "normalized": "Text-\u003eHandler a(AuthManager a)Bool",
          "package": "snap",
          "partial": "Exists",
          "signature": "Text-\u003eHandler b(AuthManager b)Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:usernameExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying verify function, in case you need it for external\n processing.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "verify",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The underlying verify function in case you need it for external processing",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "verify",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "snap",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:verify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a function on the backend, and return the result.\n\u003c/p\u003e\u003cp\u003eThis uses an existential type so that the backend type doesn't\n \u003ccode\u003eescape\u003c/code\u003e AuthManager.  The reason that the type is Handler b\n (AuthManager v) a and not a is because anything that uses the\n backend will return an IO something, which you can liftIO, or a\n Handler b (AuthManager v) a if it uses other handler things.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Auth",
          "name": "withBackend",
          "package": "snap",
          "signature": "r -\u003e Handler b (AuthManager v) a)-\u003e Handler b (AuthManager v) a",
          "type": "function"
        },
        "index": {
          "description": "Run function on the backend and return the result This uses an existential type so that the backend type doesn escape AuthManager The reason that the type is Handler AuthManager and not is because anything that uses the backend will return an IO something which you can liftIO or Handler AuthManager if it uses other handler things",
          "hierarchy": "Snap Snaplet Auth",
          "module": "Snap.Snaplet.Auth",
          "name": "withBackend",
          "normalized": "a-\u003eHandler b(AuthManager c)d)-\u003eHandler b(AuthManager c)d",
          "package": "snap",
          "partial": "Backend",
          "signature": "r-\u003eHandler b(AuthManager v)a)-\u003eHandler b(AuthManager v)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:withBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Config",
          "name": "Config",
          "package": "snap",
          "source": "src/Snap-Snaplet-Config.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet Config",
          "module": "Snap.Snaplet.Config",
          "name": "Config",
          "package": "snap",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppConfig contains the config options for command line arguments in\n snaplet-based apps.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Config",
          "name": "AppConfig",
          "package": "snap",
          "source": "src/Snap-Snaplet-Config.html#AppConfig",
          "type": "newtype"
        },
        "index": {
          "description": "AppConfig contains the config options for command line arguments in snaplet-based apps",
          "hierarchy": "Snap Snaplet Config",
          "module": "Snap.Snaplet.Config",
          "name": "AppConfig",
          "package": "snap",
          "partial": "App Config",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#t:AppConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Config",
          "name": "AppConfig",
          "package": "snap",
          "signature": "AppConfig",
          "source": "src/Snap-Snaplet-Config.html#AppConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Config",
          "module": "Snap.Snaplet.Config",
          "name": "AppConfig",
          "package": "snap",
          "partial": "App Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:AppConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppConfig has a manual instance of Typeable due to limitations in the\n tools available before GHC 7.4, and the need to make dynamic loading\n tractable.  When support for earlier versions of GHC is dropped, the\n dynamic loader package can be updated so that manual Typeable instances\n are no longer needed.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Config",
          "name": "appConfigTyCon",
          "package": "snap",
          "signature": "TyCon",
          "source": "src/Snap-Snaplet-Config.html#appConfigTyCon",
          "type": "function"
        },
        "index": {
          "description": "AppConfig has manual instance of Typeable due to limitations in the tools available before GHC and the need to make dynamic loading tractable When support for earlier versions of GHC is dropped the dynamic loader package can be updated so that manual Typeable instances are no longer needed",
          "hierarchy": "Snap Snaplet Config",
          "module": "Snap.Snaplet.Config",
          "name": "appConfigTyCon",
          "package": "snap",
          "partial": "Config Ty Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:appConfigTyCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Config",
          "name": "appEnvironment",
          "package": "snap",
          "signature": "Maybe String",
          "source": "src/Snap-Snaplet-Config.html#AppConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Config",
          "module": "Snap.Snaplet.Config",
          "name": "appEnvironment",
          "package": "snap",
          "partial": "Environment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:appEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand line options for snaplet applications.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Config",
          "name": "appOpts",
          "package": "snap",
          "signature": "AppConfig -\u003e [OptDescr (Maybe (Config m AppConfig))]",
          "source": "src/Snap-Snaplet-Config.html#appOpts",
          "type": "function"
        },
        "index": {
          "description": "Command line options for snaplet applications",
          "hierarchy": "Snap Snaplet Config",
          "module": "Snap.Snaplet.Config",
          "name": "appOpts",
          "normalized": "AppConfig-\u003e[OptDescr(Maybe(Config a AppConfig))]",
          "package": "snap",
          "partial": "Opts",
          "signature": "AppConfig-\u003e[OptDescr(Maybe(Config m AppConfig))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:appOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls snap-server's extendedCommandLineConfig to add snaplet options to\n the built-in server command line options.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Config",
          "name": "commandLineAppConfig",
          "package": "snap",
          "signature": "Config m AppConfig -\u003e IO (Config m AppConfig)",
          "source": "src/Snap-Snaplet-Config.html#commandLineAppConfig",
          "type": "function"
        },
        "index": {
          "description": "Calls snap-server extendedCommandLineConfig to add snaplet options to the built-in server command line options",
          "hierarchy": "Snap Snaplet Config",
          "module": "Snap.Snaplet.Config",
          "name": "commandLineAppConfig",
          "normalized": "Config a AppConfig-\u003eIO(Config a AppConfig)",
          "package": "snap",
          "partial": "Line App Config",
          "signature": "Config m AppConfig-\u003eIO(Config m AppConfig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:commandLineAppConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module exporting only functions for using compiled templates.  If you\nimport the main Snap.Snaplet.Heist module, it's easy to accidentally use\nthe interpreted render function even when you're using compiled Heist.\nImporting only this module will make it harder to make mistakes like that.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "Compiled",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist-Compiled.html",
          "type": "module"
        },
        "index": {
          "description": "module exporting only functions for using compiled templates If you import the main Snap.Snaplet.Heist module it easy to accidentally use the interpreted render function even when you re using compiled Heist Importing only this module will make it harder to make mistakes like that",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "Compiled",
          "package": "snap",
          "partial": "Compiled",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single snaplet should never need more than one instance of Heist as a\n subsnaplet.  This type class allows you to make it easy for other snaplets\n to get the lens that identifies the heist snaplet.  Here's an example of\n how the heist snaplet might be declared:\n\u003c/p\u003e\u003cpre\u003e data App = App { _heist :: Snaplet (Heist App) }\n makeLenses ''App\n\n instance HasHeist App where heistLens = subSnaplet heist\n\n appInit = makeSnaplet \"app\" \"\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"templates\"\n     addConfig h heistConfigWithMyAppSplices\n     return $ App h\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "HasHeist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist.html#HasHeist",
          "type": "class"
        },
        "index": {
          "description": "single snaplet should never need more than one instance of Heist as subsnaplet This type class allows you to make it easy for other snaplets to get the lens that identifies the heist snaplet Here an example of how the heist snaplet might be declared data App App heist Snaplet Heist App makeLenses App instance HasHeist App where heistLens subSnaplet heist appInit makeSnaplet app Nothing do nestSnaplet heist heist heistInit templates addConfig heistConfigWithMyAppSplices return App",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "HasHeist",
          "package": "snap",
          "partial": "Has Heist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#t:HasHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "Heist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
          "type": "data"
        },
        "index": {
          "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "Heist",
          "package": "snap",
          "partial": "Heist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#t:Heist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "SnapletCSplice",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletCSplice",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "SnapletCSplice",
          "package": "snap",
          "partial": "Snaplet CSplice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#t:SnapletCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "SnapletHeist",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "SnapletHeist",
          "package": "snap",
          "partial": "Snaplet Heist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#t:SnapletHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds more HeistConfig data using mappend with whatever is currently\n there.  This is the preferred method for adding all four kinds of splices\n as well as new templates.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\",\"Snap.Snaplet.HeistNoClass\"]",
          "name": "addConfig",
          "package": "snap",
          "signature": "Snaplet (Heist b) -\u003e HeistConfig (Handler b b) -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#addConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:addConfig\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:addConfig\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:addConfig\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:addConfig\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:addConfig\"]"
        },
        "index": {
          "description": "Adds more HeistConfig data using mappend with whatever is currently there This is the preferred method for adding all four kinds of splices as well as new templates",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "addConfig",
          "normalized": "Snaplet(Heist a)-\u003eHeistConfig(Handler a a)-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Config",
          "signature": "Snaplet(Heist b)-\u003eHeistConfig(Handler b b)-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:addConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds templates to the Heist HeistState.  Other snaplets should use\n this function to add their own templates.  The templates are automatically\n read from the templates directory in the current snaplet's filesystem root.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "addTemplates",
          "package": "snap",
          "signature": "Snaplet (Heist b)-\u003e ByteString-\u003e Initializer b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:addTemplates\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:addTemplates\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:addTemplates\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:addTemplates\"]"
        },
        "index": {
          "description": "Adds templates to the Heist HeistState Other snaplets should use this function to add their own templates The templates are automatically read from the templates directory in the current snaplet filesystem root",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "addTemplates",
          "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Templates",
          "signature": "Snaplet(Heist b)-\u003eByteString-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:addTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds templates to the Heist HeistState, and lets you specify where\n they are found in the filesystem.  Note that the path to the template\n directory is an absolute path.  This allows you more flexibility in where\n your templates are located, but means that you have to explicitly call\n getSnapletFilePath if you want your snaplet to use templates within its\n normal directory structure.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "addTemplatesAt",
          "package": "snap",
          "signature": "Snaplet (Heist b)-\u003e ByteString-\u003e FilePath-\u003e Initializer b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:addTemplatesAt\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:addTemplatesAt\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:addTemplatesAt\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:addTemplatesAt\"]"
        },
        "index": {
          "description": "Adds templates to the Heist HeistState and lets you specify where they are found in the filesystem Note that the path to the template directory is an absolute path This allows you more flexibility in where your templates are located but means that you have to explicitly call getSnapletFilePath if you want your snaplet to use templates within its normal directory structure",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "addTemplatesAt",
          "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eFilePath-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Templates At",
          "signature": "Snaplet(Heist b)-\u003eByteString-\u003eFilePath-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:addTemplatesAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears data stored by the cache tag.  The cache tag automatically reloads\n its data when the specified TTL expires, but sometimes you may want to\n trigger a manual reload.  This function lets you do that.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\",\"Snap.Snaplet.HeistNoClass\"]",
          "name": "clearHeistCache",
          "package": "snap",
          "signature": "Heist b -\u003e IO ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#clearHeistCache",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:clearHeistCache\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:clearHeistCache\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:clearHeistCache\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:clearHeistCache\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:clearHeistCache\"]"
        },
        "index": {
          "description": "Clears data stored by the cache tag The cache tag automatically reloads its data when the specified TTL expires but sometimes you may want to trigger manual reload This function lets you do that",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "clearHeistCache",
          "normalized": "Heist a-\u003eIO()",
          "package": "snap",
          "partial": "Heist Cache",
          "signature": "Heist b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:clearHeistCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "getHeistState",
          "package": "snap",
          "signature": "Handler b v (HeistState (Handler b b))",
          "source": "src/Snap-Snaplet-Heist.html#getHeistState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:getHeistState\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:getHeistState\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:getHeistState\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:getHeistState\"]"
        },
        "index": {
          "description": "More general function allowing arbitrary HeistState modification",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "getHeistState",
          "package": "snap",
          "partial": "Heist State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:getHeistState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e. This function is a convenience wrapper\n around \u003ccode\u003eheistInit'\u003c/code\u003e that uses defaultHeistState and sets up routes for all\n the templates.  It sets up a \"heistReload\" route that reloads the heist\n templates when you request it from localhost.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "heistInit",
          "package": "snap",
          "signature": "FilePath-\u003e SnapletInit b (Heist b)",
          "type": "function"
        },
        "index": {
          "description": "The Initializer for Heist This function is convenience wrapper around heistInit that uses defaultHeistState and sets up routes for all the templates It sets up heistReload route that reloads the heist templates when you request it from localhost",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "heistInit",
          "normalized": "FilePath-\u003eSnapletInit a(Heist a)",
          "package": "snap",
          "partial": "Init",
          "signature": "FilePath-\u003eSnapletInit b(Heist b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lower level \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e.  This initializer requires you\n to specify the initial HeistConfig.  It also does not add any routes for\n templates, allowing you complete control over which templates get routed.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\",\"Snap.Snaplet.HeistNoClass\"]",
          "name": "heistInit'",
          "package": "snap",
          "signature": "FilePath-\u003e HeistConfig (Handler b b)-\u003e SnapletInit b (Heist b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistInit-39-\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistInit-39-\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistInit-39-\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistInit-39-\"]"
        },
        "index": {
          "description": "lower level Initializer for Heist This initializer requires you to specify the initial HeistConfig It also does not add any routes for templates allowing you complete control over which templates get routed",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "heistInit'",
          "normalized": "FilePath-\u003eHeistConfig(Handler a a)-\u003eSnapletInit a(Heist a)",
          "package": "snap",
          "partial": "Init'",
          "signature": "FilePath-\u003eHeistConfig(Handler b b)-\u003eSnapletInit b(Heist b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistInit-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens to the Heist snaplet.  The b parameter to Heist will\n typically be the base state of your application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "heistLens",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b)",
          "source": "src/Snap-Snaplet-Heist.html#heistLens",
          "type": "method"
        },
        "index": {
          "description": "lens to the Heist snaplet The parameter to Heist will typically be the base state of your application",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "heistLens",
          "package": "snap",
          "partial": "Lens",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler that triggers a template reload.  For large sites, this can be\n desireable because it may be much quicker than the full site reload\n provided at the \u003cem\u003eadmin\u003c/em\u003ereload route.  This allows you to reload only the\n heist templates  This handler is automatically set up by heistInit, but if\n you use heistInit', then you can create your own route with it.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist\",\"Snap.Snaplet.HeistNoClass\"]",
          "name": "heistReloader",
          "package": "snap",
          "signature": "Handler b (Heist b) ()",
          "source": "src/Snap-Snaplet-Heist-Internal.html#heistReloader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistReloader\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistReloader\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistReloader\"]"
        },
        "index": {
          "description": "Handler that triggers template reload For large sites this can be desireable because it may be much quicker than the full site reload provided at the admin reload route This allows you to reload only the heist templates This handler is automatically set up by heistInit but if you use heistInit then you can create your own route with it",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "heistReloader",
          "normalized": "Handler a(Heist a)()",
          "package": "snap",
          "partial": "Reloader",
          "signature": "Handler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistReloader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler that serves all the templates (similar to \u003ccode\u003eserveDirectory\u003c/code\u003e).\n If the template specified in the request path is not found, it returns\n \u003ccode\u003eempty\u003c/code\u003e.  Also, this function does not serve any templates beginning with\n an underscore.  This gives you a way to prevent some templates from being\n served.  For example, you might have a template that contains only the\n navbar of your pages, and you probably wouldn't want that template to be\n visible to the user as a standalone template.  So if you put it in a file\n called \"_nav.tpl\", this function won't serve it.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "heistServe",
          "package": "snap",
          "signature": "Handler b v ()",
          "source": "src/Snap-Snaplet-Heist-Compiled.html#heistServe",
          "type": "function"
        },
        "index": {
          "description": "handler that serves all the templates similar to serveDirectory If the template specified in the request path is not found it returns empty Also this function does not serve any templates beginning with an underscore This gives you way to prevent some templates from being served For example you might have template that contains only the navbar of your pages and you probably wouldn want that template to be visible to the user as standalone template So if you put it in file called nav.tpl this function won serve it",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "heistServe",
          "normalized": "Handler a b()",
          "package": "snap",
          "partial": "Serve",
          "signature": "Handler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler for serving a single template (similar to \u003ccode\u003efileServeSingle\u003c/code\u003e). If\n the given template is not found, this throws an error.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "heistServeSingle",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistServeSingle\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistServeSingle\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistServeSingle\"]"
        },
        "index": {
          "description": "Handler for serving single template similar to fileServeSingle If the given template is not found this throws an error",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "heistServeSingle",
          "normalized": "ByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "Serve Single",
          "signature": "ByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistServeSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "modifyHeistState",
          "package": "snap",
          "signature": "(HeistState (Handler b b) -\u003e HeistState (Handler b b))-\u003e Initializer b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:modifyHeistState\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:modifyHeistState\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:modifyHeistState\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:modifyHeistState\"]"
        },
        "index": {
          "description": "More general function allowing arbitrary HeistState modification",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "modifyHeistState",
          "normalized": "(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Heist State",
          "signature": "(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:modifyHeistState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a compiled template as text/html. If the given template is not\n found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "render",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b v ()",
          "type": "function"
        },
        "index": {
          "description": "Renders compiled template as text html If the given template is not found this returns empty",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "render",
          "normalized": "ByteString-\u003eHandler a b()",
          "package": "snap",
          "signature": "ByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a compiled template as the given content type.  If the given\n template is not found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "renderAs",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
          "type": "function"
        },
        "index": {
          "description": "Renders compiled template as the given content type If the given template is not found this returns empty",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "renderAs",
          "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "As",
          "signature": "ByteString-\u003eByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:renderAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a function on with the Heist snaplet's \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Compiled\",\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "withHeistState",
          "package": "snap",
          "signature": "(HeistState (Handler b b) -\u003e a)-\u003e Handler b v a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:withHeistState\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:withHeistState\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:withHeistState\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:withHeistState\"]"
        },
        "index": {
          "description": "Runs function on with the Heist snaplet HeistState",
          "hierarchy": "Snap Snaplet Heist Compiled",
          "module": "Snap.Snaplet.Heist.Compiled",
          "name": "withHeistState",
          "normalized": "(HeistState(Handler a a)-\u003eb)-\u003eHandler a c b",
          "package": "snap",
          "partial": "Heist State",
          "signature": "(HeistState(Handler b b)-\u003ea)-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:withHeistState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module exporting only generic functions that choose between compiled and\ninterpreted mode based on the setting specified in the initializer.  This\nmodule is most useful for writitng general snaplets that use Heist and are\nmeant to be used in applications that might use either interpreted or compiled\ntemplates.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "Generic",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "module exporting only generic functions that choose between compiled and interpreted mode based on the setting specified in the initializer This module is most useful for writitng general snaplets that use Heist and are meant to be used in applications that might use either interpreted or compiled templates",
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "Generic",
          "package": "snap",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single snaplet should never need more than one instance of Heist as a\n subsnaplet.  This type class allows you to make it easy for other snaplets\n to get the lens that identifies the heist snaplet.  Here's an example of\n how the heist snaplet might be declared:\n\u003c/p\u003e\u003cpre\u003e data App = App { _heist :: Snaplet (Heist App) }\n makeLenses ''App\n\n instance HasHeist App where heistLens = subSnaplet heist\n\n appInit = makeSnaplet \"app\" \"\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"templates\"\n     addConfig h heistConfigWithMyAppSplices\n     return $ App h\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "HasHeist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist.html#HasHeist",
          "type": "class"
        },
        "index": {
          "description": "single snaplet should never need more than one instance of Heist as subsnaplet This type class allows you to make it easy for other snaplets to get the lens that identifies the heist snaplet Here an example of how the heist snaplet might be declared data App App heist Snaplet Heist App makeLenses App instance HasHeist App where heistLens subSnaplet heist appInit makeSnaplet app Nothing do nestSnaplet heist heist heistInit templates addConfig heistConfigWithMyAppSplices return App",
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "HasHeist",
          "package": "snap",
          "partial": "Has Heist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#t:HasHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "Heist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
          "type": "data"
        },
        "index": {
          "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "Heist",
          "package": "snap",
          "partial": "Heist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#t:Heist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "SnapletCSplice",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletCSplice",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "SnapletCSplice",
          "package": "snap",
          "partial": "Snaplet CSplice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#t:SnapletCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "SnapletHeist",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "SnapletHeist",
          "package": "snap",
          "partial": "Snaplet Heist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#t:SnapletHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChooses between a compiled action and an interpreted action based on the\n configured default.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist\"]",
          "name": "chooseMode",
          "package": "snap",
          "signature": "Handler b v a-\u003e Handler b v a-\u003e Handler b v a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:chooseMode\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:chooseMode\"]"
        },
        "index": {
          "description": "Chooses between compiled action and an interpreted action based on the configured default",
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "chooseMode",
          "normalized": "Handler a b c-\u003eHandler a b c-\u003eHandler a b c",
          "package": "snap",
          "partial": "Mode",
          "signature": "Handler b v a-\u003eHandler b v a-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:chooseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of 'heistServe'/'cHeistServe'.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist\"]",
          "name": "gHeistServe",
          "package": "snap",
          "signature": "Handler b v ()",
          "source": "src/Snap-Snaplet-Heist.html#gHeistServe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gHeistServe\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:gHeistServe\"]"
        },
        "index": {
          "description": "Generic version of heistServe cHeistServe",
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "gHeistServe",
          "normalized": "Handler a b()",
          "package": "snap",
          "partial": "Heist Serve",
          "signature": "Handler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gHeistServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of 'heistServeSingle'/'cHeistServeSingle'.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist\"]",
          "name": "gHeistServeSingle",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gHeistServeSingle\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:gHeistServeSingle\"]"
        },
        "index": {
          "description": "Generic version of heistServeSingle cHeistServeSingle",
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "gHeistServeSingle",
          "normalized": "ByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "Heist Serve Single",
          "signature": "ByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gHeistServeSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of 'render'/'cRender'.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist\"]",
          "name": "gRender",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gRender\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:gRender\"]"
        },
        "index": {
          "description": "Generic version of render cRender",
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "gRender",
          "normalized": "ByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "Render",
          "signature": "ByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of 'renderAs'/'cRenderAs'.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Generic\",\"Snap.Snaplet.Heist\"]",
          "name": "gRenderAs",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gRenderAs\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:gRenderAs\"]"
        },
        "index": {
          "description": "Generic version of renderAs cRenderAs",
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "gRenderAs",
          "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "Render As",
          "signature": "ByteString-\u003eByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gRenderAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens to the Heist snaplet.  The b parameter to Heist will\n typically be the base state of your application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "heistLens",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b)",
          "source": "src/Snap-Snaplet-Heist.html#heistLens",
          "type": "method"
        },
        "index": {
          "description": "lens to the Heist snaplet The parameter to Heist will typically be the base state of your application",
          "hierarchy": "Snap Snaplet Heist Generic",
          "module": "Snap.Snaplet.Heist.Generic",
          "name": "heistLens",
          "package": "snap",
          "partial": "Lens",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:heistLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module exporting only functions for using interpreted templates.  If\nyou import the main Snap.Snaplet.Heist module, it's easy to accidentally\nuse the compiled render function even when you're using interpreted Heist.\nImporting only this module will make it harder to make mistakes like that.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "Interpreted",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist-Interpreted.html",
          "type": "module"
        },
        "index": {
          "description": "module exporting only functions for using interpreted templates If you import the main Snap.Snaplet.Heist module it easy to accidentally use the compiled render function even when you re using interpreted Heist Importing only this module will make it harder to make mistakes like that",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "Interpreted",
          "package": "snap",
          "partial": "Interpreted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single snaplet should never need more than one instance of Heist as a\n subsnaplet.  This type class allows you to make it easy for other snaplets\n to get the lens that identifies the heist snaplet.  Here's an example of\n how the heist snaplet might be declared:\n\u003c/p\u003e\u003cpre\u003e data App = App { _heist :: Snaplet (Heist App) }\n makeLenses ''App\n\n instance HasHeist App where heistLens = subSnaplet heist\n\n appInit = makeSnaplet \"app\" \"\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"templates\"\n     addConfig h heistConfigWithMyAppSplices\n     return $ App h\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "HasHeist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist.html#HasHeist",
          "type": "class"
        },
        "index": {
          "description": "single snaplet should never need more than one instance of Heist as subsnaplet This type class allows you to make it easy for other snaplets to get the lens that identifies the heist snaplet Here an example of how the heist snaplet might be declared data App App heist Snaplet Heist App makeLenses App instance HasHeist App where heistLens subSnaplet heist appInit makeSnaplet app Nothing do nestSnaplet heist heist heistInit templates addConfig heistConfigWithMyAppSplices return App",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "HasHeist",
          "package": "snap",
          "partial": "Has Heist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#t:HasHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "Heist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
          "type": "data"
        },
        "index": {
          "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "Heist",
          "package": "snap",
          "partial": "Heist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#t:Heist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "SnapletHeist",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "SnapletHeist",
          "package": "snap",
          "partial": "Snaplet Heist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#t:SnapletHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "SnapletISplice",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletISplice",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "SnapletISplice",
          "package": "snap",
          "partial": "Snaplet ISplice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#t:SnapletISplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e. This function is a convenience wrapper\n around \u003ccode\u003e\u003ca\u003eheistInit'\u003c/a\u003e\u003c/code\u003e that uses defaultHeistState and sets up routes for all\n the templates.  It sets up a \"heistReload\" route that reloads the heist\n templates when you request it from localhost.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\",\"Snap.Snaplet.HeistNoClass\"]",
          "name": "heistInit",
          "package": "snap",
          "signature": "FilePath-\u003e SnapletInit b (Heist b)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistInit\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistInit\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistInit\"]"
        },
        "index": {
          "description": "The Initializer for Heist This function is convenience wrapper around heistInit that uses defaultHeistState and sets up routes for all the templates It sets up heistReload route that reloads the heist templates when you request it from localhost",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "heistInit",
          "normalized": "FilePath-\u003eSnapletInit a(Heist a)",
          "package": "snap",
          "partial": "Init",
          "signature": "FilePath-\u003eSnapletInit b(Heist b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens to the Heist snaplet.  The b parameter to Heist will\n typically be the base state of your application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "heistLens",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b)",
          "source": "src/Snap-Snaplet-Heist.html#heistLens",
          "type": "method"
        },
        "index": {
          "description": "lens to the Heist snaplet The parameter to Heist will typically be the base state of your application",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "heistLens",
          "package": "snap",
          "partial": "Lens",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a handler with a modified \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.  You might want to use\n this if you had a set of splices which were customised for a specific\n action.  To do that you would do:\n\u003c/p\u003e\u003cpre\u003e heistLocal (bindSplices mySplices) handlerThatNeedsSplices\n\u003c/pre\u003e",
          "module": "[\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "heistLocal",
          "package": "snap",
          "signature": "(HeistState (Handler b b) -\u003e HeistState (Handler b b))-\u003e Handler b v a-\u003e Handler b v a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistLocal\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistLocal\"]"
        },
        "index": {
          "description": "Runs handler with modified HeistState You might want to use this if you had set of splices which were customised for specific action To do that you would do heistLocal bindSplices mySplices handlerThatNeedsSplices",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "heistLocal",
          "normalized": "(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eHandler a b c-\u003eHandler a b c",
          "package": "snap",
          "partial": "Local",
          "signature": "(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eHandler b v a-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler that serves all the templates (similar to \u003ccode\u003eserveDirectory\u003c/code\u003e).\n If the template specified in the request path is not found, it returns\n \u003ccode\u003eempty\u003c/code\u003e.  Also, this function does not serve any templates beginning with\n an underscore.  This gives you a way to prevent some templates from being\n served.  For example, you might have a template that contains only the\n navbar of your pages, and you probably wouldn't want that template to be\n visible to the user as a standalone template.  So if you put it in a file\n called \"_nav.tpl\", this function won't serve it.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "heistServe",
          "package": "snap",
          "signature": "Handler b v ()",
          "source": "src/Snap-Snaplet-Heist.html#heistServe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistServe\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistServe\"]"
        },
        "index": {
          "description": "handler that serves all the templates similar to serveDirectory If the template specified in the request path is not found it returns empty Also this function does not serve any templates beginning with an underscore This gives you way to prevent some templates from being served For example you might have template that contains only the navbar of your pages and you probably wouldn want that template to be visible to the user as standalone template So if you put it in file called nav.tpl this function won serve it",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "heistServe",
          "normalized": "Handler a b()",
          "package": "snap",
          "partial": "Serve",
          "signature": "Handler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a template as text/html. If the given template is not found,\n this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "render",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:render\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:render\"]"
        },
        "index": {
          "description": "Renders template as text html If the given template is not found this returns empty",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "render",
          "normalized": "ByteString-\u003eHandler a b()",
          "package": "snap",
          "signature": "ByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a template as the given content type.  If the given template\n is not found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "renderAs",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:renderAs\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:renderAs\"]"
        },
        "index": {
          "description": "Renders template as the given content type If the given template is not found this returns empty",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "renderAs",
          "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "As",
          "signature": "ByteString-\u003eByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:renderAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a template with a given set of splices.  This is syntax sugar for\n a common combination of heistLocal, bindSplices, and render.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "renderWithSplices",
          "package": "snap",
          "signature": "ByteString-\u003e Splices (SnapletISplice b)-\u003e Handler b v ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:renderWithSplices\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:renderWithSplices\"]"
        },
        "index": {
          "description": "Renders template with given set of splices This is syntax sugar for common combination of heistLocal bindSplices and render",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "renderWithSplices",
          "normalized": "ByteString-\u003eSplices(SnapletISplice a)-\u003eHandler a b()",
          "package": "snap",
          "partial": "With Splices",
          "signature": "ByteString-\u003eSplices(SnapletISplice b)-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:renderWithSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an action with additional splices bound into the Heist\n \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist.Interpreted\",\"Snap.Snaplet.Heist\"]",
          "name": "withSplices",
          "package": "snap",
          "signature": "Splices (SnapletISplice b)-\u003e Handler b v a-\u003e Handler b v a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:withSplices\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:withSplices\"]"
        },
        "index": {
          "description": "Runs an action with additional splices bound into the Heist HeistState",
          "hierarchy": "Snap Snaplet Heist Interpreted",
          "module": "Snap.Snaplet.Heist.Interpreted",
          "name": "withSplices",
          "normalized": "Splices(SnapletISplice a)-\u003eHandler a b c-\u003eHandler a b c",
          "package": "snap",
          "partial": "Splices",
          "signature": "Splices(SnapletISplice b)-\u003eHandler b v a-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:withSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Heist snaplet makes it easy to add Heist to your application and use\n it in other snaplets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Heist",
          "name": "Heist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist.html",
          "type": "module"
        },
        "index": {
          "description": "The Heist snaplet makes it easy to add Heist to your application and use it in other snaplets",
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "Heist",
          "package": "snap",
          "partial": "Heist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single snaplet should never need more than one instance of Heist as a\n subsnaplet.  This type class allows you to make it easy for other snaplets\n to get the lens that identifies the heist snaplet.  Here's an example of\n how the heist snaplet might be declared:\n\u003c/p\u003e\u003cpre\u003e data App = App { _heist :: Snaplet (Heist App) }\n makeLenses ''App\n\n instance HasHeist App where heistLens = subSnaplet heist\n\n appInit = makeSnaplet \"app\" \"\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"templates\"\n     addConfig h heistConfigWithMyAppSplices\n     return $ App h\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.Heist",
          "name": "HasHeist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist.html#HasHeist",
          "type": "class"
        },
        "index": {
          "description": "single snaplet should never need more than one instance of Heist as subsnaplet This type class allows you to make it easy for other snaplets to get the lens that identifies the heist snaplet Here an example of how the heist snaplet might be declared data App App heist Snaplet Heist App makeLenses App instance HasHeist App where heistLens subSnaplet heist appInit makeSnaplet app Nothing do nestSnaplet heist heist heistInit templates addConfig heistConfigWithMyAppSplices return App",
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "HasHeist",
          "package": "snap",
          "partial": "Has Heist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:HasHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist",
          "name": "Heist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
          "type": "data"
        },
        "index": {
          "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "Heist",
          "package": "snap",
          "partial": "Heist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:Heist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Heist",
          "name": "SnapletCSplice",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletCSplice",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "SnapletCSplice",
          "package": "snap",
          "partial": "Snaplet CSplice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:SnapletCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Heist",
          "name": "SnapletHeist",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "SnapletHeist",
          "package": "snap",
          "partial": "Snaplet Heist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:SnapletHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Heist",
          "name": "SnapletISplice",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletISplice",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "SnapletISplice",
          "package": "snap",
          "partial": "Snaplet ISplice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:SnapletISplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compiled version of \u003ccode\u003e\u003ca\u003eheistServe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist",
          "name": "cHeistServe",
          "package": "snap",
          "signature": "Handler b v ()",
          "source": "src/Snap-Snaplet-Heist.html#cHeistServe",
          "type": "function"
        },
        "index": {
          "description": "compiled version of heistServe",
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "cHeistServe",
          "normalized": "Handler a b()",
          "package": "snap",
          "partial": "Heist Serve",
          "signature": "Handler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:cHeistServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003efileServeSingle\u003c/code\u003e. If the given template is not found,\n this throws an error.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist",
          "name": "cHeistServeSingle",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b v ()",
          "type": "function"
        },
        "index": {
          "description": "Analogous to fileServeSingle If the given template is not found this throws an error",
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "cHeistServeSingle",
          "normalized": "ByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "Heist Serve Single",
          "signature": "ByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:cHeistServeSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a compiled template as text/html. If the given template is not\n found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist",
          "name": "cRender",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b v ()",
          "type": "function"
        },
        "index": {
          "description": "Renders compiled template as text html If the given template is not found this returns empty",
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "cRender",
          "normalized": "ByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "Render",
          "signature": "ByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:cRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a compiled template as the given content type.  If the given\n template is not found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist",
          "name": "cRenderAs",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
          "type": "function"
        },
        "index": {
          "description": "Renders compiled template as the given content type If the given template is not found this returns empty",
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "cRenderAs",
          "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "Render As",
          "signature": "ByteString-\u003eByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:cRenderAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Snap.Snaplet.Heist\",\"Snap.Snaplet.HeistNoClass\"]",
          "name": "getCurHeistConfig",
          "package": "snap",
          "signature": "Snaplet (Heist b) -\u003e Initializer b v (HeistConfig (Handler b b))",
          "source": "src/Snap-Snaplet-HeistNoClass.html#getCurHeistConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:getCurHeistConfig\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:getCurHeistConfig\"]"
        },
        "index": {
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "getCurHeistConfig",
          "normalized": "Snaplet(Heist a)-\u003eInitializer a b(HeistConfig(Handler a a))",
          "package": "snap",
          "partial": "Cur Heist Config",
          "signature": "Snaplet(Heist b)-\u003eInitializer b v(HeistConfig(Handler b b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:getCurHeistConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens to the Heist snaplet.  The b parameter to Heist will\n typically be the base state of your application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Heist",
          "name": "heistLens",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b)",
          "source": "src/Snap-Snaplet-Heist.html#heistLens",
          "type": "method"
        },
        "index": {
          "description": "lens to the Heist snaplet The parameter to Heist will typically be the base state of your application",
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "heistLens",
          "package": "snap",
          "partial": "Lens",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the snaplet to default to interpreted mode.  Initially, the\n initializer sets the value to compiled mode.  This function allows you to\n override that setting.  Note that this is just a default.  It only has an\n effect if you use one of the generic functions: \u003ccode\u003e\u003ca\u003egRender\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egRenderAs\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003egHeistServe\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003egHeistServeSingle\u003c/a\u003e\u003c/code\u003e.  If you call the non-generic\n versions directly, then this value will not be checked and you will get the\n mode implemented by the function you called.\n\u003c/p\u003e",
          "module": "[\"Snap.Snaplet.Heist\",\"Snap.Snaplet.HeistNoClass\"]",
          "name": "setInterpreted",
          "package": "snap",
          "signature": "Snaplet (Heist b) -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#setInterpreted",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:setInterpreted\",\"http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:setInterpreted\"]"
        },
        "index": {
          "description": "Sets the snaplet to default to interpreted mode Initially the initializer sets the value to compiled mode This function allows you to override that setting Note that this is just default It only has an effect if you use one of the generic functions gRender gRenderAs gHeistServe or gHeistServeSingle If you call the non-generic versions directly then this value will not be checked and you will get the mode implemented by the function you called",
          "hierarchy": "Snap Snaplet Heist",
          "module": "Snap.Snaplet.Heist",
          "name": "setInterpreted",
          "normalized": "Snaplet(Heist a)-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Interpreted",
          "signature": "Snaplet(Heist b)-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:setInterpreted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the Heist snaplet without using type classes.  It is\nprovided mainly as an example of how snaplets can be written with and without\na type class for convenience.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "HeistNoClass",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the Heist snaplet without using type classes It is provided mainly as an example of how snaplets can be written with and without type class for convenience",
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "HeistNoClass",
          "package": "snap",
          "partial": "Heist No Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "DefaultMode",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist-Internal.html#DefaultMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "DefaultMode",
          "package": "snap",
          "partial": "Default Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:DefaultMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "Heist",
          "package": "snap",
          "source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
          "type": "data"
        },
        "index": {
          "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "Heist",
          "package": "snap",
          "partial": "Heist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:Heist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "SnapletCSplice",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletCSplice",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "SnapletCSplice",
          "package": "snap",
          "partial": "Snaplet CSplice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:SnapletCSplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "SnapletHeist",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "SnapletHeist",
          "package": "snap",
          "partial": "Snaplet Heist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:SnapletHeist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "SnapletISplice",
          "package": "snap",
          "source": "src/Snap-Snaplet-HeistNoClass.html#SnapletISplice",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "SnapletISplice",
          "package": "snap",
          "partial": "Snaplet ISplice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:SnapletISplice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "Compiled",
          "package": "snap",
          "signature": "Compiled",
          "source": "src/Snap-Snaplet-Heist-Internal.html#DefaultMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "Compiled",
          "package": "snap",
          "partial": "Compiled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:Compiled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "Interpreted",
          "package": "snap",
          "signature": "Interpreted",
          "source": "src/Snap-Snaplet-Heist-Internal.html#DefaultMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "Interpreted",
          "package": "snap",
          "partial": "Interpreted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:Interpreted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds templates to the Heist HeistConfig.  Other snaplets should use\n this function to add their own templates.  The templates are automatically\n read from the templates directory in the current snaplet's filesystem root.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "addTemplates",
          "package": "snap",
          "signature": "Snaplet (Heist b)-\u003e ByteString-\u003e Initializer b (Heist b) ()",
          "type": "function"
        },
        "index": {
          "description": "Adds templates to the Heist HeistConfig Other snaplets should use this function to add their own templates The templates are automatically read from the templates directory in the current snaplet filesystem root",
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "addTemplates",
          "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eInitializer a(Heist a)()",
          "package": "snap",
          "partial": "Templates",
          "signature": "Snaplet(Heist b)-\u003eByteString-\u003eInitializer b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:addTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds templates to the Heist HeistConfig, and lets you specify where\n they are found in the filesystem.  Note that the path to the template\n directory is an absolute path.  This allows you more flexibility in where\n your templates are located, but means that you have to explicitly call\n getSnapletFilePath if you want your snaplet to use templates within its\n normal directory structure.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "addTemplatesAt",
          "package": "snap",
          "signature": "Snaplet (Heist b)-\u003e ByteString-\u003e FilePath-\u003e Initializer b (Heist b) ()",
          "type": "function"
        },
        "index": {
          "description": "Adds templates to the Heist HeistConfig and lets you specify where they are found in the filesystem Note that the path to the template directory is an absolute path This allows you more flexibility in where your templates are located but means that you have to explicitly call getSnapletFilePath if you want your snaplet to use templates within its normal directory structure",
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "addTemplatesAt",
          "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eFilePath-\u003eInitializer a(Heist a)()",
          "package": "snap",
          "partial": "Templates At",
          "signature": "Snaplet(Heist b)-\u003eByteString-\u003eFilePath-\u003eInitializer b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:addTemplatesAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "cHeistServe",
          "package": "snap",
          "signature": "Handler b (Heist b) ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#cHeistServe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "cHeistServe",
          "normalized": "Handler a(Heist a)()",
          "package": "snap",
          "partial": "Heist Serve",
          "signature": "Handler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:cHeistServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "cHeistServeSingle",
          "package": "snap",
          "signature": "ByteString -\u003e Handler b (Heist b) ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#cHeistServeSingle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "cHeistServeSingle",
          "normalized": "ByteString-\u003eHandler a(Heist a)()",
          "package": "snap",
          "partial": "Heist Serve Single",
          "signature": "ByteString-\u003eHandler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:cHeistServeSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "cRender",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b (Heist b) ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "cRender",
          "normalized": "ByteString-\u003eHandler a(Heist a)()",
          "package": "snap",
          "partial": "Render",
          "signature": "ByteString-\u003eHandler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:cRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "cRenderAs",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Handler b (Heist b) ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "cRenderAs",
          "normalized": "ByteString-\u003eByteString-\u003eHandler a(Heist a)()",
          "package": "snap",
          "partial": "Render As",
          "signature": "ByteString-\u003eByteString-\u003eHandler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:cRenderAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChooses between a compiled action and an interpreted action based on the\n configured default.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "chooseMode",
          "package": "snap",
          "signature": "m b-\u003e m b-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Chooses between compiled action and an interpreted action based on the configured default",
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "chooseMode",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "snap",
          "partial": "Mode",
          "signature": "m b-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:chooseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike heistServe/cHeistServe, but chooses between the two appropriately\n based on the default mode.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "gHeistServe",
          "package": "snap",
          "signature": "Handler b (Heist b) ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#gHeistServe",
          "type": "function"
        },
        "index": {
          "description": "Like heistServe cHeistServe but chooses between the two appropriately based on the default mode",
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "gHeistServe",
          "normalized": "Handler a(Heist a)()",
          "package": "snap",
          "partial": "Heist Serve",
          "signature": "Handler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:gHeistServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike heistServeSingle/cHeistServeSingle, but chooses between the two\n appropriately based on the default mode.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "gHeistServeSingle",
          "package": "snap",
          "signature": "ByteString -\u003e Handler b (Heist b) ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#gHeistServeSingle",
          "type": "function"
        },
        "index": {
          "description": "Like heistServeSingle cHeistServeSingle but chooses between the two appropriately based on the default mode",
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "gHeistServeSingle",
          "normalized": "ByteString-\u003eHandler a(Heist a)()",
          "package": "snap",
          "partial": "Heist Serve Single",
          "signature": "ByteString-\u003eHandler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:gHeistServeSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike render/cRender, but chooses between the two appropriately based on\n the default mode.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "gRender",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b (Heist b) ()",
          "type": "function"
        },
        "index": {
          "description": "Like render cRender but chooses between the two appropriately based on the default mode",
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "gRender",
          "normalized": "ByteString-\u003eHandler a(Heist a)()",
          "package": "snap",
          "partial": "Render",
          "signature": "ByteString-\u003eHandler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:gRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike renderAs/cRenderAs, but chooses between the two appropriately based\n on the default mode.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "gRenderAs",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Handler b (Heist b) ()",
          "type": "function"
        },
        "index": {
          "description": "Like renderAs cRenderAs but chooses between the two appropriately based on the default mode",
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "gRenderAs",
          "normalized": "ByteString-\u003eByteString-\u003eHandler a(Heist a)()",
          "package": "snap",
          "partial": "Render As",
          "signature": "ByteString-\u003eByteString-\u003eHandler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:gRenderAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "getHeistState",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b) -\u003e Handler b v (HeistState (Handler b b))",
          "source": "src/Snap-Snaplet-HeistNoClass.html#getHeistState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "getHeistState",
          "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003eHandler a b(HeistState(Handler a a))",
          "package": "snap",
          "partial": "Heist State",
          "signature": "SnapletLens(Snaplet b)(Heist b)-\u003eHandler b v(HeistState(Handler b b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:getHeistState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "heistLocal",
          "package": "snap",
          "signature": "SnapletLens b (Heist b) -\u003e (HeistState (Handler b b) -\u003e HeistState (Handler b b)) -\u003e Handler b v a -\u003e Handler b v a",
          "source": "src/Snap-Snaplet-HeistNoClass.html#heistLocal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "heistLocal",
          "normalized": "SnapletLens a(Heist a)-\u003e(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eHandler a b c-\u003eHandler a b c",
          "package": "snap",
          "partial": "Local",
          "signature": "SnapletLens b(Heist b)-\u003e(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eHandler b v a-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "heistLocal'",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b) -\u003e (HeistState (Handler b b) -\u003e HeistState (Handler b b)) -\u003e Handler b v a -\u003e Handler b v a",
          "source": "src/Snap-Snaplet-HeistNoClass.html#heistLocal%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "heistLocal'",
          "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003e(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eHandler a b c-\u003eHandler a b c",
          "package": "snap",
          "partial": "Local'",
          "signature": "SnapletLens(Snaplet b)(Heist b)-\u003e(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eHandler b v a-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistLocal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "heistServe",
          "package": "snap",
          "signature": "Handler b (Heist b) ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#heistServe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "heistServe",
          "normalized": "Handler a(Heist a)()",
          "package": "snap",
          "partial": "Serve",
          "signature": "Handler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "heistServeSingle",
          "package": "snap",
          "signature": "ByteString -\u003e Handler b (Heist b) ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#heistServeSingle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "heistServeSingle",
          "normalized": "ByteString-\u003eHandler a(Heist a)()",
          "package": "snap",
          "partial": "Serve Single",
          "signature": "ByteString-\u003eHandler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistServeSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "modifyHeistState",
          "package": "snap",
          "signature": "SnapletLens b (Heist b) -\u003e (HeistState (Handler b b) -\u003e HeistState (Handler b b)) -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#modifyHeistState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "modifyHeistState",
          "normalized": "SnapletLens a(Heist a)-\u003e(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Heist State",
          "signature": "SnapletLens b(Heist b)-\u003e(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:modifyHeistState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "modifyHeistState'",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b) -\u003e (HeistState (Handler b b) -\u003e HeistState (Handler b b)) -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#modifyHeistState%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "modifyHeistState'",
          "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003e(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Heist State'",
          "signature": "SnapletLens(Snaplet b)(Heist b)-\u003e(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:modifyHeistState-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "render",
          "package": "snap",
          "signature": "ByteString-\u003e Handler b (Heist b) ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "render",
          "normalized": "ByteString-\u003eHandler a(Heist a)()",
          "package": "snap",
          "signature": "ByteString-\u003eHandler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "renderAs",
          "package": "snap",
          "signature": "ByteString-\u003e ByteString-\u003e Handler b (Heist b) ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "renderAs",
          "normalized": "ByteString-\u003eByteString-\u003eHandler a(Heist a)()",
          "package": "snap",
          "partial": "As",
          "signature": "ByteString-\u003eByteString-\u003eHandler b(Heist b)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:renderAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "renderWithSplices",
          "package": "snap",
          "signature": "SnapletLens b (Heist b) -\u003e ByteString -\u003e Splices (SnapletISplice b) -\u003e Handler b v ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#renderWithSplices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "renderWithSplices",
          "normalized": "SnapletLens a(Heist a)-\u003eByteString-\u003eSplices(SnapletISplice a)-\u003eHandler a b()",
          "package": "snap",
          "partial": "With Splices",
          "signature": "SnapletLens b(Heist b)-\u003eByteString-\u003eSplices(SnapletISplice b)-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:renderWithSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "renderWithSplices'",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b) -\u003e ByteString -\u003e Splices (SnapletISplice b) -\u003e Handler b v ()",
          "source": "src/Snap-Snaplet-HeistNoClass.html#renderWithSplices%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "renderWithSplices'",
          "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003eByteString-\u003eSplices(SnapletISplice a)-\u003eHandler a b()",
          "package": "snap",
          "partial": "With Splices'",
          "signature": "SnapletLens(Snaplet b)(Heist b)-\u003eByteString-\u003eSplices(SnapletISplice b)-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:renderWithSplices-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "withHeistState",
          "package": "snap",
          "signature": "SnapletLens b (Heist b) -\u003e (HeistState (Handler b b) -\u003e a) -\u003e Handler b v a",
          "source": "src/Snap-Snaplet-HeistNoClass.html#withHeistState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "withHeistState",
          "normalized": "SnapletLens a(Heist a)-\u003e(HeistState(Handler a a)-\u003eb)-\u003eHandler a c b",
          "package": "snap",
          "partial": "Heist State",
          "signature": "SnapletLens b(Heist b)-\u003e(HeistState(Handler b b)-\u003ea)-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:withHeistState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "withHeistState'",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b) -\u003e (HeistState (Handler b b) -\u003e a) -\u003e Handler b v a",
          "source": "src/Snap-Snaplet-HeistNoClass.html#withHeistState%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "withHeistState'",
          "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003e(HeistState(Handler a a)-\u003eb)-\u003eHandler a c b",
          "package": "snap",
          "partial": "Heist State'",
          "signature": "SnapletLens(Snaplet b)(Heist b)-\u003e(HeistState(Handler b b)-\u003ea)-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:withHeistState-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "withSplices",
          "package": "snap",
          "signature": "SnapletLens b (Heist b) -\u003e Splices (SnapletISplice b) -\u003e Handler b v a -\u003e Handler b v a",
          "source": "src/Snap-Snaplet-HeistNoClass.html#withSplices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "withSplices",
          "normalized": "SnapletLens a(Heist a)-\u003eSplices(SnapletISplice a)-\u003eHandler a b c-\u003eHandler a b c",
          "package": "snap",
          "partial": "Splices",
          "signature": "SnapletLens b(Heist b)-\u003eSplices(SnapletISplice b)-\u003eHandler b v a-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:withSplices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "withSplices'",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) (Heist b) -\u003e Splices (SnapletISplice b) -\u003e Handler b v a -\u003e Handler b v a",
          "source": "src/Snap-Snaplet-HeistNoClass.html#withSplices%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet HeistNoClass",
          "module": "Snap.Snaplet.HeistNoClass",
          "name": "withSplices'",
          "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003eSplices(SnapletISplice a)-\u003eHandler a b c-\u003eHandler a b c",
          "package": "snap",
          "partial": "Splices'",
          "signature": "SnapletLens(Snaplet b)(Heist b)-\u003eSplices(SnapletISplice b)-\u003eHandler b v a-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:withSplices-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Session.Backends.CookieSession",
          "name": "CookieSession",
          "package": "snap",
          "source": "src/Snap-Snaplet-Session-Backends-CookieSession.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet Session Backends CookieSession",
          "module": "Snap.Snaplet.Session.Backends.CookieSession",
          "name": "CookieSession",
          "package": "snap",
          "partial": "Cookie Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Backends-CookieSession.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a cookie-backed session, returning a \u003ccode\u003e\u003ca\u003eSessionManager\u003c/a\u003e\u003c/code\u003e to be\n stuffed inside your application's state. This \u003ccode\u003e\u003ca\u003eSessionManager\u003c/a\u003e\u003c/code\u003e will enable\n the use of all session storage functionality defined in\n \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.Backends.CookieSession",
          "name": "initCookieSessionManager",
          "package": "snap",
          "signature": "FilePath-\u003e ByteString-\u003e Maybe Int-\u003e SnapletInit b SessionManager",
          "type": "function"
        },
        "index": {
          "description": "Initialize cookie-backed session returning SessionManager to be stuffed inside your application state This SessionManager will enable the use of all session storage functionality defined in Session",
          "hierarchy": "Snap Snaplet Session Backends CookieSession",
          "module": "Snap.Snaplet.Session.Backends.CookieSession",
          "name": "initCookieSessionManager",
          "normalized": "FilePath-\u003eByteString-\u003eMaybe Int-\u003eSnapletInit a SessionManager",
          "package": "snap",
          "partial": "Cookie Session Manager",
          "signature": "FilePath-\u003eByteString-\u003eMaybe Int-\u003eSnapletInit b SessionManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Backends-CookieSession.html#v:initCookieSessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functionality common among multiple back-ends.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Session.Common",
          "name": "Common",
          "package": "snap",
          "source": "src/Snap-Snaplet-Session-Common.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functionality common among multiple back-ends",
          "hierarchy": "Snap Snaplet Session Common",
          "module": "Snap.Snaplet.Session.Common",
          "name": "Common",
          "package": "snap",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigh speed, mutable random number generator state\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.Common",
          "name": "RNG",
          "package": "snap",
          "source": "src/Snap-Snaplet-Session-Common.html#RNG",
          "type": "data"
        },
        "index": {
          "description": "High speed mutable random number generator state",
          "hierarchy": "Snap Snaplet Session Common",
          "module": "Snap.Snaplet.Session.Common",
          "name": "RNG",
          "package": "snap",
          "partial": "RNG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#t:RNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a randomized CSRF token\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.Common",
          "name": "mkCSRFToken",
          "package": "snap",
          "signature": "RNG -\u003e IO Text",
          "source": "src/Snap-Snaplet-Session-Common.html#mkCSRFToken",
          "type": "function"
        },
        "index": {
          "description": "Generate randomized CSRF token",
          "hierarchy": "Snap Snaplet Session Common",
          "module": "Snap.Snaplet.Session.Common",
          "name": "mkCSRFToken",
          "normalized": "RNG-\u003eIO Text",
          "package": "snap",
          "partial": "CSRFToken",
          "signature": "RNG-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#v:mkCSRFToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new RNG\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.Common",
          "name": "mkRNG",
          "package": "snap",
          "signature": "IO RNG",
          "source": "src/Snap-Snaplet-Session-Common.html#mkRNG",
          "type": "function"
        },
        "index": {
          "description": "Create new RNG",
          "hierarchy": "Snap Snaplet Session Common",
          "module": "Snap.Snaplet.Session.Common",
          "name": "mkRNG",
          "package": "snap",
          "partial": "RNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#v:mkRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random salt of given length\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.Common",
          "name": "randomToken",
          "package": "snap",
          "signature": "Int -\u003e RNG -\u003e IO ByteString",
          "source": "src/Snap-Snaplet-Session-Common.html#randomToken",
          "type": "function"
        },
        "index": {
          "description": "Generates random salt of given length",
          "hierarchy": "Snap Snaplet Session Common",
          "module": "Snap.Snaplet.Session.Common",
          "name": "randomToken",
          "normalized": "Int-\u003eRNG-\u003eIO ByteString",
          "package": "snap",
          "partial": "Token",
          "signature": "Int-\u003eRNG-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#v:randomToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform given action, mutating the RNG state\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.Common",
          "name": "withRNG",
          "package": "snap",
          "signature": "RNG -\u003e (GenIO -\u003e IO a) -\u003e IO a",
          "source": "src/Snap-Snaplet-Session-Common.html#withRNG",
          "type": "function"
        },
        "index": {
          "description": "Perform given action mutating the RNG state",
          "hierarchy": "Snap Snaplet Session Common",
          "module": "Snap.Snaplet.Session.Common",
          "name": "withRNG",
          "normalized": "RNG-\u003e(GenIO-\u003eIO a)-\u003eIO a",
          "package": "snap",
          "partial": "RNG",
          "signature": "RNG-\u003e(GenIO-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#v:withRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is meant to be used mainly by Session backend\ndevelopers, who would naturally need access to ISessionManager class\ninternals. You can also use it if you need low-level access to the\nbackend functionality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "SessionManager",
          "package": "snap",
          "source": "src/Snap-Snaplet-Session-SessionManager.html",
          "type": "module"
        },
        "index": {
          "description": "This module is meant to be used mainly by Session backend developers who would naturally need access to ISessionManager class internals You can also use it if you need low-level access to the backend functionality",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "SessionManager",
          "package": "snap",
          "partial": "Session Manager",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "ISessionManager",
          "package": "snap",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#ISessionManager",
          "type": "class"
        },
        "index": {
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "ISessionManager",
          "package": "snap",
          "partial": "ISession Manager",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#t:ISessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny Haskell record that is a member of the \u003ccode\u003e\u003ca\u003eISessionManager\u003c/a\u003e\u003c/code\u003e\n typeclass can be stuffed inside a \u003ccode\u003e\u003ca\u003eSessionManager\u003c/a\u003e\u003c/code\u003e to enable all\n session-related functionality.\n\u003c/p\u003e\u003cp\u003eTo use sessions in your application, just find a Backend that would\n produce one for you inside of your \u003ccode\u003eInitializer\u003c/code\u003e. See\n \u003ccode\u003einitCookieSessionManager\u003c/code\u003e in\n \u003ccode\u003e\u003ca\u003eCookieSession\u003c/a\u003e\u003c/code\u003e for a built-in option\n that would get you started.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "SessionManager",
          "package": "snap",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#SessionManager",
          "type": "data"
        },
        "index": {
          "description": "Any Haskell record that is member of the ISessionManager typeclass can be stuffed inside SessionManager to enable all session-related functionality To use sessions in your application just find Backend that would produce one for you inside of your Initializer See initCookieSessionManager in CookieSession for built-in option that would get you started",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "SessionManager",
          "package": "snap",
          "partial": "Session Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#t:SessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "SessionManager",
          "package": "snap",
          "signature": "SessionManager a",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#SessionManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "SessionManager",
          "package": "snap",
          "partial": "Session Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:SessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit session, return a possibly updated paylaod\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "commit",
          "package": "snap",
          "signature": "r -\u003e Snap ()",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#commit",
          "type": "method"
        },
        "index": {
          "description": "Commit session return possibly updated paylaod",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "commit",
          "normalized": "a-\u003eSnap()",
          "package": "snap",
          "signature": "r-\u003eSnap()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a session-specific CSRF protection token. See \u003ccode\u003emkCSRFToken\u003c/code\u003e for\n help in creating the value.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "csrf",
          "package": "snap",
          "signature": "r -\u003e Text",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#csrf",
          "type": "method"
        },
        "index": {
          "description": "Return session-specific CSRF protection token See mkCSRFToken for help in creating the value",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "csrf",
          "normalized": "a-\u003eText",
          "package": "snap",
          "signature": "r-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:csrf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a key in session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "delete",
          "package": "snap",
          "signature": "Text -\u003e r -\u003e r",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Delete key in session",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "delete",
          "normalized": "Text-\u003ea-\u003ea",
          "package": "snap",
          "signature": "Text-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a key-value pair into session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "insert",
          "package": "snap",
          "signature": "Text -\u003e Text -\u003e r -\u003e r",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#insert",
          "type": "method"
        },
        "index": {
          "description": "Insert key-value pair into session",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "insert",
          "normalized": "Text-\u003eText-\u003ea-\u003ea",
          "package": "snap",
          "signature": "Text-\u003eText-\u003er-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a session from given payload.\n\u003c/p\u003e\u003cp\u003eWill always be called before any other operation. If possible, cache and\n do nothing when called multiple times within the same request cycle.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "load",
          "package": "snap",
          "signature": "r -\u003e Snap r",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#load",
          "type": "method"
        },
        "index": {
          "description": "Load session from given payload Will always be called before any other operation If possible cache and do nothing when called multiple times within the same request cycle",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "load",
          "normalized": "a-\u003eSnap a",
          "package": "snap",
          "signature": "r-\u003eSnap r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a key in session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "lookup",
          "package": "snap",
          "signature": "Text -\u003e r -\u003e Maybe Text",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#lookup",
          "type": "method"
        },
        "index": {
          "description": "Lookup key in session",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "lookup",
          "normalized": "Text-\u003ea-\u003eMaybe Text",
          "package": "snap",
          "signature": "Text-\u003er-\u003eMaybe Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "reset",
          "package": "snap",
          "signature": "r -\u003e Snap r",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#reset",
          "type": "method"
        },
        "index": {
          "description": "Reset session",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "reset",
          "normalized": "a-\u003eSnap a",
          "package": "snap",
          "signature": "r-\u003eSnap r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all key-value pairs as an association list\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "toList",
          "package": "snap",
          "signature": "r -\u003e [(Text, Text)]",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#toList",
          "type": "method"
        },
        "index": {
          "description": "Return all key-value pairs as an association list",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "toList",
          "normalized": "a-\u003e[(Text,Text)]",
          "package": "snap",
          "partial": "List",
          "signature": "r-\u003e[(Text,Text)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTouch session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "touch",
          "package": "snap",
          "signature": "r -\u003e r",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#touch",
          "type": "method"
        },
        "index": {
          "description": "Touch session",
          "hierarchy": "Snap Snaplet Session SessionManager",
          "module": "Snap.Snaplet.Session.SessionManager",
          "name": "touch",
          "normalized": "a-\u003ea",
          "package": "snap",
          "signature": "r-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:touch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Session",
          "name": "Session",
          "package": "snap",
          "source": "src/Snap-Snaplet-Session.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "Session",
          "package": "snap",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize UTCTime\ninstance Serialize UTCTime where\n    put t = put (round (utcTimeToPOSIXSeconds t) :: Integer)\n    get   = posixSecondsToUTCTime . fromInteger \u003ca\u003e$\u003c/a\u003e get\n\u003c/p\u003e\u003cp\u003eArbitrary payload with timestamp.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "SecureCookie",
          "package": "snap",
          "source": "src/Snap-Snaplet-Session-SecureCookie.html#SecureCookie",
          "type": "type"
        },
        "index": {
          "description": "Serialize UTCTime instance Serialize UTCTime where put put round utcTimeToPOSIXSeconds Integer get posixSecondsToUTCTime fromInteger get Arbitrary payload with timestamp",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "SecureCookie",
          "package": "snap",
          "partial": "Secure Cookie",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#t:SecureCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny Haskell record that is a member of the \u003ccode\u003e\u003ca\u003eISessionManager\u003c/a\u003e\u003c/code\u003e\n typeclass can be stuffed inside a \u003ccode\u003e\u003ca\u003eSessionManager\u003c/a\u003e\u003c/code\u003e to enable all\n session-related functionality.\n\u003c/p\u003e\u003cp\u003eTo use sessions in your application, just find a Backend that would\n produce one for you inside of your \u003ccode\u003eInitializer\u003c/code\u003e. See\n \u003ccode\u003einitCookieSessionManager\u003c/code\u003e in\n \u003ccode\u003e\u003ca\u003eCookieSession\u003c/a\u003e\u003c/code\u003e for a built-in option\n that would get you started.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "SessionManager",
          "package": "snap",
          "source": "src/Snap-Snaplet-Session-SessionManager.html#SessionManager",
          "type": "data"
        },
        "index": {
          "description": "Any Haskell record that is member of the ISessionManager typeclass can be stuffed inside SessionManager to enable all session-related functionality To use sessions in your application just find Backend that would produce one for you inside of your Initializer See initCookieSessionManager in CookieSession for built-in option that would get you started",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "SessionManager",
          "package": "snap",
          "partial": "Session Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#t:SessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate session against timeout policy.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If timeout is set to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, never trigger a time-out.\n\u003c/li\u003e\u003cli\u003e Otherwise, do a regular time-out check based on current time and given\n   timestamp.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "checkTimeout",
          "package": "snap",
          "signature": "Maybe Int -\u003e UTCTime -\u003e m Bool",
          "source": "src/Snap-Snaplet-Session-SecureCookie.html#checkTimeout",
          "type": "function"
        },
        "index": {
          "description": "Validate session against timeout policy If timeout is set to Nothing never trigger time-out Otherwise do regular time-out check based on current time and given timestamp",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "checkTimeout",
          "normalized": "Maybe Int-\u003eUTCTime-\u003ea Bool",
          "package": "snap",
          "partial": "Timeout",
          "signature": "Maybe Int-\u003eUTCTime-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:checkTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommit changes to session within the current request cycle\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "commitSession",
          "package": "snap",
          "signature": "Handler b SessionManager ()",
          "source": "src/Snap-Snaplet-Session.html#commitSession",
          "type": "function"
        },
        "index": {
          "description": "Commit changes to session within the current request cycle",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "commitSession",
          "normalized": "Handler a SessionManager()",
          "package": "snap",
          "partial": "Session",
          "signature": "Handler b SessionManager()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:commitSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a CSRF Token unique to the current session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "csrfToken",
          "package": "snap",
          "signature": "Handler b SessionManager Text",
          "source": "src/Snap-Snaplet-Session.html#csrfToken",
          "type": "function"
        },
        "index": {
          "description": "Returns CSRF Token unique to the current session",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "csrfToken",
          "package": "snap",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:csrfToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a key from the current session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "deleteFromSession",
          "package": "snap",
          "signature": "Text -\u003e Handler b SessionManager ()",
          "source": "src/Snap-Snaplet-Session.html#deleteFromSession",
          "type": "function"
        },
        "index": {
          "description": "Remove key from the current session",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "deleteFromSession",
          "normalized": "Text-\u003eHandler a SessionManager()",
          "package": "snap",
          "partial": "From Session",
          "signature": "Text-\u003eHandler b SessionManager()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:deleteFromSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a key from the current session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "getFromSession",
          "package": "snap",
          "signature": "Text -\u003e Handler b SessionManager (Maybe Text)",
          "source": "src/Snap-Snaplet-Session.html#getFromSession",
          "type": "function"
        },
        "index": {
          "description": "Get key from the current session",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "getFromSession",
          "normalized": "Text-\u003eHandler a SessionManager(Maybe Text)",
          "package": "snap",
          "partial": "From Session",
          "signature": "Text-\u003eHandler b SessionManager(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:getFromSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.Session",
          "name": "getSecureCookie",
          "package": "snap",
          "signature": "ByteString-\u003e Key-\u003e Maybe Int-\u003e m (Maybe t)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "getSecureCookie",
          "normalized": "ByteString-\u003eKey-\u003eMaybe Int-\u003ea(Maybe b)",
          "package": "snap",
          "partial": "Secure Cookie",
          "signature": "ByteString-\u003eKey-\u003eMaybe Int-\u003em(Maybe t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:getSecureCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes the session cookie, effectively resetting the session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "resetSession",
          "package": "snap",
          "signature": "Handler b SessionManager ()",
          "source": "src/Snap-Snaplet-Session.html#resetSession",
          "type": "function"
        },
        "index": {
          "description": "Deletes the session cookie effectively resetting the session",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "resetSession",
          "normalized": "Handler a SessionManager()",
          "package": "snap",
          "partial": "Session",
          "signature": "Handler b SessionManager()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:resetSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn session contents as an association list\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "sessionToList",
          "package": "snap",
          "signature": "Handler b SessionManager [(Text, Text)]",
          "source": "src/Snap-Snaplet-Session.html#sessionToList",
          "type": "function"
        },
        "index": {
          "description": "Return session contents as an association list",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "sessionToList",
          "normalized": "Handler a SessionManager[(Text,Text)]",
          "package": "snap",
          "partial": "To List",
          "signature": "Handler b SessionManager[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:sessionToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a key-value pair in the current session\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "setInSession",
          "package": "snap",
          "signature": "Text -\u003e Text -\u003e Handler b SessionManager ()",
          "source": "src/Snap-Snaplet-Session.html#setInSession",
          "type": "function"
        },
        "index": {
          "description": "Set key-value pair in the current session",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "setInSession",
          "normalized": "Text-\u003eText-\u003eHandler a SessionManager()",
          "package": "snap",
          "partial": "In Session",
          "signature": "Text-\u003eText-\u003eHandler b SessionManager()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:setInSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject the payload\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "setSecureCookie",
          "package": "snap",
          "signature": "ByteString-\u003e Key-\u003e Maybe Int-\u003e t-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Inject the payload",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "setSecureCookie",
          "normalized": "ByteString-\u003eKey-\u003eMaybe Int-\u003ea-\u003eb()",
          "package": "snap",
          "partial": "Secure Cookie",
          "signature": "ByteString-\u003eKey-\u003eMaybe Int-\u003et-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:setSecureCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTouch the session so the timeout gets refreshed\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "touchSession",
          "package": "snap",
          "signature": "Handler b SessionManager ()",
          "source": "src/Snap-Snaplet-Session.html#touchSession",
          "type": "function"
        },
        "index": {
          "description": "Touch the session so the timeout gets refreshed",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "touchSession",
          "normalized": "Handler a SessionManager()",
          "package": "snap",
          "partial": "Session",
          "signature": "Handler b SessionManager()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:touchSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap around a handler, committing any changes in the session at the end\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Session",
          "name": "withSession",
          "package": "snap",
          "signature": "SnapletLens b SessionManager -\u003e Handler b v a -\u003e Handler b v a",
          "source": "src/Snap-Snaplet-Session.html#withSession",
          "type": "function"
        },
        "index": {
          "description": "Wrap around handler committing any changes in the session at the end",
          "hierarchy": "Snap Snaplet Session",
          "module": "Snap.Snaplet.Session",
          "name": "withSession",
          "normalized": "SnapletLens a SessionManager-\u003eHandler a b c-\u003eHandler a b c",
          "package": "snap",
          "partial": "Session",
          "signature": "SnapletLens b SessionManager-\u003eHandler b v a-\u003eHandler b v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:withSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Snap.Snaplet.Test module contains primitives and combinators for\n testing Snaplets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet.Test",
          "name": "Test",
          "package": "snap",
          "source": "src/Snap-Snaplet-Test.html",
          "type": "module"
        },
        "index": {
          "description": "The Snap.Snaplet.Test module contains primitives and combinators for testing Snaplets",
          "hierarchy": "Snap Snaplet Test",
          "module": "Snap.Snaplet.Test",
          "name": "Test",
          "package": "snap",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Snaplet Handler, a \u003ccode\u003e\u003ca\u003eSnapletInit\u003c/a\u003e\u003c/code\u003e specifying the initial state,\n  and a \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e defining a test request, runs the handler,\n  returning the monadic value it produces.\n\u003c/p\u003e\u003cp\u003eThrows an exception if the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e handler early-terminates with \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003emzero\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the output of this function is slightly different from\n 'evalHandler defined in Snap.Test, because due to the fact running\n the initializer inside \u003ccode\u003e\u003ca\u003eSnapletInit\u003c/a\u003e\u003c/code\u003e can throw an exception.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Test",
          "name": "evalHandler",
          "package": "snap",
          "signature": "Maybe String -\u003e RequestBuilder m () -\u003e Handler b b a -\u003e SnapletInit b b -\u003e m (Either Text a)",
          "source": "src/Snap-Snaplet-Test.html#evalHandler",
          "type": "function"
        },
        "index": {
          "description": "Given Snaplet Handler SnapletInit specifying the initial state and RequestBuilder defining test request runs the handler returning the monadic value it produces Throws an exception if the Snap handler early-terminates with finishWith or mzero Note that the output of this function is slightly different from evalHandler defined in Snap.Test because due to the fact running the initializer inside SnapletInit can throw an exception",
          "hierarchy": "Snap Snaplet Test",
          "module": "Snap.Snaplet.Test",
          "name": "evalHandler",
          "normalized": "Maybe String-\u003eRequestBuilder a()-\u003eHandler b b c-\u003eSnapletInit b b-\u003ea(Either Text c)",
          "package": "snap",
          "partial": "Handler",
          "signature": "Maybe String-\u003eRequestBuilder m()-\u003eHandler b b a-\u003eSnapletInit b b-\u003em(Either Text a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Test.html#v:evalHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Snaplet Handler and a \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e defining\n a test request, runs the Handler, producing an HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the output of this function is slightly different from\n \u003ccode\u003e\u003ca\u003erunHandler\u003c/a\u003e\u003c/code\u003e defined in Snap.Test, because due to the fact running\n the initializer inside \u003ccode\u003e\u003ca\u003eSnapletInit\u003c/a\u003e\u003c/code\u003e can throw an exception.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Test",
          "name": "runHandler",
          "package": "snap",
          "signature": "Maybe String -\u003e RequestBuilder m () -\u003e Handler b b v -\u003e SnapletInit b b -\u003e m (Either Text Response)",
          "source": "src/Snap-Snaplet-Test.html#runHandler",
          "type": "function"
        },
        "index": {
          "description": "Given Snaplet Handler and RequestBuilder defining test request runs the Handler producing an HTTP Response Note that the output of this function is slightly different from runHandler defined in Snap.Test because due to the fact running the initializer inside SnapletInit can throw an exception",
          "hierarchy": "Snap Snaplet Test",
          "module": "Snap.Snaplet.Test",
          "name": "runHandler",
          "normalized": "Maybe String-\u003eRequestBuilder a()-\u003eHandler b b c-\u003eSnapletInit b b-\u003ea(Either Text Response)",
          "package": "snap",
          "partial": "Handler",
          "signature": "Maybe String-\u003eRequestBuilder m()-\u003eHandler b b v-\u003eSnapletInit b b-\u003em(Either Text Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Test.html#v:runHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the given file before running an IO computation. Obviously it\n can be used with \u003ccode\u003eAssertion\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.Test",
          "name": "withTemporaryFile",
          "package": "snap",
          "signature": "FilePath -\u003e IO () -\u003e IO ()",
          "source": "src/Snap-Snaplet-Test.html#withTemporaryFile",
          "type": "function"
        },
        "index": {
          "description": "Remove the given file before running an IO computation Obviously it can be used with Assertion",
          "hierarchy": "Snap Snaplet Test",
          "module": "Snap.Snaplet.Test",
          "name": "withTemporaryFile",
          "normalized": "FilePath-\u003eIO()-\u003eIO()",
          "package": "snap",
          "partial": "Temporary File",
          "signature": "FilePath-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Test.html#v:withTemporaryFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSnaplets allow you to build web applications out of composable parts. This\nallows you to build self-contained units and glue them together to make your\noverall application.\n\u003c/p\u003e\u003cp\u003eA snaplet has a few moving parts, some user-defined and some provided by the\nsnaplet API:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e each snaplet has its own configuration given to it at startup.\n\u003c/li\u003e\u003cli\u003e each snaplet is given its own directory on the filesystem, from which it\n    reads its configuration and in which it can store files.\n\u003c/li\u003e\u003cli\u003e each snaplet comes with an \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e which defines how to create an\n    instance of the Snaplet at startup. The initializer decides how to\n    interpret the snaplet configuration, which URLs to handle (and how), sets\n    up the initial snaplet state, tells the snaplet runtime system how to\n    clean the snaplet up, etc.\n\u003c/li\u003e\u003cli\u003e each snaplet contains some user-defined in-memory state; for instance, a\n    snaplet that talks to a database might contain a reference to a connection\n    pool. The snaplet state is an ordinary Haskell record, with a datatype\n    defined by the snaplet author. The initial state record is created during\n    initialization and is available to snaplet \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003es when serving HTTP\n    requests.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNOTE: This documentation is written as a prose tutorial of the snaplets\nAPI.  Don't be scared by the fact that it's auto-generated and is filled with\ntype signatures.  Just keep reading.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Snaplet",
          "name": "Snaplet",
          "package": "snap",
          "source": "src/Snap-Snaplet.html",
          "type": "module"
        },
        "index": {
          "description": "Snaplets allow you to build web applications out of composable parts This allows you to build self-contained units and glue them together to make your overall application snaplet has few moving parts some user-defined and some provided by the snaplet API each snaplet has its own configuration given to it at startup each snaplet is given its own directory on the filesystem from which it reads its configuration and in which it can store files each snaplet comes with an Initializer which defines how to create an instance of the Snaplet at startup The initializer decides how to interpret the snaplet configuration which URLs to handle and how sets up the initial snaplet state tells the snaplet runtime system how to clean the snaplet up etc each snaplet contains some user-defined in-memory state for instance snaplet that talks to database might contain reference to connection pool The snaplet state is an ordinary Haskell record with datatype defined by the snaplet author The initial state record is created during initialization and is available to snaplet Handler when serving HTTP requests NOTE This documentation is written as prose tutorial of the snaplets API Don be scared by the fact that it auto-generated and is filled with type signatures Just keep reading",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "Snaplet",
          "package": "snap",
          "partial": "Snaplet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnaplet infrastructure is available during runtime request processing\n through the Handler monad.  There aren't very many standalone functions to\n read about here, but this is deceptive.  The key is in the type class\n instances.  Handler is an instance of \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e, which means it is the\n monad you will use to write all your application routes.  It also has a\n \u003ccode\u003e\u003ca\u003eMonadSnaplet\u003c/a\u003e\u003c/code\u003e instance, which gives you all the functionality described\n above.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "Handler",
          "package": "snap",
          "source": "src/Snap-Snaplet-Internal-Types.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "Snaplet infrastructure is available during runtime request processing through the Handler monad There aren very many standalone functions to read about here but this is deceptive The key is in the type class instances Handler is an instance of MonadSnap which means it is the monad you will use to write all your application routes It also has MonadSnaplet instance which gives you all the functionality described above",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "Handler",
          "package": "snap",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad used for initializing snaplets.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "Initializer",
          "package": "snap",
          "source": "src/Snap-Snaplet-Internal-Types.html#Initializer",
          "type": "data"
        },
        "index": {
          "description": "Monad used for initializing snaplets",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "Initializer",
          "package": "snap",
          "partial": "Initializer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:Initializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe m type parameter used in the MonadSnaplet type signatures will\n usually be either Initializer or Handler, but other monads may sometimes be\n useful.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ewithTop'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetLens\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003egetOpaqueConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Snap.Snaplet",
          "name": "MonadSnaplet",
          "package": "snap",
          "source": "src/Snap-Snaplet-Internal-Types.html#MonadSnaplet",
          "type": "class"
        },
        "index": {
          "description": "The type parameter used in the MonadSnaplet type signatures will usually be either Initializer or Handler but other monads may sometimes be useful Minimal complete definition withTop with getLens and getOpaqueConfig",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "MonadSnaplet",
          "package": "snap",
          "partial": "Monad Snaplet",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:MonadSnaplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnaplet's type parameter \u003ccode\u003es\u003c/code\u003e here is user-defined and can be any Haskell\n type.  A value of type \u003ccode\u003eSnaplet s\u003c/code\u003e countains a couple of things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a value of type \u003ccode\u003es\u003c/code\u003e, called the \"user state\".\n\u003c/li\u003e\u003cli\u003e some bookkeeping data the framework uses to plug things together, like\n   the snaplet's configuration, the snaplet's root directory on the\n   filesystem, the snaplet's root URL, and so on.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Snap.Snaplet",
          "name": "Snaplet",
          "package": "snap",
          "source": "src/Snap-Snaplet-Internal-Types.html#Snaplet",
          "type": "data"
        },
        "index": {
          "description": "Snaplet type parameter here is user-defined and can be any Haskell type value of type Snaplet countains couple of things value of type called the user state some bookkeeping data the framework uses to plug things together like the snaplet configuration the snaplet root directory on the filesystem the snaplet root URL and so on",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "Snaplet",
          "package": "snap",
          "partial": "Snaplet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:Snaplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque data type holding internal snaplet configuration data.  It is\n exported publicly because the getOpaqueConfig function in MonadSnaplet\n makes implementing new instances of MonadSnaplet more convenient.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "SnapletConfig",
          "package": "snap",
          "source": "src/Snap-Snaplet-Internal-Types.html#SnapletConfig",
          "type": "data"
        },
        "index": {
          "description": "An opaque data type holding internal snaplet configuration data It is exported publicly because the getOpaqueConfig function in MonadSnaplet makes implementing new instances of MonadSnaplet more convenient",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "SnapletConfig",
          "package": "snap",
          "partial": "Snaplet Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:SnapletConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque newtype which gives us compile-time guarantees that the user is\n using makeSnaplet and either nestSnaplet or embedSnaplet correctly.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "SnapletInit",
          "package": "snap",
          "source": "src/Snap-Snaplet-Internal-Types.html#SnapletInit",
          "type": "data"
        },
        "index": {
          "description": "Opaque newtype which gives us compile-time guarantees that the user is using makeSnaplet and either nestSnaplet or embedSnaplet correctly",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "SnapletInit",
          "package": "snap",
          "partial": "Snaplet Init",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:SnapletInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet",
          "name": "SnapletLens",
          "package": "snap",
          "source": "src/Snap-Snaplet-Internal-Types.html#SnapletLens",
          "type": "type"
        },
        "index": {
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "SnapletLens",
          "package": "snap",
          "partial": "Snaplet Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:SnapletLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an IO action that modifies the current snaplet state to be run at\n the end of initialization on the state that was created.  This makes it\n easier to allow one snaplet's state to be modified by another snaplet's\n initializer.  A good example of this is when a snaplet has templates that\n define its views.  The Heist snaplet provides the \u003ccode\u003eaddTemplates\u003c/code\u003e function\n which allows other snaplets to set up their own templates.  \u003ccode\u003eaddTemplates\u003c/code\u003e\n is implemented using this function.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "addPostInitHook",
          "package": "snap",
          "signature": "(v -\u003e EitherT Text IO v) -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#addPostInitHook",
          "type": "function"
        },
        "index": {
          "description": "Adds an IO action that modifies the current snaplet state to be run at the end of initialization on the state that was created This makes it easier to allow one snaplet state to be modified by another snaplet initializer good example of this is when snaplet has templates that define its views The Heist snaplet provides the addTemplates function which allows other snaplets to set up their own templates addTemplates is implemented using this function",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "addPostInitHook",
          "normalized": "(a-\u003eEitherT Text IO a)-\u003eInitializer b a()",
          "package": "snap",
          "partial": "Post Init Hook",
          "signature": "(v-\u003eEitherT Text IO v)-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:addPostInitHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of addPostInitHook for when you have things wrapped in a Snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "addPostInitHookBase",
          "package": "snap",
          "signature": "(Snaplet b -\u003e EitherT Text IO (Snaplet b)) -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#addPostInitHookBase",
          "type": "function"
        },
        "index": {
          "description": "Variant of addPostInitHook for when you have things wrapped in Snaplet",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "addPostInitHookBase",
          "normalized": "(Snaplet a-\u003eEitherT Text IO(Snaplet a))-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Post Init Hook Base",
          "signature": "(Snaplet b-\u003eEitherT Text IO(Snaplet b))-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:addPostInitHookBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds routing to the current \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e.  The new routes are merged with\n the main routing section and take precedence over existing routing that was\n previously defined.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "addRoutes",
          "package": "snap",
          "signature": "[(ByteString, Handler b v ())] -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#addRoutes",
          "type": "function"
        },
        "index": {
          "description": "Adds routing to the current Handler The new routes are merged with the main routing section and take precedence over existing routing that was previously defined",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "addRoutes",
          "normalized": "[(ByteString,Handler a b())]-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Routes",
          "signature": "[(ByteString,Handler b v())]-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:addRoutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function brackets a Handler action in resource acquisition and\n release.  Like \u003ccode\u003e\u003ca\u003ebracketSnap\u003c/a\u003e\u003c/code\u003e,  this is provided because MonadCatchIO's\n \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e function doesn't work properly in the case of a short-circuit\n return from the action being bracketed.\n\u003c/p\u003e\u003cp\u003eIn order to prevent confusion regarding the effects of the\n aquisition and release actions on the Handler state, this function\n doesn't accept Handler actions for the acquire or release actions.\n\u003c/p\u003e\u003cp\u003eThis function will run the release action in all cases where the\n acquire action succeeded.  This includes the following behaviors\n from the bracketed Snap action.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Normal completion\n\u003c/li\u003e\u003cli\u003e Short-circuit completion, either from calling \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e An exception being thrown.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Snap.Snaplet",
          "name": "bracketHandler",
          "package": "snap",
          "signature": "IO a -\u003e (a -\u003e IO x) -\u003e (a -\u003e Handler b v c) -\u003e Handler b v c",
          "source": "src/Snap-Snaplet-Internal-Types.html#bracketHandler",
          "type": "function"
        },
        "index": {
          "description": "This function brackets Handler action in resource acquisition and release Like bracketSnap this is provided because MonadCatchIO bracket function doesn work properly in the case of short-circuit return from the action being bracketed In order to prevent confusion regarding the effects of the aquisition and release actions on the Handler state this function doesn accept Handler actions for the acquire or release actions This function will run the release action in all cases where the acquire action succeeded This includes the following behaviors from the bracketed Snap action Normal completion Short-circuit completion either from calling fail or finishWith An exception being thrown",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "bracketHandler",
          "normalized": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eHandler c d e)-\u003eHandler c d e",
          "package": "snap",
          "partial": "Handler",
          "signature": "IO a-\u003e(a-\u003eIO x)-\u003e(a-\u003eHandler b v c)-\u003eHandler b v c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:bracketHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a configuration and a snap handler, complete it and produce the\n completed configuration as well as a new toplevel handler with things like\n compression and a 500 handler set up.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "combineConfig",
          "package": "snap",
          "signature": "Config Snap a -\u003e Snap () -\u003e IO (Config Snap a, Snap ())",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#combineConfig",
          "type": "function"
        },
        "index": {
          "description": "Given configuration and snap handler complete it and produce the completed configuration as well as new toplevel handler with things like compression and handler set up",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "combineConfig",
          "normalized": "Config Snap a-\u003eSnap()-\u003eIO(Config Snap a,Snap())",
          "package": "snap",
          "partial": "Config",
          "signature": "Config Snap a-\u003eSnap()-\u003eIO(Config Snap a,Snap())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:combineConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns another snaplet's initializer and returns the initialized Snaplet\n value.  The difference between this and \u003ccode\u003e\u003ca\u003enestSnaplet\u003c/a\u003e\u003c/code\u003e is the first type\n parameter in the third argument.  The \"v1 v1\" makes the child snaplet\n think that it is the top-level state, which means that it will not be able\n to use functionality provided by snaplets included above it in the snaplet\n tree. This strongly isolates the child snaplet, and allows you to eliminate\n the b type variable.  The embedded snaplet can still get functionality\n from other snaplets, but only if it nests or embeds the snaplet itself.\n\u003c/p\u003e\u003cp\u003eNote that this function does not change where this snaplet is located in\n the filesystem.  The snaplet directory structure convention stays the same.\n Also, embedSnaplet limits the ways that snaplets can interact, so we\n usually recommend using nestSnaplet instead.  However, we provide this\n function because sometimes reduced flexibility is useful.  In short, if\n you don't understand what this function does for you from looking at its\n type, you probably don't want to use it.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "embedSnaplet",
          "package": "snap",
          "signature": "ByteString-\u003e SnapletLens v v1-\u003e SnapletInit v1 v1-\u003e Initializer b v (Snaplet v1)",
          "type": "function"
        },
        "index": {
          "description": "Runs another snaplet initializer and returns the initialized Snaplet value The difference between this and nestSnaplet is the first type parameter in the third argument The v1 v1 makes the child snaplet think that it is the top-level state which means that it will not be able to use functionality provided by snaplets included above it in the snaplet tree This strongly isolates the child snaplet and allows you to eliminate the type variable The embedded snaplet can still get functionality from other snaplets but only if it nests or embeds the snaplet itself Note that this function does not change where this snaplet is located in the filesystem The snaplet directory structure convention stays the same Also embedSnaplet limits the ways that snaplets can interact so we usually recommend using nestSnaplet instead However we provide this function because sometimes reduced flexibility is useful In short if you don understand what this function does for you from looking at its type you probably don want to use it",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "embedSnaplet",
          "normalized": "ByteString-\u003eSnapletLens a a-\u003eSnapletInit a a-\u003eInitializer b a(Snaplet a)",
          "package": "snap",
          "partial": "Snaplet",
          "signature": "ByteString-\u003eSnapletLens v v-\u003eSnapletInit v v-\u003eInitializer b v(Snaplet v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:embedSnaplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass if the request is not coming from localhost.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "failIfNotLocal",
          "package": "snap",
          "signature": "m b -\u003e m b",
          "source": "src/Snap-Snaplet-Internal-Types.html#failIfNotLocal",
          "type": "function"
        },
        "index": {
          "description": "Pass if the request is not coming from localhost",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "failIfNotLocal",
          "normalized": "a b-\u003ea b",
          "package": "snap",
          "partial": "If Not Local",
          "signature": "m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:failIfNotLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current environment string.  This will be the\n environment given to \u003ccode\u003e\u003ca\u003erunSnaplet\u003c/a\u003e\u003c/code\u003e or from the command line when\n using \u003ccode\u003e\u003ca\u003eserveSnaplet\u003c/a\u003e\u003c/code\u003e.  Usefully for changing behavior during\n development and testing.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getEnvironment",
          "package": "snap",
          "signature": "Initializer b v String",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#getEnvironment",
          "type": "function"
        },
        "index": {
          "description": "Return the current environment string This will be the environment given to runSnaplet or from the command line when using serveSnaplet Usefully for changing behavior during development and testing",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getEnvironment",
          "package": "snap",
          "partial": "Environment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the lens for the current snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getLens",
          "package": "snap",
          "signature": "m b v (SnapletLens (Snaplet b) v)",
          "source": "src/Snap-Snaplet-Internal-Types.html#getLens",
          "type": "method"
        },
        "index": {
          "description": "Gets the lens for the current snaplet",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getLens",
          "package": "snap",
          "partial": "Lens",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current snaplet's opaque config data type.  You'll only use\n this function when writing MonadSnaplet instances.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getOpaqueConfig",
          "package": "snap",
          "signature": "m b v SnapletConfig",
          "source": "src/Snap-Snaplet-Internal-Types.html#getOpaqueConfig",
          "type": "method"
        },
        "index": {
          "description": "Gets the current snaplet opaque config data type You ll only use this function when writing MonadSnaplet instances",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getOpaqueConfig",
          "package": "snap",
          "partial": "Opaque Config",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getOpaqueConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the route pattern that matched for the handler.  This lets you find\n out exactly which of the strings you used in addRoutes matched.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getRoutePattern",
          "package": "snap",
          "signature": "Handler b v (Maybe ByteString)",
          "source": "src/Snap-Snaplet-Internal-Types.html#getRoutePattern",
          "type": "function"
        },
        "index": {
          "description": "Gets the route pattern that matched for the handler This lets you find out exactly which of the strings you used in addRoutes matched",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getRoutePattern",
          "package": "snap",
          "partial": "Route Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getRoutePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLets you retrieve the list of routes currently set up by an Initializer.\n This can be useful in debugging.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getRoutes",
          "package": "snap",
          "signature": "Initializer b v [ByteString]",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#getRoutes",
          "type": "function"
        },
        "index": {
          "description": "Lets you retrieve the list of routes currently set up by an Initializer This can be useful in debugging",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getRoutes",
          "normalized": "Initializer a b[ByteString]",
          "package": "snap",
          "partial": "Routes",
          "signature": "Initializer b v[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getRoutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a list of the names of snaplets that are direct ancestors of the\n current snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getSnapletAncestry",
          "package": "snap",
          "signature": "m b v [Text]",
          "source": "src/Snap-Snaplet-Internal-Types.html#getSnapletAncestry",
          "type": "function"
        },
        "index": {
          "description": "Gets list of the names of snaplets that are direct ancestors of the current snaplet",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getSnapletAncestry",
          "normalized": "a b c[Text]",
          "package": "snap",
          "partial": "Snaplet Ancestry",
          "signature": "m b v[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletAncestry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a human readable description of the snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getSnapletDescription",
          "package": "snap",
          "signature": "m b v Text",
          "source": "src/Snap-Snaplet-Internal-Types.html#getSnapletDescription",
          "type": "function"
        },
        "index": {
          "description": "Gets human readable description of the snaplet",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getSnapletDescription",
          "package": "snap",
          "partial": "Snaplet Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the snaplet's path on the filesystem.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getSnapletFilePath",
          "package": "snap",
          "signature": "m b v FilePath",
          "source": "src/Snap-Snaplet-Internal-Types.html#getSnapletFilePath",
          "type": "function"
        },
        "index": {
          "description": "Gets the snaplet path on the filesystem",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getSnapletFilePath",
          "package": "snap",
          "partial": "Snaplet File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the current snaple's name.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getSnapletName",
          "package": "snap",
          "signature": "m b v (Maybe Text)",
          "source": "src/Snap-Snaplet-Internal-Types.html#getSnapletName",
          "type": "function"
        },
        "index": {
          "description": "Gets the current snaple name",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getSnapletName",
          "package": "snap",
          "partial": "Snaplet Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the base URL for the current snaplet.  Directories get added to\n the current snaplet path by calls to \u003ccode\u003enestSnaplet\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getSnapletRootURL",
          "package": "snap",
          "signature": "m b v ByteString",
          "source": "src/Snap-Snaplet-Internal-Types.html#getSnapletRootURL",
          "type": "function"
        },
        "index": {
          "description": "Gets the base URL for the current snaplet Directories get added to the current snaplet path by calls to nestSnaplet",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getSnapletRootURL",
          "package": "snap",
          "partial": "Snaplet Root URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletRootURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the \u003ccode\u003eSnaplet v\u003c/code\u003e from the current snaplet's state.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getSnapletState",
          "package": "snap",
          "signature": "Handler b v (Snaplet v)",
          "source": "src/Snap-Snaplet-Internal-Types.html#getSnapletState",
          "type": "function"
        },
        "index": {
          "description": "Gets the Snaplet from the current snaplet state",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getSnapletState",
          "package": "snap",
          "partial": "Snaplet State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the config data structure for the current snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getSnapletUserConfig",
          "package": "snap",
          "signature": "m b v Config",
          "source": "src/Snap-Snaplet-Internal-Types.html#getSnapletUserConfig",
          "type": "function"
        },
        "index": {
          "description": "Gets the config data structure for the current snaplet",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getSnapletUserConfig",
          "package": "snap",
          "partial": "Snaplet User Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletUserConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the \u003ccode\u003eSnaplet v\u003c/code\u003e from the current snaplet's state and applies a\n function to it.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "getsSnapletState",
          "package": "snap",
          "signature": "(Snaplet v -\u003e b) -\u003e Handler b1 v b",
          "source": "src/Snap-Snaplet-Internal-Types.html#getsSnapletState",
          "type": "function"
        },
        "index": {
          "description": "Gets the Snaplet from the current snaplet state and applies function to it",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "getsSnapletState",
          "normalized": "(Snaplet a-\u003eb)-\u003eHandler b a b",
          "package": "snap",
          "partial": "Snaplet State",
          "signature": "(Snaplet v-\u003eb)-\u003eHandler b v b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getsSnapletState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to get all of your app's config data in the IO monad without\n the web server infrastructure.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "loadAppConfig",
          "package": "snap",
          "signature": "FileName-\u003e FilePath-\u003e IO Config",
          "type": "function"
        },
        "index": {
          "description": "Allows you to get all of your app config data in the IO monad without the web server infrastructure",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "loadAppConfig",
          "normalized": "FileName-\u003eFilePath-\u003eIO Config",
          "package": "snap",
          "partial": "App Config",
          "signature": "FileName-\u003eFilePath-\u003eIO Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:loadAppConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll snaplet initializers must be wrapped in a call to \u003ccode\u003emakeSnaplet\u003c/code\u003e,\n which handles standardized housekeeping common to all snaplets.\n Common usage will look something like\n this:\n\u003c/p\u003e\u003cpre\u003e\n fooInit :: SnapletInit b Foo\n fooInit = makeSnaplet \"foo\" \"An example snaplet\" Nothing $ do\n     -- Your initializer code here\n     return $ Foo 42\n\u003c/pre\u003e\u003cp\u003eNote that you're writing your initializer code in the Initializer monad,\n and makeSnaplet converts it into an opaque SnapletInit type.  This allows\n us to use the type system to ensure that the API is used correctly.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "makeSnaplet",
          "package": "snap",
          "signature": "Text-\u003e Text-\u003e Maybe (IO FilePath)-\u003e Initializer b v v-\u003e SnapletInit b v",
          "type": "function"
        },
        "index": {
          "description": "All snaplet initializers must be wrapped in call to makeSnaplet which handles standardized housekeeping common to all snaplets Common usage will look something like this fooInit SnapletInit Foo fooInit makeSnaplet foo An example snaplet Nothing do Your initializer code here return Foo Note that you re writing your initializer code in the Initializer monad and makeSnaplet converts it into an opaque SnapletInit type This allows us to use the type system to ensure that the API is used correctly",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "makeSnaplet",
          "normalized": "Text-\u003eText-\u003eMaybe(IO FilePath)-\u003eInitializer a b b-\u003eSnapletInit a b",
          "package": "snap",
          "partial": "Snaplet",
          "signature": "Text-\u003eText-\u003eMaybe(IO FilePath)-\u003eInitializer b v v-\u003eSnapletInit b v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:makeSnaplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLets you change a snaplet's initial state.  It's alomst like a reload,\n except that it doesn't run the initializer.  It just modifies the result of\n the initializer.  This can be used to let you define actions for reloading\n individual snaplets.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "modifyMaster",
          "package": "snap",
          "signature": "v -\u003e Handler b v ()",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#modifyMaster",
          "type": "function"
        },
        "index": {
          "description": "Lets you change snaplet initial state It alomst like reload except that it doesn run the initializer It just modifies the result of the initializer This can be used to let you define actions for reloading individual snaplets",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "modifyMaster",
          "normalized": "a-\u003eHandler b a()",
          "package": "snap",
          "partial": "Master",
          "signature": "v-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:modifyMaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the \u003ccode\u003eSnaplet v\u003c/code\u003e in the current snaplet's state.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "modifySnapletState",
          "package": "snap",
          "signature": "(Snaplet v -\u003e Snaplet v) -\u003e Handler b v ()",
          "source": "src/Snap-Snaplet-Internal-Types.html#modifySnapletState",
          "type": "function"
        },
        "index": {
          "description": "Modifies the Snaplet in the current snaplet state",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "modifySnapletState",
          "normalized": "(Snaplet a-\u003eSnaplet a)-\u003eHandler b a()",
          "package": "snap",
          "partial": "Snaplet State",
          "signature": "(Snaplet v-\u003eSnaplet v)-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:modifySnapletState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a snaplet's name.  All snaplets have a default name set by the\n snaplet author.  This function allows you to override that name.  You will\n have to do this if you have more than one instance of the same kind of\n snaplet because snaplet names must be unique.  This function must\n immediately surround the snaplet's initializer.  For example:\n\u003c/p\u003e\u003cpre\u003efooState \u003c- nestSnaplet \"fooA\" $ nameSnaplet \"myFoo\" $ fooInit\u003c/pre\u003e",
          "module": "Snap.Snaplet",
          "name": "nameSnaplet",
          "package": "snap",
          "signature": "Text-\u003e SnapletInit b v-\u003e SnapletInit b v",
          "type": "function"
        },
        "index": {
          "description": "Sets snaplet name All snaplets have default name set by the snaplet author This function allows you to override that name You will have to do this if you have more than one instance of the same kind of snaplet because snaplet names must be unique This function must immediately surround the snaplet initializer For example fooState nestSnaplet fooA nameSnaplet myFoo fooInit",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "nameSnaplet",
          "normalized": "Text-\u003eSnapletInit a b-\u003eSnapletInit a b",
          "package": "snap",
          "partial": "Snaplet",
          "signature": "Text-\u003eSnapletInit b v-\u003eSnapletInit b v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:nameSnaplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns another snaplet's initializer and returns the initialized Snaplet\n value.  Calling an initializer with nestSnaplet gives the nested snaplet\n access to the same base state that the current snaplet has.  This makes it\n possible for the child snaplet to make use of functionality provided by\n sibling snaplets.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "nestSnaplet",
          "package": "snap",
          "signature": "ByteString-\u003e SnapletLens v v1-\u003e SnapletInit b v1-\u003e Initializer b v (Snaplet v1)",
          "type": "function"
        },
        "index": {
          "description": "Runs another snaplet initializer and returns the initialized Snaplet value Calling an initializer with nestSnaplet gives the nested snaplet access to the same base state that the current snaplet has This makes it possible for the child snaplet to make use of functionality provided by sibling snaplets",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "nestSnaplet",
          "normalized": "ByteString-\u003eSnapletLens a a-\u003eSnapletInit b a-\u003eInitializer b a(Snaplet a)",
          "package": "snap",
          "partial": "Snaplet",
          "signature": "ByteString-\u003eSnapletLens v v-\u003eSnapletInit b v-\u003eInitializer b v(Snaplet v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:nestSnaplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttaches an unload handler to the snaplet.  The unload handler will be\n called when the server shuts down, or is reloaded.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "onUnload",
          "package": "snap",
          "signature": "IO () -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#onUnload",
          "type": "function"
        },
        "index": {
          "description": "Attaches an unload handler to the snaplet The unload handler will be called when the server shuts down or is reloaded",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "onUnload",
          "normalized": "IO()-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Unload",
          "signature": "IO()-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:onUnload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializers should use this function for all informational or error\n messages to be displayed to the user.  On application startup they will be\n sent to the console.  When executed from the reloader, they will be sent\n back to the user in the HTTP response.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "printInfo",
          "package": "snap",
          "signature": "Text -\u003e Initializer b v ()",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#printInfo",
          "type": "function"
        },
        "index": {
          "description": "Initializers should use this function for all informational or error messages to be displayed to the user On application startup they will be sent to the console When executed from the reloader they will be sent back to the user in the HTTP response",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "printInfo",
          "normalized": "Text-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Info",
          "signature": "Text-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:printInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a new \u003ccode\u003eSnaplet v\u003c/code\u003e in the current snaplet's state.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "putSnapletState",
          "package": "snap",
          "signature": "Snaplet v -\u003e Handler b v ()",
          "source": "src/Snap-Snaplet-Internal-Types.html#putSnapletState",
          "type": "function"
        },
        "index": {
          "description": "Puts new Snaplet in the current snaplet state",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "putSnapletState",
          "normalized": "Snaplet a-\u003eHandler b a()",
          "package": "snap",
          "partial": "Snaplet State",
          "signature": "Snaplet v-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:putSnapletState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler that reloads the site.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "reloadSite",
          "package": "snap",
          "signature": "Handler b v ()",
          "source": "src/Snap-Snaplet-Internal-Types.html#reloadSite",
          "type": "function"
        },
        "index": {
          "description": "Handler that reloads the site",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "reloadSite",
          "normalized": "Handler a b()",
          "package": "snap",
          "partial": "Site",
          "signature": "Handler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:reloadSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an environment and a Snaplet initializer, produce a concatenated log\n of all messages generated during initialization, a snap handler, and a\n cleanup action.  The environment is an arbitrary string such as \"devel\" or\n \"production\".  This string is used to determine the name of the\n configuration files used by each snaplet.  If an environment of Nothing is\n used, then runSnaplet defaults to \"devel\".\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "runSnaplet",
          "package": "snap",
          "signature": "Maybe String -\u003e SnapletInit b b -\u003e IO (Text, Snap (), IO ())",
          "source": "src/Snap-Snaplet-Internal-Initializer.html#runSnaplet",
          "type": "function"
        },
        "index": {
          "description": "Given an environment and Snaplet initializer produce concatenated log of all messages generated during initialization snap handler and cleanup action The environment is an arbitrary string such as devel or production This string is used to determine the name of the configuration files used by each snaplet If an environment of Nothing is used then runSnaplet defaults to devel",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "runSnaplet",
          "normalized": "Maybe String-\u003eSnapletInit a a-\u003eIO(Text,Snap(),IO())",
          "package": "snap",
          "partial": "Snaplet",
          "signature": "Maybe String-\u003eSnapletInit b b-\u003eIO(Text,Snap(),IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:runSnaplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize and run a Snaplet. This function parses command-line arguments,\n runs the given Snaplet initializer, and starts an HTTP server running the\n Snaplet's toplevel \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "serveSnaplet",
          "package": "snap",
          "signature": "Config Snap AppConfig-\u003e SnapletInit b b-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Initialize and run Snaplet This function parses command-line arguments runs the given Snaplet initializer and starts an HTTP server running the Snaplet toplevel Handler",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "serveSnaplet",
          "normalized": "Config Snap AppConfig-\u003eSnapletInit a a-\u003eIO()",
          "package": "snap",
          "partial": "Snaplet",
          "signature": "Config Snap AppConfig-\u003eSnapletInit b b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:serveSnaplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the route pattern that matched for the handler.  Use this when to\n override the default pattern which is the key to the alist passed to\n addRoutes.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "setRoutePattern",
          "package": "snap",
          "signature": "ByteString -\u003e Handler b v ()",
          "source": "src/Snap-Snaplet-Internal-Types.html#setRoutePattern",
          "type": "function"
        },
        "index": {
          "description": "Sets the route pattern that matched for the handler Use this when to override the default pattern which is the key to the alist passed to addRoutes",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "setRoutePattern",
          "normalized": "ByteString-\u003eHandler a b()",
          "package": "snap",
          "partial": "Route Pattern",
          "signature": "ByteString-\u003eHandler b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:setRoutePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet",
          "name": "snapletConfig",
          "package": "snap",
          "signature": "forall s.  Lens' (Snaplet s) SnapletConfig",
          "source": "src/Snap-Snaplet-Internal-Types.html#snapletConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "snapletConfig",
          "package": "snap",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:snapletConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a url relative to the current snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "snapletURL",
          "package": "snap",
          "signature": "ByteString -\u003e m b v ByteString",
          "source": "src/Snap-Snaplet-Internal-Types.html#snapletURL",
          "type": "function"
        },
        "index": {
          "description": "Constructs url relative to the current snaplet",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "snapletURL",
          "normalized": "ByteString-\u003ea b c ByteString",
          "package": "snap",
          "partial": "URL",
          "signature": "ByteString-\u003em b v ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:snapletURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet",
          "name": "snapletValue",
          "package": "snap",
          "signature": "forall s.  Lens' (Snaplet s) s",
          "source": "src/Snap-Snaplet-Internal-Types.html#snapletValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "snapletValue",
          "package": "snap",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:snapletValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a lens of the type you get from makeLenses to an similar lens\n that is more suitable for internal use.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "subSnaplet",
          "package": "snap",
          "signature": "SnapletLens a b -\u003e SnapletLens (Snaplet a) b",
          "source": "src/Snap-Snaplet-Internal-Types.html#subSnaplet",
          "type": "function"
        },
        "index": {
          "description": "Transforms lens of the type you get from makeLenses to an similar lens that is more suitable for internal use",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "subSnaplet",
          "normalized": "SnapletLens a b-\u003eSnapletLens(Snaplet a)b",
          "package": "snap",
          "partial": "Snaplet",
          "signature": "SnapletLens a b-\u003eSnapletLens(Snaplet a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:subSnaplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a child snaplet action in the current snaplet's context.  If you\n think about snaplet lenses using a filesystem path metaphor, the lens\n supplied to this snaplet must be a relative path.  In other words, the\n lens's base state must be the same as the current snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "with",
          "package": "snap",
          "signature": "with",
          "source": "src/Snap-Snaplet-Internal-Types.html#with",
          "type": "method"
        },
        "index": {
          "description": "Runs child snaplet action in the current snaplet context If you think about snaplet lenses using filesystem path metaphor the lens supplied to this snaplet must be relative path In other words the lens base state must be the same as the current snaplet",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "with",
          "package": "snap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e accepting a lens from snaplet to snaplet.  Unlike\n the lens used in the above \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e function, this lens formulation has\n an identity, which makes it useful in certain circumstances.  The\n lenses generated by \u003ccode\u003e\u003ca\u003emakeLenses\u003c/a\u003e\u003c/code\u003e will not work with this function,\n however the lens returned by \u003ccode\u003e\u003ca\u003egetLens\u003c/a\u003e\u003c/code\u003e will.\n\u003c/p\u003e\u003cpre\u003ewith = with' . subSnaplet\u003c/pre\u003e",
          "module": "Snap.Snaplet",
          "name": "with'",
          "package": "snap",
          "signature": "SnapletLens (Snaplet v) v' -\u003e m b v' a -\u003e m b v a",
          "source": "src/Snap-Snaplet-Internal-Types.html#with%27",
          "type": "method"
        },
        "index": {
          "description": "variant of with accepting lens from snaplet to snaplet Unlike the lens used in the above with function this lens formulation has an identity which makes it useful in certain circumstances The lenses generated by makeLenses will not work with this function however the lens returned by getLens will with with subSnaplet",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "with'",
          "normalized": "SnapletLens(Snaplet a)b-\u003ec d b e-\u003ec d a e",
          "package": "snap",
          "signature": "SnapletLens(Snaplet v)v'-\u003em b v' a-\u003em b v a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:with-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e but doesn't impose the requirement that the action\n being run be a descendant of the current snaplet.  Using our filesystem\n metaphor again, the lens for this function must be an absolute\n path--it's base must be the same as the current base.\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "withTop",
          "package": "snap",
          "signature": "withTop",
          "source": "src/Snap-Snaplet-Internal-Types.html#withTop",
          "type": "method"
        },
        "index": {
          "description": "Like with but doesn impose the requirement that the action being run be descendant of the current snaplet Using our filesystem metaphor again the lens for this function must be an absolute path--it base must be the same as the current base",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "withTop",
          "package": "snap",
          "partial": "Top",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:withTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe absolute version of \u003ccode\u003e\u003ca\u003ewith'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Snap.Snaplet",
          "name": "withTop'",
          "package": "snap",
          "signature": "SnapletLens (Snaplet b) v' -\u003e m b v' a -\u003e m b v a",
          "source": "src/Snap-Snaplet-Internal-Types.html#withTop%27",
          "type": "method"
        },
        "index": {
          "description": "The absolute version of with",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "withTop'",
          "normalized": "SnapletLens(Snaplet a)b-\u003ec a b d-\u003ec a e d",
          "package": "snap",
          "partial": "Top'",
          "signature": "SnapletLens(Snaplet b)v'-\u003em b v' a-\u003em b v a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:withTop-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps the \u003cem\u003ebase\u003c/em\u003e snaplet's routing in another handler, allowing you to run\n code before and after all routes in an application.\n\u003c/p\u003e\u003cp\u003eHere are some examples of things you might do:\n\u003c/p\u003e\u003cpre\u003e wrapSite (\\site -\u003e logHandlerStart \u003e\u003e site \u003e\u003e logHandlerFinished)\n wrapSite (\\site -\u003e ensureAdminUser \u003e\u003e site)\n\u003c/pre\u003e",
          "module": "Snap.Snaplet",
          "name": "wrapSite",
          "package": "snap",
          "signature": "(Handler b v () -\u003e Handler b v ())-\u003e Initializer b v ()",
          "type": "function"
        },
        "index": {
          "description": "Wraps the base snaplet routing in another handler allowing you to run code before and after all routes in an application Here are some examples of things you might do wrapSite site logHandlerStart site logHandlerFinished wrapSite site ensureAdminUser site",
          "hierarchy": "Snap Snaplet",
          "module": "Snap.Snaplet",
          "name": "wrapSite",
          "normalized": "(Handler a b()-\u003eHandler a b())-\u003eInitializer a b()",
          "package": "snap",
          "partial": "Site",
          "signature": "(Handler b v()-\u003eHandler b v())-\u003eInitializer b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:wrapSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides convenience exports of the modules most commonly used\nwhen developing with the Snap Framework.  For documentation about Snaplets,\nsee \u003ca\u003eSnap.Snaplet\u003c/a\u003e.  For the core web server API, see \u003ca\u003eSnap.Core\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap",
          "name": "Snap",
          "package": "snap",
          "source": "src/Snap.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides convenience exports of the modules most commonly used when developing with the Snap Framework For documentation about Snaplets see Snap.Snaplet For the core web server API see Snap.Core",
          "hierarchy": "Snap",
          "module": "Snap",
          "name": "Snap",
          "package": "snap",
          "partial": "Snap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap/docs/Snap.html#"
      }
    }
  ]
]