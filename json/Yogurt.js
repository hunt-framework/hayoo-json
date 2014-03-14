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
        "word": "Yogurt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core of Yogurt, consisting of the Mud monad and all functions manipulating this monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "Mud",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Mud.html",
          "type": "module"
        },
        "index": {
          "description": "The core of Yogurt consisting of the Mud monad and all functions manipulating this monad",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "Mud",
          "package": "Yogurt",
          "partial": "Mud",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe direction in which a message is going.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "Destination",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Mud.html#Destination",
          "type": "data"
        },
        "index": {
          "description": "The direction in which message is going",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "Destination",
          "package": "Yogurt",
          "partial": "Destination",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#t:Destination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract \u003ccode\u003eHook\u003c/code\u003e type. For every pair of hooks \u003ccode\u003e(h1, h2)\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eh1 == h2\u003c/code\u003e iff they were created by the same call to \u003ccode\u003e\u003ca\u003emkHook\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eh1 \u003c h2\u003c/code\u003e iff \u003ccode\u003eh1\u003c/code\u003e will match earlier than \u003ccode\u003eh2\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "Hook",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Mud.html#Hook",
          "type": "data"
        },
        "index": {
          "description": "The abstract Hook type For every pair of hooks h1 h2 h1 h2 iff they were created by the same call to mkHook h1 h2 iff h1 will match earlier than h2",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "Hook",
          "package": "Yogurt",
          "partial": "Hook",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#t:Hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Mud monad is a state monad over IO.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "Mud",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Mud.html#Mud",
          "type": "type"
        },
        "index": {
          "description": "The Mud monad is state monad over IO",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "Mud",
          "package": "Yogurt",
          "partial": "Mud",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#t:Mud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState internal to the Mud monad.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "MudState",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Mud.html#MudState",
          "type": "data"
        },
        "index": {
          "description": "State internal to the Mud monad",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "MudState",
          "package": "Yogurt",
          "partial": "Mud State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#t:MudState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a way to output messages.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "Output",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Mud.html#Output",
          "type": "type"
        },
        "index": {
          "description": "Provides way to output messages",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "Output",
          "package": "Yogurt",
          "partial": "Output",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003ePattern\u003c/code\u003e is a regular expression.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "Pattern",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Mud.html#Pattern",
          "type": "type"
        },
        "index": {
          "description": "Pattern is regular expression",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "Pattern",
          "package": "Yogurt",
          "partial": "Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Mud computation in IO. A common implementation of this function is \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunMud\u003c/a\u003e\u003c/code\u003e vState\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "RunMud",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Mud.html#RunMud",
          "type": "type"
        },
        "index": {
          "description": "Run Mud computation in IO common implementation of this function is runMud vState",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "RunMud",
          "package": "Yogurt",
          "partial": "Run Mud",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#t:RunMud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables hold updatable, typed data.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "Var",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Mud.html#Var",
          "type": "data"
        },
        "index": {
          "description": "Variables hold updatable typed data",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "Var",
          "package": "Yogurt",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message is headed towards the user's terminal.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "Local",
          "package": "Yogurt",
          "signature": "Local",
          "source": "src/Network-Yogurt-Mud.html#Destination",
          "type": "function"
        },
        "index": {
          "description": "The message is headed towards the user terminal",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "Local",
          "package": "Yogurt",
          "partial": "Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:Local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message is headed towards the remote MUD server.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "Remote",
          "package": "Yogurt",
          "signature": "Remote",
          "source": "src/Network-Yogurt-Mud.html#Destination",
          "type": "function"
        },
        "index": {
          "description": "The message is headed towards the remote MUD server",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "Remote",
          "package": "Yogurt",
          "partial": "Remote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:Remote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the part of the triggering message that comes after the matched pattern.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "after",
          "package": "Yogurt",
          "signature": "Mud String",
          "source": "src/Network-Yogurt-Mud.html#after",
          "type": "function"
        },
        "index": {
          "description": "Yields the part of the triggering message that comes after the matched pattern",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "after",
          "package": "Yogurt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields all current hooks in preferred firing order.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "allHooks",
          "package": "Yogurt",
          "signature": "Mud [Hook]",
          "source": "src/Network-Yogurt-Mud.html#allHooks",
          "type": "function"
        },
        "index": {
          "description": "Yields all current hooks in preferred firing order",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "allHooks",
          "normalized": "Mud[Hook]",
          "package": "Yogurt",
          "partial": "Hooks",
          "signature": "Mud[Hook]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:allHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the part of the triggering message that comes before the matched pattern.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "before",
          "package": "Yogurt",
          "signature": "Mud String",
          "source": "src/Network-Yogurt-Mud.html#before",
          "type": "function"
        },
        "index": {
          "description": "Yields the part of the triggering message that comes before the matched pattern",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "before",
          "package": "Yogurt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial state of the Mud monad. The \u003ccode\u003e\u003ca\u003eRunMud\u003c/a\u003e\u003c/code\u003e argument is stored in the state to make \u003ccode\u003e\u003ca\u003eforkWithCallback\u003c/a\u003e\u003c/code\u003e possible; the \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e argument is used by \u003ccode\u003e\u003ca\u003eMud\u003c/a\u003e\u003c/code\u003e computations for messages leaving the engine.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "emptyMud",
          "package": "Yogurt",
          "signature": "RunMud -\u003e Output -\u003e MudState",
          "source": "src/Network-Yogurt-Mud.html#emptyMud",
          "type": "function"
        },
        "index": {
          "description": "The initial state of the Mud monad The RunMud argument is stored in the state to make forkWithCallback possible the Output argument is used by Mud computations for messages leaving the engine",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "emptyMud",
          "normalized": "RunMud-\u003eOutput-\u003eMudState",
          "package": "Yogurt",
          "partial": "Mud",
          "signature": "RunMud-\u003eOutput-\u003eMudState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:emptyMud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when you want a forked thread to be able to call back into the \u003ccode\u003eMud\u003c/code\u003e monad.\n Note that when using the \u003ccode\u003eRunMud\u003c/code\u003e argument, the forked thread will have to contend\n with the threads for the user input and MUD input, because only one \u003ccode\u003eMud\u003c/code\u003e computation\n can run at any given time. The id of the forked thread is returned.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "forkWithCallback",
          "package": "Yogurt",
          "signature": "(RunMud -\u003e IO ()) -\u003e Mud ThreadId",
          "source": "src/Network-Yogurt-Mud.html#forkWithCallback",
          "type": "function"
        },
        "index": {
          "description": "Used when you want forked thread to be able to call back into the Mud monad Note that when using the RunMud argument the forked thread will have to contend with the threads for the user input and MUD input because only one Mud computation can run at any given time The id of the forked thread is returned",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "forkWithCallback",
          "normalized": "(RunMud-\u003eIO())-\u003eMud ThreadId",
          "package": "Yogurt",
          "partial": "With Callback",
          "signature": "(RunMud-\u003eIO())-\u003eMud ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:forkWithCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the regex group from the matched pattern. \u003ccode\u003egroup 0\u003c/code\u003e yields the complete match; higher indices correspond to the parenthesized groups.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "group",
          "package": "Yogurt",
          "signature": "Int -\u003e Mud String",
          "source": "src/Network-Yogurt-Mud.html#group",
          "type": "function"
        },
        "index": {
          "description": "Yields the regex group from the matched pattern group yields the complete match higher indices correspond to the parenthesized groups",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "group",
          "normalized": "Int-\u003eMud String",
          "package": "Yogurt",
          "signature": "Int-\u003eMud String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the Mud program to execute when the hook fires.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "hAction",
          "package": "Yogurt",
          "signature": "Hook -\u003e Mud ()",
          "source": "src/Network-Yogurt-Mud.html#hAction",
          "type": "function"
        },
        "index": {
          "description": "Yields the Mud program to execute when the hook fires",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "hAction",
          "normalized": "Hook-\u003eMud()",
          "package": "Yogurt",
          "partial": "Action",
          "signature": "Hook-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:hAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the destination this hook watches.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "hDestination",
          "package": "Yogurt",
          "signature": "Hook -\u003e Destination",
          "source": "src/Network-Yogurt-Mud.html#hDestination",
          "type": "function"
        },
        "index": {
          "description": "Yields the destination this hook watches",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "hDestination",
          "normalized": "Hook-\u003eDestination",
          "package": "Yogurt",
          "partial": "Destination",
          "signature": "Hook-\u003eDestination",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:hDestination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the pattern messages must have for this hook to fire.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "hPattern",
          "package": "Yogurt",
          "signature": "Hook -\u003e Pattern",
          "source": "src/Network-Yogurt-Mud.html#hPattern",
          "type": "function"
        },
        "index": {
          "description": "Yields the pattern messages must have for this hook to fire",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "hPattern",
          "normalized": "Hook-\u003ePattern",
          "package": "Yogurt",
          "partial": "Pattern",
          "signature": "Hook-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:hPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the hook's priority. \n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "hPriority",
          "package": "Yogurt",
          "signature": "Hook -\u003e Int",
          "source": "src/Network-Yogurt-Mud.html#hPriority",
          "type": "function"
        },
        "index": {
          "description": "Yields the hook priority",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "hPriority",
          "normalized": "Hook-\u003eInt",
          "package": "Yogurt",
          "partial": "Priority",
          "signature": "Hook-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:hPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediately write a message to a destination, without triggering hooks.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "io",
          "package": "Yogurt",
          "signature": "Destination -\u003e String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Mud.html#io",
          "type": "function"
        },
        "index": {
          "description": "Immediately write message to destination without triggering hooks",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "io",
          "normalized": "Destination-\u003eString-\u003eMud()",
          "package": "Yogurt",
          "signature": "Destination-\u003eString-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "liftIO",
          "package": "Yogurt",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "Yogurt",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the message that triggered the currently firing hook.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "matchedLine",
          "package": "Yogurt",
          "signature": "Mud String",
          "source": "src/Network-Yogurt-Mud.html#matchedLine",
          "type": "function"
        },
        "index": {
          "description": "Yields the message that triggered the currently firing hook",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "matchedLine",
          "package": "Yogurt",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:matchedLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003e\u003ca\u003emkPrioHook\u003c/a\u003e\u003c/code\u003e with priority 0.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "mkHook",
          "package": "Yogurt",
          "signature": "Destination -\u003e Pattern -\u003e Mud a -\u003e Mud Hook",
          "source": "src/Network-Yogurt-Mud.html#mkHook",
          "type": "function"
        },
        "index": {
          "description": "Calls mkPrioHook with priority",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "mkHook",
          "normalized": "Destination-\u003ePattern-\u003eMud a-\u003eMud Hook",
          "package": "Yogurt",
          "partial": "Hook",
          "signature": "Destination-\u003ePattern-\u003eMud a-\u003eMud Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:mkHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates and installs a hook that watches messages headed to the specified destination and match the specified pattern.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "mkPrioHook",
          "package": "Yogurt",
          "signature": "Int -\u003e Destination -\u003e Pattern -\u003e Mud a -\u003e Mud Hook",
          "source": "src/Network-Yogurt-Mud.html#mkPrioHook",
          "type": "function"
        },
        "index": {
          "description": "Creates and installs hook that watches messages headed to the specified destination and match the specified pattern",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "mkPrioHook",
          "normalized": "Int-\u003eDestination-\u003ePattern-\u003eMud a-\u003eMud Hook",
          "package": "Yogurt",
          "partial": "Prio Hook",
          "signature": "Int-\u003eDestination-\u003ePattern-\u003eMud a-\u003eMud Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:mkPrioHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a variable with an initial value.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "mkVar",
          "package": "Yogurt",
          "signature": "a -\u003e Mud (Var a)",
          "source": "src/Network-Yogurt-Mud.html#mkVar",
          "type": "function"
        },
        "index": {
          "description": "Creates variable with an initial value",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "mkVar",
          "normalized": "a-\u003eMud(Var a)",
          "package": "Yogurt",
          "partial": "Var",
          "signature": "a-\u003eMud(Var a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:mkVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates the variable using the update function.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "modifyVar",
          "package": "Yogurt",
          "signature": "Var a -\u003e (a -\u003e a) -\u003e Mud ()",
          "source": "src/Network-Yogurt-Mud.html#modifyVar",
          "type": "function"
        },
        "index": {
          "description": "Updates the variable using the update function",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "modifyVar",
          "normalized": "Var a-\u003e(a-\u003ea)-\u003eMud()",
          "package": "Yogurt",
          "partial": "Var",
          "signature": "Var a-\u003e(a-\u003ea)-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:modifyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the variable's current value.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "readVar",
          "package": "Yogurt",
          "signature": "Var a -\u003e Mud a",
          "source": "src/Network-Yogurt-Mud.html#readVar",
          "type": "function"
        },
        "index": {
          "description": "Yields the variable current value",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "readVar",
          "normalized": "Var a-\u003eMud a",
          "package": "Yogurt",
          "partial": "Var",
          "signature": "Var a-\u003eMud a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:readVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables a hook.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "rmHook",
          "package": "Yogurt",
          "signature": "Hook -\u003e Mud ()",
          "source": "src/Network-Yogurt-Mud.html#rmHook",
          "type": "function"
        },
        "index": {
          "description": "Disables hook",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "rmHook",
          "normalized": "Hook-\u003eMud()",
          "package": "Yogurt",
          "partial": "Hook",
          "signature": "Hook-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:rmHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eMud\u003c/a\u003e\u003c/code\u003e computation, executes the results (such as sending messages to the screen or the MUD) and returns the computation's result. The \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is updated.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "runMud",
          "package": "Yogurt",
          "signature": "MVar MudState -\u003e RunMud",
          "source": "src/Network-Yogurt-Mud.html#runMud",
          "type": "function"
        },
        "index": {
          "description": "Runs Mud computation executes the results such as sending messages to the screen or the MUD and returns the computation result The MVar is updated",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "runMud",
          "normalized": "MVar MudState-\u003eRunMud",
          "package": "Yogurt",
          "partial": "Mud",
          "signature": "MVar MudState-\u003eRunMud",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:runMud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves a changed hook, or reactivates it.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "setHook",
          "package": "Yogurt",
          "signature": "Hook -\u003e Mud ()",
          "source": "src/Network-Yogurt-Mud.html#setHook",
          "type": "function"
        },
        "index": {
          "description": "Saves changed hook or reactivates it",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "setHook",
          "normalized": "Hook-\u003eMud()",
          "package": "Yogurt",
          "partial": "Hook",
          "signature": "Hook-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:setHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a variable to a new value.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "setVar",
          "package": "Yogurt",
          "signature": "Var a -\u003e a -\u003e Mud ()",
          "source": "src/Network-Yogurt-Mud.html#setVar",
          "type": "function"
        },
        "index": {
          "description": "Updates variable to new value",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "setVar",
          "normalized": "Var a-\u003ea-\u003eMud()",
          "package": "Yogurt",
          "partial": "Var",
          "signature": "Var a-\u003ea-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:setVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort for \u003ccode\u003e\u003ccode\u003e\u003ca\u003etriggerJust\u003c/a\u003e\u003c/code\u003e (const True)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "trigger",
          "package": "Yogurt",
          "signature": "Destination -\u003e String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Mud.html#trigger",
          "type": "function"
        },
        "index": {
          "description": "Short for triggerJust const True",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "trigger",
          "normalized": "Destination-\u003eString-\u003eMud()",
          "package": "Yogurt",
          "signature": "Destination-\u003eString-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the message triggers a hook that passes the specified test, it is fired. Otherwise, the message is passed on to the destination using \u003ccode\u003e\u003ca\u003eio\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "triggerJust",
          "package": "Yogurt",
          "signature": "(Hook -\u003e Bool) -\u003e Destination -\u003e String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Mud.html#triggerJust",
          "type": "function"
        },
        "index": {
          "description": "If the message triggers hook that passes the specified test it is fired Otherwise the message is passed on to the destination using io",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "triggerJust",
          "normalized": "(Hook-\u003eBool)-\u003eDestination-\u003eString-\u003eMud()",
          "package": "Yogurt",
          "partial": "Just",
          "signature": "(Hook-\u003eBool)-\u003eDestination-\u003eString-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:triggerJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the hook that is currently firing.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Mud",
          "name": "triggeredHook",
          "package": "Yogurt",
          "signature": "Mud Hook",
          "source": "src/Network-Yogurt-Mud.html#triggeredHook",
          "type": "function"
        },
        "index": {
          "description": "Yields the hook that is currently firing",
          "hierarchy": "Network Yogurt Mud",
          "module": "Network.Yogurt.Mud",
          "name": "triggeredHook",
          "package": "Yogurt",
          "partial": "Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Mud.html#v:triggeredHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSessions are used by Yogurt's standalone executable \u003ccode\u003eyogurt\u003c/code\u003e; see package \u003ccode\u003eYogurt-Standalone\u003c/code\u003e on hackage.\n\u003c/p\u003e\u003cp\u003eEvery Yogurt file loaded by \u003ccode\u003eyogurt\u003c/code\u003e should define a value of type \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e. For future compatibility, such a session is best defined using \u003ccode\u003e\u003ca\u003esession\u003c/a\u003e\u003c/code\u003e as starting value:\n\u003c/p\u003e\u003cpre\u003e import Network.Yogurt\n\n newmoon :: Session\n newmoon = session\n   { hostName   = \"eclipse.cs.pdx.edu\"\n   , portNumber = 7680\n   , mudProgram = \\reload -\u003e do\n       mkCommand \"reload\" reload\n   }\n\u003c/pre\u003e\u003cp\u003eA module is free to define multiple sessions, in which case you will have to tell \u003ccode\u003eyogurt\u003c/code\u003e which session to load.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Yogurt.Session",
          "name": "Session",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Session.html",
          "type": "module"
        },
        "index": {
          "description": "Sessions are used by Yogurt standalone executable yogurt see package Yogurt-Standalone on hackage Every Yogurt file loaded by yogurt should define value of type Session For future compatibility such session is best defined using session as starting value import Network.Yogurt newmoon Session newmoon session hostName eclipse.cs.pdx.edu portNumber mudProgram reload do mkCommand reload reload module is free to define multiple sessions in which case you will have to tell yogurt which session to load",
          "hierarchy": "Network Yogurt Session",
          "module": "Network.Yogurt.Session",
          "name": "Session",
          "package": "Yogurt",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen executed, reloads the session from disk without interrupting the MUD connection. If the reloaded\n   session contains no errors, all hooks are uninstalled before the reloaded program is executed. Timers\n   are \u003cem\u003enot\u003c/em\u003e stopped and previous variables will still be reachable if you hang on to their handles.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Session",
          "name": "Reload",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Session.html#Reload",
          "type": "type"
        },
        "index": {
          "description": "When executed reloads the session from disk without interrupting the MUD connection If the reloaded session contains no errors all hooks are uninstalled before the reloaded program is executed Timers are not stopped and previous variables will still be reachable if you hang on to their handles",
          "hierarchy": "Network Yogurt Session",
          "module": "Network.Yogurt.Session",
          "name": "Reload",
          "package": "Yogurt",
          "partial": "Reload",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Session.html#t:Reload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a MUD session.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Session",
          "name": "Session",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Session.html#Session",
          "type": "data"
        },
        "index": {
          "description": "Describes MUD session",
          "hierarchy": "Network Yogurt Session",
          "module": "Network.Yogurt.Session",
          "name": "Session",
          "package": "Yogurt",
          "partial": "Session",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Session.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Yogurt.Session",
          "name": "Session",
          "package": "Yogurt",
          "signature": "Session",
          "source": "src/Network-Yogurt-Session.html#Session",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Yogurt Session",
          "module": "Network.Yogurt.Session",
          "name": "Session",
          "package": "Yogurt",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Session.html#v:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hostname to connect to.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Session",
          "name": "hostName",
          "package": "Yogurt",
          "signature": "String",
          "source": "src/Network-Yogurt-Session.html#Session",
          "type": "function"
        },
        "index": {
          "description": "The hostname to connect to",
          "hierarchy": "Network Yogurt Session",
          "module": "Network.Yogurt.Session",
          "name": "hostName",
          "package": "Yogurt",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Session.html#v:hostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial program to run. The \u003ccode\u003e\u003ca\u003eReload\u003c/a\u003e\u003c/code\u003e argument provides a way to\n   reload the plugin without interrupting the MUD connection.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Session",
          "name": "mudProgram",
          "package": "Yogurt",
          "signature": "Reload -\u003e Mud ()",
          "source": "src/Network-Yogurt-Session.html#Session",
          "type": "function"
        },
        "index": {
          "description": "The initial program to run The Reload argument provides way to reload the plugin without interrupting the MUD connection",
          "hierarchy": "Network Yogurt Session",
          "module": "Network.Yogurt.Session",
          "name": "mudProgram",
          "normalized": "Reload-\u003eMud()",
          "package": "Yogurt",
          "partial": "Program",
          "signature": "Reload-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Session.html#v:mudProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe port to connect to.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Session",
          "name": "portNumber",
          "package": "Yogurt",
          "signature": "Int",
          "source": "src/Network-Yogurt-Session.html#Session",
          "type": "function"
        },
        "index": {
          "description": "The port to connect to",
          "hierarchy": "Network Yogurt Session",
          "module": "Network.Yogurt.Session",
          "name": "portNumber",
          "package": "Yogurt",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Session.html#v:portNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting value for sessions. The default \u003ccode\u003e\u003ca\u003emudProgram\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003ereturn ()\u003c/code\u003e. There are no default values for \u003ccode\u003e\u003ca\u003ehostName\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eportNumber\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Session",
          "name": "session",
          "package": "Yogurt",
          "signature": "Session",
          "source": "src/Network-Yogurt-Session.html#session",
          "type": "function"
        },
        "index": {
          "description": "Starting value for sessions The default mudProgram is return There are no default values for hostName and portNumber",
          "hierarchy": "Network Yogurt Session",
          "module": "Network.Yogurt.Session",
          "name": "session",
          "package": "Yogurt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Session.html#v:session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience functions on top of \u003ca\u003eYogurt.Mud\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "Utils",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience functions on top of Yogurt.Mud",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "Utils",
          "package": "Yogurt",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterval in milliseconds.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "Interval",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Utils.html#Interval",
          "type": "type"
        },
        "index": {
          "description": "Interval in milliseconds",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "Interval",
          "package": "Yogurt",
          "partial": "Interval",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Yogurt.Utils",
          "name": "Logger",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Utils.html#Logger",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "Logger",
          "package": "Yogurt",
          "partial": "Logger",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#t:Logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract Timer type.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "Timer",
          "package": "Yogurt",
          "source": "src/Network-Yogurt-Utils.html#Timer",
          "type": "data"
        },
        "index": {
          "description": "The abstract Timer type",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "Timer",
          "package": "Yogurt",
          "partial": "Timer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#t:Timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a bell character to the terminal.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "bell",
          "package": "Yogurt",
          "signature": "Mud ()",
          "source": "src/Network-Yogurt-Utils.html#bell",
          "type": "function"
        },
        "index": {
          "description": "Sends bell character to the terminal",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "bell",
          "normalized": "Mud()",
          "package": "Yogurt",
          "signature": "Mud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:bell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message to the terminal, without triggering hooks.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "echo",
          "package": "Yogurt",
          "signature": "String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#echo",
          "type": "function"
        },
        "index": {
          "description": "Sends message to the terminal without triggering hooks",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "echo",
          "normalized": "String-\u003eMud()",
          "package": "Yogurt",
          "signature": "String-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message appended with a newline character to the terminal, without triggering hooks.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "echoln",
          "package": "Yogurt",
          "signature": "String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#echoln",
          "type": "function"
        },
        "index": {
          "description": "Sends message appended with newline character to the terminal without triggering hooks",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "echoln",
          "normalized": "String-\u003eMud()",
          "package": "Yogurt",
          "signature": "String-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:echoln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message appended with a newline character to the MUD, without triggering hooks.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "echorln",
          "package": "Yogurt",
          "signature": "String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#echorln",
          "type": "function"
        },
        "index": {
          "description": "Sends message appended with newline character to the MUD without triggering hooks",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "echorln",
          "normalized": "String-\u003eMud()",
          "package": "Yogurt",
          "signature": "String-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:echorln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether a timer is active. A timer is deactivated by \u003ccode\u003e\u003ca\u003ermTimer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "isTimerActive",
          "package": "Yogurt",
          "signature": "Timer -\u003e Mud Bool",
          "source": "src/Network-Yogurt-Utils.html#isTimerActive",
          "type": "function"
        },
        "index": {
          "description": "Checks whether timer is active timer is deactivated by rmTimer",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "isTimerActive",
          "normalized": "Timer-\u003eMud Bool",
          "package": "Yogurt",
          "partial": "Timer Active",
          "signature": "Timer-\u003eMud Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:isTimerActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen called from a hook body, gives hooks that haven't been considered yet\n a chance to match on the currently triggering message. If no other hooks match,\n the message is sent on to its destination. Useful if you want to\n build a hook that only has a side-effect and doesn't want to directly affect\n the other active hooks.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "matchMore",
          "package": "Yogurt",
          "signature": "Mud ()",
          "source": "src/Network-Yogurt-Utils.html#matchMore",
          "type": "function"
        },
        "index": {
          "description": "When called from hook body gives hooks that haven been considered yet chance to match on the currently triggering message If no other hooks match the message is sent on to its destination Useful if you want to build hook that only has side-effect and doesn want to directly affect the other active hooks",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "matchMore",
          "normalized": "Mud()",
          "package": "Yogurt",
          "partial": "More",
          "signature": "Mud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:matchMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ematchMore\u003c/a\u003e\u003c/code\u003e, but allows specification of the message that is passed on.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "matchMoreOn",
          "package": "Yogurt",
          "signature": "String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#matchMoreOn",
          "type": "function"
        },
        "index": {
          "description": "Like matchMore but allows specification of the message that is passed on",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "matchMoreOn",
          "normalized": "String-\u003eMud()",
          "package": "Yogurt",
          "partial": "More On",
          "signature": "String-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:matchMoreOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ematchMoreOn\u003c/a\u003e\u003c/code\u003e, but also makes the currently firing hook eligible for firing again.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "matchMoreOn'",
          "package": "Yogurt",
          "signature": "String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#matchMoreOn%27",
          "type": "function"
        },
        "index": {
          "description": "Like matchMoreOn but also makes the currently firing hook eligible for firing again",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "matchMoreOn'",
          "normalized": "String-\u003eMud()",
          "package": "Yogurt",
          "partial": "More On'",
          "signature": "String-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:matchMoreOn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emkAlias command subst\u003c/code\u003e creates a hook that watches messages headed to the remote MUD. If the message is or starts with the word \u003ccode\u003ecommand\u003c/code\u003e, the command is replaced by \u003ccode\u003esubst\u003c/code\u003e before being sent to the MUD.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "mkAlias",
          "package": "Yogurt",
          "signature": "String -\u003e String -\u003e Mud Hook",
          "source": "src/Network-Yogurt-Utils.html#mkAlias",
          "type": "function"
        },
        "index": {
          "description": "mkAlias command subst creates hook that watches messages headed to the remote MUD If the message is or starts with the word command the command is replaced by subst before being sent to the MUD",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "mkAlias",
          "normalized": "String-\u003eString-\u003eMud Hook",
          "package": "Yogurt",
          "partial": "Alias",
          "signature": "String-\u003eString-\u003eMud Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:mkAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emkAlias\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003emkArgAlias command subst\u003c/code\u003e creates a hook that watches messages headed to the remote MUD. But here the whole message is substituted instead of just the first command word, and the substitution depends on the command's arguments.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "mkArgAlias",
          "package": "Yogurt",
          "signature": "String -\u003e ([String] -\u003e String) -\u003e Mud Hook",
          "source": "src/Network-Yogurt-Utils.html#mkArgAlias",
          "type": "function"
        },
        "index": {
          "description": "Like mkAlias mkArgAlias command subst creates hook that watches messages headed to the remote MUD But here the whole message is substituted instead of just the first command word and the substitution depends on the command arguments",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "mkArgAlias",
          "normalized": "String-\u003e([String]-\u003eString)-\u003eMud Hook",
          "package": "Yogurt",
          "partial": "Arg Alias",
          "signature": "String-\u003e([String]-\u003eString)-\u003eMud Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:mkArgAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emkAlias\u003c/a\u003e\u003c/code\u003e, but instead of substituting the command, a program is executed. The command's arguments are available as \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e 1.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "mkCommand",
          "package": "Yogurt",
          "signature": "String -\u003e Mud a -\u003e Mud Hook",
          "source": "src/Network-Yogurt-Utils.html#mkCommand",
          "type": "function"
        },
        "index": {
          "description": "Like mkAlias but instead of substituting the command program is executed The command arguments are available as group",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "mkCommand",
          "normalized": "String-\u003eMud a-\u003eMud Hook",
          "package": "Yogurt",
          "partial": "Command",
          "signature": "String-\u003eMud a-\u003eMud Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:mkCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emkTimer interval prog\u003c/code\u003e creates a timer that executes \u003ccode\u003eprog\u003c/code\u003e every \u003ccode\u003einterval\u003c/code\u003e milliseconds.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "mkTimer",
          "package": "Yogurt",
          "signature": "Interval -\u003e Mud a -\u003e Mud Timer",
          "source": "src/Network-Yogurt-Utils.html#mkTimer",
          "type": "function"
        },
        "index": {
          "description": "mkTimer interval prog creates timer that executes prog every interval milliseconds",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "mkTimer",
          "normalized": "Interval-\u003eMud a-\u003eMud Timer",
          "package": "Yogurt",
          "partial": "Timer",
          "signature": "Interval-\u003eMud a-\u003eMud Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:mkTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a timer that fires only once.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "mkTimerOnce",
          "package": "Yogurt",
          "signature": "Interval -\u003e Mud a -\u003e Mud Timer",
          "source": "src/Network-Yogurt-Utils.html#mkTimerOnce",
          "type": "function"
        },
        "index": {
          "description": "Creates timer that fires only once",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "mkTimerOnce",
          "normalized": "Interval-\u003eMud a-\u003eMud Timer",
          "package": "Yogurt",
          "partial": "Timer Once",
          "signature": "Interval-\u003eMud a-\u003eMud Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:mkTimerOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a hook that watches messages headed to the terminal. When fired, the message is passed on to the terminal and the action is executed.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "mkTrigger",
          "package": "Yogurt",
          "signature": "Pattern -\u003e Mud a -\u003e Mud Hook",
          "source": "src/Network-Yogurt-Utils.html#mkTrigger",
          "type": "function"
        },
        "index": {
          "description": "Creates hook that watches messages headed to the terminal When fired the message is passed on to the terminal and the action is executed",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "mkTrigger",
          "normalized": "Pattern-\u003eMud a-\u003eMud Hook",
          "package": "Yogurt",
          "partial": "Trigger",
          "signature": "Pattern-\u003eMud a-\u003eMud Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:mkTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emkTrigger\u003c/a\u003e\u003c/code\u003e, but fires at most once.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "mkTriggerOnce",
          "package": "Yogurt",
          "signature": "Pattern -\u003e Mud a -\u003e Mud Hook",
          "source": "src/Network-Yogurt-Utils.html#mkTriggerOnce",
          "type": "function"
        },
        "index": {
          "description": "Like mkTrigger but fires at most once",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "mkTriggerOnce",
          "normalized": "Pattern-\u003eMud a-\u003eMud Hook",
          "package": "Yogurt",
          "partial": "Trigger Once",
          "signature": "Pattern-\u003eMud a-\u003eMud Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:mkTriggerOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message to the terminal, triggering hooks.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "receive",
          "package": "Yogurt",
          "signature": "String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Sends message to the terminal triggering hooks",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "receive",
          "normalized": "String-\u003eMud()",
          "package": "Yogurt",
          "signature": "String-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables the timer.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "rmTimer",
          "package": "Yogurt",
          "signature": "Timer -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#rmTimer",
          "type": "function"
        },
        "index": {
          "description": "Disables the timer",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "rmTimer",
          "normalized": "Timer-\u003eMud()",
          "package": "Yogurt",
          "partial": "Timer",
          "signature": "Timer-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:rmTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message appended with a newline character to the MUD, triggering hooks.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "sendln",
          "package": "Yogurt",
          "signature": "String -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#sendln",
          "type": "function"
        },
        "index": {
          "description": "Sends message appended with newline character to the MUD triggering hooks",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "sendln",
          "normalized": "String-\u003eMud()",
          "package": "Yogurt",
          "signature": "String-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:sendln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estartLogging name\u003c/code\u003e causes all messages to be logged in a file called \u003ccode\u003ename-yyyymmdd-hhmm.log\u003c/code\u003e. The used hooks have priority 100.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "startLogging",
          "package": "Yogurt",
          "signature": "String -\u003e Mud Logger",
          "source": "src/Network-Yogurt-Utils.html#startLogging",
          "type": "function"
        },
        "index": {
          "description": "startLogging name causes all messages to be logged in file called name-yyyymmdd-hhmm.log The used hooks have priority",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "startLogging",
          "normalized": "String-\u003eMud Logger",
          "package": "Yogurt",
          "partial": "Logging",
          "signature": "String-\u003eMud Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:startLogging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops the logger.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "stopLogging",
          "package": "Yogurt",
          "signature": "Logger -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#stopLogging",
          "type": "function"
        },
        "index": {
          "description": "Stops the logger",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "stopLogging",
          "normalized": "Logger-\u003eMud()",
          "package": "Yogurt",
          "partial": "Logging",
          "signature": "Logger-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:stopLogging"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each pair \u003ccode\u003e(pattern, action)\u003c/code\u003e a hook is installed. As soon as one of the hooks fires, the hooks are removed and the corresponding action is executed.\n\u003c/p\u003e",
          "module": "Network.Yogurt.Utils",
          "name": "triggerOneOf",
          "package": "Yogurt",
          "signature": "[(Pattern, Mud ())] -\u003e Mud ()",
          "source": "src/Network-Yogurt-Utils.html#triggerOneOf",
          "type": "function"
        },
        "index": {
          "description": "For each pair pattern action hook is installed As soon as one of the hooks fires the hooks are removed and the corresponding action is executed",
          "hierarchy": "Network Yogurt Utils",
          "module": "Network.Yogurt.Utils",
          "name": "triggerOneOf",
          "normalized": "[(Pattern,Mud())]-\u003eMud()",
          "package": "Yogurt",
          "partial": "One Of",
          "signature": "[(Pattern,Mud())]-\u003eMud()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt-Utils.html#v:triggerOneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides Yogurt's version number and re-exports the other modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Yogurt",
          "name": "Yogurt",
          "package": "Yogurt",
          "source": "src/Network-Yogurt.html",
          "type": "module"
        },
        "index": {
          "description": "Provides Yogurt version number and re-exports the other modules",
          "hierarchy": "Network Yogurt",
          "module": "Network.Yogurt",
          "name": "Yogurt",
          "package": "Yogurt",
          "partial": "Yogurt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version number of this version of the library.\n\u003c/p\u003e",
          "module": "Network.Yogurt",
          "name": "version",
          "package": "Yogurt",
          "signature": "Version",
          "source": "src/Network-Yogurt.html#version",
          "type": "function"
        },
        "index": {
          "description": "The version number of this version of the library",
          "hierarchy": "Network Yogurt",
          "module": "Network.Yogurt",
          "name": "version",
          "package": "Yogurt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Yogurt/docs/Network-Yogurt.html#v:version"
      }
    }
  ]
]