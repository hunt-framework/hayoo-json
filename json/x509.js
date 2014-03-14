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
        "word": "x509"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead/Write X509 Certificate, CRL and their signed equivalents.\n\u003c/p\u003e\u003cp\u003eFollows RFC5280 / RFC6818\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.X509",
          "name": "X509",
          "package": "x509",
          "source": "src/Data-X509.html",
          "type": "module"
        },
        "index": {
          "description": "Read Write X509 Certificate CRL and their signed equivalents Follows RFC5280 RFC6818",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "X509",
          "package": "x509",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Character String with encoding\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ASN1CharacterString",
          "package": "x509",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Character String with encoding",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ASN1CharacterString",
          "package": "x509",
          "partial": "ASN Character String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ASN1CharacterString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent naming scheme use by the extension.\n\u003c/p\u003e\u003cp\u003eNot all name types are available, missing:\n otherName\n x400Address\n directoryName\n ediPartyName\n registeredID\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "AltName",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#AltName",
          "type": "data"
        },
        "index": {
          "description": "Different naming scheme use by the extension Not all name types are available missing otherName x400Address directoryName ediPartyName registeredID",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "AltName",
          "package": "x509",
          "partial": "Alt Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:AltName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe a Certificate revocation list\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "CRL",
          "package": "x509",
          "source": "src/Data-X509-CRL.html#CRL",
          "type": "data"
        },
        "index": {
          "description": "Describe Certificate revocation list",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "CRL",
          "package": "x509",
          "partial": "CRL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:CRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX.509 Certificate type.\n\u003c/p\u003e\u003cp\u003eThis type doesn't include the signature, it's describe in the RFC\n as tbsCertificate.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "Certificate",
          "package": "x509",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "data"
        },
        "index": {
          "description": "X.509 Certificate type This type doesn include the signature it describe in the RFC as tbsCertificate",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Certificate",
          "package": "x509",
          "partial": "Certificate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:Certificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chain of X.509 certificates in exact form.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "CertificateChain",
          "package": "x509",
          "source": "src/Data-X509-CertificateChain.html#CertificateChain",
          "type": "newtype"
        },
        "index": {
          "description": "chain of X.509 certificates in exact form",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "CertificateChain",
          "package": "x509",
          "partial": "Certificate Chain",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:CertificateChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a chain of X.509 certificates in bytestring form.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "CertificateChainRaw",
          "package": "x509",
          "source": "src/Data-X509-CertificateChain.html#CertificateChainRaw",
          "type": "newtype"
        },
        "index": {
          "description": "Represent chain of X.509 certificates in bytestring form",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "CertificateChainRaw",
          "package": "x509",
          "partial": "Certificate Chain Raw",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:CertificateChainRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of OID and strings.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "DistinguishedName",
          "package": "x509",
          "source": "src/Data-X509-DistinguishedName.html#DistinguishedName",
          "type": "newtype"
        },
        "index": {
          "description": "list of OID and strings",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DistinguishedName",
          "package": "x509",
          "partial": "Distinguished Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:DistinguishedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribution point as either some GeneralNames or a DN\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "DistributionPoint",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#DistributionPoint",
          "type": "data"
        },
        "index": {
          "description": "Distribution point as either some GeneralNames or DN",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DistributionPoint",
          "package": "x509",
          "partial": "Distribution Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:DistributionPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElements commonly available in a \u003ccode\u003e\u003ca\u003eDistinguishedName\u003c/a\u003e\u003c/code\u003e structure\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "DnElement",
          "package": "x509",
          "source": "src/Data-X509-DistinguishedName.html#DnElement",
          "type": "data"
        },
        "index": {
          "description": "Elements commonly available in DistinguishedName structure",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DnElement",
          "package": "x509",
          "partial": "Dn Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:DnElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a mean to identify the public key corresponding to the private key\n used to signed a certificate.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtAuthorityKeyId",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ExtAuthorityKeyId",
          "type": "data"
        },
        "index": {
          "description": "Provide mean to identify the public key corresponding to the private key used to signed certificate",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtAuthorityKeyId",
          "package": "x509",
          "partial": "Ext Authority Key Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtAuthorityKeyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic Constraints\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtBasicConstraints",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ExtBasicConstraints",
          "type": "data"
        },
        "index": {
          "description": "Basic Constraints",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtBasicConstraints",
          "package": "x509",
          "partial": "Ext Basic Constraints",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtBasicConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentify how CRL information is obtained\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtCrlDistributionPoints",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ExtCrlDistributionPoints",
          "type": "data"
        },
        "index": {
          "description": "Identify how CRL information is obtained",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtCrlDistributionPoints",
          "package": "x509",
          "partial": "Ext Crl Distribution Points",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtCrlDistributionPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtended key usage extension\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtExtendedKeyUsage",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ExtExtendedKeyUsage",
          "type": "data"
        },
        "index": {
          "description": "Extended key usage extension",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtExtendedKeyUsage",
          "package": "x509",
          "partial": "Ext Extended Key Usage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtExtendedKeyUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe key usage\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtKeyUsage",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ExtKeyUsage",
          "type": "data"
        },
        "index": {
          "description": "Describe key usage",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtKeyUsage",
          "package": "x509",
          "partial": "Ext Key Usage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtKeyUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ekey usage flag that is found in the key usage extension field.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtKeyUsageFlag",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "data"
        },
        "index": {
          "description": "key usage flag that is found in the key usage extension field",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtKeyUsageFlag",
          "package": "x509",
          "partial": "Ext Key Usage Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtKeyUsageFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey usage purposes for the ExtendedKeyUsage extension\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtKeyUsagePurpose",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ExtKeyUsagePurpose",
          "type": "data"
        },
        "index": {
          "description": "Key usage purposes for the ExtendedKeyUsage extension",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtKeyUsagePurpose",
          "package": "x509",
          "partial": "Ext Key Usage Purpose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtKeyUsagePurpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a way to supply alternate name that can be\n used for matching host name.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtSubjectAltName",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ExtSubjectAltName",
          "type": "data"
        },
        "index": {
          "description": "Provide way to supply alternate name that can be used for matching host name",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtSubjectAltName",
          "package": "x509",
          "partial": "Ext Subject Alt Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtSubjectAltName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a way to identify a public key by a short hash.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtSubjectKeyId",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ExtSubjectKeyId",
          "type": "data"
        },
        "index": {
          "description": "Provide way to identify public key by short hash",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtSubjectKeyId",
          "package": "x509",
          "partial": "Ext Subject Key Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtSubjectKeyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtension class.\n\u003c/p\u003e\u003cp\u003eeach extension have a unique OID associated, and a way\n to encode and decode an ASN1 stream.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "Extension",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#Extension",
          "type": "class"
        },
        "index": {
          "description": "Extension class each extension have unique OID associated and way to encode and decode an ASN1 stream",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Extension",
          "package": "x509",
          "partial": "Extension",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:Extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn undecoded extension\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ExtensionRaw",
          "package": "x509",
          "source": "src/Data-X509-ExtensionRaw.html#ExtensionRaw",
          "type": "data"
        },
        "index": {
          "description": "An undecoded extension",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtensionRaw",
          "package": "x509",
          "partial": "Extension Raw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ExtensionRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea Set of \u003ccode\u003e\u003ca\u003eExtensionRaw\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "Extensions",
          "package": "x509",
          "source": "src/Data-X509-ExtensionRaw.html#Extensions",
          "type": "newtype"
        },
        "index": {
          "description": "Set of ExtensionRaw",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Extensions",
          "package": "x509",
          "partial": "Extensions",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:Extensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash Algorithm\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "HashALG",
          "package": "x509",
          "source": "src/Data-X509-AlgorithmIdentifier.html#HashALG",
          "type": "data"
        },
        "index": {
          "description": "Hash Algorithm",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "HashALG",
          "package": "x509",
          "partial": "Hash ALG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:HashALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrivate key types known and used in X.509\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PrivKey",
          "package": "x509",
          "source": "src/Data-X509-PrivateKey.html#PrivKey",
          "type": "data"
        },
        "index": {
          "description": "Private key types known and used in X.509",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PrivKey",
          "package": "x509",
          "partial": "Priv Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:PrivKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic key types known and used in X.509\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKey",
          "package": "x509",
          "source": "src/Data-X509-PublicKey.html#PubKey",
          "type": "data"
        },
        "index": {
          "description": "Public key types known and used in X.509",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKey",
          "package": "x509",
          "partial": "Pub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:PubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic Key Algorithm\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyALG",
          "package": "x509",
          "source": "src/Data-X509-AlgorithmIdentifier.html#PubKeyALG",
          "type": "data"
        },
        "index": {
          "description": "Public Key Algorithm",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyALG",
          "package": "x509",
          "partial": "Pub Key ALG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:PubKeyALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReason flag for the CRL\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "ReasonFlag",
          "package": "x509",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "data"
        },
        "index": {
          "description": "Reason flag for the CRL",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ReasonFlag",
          "package": "x509",
          "partial": "Reason Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:ReasonFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe a revoked certificate identifiable by serial number.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "RevokedCertificate",
          "package": "x509",
          "source": "src/Data-X509-CRL.html#RevokedCertificate",
          "type": "data"
        },
        "index": {
          "description": "Describe revoked certificate identifiable by serial number",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "RevokedCertificate",
          "package": "x509",
          "partial": "Revoked Certificate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:RevokedCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignature Algorithm often composed of\n a public key algorithm and a hash algorithm\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "SignatureALG",
          "package": "x509",
          "source": "src/Data-X509-AlgorithmIdentifier.html#SignatureALG",
          "type": "data"
        },
        "index": {
          "description": "Signature Algorithm often composed of public key algorithm and hash algorithm",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "SignatureALG",
          "package": "x509",
          "partial": "Signature ALG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:SignatureALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent a signed object using a traditional X509 structure.\n\u003c/p\u003e\u003cp\u003eWhen dealing with external certificate, use the SignedExact structure\n not this one.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "Signed",
          "package": "x509",
          "source": "src/Data-X509-Signed.html#Signed",
          "type": "data"
        },
        "index": {
          "description": "Represent signed object using traditional X509 structure When dealing with external certificate use the SignedExact structure not this one",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Signed",
          "package": "x509",
          "partial": "Signed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:Signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Signed CRL\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "SignedCRL",
          "package": "x509",
          "source": "src/Data-X509.html#SignedCRL",
          "type": "type"
        },
        "index": {
          "description": "Signed CRL",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "SignedCRL",
          "package": "x509",
          "partial": "Signed CRL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:SignedCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Signed Certificate\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "SignedCertificate",
          "package": "x509",
          "source": "src/Data-X509.html#SignedCertificate",
          "type": "type"
        },
        "index": {
          "description": "Signed Certificate",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "SignedCertificate",
          "package": "x509",
          "partial": "Signed Certificate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:SignedCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent the signed object plus the raw data that we need to\n keep around for non compliant case to be able to verify signature.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "SignedExact",
          "package": "x509",
          "source": "src/Data-X509-Signed.html#SignedExact",
          "type": "data"
        },
        "index": {
          "description": "Represent the signed object plus the raw data that we need to keep around for non compliant case to be able to verify signature",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "SignedExact",
          "package": "x509",
          "partial": "Signed Exact",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#t:SignedExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "ASN1CharacterString",
          "package": "x509",
          "signature": "ASN1CharacterString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ASN1CharacterString",
          "package": "x509",
          "partial": "ASN Character String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:ASN1CharacterString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "AltNameDNS",
          "package": "x509",
          "signature": "AltNameDNS String",
          "source": "src/Data-X509-Ext.html#AltName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "AltNameDNS",
          "package": "x509",
          "partial": "Alt Name DNS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:AltNameDNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "AltNameIP",
          "package": "x509",
          "signature": "AltNameIP ByteString",
          "source": "src/Data-X509-Ext.html#AltName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "AltNameIP",
          "package": "x509",
          "partial": "Alt Name IP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:AltNameIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "AltNameRFC822",
          "package": "x509",
          "signature": "AltNameRFC822 String",
          "source": "src/Data-X509-Ext.html#AltName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "AltNameRFC822",
          "package": "x509",
          "partial": "Alt Name RFC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:AltNameRFC822"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "AltNameURI",
          "package": "x509",
          "signature": "AltNameURI String",
          "source": "src/Data-X509-Ext.html#AltName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "AltNameURI",
          "package": "x509",
          "partial": "Alt Name URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:AltNameURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "CRL",
          "package": "x509",
          "signature": "CRL",
          "source": "src/Data-X509-CRL.html#CRL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "CRL",
          "package": "x509",
          "partial": "CRL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:CRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Certificate",
          "package": "x509",
          "signature": "Certificate",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Certificate",
          "package": "x509",
          "partial": "Certificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Certificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "CertificateChain",
          "package": "x509",
          "signature": "CertificateChain [SignedExact Certificate]",
          "source": "src/Data-X509-CertificateChain.html#CertificateChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "CertificateChain",
          "normalized": "CertificateChain[SignedExact Certificate]",
          "package": "x509",
          "partial": "Certificate Chain",
          "signature": "CertificateChain[SignedExact Certificate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:CertificateChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "CertificateChainRaw",
          "package": "x509",
          "signature": "CertificateChainRaw [ByteString]",
          "source": "src/Data-X509-CertificateChain.html#CertificateChainRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "CertificateChainRaw",
          "normalized": "CertificateChainRaw[ByteString]",
          "package": "x509",
          "partial": "Certificate Chain Raw",
          "signature": "CertificateChainRaw[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:CertificateChainRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "DistinguishedName",
          "package": "x509",
          "signature": "DistinguishedName",
          "source": "src/Data-X509-DistinguishedName.html#DistinguishedName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DistinguishedName",
          "package": "x509",
          "partial": "Distinguished Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:DistinguishedName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "DistributionNameRelative",
          "package": "x509",
          "signature": "DistributionNameRelative DistinguishedName",
          "source": "src/Data-X509-Ext.html#DistributionPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DistributionNameRelative",
          "package": "x509",
          "partial": "Distribution Name Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:DistributionNameRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "DistributionPointFullName",
          "package": "x509",
          "signature": "DistributionPointFullName [AltName]",
          "source": "src/Data-X509-Ext.html#DistributionPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DistributionPointFullName",
          "normalized": "DistributionPointFullName[AltName]",
          "package": "x509",
          "partial": "Distribution Point Full Name",
          "signature": "DistributionPointFullName[AltName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:DistributionPointFullName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCN\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "DnCommonName",
          "package": "x509",
          "signature": "DnCommonName",
          "source": "src/Data-X509-DistinguishedName.html#DnElement",
          "type": "function"
        },
        "index": {
          "description": "CN",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DnCommonName",
          "package": "x509",
          "partial": "Dn Common Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:DnCommonName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCountry\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "DnCountry",
          "package": "x509",
          "signature": "DnCountry",
          "source": "src/Data-X509-DistinguishedName.html#DnElement",
          "type": "function"
        },
        "index": {
          "description": "Country",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DnCountry",
          "package": "x509",
          "partial": "Dn Country",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:DnCountry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "DnOrganization",
          "package": "x509",
          "signature": "DnOrganization",
          "source": "src/Data-X509-DistinguishedName.html#DnElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DnOrganization",
          "package": "x509",
          "partial": "Dn Organization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:DnOrganization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOU\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "DnOrganizationUnit",
          "package": "x509",
          "signature": "DnOrganizationUnit",
          "source": "src/Data-X509-DistinguishedName.html#DnElement",
          "type": "function"
        },
        "index": {
          "description": "OU",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "DnOrganizationUnit",
          "package": "x509",
          "partial": "Dn Organization Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:DnOrganizationUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "ExtAuthorityKeyId",
          "package": "x509",
          "signature": "ExtAuthorityKeyId ByteString",
          "source": "src/Data-X509-Ext.html#ExtAuthorityKeyId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtAuthorityKeyId",
          "package": "x509",
          "partial": "Ext Authority Key Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:ExtAuthorityKeyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "ExtBasicConstraints",
          "package": "x509",
          "signature": "ExtBasicConstraints Bool (Maybe Integer)",
          "source": "src/Data-X509-Ext.html#ExtBasicConstraints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtBasicConstraints",
          "package": "x509",
          "partial": "Ext Basic Constraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:ExtBasicConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "ExtCrlDistributionPoints",
          "package": "x509",
          "signature": "ExtCrlDistributionPoints [DistributionPoint]",
          "source": "src/Data-X509-Ext.html#ExtCrlDistributionPoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtCrlDistributionPoints",
          "normalized": "ExtCrlDistributionPoints[DistributionPoint]",
          "package": "x509",
          "partial": "Ext Crl Distribution Points",
          "signature": "ExtCrlDistributionPoints[DistributionPoint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:ExtCrlDistributionPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "ExtExtendedKeyUsage",
          "package": "x509",
          "signature": "ExtExtendedKeyUsage [ExtKeyUsagePurpose]",
          "source": "src/Data-X509-Ext.html#ExtExtendedKeyUsage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtExtendedKeyUsage",
          "normalized": "ExtExtendedKeyUsage[ExtKeyUsagePurpose]",
          "package": "x509",
          "partial": "Ext Extended Key Usage",
          "signature": "ExtExtendedKeyUsage[ExtKeyUsagePurpose]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:ExtExtendedKeyUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "ExtKeyUsage",
          "package": "x509",
          "signature": "ExtKeyUsage [ExtKeyUsageFlag]",
          "source": "src/Data-X509-Ext.html#ExtKeyUsage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtKeyUsage",
          "normalized": "ExtKeyUsage[ExtKeyUsageFlag]",
          "package": "x509",
          "partial": "Ext Key Usage",
          "signature": "ExtKeyUsage[ExtKeyUsageFlag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:ExtKeyUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "ExtSubjectAltName",
          "package": "x509",
          "signature": "ExtSubjectAltName [AltName]",
          "source": "src/Data-X509-Ext.html#ExtSubjectAltName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtSubjectAltName",
          "normalized": "ExtSubjectAltName[AltName]",
          "package": "x509",
          "partial": "Ext Subject Alt Name",
          "signature": "ExtSubjectAltName[AltName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:ExtSubjectAltName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "ExtSubjectKeyId",
          "package": "x509",
          "signature": "ExtSubjectKeyId ByteString",
          "source": "src/Data-X509-Ext.html#ExtSubjectKeyId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtSubjectKeyId",
          "package": "x509",
          "partial": "Ext Subject Key Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:ExtSubjectKeyId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "ExtensionRaw",
          "package": "x509",
          "signature": "ExtensionRaw",
          "source": "src/Data-X509-ExtensionRaw.html#ExtensionRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "ExtensionRaw",
          "package": "x509",
          "partial": "Extension Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:ExtensionRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Extensions",
          "package": "x509",
          "signature": "Extensions (Maybe [ExtensionRaw])",
          "source": "src/Data-X509-ExtensionRaw.html#Extensions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Extensions",
          "normalized": "Extensions(Maybe[ExtensionRaw])",
          "package": "x509",
          "partial": "Extensions",
          "signature": "Extensions(Maybe[ExtensionRaw])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Extensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "HashMD2",
          "package": "x509",
          "signature": "HashMD2",
          "source": "src/Data-X509-AlgorithmIdentifier.html#HashALG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "HashMD2",
          "package": "x509",
          "partial": "Hash MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:HashMD2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "HashMD5",
          "package": "x509",
          "signature": "HashMD5",
          "source": "src/Data-X509-AlgorithmIdentifier.html#HashALG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "HashMD5",
          "package": "x509",
          "partial": "Hash MD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:HashMD5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "HashSHA1",
          "package": "x509",
          "signature": "HashSHA1",
          "source": "src/Data-X509-AlgorithmIdentifier.html#HashALG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "HashSHA1",
          "package": "x509",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:HashSHA1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "HashSHA224",
          "package": "x509",
          "signature": "HashSHA224",
          "source": "src/Data-X509-AlgorithmIdentifier.html#HashALG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "HashSHA224",
          "package": "x509",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:HashSHA224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "HashSHA256",
          "package": "x509",
          "signature": "HashSHA256",
          "source": "src/Data-X509-AlgorithmIdentifier.html#HashALG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "HashSHA256",
          "package": "x509",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:HashSHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "HashSHA384",
          "package": "x509",
          "signature": "HashSHA384",
          "source": "src/Data-X509-AlgorithmIdentifier.html#HashALG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "HashSHA384",
          "package": "x509",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:HashSHA384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "HashSHA512",
          "package": "x509",
          "signature": "HashSHA512",
          "source": "src/Data-X509-AlgorithmIdentifier.html#HashALG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "HashSHA512",
          "package": "x509",
          "partial": "Hash SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:HashSHA512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsagePurpose_ClientAuth",
          "package": "x509",
          "signature": "KeyUsagePurpose_ClientAuth",
          "source": "src/Data-X509-Ext.html#ExtKeyUsagePurpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsagePurpose_ClientAuth",
          "package": "x509",
          "partial": "Key Usage Purpose Client Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsagePurpose_ClientAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsagePurpose_CodeSigning",
          "package": "x509",
          "signature": "KeyUsagePurpose_CodeSigning",
          "source": "src/Data-X509-Ext.html#ExtKeyUsagePurpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsagePurpose_CodeSigning",
          "package": "x509",
          "partial": "Key Usage Purpose Code Signing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsagePurpose_CodeSigning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsagePurpose_EmailProtection",
          "package": "x509",
          "signature": "KeyUsagePurpose_EmailProtection",
          "source": "src/Data-X509-Ext.html#ExtKeyUsagePurpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsagePurpose_EmailProtection",
          "package": "x509",
          "partial": "Key Usage Purpose Email Protection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsagePurpose_EmailProtection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsagePurpose_OCSPSigning",
          "package": "x509",
          "signature": "KeyUsagePurpose_OCSPSigning",
          "source": "src/Data-X509-Ext.html#ExtKeyUsagePurpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsagePurpose_OCSPSigning",
          "package": "x509",
          "partial": "Key Usage Purpose OCSPSigning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsagePurpose_OCSPSigning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsagePurpose_ServerAuth",
          "package": "x509",
          "signature": "KeyUsagePurpose_ServerAuth",
          "source": "src/Data-X509-Ext.html#ExtKeyUsagePurpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsagePurpose_ServerAuth",
          "package": "x509",
          "partial": "Key Usage Purpose Server Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsagePurpose_ServerAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsagePurpose_TimeStamping",
          "package": "x509",
          "signature": "KeyUsagePurpose_TimeStamping",
          "source": "src/Data-X509-Ext.html#ExtKeyUsagePurpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsagePurpose_TimeStamping",
          "package": "x509",
          "partial": "Key Usage Purpose Time Stamping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsagePurpose_TimeStamping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsagePurpose_Unknown",
          "package": "x509",
          "signature": "KeyUsagePurpose_Unknown OID",
          "source": "src/Data-X509-Ext.html#ExtKeyUsagePurpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsagePurpose_Unknown",
          "package": "x509",
          "partial": "Key Usage Purpose Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsagePurpose_Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsage_cRLSign",
          "package": "x509",
          "signature": "KeyUsage_cRLSign",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsage_cRLSign",
          "package": "x509",
          "partial": "Key Usage RLSign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsage_cRLSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsage_dataEncipherment",
          "package": "x509",
          "signature": "KeyUsage_dataEncipherment",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsage_dataEncipherment",
          "package": "x509",
          "partial": "Key Usage Encipherment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsage_dataEncipherment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsage_decipherOnly",
          "package": "x509",
          "signature": "KeyUsage_decipherOnly",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsage_decipherOnly",
          "package": "x509",
          "partial": "Key Usage Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsage_decipherOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsage_digitalSignature",
          "package": "x509",
          "signature": "KeyUsage_digitalSignature",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsage_digitalSignature",
          "package": "x509",
          "partial": "Key Usage Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsage_digitalSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsage_encipherOnly",
          "package": "x509",
          "signature": "KeyUsage_encipherOnly",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsage_encipherOnly",
          "package": "x509",
          "partial": "Key Usage Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsage_encipherOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsage_keyAgreement",
          "package": "x509",
          "signature": "KeyUsage_keyAgreement",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsage_keyAgreement",
          "package": "x509",
          "partial": "Key Usage Agreement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsage_keyAgreement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsage_keyCertSign",
          "package": "x509",
          "signature": "KeyUsage_keyCertSign",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsage_keyCertSign",
          "package": "x509",
          "partial": "Key Usage Cert Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsage_keyCertSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsage_keyEncipherment",
          "package": "x509",
          "signature": "KeyUsage_keyEncipherment",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsage_keyEncipherment",
          "package": "x509",
          "partial": "Key Usage Encipherment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsage_keyEncipherment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "KeyUsage_nonRepudiation",
          "package": "x509",
          "signature": "KeyUsage_nonRepudiation",
          "source": "src/Data-X509-Ext.html#ExtKeyUsageFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "KeyUsage_nonRepudiation",
          "package": "x509",
          "partial": "Key Usage Repudiation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:KeyUsage_nonRepudiation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA private key\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PrivKeyDSA",
          "package": "x509",
          "signature": "PrivKeyDSA PrivateKey",
          "source": "src/Data-X509-PrivateKey.html#PrivKey",
          "type": "function"
        },
        "index": {
          "description": "DSA private key",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PrivKeyDSA",
          "package": "x509",
          "partial": "Priv Key DSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PrivKeyDSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRSA private key\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PrivKeyRSA",
          "package": "x509",
          "signature": "PrivKeyRSA PrivateKey",
          "source": "src/Data-X509-PrivateKey.html#PrivKey",
          "type": "function"
        },
        "index": {
          "description": "RSA private key",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PrivKeyRSA",
          "package": "x509",
          "partial": "Priv Key RSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PrivKeyRSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiffie Hellman Public Key algorithm\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyALG_DH",
          "package": "x509",
          "signature": "PubKeyALG_DH",
          "source": "src/Data-X509-AlgorithmIdentifier.html#PubKeyALG",
          "type": "function"
        },
        "index": {
          "description": "Diffie Hellman Public Key algorithm",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyALG_DH",
          "package": "x509",
          "partial": "Pub Key ALG DH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyALG_DH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA Public Key algorithm\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyALG_DSA",
          "package": "x509",
          "signature": "PubKeyALG_DSA",
          "source": "src/Data-X509-AlgorithmIdentifier.html#PubKeyALG",
          "type": "function"
        },
        "index": {
          "description": "DSA Public Key algorithm",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyALG_DSA",
          "package": "x509",
          "partial": "Pub Key ALG DSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyALG_DSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eECDSA Public Key algorithm\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyALG_ECDSA",
          "package": "x509",
          "signature": "PubKeyALG_ECDSA",
          "source": "src/Data-X509-AlgorithmIdentifier.html#PubKeyALG",
          "type": "function"
        },
        "index": {
          "description": "ECDSA Public Key algorithm",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyALG_ECDSA",
          "package": "x509",
          "partial": "Pub Key ALG ECDSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyALG_ECDSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRSA Public Key algorithm\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyALG_RSA",
          "package": "x509",
          "signature": "PubKeyALG_RSA",
          "source": "src/Data-X509-AlgorithmIdentifier.html#PubKeyALG",
          "type": "function"
        },
        "index": {
          "description": "RSA Public Key algorithm",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyALG_RSA",
          "package": "x509",
          "partial": "Pub Key ALG RSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyALG_RSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnknown Public Key algorithm\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyALG_Unknown",
          "package": "x509",
          "signature": "PubKeyALG_Unknown OID",
          "source": "src/Data-X509-AlgorithmIdentifier.html#PubKeyALG",
          "type": "function"
        },
        "index": {
          "description": "Unknown Public Key algorithm",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyALG_Unknown",
          "package": "x509",
          "partial": "Pub Key ALG Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyALG_Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDH format with (p,g,q,j,(seed,pgenCounter))\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyDH",
          "package": "x509",
          "signature": "PubKeyDH (Integer, Integer, Integer, Maybe Integer, ([Word8], Integer))",
          "source": "src/Data-X509-PublicKey.html#PubKey",
          "type": "function"
        },
        "index": {
          "description": "DH format with seed pgenCounter",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyDH",
          "normalized": "PubKeyDH(Integer,Integer,Integer,Maybe Integer,([Word],Integer))",
          "package": "x509",
          "partial": "Pub Key DH",
          "signature": "PubKeyDH(Integer,Integer,Integer,Maybe Integer,([Word],Integer))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyDH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDSA public key\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyDSA",
          "package": "x509",
          "signature": "PubKeyDSA PublicKey",
          "source": "src/Data-X509-PublicKey.html#PubKey",
          "type": "function"
        },
        "index": {
          "description": "DSA public key",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyDSA",
          "package": "x509",
          "partial": "Pub Key DSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyDSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "PubKeyECDSA",
          "package": "x509",
          "signature": "PubKeyECDSA CurveName ByteString",
          "source": "src/Data-X509-PublicKey.html#PubKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyECDSA",
          "package": "x509",
          "partial": "Pub Key ECDSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyECDSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRSA public key\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyRSA",
          "package": "x509",
          "signature": "PubKeyRSA PublicKey",
          "source": "src/Data-X509-PublicKey.html#PubKey",
          "type": "function"
        },
        "index": {
          "description": "RSA public key",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyRSA",
          "package": "x509",
          "partial": "Pub Key RSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyRSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunrecognized format\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "PubKeyUnknown",
          "package": "x509",
          "signature": "PubKeyUnknown OID ByteString",
          "source": "src/Data-X509-PublicKey.html#PubKey",
          "type": "function"
        },
        "index": {
          "description": "unrecognized format",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "PubKeyUnknown",
          "package": "x509",
          "partial": "Pub Key Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:PubKeyUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Reason_AACompromise",
          "package": "x509",
          "signature": "Reason_AACompromise",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Reason_AACompromise",
          "package": "x509",
          "partial": "Reason AACompromise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Reason_AACompromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Reason_AffiliationChanged",
          "package": "x509",
          "signature": "Reason_AffiliationChanged",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Reason_AffiliationChanged",
          "package": "x509",
          "partial": "Reason Affiliation Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Reason_AffiliationChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Reason_CACompromise",
          "package": "x509",
          "signature": "Reason_CACompromise",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Reason_CACompromise",
          "package": "x509",
          "partial": "Reason CACompromise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Reason_CACompromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Reason_CertificateHold",
          "package": "x509",
          "signature": "Reason_CertificateHold",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Reason_CertificateHold",
          "package": "x509",
          "partial": "Reason Certificate Hold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Reason_CertificateHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Reason_CessationOfOperation",
          "package": "x509",
          "signature": "Reason_CessationOfOperation",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Reason_CessationOfOperation",
          "package": "x509",
          "partial": "Reason Cessation Of Operation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Reason_CessationOfOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Reason_KeyCompromise",
          "package": "x509",
          "signature": "Reason_KeyCompromise",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Reason_KeyCompromise",
          "package": "x509",
          "partial": "Reason Key Compromise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Reason_KeyCompromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Reason_PrivilegeWithdrawn",
          "package": "x509",
          "signature": "Reason_PrivilegeWithdrawn",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Reason_PrivilegeWithdrawn",
          "package": "x509",
          "partial": "Reason Privilege Withdrawn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Reason_PrivilegeWithdrawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Reason_Superseded",
          "package": "x509",
          "signature": "Reason_Superseded",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Reason_Superseded",
          "package": "x509",
          "partial": "Reason Superseded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Reason_Superseded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Reason_Unused",
          "package": "x509",
          "signature": "Reason_Unused",
          "source": "src/Data-X509-Ext.html#ReasonFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Reason_Unused",
          "package": "x509",
          "partial": "Reason Unused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Reason_Unused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "RevokedCertificate",
          "package": "x509",
          "signature": "RevokedCertificate",
          "source": "src/Data-X509-CRL.html#RevokedCertificate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "RevokedCertificate",
          "package": "x509",
          "partial": "Revoked Certificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:RevokedCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "SignatureALG",
          "package": "x509",
          "signature": "SignatureALG HashALG PubKeyALG",
          "source": "src/Data-X509-AlgorithmIdentifier.html#SignatureALG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "SignatureALG",
          "package": "x509",
          "partial": "Signature ALG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:SignatureALG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "SignatureALG_Unknown",
          "package": "x509",
          "signature": "SignatureALG_Unknown OID",
          "source": "src/Data-X509-AlgorithmIdentifier.html#SignatureALG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "SignatureALG_Unknown",
          "package": "x509",
          "partial": "Signature ALG Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:SignatureALG_Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "Signed",
          "package": "x509",
          "signature": "Signed",
          "source": "src/Data-X509-Signed.html#Signed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "Signed",
          "package": "x509",
          "partial": "Signed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:Signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtensions\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "certExtensions",
          "package": "x509",
          "signature": "Extensions",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "function"
        },
        "index": {
          "description": "Extensions",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "certExtensions",
          "package": "x509",
          "partial": "Extensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:certExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssuer DN\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "certIssuerDN",
          "package": "x509",
          "signature": "DistinguishedName",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "function"
        },
        "index": {
          "description": "Issuer DN",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "certIssuerDN",
          "package": "x509",
          "partial": "Issuer DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:certIssuerDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic key\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "certPubKey",
          "package": "x509",
          "signature": "PubKey",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "function"
        },
        "index": {
          "description": "Public key",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "certPubKey",
          "package": "x509",
          "partial": "Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:certPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerial number\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "certSerial",
          "package": "x509",
          "signature": "Integer",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "function"
        },
        "index": {
          "description": "Serial number",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "certSerial",
          "package": "x509",
          "partial": "Serial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:certSerial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignature algorithm\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "certSignatureAlg",
          "package": "x509",
          "signature": "SignatureALG",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "function"
        },
        "index": {
          "description": "Signature algorithm",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "certSignatureAlg",
          "package": "x509",
          "partial": "Signature Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:certSignatureAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubject DN\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "certSubjectDN",
          "package": "x509",
          "signature": "DistinguishedName",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "function"
        },
        "index": {
          "description": "Subject DN",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "certSubjectDN",
          "package": "x509",
          "partial": "Subject DN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:certSubjectDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidity period\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "certValidity",
          "package": "x509",
          "signature": "(UTCTime, UTCTime)",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "function"
        },
        "index": {
          "description": "Validity period",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "certValidity",
          "normalized": "(UTCTime,UTCTime)",
          "package": "x509",
          "partial": "Validity",
          "signature": "(UTCTime,UTCTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:certValidity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "certVersion",
          "package": "x509",
          "signature": "Int",
          "source": "src/Data-X509-Cert.html#Certificate",
          "type": "function"
        },
        "index": {
          "description": "Version",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "certVersion",
          "package": "x509",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:certVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "characterEncoding",
          "package": "x509",
          "signature": "ASN1StringEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "characterEncoding",
          "package": "x509",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:characterEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "crlExtensions",
          "package": "x509",
          "signature": "Extensions",
          "source": "src/Data-X509-CRL.html#CRL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "crlExtensions",
          "package": "x509",
          "partial": "Extensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:crlExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "crlIssuer",
          "package": "x509",
          "signature": "DistinguishedName",
          "source": "src/Data-X509-CRL.html#CRL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "crlIssuer",
          "package": "x509",
          "partial": "Issuer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:crlIssuer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "crlNextUpdate",
          "package": "x509",
          "signature": "Maybe UTCTime",
          "source": "src/Data-X509-CRL.html#CRL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "crlNextUpdate",
          "package": "x509",
          "partial": "Next Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:crlNextUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "crlRevokedCertificates",
          "package": "x509",
          "signature": "[RevokedCertificate]",
          "source": "src/Data-X509-CRL.html#CRL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "crlRevokedCertificates",
          "normalized": "[RevokedCertificate]",
          "package": "x509",
          "partial": "Revoked Certificates",
          "signature": "[RevokedCertificate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:crlRevokedCertificates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "crlSignatureAlg",
          "package": "x509",
          "signature": "SignatureALG",
          "source": "src/Data-X509-CRL.html#CRL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "crlSignatureAlg",
          "package": "x509",
          "partial": "Signature Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:crlSignatureAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "crlThisUpdate",
          "package": "x509",
          "signature": "UTCTime",
          "source": "src/Data-X509-CRL.html#CRL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "crlThisUpdate",
          "package": "x509",
          "partial": "This Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:crlThisUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "crlVersion",
          "package": "x509",
          "signature": "Integer",
          "source": "src/Data-X509-CRL.html#CRL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "crlVersion",
          "package": "x509",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:crlVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a CertificateChainRaw into a CertificateChain if every\n raw certificate are decoded correctly, otherwise return the index of the\n failed certificate and the error associated.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "decodeCertificateChain",
          "package": "x509",
          "signature": "CertificateChainRaw -\u003e Either (Int, String) CertificateChain",
          "source": "src/Data-X509-CertificateChain.html#decodeCertificateChain",
          "type": "function"
        },
        "index": {
          "description": "Decode CertificateChainRaw into CertificateChain if every raw certificate are decoded correctly otherwise return the index of the failed certificate and the error associated",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "decodeCertificateChain",
          "normalized": "CertificateChainRaw-\u003eEither(Int,String)CertificateChain",
          "package": "x509",
          "partial": "Certificate Chain",
          "signature": "CertificateChainRaw-\u003eEither(Int,String)CertificateChain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:decodeCertificateChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to decode a bytestring to a SignedCRL\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "decodeSignedCRL",
          "package": "x509",
          "signature": "ByteString -\u003e Either String SignedCRL",
          "source": "src/Data-X509.html#decodeSignedCRL",
          "type": "function"
        },
        "index": {
          "description": "Try to decode bytestring to SignedCRL",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "decodeSignedCRL",
          "normalized": "ByteString-\u003eEither String SignedCRL",
          "package": "x509",
          "partial": "Signed CRL",
          "signature": "ByteString-\u003eEither String SignedCRL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:decodeSignedCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to decode a bytestring to a SignedCertificate\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "decodeSignedCertificate",
          "package": "x509",
          "signature": "ByteString -\u003e Either String SignedCertificate",
          "source": "src/Data-X509.html#decodeSignedCertificate",
          "type": "function"
        },
        "index": {
          "description": "Try to decode bytestring to SignedCertificate",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "decodeSignedCertificate",
          "normalized": "ByteString-\u003eEither String SignedCertificate",
          "package": "x509",
          "partial": "Signed Certificate",
          "signature": "ByteString-\u003eEither String SignedCertificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:decodeSignedCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to parse a bytestring that use the typical X509 signed structure format\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "decodeSignedObject",
          "package": "x509",
          "signature": "ByteString -\u003e Either String (SignedExact a)",
          "source": "src/Data-X509-Signed.html#decodeSignedObject",
          "type": "function"
        },
        "index": {
          "description": "Try to parse bytestring that use the typical X509 signed structure format",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "decodeSignedObject",
          "normalized": "ByteString-\u003eEither String(SignedExact a)",
          "package": "x509",
          "partial": "Signed Object",
          "signature": "ByteString-\u003eEither String(SignedExact a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:decodeSignedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a CertificateChain into a CertificateChainRaw\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "encodeCertificateChain",
          "package": "x509",
          "signature": "CertificateChain -\u003e CertificateChainRaw",
          "source": "src/Data-X509-CertificateChain.html#encodeCertificateChain",
          "type": "function"
        },
        "index": {
          "description": "Convert CertificateChain into CertificateChainRaw",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "encodeCertificateChain",
          "normalized": "CertificateChain-\u003eCertificateChainRaw",
          "package": "x509",
          "partial": "Certificate Chain",
          "signature": "CertificateChain-\u003eCertificateChainRaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:encodeCertificateChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe raw representation of the whole signed structure\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "encodeSignedObject",
          "package": "x509",
          "signature": "SignedExact a -\u003e ByteString",
          "source": "src/Data-X509-Signed.html#encodeSignedObject",
          "type": "function"
        },
        "index": {
          "description": "The raw representation of the whole signed structure",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "encodeSignedObject",
          "normalized": "SignedExact a-\u003eByteString",
          "package": "x509",
          "partial": "Signed Object",
          "signature": "SignedExact a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:encodeSignedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "extDecode",
          "package": "x509",
          "signature": "[ASN1] -\u003e Either String a",
          "source": "src/Data-X509-Ext.html#extDecode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "extDecode",
          "normalized": "[ASN]-\u003eEither String a",
          "package": "x509",
          "partial": "Decode",
          "signature": "[ASN]-\u003eEither String a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:extDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "extEncode",
          "package": "x509",
          "signature": "a -\u003e [ASN1]",
          "source": "src/Data-X509-Ext.html#extEncode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "extEncode",
          "normalized": "a-\u003e[ASN]",
          "package": "x509",
          "partial": "Encode",
          "signature": "a-\u003e[ASN]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:extEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "extOID",
          "package": "x509",
          "signature": "a -\u003e OID",
          "source": "src/Data-X509-Ext.html#extOID",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "extOID",
          "normalized": "a-\u003eOID",
          "package": "x509",
          "partial": "OID",
          "signature": "a-\u003eOID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:extOID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe associated ASN1\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "extRawASN1",
          "package": "x509",
          "signature": "[ASN1]",
          "source": "src/Data-X509-ExtensionRaw.html#ExtensionRaw",
          "type": "function"
        },
        "index": {
          "description": "the associated ASN1",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "extRawASN1",
          "normalized": "[ASN]",
          "package": "x509",
          "partial": "Raw ASN",
          "signature": "[ASN]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:extRawASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif this extension is critical\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "extRawCritical",
          "package": "x509",
          "signature": "Bool",
          "source": "src/Data-X509-ExtensionRaw.html#ExtensionRaw",
          "type": "function"
        },
        "index": {
          "description": "if this extension is critical",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "extRawCritical",
          "package": "x509",
          "partial": "Raw Critical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:extRawCritical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOID of this extension\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "extRawOID",
          "package": "x509",
          "signature": "OID",
          "source": "src/Data-X509-ExtensionRaw.html#ExtensionRaw",
          "type": "function"
        },
        "index": {
          "description": "OID of this extension",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "extRawOID",
          "package": "x509",
          "partial": "Raw OID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:extRawOID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to decode an ExtensionRaw.\n\u003c/p\u003e\u003cp\u003eIf this function return:\n * Nothing, the OID doesn't match\n * Just Left, the OID matched, but the extension couldn't be decoded\n * Just Right, the OID matched, and the extension has been succesfully decoded\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "extensionDecode",
          "package": "x509",
          "signature": "ExtensionRaw -\u003e Maybe (Either String a)",
          "source": "src/Data-X509-Ext.html#extensionDecode",
          "type": "function"
        },
        "index": {
          "description": "Try to decode an ExtensionRaw If this function return Nothing the OID doesn match Just Left the OID matched but the extension couldn be decoded Just Right the OID matched and the extension has been succesfully decoded",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "extensionDecode",
          "normalized": "ExtensionRaw-\u003eMaybe(Either String a)",
          "package": "x509",
          "partial": "Decode",
          "signature": "ExtensionRaw-\u003eMaybe(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:extensionDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an Extension to extensionRaw\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "extensionEncode",
          "package": "x509",
          "signature": "Bool -\u003e a -\u003e ExtensionRaw",
          "source": "src/Data-X509-Ext.html#extensionEncode",
          "type": "function"
        },
        "index": {
          "description": "Encode an Extension to extensionRaw",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "extensionEncode",
          "normalized": "Bool-\u003ea-\u003eExtensionRaw",
          "package": "x509",
          "partial": "Encode",
          "signature": "Bool-\u003ea-\u003eExtensionRaw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:extensionEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a specific extension from a lists of raw extensions\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "extensionGet",
          "package": "x509",
          "signature": "Extensions -\u003e Maybe a",
          "source": "src/Data-X509-Ext.html#extensionGet",
          "type": "function"
        },
        "index": {
          "description": "Get specific extension from lists of raw extensions",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "extensionGet",
          "normalized": "Extensions-\u003eMaybe a",
          "package": "x509",
          "partial": "Get",
          "signature": "Extensions-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:extensionGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the CRL associated to a SignedCRL\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "getCRL",
          "package": "x509",
          "signature": "SignedCRL -\u003e CRL",
          "source": "src/Data-X509.html#getCRL",
          "type": "function"
        },
        "index": {
          "description": "Get the CRL associated to SignedCRL",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "getCRL",
          "normalized": "SignedCRL-\u003eCRL",
          "package": "x509",
          "partial": "CRL",
          "signature": "SignedCRL-\u003eCRL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:getCRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the Certificate associated to a SignedCertificate\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "getCertificate",
          "package": "x509",
          "signature": "SignedCertificate -\u003e Certificate",
          "source": "src/Data-X509.html#getCertificate",
          "type": "function"
        },
        "index": {
          "description": "Get the Certificate associated to SignedCertificate",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "getCertificate",
          "normalized": "SignedCertificate-\u003eCertificate",
          "package": "x509",
          "partial": "Certificate",
          "signature": "SignedCertificate-\u003eCertificate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:getCertificate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "getCharacterStringRawData",
          "package": "x509",
          "signature": "ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "getCharacterStringRawData",
          "package": "x509",
          "partial": "Character String Raw Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:getCharacterStringRawData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "getDistinguishedElements",
          "package": "x509",
          "signature": "[(OID, ASN1CharacterString)]",
          "source": "src/Data-X509-DistinguishedName.html#DistinguishedName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "getDistinguishedElements",
          "normalized": "[(OID,ASN CharacterString)]",
          "package": "x509",
          "partial": "Distinguished Elements",
          "signature": "[(OID,ASN CharacterString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:getDistinguishedElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to get a specific element in a \u003ccode\u003e\u003ca\u003eDistinguishedName\u003c/a\u003e\u003c/code\u003e structure\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "getDnElement",
          "package": "x509",
          "signature": "DnElement -\u003e DistinguishedName -\u003e Maybe ASN1CharacterString",
          "source": "src/Data-X509-DistinguishedName.html#getDnElement",
          "type": "function"
        },
        "index": {
          "description": "Try to get specific element in DistinguishedName structure",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "getDnElement",
          "normalized": "DnElement-\u003eDistinguishedName-\u003eMaybe ASN CharacterString",
          "package": "x509",
          "partial": "Dn Element",
          "signature": "DnElement-\u003eDistinguishedName-\u003eMaybe ASN CharacterString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:getDnElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the decoded Signed data\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "getSigned",
          "package": "x509",
          "signature": "SignedExact a -\u003e Signed a",
          "source": "src/Data-X509-Signed.html#getSigned",
          "type": "function"
        },
        "index": {
          "description": "get the decoded Signed data",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "getSigned",
          "normalized": "SignedExact a-\u003eSigned a",
          "package": "x509",
          "partial": "Signed",
          "signature": "SignedExact a-\u003eSigned a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:getSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the signed data for the signature\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "getSignedData",
          "package": "x509",
          "signature": "SignedExact a -\u003e ByteString",
          "source": "src/Data-X509-Signed.html#getSignedData",
          "type": "function"
        },
        "index": {
          "description": "Get the signed data for the signature",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "getSignedData",
          "normalized": "SignedExact a-\u003eByteString",
          "package": "x509",
          "partial": "Signed Data",
          "signature": "SignedExact a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:getSignedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an OpenSSL style hash of distinguished name\n\u003c/p\u003e\u003cp\u003eOpenSSL algorithm is odd, and has been replicated here somewhat.\n only lower the case of ascii character.\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "hashDN",
          "package": "x509",
          "signature": "DistinguishedName -\u003e ByteString",
          "source": "src/Data-X509.html#hashDN",
          "type": "function"
        },
        "index": {
          "description": "Make an OpenSSL style hash of distinguished name OpenSSL algorithm is odd and has been replicated here somewhat only lower the case of ascii character",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "hashDN",
          "normalized": "DistinguishedName-\u003eByteString",
          "package": "x509",
          "partial": "DN",
          "signature": "DistinguishedName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:hashDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an openssl style old hash of distinguished name\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "hashDN_old",
          "package": "x509",
          "signature": "DistinguishedName -\u003e ByteString",
          "source": "src/Data-X509.html#hashDN_old",
          "type": "function"
        },
        "index": {
          "description": "Create an openssl style old hash of distinguished name",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "hashDN_old",
          "normalized": "DistinguishedName-\u003eByteString",
          "package": "x509",
          "partial": "DN",
          "signature": "DistinguishedName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:hashDN_old"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an object into a \u003ccode\u003e\u003ca\u003eSignedExact\u003c/a\u003e\u003c/code\u003e object\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "objectToSignedExact",
          "package": "x509",
          "signature": "(ByteString -\u003e (ByteString, SignatureALG, r))-\u003e a-\u003e (SignedExact a, r)",
          "type": "function"
        },
        "index": {
          "description": "Transform an object into SignedExact object",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "objectToSignedExact",
          "normalized": "(ByteString-\u003e(ByteString,SignatureALG,a))-\u003eb-\u003e(SignedExact b,a)",
          "package": "x509",
          "partial": "To Signed Exact",
          "signature": "(ByteString-\u003e(ByteString,SignatureALG,r))-\u003ea-\u003e(SignedExact a,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:objectToSignedExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Public key to the Public Key Algorithm type\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "privkeyToAlg",
          "package": "x509",
          "signature": "PrivKey -\u003e PubKeyALG",
          "source": "src/Data-X509-PrivateKey.html#privkeyToAlg",
          "type": "function"
        },
        "index": {
          "description": "Convert Public key to the Public Key Algorithm type",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "privkeyToAlg",
          "normalized": "PrivKey-\u003ePubKeyALG",
          "package": "x509",
          "partial": "To Alg",
          "signature": "PrivKey-\u003ePubKeyALG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:privkeyToAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Public key to the Public Key Algorithm type\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "pubkeyToAlg",
          "package": "x509",
          "signature": "PubKey -\u003e PubKeyALG",
          "source": "src/Data-X509-PublicKey.html#pubkeyToAlg",
          "type": "function"
        },
        "index": {
          "description": "Convert Public key to the Public Key Algorithm type",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "pubkeyToAlg",
          "normalized": "PubKey-\u003ePubKeyALG",
          "package": "x509",
          "partial": "To Alg",
          "signature": "PubKey-\u003ePubKeyALG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:pubkeyToAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "revokedDate",
          "package": "x509",
          "signature": "UTCTime",
          "source": "src/Data-X509-CRL.html#RevokedCertificate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "revokedDate",
          "package": "x509",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:revokedDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "revokedExtensions",
          "package": "x509",
          "signature": "Extensions",
          "source": "src/Data-X509-CRL.html#RevokedCertificate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "revokedExtensions",
          "package": "x509",
          "partial": "Extensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:revokedExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509",
          "name": "revokedSerialNumber",
          "package": "x509",
          "signature": "Integer",
          "source": "src/Data-X509-CRL.html#RevokedCertificate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "revokedSerialNumber",
          "package": "x509",
          "partial": "Serial Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:revokedSerialNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignature Algorithm used\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "signedAlg",
          "package": "x509",
          "signature": "SignatureALG",
          "source": "src/Data-X509-Signed.html#Signed",
          "type": "function"
        },
        "index": {
          "description": "Signature Algorithm used",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "signedAlg",
          "package": "x509",
          "partial": "Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:signedAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject to sign\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "signedObject",
          "package": "x509",
          "signature": "a",
          "source": "src/Data-X509-Signed.html#Signed",
          "type": "function"
        },
        "index": {
          "description": "Object to sign",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "signedObject",
          "package": "x509",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:signedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignature as bytes\n\u003c/p\u003e",
          "module": "Data.X509",
          "name": "signedSignature",
          "package": "x509",
          "signature": "ByteString",
          "source": "src/Data-X509-Signed.html#Signed",
          "type": "function"
        },
        "index": {
          "description": "Signature as bytes",
          "hierarchy": "Data X509",
          "module": "Data.X509",
          "name": "signedSignature",
          "package": "x509",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509/docs/Data-X509.html#v:signedSignature"
      }
    }
  ]
]