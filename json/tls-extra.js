[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#",
      "description": {
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "module",
        "fct-source": "src/Network-TLS-Extra.html",
        "fct-type": "module",
        "title": "Extra"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "Extra",
        "normalized": "",
        "package": "tls-extra",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateChecks",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eCertificateUsageAccept\u003c/a\u003e\u003c/code\u003e if all the checks pass, or the first\n   failure.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "[[X509] -\u003e IO CertificateUsage] -\u003e [X509] -\u003e IO CertificateUsage",
        "fct-source": "src/Network-TLS-Extra-Certificate.html#certificateChecks",
        "fct-type": "function",
        "title": "certificateChecks"
      },
      "index": {
        "description": "Returns CertificateUsageAccept if all the checks pass or the first failure",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "certificateChecks",
        "normalized": "[[X]-\u003eIO CertificateUsage]-\u003e[X]-\u003eIO CertificateUsage",
        "package": "tls-extra",
        "partial": "Checks",
        "signature": "[[X]-\u003eIO CertificateUsage]-\u003e[X]-\u003eIO CertificateUsage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateFingerprint",
      "description": {
        "fct-descr": "\u003cp\u003ehash the certificate signing data using the supplied hash function.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "(ByteString -\u003e ByteString) -\u003e X509 -\u003e ByteString",
        "fct-source": "src/Network-TLS-Extra-Certificate.html#certificateFingerprint",
        "fct-type": "function",
        "title": "certificateFingerprint"
      },
      "index": {
        "description": "hash the certificate signing data using the supplied hash function",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "certificateFingerprint",
        "normalized": "(ByteString-\u003eByteString)-\u003eX-\u003eByteString",
        "package": "tls-extra",
        "partial": "Fingerprint",
        "signature": "(ByteString-\u003eByteString)-\u003eX-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateSelfSigned",
      "description": {
        "fct-descr": "\u003cp\u003eIs this certificate self signed?\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "X509 -\u003e Bool",
        "fct-source": "src/Network-TLS-Extra-Certificate.html#certificateSelfSigned",
        "fct-type": "function",
        "title": "certificateSelfSigned"
      },
      "index": {
        "description": "Is this certificate self signed",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "certificateSelfSigned",
        "normalized": "X-\u003eBool",
        "package": "tls-extra",
        "partial": "Self Signed",
        "signature": "X-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateVerifyAgainst",
      "description": {
        "fct-descr": "\u003cp\u003everify a certificate against another one.\n the first certificate need to be signed by the second one for this function to succeed.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "X509 -\u003e X509 -\u003e Bool",
        "fct-source": "src/Network-TLS-Extra-Certificate.html#certificateVerifyAgainst",
        "fct-type": "function",
        "title": "certificateVerifyAgainst"
      },
      "index": {
        "description": "verify certificate against another one the first certificate need to be signed by the second one for this function to succeed",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "certificateVerifyAgainst",
        "normalized": "X-\u003eX-\u003eBool",
        "package": "tls-extra",
        "partial": "Verify Against",
        "signature": "X-\u003eX-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateVerifyChain",
      "description": {
        "fct-descr": "\u003cp\u003everify a certificates chain using the system certificates available.\n\u003c/p\u003e\u003cp\u003eeach certificate of the list is verified against the next certificate, until\n it can be verified against a system certificate (system certificates are assumed as trusted)\n\u003c/p\u003e\u003cp\u003eThis helper only check that the chain of certificate is valid, which means that each items\n received are signed by the next one, or by a system certificate. Some extra checks need to\n be done at the user level so that the certificate chain received make sense in the context.\n\u003c/p\u003e\u003cp\u003efor example for HTTP, the user should typically verify the certificate subject match the URL\n of connection.\n\u003c/p\u003e\u003cp\u003eTODO: verify validity, check revocation list if any, add optional user output to know\n the rejection reason.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "CertificateStore -\u003e [X509] -\u003e IO CertificateUsage",
        "fct-source": "src/Network-TLS-Extra-Certificate.html#certificateVerifyChain",
        "fct-type": "function",
        "title": "certificateVerifyChain"
      },
      "index": {
        "description": "verify certificates chain using the system certificates available each certificate of the list is verified against the next certificate until it can be verified against system certificate system certificates are assumed as trusted This helper only check that the chain of certificate is valid which means that each items received are signed by the next one or by system certificate Some extra checks need to be done at the user level so that the certificate chain received make sense in the context for example for HTTP the user should typically verify the certificate subject match the URL of connection TODO verify validity check revocation list if any add optional user output to know the rejection reason",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "certificateVerifyChain",
        "normalized": "CertificateStore-\u003e[X]-\u003eIO CertificateUsage",
        "package": "tls-extra",
        "partial": "Verify Chain",
        "signature": "CertificateStore-\u003e[X]-\u003eIO CertificateUsage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateVerifyDomain",
      "description": {
        "fct-descr": "\u003cp\u003eVerify that the given certificate chain is application to the given fully qualified host name.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "String -\u003e [X509] -\u003e CertificateUsage",
        "fct-source": "src/Network-TLS-Extra-Certificate.html#certificateVerifyDomain",
        "fct-type": "function",
        "title": "certificateVerifyDomain"
      },
      "index": {
        "description": "Verify that the given certificate chain is application to the given fully qualified host name",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "certificateVerifyDomain",
        "normalized": "String-\u003e[X]-\u003eCertificateUsage",
        "package": "tls-extra",
        "partial": "Verify Domain",
        "signature": "String-\u003e[X]-\u003eCertificateUsage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:certificateVerifyValidity",
      "description": {
        "fct-descr": "\u003cp\u003eVerify certificate validity period that need to between the bounds of the certificate.\n TODO: maybe should verify whole chain.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "Day -\u003e [X509] -\u003e CertificateUsage",
        "fct-source": "src/Network-TLS-Extra-Certificate.html#certificateVerifyValidity",
        "fct-type": "function",
        "title": "certificateVerifyValidity"
      },
      "index": {
        "description": "Verify certificate validity period that need to between the bounds of the certificate TODO maybe should verify whole chain",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "certificateVerifyValidity",
        "normalized": "Day-\u003e[X]-\u003eCertificateUsage",
        "package": "tls-extra",
        "partial": "Verify Validity",
        "signature": "Day-\u003e[X]-\u003eCertificateUsage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_AES128_SHA1",
      "description": {
        "fct-descr": "\u003cp\u003eAES cipher (128 bit key), RSA key exchange and SHA1 for digest\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "Cipher",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#cipher_AES128_SHA1",
        "fct-type": "function",
        "title": "cipher_AES128_SHA1"
      },
      "index": {
        "description": "AES cipher bit key RSA key exchange and SHA1 for digest",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "cipher_AES128_SHA1",
        "normalized": "",
        "package": "tls-extra",
        "partial": "AES SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_AES128_SHA256",
      "description": {
        "fct-descr": "\u003cp\u003eAES cipher (128 bit key), RSA key exchange and SHA256 for digest\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "Cipher",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#cipher_AES128_SHA256",
        "fct-type": "function",
        "title": "cipher_AES128_SHA256"
      },
      "index": {
        "description": "AES cipher bit key RSA key exchange and SHA256 for digest",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "cipher_AES128_SHA256",
        "normalized": "",
        "package": "tls-extra",
        "partial": "AES SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_AES256_SHA1",
      "description": {
        "fct-descr": "\u003cp\u003eAES cipher (256 bit key), RSA key exchange and SHA1 for digest\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "Cipher",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#cipher_AES256_SHA1",
        "fct-type": "function",
        "title": "cipher_AES256_SHA1"
      },
      "index": {
        "description": "AES cipher bit key RSA key exchange and SHA1 for digest",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "cipher_AES256_SHA1",
        "normalized": "",
        "package": "tls-extra",
        "partial": "AES SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_AES256_SHA256",
      "description": {
        "fct-descr": "\u003cp\u003eAES cipher (256 bit key), RSA key exchange and SHA256 for digest\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "Cipher",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#cipher_AES256_SHA256",
        "fct-type": "function",
        "title": "cipher_AES256_SHA256"
      },
      "index": {
        "description": "AES cipher bit key RSA key exchange and SHA256 for digest",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "cipher_AES256_SHA256",
        "normalized": "",
        "package": "tls-extra",
        "partial": "AES SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_RC4_128_MD5",
      "description": {
        "fct-descr": "\u003cp\u003eRC4 cipher, RSA key exchange and MD5 for digest\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "Cipher",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#cipher_RC4_128_MD5",
        "fct-type": "function",
        "title": "cipher_RC4_128_MD5"
      },
      "index": {
        "description": "RC4 cipher RSA key exchange and MD5 for digest",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "cipher_RC4_128_MD5",
        "normalized": "",
        "package": "tls-extra",
        "partial": "RC MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_RC4_128_SHA1",
      "description": {
        "fct-descr": "\u003cp\u003eRC4 cipher, RSA key exchange and SHA1 for digest\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "Cipher",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#cipher_RC4_128_SHA1",
        "fct-type": "function",
        "title": "cipher_RC4_128_SHA1"
      },
      "index": {
        "description": "RC4 cipher RSA key exchange and SHA1 for digest",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "cipher_RC4_128_SHA1",
        "normalized": "",
        "package": "tls-extra",
        "partial": "RC SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_null_MD5",
      "description": {
        "fct-descr": "\u003cp\u003eunencrypted cipher using RSA for key exchange and MD5 for digest\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "Cipher",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#cipher_null_MD5",
        "fct-type": "function",
        "title": "cipher_null_MD5"
      },
      "index": {
        "description": "unencrypted cipher using RSA for key exchange and MD5 for digest",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "cipher_null_MD5",
        "normalized": "",
        "package": "tls-extra",
        "partial": "MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:cipher_null_SHA1",
      "description": {
        "fct-descr": "\u003cp\u003eunencrypted cipher using RSA for key exchange and SHA1 for digest\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "Cipher",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#cipher_null_SHA1",
        "fct-type": "function",
        "title": "cipher_null_SHA1"
      },
      "index": {
        "description": "unencrypted cipher using RSA for key exchange and SHA1 for digest",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "cipher_null_SHA1",
        "normalized": "",
        "package": "tls-extra",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:ciphersuite_all",
      "description": {
        "fct-descr": "\u003cp\u003eall encrypted ciphers supported ordered from strong to weak.\n this choice of ciphersuite should satisfy most normal need\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "[Cipher]",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#ciphersuite_all",
        "fct-type": "function",
        "title": "ciphersuite_all"
      },
      "index": {
        "description": "all encrypted ciphers supported ordered from strong to weak this choice of ciphersuite should satisfy most normal need",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "ciphersuite_all",
        "normalized": "[Cipher]",
        "package": "tls-extra",
        "partial": "",
        "signature": "[Cipher]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:ciphersuite_medium",
      "description": {
        "fct-descr": "\u003cp\u003elist of medium ciphers.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "[Cipher]",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#ciphersuite_medium",
        "fct-type": "function",
        "title": "ciphersuite_medium"
      },
      "index": {
        "description": "list of medium ciphers",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "ciphersuite_medium",
        "normalized": "[Cipher]",
        "package": "tls-extra",
        "partial": "",
        "signature": "[Cipher]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:ciphersuite_strong",
      "description": {
        "fct-descr": "\u003cp\u003ethe strongest ciphers supported.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "[Cipher]",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#ciphersuite_strong",
        "fct-type": "function",
        "title": "ciphersuite_strong"
      },
      "index": {
        "description": "the strongest ciphers supported",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "ciphersuite_strong",
        "normalized": "[Cipher]",
        "package": "tls-extra",
        "partial": "",
        "signature": "[Cipher]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:ciphersuite_unencrypted",
      "description": {
        "fct-descr": "\u003cp\u003eall unencrypted ciphers, do not use on insecure network.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "[Cipher]",
        "fct-source": "src/Network-TLS-Extra-Cipher.html#ciphersuite_unencrypted",
        "fct-type": "function",
        "title": "ciphersuite_unencrypted"
      },
      "index": {
        "description": "all unencrypted ciphers do not use on insecure network",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "ciphersuite_unencrypted",
        "normalized": "[Cipher]",
        "package": "tls-extra",
        "partial": "",
        "signature": "[Cipher]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:connectionClient",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003econnectionClient host port param rng\u003c/code\u003e opens a TCP client connection\n to a destination host and port description (number or name). For\n example:\n\u003c/p\u003e\u003cpre\u003e\n import Network.TLS.Extra\n import Crypto.Random.AESCtr\n ...\n   conn \u003ca\u003emakeSystem\u003c/a\u003e\u003e= connectionClient 192.168.2.2 7777 defaultParams\n\u003c/pre\u003e\u003cp\u003ewill make a new RNG (using cprng-aes) and connect to IP 192.168.2.2\n on port 7777.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "String -\u003e String -\u003e TLSParams -\u003e g -\u003e IO Context",
        "fct-source": "src/Network-TLS-Extra-Connection.html#connectionClient",
        "fct-type": "function",
        "title": "connectionClient"
      },
      "index": {
        "description": "connectionClient host port param rng opens TCP client connection to destination host and port description number or name For example import Network.TLS.Extra import Crypto.Random.AESCtr conn makeSystem connectionClient defaultParams will make new RNG using cprng-aes and connect to IP on port",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "connectionClient",
        "normalized": "String-\u003eString-\u003eTLSParams-\u003ea-\u003eIO Context",
        "package": "tls-extra",
        "partial": "Client",
        "signature": "String-\u003eString-\u003eTLSParams-\u003eg-\u003eIO Context"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:fileReadCertificate",
      "description": {
        "fct-descr": "\u003cp\u003eread one X509 certificate from a file.\n\u003c/p\u003e\u003cp\u003ethe certificate must be in the usual PEM format with the\n TRUSTED CERTIFICATE or CERTIFICATE pem name.\n\u003c/p\u003e\u003cp\u003eIf no valid PEM encoded certificate is found in the file\n this function will raise an error.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "FilePath -\u003e IO X509",
        "fct-source": "src/Network-TLS-Extra-File.html#fileReadCertificate",
        "fct-type": "function",
        "title": "fileReadCertificate"
      },
      "index": {
        "description": "read one X509 certificate from file the certificate must be in the usual PEM format with the TRUSTED CERTIFICATE or CERTIFICATE pem name If no valid PEM encoded certificate is found in the file this function will raise an error",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "fileReadCertificate",
        "normalized": "FilePath-\u003eIO X",
        "package": "tls-extra",
        "partial": "Read Certificate",
        "signature": "FilePath-\u003eIO X"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tls-extra/docs/Network-TLS-Extra.html#v:fileReadPrivateKey",
      "description": {
        "fct-descr": "\u003cp\u003eread one private key from a file.\n\u003c/p\u003e\u003cp\u003ethe private key must be in the usual PEM format and at the moment only\n RSA PRIVATE KEY are supported.\n\u003c/p\u003e\u003cp\u003eIf no valid PEM encoded private key is found in the file\n this function will raise an error.\n\u003c/p\u003e",
        "fct-module": "Network.TLS.Extra",
        "fct-package": "tls-extra",
        "fct-signature": "FilePath -\u003e IO PrivateKey",
        "fct-source": "src/Network-TLS-Extra-File.html#fileReadPrivateKey",
        "fct-type": "function",
        "title": "fileReadPrivateKey"
      },
      "index": {
        "description": "read one private key from file the private key must be in the usual PEM format and at the moment only RSA PRIVATE KEY are supported If no valid PEM encoded private key is found in the file this function will raise an error",
        "hierarchy": "Network TLS Extra",
        "module": "Network.TLS.Extra",
        "name": "fileReadPrivateKey",
        "normalized": "FilePath-\u003eIO PrivateKey",
        "package": "tls-extra",
        "partial": "Read Private Key",
        "signature": "FilePath-\u003eIO PrivateKey"
      }
    }
  }
]