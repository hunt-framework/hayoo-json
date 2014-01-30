[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSecurely store hashed, salted passwords. If you need to store and verify\n passwords, there are many wrong ways to do it, most of them all too\n common. Some people store users' passwords in plain text. Then, when an\n attacker manages to get their hands on this file, they have the passwords for\n every user's account. One step up, but still wrong, is to simply hash all\n passwords with SHA1 or something. This is vulnerable to rainbow table and\n dictionary attacks. One step up from that is to hash the password along with\n a unique salt value. This is vulnerable to dictionary attacks, since guessing\n a password is very fast. The right thing to do is to use a slow hash\n function, to add some small but significant delay, that will be negligible\n for legitimate users but prohibitively expensive for someone trying to guess\n passwords by brute force. That is what this library does. It iterates a\n SHA256 hash, with a random salt, a few thousand times. This scheme is known\n as PBKDF1, and is generally considered secure; there is nothing innovative\n happening here.\n\u003c/p\u003e\u003cp\u003eThe API here is very simple. What you store are called \u003cem\u003epassword hashes\u003c/em\u003e.\n They are strings (technically, ByteStrings) that look like this:\n\u003c/p\u003e\u003cpre\u003e \"sha256|14|jEWU94phx4QzNyH94Qp4CQ==|5GEw+jxP/4WLgzt9VS3Ee3nhqBlDsrKiB+rq7JfMckU=\"\n\u003c/pre\u003e\u003cp\u003eEach password hash shows the algorithm, the strength (more on that later),\n the salt, and the hashed-and-salted password. You store these on your server,\n in a database, for when you need to verify a password. You make a password\n hash with the \u003ccode\u003e\u003ca\u003emakePassword\u003c/a\u003e\u003c/code\u003e function. Here's an example:\n\u003c/p\u003e\u003cpre\u003e \u003e\u003e\u003e makePassword \"hunter2\" 14\n \"sha256|14|Zo4LdZGrv/HYNAUG3q8WcA==|zKjbHZoTpuPLp1lh6ATolWGIKjhXvY4TysuKvqtNFyk=\"\n\u003c/pre\u003e\u003cp\u003eThis will hash the password \u003ccode\u003e\"hunter2\"\u003c/code\u003e, with strength 12, which is a good\n default value. The strength here determines how long the hashing will\n take. When doing the hashing, we iterate the SHA256 hash function\n \u003ccode\u003e2^strength\u003c/code\u003e times, so increasing the strength by 1 makes the hashing take\n twice as long. When computers get faster, you can bump up the strength a\n little bit to compensate. You can strengthen existing password hashes with\n the \u003ccode\u003e\u003ca\u003estrengthenPassword\u003c/a\u003e\u003c/code\u003e function. Note that \u003ccode\u003e\u003ca\u003emakePassword\u003c/a\u003e\u003c/code\u003e needs to generate\n random numbers, so its return type is \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. If you want to avoid\n the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, you can generate your own salt and pass it to\n \u003ccode\u003e\u003ca\u003emakePasswordSalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYour strength value should not be less than 12, and 14 is a good default\n value at the time of this writing, in 2013.\n\u003c/p\u003e\u003cp\u003eOnce you've got your password hashes, the second big thing you need to do\n with them is verify passwords against them. When a user gives you a password,\n you compare it with a password hash using the \u003ccode\u003e\u003ca\u003everifyPassword\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003e \u003e\u003e\u003e verifyPassword \"wrong guess\" passwordHash\n False\n \u003e\u003e\u003e verifyPassword \"hunter2\" passwordHash\n True\n\u003c/pre\u003e\u003cp\u003eThese two functions are really all you need. If you want to make existing\n password hashes stronger, you can use \u003ccode\u003e\u003ca\u003estrengthenPassword\u003c/a\u003e\u003c/code\u003e. Just pass it an\n existing password hash and a new strength value, and it will return a new\n password hash with that strength value, which will match the same password as\n the old password hash.\n\u003c/p\u003e\u003cp\u003eNote that, as of version 2.4, you can also use PBKDF2, and specify the exact\n iteration count. This does not have a significant effect on security, but can\n be handy for compatibility with other code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
        "fct-signature": "module",
        "fct-source": "src/Crypto-PasswordStore.html",
        "fct-type": "module",
        "title": "PasswordStore"
      },
      "index": {
        "description": "Securely store hashed salted passwords If you need to store and verify passwords there are many wrong ways to do it most of them all too common Some people store users passwords in plain text Then when an attacker manages to get their hands on this file they have the passwords for every user account One step up but still wrong is to simply hash all passwords with SHA1 or something This is vulnerable to rainbow table and dictionary attacks One step up from that is to hash the password along with unique salt value This is vulnerable to dictionary attacks since guessing password is very fast The right thing to do is to use slow hash function to add some small but significant delay that will be negligible for legitimate users but prohibitively expensive for someone trying to guess passwords by brute force That is what this library does It iterates SHA256 hash with random salt few thousand times This scheme is known as PBKDF1 and is generally considered secure there is nothing innovative happening here The API here is very simple What you store are called password hashes They are strings technically ByteStrings that look like this sha256 jEWU94phx4QzNyH94Qp4CQ GEw jxP WLgzt9VS3Ee3nhqBlDsrKiB rq7JfMckU Each password hash shows the algorithm the strength more on that later the salt and the hashed-and-salted password You store these on your server in database for when you need to verify password You make password hash with the makePassword function Here an example makePassword hunter2 sha256 Zo4LdZGrv HYNAUG3q8WcA zKjbHZoTpuPLp1lh6ATolWGIKjhXvY4TysuKvqtNFyk This will hash the password hunter2 with strength which is good default value The strength here determines how long the hashing will take When doing the hashing we iterate the SHA256 hash function strength times so increasing the strength by makes the hashing take twice as long When computers get faster you can bump up the strength little bit to compensate You can strengthen existing password hashes with the strengthenPassword function Note that makePassword needs to generate random numbers so its return type is IO ByteString If you want to avoid the IO monad you can generate your own salt and pass it to makePasswordSalt Your strength value should not be less than and is good default value at the time of this writing in Once you ve got your password hashes the second big thing you need to do with them is verify passwords against them When user gives you password you compare it with password hash using the verifyPassword function verifyPassword wrong guess passwordHash False verifyPassword hunter2 passwordHash True These two functions are really all you need If you want to make existing password hashes stronger you can use strengthenPassword Just pass it an existing password hash and new strength value and it will return new password hash with that strength value which will match the same password as the old password hash Note that as of version you can also use PBKDF2 and specify the exact iteration count This does not have significant effect on security but can be handy for compatibility with other code",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "PasswordStore",
        "normalized": "",
        "package": "pwstore-fast",
        "partial": "Password Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#t:Salt",
      "description": {
        "fct-descr": "\u003cp\u003eA salt is a unique random value which is stored as part of the password\n hash. You can generate a salt with \u003ccode\u003e\u003ca\u003egenSaltIO\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egenSaltRandom\u003c/a\u003e\u003c/code\u003e, or if you\n really know what you're doing, you can create them from your own ByteString\n values with \u003ccode\u003e\u003ca\u003emakeSalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
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
        "package": "pwstore-fast",
        "partial": "Salt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:exportSalt",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The resulting \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e will be\n base64-encoded. Most users will not need to use this function.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
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
        "package": "pwstore-fast",
        "partial": "Salt",
        "signature": "Salt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:genSaltIO",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e from 128 bits of data from \u003ccode\u003e/dev/urandom\u003c/code\u003e, with the\n system RNG as a fallback. This is the function used to generate salts by\n \u003ccode\u003e\u003ca\u003emakePassword\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
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
        "package": "pwstore-fast",
        "partial": "Salt IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:genSaltRandom",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e with 128 bits of data taken from a given random number\n generator. Returns the salt and the updated random number generator. This is\n meant to be used with \u003ccode\u003e\u003ca\u003emakePasswordSalt\u003c/a\u003e\u003c/code\u003e by people who would prefer to either\n use their own random number generator or avoid the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
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
        "package": "pwstore-fast",
        "partial": "Salt Random",
        "signature": "b-\u003e(Salt,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:importSalt",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a raw \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e.\n Use this function with caution, since using a weak salt will result in a\n weak password.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
        "fct-signature": "ByteString -\u003e Salt",
        "fct-source": "src/Crypto-PasswordStore.html#importSalt",
        "fct-type": "function",
        "title": "importSalt"
      },
      "index": {
        "description": "Convert raw ByteString into Salt Use this function with caution since using weak salt will result in weak password",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "importSalt",
        "normalized": "ByteString-\u003eSalt",
        "package": "pwstore-fast",
        "partial": "Salt",
        "signature": "ByteString-\u003eSalt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:isPasswordFormatValid",
      "description": {
        "fct-descr": "\u003cp\u003eIs the format of a password hash valid? Attempts to parse a given password\n hash. Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it parses correctly, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
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
        "package": "pwstore-fast",
        "partial": "Password Format Valid",
        "signature": "ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:makePassword",
      "description": {
        "fct-descr": "\u003cp\u003eHash a password with a given strength (14 is a good default). The output of\n this function can be written directly to a password file or\n database. Generates a salt using high-quality randomness from\n \u003ccode\u003e/dev/urandom\u003c/code\u003e or (if that is not available, for example on Windows)\n \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e, which is included in the hashed output.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
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
        "package": "pwstore-fast",
        "partial": "Password",
        "signature": "ByteString-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:makePasswordSalt",
      "description": {
        "fct-descr": "\u003cp\u003eHash a password with a given strength (14 is a good default), using a given\n salt. The output of this function can be written directly to a password file\n or database. Example:\n\u003c/p\u003e\u003cpre\u003e \u003e\u003e\u003e makePasswordSalt \"hunter2\" (makeSalt \"72cd18b5ebfe6e96\") 14\n \"sha256|14|NzJjZDE4YjVlYmZlNmU5Ng==|yuiNrZW3KHX+pd0sWy9NTTsy5Yopmtx4UYscItSsoxc=\"\n\u003c/pre\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
        "fct-signature": "ByteString -\u003e Salt -\u003e Int -\u003e ByteString",
        "fct-source": "src/Crypto-PasswordStore.html#makePasswordSalt",
        "fct-type": "function",
        "title": "makePasswordSalt"
      },
      "index": {
        "description": "Hash password with given strength is good default using given salt The output of this function can be written directly to password file or database Example makePasswordSalt hunter2 makeSalt cd18b5ebfe6e96 sha256 NzJjZDE4YjVlYmZlNmU5Ng yuiNrZW3KHX pd0sWy9NTTsy5Yopmtx4UYscItSsoxc",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "makePasswordSalt",
        "normalized": "ByteString-\u003eSalt-\u003eInt-\u003eByteString",
        "package": "pwstore-fast",
        "partial": "Password Salt",
        "signature": "ByteString-\u003eSalt-\u003eInt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:makePasswordSaltWith",
      "description": {
        "fct-descr": "\u003cp\u003eA generic version of \u003ccode\u003e\u003ca\u003emakePasswordSalt\u003c/a\u003e\u003c/code\u003e, meant to give the user\n the maximum control over the generation parameters.\n Note that, unlike \u003ccode\u003e\u003ca\u003emakePasswordWith\u003c/a\u003e\u003c/code\u003e, this function takes the \u003ccode\u003eraw\u003c/code\u003e\n number of iterations. This means the user will need to specify a\n sensible value, typically \u003ccode\u003e10000\u003c/code\u003e or \u003ccode\u003e20000\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
        "fct-signature": "(ByteString -\u003e Salt -\u003e Int -\u003e ByteString)-\u003e (Int -\u003e Int)-\u003e ByteString-\u003e Salt-\u003e Int-\u003e ByteString",
        "fct-type": "function",
        "title": "makePasswordSaltWith"
      },
      "index": {
        "description": "generic version of makePasswordSalt meant to give the user the maximum control over the generation parameters Note that unlike makePasswordWith this function takes the raw number of iterations This means the user will need to specify sensible value typically or",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "makePasswordSaltWith",
        "normalized": "(ByteString-\u003eSalt-\u003eInt-\u003eByteString)-\u003e(Int-\u003eInt)-\u003eByteString-\u003eSalt-\u003eInt-\u003eByteString",
        "package": "pwstore-fast",
        "partial": "Password Salt With",
        "signature": "(ByteString-\u003eSalt-\u003eInt-\u003eByteString)-\u003e(Int-\u003eInt)-\u003eByteString-\u003eSalt-\u003eInt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:makePasswordWith",
      "description": {
        "fct-descr": "\u003cp\u003eA generic version of \u003ccode\u003e\u003ca\u003emakePassword\u003c/a\u003e\u003c/code\u003e, which allow the user\n to choose the algorithm to use.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emakePasswordWith pbkdf1 \"password\" 14\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
        "fct-signature": "(ByteString -\u003e Salt -\u003e Int -\u003e ByteString)-\u003e ByteString-\u003e Int-\u003e IO ByteString",
        "fct-type": "function",
        "title": "makePasswordWith"
      },
      "index": {
        "description": "generic version of makePassword which allow the user to choose the algorithm to use makePasswordWith pbkdf1 password",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "makePasswordWith",
        "normalized": "(ByteString-\u003eSalt-\u003eInt-\u003eByteString)-\u003eByteString-\u003eInt-\u003eIO ByteString",
        "package": "pwstore-fast",
        "partial": "Password With",
        "signature": "(ByteString-\u003eSalt-\u003eInt-\u003eByteString)-\u003eByteString-\u003eInt-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:makeSalt",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The input must be at least 8\n characters, and can contain arbitrary bytes. Most users will not need to use\n this function.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
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
        "package": "pwstore-fast",
        "partial": "Salt",
        "signature": "ByteString-\u003eSalt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:passwordStrength",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the strength of a password hash.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
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
        "package": "pwstore-fast",
        "partial": "Strength",
        "signature": "ByteString-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:pbkdf1",
      "description": {
        "fct-descr": "\u003cp\u003ePBKDF1 key-derivation function. Takes a password, a \u003ccode\u003e\u003ca\u003eSalt\u003c/a\u003e\u003c/code\u003e, and a number of\n iterations. The number of iterations should be at least 1000, and probably\n more. 5000 is a reasonable number, computing almost instantaneously. This\n will give a 32-byte \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as output. Both the salt and this 32-byte\n key should be stored in the password file. When a user wishes to authenticate\n a password, just pass it and the salt to this function, and see if the output\n matches.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
        "fct-signature": "ByteString -\u003e Salt -\u003e Int -\u003e ByteString",
        "fct-source": "src/Crypto-PasswordStore.html#pbkdf1",
        "fct-type": "function",
        "title": "pbkdf1"
      },
      "index": {
        "description": "PBKDF1 key-derivation function Takes password Salt and number of iterations The number of iterations should be at least and probably more is reasonable number computing almost instantaneously This will give byte ByteString as output Both the salt and this byte key should be stored in the password file When user wishes to authenticate password just pass it and the salt to this function and see if the output matches",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "pbkdf1",
        "normalized": "ByteString-\u003eSalt-\u003eInt-\u003eByteString",
        "package": "pwstore-fast",
        "partial": "",
        "signature": "ByteString-\u003eSalt-\u003eInt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:pbkdf2",
      "description": {
        "fct-descr": "\u003cp\u003ePBKDF2 key-derivation function.\n For details see \u003ccode\u003ehttp:\u003cem/\u003etools.ietf.org\u003cem\u003ehtml\u003c/em\u003erfc2898\u003c/code\u003e.\n \u003ccode\u003e32\u003c/code\u003e is the most common digest size for \u003ccode\u003eSHA256\u003c/code\u003e, and is\n what the algorithm internally uses.\n \u003ccode\u003eHMAC+SHA256\u003c/code\u003e is used as \u003ccode\u003ePRF\u003c/code\u003e, because \u003ccode\u003eHMAC+SHA1\u003c/code\u003e is considered too weak.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
        "fct-signature": "ByteString -\u003e Salt -\u003e Int -\u003e ByteString",
        "fct-source": "src/Crypto-PasswordStore.html#pbkdf2",
        "fct-type": "function",
        "title": "pbkdf2"
      },
      "index": {
        "description": "PBKDF2 key-derivation function For details see http tools.ietf.org html rfc2898 is the most common digest size for SHA256 and is what the algorithm internally uses HMAC SHA256 is used as PRF because HMAC SHA1 is considered too weak",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "pbkdf2",
        "normalized": "ByteString-\u003eSalt-\u003eInt-\u003eByteString",
        "package": "pwstore-fast",
        "partial": "",
        "signature": "ByteString-\u003eSalt-\u003eInt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:strengthenPassword",
      "description": {
        "fct-descr": "\u003cp\u003eTry to strengthen a password hash, by hashing it some more\n times. \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrengthenPassword\u003c/a\u003e\u003c/code\u003e pwHash new_strength\u003c/code\u003e will return a new password\n hash with strength at least \u003ccode\u003enew_strength\u003c/code\u003e. If the password hash already has\n strength greater than or equal to \u003ccode\u003enew_strength\u003c/code\u003e, then it is returned\n unmodified. If the password hash is invalid and does not parse, it will be\n returned without comment.\n\u003c/p\u003e\u003cp\u003eThis function can be used to periodically update your password database when\n computers get faster, in order to keep up with Moore's law. This isn't hugely\n important, but it's a good idea.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
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
        "package": "pwstore-fast",
        "partial": "Password",
        "signature": "ByteString-\u003eInt-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:verifyPassword",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003everifyPasswordWith\u003c/a\u003e\u003c/code\u003e, but uses \u003ccode\u003e\u003ca\u003epbkdf1\u003c/a\u003e\u003c/code\u003e as algorithm.\n\u003c/p\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Bool",
        "fct-source": "src/Crypto-PasswordStore.html#verifyPassword",
        "fct-type": "function",
        "title": "verifyPassword"
      },
      "index": {
        "description": "Like verifyPasswordWith but uses pbkdf1 as algorithm",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "verifyPassword",
        "normalized": "ByteString-\u003eByteString-\u003eBool",
        "package": "pwstore-fast",
        "partial": "Password",
        "signature": "ByteString-\u003eByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pwstore-fast/docs/Crypto-PasswordStore.html#v:verifyPasswordWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003everifyPasswordWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ealgorithm userInput pwHash\u003c/code\u003e verifies\n the password \u003ccode\u003euserInput\u003c/code\u003e given by the user against the stored password\n hash \u003ccode\u003epwHash\u003c/code\u003e, with the hashing algorithm \u003ccode\u003ealgorithm\u003c/code\u003e.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the\n given password is correct, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if it is not.\n This function allows the programmer to specify the algorithm to use,\n e.g. \u003ccode\u003e\u003ca\u003epbkdf1\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003epbkdf2\u003c/a\u003e\u003c/code\u003e.\n Note: If you want to verify a password previously generated with\n \u003ccode\u003e\u003ca\u003emakePasswordSaltWith\u003c/a\u003e\u003c/code\u003e, but without modifying the number of iterations,\n you can do:\n\u003c/p\u003e\u003cpre\u003e \u003e\u003e\u003e verifyPasswordWith pbkdf2 id \"hunter2\" \"sha256...\"\n True\n\u003c/pre\u003e",
        "fct-module": "Crypto.PasswordStore",
        "fct-package": "pwstore-fast",
        "fct-signature": "(ByteString -\u003e Salt -\u003e Int -\u003e ByteString)-\u003e (Int -\u003e Int)-\u003e ByteString-\u003e ByteString-\u003e Bool",
        "fct-type": "function",
        "title": "verifyPasswordWith"
      },
      "index": {
        "description": "verifyPasswordWith algorithm userInput pwHash verifies the password userInput given by the user against the stored password hash pwHash with the hashing algorithm algorithm Returns True if the given password is correct and False if it is not This function allows the programmer to specify the algorithm to use e.g pbkdf1 or pbkdf2 Note If you want to verify password previously generated with makePasswordSaltWith but without modifying the number of iterations you can do verifyPasswordWith pbkdf2 id hunter2 sha256 True",
        "hierarchy": "Crypto PasswordStore",
        "module": "Crypto.PasswordStore",
        "name": "verifyPasswordWith",
        "normalized": "(ByteString-\u003eSalt-\u003eInt-\u003eByteString)-\u003e(Int-\u003eInt)-\u003eByteString-\u003eByteString-\u003eBool",
        "package": "pwstore-fast",
        "partial": "Password With",
        "signature": "(ByteString-\u003eSalt-\u003eInt-\u003eByteString)-\u003e(Int-\u003eInt)-\u003eByteString-\u003eByteString-\u003eBool"
      }
    }
  }
]