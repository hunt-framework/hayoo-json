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
        "word": "cryptohash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing MD2 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.MD2",
          "name": "MD2",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-MD2.html",
          "type": "module"
        },
        "index": {
          "description": "module containing MD2 bindings",
          "hierarchy": "Crypto Hash MD2",
          "module": "Crypto.Hash.MD2",
          "name": "MD2",
          "package": "cryptohash",
          "partial": "MD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMD2 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD2",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-MD2.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "MD2 Context",
          "hierarchy": "Crypto Hash MD2",
          "module": "Crypto.Hash.MD2",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD2.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.MD2",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-MD2.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash MD2",
          "module": "Crypto.Hash.MD2",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD2.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD2",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-MD2.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash MD2",
          "module": "Crypto.Hash.MD2",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD2.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD2",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-MD2.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash MD2",
          "module": "Crypto.Hash.MD2",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD2.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD2",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-MD2.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash MD2",
          "module": "Crypto.Hash.MD2",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD2.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD2",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-MD2.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash MD2",
          "module": "Crypto.Hash.MD2",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD2.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD2",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-MD2.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash MD2",
          "module": "Crypto.Hash.MD2",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD2.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD2",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-MD2.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash MD2",
          "module": "Crypto.Hash.MD2",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD2.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing MD4 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.MD4",
          "name": "MD4",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-MD4.html",
          "type": "module"
        },
        "index": {
          "description": "module containing MD4 bindings",
          "hierarchy": "Crypto Hash MD4",
          "module": "Crypto.Hash.MD4",
          "name": "MD4",
          "package": "cryptohash",
          "partial": "MD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMD4 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD4",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-MD4.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "MD4 Context",
          "hierarchy": "Crypto Hash MD4",
          "module": "Crypto.Hash.MD4",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD4.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.MD4",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-MD4.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash MD4",
          "module": "Crypto.Hash.MD4",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD4.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD4",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-MD4.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash MD4",
          "module": "Crypto.Hash.MD4",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD4.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD4",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-MD4.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash MD4",
          "module": "Crypto.Hash.MD4",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD4.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD4",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-MD4.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash MD4",
          "module": "Crypto.Hash.MD4",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD4.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD4",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-MD4.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash MD4",
          "module": "Crypto.Hash.MD4",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD4.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD4",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-MD4.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash MD4",
          "module": "Crypto.Hash.MD4",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD4.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD4",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-MD4.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash MD4",
          "module": "Crypto.Hash.MD4",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD4.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing MD5 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.MD5",
          "name": "MD5",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-MD5.html",
          "type": "module"
        },
        "index": {
          "description": "module containing MD5 bindings",
          "hierarchy": "Crypto Hash MD5",
          "module": "Crypto.Hash.MD5",
          "name": "MD5",
          "package": "cryptohash",
          "partial": "MD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMD5 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD5",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-MD5.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "MD5 Context",
          "hierarchy": "Crypto Hash MD5",
          "module": "Crypto.Hash.MD5",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD5.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.MD5",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-MD5.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash MD5",
          "module": "Crypto.Hash.MD5",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD5.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD5",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-MD5.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash MD5",
          "module": "Crypto.Hash.MD5",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD5.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD5",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-MD5.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash MD5",
          "module": "Crypto.Hash.MD5",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD5.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD5",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-MD5.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash MD5",
          "module": "Crypto.Hash.MD5",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD5.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD5",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-MD5.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash MD5",
          "module": "Crypto.Hash.MD5",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD5.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD5",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-MD5.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash MD5",
          "module": "Crypto.Hash.MD5",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD5.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.MD5",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-MD5.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash MD5",
          "module": "Crypto.Hash.MD5",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-MD5.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing RIPEMD160 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "RIPEMD160",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-RIPEMD160.html",
          "type": "module"
        },
        "index": {
          "description": "module containing RIPEMD160 bindings",
          "hierarchy": "Crypto Hash RIPEMD160",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "RIPEMD160",
          "package": "cryptohash",
          "partial": "RIPEMD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-RIPEMD160.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRIPEMD160 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-RIPEMD160.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "RIPEMD160 Context",
          "hierarchy": "Crypto Hash RIPEMD160",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-RIPEMD160.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.RIPEMD160",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-RIPEMD160.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash RIPEMD160",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-RIPEMD160.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-RIPEMD160.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash RIPEMD160",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-RIPEMD160.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-RIPEMD160.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash RIPEMD160",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-RIPEMD160.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-RIPEMD160.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash RIPEMD160",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-RIPEMD160.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-RIPEMD160.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash RIPEMD160",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-RIPEMD160.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-RIPEMD160.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash RIPEMD160",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-RIPEMD160.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-RIPEMD160.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash RIPEMD160",
          "module": "Crypto.Hash.RIPEMD160",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-RIPEMD160.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing SHA1 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.SHA1",
          "name": "SHA1",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA1.html",
          "type": "module"
        },
        "index": {
          "description": "module containing SHA1 bindings",
          "hierarchy": "Crypto Hash SHA1",
          "module": "Crypto.Hash.SHA1",
          "name": "SHA1",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA1 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA1",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA1.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "SHA1 Context",
          "hierarchy": "Crypto Hash SHA1",
          "module": "Crypto.Hash.SHA1",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA1.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.SHA1",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-SHA1.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash SHA1",
          "module": "Crypto.Hash.SHA1",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA1.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA1",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA1.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash SHA1",
          "module": "Crypto.Hash.SHA1",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA1.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA1",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA1.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA1",
          "module": "Crypto.Hash.SHA1",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA1.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA1",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA1.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA1",
          "module": "Crypto.Hash.SHA1",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA1.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA1",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-SHA1.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash SHA1",
          "module": "Crypto.Hash.SHA1",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA1.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA1",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA1.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash SHA1",
          "module": "Crypto.Hash.SHA1",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA1.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA1",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA1.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash SHA1",
          "module": "Crypto.Hash.SHA1",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA1.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing SHA224 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.SHA224",
          "name": "SHA224",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA224.html",
          "type": "module"
        },
        "index": {
          "description": "module containing SHA224 bindings",
          "hierarchy": "Crypto Hash SHA224",
          "module": "Crypto.Hash.SHA224",
          "name": "SHA224",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA224.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA224 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA224",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA224.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "SHA224 Context",
          "hierarchy": "Crypto Hash SHA224",
          "module": "Crypto.Hash.SHA224",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA224.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.SHA224",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-SHA224.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash SHA224",
          "module": "Crypto.Hash.SHA224",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA224.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA224",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA224.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash SHA224",
          "module": "Crypto.Hash.SHA224",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA224.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA224",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA224.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA224",
          "module": "Crypto.Hash.SHA224",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA224.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA224",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA224.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA224",
          "module": "Crypto.Hash.SHA224",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA224.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA224",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-SHA224.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash SHA224",
          "module": "Crypto.Hash.SHA224",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA224.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA224",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA224.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash SHA224",
          "module": "Crypto.Hash.SHA224",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA224.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA224",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA224.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash SHA224",
          "module": "Crypto.Hash.SHA224",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA224.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing SHA256 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.SHA256",
          "name": "SHA256",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA256.html",
          "type": "module"
        },
        "index": {
          "description": "module containing SHA256 bindings",
          "hierarchy": "Crypto Hash SHA256",
          "module": "Crypto.Hash.SHA256",
          "name": "SHA256",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA256.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA256 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA256",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA256.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "SHA256 Context",
          "hierarchy": "Crypto Hash SHA256",
          "module": "Crypto.Hash.SHA256",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA256.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.SHA256",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-SHA256.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash SHA256",
          "module": "Crypto.Hash.SHA256",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA256.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA256",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA256.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash SHA256",
          "module": "Crypto.Hash.SHA256",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA256.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA256",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA256.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA256",
          "module": "Crypto.Hash.SHA256",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA256.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA256",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA256.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA256",
          "module": "Crypto.Hash.SHA256",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA256.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA256",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-SHA256.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash SHA256",
          "module": "Crypto.Hash.SHA256",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA256.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA256",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA256.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash SHA256",
          "module": "Crypto.Hash.SHA256",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA256.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA256",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA256.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash SHA256",
          "module": "Crypto.Hash.SHA256",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA256.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing SHA3 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.SHA3",
          "name": "SHA3",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA3.html",
          "type": "module"
        },
        "index": {
          "description": "module containing SHA3 bindings",
          "hierarchy": "Crypto Hash SHA3",
          "module": "Crypto.Hash.SHA3",
          "name": "SHA3",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA3 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA3",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA3.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "SHA3 Context",
          "hierarchy": "Crypto Hash SHA3",
          "module": "Crypto.Hash.SHA3",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA3.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.SHA3",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-SHA3.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash SHA3",
          "module": "Crypto.Hash.SHA3",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA3.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA3",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA3.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash SHA3",
          "module": "Crypto.Hash.SHA3",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA3.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA3",
          "name": "hash",
          "package": "cryptohash",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA3.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA3",
          "module": "Crypto.Hash.SHA3",
          "name": "hash",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA3.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA3",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA3.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA3",
          "module": "Crypto.Hash.SHA3",
          "name": "hashlazy",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA3.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA3",
          "name": "init",
          "package": "cryptohash",
          "signature": "Int -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA3.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash SHA3",
          "module": "Crypto.Hash.SHA3",
          "name": "init",
          "normalized": "Int-\u003eCtx",
          "package": "cryptohash",
          "signature": "Int-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA3.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA3",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA3.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash SHA3",
          "module": "Crypto.Hash.SHA3",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA3.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA3",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA3.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash SHA3",
          "module": "Crypto.Hash.SHA3",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA3.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing SHA384 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.SHA384",
          "name": "SHA384",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA384.html",
          "type": "module"
        },
        "index": {
          "description": "module containing SHA384 bindings",
          "hierarchy": "Crypto Hash SHA384",
          "module": "Crypto.Hash.SHA384",
          "name": "SHA384",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA384.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA384 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA384",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA384.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "SHA384 Context",
          "hierarchy": "Crypto Hash SHA384",
          "module": "Crypto.Hash.SHA384",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA384.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.SHA384",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-SHA384.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash SHA384",
          "module": "Crypto.Hash.SHA384",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA384.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA384",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA384.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash SHA384",
          "module": "Crypto.Hash.SHA384",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA384.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA384",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA384.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA384",
          "module": "Crypto.Hash.SHA384",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA384.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA384",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA384.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA384",
          "module": "Crypto.Hash.SHA384",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA384.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA384",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-SHA384.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash SHA384",
          "module": "Crypto.Hash.SHA384",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA384.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA384",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA384.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash SHA384",
          "module": "Crypto.Hash.SHA384",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA384.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA384",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA384.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash SHA384",
          "module": "Crypto.Hash.SHA384",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA384.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing SHA512 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.SHA512",
          "name": "SHA512",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA512.html",
          "type": "module"
        },
        "index": {
          "description": "module containing SHA512 bindings",
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "SHA512",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA512 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA512.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "SHA512 Context",
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.SHA512",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-SHA512.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA512.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA512.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA512.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-SHA512.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context using FIPS 180-4 for truncated SHA512\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512",
          "name": "init_t",
          "package": "cryptohash",
          "signature": "Int -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA512.html#init_t",
          "type": "function"
        },
        "index": {
          "description": "init context using FIPS for truncated SHA512",
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "init_t",
          "normalized": "Int-\u003eCtx",
          "package": "cryptohash",
          "signature": "Int-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#v:init_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA512.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA512.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash SHA512",
          "module": "Crypto.Hash.SHA512",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing SHA512/t\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.SHA512t",
          "name": "SHA512t",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA512t.html",
          "type": "module"
        },
        "index": {
          "description": "module containing SHA512",
          "hierarchy": "Crypto Hash SHA512t",
          "module": "Crypto.Hash.SHA512t",
          "name": "SHA512t",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512t.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA512 Context with variable size output\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512t",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-SHA512t.html#Ctx",
          "type": "data"
        },
        "index": {
          "description": "SHA512 Context with variable size output",
          "hierarchy": "Crypto Hash SHA512t",
          "module": "Crypto.Hash.SHA512t",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512t.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.SHA512t",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx !Int !Ctx",
          "source": "src/Crypto-Hash-SHA512t.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash SHA512t",
          "module": "Crypto.Hash.SHA512t",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512t.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512t",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA512t.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash SHA512t",
          "module": "Crypto.Hash.SHA512t",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512t.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512t",
          "name": "hash",
          "package": "cryptohash",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA512t.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA512t",
          "module": "Crypto.Hash.SHA512t",
          "name": "hash",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512t.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512t",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-SHA512t.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash SHA512t",
          "module": "Crypto.Hash.SHA512t",
          "name": "hashlazy",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512t.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512t",
          "name": "init",
          "package": "cryptohash",
          "signature": "Int -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA512t.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash SHA512t",
          "module": "Crypto.Hash.SHA512t",
          "name": "init",
          "normalized": "Int-\u003eCtx",
          "package": "cryptohash",
          "signature": "Int-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512t.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.SHA512t",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-SHA512t.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash SHA512t",
          "module": "Crypto.Hash.SHA512t",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-SHA512t.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing Skein256 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.Skein256",
          "name": "Skein256",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Skein256.html",
          "type": "module"
        },
        "index": {
          "description": "module containing Skein256 bindings",
          "hierarchy": "Crypto Hash Skein256",
          "module": "Crypto.Hash.Skein256",
          "name": "Skein256",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein256.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkein256 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein256",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Skein256.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "Skein256 Context",
          "hierarchy": "Crypto Hash Skein256",
          "module": "Crypto.Hash.Skein256",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein256.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.Skein256",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-Skein256.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash Skein256",
          "module": "Crypto.Hash.Skein256",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein256.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein256",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-Skein256.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash Skein256",
          "module": "Crypto.Hash.Skein256",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein256.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein256",
          "name": "hash",
          "package": "cryptohash",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-Skein256.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash Skein256",
          "module": "Crypto.Hash.Skein256",
          "name": "hash",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein256.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein256",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-Skein256.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash Skein256",
          "module": "Crypto.Hash.Skein256",
          "name": "hashlazy",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein256.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein256",
          "name": "init",
          "package": "cryptohash",
          "signature": "Int -\u003e Ctx",
          "source": "src/Crypto-Hash-Skein256.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash Skein256",
          "module": "Crypto.Hash.Skein256",
          "name": "init",
          "normalized": "Int-\u003eCtx",
          "package": "cryptohash",
          "signature": "Int-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein256.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein256",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-Skein256.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash Skein256",
          "module": "Crypto.Hash.Skein256",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein256.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein256",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-Skein256.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash Skein256",
          "module": "Crypto.Hash.Skein256",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein256.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing Skein512 bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.Skein512",
          "name": "Skein512",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Skein512.html",
          "type": "module"
        },
        "index": {
          "description": "module containing Skein512 bindings",
          "hierarchy": "Crypto Hash Skein512",
          "module": "Crypto.Hash.Skein512",
          "name": "Skein512",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein512.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkein512 Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein512",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Skein512.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "Skein512 Context",
          "hierarchy": "Crypto Hash Skein512",
          "module": "Crypto.Hash.Skein512",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein512.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.Skein512",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-Skein512.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash Skein512",
          "module": "Crypto.Hash.Skein512",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein512.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein512",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-Skein512.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash Skein512",
          "module": "Crypto.Hash.Skein512",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein512.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein512",
          "name": "hash",
          "package": "cryptohash",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-Skein512.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash Skein512",
          "module": "Crypto.Hash.Skein512",
          "name": "hash",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein512.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein512",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-Skein512.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash Skein512",
          "module": "Crypto.Hash.Skein512",
          "name": "hashlazy",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein512.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein512",
          "name": "init",
          "package": "cryptohash",
          "signature": "Int -\u003e Ctx",
          "source": "src/Crypto-Hash-Skein512.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash Skein512",
          "module": "Crypto.Hash.Skein512",
          "name": "init",
          "normalized": "Int-\u003eCtx",
          "package": "cryptohash",
          "signature": "Int-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein512.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein512",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-Skein512.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash Skein512",
          "module": "Crypto.Hash.Skein512",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein512.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Skein512",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-Skein512.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash Skein512",
          "module": "Crypto.Hash.Skein512",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Skein512.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing Tiger bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.Tiger",
          "name": "Tiger",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Tiger.html",
          "type": "module"
        },
        "index": {
          "description": "module containing Tiger bindings",
          "hierarchy": "Crypto Hash Tiger",
          "module": "Crypto.Hash.Tiger",
          "name": "Tiger",
          "package": "cryptohash",
          "partial": "Tiger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Tiger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTiger Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.Tiger",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Tiger.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "Tiger Context",
          "hierarchy": "Crypto Hash Tiger",
          "module": "Crypto.Hash.Tiger",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Tiger.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.Tiger",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-Tiger.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash Tiger",
          "module": "Crypto.Hash.Tiger",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Tiger.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Tiger",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-Tiger.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash Tiger",
          "module": "Crypto.Hash.Tiger",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Tiger.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Tiger",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-Tiger.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash Tiger",
          "module": "Crypto.Hash.Tiger",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Tiger.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Tiger",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-Tiger.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash Tiger",
          "module": "Crypto.Hash.Tiger",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Tiger.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.Tiger",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-Tiger.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash Tiger",
          "module": "Crypto.Hash.Tiger",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Tiger.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Tiger",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-Tiger.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash Tiger",
          "module": "Crypto.Hash.Tiger",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Tiger.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Tiger",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-Tiger.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash Tiger",
          "module": "Crypto.Hash.Tiger",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Tiger.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCrypto hash types definitions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.Types",
          "name": "Types",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Crypto hash types definitions",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "Types",
          "package": "cryptohash",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a context for a given hash algorithm.\n\u003c/p\u003e",
          "module": "Crypto.Hash.Types",
          "name": "Context",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Types.html#Context",
          "type": "newtype"
        },
        "index": {
          "description": "Represent context for given hash algorithm",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "Context",
          "package": "cryptohash",
          "partial": "Context",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a digest for a given hash algorithm.\n\u003c/p\u003e",
          "module": "Crypto.Hash.Types",
          "name": "Digest",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Types.html#Digest",
          "type": "newtype"
        },
        "index": {
          "description": "Represent digest for given hash algorithm",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "Digest",
          "package": "cryptohash",
          "partial": "Digest",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#t:Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass representing hashing algorithms.\n\u003c/p\u003e\u003cp\u003eThe hash algorithm is built over 3 primitives:\n\u003c/p\u003e\u003cp\u003einit     : create a new context\n   updates  : update the context with some strict bytestrings\n   finalize : finalize the context into a digest\n\u003c/p\u003e",
          "module": "Crypto.Hash.Types",
          "name": "HashAlgorithm",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Types.html#HashAlgorithm",
          "type": "class"
        },
        "index": {
          "description": "Class representing hashing algorithms The hash algorithm is built over primitives init create new context updates update the context with some strict bytestrings finalize finalize the context into digest",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "HashAlgorithm",
          "package": "cryptohash",
          "partial": "Hash Algorithm",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#t:HashAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.Types",
          "name": "Context",
          "package": "cryptohash",
          "signature": "Context ByteString",
          "source": "src/Crypto-Hash-Types.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "Context",
          "package": "cryptohash",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.Types",
          "name": "Digest",
          "package": "cryptohash",
          "signature": "Digest ByteString",
          "source": "src/Crypto-Hash-Types.html#Digest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "Digest",
          "package": "cryptohash",
          "partial": "Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the binary bytestring. deprecated use toBytes.\n\u003c/p\u003e",
          "module": "Crypto.Hash.Types",
          "name": "contextToByteString",
          "package": "cryptohash",
          "signature": "Context a -\u003e ByteString",
          "source": "src/Crypto-Hash-Types.html#contextToByteString",
          "type": "function"
        },
        "index": {
          "description": "return the binary bytestring deprecated use toBytes",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "contextToByteString",
          "normalized": "Context a-\u003eByteString",
          "package": "cryptohash",
          "partial": "To Byte String",
          "signature": "Context a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:contextToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to convert a binary digest bytestring to a digest.\n\u003c/p\u003e",
          "module": "Crypto.Hash.Types",
          "name": "digestFromByteString",
          "package": "cryptohash",
          "signature": "ByteString -\u003e Maybe (Digest a)",
          "source": "src/Crypto-Hash-Types.html#digestFromByteString",
          "type": "method"
        },
        "index": {
          "description": "Try to convert binary digest bytestring to digest",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "digestFromByteString",
          "normalized": "ByteString-\u003eMaybe(Digest a)",
          "package": "cryptohash",
          "partial": "From Byte String",
          "signature": "ByteString-\u003eMaybe(Digest a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:digestFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use toBytes from byteable:Data.Byteable\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003ereturn the binary bytestring. deprecated use toBytes.\n\u003c/p\u003e",
          "module": "[\"Crypto.Hash.Types\",\"Crypto.Hash\"]",
          "name": "digestToByteString",
          "package": "cryptohash",
          "signature": "Digest a -\u003e ByteString",
          "source": "src/Crypto-Hash-Types.html#digestToByteString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:digestToByteString\",\"http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:digestToByteString\"]"
        },
        "index": {
          "description": "Deprecated use toBytes from byteable Data.Byteable return the binary bytestring deprecated use toBytes",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "digestToByteString",
          "normalized": "Digest a-\u003eByteString",
          "package": "cryptohash",
          "partial": "To Byte String",
          "signature": "Digest a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:digestToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock size in bytes the hash algorithm operates on\n\u003c/p\u003e",
          "module": "Crypto.Hash.Types",
          "name": "hashBlockSize",
          "package": "cryptohash",
          "signature": "Context a -\u003e Int",
          "source": "src/Crypto-Hash-Types.html#hashBlockSize",
          "type": "method"
        },
        "index": {
          "description": "Block size in bytes the hash algorithm operates on",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "hashBlockSize",
          "normalized": "Context a-\u003eInt",
          "package": "cryptohash",
          "partial": "Block Size",
          "signature": "Context a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:hashBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize a context and return a digest.\n\u003c/p\u003e",
          "module": "Crypto.Hash.Types",
          "name": "hashFinalize",
          "package": "cryptohash",
          "signature": "Context a -\u003e Digest a",
          "source": "src/Crypto-Hash-Types.html#hashFinalize",
          "type": "method"
        },
        "index": {
          "description": "Finalize context and return digest",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "hashFinalize",
          "normalized": "Context a-\u003eDigest a",
          "package": "cryptohash",
          "partial": "Finalize",
          "signature": "Context a-\u003eDigest a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:hashFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new context for this hash algorithm\n\u003c/p\u003e",
          "module": "Crypto.Hash.Types",
          "name": "hashInit",
          "package": "cryptohash",
          "signature": "Context a",
          "source": "src/Crypto-Hash-Types.html#hashInit",
          "type": "method"
        },
        "index": {
          "description": "Initialize new context for this hash algorithm",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "hashInit",
          "package": "cryptohash",
          "partial": "Init",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:hashInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the context with a list of strict bytestring,\n and return a new context with the updates.\n\u003c/p\u003e",
          "module": "Crypto.Hash.Types",
          "name": "hashUpdates",
          "package": "cryptohash",
          "signature": "Context a -\u003e [ByteString] -\u003e Context a",
          "source": "src/Crypto-Hash-Types.html#hashUpdates",
          "type": "method"
        },
        "index": {
          "description": "Update the context with list of strict bytestring and return new context with the updates",
          "hierarchy": "Crypto Hash Types",
          "module": "Crypto.Hash.Types",
          "name": "hashUpdates",
          "normalized": "Context a-\u003e[ByteString]-\u003eContext a",
          "package": "cryptohash",
          "partial": "Updates",
          "signature": "Context a-\u003e[ByteString]-\u003eContext a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Types.html#v:hashUpdates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing Whirlpool bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash.Whirlpool",
          "name": "Whirlpool",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Whirlpool.html",
          "type": "module"
        },
        "index": {
          "description": "module containing Whirlpool bindings",
          "hierarchy": "Crypto Hash Whirlpool",
          "module": "Crypto.Hash.Whirlpool",
          "name": "Whirlpool",
          "package": "cryptohash",
          "partial": "Whirlpool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Whirlpool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhirlpool Context\n\u003c/p\u003e",
          "module": "Crypto.Hash.Whirlpool",
          "name": "Ctx",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Whirlpool.html#Ctx",
          "type": "newtype"
        },
        "index": {
          "description": "Whirlpool Context",
          "hierarchy": "Crypto Hash Whirlpool",
          "module": "Crypto.Hash.Whirlpool",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Whirlpool.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash.Whirlpool",
          "name": "Ctx",
          "package": "cryptohash",
          "signature": "Ctx ByteString",
          "source": "src/Crypto-Hash-Whirlpool.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash Whirlpool",
          "module": "Crypto.Hash.Whirlpool",
          "name": "Ctx",
          "package": "cryptohash",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Whirlpool.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinalize the context into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Whirlpool",
          "name": "finalize",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString",
          "source": "src/Crypto-Hash-Whirlpool.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize the context into digest bytestring",
          "hierarchy": "Crypto Hash Whirlpool",
          "module": "Crypto.Hash.Whirlpool",
          "name": "finalize",
          "normalized": "Ctx-\u003eByteString",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Whirlpool.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a strict bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Whirlpool",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-Whirlpool.html#hash",
          "type": "function"
        },
        "index": {
          "description": "hash strict bytestring into digest bytestring",
          "hierarchy": "Crypto Hash Whirlpool",
          "module": "Crypto.Hash.Whirlpool",
          "name": "hash",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Whirlpool.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash a lazy bytestring into a digest bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Whirlpool",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Crypto-Hash-Whirlpool.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "hash lazy bytestring into digest bytestring",
          "hierarchy": "Crypto Hash Whirlpool",
          "module": "Crypto.Hash.Whirlpool",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Whirlpool.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einit a context\n\u003c/p\u003e",
          "module": "Crypto.Hash.Whirlpool",
          "name": "init",
          "package": "cryptohash",
          "signature": "Ctx",
          "source": "src/Crypto-Hash-Whirlpool.html#init",
          "type": "function"
        },
        "index": {
          "description": "init context",
          "hierarchy": "Crypto Hash Whirlpool",
          "module": "Crypto.Hash.Whirlpool",
          "name": "init",
          "package": "cryptohash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Whirlpool.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate a context with a bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Whirlpool",
          "name": "update",
          "package": "cryptohash",
          "signature": "Ctx -\u003e ByteString -\u003e Ctx",
          "source": "src/Crypto-Hash-Whirlpool.html#update",
          "type": "function"
        },
        "index": {
          "description": "update context with bytestring",
          "hierarchy": "Crypto Hash Whirlpool",
          "module": "Crypto.Hash.Whirlpool",
          "name": "update",
          "normalized": "Ctx-\u003eByteString-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003eByteString-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Whirlpool.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdates a context with multiples bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash.Whirlpool",
          "name": "updates",
          "package": "cryptohash",
          "signature": "Ctx -\u003e [ByteString] -\u003e Ctx",
          "source": "src/Crypto-Hash-Whirlpool.html#updates",
          "type": "function"
        },
        "index": {
          "description": "updates context with multiples bytestring",
          "hierarchy": "Crypto Hash Whirlpool",
          "module": "Crypto.Hash.Whirlpool",
          "name": "updates",
          "normalized": "Ctx-\u003e[ByteString]-\u003eCtx",
          "package": "cryptohash",
          "signature": "Ctx-\u003e[ByteString]-\u003eCtx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash-Whirlpool.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCrypto hash main module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Hash",
          "name": "Hash",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html",
          "type": "module"
        },
        "index": {
          "description": "Crypto hash main module",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Hash",
          "package": "cryptohash",
          "partial": "Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a context for a given hash algorithm.\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Context",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Types.html#Context",
          "type": "data"
        },
        "index": {
          "description": "Represent context for given hash algorithm",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Context",
          "package": "cryptohash",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a digest for a given hash algorithm.\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Digest",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Types.html#Digest",
          "type": "data"
        },
        "index": {
          "description": "Represent digest for given hash algorithm",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Digest",
          "package": "cryptohash",
          "partial": "Digest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent an HMAC that is a phantom type with the hash used to produce the mac.\n\u003c/p\u003e\u003cp\u003eThe Eq instance is constant time.\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "HMAC",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#HMAC",
          "type": "newtype"
        },
        "index": {
          "description": "Represent an HMAC that is phantom type with the hash used to produce the mac The Eq instance is constant time",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "HMAC",
          "package": "cryptohash",
          "partial": "HMAC",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:HMAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass representing hashing algorithms.\n\u003c/p\u003e\u003cp\u003eThe hash algorithm is built over 3 primitives:\n\u003c/p\u003e\u003cp\u003einit     : create a new context\n   updates  : update the context with some strict bytestrings\n   finalize : finalize the context into a digest\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "HashAlgorithm",
          "package": "cryptohash",
          "source": "src/Crypto-Hash-Types.html#HashAlgorithm",
          "type": "class"
        },
        "index": {
          "description": "Class representing hashing algorithms The hash algorithm is built over primitives init create new context updates update the context with some strict bytestrings finalize finalize the context into digest",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "HashAlgorithm",
          "package": "cryptohash",
          "partial": "Hash Algorithm",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:HashAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to a single pass hash function that operate on a strict bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "HashFunctionBS",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#HashFunctionBS",
          "type": "type"
        },
        "index": {
          "description": "Alias to single pass hash function that operate on strict bytestring",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "HashFunctionBS",
          "package": "cryptohash",
          "partial": "Hash Function BS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:HashFunctionBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to a single pass hash function that operate on a lazy bytestring\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "HashFunctionLBS",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#HashFunctionLBS",
          "type": "type"
        },
        "index": {
          "description": "Alias to single pass hash function that operate on lazy bytestring",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "HashFunctionLBS",
          "package": "cryptohash",
          "partial": "Hash Function LBS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:HashFunctionLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMD2 cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "MD2",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#MD2",
          "type": "data"
        },
        "index": {
          "description": "MD2 cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "MD2",
          "package": "cryptohash",
          "partial": "MD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:MD2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMD4 cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "MD4",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#MD4",
          "type": "data"
        },
        "index": {
          "description": "MD4 cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "MD4",
          "package": "cryptohash",
          "partial": "MD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:MD4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMD5 cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "MD5",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#MD5",
          "type": "data"
        },
        "index": {
          "description": "MD5 cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "MD5",
          "package": "cryptohash",
          "partial": "MD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:MD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRIPEMD160 cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "RIPEMD160",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#RIPEMD160",
          "type": "data"
        },
        "index": {
          "description": "RIPEMD160 cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "RIPEMD160",
          "package": "cryptohash",
          "partial": "RIPEMD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:RIPEMD160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA1 cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "SHA1",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#SHA1",
          "type": "data"
        },
        "index": {
          "description": "SHA1 cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA1",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:SHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA224 cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "SHA224",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#SHA224",
          "type": "data"
        },
        "index": {
          "description": "SHA224 cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA224",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:SHA224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA256 cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "SHA256",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#SHA256",
          "type": "data"
        },
        "index": {
          "description": "SHA256 cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA256",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:SHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA384 cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "SHA384",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#SHA384",
          "type": "data"
        },
        "index": {
          "description": "SHA384 cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA384",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:SHA384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA3 (224 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "SHA3_224",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#SHA3_224",
          "type": "data"
        },
        "index": {
          "description": "SHA3 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA3_224",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:SHA3_224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA3 (256 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "SHA3_256",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#SHA3_256",
          "type": "data"
        },
        "index": {
          "description": "SHA3 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA3_256",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:SHA3_256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA3 (384 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "SHA3_384",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#SHA3_384",
          "type": "data"
        },
        "index": {
          "description": "SHA3 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA3_384",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:SHA3_384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA3 (512 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "SHA3_512",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#SHA3_512",
          "type": "data"
        },
        "index": {
          "description": "SHA3 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA3_512",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:SHA3_512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSHA512 cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "SHA512",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#SHA512",
          "type": "data"
        },
        "index": {
          "description": "SHA512 cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA512",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:SHA512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkein256 (224 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Skein256_224",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#Skein256_224",
          "type": "data"
        },
        "index": {
          "description": "Skein256 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein256_224",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Skein256_224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkein256 (256 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Skein256_256",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#Skein256_256",
          "type": "data"
        },
        "index": {
          "description": "Skein256 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein256_256",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Skein256_256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkein512 (224 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Skein512_224",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#Skein512_224",
          "type": "data"
        },
        "index": {
          "description": "Skein512 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein512_224",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Skein512_224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkein512 (256 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Skein512_256",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#Skein512_256",
          "type": "data"
        },
        "index": {
          "description": "Skein512 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein512_256",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Skein512_256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkein512 (384 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Skein512_384",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#Skein512_384",
          "type": "data"
        },
        "index": {
          "description": "Skein512 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein512_384",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Skein512_384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkein512 (512 bits version) cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Skein512_512",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#Skein512_512",
          "type": "data"
        },
        "index": {
          "description": "Skein512 bits version cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein512_512",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Skein512_512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTiger cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Tiger",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#Tiger",
          "type": "data"
        },
        "index": {
          "description": "Tiger cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Tiger",
          "package": "cryptohash",
          "partial": "Tiger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Tiger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhirlpool cryptographic hash\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "Whirlpool",
          "package": "cryptohash",
          "source": "src/Crypto-Hash.html#Whirlpool",
          "type": "data"
        },
        "index": {
          "description": "Whirlpool cryptographic hash",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Whirlpool",
          "package": "cryptohash",
          "partial": "Whirlpool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#t:Whirlpool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "HMAC",
          "package": "cryptohash",
          "signature": "HMAC",
          "source": "src/Crypto-Hash.html#HMAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "HMAC",
          "package": "cryptohash",
          "partial": "HMAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:HMAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "MD2",
          "package": "cryptohash",
          "signature": "MD2",
          "source": "src/Crypto-Hash.html#MD2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "MD2",
          "package": "cryptohash",
          "partial": "MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:MD2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "MD4",
          "package": "cryptohash",
          "signature": "MD4",
          "source": "src/Crypto-Hash.html#MD4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "MD4",
          "package": "cryptohash",
          "partial": "MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:MD4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "MD5",
          "package": "cryptohash",
          "signature": "MD5",
          "source": "src/Crypto-Hash.html#MD5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "MD5",
          "package": "cryptohash",
          "partial": "MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:MD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "RIPEMD160",
          "package": "cryptohash",
          "signature": "RIPEMD160",
          "source": "src/Crypto-Hash.html#RIPEMD160",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "RIPEMD160",
          "package": "cryptohash",
          "partial": "RIPEMD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:RIPEMD160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "SHA1",
          "package": "cryptohash",
          "signature": "SHA1",
          "source": "src/Crypto-Hash.html#SHA1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA1",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:SHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "SHA224",
          "package": "cryptohash",
          "signature": "SHA224",
          "source": "src/Crypto-Hash.html#SHA224",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA224",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:SHA224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "SHA256",
          "package": "cryptohash",
          "signature": "SHA256",
          "source": "src/Crypto-Hash.html#SHA256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA256",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:SHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "SHA384",
          "package": "cryptohash",
          "signature": "SHA384",
          "source": "src/Crypto-Hash.html#SHA384",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA384",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:SHA384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "SHA3_224",
          "package": "cryptohash",
          "signature": "SHA3_224",
          "source": "src/Crypto-Hash.html#SHA3_224",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA3_224",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:SHA3_224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "SHA3_256",
          "package": "cryptohash",
          "signature": "SHA3_256",
          "source": "src/Crypto-Hash.html#SHA3_256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA3_256",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:SHA3_256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "SHA3_384",
          "package": "cryptohash",
          "signature": "SHA3_384",
          "source": "src/Crypto-Hash.html#SHA3_384",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA3_384",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:SHA3_384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "SHA3_512",
          "package": "cryptohash",
          "signature": "SHA3_512",
          "source": "src/Crypto-Hash.html#SHA3_512",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA3_512",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:SHA3_512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "SHA512",
          "package": "cryptohash",
          "signature": "SHA512",
          "source": "src/Crypto-Hash.html#SHA512",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "SHA512",
          "package": "cryptohash",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:SHA512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "Skein256_224",
          "package": "cryptohash",
          "signature": "Skein256_224",
          "source": "src/Crypto-Hash.html#Skein256_224",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein256_224",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:Skein256_224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "Skein256_256",
          "package": "cryptohash",
          "signature": "Skein256_256",
          "source": "src/Crypto-Hash.html#Skein256_256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein256_256",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:Skein256_256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "Skein512_224",
          "package": "cryptohash",
          "signature": "Skein512_224",
          "source": "src/Crypto-Hash.html#Skein512_224",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein512_224",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:Skein512_224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "Skein512_256",
          "package": "cryptohash",
          "signature": "Skein512_256",
          "source": "src/Crypto-Hash.html#Skein512_256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein512_256",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:Skein512_256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "Skein512_384",
          "package": "cryptohash",
          "signature": "Skein512_384",
          "source": "src/Crypto-Hash.html#Skein512_384",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein512_384",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:Skein512_384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "Skein512_512",
          "package": "cryptohash",
          "signature": "Skein512_512",
          "source": "src/Crypto-Hash.html#Skein512_512",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Skein512_512",
          "package": "cryptohash",
          "partial": "Skein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:Skein512_512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "Tiger",
          "package": "cryptohash",
          "signature": "Tiger",
          "source": "src/Crypto-Hash.html#Tiger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Tiger",
          "package": "cryptohash",
          "partial": "Tiger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:Tiger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "Whirlpool",
          "package": "cryptohash",
          "signature": "Whirlpool",
          "source": "src/Crypto-Hash.html#Whirlpool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "Whirlpool",
          "package": "cryptohash",
          "partial": "Whirlpool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:Whirlpool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to convert a binary digest bytestring to a digest.\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "digestFromByteString",
          "package": "cryptohash",
          "signature": "ByteString -\u003e Maybe (Digest a)",
          "source": "src/Crypto-Hash-Types.html#digestFromByteString",
          "type": "method"
        },
        "index": {
          "description": "Try to convert binary digest bytestring to digest",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "digestFromByteString",
          "normalized": "ByteString-\u003eMaybe(Digest a)",
          "package": "cryptohash",
          "partial": "From Byte String",
          "signature": "ByteString-\u003eMaybe(Digest a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:digestFromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the hexadecimal (base16) bytestring of the digest\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "digestToHexByteString",
          "package": "cryptohash",
          "signature": "Digest a -\u003e ByteString",
          "source": "src/Crypto-Hash.html#digestToHexByteString",
          "type": "function"
        },
        "index": {
          "description": "Return the hexadecimal base16 bytestring of the digest",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "digestToHexByteString",
          "normalized": "Digest a-\u003eByteString",
          "package": "cryptohash",
          "partial": "To Hex Byte String",
          "signature": "Digest a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:digestToHexByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a strict bytestring into a digest.\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hash",
          "package": "cryptohash",
          "signature": "ByteString -\u003e Digest a",
          "source": "src/Crypto-Hash.html#hash",
          "type": "function"
        },
        "index": {
          "description": "Hash strict bytestring into digest",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hash",
          "normalized": "ByteString-\u003eDigest a",
          "package": "cryptohash",
          "signature": "ByteString-\u003eDigest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock size in bytes the hash algorithm operates on\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hashBlockSize",
          "package": "cryptohash",
          "signature": "Context a -\u003e Int",
          "source": "src/Crypto-Hash-Types.html#hashBlockSize",
          "type": "method"
        },
        "index": {
          "description": "Block size in bytes the hash algorithm operates on",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hashBlockSize",
          "normalized": "Context a-\u003eInt",
          "package": "cryptohash",
          "partial": "Block Size",
          "signature": "Context a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hashBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize a context and return a digest.\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hashFinalize",
          "package": "cryptohash",
          "signature": "Context a -\u003e Digest a",
          "source": "src/Crypto-Hash-Types.html#hashFinalize",
          "type": "method"
        },
        "index": {
          "description": "Finalize context and return digest",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hashFinalize",
          "normalized": "Context a-\u003eDigest a",
          "package": "cryptohash",
          "partial": "Finalize",
          "signature": "Context a-\u003eDigest a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hashFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new context for this hash algorithm\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hashInit",
          "package": "cryptohash",
          "signature": "Context a",
          "source": "src/Crypto-Hash-Types.html#hashInit",
          "type": "method"
        },
        "index": {
          "description": "Initialize new context for this hash algorithm",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hashInit",
          "package": "cryptohash",
          "partial": "Init",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hashInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new context for a specified hash algorithm\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hashInitAlg",
          "package": "cryptohash",
          "signature": "alg -\u003e Context alg",
          "source": "src/Crypto-Hash.html#hashInitAlg",
          "type": "function"
        },
        "index": {
          "description": "Initialize new context for specified hash algorithm",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hashInitAlg",
          "normalized": "a-\u003eContext a",
          "package": "cryptohash",
          "partial": "Init Alg",
          "signature": "alg-\u003eContext alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hashInitAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun hashUpdates on one single bytestring and return the updated context.\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hashUpdate",
          "package": "cryptohash",
          "signature": "Context a -\u003e ByteString -\u003e Context a",
          "source": "src/Crypto-Hash.html#hashUpdate",
          "type": "function"
        },
        "index": {
          "description": "run hashUpdates on one single bytestring and return the updated context",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hashUpdate",
          "normalized": "Context a-\u003eByteString-\u003eContext a",
          "package": "cryptohash",
          "partial": "Update",
          "signature": "Context a-\u003eByteString-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hashUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the context with a list of strict bytestring,\n and return a new context with the updates.\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hashUpdates",
          "package": "cryptohash",
          "signature": "Context a -\u003e [ByteString] -\u003e Context a",
          "source": "src/Crypto-Hash-Types.html#hashUpdates",
          "type": "method"
        },
        "index": {
          "description": "Update the context with list of strict bytestring and return new context with the updates",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hashUpdates",
          "normalized": "Context a-\u003e[ByteString]-\u003eContext a",
          "package": "cryptohash",
          "partial": "Updates",
          "signature": "Context a-\u003e[ByteString]-\u003eContext a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hashUpdates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a lazy bytestring into a digest.\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hashlazy",
          "package": "cryptohash",
          "signature": "ByteString -\u003e Digest a",
          "source": "src/Crypto-Hash.html#hashlazy",
          "type": "function"
        },
        "index": {
          "description": "Hash lazy bytestring into digest",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hashlazy",
          "normalized": "ByteString-\u003eDigest a",
          "package": "cryptohash",
          "signature": "ByteString-\u003eDigest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hashlazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute a MAC using the supplied hashing function\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hmac",
          "package": "cryptohash",
          "signature": "ByteString-\u003e ByteString-\u003e HMAC a",
          "type": "function"
        },
        "index": {
          "description": "compute MAC using the supplied hashing function",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hmac",
          "normalized": "ByteString-\u003eByteString-\u003eHMAC a",
          "package": "cryptohash",
          "signature": "ByteString-\u003eByteString-\u003eHMAC a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hmac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute a HMAC using a specified algorithm\n\u003c/p\u003e",
          "module": "Crypto.Hash",
          "name": "hmacAlg",
          "package": "cryptohash",
          "signature": "a-\u003e ByteString-\u003e ByteString-\u003e HMAC a",
          "type": "function"
        },
        "index": {
          "description": "compute HMAC using specified algorithm",
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hmacAlg",
          "normalized": "a-\u003eByteString-\u003eByteString-\u003eHMAC a",
          "package": "cryptohash",
          "partial": "Alg",
          "signature": "a-\u003eByteString-\u003eByteString-\u003eHMAC a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hmacAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Hash",
          "name": "hmacGetDigest",
          "package": "cryptohash",
          "signature": "Digest a",
          "source": "src/Crypto-Hash.html#HMAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Hash",
          "module": "Crypto.Hash",
          "name": "hmacGetDigest",
          "package": "cryptohash",
          "partial": "Get Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-Hash.html#v:hmacGetDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eprovide the HMAC (Hash based Message Authentification Code) base algorithm.\n http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eHMAC\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.MAC.HMAC",
          "name": "HMAC",
          "package": "cryptohash",
          "source": "src/Crypto-MAC-HMAC.html",
          "type": "module"
        },
        "index": {
          "description": "provide the HMAC Hash based Message Authentification Code base algorithm http en.wikipedia.org wiki HMAC",
          "hierarchy": "Crypto MAC HMAC",
          "module": "Crypto.MAC.HMAC",
          "name": "HMAC",
          "package": "cryptohash",
          "partial": "HMAC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-MAC-HMAC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompute a MAC using the supplied hashing function\n\u003c/p\u003e",
          "module": "Crypto.MAC.HMAC",
          "name": "hmac",
          "package": "cryptohash",
          "signature": "(ByteString -\u003e ByteString) -\u003e Int -\u003e ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-MAC-HMAC.html#hmac",
          "type": "function"
        },
        "index": {
          "description": "compute MAC using the supplied hashing function",
          "hierarchy": "Crypto MAC HMAC",
          "module": "Crypto.MAC.HMAC",
          "name": "hmac",
          "normalized": "(ByteString-\u003eByteString)-\u003eInt-\u003eByteString-\u003eByteString-\u003eByteString",
          "package": "cryptohash",
          "signature": "(ByteString-\u003eByteString)-\u003eInt-\u003eByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptohash/docs/Crypto-MAC-HMAC.html#v:hmac"
      }
    }
  ]
]