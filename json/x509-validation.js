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
        "word": "x509-validation"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eX.509 Certificate checks and validations routines\n\u003c/p\u003e\u003cp\u003eFollows RFC5280 / RFC6818\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.X509.Validation",
          "name": "Validation",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation.html",
          "type": "module"
        },
        "index": {
          "description": "X.509 Certificate checks and validations routines Follows RFC5280 RFC6818",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "Validation",
          "package": "x509-validation",
          "partial": "Validation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible reason of certificate and chain failure\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "FailedReason",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "data"
        },
        "index": {
          "description": "Possible reason of certificate and chain failure",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "FailedReason",
          "package": "x509-validation",
          "partial": "Failed Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:FailedReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFingerprint of a certificate\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "Fingerprint",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation-Fingerprint.html#Fingerprint",
          "type": "newtype"
        },
        "index": {
          "description": "Fingerprint of certificate",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "Fingerprint",
          "package": "x509-validation",
          "partial": "Fingerprint",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:Fingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither a host name e.g., \u003ccode\u003e\"haskell.org\"\u003c/code\u003e or a numeric host\n address string consisting of a dotted decimal IPv4 address or an\n IPv6 address e.g., \u003ccode\u003e\"192.168.0.1\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "HostName",
          "package": "x509-validation",
          "type": "type"
        },
        "index": {
          "description": "Either host name e.g haskell.org or numeric host address string consisting of dotted decimal IPv4 address or an IPv6 address e.g",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "HostName",
          "package": "x509-validation",
          "partial": "Host Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:HostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentification of the connection consisting of the\n fully qualified host name (e.g. www.example.com) and\n an optional suffix.\n\u003c/p\u003e\u003cp\u003eThe suffix is not used by the validation process, but\n is used by the optional cache to identity certificate per service\n on a specific host. For example, one might have a different\n certificate on 2 differents ports (443 and 995) for the same host.\n\u003c/p\u003e\u003cp\u003efor TCP connection, it's recommended to use: :port, or :service for the suffix.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ServiceID",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation-Types.html#ServiceID",
          "type": "type"
        },
        "index": {
          "description": "identification of the connection consisting of the fully qualified host name e.g www.example.com and an optional suffix The suffix is not used by the validation process but is used by the optional cache to identity certificate per service on specific host For example one might have different certificate on differents ports and for the same host for TCP connection it recommended to use port or service for the suffix",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ServiceID",
          "package": "x509-validation",
          "partial": "Service ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:ServiceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVarious failure possible during signature checking\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "SignatureFailure",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation-Signature.html#SignatureFailure",
          "type": "data"
        },
        "index": {
          "description": "Various failure possible during signature checking",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "SignatureFailure",
          "package": "x509-validation",
          "partial": "Signature Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:SignatureFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the callbacks needed for querying and adding to the cache.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ValidationCache",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCache",
          "type": "data"
        },
        "index": {
          "description": "All the callbacks needed for querying and adding to the cache",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationCache",
          "package": "x509-validation",
          "partial": "Validation Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:ValidationCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidation cache callback type\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheAddCallback",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCacheAddCallback",
          "type": "type"
        },
        "index": {
          "description": "Validation cache callback type",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheAddCallback",
          "package": "x509-validation",
          "partial": "Validation Cache Add Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:ValidationCacheAddCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidation cache query callback type\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheQueryCallback",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCacheQueryCallback",
          "type": "type"
        },
        "index": {
          "description": "Validation cache query callback type",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheQueryCallback",
          "package": "x509-validation",
          "partial": "Validation Cache Query Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:ValidationCacheQueryCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a cache query\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheResult",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCacheResult",
          "type": "data"
        },
        "index": {
          "description": "The result of cache query",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheResult",
          "package": "x509-validation",
          "partial": "Validation Cache Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:ValidationCacheResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of checks to activate or parametrize to perform on certificates.\n\u003c/p\u003e\u003cp\u003eIt's recommended to use \u003ccode\u003e\u003ca\u003edefaultChecks\u003c/a\u003e\u003c/code\u003e to create the structure,\n to better cope with future changes or expansion of the structure.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ValidationChecks",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "data"
        },
        "index": {
          "description": "set of checks to activate or parametrize to perform on certificates It recommended to use defaultChecks to create the structure to better cope with future changes or expansion of the structure",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationChecks",
          "package": "x509-validation",
          "partial": "Validation Checks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:ValidationChecks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of hooks to manipulate the way the verification works.\n\u003c/p\u003e\u003cp\u003eBEWARE, it's easy to change behavior leading to compromised security.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ValidationHooks",
          "package": "x509-validation",
          "source": "src/Data-X509-Validation.html#ValidationHooks",
          "type": "data"
        },
        "index": {
          "description": "set of hooks to manipulate the way the verification works BEWARE it easy to change behavior leading to compromised security",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationHooks",
          "package": "x509-validation",
          "partial": "Validation Hooks",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#t:ValidationHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eViolation of the optional Basic constraint's path length\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "AuthorityTooDeep",
          "package": "x509-validation",
          "signature": "AuthorityTooDeep",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "Violation of the optional Basic constraint path length",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "AuthorityTooDeep",
          "package": "x509-validation",
          "partial": "Authority Too Deep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:AuthorityTooDeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe cache explicitely denied this certificate\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "CacheSaysNo",
          "package": "x509-validation",
          "signature": "CacheSaysNo String",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "the cache explicitely denied this certificate",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "CacheSaysNo",
          "package": "x509-validation",
          "partial": "Cache Says No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:CacheSaysNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eempty chain of certificate\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "EmptyChain",
          "package": "x509-validation",
          "signature": "EmptyChain",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "empty chain of certificate",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "EmptyChain",
          "package": "x509-validation",
          "partial": "Empty Chain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:EmptyChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalidity ends before checking time\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "Expired",
          "package": "x509-validation",
          "signature": "Expired",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "validity ends before checking time",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "Expired",
          "package": "x509-validation",
          "partial": "Expired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:Expired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509.Validation",
          "name": "Fingerprint",
          "package": "x509-validation",
          "signature": "Fingerprint ByteString",
          "source": "src/Data-X509-Validation-Fingerprint.html#Fingerprint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "Fingerprint",
          "package": "x509-validation",
          "partial": "Fingerprint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:Fingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalidity starts after checking time\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "InFuture",
          "package": "x509-validation",
          "signature": "InFuture",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "validity starts after checking time",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "InFuture",
          "package": "x509-validation",
          "partial": "In Future",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:InFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid name in certificate\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "InvalidName",
          "package": "x509-validation",
          "signature": "InvalidName String",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "Invalid name in certificate",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "InvalidName",
          "package": "x509-validation",
          "partial": "Invalid Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:InvalidName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esignature failed\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "InvalidSignature",
          "package": "x509-validation",
          "signature": "InvalidSignature SignatureFailure",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "signature failed",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "InvalidSignature",
          "package": "x509-validation",
          "partial": "Invalid Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:InvalidSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einvalid wildcard in certificate\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "InvalidWildcard",
          "package": "x509-validation",
          "signature": "InvalidWildcard",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "invalid wildcard in certificate",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "InvalidWildcard",
          "package": "x509-validation",
          "partial": "Invalid Wildcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:InvalidWildcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe requested key purpose is not compatible with the leaf certificate's extended key usage\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "LeafKeyPurposeNotAllowed",
          "package": "x509-validation",
          "signature": "LeafKeyPurposeNotAllowed",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "the requested key purpose is not compatible with the leaf certificate extended key usage",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "LeafKeyPurposeNotAllowed",
          "package": "x509-validation",
          "partial": "Leaf Key Purpose Not Allowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:LeafKeyPurposeNotAllowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe requested key usage is not compatible with the leaf certificate's key usage\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "LeafKeyUsageNotAllowed",
          "package": "x509-validation",
          "signature": "LeafKeyUsageNotAllowed",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "the requested key usage is not compatible with the leaf certificate key usage",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "LeafKeyUsageNotAllowed",
          "package": "x509-validation",
          "partial": "Leaf Key Usage Not Allowed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:LeafKeyUsageNotAllowed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly authorized an X509.V3 certificate as leaf certificate.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "LeafNotV3",
          "package": "x509-validation",
          "signature": "LeafNotV3",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "Only authorized an X509.V3 certificate as leaf certificate",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "LeafNotV3",
          "package": "x509-validation",
          "partial": "Leaf Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:LeafNotV3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnection name and certificate do not match\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "NameMismatch",
          "package": "x509-validation",
          "signature": "NameMismatch String",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "connection name and certificate do not match",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "NameMismatch",
          "package": "x509-validation",
          "partial": "Name Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:NameMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCertificate doesn't have any common name (CN)\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "NoCommonName",
          "package": "x509-validation",
          "signature": "NoCommonName",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "Certificate doesn have any common name CN",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "NoCommonName",
          "package": "x509-validation",
          "partial": "No Common Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:NoCommonName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecertificate is not allowed to sign\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "NotAllowedToSign",
          "package": "x509-validation",
          "signature": "NotAllowedToSign",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "certificate is not allowed to sign",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "NotAllowedToSign",
          "package": "x509-validation",
          "partial": "Not Allowed To Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:NotAllowedToSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enot a CA\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "NotAnAuthority",
          "package": "x509-validation",
          "signature": "NotAnAuthority",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "not CA",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "NotAnAuthority",
          "package": "x509-validation",
          "partial": "Not An Authority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:NotAnAuthority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecertificate is self signed\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "SelfSigned",
          "package": "x509-validation",
          "signature": "SelfSigned",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "certificate is self signed",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "SelfSigned",
          "package": "x509-validation",
          "partial": "Self Signed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:SelfSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esignature doesn't verify\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "SignatureInvalid",
          "package": "x509-validation",
          "signature": "SignatureInvalid",
          "source": "src/Data-X509-Validation-Signature.html#SignatureFailure",
          "type": "function"
        },
        "index": {
          "description": "signature doesn verify",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "SignatureInvalid",
          "package": "x509-validation",
          "partial": "Signature Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:SignatureInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealgorithm and public key mismatch, cannot proceed\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "SignaturePubkeyMismatch",
          "package": "x509-validation",
          "signature": "SignaturePubkeyMismatch",
          "source": "src/Data-X509-Validation-Signature.html#SignatureFailure",
          "type": "function"
        },
        "index": {
          "description": "algorithm and public key mismatch cannot proceed",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "SignaturePubkeyMismatch",
          "package": "x509-validation",
          "partial": "Signature Pubkey Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:SignaturePubkeyMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunimplemented signature algorithm\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "SignatureUnimplemented",
          "package": "x509-validation",
          "signature": "SignatureUnimplemented",
          "source": "src/Data-X509-Validation-Signature.html#SignatureFailure",
          "type": "function"
        },
        "index": {
          "description": "unimplemented signature algorithm",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "SignatureUnimplemented",
          "package": "x509-validation",
          "partial": "Signature Unimplemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:SignatureUnimplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunknown Certificate Authority (CA)\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "UnknownCA",
          "package": "x509-validation",
          "signature": "UnknownCA",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "unknown Certificate Authority CA",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "UnknownCA",
          "package": "x509-validation",
          "partial": "Unknown CA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:UnknownCA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecertificate contains an unknown critical extension\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "UnknownCriticalExtension",
          "package": "x509-validation",
          "signature": "UnknownCriticalExtension",
          "source": "src/Data-X509-Validation.html#FailedReason",
          "type": "function"
        },
        "index": {
          "description": "certificate contains an unknown critical extension",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "UnknownCriticalExtension",
          "package": "x509-validation",
          "partial": "Unknown Critical Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:UnknownCriticalExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509.Validation",
          "name": "ValidationCache",
          "package": "x509-validation",
          "signature": "ValidationCache",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationCache",
          "package": "x509-validation",
          "partial": "Validation Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:ValidationCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecache denied this fingerprint for further validation\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheDenied",
          "package": "x509-validation",
          "signature": "ValidationCacheDenied String",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCacheResult",
          "type": "function"
        },
        "index": {
          "description": "cache denied this fingerprint for further validation",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheDenied",
          "package": "x509-validation",
          "partial": "Validation Cache Denied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:ValidationCacheDenied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecache allow this fingerprint to go through\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ValidationCachePass",
          "package": "x509-validation",
          "signature": "ValidationCachePass",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCacheResult",
          "type": "function"
        },
        "index": {
          "description": "cache allow this fingerprint to go through",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationCachePass",
          "package": "x509-validation",
          "partial": "Validation Cache Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:ValidationCachePass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunknown fingerprint in cache\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheUnknown",
          "package": "x509-validation",
          "signature": "ValidationCacheUnknown",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCacheResult",
          "type": "function"
        },
        "index": {
          "description": "unknown fingerprint in cache",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationCacheUnknown",
          "package": "x509-validation",
          "partial": "Validation Cache Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:ValidationCacheUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509.Validation",
          "name": "ValidationChecks",
          "package": "x509-validation",
          "signature": "ValidationChecks",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationChecks",
          "package": "x509-validation",
          "partial": "Validation Checks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:ValidationChecks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.X509.Validation",
          "name": "ValidationHooks",
          "package": "x509-validation",
          "signature": "ValidationHooks",
          "source": "src/Data-X509-Validation.html#ValidationHooks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "ValidationHooks",
          "package": "x509-validation",
          "partial": "Validation Hooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:ValidationHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecache adding callback\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "cacheAdd",
          "package": "x509-validation",
          "signature": "ValidationCacheAddCallback",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCache",
          "type": "function"
        },
        "index": {
          "description": "cache adding callback",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "cacheAdd",
          "package": "x509-validation",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:cacheAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecache querying callback\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "cacheQuery",
          "package": "x509-validation",
          "signature": "ValidationCacheQueryCallback",
          "source": "src/Data-X509-Validation-Cache.html#ValidationCache",
          "type": "function"
        },
        "index": {
          "description": "cache querying callback",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "cacheQuery",
          "package": "x509-validation",
          "partial": "Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:cacheQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time when the validity check happens. When set to Nothing,\n the current time will be used\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "checkAtTime",
          "package": "x509-validation",
          "signature": "Maybe UTCTime",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "description": "The time when the validity check happens When set to Nothing the current time will be used",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "checkAtTime",
          "package": "x509-validation",
          "partial": "At Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:checkAtTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that signing certificate got the CA basic constraint.\n this is absolutely not recommended to turn it off.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "checkCAConstraints",
          "package": "x509-validation",
          "signature": "Bool",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "description": "Check that signing certificate got the CA basic constraint this is absolutely not recommended to turn it off",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "checkCAConstraints",
          "package": "x509-validation",
          "partial": "CAConstraints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:checkCAConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the whole certificate chain without stopping at the first failure.\n Allow gathering a exhaustive list of failure reasons. if this is\n turn off, it's absolutely not safe to ignore a failed reason even it doesn't look serious\n (e.g. Expired) as other more serious checks would not have been performed.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "checkExhaustive",
          "package": "x509-validation",
          "signature": "Bool",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "description": "Check the whole certificate chain without stopping at the first failure Allow gathering exhaustive list of failure reasons if this is turn off it absolutely not safe to ignore failed reason even it doesn look serious e.g Expired as other more serious checks would not have been performed",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "checkExhaustive",
          "package": "x509-validation",
          "partial": "Exhaustive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:checkExhaustive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the top certificate names matching the fully qualified hostname (FQHN).\n it's not recommended to turn this check off, if no other name checks are performed.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "checkFQHN",
          "package": "x509-validation",
          "signature": "Bool",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "description": "Check the top certificate names matching the fully qualified hostname FQHN it not recommended to turn this check off if no other name checks are performed",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "checkFQHN",
          "package": "x509-validation",
          "partial": "FQHN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:checkFQHN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the leaf certificate is authorized to be used for certain purpose.\n If set to empty list no check are performed, otherwise all the flags is the list\n need to exists in the extended key usage extension if present. If the extension is not\n present, then the check will pass and behave as if the certificate is not restricted\n to any specific purpose.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "checkLeafKeyPurpose",
          "package": "x509-validation",
          "signature": "[ExtKeyUsagePurpose]",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "description": "Check that the leaf certificate is authorized to be used for certain purpose If set to empty list no check are performed otherwise all the flags is the list need to exists in the extended key usage extension if present If the extension is not present then the check will pass and behave as if the certificate is not restricted to any specific purpose",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "checkLeafKeyPurpose",
          "normalized": "[ExtKeyUsagePurpose]",
          "package": "x509-validation",
          "partial": "Leaf Key Purpose",
          "signature": "[ExtKeyUsagePurpose]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:checkLeafKeyPurpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the leaf certificate is authorized to be used for certain usage.\n If set to empty list no check are performed, otherwise all the flags is the list\n need to exists in the key usage extension. If the extension is not present,\n the check will pass and behave as if the certificate key is not restricted to\n any specific usage.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "checkLeafKeyUsage",
          "package": "x509-validation",
          "signature": "[ExtKeyUsageFlag]",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "description": "Check that the leaf certificate is authorized to be used for certain usage If set to empty list no check are performed otherwise all the flags is the list need to exists in the key usage extension If the extension is not present the check will pass and behave as if the certificate key is not restricted to any specific usage",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "checkLeafKeyUsage",
          "normalized": "[ExtKeyUsageFlag]",
          "package": "x509-validation",
          "partial": "Leaf Key Usage",
          "signature": "[ExtKeyUsageFlag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:checkLeafKeyUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the leaf certificate is version 3. If disable, version 2 certificate\n is authorized in leaf position and key usage cannot be checked.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "checkLeafV3",
          "package": "x509-validation",
          "signature": "Bool",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "description": "Check that the leaf certificate is version If disable version certificate is authorized in leaf position and key usage cannot be checked",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "checkLeafV3",
          "package": "x509-validation",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:checkLeafV3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that no certificate is included that shouldn't be included.\n unfortunately despite the specification violation, a lots of\n real world server serves useless and usually old certificates\n that are not relevant to the certificate sent, in their chain.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "checkStrictOrdering",
          "package": "x509-validation",
          "signature": "Bool",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "description": "Check that no certificate is included that shouldn be included unfortunately despite the specification violation lots of real world server serves useless and usually old certificates that are not relevant to the certificate sent in their chain",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "checkStrictOrdering",
          "package": "x509-validation",
          "partial": "Strict Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:checkStrictOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck time validity of every certificate in the chain.\n the make sure that current time is between each validity bounds\n in the certificate\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "checkTimeValidity",
          "package": "x509-validation",
          "signature": "Bool",
          "source": "src/Data-X509-Validation.html#ValidationChecks",
          "type": "function"
        },
        "index": {
          "description": "check time validity of every certificate in the chain the make sure that current time is between each validity bounds in the certificate",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "checkTimeValidity",
          "package": "x509-validation",
          "partial": "Time Validity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:checkTimeValidity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault checks to perform\n\u003c/p\u003e\u003cp\u003eThe default checks are:\n * Each certificate time is valid\n * CA constraints is enforced for signing certificate\n * Leaf certificate is X.509 v3\n * Check that the FQHN match\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "defaultChecks",
          "package": "x509-validation",
          "signature": "ValidationChecks",
          "source": "src/Data-X509-Validation.html#defaultChecks",
          "type": "function"
        },
        "index": {
          "description": "Default checks to perform The default checks are Each certificate time is valid CA constraints is enforced for signing certificate Leaf certificate is X.509 v3 Check that the FQHN match",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "defaultChecks",
          "package": "x509-validation",
          "partial": "Checks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:defaultChecks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault hooks in the validation process\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "defaultHooks",
          "package": "x509-validation",
          "signature": "ValidationHooks",
          "source": "src/Data-X509-Validation.html#defaultHooks",
          "type": "function"
        },
        "index": {
          "description": "Default hooks in the validation process",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "defaultHooks",
          "package": "x509-validation",
          "partial": "Hooks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:defaultHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a simple constant cache that list exceptions to the certification\n validation. Typically this is use to allow self-signed certificates for\n specific use, with out-of-bounds user checks.\n\u003c/p\u003e\u003cp\u003eNo fingerprints will be added after the instance is created.\n\u003c/p\u003e\u003cp\u003eThe underlying structure for the check is kept as a list, as\n usually the exception list will be short, but when the list go above\n a dozen exceptions it's recommended to use another cache mechanism with\n a faster lookup mechanism (hashtable, map, etc).\n\u003c/p\u003e\u003cp\u003eNote that only one fingerprint is allowed per ServiceID, for other use,\n another cache mechanism need to be use.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "exceptionValidationCache",
          "package": "x509-validation",
          "signature": "[(ServiceID, Fingerprint)] -\u003e ValidationCache",
          "source": "src/Data-X509-Validation-Cache.html#exceptionValidationCache",
          "type": "function"
        },
        "index": {
          "description": "create simple constant cache that list exceptions to the certification validation Typically this is use to allow self-signed certificates for specific use with out-of-bounds user checks No fingerprints will be added after the instance is created The underlying structure for the check is kept as list as usually the exception list will be short but when the list go above dozen exceptions it recommended to use another cache mechanism with faster lookup mechanism hashtable map etc Note that only one fingerprint is allowed per ServiceID for other use another cache mechanism need to be use",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "exceptionValidationCache",
          "normalized": "[(ServiceID,Fingerprint)]-\u003eValidationCache",
          "package": "x509-validation",
          "partial": "Validation Cache",
          "signature": "[(ServiceID,Fingerprint)]-\u003eValidationCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:exceptionValidationCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the fingerprint of the whole signed object\n using the hashing algorithm specified\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "getFingerprint",
          "package": "x509-validation",
          "signature": "SignedExact a-\u003e HashALG-\u003e Fingerprint",
          "type": "function"
        },
        "index": {
          "description": "Get the fingerprint of the whole signed object using the hashing algorithm specified",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "getFingerprint",
          "normalized": "SignedExact a-\u003eHashALG-\u003eFingerprint",
          "package": "x509-validation",
          "partial": "Fingerprint",
          "signature": "SignedExact a-\u003eHashALG-\u003eFingerprint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:getFingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euser filter to modify the list of failure reasons\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "hookFilterReason",
          "package": "x509-validation",
          "signature": "[FailedReason] -\u003e [FailedReason]",
          "source": "src/Data-X509-Validation.html#ValidationHooks",
          "type": "function"
        },
        "index": {
          "description": "user filter to modify the list of failure reasons",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "hookFilterReason",
          "normalized": "[FailedReason]-\u003e[FailedReason]",
          "package": "x509-validation",
          "partial": "Filter Reason",
          "signature": "[FailedReason]-\u003e[FailedReason]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:hookFilterReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck the the issuer \u003ccode\u003e\u003ca\u003eDistinguishedName\u003c/a\u003e\u003c/code\u003e match the subject \u003ccode\u003e\u003ca\u003eDistinguishedName\u003c/a\u003e\u003c/code\u003e\n of a certificate.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "hookMatchSubjectIssuer",
          "package": "x509-validation",
          "signature": "DistinguishedName -\u003e Certificate -\u003e Bool",
          "source": "src/Data-X509-Validation.html#ValidationHooks",
          "type": "function"
        },
        "index": {
          "description": "check the the issuer DistinguishedName match the subject DistinguishedName of certificate",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "hookMatchSubjectIssuer",
          "normalized": "DistinguishedName-\u003eCertificate-\u003eBool",
          "package": "x509-validation",
          "partial": "Match Subject Issuer",
          "signature": "DistinguishedName-\u003eCertificate-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:hookMatchSubjectIssuer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalidate the certificate leaf name with the DNS named used to connect\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "hookValidateName",
          "package": "x509-validation",
          "signature": "HostName -\u003e Certificate -\u003e [FailedReason]",
          "source": "src/Data-X509-Validation.html#ValidationHooks",
          "type": "function"
        },
        "index": {
          "description": "validate the certificate leaf name with the DNS named used to connect",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "hookValidateName",
          "normalized": "HostName-\u003eCertificate-\u003e[FailedReason]",
          "package": "x509-validation",
          "partial": "Validate Name",
          "signature": "HostName-\u003eCertificate-\u003e[FailedReason]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:hookValidateName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalidate that the parametrized time valide with the certificate in argument\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "hookValidateTime",
          "package": "x509-validation",
          "signature": "UTCTime -\u003e Certificate -\u003e [FailedReason]",
          "source": "src/Data-X509-Validation.html#ValidationHooks",
          "type": "function"
        },
        "index": {
          "description": "validate that the parametrized time valide with the certificate in argument",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "hookValidateTime",
          "normalized": "UTCTime-\u003eCertificate-\u003e[FailedReason]",
          "package": "x509-validation",
          "partial": "Validate Time",
          "signature": "UTCTime-\u003eCertificate-\u003e[FailedReason]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:hookValidateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrust on first use (TOFU) cache with an optional list of exceptions\n\u003c/p\u003e\u003cp\u003ethis is similar to the exceptionCache, except that after\n each succesfull validation it does add the fingerprint\n to the database. This prevent any further modification of the\n fingerprint for the remaining\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "tofuValidationCache",
          "package": "x509-validation",
          "signature": "[(ServiceID, Fingerprint)]-\u003e IO ValidationCache",
          "type": "function"
        },
        "index": {
          "description": "Trust on first use TOFU cache with an optional list of exceptions this is similar to the exceptionCache except that after each succesfull validation it does add the fingerprint to the database This prevent any further modification of the fingerprint for the remaining",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "tofuValidationCache",
          "normalized": "[(ServiceID,Fingerprint)]-\u003eIO ValidationCache",
          "package": "x509-validation",
          "partial": "Validation Cache",
          "signature": "[(ServiceID,Fingerprint)]-\u003eIO ValidationCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:tofuValidationCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX509 validation\n\u003c/p\u003e\u003cp\u003ethe function first interrogate the cache and if the validation fail,\n proper verification is done. If the verification pass, the\n add to cache callback is called.\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "validate",
          "package": "x509-validation",
          "signature": "HashALG-\u003e ValidationHooks-\u003e ValidationChecks-\u003e CertificateStore-\u003e ValidationCache-\u003e ServiceID-\u003e CertificateChain-\u003e IO [FailedReason]",
          "type": "function"
        },
        "index": {
          "description": "X509 validation the function first interrogate the cache and if the validation fail proper verification is done If the verification pass the add to cache callback is called",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "validate",
          "normalized": "HashALG-\u003eValidationHooks-\u003eValidationChecks-\u003eCertificateStore-\u003eValidationCache-\u003eServiceID-\u003eCertificateChain-\u003eIO[FailedReason]",
          "package": "x509-validation",
          "signature": "HashALG-\u003eValidationHooks-\u003eValidationChecks-\u003eCertificateStore-\u003eValidationCache-\u003eServiceID-\u003eCertificateChain-\u003eIO[FailedReason]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate using the default hooks and checks and the SHA256 mechanism as hashing mechanism\n\u003c/p\u003e",
          "module": "Data.X509.Validation",
          "name": "validateDefault",
          "package": "x509-validation",
          "signature": "CertificateStore-\u003e ValidationCache-\u003e ServiceID-\u003e CertificateChain-\u003e IO [FailedReason]",
          "type": "function"
        },
        "index": {
          "description": "Validate using the default hooks and checks and the SHA256 mechanism as hashing mechanism",
          "hierarchy": "Data X509 Validation",
          "module": "Data.X509.Validation",
          "name": "validateDefault",
          "normalized": "CertificateStore-\u003eValidationCache-\u003eServiceID-\u003eCertificateChain-\u003eIO[FailedReason]",
          "package": "x509-validation",
          "partial": "Default",
          "signature": "CertificateStore-\u003eValidationCache-\u003eServiceID-\u003eCertificateChain-\u003eIO[FailedReason]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/x509-validation/docs/Data-X509-Validation.html#v:validateDefault"
      }
    }
  ]
]