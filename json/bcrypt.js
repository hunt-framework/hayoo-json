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
        "word": "bcrypt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for hashing passwords with bcrypt.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Crypto.BCrypt\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet p = Data.ByteString.Char8.pack\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehashPasswordUsingPolicy slowerBcryptHashingPolicy (p \"mypassword\")\n\u003c/code\u003e\u003c/strong\u003eJust \"$2y$14$xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY/Sh6\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003evalidatePassword (p \"$2y$14$xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY/Sh6\") (p \"badpass\")\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003evalidatePassword (p \"$2y$14$xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY/Sh6\") (p \"mypassword\")\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehashUsesPolicy slowerBcryptHashingPolicy (p \"$2y$14$xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY/Sh6\")\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehashUsesPolicy fastBcryptHashingPolicy (p \"$2y$14$xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY/Sh6\")\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Crypto.BCrypt",
          "name": "BCrypt",
          "package": "bcrypt",
          "source": "src/Crypto-BCrypt.html",
          "type": "module"
        },
        "index": {
          "description": "module for hashing passwords with bcrypt import Crypto.BCrypt let Data.ByteString.Char8.pack hashPasswordUsingPolicy slowerBcryptHashingPolicy mypassword Just xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY Sh6 validatePassword xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY Sh6 badpass False validatePassword xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY Sh6 mypassword True hashUsesPolicy slowerBcryptHashingPolicy xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY Sh6 True hashUsesPolicy fastBcryptHashingPolicy xBBZdWgTa8fSU1aPFP5IxeVdUKfT7hUDjmusZEAiNBiYaYEGY Sh6 False",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "BCrypt",
          "package": "bcrypt",
          "partial": "BCrypt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hashing policy defines the type of password hashing to use.\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "HashingPolicy",
          "package": "bcrypt",
          "source": "src/Crypto-BCrypt.html#HashingPolicy",
          "type": "data"
        },
        "index": {
          "description": "hashing policy defines the type of password hashing to use",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "HashingPolicy",
          "package": "bcrypt",
          "partial": "Hashing Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#t:HashingPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.BCrypt",
          "name": "HashingPolicy",
          "package": "bcrypt",
          "signature": "HashingPolicy",
          "source": "src/Crypto-BCrypt.html#HashingPolicy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "HashingPolicy",
          "package": "bcrypt",
          "partial": "Hashing Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:HashingPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA policy that allows passwords to be hashed reasonably quickly, but for that\n   reason isn't suitable for high security applications.\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "fastBcryptHashingPolicy",
          "package": "bcrypt",
          "signature": "HashingPolicy",
          "source": "src/Crypto-BCrypt.html#fastBcryptHashingPolicy",
          "type": "function"
        },
        "index": {
          "description": "policy that allows passwords to be hashed reasonably quickly but for that reason isn suitable for high security applications",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "fastBcryptHashingPolicy",
          "package": "bcrypt",
          "partial": "Bcrypt Hashing Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:fastBcryptHashingPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepares a settings string and salt suitable for use with hashPassword.\n   Takes a prefix specifying the type of hash, an integer specifying the\n   computational cost of hashing (4-32, or 0 for a low default), and a\n   string of random entropy.\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "genSalt",
          "package": "bcrypt",
          "signature": "ByteString -\u003e Int -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-BCrypt.html#genSalt",
          "type": "function"
        },
        "index": {
          "description": "Prepares settings string and salt suitable for use with hashPassword Takes prefix specifying the type of hash an integer specifying the computational cost of hashing or for low default and string of random entropy",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "genSalt",
          "normalized": "ByteString-\u003eInt-\u003eByteString-\u003eMaybe ByteString",
          "package": "bcrypt",
          "partial": "Salt",
          "signature": "ByteString-\u003eInt-\u003eByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:genSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a salt using a policy, sampling from a system-appropriate source.\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "genSaltUsingPolicy",
          "package": "bcrypt",
          "signature": "HashingPolicy -\u003e IO (Maybe ByteString)",
          "source": "src/Crypto-BCrypt.html#genSaltUsingPolicy",
          "type": "function"
        },
        "index": {
          "description": "Generates salt using policy sampling from system-appropriate source",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "genSaltUsingPolicy",
          "normalized": "HashingPolicy-\u003eIO(Maybe ByteString)",
          "package": "bcrypt",
          "partial": "Salt Using Policy",
          "signature": "HashingPolicy-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:genSaltUsingPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHashes a password (first argument) using the settings specified in second\n   argument. The settings describe the hashing variant and salt to use; because\n   the settings are prepended to password hashes, passing in an existing password\n   hash will cause the same settings to be used again.\n   You can create a hash using genSalt.\n   Result: Just hash on success, Nothing on failure (invalid settings).\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "hashPassword",
          "package": "bcrypt",
          "signature": "ByteString -\u003e ByteString -\u003e Maybe ByteString",
          "source": "src/Crypto-BCrypt.html#hashPassword",
          "type": "function"
        },
        "index": {
          "description": "Hashes password first argument using the settings specified in second argument The settings describe the hashing variant and salt to use because the settings are prepended to password hashes passing in an existing password hash will cause the same settings to be used again You can create hash using genSalt Result Just hash on success Nothing on failure invalid settings",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "hashPassword",
          "normalized": "ByteString-\u003eByteString-\u003eMaybe ByteString",
          "package": "bcrypt",
          "partial": "Password",
          "signature": "ByteString-\u003eByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:hashPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHashes a password, using a hashing policy.\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "hashPasswordUsingPolicy",
          "package": "bcrypt",
          "signature": "HashingPolicy -\u003e ByteString -\u003e IO (Maybe ByteString)",
          "source": "src/Crypto-BCrypt.html#hashPasswordUsingPolicy",
          "type": "function"
        },
        "index": {
          "description": "Hashes password using hashing policy",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "hashPasswordUsingPolicy",
          "normalized": "HashingPolicy-\u003eByteString-\u003eIO(Maybe ByteString)",
          "package": "bcrypt",
          "partial": "Password Using Policy",
          "signature": "HashingPolicy-\u003eByteString-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:hashPasswordUsingPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a password hash is consistent with the current policy, or if\n   it should be updated.\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "hashUsesPolicy",
          "package": "bcrypt",
          "signature": "HashingPolicy -\u003e ByteString -\u003e Bool",
          "source": "src/Crypto-BCrypt.html#hashUsesPolicy",
          "type": "function"
        },
        "index": {
          "description": "Check whether password hash is consistent with the current policy or if it should be updated",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "hashUsesPolicy",
          "normalized": "HashingPolicy-\u003eByteString-\u003eBool",
          "package": "bcrypt",
          "partial": "Uses Policy",
          "signature": "HashingPolicy-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:hashUsesPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreferred algorithm - the preferred hash algorithm. $2y$ for bcrypt.\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "preferredHashAlgorithm",
          "package": "bcrypt",
          "signature": "ByteString",
          "source": "src/Crypto-BCrypt.html#HashingPolicy",
          "type": "function"
        },
        "index": {
          "description": "Preferred algorithm the preferred hash algorithm for bcrypt",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "preferredHashAlgorithm",
          "package": "bcrypt",
          "partial": "Hash Algorithm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:preferredHashAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreferred cost - how strong new passwords should be. This is a trade-off\n   between making hasing / checking passwords faster in your system, and making\n   brute forcing passwords harder for an adversary.\n   The intention is that this can be increased as computers get faster.\n   To give a rough indication of the scale of preferredCost,\n     on a 2.6 GHz AMD Athlon machine (64 bit kernel), using a single core:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Cost 4: 139 passwords / second\n\u003c/li\u003e\u003cli\u003e Cost 5: 85 passwords / second\n\u003c/li\u003e\u003cli\u003e Cost 6: 44 passwords / second\n\u003c/li\u003e\u003cli\u003e Cost 7: 23 passwords / second\n\u003c/li\u003e\u003cli\u003e Cost 8: 11 passwords / second\n\u003c/li\u003e\u003cli\u003e Cost 9: 5.7 passwords / second\n\u003c/li\u003e\u003cli\u003e Cost 10: 2.8 passwords / second\n\u003c/li\u003e\u003cli\u003e Cost 11: 1.4 passwords / second\n\u003c/li\u003e\u003cli\u003e Cost 12: 0.72 passwords / second\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Crypto.BCrypt",
          "name": "preferredHashCost",
          "package": "bcrypt",
          "signature": "Int",
          "source": "src/Crypto-BCrypt.html#HashingPolicy",
          "type": "function"
        },
        "index": {
          "description": "Preferred cost how strong new passwords should be This is trade-off between making hasing checking passwords faster in your system and making brute forcing passwords harder for an adversary The intention is that this can be increased as computers get faster To give rough indication of the scale of preferredCost on GHz AMD Athlon machine bit kernel using single core Cost passwords second Cost passwords second Cost passwords second Cost passwords second Cost passwords second Cost passwords second Cost passwords second Cost passwords second Cost passwords second",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "preferredHashCost",
          "package": "bcrypt",
          "partial": "Hash Cost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:preferredHashCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA policy which makes password hashing substantially slower than\n   fastBcryptHashingPolicy, and so makes it more difficult for an adversary to\n   decrypt passwords. In a high security environment, this policy should be\n   regularly reviewed against hardware developments.\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "slowerBcryptHashingPolicy",
          "package": "bcrypt",
          "signature": "HashingPolicy",
          "source": "src/Crypto-BCrypt.html#slowerBcryptHashingPolicy",
          "type": "function"
        },
        "index": {
          "description": "policy which makes password hashing substantially slower than fastBcryptHashingPolicy and so makes it more difficult for an adversary to decrypt passwords In high security environment this policy should be regularly reviewed against hardware developments",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "slowerBcryptHashingPolicy",
          "package": "bcrypt",
          "partial": "Bcrypt Hashing Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:slowerBcryptHashingPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates a password. The first argument is the hashed password, the second is\n   the password attempt.\n   Note: If a password validates successfully, it is a good idea to check if the\n   password is up to the current policy using hashUsesPolicy, and re-hashing it\n   if not.\n\u003c/p\u003e",
          "module": "Crypto.BCrypt",
          "name": "validatePassword",
          "package": "bcrypt",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Crypto-BCrypt.html#validatePassword",
          "type": "function"
        },
        "index": {
          "description": "Validates password The first argument is the hashed password the second is the password attempt Note If password validates successfully it is good idea to check if the password is up to the current policy using hashUsesPolicy and re-hashing it if not",
          "hierarchy": "Crypto BCrypt",
          "module": "Crypto.BCrypt",
          "name": "validatePassword",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "bcrypt",
          "partial": "Password",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bcrypt/docs/Crypto-BCrypt.html#v:validatePassword"
      }
    }
  ]
]