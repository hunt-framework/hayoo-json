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
        "word": "hactors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module reimplement some functions from the \u003ccode\u003eControl.Concurrent.Actor\u003c/code\u003e\n module with debug features.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Actor.Debug",
          "name": "Debug",
          "package": "hactors",
          "source": "src/Control-Concurrent-Actor-Debug.html",
          "type": "module"
        },
        "index": {
          "description": "This module reimplement some functions from the Control.Concurrent.Actor module with debug features",
          "hierarchy": "Control Concurrent Actor Debug",
          "module": "Control.Concurrent.Actor.Debug",
          "name": "Debug",
          "package": "hactors",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003ereceive\u003c/code\u003e with the test printing.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor.Debug",
          "name": "receive",
          "package": "hactors",
          "signature": "MBox m -\u003e (m -\u003e IO a) -\u003e IO b",
          "source": "src/Control-Concurrent-Actor-Debug.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Variant of receive with the test printing",
          "hierarchy": "Control Concurrent Actor Debug",
          "module": "Control.Concurrent.Actor.Debug",
          "name": "receive",
          "normalized": "MBox a-\u003e(a-\u003eIO b)-\u003eIO c",
          "package": "hactors",
          "signature": "MBox m-\u003e(m-\u003eIO a)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Debug.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003espawn_receive\u003c/code\u003e with the test printing.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor.Debug",
          "name": "spawn_receive",
          "package": "hactors",
          "signature": "(m -\u003e IO a) -\u003e IO (Actor m)",
          "source": "src/Control-Concurrent-Actor-Debug.html#spawn_receive",
          "type": "function"
        },
        "index": {
          "description": "Variant of spawn receive with the test printing",
          "hierarchy": "Control Concurrent Actor Debug",
          "module": "Control.Concurrent.Actor.Debug",
          "name": "spawn_receive",
          "normalized": "(a-\u003eIO b)-\u003eIO(Actor a)",
          "package": "hactors",
          "signature": "(m-\u003eIO a)-\u003eIO(Actor m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Debug.html#v:spawn_receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor.Examples",
          "name": "Examples",
          "package": "hactors",
          "source": "src/Control-Concurrent-Actor-Examples.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor Examples",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "Examples",
          "package": "hactors",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an initial argument type.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "Child",
          "package": "hactors",
          "source": "src/Control-Concurrent-Actor-Examples.html#Child",
          "type": "data"
        },
        "index": {
          "description": "Make an initial argument type",
          "hierarchy": "Control Concurrent Actor Examples",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "Child",
          "package": "hactors",
          "partial": "Child",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Examples.html#t:Child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor.Examples",
          "name": "Child",
          "package": "hactors",
          "signature": "Child String Process",
          "source": "src/Control-Concurrent-Actor-Examples.html#Child",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor Examples",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "Child",
          "package": "hactors",
          "partial": "Child",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Examples.html#v:Child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing \u003ccode\u003eactor\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "actor_1",
          "package": "hactors",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-Actor-Examples.html#actor_1",
          "type": "function"
        },
        "index": {
          "description": "Using actor",
          "hierarchy": "Control Concurrent Actor Examples",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "actor_1",
          "normalized": "IO()",
          "package": "hactors",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Examples.html#v:actor_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is some Erlang code from the \"Learn You Some Erlang\" book:\n\u003c/p\u003e\u003cpre\u003e\n dolphin() -\u003e\n   receive\n     do_a_flip -\u003e\n       io:format(\"How about no?~n\");\n     fish -\u003e\n       io:format(\"So long and thanks for all the fish!~n\");\n     _ -\u003e\n       io:format(\"Heh, we're smarter than you humans.~n\")\n   end\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "dolphin",
          "package": "hactors",
          "signature": "String -\u003e IO ()",
          "source": "src/Control-Concurrent-Actor-Examples.html#dolphin",
          "type": "function"
        },
        "index": {
          "description": "There is some Erlang code from the Learn You Some Erlang book dolphin receive do flip io format How about no fish io format So long and thanks for all the fish io format Heh we re smarter than you humans end",
          "hierarchy": "Control Concurrent Actor Examples",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "dolphin",
          "normalized": "String-\u003eIO()",
          "package": "hactors",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Examples.html#v:dolphin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing \u003ccode\u003espawn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "spawn_1",
          "package": "hactors",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-Actor-Examples.html#spawn_1",
          "type": "function"
        },
        "index": {
          "description": "Using spawn",
          "hierarchy": "Control Concurrent Actor Examples",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "spawn_1",
          "normalized": "IO()",
          "package": "hactors",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Examples.html#v:spawn_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor.Examples",
          "name": "test_dolphin",
          "package": "hactors",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-Actor-Examples.html#test_dolphin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor Examples",
          "module": "Control.Concurrent.Actor.Examples",
          "name": "test_dolphin",
          "normalized": "IO()",
          "package": "hactors",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Examples.html#v:test_dolphin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor.Tests",
          "name": "Tests",
          "package": "hactors",
          "source": "src/Control-Concurrent-Actor-Tests.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor Tests",
          "module": "Control.Concurrent.Actor.Tests",
          "name": "Tests",
          "package": "hactors",
          "partial": "Tests",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Tests.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor.Tests",
          "name": "test_receive_1",
          "package": "hactors",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-Actor-Tests.html#test_receive_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor Tests",
          "module": "Control.Concurrent.Actor.Tests",
          "name": "test_receive_1",
          "normalized": "IO()",
          "package": "hactors",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Tests.html#v:test_receive_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor.Tests",
          "name": "test_tolerant_1",
          "package": "hactors",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-Actor-Tests.html#test_tolerant_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor Tests",
          "module": "Control.Concurrent.Actor.Tests",
          "name": "test_tolerant_1",
          "normalized": "IO()",
          "package": "hactors",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor-Tests.html#v:test_tolerant_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the actor model on top of the GHC's concurrency.\n\u003c/p\u003e\u003cp\u003eThe API mimics Erlang's concurrency primitives, with slight differences.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "hactors",
          "source": "src/Control-Concurrent-Actor.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of the actor model on top of the GHC concurrency The API mimics Erlang concurrency primitives with slight differences",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "hactors",
          "partial": "Actor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actor is a process associated with the message box.\n\u003c/p\u003e\u003cp\u003eNote that the actor is parameterized by the type of message that it can\n accept.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "hactors",
          "source": "src/Control-Concurrent-Actor.html#Actor",
          "type": "data"
        },
        "index": {
          "description": "The actor is process associated with the message box Note that the actor is parameterized by the type of message that it can accept",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "hactors",
          "partial": "Actor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#t:Actor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe message box is represented by the STM's channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "MBox",
          "package": "hactors",
          "source": "src/Control-Concurrent-Actor.html#MBox",
          "type": "type"
        },
        "index": {
          "description": "The message box is represented by the STM channel",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "MBox",
          "package": "hactors",
          "partial": "MBox",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#t:MBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process is a VM's thread.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "Process",
          "package": "hactors",
          "source": "src/Control-Concurrent-Actor.html#Process",
          "type": "type"
        },
        "index": {
          "description": "The process is VM thread",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Process",
          "package": "hactors",
          "partial": "Process",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003esend\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "(!)",
          "package": "hactors",
          "signature": "Actor m -\u003e m -\u003e IO m",
          "source": "src/Control-Concurrent-Actor.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of send",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "(!) !",
          "normalized": "Actor a-\u003ea-\u003eIO a",
          "package": "hactors",
          "signature": "Actor m-\u003em-\u003eIO m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of (!) with the message inside the IO.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "(!\u003e)",
          "package": "hactors",
          "signature": "Actor m -\u003e IO m -\u003e IO m",
          "source": "src/Control-Concurrent-Actor.html#%21%3E",
          "type": "function"
        },
        "index": {
          "description": "Variant of with the message inside the IO",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "(!\u003e) !\u003e",
          "normalized": "Actor a-\u003eIO a-\u003eIO a",
          "package": "hactors",
          "signature": "Actor m-\u003eIO m-\u003eIO m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:-33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of (!) with the actor inside the IO.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "(\u003c!)",
          "package": "hactors",
          "signature": "IO (Actor m) -\u003e m -\u003e IO m",
          "source": "src/Control-Concurrent-Actor.html#%3C%21",
          "type": "function"
        },
        "index": {
          "description": "Variant of with the actor inside the IO",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "(\u003c!) \u003c!",
          "normalized": "IO(Actor a)-\u003ea-\u003eIO a",
          "package": "hactors",
          "signature": "IO(Actor m)-\u003em-\u003eIO m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:-60--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of (!) with the actor and the message inside the IO.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "(\u003c!\u003e)",
          "package": "hactors",
          "signature": "IO (Actor m) -\u003e IO m -\u003e IO m",
          "source": "src/Control-Concurrent-Actor.html#%3C%21%3E",
          "type": "function"
        },
        "index": {
          "description": "Variant of with the actor and the message inside the IO",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "(\u003c!\u003e) \u003c!\u003e",
          "normalized": "IO(Actor a)-\u003eIO a-\u003eIO a",
          "package": "hactors",
          "signature": "IO(Actor m)-\u003eIO m-\u003eIO m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:-60--33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of (?) with the message box inside the IO.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "(\u003c?)",
          "package": "hactors",
          "signature": "IO (MBox m) -\u003e (m -\u003e IO a) -\u003e IO b",
          "source": "src/Control-Concurrent-Actor.html#%3C%3F",
          "type": "function"
        },
        "index": {
          "description": "Variant of with the message box inside the IO",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "(\u003c?) \u003c?",
          "normalized": "IO(MBox a)-\u003e(a-\u003eIO b)-\u003eIO c",
          "package": "hactors",
          "signature": "IO(MBox m)-\u003e(m-\u003eIO a)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:-60--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix variant of \u003ccode\u003ereceive\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "(?)",
          "package": "hactors",
          "signature": "MBox m -\u003e (m -\u003e IO a) -\u003e IO b",
          "source": "src/Control-Concurrent-Actor.html#%3F",
          "type": "function"
        },
        "index": {
          "description": "Infix variant of receive",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "(?) ?",
          "normalized": "MBox a-\u003e(a-\u003eIO b)-\u003eIO c",
          "package": "hactors",
          "signature": "MBox m-\u003e(m-\u003eIO a)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "hactors",
          "signature": "Actor",
          "source": "src/Control-Concurrent-Actor.html#Actor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "hactors",
          "partial": "Actor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:Actor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new actor from a function, send the initial argument and the\n message box to this actor via function arguments.\n\u003c/p\u003e\u003cp\u003eThis function calls \u003ccode\u003eforkIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "actor",
          "package": "hactors",
          "signature": "t -\u003e (t -\u003e MBox m -\u003e IO a) -\u003e IO (Actor m)",
          "source": "src/Control-Concurrent-Actor.html#actor",
          "type": "function"
        },
        "index": {
          "description": "Create new actor from function send the initial argument and the message box to this actor via function arguments This function calls forkIO",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "actor",
          "normalized": "a-\u003e(a-\u003eMBox b-\u003eIO c)-\u003eIO(Actor b)",
          "package": "hactors",
          "signature": "t-\u003e(t-\u003eMBox m-\u003eIO a)-\u003eIO(Actor m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:actor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinish the current process.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "exit",
          "package": "hactors",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-Actor.html#exit",
          "type": "function"
        },
        "index": {
          "description": "Finish the current process",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "exit",
          "normalized": "IO()",
          "package": "hactors",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action, do \u003ccode\u003eexit\u003c/code\u003e on exceptions.\n\u003c/p\u003e\u003cp\u003eXXX Bad name?\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "faultable",
          "package": "hactors",
          "signature": "IO () -\u003e IO ()",
          "source": "src/Control-Concurrent-Actor.html#faultable",
          "type": "function"
        },
        "index": {
          "description": "Perform an action do exit on exceptions XXX Bad name",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "faultable",
          "normalized": "IO()-\u003eIO()",
          "package": "hactors",
          "signature": "IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:faultable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill the process.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "kill",
          "package": "hactors",
          "signature": "IO Process -\u003e IO ()",
          "source": "src/Control-Concurrent-Actor.html#kill",
          "type": "function"
        },
        "index": {
          "description": "Kill the process",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "kill",
          "normalized": "IO Process-\u003eIO()",
          "package": "hactors",
          "signature": "IO Process-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActor's message box (a channel).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "mbox",
          "package": "hactors",
          "signature": "MBox m",
          "source": "src/Control-Concurrent-Actor.html#Actor",
          "type": "function"
        },
        "index": {
          "description": "Actor message box channel",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "mbox",
          "package": "hactors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:mbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action, on exceptions perform a given action \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "on_exception",
          "package": "hactors",
          "signature": "IO a -\u003e IO a -\u003e IO a",
          "source": "src/Control-Concurrent-Actor.html#on_exception",
          "type": "function"
        },
        "index": {
          "description": "Perform an action on exceptions perform given action",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "on_exception",
          "normalized": "IO a-\u003eIO a-\u003eIO a",
          "package": "hactors",
          "signature": "IO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:on_exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActor's process (a thread).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "proc",
          "package": "hactors",
          "signature": "Process",
          "source": "src/Control-Concurrent-Actor.html#Actor",
          "type": "function"
        },
        "index": {
          "description": "Actor process thread",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "proc",
          "package": "hactors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for an asynchronous message in the message box.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "receive",
          "package": "hactors",
          "signature": "MBox m -\u003e (m -\u003e IO a) -\u003e IO b",
          "source": "src/Control-Concurrent-Actor.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Wait for an asynchronous message in the message box",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "receive",
          "normalized": "MBox a-\u003e(a-\u003eIO b)-\u003eIO c",
          "package": "hactors",
          "signature": "MBox m-\u003e(m-\u003eIO a)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint string to \u003ccode\u003estdout\u003c/code\u003e with the current process ID prefix.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "say",
          "package": "hactors",
          "signature": "String -\u003e IO ()",
          "source": "src/Control-Concurrent-Actor.html#say",
          "type": "function"
        },
        "index": {
          "description": "Print string to stdout with the current process ID prefix",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "say",
          "normalized": "String-\u003eIO()",
          "package": "hactors",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:say"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current process.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "self",
          "package": "hactors",
          "signature": "IO Process",
          "source": "src/Control-Concurrent-Actor.html#self",
          "type": "function"
        },
        "index": {
          "description": "Get the current process",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "self",
          "package": "hactors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message to the actor.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "send",
          "package": "hactors",
          "signature": "Actor m -\u003e m -\u003e IO m",
          "source": "src/Control-Concurrent-Actor.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send message to the actor",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "send",
          "normalized": "Actor a-\u003ea-\u003eIO a",
          "package": "hactors",
          "signature": "Actor m-\u003em-\u003eIO m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform non busy waiting for a given number of microseconds in the current\n process.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "sleep",
          "package": "hactors",
          "signature": "Int -\u003e IO ()",
          "source": "src/Control-Concurrent-Actor.html#sleep",
          "type": "function"
        },
        "index": {
          "description": "Perform non busy waiting for given number of microseconds in the current process",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "sleep",
          "normalized": "Int-\u003eIO()",
          "package": "hactors",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:sleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new actor from a function, send the message box to this actor via\n function argument.\n\u003c/p\u003e\u003cp\u003eThis function calls \u003ccode\u003eforkIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "spawn",
          "package": "hactors",
          "signature": "(MBox m -\u003e IO a) -\u003e IO (Actor m)",
          "source": "src/Control-Concurrent-Actor.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "Create new actor from function send the message box to this actor via function argument This function calls forkIO",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "spawn",
          "normalized": "(MBox a-\u003eIO b)-\u003eIO(Actor a)",
          "package": "hactors",
          "signature": "(MBox m-\u003eIO a)-\u003eIO(Actor m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new receiving actor.\n\u003c/p\u003e\u003cp\u003eThis function calls \u003ccode\u003eforkIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "spawn_receive",
          "package": "hactors",
          "signature": "(m -\u003e IO a) -\u003e IO (Actor m)",
          "source": "src/Control-Concurrent-Actor.html#spawn_receive",
          "type": "function"
        },
        "index": {
          "description": "Create new receiving actor This function calls forkIO",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "spawn_receive",
          "normalized": "(a-\u003eIO b)-\u003eIO(Actor a)",
          "package": "hactors",
          "signature": "(m-\u003eIO a)-\u003eIO(Actor m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:spawn_receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action ignoring any exceptions in it.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "tolerant",
          "package": "hactors",
          "signature": "IO a -\u003e IO a",
          "source": "src/Control-Concurrent-Actor.html#tolerant",
          "type": "function"
        },
        "index": {
          "description": "Perform an action ignoring any exceptions in it",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "tolerant",
          "normalized": "IO a-\u003eIO a",
          "package": "hactors",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:tolerant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an infinite non busy waiting in the current process.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "wait",
          "package": "hactors",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-Actor.html#wait",
          "type": "function"
        },
        "index": {
          "description": "Perform an infinite non busy waiting in the current process",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "wait",
          "normalized": "IO()",
          "package": "hactors",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hactors/docs/Control-Concurrent-Actor.html#v:wait"
      }
    }
  ]
]