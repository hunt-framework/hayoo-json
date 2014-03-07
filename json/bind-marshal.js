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
        "word": "bind-marshal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Base",
          "name": "Base",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Base",
          "module": "Bind.Marshal.Action.Base",
          "name": "Base",
          "package": "bind-marshal",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Base",
          "name": "BufferRegion",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Base.html#BufferRegion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Base",
          "module": "Bind.Marshal.Action.Base",
          "name": "BufferRegion",
          "package": "bind-marshal",
          "partial": "Buffer Region",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Base.html#t:BufferRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll actions have a buffering requirement. In the case of an action with a static data model the\n buffer requirement is the memory required by the marshaled data.\n XXX: All actions? Maybe easier to just have a StaticBufferReq that is only defined for static\n buffer actions.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Action.Base",
          "name": "BufferReq",
          "package": "bind-marshal",
          "signature": "BufferReq",
          "type": "function"
        },
        "index": {
          "description": "All actions have buffering requirement In the case of an action with static data model the buffer requirement is the memory required by the marshaled data XXX All actions Maybe easier to just have StaticBufferReq that is only defined for static buffer actions",
          "hierarchy": "Bind Marshal Action Base",
          "module": "Bind.Marshal.Action.Base",
          "name": "BufferReq",
          "package": "bind-marshal",
          "partial": "Buffer Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Base.html#t:BufferReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Base",
          "name": "Iter",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Base.html#Iter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Base",
          "module": "Bind.Marshal.Action.Base",
          "name": "Iter",
          "package": "bind-marshal",
          "partial": "Iter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Base.html#t:Iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Base",
          "name": "BufferRegion",
          "package": "bind-marshal",
          "signature": "BufferRegion",
          "source": "src/Bind-Marshal-Action-Base.html#BufferRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Base",
          "module": "Bind.Marshal.Action.Base",
          "name": "BufferRegion",
          "package": "bind-marshal",
          "partial": "Buffer Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Base.html#v:BufferRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Base",
          "name": "buffer_region_end",
          "package": "bind-marshal",
          "signature": "BufferRegion tag -\u003e BytePtr",
          "source": "src/Bind-Marshal-Action-Base.html#buffer_region_end",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Base",
          "module": "Bind.Marshal.Action.Base",
          "name": "buffer_region_end",
          "normalized": "BufferRegion a-\u003eBytePtr",
          "package": "bind-marshal",
          "signature": "BufferRegion tag-\u003eBytePtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Base.html#v:buffer_region_end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Base",
          "name": "buffer_region_size",
          "package": "bind-marshal",
          "signature": "Size",
          "source": "src/Bind-Marshal-Action-Base.html#BufferRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Base",
          "module": "Bind.Marshal.Action.Base",
          "name": "buffer_region_size",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Base.html#v:buffer_region_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Base",
          "name": "buffer_region_start",
          "package": "bind-marshal",
          "signature": "BytePtr",
          "source": "src/Bind-Marshal-Action-Base.html#BufferRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Base",
          "module": "Bind.Marshal.Action.Base",
          "name": "buffer_region_start",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Base.html#v:buffer_region_start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Base",
          "name": "pop_bytes",
          "package": "bind-marshal",
          "signature": "BufferRegion tag -\u003e Size -\u003e BufferRegion tag",
          "source": "src/Bind-Marshal-Action-Base.html#pop_bytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Base",
          "module": "Bind.Marshal.Action.Base",
          "name": "pop_bytes",
          "normalized": "BufferRegion a-\u003eSize-\u003eBufferRegion a",
          "package": "bind-marshal",
          "signature": "BufferRegion tag-\u003eSize-\u003eBufferRegion tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Base.html#v:pop_bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "Dynamic",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Dynamic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "Dynamic",
          "package": "bind-marshal",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "BDIter",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Dynamic.html#BDIter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "BDIter",
          "package": "bind-marshal",
          "partial": "BDIter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#t:BDIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "BufferDelegate",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Dynamic.html#BufferDelegate",
          "type": "class"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "BufferDelegate",
          "package": "bind-marshal",
          "partial": "Buffer Delegate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#t:BufferDelegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dynamic memory action a buffer handler action optionally paired with a statically defined pre\n buffer action and/or post buffer action.\n\u003c/p\u003e\u003cp\u003eA pre buffer action exists iff the type level pre buffer size requirement is Open n.\n A post buffer action exists iff the type level post buffer size requirement is Open n.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "DynAction",
          "package": "bind-marshal",
          "signature": "DynAction",
          "type": "function"
        },
        "index": {
          "description": "dynamic memory action buffer handler action optionally paired with statically defined pre buffer action and or post buffer action pre buffer action exists iff the type level pre buffer size requirement is Open post buffer action exists iff the type level post buffer size requirement is Open",
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "DynAction",
          "package": "bind-marshal",
          "partial": "Dyn Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#t:DynAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn open buffering requirement means that the pre-buffering or post-buffering requirement is not\n handled by the dynamic memory action.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "Open",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Dynamic.html#Open",
          "type": "data"
        },
        "index": {
          "description": "An open buffering requirement means that the pre-buffering or post-buffering requirement is not handled by the dynamic memory action",
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "Open",
          "package": "bind-marshal",
          "partial": "Open",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#t:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll Dynamic memory actions have either a sealed buffer size requirement or an open buffer size\n requirement. \n\u003c/p\u003e",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "Sealed",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Dynamic.html#Sealed",
          "type": "data"
        },
        "index": {
          "description": "All Dynamic memory actions have either sealed buffer size requirement or an open buffer size requirement",
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "Sealed",
          "package": "bind-marshal",
          "partial": "Sealed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#t:Sealed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "BDIter",
          "package": "bind-marshal",
          "signature": "BDIter",
          "source": "src/Bind-Marshal-Action-Dynamic.html#BDIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "BDIter",
          "package": "bind-marshal",
          "partial": "BDIter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#v:BDIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "buffer_delegate",
          "package": "bind-marshal",
          "signature": "bd",
          "source": "src/Bind-Marshal-Action-Dynamic.html#BDIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "buffer_delegate",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#v:buffer_delegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "bytes_final",
          "package": "bind-marshal",
          "signature": "BDIter bd -\u003e Size",
          "source": "src/Bind-Marshal-Action-Dynamic.html#bytes_final",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "bytes_final",
          "normalized": "BDIter a-\u003eSize",
          "package": "bind-marshal",
          "signature": "BDIter bd-\u003eSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#v:bytes_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "curr_addr",
          "package": "bind-marshal",
          "signature": "Addr#",
          "source": "src/Bind-Marshal-Action-Dynamic.html#BDIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "curr_addr",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#v:curr_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "finalize_region",
          "package": "bind-marshal",
          "signature": "BDIter buffer_delegate -\u003e IO buffer_delegate",
          "source": "src/Bind-Marshal-Action-Dynamic.html#finalize_region",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "finalize_region",
          "normalized": "BDIter a-\u003eIO a",
          "package": "bind-marshal",
          "signature": "BDIter buffer_delegate-\u003eIO buffer_delegate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#v:finalize_region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "gen_region",
          "package": "bind-marshal",
          "signature": "Size -\u003e buffer_delegate -\u003e IO (BDIter buffer_delegate)",
          "source": "src/Bind-Marshal-Action-Dynamic.html#gen_region",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "gen_region",
          "normalized": "Size-\u003ea-\u003eIO(BDIter a)",
          "package": "bind-marshal",
          "signature": "Size-\u003ebuffer_delegate-\u003eIO(BDIter buffer_delegate)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#v:gen_region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "max_bytes_avail",
          "package": "bind-marshal",
          "signature": "Size",
          "source": "src/Bind-Marshal-Action-Dynamic.html#BDIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "max_bytes_avail",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#v:max_bytes_avail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "max_bytes_final",
          "package": "bind-marshal",
          "signature": "Size",
          "source": "src/Bind-Marshal-Action-Dynamic.html#BDIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "max_bytes_final",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#v:max_bytes_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "start_addr",
          "package": "bind-marshal",
          "signature": "Addr#",
          "source": "src/Bind-Marshal-Action-Dynamic.html#BDIter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Dynamic",
          "module": "Bind.Marshal.Action.Dynamic",
          "name": "start_addr",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Dynamic.html#v:start_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Monad.Static",
          "name": "Static",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Monad-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Monad Static",
          "module": "Bind.Marshal.Action.Monad.Static",
          "name": "Static",
          "package": "bind-marshal",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Monad-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Monad.Static",
          "name": "static_return",
          "package": "bind-marshal",
          "signature": "a -\u003e StaticMemAction tag D0 a",
          "source": "src/Bind-Marshal-Action-Monad-Static.html#static_return",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Monad Static",
          "module": "Bind.Marshal.Action.Monad.Static",
          "name": "static_return",
          "normalized": "a-\u003eStaticMemAction b D a",
          "package": "bind-marshal",
          "signature": "a-\u003eStaticMemAction tag D a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Monad-Static.html#v:static_return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Monad",
          "name": "Monad",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Monad",
          "module": "Bind.Marshal.Action.Monad",
          "name": "Monad",
          "package": "bind-marshal",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an action to a sealed dynamic memory action value. Possibly inserts gen_region or\n finalize_region passes.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Action.Monad",
          "name": "SealedDynAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Monad.html#SealedDynAction",
          "type": "class"
        },
        "index": {
          "description": "Converts an action to sealed dynamic memory action value Possibly inserts gen region or finalize region passes",
          "hierarchy": "Bind Marshal Action Monad",
          "module": "Bind.Marshal.Action.Monad",
          "name": "SealedDynAction",
          "package": "bind-marshal",
          "partial": "Sealed Dyn Action",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Monad.html#t:SealedDynAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Monad",
          "name": "dyn_action",
          "package": "bind-marshal",
          "signature": "action a -\u003e DynAction Sealed Sealed Sealed bd (DynActionTag action) a",
          "source": "src/Bind-Marshal-Action-Monad.html#dyn_action",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Monad",
          "module": "Bind.Marshal.Action.Monad",
          "name": "dyn_action",
          "normalized": "a b-\u003eDynAction Sealed Sealed Sealed c(DynActionTag a)b",
          "package": "bind-marshal",
          "signature": "action a-\u003eDynAction Sealed Sealed Sealed bd(DynActionTag action)a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Monad.html#v:dyn_action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Monad",
          "name": "dyn_fail",
          "package": "bind-marshal",
          "signature": "String -\u003e DynAction Sealed Sealed Sealed bd tag a",
          "source": "src/Bind-Marshal-Action-Monad.html#dyn_fail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Monad",
          "module": "Bind.Marshal.Action.Monad",
          "name": "dyn_fail",
          "normalized": "String-\u003eDynAction Sealed Sealed Sealed a b c",
          "package": "bind-marshal",
          "signature": "String-\u003eDynAction Sealed Sealed Sealed bd tag a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Monad.html#v:dyn_fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Monad",
          "name": "resolve_iter",
          "package": "bind-marshal",
          "signature": "Size -\u003e BDIter bd -\u003e IO (BDIter bd)",
          "source": "src/Bind-Marshal-Action-Monad.html#resolve_iter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Monad",
          "module": "Bind.Marshal.Action.Monad",
          "name": "resolve_iter",
          "normalized": "Size-\u003eBDIter a-\u003eIO(BDIter a)",
          "package": "bind-marshal",
          "signature": "Size-\u003eBDIter bd-\u003eIO(BDIter bd)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Monad.html#v:resolve_iter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Monad",
          "name": "returnM_v_bd",
          "package": "bind-marshal",
          "signature": "a -\u003e BDIter bd -\u003e IO (a, BDIter bd)",
          "source": "src/Bind-Marshal-Action-Monad.html#returnM_v_bd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Monad",
          "module": "Bind.Marshal.Action.Monad",
          "name": "returnM_v_bd",
          "normalized": "a-\u003eBDIter b-\u003eIO(a,BDIter b)",
          "package": "bind-marshal",
          "signature": "a-\u003eBDIter bd-\u003eIO(a,BDIter bd)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Monad.html#v:returnM_v_bd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Monad",
          "name": "returnM_v_i",
          "package": "bind-marshal",
          "signature": "a -\u003e Iter -\u003e IO (a, Iter)",
          "source": "src/Bind-Marshal-Action-Monad.html#returnM_v_i",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Monad",
          "module": "Bind.Marshal.Action.Monad",
          "name": "returnM_v_i",
          "normalized": "a-\u003eIter-\u003eIO(a,Iter)",
          "package": "bind-marshal",
          "signature": "a-\u003eIter-\u003eIO(a,Iter)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Monad.html#v:returnM_v_i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA memory action that operates on a statically sized buffer.\n -\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bind.Marshal.Action.Static",
          "name": "Static",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Static.html",
          "type": "module"
        },
        "index": {
          "description": "memory action that operates on statically sized buffer",
          "hierarchy": "Bind Marshal Action Static",
          "module": "Bind.Marshal.Action.Static",
          "name": "Static",
          "package": "bind-marshal",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Static",
          "name": "StaticIter",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Static.html#StaticIter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Static",
          "module": "Bind.Marshal.Action.Static",
          "name": "StaticIter",
          "package": "bind-marshal",
          "partial": "Static Iter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Static.html#t:StaticIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA buffer static memory action. When executed:\n\u003c/p\u003e",
          "module": "Bind.Marshal.Action.Static",
          "name": "StaticMemAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action-Static.html#StaticMemAction",
          "type": "newtype"
        },
        "index": {
          "description": "buffer static memory action When executed",
          "hierarchy": "Bind Marshal Action Static",
          "module": "Bind.Marshal.Action.Static",
          "name": "StaticMemAction",
          "package": "bind-marshal",
          "partial": "Static Mem Action",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Static.html#t:StaticMemAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Static",
          "name": "StaticMemAction",
          "package": "bind-marshal",
          "signature": "StaticMemAction",
          "source": "src/Bind-Marshal-Action-Static.html#StaticMemAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Static",
          "module": "Bind.Marshal.Action.Static",
          "name": "StaticMemAction",
          "package": "bind-marshal",
          "partial": "Static Mem Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Static.html#v:StaticMemAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Static",
          "name": "io_eval_static",
          "package": "bind-marshal",
          "signature": "StaticMemAction tag size a -\u003e Iter -\u003e IO (a, Iter)",
          "source": "src/Bind-Marshal-Action-Static.html#io_eval_static",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Static",
          "module": "Bind.Marshal.Action.Static",
          "name": "io_eval_static",
          "normalized": "StaticMemAction a b c-\u003eIter-\u003eIO(c,Iter)",
          "package": "bind-marshal",
          "signature": "StaticMemAction tag size a-\u003eIter-\u003eIO(a,Iter)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Static.html#v:io_eval_static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Static",
          "name": "static_eval",
          "package": "bind-marshal",
          "signature": "forall c.  (a -\u003e StaticIter c) -\u003e (String -\u003e IO c) -\u003e StaticIter c",
          "source": "src/Bind-Marshal-Action-Static.html#StaticMemAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Static",
          "module": "Bind.Marshal.Action.Static",
          "name": "static_eval",
          "normalized": "a b(c-\u003eStaticIter d)-\u003e(String-\u003eIO d)-\u003eStaticIter d",
          "package": "bind-marshal",
          "signature": "forall c.(a-\u003eStaticIter c)-\u003e(String-\u003eIO c)-\u003eStaticIter c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Static.html#v:static_eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action.Static",
          "name": "static_replicateM",
          "package": "bind-marshal",
          "signature": "n -\u003e StaticMemAction tag size_1 a -\u003e StaticMemAction tag size_2 [a]",
          "source": "src/Bind-Marshal-Action-Static.html#static_replicateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Action Static",
          "module": "Bind.Marshal.Action.Static",
          "name": "static_replicateM",
          "normalized": "a-\u003eStaticMemAction b c d-\u003eStaticMemAction b c[d]",
          "package": "bind-marshal",
          "signature": "n-\u003eStaticMemAction tag size_ a-\u003eStaticMemAction tag size_[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action-Static.html#v:static_replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Action",
          "name": "Action",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Action.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal Action",
          "module": "Bind.Marshal.Action",
          "name": "Action",
          "package": "bind-marshal",
          "partial": "Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Action.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll rights reserved.\n\u003c/p\u003e\u003cp\u003eRedistribution and use in source and binary forms, with or without modification, are permitted\n provided that the following conditions are met:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Redistributions of source code must retain the above copyright notice, this list of\n     conditions and the following disclaimer.  \n     * Redistributions in binary form must reproduce the above copyright notice, this list of\n     conditions and the following disclaimer in the documentation and/or other materials provided\n     with the distribution.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \u003ca\u003eAS IS\u003c/a\u003e AND ANY EXPRESS OR\n  IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND\n  FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR\n  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR\n  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR\n  SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR\n  OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE\n  POSSIBILITY OF SUCH DAMAGE.\n\u003c/p\u003e\u003cp\u003emonad-param Maintainer  :  Edward Kmett \u003ca\u003eekmett@gmail.com\u003c/a\u003e\n Bind.Marshal Maintainer  :  Corey O'Connor \u003ca\u003ecoreyoconnor@gmail.com\u003c/a\u003e\n Stability   :  experimental\n Portability :  non-portable (requires the kitchen sink)\n\u003c/p\u003e\u003cp\u003eImplements a notion of parameterized monad by varying the monad itself, this lets us avoid having\n to carry a parameter around for monads that do not need it, and we can rederive the normal notion\n of a parameterized monad from this variation for those that do.  The signature of \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e costs us\n type inference for the types of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e, so we restore that by defining \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e as\n the unit of the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e as the unit of the trivial bottom monad, and\n appealing to the monad laws to allow these to combine with all other monads satisfying the monad\n laws through \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis imports and defines the correct instances for a good portion of the \u003ccode\u003emonads-tf\u003c/code\u003e, primarily\n because it is so awkward to import them all otherwise due to the fact that most of them re-export\n the \u003ccode\u003eControl.Monad.Monad\u003c/code\u003e syntax.  Does not export \u003ca\u003eControl.Monad.ST\u003c/a\u003e or \u003ca\u003eControl.Monad.Writer\u003c/a\u003e\n since it is unclear if you want strict or lazy versions in scope\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Parameterized",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html",
          "type": "module"
        },
        "index": {
          "description": "All rights reserved Redistribution and use in source and binary forms with or without modification are permitted provided that the following conditions are met Redistributions of source code must retain the above copyright notice this list of conditions and the following disclaimer Redistributions in binary form must reproduce the above copyright notice this list of conditions and the following disclaimer in the documentation and or other materials provided with the distribution THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY EXPRESS OR IMPLIED WARRANTIES INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR PARTICULAR PURPOSE ARE DISCLAIMED IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT INDIRECT INCIDENTAL SPECIAL EXEMPLARY OR CONSEQUENTIAL DAMAGES INCLUDING BUT NOT LIMITED TO PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES LOSS OF USE DATA OR PROFITS OR BUSINESS INTERRUPTION HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY WHETHER IN CONTRACT STRICT LIABILITY OR TORT INCLUDING NEGLIGENCE OR OTHERWISE ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE monad-param Maintainer Edward Kmett ekmett@gmail.com Bind.Marshal Maintainer Corey Connor coreyoconnor@gmail.com Stability experimental Portability non-portable requires the kitchen sink Implements notion of parameterized monad by varying the monad itself this lets us avoid having to carry parameter around for monads that do not need it and we can rederive the normal notion of parameterized monad from this variation for those that do The signature of costs us type inference for the types of return and mzero so we restore that by defining return as the unit of the Identity monad and mzero as the unit of the trivial bottom monad and appealing to the monad laws to allow these to combine with all other monads satisfying the monad laws through This imports and defines the correct instances for good portion of the monads-tf primarily because it is so awkward to import them all otherwise due to the fact that most of them re-export the Control.Monad.Monad syntax Does not export Control.Monad.ST or Control.Monad.Writer since it is unclear if you want strict or lazy versions in scope",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Parameterized",
          "package": "bind-marshal",
          "partial": "Parameterized",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplement parameterized monads like Oleg's restricted monads, but vary the monad itself rather than restrict its parameters\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Bind",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#Bind",
          "type": "class"
        },
        "index": {
          "description": "Implement parameterized monads like Oleg restricted monads but vary the monad itself rather than restrict its parameters",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Bind",
          "package": "bind-marshal",
          "partial": "Bind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#t:Bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict the cases where we allow pattern matching to \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e. You have to explicitly supply this for your \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Fail",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#Fail",
          "type": "class"
        },
        "index": {
          "description": "Restrict the cases where we allow pattern matching to fail You have to explicitly supply this for your Monad",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Fail",
          "package": "bind-marshal",
          "partial": "Fail",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#t:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNow of course we can have \u003ccode\u003e\u003ca\u003eMZero\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003es float to the top of a \u003ccode\u003edo\u003c/code\u003e expression, so we need a way to convert them to any \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e instance respectively\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Go",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#Go",
          "type": "class"
        },
        "index": {
          "description": "Now of course we can have MZero and Identity float to the top of do expression so we need way to convert them to any Monad or MonadPlus instance respectively",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Go",
          "package": "bind-marshal",
          "partial": "Go",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#t:Go"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak out mplus\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "MPlus",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#MPlus",
          "type": "class"
        },
        "index": {
          "description": "Break out mplus",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "MPlus",
          "package": "bind-marshal",
          "partial": "MPlus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#t:MPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame trick using with \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e to build a canonical \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, here we exploit the \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e laws to make a canonical \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e. Has no members except bottom.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "MZero",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#MZero",
          "type": "data"
        },
        "index": {
          "description": "Same trick using with Identity to build canonical return here we exploit the MonadPlus laws to make canonical mzero Has no members except bottom",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "MZero",
          "package": "bind-marshal",
          "partial": "MZero",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#t:MZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a parameterized monad can be used without varying its parameter, we can get the ease of use of the original \u003ccode\u003eMonad\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Monad",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#Monad",
          "type": "class"
        },
        "index": {
          "description": "When parameterized monad can be used without varying its parameter we can get the ease of use of the original Monad class",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Monad",
          "package": "bind-marshal",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass alias to get back an approximation of the original, easy-to-specify \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e class where available\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "MonadPlus",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#MonadPlus",
          "type": "class"
        },
        "index": {
          "description": "Class alias to get back an approximation of the original easy-to-specify MonadPlus class where available",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "MonadPlus",
          "package": "bind-marshal",
          "partial": "Monad Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#t:MonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraditional \u003ccode\u003eControl.Monad.mzero\u003c/code\u003e, note this probably has lost its type inference. \n You probably want \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "MonadZero",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#MonadZero",
          "type": "class"
        },
        "index": {
          "description": "Traditional Control.Monad.mzero note this probably has lost its type inference You probably want mzero",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "MonadZero",
          "package": "bind-marshal",
          "partial": "Monad Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#t:MonadZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe traditional \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, note this probably has lost its type inference where you want to use it. \n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Return",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#Return",
          "type": "class"
        },
        "index": {
          "description": "The traditional return note this probably has lost its type inference where you want to use it",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "Return",
          "package": "bind-marshal",
          "partial": "Return",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#t:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "(=\u003c\u003c)",
          "package": "bind-marshal",
          "signature": "(a -\u003e m' b) -\u003e m a -\u003e m'' b",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#%3D%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003ee c",
          "package": "bind-marshal",
          "signature": "(a-\u003em' b)-\u003em a-\u003em'' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "(\u003e\u003e)",
          "package": "bind-marshal",
          "signature": "m a -\u003e m' b -\u003e m'' b",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#%3E%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ec d-\u003ee d",
          "package": "bind-marshal",
          "signature": "m a-\u003em' b-\u003em'' b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "(\u003e\u003e=)",
          "package": "bind-marshal",
          "signature": "m a -\u003e (a -\u003e m' b) -\u003e m'' b",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#%3E%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ec d)-\u003ee d",
          "package": "bind-marshal",
          "signature": "m a-\u003e(a-\u003em' b)-\u003em'' b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn many situations, the \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e operations can be replaced by uses of\n\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, which promotes function application. \n\u003c/p\u003e\u003cpre\u003e       return f `ap` x1 `ap` ... `ap` xn\n\u003c/pre\u003e\u003cp\u003eis equivalent to \n\u003c/p\u003e\u003cpre\u003e       liftMn f x1 x2 ... xn\n\u003c/pre\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "ap",
          "package": "bind-marshal",
          "signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "In many situations the liftM operations can be replaced by uses of ap which promotes function application return ap x1 ap ap xn is equivalent to liftMn x1 x2 xn",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "ap",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "bind-marshal",
          "signature": "m(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "fail",
          "package": "bind-marshal",
          "signature": "String -\u003e m a",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#fail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "fail",
          "normalized": "String-\u003ea b",
          "package": "bind-marshal",
          "signature": "String-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "filterM",
          "package": "bind-marshal",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based filter function",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "bind-marshal",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e function is analogous to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, except that its result is\nencapsulated in a monad. Note that \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e works from left-to-right over\nthe list arguments. This could be an issue where \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e and the `folded\nfunction' are not commutative.\n\u003c/p\u003e\u003cpre\u003e       foldM f a1 [x1, x2, ..., xm]\n\u003c/pre\u003e\u003cp\u003e==  \n\u003c/p\u003e\u003cpre\u003e       do\n         a2 \u003c- f a1 x1\n         a3 \u003c- f a2 x2\n         ...\n         f am xm\n\u003c/pre\u003e\u003cp\u003eIf right-to-left evaluation is required, the input list should be reversed.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "foldM",
          "package": "bind-marshal",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The foldM function is analogous to foldl except that its result is encapsulated in monad Note that foldM works from left-to-right over the list arguments This could be an issue where and the folded function are not commutative foldM a1 x1 x2 xm do a2 a1 x1 a3 a2 x2 am xm If right-to-left evaluation is required the input list should be reversed",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec a",
          "package": "bind-marshal",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "foldM_",
          "package": "bind-marshal",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like foldM but discards the result",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "foldM_",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec()",
          "package": "bind-marshal",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:foldM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "forM",
          "package": "bind-marshal",
          "signature": "[a] -\u003e (a -\u003e m b) -\u003e m [b]",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "forM",
          "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb[c]",
          "package": "bind-marshal",
          "signature": "[a]-\u003e(a-\u003em b)-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "forM_",
          "package": "bind-marshal",
          "signature": "[a] -\u003e (a -\u003e m b) -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "forM_",
          "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb()",
          "package": "bind-marshal",
          "signature": "[a]-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:forM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsage: \u003ccode\u003ego (do something)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "go",
          "package": "bind-marshal",
          "signature": "n a -\u003e m a",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#go",
          "type": "method"
        },
        "index": {
          "description": "Usage go do something",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "go",
          "normalized": "a b-\u003ec b",
          "package": "bind-marshal",
          "signature": "n a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:go"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e ()\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003eb\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "guard",
          "package": "bind-marshal",
          "signature": "Bool -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "guard is return if is True and mzero if is False",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "guard",
          "normalized": "Bool-\u003ea()",
          "package": "bind-marshal",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e function is the conventional monad join operator. It is used to\n remove one level of monadic structure, projecting its bound argument into the\n outer level.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "join",
          "package": "bind-marshal",
          "signature": "m (m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "The join function is the conventional monad join operator It is used to remove one level of monadic structure projecting its bound argument into the outer level",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "bind-marshal",
          "signature": "m(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM",
          "package": "bind-marshal",
          "signature": "(a1 -\u003e r) -\u003e m a1 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "bind-marshal",
          "signature": "(a-\u003er)-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:liftM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right.  For example,\n\u003c/p\u003e\u003cpre\u003e    liftM2 (+) [0,1] [0,2] = [0,2,1,3]\n    liftM2 (+) (Just 1) Nothing = Nothing\n\u003c/pre\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM2",
          "package": "bind-marshal",
          "signature": "(a1 -\u003e a2 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right For example liftM2 liftM2 Just Nothing Nothing",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
          "package": "bind-marshal",
          "signature": "(a-\u003ea-\u003er)-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:liftM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM3",
          "package": "bind-marshal",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "bind-marshal",
          "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:liftM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM4",
          "package": "bind-marshal",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "bind-marshal",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:liftM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM5",
          "package": "bind-marshal",
          "signature": "(a1 -\u003e a2 -\u003e a3 -\u003e a4 -\u003e a5 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m a4 -\u003e m a5 -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "liftM5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "bind-marshal",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em a-\u003em a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:liftM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAndUnzipM\u003c/a\u003e\u003c/code\u003e function maps its first argument over a list, returning\n the result as a pair of lists. This function is mainly used with complicated\n data structures or a state-transforming monad.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mapAndUnzipM",
          "package": "bind-marshal",
          "signature": "(a -\u003e m (b, c)) -\u003e [a] -\u003e m ([b], [c])",
          "type": "function"
        },
        "index": {
          "description": "The mapAndUnzipM function maps its first argument over list returning the result as pair of lists This function is mainly used with complicated data structures or state-transforming monad",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mapAndUnzipM",
          "normalized": "(a-\u003eb(c,d))-\u003e[a]-\u003eb([c],[d])",
          "package": "bind-marshal",
          "partial": "And Unzip",
          "signature": "(a-\u003em(b,c))-\u003e[a]-\u003em([b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:mapAndUnzipM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mapM",
          "package": "bind-marshal",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m [b]",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb[c]",
          "package": "bind-marshal",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence_\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mapM_",
          "package": "bind-marshal",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb()",
          "package": "bind-marshal",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mplus",
          "package": "bind-marshal",
          "signature": "m a -\u003e m' a -\u003e m'' a",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#mplus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mplus",
          "normalized": "a b-\u003ec b-\u003ed b",
          "package": "bind-marshal",
          "signature": "m a-\u003em' a-\u003em'' a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:mplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis generalizes the list-based \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "msum",
          "package": "bind-marshal",
          "signature": "[m a] -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "This generalizes the list-based concat function",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "msum",
          "normalized": "[a b]-\u003ea b",
          "package": "bind-marshal",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:msum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn inferable version of \u003ccode\u003eControl.Monad.mzero\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mzero",
          "package": "bind-marshal",
          "signature": "MZero a",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#mzero",
          "type": "function"
        },
        "index": {
          "description": "An inferable version of Control.Monad.mzero",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mzero",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:mzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mzeroM",
          "package": "bind-marshal",
          "signature": "m a",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#mzeroM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "mzeroM",
          "package": "bind-marshal",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:mzeroM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n act\u003c/code\u003e performs the action \u003ccode\u003en\u003c/code\u003e times,\n gathering the results.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "replicateM",
          "package": "bind-marshal",
          "signature": "Int -\u003e m a -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "replicateM act performs the action times gathering the results",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "replicateM",
          "normalized": "Int-\u003ea b-\u003ea[b]",
          "package": "bind-marshal",
          "signature": "Int-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "replicateM_",
          "package": "bind-marshal",
          "signature": "Int -\u003e m a -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Like replicateM but discards the result",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "replicateM_",
          "normalized": "Int-\u003ea b-\u003ea()",
          "package": "bind-marshal",
          "signature": "Int-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:replicateM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn inferable version of \u003ccode\u003ePrelude.return\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "return",
          "package": "bind-marshal",
          "signature": "a -\u003e Identity a",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#return",
          "type": "function"
        },
        "index": {
          "description": "An inferable version of Prelude.return",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "return",
          "normalized": "a-\u003eIdentity a",
          "package": "bind-marshal",
          "signature": "a-\u003eIdentity a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "returnM",
          "package": "bind-marshal",
          "signature": "a -\u003e m a",
          "source": "src/Bind-Marshal-Control-Monad-Parameterized.html#returnM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "returnM",
          "normalized": "a-\u003eb a",
          "package": "bind-marshal",
          "signature": "a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:returnM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "sequence",
          "package": "bind-marshal",
          "signature": "[m a] -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and collect the results",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "sequence",
          "normalized": "[a b]-\u003ea[b]",
          "package": "bind-marshal",
          "signature": "[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence from left to right,\n and ignore the results.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "sequence_",
          "package": "bind-marshal",
          "signature": "[m a] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each action in the sequence from left to right and ignore the results",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "sequence_",
          "normalized": "[a b]-\u003ea()",
          "package": "bind-marshal",
          "signature": "[m a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003ewhen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "unless",
          "package": "bind-marshal",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "The reverse of when",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "unless",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "bind-marshal",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "when",
          "package": "bind-marshal",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "when",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "bind-marshal",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e to arbitrary monads.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "zipWithM",
          "package": "bind-marshal",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m [c]",
          "type": "function"
        },
        "index": {
          "description": "The zipWithM function generalizes zipWith to arbitrary monads",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "zipWithM",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec[d]",
          "package": "bind-marshal",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:zipWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWithM_\u003c/a\u003e\u003c/code\u003e is the extension of \u003ccode\u003e\u003ca\u003ezipWithM\u003c/a\u003e\u003c/code\u003e which ignores the final result.\n\u003c/p\u003e",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "zipWithM_",
          "package": "bind-marshal",
          "signature": "(a -\u003e b -\u003e m c) -\u003e [a] -\u003e [b] -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "zipWithM is the extension of zipWithM which ignores the final result",
          "hierarchy": "Bind Marshal Control Monad Parameterized",
          "module": "Bind.Marshal.Control.Monad.Parameterized",
          "name": "zipWithM_",
          "normalized": "(a-\u003eb-\u003ec d)-\u003e[a]-\u003e[b]-\u003ec()",
          "package": "bind-marshal",
          "partial": "With",
          "signature": "(a-\u003eb-\u003em c)-\u003e[a]-\u003e[b]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Control-Monad-Parameterized.html#v:zipWithM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel.Base",
          "name": "Base",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DataModel-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel Base",
          "module": "Bind.Marshal.DataModel.Base",
          "name": "Base",
          "package": "bind-marshal",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel.Base",
          "name": "StaticModel",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DataModel-Base.html#StaticModel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel Base",
          "module": "Bind.Marshal.DataModel.Base",
          "name": "StaticModel",
          "package": "bind-marshal",
          "partial": "Static Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel-Base.html#t:StaticModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "DataModel",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DataModel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "DataModel",
          "package": "bind-marshal",
          "partial": "Data Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "ActionDesc",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DataModel.html#ActionDesc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "ActionDesc",
          "package": "bind-marshal",
          "partial": "Action Desc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#t:ActionDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "ActionSeq",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DataModel.html#ActionSeq",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "ActionSeq",
          "package": "bind-marshal",
          "partial": "Action Seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#t:ActionSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "DynamicModel",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DataModel.html#DynamicModel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "DynamicModel",
          "package": "bind-marshal",
          "partial": "Dynamic Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#t:DynamicModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "IsStaticModel",
          "package": "bind-marshal",
          "signature": "IsStaticModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "IsStaticModel",
          "package": "bind-marshal",
          "partial": "Is Static Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#t:IsStaticModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "Model",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DataModel.html#Model",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "Model",
          "package": "bind-marshal",
          "partial": "Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "DesAction",
          "package": "bind-marshal",
          "signature": "DesAction Size",
          "source": "src/Bind-Marshal-DataModel.html#ActionDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "DesAction",
          "package": "bind-marshal",
          "partial": "Des Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#v:DesAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "DynamicModel",
          "package": "bind-marshal",
          "signature": "DynamicModel",
          "source": "src/Bind-Marshal-DataModel.html#DynamicModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "DynamicModel",
          "package": "bind-marshal",
          "partial": "Dynamic Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#v:DynamicModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "Model",
          "package": "bind-marshal",
          "signature": "Model",
          "source": "src/Bind-Marshal-DataModel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "Model",
          "package": "bind-marshal",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#v:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "SerAction",
          "package": "bind-marshal",
          "signature": "SerAction Size",
          "source": "src/Bind-Marshal-DataModel.html#ActionDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "SerAction",
          "package": "bind-marshal",
          "partial": "Ser Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#v:SerAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "action_seq",
          "package": "bind-marshal",
          "signature": "ActionSeq",
          "source": "src/Bind-Marshal-DataModel.html#DynamicModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "action_seq",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#v:action_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DataModel",
          "name": "dynamic_model",
          "package": "bind-marshal",
          "signature": "DynamicModel",
          "source": "src/Bind-Marshal-DataModel.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DataModel",
          "module": "Bind.Marshal.DataModel",
          "name": "dynamic_model",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DataModel.html#v:dynamic_model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Base",
          "name": "Base",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Base",
          "module": "Bind.Marshal.DesAction.Base",
          "name": "Base",
          "package": "bind-marshal",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Base",
          "name": "CanDeserialize",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Base.html#CanDeserialize",
          "type": "class"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Base",
          "module": "Bind.Marshal.DesAction.Base",
          "name": "CanDeserialize",
          "package": "bind-marshal",
          "partial": "Can Deserialize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Base.html#t:CanDeserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Base",
          "name": "DesBuffer",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Base.html#DesBuffer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Base",
          "module": "Bind.Marshal.DesAction.Base",
          "name": "DesBuffer",
          "package": "bind-marshal",
          "partial": "Des Buffer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Base.html#t:DesBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Base",
          "name": "DesTag",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Base.html#DesTag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Base",
          "module": "Bind.Marshal.DesAction.Base",
          "name": "DesTag",
          "package": "bind-marshal",
          "partial": "Des Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Base.html#t:DesTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Base",
          "name": "DeserializeAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Base.html#DeserializeAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Base",
          "module": "Bind.Marshal.DesAction.Base",
          "name": "DeserializeAction",
          "package": "bind-marshal",
          "partial": "Deserialize Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Base.html#t:DeserializeAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Base",
          "name": "deserialize",
          "package": "bind-marshal",
          "signature": "DeserializeAction t",
          "source": "src/Bind-Marshal-DesAction-Base.html#deserialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Base",
          "module": "Bind.Marshal.DesAction.Base",
          "name": "deserialize",
          "package": "bind-marshal",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Base.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Dynamic.Base",
          "name": "Base",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Dynamic-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Dynamic Base",
          "module": "Bind.Marshal.DesAction.Dynamic.Base",
          "name": "Base",
          "package": "bind-marshal",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Dynamic-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Dynamic.Base",
          "name": "DynamicDesAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Dynamic-Base.html#DynamicDesAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Dynamic Base",
          "module": "Bind.Marshal.DesAction.Dynamic.Base",
          "name": "DynamicDesAction",
          "package": "bind-marshal",
          "partial": "Dynamic Des Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Dynamic-Base.html#t:DynamicDesAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Dynamic",
          "name": "Dynamic",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Dynamic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Dynamic",
          "module": "Bind.Marshal.DesAction.Dynamic",
          "name": "Dynamic",
          "package": "bind-marshal",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Dynamic",
          "name": "des_from_buffer_delegate",
          "package": "bind-marshal",
          "signature": "DynamicDesAction Sealed Sealed Sealed buffer_delegate out_type -\u003e buffer_delegate -\u003e IO (out_type, buffer_delegate)",
          "source": "src/Bind-Marshal-DesAction-Dynamic.html#des_from_buffer_delegate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Dynamic",
          "module": "Bind.Marshal.DesAction.Dynamic",
          "name": "des_from_buffer_delegate",
          "normalized": "DynamicDesAction Sealed Sealed Sealed a b-\u003ea-\u003eIO(b,a)",
          "package": "bind-marshal",
          "signature": "DynamicDesAction Sealed Sealed Sealed buffer_delegate out_type-\u003ebuffer_delegate-\u003eIO(out_type,buffer_delegate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Dynamic.html#v:des_from_buffer_delegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Dynamic",
          "name": "des_from_buffer_delegate_",
          "package": "bind-marshal",
          "signature": "DynamicDesAction Sealed Sealed Sealed buffer_delegate out_type -\u003e buffer_delegate -\u003e IO out_type",
          "source": "src/Bind-Marshal-DesAction-Dynamic.html#des_from_buffer_delegate_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Dynamic",
          "module": "Bind.Marshal.DesAction.Dynamic",
          "name": "des_from_buffer_delegate_",
          "normalized": "DynamicDesAction Sealed Sealed Sealed a b-\u003ea-\u003eIO b",
          "package": "bind-marshal",
          "signature": "DynamicDesAction Sealed Sealed Sealed buffer_delegate out_type-\u003ebuffer_delegate-\u003eIO out_type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Dynamic.html#v:des_from_buffer_delegate_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Static",
          "name": "Static",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Static",
          "module": "Bind.Marshal.DesAction.Static",
          "name": "Static",
          "package": "bind-marshal",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Static",
          "name": "StaticDesAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Static.html#StaticDesAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Static",
          "module": "Bind.Marshal.DesAction.Static",
          "name": "StaticDesAction",
          "package": "bind-marshal",
          "partial": "Static Des Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Static.html#t:StaticDesAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo execute a deserialization action:\n  - determine the final data model of the deserialization action monad by fixing the initial data\n  model as DMNil.\n  - evaluate the action via CPS\n\u003c/p\u003e",
          "module": "Bind.Marshal.DesAction.Static",
          "name": "apply_des_to_fixed_buffer",
          "package": "bind-marshal",
          "signature": "StaticDesAction size out_type -\u003e DesBuffer -\u003e IO (out_type, DesBuffer)",
          "source": "src/Bind-Marshal-DesAction-Static.html#apply_des_to_fixed_buffer",
          "type": "function"
        },
        "index": {
          "description": "To execute deserialization action determine the final data model of the deserialization action monad by fixing the initial data model as DMNil evaluate the action via CPS",
          "hierarchy": "Bind Marshal DesAction Static",
          "module": "Bind.Marshal.DesAction.Static",
          "name": "apply_des_to_fixed_buffer",
          "normalized": "StaticDesAction a b-\u003eDesBuffer-\u003eIO(b,DesBuffer)",
          "package": "bind-marshal",
          "signature": "StaticDesAction size out_type-\u003eDesBuffer-\u003eIO(out_type,DesBuffer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Static.html#v:apply_des_to_fixed_buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Static",
          "name": "apply_des_to_fixed_buffer_unsafe",
          "package": "bind-marshal",
          "signature": "forall size out_type.  StaticDesAction size out_type -\u003e DesBuffer -\u003e IO (out_type, DesBuffer)",
          "source": "src/Bind-Marshal-DesAction-Static.html#apply_des_to_fixed_buffer_unsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Static",
          "module": "Bind.Marshal.DesAction.Static",
          "name": "apply_des_to_fixed_buffer_unsafe",
          "normalized": "a b c StaticDesAction b d-\u003eDesBuffer-\u003eIO(d,DesBuffer)",
          "package": "bind-marshal",
          "signature": "forall size out_type. StaticDesAction size out_type-\u003eDesBuffer-\u003eIO(out_type,DesBuffer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Static.html#v:apply_des_to_fixed_buffer_unsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edes\u003c/a\u003e\u003c/code\u003e is a deserialization action that has a static buffer requirement. However the resulting\n action monad of a \u003ccode\u003e\u003ca\u003edes\u003c/a\u003e\u003c/code\u003e can be dynamic or static.\n\u003c/p\u003e",
          "module": "Bind.Marshal.DesAction.Static",
          "name": "des",
          "package": "bind-marshal",
          "signature": "StaticDesAction (BufferReq t) t",
          "source": "src/Bind-Marshal-DesAction-Static.html#des",
          "type": "function"
        },
        "index": {
          "description": "des is deserialization action that has static buffer requirement However the resulting action monad of des can be dynamic or static",
          "hierarchy": "Bind Marshal DesAction Static",
          "module": "Bind.Marshal.DesAction.Static",
          "name": "des",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Static.html#v:des"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Storable",
          "name": "Storable",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction-Storable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Storable",
          "module": "Bind.Marshal.DesAction.Storable",
          "name": "Storable",
          "package": "bind-marshal",
          "partial": "Storable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Storable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction.Storable",
          "name": "deserialize_storable",
          "package": "bind-marshal",
          "signature": "Addr# -\u003e IO t",
          "source": "src/Bind-Marshal-DesAction-Storable.html#deserialize_storable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction Storable",
          "module": "Bind.Marshal.DesAction.Storable",
          "name": "deserialize_storable",
          "normalized": "Addr #-\u003eIO a",
          "package": "bind-marshal",
          "signature": "Addr #-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction-Storable.html#v:deserialize_storable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.DesAction",
          "name": "DesAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-DesAction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal DesAction",
          "module": "Bind.Marshal.DesAction",
          "name": "DesAction",
          "package": "bind-marshal",
          "partial": "Des Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-DesAction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Dynamic",
          "name": "Dynamic",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Dynamic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal Dynamic",
          "module": "Bind.Marshal.Dynamic",
          "name": "Dynamic",
          "package": "bind-marshal",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Prelude",
          "name": "Prelude",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Prelude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal Prelude",
          "module": "Bind.Marshal.Prelude",
          "name": "Prelude",
          "package": "bind-marshal",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Prelude",
          "name": "BytePtr",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Prelude.html#BytePtr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal Prelude",
          "module": "Bind.Marshal.Prelude",
          "name": "BytePtr",
          "package": "bind-marshal",
          "partial": "Byte Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Prelude.html#t:BytePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Prelude",
          "name": "Length",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Prelude.html#Length",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal Prelude",
          "module": "Bind.Marshal.Prelude",
          "name": "Length",
          "package": "bind-marshal",
          "partial": "Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Prelude.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Prelude",
          "name": "Size",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-Prelude.html#Size",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal Prelude",
          "module": "Bind.Marshal.Prelude",
          "name": "Size",
          "package": "bind-marshal",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Prelude.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Prelude",
          "name": "Length",
          "package": "bind-marshal",
          "signature": "Length",
          "source": "src/Bind-Marshal-Prelude.html#Length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Prelude",
          "module": "Bind.Marshal.Prelude",
          "name": "Length",
          "package": "bind-marshal",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Prelude.html#v:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.Prelude",
          "name": "unLength",
          "package": "bind-marshal",
          "signature": "Size",
          "source": "src/Bind-Marshal-Prelude.html#Length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal Prelude",
          "module": "Bind.Marshal.Prelude",
          "name": "unLength",
          "package": "bind-marshal",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-Prelude.html#v:unLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Base",
          "name": "Base",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Base",
          "module": "Bind.Marshal.SerAction.Base",
          "name": "Base",
          "package": "bind-marshal",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Base",
          "name": "CanSerialize",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Base.html#CanSerialize",
          "type": "class"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Base",
          "module": "Bind.Marshal.SerAction.Base",
          "name": "CanSerialize",
          "package": "bind-marshal",
          "partial": "Can Serialize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Base.html#t:CanSerialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Base",
          "name": "SerBuffer",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Base.html#SerBuffer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Base",
          "module": "Bind.Marshal.SerAction.Base",
          "name": "SerBuffer",
          "package": "bind-marshal",
          "partial": "Ser Buffer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Base.html#t:SerBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Base",
          "name": "SerTag",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Base.html#SerTag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Base",
          "module": "Bind.Marshal.SerAction.Base",
          "name": "SerTag",
          "package": "bind-marshal",
          "partial": "Ser Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Base.html#t:SerTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Base",
          "name": "SerializeAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Base.html#SerializeAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Base",
          "module": "Bind.Marshal.SerAction.Base",
          "name": "SerializeAction",
          "package": "bind-marshal",
          "partial": "Serialize Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Base.html#t:SerializeAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Base",
          "name": "serialize",
          "package": "bind-marshal",
          "signature": "SerializeAction t",
          "source": "src/Bind-Marshal-SerAction-Base.html#serialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Base",
          "module": "Bind.Marshal.SerAction.Base",
          "name": "serialize",
          "package": "bind-marshal",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Base.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Dynamic.Base",
          "name": "Base",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Dynamic-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Dynamic Base",
          "module": "Bind.Marshal.SerAction.Dynamic.Base",
          "name": "Base",
          "package": "bind-marshal",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Dynamic-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Dynamic.Base",
          "name": "DynamicSerAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Dynamic-Base.html#DynamicSerAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Dynamic Base",
          "module": "Bind.Marshal.SerAction.Dynamic.Base",
          "name": "DynamicSerAction",
          "package": "bind-marshal",
          "partial": "Dynamic Ser Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Dynamic-Base.html#t:DynamicSerAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Dynamic",
          "name": "Dynamic",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Dynamic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Dynamic",
          "module": "Bind.Marshal.SerAction.Dynamic",
          "name": "Dynamic",
          "package": "bind-marshal",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Dynamic",
          "name": "ser_to_buffer_delegate",
          "package": "bind-marshal",
          "signature": "DynamicSerAction Sealed Sealed Sealed buffer_delegate out_type -\u003e buffer_delegate -\u003e IO (out_type, buffer_delegate)",
          "source": "src/Bind-Marshal-SerAction-Dynamic.html#ser_to_buffer_delegate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Dynamic",
          "module": "Bind.Marshal.SerAction.Dynamic",
          "name": "ser_to_buffer_delegate",
          "normalized": "DynamicSerAction Sealed Sealed Sealed a b-\u003ea-\u003eIO(b,a)",
          "package": "bind-marshal",
          "signature": "DynamicSerAction Sealed Sealed Sealed buffer_delegate out_type-\u003ebuffer_delegate-\u003eIO(out_type,buffer_delegate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Dynamic.html#v:ser_to_buffer_delegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Dynamic",
          "name": "ser_to_buffer_delegate_",
          "package": "bind-marshal",
          "signature": "DynamicSerAction Sealed Sealed Sealed buffer_delegate out_type -\u003e buffer_delegate -\u003e IO out_type",
          "source": "src/Bind-Marshal-SerAction-Dynamic.html#ser_to_buffer_delegate_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Dynamic",
          "module": "Bind.Marshal.SerAction.Dynamic",
          "name": "ser_to_buffer_delegate_",
          "normalized": "DynamicSerAction Sealed Sealed Sealed a b-\u003ea-\u003eIO b",
          "package": "bind-marshal",
          "signature": "DynamicSerAction Sealed Sealed Sealed buffer_delegate out_type-\u003ebuffer_delegate-\u003eIO out_type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Dynamic.html#v:ser_to_buffer_delegate_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Static",
          "name": "Static",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Static.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Static",
          "module": "Bind.Marshal.SerAction.Static",
          "name": "Static",
          "package": "bind-marshal",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Static",
          "name": "StaticSerAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Static.html#StaticSerAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Static",
          "module": "Bind.Marshal.SerAction.Static",
          "name": "StaticSerAction",
          "package": "bind-marshal",
          "partial": "Static Ser Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Static.html#t:StaticSerAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo execute a serialization action:\n  - determine the final data model of the serialization action monad by fixing the initial data\n  model as DMNil.\n  - evaluate the action via CPS\n\u003c/p\u003e",
          "module": "Bind.Marshal.SerAction.Static",
          "name": "apply_ser_to_fixed_buffer",
          "package": "bind-marshal",
          "signature": "StaticSerAction size out_type -\u003e SerBuffer -\u003e IO (out_type, SerBuffer)",
          "source": "src/Bind-Marshal-SerAction-Static.html#apply_ser_to_fixed_buffer",
          "type": "function"
        },
        "index": {
          "description": "To execute serialization action determine the final data model of the serialization action monad by fixing the initial data model as DMNil evaluate the action via CPS",
          "hierarchy": "Bind Marshal SerAction Static",
          "module": "Bind.Marshal.SerAction.Static",
          "name": "apply_ser_to_fixed_buffer",
          "normalized": "StaticSerAction a b-\u003eSerBuffer-\u003eIO(b,SerBuffer)",
          "package": "bind-marshal",
          "signature": "StaticSerAction size out_type-\u003eSerBuffer-\u003eIO(out_type,SerBuffer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Static.html#v:apply_ser_to_fixed_buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Static",
          "name": "apply_ser_to_fixed_buffer_unsafe",
          "package": "bind-marshal",
          "signature": "forall size out_type.  StaticSerAction size out_type -\u003e SerBuffer -\u003e IO (out_type, SerBuffer)",
          "source": "src/Bind-Marshal-SerAction-Static.html#apply_ser_to_fixed_buffer_unsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Static",
          "module": "Bind.Marshal.SerAction.Static",
          "name": "apply_ser_to_fixed_buffer_unsafe",
          "normalized": "a b c StaticSerAction b d-\u003eSerBuffer-\u003eIO(d,SerBuffer)",
          "package": "bind-marshal",
          "signature": "forall size out_type. StaticSerAction size out_type-\u003eSerBuffer-\u003eIO(out_type,SerBuffer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Static.html#v:apply_ser_to_fixed_buffer_unsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Static",
          "name": "apply_ser_to_fixed_buffer_unsafe_",
          "package": "bind-marshal",
          "signature": "forall size out_type.  StaticSerAction size out_type -\u003e SerBuffer -\u003e IO out_type",
          "source": "src/Bind-Marshal-SerAction-Static.html#apply_ser_to_fixed_buffer_unsafe_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Static",
          "module": "Bind.Marshal.SerAction.Static",
          "name": "apply_ser_to_fixed_buffer_unsafe_",
          "normalized": "a b c StaticSerAction b d-\u003eSerBuffer-\u003eIO d",
          "package": "bind-marshal",
          "signature": "forall size out_type. StaticSerAction size out_type-\u003eSerBuffer-\u003eIO out_type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Static.html#v:apply_ser_to_fixed_buffer_unsafe_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Static",
          "name": "ser",
          "package": "bind-marshal",
          "signature": "t -\u003e StaticSerAction (BufferReq t) ()",
          "source": "src/Bind-Marshal-SerAction-Static.html#ser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Static",
          "module": "Bind.Marshal.SerAction.Static",
          "name": "ser",
          "normalized": "a-\u003eStaticSerAction(BufferReq a)()",
          "package": "bind-marshal",
          "signature": "t-\u003eStaticSerAction(BufferReq t)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Static.html#v:ser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Storable",
          "name": "Storable",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction-Storable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Storable",
          "module": "Bind.Marshal.SerAction.Storable",
          "name": "Storable",
          "package": "bind-marshal",
          "partial": "Storable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Storable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction.Storable",
          "name": "serialize_storable",
          "package": "bind-marshal",
          "signature": "t -\u003e Addr# -\u003e IO ()",
          "source": "src/Bind-Marshal-SerAction-Storable.html#serialize_storable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction Storable",
          "module": "Bind.Marshal.SerAction.Storable",
          "name": "serialize_storable",
          "normalized": "a-\u003eAddr #-\u003eIO()",
          "package": "bind-marshal",
          "signature": "t-\u003eAddr #-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction-Storable.html#v:serialize_storable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.SerAction",
          "name": "SerAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-SerAction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal SerAction",
          "module": "Bind.Marshal.SerAction",
          "name": "SerAction",
          "package": "bind-marshal",
          "partial": "Ser Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-SerAction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StaticProperties.DesAction",
          "name": "DesAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StaticProperties-DesAction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StaticProperties DesAction",
          "module": "Bind.Marshal.StaticProperties.DesAction",
          "name": "DesAction",
          "package": "bind-marshal",
          "partial": "Des Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StaticProperties-DesAction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StaticProperties.SerAction",
          "name": "SerAction",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StaticProperties-SerAction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StaticProperties SerAction",
          "module": "Bind.Marshal.StaticProperties.SerAction",
          "name": "SerAction",
          "package": "bind-marshal",
          "partial": "Ser Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StaticProperties-SerAction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StaticProperties",
          "name": "StaticProperties",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StaticProperties.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StaticProperties",
          "module": "Bind.Marshal.StaticProperties",
          "name": "StaticProperties",
          "package": "bind-marshal",
          "partial": "Static Properties",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StaticProperties.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StaticProperties",
          "name": "marshalled_byte_count",
          "package": "bind-marshal",
          "signature": "StaticMemAction buffer_iter_tag size out_type -\u003e Size",
          "source": "src/Bind-Marshal-StaticProperties.html#marshalled_byte_count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StaticProperties",
          "module": "Bind.Marshal.StaticProperties",
          "name": "marshalled_byte_count",
          "normalized": "StaticMemAction a b c-\u003eSize",
          "package": "bind-marshal",
          "signature": "StaticMemAction buffer_iter_tag size out_type-\u003eSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StaticProperties.html#v:marshalled_byte_count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Des",
          "name": "Des",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Des.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Des",
          "module": "Bind.Marshal.StdLib.Des",
          "name": "Des",
          "package": "bind-marshal",
          "partial": "Des",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Des.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Des",
          "name": "des_word16_be",
          "package": "bind-marshal",
          "signature": "StaticDesAction D2 Word16",
          "source": "src/Bind-Marshal-StdLib-Des.html#des_word16_be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Des",
          "module": "Bind.Marshal.StdLib.Des",
          "name": "des_word16_be",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Des.html#v:des_word16_be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Des",
          "name": "des_word32_be",
          "package": "bind-marshal",
          "signature": "StaticDesAction D4 Word32",
          "source": "src/Bind-Marshal-StdLib-Des.html#des_word32_be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Des",
          "module": "Bind.Marshal.StdLib.Des",
          "name": "des_word32_be",
          "package": "bind-marshal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Des.html#v:des_word32_be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Des",
          "name": "Des",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Des.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic ByteString Lazy Des",
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Des",
          "name": "Des",
          "package": "bind-marshal",
          "partial": "Des",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Des.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Des",
          "name": "decode",
          "package": "bind-marshal",
          "signature": "forall a.  DynamicDesAction Sealed Sealed Sealed LazyBSDes a -\u003e ByteString -\u003e (a, ByteString)",
          "source": "src/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Des.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic ByteString Lazy Des",
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Des",
          "name": "decode",
          "normalized": "a b DynamicDesAction Sealed Sealed Sealed LazyBSDes c-\u003eByteString-\u003e(c,ByteString)",
          "package": "bind-marshal",
          "signature": "forall a. DynamicDesAction Sealed Sealed Sealed LazyBSDes a-\u003eByteString-\u003e(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Des.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Des",
          "name": "decode_",
          "package": "bind-marshal",
          "signature": "forall a.  DynamicDesAction Sealed Sealed Sealed LazyBSDes a -\u003e ByteString -\u003e a",
          "source": "src/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Des.html#decode_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic ByteString Lazy Des",
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Des",
          "name": "decode_",
          "normalized": "a b DynamicDesAction Sealed Sealed Sealed LazyBSDes c-\u003eByteString-\u003ec",
          "package": "bind-marshal",
          "signature": "forall a. DynamicDesAction Sealed Sealed Sealed LazyBSDes a-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Des.html#v:decode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Des",
          "name": "with_bytestring_provider",
          "package": "bind-marshal",
          "signature": "forall a.  ByteString -\u003e (LazyBSDes -\u003e IO (a, LazyBSDes)) -\u003e IO (a, ByteString)",
          "source": "src/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Des.html#with_bytestring_provider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic ByteString Lazy Des",
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Des",
          "name": "with_bytestring_provider",
          "normalized": "a b ByteString-\u003e(LazyBSDes-\u003eIO(c,LazyBSDes))-\u003eIO(c,ByteString)",
          "package": "bind-marshal",
          "signature": "forall a. ByteString-\u003e(LazyBSDes-\u003eIO(a,LazyBSDes))-\u003eIO(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Des.html#v:with_bytestring_provider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Ser",
          "name": "Ser",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Ser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic ByteString Lazy Ser",
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Ser",
          "name": "Ser",
          "package": "bind-marshal",
          "partial": "Ser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Ser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Ser",
          "name": "encode",
          "package": "bind-marshal",
          "signature": "DynamicSerAction Sealed Sealed Sealed LazyBSSer a -\u003e (a, ByteString)",
          "source": "src/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Ser.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic ByteString Lazy Ser",
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Ser",
          "name": "encode",
          "normalized": "DynamicSerAction Sealed Sealed Sealed LazyBSSer a-\u003e(a,ByteString)",
          "package": "bind-marshal",
          "signature": "DynamicSerAction Sealed Sealed Sealed LazyBSSer a-\u003e(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Ser.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Ser",
          "name": "encode_",
          "package": "bind-marshal",
          "signature": "DynamicSerAction Sealed Sealed Sealed LazyBSSer () -\u003e ByteString",
          "source": "src/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Ser.html#encode_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic ByteString Lazy Ser",
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Ser",
          "name": "encode_",
          "normalized": "DynamicSerAction Sealed Sealed Sealed LazyBSSer()-\u003eByteString",
          "package": "bind-marshal",
          "signature": "DynamicSerAction Sealed Sealed Sealed LazyBSSer()-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Ser.html#v:encode_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Ser",
          "name": "with_bytestring_handler",
          "package": "bind-marshal",
          "signature": "forall a.  ByteString -\u003e (LazyBSSer -\u003e IO (a, LazyBSSer)) -\u003e IO (a, ByteString)",
          "source": "src/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Ser.html#with_bytestring_handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic ByteString Lazy Ser",
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy.Ser",
          "name": "with_bytestring_handler",
          "normalized": "a b ByteString-\u003e(LazyBSSer-\u003eIO(c,LazyBSSer))-\u003eIO(c,ByteString)",
          "package": "bind-marshal",
          "signature": "forall a. ByteString-\u003e(LazyBSSer-\u003eIO(a,LazyBSSer))-\u003eIO(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy-Ser.html#v:with_bytestring_handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy",
          "name": "Lazy",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic ByteString Lazy",
          "module": "Bind.Marshal.StdLib.Dynamic.ByteString.Lazy",
          "name": "Lazy",
          "package": "bind-marshal",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-ByteString-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.FixedBuffer",
          "name": "FixedBuffer",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Dynamic-FixedBuffer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic FixedBuffer",
          "module": "Bind.Marshal.StdLib.Dynamic.FixedBuffer",
          "name": "FixedBuffer",
          "package": "bind-marshal",
          "partial": "Fixed Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-FixedBuffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.FixedBuffer",
          "name": "FixedBufferDelegate",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Dynamic-FixedBuffer.html#FixedBufferDelegate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic FixedBuffer",
          "module": "Bind.Marshal.StdLib.Dynamic.FixedBuffer",
          "name": "FixedBufferDelegate",
          "package": "bind-marshal",
          "partial": "Fixed Buffer Delegate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-FixedBuffer.html#t:FixedBufferDelegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.FixedBuffer",
          "name": "FixedBufferDelegate",
          "package": "bind-marshal",
          "signature": "FixedBufferDelegate !(BufferRegion tag)",
          "source": "src/Bind-Marshal-StdLib-Dynamic-FixedBuffer.html#FixedBufferDelegate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic FixedBuffer",
          "module": "Bind.Marshal.StdLib.Dynamic.FixedBuffer",
          "name": "FixedBufferDelegate",
          "package": "bind-marshal",
          "partial": "Fixed Buffer Delegate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-FixedBuffer.html#v:FixedBufferDelegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Dynamic.FixedBuffer",
          "name": "fixed_buffer",
          "package": "bind-marshal",
          "signature": "BufferRegion tag -\u003e IO (FixedBufferDelegate tag)",
          "source": "src/Bind-Marshal-StdLib-Dynamic-FixedBuffer.html#fixed_buffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Dynamic FixedBuffer",
          "module": "Bind.Marshal.StdLib.Dynamic.FixedBuffer",
          "name": "fixed_buffer",
          "normalized": "BufferRegion a-\u003eIO(FixedBufferDelegate a)",
          "package": "bind-marshal",
          "signature": "BufferRegion tag-\u003eIO(FixedBufferDelegate tag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Dynamic-FixedBuffer.html#v:fixed_buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Ser",
          "name": "Ser",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Ser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Ser",
          "module": "Bind.Marshal.StdLib.Ser",
          "name": "Ser",
          "package": "bind-marshal",
          "partial": "Ser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Ser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Ser",
          "name": "ser_word16_be",
          "package": "bind-marshal",
          "signature": "Word16 -\u003e StaticSerAction D2 ()",
          "source": "src/Bind-Marshal-StdLib-Ser.html#ser_word16_be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Ser",
          "module": "Bind.Marshal.StdLib.Ser",
          "name": "ser_word16_be",
          "normalized": "Word-\u003eStaticSerAction D()",
          "package": "bind-marshal",
          "signature": "Word-\u003eStaticSerAction D()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Ser.html#v:ser_word16_be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Ser",
          "name": "ser_word32_be",
          "package": "bind-marshal",
          "signature": "Word32 -\u003e StaticSerAction D4 ()",
          "source": "src/Bind-Marshal-StdLib-Ser.html#ser_word32_be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Ser",
          "module": "Bind.Marshal.StdLib.Ser",
          "name": "ser_word32_be",
          "normalized": "Word-\u003eStaticSerAction D()",
          "package": "bind-marshal",
          "signature": "Word-\u003eStaticSerAction D()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Ser.html#v:ser_word32_be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Ser",
          "name": "shiftr_w32",
          "package": "bind-marshal",
          "signature": "Word32 -\u003e Int -\u003e Word32",
          "source": "src/Bind-Marshal-StdLib-Ser.html#shiftr_w32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Ser",
          "module": "Bind.Marshal.StdLib.Ser",
          "name": "shiftr_w32",
          "normalized": "Word-\u003eInt-\u003eWord",
          "package": "bind-marshal",
          "signature": "Word-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Ser.html#v:shiftr_w32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Types",
          "name": "Types",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Types",
          "module": "Bind.Marshal.StdLib.Types",
          "name": "Types",
          "package": "bind-marshal",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Utils.Des",
          "name": "Des",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Utils-Des.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Utils Des",
          "module": "Bind.Marshal.StdLib.Utils.Des",
          "name": "Des",
          "package": "bind-marshal",
          "partial": "Des",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Utils-Des.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Utils.Ser",
          "name": "Ser",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Utils-Ser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Utils Ser",
          "module": "Bind.Marshal.StdLib.Utils.Ser",
          "name": "Ser",
          "package": "bind-marshal",
          "partial": "Ser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Utils-Ser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib.Utils",
          "name": "Utils",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib Utils",
          "module": "Bind.Marshal.StdLib.Utils",
          "name": "Utils",
          "package": "bind-marshal",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.StdLib",
          "name": "StdLib",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-StdLib.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal StdLib",
          "module": "Bind.Marshal.StdLib",
          "name": "StdLib",
          "package": "bind-marshal",
          "partial": "Std Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-StdLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.TypePrelude",
          "name": "TypePrelude",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-TypePrelude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal TypePrelude",
          "module": "Bind.Marshal.TypePrelude",
          "name": "TypePrelude",
          "package": "bind-marshal",
          "partial": "Type Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-TypePrelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.TypePrelude",
          "name": "Concat",
          "package": "bind-marshal",
          "signature": "Concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal TypePrelude",
          "module": "Bind.Marshal.TypePrelude",
          "name": "Concat",
          "package": "bind-marshal",
          "partial": "Concat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-TypePrelude.html#t:Concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.TypePrelude",
          "name": "Cons",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-TypePrelude.html#Cons",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal TypePrelude",
          "module": "Bind.Marshal.TypePrelude",
          "name": "Cons",
          "package": "bind-marshal",
          "partial": "Cons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-TypePrelude.html#t:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.TypePrelude",
          "name": "Head",
          "package": "bind-marshal",
          "signature": "Head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal TypePrelude",
          "module": "Bind.Marshal.TypePrelude",
          "name": "Head",
          "package": "bind-marshal",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-TypePrelude.html#t:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.TypePrelude",
          "name": "Nil",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-TypePrelude.html#Nil",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bind Marshal TypePrelude",
          "module": "Bind.Marshal.TypePrelude",
          "name": "Nil",
          "package": "bind-marshal",
          "partial": "Nil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-TypePrelude.html#t:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.TypePrelude",
          "name": "ReifiesTo",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal-TypePrelude.html#ReifiesTo",
          "type": "class"
        },
        "index": {
          "hierarchy": "Bind Marshal TypePrelude",
          "module": "Bind.Marshal.TypePrelude",
          "name": "ReifiesTo",
          "package": "bind-marshal",
          "partial": "Reifies To",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-TypePrelude.html#t:ReifiesTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.TypePrelude",
          "name": "ReverseList",
          "package": "bind-marshal",
          "signature": "ReverseList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal TypePrelude",
          "module": "Bind.Marshal.TypePrelude",
          "name": "ReverseList",
          "package": "bind-marshal",
          "partial": "Reverse List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-TypePrelude.html#t:ReverseList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.TypePrelude",
          "name": "Tail",
          "package": "bind-marshal",
          "signature": "Tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bind Marshal TypePrelude",
          "module": "Bind.Marshal.TypePrelude",
          "name": "Tail",
          "package": "bind-marshal",
          "partial": "Tail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-TypePrelude.html#t:Tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal.TypePrelude",
          "name": "reify",
          "package": "bind-marshal",
          "signature": "t -\u003e r",
          "source": "src/Bind-Marshal-TypePrelude.html#reify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bind Marshal TypePrelude",
          "module": "Bind.Marshal.TypePrelude",
          "name": "reify",
          "normalized": "a-\u003eb",
          "package": "bind-marshal",
          "signature": "t-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal-TypePrelude.html#v:reify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bind.Marshal",
          "name": "Marshal",
          "package": "bind-marshal",
          "source": "src/Bind-Marshal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bind Marshal",
          "module": "Bind.Marshal",
          "name": "Marshal",
          "package": "bind-marshal",
          "partial": "Marshal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bind-marshal/docs/Bind-Marshal.html#"
      }
    }
  ]
]