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
        "word": "email-validate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Email.Parser",
          "name": "Parser",
          "package": "email-validate",
          "source": "src/Text-Email-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Email Parser",
          "module": "Text.Email.Parser",
          "name": "Parser",
          "package": "email-validate",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an email address.\n\u003c/p\u003e",
          "module": "Text.Email.Parser",
          "name": "EmailAddress",
          "package": "email-validate",
          "source": "src/Text-Email-Parser.html#EmailAddress",
          "type": "data"
        },
        "index": {
          "description": "Represents an email address",
          "hierarchy": "Text Email Parser",
          "module": "Text.Email.Parser",
          "name": "EmailAddress",
          "package": "email-validate",
          "partial": "Email Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Parser.html#t:EmailAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for email addresses.\n\u003c/p\u003e",
          "module": "Text.Email.Parser",
          "name": "addrSpec",
          "package": "email-validate",
          "signature": "Parser ByteString EmailAddress",
          "source": "src/Text-Email-Parser.html#addrSpec",
          "type": "function"
        },
        "index": {
          "description": "parser for email addresses",
          "hierarchy": "Text Email Parser",
          "module": "Text.Email.Parser",
          "name": "addrSpec",
          "package": "email-validate",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Parser.html#v:addrSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the domain part of an email address.\n\u003c/p\u003e",
          "module": "[\"Text.Email.Parser\",\"Text.Email.Validate\"]",
          "name": "domainPart",
          "package": "email-validate",
          "signature": "EmailAddress -\u003e ByteString",
          "source": "src/Text-Email-Parser.html#domainPart",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/email-validate/docs/Text-Email-Parser.html#v:domainPart\",\"http://hackage.haskell.org/package/email-validate/docs/Text-Email-Validate.html#v:domainPart\"]"
        },
        "index": {
          "description": "Extracts the domain part of an email address",
          "hierarchy": "Text Email Parser",
          "module": "Text.Email.Parser",
          "name": "domainPart",
          "normalized": "EmailAddress-\u003eByteString",
          "package": "email-validate",
          "partial": "Part",
          "signature": "EmailAddress-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Parser.html#v:domainPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the local part of an email address.\n\u003c/p\u003e",
          "module": "[\"Text.Email.Parser\",\"Text.Email.Validate\"]",
          "name": "localPart",
          "package": "email-validate",
          "signature": "EmailAddress -\u003e ByteString",
          "source": "src/Text-Email-Parser.html#localPart",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/email-validate/docs/Text-Email-Parser.html#v:localPart\",\"http://hackage.haskell.org/package/email-validate/docs/Text-Email-Validate.html#v:localPart\"]"
        },
        "index": {
          "description": "Extracts the local part of an email address",
          "hierarchy": "Text Email Parser",
          "module": "Text.Email.Parser",
          "name": "localPart",
          "normalized": "EmailAddress-\u003eByteString",
          "package": "email-validate",
          "partial": "Part",
          "signature": "EmailAddress-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Parser.html#v:localPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an email address back to a ByteString\n\u003c/p\u003e",
          "module": "[\"Text.Email.Parser\",\"Text.Email.Validate\"]",
          "name": "toByteString",
          "package": "email-validate",
          "signature": "EmailAddress -\u003e ByteString",
          "source": "src/Text-Email-Parser.html#toByteString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/email-validate/docs/Text-Email-Parser.html#v:toByteString\",\"http://hackage.haskell.org/package/email-validate/docs/Text-Email-Validate.html#v:toByteString\"]"
        },
        "index": {
          "description": "Converts an email address back to ByteString",
          "hierarchy": "Text Email Parser",
          "module": "Text.Email.Parser",
          "name": "toByteString",
          "normalized": "EmailAddress-\u003eByteString",
          "package": "email-validate",
          "partial": "Byte String",
          "signature": "EmailAddress-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Parser.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Email.Validate",
          "name": "Validate",
          "package": "email-validate",
          "source": "src/Text-Email-Validate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Email Validate",
          "module": "Text.Email.Validate",
          "name": "Validate",
          "package": "email-validate",
          "partial": "Validate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Validate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an email address.\n\u003c/p\u003e",
          "module": "Text.Email.Validate",
          "name": "EmailAddress",
          "package": "email-validate",
          "source": "src/Text-Email-Parser.html#EmailAddress",
          "type": "data"
        },
        "index": {
          "description": "Represents an email address",
          "hierarchy": "Text Email Validate",
          "module": "Text.Email.Validate",
          "name": "EmailAddress",
          "package": "email-validate",
          "partial": "Email Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Validate.html#t:EmailAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that an email is valid and returns a version of it\n   where comments and whitespace have been removed.\n\u003c/p\u003e",
          "module": "Text.Email.Validate",
          "name": "canonicalizeEmail",
          "package": "email-validate",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Text-Email-Validate.html#canonicalizeEmail",
          "type": "function"
        },
        "index": {
          "description": "Checks that an email is valid and returns version of it where comments and whitespace have been removed",
          "hierarchy": "Text Email Validate",
          "module": "Text.Email.Validate",
          "name": "canonicalizeEmail",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "email-validate",
          "partial": "Email",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Validate.html#v:canonicalizeEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for an email address\n\u003c/p\u003e",
          "module": "Text.Email.Validate",
          "name": "emailAddress",
          "package": "email-validate",
          "signature": "ByteString -\u003e Maybe EmailAddress",
          "source": "src/Text-Email-Validate.html#emailAddress",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for an email address",
          "hierarchy": "Text Email Validate",
          "module": "Text.Email.Validate",
          "name": "emailAddress",
          "normalized": "ByteString-\u003eMaybe EmailAddress",
          "package": "email-validate",
          "partial": "Address",
          "signature": "ByteString-\u003eMaybe EmailAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Validate.html#v:emailAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates whether a particular string is an email address\n   according to RFC5322.\n\u003c/p\u003e",
          "module": "Text.Email.Validate",
          "name": "isValid",
          "package": "email-validate",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Text-Email-Validate.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Validates whether particular string is an email address according to RFC5322",
          "hierarchy": "Text Email Validate",
          "module": "Text.Email.Validate",
          "name": "isValid",
          "normalized": "ByteString-\u003eBool",
          "package": "email-validate",
          "partial": "Valid",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Validate.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you want to find out *why* a particular string is not\n   an email address, use this.\n\u003c/p\u003e",
          "module": "Text.Email.Validate",
          "name": "validate",
          "package": "email-validate",
          "signature": "ByteString -\u003e Either String EmailAddress",
          "source": "src/Text-Email-Validate.html#validate",
          "type": "function"
        },
        "index": {
          "description": "If you want to find out why particular string is not an email address use this",
          "hierarchy": "Text Email Validate",
          "module": "Text.Email.Validate",
          "name": "validate",
          "normalized": "ByteString-\u003eEither String EmailAddress",
          "package": "email-validate",
          "signature": "ByteString-\u003eEither String EmailAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/email-validate/docs/Text-Email-Validate.html#v:validate"
      }
    }
  ]
]