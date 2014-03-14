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
        "word": "hopenssl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrappers for \u003ca\u003eOpenSSL.Digest\u003c/a\u003e that supports lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.Digest.ByteString.Lazy",
          "name": "Lazy",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest-ByteString-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Wrappers for OpenSSL.Digest that supports lazy ByteString",
          "hierarchy": "OpenSSL Digest ByteString Lazy",
          "module": "OpenSSL.Digest.ByteString.Lazy",
          "name": "Lazy",
          "package": "hopenssl",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest-ByteString-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience wrapper which computes the given digest type of a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Unlike the monadic interface, this function does not\n allow the computation to be restarted.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest.ByteString.Lazy",
          "name": "digest",
          "package": "hopenssl",
          "signature": "MessageDigest -\u003e ByteString -\u003e IO [Word8]",
          "source": "src/OpenSSL-Digest-ByteString-Lazy.html#digest",
          "type": "function"
        },
        "index": {
          "description": "convenience wrapper which computes the given digest type of ByteString Unlike the monadic interface this function does not allow the computation to be restarted",
          "hierarchy": "OpenSSL Digest ByteString Lazy",
          "module": "OpenSSL.Digest.ByteString.Lazy",
          "name": "digest",
          "normalized": "MessageDigest-\u003eByteString-\u003eIO[Word]",
          "package": "hopenssl",
          "signature": "MessageDigest-\u003eByteString-\u003eIO[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest-ByteString-Lazy.html#v:digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the internal state with a block of data.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest.ByteString.Lazy",
          "name": "update",
          "package": "hopenssl",
          "signature": "ByteString -\u003e Digest Int",
          "source": "src/OpenSSL-Digest-ByteString-Lazy.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the internal state with block of data",
          "hierarchy": "OpenSSL Digest ByteString Lazy",
          "module": "OpenSSL.Digest.ByteString.Lazy",
          "name": "update",
          "normalized": "ByteString-\u003eDigest Int",
          "package": "hopenssl",
          "signature": "ByteString-\u003eDigest Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest-ByteString-Lazy.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrappers for \u003ca\u003eOpenSSL.Digest\u003c/a\u003e that supports \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "OpenSSL.Digest.ByteString",
          "name": "ByteString",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Wrappers for OpenSSL.Digest that supports ByteString",
          "hierarchy": "OpenSSL Digest ByteString",
          "module": "OpenSSL.Digest.ByteString",
          "name": "ByteString",
          "package": "hopenssl",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience wrapper which computes the given digest type of a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Unlike the monadic interface, this function does not\n allow the computation to be restarted.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest.ByteString",
          "name": "digest",
          "package": "hopenssl",
          "signature": "MessageDigest -\u003e ByteString -\u003e IO [Word8]",
          "source": "src/OpenSSL-Digest-ByteString.html#digest",
          "type": "function"
        },
        "index": {
          "description": "convenience wrapper which computes the given digest type of ByteString Unlike the monadic interface this function does not allow the computation to be restarted",
          "hierarchy": "OpenSSL Digest ByteString",
          "module": "OpenSSL.Digest.ByteString",
          "name": "digest",
          "normalized": "MessageDigest-\u003eByteString-\u003eIO[Word]",
          "package": "hopenssl",
          "signature": "MessageDigest-\u003eByteString-\u003eIO[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest-ByteString.html#v:digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the internal state with a block of data.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest.ByteString",
          "name": "update",
          "package": "hopenssl",
          "signature": "ByteString -\u003e Digest Int",
          "source": "src/OpenSSL-Digest-ByteString.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the internal state with block of data",
          "hierarchy": "OpenSSL Digest ByteString",
          "module": "OpenSSL.Digest.ByteString",
          "name": "update",
          "normalized": "ByteString-\u003eDigest Int",
          "package": "hopenssl",
          "signature": "ByteString-\u003eDigest Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest-ByteString.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module proivdes a high-level API to the message\n   digest algorithms found in OpenSSL's \u003ccode\u003ecrypto\u003c/code\u003e library.\n   Link with \u003ccode\u003e-lcrypto\u003c/code\u003e when using this module.\n\u003c/p\u003e\u003cp\u003eHere is a short example program which runs all available\n   digests on a string:\n\u003c/p\u003e\u003cpre\u003e example :: (Enum a) =\u003e [a] -\u003e IO [String]\n example input = mapM hash [minBound .. maxBound]\n   where\n   hash f = fmap (fmt f) (digest f (toWord input))\n   fmt f  = shows f . (\":    \\t\"++) . (\u003e\u003e=toHex)\n   toWord = map (toEnum . fromEnum)\n\u003c/pre\u003e\u003cp\u003eAnd when called, the function prints:\n\u003c/p\u003e\u003cpre\u003e *Digest\u003e example \"open sesame\" \u003e\u003e= putStr . unlines\n Null:\n MD5:       54ef36ec71201fdf9d1423fd26f97f6b\n SHA:       2ccefef64c76ac0d42ca1657457977675890c42f\n SHA1:      5bcaff7f22ff533ca099b3408ead876c0ebba9a7\n DSS:       5bcaff7f22ff533ca099b3408ead876c0ebba9a7\n DSS1:      5bcaff7f22ff533ca099b3408ead876c0ebba9a7\n RIPEMD160: bdb2bba6ec93bd566dc1181cadbc92176aa78382\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "OpenSSL.Digest",
          "name": "Digest",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest.html",
          "type": "module"
        },
        "index": {
          "description": "This module proivdes high-level API to the message digest algorithms found in OpenSSL crypto library Link with lcrypto when using this module Here is short example program which runs all available digests on string example Enum IO String example input mapM hash minBound maxBound where hash fmap fmt digest toWord input fmt shows toHex toWord map toEnum fromEnum And when called the function prints Digest example open sesame putStr unlines Null MD5 ef36ec71201fdf9d1423fd26f97f6b SHA ccefef64c76ac0d42ca1657457977675890c42f SHA1 bcaff7f22ff533ca099b3408ead876c0ebba9a7 DSS bcaff7f22ff533ca099b3408ead876c0ebba9a7 DSS1 bcaff7f22ff533ca099b3408ead876c0ebba9a7 RIPEMD160 bdb2bba6ec93bd566dc1181cadbc92176aa78382",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "Digest",
          "package": "hopenssl",
          "partial": "Digest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "Context",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest.html#Context",
          "type": "type"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "Context",
          "package": "hopenssl",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic interface to the digest computation.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "Digest",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest.html#Digest",
          "type": "type"
        },
        "index": {
          "description": "monadic interface to the digest computation",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "Digest",
          "package": "hopenssl",
          "partial": "Digest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#t:Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe internal EVP context.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "DigestState",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest.html#DigestState",
          "type": "newtype"
        },
        "index": {
          "description": "The internal EVP context",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "DigestState",
          "package": "hopenssl",
          "partial": "Digest State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#t:DigestState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "MDEngine",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest.html#MDEngine",
          "type": "type"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "MDEngine",
          "package": "hopenssl",
          "partial": "MDEngine",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#t:MDEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message digest algorithms we support.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "MessageDigest",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest.html#MessageDigest",
          "type": "data"
        },
        "index": {
          "description": "The message digest algorithms we support",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "MessageDigest",
          "package": "hopenssl",
          "partial": "Message Digest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#t:MessageDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe EVP context used by OpenSSL is opaque for us; we\n only access it through a \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "OpaqueContext",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest.html#OpaqueContext",
          "type": "data"
        },
        "index": {
          "description": "The EVP context used by OpenSSL is opaque for us we only access it through Ptr",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "OpaqueContext",
          "package": "hopenssl",
          "partial": "Opaque Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#t:OpaqueContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message digest engines are opaque for us as well.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "OpaqueMDEngine",
          "package": "hopenssl",
          "source": "src/OpenSSL-Digest.html#OpaqueMDEngine",
          "type": "data"
        },
        "index": {
          "description": "The message digest engines are opaque for us as well",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "OpaqueMDEngine",
          "package": "hopenssl",
          "partial": "Opaque MDEngine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#t:OpaqueMDEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e160 bit (SHA1)\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "DSS",
          "package": "hopenssl",
          "signature": "DSS",
          "source": "src/OpenSSL-Digest.html#MessageDigest",
          "type": "function"
        },
        "index": {
          "description": "bit SHA1",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "DSS",
          "package": "hopenssl",
          "partial": "DSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:DSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e160 bit (SHA1)\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "DSS1",
          "package": "hopenssl",
          "signature": "DSS1",
          "source": "src/OpenSSL-Digest.html#MessageDigest",
          "type": "function"
        },
        "index": {
          "description": "bit SHA1",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "DSS1",
          "package": "hopenssl",
          "partial": "DSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:DSS1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "DST",
          "package": "hopenssl",
          "signature": "DST (Ptr OpaqueContext)",
          "source": "src/OpenSSL-Digest.html#DigestState",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "DST",
          "package": "hopenssl",
          "partial": "DST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:DST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e128 bit\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "MD5",
          "package": "hopenssl",
          "signature": "MD5",
          "source": "src/OpenSSL-Digest.html#MessageDigest",
          "type": "function"
        },
        "index": {
          "description": "bit",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "MD5",
          "package": "hopenssl",
          "partial": "MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:MD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0 bit\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "Null",
          "package": "hopenssl",
          "signature": "Null",
          "source": "src/OpenSSL-Digest.html#MessageDigest",
          "type": "function"
        },
        "index": {
          "description": "bit",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "Null",
          "package": "hopenssl",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "OpaqueContext",
          "package": "hopenssl",
          "signature": "OpaqueContext",
          "source": "src/OpenSSL-Digest.html#OpaqueContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "OpaqueContext",
          "package": "hopenssl",
          "partial": "Opaque Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:OpaqueContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "OpaqueMDEngine",
          "package": "hopenssl",
          "signature": "OpaqueMDEngine",
          "source": "src/OpenSSL-Digest.html#OpaqueMDEngine",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "OpaqueMDEngine",
          "package": "hopenssl",
          "partial": "Opaque MDEngine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:OpaqueMDEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e160 bit\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "RIPEMD160",
          "package": "hopenssl",
          "signature": "RIPEMD160",
          "source": "src/OpenSSL-Digest.html#MessageDigest",
          "type": "function"
        },
        "index": {
          "description": "bit",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "RIPEMD160",
          "package": "hopenssl",
          "partial": "RIPEMD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:RIPEMD160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e160 bit\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "SHA",
          "package": "hopenssl",
          "signature": "SHA",
          "source": "src/OpenSSL-Digest.html#MessageDigest",
          "type": "function"
        },
        "index": {
          "description": "bit",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "SHA",
          "package": "hopenssl",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:SHA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e160 bit\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "SHA1",
          "package": "hopenssl",
          "signature": "SHA1",
          "source": "src/OpenSSL-Digest.html#MessageDigest",
          "type": "function"
        },
        "index": {
          "description": "bit",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "SHA1",
          "package": "hopenssl",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:SHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an EVP context. May be \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "ctxCreate",
          "package": "hopenssl",
          "signature": "IO Context",
          "source": "src/OpenSSL-Digest.html#ctxCreate",
          "type": "function"
        },
        "index": {
          "description": "Create an EVP context May be nullPtr",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "ctxCreate",
          "package": "hopenssl",
          "partial": "Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:ctxCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy an EVP context and free the allocated resources.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "ctxDestroy",
          "package": "hopenssl",
          "signature": "Context -\u003e IO ()",
          "source": "src/OpenSSL-Digest.html#ctxDestroy",
          "type": "function"
        },
        "index": {
          "description": "Destroy an EVP context and free the allocated resources",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "ctxDestroy",
          "normalized": "Context-\u003eIO()",
          "package": "hopenssl",
          "partial": "Destroy",
          "signature": "Context-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:ctxDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize an EVP context.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "ctxInit",
          "package": "hopenssl",
          "signature": "Context -\u003e IO ()",
          "source": "src/OpenSSL-Digest.html#ctxInit",
          "type": "function"
        },
        "index": {
          "description": "Initialize an EVP context",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "ctxInit",
          "normalized": "Context-\u003eIO()",
          "package": "hopenssl",
          "partial": "Init",
          "signature": "Context-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:ctxInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience wrapper which computes the given digest\n over a list of \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e. Unlike the monadic interface,\n this function does not allow the computation to be\n restarted.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "digest",
          "package": "hopenssl",
          "signature": "MessageDigest -\u003e [Word8] -\u003e IO [Word8]",
          "source": "src/OpenSSL-Digest.html#digest",
          "type": "function"
        },
        "index": {
          "description": "convenience wrapper which computes the given digest over list of Word8 Unlike the monadic interface this function does not allow the computation to be restarted",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "digest",
          "normalized": "MessageDigest-\u003e[Word]-\u003eIO[Word]",
          "package": "hopenssl",
          "signature": "MessageDigest-\u003e[Word]-\u003eIO[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up the digest computation and return the final\n digest. Do not call repeatedly on the same context!\n Returns \u003ccode\u003e/=0\u003c/code\u003e in case of an error. The pointer to the\n unsigned integer may be \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e. If it is not,\n \u003ccode\u003e\u003ca\u003edigestFinal\u003c/a\u003e\u003c/code\u003e will store the length of the computed\n digest there.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "digestFinal",
          "package": "hopenssl",
          "signature": "Context -\u003e Ptr Word8 -\u003e Ptr CUInt -\u003e IO CInt",
          "source": "src/OpenSSL-Digest.html#digestFinal",
          "type": "function"
        },
        "index": {
          "description": "Wrap up the digest computation and return the final digest Do not call repeatedly on the same context Returns in case of an error The pointer to the unsigned integer may be nullPtr If it is not digestFinal will store the length of the computed digest there",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "digestFinal",
          "normalized": "Context-\u003ePtr Word-\u003ePtr CUInt-\u003eIO CInt",
          "package": "hopenssl",
          "partial": "Final",
          "signature": "Context-\u003ePtr Word-\u003ePtr CUInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:digestFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the message digest engine for \u003ccode\u003e\u003ca\u003edigestUpdate\u003c/a\u003e\u003c/code\u003e calls.\n Returns \u003ccode\u003e/=0\u003c/code\u003e in case of an error.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "digestInit",
          "package": "hopenssl",
          "signature": "Context -\u003e MDEngine -\u003e IO CInt",
          "source": "src/OpenSSL-Digest.html#digestInit",
          "type": "function"
        },
        "index": {
          "description": "Set the message digest engine for digestUpdate calls Returns in case of an error",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "digestInit",
          "normalized": "Context-\u003eMDEngine-\u003eIO CInt",
          "package": "hopenssl",
          "partial": "Init",
          "signature": "Context-\u003eMDEngine-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:digestInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the internal context with a block of input.\n Returns \u003ccode\u003e/=0\u003c/code\u003e in case of an error.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "digestUpdate",
          "package": "hopenssl",
          "signature": "Context -\u003e Ptr Word8 -\u003e CUInt -\u003e IO CInt",
          "source": "src/OpenSSL-Digest.html#digestUpdate",
          "type": "function"
        },
        "index": {
          "description": "Update the internal context with block of input Returns in case of an error",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "digestUpdate",
          "normalized": "Context-\u003ePtr Word-\u003eCUInt-\u003eIO CInt",
          "package": "hopenssl",
          "partial": "Update",
          "signature": "Context-\u003ePtr Word-\u003eCUInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:digestUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up the computation, add padding, do whatever has to\n be done, and return the final hash. The length of the\n result depends on the chosen \u003ccode\u003e\u003ca\u003eMessageDigest\u003c/a\u003e\u003c/code\u003e. Do not call\n more than once!\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "final",
          "package": "hopenssl",
          "signature": "Digest [Word8]",
          "source": "src/OpenSSL-Digest.html#final",
          "type": "function"
        },
        "index": {
          "description": "Wrap up the computation add padding do whatever has to be done and return the final hash The length of the result depends on the chosen MessageDigest Do not call more than once",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "final",
          "normalized": "Digest[Word]",
          "package": "hopenssl",
          "signature": "Digest[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum size of all message digests supported by\n OpenSSL. Allocate a buffer of this size for \u003ccode\u003e\u003ca\u003edigestFinal\u003c/a\u003e\u003c/code\u003e\n if you want to stay generic.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "maxMDSize",
          "package": "hopenssl",
          "signature": "Int",
          "source": "src/OpenSSL-Digest.html#maxMDSize",
          "type": "function"
        },
        "index": {
          "description": "Maximum size of all message digests supported by OpenSSL Allocate buffer of this size for digestFinal if you want to stay generic",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "maxMDSize",
          "package": "hopenssl",
          "partial": "MDSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:maxMDSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "mdDSS",
          "package": "hopenssl",
          "signature": "IO MDEngine",
          "source": "src/OpenSSL-Digest.html#mdDSS",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "mdDSS",
          "package": "hopenssl",
          "partial": "DSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:mdDSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "mdDSS1",
          "package": "hopenssl",
          "signature": "IO MDEngine",
          "source": "src/OpenSSL-Digest.html#mdDSS1",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "mdDSS1",
          "package": "hopenssl",
          "partial": "DSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:mdDSS1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "mdMD5",
          "package": "hopenssl",
          "signature": "IO MDEngine",
          "source": "src/OpenSSL-Digest.html#mdMD5",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "mdMD5",
          "package": "hopenssl",
          "partial": "MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:mdMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "mdNull",
          "package": "hopenssl",
          "signature": "IO MDEngine",
          "source": "src/OpenSSL-Digest.html#mdNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "mdNull",
          "package": "hopenssl",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:mdNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "mdRIPEMD160",
          "package": "hopenssl",
          "signature": "IO MDEngine",
          "source": "src/OpenSSL-Digest.html#mdRIPEMD160",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "mdRIPEMD160",
          "package": "hopenssl",
          "partial": "RIPEMD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:mdRIPEMD160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "mdSHA",
          "package": "hopenssl",
          "signature": "IO MDEngine",
          "source": "src/OpenSSL-Digest.html#mdSHA",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "mdSHA",
          "package": "hopenssl",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:mdSHA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "OpenSSL.Digest",
          "name": "mdSHA1",
          "package": "hopenssl",
          "signature": "IO MDEngine",
          "source": "src/OpenSSL-Digest.html#mdSHA1",
          "type": "function"
        },
        "index": {
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "mdSHA1",
          "package": "hopenssl",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:mdSHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation with an initialized\n \u003ccode\u003e\u003ca\u003eDigestState\u003c/a\u003e\u003c/code\u003e. All resources will be freed when the\n computation returns.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "mkDigest",
          "package": "hopenssl",
          "signature": "MessageDigest -\u003e (DigestState -\u003e IO a) -\u003e IO a",
          "source": "src/OpenSSL-Digest.html#mkDigest",
          "type": "function"
        },
        "index": {
          "description": "Run an IO computation with an initialized DigestState All resources will be freed when the computation returns",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "mkDigest",
          "normalized": "MessageDigest-\u003e(DigestState-\u003eIO a)-\u003eIO a",
          "package": "hopenssl",
          "partial": "Digest",
          "signature": "MessageDigest-\u003e(DigestState-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:mkDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNeat helper to print digests with:\n \u003ccode\u003e\n   \\ws :: [Word8] -\u003e ws \u003e\u003e= toHex\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "toHex",
          "package": "hopenssl",
          "signature": "Word8 -\u003e String",
          "source": "src/OpenSSL-Digest.html#toHex",
          "type": "function"
        },
        "index": {
          "description": "Neat helper to print digests with ws Word8 ws toHex",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "toHex",
          "normalized": "Word-\u003eString",
          "package": "hopenssl",
          "partial": "Hex",
          "signature": "Word-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:toHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eMessageDigest\u003c/a\u003e\u003c/code\u003e type into the the corresponding\n \u003ccode\u003e\u003ca\u003eMDEngine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "toMDEngine",
          "package": "hopenssl",
          "signature": "MessageDigest -\u003e IO MDEngine",
          "source": "src/OpenSSL-Digest.html#toMDEngine",
          "type": "function"
        },
        "index": {
          "description": "Map MessageDigest type into the the corresponding MDEngine",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "toMDEngine",
          "normalized": "MessageDigest-\u003eIO MDEngine",
          "package": "hopenssl",
          "partial": "MDEngine",
          "signature": "MessageDigest-\u003eIO MDEngine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:toMDEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the internal state with a block of data. This\n function is just a wrapper for \u003ccode\u003e\u003ca\u003eupdate'\u003c/a\u003e\u003c/code\u003e, which creates\n an array in memory using \u003ccode\u003e\u003ca\u003ewithArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "update",
          "package": "hopenssl",
          "signature": "[Word8] -\u003e Digest ()",
          "source": "src/OpenSSL-Digest.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the internal state with block of data This function is just wrapper for update which creates an array in memory using withArray",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "update",
          "normalized": "[Word]-\u003eDigest()",
          "package": "hopenssl",
          "signature": "[Word]-\u003eDigest()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the internal state with a block of data from\n memory. This is the \u003cem\u003efaster\u003c/em\u003e version of \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "OpenSSL.Digest",
          "name": "update'",
          "package": "hopenssl",
          "signature": "(Ptr Word8, Int) -\u003e Digest ()",
          "source": "src/OpenSSL-Digest.html#update%27",
          "type": "function"
        },
        "index": {
          "description": "Update the internal state with block of data from memory This is the faster version of update",
          "hierarchy": "OpenSSL Digest",
          "module": "OpenSSL.Digest",
          "name": "update'",
          "normalized": "(Ptr Word,Int)-\u003eDigest()",
          "package": "hopenssl",
          "signature": "(Ptr Word,Int)-\u003eDigest()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopenssl/docs/OpenSSL-Digest.html#v:update-39-"
      }
    }
  ]
]