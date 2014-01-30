[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSecurely store hashed, salted passwords. If you need to store and verify\n passwords, there are many wrong ways to do it, most of them all too\n common. Some people store users' passwords in plain text. Then, when an\n attacker manages to get their hands on this file, they have the passwords for\n every user's account. One step up, but still wrong, is to simply hash all\n passwords with SHA1 or something. This is vulnerable to rainbow table and\n dictionary attacks. One step up from that is to hash the password along with\n a unique salt value. This is vulnerable to dictionary attacks, since guessing\n a password is very fast. The right thing to do is to use a slow hash\n function, to add some small but significant delay, that will be negligible\n for legitimate users but prohibitively expensive for someone trying to guess\n passwords by brute force. That is what this library does. It iterates a\n SHA256 hash, with a random salt, a few thousand times. This scheme is known\n as PBKDF1, and is generally considered secure; there is nothing innovative\n happening here.\n\u003c/p\u003e\u003cp\u003eThe API here is very simple. What you store are called \u003cem\u003epassword hashes\u003c/em\u003e.\n They are strings (technically, ByteStrings) that look like this:\n\u003c/p\u003e\u003cpre\u003e \"sha256|12|Ge9pg8a/r4JW356Uux2JHg==|Fdv4jchzDlRAs6WFNUarxLngaittknbaHFFc0k8hAy0=\"\n\u003c/pre\u003e\u003cp\u003eEach password hash shows the algorithm, the strength (more on that later),\n the salt, and the hashed-and-salted password. You store these on your server,\n in a database, for when you need to verify a password. You make a password\n hash with the \u003ccode\u003e\u003ca\u003emakePassword\u003c/a\u003e\u003c/code\u003e function. Here's an example:\n\u003c/p\u003e\u003cpre\u003e \u003e\u003e\u003e makePassword \"hunter2\" 12\n \"sha256|12|lMzlNz0XK9eiPIYPY96QCQ==|1ZJ/R3qLEF0oCBVNtvNKLwZLpXPM7bLEy/Nc6QBxWro=\"\n\u003c/pre\u003e\u003cp\u003eThis will hash the password \u003ccode\u003e\"hunter2\"\u003c/code\u003e, with strength 12, which is a good\n default value. The strength here determines how long the hashing will\n take. When doing the hashing, we iterate the SHA256 hash function\n \u003ccode\u003e2^strength\u003c/code\u003e times, so increasing the strength by 1 makes the hashing take\n twice as long. When computers get faster, you can bump up the strength a\n little bit to compensate. You can strengthen existing password hashes with\n the \u003ccode\u003e\u003ca\u003estrengthenPassword\u003c/a\u003e\u003c/code\u003e function. Note that \u003ccode\u003e\u003ca\u003emakePassword\u003c/a\u003e\u003c/code\u003e needs to generate\n random numbers, so its return type is \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. If you want to avoid\n the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, you can generate your own salt and pass it to\n \u003ccode\u003e\u003ca\u003emakePasswordSalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYour strength value should not be less than 10, and 12 is a good default\n value at the time of this writing, in 2011.\n\u003c/p\u003e\u003cp\u003eOnce you've got your password hashes, the second big thing you need to do\n with them is verify passwords against them. When a user gives you a password,\n you compare it with a password hash using the \u003ccode\u003e\u003ca\u003everifyPassword\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e \u003e\u003e\u003e verifyPassword \"wrong guess\" passwordHash\n False\n \u003e\u003e\u003e verifyPassword \"hunter2\" passwordHash\n True\n\u003c/pre\u003e\u003cp\u003eThese two functions are really all you need. If you want to make existing\n password hashes stronger, you can use \u003ccode\u003e\u003ca\u003estrengthenPassword\u003c/a\u003e\u003c/code\u003e. Just pass it an\n existing password hash and a new strength value, and it will return a new\n password hash with that strength value, which will match the same password as\n the old password hash.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "module",
        "fct-source": "src/Crypto-PasswordStore.html",
        "fct-type": "module",
        "title": "PasswordStore"
      },
      "index": {
        "description": "Securely store hashed salted passwords If you need to store and verify passwords there are many wrong ways to do it most of them all too common Some people store users passwords in plain text Then when an attacker manages to get their hands on this file they have the passwords for every user account One step up but still wrong is to simply hash all passwords with SHA1 or something This is vulnerable to rainbow table and dictionary attacks One step up from that is to hash the password along with unique salt value This is vulnerable to dictionary attacks since guessing password is very fast The right thing to do is to use slow hash function to add some small but significant delay that will be negligible for legitimate users but prohibitively expensive for someone trying to guess passwords by brute force That is what this library does It iterates SHA256 hash with random salt few thousand times This scheme is known as PBKDF1 and is generally considered secure there is nothing innovative happening here The API here is very simple What you store are called password hashes They are strings technically ByteStrings that look like this sha256 Ge9pg8a r4JW356Uux2JHg Fdv4jchzDlRAs6WFNUarxLngaittknbaHFFc0k8hAy0 Each password hash shows the algorithm the strength more on that later the salt and the hashed-and-salted password You store these on your server in database for when you need to verify password You make password hash with the makePassword function Here an example makePassword hunter2 sha256 lMzlNz0XK9eiPIYPY96QCQ ZJ R3qLEF0oCBVNtvNKLwZLpXPM7bLEy Nc6QBxWro This will hash the password hunter2 with strength which is good default value The strength here determines how long the hashing will take When doing the hashing we iterate the SHA256 hash function strength times so increasing the strength by makes the hashing take twice as long When computers get faster you can bump up the strength little bit to compensate You can strengthen existing password hashes with the strengthenPassword function Note that makePassword needs to generate random numbers so its return type is IO ByteString If you want to avoid the IO monad you can generate your own salt and pass it to makePasswordSalt Your strength value should not be less than and is good default value at the time of this writing in Once you ve got your password hashes the second big thing you need to do with them is verify passwords against them When user gives you password you compare it with password hash using the verifyPassword function verifyPassword wrong guess passwordHash False verifyPassword hunter2 passwordHash True These two functions are really all you need If you want to make existing password hashes stronger you can use strengthenPassword Just pass it an existing password hash and new strength value and it will return new password hash with that strength value which will match the same password as the old password hash",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "PasswordStore",
        "normalized": "",
        "package": "pwstore-purehaskell",
        "partial": "Password Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#t:Salt",
      "description": {
        "fct-descr": "\u003cp\u003eA salt is a unique random value which is stored as part of the password\n hash. You can generate a salt with \u003ccode\u003e\u003ca\u003egenSaltIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egenSaltRandom\u003c/a\u003e\u003c/code\u003e, or if you\n really know what you're doing, you can create them from your own ByteString\n values with \u003ccode\u003e\u003ca\u003emakeSalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "data",
        "fct-source": "src/Crypto-PasswordStore.html#Salt",
        "fct-type": "data",
        "title": "Salt"
      },
      "index": {
        "description": "salt is unique random value which is stored as part of the password hash You can generate salt with genSaltIO or genSaltRandom or if you really know what you re doing you can create them from your own ByteString values with makeSalt",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "Salt",
        "normalized": "",
        "package": "pwstore-purehaskell",
        "partial": "Salt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:exportSalt",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The resulting \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e will be\n base64-encoded. Most users will not need to use this function.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "Salt -\u003e ByteString",
        "fct-source": "src/Crypto-PasswordStore.html#exportSalt",
        "fct-type": "function",
        "title": "exportSalt"
      },
      "index": {
        "description": "Convert Salt into ByteString The resulting ByteString will be base64-encoded Most users will not need to use this function",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "exportSalt",
        "normalized": "Salt-\u003eByteString",
        "package": "pwstore-purehaskell",
        "partial": "Salt",
        "signature": "Salt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:genSaltIO",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e from 128 bits of data from \u003ccode\u003e/dev/urandom\u003c/code\u003e, with the\n system RNG as a fallback. This is the function used to generate salts by\n \u003ccode\u003e\u003ca\u003emakePassword\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "IO Salt",
        "fct-source": "src/Crypto-PasswordStore.html#genSaltIO",
        "fct-type": "function",
        "title": "genSaltIO"
      },
      "index": {
        "description": "Generate Salt from bits of data from dev urandom with the system RNG as fallback This is the function used to generate salts by makePassword",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "genSaltIO",
        "normalized": "",
        "package": "pwstore-purehaskell",
        "partial": "Salt IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:genSaltRandom",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e with 128 bits of data taken from a given random number\n generator. Returns the salt and the updated random number generator. This is\n meant to be used with \u003ccode\u003e\u003ca\u003emakePasswordSalt\u003c/a\u003e\u003c/code\u003e by people who would prefer to either\n use their own random number generator or avoid the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "b -\u003e (Salt, b)",
        "fct-source": "src/Crypto-PasswordStore.html#genSaltRandom",
        "fct-type": "function",
        "title": "genSaltRandom"
      },
      "index": {
        "description": "Generate Salt with bits of data taken from given random number generator Returns the salt and the updated random number generator This is meant to be used with makePasswordSalt by people who would prefer to either use their own random number generator or avoid the IO monad",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "genSaltRandom",
        "normalized": "a-\u003e(Salt,a)",
        "package": "pwstore-purehaskell",
        "partial": "Salt Random",
        "signature": "b-\u003e(Salt,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:isPasswordFormatValid",
      "description": {
        "fct-descr": "\u003cp\u003eIs the format of a password hash valid? Attempts to parse a given password\n hash. Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it parses correctly, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "ByteString -\u003e Bool",
        "fct-source": "src/Crypto-PasswordStore.html#isPasswordFormatValid",
        "fct-type": "function",
        "title": "isPasswordFormatValid"
      },
      "index": {
        "description": "Is the format of password hash valid Attempts to parse given password hash Returns True if it parses correctly and False otherwise",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "isPasswordFormatValid",
        "normalized": "ByteString-\u003eBool",
        "package": "pwstore-purehaskell",
        "partial": "Password Format Valid",
        "signature": "ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:makePassword",
      "description": {
        "fct-descr": "\u003cp\u003eHash a password with a given strength (12 is a good default). The output of\n this function can be written directly to a password file or\n database. Generates a salt using high-quality randomness from\n \u003ccode\u003e/dev/urandom\u003c/code\u003e or (if that is not available, for example on Windows)\n \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e, which is included in the hashed output.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "ByteString -\u003e Int -\u003e IO ByteString",
        "fct-source": "src/Crypto-PasswordStore.html#makePassword",
        "fct-type": "function",
        "title": "makePassword"
      },
      "index": {
        "description": "Hash password with given strength is good default The output of this function can be written directly to password file or database Generates salt using high-quality randomness from dev urandom or if that is not available for example on Windows Random which is included in the hashed output",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "makePassword",
        "normalized": "ByteString-\u003eInt-\u003eIO ByteString",
        "package": "pwstore-purehaskell",
        "partial": "Password",
        "signature": "ByteString-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:makePasswordSalt",
      "description": {
        "fct-descr": "\u003cp\u003eHash a password with a given strength (12 is a good default), using a given\n salt. The output of this function can be written directly to a password file\n or database. Example:\n\u003c/p\u003e\u003cpre\u003e \u003e\u003e\u003e makePasswordSalt \"hunter2\" \"72cd18b5ebfe6e96\" 12\n \"sha256|12|72cd18b5ebfe6e96|Xkki10Vus/a2SN/LgCVLTT5R30lvHSCCxH6QboV+U3E=\"\n\u003c/pre\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "ByteString -\u003e Salt -\u003e Int -\u003e ByteString",
        "fct-source": "src/Crypto-PasswordStore.html#makePasswordSalt",
        "fct-type": "function",
        "title": "makePasswordSalt"
      },
      "index": {
        "description": "Hash password with given strength is good default using given salt The output of this function can be written directly to password file or database Example makePasswordSalt hunter2 cd18b5ebfe6e96 sha256 cd18b5ebfe6e96 Xkki10Vus a2SN LgCVLTT5R30lvHSCCxH6QboV U3E",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "makePasswordSalt",
        "normalized": "ByteString-\u003eSalt-\u003eInt-\u003eByteString",
        "package": "pwstore-purehaskell",
        "partial": "Password Salt",
        "signature": "ByteString-\u003eSalt-\u003eInt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:makeSalt",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The input must be at least 8\n characters, and can contain arbitrary bytes. Most users will not need to use\n this function.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "ByteString -\u003e Salt",
        "fct-source": "src/Crypto-PasswordStore.html#makeSalt",
        "fct-type": "function",
        "title": "makeSalt"
      },
      "index": {
        "description": "Create Salt from ByteString The input must be at least characters and can contain arbitrary bytes Most users will not need to use this function",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "makeSalt",
        "normalized": "ByteString-\u003eSalt",
        "package": "pwstore-purehaskell",
        "partial": "Salt",
        "signature": "ByteString-\u003eSalt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:passwordStrength",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the strength of a password hash.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "ByteString -\u003e Int",
        "fct-source": "src/Crypto-PasswordStore.html#passwordStrength",
        "fct-type": "function",
        "title": "passwordStrength"
      },
      "index": {
        "description": "Return the strength of password hash",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "passwordStrength",
        "normalized": "ByteString-\u003eInt",
        "package": "pwstore-purehaskell",
        "partial": "Strength",
        "signature": "ByteString-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:strengthenPassword",
      "description": {
        "fct-descr": "\u003cp\u003eTry to strengthen a password hash, by hashing it some more\n times. \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrengthenPassword\u003c/a\u003e\u003c/code\u003e pwHash new_strength\u003c/code\u003e will return a new password\n hash with strength at least \u003ccode\u003enew_strength\u003c/code\u003e. If the password hash already has\n strength greater than or equal to \u003ccode\u003enew_strength\u003c/code\u003e, then it is returned\n unmodified. If the password hash is invalid and does not parse, it will be\n returned without comment.\n\u003c/p\u003e\u003cp\u003eThis function can be used to periodically update your password database when\n computers get faster, in order to keep up with Moore's law. This isn't hugely\n important, but it's a good idea.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "ByteString -\u003e Int -\u003e ByteString",
        "fct-source": "src/Crypto-PasswordStore.html#strengthenPassword",
        "fct-type": "function",
        "title": "strengthenPassword"
      },
      "index": {
        "description": "Try to strengthen password hash by hashing it some more times strengthenPassword pwHash new strength will return new password hash with strength at least new strength If the password hash already has strength greater than or equal to new strength then it is returned unmodified If the password hash is invalid and does not parse it will be returned without comment This function can be used to periodically update your password database when computers get faster in order to keep up with Moore law This isn hugely important but it good idea",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "strengthenPassword",
        "normalized": "ByteString-\u003eInt-\u003eByteString",
        "package": "pwstore-purehaskell",
        "partial": "Password",
        "signature": "ByteString-\u003eInt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-purehaskell/docs/Crypto-PasswordStore.html#v:verifyPassword",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003everifyPassword userInput pwHash\u003c/code\u003e verifies the password \u003ccode\u003euserInput\u003c/code\u003e given\n by the user against the stored password hash \u003ccode\u003epwHash\u003c/code\u003e.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the\n given password is correct, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if it is not.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-purehaskell",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Bool",
        "fct-source": "src/Crypto-PasswordStore.html#verifyPassword",
        "fct-type": "function",
        "title": "verifyPassword"
      },
      "index": {
        "description": "verifyPassword userInput pwHash verifies the password userInput given by the user against the stored password hash pwHash Returns True if the given password is correct and False if it is not",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "verifyPassword",
        "normalized": "ByteString-\u003eByteString-\u003eBool",
        "package": "pwstore-purehaskell",
        "partial": "Password",
        "signature": "ByteString-\u003eByteString-\u003eBool"
      }
    }
  }
]