[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nano-cryptr/docs/System-Gnu-CryptR.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package wraps \u003ccode\u003eglibc\u003c/code\u003e's \u003ccode\u003ecrypt_r\u003c/code\u003e function in a thread-safe manner.\n\u003c/p\u003e\u003cpre\u003e\n $ ghci -XOverloadedStrings\n GHCi, version 6.12.3: http:\u003cem/\u003ewww.haskell.org\u003cem\u003eghc\u003c/em\u003e  :? for help\n Loading package ghc-prim ... linking ... done.\n Loading package integer-gmp ... linking ... done.\n Loading package base ... linking ... done.\n Loading package ffi-1.0 ... linking ... done.\n Prelude\u003e :m + System.Gnu.CryptR Data.ByteString.Char8\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e \u003ccode\u003e\u003ca\u003ecryptR\u003c/a\u003e\u003c/code\u003e \"password\" \"l3\"\n Loading package bytestring-0.9.1.7 ... linking ... done.\n Loading package nano-cryptr-0.1.1.1 ... linking ... done.\n \"l3vmImyenGFYg\"\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e \u003ccode\u003e\u003ca\u003ecryptR\u003c/a\u003e\u003c/code\u003e \"password1\" \"l3vmImyenGFYg\"\n \"l3vmImyenGFYg\"\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e x \u003c- \u003ccode\u003e\u003ca\u003enewCryptData\u003c/a\u003e\u003c/code\u003e\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e \u003ccode\u003e\u003ca\u003ecryptRIO\u003c/a\u003e\u003c/code\u003e x  \"password1\" \"l3vmImyenGFYg\"\n \"l3vmImyenGFYg\"\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e \u003ccode\u003e\u003ca\u003ecryptRIO\u003c/a\u003e\u003c/code\u003e x \"xpassword\" \"l3vmImyenGFYg\"\n \"l3odRN01x86RU\"\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e \u003ccode\u003e\u003ca\u003ecryptRIO\u003c/a\u003e\u003c/code\u003e x \"password\" \"l3vmImyenGFYg\"\n \"l3vmImyenGFYg\"\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e \u003ccode\u003e\u003ca\u003ecryptRIO\u003c/a\u003e\u003c/code\u003e x \"password\" \"$1$grufal$\"\n \"$1$grufal$KyfLpXJJ32ZZw9EqqMSav1\"\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e \u003ccode\u003e\u003ca\u003ecryptRIO\u003c/a\u003e\u003c/code\u003e x \"password1\" \"$1$grufal$\"\n \"$1$grufal$xi8N0nP2Fl22TxyW68uvV.\"\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e \u003ccode\u003e\u003ca\u003ecryptRIO\u003c/a\u003e\u003c/code\u003e x \"password1\" \"$1$grufal$KyfLpXJJ32ZZw9EqqMSav1\"\n \"$1$grufal$xi8N0nP2Fl22TxyW68uvV.\"\n Prelude System.Gnu.CryptR Data.ByteString.Char8\u003e \u003ccode\u003e\u003ca\u003ecryptRIO\u003c/a\u003e\u003c/code\u003e x \"password\" \"$1$grufal$KyfLpXJJ32ZZw9EqqMSav1\"\n \"$1$grufal$KyfLpXJJ32ZZw9EqqMSav1\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Gnu.CryptR",
        "fct-package": "nano-cryptr",
        "fct-signature": "module",
        "fct-source": "src/System-Gnu-CryptR.html",
        "fct-type": "module",
        "title": "CryptR"
      },
      "index": {
        "description": "This package wraps glibc crypt function in thread-safe manner ghci XOverloadedStrings GHCi version http www.haskell.org ghc for help Loading package ghc-prim linking done Loading package integer-gmp linking done Loading package base linking done Loading package ffi-1.0 linking done Prelude System.Gnu.CryptR Data.ByteString.Char8 Prelude System.Gnu.CryptR Data.ByteString.Char8 cryptR password l3 Loading package bytestring-0.9.1.7 linking done Loading package nano-cryptr-0.1.1.1 linking done l3vmImyenGFYg Prelude System.Gnu.CryptR Data.ByteString.Char8 cryptR password1 l3vmImyenGFYg l3vmImyenGFYg Prelude System.Gnu.CryptR Data.ByteString.Char8 newCryptData Prelude System.Gnu.CryptR Data.ByteString.Char8 cryptRIO password1 l3vmImyenGFYg l3vmImyenGFYg Prelude System.Gnu.CryptR Data.ByteString.Char8 cryptRIO xpassword l3vmImyenGFYg l3odRN01x86RU Prelude System.Gnu.CryptR Data.ByteString.Char8 cryptRIO password l3vmImyenGFYg l3vmImyenGFYg Prelude System.Gnu.CryptR Data.ByteString.Char8 cryptRIO password grufal grufal KyfLpXJJ32ZZw9EqqMSav1 Prelude System.Gnu.CryptR Data.ByteString.Char8 cryptRIO password1 grufal grufal xi8N0nP2Fl22TxyW68uvV Prelude System.Gnu.CryptR Data.ByteString.Char8 cryptRIO password1 grufal KyfLpXJJ32ZZw9EqqMSav1 grufal xi8N0nP2Fl22TxyW68uvV Prelude System.Gnu.CryptR Data.ByteString.Char8 cryptRIO password grufal KyfLpXJJ32ZZw9EqqMSav1 grufal KyfLpXJJ32ZZw9EqqMSav1",
        "hierarchy": "System Gnu CryptR",
        "module": "System.Gnu.CryptR",
        "name": "CryptR",
        "normalized": "",
        "package": "nano-cryptr",
        "partial": "Crypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nano-cryptr/docs/System-Gnu-CryptR.html#t:CryptData",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCryptData\u003c/a\u003e\u003c/code\u003e is an opaque wrapper around the state used by\n \u003ccode\u003ecrypt_r\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Gnu.CryptR",
        "fct-package": "nano-cryptr",
        "fct-signature": "data",
        "fct-source": "src/System-Gnu-CryptR.html#CryptData",
        "fct-type": "data",
        "title": "CryptData"
      },
      "index": {
        "description": "CryptData is an opaque wrapper around the state used by crypt",
        "hierarchy": "System Gnu CryptR",
        "module": "System.Gnu.CryptR",
        "name": "CryptData",
        "normalized": "",
        "package": "nano-cryptr",
        "partial": "Crypt Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nano-cryptr/docs/System-Gnu-CryptR.html#v:cryptR",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a pure, thread-safe interface to the functionality\n provided by \u003ccode\u003eglibc\u003c/code\u003e's \u003ccode\u003ecrypt_r\u003c/code\u003e.  It uses \u003ccode\u003ecrypt_r\u003c/code\u003e internally,\n allocating a single-use buffer for each call.  Because the buffer\n is decently large and needs to be initialized for each call, this\n function has significantly more overhead on multiple calls than\n using \u003ccode\u003e\u003ca\u003enewCryptData\u003c/a\u003e\u003c/code\u003e followed by multiple uses of \u003ccode\u003e\u003ca\u003ecryptRIO\u003c/a\u003e\u003c/code\u003e.  This\n is provided as a convenience function when the overhead is not as\n important as the simplicity of this interface.\n\u003c/p\u003e",
        "fct-module": "System.Gnu.CryptR",
        "fct-package": "nano-cryptr",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "cryptR"
      },
      "index": {
        "description": "This is pure thread-safe interface to the functionality provided by glibc crypt It uses crypt internally allocating single-use buffer for each call Because the buffer is decently large and needs to be initialized for each call this function has significantly more overhead on multiple calls than using newCryptData followed by multiple uses of cryptRIO This is provided as convenience function when the overhead is not as important as the simplicity of this interface",
        "hierarchy": "System Gnu CryptR",
        "module": "System.Gnu.CryptR",
        "name": "cryptR",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "nano-cryptr",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nano-cryptr/docs/System-Gnu-CryptR.html#v:cryptRIO",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a thread-safe interface to the functionality provided by\n \u003ccode\u003eglibc\u003c/code\u003e's \u003ccode\u003ecrypt_r\u003c/code\u003e.  It protects against concurrent use of the\n same \u003ccode\u003e\u003ca\u003eCryptData\u003c/a\u003e\u003c/code\u003e value internally.  This means that it's\n potentially a performance bottleneck, and you may wish to use\n multiple \u003ccode\u003e\u003ca\u003eCryptData\u003c/a\u003e\u003c/code\u003e values if high concurrency is necessary.\n\u003c/p\u003e\u003cp\u003eThis interface avoids initializing a new \u003ccode\u003e\u003ca\u003eCryptData\u003c/a\u003e\u003c/code\u003e for each call,\n as is done by the \u003ccode\u003e\u003ca\u003ecryptR\u003c/a\u003e\u003c/code\u003e call\n\u003c/p\u003e",
        "fct-module": "System.Gnu.CryptR",
        "fct-package": "nano-cryptr",
        "fct-signature": "CryptData-\u003e ByteString-\u003e ByteString-\u003e IO ByteString",
        "fct-type": "function",
        "title": "cryptRIO"
      },
      "index": {
        "description": "This is thread-safe interface to the functionality provided by glibc crypt It protects against concurrent use of the same CryptData value internally This means that it potentially performance bottleneck and you may wish to use multiple CryptData values if high concurrency is necessary This interface avoids initializing new CryptData for each call as is done by the cryptR call",
        "hierarchy": "System Gnu CryptR",
        "module": "System.Gnu.CryptR",
        "name": "cryptRIO",
        "normalized": "CryptData-\u003eByteString-\u003eByteString-\u003eIO ByteString",
        "package": "nano-cryptr",
        "partial": "RIO",
        "signature": "CryptData-\u003eByteString-\u003eByteString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nano-cryptr/docs/System-Gnu-CryptR.html#v:newCryptData",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eCryptData\u003c/a\u003e\u003c/code\u003e value.  It uses \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e to free the\n underlying data structure properly when it is garbage collected.\n\u003c/p\u003e",
        "fct-module": "System.Gnu.CryptR",
        "fct-package": "nano-cryptr",
        "fct-signature": "IO CryptData",
        "fct-source": "src/System-Gnu-CryptR.html#newCryptData",
        "fct-type": "function",
        "title": "newCryptData"
      },
      "index": {
        "description": "Create new CryptData value It uses ForeignPtr to free the underlying data structure properly when it is garbage collected",
        "hierarchy": "System Gnu CryptR",
        "module": "System.Gnu.CryptR",
        "name": "newCryptData",
        "normalized": "",
        "package": "nano-cryptr",
        "partial": "Crypt Data",
        "signature": ""
      }
    }
  }
]