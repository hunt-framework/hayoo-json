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
        "word": "x509-store"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509.CertificateStore",
          "name": "CertificateStore",
          "package": "x509-store",
          "source": "src/Data-X509-CertificateStore.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data X509 CertificateStore",
          "module": "Data.X509.CertificateStore",
          "name": "CertificateStore",
          "package": "x509-store",
          "partial": "Certificate Store",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Collection of certificate or store of certificates.\n\u003c/p\u003e",
          "module": "Data.X509.CertificateStore",
          "name": "CertificateStore",
          "package": "x509-store",
          "source": "src/Data-X509-CertificateStore.html#CertificateStore",
          "type": "data"
        },
        "index": {
          "description": "Collection of certificate or store of certificates",
          "hierarchy": "Data X509 CertificateStore",
          "module": "Data.X509.CertificateStore",
          "name": "CertificateStore",
          "package": "x509-store",
          "partial": "Certificate Store",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#t:CertificateStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind a certificate using the subject distinguished name\n\u003c/p\u003e",
          "module": "Data.X509.CertificateStore",
          "name": "findCertificate",
          "package": "x509-store",
          "signature": "DistinguishedName -\u003e CertificateStore -\u003e Maybe SignedCertificate",
          "source": "src/Data-X509-CertificateStore.html#findCertificate",
          "type": "function"
        },
        "index": {
          "description": "Find certificate using the subject distinguished name",
          "hierarchy": "Data X509 CertificateStore",
          "module": "Data.X509.CertificateStore",
          "name": "findCertificate",
          "normalized": "DistinguishedName-\u003eCertificateStore-\u003eMaybe SignedCertificate",
          "package": "x509-store",
          "partial": "Certificate",
          "signature": "DistinguishedName-\u003eCertificateStore-\u003eMaybe SignedCertificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#v:findCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all certificates in a store\n\u003c/p\u003e",
          "module": "Data.X509.CertificateStore",
          "name": "listCertificates",
          "package": "x509-store",
          "signature": "CertificateStore -\u003e [SignedCertificate]",
          "source": "src/Data-X509-CertificateStore.html#listCertificates",
          "type": "function"
        },
        "index": {
          "description": "List all certificates in store",
          "hierarchy": "Data X509 CertificateStore",
          "module": "Data.X509.CertificateStore",
          "name": "listCertificates",
          "normalized": "CertificateStore-\u003e[SignedCertificate]",
          "package": "x509-store",
          "partial": "Certificates",
          "signature": "CertificateStore-\u003e[SignedCertificate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#v:listCertificates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a certificate store out of a list of X509 certificate\n\u003c/p\u003e",
          "module": "Data.X509.CertificateStore",
          "name": "makeCertificateStore",
          "package": "x509-store",
          "signature": "[SignedCertificate] -\u003e CertificateStore",
          "source": "src/Data-X509-CertificateStore.html#makeCertificateStore",
          "type": "function"
        },
        "index": {
          "description": "Create certificate store out of list of X509 certificate",
          "hierarchy": "Data X509 CertificateStore",
          "module": "Data.X509.CertificateStore",
          "name": "makeCertificateStore",
          "normalized": "[SignedCertificate]-\u003eCertificateStore",
          "package": "x509-store",
          "partial": "Certificate Store",
          "signature": "[SignedCertificate]-\u003eCertificateStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-CertificateStore.html#v:makeCertificateStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509.File",
          "name": "File",
          "package": "x509-store",
          "source": "src/Data-X509-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data X509 File",
          "module": "Data.X509.File",
          "name": "File",
          "package": "x509-store",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn all the public key that were successfully read from a file.\n\u003c/p\u003e",
          "module": "Data.X509.File",
          "name": "readKeyFile",
          "package": "x509-store",
          "signature": "FilePath -\u003e IO [PrivKey]",
          "source": "src/Data-X509-File.html#readKeyFile",
          "type": "function"
        },
        "index": {
          "description": "return all the public key that were successfully read from file",
          "hierarchy": "Data X509 File",
          "module": "Data.X509.File",
          "name": "readKeyFile",
          "normalized": "FilePath-\u003eIO[PrivKey]",
          "package": "x509-store",
          "partial": "Key File",
          "signature": "FilePath-\u003eIO[PrivKey]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-File.html#v:readKeyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn all the signed objects in a file.\n\u003c/p\u003e\u003cp\u003e(only one type at a time).\n\u003c/p\u003e",
          "module": "Data.X509.File",
          "name": "readSignedObject",
          "package": "x509-store",
          "signature": "FilePath -\u003e IO [SignedExact a]",
          "source": "src/Data-X509-File.html#readSignedObject",
          "type": "function"
        },
        "index": {
          "description": "return all the signed objects in file only one type at time",
          "hierarchy": "Data X509 File",
          "module": "Data.X509.File",
          "name": "readSignedObject",
          "normalized": "FilePath-\u003eIO[SignedExact a]",
          "package": "x509-store",
          "partial": "Signed Object",
          "signature": "FilePath-\u003eIO[SignedExact a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-File.html#v:readSignedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509.Memory",
          "name": "Memory",
          "package": "x509-store",
          "source": "src/Data-X509-Memory.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data X509 Memory",
          "module": "Data.X509.Memory",
          "name": "Memory",
          "package": "x509-store",
          "partial": "Memory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-Memory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509.Memory",
          "name": "readKeyFileFromMemory",
          "package": "x509-store",
          "signature": "ByteString -\u003e [PrivKey]",
          "source": "src/Data-X509-Memory.html#readKeyFileFromMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509 Memory",
          "module": "Data.X509.Memory",
          "name": "readKeyFileFromMemory",
          "normalized": "ByteString-\u003e[PrivKey]",
          "package": "x509-store",
          "partial": "Key File From Memory",
          "signature": "ByteString-\u003e[PrivKey]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-Memory.html#v:readKeyFileFromMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509.Memory",
          "name": "readSignedObjectFromMemory",
          "package": "x509-store",
          "signature": "ByteString -\u003e [SignedExact a]",
          "source": "src/Data-X509-Memory.html#readSignedObjectFromMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509 Memory",
          "module": "Data.X509.Memory",
          "name": "readSignedObjectFromMemory",
          "normalized": "ByteString-\u003e[SignedExact a]",
          "package": "x509-store",
          "partial": "Signed Object From Memory",
          "signature": "ByteString-\u003e[SignedExact a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-store/docs/Data-X509-Memory.html#v:readSignedObjectFromMemory"
      }
    }
  ]
]