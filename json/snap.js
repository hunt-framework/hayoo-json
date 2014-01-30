[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth-Backends-JsonFile.html#",
      "description": {
        "fct-module": "Snap.Snaplet.Auth.Backends.JsonFile",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-JsonFile.html",
        "fct-type": "module",
        "title": "JsonFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth Backends JsonFile",
        "module": "Snap.Snaplet.Auth.Backends.JsonFile",
        "name": "JsonFile",
        "normalized": "",
        "package": "snap",
        "partial": "Json File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth-Backends-JsonFile.html#v:initJsonFileAuthManager",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize a JSON file backed \u003ccode\u003e\u003ca\u003eAuthManager\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.JsonFile",
        "fct-package": "snap",
        "fct-signature": "AuthSettings-\u003e SnapletLens b SessionManager-\u003e FilePath-\u003e SnapletInit b (AuthManager b)",
        "fct-type": "function",
        "title": "initJsonFileAuthManager"
      },
      "index": {
        "description": "Initialize JSON file backed AuthManager",
        "hierarchy": "Snap Snaplet Auth Backends JsonFile",
        "module": "Snap.Snaplet.Auth.Backends.JsonFile",
        "name": "initJsonFileAuthManager",
        "normalized": "AuthSettings-\u003eSnapletLens a SessionManager-\u003eFilePath-\u003eSnapletInit a(AuthManager a)",
        "package": "snap",
        "partial": "Json File Auth Manager",
        "signature": "AuthSettings-\u003eSnapletLens b SessionManager-\u003eFilePath-\u003eSnapletInit b(AuthManager b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth-Backends-JsonFile.html#v:mkJsonAuthMgr",
      "description": {
        "fct-descr": "\u003cp\u003eLoad/create a datafile into memory cache and return the manager.\n\u003c/p\u003e\u003cp\u003eThis data type can be used by itself for batch/non-handler processing.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth.Backends.JsonFile",
        "fct-package": "snap",
        "fct-signature": "FilePath -\u003e IO JsonFileAuthManager",
        "fct-source": "src/Snap-Snaplet-Auth-Backends-JsonFile.html#mkJsonAuthMgr",
        "fct-type": "function",
        "title": "mkJsonAuthMgr"
      },
      "index": {
        "description": "Load create datafile into memory cache and return the manager This data type can be used by itself for batch non-handler processing",
        "hierarchy": "Snap Snaplet Auth Backends JsonFile",
        "module": "Snap.Snaplet.Auth.Backends.JsonFile",
        "name": "mkJsonAuthMgr",
        "normalized": "FilePath-\u003eIO JsonFileAuthManager",
        "package": "snap",
        "partial": "Json Auth Mgr",
        "signature": "FilePath-\u003eIO JsonFileAuthManager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains all the central authentication functionality.\n\u003c/p\u003e\u003cp\u003eIt exports a number of high-level functions to be used directly in your\n application handlers.\n\u003c/p\u003e\u003cp\u003eWe also export a number of mid-level functions that should be helpful when\n you are integrating with another way of confirming the authentication of\n login requests.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Auth.html",
        "fct-type": "module",
        "title": "Auth"
      },
      "index": {
        "description": "This module contains all the central authentication functionality It exports number of high-level functions to be used directly in your application handlers We also export number of mid-level functions that should be helpful when you are integrating with another way of confirming the authentication of login requests",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "Auth",
        "normalized": "",
        "package": "snap",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:AuthFailure",
      "description": {
        "fct-descr": "\u003cp\u003eAuthentication failures indicate what went wrong during authentication.\n They may provide useful information to the developer, although it is\n generally not advisable to show the user the exact details about why login\n failed.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "data",
        "title": "AuthFailure"
      },
      "index": {
        "description": "Authentication failures indicate what went wrong during authentication They may provide useful information to the developer although it is generally not advisable to show the user the exact details about why login failed",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "AuthFailure",
        "normalized": "",
        "package": "snap",
        "partial": "Auth Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:AuthManager",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract data type holding all necessary information for auth operation\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "data",
        "title": "AuthManager"
      },
      "index": {
        "description": "Abstract data type holding all necessary information for auth operation",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "AuthManager",
        "normalized": "",
        "package": "snap",
        "partial": "Auth Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:AuthSettings",
      "description": {
        "fct-descr": "\u003cp\u003eAuthentication settings defined at initialization time\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
        "fct-type": "data",
        "title": "AuthSettings"
      },
      "index": {
        "description": "Authentication settings defined at initialization time",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "AuthSettings",
        "normalized": "",
        "package": "snap",
        "partial": "Auth Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:AuthUser",
      "description": {
        "fct-descr": "\u003cp\u003eType representing the concept of a User in your application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "data",
        "title": "AuthUser"
      },
      "index": {
        "description": "Type representing the concept of User in your application",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "AuthUser",
        "normalized": "",
        "package": "snap",
        "partial": "Auth User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:IAuthBackend",
      "description": {
        "fct-descr": "\u003cp\u003eAll storage backends need to implement this typeclass\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#IAuthBackend",
        "fct-type": "class",
        "title": "IAuthBackend"
      },
      "index": {
        "description": "All storage backends need to implement this typeclass",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "IAuthBackend",
        "normalized": "",
        "package": "snap",
        "partial": "IAuth Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:Password",
      "description": {
        "fct-descr": "\u003cp\u003ePassword is clear when supplied by the user and encrypted later when\n returned from the db.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#Password",
        "fct-type": "data",
        "title": "Password"
      },
      "index": {
        "description": "Password is clear when supplied by the user and encrypted later when returned from the db",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "Password",
        "normalized": "",
        "package": "snap",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:Role",
      "description": {
        "fct-descr": "\u003cp\u003eThis will be replaced by a role-based permission system.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#Role",
        "fct-type": "data",
        "title": "Role"
      },
      "index": {
        "description": "This will be replaced by role-based permission system",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "Role",
        "normalized": "",
        "package": "snap",
        "partial": "Role",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#t:UserId",
      "description": {
        "fct-descr": "\u003cp\u003eInternal representation of a \u003ccode\u003eUser\u003c/code\u003e. By convention, we demand that the\n application is able to directly fetch a \u003ccode\u003eUser\u003c/code\u003e using this identifier.\n\u003c/p\u003e\u003cp\u003eThink of this type as a secure, authenticated user. You should normally\n never see this type unless a user has been authenticated.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "newtype",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#UserId",
        "fct-type": "newtype",
        "title": "UserId"
      },
      "index": {
        "description": "Internal representation of User By convention we demand that the application is able to directly fetch User using this identifier Think of this type as secure authenticated user You should normally never see this type unless user has been authenticated",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "UserId",
        "normalized": "",
        "package": "snap",
        "partial": "User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:AuthError",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthError String",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "function",
        "title": "AuthError"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "AuthError",
        "normalized": "",
        "package": "snap",
        "partial": "Auth Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:AuthManager",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthManager",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "AuthManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "AuthManager",
        "normalized": "",
        "package": "snap",
        "partial": "Auth Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:AuthSettings",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthSettings",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
        "fct-type": "function",
        "title": "AuthSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "AuthSettings",
        "normalized": "",
        "package": "snap",
        "partial": "Auth Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:AuthUser",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "AuthUser"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "AuthUser",
        "normalized": "",
        "package": "snap",
        "partial": "Auth User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:BackendError",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "BackendError",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "function",
        "title": "BackendError"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "BackendError",
        "normalized": "",
        "package": "snap",
        "partial": "Backend Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:ClearText",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "ClearText ByteString",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#Password",
        "fct-type": "function",
        "title": "ClearText"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "ClearText",
        "normalized": "",
        "package": "snap",
        "partial": "Clear Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:DuplicateLogin",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "DuplicateLogin",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "function",
        "title": "DuplicateLogin"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "DuplicateLogin",
        "normalized": "",
        "package": "snap",
        "partial": "Duplicate Login",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:Encrypted",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Encrypted ByteString",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#Password",
        "fct-type": "function",
        "title": "Encrypted"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "Encrypted",
        "normalized": "",
        "package": "snap",
        "partial": "Encrypted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:EncryptedPassword",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "EncryptedPassword",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "function",
        "title": "EncryptedPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "EncryptedPassword",
        "normalized": "",
        "package": "snap",
        "partial": "Encrypted Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:IncorrectPassword",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "IncorrectPassword",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "function",
        "title": "IncorrectPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "IncorrectPassword",
        "normalized": "",
        "package": "snap",
        "partial": "Incorrect Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:LockedOut",
      "description": {
        "fct-descr": "\u003cp\u003eLocked out until given time\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "LockedOut UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "function",
        "title": "LockedOut"
      },
      "index": {
        "description": "Locked out until given time",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "LockedOut",
        "normalized": "",
        "package": "snap",
        "partial": "Locked Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:PasswordMissing",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "PasswordMissing",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "function",
        "title": "PasswordMissing"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "PasswordMissing",
        "normalized": "",
        "package": "snap",
        "partial": "Password Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:Role",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Role ByteString",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#Role",
        "fct-type": "function",
        "title": "Role"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "Role",
        "normalized": "",
        "package": "snap",
        "partial": "Role",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:UserId",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "UserId",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#UserId",
        "fct-type": "function",
        "title": "UserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "UserId",
        "normalized": "",
        "package": "snap",
        "partial": "User Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:UserNotFound",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "UserNotFound",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "function",
        "title": "UserNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "UserNotFound",
        "normalized": "",
        "package": "snap",
        "partial": "User Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:UsernameMissing",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "UsernameMissing",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthFailure",
        "fct-type": "function",
        "title": "UsernameMissing"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "UsernameMissing",
        "normalized": "",
        "package": "snap",
        "partial": "Username Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:activeUser",
      "description": {
        "fct-descr": "\u003cp\u003eA per-request logged-in user cache\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe AuthUser",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "activeUser"
      },
      "index": {
        "description": "per-request logged-in user cache",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "activeUser",
        "normalized": "",
        "package": "snap",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:addAuthSplices",
      "description": {
        "fct-descr": "\u003cp\u003eAdd all standard auth splices to a Heist-enabled application.\n\u003c/p\u003e\u003cp\u003eThis adds the following splices:\n \u003cifLoggedIn\u003e\n \u003cifLoggedOut\u003e\n \u003cloggedInUser\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e SnapletLens b (AuthManager b)-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "addAuthSplices"
      },
      "index": {
        "description": "Add all standard auth splices to Heist-enabled application This adds the following splices ifLoggedIn ifLoggedOut loggedInUser",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "addAuthSplices",
        "normalized": "Snaplet(Heist a)-\u003eSnapletLens a(AuthManager a)-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Auth Splices",
        "signature": "Snaplet(Heist b)-\u003eSnapletLens b(AuthManager b)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asLockout",
      "description": {
        "fct-descr": "\u003cp\u003eLockout strategy: ([MaxAttempts], [LockoutDuration])\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe (Int, NominalDiffTime)",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
        "fct-type": "function",
        "title": "asLockout"
      },
      "index": {
        "description": "Lockout strategy MaxAttempts LockoutDuration",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "asLockout",
        "normalized": "Maybe(Int,NominalDiffTime)",
        "package": "snap",
        "partial": "Lockout",
        "signature": "Maybe(Int,NominalDiffTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asMinPasswdLen",
      "description": {
        "fct-descr": "\u003cp\u003eCurrently not used/checked\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Int",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
        "fct-type": "function",
        "title": "asMinPasswdLen"
      },
      "index": {
        "description": "Currently not used checked",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "asMinPasswdLen",
        "normalized": "",
        "package": "snap",
        "partial": "Min Passwd Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asRememberCookieName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the desired remember cookie\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "ByteString",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
        "fct-type": "function",
        "title": "asRememberCookieName"
      },
      "index": {
        "description": "Name of the desired remember cookie",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "asRememberCookieName",
        "normalized": "",
        "package": "snap",
        "partial": "Remember Cookie Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asRememberPeriod",
      "description": {
        "fct-descr": "\u003cp\u003eHow long to remember when the option is used in rest of the API.\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means remember until end of session.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
        "fct-type": "function",
        "title": "asRememberPeriod"
      },
      "index": {
        "description": "How long to remember when the option is used in rest of the API Nothing means remember until end of session",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "asRememberPeriod",
        "normalized": "",
        "package": "snap",
        "partial": "Remember Period",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:asSiteKey",
      "description": {
        "fct-descr": "\u003cp\u003eLocation of app's encryption key\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "FilePath",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthSettings",
        "fct-type": "function",
        "title": "asSiteKey"
      },
      "index": {
        "description": "Location of app encryption key",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "asSiteKey",
        "normalized": "",
        "package": "snap",
        "partial": "Site Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:authSettingsFromConfig",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to get auth settings from a config file.  This function can be\n used by the authors of auth snaplet backends in the initializer to let the\n user configure the auth snaplet from a config file.  All options are\n optional and default to what's in defAuthSettings if not supplied.\n Here's what the default options would look like in the config file:\n\u003c/p\u003e\u003cpre\u003e minPasswordLen = 8\n rememberCookie = \"_remember\"\n rememberPeriod = 1209600 # 2 weeks\n lockout = [5, 86400] # 5 attempts locks you out for 86400 seconds\n siteKey = \"site_key.txt\"\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Initializer b v AuthSettings",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#authSettingsFromConfig",
        "fct-type": "function",
        "title": "authSettingsFromConfig"
      },
      "index": {
        "description": "Function to get auth settings from config file This function can be used by the authors of auth snaplet backends in the initializer to let the user configure the auth snaplet from config file All options are optional and default to what in defAuthSettings if not supplied Here what the default options would look like in the config file minPasswordLen rememberCookie remember rememberPeriod weeks lockout attempts locks you out for seconds siteKey site key.txt",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "authSettingsFromConfig",
        "normalized": "",
        "package": "snap",
        "partial": "Settings From Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:authenticatePassword",
      "description": {
        "fct-descr": "\u003cp\u003eCheck password for a given user.\n\u003c/p\u003e\u003cp\u003eReturns \u003ca\u003eNothing\u003c/a\u003e if check is successful and an \u003ca\u003eIncorrectPassword\u003c/a\u003e error\n otherwise\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser-\u003e Password-\u003e Maybe AuthFailure",
        "fct-type": "function",
        "title": "authenticatePassword"
      },
      "index": {
        "description": "Check password for given user Returns Nothing if check is successful and an IncorrectPassword error otherwise",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "authenticatePassword",
        "normalized": "AuthUser-\u003ePassword-\u003eMaybe AuthFailure",
        "package": "snap",
        "partial": "Password",
        "signature": "AuthUser-\u003ePassword-\u003eMaybe AuthFailure"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:backend",
      "description": {
        "fct-descr": "\u003cp\u003eStorage back-end\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "r",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "backend"
      },
      "index": {
        "description": "Storage back-end",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "backend",
        "normalized": "",
        "package": "snap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:checkPassword",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Password -\u003e Password -\u003e Bool",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#checkPassword",
        "fct-type": "function",
        "title": "checkPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "checkPassword",
        "normalized": "Password-\u003ePassword-\u003eBool",
        "package": "snap",
        "partial": "Password",
        "signature": "Password-\u003ePassword-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:checkPasswordAndLogin",
      "description": {
        "fct-descr": "\u003cp\u003eAuthenticate and log the user into the current session if successful.\n\u003c/p\u003e\u003cp\u003eThis is a mid-level function exposed to allow roll-your-own ways of looking\n up a user from the database.\n\u003c/p\u003e\u003cp\u003eThis function will:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Check the password\n\u003c/li\u003e\u003cli\u003e Login the user into the current session\n\u003c/li\u003e\u003cli\u003e Mark success/failure of the authentication trial on the user record\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser-\u003e Password-\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
        "fct-type": "function",
        "title": "checkPasswordAndLogin"
      },
      "index": {
        "description": "Authenticate and log the user into the current session if successful This is mid-level function exposed to allow roll-your-own ways of looking up user from the database This function will Check the password Login the user into the current session Mark success failure of the authentication trial on the user record",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "checkPasswordAndLogin",
        "normalized": "AuthUser-\u003ePassword-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
        "package": "snap",
        "partial": "Password And Login",
        "signature": "AuthUser-\u003ePassword-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:clearPasswordResetToken",
      "description": {
        "fct-descr": "\u003cp\u003eClears a user's password reset token.  Call this when the user\n successfully changes their password to ensure that the password reset link\n cannot be used again.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Text -\u003e Handler b (AuthManager b) Bool",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#clearPasswordResetToken",
        "fct-type": "function",
        "title": "clearPasswordResetToken"
      },
      "index": {
        "description": "Clears user password reset token Call this when the user successfully changes their password to ensure that the password reset link cannot be used again",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "clearPasswordResetToken",
        "normalized": "Text-\u003eHandler a(AuthManager a)Bool",
        "package": "snap",
        "partial": "Password Reset Token",
        "signature": "Text-\u003eHandler b(AuthManager b)Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:compiledAuthSplices",
      "description": {
        "fct-descr": "\u003cp\u003eList containing compiled splices for ifLoggedIn, ifLoggedOut, and\n loggedInUser.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (AuthManager b) -\u003e Splices (SnapletCSplice b)",
        "fct-source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#compiledAuthSplices",
        "fct-type": "function",
        "title": "compiledAuthSplices"
      },
      "index": {
        "description": "List containing compiled splices for ifLoggedIn ifLoggedOut and loggedInUser",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "compiledAuthSplices",
        "normalized": "SnapletLens a(AuthManager a)-\u003eSplices(SnapletCSplice a)",
        "package": "snap",
        "partial": "Auth Splices",
        "signature": "SnapletLens b(AuthManager b)-\u003eSplices(SnapletCSplice b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:createUser",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new user from just a username and password\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Text-\u003e ByteString-\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
        "fct-type": "function",
        "title": "createUser"
      },
      "index": {
        "description": "Create new user from just username and password",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "createUser",
        "normalized": "Text-\u003eByteString-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
        "package": "snap",
        "partial": "User",
        "signature": "Text-\u003eByteString-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:currentUser",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current user; trying to remember from cookie if possible.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Handler b (AuthManager b) (Maybe AuthUser)",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#currentUser",
        "fct-type": "function",
        "title": "currentUser"
      },
      "index": {
        "description": "Return the current user trying to remember from cookie if possible",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "currentUser",
        "normalized": "",
        "package": "snap",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:defAuthSettings",
      "description": {
        "fct-descr": "\u003cp\u003eDefault settings for Auth.\n\u003c/p\u003e\u003cpre\u003e asMinPasswdLen = 8\n asRememberCookieName = \"_remember\"\n asRememberPeriod = Just (2*7*24*60*60) = 2 weeks\n asLockout = Nothing\n asSiteKey = \"site_key.txt\"\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthSettings",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#defAuthSettings",
        "fct-type": "function",
        "title": "defAuthSettings"
      },
      "index": {
        "description": "Default settings for Auth asMinPasswdLen asRememberCookieName remember asRememberPeriod Just weeks asLockout Nothing asSiteKey site key.txt",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "defAuthSettings",
        "normalized": "",
        "package": "snap",
        "partial": "Auth Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:defAuthUser",
      "description": {
        "fct-descr": "\u003cp\u003eDefault AuthUser that has all empty values.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#defAuthUser",
        "fct-type": "function",
        "title": "defAuthUser"
      },
      "index": {
        "description": "Default AuthUser that has all empty values",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "defAuthUser",
        "normalized": "",
        "package": "snap",
        "partial": "Auth User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:destroy",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "r -\u003e AuthUser -\u003e IO ()",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#destroy",
        "fct-type": "method",
        "title": "destroy"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "destroy",
        "normalized": "a-\u003eAuthUser-\u003eIO()",
        "package": "snap",
        "partial": "",
        "signature": "r-\u003eAuthUser-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:destroyUser",
      "description": {
        "fct-descr": "\u003cp\u003eDestroy the given user\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser -\u003e Handler b (AuthManager b) ()",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#destroyUser",
        "fct-type": "function",
        "title": "destroyUser"
      },
      "index": {
        "description": "Destroy the given user",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "destroyUser",
        "normalized": "AuthUser-\u003eHandler a(AuthManager a)()",
        "package": "snap",
        "partial": "User",
        "signature": "AuthUser-\u003eHandler b(AuthManager b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:encrypt",
      "description": {
        "fct-descr": "\u003cp\u003eThe underlying encryption function, in case you need it for\n external processing.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "ByteString -\u003e IO ByteString",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#encrypt",
        "fct-type": "function",
        "title": "encrypt"
      },
      "index": {
        "description": "The underlying encryption function in case you need it for external processing",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "encrypt",
        "normalized": "ByteString-\u003eIO ByteString",
        "package": "snap",
        "partial": "",
        "signature": "ByteString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:encryptPassword",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eClearText\u003c/a\u003e\u003c/code\u003e password into an \u003ccode\u003e\u003ca\u003eEncrypted\u003c/a\u003e\u003c/code\u003e password, ready to\n be stuffed into a database.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Password -\u003e IO Password",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#encryptPassword",
        "fct-type": "function",
        "title": "encryptPassword"
      },
      "index": {
        "description": "Turn ClearText password into an Encrypted password ready to be stuffed into database",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "encryptPassword",
        "normalized": "Password-\u003eIO Password",
        "package": "snap",
        "partial": "Password",
        "signature": "Password-\u003eIO Password"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:forceLogin",
      "description": {
        "fct-descr": "\u003cp\u003eLogin and persist the given \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e in the active session\n\u003c/p\u003e\u003cp\u003eMeant to be used if you have other means of being sure that the person is\n who she says she is.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser-\u003e Handler b (AuthManager b) (Either AuthFailure ())",
        "fct-type": "function",
        "title": "forceLogin"
      },
      "index": {
        "description": "Login and persist the given AuthUser in the active session Meant to be used if you have other means of being sure that the person is who she says she is",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "forceLogin",
        "normalized": "AuthUser-\u003eHandler a(AuthManager a)(Either AuthFailure())",
        "package": "snap",
        "partial": "Login",
        "signature": "AuthUser-\u003eHandler b(AuthManager b)(Either AuthFailure())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:ifLoggedIn",
      "description": {
        "fct-descr": "\u003cp\u003eA splice that can be used to check for existence of a user. If a user is\n present, this will run the contents of the node.\n\u003c/p\u003e\u003cpre\u003e \u003cifLoggedIn\u003e Show this when there is a logged in user \u003c/ifLoggedIn\u003e\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (AuthManager b) -\u003e SnapletISplice b",
        "fct-source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#ifLoggedIn",
        "fct-type": "function",
        "title": "ifLoggedIn"
      },
      "index": {
        "description": "splice that can be used to check for existence of user If user is present this will run the contents of the node ifLoggedIn Show this when there is logged in user ifLoggedIn",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "ifLoggedIn",
        "normalized": "SnapletLens a(AuthManager a)-\u003eSnapletISplice a",
        "package": "snap",
        "partial": "Logged In",
        "signature": "SnapletLens b(AuthManager b)-\u003eSnapletISplice b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:ifLoggedOut",
      "description": {
        "fct-descr": "\u003cp\u003eA splice that can be used to check for absence of a user. If a user is\n not present, this will run the contents of the node.\n\u003c/p\u003e\u003cpre\u003e \u003cifLoggedOut\u003e Show this when there is a logged in user \u003c/ifLoggedOut\u003e\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (AuthManager b) -\u003e SnapletISplice b",
        "fct-source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#ifLoggedOut",
        "fct-type": "function",
        "title": "ifLoggedOut"
      },
      "index": {
        "description": "splice that can be used to check for absence of user If user is not present this will run the contents of the node ifLoggedOut Show this when there is logged in user ifLoggedOut",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "ifLoggedOut",
        "normalized": "SnapletLens a(AuthManager a)-\u003eSnapletISplice a",
        "package": "snap",
        "partial": "Logged Out",
        "signature": "SnapletLens b(AuthManager b)-\u003eSnapletISplice b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:isLoggedIn",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience wrapper around \u003ccode\u003erememberUser\u003c/code\u003e that returns a bool result\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Handler b (AuthManager b) Bool",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#isLoggedIn",
        "fct-type": "function",
        "title": "isLoggedIn"
      },
      "index": {
        "description": "Convenience wrapper around rememberUser that returns bool result",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "isLoggedIn",
        "normalized": "",
        "package": "snap",
        "partial": "Logged In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:lockout",
      "description": {
        "fct-descr": "\u003cp\u003eLockout after x tries, re-allow entry after y seconds\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe (Int, NominalDiffTime)",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "lockout"
      },
      "index": {
        "description": "Lockout after tries re-allow entry after seconds",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "lockout",
        "normalized": "Maybe(Int,NominalDiffTime)",
        "package": "snap",
        "partial": "",
        "signature": "Maybe(Int,NominalDiffTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:loggedInUser",
      "description": {
        "fct-descr": "\u003cp\u003eA splice that will simply print the current user's login, if\n there is one.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (AuthManager b) -\u003e SnapletISplice b",
        "fct-source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#loggedInUser",
        "fct-type": "function",
        "title": "loggedInUser"
      },
      "index": {
        "description": "splice that will simply print the current user login if there is one",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "loggedInUser",
        "normalized": "SnapletLens a(AuthManager a)-\u003eSnapletISplice a",
        "package": "snap",
        "partial": "In User",
        "signature": "SnapletLens b(AuthManager b)-\u003eSnapletISplice b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:loginByRememberToken",
      "description": {
        "fct-descr": "\u003cp\u003eRemember user from the remember token if possible and perform login\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Handler b (AuthManager b) (Either AuthFailure AuthUser)",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#loginByRememberToken",
        "fct-type": "function",
        "title": "loginByRememberToken"
      },
      "index": {
        "description": "Remember user from the remember token if possible and perform login",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "loginByRememberToken",
        "normalized": "",
        "package": "snap",
        "partial": "By Remember Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:loginByUsername",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a user by her username, check given password and perform login\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Text-\u003e Password-\u003e Bool-\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
        "fct-type": "function",
        "title": "loginByUsername"
      },
      "index": {
        "description": "Lookup user by her username check given password and perform login",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "loginByUsername",
        "normalized": "Text-\u003ePassword-\u003eBool-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
        "package": "snap",
        "partial": "By Username",
        "signature": "Text-\u003ePassword-\u003eBool-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:loginUser",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e handler that processes a login form.\n\u003c/p\u003e\u003cp\u003eThe request paremeters are passed to \u003ccode\u003eperformLogin\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTo make your users stay logged in for longer than the session replay\n prevention timeout, you must pass a field name as the third parameter and\n that field must be set to a value of \"1\" by the submitting form.  This\n lets you use a user selectable check box.  Or if you want user remembering\n always turned on, you can use a hidden form field.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Maybe ByteString-\u003e (AuthFailure -\u003e Handler b (AuthManager b) ())-\u003e Handler b (AuthManager b) ()-\u003e Handler b (AuthManager b) ()",
        "fct-type": "function",
        "title": "loginUser"
      },
      "index": {
        "description": "MonadSnap handler that processes login form The request paremeters are passed to performLogin To make your users stay logged in for longer than the session replay prevention timeout you must pass field name as the third parameter and that field must be set to value of by the submitting form This lets you use user selectable check box Or if you want user remembering always turned on you can use hidden form field",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "loginUser",
        "normalized": "ByteString-\u003eByteString-\u003eMaybe ByteString-\u003e(AuthFailure-\u003eHandler a(AuthManager a)())-\u003eHandler a(AuthManager a)()-\u003eHandler a(AuthManager a)()",
        "package": "snap",
        "partial": "User",
        "signature": "ByteString-\u003eByteString-\u003eMaybe ByteString-\u003e(AuthFailure-\u003eHandler b(AuthManager b)())-\u003eHandler b(AuthManager b)()-\u003eHandler b(AuthManager b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:logout",
      "description": {
        "fct-descr": "\u003cp\u003eLogout the active user\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Handler b (AuthManager b) ()",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#logout",
        "fct-type": "function",
        "title": "logout"
      },
      "index": {
        "description": "Logout the active user",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "logout",
        "normalized": "Handler a(AuthManager a)()",
        "package": "snap",
        "partial": "",
        "signature": "Handler b(AuthManager b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:logoutUser",
      "description": {
        "fct-descr": "\u003cp\u003eSimple handler to log the user out. Deletes user from session.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Handler b (AuthManager b) ()-\u003e Handler b (AuthManager b) ()",
        "fct-type": "function",
        "title": "logoutUser"
      },
      "index": {
        "description": "Simple handler to log the user out Deletes user from session",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "logoutUser",
        "normalized": "Handler a(AuthManager a)()-\u003eHandler a(AuthManager a)()",
        "package": "snap",
        "partial": "User",
        "signature": "Handler b(AuthManager b)()-\u003eHandler b(AuthManager b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:lookupByLogin",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "r -\u003e Text -\u003e IO (Maybe AuthUser)",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#lookupByLogin",
        "fct-type": "method",
        "title": "lookupByLogin"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "lookupByLogin",
        "normalized": "a-\u003eText-\u003eIO(Maybe AuthUser)",
        "package": "snap",
        "partial": "By Login",
        "signature": "r-\u003eText-\u003eIO(Maybe AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:lookupByRememberToken",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "r -\u003e Text -\u003e IO (Maybe AuthUser)",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#lookupByRememberToken",
        "fct-type": "method",
        "title": "lookupByRememberToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "lookupByRememberToken",
        "normalized": "a-\u003eText-\u003eIO(Maybe AuthUser)",
        "package": "snap",
        "partial": "By Remember Token",
        "signature": "r-\u003eText-\u003eIO(Maybe AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:lookupByUserId",
      "description": {
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "r -\u003e UserId -\u003e IO (Maybe AuthUser)",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#lookupByUserId",
        "fct-type": "method",
        "title": "lookupByUserId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "lookupByUserId",
        "normalized": "a-\u003eUserId-\u003eIO(Maybe AuthUser)",
        "package": "snap",
        "partial": "By User Id",
        "signature": "r-\u003eUserId-\u003eIO(Maybe AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:markAuthFail",
      "description": {
        "fct-descr": "\u003cp\u003eMutate an \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e, marking failed authentication\n\u003c/p\u003e\u003cp\u003eThis will save the user to the backend.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser -\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#markAuthFail",
        "fct-type": "function",
        "title": "markAuthFail"
      },
      "index": {
        "description": "Mutate an AuthUser marking failed authentication This will save the user to the backend",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "markAuthFail",
        "normalized": "AuthUser-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
        "package": "snap",
        "partial": "Auth Fail",
        "signature": "AuthUser-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:markAuthSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eMutate an \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e, marking successful authentication\n\u003c/p\u003e\u003cp\u003eThis will save the user to the backend.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser -\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#markAuthSuccess",
        "fct-type": "function",
        "title": "markAuthSuccess"
      },
      "index": {
        "description": "Mutate an AuthUser marking successful authentication This will save the user to the backend",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "markAuthSuccess",
        "normalized": "AuthUser-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
        "package": "snap",
        "partial": "Auth Success",
        "signature": "AuthUser-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:minPasswdLen",
      "description": {
        "fct-descr": "\u003cp\u003ePassword length range\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Int",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "minPasswdLen"
      },
      "index": {
        "description": "Password length range",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "minPasswdLen",
        "normalized": "",
        "package": "snap",
        "partial": "Passwd Len",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:randomNumberGenerator",
      "description": {
        "fct-descr": "\u003cp\u003eRandom number generator\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "RNG",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "randomNumberGenerator"
      },
      "index": {
        "description": "Random number generator",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "randomNumberGenerator",
        "normalized": "",
        "package": "snap",
        "partial": "Number Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:registerUser",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a new user by specifying login and password \u003ccode\u003eParam\u003c/code\u003e fields\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
        "fct-type": "function",
        "title": "registerUser"
      },
      "index": {
        "description": "Register new user by specifying login and password Param fields",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "registerUser",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
        "package": "snap",
        "partial": "User",
        "signature": "ByteString-\u003eByteString-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:rememberCookieName",
      "description": {
        "fct-descr": "\u003cp\u003eCookie name for the remember token\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "ByteString",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "rememberCookieName"
      },
      "index": {
        "description": "Cookie name for the remember token",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "rememberCookieName",
        "normalized": "",
        "package": "snap",
        "partial": "Cookie Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:rememberPeriod",
      "description": {
        "fct-descr": "\u003cp\u003eRemember period in seconds. Defaults to 2 weeks.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "rememberPeriod"
      },
      "index": {
        "description": "Remember period in seconds Defaults to weeks",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "rememberPeriod",
        "normalized": "",
        "package": "snap",
        "partial": "Period",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:requireUser",
      "description": {
        "fct-descr": "\u003cp\u003eRequire that an authenticated \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e is present in the current\n session.\n\u003c/p\u003e\u003cp\u003eThis function has no DB cost - only checks to see if a user_id is present\n in the current session.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (AuthManager b)-\u003e Handler b v a-\u003e Handler b v a-\u003e Handler b v a",
        "fct-type": "function",
        "title": "requireUser"
      },
      "index": {
        "description": "Require that an authenticated AuthUser is present in the current session This function has no DB cost only checks to see if user id is present in the current session",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "requireUser",
        "normalized": "SnapletLens a(AuthManager a)-\u003eHandler a b c-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "User",
        "signature": "SnapletLens b(AuthManager b)-\u003eHandler b v a-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eCreate or update the given \u003ccode\u003e\u003ca\u003eAuthUser\u003c/a\u003e\u003c/code\u003e record.  A \u003ccode\u003e\u003ca\u003euserId\u003c/a\u003e\u003c/code\u003e of Nothing\n indicates that a new user should be created, otherwise the user\n information for that userId should be updated.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "r -\u003e AuthUser -\u003e IO (Either AuthFailure AuthUser)",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#save",
        "fct-type": "method",
        "title": "save"
      },
      "index": {
        "description": "Create or update the given AuthUser record userId of Nothing indicates that new user should be created otherwise the user information for that userId should be updated",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "save",
        "normalized": "a-\u003eAuthUser-\u003eIO(Either AuthFailure AuthUser)",
        "package": "snap",
        "partial": "",
        "signature": "r-\u003eAuthUser-\u003eIO(Either AuthFailure AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:saveUser",
      "description": {
        "fct-descr": "\u003cp\u003eCreate or update a given user\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser -\u003e Handler b (AuthManager b) (Either AuthFailure AuthUser)",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#saveUser",
        "fct-type": "function",
        "title": "saveUser"
      },
      "index": {
        "description": "Create or update given user",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "saveUser",
        "normalized": "AuthUser-\u003eHandler a(AuthManager a)(Either AuthFailure AuthUser)",
        "package": "snap",
        "partial": "User",
        "signature": "AuthUser-\u003eHandler b(AuthManager b)(Either AuthFailure AuthUser)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:session",
      "description": {
        "fct-descr": "\u003cp\u003eA lens pointer to a SessionManager\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b SessionManager",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "session"
      },
      "index": {
        "description": "lens pointer to SessionManager",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "session",
        "normalized": "",
        "package": "snap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:setPassword",
      "description": {
        "fct-descr": "\u003cp\u003eSet a new password for the given user. Given password should be\n clear-text; it will be encrypted into a \u003ccode\u003e\u003ca\u003eEncrypted\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser -\u003e ByteString -\u003e IO AuthUser",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#setPassword",
        "fct-type": "function",
        "title": "setPassword"
      },
      "index": {
        "description": "Set new password for the given user Given password should be clear-text it will be encrypted into Encrypted",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "setPassword",
        "normalized": "AuthUser-\u003eByteString-\u003eIO AuthUser",
        "package": "snap",
        "partial": "Password",
        "signature": "AuthUser-\u003eByteString-\u003eIO AuthUser"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:setPasswordResetToken",
      "description": {
        "fct-descr": "\u003cp\u003eThis function generates a random password reset token and stores it in\n the database for the user.  Call this function when a user forgets their\n password.  Then use the token to autogenerate a link that the user can\n visit to reset their password.  This function also sets a timestamp so the\n reset token can be expired.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Text -\u003e Handler b (AuthManager b) (Maybe Text)",
        "fct-source": "src/Snap-Snaplet-Auth-Handlers.html#setPasswordResetToken",
        "fct-type": "function",
        "title": "setPasswordResetToken"
      },
      "index": {
        "description": "This function generates random password reset token and stores it in the database for the user Call this function when user forgets their password Then use the token to autogenerate link that the user can visit to reset their password This function also sets timestamp so the reset token can be expired",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "setPasswordResetToken",
        "normalized": "Text-\u003eHandler a(AuthManager a)(Maybe Text)",
        "package": "snap",
        "partial": "Password Reset Token",
        "signature": "Text-\u003eHandler b(AuthManager b)(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:siteKey",
      "description": {
        "fct-descr": "\u003cp\u003eA unique encryption key used to encrypt remember cookie\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Key",
        "fct-source": "src/Snap-Snaplet-Auth-AuthManager.html#AuthManager",
        "fct-type": "function",
        "title": "siteKey"
      },
      "index": {
        "description": "unique encryption key used to encrypt remember cookie",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "siteKey",
        "normalized": "",
        "package": "snap",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:unUid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Text",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#UserId",
        "fct-type": "function",
        "title": "unUid"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "unUid",
        "normalized": "",
        "package": "snap",
        "partial": "Uid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userActivatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userActivatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userActivatedAt",
        "normalized": "",
        "package": "snap",
        "partial": "Activated At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userCSplices",
      "description": {
        "fct-descr": "\u003cp\u003eCompiled splices for AuthUser.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Splices (RuntimeSplice m AuthUser -\u003e Splice m)",
        "fct-source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#userCSplices",
        "fct-type": "function",
        "title": "userCSplices"
      },
      "index": {
        "description": "Compiled splices for AuthUser",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userCSplices",
        "normalized": "Splices(RuntimeSplice a AuthUser-\u003eSplice a)",
        "package": "snap",
        "partial": "CSplices",
        "signature": "Splices(RuntimeSplice m AuthUser-\u003eSplice m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userCreatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userCreatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userCreatedAt",
        "normalized": "",
        "package": "snap",
        "partial": "Created At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userCurrentLoginAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userCurrentLoginAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userCurrentLoginAt",
        "normalized": "",
        "package": "snap",
        "partial": "Current Login At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userCurrentLoginIp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userCurrentLoginIp"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userCurrentLoginIp",
        "normalized": "",
        "package": "snap",
        "partial": "Current Login Ip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userEmail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userEmail"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userEmail",
        "normalized": "",
        "package": "snap",
        "partial": "Email",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userFailedLoginCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Int",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userFailedLoginCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userFailedLoginCount",
        "normalized": "",
        "package": "snap",
        "partial": "Failed Login Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userISplices",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to generate interpreted splices from an AuthUser.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "AuthUser -\u003e Splices (Splice m)",
        "fct-source": "src/Snap-Snaplet-Auth-SpliceHelpers.html#userISplices",
        "fct-type": "function",
        "title": "userISplices"
      },
      "index": {
        "description": "Function to generate interpreted splices from an AuthUser",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userISplices",
        "normalized": "AuthUser-\u003eSplices(Splice a)",
        "package": "snap",
        "partial": "ISplices",
        "signature": "AuthUser-\u003eSplices(Splice m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe UserId",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userId"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userId",
        "normalized": "",
        "package": "snap",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLastLoginAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userLastLoginAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userLastLoginAt",
        "normalized": "",
        "package": "snap",
        "partial": "Last Login At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLastLoginIp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userLastLoginIp"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userLastLoginIp",
        "normalized": "",
        "package": "snap",
        "partial": "Last Login Ip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLockedOutUntil",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userLockedOutUntil"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userLockedOutUntil",
        "normalized": "",
        "package": "snap",
        "partial": "Locked Out Until",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLogin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Text",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userLogin"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userLogin",
        "normalized": "",
        "package": "snap",
        "partial": "Login",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userLoginCount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Int",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userLoginCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userLoginCount",
        "normalized": "",
        "package": "snap",
        "partial": "Login Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userMeta",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "HashMap Text Value",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userMeta"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userMeta",
        "normalized": "",
        "package": "snap",
        "partial": "Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userPassword",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe Password",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userPassword"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userPassword",
        "normalized": "",
        "package": "snap",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userRememberToken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userRememberToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userRememberToken",
        "normalized": "",
        "package": "snap",
        "partial": "Remember Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userResetRequestedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userResetRequestedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userResetRequestedAt",
        "normalized": "",
        "package": "snap",
        "partial": "Reset Requested At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userResetToken",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userResetToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userResetToken",
        "normalized": "",
        "package": "snap",
        "partial": "Reset Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userRoles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "[Role]",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userRoles"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userRoles",
        "normalized": "[Role]",
        "package": "snap",
        "partial": "Roles",
        "signature": "[Role]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userSuspendedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userSuspendedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userSuspendedAt",
        "normalized": "",
        "package": "snap",
        "partial": "Suspended At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:userUpdatedAt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Snap-Snaplet-Auth-Types.html#AuthUser",
        "fct-type": "function",
        "title": "userUpdatedAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "userUpdatedAt",
        "normalized": "",
        "package": "snap",
        "partial": "Updated At",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:usernameExists",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a user with the given username exists.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "Text-\u003e Handler b (AuthManager b) Bool",
        "fct-type": "function",
        "title": "usernameExists"
      },
      "index": {
        "description": "Check whether user with the given username exists",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "usernameExists",
        "normalized": "Text-\u003eHandler a(AuthManager a)Bool",
        "package": "snap",
        "partial": "Exists",
        "signature": "Text-\u003eHandler b(AuthManager b)Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:verify",
      "description": {
        "fct-descr": "\u003cp\u003eThe underlying verify function, in case you need it for external\n processing.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Bool",
        "fct-type": "function",
        "title": "verify"
      },
      "index": {
        "description": "The underlying verify function in case you need it for external processing",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "verify",
        "normalized": "ByteString-\u003eByteString-\u003eBool",
        "package": "snap",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Auth.html#v:withBackend",
      "description": {
        "fct-descr": "\u003cp\u003eRun a function on the backend, and return the result.\n\u003c/p\u003e\u003cp\u003eThis uses an existential type so that the backend type doesn't\n \u003ccode\u003eescape\u003c/code\u003e AuthManager.  The reason that the type is Handler b\n (AuthManager v) a and not a is because anything that uses the\n backend will return an IO something, which you can liftIO, or a\n Handler b (AuthManager v) a if it uses other handler things.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Auth",
        "fct-package": "snap",
        "fct-signature": "r -\u003e Handler b (AuthManager v) a)-\u003e Handler b (AuthManager v) a",
        "fct-type": "function",
        "title": "withBackend"
      },
      "index": {
        "description": "Run function on the backend and return the result This uses an existential type so that the backend type doesn escape AuthManager The reason that the type is Handler AuthManager and not is because anything that uses the backend will return an IO something which you can liftIO or Handler AuthManager if it uses other handler things",
        "hierarchy": "Snap Snaplet Auth",
        "module": "Snap.Snaplet.Auth",
        "name": "withBackend",
        "normalized": "a-\u003eHandler b(AuthManager c)d)-\u003eHandler b(AuthManager c)d",
        "package": "snap",
        "partial": "Backend",
        "signature": "r-\u003eHandler b(AuthManager v)a)-\u003eHandler b(AuthManager v)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#",
      "description": {
        "fct-module": "Snap.Snaplet.Config",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Config.html",
        "fct-type": "module",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Config",
        "module": "Snap.Snaplet.Config",
        "name": "Config",
        "normalized": "",
        "package": "snap",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#t:AppConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAppConfig contains the config options for command line arguments in\n snaplet-based apps.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Config",
        "fct-package": "snap",
        "fct-signature": "newtype",
        "fct-source": "src/Snap-Snaplet-Config.html#AppConfig",
        "fct-type": "newtype",
        "title": "AppConfig"
      },
      "index": {
        "description": "AppConfig contains the config options for command line arguments in snaplet-based apps",
        "hierarchy": "Snap Snaplet Config",
        "module": "Snap.Snaplet.Config",
        "name": "AppConfig",
        "normalized": "",
        "package": "snap",
        "partial": "App Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:AppConfig",
      "description": {
        "fct-module": "Snap.Snaplet.Config",
        "fct-package": "snap",
        "fct-signature": "AppConfig",
        "fct-source": "src/Snap-Snaplet-Config.html#AppConfig",
        "fct-type": "function",
        "title": "AppConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Config",
        "module": "Snap.Snaplet.Config",
        "name": "AppConfig",
        "normalized": "",
        "package": "snap",
        "partial": "App Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:appConfigTyCon",
      "description": {
        "fct-descr": "\u003cp\u003eAppConfig has a manual instance of Typeable due to limitations in the\n tools available before GHC 7.4, and the need to make dynamic loading\n tractable.  When support for earlier versions of GHC is dropped, the\n dynamic loader package can be updated so that manual Typeable instances\n are no longer needed.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Config",
        "fct-package": "snap",
        "fct-signature": "TyCon",
        "fct-source": "src/Snap-Snaplet-Config.html#appConfigTyCon",
        "fct-type": "function",
        "title": "appConfigTyCon"
      },
      "index": {
        "description": "AppConfig has manual instance of Typeable due to limitations in the tools available before GHC and the need to make dynamic loading tractable When support for earlier versions of GHC is dropped the dynamic loader package can be updated so that manual Typeable instances are no longer needed",
        "hierarchy": "Snap Snaplet Config",
        "module": "Snap.Snaplet.Config",
        "name": "appConfigTyCon",
        "normalized": "",
        "package": "snap",
        "partial": "Config Ty Con",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:appEnvironment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.Config",
        "fct-package": "snap",
        "fct-signature": "Maybe String",
        "fct-source": "src/Snap-Snaplet-Config.html#AppConfig",
        "fct-type": "function",
        "title": "appEnvironment"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Config",
        "module": "Snap.Snaplet.Config",
        "name": "appEnvironment",
        "normalized": "",
        "package": "snap",
        "partial": "Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:appOpts",
      "description": {
        "fct-descr": "\u003cp\u003eCommand line options for snaplet applications.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Config",
        "fct-package": "snap",
        "fct-signature": "AppConfig -\u003e [OptDescr (Maybe (Config m AppConfig))]",
        "fct-source": "src/Snap-Snaplet-Config.html#appOpts",
        "fct-type": "function",
        "title": "appOpts"
      },
      "index": {
        "description": "Command line options for snaplet applications",
        "hierarchy": "Snap Snaplet Config",
        "module": "Snap.Snaplet.Config",
        "name": "appOpts",
        "normalized": "AppConfig-\u003e[OptDescr(Maybe(Config a AppConfig))]",
        "package": "snap",
        "partial": "Opts",
        "signature": "AppConfig-\u003e[OptDescr(Maybe(Config m AppConfig))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Config.html#v:commandLineAppConfig",
      "description": {
        "fct-descr": "\u003cp\u003eCalls snap-server's extendedCommandLineConfig to add snaplet options to\n the built-in server command line options.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Config",
        "fct-package": "snap",
        "fct-signature": "Config m AppConfig -\u003e IO (Config m AppConfig)",
        "fct-source": "src/Snap-Snaplet-Config.html#commandLineAppConfig",
        "fct-type": "function",
        "title": "commandLineAppConfig"
      },
      "index": {
        "description": "Calls snap-server extendedCommandLineConfig to add snaplet options to the built-in server command line options",
        "hierarchy": "Snap Snaplet Config",
        "module": "Snap.Snaplet.Config",
        "name": "commandLineAppConfig",
        "normalized": "Config a AppConfig-\u003eIO(Config a AppConfig)",
        "package": "snap",
        "partial": "Line App Config",
        "signature": "Config m AppConfig-\u003eIO(Config m AppConfig)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module exporting only functions for using compiled templates.  If you\nimport the main Snap.Snaplet.Heist module, it's easy to accidentally use\nthe interpreted render function even when you're using compiled Heist.\nImporting only this module will make it harder to make mistakes like that.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Heist-Compiled.html",
        "fct-type": "module",
        "title": "Compiled"
      },
      "index": {
        "description": "module exporting only functions for using compiled templates If you import the main Snap.Snaplet.Heist module it easy to accidentally use the interpreted render function even when you re using compiled Heist Importing only this module will make it harder to make mistakes like that",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "Compiled",
        "normalized": "",
        "package": "snap",
        "partial": "Compiled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#t:HasHeist",
      "description": {
        "fct-descr": "\u003cp\u003eA single snaplet should never need more than one instance of Heist as a\n subsnaplet.  This type class allows you to make it easy for other snaplets\n to get the lens that identifies the heist snaplet.  Here's an example of\n how the heist snaplet might be declared:\n\u003c/p\u003e\u003cpre\u003e data App = App { _heist :: Snaplet (Heist App) }\n makeLenses ''App\n\n instance HasHeist App where heistLens = subSnaplet heist\n\n appInit = makeSnaplet \"app\" \"\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"templates\"\n     addConfig h heistConfigWithMyAppSplices\n     return $ App h\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-Heist.html#HasHeist",
        "fct-type": "class",
        "title": "HasHeist"
      },
      "index": {
        "description": "single snaplet should never need more than one instance of Heist as subsnaplet This type class allows you to make it easy for other snaplets to get the lens that identifies the heist snaplet Here an example of how the heist snaplet might be declared data App App heist Snaplet Heist App makeLenses App instance HasHeist App where heistLens subSnaplet heist appInit makeSnaplet app Nothing do nestSnaplet heist heist heistInit templates addConfig heistConfigWithMyAppSplices return App",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "HasHeist",
        "normalized": "",
        "package": "snap",
        "partial": "Has Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#t:Heist",
      "description": {
        "fct-descr": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
        "fct-type": "data",
        "title": "Heist"
      },
      "index": {
        "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "Heist",
        "normalized": "",
        "package": "snap",
        "partial": "Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#t:SnapletCSplice",
      "description": {
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletCSplice",
        "fct-type": "type",
        "title": "SnapletCSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "SnapletCSplice",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet CSplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#t:SnapletHeist",
      "description": {
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
        "fct-type": "type",
        "title": "SnapletHeist"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "SnapletHeist",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:addConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAdds more HeistConfig data using mappend with whatever is currently\n there.  This is the preferred method for adding all four kinds of splices\n as well as new templates.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b) -\u003e HeistConfig (Handler b b) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#addConfig",
        "fct-type": "function",
        "title": "addConfig"
      },
      "index": {
        "description": "Adds more HeistConfig data using mappend with whatever is currently there This is the preferred method for adding all four kinds of splices as well as new templates",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "addConfig",
        "normalized": "Snaplet(Heist a)-\u003eHeistConfig(Handler a a)-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Config",
        "signature": "Snaplet(Heist b)-\u003eHeistConfig(Handler b b)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:addTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistState.  Other snaplets should use\n this function to add their own templates.  The templates are automatically\n read from the templates directory in the current snaplet's filesystem root.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "addTemplates"
      },
      "index": {
        "description": "Adds templates to the Heist HeistState Other snaplets should use this function to add their own templates The templates are automatically read from the templates directory in the current snaplet filesystem root",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "addTemplates",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Templates",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:addTemplatesAt",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistState, and lets you specify where\n they are found in the filesystem.  Note that the path to the template\n directory is an absolute path.  This allows you more flexibility in where\n your templates are located, but means that you have to explicitly call\n getSnapletFilePath if you want your snaplet to use templates within its\n normal directory structure.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e FilePath-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "addTemplatesAt"
      },
      "index": {
        "description": "Adds templates to the Heist HeistState and lets you specify where they are found in the filesystem Note that the path to the template directory is an absolute path This allows you more flexibility in where your templates are located but means that you have to explicitly call getSnapletFilePath if you want your snaplet to use templates within its normal directory structure",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "addTemplatesAt",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eFilePath-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Templates At",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eFilePath-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:clearHeistCache",
      "description": {
        "fct-descr": "\u003cp\u003eClears data stored by the cache tag.  The cache tag automatically reloads\n its data when the specified TTL expires, but sometimes you may want to\n trigger a manual reload.  This function lets you do that.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "Heist b -\u003e IO ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#clearHeistCache",
        "fct-type": "function",
        "title": "clearHeistCache"
      },
      "index": {
        "description": "Clears data stored by the cache tag The cache tag automatically reloads its data when the specified TTL expires but sometimes you may want to trigger manual reload This function lets you do that",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "clearHeistCache",
        "normalized": "Heist a-\u003eIO()",
        "package": "snap",
        "partial": "Heist Cache",
        "signature": "Heist b-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:getHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "Handler b v (HeistState (Handler b b))",
        "fct-source": "src/Snap-Snaplet-Heist.html#getHeistState",
        "fct-type": "function",
        "title": "getHeistState"
      },
      "index": {
        "description": "More general function allowing arbitrary HeistState modification",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "getHeistState",
        "normalized": "",
        "package": "snap",
        "partial": "Heist State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistInit",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e. This function is a convenience wrapper\n around \u003ccode\u003eheistInit'\u003c/code\u003e that uses defaultHeistState and sets up routes for all\n the templates.  It sets up a \"heistReload\" route that reloads the heist\n templates when you request it from localhost.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "FilePath-\u003e SnapletInit b (Heist b)",
        "fct-type": "function",
        "title": "heistInit"
      },
      "index": {
        "description": "The Initializer for Heist This function is convenience wrapper around heistInit that uses defaultHeistState and sets up routes for all the templates It sets up heistReload route that reloads the heist templates when you request it from localhost",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "heistInit",
        "normalized": "FilePath-\u003eSnapletInit a(Heist a)",
        "package": "snap",
        "partial": "Init",
        "signature": "FilePath-\u003eSnapletInit b(Heist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistInit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA lower level \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e.  This initializer requires you\n to specify the initial HeistConfig.  It also does not add any routes for\n templates, allowing you complete control over which templates get routed.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "FilePath-\u003e HeistConfig (Handler b b)-\u003e SnapletInit b (Heist b)",
        "fct-type": "function",
        "title": "heistInit'"
      },
      "index": {
        "description": "lower level Initializer for Heist This initializer requires you to specify the initial HeistConfig It also does not add any routes for templates allowing you complete control over which templates get routed",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "heistInit'",
        "normalized": "FilePath-\u003eHeistConfig(Handler a a)-\u003eSnapletInit a(Heist a)",
        "package": "snap",
        "partial": "Init'",
        "signature": "FilePath-\u003eHeistConfig(Handler b b)-\u003eSnapletInit b(Heist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistLens",
      "description": {
        "fct-descr": "\u003cp\u003eA lens to the Heist snaplet.  The b parameter to Heist will\n typically be the base state of your application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b)",
        "fct-source": "src/Snap-Snaplet-Heist.html#heistLens",
        "fct-type": "method",
        "title": "heistLens"
      },
      "index": {
        "description": "lens to the Heist snaplet The parameter to Heist will typically be the base state of your application",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "heistLens",
        "normalized": "",
        "package": "snap",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistReloader",
      "description": {
        "fct-descr": "\u003cp\u003eHandler that triggers a template reload.  For large sites, this can be\n desireable because it may be much quicker than the full site reload\n provided at the \u003cem\u003eadmin\u003c/em\u003ereload route.  This allows you to reload only the\n heist templates  This handler is automatically set up by heistInit, but if\n you use heistInit', then you can create your own route with it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "Handler b (Heist b) ()",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#heistReloader",
        "fct-type": "function",
        "title": "heistReloader"
      },
      "index": {
        "description": "Handler that triggers template reload For large sites this can be desireable because it may be much quicker than the full site reload provided at the admin reload route This allows you to reload only the heist templates This handler is automatically set up by heistInit but if you use heistInit then you can create your own route with it",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "heistReloader",
        "normalized": "Handler a(Heist a)()",
        "package": "snap",
        "partial": "Reloader",
        "signature": "Handler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistServe",
      "description": {
        "fct-descr": "\u003cp\u003eA handler that serves all the templates (similar to \u003ccode\u003eserveDirectory\u003c/code\u003e).\n If the template specified in the request path is not found, it returns\n \u003ccode\u003eempty\u003c/code\u003e.  Also, this function does not serve any templates beginning with\n an underscore.  This gives you a way to prevent some templates from being\n served.  For example, you might have a template that contains only the\n navbar of your pages, and you probably wouldn't want that template to be\n visible to the user as a standalone template.  So if you put it in a file\n called \"_nav.tpl\", this function won't serve it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Heist-Compiled.html#heistServe",
        "fct-type": "function",
        "title": "heistServe"
      },
      "index": {
        "description": "handler that serves all the templates similar to serveDirectory If the template specified in the request path is not found it returns empty Also this function does not serve any templates beginning with an underscore This gives you way to prevent some templates from being served For example you might have template that contains only the navbar of your pages and you probably wouldn want that template to be visible to the user as standalone template So if you put it in file called nav.tpl this function won serve it",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "heistServe",
        "normalized": "Handler a b()",
        "package": "snap",
        "partial": "Serve",
        "signature": "Handler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:heistServeSingle",
      "description": {
        "fct-descr": "\u003cp\u003eHandler for serving a single template (similar to \u003ccode\u003efileServeSingle\u003c/code\u003e). If\n the given template is not found, this throws an error.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "heistServeSingle"
      },
      "index": {
        "description": "Handler for serving single template similar to fileServeSingle If the given template is not found this throws an error",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "heistServeSingle",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Serve Single",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:modifyHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e HeistState (Handler b b))-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "modifyHeistState"
      },
      "index": {
        "description": "More general function allowing arbitrary HeistState modification",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "modifyHeistState",
        "normalized": "(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Heist State",
        "signature": "(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a compiled template as text/html. If the given template is not\n found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Renders compiled template as text html If the given template is not found this returns empty",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "render",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:renderAs",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a compiled template as the given content type.  If the given\n template is not found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "renderAs"
      },
      "index": {
        "description": "Renders compiled template as the given content type If the given template is not found this returns empty",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "renderAs",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "As",
        "signature": "ByteString-\u003eByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Compiled.html#v:withHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a function on with the Heist snaplet's \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Compiled",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e a)-\u003e Handler b v a",
        "fct-type": "function",
        "title": "withHeistState"
      },
      "index": {
        "description": "Runs function on with the Heist snaplet HeistState",
        "hierarchy": "Snap Snaplet Heist Compiled",
        "module": "Snap.Snaplet.Heist.Compiled",
        "name": "withHeistState",
        "normalized": "(HeistState(Handler a a)-\u003eb)-\u003eHandler a c b",
        "package": "snap",
        "partial": "Heist State",
        "signature": "(HeistState(Handler b b)-\u003ea)-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module exporting only generic functions that choose between compiled and\ninterpreted mode based on the setting specified in the initializer.  This\nmodule is most useful for writitng general snaplets that use Heist and are\nmeant to be used in applications that might use either interpreted or compiled\ntemplates.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Heist-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "module exporting only generic functions that choose between compiled and interpreted mode based on the setting specified in the initializer This module is most useful for writitng general snaplets that use Heist and are meant to be used in applications that might use either interpreted or compiled templates",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "snap",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#t:HasHeist",
      "description": {
        "fct-descr": "\u003cp\u003eA single snaplet should never need more than one instance of Heist as a\n subsnaplet.  This type class allows you to make it easy for other snaplets\n to get the lens that identifies the heist snaplet.  Here's an example of\n how the heist snaplet might be declared:\n\u003c/p\u003e\u003cpre\u003e data App = App { _heist :: Snaplet (Heist App) }\n makeLenses ''App\n\n instance HasHeist App where heistLens = subSnaplet heist\n\n appInit = makeSnaplet \"app\" \"\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"templates\"\n     addConfig h heistConfigWithMyAppSplices\n     return $ App h\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-Heist.html#HasHeist",
        "fct-type": "class",
        "title": "HasHeist"
      },
      "index": {
        "description": "single snaplet should never need more than one instance of Heist as subsnaplet This type class allows you to make it easy for other snaplets to get the lens that identifies the heist snaplet Here an example of how the heist snaplet might be declared data App App heist Snaplet Heist App makeLenses App instance HasHeist App where heistLens subSnaplet heist appInit makeSnaplet app Nothing do nestSnaplet heist heist heistInit templates addConfig heistConfigWithMyAppSplices return App",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "HasHeist",
        "normalized": "",
        "package": "snap",
        "partial": "Has Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#t:Heist",
      "description": {
        "fct-descr": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
        "fct-type": "data",
        "title": "Heist"
      },
      "index": {
        "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "Heist",
        "normalized": "",
        "package": "snap",
        "partial": "Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#t:SnapletCSplice",
      "description": {
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletCSplice",
        "fct-type": "type",
        "title": "SnapletCSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "SnapletCSplice",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet CSplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#t:SnapletHeist",
      "description": {
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
        "fct-type": "type",
        "title": "SnapletHeist"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "SnapletHeist",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:addConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAdds more HeistConfig data using mappend with whatever is currently\n there.  This is the preferred method for adding all four kinds of splices\n as well as new templates.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b) -\u003e HeistConfig (Handler b b) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#addConfig",
        "fct-type": "function",
        "title": "addConfig"
      },
      "index": {
        "description": "Adds more HeistConfig data using mappend with whatever is currently there This is the preferred method for adding all four kinds of splices as well as new templates",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "addConfig",
        "normalized": "Snaplet(Heist a)-\u003eHeistConfig(Handler a a)-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Config",
        "signature": "Snaplet(Heist b)-\u003eHeistConfig(Handler b b)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:addTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistState.  Other snaplets should use\n this function to add their own templates.  The templates are automatically\n read from the templates directory in the current snaplet's filesystem root.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "addTemplates"
      },
      "index": {
        "description": "Adds templates to the Heist HeistState Other snaplets should use this function to add their own templates The templates are automatically read from the templates directory in the current snaplet filesystem root",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "addTemplates",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Templates",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:addTemplatesAt",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistState, and lets you specify where\n they are found in the filesystem.  Note that the path to the template\n directory is an absolute path.  This allows you more flexibility in where\n your templates are located, but means that you have to explicitly call\n getSnapletFilePath if you want your snaplet to use templates within its\n normal directory structure.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e FilePath-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "addTemplatesAt"
      },
      "index": {
        "description": "Adds templates to the Heist HeistState and lets you specify where they are found in the filesystem Note that the path to the template directory is an absolute path This allows you more flexibility in where your templates are located but means that you have to explicitly call getSnapletFilePath if you want your snaplet to use templates within its normal directory structure",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "addTemplatesAt",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eFilePath-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Templates At",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eFilePath-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:chooseMode",
      "description": {
        "fct-descr": "\u003cp\u003eChooses between a compiled action and an interpreted action based on the\n configured default.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "Handler b v a-\u003e Handler b v a-\u003e Handler b v a",
        "fct-type": "function",
        "title": "chooseMode"
      },
      "index": {
        "description": "Chooses between compiled action and an interpreted action based on the configured default",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "chooseMode",
        "normalized": "Handler a b c-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Mode",
        "signature": "Handler b v a-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:clearHeistCache",
      "description": {
        "fct-descr": "\u003cp\u003eClears data stored by the cache tag.  The cache tag automatically reloads\n its data when the specified TTL expires, but sometimes you may want to\n trigger a manual reload.  This function lets you do that.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "Heist b -\u003e IO ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#clearHeistCache",
        "fct-type": "function",
        "title": "clearHeistCache"
      },
      "index": {
        "description": "Clears data stored by the cache tag The cache tag automatically reloads its data when the specified TTL expires but sometimes you may want to trigger manual reload This function lets you do that",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "clearHeistCache",
        "normalized": "Heist a-\u003eIO()",
        "package": "snap",
        "partial": "Heist Cache",
        "signature": "Heist b-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gHeistServe",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of 'heistServe'/'cHeistServe'.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Heist.html#gHeistServe",
        "fct-type": "function",
        "title": "gHeistServe"
      },
      "index": {
        "description": "Generic version of heistServe cHeistServe",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "gHeistServe",
        "normalized": "Handler a b()",
        "package": "snap",
        "partial": "Heist Serve",
        "signature": "Handler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gHeistServeSingle",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of 'heistServeSingle'/'cHeistServeSingle'.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "gHeistServeSingle"
      },
      "index": {
        "description": "Generic version of heistServeSingle cHeistServeSingle",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "gHeistServeSingle",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Heist Serve Single",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gRender",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of 'render'/'cRender'.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "gRender"
      },
      "index": {
        "description": "Generic version of render cRender",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "gRender",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Render",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:gRenderAs",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of 'renderAs'/'cRenderAs'.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "gRenderAs"
      },
      "index": {
        "description": "Generic version of renderAs cRenderAs",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "gRenderAs",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Render As",
        "signature": "ByteString-\u003eByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:getHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "Handler b v (HeistState (Handler b b))",
        "fct-source": "src/Snap-Snaplet-Heist.html#getHeistState",
        "fct-type": "function",
        "title": "getHeistState"
      },
      "index": {
        "description": "More general function allowing arbitrary HeistState modification",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "getHeistState",
        "normalized": "",
        "package": "snap",
        "partial": "Heist State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:heistLens",
      "description": {
        "fct-descr": "\u003cp\u003eA lens to the Heist snaplet.  The b parameter to Heist will\n typically be the base state of your application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b)",
        "fct-source": "src/Snap-Snaplet-Heist.html#heistLens",
        "fct-type": "method",
        "title": "heistLens"
      },
      "index": {
        "description": "lens to the Heist snaplet The parameter to Heist will typically be the base state of your application",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "heistLens",
        "normalized": "",
        "package": "snap",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:modifyHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e HeistState (Handler b b))-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "modifyHeistState"
      },
      "index": {
        "description": "More general function allowing arbitrary HeistState modification",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "modifyHeistState",
        "normalized": "(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Heist State",
        "signature": "(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Generic.html#v:withHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a function on with the Heist snaplet's \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Generic",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e a)-\u003e Handler b v a",
        "fct-type": "function",
        "title": "withHeistState"
      },
      "index": {
        "description": "Runs function on with the Heist snaplet HeistState",
        "hierarchy": "Snap Snaplet Heist Generic",
        "module": "Snap.Snaplet.Heist.Generic",
        "name": "withHeistState",
        "normalized": "(HeistState(Handler a a)-\u003eb)-\u003eHandler a c b",
        "package": "snap",
        "partial": "Heist State",
        "signature": "(HeistState(Handler b b)-\u003ea)-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module exporting only functions for using interpreted templates.  If\nyou import the main Snap.Snaplet.Heist module, it's easy to accidentally\nuse the compiled render function even when you're using interpreted Heist.\nImporting only this module will make it harder to make mistakes like that.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Heist-Interpreted.html",
        "fct-type": "module",
        "title": "Interpreted"
      },
      "index": {
        "description": "module exporting only functions for using interpreted templates If you import the main Snap.Snaplet.Heist module it easy to accidentally use the compiled render function even when you re using interpreted Heist Importing only this module will make it harder to make mistakes like that",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "Interpreted",
        "normalized": "",
        "package": "snap",
        "partial": "Interpreted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#t:HasHeist",
      "description": {
        "fct-descr": "\u003cp\u003eA single snaplet should never need more than one instance of Heist as a\n subsnaplet.  This type class allows you to make it easy for other snaplets\n to get the lens that identifies the heist snaplet.  Here's an example of\n how the heist snaplet might be declared:\n\u003c/p\u003e\u003cpre\u003e data App = App { _heist :: Snaplet (Heist App) }\n makeLenses ''App\n\n instance HasHeist App where heistLens = subSnaplet heist\n\n appInit = makeSnaplet \"app\" \"\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"templates\"\n     addConfig h heistConfigWithMyAppSplices\n     return $ App h\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-Heist.html#HasHeist",
        "fct-type": "class",
        "title": "HasHeist"
      },
      "index": {
        "description": "single snaplet should never need more than one instance of Heist as subsnaplet This type class allows you to make it easy for other snaplets to get the lens that identifies the heist snaplet Here an example of how the heist snaplet might be declared data App App heist Snaplet Heist App makeLenses App instance HasHeist App where heistLens subSnaplet heist appInit makeSnaplet app Nothing do nestSnaplet heist heist heistInit templates addConfig heistConfigWithMyAppSplices return App",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "HasHeist",
        "normalized": "",
        "package": "snap",
        "partial": "Has Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#t:Heist",
      "description": {
        "fct-descr": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
        "fct-type": "data",
        "title": "Heist"
      },
      "index": {
        "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "Heist",
        "normalized": "",
        "package": "snap",
        "partial": "Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#t:SnapletHeist",
      "description": {
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
        "fct-type": "type",
        "title": "SnapletHeist"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "SnapletHeist",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#t:SnapletISplice",
      "description": {
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletISplice",
        "fct-type": "type",
        "title": "SnapletISplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "SnapletISplice",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet ISplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:addConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAdds more HeistConfig data using mappend with whatever is currently\n there.  This is the preferred method for adding all four kinds of splices\n as well as new templates.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b) -\u003e HeistConfig (Handler b b) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#addConfig",
        "fct-type": "function",
        "title": "addConfig"
      },
      "index": {
        "description": "Adds more HeistConfig data using mappend with whatever is currently there This is the preferred method for adding all four kinds of splices as well as new templates",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "addConfig",
        "normalized": "Snaplet(Heist a)-\u003eHeistConfig(Handler a a)-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Config",
        "signature": "Snaplet(Heist b)-\u003eHeistConfig(Handler b b)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:addTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistState.  Other snaplets should use\n this function to add their own templates.  The templates are automatically\n read from the templates directory in the current snaplet's filesystem root.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "addTemplates"
      },
      "index": {
        "description": "Adds templates to the Heist HeistState Other snaplets should use this function to add their own templates The templates are automatically read from the templates directory in the current snaplet filesystem root",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "addTemplates",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Templates",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:addTemplatesAt",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistState, and lets you specify where\n they are found in the filesystem.  Note that the path to the template\n directory is an absolute path.  This allows you more flexibility in where\n your templates are located, but means that you have to explicitly call\n getSnapletFilePath if you want your snaplet to use templates within its\n normal directory structure.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e FilePath-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "addTemplatesAt"
      },
      "index": {
        "description": "Adds templates to the Heist HeistState and lets you specify where they are found in the filesystem Note that the path to the template directory is an absolute path This allows you more flexibility in where your templates are located but means that you have to explicitly call getSnapletFilePath if you want your snaplet to use templates within its normal directory structure",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "addTemplatesAt",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eFilePath-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Templates At",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eFilePath-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:clearHeistCache",
      "description": {
        "fct-descr": "\u003cp\u003eClears data stored by the cache tag.  The cache tag automatically reloads\n its data when the specified TTL expires, but sometimes you may want to\n trigger a manual reload.  This function lets you do that.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "Heist b -\u003e IO ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#clearHeistCache",
        "fct-type": "function",
        "title": "clearHeistCache"
      },
      "index": {
        "description": "Clears data stored by the cache tag The cache tag automatically reloads its data when the specified TTL expires but sometimes you may want to trigger manual reload This function lets you do that",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "clearHeistCache",
        "normalized": "Heist a-\u003eIO()",
        "package": "snap",
        "partial": "Heist Cache",
        "signature": "Heist b-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:getHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "Handler b v (HeistState (Handler b b))",
        "fct-source": "src/Snap-Snaplet-Heist.html#getHeistState",
        "fct-type": "function",
        "title": "getHeistState"
      },
      "index": {
        "description": "More general function allowing arbitrary HeistState modification",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "getHeistState",
        "normalized": "",
        "package": "snap",
        "partial": "Heist State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistInit",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e. This function is a convenience wrapper\n around \u003ccode\u003e\u003ca\u003eheistInit'\u003c/a\u003e\u003c/code\u003e that uses defaultHeistState and sets up routes for all\n the templates.  It sets up a \"heistReload\" route that reloads the heist\n templates when you request it from localhost.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "FilePath-\u003e SnapletInit b (Heist b)",
        "fct-type": "function",
        "title": "heistInit"
      },
      "index": {
        "description": "The Initializer for Heist This function is convenience wrapper around heistInit that uses defaultHeistState and sets up routes for all the templates It sets up heistReload route that reloads the heist templates when you request it from localhost",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "heistInit",
        "normalized": "FilePath-\u003eSnapletInit a(Heist a)",
        "package": "snap",
        "partial": "Init",
        "signature": "FilePath-\u003eSnapletInit b(Heist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistInit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA lower level \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e.  This initializer requires you\n to specify the initial HeistConfig.  It also does not add any routes for\n templates, allowing you complete control over which templates get routed.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "FilePath-\u003e HeistConfig (Handler b b)-\u003e SnapletInit b (Heist b)",
        "fct-type": "function",
        "title": "heistInit'"
      },
      "index": {
        "description": "lower level Initializer for Heist This initializer requires you to specify the initial HeistConfig It also does not add any routes for templates allowing you complete control over which templates get routed",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "heistInit'",
        "normalized": "FilePath-\u003eHeistConfig(Handler a a)-\u003eSnapletInit a(Heist a)",
        "package": "snap",
        "partial": "Init'",
        "signature": "FilePath-\u003eHeistConfig(Handler b b)-\u003eSnapletInit b(Heist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistLens",
      "description": {
        "fct-descr": "\u003cp\u003eA lens to the Heist snaplet.  The b parameter to Heist will\n typically be the base state of your application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b)",
        "fct-source": "src/Snap-Snaplet-Heist.html#heistLens",
        "fct-type": "method",
        "title": "heistLens"
      },
      "index": {
        "description": "lens to the Heist snaplet The parameter to Heist will typically be the base state of your application",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "heistLens",
        "normalized": "",
        "package": "snap",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistLocal",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a handler with a modified \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.  You might want to use\n this if you had a set of splices which were customised for a specific\n action.  To do that you would do:\n\u003c/p\u003e\u003cpre\u003e heistLocal (bindSplices mySplices) handlerThatNeedsSplices\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e HeistState (Handler b b))-\u003e Handler b v a-\u003e Handler b v a",
        "fct-type": "function",
        "title": "heistLocal"
      },
      "index": {
        "description": "Runs handler with modified HeistState You might want to use this if you had set of splices which were customised for specific action To do that you would do heistLocal bindSplices mySplices handlerThatNeedsSplices",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "heistLocal",
        "normalized": "(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Local",
        "signature": "(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistServe",
      "description": {
        "fct-descr": "\u003cp\u003eA handler that serves all the templates (similar to \u003ccode\u003eserveDirectory\u003c/code\u003e).\n If the template specified in the request path is not found, it returns\n \u003ccode\u003eempty\u003c/code\u003e.  Also, this function does not serve any templates beginning with\n an underscore.  This gives you a way to prevent some templates from being\n served.  For example, you might have a template that contains only the\n navbar of your pages, and you probably wouldn't want that template to be\n visible to the user as a standalone template.  So if you put it in a file\n called \"_nav.tpl\", this function won't serve it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Heist.html#heistServe",
        "fct-type": "function",
        "title": "heistServe"
      },
      "index": {
        "description": "handler that serves all the templates similar to serveDirectory If the template specified in the request path is not found it returns empty Also this function does not serve any templates beginning with an underscore This gives you way to prevent some templates from being served For example you might have template that contains only the navbar of your pages and you probably wouldn want that template to be visible to the user as standalone template So if you put it in file called nav.tpl this function won serve it",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "heistServe",
        "normalized": "Handler a b()",
        "package": "snap",
        "partial": "Serve",
        "signature": "Handler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:heistServeSingle",
      "description": {
        "fct-descr": "\u003cp\u003eHandler for serving a single template (similar to \u003ccode\u003efileServeSingle\u003c/code\u003e). If\n the given template is not found, this throws an error.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "heistServeSingle"
      },
      "index": {
        "description": "Handler for serving single template similar to fileServeSingle If the given template is not found this throws an error",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "heistServeSingle",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Serve Single",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:modifyHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e HeistState (Handler b b))-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "modifyHeistState"
      },
      "index": {
        "description": "More general function allowing arbitrary HeistState modification",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "modifyHeistState",
        "normalized": "(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Heist State",
        "signature": "(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a template as text/html. If the given template is not found,\n this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Renders template as text html If the given template is not found this returns empty",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "render",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:renderAs",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a template as the given content type.  If the given template\n is not found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "renderAs"
      },
      "index": {
        "description": "Renders template as the given content type If the given template is not found this returns empty",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "renderAs",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "As",
        "signature": "ByteString-\u003eByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:renderWithSplices",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a template with a given set of splices.  This is syntax sugar for\n a common combination of heistLocal, bindSplices, and render.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Splices (SnapletISplice b)-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "renderWithSplices"
      },
      "index": {
        "description": "Renders template with given set of splices This is syntax sugar for common combination of heistLocal bindSplices and render",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "renderWithSplices",
        "normalized": "ByteString-\u003eSplices(SnapletISplice a)-\u003eHandler a b()",
        "package": "snap",
        "partial": "With Splices",
        "signature": "ByteString-\u003eSplices(SnapletISplice b)-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:withHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a function on with the Heist snaplet's \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e a)-\u003e Handler b v a",
        "fct-type": "function",
        "title": "withHeistState"
      },
      "index": {
        "description": "Runs function on with the Heist snaplet HeistState",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "withHeistState",
        "normalized": "(HeistState(Handler a a)-\u003eb)-\u003eHandler a c b",
        "package": "snap",
        "partial": "Heist State",
        "signature": "(HeistState(Handler b b)-\u003ea)-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist-Interpreted.html#v:withSplices",
      "description": {
        "fct-descr": "\u003cp\u003eRuns an action with additional splices bound into the Heist\n \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist.Interpreted",
        "fct-package": "snap",
        "fct-signature": "Splices (SnapletISplice b)-\u003e Handler b v a-\u003e Handler b v a",
        "fct-type": "function",
        "title": "withSplices"
      },
      "index": {
        "description": "Runs an action with additional splices bound into the Heist HeistState",
        "hierarchy": "Snap Snaplet Heist Interpreted",
        "module": "Snap.Snaplet.Heist.Interpreted",
        "name": "withSplices",
        "normalized": "Splices(SnapletISplice a)-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Splices",
        "signature": "Splices(SnapletISplice b)-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Heist snaplet makes it easy to add Heist to your application and use\n it in other snaplets.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Heist.html",
        "fct-type": "module",
        "title": "Heist"
      },
      "index": {
        "description": "The Heist snaplet makes it easy to add Heist to your application and use it in other snaplets",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "Heist",
        "normalized": "",
        "package": "snap",
        "partial": "Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:HasHeist",
      "description": {
        "fct-descr": "\u003cp\u003eA single snaplet should never need more than one instance of Heist as a\n subsnaplet.  This type class allows you to make it easy for other snaplets\n to get the lens that identifies the heist snaplet.  Here's an example of\n how the heist snaplet might be declared:\n\u003c/p\u003e\u003cpre\u003e data App = App { _heist :: Snaplet (Heist App) }\n makeLenses ''App\n\n instance HasHeist App where heistLens = subSnaplet heist\n\n appInit = makeSnaplet \"app\" \"\" Nothing $ do\n     h \u003c- nestSnaplet \"heist\" heist $ heistInit \"templates\"\n     addConfig h heistConfigWithMyAppSplices\n     return $ App h\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-Heist.html#HasHeist",
        "fct-type": "class",
        "title": "HasHeist"
      },
      "index": {
        "description": "single snaplet should never need more than one instance of Heist as subsnaplet This type class allows you to make it easy for other snaplets to get the lens that identifies the heist snaplet Here an example of how the heist snaplet might be declared data App App heist Snaplet Heist App makeLenses App instance HasHeist App where heistLens subSnaplet heist appInit makeSnaplet app Nothing do nestSnaplet heist heist heistInit templates addConfig heistConfigWithMyAppSplices return App",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "HasHeist",
        "normalized": "",
        "package": "snap",
        "partial": "Has Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:Heist",
      "description": {
        "fct-descr": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
        "fct-type": "data",
        "title": "Heist"
      },
      "index": {
        "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "Heist",
        "normalized": "",
        "package": "snap",
        "partial": "Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:SnapletCSplice",
      "description": {
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletCSplice",
        "fct-type": "type",
        "title": "SnapletCSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "SnapletCSplice",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet CSplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:SnapletHeist",
      "description": {
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
        "fct-type": "type",
        "title": "SnapletHeist"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "SnapletHeist",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#t:SnapletISplice",
      "description": {
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletISplice",
        "fct-type": "type",
        "title": "SnapletISplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "SnapletISplice",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet ISplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:addConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAdds more HeistConfig data using mappend with whatever is currently\n there.  This is the preferred method for adding all four kinds of splices\n as well as new templates.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b) -\u003e HeistConfig (Handler b b) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#addConfig",
        "fct-type": "function",
        "title": "addConfig"
      },
      "index": {
        "description": "Adds more HeistConfig data using mappend with whatever is currently there This is the preferred method for adding all four kinds of splices as well as new templates",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "addConfig",
        "normalized": "Snaplet(Heist a)-\u003eHeistConfig(Handler a a)-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Config",
        "signature": "Snaplet(Heist b)-\u003eHeistConfig(Handler b b)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:addTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistState.  Other snaplets should use\n this function to add their own templates.  The templates are automatically\n read from the templates directory in the current snaplet's filesystem root.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "addTemplates"
      },
      "index": {
        "description": "Adds templates to the Heist HeistState Other snaplets should use this function to add their own templates The templates are automatically read from the templates directory in the current snaplet filesystem root",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "addTemplates",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Templates",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:addTemplatesAt",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistState, and lets you specify where\n they are found in the filesystem.  Note that the path to the template\n directory is an absolute path.  This allows you more flexibility in where\n your templates are located, but means that you have to explicitly call\n getSnapletFilePath if you want your snaplet to use templates within its\n normal directory structure.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e FilePath-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "addTemplatesAt"
      },
      "index": {
        "description": "Adds templates to the Heist HeistState and lets you specify where they are found in the filesystem Note that the path to the template directory is an absolute path This allows you more flexibility in where your templates are located but means that you have to explicitly call getSnapletFilePath if you want your snaplet to use templates within its normal directory structure",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "addTemplatesAt",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eFilePath-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Templates At",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eFilePath-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:cHeistServe",
      "description": {
        "fct-descr": "\u003cp\u003eA compiled version of \u003ccode\u003e\u003ca\u003eheistServe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Heist.html#cHeistServe",
        "fct-type": "function",
        "title": "cHeistServe"
      },
      "index": {
        "description": "compiled version of heistServe",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "cHeistServe",
        "normalized": "Handler a b()",
        "package": "snap",
        "partial": "Heist Serve",
        "signature": "Handler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:cHeistServeSingle",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003efileServeSingle\u003c/code\u003e. If the given template is not found,\n this throws an error.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "cHeistServeSingle"
      },
      "index": {
        "description": "Analogous to fileServeSingle If the given template is not found this throws an error",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "cHeistServeSingle",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Heist Serve Single",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:cRender",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a compiled template as text/html. If the given template is not\n found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "cRender"
      },
      "index": {
        "description": "Renders compiled template as text html If the given template is not found this returns empty",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "cRender",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Render",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:cRenderAs",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a compiled template as the given content type.  If the given\n template is not found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "cRenderAs"
      },
      "index": {
        "description": "Renders compiled template as the given content type If the given template is not found this returns empty",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "cRenderAs",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Render As",
        "signature": "ByteString-\u003eByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:chooseMode",
      "description": {
        "fct-descr": "\u003cp\u003eChooses between a compiled action and an interpreted action based on the\n configured default.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Handler b v a-\u003e Handler b v a-\u003e Handler b v a",
        "fct-type": "function",
        "title": "chooseMode"
      },
      "index": {
        "description": "Chooses between compiled action and an interpreted action based on the configured default",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "chooseMode",
        "normalized": "Handler a b c-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Mode",
        "signature": "Handler b v a-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:clearHeistCache",
      "description": {
        "fct-descr": "\u003cp\u003eClears data stored by the cache tag.  The cache tag automatically reloads\n its data when the specified TTL expires, but sometimes you may want to\n trigger a manual reload.  This function lets you do that.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Heist b -\u003e IO ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#clearHeistCache",
        "fct-type": "function",
        "title": "clearHeistCache"
      },
      "index": {
        "description": "Clears data stored by the cache tag The cache tag automatically reloads its data when the specified TTL expires but sometimes you may want to trigger manual reload This function lets you do that",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "clearHeistCache",
        "normalized": "Heist a-\u003eIO()",
        "package": "snap",
        "partial": "Heist Cache",
        "signature": "Heist b-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:gHeistServe",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of 'heistServe'/'cHeistServe'.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Heist.html#gHeistServe",
        "fct-type": "function",
        "title": "gHeistServe"
      },
      "index": {
        "description": "Generic version of heistServe cHeistServe",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "gHeistServe",
        "normalized": "Handler a b()",
        "package": "snap",
        "partial": "Heist Serve",
        "signature": "Handler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:gHeistServeSingle",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of 'heistServeSingle'/'cHeistServeSingle'.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "gHeistServeSingle"
      },
      "index": {
        "description": "Generic version of heistServeSingle cHeistServeSingle",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "gHeistServeSingle",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Heist Serve Single",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:gRender",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of 'render'/'cRender'.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "gRender"
      },
      "index": {
        "description": "Generic version of render cRender",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "gRender",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Render",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:gRenderAs",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of 'renderAs'/'cRenderAs'.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "gRenderAs"
      },
      "index": {
        "description": "Generic version of renderAs cRenderAs",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "gRenderAs",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Render As",
        "signature": "ByteString-\u003eByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:getCurHeistConfig",
      "description": {
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b) -\u003e Initializer b v (HeistConfig (Handler b b))",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#getCurHeistConfig",
        "fct-type": "function",
        "title": "getCurHeistConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "getCurHeistConfig",
        "normalized": "Snaplet(Heist a)-\u003eInitializer a b(HeistConfig(Handler a a))",
        "package": "snap",
        "partial": "Cur Heist Config",
        "signature": "Snaplet(Heist b)-\u003eInitializer b v(HeistConfig(Handler b b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:getHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Handler b v (HeistState (Handler b b))",
        "fct-source": "src/Snap-Snaplet-Heist.html#getHeistState",
        "fct-type": "function",
        "title": "getHeistState"
      },
      "index": {
        "description": "More general function allowing arbitrary HeistState modification",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "getHeistState",
        "normalized": "",
        "package": "snap",
        "partial": "Heist State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistInit",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e. This function is a convenience wrapper\n around \u003ccode\u003e\u003ca\u003eheistInit'\u003c/a\u003e\u003c/code\u003e that uses defaultHeistState and sets up routes for all\n the templates.  It sets up a \"heistReload\" route that reloads the heist\n templates when you request it from localhost.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "FilePath-\u003e SnapletInit b (Heist b)",
        "fct-type": "function",
        "title": "heistInit"
      },
      "index": {
        "description": "The Initializer for Heist This function is convenience wrapper around heistInit that uses defaultHeistState and sets up routes for all the templates It sets up heistReload route that reloads the heist templates when you request it from localhost",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "heistInit",
        "normalized": "FilePath-\u003eSnapletInit a(Heist a)",
        "package": "snap",
        "partial": "Init",
        "signature": "FilePath-\u003eSnapletInit b(Heist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistInit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA lower level \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e.  This initializer requires you\n to specify the initial HeistConfig.  It also does not add any routes for\n templates, allowing you complete control over which templates get routed.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "FilePath-\u003e HeistConfig (Handler b b)-\u003e SnapletInit b (Heist b)",
        "fct-type": "function",
        "title": "heistInit'"
      },
      "index": {
        "description": "lower level Initializer for Heist This initializer requires you to specify the initial HeistConfig It also does not add any routes for templates allowing you complete control over which templates get routed",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "heistInit'",
        "normalized": "FilePath-\u003eHeistConfig(Handler a a)-\u003eSnapletInit a(Heist a)",
        "package": "snap",
        "partial": "Init'",
        "signature": "FilePath-\u003eHeistConfig(Handler b b)-\u003eSnapletInit b(Heist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistLens",
      "description": {
        "fct-descr": "\u003cp\u003eA lens to the Heist snaplet.  The b parameter to Heist will\n typically be the base state of your application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b)",
        "fct-source": "src/Snap-Snaplet-Heist.html#heistLens",
        "fct-type": "method",
        "title": "heistLens"
      },
      "index": {
        "description": "lens to the Heist snaplet The parameter to Heist will typically be the base state of your application",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "heistLens",
        "normalized": "",
        "package": "snap",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistLocal",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a handler with a modified \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.  You might want to use\n this if you had a set of splices which were customised for a specific\n action.  To do that you would do:\n\u003c/p\u003e\u003cpre\u003e heistLocal (bindSplices mySplices) handlerThatNeedsSplices\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e HeistState (Handler b b))-\u003e Handler b v a-\u003e Handler b v a",
        "fct-type": "function",
        "title": "heistLocal"
      },
      "index": {
        "description": "Runs handler with modified HeistState You might want to use this if you had set of splices which were customised for specific action To do that you would do heistLocal bindSplices mySplices handlerThatNeedsSplices",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "heistLocal",
        "normalized": "(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Local",
        "signature": "(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistReloader",
      "description": {
        "fct-descr": "\u003cp\u003eHandler that triggers a template reload.  For large sites, this can be\n desireable because it may be much quicker than the full site reload\n provided at the \u003cem\u003eadmin\u003c/em\u003ereload route.  This allows you to reload only the\n heist templates  This handler is automatically set up by heistInit, but if\n you use heistInit', then you can create your own route with it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Handler b (Heist b) ()",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#heistReloader",
        "fct-type": "function",
        "title": "heistReloader"
      },
      "index": {
        "description": "Handler that triggers template reload For large sites this can be desireable because it may be much quicker than the full site reload provided at the admin reload route This allows you to reload only the heist templates This handler is automatically set up by heistInit but if you use heistInit then you can create your own route with it",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "heistReloader",
        "normalized": "Handler a(Heist a)()",
        "package": "snap",
        "partial": "Reloader",
        "signature": "Handler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistServe",
      "description": {
        "fct-descr": "\u003cp\u003eA handler that serves all the templates (similar to \u003ccode\u003eserveDirectory\u003c/code\u003e).\n If the template specified in the request path is not found, it returns\n \u003ccode\u003eempty\u003c/code\u003e.  Also, this function does not serve any templates beginning with\n an underscore.  This gives you a way to prevent some templates from being\n served.  For example, you might have a template that contains only the\n navbar of your pages, and you probably wouldn't want that template to be\n visible to the user as a standalone template.  So if you put it in a file\n called \"_nav.tpl\", this function won't serve it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Heist.html#heistServe",
        "fct-type": "function",
        "title": "heistServe"
      },
      "index": {
        "description": "handler that serves all the templates similar to serveDirectory If the template specified in the request path is not found it returns empty Also this function does not serve any templates beginning with an underscore This gives you way to prevent some templates from being served For example you might have template that contains only the navbar of your pages and you probably wouldn want that template to be visible to the user as standalone template So if you put it in file called nav.tpl this function won serve it",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "heistServe",
        "normalized": "Handler a b()",
        "package": "snap",
        "partial": "Serve",
        "signature": "Handler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:heistServeSingle",
      "description": {
        "fct-descr": "\u003cp\u003eHandler for serving a single template (similar to \u003ccode\u003efileServeSingle\u003c/code\u003e). If\n the given template is not found, this throws an error.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "heistServeSingle"
      },
      "index": {
        "description": "Handler for serving single template similar to fileServeSingle If the given template is not found this throws an error",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "heistServeSingle",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Serve Single",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:modifyHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eMore general function allowing arbitrary HeistState modification.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e HeistState (Handler b b))-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "modifyHeistState"
      },
      "index": {
        "description": "More general function allowing arbitrary HeistState modification",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "modifyHeistState",
        "normalized": "(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Heist State",
        "signature": "(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a template as text/html. If the given template is not found,\n this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Renders template as text html If the given template is not found this returns empty",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "render",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:renderAs",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a template as the given content type.  If the given template\n is not found, this returns \u003ccode\u003eempty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "renderAs"
      },
      "index": {
        "description": "Renders template as the given content type If the given template is not found this returns empty",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "renderAs",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "As",
        "signature": "ByteString-\u003eByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:renderWithSplices",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a template with a given set of splices.  This is syntax sugar for\n a common combination of heistLocal, bindSplices, and render.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Splices (SnapletISplice b)-\u003e Handler b v ()",
        "fct-type": "function",
        "title": "renderWithSplices"
      },
      "index": {
        "description": "Renders template with given set of splices This is syntax sugar for common combination of heistLocal bindSplices and render",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "renderWithSplices",
        "normalized": "ByteString-\u003eSplices(SnapletISplice a)-\u003eHandler a b()",
        "package": "snap",
        "partial": "With Splices",
        "signature": "ByteString-\u003eSplices(SnapletISplice b)-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:setInterpreted",
      "description": {
        "fct-descr": "\u003cp\u003eSets the snaplet to default to interpreted mode.  Initially, the\n initializer sets the value to compiled mode.  This function allows you to\n override that setting.  Note that this is just a default.  It only has an\n effect if you use one of the generic functions: \u003ccode\u003e\u003ca\u003egRender\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egRenderAs\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003egHeistServe\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003egHeistServeSingle\u003c/a\u003e\u003c/code\u003e.  If you call the non-generic\n versions directly, then this value will not be checked and you will get the\n mode implemented by the function you called.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#setInterpreted",
        "fct-type": "function",
        "title": "setInterpreted"
      },
      "index": {
        "description": "Sets the snaplet to default to interpreted mode Initially the initializer sets the value to compiled mode This function allows you to override that setting Note that this is just default It only has an effect if you use one of the generic functions gRender gRenderAs gHeistServe or gHeistServeSingle If you call the non-generic versions directly then this value will not be checked and you will get the mode implemented by the function you called",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "setInterpreted",
        "normalized": "Snaplet(Heist a)-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Interpreted",
        "signature": "Snaplet(Heist b)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:withHeistState",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a function on with the Heist snaplet's \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "(HeistState (Handler b b) -\u003e a)-\u003e Handler b v a",
        "fct-type": "function",
        "title": "withHeistState"
      },
      "index": {
        "description": "Runs function on with the Heist snaplet HeistState",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "withHeistState",
        "normalized": "(HeistState(Handler a a)-\u003eb)-\u003eHandler a c b",
        "package": "snap",
        "partial": "Heist State",
        "signature": "(HeistState(Handler b b)-\u003ea)-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Heist.html#v:withSplices",
      "description": {
        "fct-descr": "\u003cp\u003eRuns an action with additional splices bound into the Heist\n \u003ccode\u003e\u003ca\u003eHeistState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Heist",
        "fct-package": "snap",
        "fct-signature": "Splices (SnapletISplice b)-\u003e Handler b v a-\u003e Handler b v a",
        "fct-type": "function",
        "title": "withSplices"
      },
      "index": {
        "description": "Runs an action with additional splices bound into the Heist HeistState",
        "hierarchy": "Snap Snaplet Heist",
        "module": "Snap.Snaplet.Heist",
        "name": "withSplices",
        "normalized": "Splices(SnapletISplice a)-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Splices",
        "signature": "Splices(SnapletISplice b)-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the Heist snaplet without using type classes.  It is\nprovided mainly as an example of how snaplets can be written with and without\na type class for convenience.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html",
        "fct-type": "module",
        "title": "HeistNoClass"
      },
      "index": {
        "description": "This module implements the Heist snaplet without using type classes It is provided mainly as an example of how snaplets can be written with and without type class for convenience",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "HeistNoClass",
        "normalized": "",
        "package": "snap",
        "partial": "Heist No Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:DefaultMode",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#DefaultMode",
        "fct-type": "data",
        "title": "DefaultMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "DefaultMode",
        "normalized": "",
        "package": "snap",
        "partial": "Default Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:Heist",
      "description": {
        "fct-descr": "\u003cp\u003eThe state for the Heist snaplet.  To use the Heist snaplet in your app\n include this in your application state and use \u003ccode\u003eheistInit\u003c/code\u003e to initialize\n it.  The type parameter b will typically be the base state type for your\n application.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#Heist",
        "fct-type": "data",
        "title": "Heist"
      },
      "index": {
        "description": "The state for the Heist snaplet To use the Heist snaplet in your app include this in your application state and use heistInit to initialize it The type parameter will typically be the base state type for your application",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "Heist",
        "normalized": "",
        "package": "snap",
        "partial": "Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:SnapletCSplice",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletCSplice",
        "fct-type": "type",
        "title": "SnapletCSplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "SnapletCSplice",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet CSplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:SnapletHeist",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletHeist",
        "fct-type": "type",
        "title": "SnapletHeist"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "SnapletHeist",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#t:SnapletISplice",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#SnapletISplice",
        "fct-type": "type",
        "title": "SnapletISplice"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "SnapletISplice",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet ISplice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:Compiled",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Compiled",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#DefaultMode",
        "fct-type": "function",
        "title": "Compiled"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "Compiled",
        "normalized": "",
        "package": "snap",
        "partial": "Compiled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:Interpreted",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Interpreted",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#DefaultMode",
        "fct-type": "function",
        "title": "Interpreted"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "Interpreted",
        "normalized": "",
        "package": "snap",
        "partial": "Interpreted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:addConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAdds more HeistConfig data using mappend with whatever is currently\n there.  This is the preferred method for adding all four kinds of splices\n as well as new templates.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b) -\u003e HeistConfig (Handler b b) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#addConfig",
        "fct-type": "function",
        "title": "addConfig"
      },
      "index": {
        "description": "Adds more HeistConfig data using mappend with whatever is currently there This is the preferred method for adding all four kinds of splices as well as new templates",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "addConfig",
        "normalized": "Snaplet(Heist a)-\u003eHeistConfig(Handler a a)-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Config",
        "signature": "Snaplet(Heist b)-\u003eHeistConfig(Handler b b)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:addTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistConfig.  Other snaplets should use\n this function to add their own templates.  The templates are automatically\n read from the templates directory in the current snaplet's filesystem root.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e Initializer b (Heist b) ()",
        "fct-type": "function",
        "title": "addTemplates"
      },
      "index": {
        "description": "Adds templates to the Heist HeistConfig Other snaplets should use this function to add their own templates The templates are automatically read from the templates directory in the current snaplet filesystem root",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "addTemplates",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eInitializer a(Heist a)()",
        "package": "snap",
        "partial": "Templates",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eInitializer b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:addTemplatesAt",
      "description": {
        "fct-descr": "\u003cp\u003eAdds templates to the Heist HeistConfig, and lets you specify where\n they are found in the filesystem.  Note that the path to the template\n directory is an absolute path.  This allows you more flexibility in where\n your templates are located, but means that you have to explicitly call\n getSnapletFilePath if you want your snaplet to use templates within its\n normal directory structure.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b)-\u003e ByteString-\u003e FilePath-\u003e Initializer b (Heist b) ()",
        "fct-type": "function",
        "title": "addTemplatesAt"
      },
      "index": {
        "description": "Adds templates to the Heist HeistConfig and lets you specify where they are found in the filesystem Note that the path to the template directory is an absolute path This allows you more flexibility in where your templates are located but means that you have to explicitly call getSnapletFilePath if you want your snaplet to use templates within its normal directory structure",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "addTemplatesAt",
        "normalized": "Snaplet(Heist a)-\u003eByteString-\u003eFilePath-\u003eInitializer a(Heist a)()",
        "package": "snap",
        "partial": "Templates At",
        "signature": "Snaplet(Heist b)-\u003eByteString-\u003eFilePath-\u003eInitializer b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:cHeistServe",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Handler b (Heist b) ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#cHeistServe",
        "fct-type": "function",
        "title": "cHeistServe"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "cHeistServe",
        "normalized": "Handler a(Heist a)()",
        "package": "snap",
        "partial": "Heist Serve",
        "signature": "Handler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:cHeistServeSingle",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "ByteString -\u003e Handler b (Heist b) ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#cHeistServeSingle",
        "fct-type": "function",
        "title": "cHeistServeSingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "cHeistServeSingle",
        "normalized": "ByteString-\u003eHandler a(Heist a)()",
        "package": "snap",
        "partial": "Heist Serve Single",
        "signature": "ByteString-\u003eHandler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:cRender",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b (Heist b) ()",
        "fct-type": "function",
        "title": "cRender"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "cRender",
        "normalized": "ByteString-\u003eHandler a(Heist a)()",
        "package": "snap",
        "partial": "Render",
        "signature": "ByteString-\u003eHandler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:cRenderAs",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b (Heist b) ()",
        "fct-type": "function",
        "title": "cRenderAs"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "cRenderAs",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a(Heist a)()",
        "package": "snap",
        "partial": "Render As",
        "signature": "ByteString-\u003eByteString-\u003eHandler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:chooseMode",
      "description": {
        "fct-descr": "\u003cp\u003eChooses between a compiled action and an interpreted action based on the\n configured default.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "m b-\u003e m b-\u003e m b",
        "fct-type": "function",
        "title": "chooseMode"
      },
      "index": {
        "description": "Chooses between compiled action and an interpreted action based on the configured default",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "chooseMode",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "snap",
        "partial": "Mode",
        "signature": "m b-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:clearHeistCache",
      "description": {
        "fct-descr": "\u003cp\u003eClears data stored by the cache tag.  The cache tag automatically reloads\n its data when the specified TTL expires, but sometimes you may want to\n trigger a manual reload.  This function lets you do that.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Heist b -\u003e IO ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#clearHeistCache",
        "fct-type": "function",
        "title": "clearHeistCache"
      },
      "index": {
        "description": "Clears data stored by the cache tag The cache tag automatically reloads its data when the specified TTL expires but sometimes you may want to trigger manual reload This function lets you do that",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "clearHeistCache",
        "normalized": "Heist a-\u003eIO()",
        "package": "snap",
        "partial": "Heist Cache",
        "signature": "Heist b-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:gHeistServe",
      "description": {
        "fct-descr": "\u003cp\u003eLike heistServe/cHeistServe, but chooses between the two appropriately\n based on the default mode.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Handler b (Heist b) ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#gHeistServe",
        "fct-type": "function",
        "title": "gHeistServe"
      },
      "index": {
        "description": "Like heistServe cHeistServe but chooses between the two appropriately based on the default mode",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "gHeistServe",
        "normalized": "Handler a(Heist a)()",
        "package": "snap",
        "partial": "Heist Serve",
        "signature": "Handler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:gHeistServeSingle",
      "description": {
        "fct-descr": "\u003cp\u003eLike heistServeSingle/cHeistServeSingle, but chooses between the two\n appropriately based on the default mode.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "ByteString -\u003e Handler b (Heist b) ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#gHeistServeSingle",
        "fct-type": "function",
        "title": "gHeistServeSingle"
      },
      "index": {
        "description": "Like heistServeSingle cHeistServeSingle but chooses between the two appropriately based on the default mode",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "gHeistServeSingle",
        "normalized": "ByteString-\u003eHandler a(Heist a)()",
        "package": "snap",
        "partial": "Heist Serve Single",
        "signature": "ByteString-\u003eHandler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:gRender",
      "description": {
        "fct-descr": "\u003cp\u003eLike render/cRender, but chooses between the two appropriately based on\n the default mode.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b (Heist b) ()",
        "fct-type": "function",
        "title": "gRender"
      },
      "index": {
        "description": "Like render cRender but chooses between the two appropriately based on the default mode",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "gRender",
        "normalized": "ByteString-\u003eHandler a(Heist a)()",
        "package": "snap",
        "partial": "Render",
        "signature": "ByteString-\u003eHandler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:gRenderAs",
      "description": {
        "fct-descr": "\u003cp\u003eLike renderAs/cRenderAs, but chooses between the two appropriately based\n on the default mode.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b (Heist b) ()",
        "fct-type": "function",
        "title": "gRenderAs"
      },
      "index": {
        "description": "Like renderAs cRenderAs but chooses between the two appropriately based on the default mode",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "gRenderAs",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a(Heist a)()",
        "package": "snap",
        "partial": "Render As",
        "signature": "ByteString-\u003eByteString-\u003eHandler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:getCurHeistConfig",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b) -\u003e Initializer b v (HeistConfig (Handler b b))",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#getCurHeistConfig",
        "fct-type": "function",
        "title": "getCurHeistConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "getCurHeistConfig",
        "normalized": "Snaplet(Heist a)-\u003eInitializer a b(HeistConfig(Handler a a))",
        "package": "snap",
        "partial": "Cur Heist Config",
        "signature": "Snaplet(Heist b)-\u003eInitializer b v(HeistConfig(Handler b b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:getHeistState",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b) -\u003e Handler b v (HeistState (Handler b b))",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#getHeistState",
        "fct-type": "function",
        "title": "getHeistState"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "getHeistState",
        "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003eHandler a b(HeistState(Handler a a))",
        "package": "snap",
        "partial": "Heist State",
        "signature": "SnapletLens(Snaplet b)(Heist b)-\u003eHandler b v(HeistState(Handler b b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistInit",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e. This function is a convenience wrapper\n around \u003ccode\u003e\u003ca\u003eheistInit'\u003c/a\u003e\u003c/code\u003e that uses defaultHeistState and sets up routes for all\n the templates.  It sets up a \"heistReload\" route that reloads the heist\n templates when you request it from localhost.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "FilePath-\u003e SnapletInit b (Heist b)",
        "fct-type": "function",
        "title": "heistInit"
      },
      "index": {
        "description": "The Initializer for Heist This function is convenience wrapper around heistInit that uses defaultHeistState and sets up routes for all the templates It sets up heistReload route that reloads the heist templates when you request it from localhost",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "heistInit",
        "normalized": "FilePath-\u003eSnapletInit a(Heist a)",
        "package": "snap",
        "partial": "Init",
        "signature": "FilePath-\u003eSnapletInit b(Heist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistInit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA lower level \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eHeist\u003c/a\u003e\u003c/code\u003e.  This initializer requires you\n to specify the initial HeistConfig.  It also does not add any routes for\n templates, allowing you complete control over which templates get routed.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "FilePath-\u003e HeistConfig (Handler b b)-\u003e SnapletInit b (Heist b)",
        "fct-type": "function",
        "title": "heistInit'"
      },
      "index": {
        "description": "lower level Initializer for Heist This initializer requires you to specify the initial HeistConfig It also does not add any routes for templates allowing you complete control over which templates get routed",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "heistInit'",
        "normalized": "FilePath-\u003eHeistConfig(Handler a a)-\u003eSnapletInit a(Heist a)",
        "package": "snap",
        "partial": "Init'",
        "signature": "FilePath-\u003eHeistConfig(Handler b b)-\u003eSnapletInit b(Heist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistLocal",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (Heist b) -\u003e (HeistState (Handler b b) -\u003e HeistState (Handler b b)) -\u003e Handler b v a -\u003e Handler b v a",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#heistLocal",
        "fct-type": "function",
        "title": "heistLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "heistLocal",
        "normalized": "SnapletLens a(Heist a)-\u003e(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Local",
        "signature": "SnapletLens b(Heist b)-\u003e(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistLocal-39-",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b) -\u003e (HeistState (Handler b b) -\u003e HeistState (Handler b b)) -\u003e Handler b v a -\u003e Handler b v a",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#heistLocal%27",
        "fct-type": "function",
        "title": "heistLocal'"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "heistLocal'",
        "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003e(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Local'",
        "signature": "SnapletLens(Snaplet b)(Heist b)-\u003e(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistReloader",
      "description": {
        "fct-descr": "\u003cp\u003eHandler that triggers a template reload.  For large sites, this can be\n desireable because it may be much quicker than the full site reload\n provided at the \u003cem\u003eadmin\u003c/em\u003ereload route.  This allows you to reload only the\n heist templates  This handler is automatically set up by heistInit, but if\n you use heistInit', then you can create your own route with it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Handler b (Heist b) ()",
        "fct-source": "src/Snap-Snaplet-Heist-Internal.html#heistReloader",
        "fct-type": "function",
        "title": "heistReloader"
      },
      "index": {
        "description": "Handler that triggers template reload For large sites this can be desireable because it may be much quicker than the full site reload provided at the admin reload route This allows you to reload only the heist templates This handler is automatically set up by heistInit but if you use heistInit then you can create your own route with it",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "heistReloader",
        "normalized": "Handler a(Heist a)()",
        "package": "snap",
        "partial": "Reloader",
        "signature": "Handler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistServe",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Handler b (Heist b) ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#heistServe",
        "fct-type": "function",
        "title": "heistServe"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "heistServe",
        "normalized": "Handler a(Heist a)()",
        "package": "snap",
        "partial": "Serve",
        "signature": "Handler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:heistServeSingle",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "ByteString -\u003e Handler b (Heist b) ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#heistServeSingle",
        "fct-type": "function",
        "title": "heistServeSingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "heistServeSingle",
        "normalized": "ByteString-\u003eHandler a(Heist a)()",
        "package": "snap",
        "partial": "Serve Single",
        "signature": "ByteString-\u003eHandler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:modifyHeistState",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (Heist b) -\u003e (HeistState (Handler b b) -\u003e HeistState (Handler b b)) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#modifyHeistState",
        "fct-type": "function",
        "title": "modifyHeistState"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "modifyHeistState",
        "normalized": "SnapletLens a(Heist a)-\u003e(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Heist State",
        "signature": "SnapletLens b(Heist b)-\u003e(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:modifyHeistState-39-",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b) -\u003e (HeistState (Handler b b) -\u003e HeistState (Handler b b)) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#modifyHeistState%27",
        "fct-type": "function",
        "title": "modifyHeistState'"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "modifyHeistState'",
        "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003e(HeistState(Handler a a)-\u003eHeistState(Handler a a))-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Heist State'",
        "signature": "SnapletLens(Snaplet b)(Heist b)-\u003e(HeistState(Handler b b)-\u003eHeistState(Handler b b))-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:render",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Handler b (Heist b) ()",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "render",
        "normalized": "ByteString-\u003eHandler a(Heist a)()",
        "package": "snap",
        "partial": "",
        "signature": "ByteString-\u003eHandler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:renderAs",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Handler b (Heist b) ()",
        "fct-type": "function",
        "title": "renderAs"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "renderAs",
        "normalized": "ByteString-\u003eByteString-\u003eHandler a(Heist a)()",
        "package": "snap",
        "partial": "As",
        "signature": "ByteString-\u003eByteString-\u003eHandler b(Heist b)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:renderWithSplices",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (Heist b) -\u003e ByteString -\u003e Splices (SnapletISplice b) -\u003e Handler b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#renderWithSplices",
        "fct-type": "function",
        "title": "renderWithSplices"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "renderWithSplices",
        "normalized": "SnapletLens a(Heist a)-\u003eByteString-\u003eSplices(SnapletISplice a)-\u003eHandler a b()",
        "package": "snap",
        "partial": "With Splices",
        "signature": "SnapletLens b(Heist b)-\u003eByteString-\u003eSplices(SnapletISplice b)-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:renderWithSplices-39-",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b) -\u003e ByteString -\u003e Splices (SnapletISplice b) -\u003e Handler b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#renderWithSplices%27",
        "fct-type": "function",
        "title": "renderWithSplices'"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "renderWithSplices'",
        "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003eByteString-\u003eSplices(SnapletISplice a)-\u003eHandler a b()",
        "package": "snap",
        "partial": "With Splices'",
        "signature": "SnapletLens(Snaplet b)(Heist b)-\u003eByteString-\u003eSplices(SnapletISplice b)-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:setInterpreted",
      "description": {
        "fct-descr": "\u003cp\u003eSets the snaplet to default to interpreted mode.  Initially, the\n initializer sets the value to compiled mode.  This function allows you to\n override that setting.  Note that this is just a default.  It only has an\n effect if you use one of the generic functions: \u003ccode\u003e\u003ca\u003egRender\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egRenderAs\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003egHeistServe\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003egHeistServeSingle\u003c/a\u003e\u003c/code\u003e.  If you call the non-generic\n versions directly, then this value will not be checked and you will get the\n mode implemented by the function you called.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "Snaplet (Heist b) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#setInterpreted",
        "fct-type": "function",
        "title": "setInterpreted"
      },
      "index": {
        "description": "Sets the snaplet to default to interpreted mode Initially the initializer sets the value to compiled mode This function allows you to override that setting Note that this is just default It only has an effect if you use one of the generic functions gRender gRenderAs gHeistServe or gHeistServeSingle If you call the non-generic versions directly then this value will not be checked and you will get the mode implemented by the function you called",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "setInterpreted",
        "normalized": "Snaplet(Heist a)-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Interpreted",
        "signature": "Snaplet(Heist b)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:withHeistState",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (Heist b) -\u003e (HeistState (Handler b b) -\u003e a) -\u003e Handler b v a",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#withHeistState",
        "fct-type": "function",
        "title": "withHeistState"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "withHeistState",
        "normalized": "SnapletLens a(Heist a)-\u003e(HeistState(Handler a a)-\u003eb)-\u003eHandler a c b",
        "package": "snap",
        "partial": "Heist State",
        "signature": "SnapletLens b(Heist b)-\u003e(HeistState(Handler b b)-\u003ea)-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:withHeistState-39-",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b) -\u003e (HeistState (Handler b b) -\u003e a) -\u003e Handler b v a",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#withHeistState%27",
        "fct-type": "function",
        "title": "withHeistState'"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "withHeistState'",
        "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003e(HeistState(Handler a a)-\u003eb)-\u003eHandler a c b",
        "package": "snap",
        "partial": "Heist State'",
        "signature": "SnapletLens(Snaplet b)(Heist b)-\u003e(HeistState(Handler b b)-\u003ea)-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:withSplices",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b (Heist b) -\u003e Splices (SnapletISplice b) -\u003e Handler b v a -\u003e Handler b v a",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#withSplices",
        "fct-type": "function",
        "title": "withSplices"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "withSplices",
        "normalized": "SnapletLens a(Heist a)-\u003eSplices(SnapletISplice a)-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Splices",
        "signature": "SnapletLens b(Heist b)-\u003eSplices(SnapletISplice b)-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-HeistNoClass.html#v:withSplices-39-",
      "description": {
        "fct-module": "Snap.Snaplet.HeistNoClass",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) (Heist b) -\u003e Splices (SnapletISplice b) -\u003e Handler b v a -\u003e Handler b v a",
        "fct-source": "src/Snap-Snaplet-HeistNoClass.html#withSplices%27",
        "fct-type": "function",
        "title": "withSplices'"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet HeistNoClass",
        "module": "Snap.Snaplet.HeistNoClass",
        "name": "withSplices'",
        "normalized": "SnapletLens(Snaplet a)(Heist a)-\u003eSplices(SnapletISplice a)-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Splices'",
        "signature": "SnapletLens(Snaplet b)(Heist b)-\u003eSplices(SnapletISplice b)-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Backends-CookieSession.html#",
      "description": {
        "fct-module": "Snap.Snaplet.Session.Backends.CookieSession",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Session-Backends-CookieSession.html",
        "fct-type": "module",
        "title": "CookieSession"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Session Backends CookieSession",
        "module": "Snap.Snaplet.Session.Backends.CookieSession",
        "name": "CookieSession",
        "normalized": "",
        "package": "snap",
        "partial": "Cookie Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Backends-CookieSession.html#v:initCookieSessionManager",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize a cookie-backed session, returning a \u003ccode\u003e\u003ca\u003eSessionManager\u003c/a\u003e\u003c/code\u003e to be\n stuffed inside your application's state. This \u003ccode\u003e\u003ca\u003eSessionManager\u003c/a\u003e\u003c/code\u003e will enable\n the use of all session storage functionality defined in\n \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.Backends.CookieSession",
        "fct-package": "snap",
        "fct-signature": "FilePath-\u003e ByteString-\u003e Maybe Int-\u003e SnapletInit b SessionManager",
        "fct-type": "function",
        "title": "initCookieSessionManager"
      },
      "index": {
        "description": "Initialize cookie-backed session returning SessionManager to be stuffed inside your application state This SessionManager will enable the use of all session storage functionality defined in Session",
        "hierarchy": "Snap Snaplet Session Backends CookieSession",
        "module": "Snap.Snaplet.Session.Backends.CookieSession",
        "name": "initCookieSessionManager",
        "normalized": "FilePath-\u003eByteString-\u003eMaybe Int-\u003eSnapletInit a SessionManager",
        "package": "snap",
        "partial": "Cookie Session Manager",
        "signature": "FilePath-\u003eByteString-\u003eMaybe Int-\u003eSnapletInit b SessionManager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functionality common among multiple back-ends.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Session.Common",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Session-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "This module contains functionality common among multiple back-ends",
        "hierarchy": "Snap Snaplet Session Common",
        "module": "Snap.Snaplet.Session.Common",
        "name": "Common",
        "normalized": "",
        "package": "snap",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#t:RNG",
      "description": {
        "fct-descr": "\u003cp\u003eHigh speed, mutable random number generator state\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.Common",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Session-Common.html#RNG",
        "fct-type": "data",
        "title": "RNG"
      },
      "index": {
        "description": "High speed mutable random number generator state",
        "hierarchy": "Snap Snaplet Session Common",
        "module": "Snap.Snaplet.Session.Common",
        "name": "RNG",
        "normalized": "",
        "package": "snap",
        "partial": "RNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#v:mkCSRFToken",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a randomized CSRF token\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.Common",
        "fct-package": "snap",
        "fct-signature": "RNG -\u003e IO Text",
        "fct-source": "src/Snap-Snaplet-Session-Common.html#mkCSRFToken",
        "fct-type": "function",
        "title": "mkCSRFToken"
      },
      "index": {
        "description": "Generate randomized CSRF token",
        "hierarchy": "Snap Snaplet Session Common",
        "module": "Snap.Snaplet.Session.Common",
        "name": "mkCSRFToken",
        "normalized": "RNG-\u003eIO Text",
        "package": "snap",
        "partial": "CSRFToken",
        "signature": "RNG-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#v:mkRNG",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new RNG\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.Common",
        "fct-package": "snap",
        "fct-signature": "IO RNG",
        "fct-source": "src/Snap-Snaplet-Session-Common.html#mkRNG",
        "fct-type": "function",
        "title": "mkRNG"
      },
      "index": {
        "description": "Create new RNG",
        "hierarchy": "Snap Snaplet Session Common",
        "module": "Snap.Snaplet.Session.Common",
        "name": "mkRNG",
        "normalized": "",
        "package": "snap",
        "partial": "RNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#v:randomToken",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a random salt of given length\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.Common",
        "fct-package": "snap",
        "fct-signature": "Int -\u003e RNG -\u003e IO ByteString",
        "fct-source": "src/Snap-Snaplet-Session-Common.html#randomToken",
        "fct-type": "function",
        "title": "randomToken"
      },
      "index": {
        "description": "Generates random salt of given length",
        "hierarchy": "Snap Snaplet Session Common",
        "module": "Snap.Snaplet.Session.Common",
        "name": "randomToken",
        "normalized": "Int-\u003eRNG-\u003eIO ByteString",
        "package": "snap",
        "partial": "Token",
        "signature": "Int-\u003eRNG-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-Common.html#v:withRNG",
      "description": {
        "fct-descr": "\u003cp\u003ePerform given action, mutating the RNG state\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.Common",
        "fct-package": "snap",
        "fct-signature": "RNG -\u003e (GenIO -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Snap-Snaplet-Session-Common.html#withRNG",
        "fct-type": "function",
        "title": "withRNG"
      },
      "index": {
        "description": "Perform given action mutating the RNG state",
        "hierarchy": "Snap Snaplet Session Common",
        "module": "Snap.Snaplet.Session.Common",
        "name": "withRNG",
        "normalized": "RNG-\u003e(GenIO-\u003eIO a)-\u003eIO a",
        "package": "snap",
        "partial": "RNG",
        "signature": "RNG-\u003e(GenIO-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is meant to be used mainly by Session backend\ndevelopers, who would naturally need access to ISessionManager class\ninternals. You can also use it if you need low-level access to the\nbackend functionality.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html",
        "fct-type": "module",
        "title": "SessionManager"
      },
      "index": {
        "description": "This module is meant to be used mainly by Session backend developers who would naturally need access to ISessionManager class internals You can also use it if you need low-level access to the backend functionality",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "SessionManager",
        "normalized": "",
        "package": "snap",
        "partial": "Session Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#t:ISessionManager",
      "description": {
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#ISessionManager",
        "fct-type": "class",
        "title": "ISessionManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "ISessionManager",
        "normalized": "",
        "package": "snap",
        "partial": "ISession Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#t:SessionManager",
      "description": {
        "fct-descr": "\u003cp\u003eAny Haskell record that is a member of the \u003ccode\u003e\u003ca\u003eISessionManager\u003c/a\u003e\u003c/code\u003e\n typeclass can be stuffed inside a \u003ccode\u003e\u003ca\u003eSessionManager\u003c/a\u003e\u003c/code\u003e to enable all\n session-related functionality.\n\u003c/p\u003e\u003cp\u003eTo use sessions in your application, just find a Backend that would\n produce one for you inside of your \u003ccode\u003eInitializer\u003c/code\u003e. See\n \u003ccode\u003einitCookieSessionManager\u003c/code\u003e in\n \u003ccode\u003e\u003ca\u003eCookieSession\u003c/a\u003e\u003c/code\u003e for a built-in option\n that would get you started.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#SessionManager",
        "fct-type": "data",
        "title": "SessionManager"
      },
      "index": {
        "description": "Any Haskell record that is member of the ISessionManager typeclass can be stuffed inside SessionManager to enable all session-related functionality To use sessions in your application just find Backend that would produce one for you inside of your Initializer See initCookieSessionManager in CookieSession for built-in option that would get you started",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "SessionManager",
        "normalized": "",
        "package": "snap",
        "partial": "Session Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:SessionManager",
      "description": {
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "SessionManager a",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#SessionManager",
        "fct-type": "function",
        "title": "SessionManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "SessionManager",
        "normalized": "",
        "package": "snap",
        "partial": "Session Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003eCommit session, return a possibly updated paylaod\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "r -\u003e Snap ()",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#commit",
        "fct-type": "method",
        "title": "commit"
      },
      "index": {
        "description": "Commit session return possibly updated paylaod",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "commit",
        "normalized": "a-\u003eSnap()",
        "package": "snap",
        "partial": "",
        "signature": "r-\u003eSnap()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:csrf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a session-specific CSRF protection token. See \u003ccode\u003emkCSRFToken\u003c/code\u003e for\n help in creating the value.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "r -\u003e Text",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#csrf",
        "fct-type": "method",
        "title": "csrf"
      },
      "index": {
        "description": "Return session-specific CSRF protection token See mkCSRFToken for help in creating the value",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "csrf",
        "normalized": "a-\u003eText",
        "package": "snap",
        "partial": "",
        "signature": "r-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a key in session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "Text -\u003e r -\u003e r",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "Delete key in session",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "delete",
        "normalized": "Text-\u003ea-\u003ea",
        "package": "snap",
        "partial": "",
        "signature": "Text-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a key-value pair into session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "Text -\u003e Text -\u003e r -\u003e r",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Insert key-value pair into session",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "insert",
        "normalized": "Text-\u003eText-\u003ea-\u003ea",
        "package": "snap",
        "partial": "",
        "signature": "Text-\u003eText-\u003er-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a session from given payload.\n\u003c/p\u003e\u003cp\u003eWill always be called before any other operation. If possible, cache and\n do nothing when called multiple times within the same request cycle.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "r -\u003e Snap r",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#load",
        "fct-type": "method",
        "title": "load"
      },
      "index": {
        "description": "Load session from given payload Will always be called before any other operation If possible cache and do nothing when called multiple times within the same request cycle",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "load",
        "normalized": "a-\u003eSnap a",
        "package": "snap",
        "partial": "",
        "signature": "r-\u003eSnap r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a key in session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "Text -\u003e r -\u003e Maybe Text",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup key in session",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "lookup",
        "normalized": "Text-\u003ea-\u003eMaybe Text",
        "package": "snap",
        "partial": "",
        "signature": "Text-\u003er-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:reset",
      "description": {
        "fct-descr": "\u003cp\u003eReset session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "r -\u003e Snap r",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#reset",
        "fct-type": "method",
        "title": "reset"
      },
      "index": {
        "description": "Reset session",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "reset",
        "normalized": "a-\u003eSnap a",
        "package": "snap",
        "partial": "",
        "signature": "r-\u003eSnap r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all key-value pairs as an association list\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "r -\u003e [(Text, Text)]",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#toList",
        "fct-type": "method",
        "title": "toList"
      },
      "index": {
        "description": "Return all key-value pairs as an association list",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "toList",
        "normalized": "a-\u003e[(Text,Text)]",
        "package": "snap",
        "partial": "List",
        "signature": "r-\u003e[(Text,Text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session-SessionManager.html#v:touch",
      "description": {
        "fct-descr": "\u003cp\u003eTouch session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session.SessionManager",
        "fct-package": "snap",
        "fct-signature": "r -\u003e r",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#touch",
        "fct-type": "method",
        "title": "touch"
      },
      "index": {
        "description": "Touch session",
        "hierarchy": "Snap Snaplet Session SessionManager",
        "module": "Snap.Snaplet.Session.SessionManager",
        "name": "touch",
        "normalized": "a-\u003ea",
        "package": "snap",
        "partial": "",
        "signature": "r-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#",
      "description": {
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Session.html",
        "fct-type": "module",
        "title": "Session"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "Session",
        "normalized": "",
        "package": "snap",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#t:SecureCookie",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize UTCTime\ninstance Serialize UTCTime where\n    put t = put (round (utcTimeToPOSIXSeconds t) :: Integer)\n    get   = posixSecondsToUTCTime . fromInteger \u003ca\u003e$\u003c/a\u003e get\n\u003c/p\u003e\u003cp\u003eArbitrary payload with timestamp.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Session-SecureCookie.html#SecureCookie",
        "fct-type": "type",
        "title": "SecureCookie"
      },
      "index": {
        "description": "Serialize UTCTime instance Serialize UTCTime where put put round utcTimeToPOSIXSeconds Integer get posixSecondsToUTCTime fromInteger get Arbitrary payload with timestamp",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "SecureCookie",
        "normalized": "",
        "package": "snap",
        "partial": "Secure Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#t:SessionManager",
      "description": {
        "fct-descr": "\u003cp\u003eAny Haskell record that is a member of the \u003ccode\u003e\u003ca\u003eISessionManager\u003c/a\u003e\u003c/code\u003e\n typeclass can be stuffed inside a \u003ccode\u003e\u003ca\u003eSessionManager\u003c/a\u003e\u003c/code\u003e to enable all\n session-related functionality.\n\u003c/p\u003e\u003cp\u003eTo use sessions in your application, just find a Backend that would\n produce one for you inside of your \u003ccode\u003eInitializer\u003c/code\u003e. See\n \u003ccode\u003einitCookieSessionManager\u003c/code\u003e in\n \u003ccode\u003e\u003ca\u003eCookieSession\u003c/a\u003e\u003c/code\u003e for a built-in option\n that would get you started.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Session-SessionManager.html#SessionManager",
        "fct-type": "data",
        "title": "SessionManager"
      },
      "index": {
        "description": "Any Haskell record that is member of the ISessionManager typeclass can be stuffed inside SessionManager to enable all session-related functionality To use sessions in your application just find Backend that would produce one for you inside of your Initializer See initCookieSessionManager in CookieSession for built-in option that would get you started",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "SessionManager",
        "normalized": "",
        "package": "snap",
        "partial": "Session Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:checkTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eValidate session against timeout policy.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If timeout is set to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, never trigger a time-out.\n\u003c/li\u003e\u003cli\u003e Otherwise, do a regular time-out check based on current time and given\n   timestamp.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "Maybe Int -\u003e UTCTime -\u003e m Bool",
        "fct-source": "src/Snap-Snaplet-Session-SecureCookie.html#checkTimeout",
        "fct-type": "function",
        "title": "checkTimeout"
      },
      "index": {
        "description": "Validate session against timeout policy If timeout is set to Nothing never trigger time-out Otherwise do regular time-out check based on current time and given timestamp",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "checkTimeout",
        "normalized": "Maybe Int-\u003eUTCTime-\u003ea Bool",
        "package": "snap",
        "partial": "Timeout",
        "signature": "Maybe Int-\u003eUTCTime-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:commitSession",
      "description": {
        "fct-descr": "\u003cp\u003eCommit changes to session within the current request cycle\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "Handler b SessionManager ()",
        "fct-source": "src/Snap-Snaplet-Session.html#commitSession",
        "fct-type": "function",
        "title": "commitSession"
      },
      "index": {
        "description": "Commit changes to session within the current request cycle",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "commitSession",
        "normalized": "Handler a SessionManager()",
        "package": "snap",
        "partial": "Session",
        "signature": "Handler b SessionManager()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:csrfToken",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a CSRF Token unique to the current session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "Handler b SessionManager Text",
        "fct-source": "src/Snap-Snaplet-Session.html#csrfToken",
        "fct-type": "function",
        "title": "csrfToken"
      },
      "index": {
        "description": "Returns CSRF Token unique to the current session",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "csrfToken",
        "normalized": "",
        "package": "snap",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:deleteFromSession",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a key from the current session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "Text -\u003e Handler b SessionManager ()",
        "fct-source": "src/Snap-Snaplet-Session.html#deleteFromSession",
        "fct-type": "function",
        "title": "deleteFromSession"
      },
      "index": {
        "description": "Remove key from the current session",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "deleteFromSession",
        "normalized": "Text-\u003eHandler a SessionManager()",
        "package": "snap",
        "partial": "From Session",
        "signature": "Text-\u003eHandler b SessionManager()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:getFromSession",
      "description": {
        "fct-descr": "\u003cp\u003eGet a key from the current session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "Text -\u003e Handler b SessionManager (Maybe Text)",
        "fct-source": "src/Snap-Snaplet-Session.html#getFromSession",
        "fct-type": "function",
        "title": "getFromSession"
      },
      "index": {
        "description": "Get key from the current session",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "getFromSession",
        "normalized": "Text-\u003eHandler a SessionManager(Maybe Text)",
        "package": "snap",
        "partial": "From Session",
        "signature": "Text-\u003eHandler b SessionManager(Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:getSecureCookie",
      "description": {
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Key-\u003e Maybe Int-\u003e m (Maybe t)",
        "fct-type": "function",
        "title": "getSecureCookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "getSecureCookie",
        "normalized": "ByteString-\u003eKey-\u003eMaybe Int-\u003ea(Maybe b)",
        "package": "snap",
        "partial": "Secure Cookie",
        "signature": "ByteString-\u003eKey-\u003eMaybe Int-\u003em(Maybe t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:resetSession",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes the session cookie, effectively resetting the session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "Handler b SessionManager ()",
        "fct-source": "src/Snap-Snaplet-Session.html#resetSession",
        "fct-type": "function",
        "title": "resetSession"
      },
      "index": {
        "description": "Deletes the session cookie effectively resetting the session",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "resetSession",
        "normalized": "Handler a SessionManager()",
        "package": "snap",
        "partial": "Session",
        "signature": "Handler b SessionManager()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:sessionToList",
      "description": {
        "fct-descr": "\u003cp\u003eReturn session contents as an association list\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "Handler b SessionManager [(Text, Text)]",
        "fct-source": "src/Snap-Snaplet-Session.html#sessionToList",
        "fct-type": "function",
        "title": "sessionToList"
      },
      "index": {
        "description": "Return session contents as an association list",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "sessionToList",
        "normalized": "Handler a SessionManager[(Text,Text)]",
        "package": "snap",
        "partial": "To List",
        "signature": "Handler b SessionManager[(Text,Text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:setInSession",
      "description": {
        "fct-descr": "\u003cp\u003eSet a key-value pair in the current session\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "Text -\u003e Text -\u003e Handler b SessionManager ()",
        "fct-source": "src/Snap-Snaplet-Session.html#setInSession",
        "fct-type": "function",
        "title": "setInSession"
      },
      "index": {
        "description": "Set key-value pair in the current session",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "setInSession",
        "normalized": "Text-\u003eText-\u003eHandler a SessionManager()",
        "package": "snap",
        "partial": "In Session",
        "signature": "Text-\u003eText-\u003eHandler b SessionManager()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:setSecureCookie",
      "description": {
        "fct-descr": "\u003cp\u003eInject the payload\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e Key-\u003e Maybe Int-\u003e t-\u003e m ()",
        "fct-type": "function",
        "title": "setSecureCookie"
      },
      "index": {
        "description": "Inject the payload",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "setSecureCookie",
        "normalized": "ByteString-\u003eKey-\u003eMaybe Int-\u003ea-\u003eb()",
        "package": "snap",
        "partial": "Secure Cookie",
        "signature": "ByteString-\u003eKey-\u003eMaybe Int-\u003et-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:touchSession",
      "description": {
        "fct-descr": "\u003cp\u003eTouch the session so the timeout gets refreshed\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "Handler b SessionManager ()",
        "fct-source": "src/Snap-Snaplet-Session.html#touchSession",
        "fct-type": "function",
        "title": "touchSession"
      },
      "index": {
        "description": "Touch the session so the timeout gets refreshed",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "touchSession",
        "normalized": "Handler a SessionManager()",
        "package": "snap",
        "partial": "Session",
        "signature": "Handler b SessionManager()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Session.html#v:withSession",
      "description": {
        "fct-descr": "\u003cp\u003eWrap around a handler, committing any changes in the session at the end\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Session",
        "fct-package": "snap",
        "fct-signature": "SnapletLens b SessionManager -\u003e Handler b v a -\u003e Handler b v a",
        "fct-source": "src/Snap-Snaplet-Session.html#withSession",
        "fct-type": "function",
        "title": "withSession"
      },
      "index": {
        "description": "Wrap around handler committing any changes in the session at the end",
        "hierarchy": "Snap Snaplet Session",
        "module": "Snap.Snaplet.Session",
        "name": "withSession",
        "normalized": "SnapletLens a SessionManager-\u003eHandler a b c-\u003eHandler a b c",
        "package": "snap",
        "partial": "Session",
        "signature": "SnapletLens b SessionManager-\u003eHandler b v a-\u003eHandler b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Test.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Snap.Snaplet.Test module contains primitives and combinators for\n testing Snaplets.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.Test",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "The Snap.Snaplet.Test module contains primitives and combinators for testing Snaplets",
        "hierarchy": "Snap Snaplet Test",
        "module": "Snap.Snaplet.Test",
        "name": "Test",
        "normalized": "",
        "package": "snap",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Test.html#v:evalHandler",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a Snaplet Handler, a \u003ccode\u003e\u003ca\u003eSnapletInit\u003c/a\u003e\u003c/code\u003e specifying the initial state,\n  and a \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e defining a test request, runs the handler,\n  returning the monadic value it produces.\n\u003c/p\u003e\u003cp\u003eThrows an exception if the \u003ccode\u003e\u003ca\u003eSnap\u003c/a\u003e\u003c/code\u003e handler early-terminates with \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003emzero\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the output of this function is slightly different from\n 'evalHandler defined in Snap.Test, because due to the fact running\n the initializer inside \u003ccode\u003e\u003ca\u003eSnapletInit\u003c/a\u003e\u003c/code\u003e can throw an exception.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Test",
        "fct-package": "snap",
        "fct-signature": "Maybe String -\u003e RequestBuilder m () -\u003e Handler b b a -\u003e SnapletInit b b -\u003e m (Either Text a)",
        "fct-source": "src/Snap-Snaplet-Test.html#evalHandler",
        "fct-type": "function",
        "title": "evalHandler"
      },
      "index": {
        "description": "Given Snaplet Handler SnapletInit specifying the initial state and RequestBuilder defining test request runs the handler returning the monadic value it produces Throws an exception if the Snap handler early-terminates with finishWith or mzero Note that the output of this function is slightly different from evalHandler defined in Snap.Test because due to the fact running the initializer inside SnapletInit can throw an exception",
        "hierarchy": "Snap Snaplet Test",
        "module": "Snap.Snaplet.Test",
        "name": "evalHandler",
        "normalized": "Maybe String-\u003eRequestBuilder a()-\u003eHandler b b c-\u003eSnapletInit b b-\u003ea(Either Text c)",
        "package": "snap",
        "partial": "Handler",
        "signature": "Maybe String-\u003eRequestBuilder m()-\u003eHandler b b a-\u003eSnapletInit b b-\u003em(Either Text a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Test.html#v:runHandler",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a Snaplet Handler and a \u003ccode\u003e\u003ca\u003eRequestBuilder\u003c/a\u003e\u003c/code\u003e defining\n a test request, runs the Handler, producing an HTTP \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the output of this function is slightly different from\n \u003ccode\u003e\u003ca\u003erunHandler\u003c/a\u003e\u003c/code\u003e defined in Snap.Test, because due to the fact running\n the initializer inside \u003ccode\u003e\u003ca\u003eSnapletInit\u003c/a\u003e\u003c/code\u003e can throw an exception.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Test",
        "fct-package": "snap",
        "fct-signature": "Maybe String -\u003e RequestBuilder m () -\u003e Handler b b v -\u003e SnapletInit b b -\u003e m (Either Text Response)",
        "fct-source": "src/Snap-Snaplet-Test.html#runHandler",
        "fct-type": "function",
        "title": "runHandler"
      },
      "index": {
        "description": "Given Snaplet Handler and RequestBuilder defining test request runs the Handler producing an HTTP Response Note that the output of this function is slightly different from runHandler defined in Snap.Test because due to the fact running the initializer inside SnapletInit can throw an exception",
        "hierarchy": "Snap Snaplet Test",
        "module": "Snap.Snaplet.Test",
        "name": "runHandler",
        "normalized": "Maybe String-\u003eRequestBuilder a()-\u003eHandler b b c-\u003eSnapletInit b b-\u003ea(Either Text Response)",
        "package": "snap",
        "partial": "Handler",
        "signature": "Maybe String-\u003eRequestBuilder m()-\u003eHandler b b v-\u003eSnapletInit b b-\u003em(Either Text Response)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet-Test.html#v:withTemporaryFile",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the given file before running an IO computation. Obviously it\n can be used with \u003ccode\u003eAssertion\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.Test",
        "fct-package": "snap",
        "fct-signature": "FilePath -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Snap-Snaplet-Test.html#withTemporaryFile",
        "fct-type": "function",
        "title": "withTemporaryFile"
      },
      "index": {
        "description": "Remove the given file before running an IO computation Obviously it can be used with Assertion",
        "hierarchy": "Snap Snaplet Test",
        "module": "Snap.Snaplet.Test",
        "name": "withTemporaryFile",
        "normalized": "FilePath-\u003eIO()-\u003eIO()",
        "package": "snap",
        "partial": "Temporary File",
        "signature": "FilePath-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSnaplets allow you to build web applications out of composable parts. This\nallows you to build self-contained units and glue them together to make your\noverall application.\n\u003c/p\u003e\u003cp\u003eA snaplet has a few moving parts, some user-defined and some provided by the\nsnaplet API:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e each snaplet has its own configuration given to it at startup.\n\u003c/li\u003e\u003cli\u003e each snaplet is given its own directory on the filesystem, from which it\n    reads its configuration and in which it can store files.\n\u003c/li\u003e\u003cli\u003e each snaplet comes with an \u003ccode\u003e\u003ca\u003eInitializer\u003c/a\u003e\u003c/code\u003e which defines how to create an\n    instance of the Snaplet at startup. The initializer decides how to\n    interpret the snaplet configuration, which URLs to handle (and how), sets\n    up the initial snaplet state, tells the snaplet runtime system how to\n    clean the snaplet up, etc.\n\u003c/li\u003e\u003cli\u003e each snaplet contains some user-defined in-memory state; for instance, a\n    snaplet that talks to a database might contain a reference to a connection\n    pool. The snaplet state is an ordinary Haskell record, with a datatype\n    defined by the snaplet author. The initial state record is created during\n    initialization and is available to snaplet \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003es when serving HTTP\n    requests.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNOTE: This documentation is written as a prose tutorial of the snaplets\nAPI.  Don't be scared by the fact that it's auto-generated and is filled with\ntype signatures.  Just keep reading.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet.html",
        "fct-type": "module",
        "title": "Snaplet"
      },
      "index": {
        "description": "Snaplets allow you to build web applications out of composable parts This allows you to build self-contained units and glue them together to make your overall application snaplet has few moving parts some user-defined and some provided by the snaplet API each snaplet has its own configuration given to it at startup each snaplet is given its own directory on the filesystem from which it reads its configuration and in which it can store files each snaplet comes with an Initializer which defines how to create an instance of the Snaplet at startup The initializer decides how to interpret the snaplet configuration which URLs to handle and how sets up the initial snaplet state tells the snaplet runtime system how to clean the snaplet up etc each snaplet contains some user-defined in-memory state for instance snaplet that talks to database might contain reference to connection pool The snaplet state is an ordinary Haskell record with datatype defined by the snaplet author The initial state record is created during initialization and is available to snaplet Handler when serving HTTP requests NOTE This documentation is written as prose tutorial of the snaplets API Don be scared by the fact that it auto-generated and is filled with type signatures Just keep reading",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "Snaplet",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eSnaplet infrastructure is available during runtime request processing\n through the Handler monad.  There aren't very many standalone functions to\n read about here, but this is deceptive.  The key is in the type class\n instances.  Handler is an instance of \u003ccode\u003e\u003ca\u003eMonadSnap\u003c/a\u003e\u003c/code\u003e, which means it is the\n monad you will use to write all your application routes.  It also has a\n \u003ccode\u003e\u003ca\u003eMonadSnaplet\u003c/a\u003e\u003c/code\u003e instance, which gives you all the functionality described\n above.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#Handler",
        "fct-type": "data",
        "title": "Handler"
      },
      "index": {
        "description": "Snaplet infrastructure is available during runtime request processing through the Handler monad There aren very many standalone functions to read about here but this is deceptive The key is in the type class instances Handler is an instance of MonadSnap which means it is the monad you will use to write all your application routes It also has MonadSnaplet instance which gives you all the functionality described above",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "Handler",
        "normalized": "",
        "package": "snap",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:Initializer",
      "description": {
        "fct-descr": "\u003cp\u003eMonad used for initializing snaplets.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#Initializer",
        "fct-type": "data",
        "title": "Initializer"
      },
      "index": {
        "description": "Monad used for initializing snaplets",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "Initializer",
        "normalized": "",
        "package": "snap",
        "partial": "Initializer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:MonadSnaplet",
      "description": {
        "fct-descr": "\u003cp\u003eThe m type parameter used in the MonadSnaplet type signatures will\n usually be either Initializer or Handler, but other monads may sometimes be\n useful.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ewithTop'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewith'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetLens\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003egetOpaqueConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#MonadSnaplet",
        "fct-type": "class",
        "title": "MonadSnaplet"
      },
      "index": {
        "description": "The type parameter used in the MonadSnaplet type signatures will usually be either Initializer or Handler but other monads may sometimes be useful Minimal complete definition withTop with getLens and getOpaqueConfig",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "MonadSnaplet",
        "normalized": "",
        "package": "snap",
        "partial": "Monad Snaplet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:Snaplet",
      "description": {
        "fct-descr": "\u003cp\u003eSnaplet's type parameter \u003ccode\u003es\u003c/code\u003e here is user-defined and can be any Haskell\n type.  A value of type \u003ccode\u003eSnaplet s\u003c/code\u003e countains a couple of things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a value of type \u003ccode\u003es\u003c/code\u003e, called the \"user state\".\n\u003c/li\u003e\u003cli\u003e some bookkeeping data the framework uses to plug things together, like\n   the snaplet's configuration, the snaplet's root directory on the\n   filesystem, the snaplet's root URL, and so on.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#Snaplet",
        "fct-type": "data",
        "title": "Snaplet"
      },
      "index": {
        "description": "Snaplet type parameter here is user-defined and can be any Haskell type value of type Snaplet countains couple of things value of type called the user state some bookkeeping data the framework uses to plug things together like the snaplet configuration the snaplet root directory on the filesystem the snaplet root URL and so on",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "Snaplet",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:SnapletConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque data type holding internal snaplet configuration data.  It is\n exported publicly because the getOpaqueConfig function in MonadSnaplet\n makes implementing new instances of MonadSnaplet more convenient.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#SnapletConfig",
        "fct-type": "data",
        "title": "SnapletConfig"
      },
      "index": {
        "description": "An opaque data type holding internal snaplet configuration data It is exported publicly because the getOpaqueConfig function in MonadSnaplet makes implementing new instances of MonadSnaplet more convenient",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "SnapletConfig",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:SnapletInit",
      "description": {
        "fct-descr": "\u003cp\u003eOpaque newtype which gives us compile-time guarantees that the user is\n using makeSnaplet and either nestSnaplet or embedSnaplet correctly.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#SnapletInit",
        "fct-type": "data",
        "title": "SnapletInit"
      },
      "index": {
        "description": "Opaque newtype which gives us compile-time guarantees that the user is using makeSnaplet and either nestSnaplet or embedSnaplet correctly",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "SnapletInit",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#t:SnapletLens",
      "description": {
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "type",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#SnapletLens",
        "fct-type": "type",
        "title": "SnapletLens"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "SnapletLens",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:addPostInitHook",
      "description": {
        "fct-descr": "\u003cp\u003eAdds an IO action that modifies the current snaplet state to be run at\n the end of initialization on the state that was created.  This makes it\n easier to allow one snaplet's state to be modified by another snaplet's\n initializer.  A good example of this is when a snaplet has templates that\n define its views.  The Heist snaplet provides the \u003ccode\u003eaddTemplates\u003c/code\u003e function\n which allows other snaplets to set up their own templates.  \u003ccode\u003eaddTemplates\u003c/code\u003e\n is implemented using this function.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "(v -\u003e EitherT Text IO v) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#addPostInitHook",
        "fct-type": "function",
        "title": "addPostInitHook"
      },
      "index": {
        "description": "Adds an IO action that modifies the current snaplet state to be run at the end of initialization on the state that was created This makes it easier to allow one snaplet state to be modified by another snaplet initializer good example of this is when snaplet has templates that define its views The Heist snaplet provides the addTemplates function which allows other snaplets to set up their own templates addTemplates is implemented using this function",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "addPostInitHook",
        "normalized": "(a-\u003eEitherT Text IO a)-\u003eInitializer b a()",
        "package": "snap",
        "partial": "Post Init Hook",
        "signature": "(v-\u003eEitherT Text IO v)-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:addPostInitHookBase",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of addPostInitHook for when you have things wrapped in a Snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "(Snaplet b -\u003e EitherT Text IO (Snaplet b)) -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#addPostInitHookBase",
        "fct-type": "function",
        "title": "addPostInitHookBase"
      },
      "index": {
        "description": "Variant of addPostInitHook for when you have things wrapped in Snaplet",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "addPostInitHookBase",
        "normalized": "(Snaplet a-\u003eEitherT Text IO(Snaplet a))-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Post Init Hook Base",
        "signature": "(Snaplet b-\u003eEitherT Text IO(Snaplet b))-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:addRoutes",
      "description": {
        "fct-descr": "\u003cp\u003eAdds routing to the current \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e.  The new routes are merged with\n the main routing section and take precedence over existing routing that was\n previously defined.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "[(ByteString, Handler b v ())] -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#addRoutes",
        "fct-type": "function",
        "title": "addRoutes"
      },
      "index": {
        "description": "Adds routing to the current Handler The new routes are merged with the main routing section and take precedence over existing routing that was previously defined",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "addRoutes",
        "normalized": "[(ByteString,Handler a b())]-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Routes",
        "signature": "[(ByteString,Handler b v())]-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:bracketHandler",
      "description": {
        "fct-descr": "\u003cp\u003eThis function brackets a Handler action in resource acquisition and\n release.  Like \u003ccode\u003e\u003ca\u003ebracketSnap\u003c/a\u003e\u003c/code\u003e,  this is provided because MonadCatchIO's\n \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e function doesn't work properly in the case of a short-circuit\n return from the action being bracketed.\n\u003c/p\u003e\u003cp\u003eIn order to prevent confusion regarding the effects of the\n aquisition and release actions on the Handler state, this function\n doesn't accept Handler actions for the acquire or release actions.\n\u003c/p\u003e\u003cp\u003eThis function will run the release action in all cases where the\n acquire action succeeded.  This includes the following behaviors\n from the bracketed Snap action.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Normal completion\n\u003c/li\u003e\u003cli\u003e Short-circuit completion, either from calling \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efinishWith\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e An exception being thrown.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "IO a -\u003e (a -\u003e IO x) -\u003e (a -\u003e Handler b v c) -\u003e Handler b v c",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#bracketHandler",
        "fct-type": "function",
        "title": "bracketHandler"
      },
      "index": {
        "description": "This function brackets Handler action in resource acquisition and release Like bracketSnap this is provided because MonadCatchIO bracket function doesn work properly in the case of short-circuit return from the action being bracketed In order to prevent confusion regarding the effects of the aquisition and release actions on the Handler state this function doesn accept Handler actions for the acquire or release actions This function will run the release action in all cases where the acquire action succeeded This includes the following behaviors from the bracketed Snap action Normal completion Short-circuit completion either from calling fail or finishWith An exception being thrown",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "bracketHandler",
        "normalized": "IO a-\u003e(a-\u003eIO b)-\u003e(a-\u003eHandler c d e)-\u003eHandler c d e",
        "package": "snap",
        "partial": "Handler",
        "signature": "IO a-\u003e(a-\u003eIO x)-\u003e(a-\u003eHandler b v c)-\u003eHandler b v c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:combineConfig",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a configuration and a snap handler, complete it and produce the\n completed configuration as well as a new toplevel handler with things like\n compression and a 500 handler set up.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Config Snap a -\u003e Snap () -\u003e IO (Config Snap a, Snap ())",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#combineConfig",
        "fct-type": "function",
        "title": "combineConfig"
      },
      "index": {
        "description": "Given configuration and snap handler complete it and produce the completed configuration as well as new toplevel handler with things like compression and handler set up",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "combineConfig",
        "normalized": "Config Snap a-\u003eSnap()-\u003eIO(Config Snap a,Snap())",
        "package": "snap",
        "partial": "Config",
        "signature": "Config Snap a-\u003eSnap()-\u003eIO(Config Snap a,Snap())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:embedSnaplet",
      "description": {
        "fct-descr": "\u003cp\u003eRuns another snaplet's initializer and returns the initialized Snaplet\n value.  The difference between this and \u003ccode\u003e\u003ca\u003enestSnaplet\u003c/a\u003e\u003c/code\u003e is the first type\n parameter in the third argument.  The \"v1 v1\" makes the child snaplet\n think that it is the top-level state, which means that it will not be able\n to use functionality provided by snaplets included above it in the snaplet\n tree. This strongly isolates the child snaplet, and allows you to eliminate\n the b type variable.  The embedded snaplet can still get functionality\n from other snaplets, but only if it nests or embeds the snaplet itself.\n\u003c/p\u003e\u003cp\u003eNote that this function does not change where this snaplet is located in\n the filesystem.  The snaplet directory structure convention stays the same.\n Also, embedSnaplet limits the ways that snaplets can interact, so we\n usually recommend using nestSnaplet instead.  However, we provide this\n function because sometimes reduced flexibility is useful.  In short, if\n you don't understand what this function does for you from looking at its\n type, you probably don't want to use it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e SnapletLens v v1-\u003e SnapletInit v1 v1-\u003e Initializer b v (Snaplet v1)",
        "fct-type": "function",
        "title": "embedSnaplet"
      },
      "index": {
        "description": "Runs another snaplet initializer and returns the initialized Snaplet value The difference between this and nestSnaplet is the first type parameter in the third argument The v1 v1 makes the child snaplet think that it is the top-level state which means that it will not be able to use functionality provided by snaplets included above it in the snaplet tree This strongly isolates the child snaplet and allows you to eliminate the type variable The embedded snaplet can still get functionality from other snaplets but only if it nests or embeds the snaplet itself Note that this function does not change where this snaplet is located in the filesystem The snaplet directory structure convention stays the same Also embedSnaplet limits the ways that snaplets can interact so we usually recommend using nestSnaplet instead However we provide this function because sometimes reduced flexibility is useful In short if you don understand what this function does for you from looking at its type you probably don want to use it",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "embedSnaplet",
        "normalized": "ByteString-\u003eSnapletLens a a-\u003eSnapletInit a a-\u003eInitializer b a(Snaplet a)",
        "package": "snap",
        "partial": "Snaplet",
        "signature": "ByteString-\u003eSnapletLens v v-\u003eSnapletInit v v-\u003eInitializer b v(Snaplet v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:failIfNotLocal",
      "description": {
        "fct-descr": "\u003cp\u003ePass if the request is not coming from localhost.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "m b -\u003e m b",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#failIfNotLocal",
        "fct-type": "function",
        "title": "failIfNotLocal"
      },
      "index": {
        "description": "Pass if the request is not coming from localhost",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "failIfNotLocal",
        "normalized": "a b-\u003ea b",
        "package": "snap",
        "partial": "If Not Local",
        "signature": "m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getEnvironment",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current environment string.  This will be the\n environment given to \u003ccode\u003e\u003ca\u003erunSnaplet\u003c/a\u003e\u003c/code\u003e or from the command line when\n using \u003ccode\u003e\u003ca\u003eserveSnaplet\u003c/a\u003e\u003c/code\u003e.  Usefully for changing behavior during\n development and testing.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Initializer b v String",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#getEnvironment",
        "fct-type": "function",
        "title": "getEnvironment"
      },
      "index": {
        "description": "Return the current environment string This will be the environment given to runSnaplet or from the command line when using serveSnaplet Usefully for changing behavior during development and testing",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getEnvironment",
        "normalized": "",
        "package": "snap",
        "partial": "Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getLens",
      "description": {
        "fct-descr": "\u003cp\u003eGets the lens for the current snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "m b v (SnapletLens (Snaplet b) v)",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getLens",
        "fct-type": "method",
        "title": "getLens"
      },
      "index": {
        "description": "Gets the lens for the current snaplet",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getLens",
        "normalized": "",
        "package": "snap",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getOpaqueConfig",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current snaplet's opaque config data type.  You'll only use\n this function when writing MonadSnaplet instances.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "m b v SnapletConfig",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getOpaqueConfig",
        "fct-type": "method",
        "title": "getOpaqueConfig"
      },
      "index": {
        "description": "Gets the current snaplet opaque config data type You ll only use this function when writing MonadSnaplet instances",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getOpaqueConfig",
        "normalized": "",
        "package": "snap",
        "partial": "Opaque Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getRoutePattern",
      "description": {
        "fct-descr": "\u003cp\u003eGets the route pattern that matched for the handler.  This lets you find\n out exactly which of the strings you used in addRoutes matched.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Handler b v (Maybe ByteString)",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getRoutePattern",
        "fct-type": "function",
        "title": "getRoutePattern"
      },
      "index": {
        "description": "Gets the route pattern that matched for the handler This lets you find out exactly which of the strings you used in addRoutes matched",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getRoutePattern",
        "normalized": "",
        "package": "snap",
        "partial": "Route Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getRoutes",
      "description": {
        "fct-descr": "\u003cp\u003eLets you retrieve the list of routes currently set up by an Initializer.\n This can be useful in debugging.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Initializer b v [ByteString]",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#getRoutes",
        "fct-type": "function",
        "title": "getRoutes"
      },
      "index": {
        "description": "Lets you retrieve the list of routes currently set up by an Initializer This can be useful in debugging",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getRoutes",
        "normalized": "Initializer a b[ByteString]",
        "package": "snap",
        "partial": "Routes",
        "signature": "Initializer b v[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletAncestry",
      "description": {
        "fct-descr": "\u003cp\u003eGets a list of the names of snaplets that are direct ancestors of the\n current snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "m b v [Text]",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getSnapletAncestry",
        "fct-type": "function",
        "title": "getSnapletAncestry"
      },
      "index": {
        "description": "Gets list of the names of snaplets that are direct ancestors of the current snaplet",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getSnapletAncestry",
        "normalized": "a b c[Text]",
        "package": "snap",
        "partial": "Snaplet Ancestry",
        "signature": "m b v[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletDescription",
      "description": {
        "fct-descr": "\u003cp\u003eGets a human readable description of the snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "m b v Text",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getSnapletDescription",
        "fct-type": "function",
        "title": "getSnapletDescription"
      },
      "index": {
        "description": "Gets human readable description of the snaplet",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getSnapletDescription",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletFilePath",
      "description": {
        "fct-descr": "\u003cp\u003eGets the snaplet's path on the filesystem.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "m b v FilePath",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getSnapletFilePath",
        "fct-type": "function",
        "title": "getSnapletFilePath"
      },
      "index": {
        "description": "Gets the snaplet path on the filesystem",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getSnapletFilePath",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletName",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current snaple's name.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "m b v (Maybe Text)",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getSnapletName",
        "fct-type": "function",
        "title": "getSnapletName"
      },
      "index": {
        "description": "Gets the current snaple name",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getSnapletName",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletRootURL",
      "description": {
        "fct-descr": "\u003cp\u003eGets the base URL for the current snaplet.  Directories get added to\n the current snaplet path by calls to \u003ccode\u003enestSnaplet\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "m b v ByteString",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getSnapletRootURL",
        "fct-type": "function",
        "title": "getSnapletRootURL"
      },
      "index": {
        "description": "Gets the base URL for the current snaplet Directories get added to the current snaplet path by calls to nestSnaplet",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getSnapletRootURL",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet Root URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletState",
      "description": {
        "fct-descr": "\u003cp\u003eGets the \u003ccode\u003eSnaplet v\u003c/code\u003e from the current snaplet's state.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Handler b v (Snaplet v)",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getSnapletState",
        "fct-type": "function",
        "title": "getSnapletState"
      },
      "index": {
        "description": "Gets the Snaplet from the current snaplet state",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getSnapletState",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getSnapletUserConfig",
      "description": {
        "fct-descr": "\u003cp\u003eGets the config data structure for the current snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "m b v Config",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getSnapletUserConfig",
        "fct-type": "function",
        "title": "getSnapletUserConfig"
      },
      "index": {
        "description": "Gets the config data structure for the current snaplet",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getSnapletUserConfig",
        "normalized": "",
        "package": "snap",
        "partial": "Snaplet User Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:getsSnapletState",
      "description": {
        "fct-descr": "\u003cp\u003eGets the \u003ccode\u003eSnaplet v\u003c/code\u003e from the current snaplet's state and applies a\n function to it.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "(Snaplet v -\u003e b) -\u003e Handler b1 v b",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#getsSnapletState",
        "fct-type": "function",
        "title": "getsSnapletState"
      },
      "index": {
        "description": "Gets the Snaplet from the current snaplet state and applies function to it",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "getsSnapletState",
        "normalized": "(Snaplet a-\u003eb)-\u003eHandler b a b",
        "package": "snap",
        "partial": "Snaplet State",
        "signature": "(Snaplet v-\u003eb)-\u003eHandler b v b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:loadAppConfig",
      "description": {
        "fct-descr": "\u003cp\u003eAllows you to get all of your app's config data in the IO monad without\n the web server infrastructure.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "FileName-\u003e FilePath-\u003e IO Config",
        "fct-type": "function",
        "title": "loadAppConfig"
      },
      "index": {
        "description": "Allows you to get all of your app config data in the IO monad without the web server infrastructure",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "loadAppConfig",
        "normalized": "FileName-\u003eFilePath-\u003eIO Config",
        "package": "snap",
        "partial": "App Config",
        "signature": "FileName-\u003eFilePath-\u003eIO Config"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:makeSnaplet",
      "description": {
        "fct-descr": "\u003cp\u003eAll snaplet initializers must be wrapped in a call to \u003ccode\u003emakeSnaplet\u003c/code\u003e,\n which handles standardized housekeeping common to all snaplets.\n Common usage will look something like\n this:\n\u003c/p\u003e\u003cpre\u003e\n fooInit :: SnapletInit b Foo\n fooInit = makeSnaplet \"foo\" \"An example snaplet\" Nothing $ do\n     -- Your initializer code here\n     return $ Foo 42\n\u003c/pre\u003e\u003cp\u003eNote that you're writing your initializer code in the Initializer monad,\n and makeSnaplet converts it into an opaque SnapletInit type.  This allows\n us to use the type system to ensure that the API is used correctly.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Text-\u003e Text-\u003e Maybe (IO FilePath)-\u003e Initializer b v v-\u003e SnapletInit b v",
        "fct-type": "function",
        "title": "makeSnaplet"
      },
      "index": {
        "description": "All snaplet initializers must be wrapped in call to makeSnaplet which handles standardized housekeeping common to all snaplets Common usage will look something like this fooInit SnapletInit Foo fooInit makeSnaplet foo An example snaplet Nothing do Your initializer code here return Foo Note that you re writing your initializer code in the Initializer monad and makeSnaplet converts it into an opaque SnapletInit type This allows us to use the type system to ensure that the API is used correctly",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "makeSnaplet",
        "normalized": "Text-\u003eText-\u003eMaybe(IO FilePath)-\u003eInitializer a b b-\u003eSnapletInit a b",
        "package": "snap",
        "partial": "Snaplet",
        "signature": "Text-\u003eText-\u003eMaybe(IO FilePath)-\u003eInitializer b v v-\u003eSnapletInit b v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:modifyMaster",
      "description": {
        "fct-descr": "\u003cp\u003eLets you change a snaplet's initial state.  It's alomst like a reload,\n except that it doesn't run the initializer.  It just modifies the result of\n the initializer.  This can be used to let you define actions for reloading\n individual snaplets.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "v -\u003e Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#modifyMaster",
        "fct-type": "function",
        "title": "modifyMaster"
      },
      "index": {
        "description": "Lets you change snaplet initial state It alomst like reload except that it doesn run the initializer It just modifies the result of the initializer This can be used to let you define actions for reloading individual snaplets",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "modifyMaster",
        "normalized": "a-\u003eHandler b a()",
        "package": "snap",
        "partial": "Master",
        "signature": "v-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:modifySnapletState",
      "description": {
        "fct-descr": "\u003cp\u003eModifies the \u003ccode\u003eSnaplet v\u003c/code\u003e in the current snaplet's state.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "(Snaplet v -\u003e Snaplet v) -\u003e Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#modifySnapletState",
        "fct-type": "function",
        "title": "modifySnapletState"
      },
      "index": {
        "description": "Modifies the Snaplet in the current snaplet state",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "modifySnapletState",
        "normalized": "(Snaplet a-\u003eSnaplet a)-\u003eHandler b a()",
        "package": "snap",
        "partial": "Snaplet State",
        "signature": "(Snaplet v-\u003eSnaplet v)-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:nameSnaplet",
      "description": {
        "fct-descr": "\u003cp\u003eSets a snaplet's name.  All snaplets have a default name set by the\n snaplet author.  This function allows you to override that name.  You will\n have to do this if you have more than one instance of the same kind of\n snaplet because snaplet names must be unique.  This function must\n immediately surround the snaplet's initializer.  For example:\n\u003c/p\u003e\u003cpre\u003efooState \u003c- nestSnaplet \"fooA\" $ nameSnaplet \"myFoo\" $ fooInit\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Text-\u003e SnapletInit b v-\u003e SnapletInit b v",
        "fct-type": "function",
        "title": "nameSnaplet"
      },
      "index": {
        "description": "Sets snaplet name All snaplets have default name set by the snaplet author This function allows you to override that name You will have to do this if you have more than one instance of the same kind of snaplet because snaplet names must be unique This function must immediately surround the snaplet initializer For example fooState nestSnaplet fooA nameSnaplet myFoo fooInit",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "nameSnaplet",
        "normalized": "Text-\u003eSnapletInit a b-\u003eSnapletInit a b",
        "package": "snap",
        "partial": "Snaplet",
        "signature": "Text-\u003eSnapletInit b v-\u003eSnapletInit b v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:nestSnaplet",
      "description": {
        "fct-descr": "\u003cp\u003eRuns another snaplet's initializer and returns the initialized Snaplet\n value.  Calling an initializer with nestSnaplet gives the nested snaplet\n access to the same base state that the current snaplet has.  This makes it\n possible for the child snaplet to make use of functionality provided by\n sibling snaplets.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "ByteString-\u003e SnapletLens v v1-\u003e SnapletInit b v1-\u003e Initializer b v (Snaplet v1)",
        "fct-type": "function",
        "title": "nestSnaplet"
      },
      "index": {
        "description": "Runs another snaplet initializer and returns the initialized Snaplet value Calling an initializer with nestSnaplet gives the nested snaplet access to the same base state that the current snaplet has This makes it possible for the child snaplet to make use of functionality provided by sibling snaplets",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "nestSnaplet",
        "normalized": "ByteString-\u003eSnapletLens a a-\u003eSnapletInit b a-\u003eInitializer b a(Snaplet a)",
        "package": "snap",
        "partial": "Snaplet",
        "signature": "ByteString-\u003eSnapletLens v v-\u003eSnapletInit b v-\u003eInitializer b v(Snaplet v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:onUnload",
      "description": {
        "fct-descr": "\u003cp\u003eAttaches an unload handler to the snaplet.  The unload handler will be\n called when the server shuts down, or is reloaded.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "IO () -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#onUnload",
        "fct-type": "function",
        "title": "onUnload"
      },
      "index": {
        "description": "Attaches an unload handler to the snaplet The unload handler will be called when the server shuts down or is reloaded",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "onUnload",
        "normalized": "IO()-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Unload",
        "signature": "IO()-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:printInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInitializers should use this function for all informational or error\n messages to be displayed to the user.  On application startup they will be\n sent to the console.  When executed from the reloader, they will be sent\n back to the user in the HTTP response.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Text -\u003e Initializer b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#printInfo",
        "fct-type": "function",
        "title": "printInfo"
      },
      "index": {
        "description": "Initializers should use this function for all informational or error messages to be displayed to the user On application startup they will be sent to the console When executed from the reloader they will be sent back to the user in the HTTP response",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "printInfo",
        "normalized": "Text-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Info",
        "signature": "Text-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:putSnapletState",
      "description": {
        "fct-descr": "\u003cp\u003ePuts a new \u003ccode\u003eSnaplet v\u003c/code\u003e in the current snaplet's state.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Snaplet v -\u003e Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#putSnapletState",
        "fct-type": "function",
        "title": "putSnapletState"
      },
      "index": {
        "description": "Puts new Snaplet in the current snaplet state",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "putSnapletState",
        "normalized": "Snaplet a-\u003eHandler b a()",
        "package": "snap",
        "partial": "Snaplet State",
        "signature": "Snaplet v-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:reloadSite",
      "description": {
        "fct-descr": "\u003cp\u003eHandler that reloads the site.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#reloadSite",
        "fct-type": "function",
        "title": "reloadSite"
      },
      "index": {
        "description": "Handler that reloads the site",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "reloadSite",
        "normalized": "Handler a b()",
        "package": "snap",
        "partial": "Site",
        "signature": "Handler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:runSnaplet",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an environment and a Snaplet initializer, produce a concatenated log\n of all messages generated during initialization, a snap handler, and a\n cleanup action.  The environment is an arbitrary string such as \"devel\" or\n \"production\".  This string is used to determine the name of the\n configuration files used by each snaplet.  If an environment of Nothing is\n used, then runSnaplet defaults to \"devel\".\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Maybe String -\u003e SnapletInit b b -\u003e IO (Text, Snap (), IO ())",
        "fct-source": "src/Snap-Snaplet-Internal-Initializer.html#runSnaplet",
        "fct-type": "function",
        "title": "runSnaplet"
      },
      "index": {
        "description": "Given an environment and Snaplet initializer produce concatenated log of all messages generated during initialization snap handler and cleanup action The environment is an arbitrary string such as devel or production This string is used to determine the name of the configuration files used by each snaplet If an environment of Nothing is used then runSnaplet defaults to devel",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "runSnaplet",
        "normalized": "Maybe String-\u003eSnapletInit a a-\u003eIO(Text,Snap(),IO())",
        "package": "snap",
        "partial": "Snaplet",
        "signature": "Maybe String-\u003eSnapletInit b b-\u003eIO(Text,Snap(),IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:serveSnaplet",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize and run a Snaplet. This function parses command-line arguments,\n runs the given Snaplet initializer, and starts an HTTP server running the\n Snaplet's toplevel \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "Config Snap AppConfig-\u003e SnapletInit b b-\u003e IO ()",
        "fct-type": "function",
        "title": "serveSnaplet"
      },
      "index": {
        "description": "Initialize and run Snaplet This function parses command-line arguments runs the given Snaplet initializer and starts an HTTP server running the Snaplet toplevel Handler",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "serveSnaplet",
        "normalized": "Config Snap AppConfig-\u003eSnapletInit a a-\u003eIO()",
        "package": "snap",
        "partial": "Snaplet",
        "signature": "Config Snap AppConfig-\u003eSnapletInit b b-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:setRoutePattern",
      "description": {
        "fct-descr": "\u003cp\u003eSets the route pattern that matched for the handler.  Use this when to\n override the default pattern which is the key to the alist passed to\n addRoutes.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "ByteString -\u003e Handler b v ()",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#setRoutePattern",
        "fct-type": "function",
        "title": "setRoutePattern"
      },
      "index": {
        "description": "Sets the route pattern that matched for the handler Use this when to override the default pattern which is the key to the alist passed to addRoutes",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "setRoutePattern",
        "normalized": "ByteString-\u003eHandler a b()",
        "package": "snap",
        "partial": "Route Pattern",
        "signature": "ByteString-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:snapletConfig",
      "description": {
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "forall s.  Lens' (Snaplet s) SnapletConfig",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#snapletConfig",
        "fct-type": "function",
        "title": "snapletConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "snapletConfig",
        "normalized": "",
        "package": "snap",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:snapletURL",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a url relative to the current snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "ByteString -\u003e m b v ByteString",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#snapletURL",
        "fct-type": "function",
        "title": "snapletURL"
      },
      "index": {
        "description": "Constructs url relative to the current snaplet",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "snapletURL",
        "normalized": "ByteString-\u003ea b c ByteString",
        "package": "snap",
        "partial": "URL",
        "signature": "ByteString-\u003em b v ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:snapletValue",
      "description": {
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "forall s.  Lens' (Snaplet s) s",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#snapletValue",
        "fct-type": "function",
        "title": "snapletValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "snapletValue",
        "normalized": "",
        "package": "snap",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:subSnaplet",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a lens of the type you get from makeLenses to an similar lens\n that is more suitable for internal use.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "SnapletLens a b -\u003e SnapletLens (Snaplet a) b",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#subSnaplet",
        "fct-type": "function",
        "title": "subSnaplet"
      },
      "index": {
        "description": "Transforms lens of the type you get from makeLenses to an similar lens that is more suitable for internal use",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "subSnaplet",
        "normalized": "SnapletLens a b-\u003eSnapletLens(Snaplet a)b",
        "package": "snap",
        "partial": "Snaplet",
        "signature": "SnapletLens a b-\u003eSnapletLens(Snaplet a)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a child snaplet action in the current snaplet's context.  If you\n think about snaplet lenses using a filesystem path metaphor, the lens\n supplied to this snaplet must be a relative path.  In other words, the\n lens's base state must be the same as the current snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "with",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#with",
        "fct-type": "method",
        "title": "with"
      },
      "index": {
        "description": "Runs child snaplet action in the current snaplet context If you think about snaplet lenses using filesystem path metaphor the lens supplied to this snaplet must be relative path In other words the lens base state must be the same as the current snaplet",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "with",
        "normalized": "",
        "package": "snap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:with-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e accepting a lens from snaplet to snaplet.  Unlike\n the lens used in the above \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e function, this lens formulation has\n an identity, which makes it useful in certain circumstances.  The\n lenses generated by \u003ccode\u003e\u003ca\u003emakeLenses\u003c/a\u003e\u003c/code\u003e will not work with this function,\n however the lens returned by \u003ccode\u003e\u003ca\u003egetLens\u003c/a\u003e\u003c/code\u003e will.\n\u003c/p\u003e\u003cpre\u003ewith = with' . subSnaplet\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet v) v' -\u003e m b v' a -\u003e m b v a",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#with%27",
        "fct-type": "method",
        "title": "with'"
      },
      "index": {
        "description": "variant of with accepting lens from snaplet to snaplet Unlike the lens used in the above with function this lens formulation has an identity which makes it useful in certain circumstances The lenses generated by makeLenses will not work with this function however the lens returned by getLens will with with subSnaplet",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "with'",
        "normalized": "SnapletLens(Snaplet a)b-\u003ec d b e-\u003ec d a e",
        "package": "snap",
        "partial": "",
        "signature": "SnapletLens(Snaplet v)v'-\u003em b v' a-\u003em b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:withTop",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e but doesn't impose the requirement that the action\n being run be a descendant of the current snaplet.  Using our filesystem\n metaphor again, the lens for this function must be an absolute\n path--it's base must be the same as the current base.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "withTop",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#withTop",
        "fct-type": "method",
        "title": "withTop"
      },
      "index": {
        "description": "Like with but doesn impose the requirement that the action being run be descendant of the current snaplet Using our filesystem metaphor again the lens for this function must be an absolute path--it base must be the same as the current base",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "withTop",
        "normalized": "",
        "package": "snap",
        "partial": "Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:withTop-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe absolute version of \u003ccode\u003e\u003ca\u003ewith'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "SnapletLens (Snaplet b) v' -\u003e m b v' a -\u003e m b v a",
        "fct-source": "src/Snap-Snaplet-Internal-Types.html#withTop%27",
        "fct-type": "method",
        "title": "withTop'"
      },
      "index": {
        "description": "The absolute version of with",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "withTop'",
        "normalized": "SnapletLens(Snaplet a)b-\u003ec a b d-\u003ec a e d",
        "package": "snap",
        "partial": "Top'",
        "signature": "SnapletLens(Snaplet b)v'-\u003em b v' a-\u003em b v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap-Snaplet.html#v:wrapSite",
      "description": {
        "fct-descr": "\u003cp\u003eWraps the \u003cem\u003ebase\u003c/em\u003e snaplet's routing in another handler, allowing you to run\n code before and after all routes in an application.\n\u003c/p\u003e\u003cp\u003eHere are some examples of things you might do:\n\u003c/p\u003e\u003cpre\u003e wrapSite (\\site -\u003e logHandlerStart \u003e\u003e site \u003e\u003e logHandlerFinished)\n wrapSite (\\site -\u003e ensureAdminUser \u003e\u003e site)\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet",
        "fct-package": "snap",
        "fct-signature": "(Handler b v () -\u003e Handler b v ())-\u003e Initializer b v ()",
        "fct-type": "function",
        "title": "wrapSite"
      },
      "index": {
        "description": "Wraps the base snaplet routing in another handler allowing you to run code before and after all routes in an application Here are some examples of things you might do wrapSite site logHandlerStart site logHandlerFinished wrapSite site ensureAdminUser site",
        "hierarchy": "Snap Snaplet",
        "module": "Snap.Snaplet",
        "name": "wrapSite",
        "normalized": "(Handler a b()-\u003eHandler a b())-\u003eInitializer a b()",
        "package": "snap",
        "partial": "Site",
        "signature": "(Handler b v()-\u003eHandler b v())-\u003eInitializer b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap/docs/Snap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides convenience exports of the modules most commonly used\nwhen developing with the Snap Framework.  For documentation about Snaplets,\nsee \u003ca\u003eSnap.Snaplet\u003c/a\u003e.  For the core web server API, see \u003ca\u003eSnap.Core\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap",
        "fct-package": "snap",
        "fct-signature": "module",
        "fct-source": "src/Snap.html",
        "fct-type": "module",
        "title": "Snap"
      },
      "index": {
        "description": "This module provides convenience exports of the modules most commonly used when developing with the Snap Framework For documentation about Snaplets see Snap.Snaplet For the core web server API see Snap.Core",
        "hierarchy": "Snap",
        "module": "Snap",
        "name": "Snap",
        "normalized": "",
        "package": "snap",
        "partial": "Snap",
        "signature": ""
      }
    }
  }
]