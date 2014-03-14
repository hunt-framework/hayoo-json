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
        "word": "ec2-signature"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "EC2",
          "package": "ec2-signature",
          "source": "src/Network-HTTP-Rest-Signature-EC2.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "EC2",
          "package": "ec2-signature",
          "partial": "EC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "Endpoint",
          "package": "ec2-signature",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#Endpoint",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "Endpoint",
          "package": "ec2-signature",
          "partial": "Endpoint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#t:Endpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "Method",
          "package": "ec2-signature",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#Method",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "Method",
          "package": "ec2-signature",
          "partial": "Method",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "Path",
          "package": "ec2-signature",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#Path",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "Path",
          "package": "ec2-signature",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "SecretKey",
          "package": "ec2-signature",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#SecretKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "SecretKey",
          "package": "ec2-signature",
          "partial": "Secret Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#t:SecretKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "SignatureMethod",
          "package": "ec2-signature",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#SignatureMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "SignatureMethod",
          "package": "ec2-signature",
          "partial": "Signature Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#t:SignatureMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "HmacSHA256",
          "package": "ec2-signature",
          "signature": "HmacSHA256",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#SignatureMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "HmacSHA256",
          "package": "ec2-signature",
          "partial": "Hmac SHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#v:HmacSHA256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake signature from a parameter list.\n\u003c/p\u003e",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "signature",
          "package": "ec2-signature",
          "signature": "Method -\u003e Endpoint -\u003e Path -\u003e SecretKey -\u003e SignatureMethod -\u003e SimpleQuery -\u003e ByteString",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#signature",
          "type": "function"
        },
        "index": {
          "description": "Make signature from parameter list",
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "signature",
          "normalized": "Method-\u003eEndpoint-\u003ePath-\u003eSecretKey-\u003eSignatureMethod-\u003eSimpleQuery-\u003eByteString",
          "package": "ec2-signature",
          "signature": "Method-\u003eEndpoint-\u003ePath-\u003eSecretKey-\u003eSignatureMethod-\u003eSimpleQuery-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#v:signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake signature from a \u003ccode\u003eQueryString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "signature'",
          "package": "ec2-signature",
          "signature": "Method -\u003e Endpoint -\u003e Path -\u003e SecretKey -\u003e SignatureMethod -\u003e Query -\u003e ByteString",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#signature%27",
          "type": "function"
        },
        "index": {
          "description": "Make signature from QueryString",
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "signature'",
          "normalized": "Method-\u003eEndpoint-\u003ePath-\u003eSecretKey-\u003eSignatureMethod-\u003eQuery-\u003eByteString",
          "package": "ec2-signature",
          "signature": "Method-\u003eEndpoint-\u003ePath-\u003eSecretKey-\u003eSignatureMethod-\u003eQuery-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#v:signature-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a string for making signature.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003estringToSign \"GET\" \"ec2.amazonaws.com\" \"/\" [(\"key1\", \"value1\"), (\"key2\", \"value2\")]\n\u003c/code\u003e\u003c/strong\u003e\"GET\\nec2.amazonaws.com\\n/\\nkey1=value1&key2=value2\"\n\u003c/pre\u003e",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "stringToSign",
          "package": "ec2-signature",
          "signature": "Method -\u003e Endpoint -\u003e Path -\u003e SimpleQuery -\u003e ByteString",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#stringToSign",
          "type": "function"
        },
        "index": {
          "description": "Make string for making signature stringToSign GET ec2.amazonaws.com key1 value1 key2 value2 GET nec2.amazonaws.com nkey1 value1 key2 value2",
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "stringToSign",
          "normalized": "Method-\u003eEndpoint-\u003ePath-\u003eSimpleQuery-\u003eByteString",
          "package": "ec2-signature",
          "partial": "To Sign",
          "signature": "Method-\u003eEndpoint-\u003ePath-\u003eSimpleQuery-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#v:stringToSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "stringToSign'",
          "package": "ec2-signature",
          "signature": "Method -\u003e Endpoint -\u003e Path -\u003e Query -\u003e ByteString",
          "source": "src/Network-HTTP-Rest-Signature-EC2-Internal.html#stringToSign%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Rest Signature EC2",
          "module": "Network.HTTP.Rest.Signature.EC2",
          "name": "stringToSign'",
          "normalized": "Method-\u003eEndpoint-\u003ePath-\u003eQuery-\u003eByteString",
          "package": "ec2-signature",
          "partial": "To Sign'",
          "signature": "Method-\u003eEndpoint-\u003ePath-\u003eQuery-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ec2-signature/docs/Network-HTTP-Rest-Signature-EC2.html#v:stringToSign-39-"
      }
    }
  ]
]