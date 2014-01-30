[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#",
      "description": {
        "fct-module": "Data.X509.CertificateStore",
        "fct-package": "x509-store",
        "fct-signature": "module",
        "fct-source": "src/Data-X509-CertificateStore.html",
        "fct-type": "module",
        "title": "CertificateStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Data X509 CertificateStore",
        "module": "Data.X509.CertificateStore",
        "name": "CertificateStore",
        "normalized": "",
        "package": "x509-store",
        "partial": "Certificate Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#t:CertificateStore",
      "description": {
        "fct-descr": "\u003cp\u003eA Collection of certificate or store of certificates.\n\u003c/p\u003e",
        "fct-module": "Data.X509.CertificateStore",
        "fct-package": "x509-store",
        "fct-signature": "data",
        "fct-source": "src/Data-X509-CertificateStore.html#CertificateStore",
        "fct-type": "data",
        "title": "CertificateStore"
      },
      "index": {
        "description": "Collection of certificate or store of certificates",
        "hierarchy": "Data X509 CertificateStore",
        "module": "Data.X509.CertificateStore",
        "name": "CertificateStore",
        "normalized": "",
        "package": "x509-store",
        "partial": "Certificate Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#v:findCertificate",
      "description": {
        "fct-descr": "\u003cp\u003eFind a certificate using the subject distinguished name\n\u003c/p\u003e",
        "fct-module": "Data.X509.CertificateStore",
        "fct-package": "x509-store",
        "fct-signature": "DistinguishedName -\u003e CertificateStore -\u003e Maybe SignedCertificate",
        "fct-source": "src/Data-X509-CertificateStore.html#findCertificate",
        "fct-type": "function",
        "title": "findCertificate"
      },
      "index": {
        "description": "Find certificate using the subject distinguished name",
        "hierarchy": "Data X509 CertificateStore",
        "module": "Data.X509.CertificateStore",
        "name": "findCertificate",
        "normalized": "DistinguishedName-\u003eCertificateStore-\u003eMaybe SignedCertificate",
        "package": "x509-store",
        "partial": "Certificate",
        "signature": "DistinguishedName-\u003eCertificateStore-\u003eMaybe SignedCertificate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#v:listCertificates",
      "description": {
        "fct-descr": "\u003cp\u003eList all certificates in a store\n\u003c/p\u003e",
        "fct-module": "Data.X509.CertificateStore",
        "fct-package": "x509-store",
        "fct-signature": "CertificateStore -\u003e [SignedCertificate]",
        "fct-source": "src/Data-X509-CertificateStore.html#listCertificates",
        "fct-type": "function",
        "title": "listCertificates"
      },
      "index": {
        "description": "List all certificates in store",
        "hierarchy": "Data X509 CertificateStore",
        "module": "Data.X509.CertificateStore",
        "name": "listCertificates",
        "normalized": "CertificateStore-\u003e[SignedCertificate]",
        "package": "x509-store",
        "partial": "Certificates",
        "signature": "CertificateStore-\u003e[SignedCertificate]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#v:makeCertificateStore",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a certificate store out of a list of X509 certificate\n\u003c/p\u003e",
        "fct-module": "Data.X509.CertificateStore",
        "fct-package": "x509-store",
        "fct-signature": "[SignedCertificate] -\u003e CertificateStore",
        "fct-source": "src/Data-X509-CertificateStore.html#makeCertificateStore",
        "fct-type": "function",
        "title": "makeCertificateStore"
      },
      "index": {
        "description": "Create certificate store out of list of X509 certificate",
        "hierarchy": "Data X509 CertificateStore",
        "module": "Data.X509.CertificateStore",
        "name": "makeCertificateStore",
        "normalized": "[SignedCertificate]-\u003eCertificateStore",
        "package": "x509-store",
        "partial": "Certificate Store",
        "signature": "[SignedCertificate]-\u003eCertificateStore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-File.html#",
      "description": {
        "fct-module": "Data.X509.File",
        "fct-package": "x509-store",
        "fct-signature": "module",
        "fct-source": "src/Data-X509-File.html",
        "fct-type": "module",
        "title": "File"
      },
      "index": {
        "description": "",
        "hierarchy": "Data X509 File",
        "module": "Data.X509.File",
        "name": "File",
        "normalized": "",
        "package": "x509-store",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-File.html#v:readKeyFile",
      "description": {
        "fct-descr": "\u003cp\u003ereturn all the public key that were successfully read from a file.\n\u003c/p\u003e",
        "fct-module": "Data.X509.File",
        "fct-package": "x509-store",
        "fct-signature": "FilePath -\u003e IO [PrivKey]",
        "fct-source": "src/Data-X509-File.html#readKeyFile",
        "fct-type": "function",
        "title": "readKeyFile"
      },
      "index": {
        "description": "return all the public key that were successfully read from file",
        "hierarchy": "Data X509 File",
        "module": "Data.X509.File",
        "name": "readKeyFile",
        "normalized": "FilePath-\u003eIO[PrivKey]",
        "package": "x509-store",
        "partial": "Key File",
        "signature": "FilePath-\u003eIO[PrivKey]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-File.html#v:readSignedObject",
      "description": {
        "fct-descr": "\u003cp\u003ereturn all the signed objects in a file.\n\u003c/p\u003e\u003cp\u003e(only one type at a time).\n\u003c/p\u003e",
        "fct-module": "Data.X509.File",
        "fct-package": "x509-store",
        "fct-signature": "FilePath -\u003e IO [SignedExact a]",
        "fct-source": "src/Data-X509-File.html#readSignedObject",
        "fct-type": "function",
        "title": "readSignedObject"
      },
      "index": {
        "description": "return all the signed objects in file only one type at time",
        "hierarchy": "Data X509 File",
        "module": "Data.X509.File",
        "name": "readSignedObject",
        "normalized": "FilePath-\u003eIO[SignedExact a]",
        "package": "x509-store",
        "partial": "Signed Object",
        "signature": "FilePath-\u003eIO[SignedExact a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-Memory.html#",
      "description": {
        "fct-module": "Data.X509.Memory",
        "fct-package": "x509-store",
        "fct-signature": "module",
        "fct-source": "src/Data-X509-Memory.html",
        "fct-type": "module",
        "title": "Memory"
      },
      "index": {
        "description": "",
        "hierarchy": "Data X509 Memory",
        "module": "Data.X509.Memory",
        "name": "Memory",
        "normalized": "",
        "package": "x509-store",
        "partial": "Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-Memory.html#v:readKeyFileFromMemory",
      "description": {
        "fct-module": "Data.X509.Memory",
        "fct-package": "x509-store",
        "fct-signature": "ByteString -\u003e [PrivKey]",
        "fct-source": "src/Data-X509-Memory.html#readKeyFileFromMemory",
        "fct-type": "function",
        "title": "readKeyFileFromMemory"
      },
      "index": {
        "description": "",
        "hierarchy": "Data X509 Memory",
        "module": "Data.X509.Memory",
        "name": "readKeyFileFromMemory",
        "normalized": "ByteString-\u003e[PrivKey]",
        "package": "x509-store",
        "partial": "Key File From Memory",
        "signature": "ByteString-\u003e[PrivKey]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-Memory.html#v:readSignedObjectFromMemory",
      "description": {
        "fct-module": "Data.X509.Memory",
        "fct-package": "x509-store",
        "fct-signature": "ByteString -\u003e [SignedExact a]",
        "fct-source": "src/Data-X509-Memory.html#readSignedObjectFromMemory",
        "fct-type": "function",
        "title": "readSignedObjectFromMemory"
      },
      "index": {
        "description": "",
        "hierarchy": "Data X509 Memory",
        "module": "Data.X509.Memory",
        "name": "readSignedObjectFromMemory",
        "normalized": "ByteString-\u003e[SignedExact a]",
        "package": "x509-store",
        "partial": "Signed Object From Memory",
        "signature": "ByteString-\u003e[SignedExact a]"
      }
    }
  }
]