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
        "word": "erlang"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSpeaks the Erlang network protocol and impersonates an Erlang node\n on the network.  Fully capable of bi-directional communication with\n Erlang.  Erlang types are, as far as reasonable, mapped to Haskell\n types.  Messages to Erlang are just function calls in Haskell, and\n messages from Erlang are delivered to MVars.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Erlang",
          "name": "Erlang",
          "package": "erlang",
          "source": "src/Foreign-Erlang.html",
          "type": "module"
        },
        "index": {
          "description": "Speaks the Erlang network protocol and impersonates an Erlang node on the network Fully capable of bi-directional communication with Erlang Erlang types are as far as reasonable mapped to Haskell types Messages to Erlang are just function calls in Haskell and messages from Erlang are delivered to MVars",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "Erlang",
          "package": "erlang",
          "partial": "Erlang",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlRecv",
          "package": "erlang",
          "source": "src/Foreign-Erlang-Network.html#ErlRecv",
          "type": "type"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlRecv",
          "package": "erlang",
          "partial": "Erl Recv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#t:ErlRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlSend",
          "package": "erlang",
          "source": "src/Foreign-Erlang-Network.html#ErlSend",
          "type": "type"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlSend",
          "package": "erlang",
          "partial": "Erl Send",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#t:ErlSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlType",
          "package": "erlang",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlType",
          "package": "erlang",
          "partial": "Erl Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#t:ErlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "Erlang",
          "package": "erlang",
          "source": "src/Foreign-Erlang-Types.html#Erlang",
          "type": "class"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "Erlang",
          "package": "erlang",
          "partial": "Erlang",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#t:Erlang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell threads don't natively have Erlang process IDs.  Instead, we\n use a mailbox abstraction that we can assign PIDs to for communication\n with Erlang.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "MBox",
          "package": "erlang",
          "source": "src/Foreign-Erlang-Processes.html#MBox",
          "type": "data"
        },
        "index": {
          "description": "Haskell threads don natively have Erlang process IDs Instead we use mailbox abstraction that we can assign PIDs to for communication with Erlang",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "MBox",
          "package": "erlang",
          "partial": "MBox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#t:MBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of an Erlang node on the network.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "Node",
          "package": "erlang",
          "source": "src/Foreign-Erlang-Processes.html#Node",
          "type": "type"
        },
        "index": {
          "description": "The name of an Erlang node on the network",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "Node",
          "package": "erlang",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a foreign (Erlang) process.  A process can be identified\n either by its low-level ID (Left pid) or by its registered name (Right name).\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "Pid",
          "package": "erlang",
          "source": "src/Foreign-Erlang-Processes.html#Pid",
          "type": "type"
        },
        "index": {
          "description": "Represents foreign Erlang process process can be identified either by its low-level ID Left pid or by its registered name Right name",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "Pid",
          "package": "erlang",
          "partial": "Pid",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#t:Pid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a Haskell node.  There should be one of these per process.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "Self",
          "package": "erlang",
          "source": "src/Foreign-Erlang-Processes.html#Self",
          "type": "data"
        },
        "index": {
          "description": "Represents Haskell node There should be one of these per process",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "Self",
          "package": "erlang",
          "partial": "Self",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#t:Self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlAtom",
          "package": "erlang",
          "signature": "ErlAtom String",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlAtom",
          "package": "erlang",
          "partial": "Erl Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlBigInt",
          "package": "erlang",
          "signature": "ErlBigInt Integer",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlBigInt",
          "package": "erlang",
          "partial": "Erl Big Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlBigInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlBinary",
          "package": "erlang",
          "signature": "ErlBinary [Word8]",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlBinary",
          "normalized": "ErlBinary[Word]",
          "package": "erlang",
          "partial": "Erl Binary",
          "signature": "ErlBinary[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlInt",
          "package": "erlang",
          "signature": "ErlInt Int",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlInt",
          "package": "erlang",
          "partial": "Erl Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlList",
          "package": "erlang",
          "signature": "ErlList [ErlType]",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlList",
          "normalized": "ErlList[ErlType]",
          "package": "erlang",
          "partial": "Erl List",
          "signature": "ErlList[ErlType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlNewRef",
          "package": "erlang",
          "signature": "ErlNewRef ErlType Int [Word8]",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlNewRef",
          "normalized": "ErlNewRef ErlType Int[Word]",
          "package": "erlang",
          "partial": "Erl New Ref",
          "signature": "ErlNewRef ErlType Int[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlNewRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlNull",
          "package": "erlang",
          "signature": "ErlNull",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlNull",
          "package": "erlang",
          "partial": "Erl Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlPid",
          "package": "erlang",
          "signature": "ErlPid ErlType Int Int Int",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlPid",
          "package": "erlang",
          "partial": "Erl Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlPort",
          "package": "erlang",
          "signature": "ErlPort ErlType Int Int",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlPort",
          "package": "erlang",
          "partial": "Erl Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlRef",
          "package": "erlang",
          "signature": "ErlRef ErlType Int Int",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlRef",
          "package": "erlang",
          "partial": "Erl Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlString",
          "package": "erlang",
          "signature": "ErlString String",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlString",
          "package": "erlang",
          "partial": "Erl String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "ErlTuple",
          "package": "erlang",
          "signature": "ErlTuple [ErlType]",
          "source": "src/Foreign-Erlang-Types.html#ErlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "ErlTuple",
          "normalized": "ErlTuple[ErlType]",
          "package": "erlang",
          "partial": "Erl Tuple",
          "signature": "ErlTuple[ErlType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:ErlTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "backup",
          "package": "erlang",
          "signature": "MBox -\u003e String -\u003e String -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-Mnesia.html#backup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "backup",
          "normalized": "MBox-\u003eString-\u003eString-\u003eIO ErlType",
          "package": "erlang",
          "signature": "MBox-\u003eString-\u003eString-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:backup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new process on the Haskell side.  Usually corresponds\n to a thread but doesn't need to.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "createMBox",
          "package": "erlang",
          "signature": "Self -\u003e IO MBox",
          "source": "src/Foreign-Erlang-Processes.html#createMBox",
          "type": "function"
        },
        "index": {
          "description": "Create new process on the Haskell side Usually corresponds to thread but doesn need to",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "createMBox",
          "normalized": "Self-\u003eIO MBox",
          "package": "erlang",
          "partial": "MBox",
          "signature": "Self-\u003eIO MBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:createMBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstantiate a Haskell node.  This initializes the FFI.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "createSelf",
          "package": "erlang",
          "signature": "String -\u003e IO Self",
          "source": "src/Foreign-Erlang-Processes.html#createSelf",
          "type": "function"
        },
        "index": {
          "description": "Instantiate Haskell node This initializes the FFI",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "createSelf",
          "normalized": "String-\u003eIO Self",
          "package": "erlang",
          "partial": "Self",
          "signature": "String-\u003eIO Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:createSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "dirtyAllKeys",
          "package": "erlang",
          "signature": "MBox -\u003e String -\u003e String -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-Mnesia.html#dirtyAllKeys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "dirtyAllKeys",
          "normalized": "MBox-\u003eString-\u003eString-\u003eIO ErlType",
          "package": "erlang",
          "partial": "All Keys",
          "signature": "MBox-\u003eString-\u003eString-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:dirtyAllKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "dirtyFirst",
          "package": "erlang",
          "signature": "MBox -\u003e String -\u003e String -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-Mnesia.html#dirtyFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "dirtyFirst",
          "normalized": "MBox-\u003eString-\u003eString-\u003eIO ErlType",
          "package": "erlang",
          "partial": "First",
          "signature": "MBox-\u003eString-\u003eString-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:dirtyFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "dirtyLast",
          "package": "erlang",
          "signature": "MBox -\u003e String -\u003e String -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-Mnesia.html#dirtyLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "dirtyLast",
          "normalized": "MBox-\u003eString-\u003eString-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Last",
          "signature": "MBox-\u003eString-\u003eString-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:dirtyLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "dirtyMatchObject",
          "package": "erlang",
          "signature": "MBox -\u003e String -\u003e ErlType -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-Mnesia.html#dirtyMatchObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "dirtyMatchObject",
          "normalized": "MBox-\u003eString-\u003eErlType-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Match Object",
          "signature": "MBox-\u003eString-\u003eErlType-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:dirtyMatchObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "dirtyNext",
          "package": "erlang",
          "signature": "MBox -\u003e String -\u003e String -\u003e ErlType -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-Mnesia.html#dirtyNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "dirtyNext",
          "normalized": "MBox-\u003eString-\u003eString-\u003eErlType-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Next",
          "signature": "MBox-\u003eString-\u003eString-\u003eErlType-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:dirtyNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "dirtyPrev",
          "package": "erlang",
          "signature": "MBox -\u003e String -\u003e String -\u003e ErlType -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-Mnesia.html#dirtyPrev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "dirtyPrev",
          "normalized": "MBox-\u003eString-\u003eString-\u003eErlType-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Prev",
          "signature": "MBox-\u003eString-\u003eString-\u003eErlType-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:dirtyPrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "dirtyRead",
          "package": "erlang",
          "signature": "MBox -\u003e String -\u003e String -\u003e ErlType -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-Mnesia.html#dirtyRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "dirtyRead",
          "normalized": "MBox-\u003eString-\u003eString-\u003eErlType-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Read",
          "signature": "MBox-\u003eString-\u003eString-\u003eErlType-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:dirtyRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "dirtySelect",
          "package": "erlang",
          "signature": "MBox -\u003e String -\u003e String -\u003e ErlType -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-Mnesia.html#dirtySelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "dirtySelect",
          "normalized": "MBox-\u003eString-\u003eString-\u003eErlType-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Select",
          "signature": "MBox-\u003eString-\u003eString-\u003eErlType-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:dirtySelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the names and addresses of all registered Erlang nodes.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "epmdGetNames",
          "package": "erlang",
          "signature": "IO [String]",
          "source": "src/Foreign-Erlang-Network.html#epmdGetNames",
          "type": "function"
        },
        "index": {
          "description": "Return the names and addresses of all registered Erlang nodes",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "epmdGetNames",
          "normalized": "IO[String]",
          "package": "erlang",
          "partial": "Get Names",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:epmdGetNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the port address of a named Erlang node.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "epmdGetPort",
          "package": "erlang",
          "signature": "String -\u003e IO Int",
          "source": "src/Foreign-Erlang-Network.html#epmdGetPort",
          "type": "function"
        },
        "index": {
          "description": "Return the port address of named Erlang node",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "epmdGetPort",
          "normalized": "String-\u003eIO Int",
          "package": "erlang",
          "partial": "Get Port",
          "signature": "String-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:epmdGetPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns (port, nodeType, protocol, vsnMax, vsnMin, name, extra)\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "epmdGetPortR4",
          "package": "erlang",
          "signature": "String -\u003e IO (Int, Int, Int, Int, Int, String, String)",
          "source": "src/Foreign-Erlang-Network.html#epmdGetPortR4",
          "type": "function"
        },
        "index": {
          "description": "Returns port nodeType protocol vsnMax vsnMin name extra",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "epmdGetPortR4",
          "normalized": "String-\u003eIO(Int,Int,Int,Int,Int,String,String)",
          "package": "erlang",
          "partial": "Get Port",
          "signature": "String-\u003eIO(Int,Int,Int,Int,Int,String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:epmdGetPortR4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "erlConnect",
          "package": "erlang",
          "signature": "String -\u003e String -\u003e IO (ErlSend, ErlRecv)",
          "source": "src/Foreign-Erlang-Network.html#erlConnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "erlConnect",
          "normalized": "String-\u003eString-\u003eIO(ErlSend,ErlRecv)",
          "package": "erlang",
          "partial": "Connect",
          "signature": "String-\u003eString-\u003eIO(ErlSend,ErlRecv)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:erlConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tuple (from erlang:now()) to seconds from Jan 1, 1970.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "erlangTimeToSeconds",
          "package": "erlang",
          "signature": "ErlType -\u003e a",
          "source": "src/Foreign-Erlang-Utilities.html#erlangTimeToSeconds",
          "type": "function"
        },
        "index": {
          "description": "Convert tuple from erlang now to seconds from Jan",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "erlangTimeToSeconds",
          "normalized": "ErlType-\u003ea",
          "package": "erlang",
          "partial": "Time To Seconds",
          "signature": "ErlType-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:erlangTimeToSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "fromErlang",
          "package": "erlang",
          "signature": "ErlType -\u003e a",
          "source": "src/Foreign-Erlang-Types.html#fromErlang",
          "type": "method"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "fromErlang",
          "normalized": "ErlType-\u003ea",
          "package": "erlang",
          "partial": "Erlang",
          "signature": "ErlType-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:fromErlang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egen_server:call(Pid, Msg)\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "genCall",
          "package": "erlang",
          "signature": "MBox -\u003e Node -\u003e Pid -\u003e a -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-GenServer.html#genCall",
          "type": "function"
        },
        "index": {
          "description": "gen server call Pid Msg",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "genCall",
          "normalized": "MBox-\u003eNode-\u003ePid-\u003ea-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Call",
          "signature": "MBox-\u003eNode-\u003ePid-\u003ea-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:genCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egen_server:cast(Pid, Msg)\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "genCast",
          "package": "erlang",
          "signature": "MBox -\u003e Node -\u003e Pid -\u003e a -\u003e IO ()",
          "source": "src/Foreign-Erlang-OTP-GenServer.html#genCast",
          "type": "function"
        },
        "index": {
          "description": "gen server cast Pid Msg",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "genCast",
          "normalized": "MBox-\u003eNode-\u003ePid-\u003ea-\u003eIO()",
          "package": "erlang",
          "partial": "Cast",
          "signature": "MBox-\u003eNode-\u003ePid-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:genCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "getA",
          "package": "erlang",
          "signature": "Int -\u003e Get [Char]",
          "source": "src/Foreign-Erlang-Types.html#getA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "getA",
          "normalized": "Int-\u003eGet[Char]",
          "package": "erlang",
          "signature": "Int-\u003eGet[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:getA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "getC",
          "package": "erlang",
          "signature": "Get Int",
          "source": "src/Foreign-Erlang-Types.html#getC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "getC",
          "package": "erlang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:getC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "getErl",
          "package": "erlang",
          "signature": "Get ErlType",
          "source": "src/Foreign-Erlang-Types.html#getErl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "getErl",
          "package": "erlang",
          "partial": "Erl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:getErl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "getN",
          "package": "erlang",
          "signature": "Get Int",
          "source": "src/Foreign-Erlang-Types.html#getN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "getN",
          "package": "erlang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:getN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "geta",
          "package": "erlang",
          "signature": "Int -\u003e Get [Word8]",
          "source": "src/Foreign-Erlang-Types.html#geta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "geta",
          "normalized": "Int-\u003eGet[Word]",
          "package": "erlang",
          "signature": "Int-\u003eGet[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:geta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "getn",
          "package": "erlang",
          "signature": "Get Int",
          "source": "src/Foreign-Erlang-Types.html#getn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "getn",
          "package": "erlang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:getn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive the next message addressed to this mailbox.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "mboxRecv",
          "package": "erlang",
          "signature": "MBox -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-Processes.html#mboxRecv",
          "type": "function"
        },
        "index": {
          "description": "Receive the next message addressed to this mailbox",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "mboxRecv",
          "normalized": "MBox-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Recv",
          "signature": "MBox-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:mboxRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a reply message.  That is, looks for the next message\n identified by the given reference.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "mboxRecv'",
          "package": "erlang",
          "signature": "MBox -\u003e ErlType -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-Processes.html#mboxRecv%27",
          "type": "function"
        },
        "index": {
          "description": "Receive reply message That is looks for the next message identified by the given reference",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "mboxRecv'",
          "normalized": "MBox-\u003eErlType-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Recv'",
          "signature": "MBox-\u003eErlType-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:mboxRecv-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a new unique object reference.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "mboxRef",
          "package": "erlang",
          "signature": "MBox -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-Processes.html#mboxRef",
          "type": "function"
        },
        "index": {
          "description": "Return new unique object reference",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "mboxRef",
          "normalized": "MBox-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Ref",
          "signature": "MBox-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:mboxRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the PID of the given mailbox.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "mboxSelf",
          "package": "erlang",
          "signature": "MBox -\u003e ErlType",
          "source": "src/Foreign-Erlang-Processes.html#mboxSelf",
          "type": "function"
        },
        "index": {
          "description": "Return the PID of the given mailbox",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "mboxSelf",
          "normalized": "MBox-\u003eErlType",
          "package": "erlang",
          "partial": "Self",
          "signature": "MBox-\u003eErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:mboxSelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e{Node, Pid} ! Msg.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "mboxSend",
          "package": "erlang",
          "signature": "MBox -\u003e Node -\u003e Pid -\u003e a -\u003e IO ()",
          "source": "src/Foreign-Erlang-Processes.html#mboxSend",
          "type": "function"
        },
        "index": {
          "description": "Node Pid Msg",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "mboxSend",
          "normalized": "MBox-\u003eNode-\u003ePid-\u003ea-\u003eIO()",
          "package": "erlang",
          "partial": "Send",
          "signature": "MBox-\u003eNode-\u003ePid-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:mboxSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "nth",
          "package": "erlang",
          "signature": "Int -\u003e ErlType -\u003e a",
          "source": "src/Foreign-Erlang-Types.html#nth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "nth",
          "normalized": "Int-\u003eErlType-\u003ea",
          "package": "erlang",
          "signature": "Int-\u003eErlType-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:nth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "putA",
          "package": "erlang",
          "signature": "String -\u003e Put",
          "source": "src/Foreign-Erlang-Types.html#putA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "putA",
          "normalized": "String-\u003ePut",
          "package": "erlang",
          "signature": "String-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:putA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "putC",
          "package": "erlang",
          "signature": "Int -\u003e Put",
          "source": "src/Foreign-Erlang-Types.html#putC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "putC",
          "normalized": "Int-\u003ePut",
          "package": "erlang",
          "signature": "Int-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:putC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "putErl",
          "package": "erlang",
          "signature": "ErlType -\u003e PutM ()",
          "source": "src/Foreign-Erlang-Types.html#putErl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "putErl",
          "normalized": "ErlType-\u003ePutM()",
          "package": "erlang",
          "partial": "Erl",
          "signature": "ErlType-\u003ePutM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:putErl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "putN",
          "package": "erlang",
          "signature": "Int -\u003e Put",
          "source": "src/Foreign-Erlang-Types.html#putN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "putN",
          "normalized": "Int-\u003ePut",
          "package": "erlang",
          "signature": "Int-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:putN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "puta",
          "package": "erlang",
          "signature": "[Word8] -\u003e Put",
          "source": "src/Foreign-Erlang-Types.html#puta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "puta",
          "normalized": "[Word]-\u003ePut",
          "package": "erlang",
          "signature": "[Word]-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:puta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "putn",
          "package": "erlang",
          "signature": "Int -\u003e Put",
          "source": "src/Foreign-Erlang-Types.html#putn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "putn",
          "normalized": "Int-\u003ePut",
          "package": "erlang",
          "signature": "Int-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:putn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erpc:call(Node, Module, Function, Arguments)\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "rpcCall",
          "package": "erlang",
          "signature": "MBox -\u003e Node -\u003e String -\u003e String -\u003e [ErlType] -\u003e IO ErlType",
          "source": "src/Foreign-Erlang-OTP-GenServer.html#rpcCall",
          "type": "function"
        },
        "index": {
          "description": "rpc call Node Module Function Arguments",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "rpcCall",
          "normalized": "MBox-\u003eNode-\u003eString-\u003eString-\u003e[ErlType]-\u003eIO ErlType",
          "package": "erlang",
          "partial": "Call",
          "signature": "MBox-\u003eNode-\u003eString-\u003eString-\u003e[ErlType]-\u003eIO ErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:rpcCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erpc:cast(Node, Module, Function, Arguments)\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "rpcCast",
          "package": "erlang",
          "signature": "MBox -\u003e Node -\u003e String -\u003e String -\u003e [ErlType] -\u003e IO ()",
          "source": "src/Foreign-Erlang-OTP-GenServer.html#rpcCast",
          "type": "function"
        },
        "index": {
          "description": "rpc cast Node Module Function Arguments",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "rpcCast",
          "normalized": "MBox-\u003eNode-\u003eString-\u003eString-\u003e[ErlType]-\u003eIO()",
          "package": "erlang",
          "partial": "Cast",
          "signature": "MBox-\u003eNode-\u003eString-\u003eString-\u003e[ErlType]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:rpcCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert seconds to an Erlang tuple representing time.\n\u003c/p\u003e",
          "module": "Foreign.Erlang",
          "name": "secondsToErlangTime",
          "package": "erlang",
          "signature": "a -\u003e ErlType",
          "source": "src/Foreign-Erlang-Utilities.html#secondsToErlangTime",
          "type": "function"
        },
        "index": {
          "description": "Convert seconds to an Erlang tuple representing time",
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "secondsToErlangTime",
          "normalized": "a-\u003eErlType",
          "package": "erlang",
          "partial": "To Erlang Time",
          "signature": "a-\u003eErlType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:secondsToErlangTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "tag",
          "package": "erlang",
          "signature": "Char -\u003e Put",
          "source": "src/Foreign-Erlang-Types.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "tag",
          "normalized": "Char-\u003ePut",
          "package": "erlang",
          "signature": "Char-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "toErlang",
          "package": "erlang",
          "signature": "a -\u003e ErlType",
          "source": "src/Foreign-Erlang-Types.html#toErlang",
          "type": "method"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "toErlang",
          "normalized": "a-\u003eErlType",
          "package": "erlang",
          "partial": "Erlang",
          "signature": "a-\u003eErlType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:toErlang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Erlang",
          "name": "toNetwork",
          "package": "erlang",
          "signature": "Int -\u003e Integer -\u003e [Word8]",
          "source": "src/Foreign-Erlang-Network.html#toNetwork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Erlang",
          "module": "Foreign.Erlang",
          "name": "toNetwork",
          "normalized": "Int-\u003eInteger-\u003e[Word]",
          "package": "erlang",
          "partial": "Network",
          "signature": "Int-\u003eInteger-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/erlang/docs/Foreign-Erlang.html#v:toNetwork"
      }
    }
  ]
]