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
        "word": "haskoin-script"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides arbitrary instances for data types in\n  \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-script",
          "source": "src/Network-Haskoin-Script-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides arbitrary instances for data types in Script",
          "hierarchy": "Network Haskoin Script Arbitrary",
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-script",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for generating an arbitrary \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e with a value in\n [OP_1 .. OP_16]\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "ScriptOpInt",
          "package": "haskoin-script",
          "source": "src/Network-Haskoin-Script-Arbitrary.html#ScriptOpInt",
          "type": "data"
        },
        "index": {
          "description": "Data type for generating an arbitrary ScriptOp with value in OP OP",
          "hierarchy": "Network Haskoin Script Arbitrary",
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "ScriptOpInt",
          "package": "haskoin-script",
          "partial": "Script Op Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script-Arbitrary.html#t:ScriptOpInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "ScriptOpInt",
          "package": "haskoin-script",
          "signature": "ScriptOpInt ScriptOp",
          "source": "src/Network-Haskoin-Script-Arbitrary.html#ScriptOpInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script Arbitrary",
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "ScriptOpInt",
          "package": "haskoin-script",
          "partial": "Script Op Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script-Arbitrary.html#v:ScriptOpInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an arbitrary \u003ccode\u003e\u003ca\u003eScriptOutput\u003c/a\u003e\u003c/code\u003e of value PayMulSig.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "genPayMulSig",
          "package": "haskoin-script",
          "signature": "Gen ScriptOutput",
          "source": "src/Network-Haskoin-Script-Arbitrary.html#genPayMulSig",
          "type": "function"
        },
        "index": {
          "description": "Generate an arbitrary ScriptOutput of value PayMulSig",
          "hierarchy": "Network Haskoin Script Arbitrary",
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "genPayMulSig",
          "package": "haskoin-script",
          "partial": "Pay Mul Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script-Arbitrary.html#v:genPayMulSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an arbitrary \u003ccode\u003e\u003ca\u003eScriptInput\u003c/a\u003e\u003c/code\u003e of value SpendMulSig.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "genSpendMulSig",
          "package": "haskoin-script",
          "signature": "Gen ScriptInput",
          "source": "src/Network-Haskoin-Script-Arbitrary.html#genSpendMulSig",
          "type": "function"
        },
        "index": {
          "description": "Generate an arbitrary ScriptInput of value SpendMulSig",
          "hierarchy": "Network Haskoin Script Arbitrary",
          "module": "Network.Haskoin.Script.Arbitrary",
          "name": "genSpendMulSig",
          "package": "haskoin-script",
          "partial": "Spend Mul Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script-Arbitrary.html#v:genSpendMulSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides functions for parsing and evaluating bitcoin\n  transaction scripts. Data types are provided for building and\n  deconstructing all of the standard input and output script types. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Script",
          "name": "Script",
          "package": "haskoin-script",
          "source": "src/Network-Haskoin-Script.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides functions for parsing and evaluating bitcoin transaction scripts Data types are provided for building and deconstructing all of the standard input and output script types",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "Script",
          "package": "haskoin-script",
          "partial": "Script",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "RedeemScript",
          "package": "haskoin-script",
          "source": "src/Network-Haskoin-Script-Parser.html#RedeemScript",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "RedeemScript",
          "package": "haskoin-script",
          "partial": "Redeem Script",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#t:RedeemScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type describing an input script spending a pay to script hash\n output. To spend a script hash output, an input script must provide\n both a redeem script and a regular input script spending the redeem \n script.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "ScriptHashInput",
          "package": "haskoin-script",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptHashInput",
          "type": "data"
        },
        "index": {
          "description": "Data type describing an input script spending pay to script hash output To spend script hash output an input script must provide both redeem script and regular input script spending the redeem script",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "ScriptHashInput",
          "package": "haskoin-script",
          "partial": "Script Hash Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#t:ScriptHashInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type describing standard transaction input scripts. Input scripts\n provide the signing data required to unlock the coins of the output they are\n trying to spend. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "ScriptInput",
          "package": "haskoin-script",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptInput",
          "type": "data"
        },
        "index": {
          "description": "Data type describing standard transaction input scripts Input scripts provide the signing data required to unlock the coins of the output they are trying to spend",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "ScriptInput",
          "package": "haskoin-script",
          "partial": "Script Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#t:ScriptInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type describing standard transaction output scripts. Output scripts\n provide the conditions that must be fulfilled for someone to spend the\n output coins. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "ScriptOutput",
          "package": "haskoin-script",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptOutput",
          "type": "data"
        },
        "index": {
          "description": "Data type describing standard transaction output scripts Output scripts provide the conditions that must be fulfilled for someone to spend the output coins",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "ScriptOutput",
          "package": "haskoin-script",
          "partial": "Script Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#t:ScriptOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing the different ways a transaction can be signed.\n When producing a signature, a hash of the transaction is used as the message\n to be signed. The \u003ccode\u003e\u003ca\u003eSigHash\u003c/a\u003e\u003c/code\u003e parameter controls which parts of the\n transaction are used or ignored to produce the transaction hash. The idea is\n that if some part of a transaction is not used to produce the transaction\n hash, then you can change that part of the transaction after producing a\n signature without invalidating that signature.\n\u003c/p\u003e\u003cp\u003eIf the anyoneCanPay flag is True, then only the current input is signed.\n Otherwise, all of the inputs of a transaction are signed. The default value\n for anyoneCanPay is False.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "SigHash",
          "package": "haskoin-script",
          "source": "src/Network-Haskoin-Script-SigHash.html#SigHash",
          "type": "data"
        },
        "index": {
          "description": "Data type representing the different ways transaction can be signed When producing signature hash of the transaction is used as the message to be signed The SigHash parameter controls which parts of the transaction are used or ignored to produce the transaction hash The idea is that if some part of transaction is not used to produce the transaction hash then you can change that part of the transaction after producing signature without invalidating that signature If the anyoneCanPay flag is True then only the current input is signed Otherwise all of the inputs of transaction are signed The default value for anyoneCanPay is False",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "SigHash",
          "package": "haskoin-script",
          "partial": "Sig Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#t:SigHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e together with a \u003ccode\u003e\u003ca\u003eSigHash\u003c/a\u003e\u003c/code\u003e. The\n \u003ccode\u003e\u003ca\u003eSigHash\u003c/a\u003e\u003c/code\u003e is serialized as one byte at the end of a regular ECDSA\n \u003ccode\u003e\u003ca\u003eSignature\u003c/a\u003e\u003c/code\u003e. All signatures in transaction inputs are of type \u003ccode\u003e\u003ca\u003eTxSignature\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "TxSignature",
          "package": "haskoin-script",
          "source": "src/Network-Haskoin-Script-SigHash.html#TxSignature",
          "type": "data"
        },
        "index": {
          "description": "Data type representing Signature together with SigHash The SigHash is serialized as one byte at the end of regular ECDSA Signature All signatures in transaction inputs are of type TxSignature",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "TxSignature",
          "package": "haskoin-script",
          "partial": "Tx Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#t:TxSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePay to multiple public keys.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "PayMulSig",
          "package": "haskoin-script",
          "signature": "PayMulSig",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptOutput",
          "type": "function"
        },
        "index": {
          "description": "Pay to multiple public keys",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "PayMulSig",
          "package": "haskoin-script",
          "partial": "Pay Mul Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:PayMulSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePay to a public key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "PayPK",
          "package": "haskoin-script",
          "signature": "PayPK",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptOutput",
          "type": "function"
        },
        "index": {
          "description": "Pay to public key",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "PayPK",
          "package": "haskoin-script",
          "partial": "Pay PK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:PayPK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePay to a public key hash.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "PayPKHash",
          "package": "haskoin-script",
          "signature": "PayPKHash",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptOutput",
          "type": "function"
        },
        "index": {
          "description": "Pay to public key hash",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "PayPKHash",
          "package": "haskoin-script",
          "partial": "Pay PKHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:PayPKHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePay to a script hash.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "PayScriptHash",
          "package": "haskoin-script",
          "signature": "PayScriptHash",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptOutput",
          "type": "function"
        },
        "index": {
          "description": "Pay to script hash",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "PayScriptHash",
          "package": "haskoin-script",
          "partial": "Pay Script Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:PayScriptHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "ScriptHashInput",
          "package": "haskoin-script",
          "signature": "ScriptHashInput",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptHashInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "ScriptHashInput",
          "package": "haskoin-script",
          "partial": "Script Hash Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:ScriptHashInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign all of the outputs of a transaction (This is the default value).\n Changing any of the outputs of the transaction will invalidate the\n signature.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "SigAll",
          "package": "haskoin-script",
          "signature": "SigAll",
          "source": "src/Network-Haskoin-Script-SigHash.html#SigHash",
          "type": "function"
        },
        "index": {
          "description": "Sign all of the outputs of transaction This is the default value Changing any of the outputs of the transaction will invalidate the signature",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "SigAll",
          "package": "haskoin-script",
          "partial": "Sig All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:SigAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign none of the outputs of a transaction. This allows anyone to\n change any of the outputs of the transaction.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "SigNone",
          "package": "haskoin-script",
          "signature": "SigNone",
          "source": "src/Network-Haskoin-Script-SigHash.html#SigHash",
          "type": "function"
        },
        "index": {
          "description": "Sign none of the outputs of transaction This allows anyone to change any of the outputs of the transaction",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "SigNone",
          "package": "haskoin-script",
          "partial": "Sig None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:SigNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign only the output corresponding the the current transaction input.\n You care about your own output in the transaction but you don't\n care about any of the other outputs.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "SigSingle",
          "package": "haskoin-script",
          "signature": "SigSingle",
          "source": "src/Network-Haskoin-Script-SigHash.html#SigHash",
          "type": "function"
        },
        "index": {
          "description": "Sign only the output corresponding the the current transaction input You care about your own output in the transaction but you don care about any of the other outputs",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "SigSingle",
          "package": "haskoin-script",
          "partial": "Sig Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:SigSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnrecognized sighash types will decode to SigUnknown.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "SigUnknown",
          "package": "haskoin-script",
          "signature": "SigUnknown",
          "source": "src/Network-Haskoin-Script-SigHash.html#SigHash",
          "type": "function"
        },
        "index": {
          "description": "Unrecognized sighash types will decode to SigUnknown",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "SigUnknown",
          "package": "haskoin-script",
          "partial": "Sig Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:SigUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpend the coins of a PayMulSig output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "SpendMulSig",
          "package": "haskoin-script",
          "signature": "SpendMulSig",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptInput",
          "type": "function"
        },
        "index": {
          "description": "Spend the coins of PayMulSig output",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "SpendMulSig",
          "package": "haskoin-script",
          "partial": "Spend Mul Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:SpendMulSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpend the coins of a PayPK output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "SpendPK",
          "package": "haskoin-script",
          "signature": "SpendPK",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptInput",
          "type": "function"
        },
        "index": {
          "description": "Spend the coins of PayPK output",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "SpendPK",
          "package": "haskoin-script",
          "partial": "Spend PK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:SpendPK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpend the coins of a PayPKHash output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "SpendPKHash",
          "package": "haskoin-script",
          "signature": "SpendPKHash",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptInput",
          "type": "function"
        },
        "index": {
          "description": "Spend the coins of PayPKHash output",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "SpendPKHash",
          "package": "haskoin-script",
          "partial": "Spend PKHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:SpendPKHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "TxSignature",
          "package": "haskoin-script",
          "signature": "TxSignature",
          "source": "src/Network-Haskoin-Script-SigHash.html#TxSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "TxSignature",
          "package": "haskoin-script",
          "partial": "Tx Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:TxSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "anyoneCanPay",
          "package": "haskoin-script",
          "signature": "Bool",
          "source": "src/Network-Haskoin-Script-SigHash.html#SigHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "anyoneCanPay",
          "package": "haskoin-script",
          "partial": "Can Pay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:anyoneCanPay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eTxSignature\u003c/a\u003e\u003c/code\u003e from a ByteString. This function will check if\n the signature is canonical and fail if it is not.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "decodeCanonicalSig",
          "package": "haskoin-script",
          "signature": "ByteString -\u003e Either String TxSignature",
          "source": "src/Network-Haskoin-Script-SigHash.html#decodeCanonicalSig",
          "type": "function"
        },
        "index": {
          "description": "Decode TxSignature from ByteString This function will check if the signature is canonical and fail if it is not",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "decodeCanonicalSig",
          "normalized": "ByteString-\u003eEither String TxSignature",
          "package": "haskoin-script",
          "partial": "Canonical Sig",
          "signature": "ByteString-\u003eEither String TxSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:decodeCanonicalSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a \u003ccode\u003e\u003ca\u003eScriptInput\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e. This function fails if the \n script can not be parsed as a standard script input.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "decodeInput",
          "package": "haskoin-script",
          "signature": "Script -\u003e Either String ScriptInput",
          "source": "src/Network-Haskoin-Script-Parser.html#decodeInput",
          "type": "function"
        },
        "index": {
          "description": "Decodes ScriptInput from Script This function fails if the script can not be parsed as standard script input",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "decodeInput",
          "normalized": "Script-\u003eEither String ScriptInput",
          "package": "haskoin-script",
          "partial": "Input",
          "signature": "Script-\u003eEither String ScriptInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:decodeInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to decode a \u003ccode\u003e\u003ca\u003eScriptOutput\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e. This can fail if the\n script is not recognized as any of the standard output types.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "decodeOutput",
          "package": "haskoin-script",
          "signature": "Script -\u003e Either String ScriptOutput",
          "source": "src/Network-Haskoin-Script-Parser.html#decodeOutput",
          "type": "function"
        },
        "index": {
          "description": "Tries to decode ScriptOutput from Script This can fail if the script is not recognized as any of the standard output types",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "decodeOutput",
          "normalized": "Script-\u003eEither String ScriptOutput",
          "package": "haskoin-script",
          "partial": "Output",
          "signature": "Script-\u003eEither String ScriptOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:decodeOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to decode a \u003ccode\u003e\u003ca\u003eScriptHashInput\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e. This function fails\n if the script can not be parsed as a script hash input.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "decodeScriptHash",
          "package": "haskoin-script",
          "signature": "Script -\u003e Either String ScriptHashInput",
          "source": "src/Network-Haskoin-Script-Parser.html#decodeScriptHash",
          "type": "function"
        },
        "index": {
          "description": "Tries to decode ScriptHashInput from Script This function fails if the script can not be parsed as script hash input",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "decodeScriptHash",
          "normalized": "Script-\u003eEither String ScriptHashInput",
          "package": "haskoin-script",
          "partial": "Script Hash",
          "signature": "Script-\u003eEither String ScriptHashInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:decodeScriptHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eTxSignature\u003c/a\u003e\u003c/code\u003e from a ByteString.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "decodeSig",
          "package": "haskoin-script",
          "signature": "ByteString -\u003e Either String TxSignature",
          "source": "src/Network-Haskoin-Script-SigHash.html#decodeSig",
          "type": "function"
        },
        "index": {
          "description": "Decode TxSignature from ByteString",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "decodeSig",
          "normalized": "ByteString-\u003eEither String TxSignature",
          "package": "haskoin-script",
          "partial": "Sig",
          "signature": "ByteString-\u003eEither String TxSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:decodeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eScriptInput\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e is a list of \n \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e can can be used to build a \u003ccode\u003e\u003ca\u003eTx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "encodeInput",
          "package": "haskoin-script",
          "signature": "ScriptInput -\u003e Script",
          "source": "src/Network-Haskoin-Script-Parser.html#encodeInput",
          "type": "function"
        },
        "index": {
          "description": "Computes Script from ScriptInput The Script is list of ScriptOp can can be used to build Tx",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "encodeInput",
          "normalized": "ScriptInput-\u003eScript",
          "package": "haskoin-script",
          "partial": "Input",
          "signature": "ScriptInput-\u003eScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:encodeInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eScriptOutput\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e is a list of \n \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e can can be used to build a \u003ccode\u003e\u003ca\u003eTx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "encodeOutput",
          "package": "haskoin-script",
          "signature": "ScriptOutput -\u003e Script",
          "source": "src/Network-Haskoin-Script-Parser.html#encodeOutput",
          "type": "function"
        },
        "index": {
          "description": "Computes Script from ScriptOutput The Script is list of ScriptOp can can be used to build Tx",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "encodeOutput",
          "normalized": "ScriptOutput-\u003eScript",
          "package": "haskoin-script",
          "partial": "Output",
          "signature": "ScriptOutput-\u003eScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:encodeOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eScriptHashInput\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eScript\u003c/a\u003e\u003c/code\u003e is a list of \n \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e can can be used to build a \u003ccode\u003e\u003ca\u003eTx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "encodeScriptHash",
          "package": "haskoin-script",
          "signature": "ScriptHashInput -\u003e Script",
          "source": "src/Network-Haskoin-Script-Parser.html#encodeScriptHash",
          "type": "function"
        },
        "index": {
          "description": "Compute Script from ScriptHashInput The Script is list of ScriptOp can can be used to build Tx",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "encodeScriptHash",
          "normalized": "ScriptHashInput-\u003eScript",
          "package": "haskoin-script",
          "partial": "Script Hash",
          "signature": "ScriptHashInput-\u003eScript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:encodeScriptHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eTxSignature\u003c/a\u003e\u003c/code\u003e to a ByteString.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "encodeSig",
          "package": "haskoin-script",
          "signature": "TxSignature -\u003e ByteString",
          "source": "src/Network-Haskoin-Script-SigHash.html#encodeSig",
          "type": "function"
        },
        "index": {
          "description": "Serialize TxSignature to ByteString",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "encodeSig",
          "normalized": "TxSignature-\u003eByteString",
          "package": "haskoin-script",
          "partial": "Sig",
          "signature": "TxSignature-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:encodeSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a \u003ccode\u003e\u003ca\u003eSigHash\u003c/a\u003e\u003c/code\u003e to a 32 bit-long bytestring.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "encodeSigHash32",
          "package": "haskoin-script",
          "signature": "SigHash -\u003e ByteString",
          "source": "src/Network-Haskoin-Script-SigHash.html#encodeSigHash32",
          "type": "function"
        },
        "index": {
          "description": "Encodes SigHash to bit-long bytestring",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "encodeSigHash32",
          "normalized": "SigHash-\u003eByteString",
          "package": "haskoin-script",
          "partial": "Sig Hash",
          "signature": "SigHash-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:encodeSigHash32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "getInputKey",
          "package": "haskoin-script",
          "signature": "PubKey",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "getInputKey",
          "package": "haskoin-script",
          "partial": "Input Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:getInputKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "getInputMulSigKeys",
          "package": "haskoin-script",
          "signature": "[TxSignature]",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "getInputMulSigKeys",
          "normalized": "[TxSignature]",
          "package": "haskoin-script",
          "partial": "Input Mul Sig Keys",
          "signature": "[TxSignature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:getInputMulSigKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "getInputMulSigRequired",
          "package": "haskoin-script",
          "signature": "Int",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "getInputMulSigRequired",
          "package": "haskoin-script",
          "partial": "Input Mul Sig Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:getInputMulSigRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "getInputSig",
          "package": "haskoin-script",
          "signature": "TxSignature",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "getInputSig",
          "package": "haskoin-script",
          "partial": "Input Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:getInputSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "getOutputAddress",
          "package": "haskoin-script",
          "signature": "Address",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "getOutputAddress",
          "package": "haskoin-script",
          "partial": "Output Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:getOutputAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "getOutputMulSigKeys",
          "package": "haskoin-script",
          "signature": "[PubKey]",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "getOutputMulSigKeys",
          "normalized": "[PubKey]",
          "package": "haskoin-script",
          "partial": "Output Mul Sig Keys",
          "signature": "[PubKey]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:getOutputMulSigKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "getOutputMulSigRequired",
          "package": "haskoin-script",
          "signature": "Int",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "getOutputMulSigRequired",
          "package": "haskoin-script",
          "partial": "Output Mul Sig Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:getOutputMulSigRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "getOutputPubKey",
          "package": "haskoin-script",
          "signature": "PubKey",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "getOutputPubKey",
          "package": "haskoin-script",
          "partial": "Output Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:getOutputPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "getSigCode",
          "package": "haskoin-script",
          "signature": "Word8",
          "source": "src/Network-Haskoin-Script-SigHash.html#SigHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "getSigCode",
          "package": "haskoin-script",
          "partial": "Sig Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:getSigCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms integers [1 .. 16] to \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e [OP_1 .. OP_16]\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "intToScriptOp",
          "package": "haskoin-script",
          "signature": "Int -\u003e ScriptOp",
          "source": "src/Network-Haskoin-Script-Parser.html#intToScriptOp",
          "type": "function"
        },
        "index": {
          "description": "Transforms integers to ScriptOp OP OP",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "intToScriptOp",
          "normalized": "Int-\u003eScriptOp",
          "package": "haskoin-script",
          "partial": "To Script Op",
          "signature": "Int-\u003eScriptOp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:intToScriptOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the script is a pay to multiple public keys output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isPayMulSig",
          "package": "haskoin-script",
          "signature": "ScriptOutput -\u003e Bool",
          "source": "src/Network-Haskoin-Script-Parser.html#isPayMulSig",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the script is pay to multiple public keys output",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isPayMulSig",
          "normalized": "ScriptOutput-\u003eBool",
          "package": "haskoin-script",
          "partial": "Pay Mul Sig",
          "signature": "ScriptOutput-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isPayMulSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the script is a pay to public key output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isPayPK",
          "package": "haskoin-script",
          "signature": "ScriptOutput -\u003e Bool",
          "source": "src/Network-Haskoin-Script-Parser.html#isPayPK",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the script is pay to public key output",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isPayPK",
          "normalized": "ScriptOutput-\u003eBool",
          "package": "haskoin-script",
          "partial": "Pay PK",
          "signature": "ScriptOutput-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isPayPK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the script is a pay to public key hash output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isPayPKHash",
          "package": "haskoin-script",
          "signature": "ScriptOutput -\u003e Bool",
          "source": "src/Network-Haskoin-Script-Parser.html#isPayPKHash",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the script is pay to public key hash output",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isPayPKHash",
          "normalized": "ScriptOutput-\u003eBool",
          "package": "haskoin-script",
          "partial": "Pay PKHash",
          "signature": "ScriptOutput-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isPayPKHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the script is a pay to script hash output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isPayScriptHash",
          "package": "haskoin-script",
          "signature": "ScriptOutput -\u003e Bool",
          "source": "src/Network-Haskoin-Script-Parser.html#isPayScriptHash",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the script is pay to script hash output",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isPayScriptHash",
          "normalized": "ScriptOutput-\u003eBool",
          "package": "haskoin-script",
          "partial": "Pay Script Hash",
          "signature": "ScriptOutput-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isPayScriptHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eSigHash\u003c/a\u003e\u003c/code\u003e has the value SigAll.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isSigAll",
          "package": "haskoin-script",
          "signature": "SigHash -\u003e Bool",
          "source": "src/Network-Haskoin-Script-SigHash.html#isSigAll",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the SigHash has the value SigAll",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isSigAll",
          "normalized": "SigHash-\u003eBool",
          "package": "haskoin-script",
          "partial": "Sig All",
          "signature": "SigHash-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isSigAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eSigHash\u003c/a\u003e\u003c/code\u003e has the value SigNone.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isSigNone",
          "package": "haskoin-script",
          "signature": "SigHash -\u003e Bool",
          "source": "src/Network-Haskoin-Script-SigHash.html#isSigNone",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the SigHash has the value SigNone",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isSigNone",
          "normalized": "SigHash-\u003eBool",
          "package": "haskoin-script",
          "partial": "Sig None",
          "signature": "SigHash-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isSigNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eSigHash\u003c/a\u003e\u003c/code\u003e has the value SigSingle.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isSigSingle",
          "package": "haskoin-script",
          "signature": "SigHash -\u003e Bool",
          "source": "src/Network-Haskoin-Script-SigHash.html#isSigSingle",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the SigHash has the value SigSingle",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isSigSingle",
          "normalized": "SigHash-\u003eBool",
          "package": "haskoin-script",
          "partial": "Sig Single",
          "signature": "SigHash-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isSigSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the \u003ccode\u003e\u003ca\u003eSigHash\u003c/a\u003e\u003c/code\u003e has the value SigUnknown.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isSigUnknown",
          "package": "haskoin-script",
          "signature": "SigHash -\u003e Bool",
          "source": "src/Network-Haskoin-Script-SigHash.html#isSigUnknown",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the SigHash has the value SigUnknown",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isSigUnknown",
          "normalized": "SigHash-\u003eBool",
          "package": "haskoin-script",
          "partial": "Sig Unknown",
          "signature": "SigHash-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isSigUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the input script is spending a multisignature output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isSpendMulSig",
          "package": "haskoin-script",
          "signature": "ScriptInput -\u003e Bool",
          "source": "src/Network-Haskoin-Script-Parser.html#isSpendMulSig",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the input script is spending multisignature output",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isSpendMulSig",
          "normalized": "ScriptInput-\u003eBool",
          "package": "haskoin-script",
          "partial": "Spend Mul Sig",
          "signature": "ScriptInput-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isSpendMulSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the input script is spending a public key.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isSpendPK",
          "package": "haskoin-script",
          "signature": "ScriptInput -\u003e Bool",
          "source": "src/Network-Haskoin-Script-Parser.html#isSpendPK",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the input script is spending public key",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isSpendPK",
          "normalized": "ScriptInput-\u003eBool",
          "package": "haskoin-script",
          "partial": "Spend PK",
          "signature": "ScriptInput-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isSpendPK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the input script is spending a public key hash.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "isSpendPKHash",
          "package": "haskoin-script",
          "signature": "ScriptInput -\u003e Bool",
          "source": "src/Network-Haskoin-Script-Parser.html#isSpendPKHash",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the input script is spending public key hash",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "isSpendPKHash",
          "normalized": "ScriptInput-\u003eBool",
          "package": "haskoin-script",
          "partial": "Spend PKHash",
          "signature": "ScriptInput-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:isSpendPKHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a script address from a script output. This address can be used\n in a pay to script hash output.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "scriptAddr",
          "package": "haskoin-script",
          "signature": "ScriptOutput -\u003e Address",
          "source": "src/Network-Haskoin-Script-Parser.html#scriptAddr",
          "type": "function"
        },
        "index": {
          "description": "Computes script address from script output This address can be used in pay to script hash output",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "scriptAddr",
          "normalized": "ScriptOutput-\u003eAddress",
          "package": "haskoin-script",
          "partial": "Addr",
          "signature": "ScriptOutput-\u003eAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:scriptAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e [OP_1 .. OP_16] to integers [1 .. 16]. This functions\n fails for other values of \u003ccode\u003e\u003ca\u003eScriptOp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "scriptOpToInt",
          "package": "haskoin-script",
          "signature": "ScriptOp -\u003e Either String Int",
          "source": "src/Network-Haskoin-Script-Parser.html#scriptOpToInt",
          "type": "function"
        },
        "index": {
          "description": "Decode ScriptOp OP OP to integers This functions fails for other values of ScriptOp",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "scriptOpToInt",
          "normalized": "ScriptOp-\u003eEither String Int",
          "package": "haskoin-script",
          "partial": "Op To Int",
          "signature": "ScriptOp-\u003eEither String Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:scriptOpToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the recipient address of a script. This function fails if the\n script could not be decoded as a pay to public key hash or pay to script\n hash. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "scriptRecipient",
          "package": "haskoin-script",
          "signature": "Script -\u003e Either String Address",
          "source": "src/Network-Haskoin-Script-Parser.html#scriptRecipient",
          "type": "function"
        },
        "index": {
          "description": "Computes the recipient address of script This function fails if the script could not be decoded as pay to public key hash or pay to script hash",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "scriptRecipient",
          "normalized": "Script-\u003eEither String Address",
          "package": "haskoin-script",
          "partial": "Recipient",
          "signature": "Script-\u003eEither String Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:scriptRecipient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the sender address of a script. This function fails if the\n script could not be decoded as a spend public key hash or script hash\n input. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "scriptSender",
          "package": "haskoin-script",
          "signature": "Script -\u003e Either String Address",
          "source": "src/Network-Haskoin-Script-Parser.html#scriptSender",
          "type": "function"
        },
        "index": {
          "description": "Computes the sender address of script This function fails if the script could not be decoded as spend public key hash or script hash input",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "scriptSender",
          "normalized": "Script-\u003eEither String Address",
          "package": "haskoin-script",
          "partial": "Sender",
          "signature": "Script-\u003eEither String Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:scriptSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "sigHashType",
          "package": "haskoin-script",
          "signature": "SigHash",
          "source": "src/Network-Haskoin-Script-SigHash.html#TxSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "sigHashType",
          "package": "haskoin-script",
          "partial": "Hash Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:sigHashType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the public keys of a multisignature output in ascending order by\n comparing their serialized representations. This feature allows for easier\n multisignature account management as participants in a multisignature wallet\n will blindly agree on an ordering of the public keys without having to\n communicate. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "sortMulSig",
          "package": "haskoin-script",
          "signature": "ScriptOutput -\u003e ScriptOutput",
          "source": "src/Network-Haskoin-Script-Parser.html#sortMulSig",
          "type": "function"
        },
        "index": {
          "description": "Sorts the public keys of multisignature output in ascending order by comparing their serialized representations This feature allows for easier multisignature account management as participants in multisignature wallet will blindly agree on an ordering of the public keys without having to communicate",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "sortMulSig",
          "normalized": "ScriptOutput-\u003eScriptOutput",
          "package": "haskoin-script",
          "partial": "Mul Sig",
          "signature": "ScriptOutput-\u003eScriptOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:sortMulSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput script spending the redeem script\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "spendSHInput",
          "package": "haskoin-script",
          "signature": "ScriptInput",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptHashInput",
          "type": "function"
        },
        "index": {
          "description": "Input script spending the redeem script",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "spendSHInput",
          "package": "haskoin-script",
          "partial": "SHInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:spendSHInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedeem script\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "spendSHOutput",
          "package": "haskoin-script",
          "signature": "RedeemScript",
          "source": "src/Network-Haskoin-Script-Parser.html#ScriptHashInput",
          "type": "function"
        },
        "index": {
          "description": "Redeem script",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "spendSHOutput",
          "package": "haskoin-script",
          "partial": "SHOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:spendSHOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the hash that will be used for signing a transaction.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Script",
          "name": "txSigHash",
          "package": "haskoin-script",
          "signature": "Tx-\u003e Script-\u003e Int-\u003e SigHash-\u003e Hash256",
          "type": "function"
        },
        "index": {
          "description": "Computes the hash that will be used for signing transaction",
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "txSigHash",
          "normalized": "Tx-\u003eScript-\u003eInt-\u003eSigHash-\u003eHash",
          "package": "haskoin-script",
          "partial": "Sig Hash",
          "signature": "Tx-\u003eScript-\u003eInt-\u003eSigHash-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:txSigHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Script",
          "name": "txSignature",
          "package": "haskoin-script",
          "signature": "Signature",
          "source": "src/Network-Haskoin-Script-SigHash.html#TxSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Script",
          "module": "Network.Haskoin.Script",
          "name": "txSignature",
          "package": "haskoin-script",
          "partial": "Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-script/docs/Network-Haskoin-Script.html#v:txSignature"
      }
    }
  ]
]