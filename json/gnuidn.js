[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#",
      "description": {
        "fct-module": "Data.Text.IDN.IDNA",
        "fct-package": "gnuidn",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-IDN-IDNA.html",
        "fct-type": "module",
        "title": "IDNA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN IDNA",
        "module": "Data.Text.IDN.IDNA",
        "name": "IDNA",
        "normalized": "",
        "package": "gnuidn",
        "partial": "IDNA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#t:Error",
      "description": {
        "fct-module": "Data.Text.IDN.IDNA",
        "fct-package": "gnuidn",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-IDN-Internal.html#Error",
        "fct-type": "data",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN IDNA",
        "module": "Data.Text.IDN.IDNA",
        "name": "Error",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#t:Flags",
      "description": {
        "fct-module": "Data.Text.IDN.IDNA",
        "fct-package": "gnuidn",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-IDN-IDNA.html#Flags",
        "fct-type": "data",
        "title": "Flags"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN IDNA",
        "module": "Data.Text.IDN.IDNA",
        "name": "Flags",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:Flags",
      "description": {
        "fct-module": "Data.Text.IDN.IDNA",
        "fct-package": "gnuidn",
        "fct-signature": "Flags",
        "fct-source": "src/Data-Text-IDN-IDNA.html#Flags",
        "fct-type": "function",
        "title": "Flags"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN IDNA",
        "module": "Data.Text.IDN.IDNA",
        "name": "Flags",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:allowUnassigned",
      "description": {
        "fct-descr": "\u003cp\u003eAllow unassigned Unicode code points\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.IDNA",
        "fct-package": "gnuidn",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Text-IDN-IDNA.html#Flags",
        "fct-type": "function",
        "title": "allowUnassigned"
      },
      "index": {
        "description": "Allow unassigned Unicode code points",
        "hierarchy": "Data Text IDN IDNA",
        "module": "Data.Text.IDN.IDNA",
        "name": "allowUnassigned",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Unassigned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:defaultFlags",
      "description": {
        "fct-descr": "\u003cpre\u003edefaultFlags = Flags True False\u003c/pre\u003e",
        "fct-module": "Data.Text.IDN.IDNA",
        "fct-package": "gnuidn",
        "fct-signature": "Flags",
        "fct-source": "src/Data-Text-IDN-IDNA.html#defaultFlags",
        "fct-type": "function",
        "title": "defaultFlags"
      },
      "index": {
        "description": "defaultFlags Flags True False",
        "hierarchy": "Data Text IDN IDNA",
        "module": "Data.Text.IDN.IDNA",
        "name": "defaultFlags",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:toASCII",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Unicode domain name to an ASCII \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The domain\n name may contain several labels, separated by periods.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etoASCII\u003c/code\u003e never alters a sequence of code points that are all in the\n ASCII range to begin with (although it could fail). Applying \u003ccode\u003etoASCII\u003c/code\u003e\n multiple times gives the same result as applying it once.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.IDNA",
        "fct-package": "gnuidn",
        "fct-signature": "Flags -\u003e Text -\u003e Either Error ByteString",
        "fct-source": "src/Data-Text-IDN-IDNA.html#toASCII",
        "fct-type": "function",
        "title": "toASCII"
      },
      "index": {
        "description": "Convert Unicode domain name to an ASCII ByteString The domain name may contain several labels separated by periods toASCII never alters sequence of code points that are all in the ASCII range to begin with although it could fail Applying toASCII multiple times gives the same result as applying it once",
        "hierarchy": "Data Text IDN IDNA",
        "module": "Data.Text.IDN.IDNA",
        "name": "toASCII",
        "normalized": "Flags-\u003eText-\u003eEither Error ByteString",
        "package": "gnuidn",
        "partial": "ASCII",
        "signature": "Flags-\u003eText-\u003eEither Error ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:toUnicode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a possibly ACE-encoded domain name to Unicode. The domain\n name may contain several labels, separated by dots.\n\u003c/p\u003e\u003cp\u003eAside from memory allocation failure, \u003ccode\u003etoUnicode\u003c/code\u003e always succeeds.\n If the input cannot be decoded, it is returned unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.IDNA",
        "fct-package": "gnuidn",
        "fct-signature": "Flags -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-IDN-IDNA.html#toUnicode",
        "fct-type": "function",
        "title": "toUnicode"
      },
      "index": {
        "description": "Convert possibly ACE-encoded domain name to Unicode The domain name may contain several labels separated by dots Aside from memory allocation failure toUnicode always succeeds If the input cannot be decoded it is returned unchanged",
        "hierarchy": "Data Text IDN IDNA",
        "module": "Data.Text.IDN.IDNA",
        "name": "toUnicode",
        "normalized": "Flags-\u003eByteString-\u003eText",
        "package": "gnuidn",
        "partial": "Unicode",
        "signature": "Flags-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:verifySTD3",
      "description": {
        "fct-descr": "\u003cp\u003eCheck output to make sure it is a STD3-conforming host name\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.IDNA",
        "fct-package": "gnuidn",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Text-IDN-IDNA.html#Flags",
        "fct-type": "function",
        "title": "verifySTD3"
      },
      "index": {
        "description": "Check output to make sure it is STD3-conforming host name",
        "hierarchy": "Data Text IDN IDNA",
        "module": "Data.Text.IDN.IDNA",
        "name": "verifySTD3",
        "normalized": "",
        "package": "gnuidn",
        "partial": "STD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-Punycode.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePunycode is a simple and efficient transfer encoding syntax designed\n for use with Internationalized Domain Names in Applications (IDNA). It\n uniquely and reversibly transforms a Unicode string into ASCII. ASCII\n characters in the Unicode string are represented literally, and non-ASCII\n characters are represented by ASCII characters that are allowed in host\n name labels (letters, digits, and hyphens).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.IDN.Punycode",
        "fct-package": "gnuidn",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-IDN-Punycode.html",
        "fct-type": "module",
        "title": "Punycode"
      },
      "index": {
        "description": "Punycode is simple and efficient transfer encoding syntax designed for use with Internationalized Domain Names in Applications IDNA It uniquely and reversibly transforms Unicode string into ASCII ASCII characters in the Unicode string are represented literally and non-ASCII characters are represented by ASCII characters that are allowed in host name labels letters digits and hyphens",
        "hierarchy": "Data Text IDN Punycode",
        "module": "Data.Text.IDN.Punycode",
        "name": "Punycode",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Punycode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-Punycode.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into unicode. The second component of the\n result is a case predicate; it indicates whether a particular character\n position of the result string should be upper-cased.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the input is invalid.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.Punycode",
        "fct-package": "gnuidn",
        "fct-signature": "ByteString -\u003e Maybe (Text, Integer -\u003e Bool)",
        "fct-source": "src/Data-Text-IDN-Punycode.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode ByteString into unicode The second component of the result is case predicate it indicates whether particular character position of the result string should be upper-cased Returns Nothing if the input is invalid",
        "hierarchy": "Data Text IDN Punycode",
        "module": "Data.Text.IDN.Punycode",
        "name": "decode",
        "normalized": "ByteString-\u003eMaybe(Text,Integer-\u003eBool)",
        "package": "gnuidn",
        "partial": "",
        "signature": "ByteString-\u003eMaybe(Text,Integer-\u003eBool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-Punycode.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode unicode into an ASCII-only \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. If provided, the\n case predicate indicates whether to uppercase the corresponding character\n after decoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.Punycode",
        "fct-package": "gnuidn",
        "fct-signature": "Text -\u003e Maybe (Integer -\u003e Bool) -\u003e ByteString",
        "fct-source": "src/Data-Text-IDN-Punycode.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode unicode into an ASCII-only ByteString If provided the case predicate indicates whether to uppercase the corresponding character after decoding",
        "hierarchy": "Data Text IDN Punycode",
        "module": "Data.Text.IDN.Punycode",
        "name": "encode",
        "normalized": "Text-\u003eMaybe(Integer-\u003eBool)-\u003eByteString",
        "package": "gnuidn",
        "partial": "",
        "signature": "Text-\u003eMaybe(Integer-\u003eBool)-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#",
      "description": {
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-IDN-StringPrep.html",
        "fct-type": "module",
        "title": "StringPrep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "StringPrep",
        "normalized": "",
        "package": "gnuidn",
        "partial": "String Prep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#t:Error",
      "description": {
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-IDN-Internal.html#Error",
        "fct-type": "data",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "Error",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#t:Flags",
      "description": {
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#Flags",
        "fct-type": "data",
        "title": "Flags"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "Flags",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#t:Profile",
      "description": {
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#Profile",
        "fct-type": "data",
        "title": "Profile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "Profile",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:Flags",
      "description": {
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Flags",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#Flags",
        "fct-type": "function",
        "title": "Flags"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "Flags",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:allowUnassigned",
      "description": {
        "fct-descr": "\u003cp\u003eIf false, \u003ccode\u003e\u003ca\u003estringprep\u003c/a\u003e\u003c/code\u003e will return an error if the input\n contains characters not assigned to the profile.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#Flags",
        "fct-type": "function",
        "title": "allowUnassigned"
      },
      "index": {
        "description": "If false stringprep will return an error if the input contains characters not assigned to the profile",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "allowUnassigned",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Unassigned",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:defaultFlags",
      "description": {
        "fct-descr": "\u003cpre\u003edefaultFlags = Flags True True False\u003c/pre\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Flags",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#defaultFlags",
        "fct-type": "function",
        "title": "defaultFlags"
      },
      "index": {
        "description": "defaultFlags Flags True True False",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "defaultFlags",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:enableBidi",
      "description": {
        "fct-descr": "\u003cp\u003eEnable the BIDI step. Usually the profile specifies BIDI and\n NFKC settings, and applications should not override it unless in\n special situations.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#Flags",
        "fct-type": "function",
        "title": "enableBidi"
      },
      "index": {
        "description": "Enable the BIDI step Usually the profile specifies BIDI and NFKC settings and applications should not override it unless in special situations",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "enableBidi",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Bidi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:enableNFKC",
      "description": {
        "fct-descr": "\u003cp\u003eEnable the NFKC normalization, as well as selecting the NFKC\n case folding tables. Usually the profile specifies BIDI and NFKC\n settings, and applications should not override it unless in\n special situations.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#Flags",
        "fct-type": "function",
        "title": "enableNFKC"
      },
      "index": {
        "description": "Enable the NFKC normalization as well as selecting the NFKC case folding tables Usually the profile specifies BIDI and NFKC settings and applications should not override it unless in special situations",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "enableNFKC",
        "normalized": "",
        "package": "gnuidn",
        "partial": "NFKC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:iscsi",
      "description": {
        "fct-descr": "\u003cp\u003eiSCSI (RFC 3722)\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Profile",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#iscsi",
        "fct-type": "function",
        "title": "iscsi"
      },
      "index": {
        "description": "iSCSI RFC",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "iscsi",
        "normalized": "",
        "package": "gnuidn",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:kerberos5",
      "description": {
        "fct-descr": "\u003cp\u003eKerberos 5\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Profile",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#kerberos5",
        "fct-type": "function",
        "title": "kerberos5"
      },
      "index": {
        "description": "Kerberos",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "kerberos5",
        "normalized": "",
        "package": "gnuidn",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:nameprep",
      "description": {
        "fct-descr": "\u003cp\u003eNameprep (RFC 3491)\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Profile",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#nameprep",
        "fct-type": "function",
        "title": "nameprep"
      },
      "index": {
        "description": "Nameprep RFC",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "nameprep",
        "normalized": "",
        "package": "gnuidn",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:sasl",
      "description": {
        "fct-descr": "\u003cp\u003eSASLprep (RFC 4013)\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Profile",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#sasl",
        "fct-type": "function",
        "title": "sasl"
      },
      "index": {
        "description": "SASLprep RFC",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "sasl",
        "normalized": "",
        "package": "gnuidn",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:saslAnonymous",
      "description": {
        "fct-descr": "\u003cp\u003eDraft SASL ANONYMOUS\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Profile",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#saslAnonymous",
        "fct-type": "function",
        "title": "saslAnonymous"
      },
      "index": {
        "description": "Draft SASL ANONYMOUS",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "saslAnonymous",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Anonymous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:stringprep",
      "description": {
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Profile -\u003e Flags -\u003e Text -\u003e Either Error Text",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#stringprep",
        "fct-type": "function",
        "title": "stringprep"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "stringprep",
        "normalized": "Profile-\u003eFlags-\u003eText-\u003eEither Error Text",
        "package": "gnuidn",
        "partial": "",
        "signature": "Profile-\u003eFlags-\u003eText-\u003eEither Error Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:trace",
      "description": {
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Profile",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "trace",
        "normalized": "",
        "package": "gnuidn",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:xmppNode",
      "description": {
        "fct-descr": "\u003cp\u003eXMPP node (RFC 3920)\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Profile",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#xmppNode",
        "fct-type": "function",
        "title": "xmppNode"
      },
      "index": {
        "description": "XMPP node RFC",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "xmppNode",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:xmppResource",
      "description": {
        "fct-descr": "\u003cp\u003eXMPP resource (RFC 3920)\n\u003c/p\u003e",
        "fct-module": "Data.Text.IDN.StringPrep",
        "fct-package": "gnuidn",
        "fct-signature": "Profile",
        "fct-source": "src/Data-Text-IDN-StringPrep.html#xmppResource",
        "fct-type": "function",
        "title": "xmppResource"
      },
      "index": {
        "description": "XMPP resource RFC",
        "hierarchy": "Data Text IDN StringPrep",
        "module": "Data.Text.IDN.StringPrep",
        "name": "xmppResource",
        "normalized": "",
        "package": "gnuidn",
        "partial": "Resource",
        "signature": ""
      }
    }
  }
]