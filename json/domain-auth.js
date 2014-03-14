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
        "word": "domain-auth"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for DomainKeys (\u003ca\u003ehttp://www.ietf.org/rfc/rfc4070\u003c/a\u003e).\n  Currently, only receiver side is implemented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DomainAuth.DK",
          "name": "DK",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-DK.html",
          "type": "module"
        },
        "index": {
          "description": "library for DomainKeys http www.ietf.org rfc rfc4070 Currently only receiver side is implemented",
          "hierarchy": "Network DomainAuth DK",
          "module": "Network.DomainAuth.DK",
          "name": "DK",
          "package": "domain-auth",
          "partial": "DK",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type for DomainKey-Signature:\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DK",
          "name": "DK",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-DK-Types.html#DK",
          "type": "data"
        },
        "index": {
          "description": "Abstract type for DomainKey-Signature",
          "hierarchy": "Network DomainAuth DK",
          "module": "Network.DomainAuth.DK",
          "name": "DK",
          "package": "domain-auth",
          "partial": "DK",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DK.html#t:DK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting of the value of the \"d\" tag in DomainKey-Signature:.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DK",
          "name": "dkDomain",
          "package": "domain-auth",
          "signature": "DK -\u003e Domain",
          "source": "src/Network-DomainAuth-DK-Types.html#dkDomain",
          "type": "function"
        },
        "index": {
          "description": "Getting of the value of the tag in DomainKey-Signature",
          "hierarchy": "Network DomainAuth DK",
          "module": "Network.DomainAuth.DK",
          "name": "dkDomain",
          "normalized": "DK-\u003eDomain",
          "package": "domain-auth",
          "partial": "Domain",
          "signature": "DK-\u003eDomain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DK.html#v:dkDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonicalized key for DomainKey-Signature:.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DK",
          "name": "dkFieldKey",
          "package": "domain-auth",
          "signature": "CanonFieldKey",
          "source": "src/Network-DomainAuth-DK-Types.html#dkFieldKey",
          "type": "function"
        },
        "index": {
          "description": "Canonicalized key for DomainKey-Signature",
          "hierarchy": "Network DomainAuth DK",
          "module": "Network.DomainAuth.DK",
          "name": "dkFieldKey",
          "package": "domain-auth",
          "partial": "Field Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DK.html#v:dkFieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting of the value of the \"s\" tag in DomainKey-Signature:.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DK",
          "name": "dkSelector",
          "package": "domain-auth",
          "signature": "DK -\u003e ByteString",
          "source": "src/Network-DomainAuth-DK-Types.html#dkSelector",
          "type": "function"
        },
        "index": {
          "description": "Getting of the value of the tag in DomainKey-Signature",
          "hierarchy": "Network DomainAuth DK",
          "module": "Network.DomainAuth.DK",
          "name": "dkSelector",
          "normalized": "DK-\u003eByteString",
          "package": "domain-auth",
          "partial": "Selector",
          "signature": "DK-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DK.html#v:dkSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing DomainKey-Signature:.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DK",
          "name": "parseDK",
          "package": "domain-auth",
          "signature": "RawFieldValue -\u003e Maybe DK",
          "source": "src/Network-DomainAuth-DK-Parser.html#parseDK",
          "type": "function"
        },
        "index": {
          "description": "Parsing DomainKey-Signature",
          "hierarchy": "Network DomainAuth DK",
          "module": "Network.DomainAuth.DK",
          "name": "parseDK",
          "normalized": "RawFieldValue-\u003eMaybe DK",
          "package": "domain-auth",
          "partial": "DK",
          "signature": "RawFieldValue-\u003eMaybe DK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DK.html#v:parseDK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerifying \u003ccode\u003e\u003ca\u003eMail\u003c/a\u003e\u003c/code\u003e with DomainKeys.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DK",
          "name": "runDK",
          "package": "domain-auth",
          "signature": "Resolver -\u003e Mail -\u003e IO DAResult",
          "source": "src/Network-DomainAuth-DK.html#runDK",
          "type": "function"
        },
        "index": {
          "description": "Verifying Mail with DomainKeys",
          "hierarchy": "Network DomainAuth DK",
          "module": "Network.DomainAuth.DK",
          "name": "runDK",
          "normalized": "Resolver-\u003eMail-\u003eIO DAResult",
          "package": "domain-auth",
          "partial": "DK",
          "signature": "Resolver-\u003eMail-\u003eIO DAResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DK.html#v:runDK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerifying \u003ccode\u003e\u003ca\u003eMail\u003c/a\u003e\u003c/code\u003e with DomainKeys. The value of DomainKey-Signature:\n  should be parsed beforehand.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DK",
          "name": "runDK'",
          "package": "domain-auth",
          "signature": "Resolver -\u003e Mail -\u003e DK -\u003e IO DAResult",
          "source": "src/Network-DomainAuth-DK.html#runDK%27",
          "type": "function"
        },
        "index": {
          "description": "Verifying Mail with DomainKeys The value of DomainKey-Signature should be parsed beforehand",
          "hierarchy": "Network DomainAuth DK",
          "module": "Network.DomainAuth.DK",
          "name": "runDK'",
          "normalized": "Resolver-\u003eMail-\u003eDK-\u003eIO DAResult",
          "package": "domain-auth",
          "partial": "DK'",
          "signature": "Resolver-\u003eMail-\u003eDK-\u003eIO DAResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DK.html#v:runDK-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for DKIM (\u003ca\u003ehttp://www.ietf.org/rfc/rfc4071\u003c/a\u003e).\n  Currently, only receiver side is implemented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DomainAuth.DKIM",
          "name": "DKIM",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-DKIM.html",
          "type": "module"
        },
        "index": {
          "description": "library for DKIM http www.ietf.org rfc rfc4071 Currently only receiver side is implemented",
          "hierarchy": "Network DomainAuth DKIM",
          "module": "Network.DomainAuth.DKIM",
          "name": "DKIM",
          "package": "domain-auth",
          "partial": "DKIM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DKIM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.DKIM",
          "name": "DKIM",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-DKIM-Types.html#DKIM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network DomainAuth DKIM",
          "module": "Network.DomainAuth.DKIM",
          "name": "DKIM",
          "package": "domain-auth",
          "partial": "DKIM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DKIM.html#t:DKIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting of the value of the \"d\" tag in DKIM-Signature:.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DKIM",
          "name": "dkimDomain",
          "package": "domain-auth",
          "signature": "DKIM -\u003e Domain",
          "source": "src/Network-DomainAuth-DKIM-Types.html#dkimDomain",
          "type": "function"
        },
        "index": {
          "description": "Getting of the value of the tag in DKIM-Signature",
          "hierarchy": "Network DomainAuth DKIM",
          "module": "Network.DomainAuth.DKIM",
          "name": "dkimDomain",
          "normalized": "DKIM-\u003eDomain",
          "package": "domain-auth",
          "partial": "Domain",
          "signature": "DKIM-\u003eDomain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DKIM.html#v:dkimDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonicalized key for DKIM-Signature:.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DKIM",
          "name": "dkimFieldKey",
          "package": "domain-auth",
          "signature": "CanonFieldKey",
          "source": "src/Network-DomainAuth-DKIM-Types.html#dkimFieldKey",
          "type": "function"
        },
        "index": {
          "description": "Canonicalized key for DKIM-Signature",
          "hierarchy": "Network DomainAuth DKIM",
          "module": "Network.DomainAuth.DKIM",
          "name": "dkimFieldKey",
          "package": "domain-auth",
          "partial": "Field Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DKIM.html#v:dkimFieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting of the value of the \"s\" tag in DKIM-Signature:.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DKIM",
          "name": "dkimSelector",
          "package": "domain-auth",
          "signature": "DKIM -\u003e ByteString",
          "source": "src/Network-DomainAuth-DKIM-Types.html#dkimSelector",
          "type": "function"
        },
        "index": {
          "description": "Getting of the value of the tag in DKIM-Signature",
          "hierarchy": "Network DomainAuth DKIM",
          "module": "Network.DomainAuth.DKIM",
          "name": "dkimSelector",
          "normalized": "DKIM-\u003eByteString",
          "package": "domain-auth",
          "partial": "Selector",
          "signature": "DKIM-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DKIM.html#v:dkimSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing DKIM-Signature:.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DKIM",
          "name": "parseDKIM",
          "package": "domain-auth",
          "signature": "RawFieldValue -\u003e Maybe DKIM",
          "source": "src/Network-DomainAuth-DKIM-Parser.html#parseDKIM",
          "type": "function"
        },
        "index": {
          "description": "Parsing DKIM-Signature",
          "hierarchy": "Network DomainAuth DKIM",
          "module": "Network.DomainAuth.DKIM",
          "name": "parseDKIM",
          "normalized": "RawFieldValue-\u003eMaybe DKIM",
          "package": "domain-auth",
          "partial": "DKIM",
          "signature": "RawFieldValue-\u003eMaybe DKIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DKIM.html#v:parseDKIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerifying \u003ccode\u003e\u003ca\u003eMail\u003c/a\u003e\u003c/code\u003e with DKIM.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DKIM",
          "name": "runDKIM",
          "package": "domain-auth",
          "signature": "Resolver -\u003e Mail -\u003e IO DAResult",
          "source": "src/Network-DomainAuth-DKIM.html#runDKIM",
          "type": "function"
        },
        "index": {
          "description": "Verifying Mail with DKIM",
          "hierarchy": "Network DomainAuth DKIM",
          "module": "Network.DomainAuth.DKIM",
          "name": "runDKIM",
          "normalized": "Resolver-\u003eMail-\u003eIO DAResult",
          "package": "domain-auth",
          "partial": "DKIM",
          "signature": "Resolver-\u003eMail-\u003eIO DAResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DKIM.html#v:runDKIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerifying \u003ccode\u003e\u003ca\u003eMail\u003c/a\u003e\u003c/code\u003e with DKIM. The value of DKIM-Signature:\n  should be parsed beforehand.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.DKIM",
          "name": "runDKIM'",
          "package": "domain-auth",
          "signature": "Resolver -\u003e Mail -\u003e DKIM -\u003e IO DAResult",
          "source": "src/Network-DomainAuth-DKIM.html#runDKIM%27",
          "type": "function"
        },
        "index": {
          "description": "Verifying Mail with DKIM The value of DKIM-Signature should be parsed beforehand",
          "hierarchy": "Network DomainAuth DKIM",
          "module": "Network.DomainAuth.DKIM",
          "name": "runDKIM'",
          "normalized": "Resolver-\u003eMail-\u003eDKIM-\u003eIO DAResult",
          "package": "domain-auth",
          "partial": "DKIM'",
          "signature": "Resolver-\u003eMail-\u003eDKIM-\u003eIO DAResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-DKIM.html#v:runDKIM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library to parse e-mail messages both from a file and Milter(\u003ca\u003ehttps://www.milter.org/\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "Mail",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail.html",
          "type": "module"
        },
        "index": {
          "description": "library to parse e-mail messages both from file and Milter https www.milter.org",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "Mail",
          "package": "domain-auth",
          "partial": "Mail",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for body of parsed e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "Body",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#Body",
          "type": "type"
        },
        "index": {
          "description": "Type for body of parsed e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "Body",
          "package": "domain-auth",
          "partial": "Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for canonicalized field key of parsed e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "CanonFieldKey",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#CanonFieldKey",
          "type": "type"
        },
        "index": {
          "description": "Type for canonicalized field key of parsed e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "CanonFieldKey",
          "package": "domain-auth",
          "partial": "Canon Field Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:CanonFieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField type for parsed e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "Field",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#Field",
          "type": "data"
        },
        "index": {
          "description": "Field type for parsed e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "Field",
          "package": "domain-auth",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for field key of parsed e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "FieldKey",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#FieldKey",
          "type": "type"
        },
        "index": {
          "description": "Type for field key of parsed e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "FieldKey",
          "package": "domain-auth",
          "partial": "Field Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:FieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for field value of parsed e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "FieldValue",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#FieldValue",
          "type": "type"
        },
        "index": {
          "description": "Type for field value of parsed e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "FieldValue",
          "package": "domain-auth",
          "partial": "Field Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:FieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader type for parsed e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "Header",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#Header",
          "type": "type"
        },
        "index": {
          "description": "Header type for parsed e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "Header",
          "package": "domain-auth",
          "partial": "Header",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for parsed e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "Mail",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#Mail",
          "type": "data"
        },
        "index": {
          "description": "Type for parsed e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "Mail",
          "package": "domain-auth",
          "partial": "Mail",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:Mail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBody chunk for raw e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "RawBodyChunk",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#RawBodyChunk",
          "type": "type"
        },
        "index": {
          "description": "Body chunk for raw e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "RawBodyChunk",
          "package": "domain-auth",
          "partial": "Raw Body Chunk",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:RawBodyChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField key for raw e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "RawFieldKey",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#RawFieldKey",
          "type": "type"
        },
        "index": {
          "description": "Field key for raw e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "RawFieldKey",
          "package": "domain-auth",
          "partial": "Raw Field Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:RawFieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField value for raw e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "RawFieldValue",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#RawFieldValue",
          "type": "type"
        },
        "index": {
          "description": "Field value for raw e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "RawFieldValue",
          "package": "domain-auth",
          "partial": "Raw Field Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:RawFieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for raw e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "RawMail",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-Types.html#RawMail",
          "type": "type"
        },
        "index": {
          "description": "Type for raw e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "RawMail",
          "package": "domain-auth",
          "partial": "Raw Mail",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:RawMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for temporary data to parse e-mail message.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "XMail",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Mail-XMail.html#XMail",
          "type": "data"
        },
        "index": {
          "description": "Type for temporary data to parse e-mail message",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "XMail",
          "package": "domain-auth",
          "partial": "XMail",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#t:XMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "Field",
          "package": "domain-auth",
          "signature": "Field",
          "source": "src/Network-DomainAuth-Mail-Types.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "Field",
          "package": "domain-auth",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "Mail",
          "package": "domain-auth",
          "signature": "Mail",
          "source": "src/Network-DomainAuth-Mail-Types.html#Mail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "Mail",
          "package": "domain-auth",
          "partial": "Mail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:Mail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "XMail",
          "package": "domain-auth",
          "signature": "XMail",
          "source": "src/Network-DomainAuth-Mail-XMail.html#XMail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "XMail",
          "package": "domain-auth",
          "partial": "XMail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:XMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonicalizing \u003ccode\u003e\u003ca\u003eFieldKey\u003c/a\u003e\u003c/code\u003e for search.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "canonicalizeKey",
          "package": "domain-auth",
          "signature": "FieldKey -\u003e CanonFieldKey",
          "source": "src/Network-DomainAuth-Mail-Types.html#canonicalizeKey",
          "type": "function"
        },
        "index": {
          "description": "Canonicalizing FieldKey for search",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "canonicalizeKey",
          "normalized": "FieldKey-\u003eCanonFieldKey",
          "package": "domain-auth",
          "partial": "Key",
          "signature": "FieldKey-\u003eCanonFieldKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:canonicalizeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "fieldKey",
          "package": "domain-auth",
          "signature": "FieldKey",
          "source": "src/Network-DomainAuth-Mail-Types.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldKey",
          "package": "domain-auth",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fieldKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "fieldSearchKey",
          "package": "domain-auth",
          "signature": "CanonFieldKey",
          "source": "src/Network-DomainAuth-Mail-Types.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldSearchKey",
          "package": "domain-auth",
          "partial": "Search Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fieldSearchKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "fieldValue",
          "package": "domain-auth",
          "signature": "FieldValue",
          "source": "src/Network-DomainAuth-Mail-Types.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldValue",
          "package": "domain-auth",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining folded (raw) field value.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldValueFolded",
          "package": "domain-auth",
          "signature": "Field -\u003e RawFieldValue",
          "source": "src/Network-DomainAuth-Mail-Mail.html#fieldValueFolded",
          "type": "function"
        },
        "index": {
          "description": "Obtaining folded raw field value",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldValueFolded",
          "normalized": "Field-\u003eRawFieldValue",
          "package": "domain-auth",
          "partial": "Value Folded",
          "signature": "Field-\u003eRawFieldValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fieldValueFolded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining unfolded (removing CRLF) field value.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldValueUnfolded",
          "package": "domain-auth",
          "signature": "Field -\u003e RawFieldValue",
          "source": "src/Network-DomainAuth-Mail-Mail.html#fieldValueUnfolded",
          "type": "function"
        },
        "index": {
          "description": "Obtaining unfolded removing CRLF field value",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldValueUnfolded",
          "normalized": "Field-\u003eRawFieldValue",
          "package": "domain-auth",
          "partial": "Value Unfolded",
          "signature": "Field-\u003eRawFieldValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fieldValueUnfolded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining all fields under \u003ccode\u003e\u003ca\u003eFieldKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldsAfter",
          "package": "domain-auth",
          "signature": "FieldKey -\u003e Header -\u003e Header",
          "source": "src/Network-DomainAuth-Mail-Mail.html#fieldsAfter",
          "type": "function"
        },
        "index": {
          "description": "Obtaining all fields under FieldKey",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldsAfter",
          "normalized": "FieldKey-\u003eHeader-\u003eHeader",
          "package": "domain-auth",
          "partial": "After",
          "signature": "FieldKey-\u003eHeader-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fieldsAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eFieldKey\u003c/a\u003e\u003c/code\u003e and all fields under \u003ccode\u003e\u003ca\u003eFieldKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldsFrom",
          "package": "domain-auth",
          "signature": "FieldKey -\u003e Header -\u003e Header",
          "source": "src/Network-DomainAuth-Mail-Mail.html#fieldsFrom",
          "type": "function"
        },
        "index": {
          "description": "Obtaining the Field of FieldKey and all fields under FieldKey",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldsFrom",
          "normalized": "FieldKey-\u003eHeader-\u003eHeader",
          "package": "domain-auth",
          "partial": "From",
          "signature": "FieldKey-\u003eHeader-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fieldsFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining all fields with DKIM algorithm.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldsWith",
          "package": "domain-auth",
          "signature": "[CanonFieldKey] -\u003e Header -\u003e Header",
          "source": "src/Network-DomainAuth-Mail-Mail.html#fieldsWith",
          "type": "function"
        },
        "index": {
          "description": "Obtaining all fields with DKIM algorithm",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fieldsWith",
          "normalized": "[CanonFieldKey]-\u003eHeader-\u003eHeader",
          "package": "domain-auth",
          "partial": "With",
          "signature": "[CanonFieldKey]-\u003eHeader-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fieldsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting \u003ccode\u003e\u003ca\u003eXMail\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eMail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "finalizeMail",
          "package": "domain-auth",
          "signature": "XMail -\u003e Mail",
          "source": "src/Network-DomainAuth-Mail-XMail.html#finalizeMail",
          "type": "function"
        },
        "index": {
          "description": "Converting XMail to Mail",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "finalizeMail",
          "normalized": "XMail-\u003eMail",
          "package": "domain-auth",
          "partial": "Mail",
          "signature": "XMail-\u003eMail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:finalizeMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining body.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "fromBody",
          "package": "domain-auth",
          "signature": "Body -\u003e Builder",
          "source": "src/Network-DomainAuth-Mail-Mail.html#fromBody",
          "type": "function"
        },
        "index": {
          "description": "Obtaining body",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fromBody",
          "normalized": "Body-\u003eBuilder",
          "package": "domain-auth",
          "partial": "Body",
          "signature": "Body-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fromBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtaining body with a canonicalization function.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "fromBodyWith",
          "package": "domain-auth",
          "signature": "(ByteString -\u003e ByteString) -\u003e Body -\u003e Builder",
          "source": "src/Network-DomainAuth-Mail-Mail.html#fromBodyWith",
          "type": "function"
        },
        "index": {
          "description": "Obtaining body with canonicalization function",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "fromBodyWith",
          "normalized": "(ByteString-\u003eByteString)-\u003eBody-\u003eBuilder",
          "package": "domain-auth",
          "partial": "Body With",
          "signature": "(ByteString-\u003eByteString)-\u003eBody-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:fromBodyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain \u003ccode\u003e\u003ca\u003eMail\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRawMail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "getMail",
          "package": "domain-auth",
          "signature": "RawMail -\u003e Mail",
          "source": "src/Network-DomainAuth-Mail-Parser.html#getMail",
          "type": "function"
        },
        "index": {
          "description": "Obtain Mail from RawMail",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "getMail",
          "normalized": "RawMail-\u003eMail",
          "package": "domain-auth",
          "partial": "Mail",
          "signature": "RawMail-\u003eMail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:getMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial value for \u003ccode\u003e\u003ca\u003eXMail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "initialXMail",
          "package": "domain-auth",
          "signature": "XMail",
          "source": "src/Network-DomainAuth-Mail-XMail.html#initialXMail",
          "type": "function"
        },
        "index": {
          "description": "Initial value for XMail",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "initialXMail",
          "package": "domain-auth",
          "partial": "XMail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:initialXMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "isEmpty",
          "package": "domain-auth",
          "signature": "Body -\u003e Bool",
          "source": "src/Network-DomainAuth-Mail-Types.html#isEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "isEmpty",
          "normalized": "Body-\u003eBool",
          "package": "domain-auth",
          "partial": "Empty",
          "signature": "Body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooking up \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eFieldKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "lookupField",
          "package": "domain-auth",
          "signature": "FieldKey -\u003e Header -\u003e Maybe Field",
          "source": "src/Network-DomainAuth-Mail-Mail.html#lookupField",
          "type": "function"
        },
        "index": {
          "description": "Looking up Field from Header with FieldKey",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "lookupField",
          "normalized": "FieldKey-\u003eHeader-\u003eMaybe Field",
          "package": "domain-auth",
          "partial": "Field",
          "signature": "FieldKey-\u003eHeader-\u003eMaybe Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:lookupField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "mailBody",
          "package": "domain-auth",
          "signature": "Body",
          "source": "src/Network-DomainAuth-Mail-Types.html#Mail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "mailBody",
          "package": "domain-auth",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:mailBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "mailHeader",
          "package": "domain-auth",
          "signature": "Header",
          "source": "src/Network-DomainAuth-Mail-Types.html#Mail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "mailHeader",
          "package": "domain-auth",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:mailHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing field value of tag=value.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "parseTaggedValue",
          "package": "domain-auth",
          "signature": "RawFieldValue -\u003e [(ByteString, ByteString)]",
          "source": "src/Network-DomainAuth-Mail-Parser.html#parseTaggedValue",
          "type": "function"
        },
        "index": {
          "description": "Parsing field value of tag value",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "parseTaggedValue",
          "normalized": "RawFieldValue-\u003e[(ByteString,ByteString)]",
          "package": "domain-auth",
          "partial": "Tagged Value",
          "signature": "RawFieldValue-\u003e[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:parseTaggedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStoring body chunk to the temporary data.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "pushBody",
          "package": "domain-auth",
          "signature": "RawBodyChunk -\u003e XMail -\u003e XMail",
          "source": "src/Network-DomainAuth-Mail-XMail.html#pushBody",
          "type": "function"
        },
        "index": {
          "description": "Storing body chunk to the temporary data",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "pushBody",
          "normalized": "RawBodyChunk-\u003eXMail-\u003eXMail",
          "package": "domain-auth",
          "partial": "Body",
          "signature": "RawBodyChunk-\u003eXMail-\u003eXMail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:pushBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStoring field key and field value to the temporary data.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "pushField",
          "package": "domain-auth",
          "signature": "RawFieldKey -\u003e RawFieldValue -\u003e XMail -\u003e XMail",
          "source": "src/Network-DomainAuth-Mail-XMail.html#pushField",
          "type": "function"
        },
        "index": {
          "description": "Storing field key and field value to the temporary data",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "pushField",
          "normalized": "RawFieldKey-\u003eRawFieldValue-\u003eXMail-\u003eXMail",
          "package": "domain-auth",
          "partial": "Field",
          "signature": "RawFieldKey-\u003eRawFieldValue-\u003eXMail-\u003eXMail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:pushField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain \u003ccode\u003e\u003ca\u003eMail\u003c/a\u003e\u003c/code\u003e from a file.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "readMail",
          "package": "domain-auth",
          "signature": "FilePath -\u003e IO Mail",
          "source": "src/Network-DomainAuth-Mail-Parser.html#readMail",
          "type": "function"
        },
        "index": {
          "description": "Obtain Mail from file",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "readMail",
          "normalized": "FilePath-\u003eIO Mail",
          "package": "domain-auth",
          "partial": "Mail",
          "signature": "FilePath-\u003eIO Mail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:readMail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoving trailing empty lines.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Mail",
          "name": "removeTrailingEmptyLine",
          "package": "domain-auth",
          "signature": "Body -\u003e Body",
          "source": "src/Network-DomainAuth-Mail-Mail.html#removeTrailingEmptyLine",
          "type": "function"
        },
        "index": {
          "description": "Removing trailing empty lines",
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "removeTrailingEmptyLine",
          "normalized": "Body-\u003eBody",
          "package": "domain-auth",
          "partial": "Trailing Empty Line",
          "signature": "Body-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:removeTrailingEmptyLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "xmailBody",
          "package": "domain-auth",
          "signature": "[RawBodyChunk]",
          "source": "src/Network-DomainAuth-Mail-XMail.html#XMail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "xmailBody",
          "normalized": "[RawBodyChunk]",
          "package": "domain-auth",
          "partial": "Body",
          "signature": "[RawBodyChunk]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:xmailBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Mail",
          "name": "xmailHeader",
          "package": "domain-auth",
          "signature": "Header",
          "source": "src/Network-DomainAuth-Mail-XMail.html#XMail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Mail",
          "module": "Network.DomainAuth.Mail",
          "name": "xmailHeader",
          "package": "domain-auth",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Mail.html#v:xmailHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities to decide Purported Responsible Domain (\u003ca\u003ehttp://www.ietf.org/rfc/rfc4407\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DomainAuth.PRD",
          "name": "PRD",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-PRD.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities to decide Purported Responsible Domain http www.ietf.org rfc rfc4407",
          "hierarchy": "Network DomainAuth PRD",
          "module": "Network.DomainAuth.PRD",
          "name": "PRD",
          "package": "domain-auth",
          "partial": "PRD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-PRD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type for context to decide PRD(purported responsible domain)\n  according to RFC 4407.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.PRD",
          "name": "PRD",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-PRD-PRD.html#PRD",
          "type": "data"
        },
        "index": {
          "description": "Abstract type for context to decide PRD purported responsible domain according to RFC",
          "hierarchy": "Network DomainAuth PRD",
          "module": "Network.DomainAuth.PRD",
          "name": "PRD",
          "package": "domain-auth",
          "partial": "PRD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-PRD.html#t:PRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTaking the value of From: from the RPD context.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.PRD",
          "name": "decideFrom",
          "package": "domain-auth",
          "signature": "PRD -\u003e Maybe Domain",
          "source": "src/Network-DomainAuth-PRD-PRD.html#decideFrom",
          "type": "function"
        },
        "index": {
          "description": "Taking the value of From from the RPD context",
          "hierarchy": "Network DomainAuth PRD",
          "module": "Network.DomainAuth.PRD",
          "name": "decideFrom",
          "normalized": "PRD-\u003eMaybe Domain",
          "package": "domain-auth",
          "partial": "From",
          "signature": "PRD-\u003eMaybe Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-PRD.html#v:decideFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeciding PRD from the RPD context.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.PRD",
          "name": "decidePRD",
          "package": "domain-auth",
          "signature": "PRD -\u003e Maybe Domain",
          "source": "src/Network-DomainAuth-PRD-PRD.html#decidePRD",
          "type": "function"
        },
        "index": {
          "description": "Deciding PRD from the RPD context",
          "hierarchy": "Network DomainAuth PRD",
          "module": "Network.DomainAuth.PRD",
          "name": "decidePRD",
          "normalized": "PRD-\u003eMaybe Domain",
          "package": "domain-auth",
          "partial": "PRD",
          "signature": "PRD-\u003eMaybe Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-PRD.html#v:decidePRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a domain from a value of a header field.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.PRD",
          "name": "extractDomain",
          "package": "domain-auth",
          "signature": "RawFieldValue -\u003e Maybe Domain",
          "source": "src/Network-DomainAuth-PRD-Domain.html#extractDomain",
          "type": "function"
        },
        "index": {
          "description": "Extract domain from value of header field",
          "hierarchy": "Network DomainAuth PRD",
          "module": "Network.DomainAuth.PRD",
          "name": "extractDomain",
          "normalized": "RawFieldValue-\u003eMaybe Domain",
          "package": "domain-auth",
          "partial": "Domain",
          "signature": "RawFieldValue-\u003eMaybe Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-PRD.html#v:extractDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial context of PRD.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.PRD",
          "name": "initialPRD",
          "package": "domain-auth",
          "signature": "PRD",
          "source": "src/Network-DomainAuth-PRD-PRD.html#initialPRD",
          "type": "function"
        },
        "index": {
          "description": "Initial context of PRD",
          "hierarchy": "Network DomainAuth PRD",
          "module": "Network.DomainAuth.PRD",
          "name": "initialPRD",
          "package": "domain-auth",
          "partial": "PRD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-PRD.html#v:initialPRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushing a field key and its value in to the PRD context.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.PRD",
          "name": "pushPRD",
          "package": "domain-auth",
          "signature": "RawFieldKey -\u003e RawFieldValue -\u003e PRD -\u003e PRD",
          "source": "src/Network-DomainAuth-PRD-PRD.html#pushPRD",
          "type": "function"
        },
        "index": {
          "description": "Pushing field key and its value in to the PRD context",
          "hierarchy": "Network DomainAuth PRD",
          "module": "Network.DomainAuth.PRD",
          "name": "pushPRD",
          "normalized": "RawFieldKey-\u003eRawFieldValue-\u003ePRD-\u003ePRD",
          "package": "domain-auth",
          "partial": "PRD",
          "signature": "RawFieldKey-\u003eRawFieldValue-\u003ePRD-\u003ePRD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-PRD.html#v:pushPRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for SPF(\u003ca\u003ehttp://www.ietf.org/rfc/rfc4408\u003c/a\u003e)\n and Sender-ID(\u003ca\u003ehttp://www.ietf.org/rfc/rfc4406\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DomainAuth.SPF",
          "name": "SPF",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-SPF.html",
          "type": "module"
        },
        "index": {
          "description": "library for SPF http www.ietf.org rfc rfc4408 and Sender-ID http www.ietf.org rfc rfc4406",
          "hierarchy": "Network DomainAuth SPF",
          "module": "Network.DomainAuth.SPF",
          "name": "SPF",
          "package": "domain-auth",
          "partial": "SPF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-SPF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit for SPF authentication.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.SPF",
          "name": "Limit",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-SPF-Eval.html#Limit",
          "type": "data"
        },
        "index": {
          "description": "Limit for SPF authentication",
          "hierarchy": "Network DomainAuth SPF",
          "module": "Network.DomainAuth.SPF",
          "name": "Limit",
          "package": "domain-auth",
          "partial": "Limit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-SPF.html#t:Limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.SPF",
          "name": "Limit",
          "package": "domain-auth",
          "signature": "Limit",
          "source": "src/Network-DomainAuth-SPF-Eval.html#Limit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth SPF",
          "module": "Network.DomainAuth.SPF",
          "name": "Limit",
          "package": "domain-auth",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-SPF.html#v:Limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eLimit\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003elimit\u003c/a\u003e\u003c/code\u003e is 10. \u003ccode\u003e\u003ca\u003eipv4_masklen\u003c/a\u003e\u003c/code\u003e is 16.\n  \u003ccode\u003e\u003ca\u003eipv6_masklen\u003c/a\u003e\u003c/code\u003e is 48. \u003ccode\u003e\u003ca\u003ereject_plus_all\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.SPF",
          "name": "defaultLimit",
          "package": "domain-auth",
          "signature": "Limit",
          "source": "src/Network-DomainAuth-SPF-Eval.html#defaultLimit",
          "type": "function"
        },
        "index": {
          "description": "Default Limit limit is ipv4 masklen is ipv6 masklen is reject plus all is True",
          "hierarchy": "Network DomainAuth SPF",
          "module": "Network.DomainAuth.SPF",
          "name": "defaultLimit",
          "package": "domain-auth",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-SPF.html#v:defaultLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnoring IPv4 range whose mask length is shorter than this.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.SPF",
          "name": "ipv4_masklen",
          "package": "domain-auth",
          "signature": "Int",
          "source": "src/Network-DomainAuth-SPF-Eval.html#Limit",
          "type": "function"
        },
        "index": {
          "description": "Ignoring IPv4 range whose mask length is shorter than this",
          "hierarchy": "Network DomainAuth SPF",
          "module": "Network.DomainAuth.SPF",
          "name": "ipv4_masklen",
          "package": "domain-auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-SPF.html#v:ipv4_masklen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnoring IPv6 range whose mask length is shorter than this.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.SPF",
          "name": "ipv6_masklen",
          "package": "domain-auth",
          "signature": "Int",
          "source": "src/Network-DomainAuth-SPF-Eval.html#Limit",
          "type": "function"
        },
        "index": {
          "description": "Ignoring IPv6 range whose mask length is shorter than this",
          "hierarchy": "Network DomainAuth SPF",
          "module": "Network.DomainAuth.SPF",
          "name": "ipv6_masklen",
          "package": "domain-auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-SPF.html#v:ipv6_masklen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many \"redirect\"/\"include\" should be followed.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.SPF",
          "name": "limit",
          "package": "domain-auth",
          "signature": "Int",
          "source": "src/Network-DomainAuth-SPF-Eval.html#Limit",
          "type": "function"
        },
        "index": {
          "description": "How many redirect include should be followed",
          "hierarchy": "Network DomainAuth SPF",
          "module": "Network.DomainAuth.SPF",
          "name": "limit",
          "package": "domain-auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-SPF.html#v:limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not \"+all\" is rejected.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.SPF",
          "name": "reject_plus_all",
          "package": "domain-auth",
          "signature": "Bool",
          "source": "src/Network-DomainAuth-SPF-Eval.html#Limit",
          "type": "function"
        },
        "index": {
          "description": "Whether or not all is rejected",
          "hierarchy": "Network DomainAuth SPF",
          "module": "Network.DomainAuth.SPF",
          "name": "reject_plus_all",
          "package": "domain-auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-SPF.html#v:reject_plus_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess SPF authentication. \u003ccode\u003e\u003ca\u003eIP\u003c/a\u003e\u003c/code\u003e is an IP address of an SMTP peer.\n  If \u003ccode\u003e\u003ca\u003eDomain\u003c/a\u003e\u003c/code\u003e is specified from SMTP MAIL FROM, authentication is\n  based on SPF. If \u003ccode\u003e\u003ca\u003eDomain\u003c/a\u003e\u003c/code\u003e is specified from the From field of mail\n  header, authentication is based on SenderID. If condition reaches\n  \u003ccode\u003e\u003ca\u003eLimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eSpfPermError\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.SPF",
          "name": "runSPF",
          "package": "domain-auth",
          "signature": "Limit -\u003e Resolver -\u003e Domain -\u003e IP -\u003e IO DAResult",
          "source": "src/Network-DomainAuth-SPF.html#runSPF",
          "type": "function"
        },
        "index": {
          "description": "Process SPF authentication IP is an IP address of an SMTP peer If Domain is specified from SMTP MAIL FROM authentication is based on SPF If Domain is specified from the From field of mail header authentication is based on SenderID If condition reaches Limit SpfPermError is returned",
          "hierarchy": "Network DomainAuth SPF",
          "module": "Network.DomainAuth.SPF",
          "name": "runSPF",
          "normalized": "Limit-\u003eResolver-\u003eDomain-\u003eIP-\u003eIO DAResult",
          "package": "domain-auth",
          "partial": "SPF",
          "signature": "Limit-\u003eResolver-\u003eDomain-\u003eIP-\u003eIO DAResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-SPF.html#v:runSPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType for Message Authentication Status (\u003ca\u003ehttp://www.ietf.org/rfc/rfc5451.txt\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DomainAuth.Types",
          "name": "Types",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Type for Message Authentication Status http www.ietf.org rfc rfc5451.txt",
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "Types",
          "package": "domain-auth",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of domain authentication. For more information, see\n  \u003ca\u003ehttp://www.ietf.org/rfc/rfc5451.txt\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.DomainAuth.Types",
          "name": "DAResult",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "data"
        },
        "index": {
          "description": "The result of domain authentication For more information see http www.ietf.org rfc rfc5451.txt",
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DAResult",
          "package": "domain-auth",
          "partial": "DAResult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#t:DAResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DADiscard",
          "package": "domain-auth",
          "signature": "DADiscard",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DADiscard",
          "package": "domain-auth",
          "partial": "DADiscard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DADiscard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DAFail",
          "package": "domain-auth",
          "signature": "DAFail",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DAFail",
          "package": "domain-auth",
          "partial": "DAFail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DAFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DAHardFail",
          "package": "domain-auth",
          "signature": "DAHardFail",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DAHardFail",
          "package": "domain-auth",
          "partial": "DAHard Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DAHardFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DANeutral",
          "package": "domain-auth",
          "signature": "DANeutral",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DANeutral",
          "package": "domain-auth",
          "partial": "DANeutral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DANeutral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DANone",
          "package": "domain-auth",
          "signature": "DANone",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DANone",
          "package": "domain-auth",
          "partial": "DANone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DANone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DANxDomain",
          "package": "domain-auth",
          "signature": "DANxDomain",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DANxDomain",
          "package": "domain-auth",
          "partial": "DANx Domain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DANxDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DAPass",
          "package": "domain-auth",
          "signature": "DAPass",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DAPass",
          "package": "domain-auth",
          "partial": "DAPass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DAPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DAPermError",
          "package": "domain-auth",
          "signature": "DAPermError",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DAPermError",
          "package": "domain-auth",
          "partial": "DAPerm Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DAPermError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DAPolicy",
          "package": "domain-auth",
          "signature": "DAPolicy",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DAPolicy",
          "package": "domain-auth",
          "partial": "DAPolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DAPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DASoftFail",
          "package": "domain-auth",
          "signature": "DASoftFail",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DASoftFail",
          "package": "domain-auth",
          "partial": "DASoft Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DASoftFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DATempError",
          "package": "domain-auth",
          "signature": "DATempError",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DATempError",
          "package": "domain-auth",
          "partial": "DATemp Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DATempError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.DomainAuth.Types",
          "name": "DAUnknown",
          "package": "domain-auth",
          "signature": "DAUnknown",
          "source": "src/Network-DomainAuth-Types.html#DAResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network DomainAuth Types",
          "module": "Network.DomainAuth.Types",
          "name": "DAUnknown",
          "package": "domain-auth",
          "partial": "DAUnknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth-Types.html#v:DAUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for Sender Policy Framework, SenderID, DomainKeys and DKIM.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.DomainAuth",
          "name": "DomainAuth",
          "package": "domain-auth",
          "source": "src/Network-DomainAuth.html",
          "type": "module"
        },
        "index": {
          "description": "Library for Sender Policy Framework SenderID DomainKeys and DKIM",
          "hierarchy": "Network DomainAuth",
          "module": "Network.DomainAuth",
          "name": "DomainAuth",
          "package": "domain-auth",
          "partial": "Domain Auth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/domain-auth/docs/Network-DomainAuth.html#"
      }
    }
  ]
]