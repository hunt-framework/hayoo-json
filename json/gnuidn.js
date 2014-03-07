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
        "word": "gnuidn"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.IDNA",
          "name": "IDNA",
          "package": "gnuidn",
          "source": "src/Data-Text-IDN-IDNA.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Text IDN IDNA",
          "module": "Data.Text.IDN.IDNA",
          "name": "IDNA",
          "package": "gnuidn",
          "partial": "IDNA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.IDNA",
          "name": "Error",
          "package": "gnuidn",
          "source": "src/Data-Text-IDN-Internal.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text IDN IDNA",
          "module": "Data.Text.IDN.IDNA",
          "name": "Error",
          "package": "gnuidn",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.IDNA",
          "name": "Flags",
          "package": "gnuidn",
          "source": "src/Data-Text-IDN-IDNA.html#Flags",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text IDN IDNA",
          "module": "Data.Text.IDN.IDNA",
          "name": "Flags",
          "package": "gnuidn",
          "partial": "Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#t:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.IDNA",
          "name": "Flags",
          "package": "gnuidn",
          "signature": "Flags",
          "source": "src/Data-Text-IDN-IDNA.html#Flags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text IDN IDNA",
          "module": "Data.Text.IDN.IDNA",
          "name": "Flags",
          "package": "gnuidn",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow unassigned Unicode code points\n\u003c/p\u003e",
          "module": "Data.Text.IDN.IDNA",
          "name": "allowUnassigned",
          "package": "gnuidn",
          "signature": "Bool",
          "source": "src/Data-Text-IDN-IDNA.html#Flags",
          "type": "function"
        },
        "index": {
          "description": "Allow unassigned Unicode code points",
          "hierarchy": "Data Text IDN IDNA",
          "module": "Data.Text.IDN.IDNA",
          "name": "allowUnassigned",
          "package": "gnuidn",
          "partial": "Unassigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:allowUnassigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003edefaultFlags = Flags True False\u003c/pre\u003e",
          "module": "Data.Text.IDN.IDNA",
          "name": "defaultFlags",
          "package": "gnuidn",
          "signature": "Flags",
          "source": "src/Data-Text-IDN-IDNA.html#defaultFlags",
          "type": "function"
        },
        "index": {
          "description": "defaultFlags Flags True False",
          "hierarchy": "Data Text IDN IDNA",
          "module": "Data.Text.IDN.IDNA",
          "name": "defaultFlags",
          "package": "gnuidn",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:defaultFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Unicode domain name to an ASCII \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The domain\n name may contain several labels, separated by periods.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etoASCII\u003c/code\u003e never alters a sequence of code points that are all in the\n ASCII range to begin with (although it could fail). Applying \u003ccode\u003etoASCII\u003c/code\u003e\n multiple times gives the same result as applying it once.\n\u003c/p\u003e",
          "module": "Data.Text.IDN.IDNA",
          "name": "toASCII",
          "package": "gnuidn",
          "signature": "Flags -\u003e Text -\u003e Either Error ByteString",
          "source": "src/Data-Text-IDN-IDNA.html#toASCII",
          "type": "function"
        },
        "index": {
          "description": "Convert Unicode domain name to an ASCII ByteString The domain name may contain several labels separated by periods toASCII never alters sequence of code points that are all in the ASCII range to begin with although it could fail Applying toASCII multiple times gives the same result as applying it once",
          "hierarchy": "Data Text IDN IDNA",
          "module": "Data.Text.IDN.IDNA",
          "name": "toASCII",
          "normalized": "Flags-\u003eText-\u003eEither Error ByteString",
          "package": "gnuidn",
          "partial": "ASCII",
          "signature": "Flags-\u003eText-\u003eEither Error ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:toASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a possibly ACE-encoded domain name to Unicode. The domain\n name may contain several labels, separated by dots.\n\u003c/p\u003e\u003cp\u003eAside from memory allocation failure, \u003ccode\u003etoUnicode\u003c/code\u003e always succeeds.\n If the input cannot be decoded, it is returned unchanged.\n\u003c/p\u003e",
          "module": "Data.Text.IDN.IDNA",
          "name": "toUnicode",
          "package": "gnuidn",
          "signature": "Flags -\u003e ByteString -\u003e Text",
          "source": "src/Data-Text-IDN-IDNA.html#toUnicode",
          "type": "function"
        },
        "index": {
          "description": "Convert possibly ACE-encoded domain name to Unicode The domain name may contain several labels separated by dots Aside from memory allocation failure toUnicode always succeeds If the input cannot be decoded it is returned unchanged",
          "hierarchy": "Data Text IDN IDNA",
          "module": "Data.Text.IDN.IDNA",
          "name": "toUnicode",
          "normalized": "Flags-\u003eByteString-\u003eText",
          "package": "gnuidn",
          "partial": "Unicode",
          "signature": "Flags-\u003eByteString-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:toUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck output to make sure it is a STD3-conforming host name\n\u003c/p\u003e",
          "module": "Data.Text.IDN.IDNA",
          "name": "verifySTD3",
          "package": "gnuidn",
          "signature": "Bool",
          "source": "src/Data-Text-IDN-IDNA.html#Flags",
          "type": "function"
        },
        "index": {
          "description": "Check output to make sure it is STD3-conforming host name",
          "hierarchy": "Data Text IDN IDNA",
          "module": "Data.Text.IDN.IDNA",
          "name": "verifySTD3",
          "package": "gnuidn",
          "partial": "STD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-IDNA.html#v:verifySTD3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePunycode is a simple and efficient transfer encoding syntax designed\n for use with Internationalized Domain Names in Applications (IDNA). It\n uniquely and reversibly transforms a Unicode string into ASCII. ASCII\n characters in the Unicode string are represented literally, and non-ASCII\n characters are represented by ASCII characters that are allowed in host\n name labels (letters, digits, and hyphens).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Text.IDN.Punycode",
          "name": "Punycode",
          "package": "gnuidn",
          "source": "src/Data-Text-IDN-Punycode.html",
          "type": "module"
        },
        "index": {
          "description": "Punycode is simple and efficient transfer encoding syntax designed for use with Internationalized Domain Names in Applications IDNA It uniquely and reversibly transforms Unicode string into ASCII ASCII characters in the Unicode string are represented literally and non-ASCII characters are represented by ASCII characters that are allowed in host name labels letters digits and hyphens",
          "hierarchy": "Data Text IDN Punycode",
          "module": "Data.Text.IDN.Punycode",
          "name": "Punycode",
          "package": "gnuidn",
          "partial": "Punycode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-Punycode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into unicode. The second component of the\n result is a case predicate; it indicates whether a particular character\n position of the result string should be upper-cased.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the input is invalid.\n\u003c/p\u003e",
          "module": "Data.Text.IDN.Punycode",
          "name": "decode",
          "package": "gnuidn",
          "signature": "ByteString -\u003e Maybe (Text, Integer -\u003e Bool)",
          "source": "src/Data-Text-IDN-Punycode.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString into unicode The second component of the result is case predicate it indicates whether particular character position of the result string should be upper-cased Returns Nothing if the input is invalid",
          "hierarchy": "Data Text IDN Punycode",
          "module": "Data.Text.IDN.Punycode",
          "name": "decode",
          "normalized": "ByteString-\u003eMaybe(Text,Integer-\u003eBool)",
          "package": "gnuidn",
          "signature": "ByteString-\u003eMaybe(Text,Integer-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-Punycode.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode unicode into an ASCII-only \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. If provided, the\n case predicate indicates whether to uppercase the corresponding character\n after decoding.\n\u003c/p\u003e",
          "module": "Data.Text.IDN.Punycode",
          "name": "encode",
          "package": "gnuidn",
          "signature": "Text -\u003e Maybe (Integer -\u003e Bool) -\u003e ByteString",
          "source": "src/Data-Text-IDN-Punycode.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode unicode into an ASCII-only ByteString If provided the case predicate indicates whether to uppercase the corresponding character after decoding",
          "hierarchy": "Data Text IDN Punycode",
          "module": "Data.Text.IDN.Punycode",
          "name": "encode",
          "normalized": "Text-\u003eMaybe(Integer-\u003eBool)-\u003eByteString",
          "package": "gnuidn",
          "signature": "Text-\u003eMaybe(Integer-\u003eBool)-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-Punycode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.StringPrep",
          "name": "StringPrep",
          "package": "gnuidn",
          "source": "src/Data-Text-IDN-StringPrep.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "StringPrep",
          "package": "gnuidn",
          "partial": "String Prep",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.StringPrep",
          "name": "Error",
          "package": "gnuidn",
          "source": "src/Data-Text-IDN-Internal.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "Error",
          "package": "gnuidn",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.StringPrep",
          "name": "Flags",
          "package": "gnuidn",
          "source": "src/Data-Text-IDN-StringPrep.html#Flags",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "Flags",
          "package": "gnuidn",
          "partial": "Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#t:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.StringPrep",
          "name": "Profile",
          "package": "gnuidn",
          "source": "src/Data-Text-IDN-StringPrep.html#Profile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "Profile",
          "package": "gnuidn",
          "partial": "Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#t:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.StringPrep",
          "name": "Flags",
          "package": "gnuidn",
          "signature": "Flags",
          "source": "src/Data-Text-IDN-StringPrep.html#Flags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "Flags",
          "package": "gnuidn",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf false, \u003ccode\u003e\u003ca\u003estringprep\u003c/a\u003e\u003c/code\u003e will return an error if the input\n contains characters not assigned to the profile.\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "allowUnassigned",
          "package": "gnuidn",
          "signature": "Bool",
          "source": "src/Data-Text-IDN-StringPrep.html#Flags",
          "type": "function"
        },
        "index": {
          "description": "If false stringprep will return an error if the input contains characters not assigned to the profile",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "allowUnassigned",
          "package": "gnuidn",
          "partial": "Unassigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:allowUnassigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003edefaultFlags = Flags True True False\u003c/pre\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "defaultFlags",
          "package": "gnuidn",
          "signature": "Flags",
          "source": "src/Data-Text-IDN-StringPrep.html#defaultFlags",
          "type": "function"
        },
        "index": {
          "description": "defaultFlags Flags True True False",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "defaultFlags",
          "package": "gnuidn",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:defaultFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable the BIDI step. Usually the profile specifies BIDI and\n NFKC settings, and applications should not override it unless in\n special situations.\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "enableBidi",
          "package": "gnuidn",
          "signature": "Bool",
          "source": "src/Data-Text-IDN-StringPrep.html#Flags",
          "type": "function"
        },
        "index": {
          "description": "Enable the BIDI step Usually the profile specifies BIDI and NFKC settings and applications should not override it unless in special situations",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "enableBidi",
          "package": "gnuidn",
          "partial": "Bidi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:enableBidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable the NFKC normalization, as well as selecting the NFKC\n case folding tables. Usually the profile specifies BIDI and NFKC\n settings, and applications should not override it unless in\n special situations.\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "enableNFKC",
          "package": "gnuidn",
          "signature": "Bool",
          "source": "src/Data-Text-IDN-StringPrep.html#Flags",
          "type": "function"
        },
        "index": {
          "description": "Enable the NFKC normalization as well as selecting the NFKC case folding tables Usually the profile specifies BIDI and NFKC settings and applications should not override it unless in special situations",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "enableNFKC",
          "package": "gnuidn",
          "partial": "NFKC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:enableNFKC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eiSCSI (RFC 3722)\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "iscsi",
          "package": "gnuidn",
          "signature": "Profile",
          "source": "src/Data-Text-IDN-StringPrep.html#iscsi",
          "type": "function"
        },
        "index": {
          "description": "iSCSI RFC",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "iscsi",
          "package": "gnuidn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:iscsi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKerberos 5\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "kerberos5",
          "package": "gnuidn",
          "signature": "Profile",
          "source": "src/Data-Text-IDN-StringPrep.html#kerberos5",
          "type": "function"
        },
        "index": {
          "description": "Kerberos",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "kerberos5",
          "package": "gnuidn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:kerberos5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNameprep (RFC 3491)\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "nameprep",
          "package": "gnuidn",
          "signature": "Profile",
          "source": "src/Data-Text-IDN-StringPrep.html#nameprep",
          "type": "function"
        },
        "index": {
          "description": "Nameprep RFC",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "nameprep",
          "package": "gnuidn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:nameprep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSASLprep (RFC 4013)\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "sasl",
          "package": "gnuidn",
          "signature": "Profile",
          "source": "src/Data-Text-IDN-StringPrep.html#sasl",
          "type": "function"
        },
        "index": {
          "description": "SASLprep RFC",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "sasl",
          "package": "gnuidn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:sasl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraft SASL ANONYMOUS\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "saslAnonymous",
          "package": "gnuidn",
          "signature": "Profile",
          "source": "src/Data-Text-IDN-StringPrep.html#saslAnonymous",
          "type": "function"
        },
        "index": {
          "description": "Draft SASL ANONYMOUS",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "saslAnonymous",
          "package": "gnuidn",
          "partial": "Anonymous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:saslAnonymous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.StringPrep",
          "name": "stringprep",
          "package": "gnuidn",
          "signature": "Profile -\u003e Flags -\u003e Text -\u003e Either Error Text",
          "source": "src/Data-Text-IDN-StringPrep.html#stringprep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "stringprep",
          "normalized": "Profile-\u003eFlags-\u003eText-\u003eEither Error Text",
          "package": "gnuidn",
          "signature": "Profile-\u003eFlags-\u003eText-\u003eEither Error Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:stringprep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Text.IDN.StringPrep",
          "name": "trace",
          "package": "gnuidn",
          "signature": "Profile",
          "source": "src/Data-Text-IDN-StringPrep.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "trace",
          "package": "gnuidn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXMPP node (RFC 3920)\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "xmppNode",
          "package": "gnuidn",
          "signature": "Profile",
          "source": "src/Data-Text-IDN-StringPrep.html#xmppNode",
          "type": "function"
        },
        "index": {
          "description": "XMPP node RFC",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "xmppNode",
          "package": "gnuidn",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:xmppNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXMPP resource (RFC 3920)\n\u003c/p\u003e",
          "module": "Data.Text.IDN.StringPrep",
          "name": "xmppResource",
          "package": "gnuidn",
          "signature": "Profile",
          "source": "src/Data-Text-IDN-StringPrep.html#xmppResource",
          "type": "function"
        },
        "index": {
          "description": "XMPP resource RFC",
          "hierarchy": "Data Text IDN StringPrep",
          "module": "Data.Text.IDN.StringPrep",
          "name": "xmppResource",
          "package": "gnuidn",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gnuidn/docs/Data-Text-IDN-StringPrep.html#v:xmppResource"
      }
    }
  ]
]