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
        "word": "NineP"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing Binary serialization of 9P messages to and from lazy \n ByteStrings.\n\u003c/p\u003e\u003cp\u003eThis library does not currently provide any networking support or \n wrappers for easy to write clients or servers, though that may come \n with time as we decide the best way to implement these.\n\u003c/p\u003e\u003cp\u003e9P2000 messages are sent in little endian byte order rather than network byte order \n (big endian)\n\u003c/p\u003e\u003cp\u003eLightly tested against an Inferno operating\n system share with no authentication successfully.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.NineP",
          "name": "NineP",
          "package": "NineP",
          "source": "src/Data-NineP.html",
          "type": "module"
        },
        "index": {
          "description": "Module providing Binary serialization of messages to and from lazy ByteStrings This library does not currently provide any networking support or wrappers for easy to write clients or servers though that may come with time as we decide the best way to implement these P2000 messages are sent in little endian byte order rather than network byte order big endian Lightly tested against an Inferno operating system share with no authentication successfully",
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "NineP",
          "package": "NineP",
          "partial": "Nine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Bin",
          "package": "NineP",
          "source": "src/Data-NineP.html#Bin",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Bin",
          "package": "NineP",
          "partial": "Bin",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Bin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message envelope type for all 9P2000 messages\n\u003c/p\u003e",
          "module": "Data.NineP",
          "name": "Msg",
          "package": "NineP",
          "source": "src/Data-NineP.html#Msg",
          "type": "data"
        },
        "index": {
          "description": "The message envelope type for all P2000 messages",
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Msg",
          "package": "NineP",
          "partial": "Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Plan 9 Qid type.  See http:\u003cem/\u003e9p.cat-v.org for more information\n\u003c/p\u003e",
          "module": "Data.NineP",
          "name": "Qid",
          "package": "NineP",
          "source": "src/Data-NineP.html#Qid",
          "type": "data"
        },
        "index": {
          "description": "Plan Qid type See http p.cat-v.org for more information",
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Qid",
          "package": "NineP",
          "partial": "Qid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Qid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides information on a path entry at a 9P2000 server\n\u003c/p\u003e",
          "module": "Data.NineP",
          "name": "Stat",
          "package": "NineP",
          "source": "src/Data-NineP.html#Stat",
          "type": "data"
        },
        "index": {
          "description": "Provides information on path entry at P2000 server",
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Stat",
          "package": "NineP",
          "partial": "Stat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that enumerates all the valid \u003cem\u003e(and one invalid)\u003c/em\u003e message types in 9P2000\n\u003c/p\u003e",
          "module": "Data.NineP",
          "name": "Tag",
          "package": "NineP",
          "source": "src/Data-NineP.html#Tag",
          "type": "data"
        },
        "index": {
          "description": "type that enumerates all the valid and one invalid message types in P2000",
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tag",
          "package": "NineP",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable message type that encapsulates the valid kinds of messages in a 9P2000 payload\n\u003c/p\u003e",
          "module": "Data.NineP",
          "name": "VarMsg",
          "package": "NineP",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "data"
        },
        "index": {
          "description": "variable message type that encapsulates the valid kinds of messages in P2000 payload",
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "VarMsg",
          "package": "NineP",
          "partial": "Var Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:VarMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Msg",
          "package": "NineP",
          "signature": "Msg",
          "source": "src/Data-NineP.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Msg",
          "package": "NineP",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Qid",
          "package": "NineP",
          "signature": "Qid",
          "source": "src/Data-NineP.html#Qid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Qid",
          "package": "NineP",
          "partial": "Qid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Qid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rattach",
          "package": "NineP",
          "signature": "Rattach",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rattach",
          "package": "NineP",
          "partial": "Rattach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rattach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rauth",
          "package": "NineP",
          "signature": "Rauth",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rauth",
          "package": "NineP",
          "partial": "Rauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rauth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rclunk",
          "package": "NineP",
          "signature": "Rclunk",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rclunk",
          "package": "NineP",
          "partial": "Rclunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rclunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rcreate",
          "package": "NineP",
          "signature": "Rcreate",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rcreate",
          "package": "NineP",
          "partial": "Rcreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rcreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rerror",
          "package": "NineP",
          "signature": "Rerror",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rerror",
          "package": "NineP",
          "partial": "Rerror",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rflush",
          "package": "NineP",
          "signature": "Rflush",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rflush",
          "package": "NineP",
          "partial": "Rflush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rflush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Ropen",
          "package": "NineP",
          "signature": "Ropen",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Ropen",
          "package": "NineP",
          "partial": "Ropen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Ropen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rread",
          "package": "NineP",
          "signature": "Rread",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rread",
          "package": "NineP",
          "partial": "Rread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rremove",
          "package": "NineP",
          "signature": "Rremove",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rremove",
          "package": "NineP",
          "partial": "Rremove",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rremove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rstat",
          "package": "NineP",
          "signature": "Rstat",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rstat",
          "package": "NineP",
          "partial": "Rstat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rversion",
          "package": "NineP",
          "signature": "Rversion",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rversion",
          "package": "NineP",
          "partial": "Rversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rwalk",
          "package": "NineP",
          "signature": "Rwalk",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rwalk",
          "package": "NineP",
          "partial": "Rwalk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rwalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rwrite",
          "package": "NineP",
          "signature": "Rwrite",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rwrite",
          "package": "NineP",
          "partial": "Rwrite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rwrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Rwstat",
          "package": "NineP",
          "signature": "Rwstat",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Rwstat",
          "package": "NineP",
          "partial": "Rwstat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rwstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Stat",
          "package": "NineP",
          "signature": "Stat",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Stat",
          "package": "NineP",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRattach",
          "package": "NineP",
          "signature": "TRattach",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRattach",
          "package": "NineP",
          "partial": "TRattach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRattach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRauth",
          "package": "NineP",
          "signature": "TRauth",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRauth",
          "package": "NineP",
          "partial": "TRauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRauth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRclunk",
          "package": "NineP",
          "signature": "TRclunk",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRclunk",
          "package": "NineP",
          "partial": "TRclunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRclunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRcreate",
          "package": "NineP",
          "signature": "TRcreate",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRcreate",
          "package": "NineP",
          "partial": "TRcreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRcreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRerror",
          "package": "NineP",
          "signature": "TRerror",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRerror",
          "package": "NineP",
          "partial": "TRerror",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRflush",
          "package": "NineP",
          "signature": "TRflush",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRflush",
          "package": "NineP",
          "partial": "TRflush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRflush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRopen",
          "package": "NineP",
          "signature": "TRopen",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRopen",
          "package": "NineP",
          "partial": "TRopen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRopen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRread",
          "package": "NineP",
          "signature": "TRread",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRread",
          "package": "NineP",
          "partial": "TRread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRremove",
          "package": "NineP",
          "signature": "TRremove",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRremove",
          "package": "NineP",
          "partial": "TRremove",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRremove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRstat",
          "package": "NineP",
          "signature": "TRstat",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRstat",
          "package": "NineP",
          "partial": "TRstat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRversion",
          "package": "NineP",
          "signature": "TRversion",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRversion",
          "package": "NineP",
          "partial": "TRversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRwalk",
          "package": "NineP",
          "signature": "TRwalk",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRwalk",
          "package": "NineP",
          "partial": "TRwalk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRwalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRwrite",
          "package": "NineP",
          "signature": "TRwrite",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRwrite",
          "package": "NineP",
          "partial": "TRwrite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRwrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TRwstat",
          "package": "NineP",
          "signature": "TRwstat",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TRwstat",
          "package": "NineP",
          "partial": "TRwstat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRwstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTattach",
          "package": "NineP",
          "signature": "TTattach",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTattach",
          "package": "NineP",
          "partial": "TTattach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTattach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTauth",
          "package": "NineP",
          "signature": "TTauth",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTauth",
          "package": "NineP",
          "partial": "TTauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTauth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTclunk",
          "package": "NineP",
          "signature": "TTclunk",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTclunk",
          "package": "NineP",
          "partial": "TTclunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTclunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTcreate",
          "package": "NineP",
          "signature": "TTcreate",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTcreate",
          "package": "NineP",
          "partial": "TTcreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTcreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTflush",
          "package": "NineP",
          "signature": "TTflush",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTflush",
          "package": "NineP",
          "partial": "TTflush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTflush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTopen",
          "package": "NineP",
          "signature": "TTopen",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTopen",
          "package": "NineP",
          "partial": "TTopen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTopen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTread",
          "package": "NineP",
          "signature": "TTread",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTread",
          "package": "NineP",
          "partial": "TTread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTremove",
          "package": "NineP",
          "signature": "TTremove",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTremove",
          "package": "NineP",
          "partial": "TTremove",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTremove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTstat",
          "package": "NineP",
          "signature": "TTstat",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTstat",
          "package": "NineP",
          "partial": "TTstat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTversion",
          "package": "NineP",
          "signature": "TTversion",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTversion",
          "package": "NineP",
          "partial": "TTversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTwalk",
          "package": "NineP",
          "signature": "TTwalk",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTwalk",
          "package": "NineP",
          "partial": "TTwalk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTwalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTwrite",
          "package": "NineP",
          "signature": "TTwrite",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTwrite",
          "package": "NineP",
          "partial": "TTwrite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTwrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "TTwstat",
          "package": "NineP",
          "signature": "TTwstat",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "TTwstat",
          "package": "NineP",
          "partial": "TTwstat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTwstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Tattach",
          "package": "NineP",
          "signature": "Tattach",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tattach",
          "package": "NineP",
          "partial": "Tattach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tattach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Tauth",
          "package": "NineP",
          "signature": "Tauth",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tauth",
          "package": "NineP",
          "partial": "Tauth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tauth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Tclunk",
          "package": "NineP",
          "signature": "Tclunk",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tclunk",
          "package": "NineP",
          "partial": "Tclunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tclunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Tcreate",
          "package": "NineP",
          "signature": "Tcreate",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tcreate",
          "package": "NineP",
          "partial": "Tcreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tcreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Tflush",
          "package": "NineP",
          "signature": "Tflush",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tflush",
          "package": "NineP",
          "partial": "Tflush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tflush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Topen",
          "package": "NineP",
          "signature": "Topen",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Topen",
          "package": "NineP",
          "partial": "Topen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Topen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Tread",
          "package": "NineP",
          "signature": "Tread",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tread",
          "package": "NineP",
          "partial": "Tread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Tremove",
          "package": "NineP",
          "signature": "Tremove",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tremove",
          "package": "NineP",
          "partial": "Tremove",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tremove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Tstat",
          "package": "NineP",
          "signature": "Tstat",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tstat",
          "package": "NineP",
          "partial": "Tstat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Tversion",
          "package": "NineP",
          "signature": "Tversion",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Tversion",
          "package": "NineP",
          "partial": "Tversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Twalk",
          "package": "NineP",
          "signature": "Twalk",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Twalk",
          "package": "NineP",
          "partial": "Twalk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Twalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Twrite",
          "package": "NineP",
          "signature": "Twrite",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Twrite",
          "package": "NineP",
          "partial": "Twrite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Twrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "Twstat",
          "package": "NineP",
          "signature": "Twstat",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "Twstat",
          "package": "NineP",
          "partial": "Twstat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Twstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "XXX_TTerror",
          "package": "NineP",
          "signature": "XXX_TTerror",
          "source": "src/Data-NineP.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "XXX_TTerror",
          "package": "NineP",
          "partial": "XXX TTerror",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:XXX_TTerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "get",
          "package": "NineP",
          "signature": "Get a",
          "source": "src/Data-NineP.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "get",
          "package": "NineP",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor every messages type, runs a Get parser to decode that type of payload from the 9P2000 stream\n\u003c/p\u003e",
          "module": "Data.NineP",
          "name": "getVarMsg",
          "package": "NineP",
          "signature": "Tag -\u003e Get VarMsg",
          "source": "src/Data-NineP.html#getVarMsg",
          "type": "function"
        },
        "index": {
          "description": "For every messages type runs Get parser to decode that type of payload from the P2000 stream",
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "getVarMsg",
          "normalized": "Tag-\u003eGet VarMsg",
          "package": "NineP",
          "partial": "Var Msg",
          "signature": "Tag-\u003eGet VarMsg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:getVarMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "msg_body",
          "package": "NineP",
          "signature": "VarMsg",
          "source": "src/Data-NineP.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "msg_body",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:msg_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "msg_tag",
          "package": "NineP",
          "signature": "Word16",
          "source": "src/Data-NineP.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "msg_tag",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:msg_tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "msg_typ",
          "package": "NineP",
          "signature": "Tag",
          "source": "src/Data-NineP.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "msg_typ",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:msg_typ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "put",
          "package": "NineP",
          "signature": "a -\u003e Put",
          "source": "src/Data-NineP.html#put",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "put",
          "normalized": "a-\u003ePut",
          "package": "NineP",
          "signature": "a-\u003ePut",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor every lower level VarMsg type, encodes a full wrapper around that type for use with 9P2000 streams\n\u003c/p\u003e",
          "module": "Data.NineP",
          "name": "putVarMsg",
          "package": "NineP",
          "signature": "VarMsg -\u003e Put",
          "source": "src/Data-NineP.html#putVarMsg",
          "type": "function"
        },
        "index": {
          "description": "For every lower level VarMsg type encodes full wrapper around that type for use with P2000 streams",
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "putVarMsg",
          "normalized": "VarMsg-\u003ePut",
          "package": "NineP",
          "partial": "Var Msg",
          "signature": "VarMsg-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:putVarMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "qid_path",
          "package": "NineP",
          "signature": "Word64",
          "source": "src/Data-NineP.html#Qid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "qid_path",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:qid_path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "qid_typ",
          "package": "NineP",
          "signature": "Word8",
          "source": "src/Data-NineP.html#Qid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "qid_typ",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:qid_typ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "qid_vers",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#Qid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "qid_vers",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:qid_vers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "ra_aqid",
          "package": "NineP",
          "signature": "Qid",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "ra_aqid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:ra_aqid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "rat_qid",
          "package": "NineP",
          "signature": "Qid",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "rat_qid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rat_qid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "rcr_iounit",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "rcr_iounit",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rcr_iounit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "rcr_qid",
          "package": "NineP",
          "signature": "Qid",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "rcr_qid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rcr_qid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "re_ename",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "re_ename",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:re_ename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "ro_iounit",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "ro_iounit",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:ro_iounit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "ro_qid",
          "package": "NineP",
          "signature": "Qid",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "ro_qid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:ro_qid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "rrd_dat",
          "package": "NineP",
          "signature": "ByteString",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "rrd_dat",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rrd_dat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "rs_stat",
          "package": "NineP",
          "signature": "[Stat]",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "rs_stat",
          "normalized": "[Stat]",
          "package": "NineP",
          "signature": "[Stat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rs_stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "rv_msize",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "rv_msize",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rv_msize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "rv_version",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "rv_version",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rv_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "rw_count",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "rw_count",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rw_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "rw_wqid",
          "package": "NineP",
          "signature": "[Qid]",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "rw_wqid",
          "normalized": "[Qid]",
          "package": "NineP",
          "signature": "[Qid]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rw_wqid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_atime",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_atime",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_atime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_dev",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_dev",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_dev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_gid",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_gid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_gid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_length",
          "package": "NineP",
          "signature": "Word64",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_length",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_mode",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_mode",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_mtime",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_mtime",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_mtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_muid",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_muid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_muid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_name",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_name",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_qid",
          "package": "NineP",
          "signature": "Qid",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_qid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_qid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_typ",
          "package": "NineP",
          "signature": "Word16",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_typ",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_typ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "st_uid",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#Stat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "st_uid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_uid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tat_afid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tat_afid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tat_afid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tat_aname",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tat_aname",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tat_aname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tat_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tat_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tat_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tat_uname",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tat_uname",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tat_uname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tau_afid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tau_afid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tau_afid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tau_aname",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tau_aname",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tau_aname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tau_uname",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tau_uname",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tau_uname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tcl_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tcl_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcl_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tcr_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tcr_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcr_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tcr_mode",
          "package": "NineP",
          "signature": "Word8",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tcr_mode",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcr_mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tcr_name",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tcr_name",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcr_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tcr_perm",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tcr_perm",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcr_perm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tf_oldtag",
          "package": "NineP",
          "signature": "Word16",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tf_oldtag",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tf_oldtag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "to_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "to_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:to_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "to_mode",
          "package": "NineP",
          "signature": "Word8",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "to_mode",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:to_mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "trd_count",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "trd_count",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:trd_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "trd_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "trd_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:trd_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "trd_offset",
          "package": "NineP",
          "signature": "Word64",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "trd_offset",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:trd_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "trm_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "trm_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:trm_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "ts_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "ts_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:ts_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tv_msize",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tv_msize",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tv_msize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tv_version",
          "package": "NineP",
          "signature": "String",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tv_version",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tv_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tw_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tw_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tw_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tw_newfid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tw_newfid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tw_newfid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tw_wnames",
          "package": "NineP",
          "signature": "[String]",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tw_wnames",
          "normalized": "[String]",
          "package": "NineP",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tw_wnames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "twr_dat",
          "package": "NineP",
          "signature": "ByteString",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "twr_dat",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:twr_dat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "twr_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "twr_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:twr_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "twr_offset",
          "package": "NineP",
          "signature": "Word64",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "twr_offset",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:twr_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tws_fid",
          "package": "NineP",
          "signature": "Word32",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tws_fid",
          "package": "NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tws_fid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NineP",
          "name": "tws_stat",
          "package": "NineP",
          "signature": "[Stat]",
          "source": "src/Data-NineP.html#VarMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NineP",
          "module": "Data.NineP",
          "name": "tws_stat",
          "normalized": "[Stat]",
          "package": "NineP",
          "signature": "[Stat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tws_stat"
      }
    }
  ]
]