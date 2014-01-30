[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eTowards Haskell in the Cloud\u003c/em\u003e (Epstein et al., Haskell Symposium 2011)\n proposes a new type construct called \u003ccode\u003estatic\u003c/code\u003e that characterizes values that\n are known statically. Cloud Haskell uses the\n \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e implementation from\n \u003ca\u003eControl.Distributed.Static\u003c/a\u003e. That module comes with its own extensive\n documentation, which you should read if you want to know the details.  Here\n we explain the Template Haskell support only.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eStatic values\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eGiven a top-level (possibly polymorphic, but unqualified) definition\n\u003c/p\u003e\u003cpre\u003e f :: forall a1 .. an. T\n f = ...\n\u003c/pre\u003e\u003cp\u003eyou can use a Template Haskell splice to create a static version of \u003ccode\u003ef\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e $(mkStatic 'f) :: forall a1 .. an. (Typeable a1, .., Typeable an) =\u003e Static T\n\u003c/pre\u003e\u003cp\u003eEvery module that you write that contains calls to \u003ccode\u003e\u003ca\u003emkStatic\u003c/a\u003e\u003c/code\u003e needs to\n have a call to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e remotable [ 'f, 'g, ... ]\n\u003c/pre\u003e\u003cp\u003ewhere you must pass every function (or other value) that you pass as an\n argument to \u003ccode\u003e\u003ca\u003emkStatic\u003c/a\u003e\u003c/code\u003e. The call to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e will create a definition\n\u003c/p\u003e\u003cpre\u003e __remoteTable :: RemoteTable -\u003e RemoteTable\n\u003c/pre\u003e\u003cp\u003ewhich can be used to construct the \u003ccode\u003eRemoteTable\u003c/code\u003e used to initialize\n Cloud Haskell. You should have (at most) one call to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e per module,\n and compose all created functions when initializing Cloud Haskell:\n\u003c/p\u003e\u003cpre\u003e let rtable :: RemoteTable\n     rtable = M1.__remoteTable\n            . M2.__remoteTable\n            . ...\n            . Mn.__remoteTable\n            $ initRemoteTable\n\u003c/pre\u003e\u003cp\u003eNOTE: If you get a type error from ghc along these lines\n\u003c/p\u003e\u003cpre\u003e  The exact Name `a_a30k' is not in scope\n       Probable cause: you used a unique name (NameU) in Template Haskell but did not bind it\n\u003c/pre\u003e\u003cp\u003ethen you need to enable the \u003ccode\u003eScopedTypeVariables\u003c/code\u003e language extension.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eStatic serialization dictionaries\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSome Cloud Haskell primitives require static serialization dictionaries (**):\n\u003c/p\u003e\u003cpre\u003e call :: Serializable a =\u003e Static (SerializableDict a) -\u003e NodeId -\u003e Closure (Process a) -\u003e Process a\n\u003c/pre\u003e\u003cp\u003eGiven some serializable type \u003ccode\u003eT\u003c/code\u003e you can define\n\u003c/p\u003e\u003cpre\u003e sdictT :: SerializableDict T\n sdictT = SerializableDict\n\u003c/pre\u003e\u003cp\u003eand then have\n\u003c/p\u003e\u003cpre\u003e $(mkStatic 'sdictT) :: Static (SerializableDict T)\n\u003c/pre\u003e\u003cp\u003eHowever, since these dictionaries are so frequently required Cloud Haskell\n provides special support for them.  When you call \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e on a\n \u003cem\u003emonomorphic\u003c/em\u003e function \u003ccode\u003ef :: T1 -\u003e T2\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e remotable ['f]\n\u003c/pre\u003e\u003cp\u003ethen a serialization dictionary is automatically created for you, which you\n can access with\n\u003c/p\u003e\u003cpre\u003e $(functionSDict 'f) :: Static (SerializableDict T1)\n\u003c/pre\u003e\u003cp\u003eIn addition, if \u003ccode\u003ef :: T1 -\u003e Process T2\u003c/code\u003e, then a second dictionary is created\n\u003c/p\u003e\u003cpre\u003e $(functionTDict 'f) :: Static (SerializableDict T2)\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eClosures\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSuppose you have a process\n\u003c/p\u003e\u003cpre\u003e isPrime :: Integer -\u003e Process Bool\n\u003c/pre\u003e\u003cp\u003eThen\n\u003c/p\u003e\u003cpre\u003e $(mkClosure 'isPrime) :: Integer -\u003e Closure (Process Bool)\n\u003c/pre\u003e\u003cp\u003ewhich you can then \u003ccode\u003ecall\u003c/code\u003e, for example, to have a remote node check if\n a number is prime.\n\u003c/p\u003e\u003cp\u003eIn general, if you have a \u003cem\u003emonomorphic\u003c/em\u003e function\n\u003c/p\u003e\u003cpre\u003e f :: T1 -\u003e T2\n\u003c/pre\u003e\u003cp\u003ethen\n\u003c/p\u003e\u003cpre\u003e $(mkClosure 'f) :: T1 -\u003e Closure T2\n\u003c/pre\u003e\u003cp\u003eprovided that \u003ccode\u003eT1\u003c/code\u003e is serializable (*) (remember to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e(You can also create closures manually--see the documentation of\n \u003ca\u003eControl.Distributed.Static\u003c/a\u003e for examples.)\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eExample\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eHere is a small self-contained example that uses closures and serialization\n dictionaries. It makes use of the Control.Distributed.Process.SimpleLocalnet\n Cloud Haskell backend.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import System.Environment (getArgs)\n import Control.Distributed.Process\n import Control.Distributed.Process.Closure\n import Control.Distributed.Process.Backend.SimpleLocalnet\n import Control.Distributed.Process.Node (initRemoteTable)\n\n isPrime :: Integer -\u003e Process Bool\n isPrime n = return . (n `elem`) . takeWhile (\u003c= n) . sieve $ [2..]\n   where\n     sieve :: [Integer] -\u003e [Integer]\n     sieve (p : xs) = p : sieve [x | x \u003c- xs, x `mod` p \u003e 0]\n\n remotable ['isPrime]\n\n master :: [NodeId] -\u003e Process ()\n master [] = liftIO $ putStrLn \"no slaves\"\n master (slave:_) = do\n   isPrime79 \u003c- call $(functionTDict 'isPrime) slave ($(mkClosure 'isPrime) (79 :: Integer))\n   liftIO $ print isPrime79\n\n main :: IO ()\n main = do\n   args \u003c- getArgs\n   case args of\n     [\"master\", host, port] -\u003e do\n       backend \u003c- initializeBackend host port rtable\n       startMaster backend master\n     [\"slave\", host, port] -\u003e do\n       backend \u003c- initializeBackend host port rtable\n       startSlave backend\n   where\n     rtable :: RemoteTable\n     rtable = __remoteTable initRemoteTable\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eNotes\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e(*) If \u003ccode\u003eT1\u003c/code\u003e is not serializable you will get a type error in the generated\n     code. Unfortunately, the Template Haskell infrastructure cannot check\n     a priori if \u003ccode\u003eT1\u003c/code\u003e is serializable or not due to a bug in the Template\n     Haskell libraries (\u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/7066\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003e(**) Even though \u003ccode\u003ecall\u003c/code\u003e is passed an explicit serialization\n      dictionary, we still need the \u003ccode\u003eSerializable\u003c/code\u003e constraint because\n      \u003ccode\u003eStatic\u003c/code\u003e is not the \u003cem\u003etrue\u003c/em\u003e static. If it was, we could \u003ccode\u003eunstatic\u003c/code\u003e\n      the dictionary and pattern match on it to bring the \u003ccode\u003eTypeable\u003c/code\u003e\n      instance into scope, but unless proper \u003ccode\u003estatic\u003c/code\u003e support is added to\n      ghc we need both the type class argument and the explicit dictionary.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Closure.html",
        "fct-type": "module",
        "title": "Closure"
      },
      "index": {
        "description": "Towards Haskell in the Cloud Epstein et al Haskell Symposium proposes new type construct called static that characterizes values that are known statically Cloud Haskell uses the Static implementation from Control.Distributed.Static That module comes with its own extensive documentation which you should read if you want to know the details Here we explain the Template Haskell support only Static values Given top-level possibly polymorphic but unqualified definition forall a1 an you can use Template Haskell splice to create static version of mkStatic forall a1 an Typeable a1 Typeable an Static Every module that you write that contains calls to mkStatic needs to have call to remotable remotable where you must pass every function or other value that you pass as an argument to mkStatic The call to remotable will create definition remoteTable RemoteTable RemoteTable which can be used to construct the RemoteTable used to initialize Cloud Haskell You should have at most one call to remotable per module and compose all created functions when initializing Cloud Haskell let rtable RemoteTable rtable M1 remoteTable M2 remoteTable Mn remoteTable initRemoteTable NOTE If you get type error from ghc along these lines The exact Name a30k is not in scope Probable cause you used unique name NameU in Template Haskell but did not bind it then you need to enable the ScopedTypeVariables language extension Static serialization dictionaries Some Cloud Haskell primitives require static serialization dictionaries call Serializable Static SerializableDict NodeId Closure Process Process Given some serializable type you can define sdictT SerializableDict sdictT SerializableDict and then have mkStatic sdictT Static SerializableDict However since these dictionaries are so frequently required Cloud Haskell provides special support for them When you call remotable on monomorphic function T1 T2 remotable then serialization dictionary is automatically created for you which you can access with functionSDict Static SerializableDict T1 In addition if T1 Process T2 then second dictionary is created functionTDict Static SerializableDict T2 Closures Suppose you have process isPrime Integer Process Bool Then mkClosure isPrime Integer Closure Process Bool which you can then call for example to have remote node check if number is prime In general if you have monomorphic function T1 T2 then mkClosure T1 Closure T2 provided that T1 is serializable remember to pass to remotable You can also create closures manually--see the documentation of Control.Distributed.Static for examples Example Here is small self-contained example that uses closures and serialization dictionaries It makes use of the Control.Distributed.Process.SimpleLocalnet Cloud Haskell backend LANGUAGE TemplateHaskell import System.Environment getArgs import Control.Distributed.Process import Control.Distributed.Process.Closure import Control.Distributed.Process.Backend.SimpleLocalnet import Control.Distributed.Process.Node initRemoteTable isPrime Integer Process Bool isPrime return elem takeWhile sieve where sieve Integer Integer sieve xs sieve xs mod remotable isPrime master NodeId Process master liftIO putStrLn no slaves master slave do isPrime79 call functionTDict isPrime slave mkClosure isPrime Integer liftIO print isPrime79 main IO main do args getArgs case args of master host port do backend initializeBackend host port rtable startMaster backend master slave host port do backend initializeBackend host port rtable startSlave backend where rtable RemoteTable rtable remoteTable initRemoteTable Notes If T1 is not serializable you will get type error in the generated code Unfortunately the Template Haskell infrastructure cannot check priori if T1 is serializable or not due to bug in the Template Haskell libraries http hackage.haskell.org trac ghc ticket Even though call is passed an explicit serialization dictionary we still need the Serializable constraint because Static is not the true static If it was we could unstatic the dictionary and pattern match on it to bring the Typeable instance into scope but unless proper static support is added to ghc we need both the type class argument and the explicit dictionary",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "Closure",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#t:CP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCP a b\u003c/code\u003e is a process with input of type \u003ccode\u003ea\u003c/code\u003e and output of type \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "type",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#CP",
        "fct-type": "type",
        "title": "CP"
      },
      "index": {
        "description": "CP is process with input of type and output of type",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "CP",
        "normalized": "",
        "package": "distributed-process",
        "partial": "CP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#t:SerializableDict",
      "description": {
        "fct-descr": "\u003cp\u003eReification of \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e (see \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#SerializableDict",
        "fct-type": "data",
        "title": "SerializableDict"
      },
      "index": {
        "description": "Reification of Serializable see Control.Distributed.Process.Closure",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "SerializableDict",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Serializable Dict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:SerializableDict",
      "description": {
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "SerializableDict a",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#SerializableDict",
        "fct-type": "function",
        "title": "SerializableDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "SerializableDict",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Serializable Dict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:bindCP",
      "description": {
        "fct-descr": "\u003cp\u003e(Not quite the) \u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Closure (Process a) -\u003e CP a b -\u003e Closure (Process b)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#bindCP",
        "fct-type": "function",
        "title": "bindCP"
      },
      "index": {
        "description": "Not quite the CP version of",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "bindCP",
        "normalized": "Closure(Process a)-\u003eCP a b-\u003eClosure(Process b)",
        "package": "distributed-process",
        "partial": "CP",
        "signature": "Closure(Process a)-\u003eCP a b-\u003eClosure(Process b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpExpect",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e Closure (Process a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpExpect",
        "fct-type": "function",
        "title": "cpExpect"
      },
      "index": {
        "description": "CP version of expect",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "cpExpect",
        "normalized": "Static(SerializableDict a)-\u003eClosure(Process a)",
        "package": "distributed-process",
        "partial": "Expect",
        "signature": "Static(SerializableDict a)-\u003eClosure(Process a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpLink",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Closure (Process ())",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpLink",
        "fct-type": "function",
        "title": "cpLink"
      },
      "index": {
        "description": "CP version of link",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "cpLink",
        "normalized": "ProcessId-\u003eClosure(Process())",
        "package": "distributed-process",
        "partial": "Link",
        "signature": "ProcessId-\u003eClosure(Process())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpNewChan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewChan\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e Closure (Process (SendPort a, ReceivePort a))",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpNewChan",
        "fct-type": "function",
        "title": "cpNewChan"
      },
      "index": {
        "description": "CP version of newChan",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "cpNewChan",
        "normalized": "Static(SerializableDict a)-\u003eClosure(Process(SendPort a,ReceivePort a))",
        "package": "distributed-process",
        "partial": "New Chan",
        "signature": "Static(SerializableDict a)-\u003eClosure(Process(SendPort a,ReceivePort a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpSend",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e ProcessId -\u003e CP a ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpSend",
        "fct-type": "function",
        "title": "cpSend"
      },
      "index": {
        "description": "CP version of send",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "cpSend",
        "normalized": "Static(SerializableDict a)-\u003eProcessId-\u003eCP a()",
        "package": "distributed-process",
        "partial": "Send",
        "signature": "Static(SerializableDict a)-\u003eProcessId-\u003eCP a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpUnlink",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Closure (Process ())",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpUnlink",
        "fct-type": "function",
        "title": "cpUnlink"
      },
      "index": {
        "description": "CP version of unlink",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "cpUnlink",
        "normalized": "ProcessId-\u003eClosure(Process())",
        "package": "distributed-process",
        "partial": "Unlink",
        "signature": "ProcessId-\u003eClosure(Process())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:functionSDict",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003ef : T1 -\u003e T2\u003c/code\u003e is a monomorphic function\n then \u003ccode\u003e$(functionSDict 'f) :: Static (SerializableDict T1)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe sure to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#functionSDict",
        "fct-type": "function",
        "title": "functionSDict"
      },
      "index": {
        "description": "If T1 T2 is monomorphic function then functionSDict Static SerializableDict T1 Be sure to pass to remotable",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "functionSDict",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "SDict",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:functionTDict",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003ef : T1 -\u003e Process T2\u003c/code\u003e is a monomorphic function\n then \u003ccode\u003e$(functionTDict 'f) :: Static (SerializableDict T2)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe sure to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#functionTDict",
        "fct-type": "function",
        "title": "functionTDict"
      },
      "index": {
        "description": "If T1 Process T2 is monomorphic function then functionTDict Static SerializableDict T2 Be sure to pass to remotable",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "functionTDict",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "TDict",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:idCP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "CP a a",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#idCP",
        "fct-type": "function",
        "title": "idCP"
      },
      "index": {
        "description": "CP version of id",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "idCP",
        "normalized": "",
        "package": "distributed-process",
        "partial": "CP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:mkClosure",
      "description": {
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#mkClosure",
        "fct-type": "function",
        "title": "mkClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "mkClosure",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "Closure",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:mkStatic",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a static value.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ef : forall a1 .. an. T\u003c/code\u003e\n then \u003ccode\u003e$(mkStatic 'f) :: forall a1 .. an. Static T\u003c/code\u003e.\n Be sure to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#mkStatic",
        "fct-type": "function",
        "title": "mkStatic"
      },
      "index": {
        "description": "Construct static value If forall a1 an then mkStatic forall a1 an Static Be sure to pass to remotable",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "mkStatic",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "Static",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:mkStaticClosure",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003eClosure\u003c/code\u003e from a static function.  This is useful for\n making a closure for a top-level \u003ccode\u003eProcess ()\u003c/code\u003e function, because\n using \u003ccode\u003e\u003ca\u003emkClosure\u003c/a\u003e\u003c/code\u003e would require adding a dummy \u003ccode\u003e()\u003c/code\u003e argument.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#mkStaticClosure",
        "fct-type": "function",
        "title": "mkStaticClosure"
      },
      "index": {
        "description": "Make Closure from static function This is useful for making closure for top-level Process function because using mkClosure would require adding dummy argument",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "mkStaticClosure",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "Static Closure",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:remotable",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the closure, decoder, and metadata definitions for the given list\n of functions\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#remotable",
        "fct-type": "function",
        "title": "remotable"
      },
      "index": {
        "description": "Create the closure decoder and metadata definitions for the given list of functions",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "remotable",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "distributed-process",
        "partial": "",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:remotableDecl",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e, but parameterized by the declaration of a function\n instead of the function name. So where for \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e you'd do\n\u003c/p\u003e\u003cpre\u003e f :: T1 -\u003e T2\n f = ...\n\n remotable ['f]\n\u003c/pre\u003e\u003cp\u003ewith \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e you would instead do\n\u003c/p\u003e\u003cpre\u003e remotableDecl [\n    [d| f :: T1 -\u003e T2 ;\n        f = ...\n      |]\n  ]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e creates the function specified as well as the various\n dictionaries and static versions that \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e also creates.\n \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e is sometimes necessary when you want to refer to, say,\n \u003ccode\u003e$(mkClosure 'f)\u003c/code\u003e within the definition of \u003ccode\u003ef\u003c/code\u003e itself.\n\u003c/p\u003e\u003cp\u003eNOTE: \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e creates \u003ccode\u003e__remoteTableDecl\u003c/code\u003e instead of \u003ccode\u003e__remoteTable\u003c/code\u003e\n so that you can use both \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e within the same\n module.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "[Q [Dec]] -\u003e Q [Dec]",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#remotableDecl",
        "fct-type": "function",
        "title": "remotableDecl"
      },
      "index": {
        "description": "Like remotable but parameterized by the declaration of function instead of the function name So where for remotable you do T1 T2 remotable with remotableDecl you would instead do remotableDecl T1 T2 remotableDecl creates the function specified as well as the various dictionaries and static versions that remotable also creates remotableDecl is sometimes necessary when you want to refer to say mkClosure within the definition of itself NOTE remotableDecl creates remoteTableDecl instead of remoteTable so that you can use both remotable and remotableDecl within the same module",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "remotableDecl",
        "normalized": "[Q[Dec]]-\u003eQ[Dec]",
        "package": "distributed-process",
        "partial": "Decl",
        "signature": "[Q[Dec]]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:returnCP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e a -\u003e Closure (Process a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#returnCP",
        "fct-type": "function",
        "title": "returnCP"
      },
      "index": {
        "description": "CP version of return",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "returnCP",
        "normalized": "Static(SerializableDict a)-\u003ea-\u003eClosure(Process a)",
        "package": "distributed-process",
        "partial": "CP",
        "signature": "Static(SerializableDict a)-\u003ea-\u003eClosure(Process a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:sdictProcessId",
      "description": {
        "fct-descr": "\u003cp\u003eSerialization dictionary for \u003ccode\u003e\u003ca\u003eProcessId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict ProcessId)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sdictProcessId",
        "fct-type": "function",
        "title": "sdictProcessId"
      },
      "index": {
        "description": "Serialization dictionary for ProcessId",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "sdictProcessId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:sdictSendPort",
      "description": {
        "fct-descr": "\u003cp\u003eSerialization dictionary for \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e Static (SerializableDict (SendPort a))",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sdictSendPort",
        "fct-type": "function",
        "title": "sdictSendPort"
      },
      "index": {
        "description": "Serialization dictionary for SendPort",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "sdictSendPort",
        "normalized": "Static(SerializableDict a)-\u003eStatic(SerializableDict(SendPort a))",
        "package": "distributed-process",
        "partial": "Send Port",
        "signature": "Static(SerializableDict a)-\u003eStatic(SerializableDict(SendPort a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:sdictUnit",
      "description": {
        "fct-descr": "\u003cp\u003eSerialization dictionary for '()'\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict ())",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sdictUnit",
        "fct-type": "function",
        "title": "sdictUnit"
      },
      "index": {
        "description": "Serialization dictionary for",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "sdictUnit",
        "normalized": "Static(SerializableDict())",
        "package": "distributed-process",
        "partial": "Unit",
        "signature": "Static(SerializableDict())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:seqCP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Closure (Process a) -\u003e Closure (Process b) -\u003e Closure (Process b)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#seqCP",
        "fct-type": "function",
        "title": "seqCP"
      },
      "index": {
        "description": "CP version of",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "seqCP",
        "normalized": "Closure(Process a)-\u003eClosure(Process b)-\u003eClosure(Process b)",
        "package": "distributed-process",
        "partial": "CP",
        "signature": "Closure(Process a)-\u003eClosure(Process b)-\u003eClosure(Process b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:splitCP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of (\u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "CP a c -\u003e CP b d -\u003e CP (a, b) (c, d)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#splitCP",
        "fct-type": "function",
        "title": "splitCP"
      },
      "index": {
        "description": "CP version of",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "splitCP",
        "normalized": "CP a b-\u003eCP c d-\u003eCP(a,c)(b,d)",
        "package": "distributed-process",
        "partial": "CP",
        "signature": "CP a c-\u003eCP b d-\u003eCP(a,b)(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:staticDecode",
      "description": {
        "fct-descr": "\u003cp\u003eStatic decoder, given a static serialization dictionary.\n\u003c/p\u003e\u003cp\u003eSee module documentation of \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e for an\n example.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Closure",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e Static (ByteString -\u003e a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#staticDecode",
        "fct-type": "function",
        "title": "staticDecode"
      },
      "index": {
        "description": "Static decoder given static serialization dictionary See module documentation of Control.Distributed.Process.Closure for an example",
        "hierarchy": "Control Distributed Process Closure",
        "module": "Control.Distributed.Process.Closure",
        "name": "staticDecode",
        "normalized": "Static(SerializableDict a)-\u003eStatic(ByteString-\u003ea)",
        "package": "distributed-process",
        "partial": "Decode",
        "signature": "Static(SerializableDict a)-\u003eStatic(ByteString-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent queue for single reader, single writer\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html",
        "fct-type": "module",
        "title": "CQueue"
      },
      "index": {
        "description": "Concurrent queue for single reader single writer",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "CQueue",
        "normalized": "",
        "package": "distributed-process",
        "partial": "CQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#t:BlockSpec",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#BlockSpec",
        "fct-type": "data",
        "title": "BlockSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "BlockSpec",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Block Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#t:CQueue",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#CQueue",
        "fct-type": "data",
        "title": "CQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "CQueue",
        "normalized": "",
        "package": "distributed-process",
        "partial": "CQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#t:MatchOn",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#MatchOn",
        "fct-type": "data",
        "title": "MatchOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "MatchOn",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Match On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:Blocking",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "Blocking",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#BlockSpec",
        "fct-type": "function",
        "title": "Blocking"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "Blocking",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Blocking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:MatchChan",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "MatchChan (STM a)",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#MatchOn",
        "fct-type": "function",
        "title": "MatchChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "MatchChan",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Match Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:MatchMsg",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "MatchMsg (m -\u003e Maybe a)",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#MatchOn",
        "fct-type": "function",
        "title": "MatchMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "MatchMsg",
        "normalized": "MatchMsg(a-\u003eMaybe b)",
        "package": "distributed-process",
        "partial": "Match Msg",
        "signature": "MatchMsg(m-\u003eMaybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:NonBlocking",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "NonBlocking",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#BlockSpec",
        "fct-type": "function",
        "title": "NonBlocking"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "NonBlocking",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Non Blocking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:Timeout",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "Timeout Int",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#BlockSpec",
        "fct-type": "function",
        "title": "Timeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "Timeout",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:dequeue",
      "description": {
        "fct-descr": "\u003cp\u003eDequeue an element\n\u003c/p\u003e\u003cp\u003eThe timeout (if any) is applied only to waiting for incoming messages, not\n to checking messages that have already arrived\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "CQueue m-\u003e BlockSpec-\u003e [MatchOn m a]-\u003e IO (Maybe a)",
        "fct-type": "function",
        "title": "dequeue"
      },
      "index": {
        "description": "Dequeue an element The timeout if any is applied only to waiting for incoming messages not to checking messages that have already arrived",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "dequeue",
        "normalized": "CQueue a-\u003eBlockSpec-\u003e[MatchOn a b]-\u003eIO(Maybe b)",
        "package": "distributed-process",
        "partial": "",
        "signature": "CQueue m-\u003eBlockSpec-\u003e[MatchOn m a]-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:enqueue",
      "description": {
        "fct-descr": "\u003cp\u003eEnqueue an element\n\u003c/p\u003e\u003cp\u003eEnqueue is strict.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "CQueue a -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#enqueue",
        "fct-type": "function",
        "title": "enqueue"
      },
      "index": {
        "description": "Enqueue an element Enqueue is strict",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "enqueue",
        "normalized": "CQueue a-\u003ea-\u003eIO()",
        "package": "distributed-process",
        "partial": "",
        "signature": "CQueue a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:mkWeakCQueue",
      "description": {
        "fct-descr": "\u003cp\u003eWeak reference to a CQueue\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "CQueue a -\u003e IO () -\u003e IO (Weak (CQueue a))",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#mkWeakCQueue",
        "fct-type": "function",
        "title": "mkWeakCQueue"
      },
      "index": {
        "description": "Weak reference to CQueue",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "mkWeakCQueue",
        "normalized": "CQueue a-\u003eIO()-\u003eIO(Weak(CQueue a))",
        "package": "distributed-process",
        "partial": "Weak CQueue",
        "signature": "CQueue a-\u003eIO()-\u003eIO(Weak(CQueue a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:newCQueue",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.CQueue",
        "fct-package": "distributed-process",
        "fct-signature": "IO (CQueue a)",
        "fct-source": "src/Control-Distributed-Process-Internal-CQueue.html#newCQueue",
        "fct-type": "function",
        "title": "newCQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal CQueue",
        "module": "Control.Distributed.Process.Internal.CQueue",
        "name": "newCQueue",
        "normalized": "",
        "package": "distributed-process",
        "partial": "CQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html",
        "fct-type": "module",
        "title": "BuiltIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "BuiltIn",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Built In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#t:CP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCP a b\u003c/code\u003e is a process with input of type \u003ccode\u003ea\u003c/code\u003e and output of type \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "type",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#CP",
        "fct-type": "type",
        "title": "CP"
      },
      "index": {
        "description": "CP is process with input of type and output of type",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "CP",
        "normalized": "",
        "package": "distributed-process",
        "partial": "CP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:bindCP",
      "description": {
        "fct-descr": "\u003cp\u003e(Not quite the) \u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Closure (Process a) -\u003e CP a b -\u003e Closure (Process b)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#bindCP",
        "fct-type": "function",
        "title": "bindCP"
      },
      "index": {
        "description": "Not quite the CP version of",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "bindCP",
        "normalized": "Closure(Process a)-\u003eCP a b-\u003eClosure(Process b)",
        "package": "distributed-process",
        "partial": "CP",
        "signature": "Closure(Process a)-\u003eCP a b-\u003eClosure(Process b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpDelay",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003edelay\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Closure (Process ()) -\u003e Closure (Process ())",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpDelay",
        "fct-type": "function",
        "title": "cpDelay"
      },
      "index": {
        "description": "CP version of delay",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "cpDelay",
        "normalized": "ProcessId-\u003eClosure(Process())-\u003eClosure(Process())",
        "package": "distributed-process",
        "partial": "Delay",
        "signature": "ProcessId-\u003eClosure(Process())-\u003eClosure(Process())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpExpect",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e Closure (Process a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpExpect",
        "fct-type": "function",
        "title": "cpExpect"
      },
      "index": {
        "description": "CP version of expect",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "cpExpect",
        "normalized": "Static(SerializableDict a)-\u003eClosure(Process a)",
        "package": "distributed-process",
        "partial": "Expect",
        "signature": "Static(SerializableDict a)-\u003eClosure(Process a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpLink",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Closure (Process ())",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpLink",
        "fct-type": "function",
        "title": "cpLink"
      },
      "index": {
        "description": "CP version of link",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "cpLink",
        "normalized": "ProcessId-\u003eClosure(Process())",
        "package": "distributed-process",
        "partial": "Link",
        "signature": "ProcessId-\u003eClosure(Process())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpNewChan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewChan\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e Closure (Process (SendPort a, ReceivePort a))",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpNewChan",
        "fct-type": "function",
        "title": "cpNewChan"
      },
      "index": {
        "description": "CP version of newChan",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "cpNewChan",
        "normalized": "Static(SerializableDict a)-\u003eClosure(Process(SendPort a,ReceivePort a))",
        "package": "distributed-process",
        "partial": "New Chan",
        "signature": "Static(SerializableDict a)-\u003eClosure(Process(SendPort a,ReceivePort a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpSend",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e ProcessId -\u003e CP a ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpSend",
        "fct-type": "function",
        "title": "cpSend"
      },
      "index": {
        "description": "CP version of send",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "cpSend",
        "normalized": "Static(SerializableDict a)-\u003eProcessId-\u003eCP a()",
        "package": "distributed-process",
        "partial": "Send",
        "signature": "Static(SerializableDict a)-\u003eProcessId-\u003eCP a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpUnlink",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Closure (Process ())",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpUnlink",
        "fct-type": "function",
        "title": "cpUnlink"
      },
      "index": {
        "description": "CP version of unlink",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "cpUnlink",
        "normalized": "ProcessId-\u003eClosure(Process())",
        "package": "distributed-process",
        "partial": "Unlink",
        "signature": "ProcessId-\u003eClosure(Process())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:idCP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "CP a a",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#idCP",
        "fct-type": "function",
        "title": "idCP"
      },
      "index": {
        "description": "CP version of id",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "idCP",
        "normalized": "",
        "package": "distributed-process",
        "partial": "CP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:remoteTable",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "RemoteTable -\u003e RemoteTable",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#remoteTable",
        "fct-type": "function",
        "title": "remoteTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "remoteTable",
        "normalized": "RemoteTable-\u003eRemoteTable",
        "package": "distributed-process",
        "partial": "Table",
        "signature": "RemoteTable-\u003eRemoteTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:returnCP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e a -\u003e Closure (Process a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#returnCP",
        "fct-type": "function",
        "title": "returnCP"
      },
      "index": {
        "description": "CP version of return",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "returnCP",
        "normalized": "Static(SerializableDict a)-\u003ea-\u003eClosure(Process a)",
        "package": "distributed-process",
        "partial": "CP",
        "signature": "Static(SerializableDict a)-\u003ea-\u003eClosure(Process a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:sdictProcessId",
      "description": {
        "fct-descr": "\u003cp\u003eSerialization dictionary for \u003ccode\u003e\u003ca\u003eProcessId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict ProcessId)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sdictProcessId",
        "fct-type": "function",
        "title": "sdictProcessId"
      },
      "index": {
        "description": "Serialization dictionary for ProcessId",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "sdictProcessId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:sdictSendPort",
      "description": {
        "fct-descr": "\u003cp\u003eSerialization dictionary for \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e Static (SerializableDict (SendPort a))",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sdictSendPort",
        "fct-type": "function",
        "title": "sdictSendPort"
      },
      "index": {
        "description": "Serialization dictionary for SendPort",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "sdictSendPort",
        "normalized": "Static(SerializableDict a)-\u003eStatic(SerializableDict(SendPort a))",
        "package": "distributed-process",
        "partial": "Send Port",
        "signature": "Static(SerializableDict a)-\u003eStatic(SerializableDict(SendPort a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:sdictUnit",
      "description": {
        "fct-descr": "\u003cp\u003eSerialization dictionary for '()'\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict ())",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sdictUnit",
        "fct-type": "function",
        "title": "sdictUnit"
      },
      "index": {
        "description": "Serialization dictionary for",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "sdictUnit",
        "normalized": "Static(SerializableDict())",
        "package": "distributed-process",
        "partial": "Unit",
        "signature": "Static(SerializableDict())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:seqCP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Closure (Process a) -\u003e Closure (Process b) -\u003e Closure (Process b)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#seqCP",
        "fct-type": "function",
        "title": "seqCP"
      },
      "index": {
        "description": "CP version of",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "seqCP",
        "normalized": "Closure(Process a)-\u003eClosure(Process b)-\u003eClosure(Process b)",
        "package": "distributed-process",
        "partial": "CP",
        "signature": "Closure(Process a)-\u003eClosure(Process b)-\u003eClosure(Process b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:sndStatic",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Static ((a, b) -\u003e b)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sndStatic",
        "fct-type": "function",
        "title": "sndStatic"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "sndStatic",
        "normalized": "Static((a,b)-\u003eb)",
        "package": "distributed-process",
        "partial": "Static",
        "signature": "Static((a,b)-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:splitCP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of (\u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "CP a c -\u003e CP b d -\u003e CP (a, b) (c, d)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#splitCP",
        "fct-type": "function",
        "title": "splitCP"
      },
      "index": {
        "description": "CP version of",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "splitCP",
        "normalized": "CP a b-\u003eCP c d-\u003eCP(a,c)(b,d)",
        "package": "distributed-process",
        "partial": "CP",
        "signature": "CP a c-\u003eCP b d-\u003eCP(a,b)(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:staticDecode",
      "description": {
        "fct-descr": "\u003cp\u003eStatic decoder, given a static serialization dictionary.\n\u003c/p\u003e\u003cp\u003eSee module documentation of \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e for an\n example.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e Static (ByteString -\u003e a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#staticDecode",
        "fct-type": "function",
        "title": "staticDecode"
      },
      "index": {
        "description": "Static decoder given static serialization dictionary See module documentation of Control.Distributed.Process.Closure for an example",
        "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
        "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
        "name": "staticDecode",
        "normalized": "Static(SerializableDict a)-\u003eStatic(ByteString-\u003ea)",
        "package": "distributed-process",
        "partial": "Decode",
        "signature": "Static(SerializableDict a)-\u003eStatic(ByteString-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell support\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.TH",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "Template Haskell support",
        "hierarchy": "Control Distributed Process Internal Closure TH",
        "module": "Control.Distributed.Process.Internal.Closure.TH",
        "name": "TH",
        "normalized": "",
        "package": "distributed-process",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:functionSDict",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003ef : T1 -\u003e T2\u003c/code\u003e is a monomorphic function\n then \u003ccode\u003e$(functionSDict 'f) :: Static (SerializableDict T1)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe sure to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.TH",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#functionSDict",
        "fct-type": "function",
        "title": "functionSDict"
      },
      "index": {
        "description": "If T1 T2 is monomorphic function then functionSDict Static SerializableDict T1 Be sure to pass to remotable",
        "hierarchy": "Control Distributed Process Internal Closure TH",
        "module": "Control.Distributed.Process.Internal.Closure.TH",
        "name": "functionSDict",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "SDict",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:functionTDict",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003ef : T1 -\u003e Process T2\u003c/code\u003e is a monomorphic function\n then \u003ccode\u003e$(functionTDict 'f) :: Static (SerializableDict T2)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe sure to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.TH",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#functionTDict",
        "fct-type": "function",
        "title": "functionTDict"
      },
      "index": {
        "description": "If T1 Process T2 is monomorphic function then functionTDict Static SerializableDict T2 Be sure to pass to remotable",
        "hierarchy": "Control Distributed Process Internal Closure TH",
        "module": "Control.Distributed.Process.Internal.Closure.TH",
        "name": "functionTDict",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "TDict",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:mkClosure",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Closure.TH",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#mkClosure",
        "fct-type": "function",
        "title": "mkClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Closure TH",
        "module": "Control.Distributed.Process.Internal.Closure.TH",
        "name": "mkClosure",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "Closure",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:mkStatic",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a static value.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ef : forall a1 .. an. T\u003c/code\u003e\n then \u003ccode\u003e$(mkStatic 'f) :: forall a1 .. an. Static T\u003c/code\u003e.\n Be sure to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.TH",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#mkStatic",
        "fct-type": "function",
        "title": "mkStatic"
      },
      "index": {
        "description": "Construct static value If forall a1 an then mkStatic forall a1 an Static Be sure to pass to remotable",
        "hierarchy": "Control Distributed Process Internal Closure TH",
        "module": "Control.Distributed.Process.Internal.Closure.TH",
        "name": "mkStatic",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "Static",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:mkStaticClosure",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003eClosure\u003c/code\u003e from a static function.  This is useful for\n making a closure for a top-level \u003ccode\u003eProcess ()\u003c/code\u003e function, because\n using \u003ccode\u003e\u003ca\u003emkClosure\u003c/a\u003e\u003c/code\u003e would require adding a dummy \u003ccode\u003e()\u003c/code\u003e argument.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.TH",
        "fct-package": "distributed-process",
        "fct-signature": "Name -\u003e Q Exp",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#mkStaticClosure",
        "fct-type": "function",
        "title": "mkStaticClosure"
      },
      "index": {
        "description": "Make Closure from static function This is useful for making closure for top-level Process function because using mkClosure would require adding dummy argument",
        "hierarchy": "Control Distributed Process Internal Closure TH",
        "module": "Control.Distributed.Process.Internal.Closure.TH",
        "name": "mkStaticClosure",
        "normalized": "Name-\u003eQ Exp",
        "package": "distributed-process",
        "partial": "Static Closure",
        "signature": "Name-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:remotable",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the closure, decoder, and metadata definitions for the given list\n of functions\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.TH",
        "fct-package": "distributed-process",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#remotable",
        "fct-type": "function",
        "title": "remotable"
      },
      "index": {
        "description": "Create the closure decoder and metadata definitions for the given list of functions",
        "hierarchy": "Control Distributed Process Internal Closure TH",
        "module": "Control.Distributed.Process.Internal.Closure.TH",
        "name": "remotable",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "distributed-process",
        "partial": "",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:remotableDecl",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e, but parameterized by the declaration of a function\n instead of the function name. So where for \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e you'd do\n\u003c/p\u003e\u003cpre\u003e f :: T1 -\u003e T2\n f = ...\n\n remotable ['f]\n\u003c/pre\u003e\u003cp\u003ewith \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e you would instead do\n\u003c/p\u003e\u003cpre\u003e remotableDecl [\n    [d| f :: T1 -\u003e T2 ;\n        f = ...\n      |]\n  ]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e creates the function specified as well as the various\n dictionaries and static versions that \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e also creates.\n \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e is sometimes necessary when you want to refer to, say,\n \u003ccode\u003e$(mkClosure 'f)\u003c/code\u003e within the definition of \u003ccode\u003ef\u003c/code\u003e itself.\n\u003c/p\u003e\u003cp\u003eNOTE: \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e creates \u003ccode\u003e__remoteTableDecl\u003c/code\u003e instead of \u003ccode\u003e__remoteTable\u003c/code\u003e\n so that you can use both \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e within the same\n module.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Closure.TH",
        "fct-package": "distributed-process",
        "fct-signature": "[Q [Dec]] -\u003e Q [Dec]",
        "fct-source": "src/Control-Distributed-Process-Internal-Closure-TH.html#remotableDecl",
        "fct-type": "function",
        "title": "remotableDecl"
      },
      "index": {
        "description": "Like remotable but parameterized by the declaration of function instead of the function name So where for remotable you do T1 T2 remotable with remotableDecl you would instead do remotableDecl T1 T2 remotableDecl creates the function specified as well as the various dictionaries and static versions that remotable also creates remotableDecl is sometimes necessary when you want to refer to say mkClosure within the definition of itself NOTE remotableDecl creates remoteTableDecl instead of remoteTable so that you can use both remotable and remotableDecl within the same module",
        "hierarchy": "Control Distributed Process Internal Closure TH",
        "module": "Control.Distributed.Process.Internal.Closure.TH",
        "name": "remotableDecl",
        "normalized": "[Q[Dec]]-\u003eQ[Dec]",
        "package": "distributed-process",
        "partial": "Decl",
        "signature": "[Q[Dec]]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Messaging",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-Messaging.html",
        "fct-type": "module",
        "title": "Messaging"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Messaging",
        "module": "Control.Distributed.Process.Internal.Messaging",
        "name": "Messaging",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Messaging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:closeImplicitReconnections",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Messaging",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e Identifier -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Messaging.html#closeImplicitReconnections",
        "fct-type": "function",
        "title": "closeImplicitReconnections"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Messaging",
        "module": "Control.Distributed.Process.Internal.Messaging",
        "name": "closeImplicitReconnections",
        "normalized": "LocalNode-\u003eIdentifier-\u003eIO()",
        "package": "distributed-process",
        "partial": "Implicit Reconnections",
        "signature": "LocalNode-\u003eIdentifier-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:disconnect",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Messaging",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e Identifier -\u003e Identifier -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Messaging.html#disconnect",
        "fct-type": "function",
        "title": "disconnect"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Messaging",
        "module": "Control.Distributed.Process.Internal.Messaging",
        "name": "disconnect",
        "normalized": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eIO()",
        "package": "distributed-process",
        "partial": "",
        "signature": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:impliesDeathOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea \u003ccode\u003e\u003ca\u003eimpliesDeathOf\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e is true if the death of \u003ccode\u003ea\u003c/code\u003e (for instance, a node)\n implies the death of \u003ccode\u003eb\u003c/code\u003e (for instance, a process on that node)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Messaging",
        "fct-package": "distributed-process",
        "fct-signature": "Identifier -\u003e Identifier -\u003e Bool",
        "fct-source": "src/Control-Distributed-Process-Internal-Messaging.html#impliesDeathOf",
        "fct-type": "function",
        "title": "impliesDeathOf"
      },
      "index": {
        "description": "impliesDeathOf is true if the death of for instance node implies the death of for instance process on that node",
        "hierarchy": "Control Distributed Process Internal Messaging",
        "module": "Control.Distributed.Process.Internal.Messaging",
        "name": "impliesDeathOf",
        "normalized": "Identifier-\u003eIdentifier-\u003eBool",
        "package": "distributed-process",
        "partial": "Death Of",
        "signature": "Identifier-\u003eIdentifier-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:sendBinary",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Messaging",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e Identifier -\u003e Identifier -\u003e ImplicitReconnect -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Messaging.html#sendBinary",
        "fct-type": "function",
        "title": "sendBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Messaging",
        "module": "Control.Distributed.Process.Internal.Messaging",
        "name": "sendBinary",
        "normalized": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003ea-\u003eIO()",
        "package": "distributed-process",
        "partial": "Binary",
        "signature": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:sendMessage",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Messaging",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e Identifier -\u003e Identifier -\u003e ImplicitReconnect -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Messaging.html#sendMessage",
        "fct-type": "function",
        "title": "sendMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Messaging",
        "module": "Control.Distributed.Process.Internal.Messaging",
        "name": "sendMessage",
        "normalized": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003ea-\u003eIO()",
        "package": "distributed-process",
        "partial": "Message",
        "signature": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:sendPayload",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Messaging",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e Identifier -\u003e Identifier -\u003e ImplicitReconnect -\u003e [ByteString] -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Messaging.html#sendPayload",
        "fct-type": "function",
        "title": "sendPayload"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Messaging",
        "module": "Control.Distributed.Process.Internal.Messaging",
        "name": "sendPayload",
        "normalized": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003e[ByteString]-\u003eIO()",
        "package": "distributed-process",
        "partial": "Payload",
        "signature": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003e[ByteString]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCloud Haskell primitives\n\u003c/p\u003e\u003cp\u003eWe define these in a separate module so that we don't have to rely on\n the closure combinators\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html",
        "fct-type": "module",
        "title": "Primitives"
      },
      "index": {
        "description": "Cloud Haskell primitives We define these in separate module so that we don have to rely on the closure combinators",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "Primitives",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Primitives",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:AbstractMessage",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a received message and provides two basic operations on it.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
        "fct-type": "data",
        "title": "AbstractMessage"
      },
      "index": {
        "description": "Represents received message and provides two basic operations on it",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "AbstractMessage",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Abstract Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eYou need this when using \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#Handler",
        "fct-type": "data",
        "title": "Handler"
      },
      "index": {
        "description": "You need this when using catches",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "Handler",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:Match",
      "description": {
        "fct-descr": "\u003cp\u003eOpaque type used in \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereceiveTimeout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#Match",
        "fct-type": "data",
        "title": "Match"
      },
      "index": {
        "description": "Opaque type used in receiveWait and receiveTimeout",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "Match",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:ProcessExitException",
      "description": {
        "fct-descr": "\u003cp\u003eInternal exception thrown indirectly by \u003ccode\u003eexit\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessExitException",
        "fct-type": "data",
        "title": "ProcessExitException"
      },
      "index": {
        "description": "Internal exception thrown indirectly by exit",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "ProcessExitException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Exit Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:ProcessInfo",
      "description": {
        "fct-descr": "\u003cp\u003eProvide information about a running process\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "data",
        "title": "ProcessInfo"
      },
      "index": {
        "description": "Provide information about running process",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "ProcessInfo",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:ProcessTerminationException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003eterminate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#ProcessTerminationException",
        "fct-type": "data",
        "title": "ProcessTerminationException"
      },
      "index": {
        "description": "Thrown by terminate",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "ProcessTerminationException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Termination Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:AbstractMessage",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "AbstractMessage",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
        "fct-type": "function",
        "title": "AbstractMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "AbstractMessage",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Abstract Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:Handler",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Handler (e -\u003e Process a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#Handler",
        "fct-type": "function",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "Handler",
        "normalized": "Handler(a-\u003eProcess b)",
        "package": "distributed-process",
        "partial": "Handler",
        "signature": "Handler(e-\u003eProcess a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:ProcessInfo",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessInfo",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "ProcessInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "ProcessInfo",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:ProcessTerminationException",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessTerminationException",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#ProcessTerminationException",
        "fct-type": "function",
        "title": "ProcessTerminationException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "ProcessTerminationException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Termination Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:bracket",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e (a -\u003e Process b) -\u003e (a -\u003e Process c) -\u003e Process c",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#bracket",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "Lift bracket",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "bracket",
        "normalized": "Process a-\u003e(a-\u003eProcess b)-\u003e(a-\u003eProcess c)-\u003eProcess c",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003e(a-\u003eProcess b)-\u003e(a-\u003eProcess c)-\u003eProcess c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:bracket_",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e Process b -\u003e Process c -\u003e Process c",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#bracket_",
        "fct-type": "function",
        "title": "bracket_"
      },
      "index": {
        "description": "Lift bracket",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "bracket_",
        "normalized": "Process a-\u003eProcess b-\u003eProcess c-\u003eProcess c",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003eProcess b-\u003eProcess c-\u003eProcess c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e (e -\u003e Process a) -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#catch",
        "fct-type": "function",
        "title": "catch"
      },
      "index": {
        "description": "Lift catch",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "catch",
        "normalized": "Process a-\u003e(b-\u003eProcess a)-\u003eProcess a",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003e(e-\u003eProcess a)-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catchExit",
      "description": {
        "fct-descr": "\u003cp\u003eCatches \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e. The handler will not be applied unless its\n type matches the encoded data stored in the exception (see the \u003cem\u003ereason\u003c/em\u003e\n argument given to the \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e primitive). If the handler cannot be applied,\n the exception will be re-thrown.\n\u003c/p\u003e\u003cp\u003eTo handle \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e without regard for \u003cem\u003ereason\u003c/em\u003e, see \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n To handle multiple \u003cem\u003ereasons\u003c/em\u003e of differing types, see \u003ccode\u003e\u003ca\u003ecatchesExit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process b -\u003e (ProcessId -\u003e a -\u003e Process b) -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#catchExit",
        "fct-type": "function",
        "title": "catchExit"
      },
      "index": {
        "description": "Catches ProcessExitException The handler will not be applied unless its type matches the encoded data stored in the exception see the reason argument given to the exit primitive If the handler cannot be applied the exception will be re-thrown To handle ProcessExitException without regard for reason see catch To handle multiple reasons of differing types see catchesExit",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "catchExit",
        "normalized": "Process a-\u003e(ProcessId-\u003eb-\u003eProcess a)-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Exit",
        "signature": "Process b-\u003e(ProcessId-\u003ea-\u003eProcess b)-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catches",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e [Handler a] -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#catches",
        "fct-type": "function",
        "title": "catches"
      },
      "index": {
        "description": "Lift catches",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "catches",
        "normalized": "Process a-\u003e[Handler a]-\u003eProcess a",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003e[Handler a]-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catchesExit",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e (almost).\n\u003c/p\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e stores the exit \u003ccode\u003ereason\u003c/code\u003e as a typed, encoded\n message, a handler must accept an input of the expected type. In order to\n handle a list of potentially different handlers (and therefore input types),\n a handler passed to \u003ccode\u003e\u003ca\u003ecatchesExit\u003c/a\u003e\u003c/code\u003e must accept \u003ccode\u003e\u003ca\u003eAbstractMessage\u003c/a\u003e\u003c/code\u003e and return\n \u003ccode\u003eMaybe\u003c/code\u003e (i.e., \u003ccode\u003eJust p\u003c/code\u003e if it handled the exit reason, otherwise \u003ccode\u003eNothing\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003emaybeHandleMessage\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eAsbtractMessage\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process b -\u003e [ProcessId -\u003e AbstractMessage -\u003e Process (Maybe b)] -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#catchesExit",
        "fct-type": "function",
        "title": "catchesExit"
      },
      "index": {
        "description": "Lift catches almost As ProcessExitException stores the exit reason as typed encoded message handler must accept an input of the expected type In order to handle list of potentially different handlers and therefore input types handler passed to catchesExit must accept AbstractMessage and return Maybe i.e Just if it handled the exit reason otherwise Nothing See maybeHandleMessage and AsbtractMessage for more details",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "catchesExit",
        "normalized": "Process a-\u003e[ProcessId-\u003eAbstractMessage-\u003eProcess(Maybe a)]-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Exit",
        "signature": "Process b-\u003e[ProcessId-\u003eAbstractMessage-\u003eProcess(Maybe b)]-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:die",
      "description": {
        "fct-descr": "\u003cp\u003eDie immediately - throws a \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e with the given \u003ccode\u003ereason\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "a -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#die",
        "fct-type": "function",
        "title": "die"
      },
      "index": {
        "description": "Die immediately throws ProcessExitException with the given reason",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "die",
        "normalized": "a-\u003eProcess b",
        "package": "distributed-process",
        "partial": "",
        "signature": "a-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:exit",
      "description": {
        "fct-descr": "\u003cp\u003eGraceful request to exit a process. Throws \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e with the\n supplied \u003ccode\u003ereason\u003c/code\u003e encoded as a message. Any \u003cem\u003eexit signal\u003c/em\u003e raised in this\n manner can be handled using the \u003ccode\u003e\u003ca\u003ecatchExit\u003c/a\u003e\u003c/code\u003e family of functions.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#exit",
        "fct-type": "function",
        "title": "exit"
      },
      "index": {
        "description": "Graceful request to exit process Throws ProcessExitException with the supplied reason encoded as message Any exit signal raised in this manner can be handled using the catchExit family of functions",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "exit",
        "normalized": "ProcessId-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:expect",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a message of a specific type\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#expect",
        "fct-type": "function",
        "title": "expect"
      },
      "index": {
        "description": "Wait for message of specific type",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "expect",
        "normalized": "",
        "package": "distributed-process",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:expectTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e but with a timeout\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Int -\u003e Process (Maybe a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#expectTimeout",
        "fct-type": "function",
        "title": "expectTimeout"
      },
      "index": {
        "description": "Like expect but with timeout",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "expectTimeout",
        "normalized": "Int-\u003eProcess(Maybe a)",
        "package": "distributed-process",
        "partial": "Timeout",
        "signature": "Int-\u003eProcess(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e Process b -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#finally",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "Lift finally",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "finally",
        "normalized": "Process a-\u003eProcess b-\u003eProcess a",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003eProcess b-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:forward",
      "description": {
        "fct-descr": "\u003cp\u003eforward the message to \u003ccode\u003eProcessId\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
        "fct-type": "function",
        "title": "forward"
      },
      "index": {
        "description": "forward the message to ProcessId",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "forward",
        "normalized": "ProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:getProcessInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet information about the specified process\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process (Maybe ProcessInfo)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#getProcessInfo",
        "fct-type": "function",
        "title": "getProcessInfo"
      },
      "index": {
        "description": "Get information about the specified process",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "getProcessInfo",
        "normalized": "ProcessId-\u003eProcess(Maybe ProcessInfo)",
        "package": "distributed-process",
        "partial": "Process Info",
        "signature": "ProcessId-\u003eProcess(Maybe ProcessInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:getSelfNode",
      "description": {
        "fct-descr": "\u003cp\u003eGet the node ID of our local node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#getSelfNode",
        "fct-type": "function",
        "title": "getSelfNode"
      },
      "index": {
        "description": "Get the node ID of our local node",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "getSelfNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Self Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:getSelfPid",
      "description": {
        "fct-descr": "\u003cp\u003eOur own process ID\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#getSelfPid",
        "fct-type": "function",
        "title": "getSelfPid"
      },
      "index": {
        "description": "Our own process ID",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "getSelfPid",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Self Pid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoLinks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "[ProcessId]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoLinks"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "infoLinks",
        "normalized": "[ProcessId]",
        "package": "distributed-process",
        "partial": "Links",
        "signature": "[ProcessId]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoMessageQueueLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoMessageQueueLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "infoMessageQueueLength",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Message Queue Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoMonitors",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "[(ProcessId, MonitorRef)]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoMonitors"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "infoMonitors",
        "normalized": "[(ProcessId,MonitorRef)]",
        "package": "distributed-process",
        "partial": "Monitors",
        "signature": "[(ProcessId,MonitorRef)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoNode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "infoNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoRegisteredNames",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "[String]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoRegisteredNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "infoRegisteredNames",
        "normalized": "[String]",
        "package": "distributed-process",
        "partial": "Registered Names",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:kill",
      "description": {
        "fct-descr": "\u003cp\u003eForceful request to kill a process. Where \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e provides an exception\n that can be caught and handled, \u003ccode\u003e\u003ca\u003ekill\u003c/a\u003e\u003c/code\u003e throws an unexposed exception type\n which cannot be handled explicitly (by type).\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#kill",
        "fct-type": "function",
        "title": "kill"
      },
      "index": {
        "description": "Forceful request to kill process Where exit provides an exception that can be caught and handled kill throws an unexposed exception type which cannot be handled explicitly by type",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "kill",
        "normalized": "ProcessId-\u003eString-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eString-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:link",
      "description": {
        "fct-descr": "\u003cp\u003eLink to a remote process (asynchronous)\n\u003c/p\u003e\u003cp\u003eWhen process A links to process B (that is, process A calls\n \u003ccode\u003elink pidB\u003c/code\u003e) then an asynchronous exception will be thrown to process A\n when process B terminates (normally or abnormally), or when process A gets\n disconnected from process B. Although it is \u003cem\u003etechnically\u003c/em\u003e possible to catch\n these exceptions, chances are if you find yourself trying to do so you should\n probably be using \u003ccode\u003e\u003ca\u003emonitor\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e. In particular, code such as\n\u003c/p\u003e\u003cpre\u003e link pidB   -- Link to process B\n expect      -- Wait for a message from process B\n unlink pidB -- Unlink again\n\u003c/pre\u003e\u003cp\u003edoesn't quite do what one might expect: if process B sends a message to\n process A, and \u003cem\u003esubsequently terminates\u003c/em\u003e, then process A might or might not\n be terminated too, depending on whether the exception is thrown before or\n after the \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e (i.e., this code has a race condition).\n\u003c/p\u003e\u003cp\u003eLinking is all-or-nothing: A is either linked to B, or it's not. A second\n call to \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e has no effect.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e provides unidirectional linking (see \u003ccode\u003espawnSupervised\u003c/code\u003e).\n Linking makes no distinction between normal and abnormal termination of\n the remote process.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#link",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "Link to remote process asynchronous When process links to process that is process calls link pidB then an asynchronous exception will be thrown to process when process terminates normally or abnormally or when process gets disconnected from process Although it is technically possible to catch these exceptions chances are if you find yourself trying to do so you should probably be using monitor rather than link In particular code such as link pidB Link to process expect Wait for message from process unlink pidB Unlink again doesn quite do what one might expect if process sends message to process and subsequently terminates then process might or might not be terminated too depending on whether the exception is thrown before or after the unlink i.e this code has race condition Linking is all-or-nothing is either linked to or it not second call to link has no effect Note that link provides unidirectional linking see spawnSupervised Linking makes no distinction between normal and abnormal termination of the remote process",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "link",
        "normalized": "ProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:linkNode",
      "description": {
        "fct-descr": "\u003cp\u003eLink to a node (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#linkNode",
        "fct-type": "function",
        "title": "linkNode"
      },
      "index": {
        "description": "Link to node asynchronous",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "linkNode",
        "normalized": "NodeId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Node",
        "signature": "NodeId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:linkPort",
      "description": {
        "fct-descr": "\u003cp\u003eLink to a channel (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#linkPort",
        "fct-type": "function",
        "title": "linkPort"
      },
      "index": {
        "description": "Link to channel asynchronous",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "linkPort",
        "normalized": "SendPort a-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Port",
        "signature": "SendPort a-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:mask",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "((forall a.  Process a -\u003e Process a) -\u003e Process b) -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#mask",
        "fct-type": "function",
        "title": "mask"
      },
      "index": {
        "description": "Lift mask",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "mask",
        "normalized": "((a b Process c-\u003eProcess c)-\u003eProcess d)-\u003eProcess d",
        "package": "distributed-process",
        "partial": "",
        "signature": "((forall a. Process a-\u003eProcess a)-\u003eProcess b)-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003eMatch against any message of the right type\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "(a -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#match",
        "fct-type": "function",
        "title": "match"
      },
      "index": {
        "description": "Match against any message of the right type",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "match",
        "normalized": "(a-\u003eProcess b)-\u003eMatch b",
        "package": "distributed-process",
        "partial": "",
        "signature": "(a-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchAny",
      "description": {
        "fct-descr": "\u003cp\u003eMatch against an arbitrary message. \u003ccode\u003e\u003ca\u003ematchAny\u003c/a\u003e\u003c/code\u003e removes the first available\n message from the process mailbox, and via the \u003ccode\u003e\u003ca\u003eAbstractMessage\u003c/a\u003e\u003c/code\u003e type,\n supports forwarding \u003cem\u003eor\u003c/em\u003e handling the message \u003cem\u003eif\u003c/em\u003e it is of the correct\n type. If \u003cem\u003enot\u003c/em\u003e of the right type, then the \u003ccode\u003e\u003ca\u003eAbstractMessage\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003emaybeHandleMessage\u003c/code\u003e function will not evaluate the supplied expression,\n \u003cem\u003ebut\u003c/em\u003e the message will still have been removed from the process mailbox!\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "forall b.  (AbstractMessage -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchAny",
        "fct-type": "function",
        "title": "matchAny"
      },
      "index": {
        "description": "Match against an arbitrary message matchAny removes the first available message from the process mailbox and via the AbstractMessage type supports forwarding or handling the message if it is of the correct type If not of the right type then the AbstractMessage maybeHandleMessage function will not evaluate the supplied expression but the message will still have been removed from the process mailbox",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "matchAny",
        "normalized": "a b(AbstractMessage-\u003eProcess c)-\u003eMatch c",
        "package": "distributed-process",
        "partial": "Any",
        "signature": "forall b.(AbstractMessage-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchAnyIf",
      "description": {
        "fct-descr": "\u003cp\u003eMatch against an arbitrary message. \u003ccode\u003e\u003ca\u003ematchAnyIf\u003c/a\u003e\u003c/code\u003e will \u003cem\u003eonly\u003c/em\u003e remove the\n message from the process mailbox, \u003cem\u003eif\u003c/em\u003e the supplied condition matches. The\n success (or failure) of runtime type checks in \u003ccode\u003emaybeHandleMessage\u003c/code\u003e does not\n count here, i.e., if the condition evaluates to \u003ccode\u003eTrue\u003c/code\u003e then the message will\n be removed from the process mailbox and decoded, but that does \u003cem\u003enot\u003c/em\u003e\n guarantee that an expression passed to \u003ccode\u003emaybeHandleMessage\u003c/code\u003e will pass the\n runtime type checks and therefore be evaluated. If the types do not match\n up, then \u003ccode\u003emaybeHandleMessage\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "(a -\u003e Bool) -\u003e (AbstractMessage -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchAnyIf",
        "fct-type": "function",
        "title": "matchAnyIf"
      },
      "index": {
        "description": "Match against an arbitrary message matchAnyIf will only remove the message from the process mailbox if the supplied condition matches The success or failure of runtime type checks in maybeHandleMessage does not count here i.e if the condition evaluates to True then the message will be removed from the process mailbox and decoded but that does not guarantee that an expression passed to maybeHandleMessage will pass the runtime type checks and therefore be evaluated If the types do not match up then maybeHandleMessage returns Nothing",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "matchAnyIf",
        "normalized": "(a-\u003eBool)-\u003e(AbstractMessage-\u003eProcess b)-\u003eMatch b",
        "package": "distributed-process",
        "partial": "Any If",
        "signature": "(a-\u003eBool)-\u003e(AbstractMessage-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchChan",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ReceivePort a -\u003e (a -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchChan",
        "fct-type": "function",
        "title": "matchChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "matchChan",
        "normalized": "ReceivePort a-\u003e(a-\u003eProcess b)-\u003eMatch b",
        "package": "distributed-process",
        "partial": "Chan",
        "signature": "ReceivePort a-\u003e(a-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchIf",
      "description": {
        "fct-descr": "\u003cp\u003eMatch against any message of the right type that satisfies a predicate\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchIf",
        "fct-type": "function",
        "title": "matchIf"
      },
      "index": {
        "description": "Match against any message of the right type that satisfies predicate",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "matchIf",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eProcess b)-\u003eMatch b",
        "package": "distributed-process",
        "partial": "If",
        "signature": "(a-\u003eBool)-\u003e(a-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchUnknown",
      "description": {
        "fct-descr": "\u003cp\u003eRemove any message from the queue\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process b -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchUnknown",
        "fct-type": "function",
        "title": "matchUnknown"
      },
      "index": {
        "description": "Remove any message from the queue",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "matchUnknown",
        "normalized": "Process a-\u003eMatch a",
        "package": "distributed-process",
        "partial": "Unknown",
        "signature": "Process b-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:maybeHandleMessage",
      "description": {
        "fct-descr": "\u003cp\u003eHandle the message.\n        If the type of the message matches the type of the first argument to\n        the supplied expression, then the expression will be evaluated against\n        it. If this runtime type checking fails, then \u003ccode\u003eNothing\u003c/code\u003e will be returned\n        to indicate the fact. If the check succeeds and evaluation proceeds\n        however, the resulting value with be wrapped with \u003ccode\u003eJust\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "(a -\u003e Process b) -\u003e Process (Maybe b)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
        "fct-type": "function",
        "title": "maybeHandleMessage"
      },
      "index": {
        "description": "Handle the message If the type of the message matches the type of the first argument to the supplied expression then the expression will be evaluated against it If this runtime type checking fails then Nothing will be returned to indicate the fact If the check succeeds and evaluation proceeds however the resulting value with be wrapped with Just",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "maybeHandleMessage",
        "normalized": "(a-\u003eProcess b)-\u003eProcess(Maybe b)",
        "package": "distributed-process",
        "partial": "Handle Message",
        "signature": "(a-\u003eProcess b)-\u003eProcess(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:mergePortsBiased",
      "description": {
        "fct-descr": "\u003cp\u003eMerge a list of typed channels.\n\u003c/p\u003e\u003cp\u003eThe result port is left-biased: if there are messages available on more\n than one port, the first available message is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "[ReceivePort a] -\u003e Process (ReceivePort a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#mergePortsBiased",
        "fct-type": "function",
        "title": "mergePortsBiased"
      },
      "index": {
        "description": "Merge list of typed channels The result port is left-biased if there are messages available on more than one port the first available message is returned",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "mergePortsBiased",
        "normalized": "[ReceivePort a]-\u003eProcess(ReceivePort a)",
        "package": "distributed-process",
        "partial": "Ports Biased",
        "signature": "[ReceivePort a]-\u003eProcess(ReceivePort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:mergePortsRR",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emergePortsBiased\u003c/a\u003e\u003c/code\u003e, but with a round-robin scheduler (rather than\n left-biased)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "[ReceivePort a] -\u003e Process (ReceivePort a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#mergePortsRR",
        "fct-type": "function",
        "title": "mergePortsRR"
      },
      "index": {
        "description": "Like mergePortsBiased but with round-robin scheduler rather than left-biased",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "mergePortsRR",
        "normalized": "[ReceivePort a]-\u003eProcess(ReceivePort a)",
        "package": "distributed-process",
        "partial": "Ports RR",
        "signature": "[ReceivePort a]-\u003eProcess(ReceivePort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:monitor",
      "description": {
        "fct-descr": "\u003cp\u003eMonitor another process (asynchronous)\n\u003c/p\u003e\u003cp\u003eWhen process A monitors process B (that is, process A calls\n \u003ccode\u003emonitor pidB\u003c/code\u003e) then process A will receive a \u003ccode\u003eProcessMonitorNotification\u003c/code\u003e\n when process B terminates (normally or abnormally), or when process A gets\n disconnected from process B. You receive this message like any other (using\n \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e); the notification includes a reason (\u003ccode\u003eDiedNormal\u003c/code\u003e, \u003ccode\u003eDiedException\u003c/code\u003e,\n \u003ccode\u003eDiedDisconnect\u003c/code\u003e, etc.).\n\u003c/p\u003e\u003cp\u003eEvery call to \u003ccode\u003e\u003ca\u003emonitor\u003c/a\u003e\u003c/code\u003e returns a new monitor reference \u003ccode\u003e\u003ca\u003eMonitorRef\u003c/a\u003e\u003c/code\u003e; if\n multiple monitors are set up, multiple notifications will be delivered\n and monitors can be disabled individually using \u003ccode\u003e\u003ca\u003eunmonitor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#monitor",
        "fct-type": "function",
        "title": "monitor"
      },
      "index": {
        "description": "Monitor another process asynchronous When process monitors process that is process calls monitor pidB then process will receive ProcessMonitorNotification when process terminates normally or abnormally or when process gets disconnected from process You receive this message like any other using expect the notification includes reason DiedNormal DiedException DiedDisconnect etc Every call to monitor returns new monitor reference MonitorRef if multiple monitors are set up multiple notifications will be delivered and monitors can be disabled individually using unmonitor",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "monitor",
        "normalized": "ProcessId-\u003eProcess MonitorRef",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess MonitorRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:monitorNode",
      "description": {
        "fct-descr": "\u003cp\u003eMonitor a node (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Process MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#monitorNode",
        "fct-type": "function",
        "title": "monitorNode"
      },
      "index": {
        "description": "Monitor node asynchronous",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "monitorNode",
        "normalized": "NodeId-\u003eProcess MonitorRef",
        "package": "distributed-process",
        "partial": "Node",
        "signature": "NodeId-\u003eProcess MonitorRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:monitorPort",
      "description": {
        "fct-descr": "\u003cp\u003eMonitor a typed channel (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e Process MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#monitorPort",
        "fct-type": "function",
        "title": "monitorPort"
      },
      "index": {
        "description": "Monitor typed channel asynchronous",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "monitorPort",
        "normalized": "SendPort a-\u003eProcess MonitorRef",
        "package": "distributed-process",
        "partial": "Port",
        "signature": "SendPort a-\u003eProcess MonitorRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:newChan",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new typed channel\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process (SendPort a, ReceivePort a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#newChan",
        "fct-type": "function",
        "title": "newChan"
      },
      "index": {
        "description": "Create new typed channel",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "newChan",
        "normalized": "Process(SendPort a,ReceivePort a)",
        "package": "distributed-process",
        "partial": "Chan",
        "signature": "Process(SendPort a,ReceivePort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:nsend",
      "description": {
        "fct-descr": "\u003cp\u003eNamed send to a process in the local registry (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#nsend",
        "fct-type": "function",
        "title": "nsend"
      },
      "index": {
        "description": "Named send to process in the local registry asynchronous",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "nsend",
        "normalized": "String-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:nsendRemote",
      "description": {
        "fct-descr": "\u003cp\u003eNamed send to a process in a remote registry (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#nsendRemote",
        "fct-type": "function",
        "title": "nsendRemote"
      },
      "index": {
        "description": "Named send to process in remote registry asynchronous",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "nsendRemote",
        "normalized": "NodeId-\u003eString-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote",
        "signature": "NodeId-\u003eString-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e Process b -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#onException",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "Lift onException",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "onException",
        "normalized": "Process a-\u003eProcess b-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Exception",
        "signature": "Process a-\u003eProcess b-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveChan",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a message on a typed channel\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ReceivePort a -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveChan",
        "fct-type": "function",
        "title": "receiveChan"
      },
      "index": {
        "description": "Wait for message on typed channel",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "receiveChan",
        "normalized": "ReceivePort a-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Chan",
        "signature": "ReceivePort a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveChanTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceiveChan\u003c/a\u003e\u003c/code\u003e but with a timeout. If the timeout is 0, do a\n non-blocking check for a message.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Int -\u003e ReceivePort a -\u003e Process (Maybe a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveChanTimeout",
        "fct-type": "function",
        "title": "receiveChanTimeout"
      },
      "index": {
        "description": "Like receiveChan but with timeout If the timeout is do non-blocking check for message",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "receiveChanTimeout",
        "normalized": "Int-\u003eReceivePort a-\u003eProcess(Maybe a)",
        "package": "distributed-process",
        "partial": "Chan Timeout",
        "signature": "Int-\u003eReceivePort a-\u003eProcess(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e but with a timeout.\n\u003c/p\u003e\u003cp\u003eIf the timeout is zero do a non-blocking check for matching messages. A\n non-zero timeout is applied only when waiting for incoming messages (that is,\n \u003cem\u003eafter\u003c/em\u003e we have checked the messages that are already in the mailbox).\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Int -\u003e [Match b] -\u003e Process (Maybe b)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveTimeout",
        "fct-type": "function",
        "title": "receiveTimeout"
      },
      "index": {
        "description": "Like receiveWait but with timeout If the timeout is zero do non-blocking check for matching messages non-zero timeout is applied only when waiting for incoming messages that is after we have checked the messages that are already in the mailbox",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "receiveTimeout",
        "normalized": "Int-\u003e[Match a]-\u003eProcess(Maybe a)",
        "package": "distributed-process",
        "partial": "Timeout",
        "signature": "Int-\u003e[Match b]-\u003eProcess(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveWait",
      "description": {
        "fct-descr": "\u003cp\u003eTest the matches in order against each message in the queue\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "[Match b] -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveWait",
        "fct-type": "function",
        "title": "receiveWait"
      },
      "index": {
        "description": "Test the matches in order against each message in the queue",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "receiveWait",
        "normalized": "[Match a]-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Wait",
        "signature": "[Match b]-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reconnect",
      "description": {
        "fct-descr": "\u003cp\u003eCloud Haskell provides the illusion of connection-less, reliable, ordered\n message passing. However, when network connections get disrupted this\n illusion cannot always be maintained. Once a network connection breaks (even\n temporarily) no further communication on that connection will be possible.\n For example, if process A sends a message to process B, and A is then\n notified (by monitor notification) that it got disconnected from B, A will\n not be able to send any further messages to B, \u003cem\u003eunless\u003c/em\u003e A explicitly\n indicates that it is acceptable to attempt to reconnect to B using the\n Cloud Haskell \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e primitive.\n\u003c/p\u003e\u003cp\u003eImportantly, when A calls \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e it acknowledges that some messages to\n B might have been lost. For instance, if A sends messages m1 and m2 to B,\n then receives a monitor notification that its connection to B has been lost,\n calls \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e and then sends m3, it is possible that B will receive m1\n and m3 but not m2.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e does not mean \u003cem\u003ereconnect now\u003c/em\u003e but rather /it is okay\n to attempt to reconnect on the next send/. In particular, if no further\n communication attempts are made to B then A can use reconnect to clean up\n its connection to B.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#reconnect",
        "fct-type": "function",
        "title": "reconnect"
      },
      "index": {
        "description": "Cloud Haskell provides the illusion of connection-less reliable ordered message passing However when network connections get disrupted this illusion cannot always be maintained Once network connection breaks even temporarily no further communication on that connection will be possible For example if process sends message to process and is then notified by monitor notification that it got disconnected from will not be able to send any further messages to unless explicitly indicates that it is acceptable to attempt to reconnect to using the Cloud Haskell reconnect primitive Importantly when calls reconnect it acknowledges that some messages to might have been lost For instance if sends messages m1 and m2 to then receives monitor notification that its connection to has been lost calls reconnect and then sends m3 it is possible that will receive m1 and m3 but not m2 Note that reconnect does not mean reconnect now but rather it is okay to attempt to reconnect on the next send In particular if no further communication attempts are made to then can use reconnect to clean up its connection to",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "reconnect",
        "normalized": "ProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reconnectPort",
      "description": {
        "fct-descr": "\u003cp\u003eReconnect to a sendport. See \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#reconnectPort",
        "fct-type": "function",
        "title": "reconnectPort"
      },
      "index": {
        "description": "Reconnect to sendport See reconnect for more information",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "reconnectPort",
        "normalized": "SendPort a-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Port",
        "signature": "SendPort a-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a process with the local registry (asynchronous).\n This version will wait until a response is gotten from the\n management process. The name must not already be registered.\n The process need not be on this node.\n A bad registration will result in a \u003ccode\u003e\u003ca\u003eProcessRegistrationException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe process to be registered does not have to be local itself.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#register",
        "fct-type": "function",
        "title": "register"
      },
      "index": {
        "description": "Register process with the local registry asynchronous This version will wait until response is gotten from the management process The name must not already be registered The process need not be on this node bad registration will result in ProcessRegistrationException The process to be registered does not have to be local itself",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "register",
        "normalized": "String-\u003eProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:registerRemoteAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a process with a remote registry (asynchronous).\n\u003c/p\u003e\u003cp\u003eThe process to be registered does not have to live on the same remote node.\n Reply wil come in the form of a \u003ccode\u003e\u003ca\u003eRegisterReply\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e\u003cp\u003eSee comments in \u003ccode\u003e\u003ca\u003ewhereisRemoteAsync\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#registerRemoteAsync",
        "fct-type": "function",
        "title": "registerRemoteAsync"
      },
      "index": {
        "description": "Register process with remote registry asynchronous The process to be registered does not have to live on the same remote node Reply wil come in the form of RegisterReply message See comments in whereisRemoteAsync",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "registerRemoteAsync",
        "normalized": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote Async",
        "signature": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reregister",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e, but will replace an existing registration.\n The name must already be registered.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#reregister",
        "fct-type": "function",
        "title": "reregister"
      },
      "index": {
        "description": "Like register but will replace an existing registration The name must already be registered",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "reregister",
        "normalized": "String-\u003eProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reregisterRemoteAsync",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#reregisterRemoteAsync",
        "fct-type": "function",
        "title": "reregisterRemoteAsync"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "reregisterRemoteAsync",
        "normalized": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote Async",
        "signature": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:say",
      "description": {
        "fct-descr": "\u003cp\u003eLog a string\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esay message\u003c/code\u003e sends a message (time, pid of the current process, message)\n to the process registered as \u003ccode\u003elogger\u003c/code\u003e.  By default, this process simply\n sends the string to \u003ccode\u003estderr\u003c/code\u003e. Individual Cloud Haskell backends might\n replace this with a different logger process, however.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#say",
        "fct-type": "function",
        "title": "say"
      },
      "index": {
        "description": "Log string say message sends message time pid of the current process message to the process registered as logger By default this process simply sends the string to stderr Individual Cloud Haskell backends might replace this with different logger process however",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "say",
        "normalized": "String-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send message",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "send",
        "normalized": "ProcessId-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:sendChan",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message on a typed channel\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#sendChan",
        "fct-type": "function",
        "title": "sendChan"
      },
      "index": {
        "description": "Send message on typed channel",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "sendChan",
        "normalized": "SendPort a-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Chan",
        "signature": "SendPort a-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:spawnAsync",
      "description": {
        "fct-descr": "\u003cp\u003eAsynchronous version of \u003ccode\u003espawn\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003espawn\u003c/code\u003e is defined in terms of \u003ccode\u003e\u003ca\u003espawnAsync\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Closure (Process ()) -\u003e Process SpawnRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#spawnAsync",
        "fct-type": "function",
        "title": "spawnAsync"
      },
      "index": {
        "description": "Asynchronous version of spawn spawn is defined in terms of spawnAsync and expect",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "spawnAsync",
        "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess SpawnRef",
        "package": "distributed-process",
        "partial": "Async",
        "signature": "NodeId-\u003eClosure(Process())-\u003eProcess SpawnRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:terminate",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate immediately (throws a ProcessTerminationException)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#terminate",
        "fct-type": "function",
        "title": "terminate"
      },
      "index": {
        "description": "Terminate immediately throws ProcessTerminationException",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "terminate",
        "normalized": "",
        "package": "distributed-process",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message to the internal (system) trace facility. If tracing is\n enabled, this will create a custom trace event. Note that several Cloud Haskell\n sub-systems also generate trace events for informational/debugging purposes,\n thus traces generated this way will not be the only output seen.\n\u003c/p\u003e\u003cp\u003eJust as with the \u003ca\u003eDebug.Trace\u003c/a\u003e module, this is a debugging/tracing facility\n for use in development, and should not be used in a production setting -\n which is why the default behaviour is to trace to the GHC eventlog. For a\n general purpose logging facility, you should consider \u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTrace events can be written to the GHC event log, a text file, or to the\n standard system logger process (see \u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e). The default behaviour for writing\n to the eventlog requires specific intervention to work, without which traces\n are silently dropped/ignored and no output will be generated.\n The GHC eventlog documentation provides information about enabling, viewing\n and working with event traces: \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/wiki/EventLog\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWhen a new local node is started, the contents of the environment variable\n \u003ccode\u003eDISTRIBUTED_PROCESS_TRACE_FILE\u003c/code\u003e are checked for a valid file path. If this\n exists and the file can be opened for writing, all trace output will be directed\n thence. If the environment variable is empty, the path invalid, or the file\n unavailable for writing - e.g., because another node has already started\n tracing to it - then the \u003ccode\u003eDISTRIBUTED_PROCESS_TRACE_CONSOLE\u003c/code\u003e environment\n variable is checked for \u003cem\u003eany\u003c/em\u003e non-empty value. If this is set, then all trace\n output will be directed to the system logger process. If neither evironment\n variable provides a valid trace configuration, all internal traces are written\n to \u003ca\u003eDebug.Trace.traceEventIO\u003c/a\u003e, which writes to the GHC eventlog.\n\u003c/p\u003e\u003cp\u003eUsers of the \u003cem\u003esimplelocalnet\u003c/em\u003e Cloud Haskell backend should also note that\n because the trace file option only supports trace output from a single node\n (so as to avoid interleaving), a file trace configured for the master node will\n prevent slaves from tracing to the file and they will fall back to using the\n console/\u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e or eventlog instead.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "Send message to the internal system trace facility If tracing is enabled this will create custom trace event Note that several Cloud Haskell sub-systems also generate trace events for informational debugging purposes thus traces generated this way will not be the only output seen Just as with the Debug.Trace module this is debugging tracing facility for use in development and should not be used in production setting which is why the default behaviour is to trace to the GHC eventlog For general purpose logging facility you should consider say Trace events can be written to the GHC event log text file or to the standard system logger process see say The default behaviour for writing to the eventlog requires specific intervention to work without which traces are silently dropped ignored and no output will be generated The GHC eventlog documentation provides information about enabling viewing and working with event traces http hackage.haskell.org trac ghc wiki EventLog When new local node is started the contents of the environment variable DISTRIBUTED PROCESS TRACE FILE are checked for valid file path If this exists and the file can be opened for writing all trace output will be directed thence If the environment variable is empty the path invalid or the file unavailable for writing e.g because another node has already started tracing to it then the DISTRIBUTED PROCESS TRACE CONSOLE environment variable is checked for any non-empty value If this is set then all trace output will be directed to the system logger process If neither evironment variable provides valid trace configuration all internal traces are written to Debug.Trace.traceEventIO which writes to the GHC eventlog Users of the simplelocalnet Cloud Haskell backend should also note that because the trace file option only supports trace output from single node so as to avoid interleaving file trace configured for the master node will prevent slaves from tracing to the file and they will fall back to using the console say or eventlog instead",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "trace",
        "normalized": "String-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:try",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e Process (Either e a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#try",
        "fct-type": "function",
        "title": "try"
      },
      "index": {
        "description": "Lift try",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "try",
        "normalized": "Process a-\u003eProcess(Either b a)",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003eProcess(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unClosure",
      "description": {
        "fct-descr": "\u003cp\u003eResolve a closure\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Closure a -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unClosure",
        "fct-type": "function",
        "title": "unClosure"
      },
      "index": {
        "description": "Resolve closure",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "unClosure",
        "normalized": "Closure a-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Closure",
        "signature": "Closure a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unStatic",
      "description": {
        "fct-descr": "\u003cp\u003eResolve a static value\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "Static a -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unStatic",
        "fct-type": "function",
        "title": "unStatic"
      },
      "index": {
        "description": "Resolve static value",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "unStatic",
        "normalized": "Static a-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Static",
        "signature": "Static a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unlink",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a link\n\u003c/p\u003e\u003cp\u003eThis is synchronous in the sense that once it returns you are guaranteed\n that no exception will be raised if the remote process dies. However, it is\n asynchronous in the sense that we do not wait for a response from the remote\n node.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unlink",
        "fct-type": "function",
        "title": "unlink"
      },
      "index": {
        "description": "Remove link This is synchronous in the sense that once it returns you are guaranteed that no exception will be raised if the remote process dies However it is asynchronous in the sense that we do not wait for response from the remote node",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "unlink",
        "normalized": "ProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unlinkNode",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a node link\n\u003c/p\u003e\u003cp\u003eThis has the same synchronous/asynchronous nature as \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unlinkNode",
        "fct-type": "function",
        "title": "unlinkNode"
      },
      "index": {
        "description": "Remove node link This has the same synchronous asynchronous nature as unlink",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "unlinkNode",
        "normalized": "NodeId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Node",
        "signature": "NodeId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unlinkPort",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a channel (send port) link\n\u003c/p\u003e\u003cp\u003eThis has the same synchronous/asynchronous nature as \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unlinkPort",
        "fct-type": "function",
        "title": "unlinkPort"
      },
      "index": {
        "description": "Remove channel send port link This has the same synchronous asynchronous nature as unlink",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "unlinkPort",
        "normalized": "SendPort a-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Port",
        "signature": "SendPort a-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unmonitor",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a monitor\n\u003c/p\u003e\u003cp\u003eThis has the same synchronous/asynchronous nature as \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "MonitorRef -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unmonitor",
        "fct-type": "function",
        "title": "unmonitor"
      },
      "index": {
        "description": "Remove monitor This has the same synchronous asynchronous nature as unlink",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "unmonitor",
        "normalized": "MonitorRef-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "MonitorRef-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unregister",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a process from the local registry (asynchronous).\n This version will wait until a response is gotten from the\n management process. The name must already be registered.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unregister",
        "fct-type": "function",
        "title": "unregister"
      },
      "index": {
        "description": "Remove process from the local registry asynchronous This version will wait until response is gotten from the management process The name must already be registered",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "unregister",
        "normalized": "String-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unregisterRemoteAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a process from a remote registry (asynchronous).\n\u003c/p\u003e\u003cp\u003eReply wil come in the form of a \u003ccode\u003e\u003ca\u003eRegisterReply\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e\u003cp\u003eSee comments in \u003ccode\u003e\u003ca\u003ewhereisRemoteAsync\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unregisterRemoteAsync",
        "fct-type": "function",
        "title": "unregisterRemoteAsync"
      },
      "index": {
        "description": "Remove process from remote registry asynchronous Reply wil come in the form of RegisterReply message See comments in whereisRemoteAsync",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "unregisterRemoteAsync",
        "normalized": "NodeId-\u003eString-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote Async",
        "signature": "NodeId-\u003eString-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:whereis",
      "description": {
        "fct-descr": "\u003cp\u003eQuery the local process registry\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e Process (Maybe ProcessId)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#whereis",
        "fct-type": "function",
        "title": "whereis"
      },
      "index": {
        "description": "Query the local process registry",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "whereis",
        "normalized": "String-\u003eProcess(Maybe ProcessId)",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcess(Maybe ProcessId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:whereisRemoteAsync",
      "description": {
        "fct-descr": "\u003cp\u003eQuery a remote process registry (asynchronous)\n\u003c/p\u003e\u003cp\u003eReply will come in the form of a \u003ccode\u003e\u003ca\u003eWhereIsReply\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e\u003cp\u003eThere is currently no synchronous version of \u003ccode\u003e\u003ca\u003ewhereisRemoteAsync\u003c/a\u003e\u003c/code\u003e: if\n you implement one yourself, be sure to take into account that the remote\n node might die or get disconnect before it can respond (i.e. you should\n use \u003ccode\u003e\u003ca\u003emonitorNode\u003c/a\u003e\u003c/code\u003e and take appropriate action when you receive a\n \u003ccode\u003eNodeMonitorNotification\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#whereisRemoteAsync",
        "fct-type": "function",
        "title": "whereisRemoteAsync"
      },
      "index": {
        "description": "Query remote process registry asynchronous Reply will come in the form of WhereIsReply message There is currently no synchronous version of whereisRemoteAsync if you implement one yourself be sure to take into account that the remote node might die or get disconnect before it can respond i.e you should use monitorNode and take appropriate action when you receive NodeMonitorNotification",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "whereisRemoteAsync",
        "normalized": "NodeId-\u003eString-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote Async",
        "signature": "NodeId-\u003eString-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:withMonitor",
      "description": {
        "fct-descr": "\u003cp\u003eEstablishes temporary monitoring of another process.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ewithMonitor pid code\u003c/code\u003e sets up monitoring of \u003ccode\u003epid\u003c/code\u003e for the duration\n of \u003ccode\u003ecode\u003c/code\u003e.  Note: although monitoring is no longer active when\n \u003ccode\u003ewithMonitor\u003c/code\u003e returns, there might still be unreceived monitor\n messages in the queue.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Primitives",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process a -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#withMonitor",
        "fct-type": "function",
        "title": "withMonitor"
      },
      "index": {
        "description": "Establishes temporary monitoring of another process withMonitor pid code sets up monitoring of pid for the duration of code Note although monitoring is no longer active when withMonitor returns there might still be unreceived monitor messages in the queue",
        "hierarchy": "Control Distributed Process Internal Primitives",
        "module": "Control.Distributed.Process.Internal.Primitives",
        "name": "withMonitor",
        "normalized": "ProcessId-\u003eProcess a-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Monitor",
        "signature": "ProcessId-\u003eProcess a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictContainerAccessors.html#",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictContainerAccessors.html",
        "fct-type": "module",
        "title": "StrictContainerAccessors"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictContainerAccessors",
        "module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
        "name": "StrictContainerAccessors",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Strict Container Accessors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictContainerAccessors.html#v:mapDefault",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
        "fct-package": "distributed-process",
        "fct-signature": "elem -\u003e key -\u003e Accessor (Map key elem) elem",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictContainerAccessors.html#mapDefault",
        "fct-type": "function",
        "title": "mapDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictContainerAccessors",
        "module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
        "name": "mapDefault",
        "normalized": "a-\u003eb-\u003eAccessor(Map b a)a",
        "package": "distributed-process",
        "partial": "Default",
        "signature": "elem-\u003ekey-\u003eAccessor(Map key elem)elem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictContainerAccessors.html#v:mapMaybe",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
        "fct-package": "distributed-process",
        "fct-signature": "key -\u003e Accessor (Map key elem) (Maybe elem)",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictContainerAccessors.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictContainerAccessors",
        "module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
        "name": "mapMaybe",
        "normalized": "a-\u003eAccessor(Map a b)(Maybe b)",
        "package": "distributed-process",
        "partial": "Maybe",
        "signature": "key-\u003eAccessor(Map key elem)(Maybe elem)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSpine and element strict list\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Internal.StrictList",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictList.html",
        "fct-type": "module",
        "title": "StrictList"
      },
      "index": {
        "description": "Spine and element strict list",
        "hierarchy": "Control Distributed Process Internal StrictList",
        "module": "Control.Distributed.Process.Internal.StrictList",
        "name": "StrictList",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Strict List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#t:StrictList",
      "description": {
        "fct-descr": "\u003cp\u003eStrict list\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.StrictList",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
        "fct-type": "data",
        "title": "StrictList"
      },
      "index": {
        "description": "Strict list",
        "hierarchy": "Control Distributed Process Internal StrictList",
        "module": "Control.Distributed.Process.Internal.StrictList",
        "name": "StrictList",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Strict List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:Append",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictList",
        "fct-package": "distributed-process",
        "fct-signature": "Append !(StrictList a) !(StrictList a)",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
        "fct-type": "function",
        "title": "Append"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictList",
        "module": "Control.Distributed.Process.Internal.StrictList",
        "name": "Append",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Append",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:Cons",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictList",
        "fct-package": "distributed-process",
        "fct-signature": "Cons !a !(StrictList a)",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictList",
        "module": "Control.Distributed.Process.Internal.StrictList",
        "name": "Cons",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:Nil",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictList",
        "fct-package": "distributed-process",
        "fct-signature": "Nil",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictList",
        "module": "Control.Distributed.Process.Internal.StrictList",
        "name": "Nil",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:Snoc",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictList",
        "fct-package": "distributed-process",
        "fct-signature": "Snoc !(StrictList a) !a",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
        "fct-type": "function",
        "title": "Snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictList",
        "module": "Control.Distributed.Process.Internal.StrictList",
        "name": "Snoc",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Snoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:append",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictList",
        "fct-package": "distributed-process",
        "fct-signature": "StrictList a -\u003e StrictList a -\u003e StrictList a",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictList.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictList",
        "module": "Control.Distributed.Process.Internal.StrictList",
        "name": "append",
        "normalized": "StrictList a-\u003eStrictList a-\u003eStrictList a",
        "package": "distributed-process",
        "partial": "",
        "signature": "StrictList a-\u003eStrictList a-\u003eStrictList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:foldr",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictList",
        "fct-package": "distributed-process",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e StrictList a -\u003e b",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictList.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictList",
        "module": "Control.Distributed.Process.Internal.StrictList",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eStrictList a-\u003eb",
        "package": "distributed-process",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eStrictList a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLike Control.Concurrent.MVar.Strict but reduce to HNF, not NF\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html",
        "fct-type": "module",
        "title": "StrictMVar"
      },
      "index": {
        "description": "Like Control.Concurrent.MVar.Strict but reduce to HNF not NF",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "StrictMVar",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Strict MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#t:StrictMVar",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#StrictMVar",
        "fct-type": "newtype",
        "title": "StrictMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "StrictMVar",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Strict MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:StrictMVar",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "StrictMVar (MVar a)",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#StrictMVar",
        "fct-type": "function",
        "title": "StrictMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "StrictMVar",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Strict MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:mkWeakMVar",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "StrictMVar a -\u003e IO () -\u003e IO (Weak (StrictMVar a))",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#mkWeakMVar",
        "fct-type": "function",
        "title": "mkWeakMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "mkWeakMVar",
        "normalized": "StrictMVar a-\u003eIO()-\u003eIO(Weak(StrictMVar a))",
        "package": "distributed-process",
        "partial": "Weak MVar",
        "signature": "StrictMVar a-\u003eIO()-\u003eIO(Weak(StrictMVar a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:modifyMVar",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "StrictMVar a -\u003e (a -\u003e IO (a, b)) -\u003e IO b",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#modifyMVar",
        "fct-type": "function",
        "title": "modifyMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "modifyMVar",
        "normalized": "StrictMVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b",
        "package": "distributed-process",
        "partial": "MVar",
        "signature": "StrictMVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:modifyMVar_",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "StrictMVar a -\u003e (a -\u003e IO a) -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#modifyMVar_",
        "fct-type": "function",
        "title": "modifyMVar_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "modifyMVar_",
        "normalized": "StrictMVar a-\u003e(a-\u003eIO a)-\u003eIO()",
        "package": "distributed-process",
        "partial": "MVar",
        "signature": "StrictMVar a-\u003e(a-\u003eIO a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:newEmptyMVar",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "IO (StrictMVar a)",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#newEmptyMVar",
        "fct-type": "function",
        "title": "newEmptyMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "newEmptyMVar",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Empty MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:newMVar",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "a -\u003e IO (StrictMVar a)",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#newMVar",
        "fct-type": "function",
        "title": "newMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "newMVar",
        "normalized": "a-\u003eIO(StrictMVar a)",
        "package": "distributed-process",
        "partial": "MVar",
        "signature": "a-\u003eIO(StrictMVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:putMVar",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "StrictMVar a -\u003e a -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#putMVar",
        "fct-type": "function",
        "title": "putMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "putMVar",
        "normalized": "StrictMVar a-\u003ea-\u003eIO()",
        "package": "distributed-process",
        "partial": "MVar",
        "signature": "StrictMVar a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:takeMVar",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "StrictMVar a -\u003e IO a",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#takeMVar",
        "fct-type": "function",
        "title": "takeMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "takeMVar",
        "normalized": "StrictMVar a-\u003eIO a",
        "package": "distributed-process",
        "partial": "MVar",
        "signature": "StrictMVar a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:withMVar",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.StrictMVar",
        "fct-package": "distributed-process",
        "fct-signature": "StrictMVar a -\u003e (a -\u003e IO b) -\u003e IO b",
        "fct-source": "src/Control-Distributed-Process-Internal-StrictMVar.html#withMVar",
        "fct-type": "function",
        "title": "withMVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal StrictMVar",
        "module": "Control.Distributed.Process.Internal.StrictMVar",
        "name": "withMVar",
        "normalized": "StrictMVar a-\u003e(a-\u003eIO b)-\u003eIO b",
        "package": "distributed-process",
        "partial": "MVar",
        "signature": "StrictMVar a-\u003e(a-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple (internal) system logging/tracing support.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Trace",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-Trace.html",
        "fct-type": "module",
        "title": "Trace"
      },
      "index": {
        "description": "Simple internal system logging tracing support",
        "hierarchy": "Control Distributed Process Internal Trace",
        "module": "Control.Distributed.Process.Internal.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#t:TraceArg",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Trace",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Trace.html#TraceArg",
        "fct-type": "data",
        "title": "TraceArg"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Trace",
        "module": "Control.Distributed.Process.Internal.Trace",
        "name": "TraceArg",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Trace Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#t:Tracer",
      "description": {
        "fct-descr": "\u003cp\u003eRequired for system tracing in the node controller\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Trace",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
        "fct-type": "data",
        "title": "Tracer"
      },
      "index": {
        "description": "Required for system tracing in the node controller",
        "hierarchy": "Control Distributed Process Internal Trace",
        "module": "Control.Distributed.Process.Internal.Trace",
        "name": "Tracer",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Tracer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:Trace",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Trace",
        "fct-package": "distributed-process",
        "fct-signature": "Trace a",
        "fct-source": "src/Control-Distributed-Process-Internal-Trace.html#TraceArg",
        "fct-type": "function",
        "title": "Trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Trace",
        "module": "Control.Distributed.Process.Internal.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:TraceStr",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Trace",
        "fct-package": "distributed-process",
        "fct-signature": "TraceStr String",
        "fct-source": "src/Control-Distributed-Process-Internal-Trace.html#TraceArg",
        "fct-type": "function",
        "title": "TraceStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Trace",
        "module": "Control.Distributed.Process.Internal.Trace",
        "name": "TraceStr",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Trace Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:startTracing",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Trace",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e IO LocalNode",
        "fct-source": "src/Control-Distributed-Process-Internal-Trace.html#startTracing",
        "fct-type": "function",
        "title": "startTracing"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Trace",
        "module": "Control.Distributed.Process.Internal.Trace",
        "name": "startTracing",
        "normalized": "LocalNode-\u003eIO LocalNode",
        "package": "distributed-process",
        "partial": "Tracing",
        "signature": "LocalNode-\u003eIO LocalNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:stopTracer",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Trace",
        "fct-package": "distributed-process",
        "fct-signature": "Tracer -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Trace.html#stopTracer",
        "fct-type": "function",
        "title": "stopTracer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Trace",
        "module": "Control.Distributed.Process.Internal.Trace",
        "name": "stopTracer",
        "normalized": "Tracer-\u003eIO()",
        "package": "distributed-process",
        "partial": "Tracer",
        "signature": "Tracer-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:trace",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Trace",
        "fct-package": "distributed-process",
        "fct-signature": "Tracer -\u003e String -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Trace.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Trace",
        "module": "Control.Distributed.Process.Internal.Trace",
        "name": "trace",
        "normalized": "Tracer-\u003eString-\u003eIO()",
        "package": "distributed-process",
        "partial": "",
        "signature": "Tracer-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:traceFormat",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Trace",
        "fct-package": "distributed-process",
        "fct-signature": "Tracer -\u003e String -\u003e [TraceArg] -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Trace.html#traceFormat",
        "fct-type": "function",
        "title": "traceFormat"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Trace",
        "module": "Control.Distributed.Process.Internal.Trace",
        "name": "traceFormat",
        "normalized": "Tracer-\u003eString-\u003e[TraceArg]-\u003eIO()",
        "package": "distributed-process",
        "partial": "Format",
        "signature": "Tracer-\u003eString-\u003e[TraceArg]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes used throughout the Cloud Haskell framework\n\u003c/p\u003e\u003cp\u003eWe collect all types used internally in a single module because\n many of these data types are mutually recursive and cannot be split across\n modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types used throughout the Cloud Haskell framework We collect all types used internally in single module because many of these data types are mutually recursive and cannot be split across modules",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Types",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidSpawn",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronius) reply from \u003ccode\u003espawn\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidSpawn",
        "fct-type": "data",
        "title": "DidSpawn"
      },
      "index": {
        "description": "Asynchronius reply from spawn",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidSpawn",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Spawn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidUnlinkNode",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronous) reply from unlinkNode\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkNode",
        "fct-type": "newtype",
        "title": "DidUnlinkNode"
      },
      "index": {
        "description": "Asynchronous reply from unlinkNode",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidUnlinkNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Unlink Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidUnlinkPort",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronous) reply from unlinkPort\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkPort",
        "fct-type": "newtype",
        "title": "DidUnlinkPort"
      },
      "index": {
        "description": "Asynchronous reply from unlinkPort",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidUnlinkPort",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Unlink Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidUnlinkProcess",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronous) reply from unlink\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkProcess",
        "fct-type": "newtype",
        "title": "DidUnlinkProcess"
      },
      "index": {
        "description": "Asynchronous reply from unlink",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidUnlinkProcess",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Unlink Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidUnmonitor",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronous) reply from unmonitor\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidUnmonitor",
        "fct-type": "newtype",
        "title": "DidUnmonitor"
      },
      "index": {
        "description": "Asynchronous reply from unmonitor",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidUnmonitor",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Unmonitor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DiedReason",
      "description": {
        "fct-descr": "\u003cp\u003eWhy did a process die?\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "data",
        "title": "DiedReason"
      },
      "index": {
        "description": "Why did process die",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DiedReason",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:Identifier",
      "description": {
        "fct-descr": "\u003cp\u003eUnion of all kinds of identifiers\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Identifier",
        "fct-type": "data",
        "title": "Identifier"
      },
      "index": {
        "description": "Union of all kinds of identifiers",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Identifier",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ImplicitReconnect",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ImplicitReconnect",
        "fct-type": "data",
        "title": "ImplicitReconnect"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ImplicitReconnect",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Implicit Reconnect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalNode",
      "description": {
        "fct-descr": "\u003cp\u003eLocal nodes\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
        "fct-type": "data",
        "title": "LocalNode"
      },
      "index": {
        "description": "Local nodes",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalNodeState",
      "description": {
        "fct-descr": "\u003cp\u003eLocal node state\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
        "fct-type": "data",
        "title": "LocalNodeState"
      },
      "index": {
        "description": "Local node state",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalNodeState",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Node State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalProcess",
      "description": {
        "fct-descr": "\u003cp\u003eProcesses running on our local node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
        "fct-type": "data",
        "title": "LocalProcess"
      },
      "index": {
        "description": "Processes running on our local node",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalProcess",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalProcessId",
      "description": {
        "fct-descr": "\u003cp\u003eA local process ID consists of a seed which distinguishes processes from\n different instances of the same local node and a counter\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessId",
        "fct-type": "data",
        "title": "LocalProcessId"
      },
      "index": {
        "description": "local process ID consists of seed which distinguishes processes from different instances of the same local node and counter",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalProcessId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalProcessState",
      "description": {
        "fct-descr": "\u003cp\u003eLocal process state\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
        "fct-type": "data",
        "title": "LocalProcessState"
      },
      "index": {
        "description": "Local process state",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalProcessState",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Process State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalSendPortId",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "type",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalSendPortId",
        "fct-type": "type",
        "title": "LocalSendPortId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalSendPortId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Send Port Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eMessages consist of their typeRep fingerprint and their encoding\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "Messages consist of their typeRep fingerprint and their encoding",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Message",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:MonitorRef",
      "description": {
        "fct-descr": "\u003cp\u003eMonitorRef is opaque for regular Cloud Haskell processes\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
        "fct-type": "data",
        "title": "MonitorRef"
      },
      "index": {
        "description": "MonitorRef is opaque for regular Cloud Haskell processes",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "MonitorRef",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Monitor Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:NCMsg",
      "description": {
        "fct-descr": "\u003cp\u003eMessages to the node controller\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NCMsg",
        "fct-type": "data",
        "title": "NCMsg"
      },
      "index": {
        "description": "Messages to the node controller",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NCMsg",
        "normalized": "",
        "package": "distributed-process",
        "partial": "NCMsg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:NodeId",
      "description": {
        "fct-descr": "\u003cp\u003eNode identifier\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeId",
        "fct-type": "newtype",
        "title": "NodeId"
      },
      "index": {
        "description": "Node identifier",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NodeId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:NodeLinkException",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown when a linked node dies\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeLinkException",
        "fct-type": "data",
        "title": "NodeLinkException"
      },
      "index": {
        "description": "Exception thrown when linked node dies",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NodeLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:NodeMonitorNotification",
      "description": {
        "fct-descr": "\u003cp\u003eMessage sent by node monitors\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeMonitorNotification",
        "fct-type": "data",
        "title": "NodeMonitorNotification"
      },
      "index": {
        "description": "Message sent by node monitors",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NodeMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:PortLinkException",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown when a linked channel (port) dies\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#PortLinkException",
        "fct-type": "data",
        "title": "PortLinkException"
      },
      "index": {
        "description": "Exception thrown when linked channel port dies",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "PortLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:PortMonitorNotification",
      "description": {
        "fct-descr": "\u003cp\u003eMessage sent by channel (port) monitors\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#PortMonitorNotification",
        "fct-type": "data",
        "title": "PortMonitorNotification"
      },
      "index": {
        "description": "Message sent by channel port monitors",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "PortMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:Process",
      "description": {
        "fct-descr": "\u003cp\u003eThe Cloud Haskell \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Process",
        "fct-type": "newtype",
        "title": "Process"
      },
      "index": {
        "description": "The Cloud Haskell Process type",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Process",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessExitException",
      "description": {
        "fct-descr": "\u003cp\u003eInternal exception thrown indirectly by \u003ccode\u003eexit\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessExitException",
        "fct-type": "data",
        "title": "ProcessExitException"
      },
      "index": {
        "description": "Internal exception thrown indirectly by exit",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessExitException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Exit Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessId",
      "description": {
        "fct-descr": "\u003cp\u003eProcess identifier\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
        "fct-type": "data",
        "title": "ProcessId"
      },
      "index": {
        "description": "Process identifier",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessInfo",
      "description": {
        "fct-descr": "\u003cp\u003eProvide information about a running process\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "data",
        "title": "ProcessInfo"
      },
      "index": {
        "description": "Provide information about running process",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessInfo",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessInfoNone",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfoNone",
        "fct-type": "data",
        "title": "ProcessInfoNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessInfoNone",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Info None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessLinkException",
      "description": {
        "fct-descr": "\u003cp\u003eExceptions thrown when a linked process dies\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessLinkException",
        "fct-type": "data",
        "title": "ProcessLinkException"
      },
      "index": {
        "description": "Exceptions thrown when linked process dies",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessMonitorNotification",
      "description": {
        "fct-descr": "\u003cp\u003eMessage sent by process monitors\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessMonitorNotification",
        "fct-type": "data",
        "title": "ProcessMonitorNotification"
      },
      "index": {
        "description": "Message sent by process monitors",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessRegistrationException",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown when a process attempts to register\n a process under an already-registered name or to\n unregister a name that hasn't been registered\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessRegistrationException",
        "fct-type": "data",
        "title": "ProcessRegistrationException"
      },
      "index": {
        "description": "Exception thrown when process attempts to register process under an already-registered name or to unregister name that hasn been registered",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessRegistrationException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Registration Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessSignal",
      "description": {
        "fct-descr": "\u003cp\u003eSignals to the node controller (see \u003ccode\u003e\u003ca\u003eNCMsg\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "data",
        "title": "ProcessSignal"
      },
      "index": {
        "description": "Signals to the node controller see NCMsg",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessSignal",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ReceivePort",
      "description": {
        "fct-descr": "\u003cp\u003eThe receive end of a typed channel (not serializable)\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e implements \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. This is especially useful when merging receive ports.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ReceivePort",
        "fct-type": "newtype",
        "title": "ReceivePort"
      },
      "index": {
        "description": "The receive end of typed channel not serializable Note that ReceivePort implements Functor Applicative Alternative and Monad This is especially useful when merging receive ports",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ReceivePort",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Receive Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:RegisterReply",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronous) reply from \u003ccode\u003eregister\u003c/code\u003e and \u003ccode\u003eunregister\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#RegisterReply",
        "fct-type": "data",
        "title": "RegisterReply"
      },
      "index": {
        "description": "Asynchronous reply from register and unregister",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "RegisterReply",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Register Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:SendPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe send send of a typed channel (serializable)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SendPort",
        "fct-type": "newtype",
        "title": "SendPort"
      },
      "index": {
        "description": "The send send of typed channel serializable",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "SendPort",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Send Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:SendPortId",
      "description": {
        "fct-descr": "\u003cp\u003eA send port is identified by a SendPortId.\n\u003c/p\u003e\u003cp\u003eYou cannot send directly to a SendPortId; instead, use \u003ccode\u003enewChan\u003c/code\u003e\n to create a SendPort.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
        "fct-type": "data",
        "title": "SendPortId"
      },
      "index": {
        "description": "send port is identified by SendPortId You cannot send directly to SendPortId instead use newChan to create SendPort",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "SendPortId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Send Port Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:SpawnRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSpawnRef\u003c/a\u003e\u003c/code\u003e are used to return pids of spawned processes\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SpawnRef",
        "fct-type": "newtype",
        "title": "SpawnRef"
      },
      "index": {
        "description": "SpawnRef are used to return pids of spawned processes",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "SpawnRef",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Spawn Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:Tracer",
      "description": {
        "fct-descr": "\u003cp\u003eRequired for system tracing in the node controller\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
        "fct-type": "data",
        "title": "Tracer"
      },
      "index": {
        "description": "Required for system tracing in the node controller",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Tracer",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Tracer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:TypedChannel",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#TypedChannel",
        "fct-type": "data",
        "title": "TypedChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "TypedChannel",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Typed Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:WhereIsReply",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronous) reply from \u003ccode\u003ewhereis\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#WhereIsReply",
        "fct-type": "data",
        "title": "WhereIsReply"
      },
      "index": {
        "description": "Asynchronous reply from whereis",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "WhereIsReply",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Where Is Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidSpawn",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DidSpawn SpawnRef ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidSpawn",
        "fct-type": "function",
        "title": "DidSpawn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidSpawn",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Spawn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidUnlinkNode",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DidUnlinkNode NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkNode",
        "fct-type": "function",
        "title": "DidUnlinkNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidUnlinkNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Unlink Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidUnlinkPort",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DidUnlinkPort SendPortId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkPort",
        "fct-type": "function",
        "title": "DidUnlinkPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidUnlinkPort",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Unlink Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidUnlinkProcess",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DidUnlinkProcess ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkProcess",
        "fct-type": "function",
        "title": "DidUnlinkProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidUnlinkProcess",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Unlink Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidUnmonitor",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DidUnmonitor MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidUnmonitor",
        "fct-type": "function",
        "title": "DidUnmonitor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DidUnmonitor",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Unmonitor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Died",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Died Identifier !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "Died"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Died",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedDisconnect",
      "description": {
        "fct-descr": "\u003cp\u003eWe got disconnected from the process node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DiedDisconnect",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedDisconnect"
      },
      "index": {
        "description": "We got disconnected from the process node",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DiedDisconnect",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Disconnect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedException",
      "description": {
        "fct-descr": "\u003cp\u003eThe process exited with an exception\n (provided as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e because \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e does not implement \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DiedException !String",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedException"
      },
      "index": {
        "description": "The process exited with an exception provided as String because Exception does not implement Binary",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DiedException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedNodeDown",
      "description": {
        "fct-descr": "\u003cp\u003eThe process node died\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DiedNodeDown",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedNodeDown"
      },
      "index": {
        "description": "The process node died",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DiedNodeDown",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Node Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedNormal",
      "description": {
        "fct-descr": "\u003cp\u003eNormal termination\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DiedNormal",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedNormal"
      },
      "index": {
        "description": "Normal termination",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DiedNormal",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedUnknownId",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid (process\u003cem\u003enode\u003c/em\u003echannel) identifier\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "DiedUnknownId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedUnknownId"
      },
      "index": {
        "description": "Invalid process node channel identifier",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "DiedUnknownId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Unknown Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:EventLogTracer",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "EventLogTracer !(String -\u003e IO ())",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
        "fct-type": "function",
        "title": "EventLogTracer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "EventLogTracer",
        "normalized": "EventLogTracer(String-\u003eIO())",
        "package": "distributed-process",
        "partial": "Event Log Tracer",
        "signature": "EventLogTracer(String-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Exit",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Exit !ProcessId !Message",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "Exit"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Exit",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Exit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:GetInfo",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "GetInfo !ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "GetInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "GetInfo",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Get Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:InactiveTracer",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "InactiveTracer",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
        "fct-type": "function",
        "title": "InactiveTracer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "InactiveTracer",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Inactive Tracer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Kill",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Kill !ProcessId !String",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "Kill"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Kill",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Kill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Link",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Link !Identifier",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "Link"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Link",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalNode",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
        "fct-type": "function",
        "title": "LocalNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalNodeState",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNodeState",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
        "fct-type": "function",
        "title": "LocalNodeState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalNodeState",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Node State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalNodeTracer",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNodeTracer !LocalNode",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
        "fct-type": "function",
        "title": "LocalNodeTracer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalNodeTracer",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Node Tracer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalProcess",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LocalProcess",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
        "fct-type": "function",
        "title": "LocalProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalProcess",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalProcessId",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LocalProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessId",
        "fct-type": "function",
        "title": "LocalProcessId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalProcessId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalProcessState",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LocalProcessState",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
        "fct-type": "function",
        "title": "LocalProcessState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LocalProcessState",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Process State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LogFileTracer",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LogFileTracer !ThreadId !(TQueue String) !Handle",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
        "fct-type": "function",
        "title": "LogFileTracer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "LogFileTracer",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Log File Tracer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Message",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Message",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Message",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Message",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Monitor",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Monitor !MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "Monitor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Monitor",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Monitor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:MonitorRef",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
        "fct-type": "function",
        "title": "MonitorRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "MonitorRef",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Monitor Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NCMsg",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "NCMsg",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NCMsg",
        "fct-type": "function",
        "title": "NCMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NCMsg",
        "normalized": "",
        "package": "distributed-process",
        "partial": "NCMsg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NamedSend",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "NamedSend !String !Message",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "NamedSend"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NamedSend",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Named Send",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NoImplicitReconnect",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "NoImplicitReconnect",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ImplicitReconnect",
        "fct-type": "function",
        "title": "NoImplicitReconnect"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NoImplicitReconnect",
        "normalized": "",
        "package": "distributed-process",
        "partial": "No Implicit Reconnect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeId",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeId",
        "fct-type": "function",
        "title": "NodeId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NodeId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeIdentifier",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "NodeIdentifier !NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Identifier",
        "fct-type": "function",
        "title": "NodeIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NodeIdentifier",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeLinkException",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "NodeLinkException !NodeId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeLinkException",
        "fct-type": "function",
        "title": "NodeLinkException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NodeLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeMonitorNotification",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "NodeMonitorNotification !MonitorRef !NodeId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeMonitorNotification",
        "fct-type": "function",
        "title": "NodeMonitorNotification"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "NodeMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:PortLinkException",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "PortLinkException !SendPortId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#PortLinkException",
        "fct-type": "function",
        "title": "PortLinkException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "PortLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:PortMonitorNotification",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "PortMonitorNotification !MonitorRef !SendPortId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#PortMonitorNotification",
        "fct-type": "function",
        "title": "PortMonitorNotification"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "PortMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Process",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Process",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Process",
        "fct-type": "function",
        "title": "Process"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Process",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessExitException",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessExitException !ProcessId !Message",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessExitException",
        "fct-type": "function",
        "title": "ProcessExitException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessExitException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Exit Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessId",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
        "fct-type": "function",
        "title": "ProcessId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessIdentifier",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessIdentifier !ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Identifier",
        "fct-type": "function",
        "title": "ProcessIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessIdentifier",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessInfo",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessInfo",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "ProcessInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessInfo",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessInfoNone",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessInfoNone DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfoNone",
        "fct-type": "function",
        "title": "ProcessInfoNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessInfoNone",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Info None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessLinkException",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessLinkException !ProcessId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessLinkException",
        "fct-type": "function",
        "title": "ProcessLinkException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessMonitorNotification",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessMonitorNotification !MonitorRef !ProcessId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessMonitorNotification",
        "fct-type": "function",
        "title": "ProcessMonitorNotification"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessRegistrationException",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessRegistrationException !String",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessRegistrationException",
        "fct-type": "function",
        "title": "ProcessRegistrationException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ProcessRegistrationException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Registration Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ReceivePort",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ReceivePort",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ReceivePort",
        "fct-type": "function",
        "title": "ReceivePort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ReceivePort",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Receive Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Register",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Register !String !NodeId !(Maybe ProcessId) !Bool",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "Register"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Register",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:RegisterReply",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "RegisterReply String Bool",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#RegisterReply",
        "fct-type": "function",
        "title": "RegisterReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "RegisterReply",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Register Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:SendPort",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SendPort",
        "fct-type": "function",
        "title": "SendPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "SendPort",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Send Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:SendPortId",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "SendPortId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
        "fct-type": "function",
        "title": "SendPortId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "SendPortId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Send Port Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:SendPortIdentifier",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "SendPortIdentifier !SendPortId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Identifier",
        "fct-type": "function",
        "title": "SendPortIdentifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "SendPortIdentifier",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Send Port Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Spawn",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Spawn !(Closure (Process ())) !SpawnRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "Spawn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Spawn",
        "normalized": "Spawn(Closure(Process()))SpawnRef",
        "package": "distributed-process",
        "partial": "Spawn",
        "signature": "Spawn(Closure(Process()))SpawnRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:SpawnRef",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "SpawnRef Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SpawnRef",
        "fct-type": "function",
        "title": "SpawnRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "SpawnRef",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Spawn Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:TypedChannel",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "TypedChannel (Weak (TQueue a))",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#TypedChannel",
        "fct-type": "function",
        "title": "TypedChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "TypedChannel",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Typed Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Unlink",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Unlink !Identifier",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "Unlink"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Unlink",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Unlink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Unmonitor",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Unmonitor !MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "Unmonitor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "Unmonitor",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Unmonitor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:WhereIs",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "WhereIs !String",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
        "fct-type": "function",
        "title": "WhereIs"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "WhereIs",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Where Is",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:WhereIsReply",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "WhereIsReply String (Maybe ProcessId)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#WhereIsReply",
        "fct-type": "function",
        "title": "WhereIsReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "WhereIsReply",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Where Is Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:WithImplicitReconnect",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "WithImplicitReconnect",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ImplicitReconnect",
        "fct-type": "function",
        "title": "WithImplicitReconnect"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "WithImplicitReconnect",
        "normalized": "",
        "package": "distributed-process",
        "partial": "With Implicit Reconnect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_channelCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
        "fct-type": "function",
        "title": "_channelCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "_channelCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_localConnections",
      "description": {
        "fct-descr": "\u003cp\u003eOutgoing connections\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!(Map (Identifier, Identifier) (Connection, ImplicitReconnect))",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
        "fct-type": "function",
        "title": "_localConnections"
      },
      "index": {
        "description": "Outgoing connections",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "_localConnections",
        "normalized": "(Map(Identifier,Identifier)(Connection,ImplicitReconnect))",
        "package": "distributed-process",
        "partial": "Connections",
        "signature": "(Map(Identifier,Identifier)(Connection,ImplicitReconnect))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_localPidCounter",
      "description": {
        "fct-descr": "\u003cp\u003eCounter to assign PIDs\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
        "fct-type": "function",
        "title": "_localPidCounter"
      },
      "index": {
        "description": "Counter to assign PIDs",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "_localPidCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Pid Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_localPidUnique",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eunique\u003c/code\u003e value used to create PIDs (so that processes on\n restarted nodes have new PIDs)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
        "fct-type": "function",
        "title": "_localPidUnique"
      },
      "index": {
        "description": "The unique value used to create PIDs so that processes on restarted nodes have new PIDs",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "_localPidUnique",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Pid Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_localProcesses",
      "description": {
        "fct-descr": "\u003cp\u003eProcesses running on this node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!(Map LocalProcessId LocalProcess)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
        "fct-type": "function",
        "title": "_localProcesses"
      },
      "index": {
        "description": "Processes running on this node",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "_localProcesses",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Processes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_monitorCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
        "fct-type": "function",
        "title": "_monitorCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "_monitorCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_spawnCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
        "fct-type": "function",
        "title": "_spawnCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "_spawnCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_typedChannels",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!(Map LocalSendPortId TypedChannel)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
        "fct-type": "function",
        "title": "_typedChannels"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "_typedChannels",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:channelCounter",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Accessor LocalProcessState LocalSendPortId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#channelCounter",
        "fct-type": "function",
        "title": "channelCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "channelCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:createMessage",
      "description": {
        "fct-descr": "\u003cp\u003eTurn any serialiable term into a message\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "a -\u003e Message",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#createMessage",
        "fct-type": "function",
        "title": "createMessage"
      },
      "index": {
        "description": "Turn any serialiable term into message",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "createMessage",
        "normalized": "a-\u003eMessage",
        "package": "distributed-process",
        "partial": "Message",
        "signature": "a-\u003eMessage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ctrlMsgSender",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Identifier",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NCMsg",
        "fct-type": "function",
        "title": "ctrlMsgSender"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ctrlMsgSender",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Msg Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ctrlMsgSignal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!ProcessSignal",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NCMsg",
        "fct-type": "function",
        "title": "ctrlMsgSignal"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "ctrlMsgSignal",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Msg Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:firstNonReservedProcessId",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#firstNonReservedProcessId",
        "fct-type": "function",
        "title": "firstNonReservedProcessId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "firstNonReservedProcessId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Non Reserved Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:forever-39-",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "m a -\u003e m b",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#forever%27",
        "fct-type": "function",
        "title": "forever'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "forever'",
        "normalized": "a b-\u003ea c",
        "package": "distributed-process",
        "partial": "",
        "signature": "m a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoLinks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "[ProcessId]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoLinks"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "infoLinks",
        "normalized": "[ProcessId]",
        "package": "distributed-process",
        "partial": "Links",
        "signature": "[ProcessId]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoMessageQueueLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoMessageQueueLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "infoMessageQueueLength",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Message Queue Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoMonitors",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "[(ProcessId, MonitorRef)]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoMonitors"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "infoMonitors",
        "normalized": "[(ProcessId,MonitorRef)]",
        "package": "distributed-process",
        "partial": "Monitors",
        "signature": "[(ProcessId,MonitorRef)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoNode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "infoNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoRegisteredNames",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "[String]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoRegisteredNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "infoRegisteredNames",
        "normalized": "[String]",
        "package": "distributed-process",
        "partial": "Registered Names",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localConnectionBetween",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Identifier -\u003e Identifier -\u003e Accessor LocalNodeState (Maybe (Connection, ImplicitReconnect))",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#localConnectionBetween",
        "fct-type": "function",
        "title": "localConnectionBetween"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localConnectionBetween",
        "normalized": "Identifier-\u003eIdentifier-\u003eAccessor LocalNodeState(Maybe(Connection,ImplicitReconnect))",
        "package": "distributed-process",
        "partial": "Connection Between",
        "signature": "Identifier-\u003eIdentifier-\u003eAccessor LocalNodeState(Maybe(Connection,ImplicitReconnect))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localConnections",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Accessor LocalNodeState (Map (Identifier, Identifier) (Connection, ImplicitReconnect))",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#localConnections",
        "fct-type": "function",
        "title": "localConnections"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localConnections",
        "normalized": "Accessor LocalNodeState(Map(Identifier,Identifier)(Connection,ImplicitReconnect))",
        "package": "distributed-process",
        "partial": "Connections",
        "signature": "Accessor LocalNodeState(Map(Identifier,Identifier)(Connection,ImplicitReconnect))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localCtrlChan",
      "description": {
        "fct-descr": "\u003cp\u003eChannel for the node controller\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!(Chan NCMsg)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
        "fct-type": "function",
        "title": "localCtrlChan"
      },
      "index": {
        "description": "Channel for the node controller",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localCtrlChan",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Ctrl Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localEndPoint",
      "description": {
        "fct-descr": "\u003cp\u003eThe network endpoint associated with this node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!EndPoint",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
        "fct-type": "function",
        "title": "localEndPoint"
      },
      "index": {
        "description": "The network endpoint associated with this node",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localEndPoint",
        "normalized": "",
        "package": "distributed-process",
        "partial": "End Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localNodeId",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e of the node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
        "fct-type": "function",
        "title": "localNodeId"
      },
      "index": {
        "description": "NodeId of the node",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localNodeId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localPidCounter",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Accessor LocalNodeState Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#localPidCounter",
        "fct-type": "function",
        "title": "localPidCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localPidCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Pid Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localPidUnique",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Accessor LocalNodeState Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#localPidUnique",
        "fct-type": "function",
        "title": "localPidUnique"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localPidUnique",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Pid Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localProcessWithId",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LocalProcessId -\u003e Accessor LocalNodeState (Maybe LocalProcess)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#localProcessWithId",
        "fct-type": "function",
        "title": "localProcessWithId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localProcessWithId",
        "normalized": "LocalProcessId-\u003eAccessor LocalNodeState(Maybe LocalProcess)",
        "package": "distributed-process",
        "partial": "Process With Id",
        "signature": "LocalProcessId-\u003eAccessor LocalNodeState(Maybe LocalProcess)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localProcesses",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Accessor LocalNodeState (Map LocalProcessId LocalProcess)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#localProcesses",
        "fct-type": "function",
        "title": "localProcesses"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localProcesses",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Processes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localState",
      "description": {
        "fct-descr": "\u003cp\u003eLocal node state\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!(StrictMVar LocalNodeState)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
        "fct-type": "function",
        "title": "localState"
      },
      "index": {
        "description": "Local node state",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localState",
        "normalized": "",
        "package": "distributed-process",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localTracer",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent active system debug/trace log\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Tracer",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
        "fct-type": "function",
        "title": "localTracer"
      },
      "index": {
        "description": "Current active system debug trace log",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "localTracer",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Tracer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:lpidCounter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessId",
        "fct-type": "function",
        "title": "lpidCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "lpidCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:lpidUnique",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessId",
        "fct-type": "function",
        "title": "lpidUnique"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "lpidUnique",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Unique",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:messageEncoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!ByteString",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Message",
        "fct-type": "function",
        "title": "messageEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "messageEncoding",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:messageFingerprint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Fingerprint",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Message",
        "fct-type": "function",
        "title": "messageFingerprint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "messageFingerprint",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Fingerprint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:messageToPayload",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a message\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Message -\u003e [ByteString]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#messageToPayload",
        "fct-type": "function",
        "title": "messageToPayload"
      },
      "index": {
        "description": "Serialize message",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "messageToPayload",
        "normalized": "Message-\u003e[ByteString]",
        "package": "distributed-process",
        "partial": "To Payload",
        "signature": "Message-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:monitorCounter",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Accessor LocalProcessState Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#monitorCounter",
        "fct-type": "function",
        "title": "monitorCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "monitorCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:monitorRefCounter",
      "description": {
        "fct-descr": "\u003cp\u003eUnique to distinguish multiple monitor requests by the same process\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
        "fct-type": "function",
        "title": "monitorRefCounter"
      },
      "index": {
        "description": "Unique to distinguish multiple monitor requests by the same process",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "monitorRefCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Ref Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:monitorRefIdent",
      "description": {
        "fct-descr": "\u003cp\u003eID of the entity to be monitored\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!Identifier",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
        "fct-type": "function",
        "title": "monitorRefIdent"
      },
      "index": {
        "description": "ID of the entity to be monitored",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "monitorRefIdent",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Ref Ident",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:nodeAddress",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "EndPointAddress",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeId",
        "fct-type": "function",
        "title": "nodeAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "nodeAddress",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:nodeOf",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Identifier -\u003e NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#nodeOf",
        "fct-type": "function",
        "title": "nodeOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "nodeOf",
        "normalized": "Identifier-\u003eNodeId",
        "package": "distributed-process",
        "partial": "Of",
        "signature": "Identifier-\u003eNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:nullProcessId",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#nullProcessId",
        "fct-type": "function",
        "title": "nullProcessId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "nullProcessId",
        "normalized": "NodeId-\u003eProcessId",
        "package": "distributed-process",
        "partial": "Process Id",
        "signature": "NodeId-\u003eProcessId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:payloadToMessage",
      "description": {
        "fct-descr": "\u003cp\u003eDeserialize a message\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "[ByteString] -\u003e Message",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#payloadToMessage",
        "fct-type": "function",
        "title": "payloadToMessage"
      },
      "index": {
        "description": "Deserialize message",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "payloadToMessage",
        "normalized": "[ByteString]-\u003eMessage",
        "package": "distributed-process",
        "partial": "To Message",
        "signature": "[ByteString]-\u003eMessage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
        "fct-type": "function",
        "title": "processId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "processId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processLocalId",
      "description": {
        "fct-descr": "\u003cp\u003eNode-local identifier for the process\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!LocalProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
        "fct-type": "function",
        "title": "processLocalId"
      },
      "index": {
        "description": "Node-local identifier for the process",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "processLocalId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processNode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!LocalNode",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
        "fct-type": "function",
        "title": "processNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "processNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processNodeId",
      "description": {
        "fct-descr": "\u003cp\u003eThe ID of the node the process is running on\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
        "fct-type": "function",
        "title": "processNodeId"
      },
      "index": {
        "description": "The ID of the node the process is running on",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "processNodeId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processQueue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!(CQueue Message)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
        "fct-type": "function",
        "title": "processQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "processQueue",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processState",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!(StrictMVar LocalProcessState)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
        "fct-type": "function",
        "title": "processState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "processState",
        "normalized": "",
        "package": "distributed-process",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processThread",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!ThreadId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
        "fct-type": "function",
        "title": "processThread"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "processThread",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processWeakQ",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!(Weak (CQueue Message))",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
        "fct-type": "function",
        "title": "processWeakQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "processWeakQ",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Weak",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:receiveSTM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "STM a",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ReceivePort",
        "fct-type": "function",
        "title": "receiveSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "receiveSTM",
        "normalized": "",
        "package": "distributed-process",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:remoteTable",
      "description": {
        "fct-descr": "\u003cp\u003eRuntime lookup table for supporting closures\n TODO: this should be part of the CH state, not the local endpoint state\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!RemoteTable",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
        "fct-type": "function",
        "title": "remoteTable"
      },
      "index": {
        "description": "Runtime lookup table for supporting closures TODO this should be part of the CH state not the local endpoint state",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "remoteTable",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:runLocalProcess",
      "description": {
        "fct-descr": "\u003cp\u003eDeconstructor for \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e (not exported to the public API)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LocalProcess -\u003e Process a -\u003e IO a",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#runLocalProcess",
        "fct-type": "function",
        "title": "runLocalProcess"
      },
      "index": {
        "description": "Deconstructor for Process not exported to the public API",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "runLocalProcess",
        "normalized": "LocalProcess-\u003eProcess a-\u003eIO a",
        "package": "distributed-process",
        "partial": "Local Process",
        "signature": "LocalProcess-\u003eProcess a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:sendPortId",
      "description": {
        "fct-descr": "\u003cp\u003eThe (unique) ID of this send port\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "SendPortId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SendPort",
        "fct-type": "function",
        "title": "sendPortId"
      },
      "index": {
        "description": "The unique ID of this send port",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "sendPortId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:sendPortLocalId",
      "description": {
        "fct-descr": "\u003cp\u003eProcess-local ID of the channel\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!LocalSendPortId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
        "fct-type": "function",
        "title": "sendPortLocalId"
      },
      "index": {
        "description": "Process-local ID of the channel",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "sendPortLocalId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Local Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:sendPortProcessId",
      "description": {
        "fct-descr": "\u003cp\u003eThe ID of the process that will receive messages sent on this port\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "!ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
        "fct-type": "function",
        "title": "sendPortProcessId"
      },
      "index": {
        "description": "The ID of the process that will receive messages sent on this port",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "sendPortProcessId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:spawnCounter",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Accessor LocalProcessState Int32",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#spawnCounter",
        "fct-type": "function",
        "title": "spawnCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "spawnCounter",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:typedChannelWithId",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "LocalSendPortId -\u003e Accessor LocalProcessState (Maybe TypedChannel)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#typedChannelWithId",
        "fct-type": "function",
        "title": "typedChannelWithId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "typedChannelWithId",
        "normalized": "LocalSendPortId-\u003eAccessor LocalProcessState(Maybe TypedChannel)",
        "package": "distributed-process",
        "partial": "Channel With Id",
        "signature": "LocalSendPortId-\u003eAccessor LocalProcessState(Maybe TypedChannel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:typedChannels",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "Accessor LocalProcessState (Map LocalSendPortId TypedChannel)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#typedChannels",
        "fct-type": "function",
        "title": "typedChannels"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "typedChannels",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:unProcess",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process.Internal.Types",
        "fct-package": "distributed-process",
        "fct-signature": "ReaderT LocalProcess IO a",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Process",
        "fct-type": "function",
        "title": "unProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal Types",
        "module": "Control.Distributed.Process.Internal.Types",
        "name": "unProcess",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClone of Control.Concurrent.STM.TQueue with support for mkWeakTQueue\n\u003c/p\u003e\u003cp\u003eNot all functionality from the original module is available: unGetTQueue,\n peekTQueue and tryPeekTQueue are missing. In order to implement these we'd\n need to be able to touch# the write end of the queue inside unGetTQueue, but\n that means we need a version of touch# that works within the STM monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Internal.WeakTQueue",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Internal-WeakTQueue.html",
        "fct-type": "module",
        "title": "WeakTQueue"
      },
      "index": {
        "description": "Clone of Control.Concurrent.STM.TQueue with support for mkWeakTQueue Not all functionality from the original module is available unGetTQueue peekTQueue and tryPeekTQueue are missing In order to implement these we need to be able to touch the write end of the queue inside unGetTQueue but that means we need version of touch that works within the STM monad",
        "hierarchy": "Control Distributed Process Internal WeakTQueue",
        "module": "Control.Distributed.Process.Internal.WeakTQueue",
        "name": "WeakTQueue",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Weak TQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#t:TQueue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.WeakTQueue",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#TQueue",
        "fct-type": "data",
        "title": "TQueue"
      },
      "index": {
        "description": "TQueue is an abstract type representing an unbounded FIFO channel",
        "hierarchy": "Control Distributed Process Internal WeakTQueue",
        "module": "Control.Distributed.Process.Internal.WeakTQueue",
        "name": "TQueue",
        "normalized": "",
        "package": "distributed-process",
        "partial": "TQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:isEmptyTQueue",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.WeakTQueue",
        "fct-package": "distributed-process",
        "fct-signature": "TQueue a -\u003e STM Bool",
        "fct-source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#isEmptyTQueue",
        "fct-type": "function",
        "title": "isEmptyTQueue"
      },
      "index": {
        "description": "Returns True if the supplied TQueue is empty",
        "hierarchy": "Control Distributed Process Internal WeakTQueue",
        "module": "Control.Distributed.Process.Internal.WeakTQueue",
        "name": "isEmptyTQueue",
        "normalized": "TQueue a-\u003eSTM Bool",
        "package": "distributed-process",
        "partial": "Empty TQueue",
        "signature": "TQueue a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:mkWeakTQueue",
      "description": {
        "fct-module": "Control.Distributed.Process.Internal.WeakTQueue",
        "fct-package": "distributed-process",
        "fct-signature": "TQueue a -\u003e IO () -\u003e IO (Weak (TQueue a))",
        "fct-source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#mkWeakTQueue",
        "fct-type": "function",
        "title": "mkWeakTQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Internal WeakTQueue",
        "module": "Control.Distributed.Process.Internal.WeakTQueue",
        "name": "mkWeakTQueue",
        "normalized": "TQueue a-\u003eIO()-\u003eIO(Weak(TQueue a))",
        "package": "distributed-process",
        "partial": "Weak TQueue",
        "signature": "TQueue a-\u003eIO()-\u003eIO(Weak(TQueue a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:newTQueue",
      "description": {
        "fct-descr": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.WeakTQueue",
        "fct-package": "distributed-process",
        "fct-signature": "STM (TQueue a)",
        "fct-source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#newTQueue",
        "fct-type": "function",
        "title": "newTQueue"
      },
      "index": {
        "description": "Build and returns new instance of TQueue",
        "hierarchy": "Control Distributed Process Internal WeakTQueue",
        "module": "Control.Distributed.Process.Internal.WeakTQueue",
        "name": "newTQueue",
        "normalized": "",
        "package": "distributed-process",
        "partial": "TQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:newTQueueIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTQueue\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.WeakTQueue",
        "fct-package": "distributed-process",
        "fct-signature": "IO (TQueue a)",
        "fct-source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#newTQueueIO",
        "fct-type": "function",
        "title": "newTQueueIO"
      },
      "index": {
        "description": "IO version of newTQueue This is useful for creating top-level TQueue using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
        "hierarchy": "Control Distributed Process Internal WeakTQueue",
        "module": "Control.Distributed.Process.Internal.WeakTQueue",
        "name": "newTQueueIO",
        "normalized": "",
        "package": "distributed-process",
        "partial": "TQueue IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:readTQueue",
      "description": {
        "fct-descr": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.WeakTQueue",
        "fct-package": "distributed-process",
        "fct-signature": "TQueue a -\u003e STM a",
        "fct-source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#readTQueue",
        "fct-type": "function",
        "title": "readTQueue"
      },
      "index": {
        "description": "Read the next value from the TQueue",
        "hierarchy": "Control Distributed Process Internal WeakTQueue",
        "module": "Control.Distributed.Process.Internal.WeakTQueue",
        "name": "readTQueue",
        "normalized": "TQueue a-\u003eSTM a",
        "package": "distributed-process",
        "partial": "TQueue",
        "signature": "TQueue a-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:tryReadTQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.WeakTQueue",
        "fct-package": "distributed-process",
        "fct-signature": "TQueue a -\u003e STM (Maybe a)",
        "fct-source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#tryReadTQueue",
        "fct-type": "function",
        "title": "tryReadTQueue"
      },
      "index": {
        "description": "version of readTQueue which does not retry Instead it returns Nothing if no value is available",
        "hierarchy": "Control Distributed Process Internal WeakTQueue",
        "module": "Control.Distributed.Process.Internal.WeakTQueue",
        "name": "tryReadTQueue",
        "normalized": "TQueue a-\u003eSTM(Maybe a)",
        "package": "distributed-process",
        "partial": "Read TQueue",
        "signature": "TQueue a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:writeTQueue",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Internal.WeakTQueue",
        "fct-package": "distributed-process",
        "fct-signature": "TQueue a -\u003e a -\u003e STM ()",
        "fct-source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#writeTQueue",
        "fct-type": "function",
        "title": "writeTQueue"
      },
      "index": {
        "description": "Write value to TQueue",
        "hierarchy": "Control Distributed Process Internal WeakTQueue",
        "module": "Control.Distributed.Process.Internal.WeakTQueue",
        "name": "writeTQueue",
        "normalized": "TQueue a-\u003ea-\u003eSTM()",
        "package": "distributed-process",
        "partial": "TQueue",
        "signature": "TQueue a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLocal nodes\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process.Node",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Node.html",
        "fct-type": "module",
        "title": "Node"
      },
      "index": {
        "description": "Local nodes",
        "hierarchy": "Control Distributed Process Node",
        "module": "Control.Distributed.Process.Node",
        "name": "Node",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#t:LocalNode",
      "description": {
        "fct-descr": "\u003cp\u003eLocal nodes\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Node",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
        "fct-type": "data",
        "title": "LocalNode"
      },
      "index": {
        "description": "Local nodes",
        "hierarchy": "Control Distributed Process Node",
        "module": "Control.Distributed.Process.Node",
        "name": "LocalNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Local Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:closeLocalNode",
      "description": {
        "fct-descr": "\u003cp\u003eForce-close a local node\n\u003c/p\u003e\u003cp\u003eTODO: for now we just close the associated endpoint\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Node",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Node.html#closeLocalNode",
        "fct-type": "function",
        "title": "closeLocalNode"
      },
      "index": {
        "description": "Force-close local node TODO for now we just close the associated endpoint",
        "hierarchy": "Control Distributed Process Node",
        "module": "Control.Distributed.Process.Node",
        "name": "closeLocalNode",
        "normalized": "LocalNode-\u003eIO()",
        "package": "distributed-process",
        "partial": "Local Node",
        "signature": "LocalNode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:forkProcess",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a new process on a local node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Node",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e Process () -\u003e IO ProcessId",
        "fct-source": "src/Control-Distributed-Process-Node.html#forkProcess",
        "fct-type": "function",
        "title": "forkProcess"
      },
      "index": {
        "description": "Spawn new process on local node",
        "hierarchy": "Control Distributed Process Node",
        "module": "Control.Distributed.Process.Node",
        "name": "forkProcess",
        "normalized": "LocalNode-\u003eProcess()-\u003eIO ProcessId",
        "package": "distributed-process",
        "partial": "Process",
        "signature": "LocalNode-\u003eProcess()-\u003eIO ProcessId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:initRemoteTable",
      "description": {
        "fct-module": "Control.Distributed.Process.Node",
        "fct-package": "distributed-process",
        "fct-signature": "RemoteTable",
        "fct-source": "src/Control-Distributed-Process-Node.html#initRemoteTable",
        "fct-type": "function",
        "title": "initRemoteTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Node",
        "module": "Control.Distributed.Process.Node",
        "name": "initRemoteTable",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Remote Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:localNodeId",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e of the node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Node",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#localNodeId",
        "fct-type": "function",
        "title": "localNodeId"
      },
      "index": {
        "description": "NodeId of the node",
        "hierarchy": "Control Distributed Process Node",
        "module": "Control.Distributed.Process.Node",
        "name": "localNodeId",
        "normalized": "LocalNode-\u003eNodeId",
        "package": "distributed-process",
        "partial": "Node Id",
        "signature": "LocalNode-\u003eNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:newLocalNode",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize a new local node.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Node",
        "fct-package": "distributed-process",
        "fct-signature": "Transport -\u003e RemoteTable -\u003e IO LocalNode",
        "fct-source": "src/Control-Distributed-Process-Node.html#newLocalNode",
        "fct-type": "function",
        "title": "newLocalNode"
      },
      "index": {
        "description": "Initialize new local node",
        "hierarchy": "Control Distributed Process Node",
        "module": "Control.Distributed.Process.Node",
        "name": "newLocalNode",
        "normalized": "Transport-\u003eRemoteTable-\u003eIO LocalNode",
        "package": "distributed-process",
        "partial": "Local Node",
        "signature": "Transport-\u003eRemoteTable-\u003eIO LocalNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:runProcess",
      "description": {
        "fct-descr": "\u003cp\u003eRun a process on a local node and wait for it to finish\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Node",
        "fct-package": "distributed-process",
        "fct-signature": "LocalNode -\u003e Process () -\u003e IO ()",
        "fct-source": "src/Control-Distributed-Process-Node.html#runProcess",
        "fct-type": "function",
        "title": "runProcess"
      },
      "index": {
        "description": "Run process on local node and wait for it to finish",
        "hierarchy": "Control Distributed Process Node",
        "module": "Control.Distributed.Process.Node",
        "name": "runProcess",
        "normalized": "LocalNode-\u003eProcess()-\u003eIO()",
        "package": "distributed-process",
        "partial": "Process",
        "signature": "LocalNode-\u003eProcess()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#",
      "description": {
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process-Serializable.html",
        "fct-type": "module",
        "title": "Serializable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "Serializable",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Serializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#t:Fingerprint",
      "description": {
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Fingerprint"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "Fingerprint",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Fingerprint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#t:Serializable",
      "description": {
        "fct-descr": "\u003cp\u003eObjects that can be sent across the network\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "class",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#Serializable",
        "fct-type": "class",
        "title": "Serializable"
      },
      "index": {
        "description": "Objects that can be sent across the network",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "Serializable",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Serializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#t:SerializableDict",
      "description": {
        "fct-descr": "\u003cp\u003eReification of \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e (see \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#SerializableDict",
        "fct-type": "data",
        "title": "SerializableDict"
      },
      "index": {
        "description": "Reification of Serializable see Control.Distributed.Process.Closure",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "SerializableDict",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Serializable Dict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:SerializableDict",
      "description": {
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "SerializableDict a",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#SerializableDict",
        "fct-type": "function",
        "title": "SerializableDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "SerializableDict",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Serializable Dict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:decodeFingerprint",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a bytestring into a fingerprint. Throws an IO exception on failure\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "ByteString -\u003e Fingerprint",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#decodeFingerprint",
        "fct-type": "function",
        "title": "decodeFingerprint"
      },
      "index": {
        "description": "Decode bytestring into fingerprint Throws an IO exception on failure",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "decodeFingerprint",
        "normalized": "ByteString-\u003eFingerprint",
        "package": "distributed-process",
        "partial": "Fingerprint",
        "signature": "ByteString-\u003eFingerprint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:encodeFingerprint",
      "description": {
        "fct-descr": "\u003cp\u003eEncode type representation as a bytestring\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "Fingerprint -\u003e ByteString",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#encodeFingerprint",
        "fct-type": "function",
        "title": "encodeFingerprint"
      },
      "index": {
        "description": "Encode type representation as bytestring",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "encodeFingerprint",
        "normalized": "Fingerprint-\u003eByteString",
        "package": "distributed-process",
        "partial": "Fingerprint",
        "signature": "Fingerprint-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:fingerprint",
      "description": {
        "fct-descr": "\u003cp\u003eThe fingerprint of the typeRep of the argument\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "a -\u003e Fingerprint",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#fingerprint",
        "fct-type": "function",
        "title": "fingerprint"
      },
      "index": {
        "description": "The fingerprint of the typeRep of the argument",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "fingerprint",
        "normalized": "a-\u003eFingerprint",
        "package": "distributed-process",
        "partial": "",
        "signature": "a-\u003eFingerprint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:showFingerprint",
      "description": {
        "fct-descr": "\u003cp\u003eShow fingerprint (for debugging purposes)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "Fingerprint -\u003e ShowS",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#showFingerprint",
        "fct-type": "function",
        "title": "showFingerprint"
      },
      "index": {
        "description": "Show fingerprint for debugging purposes",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "showFingerprint",
        "normalized": "Fingerprint-\u003eShowS",
        "package": "distributed-process",
        "partial": "Fingerprint",
        "signature": "Fingerprint-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:sizeOfFingerprint",
      "description": {
        "fct-descr": "\u003cp\u003eSize of a fingerprint\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process.Serializable",
        "fct-package": "distributed-process",
        "fct-signature": "Int",
        "fct-source": "src/Control-Distributed-Process-Serializable.html#sizeOfFingerprint",
        "fct-type": "function",
        "title": "sizeOfFingerprint"
      },
      "index": {
        "description": "Size of fingerprint",
        "hierarchy": "Control Distributed Process Serializable",
        "module": "Control.Distributed.Process.Serializable",
        "name": "sizeOfFingerprint",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Of Fingerprint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eCloud Haskell\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThis is an implementation of Cloud Haskell, as described in\n\u003cem\u003eTowards Haskell in the Cloud\u003c/em\u003e by Jeff Epstein, Andrew Black, and Simon\nPeyton Jones (\u003ca\u003ehttp://research.microsoft.com/en-us/um/people/simonpj/papers/parallel/\u003c/a\u003e),\nalthough some of the details are different. The precise message passing\nsemantics are based on \u003cem\u003eA unified semantics for future Erlang\u003c/em\u003e by Hans\nSvensson, Lars-&#197;ke Fredlund and Clara Benac Earle.\n\u003c/p\u003e\u003cp\u003eFor a detailed description of the package and other reference materials,\nplease see the distributed-process wiki page on github:\n\u003ca\u003ehttps://github.com/haskell-distributed/distributed-process/wiki\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "Cloud Haskell This is an implementation of Cloud Haskell as described in Towards Haskell in the Cloud by Jeff Epstein Andrew Black and Simon Peyton Jones http research.microsoft.com en-us um people simonpj papers parallel although some of the details are different The precise message passing semantics are based on unified semantics for future Erlang by Hans Svensson Lars ke Fredlund and Clara Benac Earle For detailed description of the package and other reference materials please see the distributed-process wiki page on github https github.com haskell-distributed distributed-process wiki",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "Process",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:AbstractMessage",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a received message and provides two basic operations on it.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
        "fct-type": "data",
        "title": "AbstractMessage"
      },
      "index": {
        "description": "Represents received message and provides two basic operations on it",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "AbstractMessage",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Abstract Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Closure",
      "description": {
        "fct-descr": "\u003cp\u003eA closure is a static value and an encoded environment\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Closure"
      },
      "index": {
        "description": "closure is static value and an encoded environment",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "Closure",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:DidSpawn",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronius) reply from \u003ccode\u003espawn\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidSpawn",
        "fct-type": "data",
        "title": "DidSpawn"
      },
      "index": {
        "description": "Asynchronius reply from spawn",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "DidSpawn",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Spawn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:DiedReason",
      "description": {
        "fct-descr": "\u003cp\u003eWhy did a process die?\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "data",
        "title": "DiedReason"
      },
      "index": {
        "description": "Why did process die",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "DiedReason",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Reason",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eYou need this when using \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#Handler",
        "fct-type": "data",
        "title": "Handler"
      },
      "index": {
        "description": "You need this when using catches",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "Handler",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Match",
      "description": {
        "fct-descr": "\u003cp\u003eOpaque type used in \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereceiveTimeout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#Match",
        "fct-type": "data",
        "title": "Match"
      },
      "index": {
        "description": "Opaque type used in receiveWait and receiveTimeout",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "Match",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:MonitorRef",
      "description": {
        "fct-descr": "\u003cp\u003eMonitorRef is opaque for regular Cloud Haskell processes\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
        "fct-type": "data",
        "title": "MonitorRef"
      },
      "index": {
        "description": "MonitorRef is opaque for regular Cloud Haskell processes",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "MonitorRef",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Monitor Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:NodeId",
      "description": {
        "fct-descr": "\u003cp\u003eNode identifier\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeId",
        "fct-type": "data",
        "title": "NodeId"
      },
      "index": {
        "description": "Node identifier",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "NodeId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:NodeLinkException",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown when a linked node dies\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeLinkException",
        "fct-type": "data",
        "title": "NodeLinkException"
      },
      "index": {
        "description": "Exception thrown when linked node dies",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "NodeLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:NodeMonitorNotification",
      "description": {
        "fct-descr": "\u003cp\u003eMessage sent by node monitors\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeMonitorNotification",
        "fct-type": "data",
        "title": "NodeMonitorNotification"
      },
      "index": {
        "description": "Message sent by node monitors",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "NodeMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:PortLinkException",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown when a linked channel (port) dies\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#PortLinkException",
        "fct-type": "data",
        "title": "PortLinkException"
      },
      "index": {
        "description": "Exception thrown when linked channel port dies",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "PortLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:PortMonitorNotification",
      "description": {
        "fct-descr": "\u003cp\u003eMessage sent by channel (port) monitors\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#PortMonitorNotification",
        "fct-type": "data",
        "title": "PortMonitorNotification"
      },
      "index": {
        "description": "Message sent by channel port monitors",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "PortMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Process",
      "description": {
        "fct-descr": "\u003cp\u003eThe Cloud Haskell \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#Process",
        "fct-type": "data",
        "title": "Process"
      },
      "index": {
        "description": "The Cloud Haskell Process type",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "Process",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessId",
      "description": {
        "fct-descr": "\u003cp\u003eProcess identifier\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
        "fct-type": "data",
        "title": "ProcessId"
      },
      "index": {
        "description": "Process identifier",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessInfo",
      "description": {
        "fct-descr": "\u003cp\u003eProvide information about a running process\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "data",
        "title": "ProcessInfo"
      },
      "index": {
        "description": "Provide information about running process",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessInfo",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessLinkException",
      "description": {
        "fct-descr": "\u003cp\u003eExceptions thrown when a linked process dies\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessLinkException",
        "fct-type": "data",
        "title": "ProcessLinkException"
      },
      "index": {
        "description": "Exceptions thrown when linked process dies",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessMonitorNotification",
      "description": {
        "fct-descr": "\u003cp\u003eMessage sent by process monitors\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessMonitorNotification",
        "fct-type": "data",
        "title": "ProcessMonitorNotification"
      },
      "index": {
        "description": "Message sent by process monitors",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessRegistrationException",
      "description": {
        "fct-descr": "\u003cp\u003eException thrown when a process attempts to register\n a process under an already-registered name or to\n unregister a name that hasn't been registered\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessRegistrationException",
        "fct-type": "data",
        "title": "ProcessRegistrationException"
      },
      "index": {
        "description": "Exception thrown when process attempts to register process under an already-registered name or to unregister name that hasn been registered",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessRegistrationException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Registration Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessTerminationException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003eterminate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#ProcessTerminationException",
        "fct-type": "data",
        "title": "ProcessTerminationException"
      },
      "index": {
        "description": "Thrown by terminate",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessTerminationException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Termination Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ReceivePort",
      "description": {
        "fct-descr": "\u003cp\u003eThe receive end of a typed channel (not serializable)\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e implements \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. This is especially useful when merging receive ports.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ReceivePort",
        "fct-type": "data",
        "title": "ReceivePort"
      },
      "index": {
        "description": "The receive end of typed channel not serializable Note that ReceivePort implements Functor Applicative Alternative and Monad This is especially useful when merging receive ports",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ReceivePort",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Receive Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:RegisterReply",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronous) reply from \u003ccode\u003eregister\u003c/code\u003e and \u003ccode\u003eunregister\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#RegisterReply",
        "fct-type": "data",
        "title": "RegisterReply"
      },
      "index": {
        "description": "Asynchronous reply from register and unregister",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "RegisterReply",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Register Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:RemoteTable",
      "description": {
        "fct-descr": "\u003cp\u003eRuntime dictionary for \u003ccode\u003e\u003ca\u003eunstatic\u003c/a\u003e\u003c/code\u003e lookups \n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RemoteTable"
      },
      "index": {
        "description": "Runtime dictionary for unstatic lookups",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "RemoteTable",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Remote Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:SendPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe send send of a typed channel (serializable)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SendPort",
        "fct-type": "data",
        "title": "SendPort"
      },
      "index": {
        "description": "The send send of typed channel serializable",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "SendPort",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Send Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:SendPortId",
      "description": {
        "fct-descr": "\u003cp\u003eA send port is identified by a SendPortId.\n\u003c/p\u003e\u003cp\u003eYou cannot send directly to a SendPortId; instead, use \u003ccode\u003enewChan\u003c/code\u003e\n to create a SendPort.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
        "fct-type": "data",
        "title": "SendPortId"
      },
      "index": {
        "description": "send port is identified by SendPortId You cannot send directly to SendPortId instead use newChan to create SendPort",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "SendPortId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Send Port Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:SpawnRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSpawnRef\u003c/a\u003e\u003c/code\u003e are used to return pids of spawned processes\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#SpawnRef",
        "fct-type": "data",
        "title": "SpawnRef"
      },
      "index": {
        "description": "SpawnRef are used to return pids of spawned processes",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "SpawnRef",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Spawn Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Static",
      "description": {
        "fct-descr": "\u003cp\u003eA static value. Static is opaque; see \u003ccode\u003e\u003ca\u003estaticLabel\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estaticApply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Static"
      },
      "index": {
        "description": "static value Static is opaque see staticLabel and staticApply",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "Static",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:WhereIsReply",
      "description": {
        "fct-descr": "\u003cp\u003e(Asynchronous) reply from \u003ccode\u003ewhereis\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#WhereIsReply",
        "fct-type": "data",
        "title": "WhereIsReply"
      },
      "index": {
        "description": "Asynchronous reply from whereis",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "WhereIsReply",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Where Is Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:AbstractMessage",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "AbstractMessage",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
        "fct-type": "function",
        "title": "AbstractMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "AbstractMessage",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Abstract Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DidSpawn",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "DidSpawn SpawnRef ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DidSpawn",
        "fct-type": "function",
        "title": "DidSpawn"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "DidSpawn",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Did Spawn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedDisconnect",
      "description": {
        "fct-descr": "\u003cp\u003eWe got disconnected from the process node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "DiedDisconnect",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedDisconnect"
      },
      "index": {
        "description": "We got disconnected from the process node",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "DiedDisconnect",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Disconnect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedException",
      "description": {
        "fct-descr": "\u003cp\u003eThe process exited with an exception\n (provided as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e because \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e does not implement \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "DiedException !String",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedException"
      },
      "index": {
        "description": "The process exited with an exception provided as String because Exception does not implement Binary",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "DiedException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedNodeDown",
      "description": {
        "fct-descr": "\u003cp\u003eThe process node died\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "DiedNodeDown",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedNodeDown"
      },
      "index": {
        "description": "The process node died",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "DiedNodeDown",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Node Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedNormal",
      "description": {
        "fct-descr": "\u003cp\u003eNormal termination\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "DiedNormal",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedNormal"
      },
      "index": {
        "description": "Normal termination",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "DiedNormal",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedUnknownId",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid (process\u003cem\u003enode\u003c/em\u003echannel) identifier\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "DiedUnknownId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
        "fct-type": "function",
        "title": "DiedUnknownId"
      },
      "index": {
        "description": "Invalid process node channel identifier",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "DiedUnknownId",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Died Unknown Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:Handler",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Handler (e -\u003e Process a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#Handler",
        "fct-type": "function",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "Handler",
        "normalized": "Handler(a-\u003eProcess b)",
        "package": "distributed-process",
        "partial": "Handler",
        "signature": "Handler(e-\u003eProcess a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:NodeLinkException",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeLinkException !NodeId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeLinkException",
        "fct-type": "function",
        "title": "NodeLinkException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "NodeLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:NodeMonitorNotification",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeMonitorNotification !MonitorRef !NodeId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#NodeMonitorNotification",
        "fct-type": "function",
        "title": "NodeMonitorNotification"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "NodeMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:PortLinkException",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "PortLinkException !SendPortId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#PortLinkException",
        "fct-type": "function",
        "title": "PortLinkException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "PortLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:PortMonitorNotification",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "PortMonitorNotification !MonitorRef !SendPortId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#PortMonitorNotification",
        "fct-type": "function",
        "title": "PortMonitorNotification"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "PortMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Port Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessInfo",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessInfo",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "ProcessInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessInfo",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessLinkException",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessLinkException !ProcessId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessLinkException",
        "fct-type": "function",
        "title": "ProcessLinkException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessLinkException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Link Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessMonitorNotification",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessMonitorNotification !MonitorRef !ProcessId !DiedReason",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessMonitorNotification",
        "fct-type": "function",
        "title": "ProcessMonitorNotification"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessMonitorNotification",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Monitor Notification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessRegistrationException",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessRegistrationException !String",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessRegistrationException",
        "fct-type": "function",
        "title": "ProcessRegistrationException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessRegistrationException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Registration Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessTerminationException",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessTerminationException",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#ProcessTerminationException",
        "fct-type": "function",
        "title": "ProcessTerminationException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "ProcessTerminationException",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Process Termination Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:RegisterReply",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "RegisterReply String Bool",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#RegisterReply",
        "fct-type": "function",
        "title": "RegisterReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "RegisterReply",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Register Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:WhereIsReply",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "WhereIsReply String (Maybe ProcessId)",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#WhereIsReply",
        "fct-type": "function",
        "title": "WhereIsReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "WhereIsReply",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Where Is Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:bracket",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e (a -\u003e Process b) -\u003e (a -\u003e Process c) -\u003e Process c",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#bracket",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "Lift bracket",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "bracket",
        "normalized": "Process a-\u003e(a-\u003eProcess b)-\u003e(a-\u003eProcess c)-\u003eProcess c",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003e(a-\u003eProcess b)-\u003e(a-\u003eProcess c)-\u003eProcess c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:bracket_",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e Process b -\u003e Process c -\u003e Process c",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#bracket_",
        "fct-type": "function",
        "title": "bracket_"
      },
      "index": {
        "description": "Lift bracket",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "bracket_",
        "normalized": "Process a-\u003eProcess b-\u003eProcess c-\u003eProcess c",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003eProcess b-\u003eProcess c-\u003eProcess c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:call",
      "description": {
        "fct-descr": "\u003cp\u003eRun a process remotely and wait for it to reply\n\u003c/p\u003e\u003cp\u003eWe monitor the remote process: if it dies before it can send a reply, we die\n too.\n\u003c/p\u003e\u003cp\u003eFor more information about \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSerializableDict\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e, see\n \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e NodeId -\u003e Closure (Process a) -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process.html#call",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "Run process remotely and wait for it to reply We monitor the remote process if it dies before it can send reply we die too For more information about Static SerializableDict and Closure see Control.Distributed.Process.Closure See also spawn",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "call",
        "normalized": "Static(SerializableDict a)-\u003eNodeId-\u003eClosure(Process a)-\u003eProcess a",
        "package": "distributed-process",
        "partial": "",
        "signature": "Static(SerializableDict a)-\u003eNodeId-\u003eClosure(Process a)-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e (e -\u003e Process a) -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#catch",
        "fct-type": "function",
        "title": "catch"
      },
      "index": {
        "description": "Lift catch",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "catch",
        "normalized": "Process a-\u003e(b-\u003eProcess a)-\u003eProcess a",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003e(e-\u003eProcess a)-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:catchExit",
      "description": {
        "fct-descr": "\u003cp\u003eCatches \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e. The handler will not be applied unless its\n type matches the encoded data stored in the exception (see the \u003cem\u003ereason\u003c/em\u003e\n argument given to the \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e primitive). If the handler cannot be applied,\n the exception will be re-thrown.\n\u003c/p\u003e\u003cp\u003eTo handle \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e without regard for \u003cem\u003ereason\u003c/em\u003e, see \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n To handle multiple \u003cem\u003ereasons\u003c/em\u003e of differing types, see \u003ccode\u003e\u003ca\u003ecatchesExit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process b -\u003e (ProcessId -\u003e a -\u003e Process b) -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#catchExit",
        "fct-type": "function",
        "title": "catchExit"
      },
      "index": {
        "description": "Catches ProcessExitException The handler will not be applied unless its type matches the encoded data stored in the exception see the reason argument given to the exit primitive If the handler cannot be applied the exception will be re-thrown To handle ProcessExitException without regard for reason see catch To handle multiple reasons of differing types see catchesExit",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "catchExit",
        "normalized": "Process a-\u003e(ProcessId-\u003eb-\u003eProcess a)-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Exit",
        "signature": "Process b-\u003e(ProcessId-\u003ea-\u003eProcess b)-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:catches",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e [Handler a] -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#catches",
        "fct-type": "function",
        "title": "catches"
      },
      "index": {
        "description": "Lift catches",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "catches",
        "normalized": "Process a-\u003e[Handler a]-\u003eProcess a",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003e[Handler a]-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:catchesExit",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e (almost).\n\u003c/p\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e stores the exit \u003ccode\u003ereason\u003c/code\u003e as a typed, encoded\n message, a handler must accept an input of the expected type. In order to\n handle a list of potentially different handlers (and therefore input types),\n a handler passed to \u003ccode\u003e\u003ca\u003ecatchesExit\u003c/a\u003e\u003c/code\u003e must accept \u003ccode\u003e\u003ca\u003eAbstractMessage\u003c/a\u003e\u003c/code\u003e and return\n \u003ccode\u003eMaybe\u003c/code\u003e (i.e., \u003ccode\u003eJust p\u003c/code\u003e if it handled the exit reason, otherwise \u003ccode\u003eNothing\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003emaybeHandleMessage\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eAsbtractMessage\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process b -\u003e [ProcessId -\u003e AbstractMessage -\u003e Process (Maybe b)] -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#catchesExit",
        "fct-type": "function",
        "title": "catchesExit"
      },
      "index": {
        "description": "Lift catches almost As ProcessExitException stores the exit reason as typed encoded message handler must accept an input of the expected type In order to handle list of potentially different handlers and therefore input types handler passed to catchesExit must accept AbstractMessage and return Maybe i.e Just if it handled the exit reason otherwise Nothing See maybeHandleMessage and AsbtractMessage for more details",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "catchesExit",
        "normalized": "Process a-\u003e[ProcessId-\u003eAbstractMessage-\u003eProcess(Maybe a)]-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Exit",
        "signature": "Process b-\u003e[ProcessId-\u003eAbstractMessage-\u003eProcess(Maybe b)]-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:closure",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Static (ByteString -\u003e a)-\u003e ByteString-\u003e Closure a",
        "fct-type": "function",
        "title": "closure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "closure",
        "normalized": "Static(ByteString-\u003ea)-\u003eByteString-\u003eClosure a",
        "package": "distributed-process",
        "partial": "",
        "signature": "Static(ByteString-\u003ea)-\u003eByteString-\u003eClosure a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:die",
      "description": {
        "fct-descr": "\u003cp\u003eDie immediately - throws a \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e with the given \u003ccode\u003ereason\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "a -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#die",
        "fct-type": "function",
        "title": "die"
      },
      "index": {
        "description": "Die immediately throws ProcessExitException with the given reason",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "die",
        "normalized": "a-\u003eProcess b",
        "package": "distributed-process",
        "partial": "",
        "signature": "a-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:exit",
      "description": {
        "fct-descr": "\u003cp\u003eGraceful request to exit a process. Throws \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e with the\n supplied \u003ccode\u003ereason\u003c/code\u003e encoded as a message. Any \u003cem\u003eexit signal\u003c/em\u003e raised in this\n manner can be handled using the \u003ccode\u003e\u003ca\u003ecatchExit\u003c/a\u003e\u003c/code\u003e family of functions.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#exit",
        "fct-type": "function",
        "title": "exit"
      },
      "index": {
        "description": "Graceful request to exit process Throws ProcessExitException with the supplied reason encoded as message Any exit signal raised in this manner can be handled using the catchExit family of functions",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "exit",
        "normalized": "ProcessId-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:expect",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a message of a specific type\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#expect",
        "fct-type": "function",
        "title": "expect"
      },
      "index": {
        "description": "Wait for message of specific type",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "expect",
        "normalized": "",
        "package": "distributed-process",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:expectTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e but with a timeout\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Int -\u003e Process (Maybe a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#expectTimeout",
        "fct-type": "function",
        "title": "expectTimeout"
      },
      "index": {
        "description": "Like expect but with timeout",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "expectTimeout",
        "normalized": "Int-\u003eProcess(Maybe a)",
        "package": "distributed-process",
        "partial": "Timeout",
        "signature": "Int-\u003eProcess(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e Process b -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#finally",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "Lift finally",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "finally",
        "normalized": "Process a-\u003eProcess b-\u003eProcess a",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003eProcess b-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:forward",
      "description": {
        "fct-descr": "\u003cp\u003eforward the message to \u003ccode\u003eProcessId\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
        "fct-type": "function",
        "title": "forward"
      },
      "index": {
        "description": "forward the message to ProcessId",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "forward",
        "normalized": "ProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:getProcessInfo",
      "description": {
        "fct-descr": "\u003cp\u003eGet information about the specified process\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process (Maybe ProcessInfo)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#getProcessInfo",
        "fct-type": "function",
        "title": "getProcessInfo"
      },
      "index": {
        "description": "Get information about the specified process",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "getProcessInfo",
        "normalized": "ProcessId-\u003eProcess(Maybe ProcessInfo)",
        "package": "distributed-process",
        "partial": "Process Info",
        "signature": "ProcessId-\u003eProcess(Maybe ProcessInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:getSelfNode",
      "description": {
        "fct-descr": "\u003cp\u003eGet the node ID of our local node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#getSelfNode",
        "fct-type": "function",
        "title": "getSelfNode"
      },
      "index": {
        "description": "Get the node ID of our local node",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "getSelfNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Self Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:getSelfPid",
      "description": {
        "fct-descr": "\u003cp\u003eOur own process ID\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#getSelfPid",
        "fct-type": "function",
        "title": "getSelfPid"
      },
      "index": {
        "description": "Our own process ID",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "getSelfPid",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Self Pid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoLinks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "[ProcessId]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoLinks"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "infoLinks",
        "normalized": "[ProcessId]",
        "package": "distributed-process",
        "partial": "Links",
        "signature": "[ProcessId]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoMessageQueueLength",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoMessageQueueLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "infoMessageQueueLength",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Message Queue Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoMonitors",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "[(ProcessId, MonitorRef)]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoMonitors"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "infoMonitors",
        "normalized": "[(ProcessId,MonitorRef)]",
        "package": "distributed-process",
        "partial": "Monitors",
        "signature": "[(ProcessId,MonitorRef)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoNode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "infoNode",
        "normalized": "",
        "package": "distributed-process",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoRegisteredNames",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "[String]",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
        "fct-type": "function",
        "title": "infoRegisteredNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "infoRegisteredNames",
        "normalized": "[String]",
        "package": "distributed-process",
        "partial": "Registered Names",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:kill",
      "description": {
        "fct-descr": "\u003cp\u003eForceful request to kill a process. Where \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e provides an exception\n that can be caught and handled, \u003ccode\u003e\u003ca\u003ekill\u003c/a\u003e\u003c/code\u003e throws an unexposed exception type\n which cannot be handled explicitly (by type).\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#kill",
        "fct-type": "function",
        "title": "kill"
      },
      "index": {
        "description": "Forceful request to kill process Where exit provides an exception that can be caught and handled kill throws an unexposed exception type which cannot be handled explicitly by type",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "kill",
        "normalized": "ProcessId-\u003eString-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eString-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "forall a.  IO a -\u003e m a",
        "fct-type": "function",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "liftIO",
        "normalized": "a b IO c-\u003ed c",
        "package": "distributed-process",
        "partial": "IO",
        "signature": "forall a. IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:link",
      "description": {
        "fct-descr": "\u003cp\u003eLink to a remote process (asynchronous)\n\u003c/p\u003e\u003cp\u003eWhen process A links to process B (that is, process A calls\n \u003ccode\u003elink pidB\u003c/code\u003e) then an asynchronous exception will be thrown to process A\n when process B terminates (normally or abnormally), or when process A gets\n disconnected from process B. Although it is \u003cem\u003etechnically\u003c/em\u003e possible to catch\n these exceptions, chances are if you find yourself trying to do so you should\n probably be using \u003ccode\u003e\u003ca\u003emonitor\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e. In particular, code such as\n\u003c/p\u003e\u003cpre\u003e link pidB   -- Link to process B\n expect      -- Wait for a message from process B\n unlink pidB -- Unlink again\n\u003c/pre\u003e\u003cp\u003edoesn't quite do what one might expect: if process B sends a message to\n process A, and \u003cem\u003esubsequently terminates\u003c/em\u003e, then process A might or might not\n be terminated too, depending on whether the exception is thrown before or\n after the \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e (i.e., this code has a race condition).\n\u003c/p\u003e\u003cp\u003eLinking is all-or-nothing: A is either linked to B, or it's not. A second\n call to \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e has no effect.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e provides unidirectional linking (see \u003ccode\u003espawnSupervised\u003c/code\u003e).\n Linking makes no distinction between normal and abnormal termination of\n the remote process.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#link",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "Link to remote process asynchronous When process links to process that is process calls link pidB then an asynchronous exception will be thrown to process when process terminates normally or abnormally or when process gets disconnected from process Although it is technically possible to catch these exceptions chances are if you find yourself trying to do so you should probably be using monitor rather than link In particular code such as link pidB Link to process expect Wait for message from process unlink pidB Unlink again doesn quite do what one might expect if process sends message to process and subsequently terminates then process might or might not be terminated too depending on whether the exception is thrown before or after the unlink i.e this code has race condition Linking is all-or-nothing is either linked to or it not second call to link has no effect Note that link provides unidirectional linking see spawnSupervised Linking makes no distinction between normal and abnormal termination of the remote process",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "link",
        "normalized": "ProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:linkNode",
      "description": {
        "fct-descr": "\u003cp\u003eLink to a node (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#linkNode",
        "fct-type": "function",
        "title": "linkNode"
      },
      "index": {
        "description": "Link to node asynchronous",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "linkNode",
        "normalized": "NodeId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Node",
        "signature": "NodeId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:linkPort",
      "description": {
        "fct-descr": "\u003cp\u003eLink to a channel (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#linkPort",
        "fct-type": "function",
        "title": "linkPort"
      },
      "index": {
        "description": "Link to channel asynchronous",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "linkPort",
        "normalized": "SendPort a-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Port",
        "signature": "SendPort a-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:mask",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "((forall a.  Process a -\u003e Process a) -\u003e Process b) -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#mask",
        "fct-type": "function",
        "title": "mask"
      },
      "index": {
        "description": "Lift mask",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "mask",
        "normalized": "((a b Process c-\u003eProcess c)-\u003eProcess d)-\u003eProcess d",
        "package": "distributed-process",
        "partial": "",
        "signature": "((forall a. Process a-\u003eProcess a)-\u003eProcess b)-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003eMatch against any message of the right type\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "(a -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#match",
        "fct-type": "function",
        "title": "match"
      },
      "index": {
        "description": "Match against any message of the right type",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "match",
        "normalized": "(a-\u003eProcess b)-\u003eMatch b",
        "package": "distributed-process",
        "partial": "",
        "signature": "(a-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchAny",
      "description": {
        "fct-descr": "\u003cp\u003eMatch against an arbitrary message. \u003ccode\u003e\u003ca\u003ematchAny\u003c/a\u003e\u003c/code\u003e removes the first available\n message from the process mailbox, and via the \u003ccode\u003e\u003ca\u003eAbstractMessage\u003c/a\u003e\u003c/code\u003e type,\n supports forwarding \u003cem\u003eor\u003c/em\u003e handling the message \u003cem\u003eif\u003c/em\u003e it is of the correct\n type. If \u003cem\u003enot\u003c/em\u003e of the right type, then the \u003ccode\u003e\u003ca\u003eAbstractMessage\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003emaybeHandleMessage\u003c/code\u003e function will not evaluate the supplied expression,\n \u003cem\u003ebut\u003c/em\u003e the message will still have been removed from the process mailbox!\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "forall b.  (AbstractMessage -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchAny",
        "fct-type": "function",
        "title": "matchAny"
      },
      "index": {
        "description": "Match against an arbitrary message matchAny removes the first available message from the process mailbox and via the AbstractMessage type supports forwarding or handling the message if it is of the correct type If not of the right type then the AbstractMessage maybeHandleMessage function will not evaluate the supplied expression but the message will still have been removed from the process mailbox",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "matchAny",
        "normalized": "a b(AbstractMessage-\u003eProcess c)-\u003eMatch c",
        "package": "distributed-process",
        "partial": "Any",
        "signature": "forall b.(AbstractMessage-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchAnyIf",
      "description": {
        "fct-descr": "\u003cp\u003eMatch against an arbitrary message. \u003ccode\u003e\u003ca\u003ematchAnyIf\u003c/a\u003e\u003c/code\u003e will \u003cem\u003eonly\u003c/em\u003e remove the\n message from the process mailbox, \u003cem\u003eif\u003c/em\u003e the supplied condition matches. The\n success (or failure) of runtime type checks in \u003ccode\u003emaybeHandleMessage\u003c/code\u003e does not\n count here, i.e., if the condition evaluates to \u003ccode\u003eTrue\u003c/code\u003e then the message will\n be removed from the process mailbox and decoded, but that does \u003cem\u003enot\u003c/em\u003e\n guarantee that an expression passed to \u003ccode\u003emaybeHandleMessage\u003c/code\u003e will pass the\n runtime type checks and therefore be evaluated. If the types do not match\n up, then \u003ccode\u003emaybeHandleMessage\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "(a -\u003e Bool) -\u003e (AbstractMessage -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchAnyIf",
        "fct-type": "function",
        "title": "matchAnyIf"
      },
      "index": {
        "description": "Match against an arbitrary message matchAnyIf will only remove the message from the process mailbox if the supplied condition matches The success or failure of runtime type checks in maybeHandleMessage does not count here i.e if the condition evaluates to True then the message will be removed from the process mailbox and decoded but that does not guarantee that an expression passed to maybeHandleMessage will pass the runtime type checks and therefore be evaluated If the types do not match up then maybeHandleMessage returns Nothing",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "matchAnyIf",
        "normalized": "(a-\u003eBool)-\u003e(AbstractMessage-\u003eProcess b)-\u003eMatch b",
        "package": "distributed-process",
        "partial": "Any If",
        "signature": "(a-\u003eBool)-\u003e(AbstractMessage-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchChan",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ReceivePort a -\u003e (a -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchChan",
        "fct-type": "function",
        "title": "matchChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "matchChan",
        "normalized": "ReceivePort a-\u003e(a-\u003eProcess b)-\u003eMatch b",
        "package": "distributed-process",
        "partial": "Chan",
        "signature": "ReceivePort a-\u003e(a-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchIf",
      "description": {
        "fct-descr": "\u003cp\u003eMatch against any message of the right type that satisfies a predicate\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e Process b) -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchIf",
        "fct-type": "function",
        "title": "matchIf"
      },
      "index": {
        "description": "Match against any message of the right type that satisfies predicate",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "matchIf",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eProcess b)-\u003eMatch b",
        "package": "distributed-process",
        "partial": "If",
        "signature": "(a-\u003eBool)-\u003e(a-\u003eProcess b)-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchUnknown",
      "description": {
        "fct-descr": "\u003cp\u003eRemove any message from the queue\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process b -\u003e Match b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#matchUnknown",
        "fct-type": "function",
        "title": "matchUnknown"
      },
      "index": {
        "description": "Remove any message from the queue",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "matchUnknown",
        "normalized": "Process a-\u003eMatch a",
        "package": "distributed-process",
        "partial": "Unknown",
        "signature": "Process b-\u003eMatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:maybeHandleMessage",
      "description": {
        "fct-descr": "\u003cp\u003eHandle the message.\n        If the type of the message matches the type of the first argument to\n        the supplied expression, then the expression will be evaluated against\n        it. If this runtime type checking fails, then \u003ccode\u003eNothing\u003c/code\u003e will be returned\n        to indicate the fact. If the check succeeds and evaluation proceeds\n        however, the resulting value with be wrapped with \u003ccode\u003eJust\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "(a -\u003e Process b) -\u003e Process (Maybe b)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
        "fct-type": "function",
        "title": "maybeHandleMessage"
      },
      "index": {
        "description": "Handle the message If the type of the message matches the type of the first argument to the supplied expression then the expression will be evaluated against it If this runtime type checking fails then Nothing will be returned to indicate the fact If the check succeeds and evaluation proceeds however the resulting value with be wrapped with Just",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "maybeHandleMessage",
        "normalized": "(a-\u003eProcess b)-\u003eProcess(Maybe b)",
        "package": "distributed-process",
        "partial": "Handle Message",
        "signature": "(a-\u003eProcess b)-\u003eProcess(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:mergePortsBiased",
      "description": {
        "fct-descr": "\u003cp\u003eMerge a list of typed channels.\n\u003c/p\u003e\u003cp\u003eThe result port is left-biased: if there are messages available on more\n than one port, the first available message is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "[ReceivePort a] -\u003e Process (ReceivePort a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#mergePortsBiased",
        "fct-type": "function",
        "title": "mergePortsBiased"
      },
      "index": {
        "description": "Merge list of typed channels The result port is left-biased if there are messages available on more than one port the first available message is returned",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "mergePortsBiased",
        "normalized": "[ReceivePort a]-\u003eProcess(ReceivePort a)",
        "package": "distributed-process",
        "partial": "Ports Biased",
        "signature": "[ReceivePort a]-\u003eProcess(ReceivePort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:mergePortsRR",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emergePortsBiased\u003c/a\u003e\u003c/code\u003e, but with a round-robin scheduler (rather than\n left-biased)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "[ReceivePort a] -\u003e Process (ReceivePort a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#mergePortsRR",
        "fct-type": "function",
        "title": "mergePortsRR"
      },
      "index": {
        "description": "Like mergePortsBiased but with round-robin scheduler rather than left-biased",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "mergePortsRR",
        "normalized": "[ReceivePort a]-\u003eProcess(ReceivePort a)",
        "package": "distributed-process",
        "partial": "Ports RR",
        "signature": "[ReceivePort a]-\u003eProcess(ReceivePort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:monitor",
      "description": {
        "fct-descr": "\u003cp\u003eMonitor another process (asynchronous)\n\u003c/p\u003e\u003cp\u003eWhen process A monitors process B (that is, process A calls\n \u003ccode\u003emonitor pidB\u003c/code\u003e) then process A will receive a \u003ccode\u003eProcessMonitorNotification\u003c/code\u003e\n when process B terminates (normally or abnormally), or when process A gets\n disconnected from process B. You receive this message like any other (using\n \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e); the notification includes a reason (\u003ccode\u003eDiedNormal\u003c/code\u003e, \u003ccode\u003eDiedException\u003c/code\u003e,\n \u003ccode\u003eDiedDisconnect\u003c/code\u003e, etc.).\n\u003c/p\u003e\u003cp\u003eEvery call to \u003ccode\u003e\u003ca\u003emonitor\u003c/a\u003e\u003c/code\u003e returns a new monitor reference \u003ccode\u003e\u003ca\u003eMonitorRef\u003c/a\u003e\u003c/code\u003e; if\n multiple monitors are set up, multiple notifications will be delivered\n and monitors can be disabled individually using \u003ccode\u003e\u003ca\u003eunmonitor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#monitor",
        "fct-type": "function",
        "title": "monitor"
      },
      "index": {
        "description": "Monitor another process asynchronous When process monitors process that is process calls monitor pidB then process will receive ProcessMonitorNotification when process terminates normally or abnormally or when process gets disconnected from process You receive this message like any other using expect the notification includes reason DiedNormal DiedException DiedDisconnect etc Every call to monitor returns new monitor reference MonitorRef if multiple monitors are set up multiple notifications will be delivered and monitors can be disabled individually using unmonitor",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "monitor",
        "normalized": "ProcessId-\u003eProcess MonitorRef",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess MonitorRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:monitorNode",
      "description": {
        "fct-descr": "\u003cp\u003eMonitor a node (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Process MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#monitorNode",
        "fct-type": "function",
        "title": "monitorNode"
      },
      "index": {
        "description": "Monitor node asynchronous",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "monitorNode",
        "normalized": "NodeId-\u003eProcess MonitorRef",
        "package": "distributed-process",
        "partial": "Node",
        "signature": "NodeId-\u003eProcess MonitorRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:monitorPort",
      "description": {
        "fct-descr": "\u003cp\u003eMonitor a typed channel (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e Process MonitorRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#monitorPort",
        "fct-type": "function",
        "title": "monitorPort"
      },
      "index": {
        "description": "Monitor typed channel asynchronous",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "monitorPort",
        "normalized": "SendPort a-\u003eProcess MonitorRef",
        "package": "distributed-process",
        "partial": "Port",
        "signature": "SendPort a-\u003eProcess MonitorRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:newChan",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new typed channel\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process (SendPort a, ReceivePort a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#newChan",
        "fct-type": "function",
        "title": "newChan"
      },
      "index": {
        "description": "Create new typed channel",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "newChan",
        "normalized": "Process(SendPort a,ReceivePort a)",
        "package": "distributed-process",
        "partial": "Chan",
        "signature": "Process(SendPort a,ReceivePort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:nsend",
      "description": {
        "fct-descr": "\u003cp\u003eNamed send to a process in the local registry (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#nsend",
        "fct-type": "function",
        "title": "nsend"
      },
      "index": {
        "description": "Named send to process in the local registry asynchronous",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "nsend",
        "normalized": "String-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:nsendRemote",
      "description": {
        "fct-descr": "\u003cp\u003eNamed send to a process in a remote registry (asynchronous)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#nsendRemote",
        "fct-type": "function",
        "title": "nsendRemote"
      },
      "index": {
        "description": "Named send to process in remote registry asynchronous",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "nsendRemote",
        "normalized": "NodeId-\u003eString-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote",
        "signature": "NodeId-\u003eString-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e Process b -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#onException",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "Lift onException",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "onException",
        "normalized": "Process a-\u003eProcess b-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Exception",
        "signature": "Process a-\u003eProcess b-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:processNodeId",
      "description": {
        "fct-descr": "\u003cp\u003eThe ID of the node the process is running on\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e NodeId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#processNodeId",
        "fct-type": "function",
        "title": "processNodeId"
      },
      "index": {
        "description": "The ID of the node the process is running on",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "processNodeId",
        "normalized": "ProcessId-\u003eNodeId",
        "package": "distributed-process",
        "partial": "Node Id",
        "signature": "ProcessId-\u003eNodeId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:receiveChan",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a message on a typed channel\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ReceivePort a -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveChan",
        "fct-type": "function",
        "title": "receiveChan"
      },
      "index": {
        "description": "Wait for message on typed channel",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "receiveChan",
        "normalized": "ReceivePort a-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Chan",
        "signature": "ReceivePort a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:receiveChanTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceiveChan\u003c/a\u003e\u003c/code\u003e but with a timeout. If the timeout is 0, do a\n non-blocking check for a message.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Int -\u003e ReceivePort a -\u003e Process (Maybe a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveChanTimeout",
        "fct-type": "function",
        "title": "receiveChanTimeout"
      },
      "index": {
        "description": "Like receiveChan but with timeout If the timeout is do non-blocking check for message",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "receiveChanTimeout",
        "normalized": "Int-\u003eReceivePort a-\u003eProcess(Maybe a)",
        "package": "distributed-process",
        "partial": "Chan Timeout",
        "signature": "Int-\u003eReceivePort a-\u003eProcess(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:receiveTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e but with a timeout.\n\u003c/p\u003e\u003cp\u003eIf the timeout is zero do a non-blocking check for matching messages. A\n non-zero timeout is applied only when waiting for incoming messages (that is,\n \u003cem\u003eafter\u003c/em\u003e we have checked the messages that are already in the mailbox).\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Int -\u003e [Match b] -\u003e Process (Maybe b)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveTimeout",
        "fct-type": "function",
        "title": "receiveTimeout"
      },
      "index": {
        "description": "Like receiveWait but with timeout If the timeout is zero do non-blocking check for matching messages non-zero timeout is applied only when waiting for incoming messages that is after we have checked the messages that are already in the mailbox",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "receiveTimeout",
        "normalized": "Int-\u003e[Match a]-\u003eProcess(Maybe a)",
        "package": "distributed-process",
        "partial": "Timeout",
        "signature": "Int-\u003e[Match b]-\u003eProcess(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:receiveWait",
      "description": {
        "fct-descr": "\u003cp\u003eTest the matches in order against each message in the queue\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "[Match b] -\u003e Process b",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveWait",
        "fct-type": "function",
        "title": "receiveWait"
      },
      "index": {
        "description": "Test the matches in order against each message in the queue",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "receiveWait",
        "normalized": "[Match a]-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Wait",
        "signature": "[Match b]-\u003eProcess b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:reconnect",
      "description": {
        "fct-descr": "\u003cp\u003eCloud Haskell provides the illusion of connection-less, reliable, ordered\n message passing. However, when network connections get disrupted this\n illusion cannot always be maintained. Once a network connection breaks (even\n temporarily) no further communication on that connection will be possible.\n For example, if process A sends a message to process B, and A is then\n notified (by monitor notification) that it got disconnected from B, A will\n not be able to send any further messages to B, \u003cem\u003eunless\u003c/em\u003e A explicitly\n indicates that it is acceptable to attempt to reconnect to B using the\n Cloud Haskell \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e primitive.\n\u003c/p\u003e\u003cp\u003eImportantly, when A calls \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e it acknowledges that some messages to\n B might have been lost. For instance, if A sends messages m1 and m2 to B,\n then receives a monitor notification that its connection to B has been lost,\n calls \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e and then sends m3, it is possible that B will receive m1\n and m3 but not m2.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e does not mean \u003cem\u003ereconnect now\u003c/em\u003e but rather /it is okay\n to attempt to reconnect on the next send/. In particular, if no further\n communication attempts are made to B then A can use reconnect to clean up\n its connection to B.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#reconnect",
        "fct-type": "function",
        "title": "reconnect"
      },
      "index": {
        "description": "Cloud Haskell provides the illusion of connection-less reliable ordered message passing However when network connections get disrupted this illusion cannot always be maintained Once network connection breaks even temporarily no further communication on that connection will be possible For example if process sends message to process and is then notified by monitor notification that it got disconnected from will not be able to send any further messages to unless explicitly indicates that it is acceptable to attempt to reconnect to using the Cloud Haskell reconnect primitive Importantly when calls reconnect it acknowledges that some messages to might have been lost For instance if sends messages m1 and m2 to then receives monitor notification that its connection to has been lost calls reconnect and then sends m3 it is possible that will receive m1 and m3 but not m2 Note that reconnect does not mean reconnect now but rather it is okay to attempt to reconnect on the next send In particular if no further communication attempts are made to then can use reconnect to clean up its connection to",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "reconnect",
        "normalized": "ProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:reconnectPort",
      "description": {
        "fct-descr": "\u003cp\u003eReconnect to a sendport. See \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#reconnectPort",
        "fct-type": "function",
        "title": "reconnectPort"
      },
      "index": {
        "description": "Reconnect to sendport See reconnect for more information",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "reconnectPort",
        "normalized": "SendPort a-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Port",
        "signature": "SendPort a-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a process with the local registry (asynchronous).\n This version will wait until a response is gotten from the\n management process. The name must not already be registered.\n The process need not be on this node.\n A bad registration will result in a \u003ccode\u003e\u003ca\u003eProcessRegistrationException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe process to be registered does not have to be local itself.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#register",
        "fct-type": "function",
        "title": "register"
      },
      "index": {
        "description": "Register process with the local registry asynchronous This version will wait until response is gotten from the management process The name must not already be registered The process need not be on this node bad registration will result in ProcessRegistrationException The process to be registered does not have to be local itself",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "register",
        "normalized": "String-\u003eProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:registerRemoteAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a process with a remote registry (asynchronous).\n\u003c/p\u003e\u003cp\u003eThe process to be registered does not have to live on the same remote node.\n Reply wil come in the form of a \u003ccode\u003e\u003ca\u003eRegisterReply\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e\u003cp\u003eSee comments in \u003ccode\u003e\u003ca\u003ewhereisRemoteAsync\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#registerRemoteAsync",
        "fct-type": "function",
        "title": "registerRemoteAsync"
      },
      "index": {
        "description": "Register process with remote registry asynchronous The process to be registered does not have to live on the same remote node Reply wil come in the form of RegisterReply message See comments in whereisRemoteAsync",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "registerRemoteAsync",
        "normalized": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote Async",
        "signature": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:reregister",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e, but will replace an existing registration.\n The name must already be registered.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#reregister",
        "fct-type": "function",
        "title": "reregister"
      },
      "index": {
        "description": "Like register but will replace an existing registration The name must already be registered",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "reregister",
        "normalized": "String-\u003eProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:reregisterRemoteAsync",
      "description": {
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#reregisterRemoteAsync",
        "fct-type": "function",
        "title": "reregisterRemoteAsync"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "reregisterRemoteAsync",
        "normalized": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote Async",
        "signature": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:say",
      "description": {
        "fct-descr": "\u003cp\u003eLog a string\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esay message\u003c/code\u003e sends a message (time, pid of the current process, message)\n to the process registered as \u003ccode\u003elogger\u003c/code\u003e.  By default, this process simply\n sends the string to \u003ccode\u003estderr\u003c/code\u003e. Individual Cloud Haskell backends might\n replace this with a different logger process, however.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#say",
        "fct-type": "function",
        "title": "say"
      },
      "index": {
        "description": "Log string say message sends message time pid of the current process message to the process registered as logger By default this process simply sends the string to stderr Individual Cloud Haskell backends might replace this with different logger process however",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "say",
        "normalized": "String-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send message",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "send",
        "normalized": "ProcessId-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:sendChan",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message on a typed channel\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#sendChan",
        "fct-type": "function",
        "title": "sendChan"
      },
      "index": {
        "description": "Send message on typed channel",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "sendChan",
        "normalized": "SendPort a-\u003ea-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Chan",
        "signature": "SendPort a-\u003ea-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:sendPortId",
      "description": {
        "fct-descr": "\u003cp\u003eThe (unique) ID of this send port\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e SendPortId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#sendPortId",
        "fct-type": "function",
        "title": "sendPortId"
      },
      "index": {
        "description": "The unique ID of this send port",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "sendPortId",
        "normalized": "SendPort a-\u003eSendPortId",
        "package": "distributed-process",
        "partial": "Port Id",
        "signature": "SendPort a-\u003eSendPortId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:sendPortProcessId",
      "description": {
        "fct-descr": "\u003cp\u003eThe ID of the process that will receive messages sent on this port\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "SendPortId -\u003e ProcessId",
        "fct-source": "src/Control-Distributed-Process-Internal-Types.html#sendPortProcessId",
        "fct-type": "function",
        "title": "sendPortProcessId"
      },
      "index": {
        "description": "The ID of the process that will receive messages sent on this port",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "sendPortProcessId",
        "normalized": "SendPortId-\u003eProcessId",
        "package": "distributed-process",
        "partial": "Port Process Id",
        "signature": "SendPortId-\u003eProcessId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a process\n\u003c/p\u003e\u003cp\u003eFor more information about \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e, see\n \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Closure (Process ()) -\u003e Process ProcessId",
        "fct-source": "src/Control-Distributed-Process.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "Spawn process For more information about Closure see Control.Distributed.Process.Closure See also call",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "spawn",
        "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess ProcessId",
        "package": "distributed-process",
        "partial": "",
        "signature": "NodeId-\u003eClosure(Process())-\u003eProcess ProcessId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnAsync",
      "description": {
        "fct-descr": "\u003cp\u003eAsynchronous version of \u003ccode\u003espawn\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003espawn\u003c/code\u003e is defined in terms of \u003ccode\u003e\u003ca\u003espawnAsync\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Closure (Process ()) -\u003e Process SpawnRef",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#spawnAsync",
        "fct-type": "function",
        "title": "spawnAsync"
      },
      "index": {
        "description": "Asynchronous version of spawn spawn is defined in terms of spawnAsync and expect",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "spawnAsync",
        "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess SpawnRef",
        "package": "distributed-process",
        "partial": "Async",
        "signature": "NodeId-\u003eClosure(Process())-\u003eProcess SpawnRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnChannel",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a new process, supplying it with a new \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e and return\n the corresponding \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Static (SerializableDict a) -\u003e NodeId -\u003e Closure (ReceivePort a -\u003e Process ()) -\u003e Process (SendPort a)",
        "fct-source": "src/Control-Distributed-Process.html#spawnChannel",
        "fct-type": "function",
        "title": "spawnChannel"
      },
      "index": {
        "description": "Spawn new process supplying it with new ReceivePort and return the corresponding SendPort",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "spawnChannel",
        "normalized": "Static(SerializableDict a)-\u003eNodeId-\u003eClosure(ReceivePort a-\u003eProcess())-\u003eProcess(SendPort a)",
        "package": "distributed-process",
        "partial": "Channel",
        "signature": "Static(SerializableDict a)-\u003eNodeId-\u003eClosure(ReceivePort a-\u003eProcess())-\u003eProcess(SendPort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnChannelLocal",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new typed channel, spawn a process on the local node, passing it\n the receive port, and return the send port\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "(ReceivePort a -\u003e Process ()) -\u003e Process (SendPort a)",
        "fct-source": "src/Control-Distributed-Process.html#spawnChannelLocal",
        "fct-type": "function",
        "title": "spawnChannelLocal"
      },
      "index": {
        "description": "Create new typed channel spawn process on the local node passing it the receive port and return the send port",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "spawnChannelLocal",
        "normalized": "(ReceivePort a-\u003eProcess())-\u003eProcess(SendPort a)",
        "package": "distributed-process",
        "partial": "Channel Local",
        "signature": "(ReceivePort a-\u003eProcess())-\u003eProcess(SendPort a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnLink",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a process and link to it\n\u003c/p\u003e\u003cp\u003eNote that this is just the sequential composition of \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e.\n (The \u003ca\u003eUnified\u003c/a\u003e semantics that underlies Cloud Haskell does not even support\n a synchronous link operation)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Closure (Process ()) -\u003e Process ProcessId",
        "fct-source": "src/Control-Distributed-Process.html#spawnLink",
        "fct-type": "function",
        "title": "spawnLink"
      },
      "index": {
        "description": "Spawn process and link to it Note that this is just the sequential composition of spawn and link The Unified semantics that underlies Cloud Haskell does not even support synchronous link operation",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "spawnLink",
        "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess ProcessId",
        "package": "distributed-process",
        "partial": "Link",
        "signature": "NodeId-\u003eClosure(Process())-\u003eProcess ProcessId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnLocal",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a process on the local node\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process () -\u003e Process ProcessId",
        "fct-source": "src/Control-Distributed-Process.html#spawnLocal",
        "fct-type": "function",
        "title": "spawnLocal"
      },
      "index": {
        "description": "Spawn process on the local node",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "spawnLocal",
        "normalized": "Process()-\u003eProcess ProcessId",
        "package": "distributed-process",
        "partial": "Local",
        "signature": "Process()-\u003eProcess ProcessId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnMonitor",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawnLink\u003c/a\u003e\u003c/code\u003e, but monitor the spawned process\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Closure (Process ()) -\u003e Process (ProcessId, MonitorRef)",
        "fct-source": "src/Control-Distributed-Process.html#spawnMonitor",
        "fct-type": "function",
        "title": "spawnMonitor"
      },
      "index": {
        "description": "Like spawnLink but monitor the spawned process",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "spawnMonitor",
        "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess(ProcessId,MonitorRef)",
        "package": "distributed-process",
        "partial": "Monitor",
        "signature": "NodeId-\u003eClosure(Process())-\u003eProcess(ProcessId,MonitorRef)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnSupervised",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a child process, have the child link to the parent and the parent\n monitor the child\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Closure (Process ()) -\u003e Process (ProcessId, MonitorRef)",
        "fct-source": "src/Control-Distributed-Process.html#spawnSupervised",
        "fct-type": "function",
        "title": "spawnSupervised"
      },
      "index": {
        "description": "Spawn child process have the child link to the parent and the parent monitor the child",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "spawnSupervised",
        "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess(ProcessId,MonitorRef)",
        "package": "distributed-process",
        "partial": "Supervised",
        "signature": "NodeId-\u003eClosure(Process())-\u003eProcess(ProcessId,MonitorRef)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:terminate",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate immediately (throws a ProcessTerminationException)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#terminate",
        "fct-type": "function",
        "title": "terminate"
      },
      "index": {
        "description": "Terminate immediately throws ProcessTerminationException",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "terminate",
        "normalized": "",
        "package": "distributed-process",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:try",
      "description": {
        "fct-descr": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Process a -\u003e Process (Either e a)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#try",
        "fct-type": "function",
        "title": "try"
      },
      "index": {
        "description": "Lift try",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "try",
        "normalized": "Process a-\u003eProcess(Either b a)",
        "package": "distributed-process",
        "partial": "",
        "signature": "Process a-\u003eProcess(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unClosure",
      "description": {
        "fct-descr": "\u003cp\u003eResolve a closure\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Closure a -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unClosure",
        "fct-type": "function",
        "title": "unClosure"
      },
      "index": {
        "description": "Resolve closure",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "unClosure",
        "normalized": "Closure a-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Closure",
        "signature": "Closure a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unStatic",
      "description": {
        "fct-descr": "\u003cp\u003eResolve a static value\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "Static a -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unStatic",
        "fct-type": "function",
        "title": "unStatic"
      },
      "index": {
        "description": "Resolve static value",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "unStatic",
        "normalized": "Static a-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Static",
        "signature": "Static a-\u003eProcess a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unlink",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a link\n\u003c/p\u003e\u003cp\u003eThis is synchronous in the sense that once it returns you are guaranteed\n that no exception will be raised if the remote process dies. However, it is\n asynchronous in the sense that we do not wait for a response from the remote\n node.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unlink",
        "fct-type": "function",
        "title": "unlink"
      },
      "index": {
        "description": "Remove link This is synchronous in the sense that once it returns you are guaranteed that no exception will be raised if the remote process dies However it is asynchronous in the sense that we do not wait for response from the remote node",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "unlink",
        "normalized": "ProcessId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "ProcessId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unlinkNode",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a node link\n\u003c/p\u003e\u003cp\u003eThis has the same synchronous/asynchronous nature as \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unlinkNode",
        "fct-type": "function",
        "title": "unlinkNode"
      },
      "index": {
        "description": "Remove node link This has the same synchronous asynchronous nature as unlink",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "unlinkNode",
        "normalized": "NodeId-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Node",
        "signature": "NodeId-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unlinkPort",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a channel (send port) link\n\u003c/p\u003e\u003cp\u003eThis has the same synchronous/asynchronous nature as \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "SendPort a -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unlinkPort",
        "fct-type": "function",
        "title": "unlinkPort"
      },
      "index": {
        "description": "Remove channel send port link This has the same synchronous asynchronous nature as unlink",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "unlinkPort",
        "normalized": "SendPort a-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Port",
        "signature": "SendPort a-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unmonitor",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a monitor\n\u003c/p\u003e\u003cp\u003eThis has the same synchronous/asynchronous nature as \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "MonitorRef -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unmonitor",
        "fct-type": "function",
        "title": "unmonitor"
      },
      "index": {
        "description": "Remove monitor This has the same synchronous asynchronous nature as unlink",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "unmonitor",
        "normalized": "MonitorRef-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "MonitorRef-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unregister",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a process from the local registry (asynchronous).\n This version will wait until a response is gotten from the\n management process. The name must already be registered.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unregister",
        "fct-type": "function",
        "title": "unregister"
      },
      "index": {
        "description": "Remove process from the local registry asynchronous This version will wait until response is gotten from the management process The name must already be registered",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "unregister",
        "normalized": "String-\u003eProcess()",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unregisterRemoteAsync",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a process from a remote registry (asynchronous).\n\u003c/p\u003e\u003cp\u003eReply wil come in the form of a \u003ccode\u003e\u003ca\u003eRegisterReply\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e\u003cp\u003eSee comments in \u003ccode\u003e\u003ca\u003ewhereisRemoteAsync\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#unregisterRemoteAsync",
        "fct-type": "function",
        "title": "unregisterRemoteAsync"
      },
      "index": {
        "description": "Remove process from remote registry asynchronous Reply wil come in the form of RegisterReply message See comments in whereisRemoteAsync",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "unregisterRemoteAsync",
        "normalized": "NodeId-\u003eString-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote Async",
        "signature": "NodeId-\u003eString-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:whereis",
      "description": {
        "fct-descr": "\u003cp\u003eQuery the local process registry\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "String -\u003e Process (Maybe ProcessId)",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#whereis",
        "fct-type": "function",
        "title": "whereis"
      },
      "index": {
        "description": "Query the local process registry",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "whereis",
        "normalized": "String-\u003eProcess(Maybe ProcessId)",
        "package": "distributed-process",
        "partial": "",
        "signature": "String-\u003eProcess(Maybe ProcessId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:whereisRemoteAsync",
      "description": {
        "fct-descr": "\u003cp\u003eQuery a remote process registry (asynchronous)\n\u003c/p\u003e\u003cp\u003eReply will come in the form of a \u003ccode\u003e\u003ca\u003eWhereIsReply\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e\u003cp\u003eThere is currently no synchronous version of \u003ccode\u003e\u003ca\u003ewhereisRemoteAsync\u003c/a\u003e\u003c/code\u003e: if\n you implement one yourself, be sure to take into account that the remote\n node might die or get disconnect before it can respond (i.e. you should\n use \u003ccode\u003e\u003ca\u003emonitorNode\u003c/a\u003e\u003c/code\u003e and take appropriate action when you receive a\n \u003ccode\u003eNodeMonitorNotification\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "NodeId -\u003e String -\u003e Process ()",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#whereisRemoteAsync",
        "fct-type": "function",
        "title": "whereisRemoteAsync"
      },
      "index": {
        "description": "Query remote process registry asynchronous Reply will come in the form of WhereIsReply message There is currently no synchronous version of whereisRemoteAsync if you implement one yourself be sure to take into account that the remote node might die or get disconnect before it can respond i.e you should use monitorNode and take appropriate action when you receive NodeMonitorNotification",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "whereisRemoteAsync",
        "normalized": "NodeId-\u003eString-\u003eProcess()",
        "package": "distributed-process",
        "partial": "Remote Async",
        "signature": "NodeId-\u003eString-\u003eProcess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:withMonitor",
      "description": {
        "fct-descr": "\u003cp\u003eEstablishes temporary monitoring of another process.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ewithMonitor pid code\u003c/code\u003e sets up monitoring of \u003ccode\u003epid\u003c/code\u003e for the duration\n of \u003ccode\u003ecode\u003c/code\u003e.  Note: although monitoring is no longer active when\n \u003ccode\u003ewithMonitor\u003c/code\u003e returns, there might still be unreceived monitor\n messages in the queue.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Process",
        "fct-package": "distributed-process",
        "fct-signature": "ProcessId -\u003e Process a -\u003e Process a",
        "fct-source": "src/Control-Distributed-Process-Internal-Primitives.html#withMonitor",
        "fct-type": "function",
        "title": "withMonitor"
      },
      "index": {
        "description": "Establishes temporary monitoring of another process withMonitor pid code sets up monitoring of pid for the duration of code Note although monitoring is no longer active when withMonitor returns there might still be unreceived monitor messages in the queue",
        "hierarchy": "Control Distributed Process",
        "module": "Control.Distributed.Process",
        "name": "withMonitor",
        "normalized": "ProcessId-\u003eProcess a-\u003eProcess a",
        "package": "distributed-process",
        "partial": "Monitor",
        "signature": "ProcessId-\u003eProcess a-\u003eProcess a"
      }
    }
  }
]