[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-AES.html#",
      "description": {
        "fct-module": "Test.AES",
        "fct-package": "crypto-api-tests",
        "fct-signature": "module",
        "fct-source": "src/Test-AES.html",
        "fct-type": "module",
        "title": "AES"
      },
      "index": {
        "description": "",
        "hierarchy": "Test AES",
        "module": "Test.AES",
        "name": "AES",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-AES.html#v:makeAESTests",
      "description": {
        "fct-descr": "\u003cp\u003eBased on NIST KATs, build a list  of Tests for the instantiated AES algorithm.\n e.g. \u003ccode\u003erunTests $ makeAESTests (undefined :: AES128)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is just a hack-job, if the BlockCipher instance doesn't toss keys\n of incorrect length then you'll get this test running, say, AES128 being tested\n with the first 128 bits of AES192 and AES256 tests.\n\u003c/p\u003e",
        "fct-module": "Test.AES",
        "fct-package": "crypto-api-tests",
        "fct-signature": "k -\u003e IO [Test]",
        "fct-source": "src/Test-AES.html#makeAESTests",
        "fct-type": "function",
        "title": "makeAESTests"
      },
      "index": {
        "description": "Based on NIST KATs build list of Tests for the instantiated AES algorithm e.g runTests makeAESTests undefined AES128 This is just hack-job if the BlockCipher instance doesn toss keys of incorrect length then you ll get this test running say AES128 being tested with the first bits of AES192 and AES256 tests",
        "hierarchy": "Test AES",
        "module": "Test.AES",
        "name": "makeAESTests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "AESTests",
        "signature": "k-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-Crypto.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic tests for some common cryptographic algorithms\n  Most user only need to run the {make,run}Tests functions:\n\u003c/p\u003e\u003cpre\u003e        runTests (makeMD5Tests (undefined :: MD5Digest))\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e       runTests =\u003c\u003c makeAESTests (undefined :: AESKey)\n\u003c/pre\u003e\u003cp\u003eTODO: More KATs are needed - particularly ones for non-AES, SHA, or MD5\n   algorithms.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Crypto",
        "fct-package": "crypto-api-tests",
        "fct-signature": "module",
        "fct-source": "src/Test-Crypto.html",
        "fct-type": "module",
        "title": "Crypto"
      },
      "index": {
        "description": "Basic tests for some common cryptographic algorithms Most user only need to run the make run Tests functions runTests makeMD5Tests undefined MD5Digest or runTests makeAESTests undefined AESKey TODO More KATs are needed particularly ones for non-AES SHA or MD5 algorithms",
        "hierarchy": "Test Crypto",
        "module": "Test.Crypto",
        "name": "Crypto",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "Crypto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-Crypto.html#v:defaultMain",
      "description": {
        "fct-module": "Test.Crypto",
        "fct-package": "crypto-api-tests",
        "fct-signature": "[Test] -\u003e IO ()",
        "fct-type": "function",
        "title": "defaultMain"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Crypto",
        "module": "Test.Crypto",
        "name": "defaultMain",
        "normalized": "[Test]-\u003eIO()",
        "package": "crypto-api-tests",
        "partial": "Main",
        "signature": "[Test]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-Crypto.html#v:hexStringToBS",
      "description": {
        "fct-descr": "\u003cp\u003eConvert hex strings to bytestrings, for example:\n\u003c/p\u003e\u003cpre\u003e \"3adf91c0\" ==\u003e B.pack [0x3a, 0xdf, 0x91, 0xc0]\n\u003c/pre\u003e\u003cp\u003eStrings of odd length will cause an exception as will non-hex characters such as '0x'.\n\u003c/p\u003e",
        "fct-module": "Test.Crypto",
        "fct-package": "crypto-api-tests",
        "fct-signature": "String -\u003e ByteString",
        "fct-source": "src/Test-Crypto.html#hexStringToBS",
        "fct-type": "function",
        "title": "hexStringToBS"
      },
      "index": {
        "description": "Convert hex strings to bytestrings for example adf91c0 B.pack x3a xdf x91 xc0 Strings of odd length will cause an exception as will non-hex characters such as",
        "hierarchy": "Test Crypto",
        "module": "Test.Crypto",
        "name": "hexStringToBS",
        "normalized": "String-\u003eByteString",
        "package": "crypto-api-tests",
        "partial": "String To BS",
        "signature": "String-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-Crypto.html#v:makeBlockCipherPropTests",
      "description": {
        "fct-descr": "\u003cp\u003eBuild test groups for encrypt/decrypt identity and \n equality of operations on strict and lazy ByteStrings.\n\u003c/p\u003e\u003cp\u003eAdmittedly, these tests conflate testing the algorithm\n in question and testing the mode implementation in 'crypto-api',\n but more testing isn't exactly a bad thing.\n\u003c/p\u003e",
        "fct-module": "Test.Crypto",
        "fct-package": "crypto-api-tests",
        "fct-signature": "k -\u003e [Test]",
        "fct-source": "src/Test-Crypto.html#makeBlockCipherPropTests",
        "fct-type": "function",
        "title": "makeBlockCipherPropTests"
      },
      "index": {
        "description": "Build test groups for encrypt decrypt identity and equality of operations on strict and lazy ByteStrings Admittedly these tests conflate testing the algorithm in question and testing the mode implementation in crypto-api but more testing isn exactly bad thing",
        "hierarchy": "Test Crypto",
        "module": "Test.Crypto",
        "name": "makeBlockCipherPropTests",
        "normalized": "a-\u003e[Test]",
        "package": "crypto-api-tests",
        "partial": "Block Cipher Prop Tests",
        "signature": "k-\u003e[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-Crypto.html#v:makeHashPropTests",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a test group to check common hash properties.\n Properties include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Operating on lazy bytestrings obtains the same result as on strict bytestrings.\n\u003c/li\u003e\u003cli\u003e The length of the digest (instance definition) matches the Serialize definition.\n\u003c/li\u003e\u003cli\u003e encode . decode == id\n\u003c/li\u003e\u003cli\u003e Hash block length is byte aligned (the 'crypto-api' operations require this!)\n\u003c/li\u003e\u003cli\u003e The digest (output) length is byte aligned (also needed by 'crypto-api')\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Test.Crypto",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e Test",
        "fct-source": "src/Test-Crypto.html#makeHashPropTests",
        "fct-type": "function",
        "title": "makeHashPropTests"
      },
      "index": {
        "description": "Construct test group to check common hash properties Properties include Operating on lazy bytestrings obtains the same result as on strict bytestrings The length of the digest instance definition matches the Serialize definition encode decode id Hash block length is byte aligned the crypto-api operations require this The digest output length is byte aligned also needed by crypto-api",
        "hierarchy": "Test Crypto",
        "module": "Test.Crypto",
        "name": "makeHashPropTests",
        "normalized": "a-\u003eTest",
        "package": "crypto-api-tests",
        "partial": "Hash Prop Tests",
        "signature": "d-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-HMAC.html#",
      "description": {
        "fct-module": "Test.HMAC",
        "fct-package": "crypto-api-tests",
        "fct-signature": "module",
        "fct-source": "src/Test-HMAC.html",
        "fct-type": "module",
        "title": "HMAC"
      },
      "index": {
        "description": "",
        "hierarchy": "Test HMAC",
        "module": "Test.HMAC",
        "name": "HMAC",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "HMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-HMAC.html#v:makeSHA1HMACTests",
      "description": {
        "fct-module": "Test.HMAC",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-HMAC.html#makeSHA1HMACTests",
        "fct-type": "function",
        "title": "makeSHA1HMACTests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test HMAC",
        "module": "Test.HMAC",
        "name": "makeSHA1HMACTests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA HMACTests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-HMAC.html#v:makeSHA224HMACTests",
      "description": {
        "fct-module": "Test.HMAC",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-HMAC.html#makeSHA224HMACTests",
        "fct-type": "function",
        "title": "makeSHA224HMACTests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test HMAC",
        "module": "Test.HMAC",
        "name": "makeSHA224HMACTests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA HMACTests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-HMAC.html#v:makeSHA256HMACTests",
      "description": {
        "fct-module": "Test.HMAC",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-HMAC.html#makeSHA256HMACTests",
        "fct-type": "function",
        "title": "makeSHA256HMACTests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test HMAC",
        "module": "Test.HMAC",
        "name": "makeSHA256HMACTests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA HMACTests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-HMAC.html#v:makeSHA384HMACTests",
      "description": {
        "fct-module": "Test.HMAC",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-HMAC.html#makeSHA384HMACTests",
        "fct-type": "function",
        "title": "makeSHA384HMACTests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test HMAC",
        "module": "Test.HMAC",
        "name": "makeSHA384HMACTests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA HMACTests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-HMAC.html#v:makeSHA512HMACTests",
      "description": {
        "fct-module": "Test.HMAC",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-HMAC.html#makeSHA512HMACTests",
        "fct-type": "function",
        "title": "makeSHA512HMACTests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test HMAC",
        "module": "Test.HMAC",
        "name": "makeSHA512HMACTests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA HMACTests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-MD5.html#",
      "description": {
        "fct-module": "Test.MD5",
        "fct-package": "crypto-api-tests",
        "fct-signature": "module",
        "fct-source": "src/Test-MD5.html",
        "fct-type": "module",
        "title": "MD5"
      },
      "index": {
        "description": "",
        "hierarchy": "Test MD5",
        "module": "Test.MD5",
        "name": "MD5",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-MD5.html#v:makeMD5Tests",
      "description": {
        "fct-module": "Test.MD5",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e [Test]",
        "fct-source": "src/Test-MD5.html#makeMD5Tests",
        "fct-type": "function",
        "title": "makeMD5Tests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test MD5",
        "module": "Test.MD5",
        "name": "makeMD5Tests",
        "normalized": "a-\u003e[Test]",
        "package": "crypto-api-tests",
        "partial": "MD Tests",
        "signature": "d-\u003e[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-ParseNistKATs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNIST KAT files are composed of properties, such as:\n\u003c/p\u003e\u003cpre\u003e    [SHA-1]\n    [PredictionResistance = True]\n    [EntropyInputSize = 128]\n\u003c/pre\u003e\u003cp\u003eand individual known answer tests using these properties, ex:\n\u003c/p\u003e\u003cpre\u003e    COUNT = 0\n    EntropyInput = 7\n    PersonalizationString =\n    Result = 8\n\n    COUNT = 1\n    EntropyInput = 4\n    PersonalizationString = \n    Result = 2\n\u003c/pre\u003e\u003cp\u003eUsing 'many parseCategory' this input would be converted to a\n single element list of \u003ccode\u003e\u003ca\u003eTestCategory\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e    [([(\"SHA-1\",\"\"), (\"PredictionResistance\", \"True\"), (\"EntropyInputSize\", \"128\")],\n            [   [(\"COUNT\", \"0\"), (\"EntropyInput\", \"7\"), (\"PersonalizationString\", \"\"), (\"Result\", \"8\")], \n              , [(\"COUNT\", \"1\"), (\"EntropyInput\", \"4\"), (\"PersonalizationString\", \"\"), (\"Result\", \"2\")]])]\n\u003c/pre\u003e\u003cp\u003ethat is, a list of tuples, the first element is a list of properties (key/value pairs) and\n the second element is a list of tests.  Each test is itself a list of records (key/value pairs).\n Properties apply to all tests contained in the second element of the tuple.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.ParseNistKATs",
        "fct-package": "crypto-api-tests",
        "fct-signature": "module",
        "fct-source": "src/Test-ParseNistKATs.html",
        "fct-type": "module",
        "title": "ParseNistKATs"
      },
      "index": {
        "description": "NIST KAT files are composed of properties such as SHA-1 PredictionResistance True EntropyInputSize and individual known answer tests using these properties ex COUNT EntropyInput PersonalizationString Result COUNT EntropyInput PersonalizationString Result Using many parseCategory this input would be converted to single element list of TestCategory SHA-1 PredictionResistance True EntropyInputSize COUNT EntropyInput PersonalizationString Result COUNT EntropyInput PersonalizationString Result that is list of tuples the first element is list of properties key value pairs and the second element is list of tests Each test is itself list of records key value pairs Properties apply to all tests contained in the second element of the tuple",
        "hierarchy": "Test ParseNistKATs",
        "module": "Test.ParseNistKATs",
        "name": "ParseNistKATs",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "Parse Nist KATs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-ParseNistKATs.html#t:NistTest",
      "description": {
        "fct-module": "Test.ParseNistKATs",
        "fct-package": "crypto-api-tests",
        "fct-signature": "type",
        "fct-source": "src/Test-ParseNistKATs.html#NistTest",
        "fct-type": "type",
        "title": "NistTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test ParseNistKATs",
        "module": "Test.ParseNistKATs",
        "name": "NistTest",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "Nist Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-ParseNistKATs.html#t:Properties",
      "description": {
        "fct-module": "Test.ParseNistKATs",
        "fct-package": "crypto-api-tests",
        "fct-signature": "type",
        "fct-source": "src/Test-ParseNistKATs.html#Properties",
        "fct-type": "type",
        "title": "Properties"
      },
      "index": {
        "description": "",
        "hierarchy": "Test ParseNistKATs",
        "module": "Test.ParseNistKATs",
        "name": "Properties",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "Properties",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-ParseNistKATs.html#t:Record",
      "description": {
        "fct-module": "Test.ParseNistKATs",
        "fct-package": "crypto-api-tests",
        "fct-signature": "type",
        "fct-source": "src/Test-ParseNistKATs.html#Record",
        "fct-type": "type",
        "title": "Record"
      },
      "index": {
        "description": "",
        "hierarchy": "Test ParseNistKATs",
        "module": "Test.ParseNistKATs",
        "name": "Record",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-ParseNistKATs.html#t:TestCategory",
      "description": {
        "fct-module": "Test.ParseNistKATs",
        "fct-package": "crypto-api-tests",
        "fct-signature": "type",
        "fct-source": "src/Test-ParseNistKATs.html#TestCategory",
        "fct-type": "type",
        "title": "TestCategory"
      },
      "index": {
        "description": "",
        "hierarchy": "Test ParseNistKATs",
        "module": "Test.ParseNistKATs",
        "name": "TestCategory",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "Test Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-ParseNistKATs.html#t:TypedTest",
      "description": {
        "fct-module": "Test.ParseNistKATs",
        "fct-package": "crypto-api-tests",
        "fct-signature": "type",
        "fct-source": "src/Test-ParseNistKATs.html#TypedTest",
        "fct-type": "type",
        "title": "TypedTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test ParseNistKATs",
        "module": "Test.ParseNistKATs",
        "name": "TypedTest",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "Typed Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-ParseNistKATs.html#v:parseCategories",
      "description": {
        "fct-module": "Test.ParseNistKATs",
        "fct-package": "crypto-api-tests",
        "fct-signature": "String -\u003e String -\u003e [(Properties, [NistTest])]",
        "fct-source": "src/Test-ParseNistKATs.html#parseCategories",
        "fct-type": "function",
        "title": "parseCategories"
      },
      "index": {
        "description": "",
        "hierarchy": "Test ParseNistKATs",
        "module": "Test.ParseNistKATs",
        "name": "parseCategories",
        "normalized": "String-\u003eString-\u003e[(Properties,[NistTest])]",
        "package": "crypto-api-tests",
        "partial": "Categories",
        "signature": "String-\u003eString-\u003e[(Properties,[NistTest])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-SHA.html#",
      "description": {
        "fct-module": "Test.SHA",
        "fct-package": "crypto-api-tests",
        "fct-signature": "module",
        "fct-source": "src/Test-SHA.html",
        "fct-type": "module",
        "title": "SHA"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SHA",
        "module": "Test.SHA",
        "name": "SHA",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-SHA.html#v:makeSHA1Tests",
      "description": {
        "fct-module": "Test.SHA",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-SHA.html#makeSHA1Tests",
        "fct-type": "function",
        "title": "makeSHA1Tests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SHA",
        "module": "Test.SHA",
        "name": "makeSHA1Tests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA Tests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-SHA.html#v:makeSHA224Tests",
      "description": {
        "fct-module": "Test.SHA",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-SHA.html#makeSHA224Tests",
        "fct-type": "function",
        "title": "makeSHA224Tests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SHA",
        "module": "Test.SHA",
        "name": "makeSHA224Tests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA Tests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-SHA.html#v:makeSHA256Tests",
      "description": {
        "fct-module": "Test.SHA",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-SHA.html#makeSHA256Tests",
        "fct-type": "function",
        "title": "makeSHA256Tests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SHA",
        "module": "Test.SHA",
        "name": "makeSHA256Tests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA Tests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-SHA.html#v:makeSHA384Tests",
      "description": {
        "fct-module": "Test.SHA",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-SHA.html#makeSHA384Tests",
        "fct-type": "function",
        "title": "makeSHA384Tests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SHA",
        "module": "Test.SHA",
        "name": "makeSHA384Tests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA Tests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-SHA.html#v:makeSHA512Tests",
      "description": {
        "fct-module": "Test.SHA",
        "fct-package": "crypto-api-tests",
        "fct-signature": "d -\u003e IO [Test]",
        "fct-source": "src/Test-SHA.html#makeSHA512Tests",
        "fct-type": "function",
        "title": "makeSHA512Tests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SHA",
        "module": "Test.SHA",
        "name": "makeSHA512Tests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "SHA Tests",
        "signature": "d-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-TwoFish.html#",
      "description": {
        "fct-module": "Test.TwoFish",
        "fct-package": "crypto-api-tests",
        "fct-signature": "module",
        "fct-source": "src/Test-TwoFish.html",
        "fct-type": "module",
        "title": "TwoFish"
      },
      "index": {
        "description": "",
        "hierarchy": "Test TwoFish",
        "module": "Test.TwoFish",
        "name": "TwoFish",
        "normalized": "",
        "package": "crypto-api-tests",
        "partial": "Two Fish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/crypto-api-tests/docs/Test-TwoFish.html#v:makeTwoFishTests",
      "description": {
        "fct-module": "Test.TwoFish",
        "fct-package": "crypto-api-tests",
        "fct-signature": "k -\u003e IO [Test]",
        "fct-source": "src/Test-TwoFish.html#makeTwoFishTests",
        "fct-type": "function",
        "title": "makeTwoFishTests"
      },
      "index": {
        "description": "",
        "hierarchy": "Test TwoFish",
        "module": "Test.TwoFish",
        "name": "makeTwoFishTests",
        "normalized": "a-\u003eIO[Test]",
        "package": "crypto-api-tests",
        "partial": "Two Fish Tests",
        "signature": "k-\u003eIO[Test]"
      }
    }
  }
]