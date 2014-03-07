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
        "word": "Stasis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStasis is a modified implementation of Multi-version concurrency control MVCC.\n     The original purpose of Stasis was to provide a mechanism for having safe,\n     \"mutable\" variables WITHOUT any locking whatsoever.\n\u003c/p\u003e\u003cp\u003eHow Stasis works\n\u003c/p\u003e\u003cp\u003eGiven an object a.\n     When a is passed to a function it is wrapped in a \u003ccode\u003e\u003ca\u003ePod\u003c/a\u003e\u003c/code\u003e which creates a\n     \u003ca\u003estasis\u003c/a\u003e like environment for a.\n\u003c/p\u003e\u003cp\u003eAt any point, any function that received the \u003ccode\u003e\u003ca\u003ePod\u003c/a\u003e\u003c/code\u003e can \"update\" it by\n     \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003eting a new version of a.\n\u003c/p\u003e\u003cp\u003ei.e. a itself is not updated, it is replaced. So what the \u003ccode\u003e\u003ca\u003ePod\u003c/a\u003e\u003c/code\u003e does is \n     store the address of an a and an update changes the address the \u003ccode\u003e\u003ca\u003ePod\u003c/a\u003e\u003c/code\u003e points \n     to, to another a.\n\u003c/p\u003e\u003cp\u003eThe address of a can only change to point to another value of a,\n     i.e. it is type safe.\n\u003c/p\u003e\u003cp\u003eAt any time, a function who's received a \u003ccode\u003e\u003ca\u003ePod\u003c/a\u003e\u003c/code\u003e can \u003ca\u003efreeze\u003c/a\u003e it. In this case, \n     every time that function \u003ccode\u003e\u003ca\u003efetch\u003c/a\u003e\u003c/code\u003ees a from the \u003ccode\u003e\u003ca\u003eFrozenPod\u003c/a\u003e\u003c/code\u003e, the same version \n     that was frozen is always returned and at any time the function can also get \n     the latest version of a by \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003eting the current non-frozen version.\n\u003c/p\u003e\u003cp\u003eInternally b maintains a map of addresses to frozen IDs, when a function\n     freezes a version of a it stores the address of a with a unique freeze id\n     that is returned to the function. The function must then pass the freeze id\n     each time it wants to get the frozen version of a for that id. This also means\n     that a function can lock multiple versions of a.\n\u003c/p\u003e\u003cp\u003eOriginally the intention was to use pointers but IORefs works with atomic\n     operations and achieves effectively the same thing.\n     \u003ca\u003ehttp://hackage.haskell.org/package/base-4.5.1.0/docs/Foreign-StablePtr.html\u003c/a\u003e\n     \u003ca\u003ehttp://hackage.haskell.org/package/base-4.6.0.1/docs/Data-IORef.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Stasis",
          "name": "Stasis",
          "package": "Stasis",
          "source": "src/Control-Stasis.html",
          "type": "module"
        },
        "index": {
          "description": "Stasis is modified implementation of Multi-version concurrency control MVCC The original purpose of Stasis was to provide mechanism for having safe mutable variables WITHOUT any locking whatsoever How Stasis works Given an object When is passed to function it is wrapped in Pod which creates stasis like environment for At any point any function that received the Pod can update it by put ting new version of i.e itself is not updated it is replaced So what the Pod does is store the address of an and an update changes the address the Pod points to to another The address of can only change to point to another value of i.e it is type safe At any time function who received Pod can freeze it In this case every time that function fetch es from the FrozenPod the same version that was frozen is always returned and at any time the function can also get the latest version of by get ting the current non-frozen version Internally maintains map of addresses to frozen IDs when function freezes version of it stores the address of with unique freeze id that is returned to the function The function must then pass the freeze id each time it wants to get the frozen version of for that id This also means that function can lock multiple versions of Originally the intention was to use pointers but IORefs works with atomic operations and achieves effectively the same thing http hackage.haskell.org package base-4.5.1.0 docs Foreign-StablePtr.html http hackage.haskell.org package base-4.6.0.1 docs Data-IORef.html",
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "Stasis",
          "package": "Stasis",
          "partial": "Stasis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "FrozenPod",
          "package": "Stasis",
          "source": "src/Control-Stasis.html#FrozenPod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "FrozenPod",
          "package": "Stasis",
          "partial": "Frozen Pod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#t:FrozenPod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "Pod",
          "package": "Stasis",
          "source": "src/Control-Stasis.html#Pod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "Pod",
          "package": "Stasis",
          "partial": "Pod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#t:Pod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "FrozenPod",
          "package": "Stasis",
          "signature": "FrozenPod",
          "source": "src/Control-Stasis.html#FrozenPod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "FrozenPod",
          "package": "Stasis",
          "partial": "Frozen Pod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:FrozenPod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "Stasis",
          "package": "Stasis",
          "signature": "Stasis",
          "source": "src/Control-Stasis.html#Pod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "Stasis",
          "package": "Stasis",
          "partial": "Stasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:Stasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "addr",
          "package": "Stasis",
          "signature": "a",
          "source": "src/Control-Stasis.html#FrozenPod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "addr",
          "package": "Stasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefrosting a \u003ccode\u003e\u003ca\u003eFrozenPod\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePod\u003c/a\u003e\u003c/code\u003e causes the value in stasis to be de-referenced.\nOnce this happens the value can be GC'd as would normally happen. Unless another function\nhas frozen the same version, in which case that function has to unfreeze the value as well\n\u003c/p\u003e",
          "module": "Control.Stasis",
          "name": "defrost",
          "package": "Stasis",
          "signature": "FrozenPod a -\u003e IO (Pod a)",
          "source": "src/Control-Stasis.html#defrost",
          "type": "function"
        },
        "index": {
          "description": "Defrosting FrozenPod to Pod causes the value in stasis to be de-referenced Once this happens the value can be GC as would normally happen Unless another function has frozen the same version in which case that function has to unfreeze the value as well",
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "defrost",
          "normalized": "FrozenPod a-\u003eIO(Pod a)",
          "package": "Stasis",
          "signature": "FrozenPod a-\u003eIO(Pod a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:defrost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the frozen value from the given \u003ccode\u003e\u003ca\u003eFrozenPod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Stasis",
          "name": "fetch",
          "package": "Stasis",
          "signature": "FrozenPod a -\u003e a",
          "source": "src/Control-Stasis.html#fetch",
          "type": "function"
        },
        "index": {
          "description": "Fetch the frozen value from the given FrozenPod",
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "fetch",
          "normalized": "FrozenPod a-\u003ea",
          "package": "Stasis",
          "signature": "FrozenPod a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze the value of a at the current version\n\u003c/p\u003e",
          "module": "Control.Stasis",
          "name": "freeze",
          "package": "Stasis",
          "signature": "Pod a -\u003e IO (FrozenPod a)",
          "source": "src/Control-Stasis.html#freeze",
          "type": "function"
        },
        "index": {
          "description": "Freeze the value of at the current version",
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "freeze",
          "normalized": "Pod a-\u003eIO(FrozenPod a)",
          "package": "Stasis",
          "signature": "Pod a-\u003eIO(FrozenPod a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "frozenAt",
          "package": "Stasis",
          "signature": "Int",
          "source": "src/Control-Stasis.html#FrozenPod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "frozenAt",
          "package": "Stasis",
          "partial": "At",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:frozenAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "frozenVersions",
          "package": "Stasis",
          "signature": "IORef (Map a Int)",
          "source": "src/Control-Stasis.html#Pod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "frozenVersions",
          "package": "Stasis",
          "partial": "Versions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:frozenVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value currently in \u003ccode\u003e\u003ca\u003eStasis\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Stasis",
          "name": "get",
          "package": "Stasis",
          "signature": "Pod a -\u003e IO a",
          "source": "src/Control-Stasis.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get the value currently in Stasis",
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "get",
          "normalized": "Pod a-\u003eIO a",
          "package": "Stasis",
          "signature": "Pod a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e works great when there is a single writer but if multiple threads are writing new versions it is sometimes\nuseful to be able to merge the current value with a new value to create a new version. This function allows for this\nand enables the ability for multiple writers to create new versions while minimizing the probability of version loss\n\u003c/p\u003e",
          "module": "Control.Stasis",
          "name": "merge",
          "package": "Stasis",
          "signature": "a-\u003e Pod a-\u003e (a -\u003e a -\u003e a)-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "put works great when there is single writer but if multiple threads are writing new versions it is sometimes useful to be able to merge the current value with new value to create new version This function allows for this and enables the ability for multiple writers to create new versions while minimizing the probability of version loss",
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "merge",
          "normalized": "a-\u003ePod a-\u003e(a-\u003ea-\u003ea)-\u003eIO Bool",
          "package": "Stasis",
          "signature": "a-\u003ePod a-\u003e(a-\u003ea-\u003ea)-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "oPod",
          "package": "Stasis",
          "signature": "Pod a",
          "source": "src/Control-Stasis.html#FrozenPod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "oPod",
          "package": "Stasis",
          "partial": "Pod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:oPod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "put",
          "package": "Stasis",
          "signature": "a -\u003e Pod a -\u003e IO Bool",
          "source": "src/Control-Stasis.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "put",
          "normalized": "a-\u003ePod a-\u003eIO Bool",
          "package": "Stasis",
          "signature": "a-\u003ePod a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "stasis",
          "package": "Stasis",
          "signature": "a -\u003e IO (Pod a)",
          "source": "src/Control-Stasis.html#stasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "stasis",
          "normalized": "a-\u003eIO(Pod a)",
          "package": "Stasis",
          "signature": "a-\u003eIO(Pod a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:stasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Stasis",
          "name": "val",
          "package": "Stasis",
          "signature": "IORef (PodContent a)",
          "source": "src/Control-Stasis.html#Pod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "val",
          "package": "Stasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the current version of a \u003ccode\u003e\u003ca\u003ePod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Stasis",
          "name": "version",
          "package": "Stasis",
          "signature": "Pod a -\u003e IO Int",
          "source": "src/Control-Stasis.html#version",
          "type": "function"
        },
        "index": {
          "description": "Fetch the current version of Pod",
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "version",
          "normalized": "Pod a-\u003eIO Int",
          "package": "Stasis",
          "signature": "Pod a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch the version the value was frozen at\n\u003c/p\u003e",
          "module": "Control.Stasis",
          "name": "versionF",
          "package": "Stasis",
          "signature": "FrozenPod a -\u003e Int",
          "source": "src/Control-Stasis.html#versionF",
          "type": "function"
        },
        "index": {
          "description": "Fetch the version the value was frozen at",
          "hierarchy": "Control Stasis",
          "module": "Control.Stasis",
          "name": "versionF",
          "normalized": "FrozenPod a-\u003eInt",
          "package": "Stasis",
          "signature": "FrozenPod a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Stasis.html#v:versionF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "Stasis",
          "package": "Stasis",
          "source": "src/Control-Unsafe-Stasis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "Stasis",
          "package": "Stasis",
          "partial": "Stasis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "FrozenPod",
          "package": "Stasis",
          "source": "src/Control-Unsafe-Stasis.html#FrozenPod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "FrozenPod",
          "package": "Stasis",
          "partial": "Frozen Pod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#t:FrozenPod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "Pod",
          "package": "Stasis",
          "source": "src/Control-Unsafe-Stasis.html#Pod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "Pod",
          "package": "Stasis",
          "partial": "Pod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#t:Pod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "FrozenPod",
          "package": "Stasis",
          "signature": "FrozenPod",
          "source": "src/Control-Unsafe-Stasis.html#FrozenPod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "FrozenPod",
          "package": "Stasis",
          "partial": "Frozen Pod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:FrozenPod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "Stasis",
          "package": "Stasis",
          "signature": "Stasis",
          "source": "src/Control-Unsafe-Stasis.html#Pod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "Stasis",
          "package": "Stasis",
          "partial": "Stasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:Stasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "addr",
          "package": "Stasis",
          "signature": "Pod a",
          "source": "src/Control-Unsafe-Stasis.html#FrozenPod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "addr",
          "package": "Stasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "frozenId",
          "package": "Stasis",
          "signature": "Int",
          "source": "src/Control-Unsafe-Stasis.html#FrozenPod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "frozenId",
          "package": "Stasis",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:frozenId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "frozenVersions",
          "package": "Stasis",
          "signature": "IORef (Map a Int)",
          "source": "src/Control-Unsafe-Stasis.html#Pod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "frozenVersions",
          "package": "Stasis",
          "partial": "Versions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:frozenVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "get",
          "package": "Stasis",
          "signature": "Pod a -\u003e a",
          "source": "src/Control-Unsafe-Stasis.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "get",
          "normalized": "Pod a-\u003ea",
          "package": "Stasis",
          "signature": "Pod a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "put",
          "package": "Stasis",
          "signature": "a -\u003e Pod a -\u003e Bool",
          "source": "src/Control-Unsafe-Stasis.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "put",
          "normalized": "a-\u003ePod a-\u003eBool",
          "package": "Stasis",
          "signature": "a-\u003ePod a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "stasis",
          "package": "Stasis",
          "signature": "a -\u003e Pod a",
          "source": "src/Control-Unsafe-Stasis.html#stasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "stasis",
          "normalized": "a-\u003ePod a",
          "package": "Stasis",
          "signature": "a-\u003ePod a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:stasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "val",
          "package": "Stasis",
          "signature": "IORef (PodContent a)",
          "source": "src/Control-Unsafe-Stasis.html#Pod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "val",
          "package": "Stasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Unsafe.Stasis",
          "name": "version",
          "package": "Stasis",
          "signature": "Pod a -\u003e Int",
          "source": "src/Control-Unsafe-Stasis.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Unsafe Stasis",
          "module": "Control.Unsafe.Stasis",
          "name": "version",
          "normalized": "Pod a-\u003eInt",
          "package": "Stasis",
          "signature": "Pod a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stasis/docs/Control-Unsafe-Stasis.html#v:version"
      }
    }
  ]
]