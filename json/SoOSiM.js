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
        "word": "SoOSiM"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "Types",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Types",
          "package": "SoOSiM",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext of a running component in the simulator.\n\u003c/p\u003e\u003cp\u003eWe need existential types because we need to make a single collection\n of several component contexts, each having their own type representing\n their internal state.\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "ComponentContext",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "data"
        },
        "index": {
          "description": "Context of running component in the simulator We need existential types because we need to make single collection of several component contexts each having their own type representing their internal state",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "ComponentContext",
          "package": "SoOSiM",
          "partial": "Component Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:ComponentContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "ComponentId",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#ComponentId",
          "type": "type"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "ComponentId",
          "package": "SoOSiM",
          "partial": "Component Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:ComponentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class that defines an OS component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "ComponentInterface",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#ComponentInterface",
          "type": "class"
        },
        "index": {
          "description": "Type class that defines an OS component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "ComponentInterface",
          "package": "SoOSiM",
          "partial": "Component Interface",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:ComponentInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "ComponentName",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#ComponentName",
          "type": "type"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "ComponentName",
          "package": "SoOSiM",
          "partial": "Component Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:ComponentName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of a running component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "ComponentStatus",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#ComponentStatus",
          "type": "data"
        },
        "index": {
          "description": "Status of running component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "ComponentStatus",
          "package": "SoOSiM",
          "partial": "Component Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:ComponentStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvents send to components by the simulator\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "Input",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#Input",
          "type": "data"
        },
        "index": {
          "description": "Events send to components by the simulator",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Input",
          "package": "SoOSiM",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNodes represent computing entities in the simulator,\n and host the OS components and application threads\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "Node",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#Node",
          "type": "data"
        },
        "index": {
          "description": "Nodes represent computing entities in the simulator and host the OS components and application threads",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Node",
          "package": "SoOSiM",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "NodeId",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#NodeId",
          "type": "type"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "NodeId",
          "package": "SoOSiM",
          "partial": "Node Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeta-data describing the functionaly of the computing node, currently\n just a singleton type.\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "NodeInfo",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#NodeInfo",
          "type": "data"
        },
        "index": {
          "description": "Meta-data describing the functionaly of the computing node currently just singleton type",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "NodeInfo",
          "package": "SoOSiM",
          "partial": "Node Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:NodeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "RequestOrYield",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#RequestOrYield",
          "type": "data"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "RequestOrYield",
          "package": "SoOSiM",
          "partial": "Request Or Yield",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:RequestOrYield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "ReturnAddress",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#ReturnAddress",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "ReturnAddress",
          "package": "SoOSiM",
          "partial": "Return Address",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:ReturnAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simulator monad used by the OS components offers resumable\n computations in the form of coroutines. These resumable computations\n expect a value of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e, and return a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe need resumable computations to simulate synchronous messaging between\n two components. When a component synchronously sends a message to another\n component, we store the rest of the computation as part of the execution\n context in the simulator state. When a message is send back, the stored\n computation will continue with the message content (of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eTo suspend a computation you simply do:\n   'request \u003ca\u003ecomponentId\u003c/a\u003e'\n\u003c/p\u003e\u003cp\u003eWhere the \u003ca\u003ecomponentId\u003c/a\u003e is the ID of the OS component you are expecting a\n message from. The execute a resumeable computation you simply do:\n   'resume \u003ca\u003ecomp\u003c/a\u003e'\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "Sim",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#Sim",
          "type": "newtype"
        },
        "index": {
          "description": "The simulator monad used by the OS components offers resumable computations in the form of coroutines These resumable computations expect value of type Dynamic and return value of type We need resumable computations to simulate synchronous messaging between two components When component synchronously sends message to another component we store the rest of the computation as part of the execution context in the simulator state When message is send back the stored computation will continue with the message content of type Dynamic To suspend computation you simply do request componentId Where the componentId is the ID of the OS component you are expecting message from The execute resumeable computation you simply do resume comp",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Sim",
          "package": "SoOSiM",
          "partial": "Sim",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:Sim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "SimInternal",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#SimInternal",
          "type": "type"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "SimInternal",
          "package": "SoOSiM",
          "partial": "Sim Internal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:SimInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "SimMetaData",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#SimMetaData",
          "type": "data"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "SimMetaData",
          "package": "SoOSiM",
          "partial": "Sim Meta Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:SimMetaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe internal monad of the simulator is currently a simple state-monad\n wrapping STM\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "SimMonad",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#SimMonad",
          "type": "type"
        },
        "index": {
          "description": "The internal monad of the simulator is currently simple state-monad wrapping STM",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "SimMonad",
          "package": "SoOSiM",
          "partial": "Sim Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:SimMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe internal simulator state\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "SimState",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#SimState",
          "type": "data"
        },
        "index": {
          "description": "The internal simulator state",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "SimState",
          "package": "SoOSiM",
          "partial": "Sim State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#t:SimState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "CC",
          "package": "SoOSiM",
          "signature": "CC",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "CC",
          "package": "SoOSiM",
          "partial": "CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:CC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "Kill",
          "package": "SoOSiM",
          "signature": "Kill",
          "source": "src/SoOSiM-Types.html#RequestOrYield",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Kill",
          "package": "SoOSiM",
          "partial": "Kill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule scheduled for deletion\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "Killed",
          "package": "SoOSiM",
          "signature": "Killed",
          "source": "src/SoOSiM-Types.html#ComponentStatus",
          "type": "function"
        },
        "index": {
          "description": "Module scheduled for deletion",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Killed",
          "package": "SoOSiM",
          "partial": "Killed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Killed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message send another component: the field argument is the\n \u003ccode\u003e\u003ca\u003eComponentId\u003c/a\u003e\u003c/code\u003e of the sender, the second field the message content\n\u003c/p\u003e",
          "module": "[\"SoOSiM.Types\",\"SoOSiM\"]",
          "name": "Message",
          "package": "SoOSiM",
          "signature": "Message a ReturnAddress",
          "source": "src/SoOSiM-Types.html#Input",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Message\",\"http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:Message\"]"
        },
        "index": {
          "description": "message send another component the field argument is the ComponentId of the sender the second field the message content",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Message",
          "package": "SoOSiM",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "Node",
          "package": "SoOSiM",
          "signature": "Node",
          "source": "src/SoOSiM-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Node",
          "package": "SoOSiM",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "NodeInfo",
          "package": "SoOSiM",
          "signature": "NodeInfo",
          "source": "src/SoOSiM-Types.html#NodeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "NodeInfo",
          "package": "SoOSiM",
          "partial": "Node Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:NodeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "RA",
          "package": "SoOSiM",
          "signature": "RA",
          "source": "src/SoOSiM-Types.html#ReturnAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "RA",
          "package": "SoOSiM",
          "partial": "RA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:RA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComponent is doing nothing\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "ReadyToIdle",
          "package": "SoOSiM",
          "signature": "ReadyToIdle",
          "source": "src/SoOSiM-Types.html#ComponentStatus",
          "type": "function"
        },
        "index": {
          "description": "Component is doing nothing",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "ReadyToIdle",
          "package": "SoOSiM",
          "partial": "Ready To Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:ReadyToIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComponent is busy doing computations\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "ReadyToRun",
          "package": "SoOSiM",
          "signature": "ReadyToRun",
          "source": "src/SoOSiM-Types.html#ComponentStatus",
          "type": "function"
        },
        "index": {
          "description": "Component is busy doing computations",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "ReadyToRun",
          "package": "SoOSiM",
          "partial": "Ready To Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:ReadyToRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "Request",
          "package": "SoOSiM",
          "signature": "Request request (response -\u003e x)",
          "source": "src/SoOSiM-Types.html#RequestOrYield",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Request",
          "normalized": "Request a(b-\u003ec)",
          "package": "SoOSiM",
          "partial": "Request",
          "signature": "Request request(response-\u003ex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "Sim",
          "package": "SoOSiM",
          "signature": "Sim",
          "source": "src/SoOSiM-Types.html#Sim",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Sim",
          "package": "SoOSiM",
          "partial": "Sim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Sim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "SimMetaData",
          "package": "SoOSiM",
          "signature": "SimMetaData",
          "source": "src/SoOSiM-Types.html#SimMetaData",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "SimMetaData",
          "package": "SoOSiM",
          "partial": "Sim Meta Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:SimMetaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "SimState",
          "package": "SoOSiM",
          "signature": "SimState",
          "source": "src/SoOSiM-Types.html#SimState",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "SimState",
          "package": "SoOSiM",
          "partial": "Sim State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:SimState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent send every simulation round\n\u003c/p\u003e",
          "module": "[\"SoOSiM.Types\",\"SoOSiM\"]",
          "name": "Tick",
          "package": "SoOSiM",
          "signature": "Tick",
          "source": "src/SoOSiM-Types.html#Input",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Tick\",\"http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:Tick\"]"
        },
        "index": {
          "description": "Event send every simulation round",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Tick",
          "package": "SoOSiM",
          "partial": "Tick",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Tick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComponent is waiting for a message from \u003ccode\u003e\u003ca\u003eComponentId\u003c/a\u003e\u003c/code\u003e, will continue\n with computation ('(' -\u003e \u003ccode\u003eSimM\u003c/code\u003e a) once received\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "WaitingFor",
          "package": "SoOSiM",
          "signature": "WaitingFor ComponentId (() -\u003e Sim (State a))",
          "source": "src/SoOSiM-Types.html#ComponentStatus",
          "type": "function"
        },
        "index": {
          "description": "Component is waiting for message from ComponentId will continue with computation SimM once received",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "WaitingFor",
          "normalized": "WaitingFor ComponentId(()-\u003eSim(State a))",
          "package": "SoOSiM",
          "partial": "Waiting For",
          "signature": "WaitingFor ComponentId(()-\u003eSim(State a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:WaitingFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "Yield",
          "package": "SoOSiM",
          "signature": "Yield x",
          "source": "src/SoOSiM-Types.html#RequestOrYield",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "Yield",
          "package": "SoOSiM",
          "partial": "Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:Yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function defining the behaviour of your component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "componentBehaviour",
          "package": "SoOSiM",
          "signature": "s -\u003e State s -\u003e Input (Receive s) -\u003e Sim (State s)",
          "source": "src/SoOSiM-Types.html#componentBehaviour",
          "type": "method"
        },
        "index": {
          "description": "The function defining the behaviour of your component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "componentBehaviour",
          "normalized": "a-\u003eState a-\u003eInput(Receive a)-\u003eSim(State a)",
          "package": "SoOSiM",
          "partial": "Behaviour",
          "signature": "s-\u003eState s-\u003eInput(Receive s)-\u003eSim(State s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:componentBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eComponentId\u003c/a\u003e\u003c/code\u003e of this component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "componentId",
          "package": "SoOSiM",
          "signature": "ComponentId",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "function"
        },
        "index": {
          "description": "ComponentId of this component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "componentId",
          "package": "SoOSiM",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:componentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface type\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "componentIface",
          "package": "SoOSiM",
          "signature": "s",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "function"
        },
        "index": {
          "description": "Interface type",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "componentIface",
          "package": "SoOSiM",
          "partial": "Iface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:componentIface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function returning the unique global name of your component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "componentName",
          "package": "SoOSiM",
          "signature": "s -\u003e ComponentName",
          "source": "src/SoOSiM-Types.html#componentName",
          "type": "method"
        },
        "index": {
          "description": "function returning the unique global name of your component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "componentName",
          "normalized": "a-\u003eComponentName",
          "package": "SoOSiM",
          "partial": "Name",
          "signature": "s-\u003eComponentName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:componentName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState internal to the component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "componentState",
          "package": "SoOSiM",
          "signature": "TVar (State s)",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "function"
        },
        "index": {
          "description": "State internal to the component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "componentState",
          "package": "SoOSiM",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:componentState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eComponentId\u003c/a\u003e\u003c/code\u003e of the component that created this component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "creator",
          "package": "SoOSiM",
          "signature": "ComponentId",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "function"
        },
        "index": {
          "description": "ComponentId of the component that created this component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "creator",
          "package": "SoOSiM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:creator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eComponentId\u003c/a\u003e\u003c/code\u003e of the component currently under evaluation\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "currentComponent",
          "package": "SoOSiM",
          "signature": "ComponentId",
          "source": "src/SoOSiM-Types.html#SimState",
          "type": "function"
        },
        "index": {
          "description": "The ComponentId of the component currently under evaluation",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "currentComponent",
          "package": "SoOSiM",
          "partial": "Component",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:currentComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e of the node containing the component currently under\n evaluation\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "currentNode",
          "package": "SoOSiM",
          "signature": "NodeId",
          "source": "src/SoOSiM-Types.html#SimState",
          "type": "function"
        },
        "index": {
          "description": "The NodeId of the node containing the component currently under evaluation",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "currentNode",
          "package": "SoOSiM",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:currentNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of the component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "currentStatus",
          "package": "SoOSiM",
          "signature": "TVar (ComponentStatus s)",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "function"
        },
        "index": {
          "description": "Status of the component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "currentStatus",
          "package": "SoOSiM",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:currentStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "cyclesIdling",
          "package": "SoOSiM",
          "signature": "Int",
          "source": "src/SoOSiM-Types.html#SimMetaData",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "cyclesIdling",
          "package": "SoOSiM",
          "partial": "Idling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:cyclesIdling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "cyclesRunning",
          "package": "SoOSiM",
          "signature": "Int",
          "source": "src/SoOSiM-Types.html#SimMetaData",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "cyclesRunning",
          "package": "SoOSiM",
          "partial": "Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:cyclesRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "cyclesWaiting",
          "package": "SoOSiM",
          "signature": "Int",
          "source": "src/SoOSiM-Types.html#SimMetaData",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "cyclesWaiting",
          "package": "SoOSiM",
          "partial": "Waiting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:cyclesWaiting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimal internal state of your component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "initState",
          "package": "SoOSiM",
          "signature": "s -\u003e State s",
          "source": "src/SoOSiM-Types.html#initState",
          "type": "method"
        },
        "index": {
          "description": "The minimal internal state of your component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "initState",
          "normalized": "a-\u003eState a",
          "package": "SoOSiM",
          "partial": "State",
          "signature": "s-\u003eState s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:initState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage waiting to be processed by the component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "msgBuffer",
          "package": "SoOSiM",
          "signature": "TVar [Input Dynamic]",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "function"
        },
        "index": {
          "description": "Message waiting to be processed by the component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "msgBuffer",
          "normalized": "TVar[Input Dynamic]",
          "package": "SoOSiM",
          "partial": "Buffer",
          "signature": "TVar[Input Dynamic]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:msgBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey: senderId; Value: number of messages\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "msgsReceived",
          "package": "SoOSiM",
          "signature": "Map ComponentId Int",
          "source": "src/SoOSiM-Types.html#SimMetaData",
          "type": "function"
        },
        "index": {
          "description": "Key senderId Value number of messages",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "msgsReceived",
          "package": "SoOSiM",
          "partial": "Received",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:msgsReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey: receiverId: Value: number of messages\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "msgsSend",
          "package": "SoOSiM",
          "signature": "Map ComponentId Int",
          "source": "src/SoOSiM-Types.html#SimMetaData",
          "type": "function"
        },
        "index": {
          "description": "Key receiverId Value number of messages",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "msgsSend",
          "package": "SoOSiM",
          "partial": "Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:msgsSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup table of OS components running on the node, key: the\n \u003ccode\u003e\u003ca\u003eComponentName\u003c/a\u003e\u003c/code\u003e, value: unique \u003ccode\u003e\u003ca\u003eComponentId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "nodeComponentLookup",
          "package": "SoOSiM",
          "signature": "Map ComponentName ComponentId",
          "source": "src/SoOSiM-Types.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Lookup table of OS components running on the node key the ComponentName value unique ComponentId",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "nodeComponentLookup",
          "package": "SoOSiM",
          "partial": "Component Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:nodeComponentLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "nodeComponentOrder",
          "package": "SoOSiM",
          "signature": "[ComponentId]",
          "source": "src/SoOSiM-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "nodeComponentOrder",
          "normalized": "[ComponentId]",
          "package": "SoOSiM",
          "partial": "Component Order",
          "signature": "[ComponentId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:nodeComponentOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap of component contexts, key is the \u003ccode\u003e\u003ca\u003eComponentId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "nodeComponents",
          "package": "SoOSiM",
          "signature": "IntMap ComponentContext",
          "source": "src/SoOSiM-Types.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Map of component contexts key is the ComponentId",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "nodeComponents",
          "package": "SoOSiM",
          "partial": "Components",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:nodeComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobally Unique ID of the node\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "nodeId",
          "package": "SoOSiM",
          "signature": "NodeId",
          "source": "src/SoOSiM-Types.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Globally Unique ID of the node",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "nodeId",
          "package": "SoOSiM",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:nodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMeta-data describing the node\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "nodeInfo",
          "package": "SoOSiM",
          "signature": "NodeInfo",
          "source": "src/SoOSiM-Types.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Meta-data describing the node",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "nodeInfo",
          "package": "SoOSiM",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:nodeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode-local memory\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "nodeMemory",
          "package": "SoOSiM",
          "signature": "IntMap Dynamic",
          "source": "src/SoOSiM-Types.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Node-local memory",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "nodeMemory",
          "package": "SoOSiM",
          "partial": "Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:nodeMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of nodes comprising the entire system\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "nodes",
          "package": "SoOSiM",
          "signature": "IntMap Node",
          "source": "src/SoOSiM-Types.html#SimState",
          "type": "function"
        },
        "index": {
          "description": "The set of nodes comprising the entire system",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "nodes",
          "package": "SoOSiM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "runSim",
          "package": "SoOSiM",
          "signature": "SimInternal a",
          "source": "src/SoOSiM-Types.html#Sim",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "runSim",
          "package": "SoOSiM",
          "partial": "Sim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:runSim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistical information regarding a component\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "simMetaData",
          "package": "SoOSiM",
          "signature": "TVar SimMetaData",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "function"
        },
        "index": {
          "description": "Statistical information regarding component",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "simMetaData",
          "package": "SoOSiM",
          "partial": "Meta Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:simMetaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrace message buffer\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "traceMsgs",
          "package": "SoOSiM",
          "signature": "[String]",
          "source": "src/SoOSiM-Types.html#ComponentContext",
          "type": "function"
        },
        "index": {
          "description": "Trace message buffer",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "traceMsgs",
          "normalized": "[String]",
          "package": "SoOSiM",
          "partial": "Msgs",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:traceMsgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM.Types",
          "name": "unRA",
          "package": "SoOSiM",
          "signature": "(ComponentId, TVar Dynamic)",
          "source": "src/SoOSiM-Types.html#ReturnAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "unRA",
          "normalized": "(ComponentId,TVar Dynamic)",
          "package": "SoOSiM",
          "partial": "RA",
          "signature": "(ComponentId,TVar Dynamic)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:unRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlimited supply of unique values\n\u003c/p\u003e",
          "module": "SoOSiM.Types",
          "name": "uniqueSupply",
          "package": "SoOSiM",
          "signature": "Supply",
          "source": "src/SoOSiM-Types.html#SimState",
          "type": "function"
        },
        "index": {
          "description": "Unlimited supply of unique values",
          "hierarchy": "SoOSiM Types",
          "module": "SoOSiM.Types",
          "name": "uniqueSupply",
          "package": "SoOSiM",
          "partial": "Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM-Types.html#v:uniqueSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "SoOSiM",
          "package": "SoOSiM",
          "source": "src/SoOSiM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "SoOSiM",
          "package": "SoOSiM",
          "partial": "So OSi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "ComponentId",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#ComponentId",
          "type": "type"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "ComponentId",
          "package": "SoOSiM",
          "partial": "Component Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#t:ComponentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class that defines an OS component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "ComponentInterface",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#ComponentInterface",
          "type": "class"
        },
        "index": {
          "description": "Type class that defines an OS component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "ComponentInterface",
          "package": "SoOSiM",
          "partial": "Component Interface",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#t:ComponentInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "ComponentName",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#ComponentName",
          "type": "type"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "ComponentName",
          "package": "SoOSiM",
          "partial": "Component Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#t:ComponentName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e is an object encapsulated together with its type.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e may only represent a monomorphic value; an attempt to\n  create a value of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e from a polymorphically-typed\n  expression will result in an ambiguity error (see \u003ccode\u003e\u003ca\u003etoDyn\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003eing a value of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e returns a pretty-printed representation\n  of the object's type; useful for debugging.\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "Dynamic",
          "package": "SoOSiM",
          "type": "data"
        },
        "index": {
          "description": "value of type Dynamic is an object encapsulated together with its type Dynamic may only represent monomorphic value an attempt to create value of type Dynamic from polymorphically-typed expression will result in an ambiguity error see toDyn Show ing value of type Dynamic returns pretty-printed representation of the object type useful for debugging",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "Dynamic",
          "package": "SoOSiM",
          "partial": "Dynamic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#t:Dynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvents send to components by the simulator\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "Input",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#Input",
          "type": "data"
        },
        "index": {
          "description": "Events send to components by the simulator",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "Input",
          "package": "SoOSiM",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "NodeId",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#NodeId",
          "type": "type"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "NodeId",
          "package": "SoOSiM",
          "partial": "Node Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simulator monad used by the OS components offers resumable\n computations in the form of coroutines. These resumable computations\n expect a value of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e, and return a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe need resumable computations to simulate synchronous messaging between\n two components. When a component synchronously sends a message to another\n component, we store the rest of the computation as part of the execution\n context in the simulator state. When a message is send back, the stored\n computation will continue with the message content (of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eTo suspend a computation you simply do:\n   'request \u003ca\u003ecomponentId\u003c/a\u003e'\n\u003c/p\u003e\u003cp\u003eWhere the \u003ca\u003ecomponentId\u003c/a\u003e is the ID of the OS component you are expecting a\n message from. The execute a resumeable computation you simply do:\n   'resume \u003ca\u003ecomp\u003c/a\u003e'\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "Sim",
          "package": "SoOSiM",
          "source": "src/SoOSiM-Types.html#Sim",
          "type": "data"
        },
        "index": {
          "description": "The simulator monad used by the OS components offers resumable computations in the form of coroutines These resumable computations expect value of type Dynamic and return value of type We need resumable computations to simulate synchronous messaging between two components When component synchronously sends message to another component we store the rest of the computation as part of the execution context in the simulator state When message is send back the stored computation will continue with the message content of type Dynamic To suspend computation you simply do request componentId Where the componentId is the ID of the OS component you are expecting message from The execute resumeable computation you simply do resume comp",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "Sim",
          "package": "SoOSiM",
          "partial": "Sim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#t:Sim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "Typeable",
          "package": "SoOSiM",
          "type": "class"
        },
        "index": {
          "description": "The class Typeable allows concrete representation of type to be calculated",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "Typeable",
          "package": "SoOSiM",
          "partial": "Typeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#t:Typeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function defining the behaviour of your component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "componentBehaviour",
          "package": "SoOSiM",
          "signature": "s -\u003e State s -\u003e Input (Receive s) -\u003e Sim (State s)",
          "source": "src/SoOSiM-Types.html#componentBehaviour",
          "type": "method"
        },
        "index": {
          "description": "The function defining the behaviour of your component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "componentBehaviour",
          "normalized": "a-\u003eState a-\u003eInput(Receive a)-\u003eSim(State a)",
          "package": "SoOSiM",
          "partial": "Behaviour",
          "signature": "s-\u003eState s-\u003eInput(Receive s)-\u003eSim(State s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:componentBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eComponentId\u003c/a\u003e\u003c/code\u003e of the component that created the current\n component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "componentCreator",
          "package": "SoOSiM",
          "signature": "Sim ComponentId",
          "source": "src/SoOSiM-SimMonad.html#componentCreator",
          "type": "function"
        },
        "index": {
          "description": "Return the ComponentId of the component that created the current component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "componentCreator",
          "package": "SoOSiM",
          "partial": "Creator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:componentCreator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the unique \u003ccode\u003e\u003ca\u003eComponentId\u003c/a\u003e\u003c/code\u003e of a component implementing an interface\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "componentLookup",
          "package": "SoOSiM",
          "signature": "iface-\u003e Sim (Maybe ComponentId)",
          "type": "function"
        },
        "index": {
          "description": "Get the unique ComponentId of component implementing an interface",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "componentLookup",
          "normalized": "a-\u003eSim(Maybe ComponentId)",
          "package": "SoOSiM",
          "partial": "Lookup",
          "signature": "iface-\u003eSim(Maybe ComponentId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:componentLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function returning the unique global name of your component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "componentName",
          "package": "SoOSiM",
          "signature": "s -\u003e ComponentName",
          "source": "src/SoOSiM-Types.html#componentName",
          "type": "method"
        },
        "index": {
          "description": "function returning the unique global name of your component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "componentName",
          "normalized": "a-\u003eComponentName",
          "package": "SoOSiM",
          "partial": "Name",
          "signature": "s-\u003eComponentName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:componentName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "createComponent",
          "package": "SoOSiM",
          "signature": "iface-\u003e Sim ComponentId",
          "type": "function"
        },
        "index": {
          "description": "Create new component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "createComponent",
          "normalized": "a-\u003eSim ComponentId",
          "package": "SoOSiM",
          "partial": "Component",
          "signature": "iface-\u003eSim ComponentId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:createComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "createComponentN",
          "package": "SoOSiM",
          "signature": "iface-\u003e NodeId-\u003e Sim ComponentId",
          "type": "function"
        },
        "index": {
          "description": "Create new component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "createComponentN",
          "normalized": "a-\u003eNodeId-\u003eSim ComponentId",
          "package": "SoOSiM",
          "partial": "Component",
          "signature": "iface-\u003eNodeId-\u003eSim ComponentId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:createComponentN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "createComponentNP",
          "package": "SoOSiM",
          "signature": "NodeId-\u003e ComponentId-\u003e iface-\u003e Sim ComponentId",
          "type": "function"
        },
        "index": {
          "description": "Create new component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "createComponentNP",
          "normalized": "NodeId-\u003eComponentId-\u003ea-\u003eSim ComponentId",
          "package": "SoOSiM",
          "partial": "Component NP",
          "signature": "NodeId-\u003eComponentId-\u003eiface-\u003eSim ComponentId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:createComponentNP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new node\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "createNode",
          "package": "SoOSiM",
          "signature": "Sim NodeId",
          "type": "function"
        },
        "index": {
          "description": "Create new node",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "createNode",
          "package": "SoOSiM",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:createNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the component id of your component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "getComponentId",
          "package": "SoOSiM",
          "signature": "Sim ComponentId",
          "source": "src/SoOSiM-SimMonad.html#getComponentId",
          "type": "function"
        },
        "index": {
          "description": "Get the component id of your component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "getComponentId",
          "package": "SoOSiM",
          "partial": "Component Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:getComponentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the node id of of the node your component is currently running on\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "getNodeId",
          "package": "SoOSiM",
          "signature": "Sim NodeId",
          "source": "src/SoOSiM-SimMonad.html#getNodeId",
          "type": "function"
        },
        "index": {
          "description": "Get the node id of of the node your component is currently running on",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "getNodeId",
          "package": "SoOSiM",
          "partial": "Node Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:getNodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "ignore",
          "package": "SoOSiM",
          "signature": "a -\u003e Sim ()",
          "source": "src/SoOSiM.html#ignore",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "ignore",
          "normalized": "a-\u003eSim()",
          "package": "SoOSiM",
          "signature": "a-\u003eSim()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimal internal state of your component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "initState",
          "package": "SoOSiM",
          "signature": "s -\u003e State s",
          "source": "src/SoOSiM-Types.html#initState",
          "type": "method"
        },
        "index": {
          "description": "The minimal internal state of your component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "initState",
          "normalized": "a-\u003eState a",
          "package": "SoOSiM",
          "partial": "State",
          "signature": "s-\u003eState s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:initState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronously invoke another component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "invoke",
          "package": "SoOSiM",
          "signature": "iface-\u003e ComponentId-\u003e Receive iface-\u003e Sim (Send iface)",
          "type": "function"
        },
        "index": {
          "description": "Synchronously invoke another component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "invoke",
          "normalized": "a-\u003eComponentId-\u003eReceive a-\u003eSim(Send a)",
          "package": "SoOSiM",
          "signature": "iface-\u003eComponentId-\u003eReceive iface-\u003eSim(Send iface)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:invoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke another component, handle response asynchronously\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "invokeAsync",
          "package": "SoOSiM",
          "signature": "iface-\u003e ComponentId-\u003e Receive iface-\u003e (Send iface -\u003e Sim ())-\u003e Sim ()",
          "type": "function"
        },
        "index": {
          "description": "Invoke another component handle response asynchronously",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "invokeAsync",
          "normalized": "a-\u003eComponentId-\u003eReceive a-\u003e(Send a-\u003eSim())-\u003eSim()",
          "package": "SoOSiM",
          "partial": "Async",
          "signature": "iface-\u003eComponentId-\u003eReceive iface-\u003e(Send iface-\u003eSim())-\u003eSim()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:invokeAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke another component, handle response asynchronously\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "invokeAsyncS",
          "package": "SoOSiM",
          "signature": "iface-\u003e Maybe ComponentId-\u003e ComponentId-\u003e Receive iface-\u003e (Send iface -\u003e Sim ())-\u003e Sim ()",
          "type": "function"
        },
        "index": {
          "description": "Invoke another component handle response asynchronously",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "invokeAsyncS",
          "normalized": "a-\u003eMaybe ComponentId-\u003eComponentId-\u003eReceive a-\u003e(Send a-\u003eSim())-\u003eSim()",
          "package": "SoOSiM",
          "partial": "Async",
          "signature": "iface-\u003eMaybe ComponentId-\u003eComponentId-\u003eReceive iface-\u003e(Send iface-\u003eSim())-\u003eSim()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:invokeAsyncS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronously invoke another component\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "invokeS",
          "package": "SoOSiM",
          "signature": "iface-\u003e Maybe ComponentId-\u003e ComponentId-\u003e Receive iface-\u003e Sim (Send iface)",
          "type": "function"
        },
        "index": {
          "description": "Synchronously invoke another component",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "invokeS",
          "normalized": "a-\u003eMaybe ComponentId-\u003eComponentId-\u003eReceive a-\u003eSim(Send a)",
          "package": "SoOSiM",
          "signature": "iface-\u003eMaybe ComponentId-\u003eComponentId-\u003eReceive iface-\u003eSim(Send iface)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:invokeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead memory of local node\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "readMemory",
          "package": "SoOSiM",
          "signature": "Int-\u003e Sim Dynamic",
          "type": "function"
        },
        "index": {
          "description": "Read memory of local node",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "readMemory",
          "normalized": "Int-\u003eSim Dynamic",
          "package": "SoOSiM",
          "partial": "Memory",
          "signature": "Int-\u003eSim Dynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:readMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead memory of local node\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "readMemoryN",
          "package": "SoOSiM",
          "signature": "Maybe NodeId-\u003e Int-\u003e Sim Dynamic",
          "type": "function"
        },
        "index": {
          "description": "Read memory of local node",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "readMemoryN",
          "normalized": "Maybe NodeId-\u003eInt-\u003eSim Dynamic",
          "package": "SoOSiM",
          "partial": "Memory",
          "signature": "Maybe NodeId-\u003eInt-\u003eSim Dynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:readMemoryN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond to an invocation\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "respond",
          "package": "SoOSiM",
          "signature": "iface-\u003e ReturnAddress-\u003e Send iface-\u003e Sim ()",
          "type": "function"
        },
        "index": {
          "description": "Respond to an invocation",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "respond",
          "normalized": "a-\u003eReturnAddress-\u003eSend a-\u003eSim()",
          "package": "SoOSiM",
          "signature": "iface-\u003eReturnAddress-\u003eSend iface-\u003eSim()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:respond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRespond to an invocation\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "respondS",
          "package": "SoOSiM",
          "signature": "iface-\u003e Maybe ComponentId-\u003e ReturnAddress-\u003e Send iface-\u003e Sim ()",
          "type": "function"
        },
        "index": {
          "description": "Respond to an invocation",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "respondS",
          "normalized": "a-\u003eMaybe ComponentId-\u003eReturnAddress-\u003eSend a-\u003eSim()",
          "package": "SoOSiM",
          "signature": "iface-\u003eMaybe ComponentId-\u003eReturnAddress-\u003eSend iface-\u003eSim()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:respondS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "returnAddress",
          "package": "SoOSiM",
          "signature": "ReturnAddress -\u003e ComponentId",
          "source": "src/SoOSiM-Simulator-Util.html#returnAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "returnAddress",
          "normalized": "ReturnAddress-\u003eComponentId",
          "package": "SoOSiM",
          "partial": "Address",
          "signature": "ReturnAddress-\u003eComponentId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:returnAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "runSTM",
          "package": "SoOSiM",
          "signature": "STM a -\u003e Sim a",
          "source": "src/SoOSiM-SimMonad.html#runSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "runSTM",
          "normalized": "STM a-\u003eSim a",
          "package": "SoOSiM",
          "partial": "STM",
          "signature": "STM a-\u003eSim a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:runSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "tick",
          "package": "SoOSiM",
          "signature": "SimState -\u003e IO SimState",
          "source": "src/SoOSiM-Simulator.html#tick",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "tick",
          "normalized": "SimState-\u003eIO SimState",
          "package": "SoOSiM",
          "signature": "SimState-\u003eIO SimState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:tick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "traceMsg",
          "package": "SoOSiM",
          "signature": "String -\u003e Sim ()",
          "source": "src/SoOSiM-SimMonad.html#traceMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "traceMsg",
          "normalized": "String-\u003eSim()",
          "package": "SoOSiM",
          "partial": "Msg",
          "signature": "String-\u003eSim()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:traceMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SoOSiM",
          "name": "unmarshall",
          "package": "SoOSiM",
          "signature": "String -\u003e Dynamic -\u003e a",
          "source": "src/SoOSiM-Util.html#unmarshall",
          "type": "function"
        },
        "index": {
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "unmarshall",
          "normalized": "String-\u003eDynamic-\u003ea",
          "package": "SoOSiM",
          "signature": "String-\u003eDynamic-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:unmarshall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite memory of local node\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "writeMemory",
          "package": "SoOSiM",
          "signature": "Int-\u003e a-\u003e Sim ()",
          "type": "function"
        },
        "index": {
          "description": "Write memory of local node",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "writeMemory",
          "normalized": "Int-\u003ea-\u003eSim()",
          "package": "SoOSiM",
          "partial": "Memory",
          "signature": "Int-\u003ea-\u003eSim()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:writeMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite memory of local node\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "writeMemoryN",
          "package": "SoOSiM",
          "signature": "Maybe NodeId-\u003e Int-\u003e a-\u003e Sim ()",
          "type": "function"
        },
        "index": {
          "description": "Write memory of local node",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "writeMemoryN",
          "normalized": "Maybe NodeId-\u003eInt-\u003ea-\u003eSim()",
          "package": "SoOSiM",
          "partial": "Memory",
          "signature": "Maybe NodeId-\u003eInt-\u003ea-\u003eSim()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:writeMemoryN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield internal state to the simulator scheduler\n\u003c/p\u003e",
          "module": "SoOSiM",
          "name": "yield",
          "package": "SoOSiM",
          "signature": "a -\u003e Sim a",
          "source": "src/SoOSiM-SimMonad.html#yield",
          "type": "function"
        },
        "index": {
          "description": "Yield internal state to the simulator scheduler",
          "hierarchy": "SoOSiM",
          "module": "SoOSiM",
          "name": "yield",
          "normalized": "a-\u003eSim a",
          "package": "SoOSiM",
          "signature": "a-\u003eSim a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SoOSiM/docs/SoOSiM.html#v:yield"
      }
    }
  ]
]