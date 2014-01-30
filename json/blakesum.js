[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blakesum/docs/Data-Digest-BLAKE.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBLAKE is one of the finalists in the NIST SHA-3 hash function competition\n to replace SHA-1 and SHA-2.  \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.BLAKE",
        "fct-package": "blakesum",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-BLAKE.html",
        "fct-type": "module",
        "title": "BLAKE"
      },
      "index": {
        "description": "BLAKE is one of the finalists in the NIST SHA-3 hash function competition to replace SHA-1 and SHA-2",
        "hierarchy": "Data Digest BLAKE",
        "module": "Data.Digest.BLAKE",
        "name": "BLAKE",
        "normalized": "",
        "package": "blakesum",
        "partial": "BLAKE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blakesum/docs/Data-Digest-BLAKE.html#v:blake224",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a BLAKE-224 digest from a given salt and message\n (trucates output of a BLAKE-256)\n\u003c/p\u003e",
        "fct-module": "Data.Digest.BLAKE",
        "fct-package": "blakesum",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "blake224"
      },
      "index": {
        "description": "Compute BLAKE-224 digest from given salt and message trucates output of BLAKE-256",
        "hierarchy": "Data Digest BLAKE",
        "module": "Data.Digest.BLAKE",
        "name": "blake224",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "blakesum",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blakesum/docs/Data-Digest-BLAKE.html#v:blake256",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a BLAKE-256 digest from a given salt and message\n\u003c/p\u003e",
        "fct-module": "Data.Digest.BLAKE",
        "fct-package": "blakesum",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "blake256"
      },
      "index": {
        "description": "Compute BLAKE-256 digest from given salt and message",
        "hierarchy": "Data Digest BLAKE",
        "module": "Data.Digest.BLAKE",
        "name": "blake256",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "blakesum",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blakesum/docs/Data-Digest-BLAKE.html#v:blake384",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a BLAKE-384 digest from a given salt and message\n (trucates output of a BLAKE-512)\n\u003c/p\u003e",
        "fct-module": "Data.Digest.BLAKE",
        "fct-package": "blakesum",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "blake384"
      },
      "index": {
        "description": "Compute BLAKE-384 digest from given salt and message trucates output of BLAKE-512",
        "hierarchy": "Data Digest BLAKE",
        "module": "Data.Digest.BLAKE",
        "name": "blake384",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "blakesum",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blakesum/docs/Data-Digest-BLAKE.html#v:blake512",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a BLAKE-512 digest from a given salt and message\n\u003c/p\u003e",
        "fct-module": "Data.Digest.BLAKE",
        "fct-package": "blakesum",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "blake512"
      },
      "index": {
        "description": "Compute BLAKE-512 digest from given salt and message",
        "hierarchy": "Data Digest BLAKE",
        "module": "Data.Digest.BLAKE",
        "name": "blake512",
        "normalized": "ByteString-\u003eByteString-\u003eByteString",
        "package": "blakesum",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blakesum/docs/Data-Digest-BLAKE.html#v:textDigest",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a digest (or other ByteString) to hexadecimal digits\n\u003c/p\u003e\u003cp\u003eFor example, to compute a digest of a message, `0x00`, \n using BLAKE-512 (faster on 64 bit systems),\n with a salt of 0, and get the digits in hex:\n\u003c/p\u003e\u003cpre\u003e import Data.Digest.BLAKE\n import qualified Data.ByteString.Lazy as B\n\n textDigest $ blake512 (B.take 32 $ B.repeat 0) (B.singleton 0)\n\u003c/pre\u003e",
        "fct-module": "Data.Digest.BLAKE",
        "fct-package": "blakesum",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Digest-BLAKE.html#textDigest",
        "fct-type": "function",
        "title": "textDigest"
      },
      "index": {
        "description": "Convert digest or other ByteString to hexadecimal digits For example to compute digest of message x00 using BLAKE-512 faster on bit systems with salt of and get the digits in hex import Data.Digest.BLAKE import qualified Data.ByteString.Lazy as textDigest blake512 B.take B.repeat B.singleton",
        "hierarchy": "Data Digest BLAKE",
        "module": "Data.Digest.BLAKE",
        "name": "textDigest",
        "normalized": "ByteString-\u003eText",
        "package": "blakesum",
        "partial": "Digest",
        "signature": "ByteString-\u003eText"
      }
    }
  }
]