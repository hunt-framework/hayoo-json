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
        "word": "thespian"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements Erlang-style actors \n (what Erlang calls processes). It does not implement \n network distribution (yet?). Here is an example:\n\u003c/p\u003e\u003cpre\u003e\nact1 :: Actor\nact1 = do\n    me \u003c- self\n    liftIO $ print \u003ca\u003eact1 started\u003c/a\u003e\n    forever $ receive\n      [ Case $ ((n, a) :: (Int, Address)) -\u003e\n            if n \u003e 10000\n                then do\n                    liftIO . throwIO $ NonTermination \n                else do\n                    liftIO . putStrLn $ \u003ca\u003eact1 got \u003c/a\u003e ++ (show n) ++ \u003ca\u003e from \u003c/a\u003e ++ (show a)\n                    send a (n+1, me)\n      , Case $ (e :: RemoteException) -\u003e \n            liftIO . print $ \u003ca\u003eact1 received a remote exception\u003c/a\u003e\n      , Default $ liftIO . print $ \u003ca\u003eact1: received a malformed message\u003c/a\u003e\n      ]\n\nact2 :: Address -\u003e Actor\nact2 addr = do\n    monitor addr\n    -- setFlag TrapRemoteExceptions\n    me \u003c- self\n    send addr (0 :: Int, me)\n    forever $ receive \n      [ Case $ ((n, a) :: (Int, Address)) -\u003e do\n                    liftIO . putStrLn $ \u003ca\u003eact2 got \u003c/a\u003e ++ (show n) ++ \u003ca\u003e from \u003c/a\u003e ++ (show a)\n                    send a (n+1, me)\n      , Case $ (e :: RemoteException) -\u003e \n            liftIO . print $ \u003ca\u003eact2 received a remote exception: \u003c/a\u003e ++ (show e)\n      ]\n\nact3 :: Address -\u003e Actor\nact3 addr = do\n    monitor addr\n    setFlag TrapRemoteExceptions\n    forever $ receive\n      [ Case $ (e :: RemoteException) -\u003e \n            liftIO . print $ \u003ca\u003eact3 received a remote exception: \u003c/a\u003e ++ (show e)\n      ]\n\nmain = do\n    addr1 \u003c- spawn act1\n    addr2 \u003c- spawn (act2 addr1)\n    spawn (act3 addr2)\n    threadDelay 20000000\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "thespian",
          "source": "src/Control-Concurrent-Actor.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements Erlang-style actors what Erlang calls processes It does not implement network distribution yet Here is an example act1 Actor act1 do me self liftIO print act1 started forever receive Case Int Address if then do liftIO throwIO NonTermination else do liftIO putStrLn act1 got show from show send me Case RemoteException liftIO print act1 received remote exception Default liftIO print act1 received malformed message act2 Address Actor act2 addr do monitor addr setFlag TrapRemoteExceptions me self send addr Int me forever receive Case Int Address do liftIO putStrLn act2 got show from show send me Case RemoteException liftIO print act2 received remote exception show act3 Address Actor act3 addr do monitor addr setFlag TrapRemoteExceptions forever receive Case RemoteException liftIO print act3 received remote exception show main do addr1 spawn act1 addr2 spawn act2 addr1 spawn act3 addr2 threadDelay",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "thespian",
          "partial": "Actor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of an actor. It is just a monadic action\n in the \u003ccode\u003e\u003ca\u003eActorM\u003c/a\u003e\u003c/code\u003e monad, returning ()\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "thespian",
          "source": "src/Control-Concurrent-Actor.html#Actor",
          "type": "type"
        },
        "index": {
          "description": "The type of an actor It is just monadic action in the ActorM monad returning",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Actor",
          "package": "thespian",
          "partial": "Actor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#t:Actor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException raised by an actor on exit\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "ActorExitNormal",
          "package": "thespian",
          "source": "src/Control-Concurrent-Actor.html#ActorExitNormal",
          "type": "data"
        },
        "index": {
          "description": "Exception raised by an actor on exit",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "ActorExitNormal",
          "package": "thespian",
          "partial": "Actor Exit Normal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#t:ActorExitNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actor monad, just a reader monad on top of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "ActorM",
          "package": "thespian",
          "source": "src/Control-Concurrent-Actor.html#ActorM",
          "type": "type"
        },
        "index": {
          "description": "The actor monad just reader monad on top of IO",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "ActorM",
          "package": "thespian",
          "partial": "Actor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#t:ActorM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address of an actor, used to send messages \n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "Address",
          "package": "thespian",
          "source": "src/Control-Concurrent-Actor.html#Address",
          "type": "data"
        },
        "index": {
          "description": "The address of an actor used to send messages",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Address",
          "package": "thespian",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor",
          "name": "Flag",
          "package": "thespian",
          "source": "src/Control-Concurrent-Actor.html#Flag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Flag",
          "package": "thespian",
          "partial": "Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#t:Flag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor",
          "name": "Handler",
          "package": "thespian",
          "source": "src/Control-Concurrent-Actor.html#Handler",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Handler",
          "package": "thespian",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor",
          "name": "RemoteException",
          "package": "thespian",
          "source": "src/Control-Concurrent-Actor.html#RemoteException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "RemoteException",
          "package": "thespian",
          "partial": "Remote Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#t:RemoteException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix form of \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e with the arguments flipped\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "(▷)",
          "package": "thespian",
          "signature": "m -\u003e Address -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#%25B7",
          "type": "function"
        },
        "index": {
          "description": "Infix form of send with the arguments flipped",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "(▷) ▷",
          "normalized": "a-\u003eAddress-\u003eActorM()",
          "package": "thespian",
          "signature": "m-\u003eAddress-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:-9655-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix form of \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "(◁)",
          "package": "thespian",
          "signature": "Address -\u003e m -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#%25C1",
          "type": "function"
        },
        "index": {
          "description": "Infix form of send",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "(◁) ◁",
          "normalized": "Address-\u003ea-\u003eActorM()",
          "package": "thespian",
          "signature": "Address-\u003em-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:-9665-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor",
          "name": "Case",
          "package": "thespian",
          "signature": "Case (m -\u003e ActorM ())",
          "source": "src/Control-Concurrent-Actor.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Case",
          "normalized": "Case(a-\u003eActorM())",
          "package": "thespian",
          "partial": "Case",
          "signature": "Case(m-\u003eActorM())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor",
          "name": "Default",
          "package": "thespian",
          "signature": "Default (ActorM ())",
          "source": "src/Control-Concurrent-Actor.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "Default",
          "normalized": "Default(ActorM())",
          "package": "thespian",
          "partial": "Default",
          "signature": "Default(ActorM())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Actor",
          "name": "TrapRemoteExceptions",
          "package": "thespian",
          "signature": "TrapRemoteExceptions",
          "source": "src/Control-Concurrent-Actor.html#Flag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "TrapRemoteExceptions",
          "package": "thespian",
          "partial": "Trap Remote Exceptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:TrapRemoteExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears the specified flag in the actor's environment\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "clearFlag",
          "package": "thespian",
          "signature": "Flag -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#clearFlag",
          "type": "function"
        },
        "index": {
          "description": "Clears the specified flag in the actor environment",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "clearFlag",
          "normalized": "Flag-\u003eActorM()",
          "package": "thespian",
          "partial": "Flag",
          "signature": "Flag-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:clearFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emonitor\u003c/a\u003e\u003c/code\u003e, but bi-directional\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "link",
          "package": "thespian",
          "signature": "Address -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#link",
          "type": "function"
        },
        "index": {
          "description": "Like monitor but bi-directional",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "link",
          "normalized": "Address-\u003eActorM()",
          "package": "thespian",
          "signature": "Address-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonitors the actor at the specified address.\n If an exception is raised in the monitored actor's \n thread, it is wrapped in an \u003ccode\u003eActorException\u003c/code\u003e and \n forwarded to the monitoring actor. If the monitored\n actor terminates, an \u003ccode\u003eActorException\u003c/code\u003e is raised in\n the monitoring Actor\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "monitor",
          "package": "thespian",
          "signature": "Address -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#monitor",
          "type": "function"
        },
        "index": {
          "description": "Monitors the actor at the specified address If an exception is raised in the monitored actor thread it is wrapped in an ActorException and forwarded to the monitoring actor If the monitored actor terminates an ActorException is raised in the monitoring Actor",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "monitor",
          "normalized": "Address-\u003eActorM()",
          "package": "thespian",
          "signature": "Address-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:monitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to handle a message using a list of handlers.\n The first handler matching the type of the message \n is used.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "receive",
          "package": "thespian",
          "signature": "[Handler] -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Try to handle message using list of handlers The first handler matching the type of the message is used",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "receive",
          "normalized": "[Handler]-\u003eActorM()",
          "package": "thespian",
          "signature": "[Handler]-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as receive, but times out after a specified \n amount of time and runs a default action\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "receiveWithTimeout",
          "package": "thespian",
          "signature": "Int -\u003e [Handler] -\u003e ActorM () -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#receiveWithTimeout",
          "type": "function"
        },
        "index": {
          "description": "Same as receive but times out after specified amount of time and runs default action",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "receiveWithTimeout",
          "normalized": "Int-\u003e[Handler]-\u003eActorM()-\u003eActorM()",
          "package": "thespian",
          "partial": "With Timeout",
          "signature": "Int-\u003e[Handler]-\u003eActorM()-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:receiveWithTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to obtain an actor's own address inside the actor\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "self",
          "package": "thespian",
          "signature": "ActorM Address",
          "source": "src/Control-Concurrent-Actor.html#self",
          "type": "function"
        },
        "index": {
          "description": "Used to obtain an actor own address inside the actor",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "self",
          "package": "thespian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message from inside the \u003ccode\u003e\u003ca\u003eActorM\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "send",
          "package": "thespian",
          "signature": "Address -\u003e m -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#send",
          "type": "function"
        },
        "index": {
          "description": "Sends message from inside the ActorM monad",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "send",
          "normalized": "Address-\u003ea-\u003eActorM()",
          "package": "thespian",
          "signature": "Address-\u003em-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the specified flag in the actor's environment\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "setFlag",
          "package": "thespian",
          "signature": "Flag -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#setFlag",
          "type": "function"
        },
        "index": {
          "description": "Sets the specified flag in the actor environment",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "setFlag",
          "normalized": "Flag-\u003eActorM()",
          "package": "thespian",
          "partial": "Flag",
          "signature": "Flag-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:setFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a new actor with default flags\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "spawn",
          "package": "thespian",
          "signature": "Actor -\u003e IO Address",
          "source": "src/Control-Concurrent-Actor.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "Spawn new actor with default flags",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "spawn",
          "normalized": "Actor-\u003eIO Address",
          "package": "thespian",
          "signature": "Actor-\u003eIO Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the specified flag is set in the actor's environment\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "testFlag",
          "package": "thespian",
          "signature": "Flag -\u003e ActorM Bool",
          "source": "src/Control-Concurrent-Actor.html#testFlag",
          "type": "function"
        },
        "index": {
          "description": "Checks if the specified flag is set in the actor environment",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "testFlag",
          "normalized": "Flag-\u003eActorM Bool",
          "package": "thespian",
          "partial": "Flag",
          "signature": "Flag-\u003eActorM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:testFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToggles the specified flag in the actor's environment\n\u003c/p\u003e",
          "module": "Control.Concurrent.Actor",
          "name": "toggleFlag",
          "package": "thespian",
          "signature": "Flag -\u003e ActorM ()",
          "source": "src/Control-Concurrent-Actor.html#toggleFlag",
          "type": "function"
        },
        "index": {
          "description": "Toggles the specified flag in the actor environment",
          "hierarchy": "Control Concurrent Actor",
          "module": "Control.Concurrent.Actor",
          "name": "toggleFlag",
          "normalized": "Flag-\u003eActorM()",
          "package": "thespian",
          "partial": "Flag",
          "signature": "Flag-\u003eActorM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thespian/docs/Control-Concurrent-Actor.html#v:toggleFlag"
      }
    }
  ]
]