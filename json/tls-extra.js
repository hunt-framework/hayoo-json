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
        "word": "tls-extra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TLS.Extra",
          "name": "Extra",
          "package": "tls-extra",
          "source": "src/Network-TLS-Extra.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "Extra",
          "package": "tls-extra",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eCertificateUsageAccept\u003c/a\u003e\u003c/code\u003e if all the checks pass, or the first\n   failure.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "certificateChecks",
          "package": "tls-extra",
          "signature": "[[X509] -\u003e IO CertificateUsage] -\u003e [X509] -\u003e IO CertificateUsage",
          "source": "src/Network-TLS-Extra-Certificate.html#certificateChecks",
          "type": "function"
        },
        "index": {
          "description": "Returns CertificateUsageAccept if all the checks pass or the first failure",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "certificateChecks",
          "normalized": "[[X]-\u003eIO CertificateUsage]-\u003e[X]-\u003eIO CertificateUsage",
          "package": "tls-extra",
          "partial": "Checks",
          "signature": "[[X]-\u003eIO CertificateUsage]-\u003e[X]-\u003eIO CertificateUsage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateChecks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehash the certificate signing data using the supplied hash function.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "certificateFingerprint",
          "package": "tls-extra",
          "signature": "(ByteString -\u003e ByteString) -\u003e X509 -\u003e ByteString",
          "source": "src/Network-TLS-Extra-Certificate.html#certificateFingerprint",
          "type": "function"
        },
        "index": {
          "description": "hash the certificate signing data using the supplied hash function",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "certificateFingerprint",
          "normalized": "(ByteString-\u003eByteString)-\u003eX-\u003eByteString",
          "package": "tls-extra",
          "partial": "Fingerprint",
          "signature": "(ByteString-\u003eByteString)-\u003eX-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateFingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this certificate self signed?\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "certificateSelfSigned",
          "package": "tls-extra",
          "signature": "X509 -\u003e Bool",
          "source": "src/Network-TLS-Extra-Certificate.html#certificateSelfSigned",
          "type": "function"
        },
        "index": {
          "description": "Is this certificate self signed",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "certificateSelfSigned",
          "normalized": "X-\u003eBool",
          "package": "tls-extra",
          "partial": "Self Signed",
          "signature": "X-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateSelfSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003everify a certificate against another one.\n the first certificate need to be signed by the second one for this function to succeed.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "certificateVerifyAgainst",
          "package": "tls-extra",
          "signature": "X509 -\u003e X509 -\u003e Bool",
          "source": "src/Network-TLS-Extra-Certificate.html#certificateVerifyAgainst",
          "type": "function"
        },
        "index": {
          "description": "verify certificate against another one the first certificate need to be signed by the second one for this function to succeed",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "certificateVerifyAgainst",
          "normalized": "X-\u003eX-\u003eBool",
          "package": "tls-extra",
          "partial": "Verify Against",
          "signature": "X-\u003eX-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateVerifyAgainst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003everify a certificates chain using the system certificates available.\n\u003c/p\u003e\u003cp\u003eeach certificate of the list is verified against the next certificate, until\n it can be verified against a system certificate (system certificates are assumed as trusted)\n\u003c/p\u003e\u003cp\u003eThis helper only check that the chain of certificate is valid, which means that each items\n received are signed by the next one, or by a system certificate. Some extra checks need to\n be done at the user level so that the certificate chain received make sense in the context.\n\u003c/p\u003e\u003cp\u003efor example for HTTP, the user should typically verify the certificate subject match the URL\n of connection.\n\u003c/p\u003e\u003cp\u003eTODO: verify validity, check revocation list if any, add optional user output to know\n the rejection reason.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "certificateVerifyChain",
          "package": "tls-extra",
          "signature": "CertificateStore -\u003e [X509] -\u003e IO CertificateUsage",
          "source": "src/Network-TLS-Extra-Certificate.html#certificateVerifyChain",
          "type": "function"
        },
        "index": {
          "description": "verify certificates chain using the system certificates available each certificate of the list is verified against the next certificate until it can be verified against system certificate system certificates are assumed as trusted This helper only check that the chain of certificate is valid which means that each items received are signed by the next one or by system certificate Some extra checks need to be done at the user level so that the certificate chain received make sense in the context for example for HTTP the user should typically verify the certificate subject match the URL of connection TODO verify validity check revocation list if any add optional user output to know the rejection reason",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "certificateVerifyChain",
          "normalized": "CertificateStore-\u003e[X]-\u003eIO CertificateUsage",
          "package": "tls-extra",
          "partial": "Verify Chain",
          "signature": "CertificateStore-\u003e[X]-\u003eIO CertificateUsage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateVerifyChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify that the given certificate chain is application to the given fully qualified host name.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "certificateVerifyDomain",
          "package": "tls-extra",
          "signature": "String -\u003e [X509] -\u003e CertificateUsage",
          "source": "src/Network-TLS-Extra-Certificate.html#certificateVerifyDomain",
          "type": "function"
        },
        "index": {
          "description": "Verify that the given certificate chain is application to the given fully qualified host name",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "certificateVerifyDomain",
          "normalized": "String-\u003e[X]-\u003eCertificateUsage",
          "package": "tls-extra",
          "partial": "Verify Domain",
          "signature": "String-\u003e[X]-\u003eCertificateUsage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateVerifyDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify certificate validity period that need to between the bounds of the certificate.\n TODO: maybe should verify whole chain.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "certificateVerifyValidity",
          "package": "tls-extra",
          "signature": "Day -\u003e [X509] -\u003e CertificateUsage",
          "source": "src/Network-TLS-Extra-Certificate.html#certificateVerifyValidity",
          "type": "function"
        },
        "index": {
          "description": "Verify certificate validity period that need to between the bounds of the certificate TODO maybe should verify whole chain",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "certificateVerifyValidity",
          "normalized": "Day-\u003e[X]-\u003eCertificateUsage",
          "package": "tls-extra",
          "partial": "Verify Validity",
          "signature": "Day-\u003e[X]-\u003eCertificateUsage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateVerifyValidity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES cipher (128 bit key), RSA key exchange and SHA1 for digest\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "cipher_AES128_SHA1",
          "package": "tls-extra",
          "signature": "Cipher",
          "source": "src/Network-TLS-Extra-Cipher.html#cipher_AES128_SHA1",
          "type": "function"
        },
        "index": {
          "description": "AES cipher bit key RSA key exchange and SHA1 for digest",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "cipher_AES128_SHA1",
          "package": "tls-extra",
          "partial": "AES SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_AES128_SHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES cipher (128 bit key), RSA key exchange and SHA256 for digest\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "cipher_AES128_SHA256",
          "package": "tls-extra",
          "signature": "Cipher",
          "source": "src/Network-TLS-Extra-Cipher.html#cipher_AES128_SHA256",
          "type": "function"
        },
        "index": {
          "description": "AES cipher bit key RSA key exchange and SHA256 for digest",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "cipher_AES128_SHA256",
          "package": "tls-extra",
          "partial": "AES SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_AES128_SHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES cipher (256 bit key), RSA key exchange and SHA1 for digest\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "cipher_AES256_SHA1",
          "package": "tls-extra",
          "signature": "Cipher",
          "source": "src/Network-TLS-Extra-Cipher.html#cipher_AES256_SHA1",
          "type": "function"
        },
        "index": {
          "description": "AES cipher bit key RSA key exchange and SHA1 for digest",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "cipher_AES256_SHA1",
          "package": "tls-extra",
          "partial": "AES SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_AES256_SHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES cipher (256 bit key), RSA key exchange and SHA256 for digest\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "cipher_AES256_SHA256",
          "package": "tls-extra",
          "signature": "Cipher",
          "source": "src/Network-TLS-Extra-Cipher.html#cipher_AES256_SHA256",
          "type": "function"
        },
        "index": {
          "description": "AES cipher bit key RSA key exchange and SHA256 for digest",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "cipher_AES256_SHA256",
          "package": "tls-extra",
          "partial": "AES SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_AES256_SHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC4 cipher, RSA key exchange and MD5 for digest\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "cipher_RC4_128_MD5",
          "package": "tls-extra",
          "signature": "Cipher",
          "source": "src/Network-TLS-Extra-Cipher.html#cipher_RC4_128_MD5",
          "type": "function"
        },
        "index": {
          "description": "RC4 cipher RSA key exchange and MD5 for digest",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "cipher_RC4_128_MD5",
          "package": "tls-extra",
          "partial": "RC MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_RC4_128_MD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC4 cipher, RSA key exchange and SHA1 for digest\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "cipher_RC4_128_SHA1",
          "package": "tls-extra",
          "signature": "Cipher",
          "source": "src/Network-TLS-Extra-Cipher.html#cipher_RC4_128_SHA1",
          "type": "function"
        },
        "index": {
          "description": "RC4 cipher RSA key exchange and SHA1 for digest",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "cipher_RC4_128_SHA1",
          "package": "tls-extra",
          "partial": "RC SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_RC4_128_SHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunencrypted cipher using RSA for key exchange and MD5 for digest\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "cipher_null_MD5",
          "package": "tls-extra",
          "signature": "Cipher",
          "source": "src/Network-TLS-Extra-Cipher.html#cipher_null_MD5",
          "type": "function"
        },
        "index": {
          "description": "unencrypted cipher using RSA for key exchange and MD5 for digest",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "cipher_null_MD5",
          "package": "tls-extra",
          "partial": "MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_null_MD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunencrypted cipher using RSA for key exchange and SHA1 for digest\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "cipher_null_SHA1",
          "package": "tls-extra",
          "signature": "Cipher",
          "source": "src/Network-TLS-Extra-Cipher.html#cipher_null_SHA1",
          "type": "function"
        },
        "index": {
          "description": "unencrypted cipher using RSA for key exchange and SHA1 for digest",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "cipher_null_SHA1",
          "package": "tls-extra",
          "partial": "SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_null_SHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall encrypted ciphers supported ordered from strong to weak.\n this choice of ciphersuite should satisfy most normal need\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "ciphersuite_all",
          "package": "tls-extra",
          "signature": "[Cipher]",
          "source": "src/Network-TLS-Extra-Cipher.html#ciphersuite_all",
          "type": "function"
        },
        "index": {
          "description": "all encrypted ciphers supported ordered from strong to weak this choice of ciphersuite should satisfy most normal need",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "ciphersuite_all",
          "normalized": "[Cipher]",
          "package": "tls-extra",
          "signature": "[Cipher]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:ciphersuite_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elist of medium ciphers.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "ciphersuite_medium",
          "package": "tls-extra",
          "signature": "[Cipher]",
          "source": "src/Network-TLS-Extra-Cipher.html#ciphersuite_medium",
          "type": "function"
        },
        "index": {
          "description": "list of medium ciphers",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "ciphersuite_medium",
          "normalized": "[Cipher]",
          "package": "tls-extra",
          "signature": "[Cipher]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:ciphersuite_medium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe strongest ciphers supported.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "ciphersuite_strong",
          "package": "tls-extra",
          "signature": "[Cipher]",
          "source": "src/Network-TLS-Extra-Cipher.html#ciphersuite_strong",
          "type": "function"
        },
        "index": {
          "description": "the strongest ciphers supported",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "ciphersuite_strong",
          "normalized": "[Cipher]",
          "package": "tls-extra",
          "signature": "[Cipher]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:ciphersuite_strong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall unencrypted ciphers, do not use on insecure network.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "ciphersuite_unencrypted",
          "package": "tls-extra",
          "signature": "[Cipher]",
          "source": "src/Network-TLS-Extra-Cipher.html#ciphersuite_unencrypted",
          "type": "function"
        },
        "index": {
          "description": "all unencrypted ciphers do not use on insecure network",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "ciphersuite_unencrypted",
          "normalized": "[Cipher]",
          "package": "tls-extra",
          "signature": "[Cipher]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:ciphersuite_unencrypted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003econnectionClient host port param rng\u003c/code\u003e opens a TCP client connection\n to a destination host and port description (number or name). For\n example:\n\u003c/p\u003e\u003cpre\u003e\n import Network.TLS.Extra\n import Crypto.Random.AESCtr\n ...\n   conn \u003ca\u003emakeSystem\u003c/a\u003e\u003e= connectionClient 192.168.2.2 7777 defaultParams\n\u003c/pre\u003e\u003cp\u003ewill make a new RNG (using cprng-aes) and connect to IP 192.168.2.2\n on port 7777.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "connectionClient",
          "package": "tls-extra",
          "signature": "String -\u003e String -\u003e TLSParams -\u003e g -\u003e IO Context",
          "source": "src/Network-TLS-Extra-Connection.html#connectionClient",
          "type": "function"
        },
        "index": {
          "description": "connectionClient host port param rng opens TCP client connection to destination host and port description number or name For example import Network.TLS.Extra import Crypto.Random.AESCtr conn makeSystem connectionClient defaultParams will make new RNG using cprng-aes and connect to IP on port",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "connectionClient",
          "normalized": "String-\u003eString-\u003eTLSParams-\u003ea-\u003eIO Context",
          "package": "tls-extra",
          "partial": "Client",
          "signature": "String-\u003eString-\u003eTLSParams-\u003eg-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:connectionClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread one X509 certificate from a file.\n\u003c/p\u003e\u003cp\u003ethe certificate must be in the usual PEM format with the\n TRUSTED CERTIFICATE or CERTIFICATE pem name.\n\u003c/p\u003e\u003cp\u003eIf no valid PEM encoded certificate is found in the file\n this function will raise an error.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "fileReadCertificate",
          "package": "tls-extra",
          "signature": "FilePath -\u003e IO X509",
          "source": "src/Network-TLS-Extra-File.html#fileReadCertificate",
          "type": "function"
        },
        "index": {
          "description": "read one X509 certificate from file the certificate must be in the usual PEM format with the TRUSTED CERTIFICATE or CERTIFICATE pem name If no valid PEM encoded certificate is found in the file this function will raise an error",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "fileReadCertificate",
          "normalized": "FilePath-\u003eIO X",
          "package": "tls-extra",
          "partial": "Read Certificate",
          "signature": "FilePath-\u003eIO X",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:fileReadCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread one private key from a file.\n\u003c/p\u003e\u003cp\u003ethe private key must be in the usual PEM format and at the moment only\n RSA PRIVATE KEY are supported.\n\u003c/p\u003e\u003cp\u003eIf no valid PEM encoded private key is found in the file\n this function will raise an error.\n\u003c/p\u003e",
          "module": "Network.TLS.Extra",
          "name": "fileReadPrivateKey",
          "package": "tls-extra",
          "signature": "FilePath -\u003e IO PrivateKey",
          "source": "src/Network-TLS-Extra-File.html#fileReadPrivateKey",
          "type": "function"
        },
        "index": {
          "description": "read one private key from file the private key must be in the usual PEM format and at the moment only RSA PRIVATE KEY are supported If no valid PEM encoded private key is found in the file this function will raise an error",
          "hierarchy": "Network TLS Extra",
          "module": "Network.TLS.Extra",
          "name": "fileReadPrivateKey",
          "normalized": "FilePath-\u003eIO PrivateKey",
          "package": "tls-extra",
          "partial": "Read Private Key",
          "signature": "FilePath-\u003eIO PrivateKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:fileReadPrivateKey"
      }
    }
  ]
]