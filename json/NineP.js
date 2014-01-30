[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing Binary serialization of 9P messages to and from lazy \n ByteStrings.\n\u003c/p\u003e\u003cp\u003eThis library does not currently provide any networking support or \n wrappers for easy to write clients or servers, though that may come \n with time as we decide the best way to implement these.\n\u003c/p\u003e\u003cp\u003e9P2000 messages are sent in little endian byte order rather than network byte order \n (big endian)\n\u003c/p\u003e\u003cp\u003eLightly tested against an Inferno operating\n system share with no authentication successfully.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "module",
        "fct-source": "src/Data-NineP.html",
        "fct-type": "module",
        "title": "NineP"
      },
      "index": {
        "description": "Module providing Binary serialization of messages to and from lazy ByteStrings This library does not currently provide any networking support or wrappers for easy to write clients or servers though that may come with time as we decide the best way to implement these P2000 messages are sent in little endian byte order rather than network byte order big endian Lightly tested against an Inferno operating system share with no authentication successfully",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "NineP",
        "normalized": "",
        "package": "NineP",
        "partial": "Nine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Bin",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "class",
        "fct-source": "src/Data-NineP.html#Bin",
        "fct-type": "class",
        "title": "Bin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Bin",
        "normalized": "",
        "package": "NineP",
        "partial": "Bin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Msg",
      "description": {
        "fct-descr": "\u003cp\u003eThe message envelope type for all 9P2000 messages\n\u003c/p\u003e",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "data",
        "fct-source": "src/Data-NineP.html#Msg",
        "fct-type": "data",
        "title": "Msg"
      },
      "index": {
        "description": "The message envelope type for all P2000 messages",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Msg",
        "normalized": "",
        "package": "NineP",
        "partial": "Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Qid",
      "description": {
        "fct-descr": "\u003cp\u003eA Plan 9 Qid type.  See http:\u003cem/\u003e9p.cat-v.org for more information\n\u003c/p\u003e",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "data",
        "fct-source": "src/Data-NineP.html#Qid",
        "fct-type": "data",
        "title": "Qid"
      },
      "index": {
        "description": "Plan Qid type See http p.cat-v.org for more information",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Qid",
        "normalized": "",
        "package": "NineP",
        "partial": "Qid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Stat",
      "description": {
        "fct-descr": "\u003cp\u003eProvides information on a path entry at a 9P2000 server\n\u003c/p\u003e",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "data",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "data",
        "title": "Stat"
      },
      "index": {
        "description": "Provides information on path entry at P2000 server",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Stat",
        "normalized": "",
        "package": "NineP",
        "partial": "Stat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eA type that enumerates all the valid \u003cem\u003e(and one invalid)\u003c/em\u003e message types in 9P2000\n\u003c/p\u003e",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "data",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "type that enumerates all the valid and one invalid message types in P2000",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tag",
        "normalized": "",
        "package": "NineP",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#t:VarMsg",
      "description": {
        "fct-descr": "\u003cp\u003eA variable message type that encapsulates the valid kinds of messages in a 9P2000 payload\n\u003c/p\u003e",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "data",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "data",
        "title": "VarMsg"
      },
      "index": {
        "description": "variable message type that encapsulates the valid kinds of messages in P2000 payload",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "VarMsg",
        "normalized": "",
        "package": "NineP",
        "partial": "Var Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Msg",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Msg",
        "fct-source": "src/Data-NineP.html#Msg",
        "fct-type": "function",
        "title": "Msg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Msg",
        "normalized": "",
        "package": "NineP",
        "partial": "Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Qid",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Qid",
        "fct-source": "src/Data-NineP.html#Qid",
        "fct-type": "function",
        "title": "Qid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Qid",
        "normalized": "",
        "package": "NineP",
        "partial": "Qid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rattach",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rattach",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rattach"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rattach",
        "normalized": "",
        "package": "NineP",
        "partial": "Rattach",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rauth",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rauth",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rauth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rauth",
        "normalized": "",
        "package": "NineP",
        "partial": "Rauth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rclunk",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rclunk",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rclunk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rclunk",
        "normalized": "",
        "package": "NineP",
        "partial": "Rclunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rcreate",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rcreate",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rcreate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rcreate",
        "normalized": "",
        "package": "NineP",
        "partial": "Rcreate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rerror",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rerror",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rerror"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rerror",
        "normalized": "",
        "package": "NineP",
        "partial": "Rerror",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rflush",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rflush",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rflush"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rflush",
        "normalized": "",
        "package": "NineP",
        "partial": "Rflush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Ropen",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Ropen",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Ropen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Ropen",
        "normalized": "",
        "package": "NineP",
        "partial": "Ropen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rread",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rread",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rread"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rread",
        "normalized": "",
        "package": "NineP",
        "partial": "Rread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rremove",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rremove",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rremove"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rremove",
        "normalized": "",
        "package": "NineP",
        "partial": "Rremove",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rstat",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rstat",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rstat",
        "normalized": "",
        "package": "NineP",
        "partial": "Rstat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rversion",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rversion",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rversion",
        "normalized": "",
        "package": "NineP",
        "partial": "Rversion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rwalk",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rwalk",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rwalk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rwalk",
        "normalized": "",
        "package": "NineP",
        "partial": "Rwalk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rwrite",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rwrite",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rwrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rwrite",
        "normalized": "",
        "package": "NineP",
        "partial": "Rwrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Rwstat",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Rwstat",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Rwstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Rwstat",
        "normalized": "",
        "package": "NineP",
        "partial": "Rwstat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Stat",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Stat",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "Stat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Stat",
        "normalized": "",
        "package": "NineP",
        "partial": "Stat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRattach",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRattach",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRattach"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRattach",
        "normalized": "",
        "package": "NineP",
        "partial": "TRattach",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRauth",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRauth",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRauth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRauth",
        "normalized": "",
        "package": "NineP",
        "partial": "TRauth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRclunk",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRclunk",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRclunk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRclunk",
        "normalized": "",
        "package": "NineP",
        "partial": "TRclunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRcreate",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRcreate",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRcreate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRcreate",
        "normalized": "",
        "package": "NineP",
        "partial": "TRcreate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRerror",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRerror",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRerror"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRerror",
        "normalized": "",
        "package": "NineP",
        "partial": "TRerror",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRflush",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRflush",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRflush"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRflush",
        "normalized": "",
        "package": "NineP",
        "partial": "TRflush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRopen",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRopen",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRopen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRopen",
        "normalized": "",
        "package": "NineP",
        "partial": "TRopen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRread",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRread",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRread"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRread",
        "normalized": "",
        "package": "NineP",
        "partial": "TRread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRremove",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRremove",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRremove"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRremove",
        "normalized": "",
        "package": "NineP",
        "partial": "TRremove",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRstat",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRstat",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRstat",
        "normalized": "",
        "package": "NineP",
        "partial": "TRstat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRversion",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRversion",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRversion",
        "normalized": "",
        "package": "NineP",
        "partial": "TRversion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRwalk",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRwalk",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRwalk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRwalk",
        "normalized": "",
        "package": "NineP",
        "partial": "TRwalk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRwrite",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRwrite",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRwrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRwrite",
        "normalized": "",
        "package": "NineP",
        "partial": "TRwrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TRwstat",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TRwstat",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TRwstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TRwstat",
        "normalized": "",
        "package": "NineP",
        "partial": "TRwstat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTattach",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTattach",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTattach"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTattach",
        "normalized": "",
        "package": "NineP",
        "partial": "TTattach",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTauth",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTauth",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTauth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTauth",
        "normalized": "",
        "package": "NineP",
        "partial": "TTauth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTclunk",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTclunk",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTclunk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTclunk",
        "normalized": "",
        "package": "NineP",
        "partial": "TTclunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTcreate",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTcreate",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTcreate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTcreate",
        "normalized": "",
        "package": "NineP",
        "partial": "TTcreate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTflush",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTflush",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTflush"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTflush",
        "normalized": "",
        "package": "NineP",
        "partial": "TTflush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTopen",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTopen",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTopen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTopen",
        "normalized": "",
        "package": "NineP",
        "partial": "TTopen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTread",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTread",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTread"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTread",
        "normalized": "",
        "package": "NineP",
        "partial": "TTread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTremove",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTremove",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTremove"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTremove",
        "normalized": "",
        "package": "NineP",
        "partial": "TTremove",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTstat",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTstat",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTstat",
        "normalized": "",
        "package": "NineP",
        "partial": "TTstat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTversion",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTversion",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTversion",
        "normalized": "",
        "package": "NineP",
        "partial": "TTversion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTwalk",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTwalk",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTwalk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTwalk",
        "normalized": "",
        "package": "NineP",
        "partial": "TTwalk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTwrite",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTwrite",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTwrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTwrite",
        "normalized": "",
        "package": "NineP",
        "partial": "TTwrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:TTwstat",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "TTwstat",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "TTwstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "TTwstat",
        "normalized": "",
        "package": "NineP",
        "partial": "TTwstat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tattach",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tattach",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Tattach"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tattach",
        "normalized": "",
        "package": "NineP",
        "partial": "Tattach",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tauth",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tauth",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Tauth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tauth",
        "normalized": "",
        "package": "NineP",
        "partial": "Tauth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tclunk",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tclunk",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Tclunk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tclunk",
        "normalized": "",
        "package": "NineP",
        "partial": "Tclunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tcreate",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tcreate",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Tcreate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tcreate",
        "normalized": "",
        "package": "NineP",
        "partial": "Tcreate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tflush",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tflush",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Tflush"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tflush",
        "normalized": "",
        "package": "NineP",
        "partial": "Tflush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Topen",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Topen",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Topen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Topen",
        "normalized": "",
        "package": "NineP",
        "partial": "Topen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tread",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tread",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Tread"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tread",
        "normalized": "",
        "package": "NineP",
        "partial": "Tread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tremove",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tremove",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Tremove"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tremove",
        "normalized": "",
        "package": "NineP",
        "partial": "Tremove",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tstat",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tstat",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Tstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tstat",
        "normalized": "",
        "package": "NineP",
        "partial": "Tstat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Tversion",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tversion",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Tversion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Tversion",
        "normalized": "",
        "package": "NineP",
        "partial": "Tversion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Twalk",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Twalk",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Twalk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Twalk",
        "normalized": "",
        "package": "NineP",
        "partial": "Twalk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Twrite",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Twrite",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Twrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Twrite",
        "normalized": "",
        "package": "NineP",
        "partial": "Twrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:Twstat",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Twstat",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "Twstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "Twstat",
        "normalized": "",
        "package": "NineP",
        "partial": "Twstat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:XXX_TTerror",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "XXX_TTerror",
        "fct-source": "src/Data-NineP.html#Tag",
        "fct-type": "function",
        "title": "XXX_TTerror"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "XXX_TTerror",
        "normalized": "",
        "package": "NineP",
        "partial": "XXX TTerror",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:get",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Get a",
        "fct-source": "src/Data-NineP.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "get",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:getVarMsg",
      "description": {
        "fct-descr": "\u003cp\u003eFor every messages type, runs a Get parser to decode that type of payload from the 9P2000 stream\n\u003c/p\u003e",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tag -\u003e Get VarMsg",
        "fct-source": "src/Data-NineP.html#getVarMsg",
        "fct-type": "function",
        "title": "getVarMsg"
      },
      "index": {
        "description": "For every messages type runs Get parser to decode that type of payload from the P2000 stream",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "getVarMsg",
        "normalized": "Tag-\u003eGet VarMsg",
        "package": "NineP",
        "partial": "Var Msg",
        "signature": "Tag-\u003eGet VarMsg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:msg_body",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "VarMsg",
        "fct-source": "src/Data-NineP.html#Msg",
        "fct-type": "function",
        "title": "msg_body"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "msg_body",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:msg_tag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word16",
        "fct-source": "src/Data-NineP.html#Msg",
        "fct-type": "function",
        "title": "msg_tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "msg_tag",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:msg_typ",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Tag",
        "fct-source": "src/Data-NineP.html#Msg",
        "fct-type": "function",
        "title": "msg_typ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "msg_typ",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:put",
      "description": {
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "a -\u003e Put",
        "fct-source": "src/Data-NineP.html#put",
        "fct-type": "method",
        "title": "put"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "put",
        "normalized": "a-\u003ePut",
        "package": "NineP",
        "partial": "",
        "signature": "a-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:putVarMsg",
      "description": {
        "fct-descr": "\u003cp\u003eFor every lower level VarMsg type, encodes a full wrapper around that type for use with 9P2000 streams\n\u003c/p\u003e",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "VarMsg -\u003e Put",
        "fct-source": "src/Data-NineP.html#putVarMsg",
        "fct-type": "function",
        "title": "putVarMsg"
      },
      "index": {
        "description": "For every lower level VarMsg type encodes full wrapper around that type for use with P2000 streams",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "putVarMsg",
        "normalized": "VarMsg-\u003ePut",
        "package": "NineP",
        "partial": "Var Msg",
        "signature": "VarMsg-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:qid_path",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word64",
        "fct-source": "src/Data-NineP.html#Qid",
        "fct-type": "function",
        "title": "qid_path"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "qid_path",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:qid_typ",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word8",
        "fct-source": "src/Data-NineP.html#Qid",
        "fct-type": "function",
        "title": "qid_typ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "qid_typ",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:qid_vers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#Qid",
        "fct-type": "function",
        "title": "qid_vers"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "qid_vers",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:ra_aqid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Qid",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "ra_aqid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "ra_aqid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rat_qid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Qid",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "rat_qid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "rat_qid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rcr_iounit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "rcr_iounit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "rcr_iounit",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rcr_qid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Qid",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "rcr_qid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "rcr_qid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:re_ename",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "re_ename"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "re_ename",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:ro_iounit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "ro_iounit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "ro_iounit",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:ro_qid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Qid",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "ro_qid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "ro_qid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rrd_dat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "rrd_dat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "rrd_dat",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rs_stat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "[Stat]",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "rs_stat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "rs_stat",
        "normalized": "[Stat]",
        "package": "NineP",
        "partial": "",
        "signature": "[Stat]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rv_msize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "rv_msize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "rv_msize",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rv_version",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "rv_version"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "rv_version",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rw_count",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "rw_count"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "rw_count",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:rw_wqid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "[Qid]",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "rw_wqid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "rw_wqid",
        "normalized": "[Qid]",
        "package": "NineP",
        "partial": "",
        "signature": "[Qid]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_atime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_atime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_atime",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_dev",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_dev"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_dev",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_gid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_gid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_gid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_length",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word64",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_length",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_mode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_mode",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_mtime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_mtime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_mtime",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_muid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_muid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_muid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_name",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_qid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Qid",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_qid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_qid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_typ",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word16",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_typ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_typ",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:st_uid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#Stat",
        "fct-type": "function",
        "title": "st_uid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "st_uid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tat_afid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tat_afid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tat_afid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tat_aname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tat_aname"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tat_aname",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tat_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tat_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tat_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tat_uname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tat_uname"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tat_uname",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tau_afid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tau_afid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tau_afid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tau_aname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tau_aname"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tau_aname",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tau_uname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tau_uname"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tau_uname",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcl_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tcl_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tcl_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcr_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tcr_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tcr_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcr_mode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word8",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tcr_mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tcr_mode",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcr_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tcr_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tcr_name",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tcr_perm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tcr_perm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tcr_perm",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tf_oldtag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word16",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tf_oldtag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tf_oldtag",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:to_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "to_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "to_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:to_mode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word8",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "to_mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "to_mode",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:trd_count",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "trd_count"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "trd_count",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:trd_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "trd_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "trd_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:trd_offset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word64",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "trd_offset"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "trd_offset",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:trm_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "trm_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "trm_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:ts_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "ts_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "ts_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tv_msize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tv_msize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tv_msize",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tv_version",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "String",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tv_version"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tv_version",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tw_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tw_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tw_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tw_newfid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tw_newfid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tw_newfid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tw_wnames",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "[String]",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tw_wnames"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tw_wnames",
        "normalized": "[String]",
        "package": "NineP",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:twr_dat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "twr_dat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "twr_dat",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:twr_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "twr_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "twr_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:twr_offset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word64",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "twr_offset"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "twr_offset",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tws_fid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "Word32",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tws_fid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tws_fid",
        "normalized": "",
        "package": "NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/NineP/docs/Data-NineP.html#v:tws_stat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.NineP",
        "fct-package": "NineP",
        "fct-signature": "[Stat]",
        "fct-source": "src/Data-NineP.html#VarMsg",
        "fct-type": "function",
        "title": "tws_stat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data NineP",
        "module": "Data.NineP",
        "name": "tws_stat",
        "normalized": "[Stat]",
        "package": "NineP",
        "partial": "",
        "signature": "[Stat]"
      }
    }
  }
]