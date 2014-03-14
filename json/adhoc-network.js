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
        "word": "adhoc-network"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Channel",
          "name": "ChannelID",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Channel.html#ChannelID",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Channel",
          "module": "Network.AdHoc.Channel",
          "name": "ChannelID",
          "package": "adhoc-network",
          "partial": "Channel ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Channel.html#t:ChannelID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Channel",
          "name": "ChannelName",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Channel.html#ChannelName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Channel",
          "module": "Network.AdHoc.Channel",
          "name": "ChannelName",
          "package": "adhoc-network",
          "partial": "Channel Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Channel.html#t:ChannelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The anonymous \u003ctt\u003e\u003ca\u003eChannelName\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Network.AdHoc.Channel",
          "name": "anonymous",
          "package": "adhoc-network",
          "signature": "ChannelName",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Channel.html#anonymous",
          "type": "function"
        },
        "index": {
          "description": "The anonymous ChannelName",
          "hierarchy": "Network AdHoc Channel",
          "module": "Network.AdHoc.Channel",
          "name": "anonymous",
          "package": "adhoc-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Channel.html#v:anonymous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Creates a new \u003ctt\u003e\u003ca\u003eChannelName\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Network.AdHoc.Channel",
          "name": "mkChannelName",
          "package": "adhoc-network",
          "signature": "String -\u003e ChannelName",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Channel.html#mkChannelName",
          "type": "function"
        },
        "index": {
          "description": "Creates new ChannelName",
          "hierarchy": "Network AdHoc Channel",
          "module": "Network.AdHoc.Channel",
          "name": "mkChannelName",
          "normalized": "String-\u003eChannelName",
          "package": "adhoc-network",
          "partial": "Channel Name",
          "signature": "String-\u003eChannelName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Channel.html#v:mkChannelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Check \u003ctt\u003e\u003ca\u003eChannelName\u003c/a\u003e\u003c/tt\u003e for validity. Return \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e if it is alright,\n   \u003ctt\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/tt\u003e err if it is illegal (err is the reason for that).\n",
          "module": "Network.AdHoc.Channel",
          "name": "validateChannelName",
          "package": "adhoc-network",
          "signature": "ChannelName -\u003e Maybe String",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Channel.html#validateChannelName",
          "type": "function"
        },
        "index": {
          "description": "Check ChannelName for validity Return Nothing if it is alright Just err if it is illegal err is the reason for that",
          "hierarchy": "Network AdHoc Channel",
          "module": "Network.AdHoc.Channel",
          "name": "validateChannelName",
          "normalized": "ChannelName-\u003eMaybe String",
          "package": "adhoc-network",
          "partial": "Channel Name",
          "signature": "ChannelName-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Channel.html#v:validateChannelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Encryption",
          "name": "Encrypted",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#Encrypted",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "Encrypted",
          "package": "adhoc-network",
          "partial": "Encrypted",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#t:Encrypted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Encryption",
          "name": "RSAEncrypted",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#RSAEncrypted",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "RSAEncrypted",
          "package": "adhoc-network",
          "partial": "RSAEncrypted",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#t:RSAEncrypted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Encryption",
          "name": "Encryptable",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#Encryptable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "Encryptable",
          "package": "adhoc-network",
          "partial": "Encryptable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:Encryptable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Encryption",
          "name": "RSAEncryptable",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#RSAEncryptable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "RSAEncryptable",
          "package": "adhoc-network",
          "partial": "RSAEncryptable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:RSAEncryptable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Encryption",
          "name": "checkParity",
          "package": "adhoc-network",
          "signature": "a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#checkParity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "checkParity",
          "normalized": "a-\u003eBool",
          "package": "adhoc-network",
          "partial": "Parity",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:checkParity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The key to use\nThe encrypted content to be decrypted\n",
          "module": "Network.AdHoc.Encryption",
          "name": "decrypt",
          "package": "adhoc-network",
          "signature": "Word64-\u003e Encrypted a-\u003e Maybe a",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "The key to use The encrypted content to be decrypted",
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "decrypt",
          "normalized": "Word-\u003eEncrypted a-\u003eMaybe a",
          "package": "adhoc-network",
          "signature": "Word-\u003eEncrypted a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The key to use\nThe initial vector\nThe object to be encrypted\n",
          "module": "Network.AdHoc.Encryption",
          "name": "encrypt",
          "package": "adhoc-network",
          "signature": "Word64-\u003e Word64-\u003e a-\u003e Encrypted a",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "The key to use The initial vector The object to be encrypted",
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "encrypt",
          "normalized": "Word-\u003eWord-\u003ea-\u003eEncrypted a",
          "package": "adhoc-network",
          "signature": "Word-\u003eWord-\u003ea-\u003eEncrypted a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Randomly creates a key for DES.\n",
          "module": "Network.AdHoc.Encryption",
          "name": "generateDESKey",
          "package": "adhoc-network",
          "signature": "g -\u003e (Word64, g)",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#generateDESKey",
          "type": "function"
        },
        "index": {
          "description": "Randomly creates key for DES",
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "generateDESKey",
          "normalized": "a-\u003e(Word,a)",
          "package": "adhoc-network",
          "partial": "DESKey",
          "signature": "g-\u003e(Word,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:generateDESKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Packs a stream of 8-bit Words into a stream of 64-bit Words.\n",
          "module": "Network.AdHoc.Encryption",
          "name": "pack64",
          "package": "adhoc-network",
          "signature": "[Word8] -\u003e [Word64]",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#pack64",
          "type": "function"
        },
        "index": {
          "description": "Packs stream of bit Words into stream of bit Words",
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "pack64",
          "normalized": "[Word]-\u003e[Word]",
          "package": "adhoc-network",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:pack64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Encryption",
          "name": "rsaDecrypt",
          "package": "adhoc-network",
          "signature": "PrivateKey -\u003e RSAEncrypted a -\u003e Maybe a",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#rsaDecrypt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "rsaDecrypt",
          "normalized": "PrivateKey-\u003eRSAEncrypted a-\u003eMaybe a",
          "package": "adhoc-network",
          "partial": "Decrypt",
          "signature": "PrivateKey-\u003eRSAEncrypted a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:rsaDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Random generator to generate padding\nThe \u003ctt\u003e\u003ca\u003eCertificate\u003c/a\u003e\u003c/tt\u003e to use for encryption\nData to be encrypted\n",
          "module": "Network.AdHoc.Encryption",
          "name": "rsaEncrypt",
          "package": "adhoc-network",
          "signature": "g-\u003e Certificate-\u003e a-\u003e RSAEncrypted a",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#rsaEncrypt",
          "type": "function"
        },
        "index": {
          "description": "Random generator to generate padding The Certificate to use for encryption Data to be encrypted",
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "rsaEncrypt",
          "normalized": "a-\u003eCertificate-\u003eb-\u003eRSAEncrypted b",
          "package": "adhoc-network",
          "partial": "Encrypt",
          "signature": "g-\u003eCertificate-\u003ea-\u003eRSAEncrypted a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:rsaEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Encryption",
          "name": "splitBlock",
          "package": "adhoc-network",
          "signature": "Int -\u003e [Word8] -\u003e [[Word8]]",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#splitBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "splitBlock",
          "normalized": "Int-\u003e[Word]-\u003e[[Word]]",
          "package": "adhoc-network",
          "partial": "Block",
          "signature": "Int-\u003e[Word]-\u003e[[Word]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:splitBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Converts a list of 64-bit words into a list of 8-bit words.\n",
          "module": "Network.AdHoc.Encryption",
          "name": "unpack64",
          "package": "adhoc-network",
          "signature": "[Word64] -\u003e [Word8]",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Encryption.html#unpack64",
          "type": "function"
        },
        "index": {
          "description": "Converts list of bit words into list of bit words",
          "hierarchy": "Network AdHoc Encryption",
          "module": "Network.AdHoc.Encryption",
          "name": "unpack64",
          "normalized": "[Word]-\u003e[Word]",
          "package": "adhoc-network",
          "signature": "[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Encryption.html#v:unpack64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generates the tree of \u003ctt\u003eAbstractElement\u003c/tt\u003es for an anonymous message.\n",
          "module": "Network.AdHoc.Generator",
          "name": "genAnonymous",
          "package": "adhoc-network",
          "signature": "Bool -\u003e Maybe UserID -\u003e Maybe MessageID -\u003e String -\u003e [Attachment] -\u003e UTCTime -\u003e AbstractElement",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Generator.html#genAnonymous",
          "type": "function"
        },
        "index": {
          "description": "Generates the tree of AbstractElement for an anonymous message",
          "hierarchy": "Network AdHoc Generator",
          "module": "Network.AdHoc.Generator",
          "name": "genAnonymous",
          "normalized": "Bool-\u003eMaybe UserID-\u003eMaybe MessageID-\u003eString-\u003e[Attachment]-\u003eUTCTime-\u003eAbstractElement",
          "package": "adhoc-network",
          "partial": "Anonymous",
          "signature": "Bool-\u003eMaybe UserID-\u003eMaybe MessageID-\u003eString-\u003e[Attachment]-\u003eUTCTime-\u003eAbstractElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Generator.html#v:genAnonymous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generates the tree of \u003ctt\u003eAbstractElement\u003c/tt\u003es for an obscure message.\n",
          "module": "Network.AdHoc.Generator",
          "name": "genObscure",
          "package": "adhoc-network",
          "signature": "UserID -\u003e Maybe MessageID -\u003e ByteString -\u003e AbstractElement",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Generator.html#genObscure",
          "type": "function"
        },
        "index": {
          "description": "Generates the tree of AbstractElement for an obscure message",
          "hierarchy": "Network AdHoc Generator",
          "module": "Network.AdHoc.Generator",
          "name": "genObscure",
          "normalized": "UserID-\u003eMaybe MessageID-\u003eByteString-\u003eAbstractElement",
          "package": "adhoc-network",
          "partial": "Obscure",
          "signature": "UserID-\u003eMaybe MessageID-\u003eByteString-\u003eAbstractElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Generator.html#v:genObscure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Takes the given element and puts it into the root element of a message.\n",
          "module": "Network.AdHoc.Generator",
          "name": "genRootElem",
          "package": "adhoc-network",
          "signature": "String -\u003e AbstractElement -\u003e Bool -\u003e Maybe Delay -\u003e TTL -\u003e InternalSignature -\u003e AbstractElement",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Generator.html#genRootElem",
          "type": "function"
        },
        "index": {
          "description": "Takes the given element and puts it into the root element of message",
          "hierarchy": "Network AdHoc Generator",
          "module": "Network.AdHoc.Generator",
          "name": "genRootElem",
          "normalized": "String-\u003eAbstractElement-\u003eBool-\u003eMaybe Delay-\u003eTTL-\u003eInternalSignature-\u003eAbstractElement",
          "package": "adhoc-network",
          "partial": "Root Elem",
          "signature": "String-\u003eAbstractElement-\u003eBool-\u003eMaybe Delay-\u003eTTL-\u003eInternalSignature-\u003eAbstractElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Generator.html#v:genRootElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Takes an \u003ctt\u003e\u003ca\u003eInternalMessage\u003c/a\u003e\u003c/tt\u003e and generates the XML document from it.\n",
          "module": "Network.AdHoc.Generator",
          "name": "generateMessage",
          "package": "adhoc-network",
          "signature": "[MessageID] -\u003e InternalMessage -\u003e (String, [MessageID])",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Generator.html#generateMessage",
          "type": "function"
        },
        "index": {
          "description": "Takes an InternalMessage and generates the XML document from it",
          "hierarchy": "Network AdHoc Generator",
          "module": "Network.AdHoc.Generator",
          "name": "generateMessage",
          "normalized": "[MessageID]-\u003eInternalMessage-\u003e(String,[MessageID])",
          "package": "adhoc-network",
          "partial": "Message",
          "signature": "[MessageID]-\u003eInternalMessage-\u003e(String,[MessageID])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Generator.html#v:generateMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Takes an \u003ctt\u003eAbstractElement\u003c/tt\u003e and generates the XML document from it.\n",
          "module": "Network.AdHoc.Generator",
          "name": "generateMessage'",
          "package": "adhoc-network",
          "signature": "AbstractElement -\u003e String",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Generator.html#generateMessage%27",
          "type": "function"
        },
        "index": {
          "description": "Takes an AbstractElement and generates the XML document from it",
          "hierarchy": "Network AdHoc Generator",
          "module": "Network.AdHoc.Generator",
          "name": "generateMessage'",
          "normalized": "AbstractElement-\u003eString",
          "package": "adhoc-network",
          "partial": "Message'",
          "signature": "AbstractElement-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Generator.html#v:generateMessage'"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Message",
          "name": "Attachment",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#Attachment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "Attachment",
          "package": "adhoc-network",
          "partial": "Attachment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:Attachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Message",
          "name": "CipherType",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#CipherType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "CipherType",
          "package": "adhoc-network",
          "partial": "Cipher Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:CipherType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The message-delay can be represented by this type.\n",
          "module": "Network.AdHoc.Message",
          "name": "Delay",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#Delay",
          "type": "type"
        },
        "index": {
          "description": "The message-delay can be represented by this type",
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "Delay",
          "package": "adhoc-network",
          "partial": "Delay",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:Delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Message",
          "name": "EncryptedAttachment",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#EncryptedAttachment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "EncryptedAttachment",
          "package": "adhoc-network",
          "partial": "Encrypted Attachment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:EncryptedAttachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "An external message.\n",
          "module": "Network.AdHoc.Message",
          "name": "ExternalMessage",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#ExternalMessage",
          "type": "type"
        },
        "index": {
          "description": "An external message",
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "ExternalMessage",
          "package": "adhoc-network",
          "partial": "External Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:ExternalMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Message",
          "name": "FloodContent",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#FloodContent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "FloodContent",
          "package": "adhoc-network",
          "partial": "Flood Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:FloodContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "An internal message that is subject to internal signature guidelines.\n",
          "module": "Network.AdHoc.Message",
          "name": "InternalMessage",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#InternalMessage",
          "type": "type"
        },
        "index": {
          "description": "An internal message that is subject to internal signature guidelines",
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "InternalMessage",
          "package": "adhoc-network",
          "partial": "Internal Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:InternalMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Message",
          "name": "MessageContent",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#MessageContent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "MessageContent",
          "package": "adhoc-network",
          "partial": "Message Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:MessageContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Message",
          "name": "ProtocolMessage",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#ProtocolMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "ProtocolMessage",
          "package": "adhoc-network",
          "partial": "Protocol Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:ProtocolMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Message",
          "name": "Routed",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#Routed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "Routed",
          "package": "adhoc-network",
          "partial": "Routed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:Routed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "TimeToLive has a maximum of 360, so 16 bit unsigned is enough to hold it\n",
          "module": "Network.AdHoc.Message",
          "name": "TTL",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#TTL",
          "type": "type"
        },
        "index": {
          "description": "TimeToLive has maximum of so bit unsigned is enough to hold it",
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "TTL",
          "package": "adhoc-network",
          "partial": "TTL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:TTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Message",
          "name": "TargetContent",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#TargetContent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "TargetContent",
          "package": "adhoc-network",
          "partial": "Target Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:TargetContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "An unsigned message.\n",
          "module": "Network.AdHoc.Message",
          "name": "UnsignedMessage",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#UnsignedMessage",
          "type": "type"
        },
        "index": {
          "description": "An unsigned message",
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "UnsignedMessage",
          "package": "adhoc-network",
          "partial": "Unsigned Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#t:UnsignedMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Decrements the time-to-live of a message. If it sinks under zero,\n   \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e is returned. \u003ctt\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/tt\u003e \u003ctt\u003emsg\u003c/tt\u003e otherwise, where \u003ctt\u003emsg\u003c/tt\u003e has a\n   decremented ttl.\n",
          "module": "Network.AdHoc.Message",
          "name": "decrementTTL",
          "package": "adhoc-network",
          "signature": "Routed a sign -\u003e Maybe (Routed a sign)",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#decrementTTL",
          "type": "function"
        },
        "index": {
          "description": "Decrements the time-to-live of message If it sinks under zero Nothing is returned Just msg otherwise where msg has decremented ttl",
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "decrementTTL",
          "normalized": "Routed a b-\u003eMaybe(Routed a b)",
          "package": "adhoc-network",
          "partial": "TTL",
          "signature": "Routed a sign-\u003eMaybe(Routed a sign)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#v:decrementTTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Key\nEncrypted attachment\n\u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e at failure, \u003ctt\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/tt\u003e when successful\n",
          "module": "Network.AdHoc.Message",
          "name": "decryptAttachment",
          "package": "adhoc-network",
          "signature": "Word64-\u003e EncryptedAttachment-\u003e Maybe Attachment",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#decryptAttachment",
          "type": "function"
        },
        "index": {
          "description": "Key Encrypted attachment Nothing at failure Just when successful",
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "decryptAttachment",
          "normalized": "Word-\u003eEncryptedAttachment-\u003eMaybe Attachment",
          "package": "adhoc-network",
          "partial": "Attachment",
          "signature": "Word-\u003eEncryptedAttachment-\u003eMaybe Attachment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#v:decryptAttachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Key\nIV\n\u003ctt\u003e\u003ca\u003eAttachment\u003c/a\u003e\u003c/tt\u003e to be encrypted\n",
          "module": "Network.AdHoc.Message",
          "name": "encryptAttachment",
          "package": "adhoc-network",
          "signature": "Word64-\u003e Word64-\u003e Attachment-\u003e EncryptedAttachment",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#encryptAttachment",
          "type": "function"
        },
        "index": {
          "description": "Key IV Attachment to be encrypted",
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "encryptAttachment",
          "normalized": "Word-\u003eWord-\u003eAttachment-\u003eEncryptedAttachment",
          "package": "adhoc-network",
          "partial": "Attachment",
          "signature": "Word-\u003eWord-\u003eAttachment-\u003eEncryptedAttachment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#v:encryptAttachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extracts the information from a message, that indicates, where to\n   route it.\n",
          "module": "Network.AdHoc.Message",
          "name": "routeTo",
          "package": "adhoc-network",
          "signature": "Routed TargetContent sign -\u003e [UserID]",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Message.html#routeTo",
          "type": "function"
        },
        "index": {
          "description": "Extracts the information from message that indicates where to route it",
          "hierarchy": "Network AdHoc Message",
          "module": "Network.AdHoc.Message",
          "name": "routeTo",
          "normalized": "Routed TargetContent a-\u003e[UserID]",
          "package": "adhoc-network",
          "partial": "To",
          "signature": "Routed TargetContent sign-\u003e[UserID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Message.html#v:routeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This is just a \u003ctt\u003e\u003ca\u003eString\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Network.AdHoc.MessageID",
          "name": "MessageID",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-MessageID.html#MessageID",
          "type": "type"
        },
        "index": {
          "description": "This is just String",
          "hierarchy": "Network AdHoc MessageID",
          "module": "Network.AdHoc.MessageID",
          "name": "MessageID",
          "package": "adhoc-network",
          "partial": "Message ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-MessageID.html#t:MessageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generate an infinite(!) stream of \u003ctt\u003e\u003ca\u003eMessageID\u003c/a\u003e\u003c/tt\u003es.\n",
          "module": "Network.AdHoc.MessageID",
          "name": "MessageIDGenerator",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-MessageID.html#MessageIDGenerator",
          "type": "type"
        },
        "index": {
          "description": "Generate an infinite stream of MessageID",
          "hierarchy": "Network AdHoc MessageID",
          "module": "Network.AdHoc.MessageID",
          "name": "MessageIDGenerator",
          "package": "adhoc-network",
          "partial": "Message IDGenerator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-MessageID.html#t:MessageIDGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Simplest possible generator type: counts from 0 upwards. Very insecure.\n",
          "module": "Network.AdHoc.MessageID",
          "name": "counter",
          "package": "adhoc-network",
          "signature": "MessageIDGenerator g",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-MessageID.html#counter",
          "type": "function"
        },
        "index": {
          "description": "Simplest possible generator type counts from upwards Very insecure",
          "hierarchy": "Network AdHoc MessageID",
          "module": "Network.AdHoc.MessageID",
          "name": "counter",
          "package": "adhoc-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-MessageID.html#v:counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generates a stream of IDs by hashing an up-counting number and a random number with SHA512.\n",
          "module": "Network.AdHoc.MessageID",
          "name": "hasher",
          "package": "adhoc-network",
          "signature": "MessageIDGenerator g",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-MessageID.html#hasher",
          "type": "function"
        },
        "index": {
          "description": "Generates stream of IDs by hashing an up-counting number and random number with SHA512",
          "hierarchy": "Network AdHoc MessageID",
          "module": "Network.AdHoc.MessageID",
          "name": "hasher",
          "package": "adhoc-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-MessageID.html#v:hasher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Generates a stream of \u003ctt\u003e\u003ca\u003eMessageID\u003c/a\u003e\u003c/tt\u003es by shuffling a sorted stream couting from 0 upwards (\u003ctt\u003e[0..]\u003c/tt\u003e).\n   \u003ctt\u003escrambler n g\u003c/tt\u003e would randomly remove the i-th element (where i is a random number between 0 and n)\n   from the sorted list and place it at the head of the result list. It deals with the following\n   elements in the same way.\n",
          "module": "Network.AdHoc.MessageID",
          "name": "scrambler",
          "package": "adhoc-network",
          "signature": "Int -\u003e MessageIDGenerator g",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-MessageID.html#scrambler",
          "type": "function"
        },
        "index": {
          "description": "Generates stream of MessageID by shuffling sorted stream couting from upwards scrambler would randomly remove the i-th element where is random number between and from the sorted list and place it at the head of the result list It deals with the following elements in the same way",
          "hierarchy": "Network AdHoc MessageID",
          "module": "Network.AdHoc.MessageID",
          "name": "scrambler",
          "normalized": "Int-\u003eMessageIDGenerator a",
          "package": "adhoc-network",
          "signature": "Int-\u003eMessageIDGenerator g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-MessageID.html#v:scrambler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The XML \u003ctt\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/tt\u003e to be parsed.\n\u003ctt\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/tt\u003e \u003ctt\u003eerr\u003c/tt\u003e in case of a parsing failure;\n \u003ctt\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/tt\u003e \u003ctt\u003emsg\u003c/tt\u003e on success. \u003ctt\u003emsg\u003c/tt\u003e either is one more obscured message or\n the final message to be flooded.\n",
          "module": "Network.AdHoc.ParserStrict",
          "name": "parseInnerMessage",
          "package": "adhoc-network",
          "signature": "Document Posn-\u003e Either String (Either (UserID, RSAEncrypted String) (UTCTime, String, [Attachment]))",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-ParserStrict.html#parseInnerMessage",
          "type": "function"
        },
        "index": {
          "description": "The XML Document to be parsed Left err in case of parsing failure Right msg on success msg either is one more obscured message or the final message to be flooded",
          "hierarchy": "Network AdHoc ParserStrict",
          "module": "Network.AdHoc.ParserStrict",
          "name": "parseInnerMessage",
          "normalized": "Document Posn-\u003eEither String(Either(UserID,RSAEncrypted String)(UTCTime,String,[Attachment]))",
          "package": "adhoc-network",
          "partial": "Inner Message",
          "signature": "Document Posn-\u003eEither String(Either(UserID,RSAEncrypted String)(UTCTime,String,[Attachment]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-ParserStrict.html#v:parseInnerMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A validation function for signatures.\nThe XML \u003ctt\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/tt\u003e to be parsed.\n\u003ctt\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/tt\u003e \u003ctt\u003eerr\u003c/tt\u003e on failure, \u003ctt\u003eerr\u003c/tt\u003e describs the error. \u003ctt\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/tt\u003e msg on success.\n",
          "module": "Network.AdHoc.ParserStrict",
          "name": "parseMessage",
          "package": "adhoc-network",
          "signature": "String -\u003e Signature -\u003e UserID -\u003e SignatureStatus-\u003e Document Posn-\u003e Either String ExternalMessage",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-ParserStrict.html#parseMessage",
          "type": "function"
        },
        "index": {
          "description": "validation function for signatures The XML Document to be parsed Left err on failure err describs the error Right msg on success",
          "hierarchy": "Network AdHoc ParserStrict",
          "module": "Network.AdHoc.ParserStrict",
          "name": "parseMessage",
          "normalized": "String-\u003eSignature-\u003eUserID-\u003eSignatureStatus-\u003eDocument Posn-\u003eEither String ExternalMessage",
          "package": "adhoc-network",
          "partial": "Message",
          "signature": "String-\u003eSignature-\u003eUserID-\u003eSignatureStatus-\u003eDocument Posn-\u003eEither String ExternalMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-ParserStrict.html#v:parseMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parses a message without verifying the signature. It must only be\n   used for testing or debugging issues!\n",
          "module": "Network.AdHoc.ParserStrict",
          "name": "parseMessageNoValidate",
          "package": "adhoc-network",
          "signature": "Document Posn -\u003e Either String ExternalMessage",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-ParserStrict.html#parseMessageNoValidate",
          "type": "function"
        },
        "index": {
          "description": "Parses message without verifying the signature It must only be used for testing or debugging issues",
          "hierarchy": "Network AdHoc ParserStrict",
          "module": "Network.AdHoc.ParserStrict",
          "name": "parseMessageNoValidate",
          "normalized": "Document Posn-\u003eEither String ExternalMessage",
          "package": "adhoc-network",
          "partial": "Message No Validate",
          "signature": "Document Posn-\u003eEither String ExternalMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-ParserStrict.html#v:parseMessageNoValidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Routing",
          "name": "Addressed",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Routing.html#Addressed",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network AdHoc Routing",
          "module": "Network.AdHoc.Routing",
          "name": "Addressed",
          "package": "adhoc-network",
          "partial": "Addressed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Routing.html#v:Addressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Routing",
          "name": "RoutingStrategy",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Routing.html#RoutingStrategy",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network AdHoc Routing",
          "module": "Network.AdHoc.Routing",
          "name": "RoutingStrategy",
          "package": "adhoc-network",
          "partial": "Routing Strategy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Routing.html#v:RoutingStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The \u003ctt\u003e\u003ca\u003eRoutingStrategy\u003c/a\u003e\u003c/tt\u003e to locate users.\nThe data to be routed.\nStarting-points and target-data of routes and,\n   optionally, an addressed, failed-to-route datagram.\n",
          "module": "Network.AdHoc.Routing",
          "name": "route",
          "package": "adhoc-network",
          "signature": "r-\u003e a-\u003e (Map SockAddr a, Maybe a)",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Routing.html#route",
          "type": "function"
        },
        "index": {
          "description": "The RoutingStrategy to locate users The data to be routed Starting-points and target-data of routes and optionally an addressed failed-to-route datagram",
          "hierarchy": "Network AdHoc Routing",
          "module": "Network.AdHoc.Routing",
          "name": "route",
          "normalized": "a-\u003eb-\u003e(Map SockAddr b,Maybe b)",
          "package": "adhoc-network",
          "signature": "r-\u003ea-\u003e(Map SockAddr a,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Routing.html#v:route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Find routes for many users. The first object in the tuple maps nodes to a\n   list of users that should be reached over it. The second one is a list of\n   users that couldn't be reached.\n",
          "module": "Network.AdHoc.Routing",
          "name": "routeMulti",
          "package": "adhoc-network",
          "signature": "[UserID] -\u003e rs -\u003e (Map SockAddr [UserID], [UserID])",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Routing.html#routeMulti",
          "type": "function"
        },
        "index": {
          "description": "Find routes for many users The first object in the tuple maps nodes to list of users that should be reached over it The second one is list of users that couldn be reached",
          "hierarchy": "Network AdHoc Routing",
          "module": "Network.AdHoc.Routing",
          "name": "routeMulti",
          "normalized": "[UserID]-\u003ea-\u003e(Map SockAddr[UserID],[UserID])",
          "package": "adhoc-network",
          "partial": "Multi",
          "signature": "[UserID]-\u003ers-\u003e(Map SockAddr[UserID],[UserID])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Routing.html#v:routeMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Tries to find a route for a given user. The \u003ctt\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/tt\u003e is the starting\n   point of the route.\n",
          "module": "Network.AdHoc.Routing",
          "name": "routeSingle",
          "package": "adhoc-network",
          "signature": "UserID -\u003e rs -\u003e Maybe SockAddr",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Routing.html#routeSingle",
          "type": "function"
        },
        "index": {
          "description": "Tries to find route for given user The SockAddr is the starting point of the route",
          "hierarchy": "Network AdHoc Routing",
          "module": "Network.AdHoc.Routing",
          "name": "routeSingle",
          "normalized": "UserID-\u003ea-\u003eMaybe SockAddr",
          "package": "adhoc-network",
          "partial": "Single",
          "signature": "UserID-\u003ers-\u003eMaybe SockAddr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Routing.html#v:routeSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The signature has been received via network. The signature might be\n   knwon or not.\n",
          "module": "Network.AdHoc.Signature",
          "name": "ExternalSignature",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#ExternalSignature",
          "type": "type"
        },
        "index": {
          "description": "The signature has been received via network The signature might be knwon or not",
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "ExternalSignature",
          "package": "adhoc-network",
          "partial": "External Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#t:ExternalSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The message has been locally created, so we know the private key.\n",
          "module": "Network.AdHoc.Signature",
          "name": "InternalSignature",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#InternalSignature",
          "type": "type"
        },
        "index": {
          "description": "The message has been locally created so we know the private key",
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "InternalSignature",
          "package": "adhoc-network",
          "partial": "Internal Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#t:InternalSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "No signature has been given.\n",
          "module": "Network.AdHoc.Signature",
          "name": "NoSignature",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#NoSignature",
          "type": "type"
        },
        "index": {
          "description": "No signature has been given",
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "NoSignature",
          "package": "adhoc-network",
          "partial": "No Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#t:NoSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Signature",
          "name": "SignType",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#SignType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "SignType",
          "package": "adhoc-network",
          "partial": "Sign Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#t:SignType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Signature",
          "name": "Signature",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#Signature",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "Signature",
          "package": "adhoc-network",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Signature",
          "name": "SignatureStatus",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#SignatureStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "SignatureStatus",
          "package": "adhoc-network",
          "partial": "Signature Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#t:SignatureStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Signature",
          "name": "ToInternalSignature",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#ToInternalSignature",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "ToInternalSignature",
          "package": "adhoc-network",
          "partial": "To Internal Signature",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#v:ToInternalSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Calculates the concatenation of all text nodes in the list of contents, except for receiver elements\n",
          "module": "Network.AdHoc.Signature",
          "name": "getHashString",
          "package": "adhoc-network",
          "signature": "[Content i] -\u003e String",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#getHashString",
          "type": "function"
        },
        "index": {
          "description": "Calculates the concatenation of all text nodes in the list of contents except for receiver elements",
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "getHashString",
          "normalized": "[Content a]-\u003eString",
          "package": "adhoc-network",
          "partial": "Hash String",
          "signature": "[Content i]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#v:getHashString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.Signature",
          "name": "toInternal",
          "package": "adhoc-network",
          "signature": "s -\u003e InternalSignature",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#toInternal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "toInternal",
          "normalized": "a-\u003eInternalSignature",
          "package": "adhoc-network",
          "partial": "Internal",
          "signature": "s-\u003eInternalSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#v:toInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a certificate, this function verifies the Signature of a \u003ctt\u003e\u003ca\u003eString\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Network.AdHoc.Signature",
          "name": "verifySignature",
          "package": "adhoc-network",
          "signature": "String -\u003e Signature -\u003e Certificate -\u003e SignatureStatus",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-Signature.html#verifySignature",
          "type": "function"
        },
        "index": {
          "description": "Given certificate this function verifies the Signature of String",
          "hierarchy": "Network AdHoc Signature",
          "module": "Network.AdHoc.Signature",
          "name": "verifySignature",
          "normalized": "String-\u003eSignature-\u003eCertificate-\u003eSignatureStatus",
          "package": "adhoc-network",
          "partial": "Signature",
          "signature": "String-\u003eSignature-\u003eCertificate-\u003eSignatureStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-Signature.html#v:verifySignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.AdHoc.UserID",
          "name": "UserID",
          "package": "adhoc-network",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-UserID.html#UserID",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network AdHoc UserID",
          "module": "Network.AdHoc.UserID",
          "name": "UserID",
          "package": "adhoc-network",
          "partial": "User ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-UserID.html#t:UserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "An escaper used to escape special characters, e.g. '\u003c', from XML.\n",
          "module": "Network.AdHoc.XMLRenderer",
          "name": "escaper",
          "package": "adhoc-network",
          "signature": "XmlEscaper",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-XMLRenderer.html#escaper",
          "type": "function"
        },
        "index": {
          "description": "An escaper used to escape special characters e.g from XML",
          "hierarchy": "Network AdHoc XMLRenderer",
          "module": "Network.AdHoc.XMLRenderer",
          "name": "escaper",
          "package": "adhoc-network",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-XMLRenderer.html#v:escaper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a \u003ctt\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/tt\u003e, this function converts it into a fully valid XML\n   \u003ctt\u003e\u003ca\u003eString\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Network.AdHoc.XMLRenderer",
          "name": "renderDocument",
          "package": "adhoc-network",
          "signature": "Document i -\u003e String",
          "source": "http://hackage.haskell.org/package/adhoc-network/docs/src/Network-AdHoc-XMLRenderer.html#renderDocument",
          "type": "function"
        },
        "index": {
          "description": "Given Document this function converts it into fully valid XML String",
          "hierarchy": "Network AdHoc XMLRenderer",
          "module": "Network.AdHoc.XMLRenderer",
          "name": "renderDocument",
          "normalized": "Document a-\u003eString",
          "package": "adhoc-network",
          "partial": "Document",
          "signature": "Document i-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adhoc-network/docs/Network-AdHoc-XMLRenderer.html#v:renderDocument"
      }
    }
  ]
]