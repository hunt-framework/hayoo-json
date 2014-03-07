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
        "word": "distributed-process"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eTowards Haskell in the Cloud\u003c/em\u003e (Epstein et al., Haskell Symposium 2011)\n proposes a new type construct called \u003ccode\u003estatic\u003c/code\u003e that characterizes values that\n are known statically. Cloud Haskell uses the\n \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e implementation from\n \u003ca\u003eControl.Distributed.Static\u003c/a\u003e. That module comes with its own extensive\n documentation, which you should read if you want to know the details.  Here\n we explain the Template Haskell support only.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eStatic values\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eGiven a top-level (possibly polymorphic, but unqualified) definition\n\u003c/p\u003e\u003cpre\u003e f :: forall a1 .. an. T\n f = ...\n\u003c/pre\u003e\u003cp\u003eyou can use a Template Haskell splice to create a static version of \u003ccode\u003ef\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e $(mkStatic 'f) :: forall a1 .. an. (Typeable a1, .., Typeable an) =\u003e Static T\n\u003c/pre\u003e\u003cp\u003eEvery module that you write that contains calls to \u003ccode\u003e\u003ca\u003emkStatic\u003c/a\u003e\u003c/code\u003e needs to\n have a call to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e remotable [ 'f, 'g, ... ]\n\u003c/pre\u003e\u003cp\u003ewhere you must pass every function (or other value) that you pass as an\n argument to \u003ccode\u003e\u003ca\u003emkStatic\u003c/a\u003e\u003c/code\u003e. The call to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e will create a definition\n\u003c/p\u003e\u003cpre\u003e __remoteTable :: RemoteTable -\u003e RemoteTable\n\u003c/pre\u003e\u003cp\u003ewhich can be used to construct the \u003ccode\u003eRemoteTable\u003c/code\u003e used to initialize\n Cloud Haskell. You should have (at most) one call to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e per module,\n and compose all created functions when initializing Cloud Haskell:\n\u003c/p\u003e\u003cpre\u003e let rtable :: RemoteTable\n     rtable = M1.__remoteTable\n            . M2.__remoteTable\n            . ...\n            . Mn.__remoteTable\n            $ initRemoteTable\n\u003c/pre\u003e\u003cp\u003eNOTE: If you get a type error from ghc along these lines\n\u003c/p\u003e\u003cpre\u003e  The exact Name `a_a30k' is not in scope\n       Probable cause: you used a unique name (NameU) in Template Haskell but did not bind it\n\u003c/pre\u003e\u003cp\u003ethen you need to enable the \u003ccode\u003eScopedTypeVariables\u003c/code\u003e language extension.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eStatic serialization dictionaries\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSome Cloud Haskell primitives require static serialization dictionaries (**):\n\u003c/p\u003e\u003cpre\u003e call :: Serializable a =\u003e Static (SerializableDict a) -\u003e NodeId -\u003e Closure (Process a) -\u003e Process a\n\u003c/pre\u003e\u003cp\u003eGiven some serializable type \u003ccode\u003eT\u003c/code\u003e you can define\n\u003c/p\u003e\u003cpre\u003e sdictT :: SerializableDict T\n sdictT = SerializableDict\n\u003c/pre\u003e\u003cp\u003eand then have\n\u003c/p\u003e\u003cpre\u003e $(mkStatic 'sdictT) :: Static (SerializableDict T)\n\u003c/pre\u003e\u003cp\u003eHowever, since these dictionaries are so frequently required Cloud Haskell\n provides special support for them.  When you call \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e on a\n \u003cem\u003emonomorphic\u003c/em\u003e function \u003ccode\u003ef :: T1 -\u003e T2\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e remotable ['f]\n\u003c/pre\u003e\u003cp\u003ethen a serialization dictionary is automatically created for you, which you\n can access with\n\u003c/p\u003e\u003cpre\u003e $(functionSDict 'f) :: Static (SerializableDict T1)\n\u003c/pre\u003e\u003cp\u003eIn addition, if \u003ccode\u003ef :: T1 -\u003e Process T2\u003c/code\u003e, then a second dictionary is created\n\u003c/p\u003e\u003cpre\u003e $(functionTDict 'f) :: Static (SerializableDict T2)\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eClosures\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSuppose you have a process\n\u003c/p\u003e\u003cpre\u003e isPrime :: Integer -\u003e Process Bool\n\u003c/pre\u003e\u003cp\u003eThen\n\u003c/p\u003e\u003cpre\u003e $(mkClosure 'isPrime) :: Integer -\u003e Closure (Process Bool)\n\u003c/pre\u003e\u003cp\u003ewhich you can then \u003ccode\u003ecall\u003c/code\u003e, for example, to have a remote node check if\n a number is prime.\n\u003c/p\u003e\u003cp\u003eIn general, if you have a \u003cem\u003emonomorphic\u003c/em\u003e function\n\u003c/p\u003e\u003cpre\u003e f :: T1 -\u003e T2\n\u003c/pre\u003e\u003cp\u003ethen\n\u003c/p\u003e\u003cpre\u003e $(mkClosure 'f) :: T1 -\u003e Closure T2\n\u003c/pre\u003e\u003cp\u003eprovided that \u003ccode\u003eT1\u003c/code\u003e is serializable (*) (remember to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e(You can also create closures manually--see the documentation of\n \u003ca\u003eControl.Distributed.Static\u003c/a\u003e for examples.)\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eExample\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eHere is a small self-contained example that uses closures and serialization\n dictionaries. It makes use of the Control.Distributed.Process.SimpleLocalnet\n Cloud Haskell backend.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import System.Environment (getArgs)\n import Control.Distributed.Process\n import Control.Distributed.Process.Closure\n import Control.Distributed.Process.Backend.SimpleLocalnet\n import Control.Distributed.Process.Node (initRemoteTable)\n\n isPrime :: Integer -\u003e Process Bool\n isPrime n = return . (n `elem`) . takeWhile (\u003c= n) . sieve $ [2..]\n   where\n     sieve :: [Integer] -\u003e [Integer]\n     sieve (p : xs) = p : sieve [x | x \u003c- xs, x `mod` p \u003e 0]\n\n remotable ['isPrime]\n\n master :: [NodeId] -\u003e Process ()\n master [] = liftIO $ putStrLn \"no slaves\"\n master (slave:_) = do\n   isPrime79 \u003c- call $(functionTDict 'isPrime) slave ($(mkClosure 'isPrime) (79 :: Integer))\n   liftIO $ print isPrime79\n\n main :: IO ()\n main = do\n   args \u003c- getArgs\n   case args of\n     [\"master\", host, port] -\u003e do\n       backend \u003c- initializeBackend host port rtable\n       startMaster backend master\n     [\"slave\", host, port] -\u003e do\n       backend \u003c- initializeBackend host port rtable\n       startSlave backend\n   where\n     rtable :: RemoteTable\n     rtable = __remoteTable initRemoteTable\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eNotes\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e(*) If \u003ccode\u003eT1\u003c/code\u003e is not serializable you will get a type error in the generated\n     code. Unfortunately, the Template Haskell infrastructure cannot check\n     a priori if \u003ccode\u003eT1\u003c/code\u003e is serializable or not due to a bug in the Template\n     Haskell libraries (\u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/7066\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003e(**) Even though \u003ccode\u003ecall\u003c/code\u003e is passed an explicit serialization\n      dictionary, we still need the \u003ccode\u003eSerializable\u003c/code\u003e constraint because\n      \u003ccode\u003eStatic\u003c/code\u003e is not the \u003cem\u003etrue\u003c/em\u003e static. If it was, we could \u003ccode\u003eunstatic\u003c/code\u003e\n      the dictionary and pattern match on it to bring the \u003ccode\u003eTypeable\u003c/code\u003e\n      instance into scope, but unless proper \u003ccode\u003estatic\u003c/code\u003e support is added to\n      ghc we need both the type class argument and the explicit dictionary.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Closure",
          "name": "Closure",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Closure.html",
          "type": "module"
        },
        "index": {
          "description": "Towards Haskell in the Cloud Epstein et al Haskell Symposium proposes new type construct called static that characterizes values that are known statically Cloud Haskell uses the Static implementation from Control.Distributed.Static That module comes with its own extensive documentation which you should read if you want to know the details Here we explain the Template Haskell support only Static values Given top-level possibly polymorphic but unqualified definition forall a1 an you can use Template Haskell splice to create static version of mkStatic forall a1 an Typeable a1 Typeable an Static Every module that you write that contains calls to mkStatic needs to have call to remotable remotable where you must pass every function or other value that you pass as an argument to mkStatic The call to remotable will create definition remoteTable RemoteTable RemoteTable which can be used to construct the RemoteTable used to initialize Cloud Haskell You should have at most one call to remotable per module and compose all created functions when initializing Cloud Haskell let rtable RemoteTable rtable M1 remoteTable M2 remoteTable Mn remoteTable initRemoteTable NOTE If you get type error from ghc along these lines The exact Name a30k is not in scope Probable cause you used unique name NameU in Template Haskell but did not bind it then you need to enable the ScopedTypeVariables language extension Static serialization dictionaries Some Cloud Haskell primitives require static serialization dictionaries call Serializable Static SerializableDict NodeId Closure Process Process Given some serializable type you can define sdictT SerializableDict sdictT SerializableDict and then have mkStatic sdictT Static SerializableDict However since these dictionaries are so frequently required Cloud Haskell provides special support for them When you call remotable on monomorphic function T1 T2 remotable then serialization dictionary is automatically created for you which you can access with functionSDict Static SerializableDict T1 In addition if T1 Process T2 then second dictionary is created functionTDict Static SerializableDict T2 Closures Suppose you have process isPrime Integer Process Bool Then mkClosure isPrime Integer Closure Process Bool which you can then call for example to have remote node check if number is prime In general if you have monomorphic function T1 T2 then mkClosure T1 Closure T2 provided that T1 is serializable remember to pass to remotable You can also create closures manually--see the documentation of Control.Distributed.Static for examples Example Here is small self-contained example that uses closures and serialization dictionaries It makes use of the Control.Distributed.Process.SimpleLocalnet Cloud Haskell backend LANGUAGE TemplateHaskell import System.Environment getArgs import Control.Distributed.Process import Control.Distributed.Process.Closure import Control.Distributed.Process.Backend.SimpleLocalnet import Control.Distributed.Process.Node initRemoteTable isPrime Integer Process Bool isPrime return elem takeWhile sieve where sieve Integer Integer sieve xs sieve xs mod remotable isPrime master NodeId Process master liftIO putStrLn no slaves master slave do isPrime79 call functionTDict isPrime slave mkClosure isPrime Integer liftIO print isPrime79 main IO main do args getArgs case args of master host port do backend initializeBackend host port rtable startMaster backend master slave host port do backend initializeBackend host port rtable startSlave backend where rtable RemoteTable rtable remoteTable initRemoteTable Notes If T1 is not serializable you will get type error in the generated code Unfortunately the Template Haskell infrastructure cannot check priori if T1 is serializable or not due to bug in the Template Haskell libraries http hackage.haskell.org trac ghc ticket Even though call is passed an explicit serialization dictionary we still need the Serializable constraint because Static is not the true static If it was we could unstatic the dictionary and pattern match on it to bring the Typeable instance into scope but unless proper static support is added to ghc we need both the type class argument and the explicit dictionary",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "Closure",
          "package": "distributed-process",
          "partial": "Closure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCP a b\u003c/code\u003e is a process with input of type \u003ccode\u003ea\u003c/code\u003e and output of type \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Closure",
          "name": "CP",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#CP",
          "type": "type"
        },
        "index": {
          "description": "CP is process with input of type and output of type",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "CP",
          "package": "distributed-process",
          "partial": "CP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#t:CP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReification of \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e (see \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Closure",
          "name": "SerializableDict",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Serializable.html#SerializableDict",
          "type": "data"
        },
        "index": {
          "description": "Reification of Serializable see Control.Distributed.Process.Closure",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "SerializableDict",
          "package": "distributed-process",
          "partial": "Serializable Dict",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#t:SerializableDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Serializable\"]",
          "name": "SerializableDict",
          "package": "distributed-process",
          "signature": "SerializableDict a",
          "source": "src/Control-Distributed-Process-Serializable.html#SerializableDict",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:SerializableDict\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:SerializableDict\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "SerializableDict",
          "package": "distributed-process",
          "partial": "Serializable Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:SerializableDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Not quite the) \u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of (\u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "bindCP",
          "package": "distributed-process",
          "signature": "Closure (Process a) -\u003e CP a b -\u003e Closure (Process b)",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#bindCP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:bindCP\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:bindCP\"]"
        },
        "index": {
          "description": "Not quite the CP version of",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "bindCP",
          "normalized": "Closure(Process a)-\u003eCP a b-\u003eClosure(Process b)",
          "package": "distributed-process",
          "partial": "CP",
          "signature": "Closure(Process a)-\u003eCP a b-\u003eClosure(Process b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:bindCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "cpExpect",
          "package": "distributed-process",
          "signature": "Static (SerializableDict a) -\u003e Closure (Process a)",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpExpect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpExpect\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpExpect\"]"
        },
        "index": {
          "description": "CP version of expect",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "cpExpect",
          "normalized": "Static(SerializableDict a)-\u003eClosure(Process a)",
          "package": "distributed-process",
          "partial": "Expect",
          "signature": "Static(SerializableDict a)-\u003eClosure(Process a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpExpect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "cpLink",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Closure (Process ())",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpLink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpLink\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpLink\"]"
        },
        "index": {
          "description": "CP version of link",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "cpLink",
          "normalized": "ProcessId-\u003eClosure(Process())",
          "package": "distributed-process",
          "partial": "Link",
          "signature": "ProcessId-\u003eClosure(Process())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewChan\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "cpNewChan",
          "package": "distributed-process",
          "signature": "Static (SerializableDict a) -\u003e Closure (Process (SendPort a, ReceivePort a))",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpNewChan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpNewChan\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpNewChan\"]"
        },
        "index": {
          "description": "CP version of newChan",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "cpNewChan",
          "normalized": "Static(SerializableDict a)-\u003eClosure(Process(SendPort a,ReceivePort a))",
          "package": "distributed-process",
          "partial": "New Chan",
          "signature": "Static(SerializableDict a)-\u003eClosure(Process(SendPort a,ReceivePort a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpNewChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "cpSend",
          "package": "distributed-process",
          "signature": "Static (SerializableDict a) -\u003e ProcessId -\u003e CP a ()",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpSend",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpSend\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpSend\"]"
        },
        "index": {
          "description": "CP version of send",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "cpSend",
          "normalized": "Static(SerializableDict a)-\u003eProcessId-\u003eCP a()",
          "package": "distributed-process",
          "partial": "Send",
          "signature": "Static(SerializableDict a)-\u003eProcessId-\u003eCP a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "cpUnlink",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Closure (Process ())",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpUnlink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpUnlink\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpUnlink\"]"
        },
        "index": {
          "description": "CP version of unlink",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "cpUnlink",
          "normalized": "ProcessId-\u003eClosure(Process())",
          "package": "distributed-process",
          "partial": "Unlink",
          "signature": "ProcessId-\u003eClosure(Process())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:cpUnlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003ef : T1 -\u003e T2\u003c/code\u003e is a monomorphic function\n then \u003ccode\u003e$(functionSDict 'f) :: Static (SerializableDict T1)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe sure to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.TH\"]",
          "name": "functionSDict",
          "package": "distributed-process",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Control-Distributed-Process-Internal-Closure-TH.html#functionSDict",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:functionSDict\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:functionSDict\"]"
        },
        "index": {
          "description": "If T1 T2 is monomorphic function then functionSDict Static SerializableDict T1 Be sure to pass to remotable",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "functionSDict",
          "normalized": "Name-\u003eQ Exp",
          "package": "distributed-process",
          "partial": "SDict",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:functionSDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003ef : T1 -\u003e Process T2\u003c/code\u003e is a monomorphic function\n then \u003ccode\u003e$(functionTDict 'f) :: Static (SerializableDict T2)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBe sure to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.TH\"]",
          "name": "functionTDict",
          "package": "distributed-process",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Control-Distributed-Process-Internal-Closure-TH.html#functionTDict",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:functionTDict\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:functionTDict\"]"
        },
        "index": {
          "description": "If T1 Process T2 is monomorphic function then functionTDict Static SerializableDict T2 Be sure to pass to remotable",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "functionTDict",
          "normalized": "Name-\u003eQ Exp",
          "package": "distributed-process",
          "partial": "TDict",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:functionTDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "idCP",
          "package": "distributed-process",
          "signature": "CP a a",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#idCP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:idCP\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:idCP\"]"
        },
        "index": {
          "description": "CP version of id",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "idCP",
          "package": "distributed-process",
          "partial": "CP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:idCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.TH\"]",
          "name": "mkClosure",
          "package": "distributed-process",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Control-Distributed-Process-Internal-Closure-TH.html#mkClosure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:mkClosure\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:mkClosure\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "mkClosure",
          "normalized": "Name-\u003eQ Exp",
          "package": "distributed-process",
          "partial": "Closure",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:mkClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a static value.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ef : forall a1 .. an. T\u003c/code\u003e\n then \u003ccode\u003e$(mkStatic 'f) :: forall a1 .. an. Static T\u003c/code\u003e.\n Be sure to pass \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.TH\"]",
          "name": "mkStatic",
          "package": "distributed-process",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Control-Distributed-Process-Internal-Closure-TH.html#mkStatic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:mkStatic\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:mkStatic\"]"
        },
        "index": {
          "description": "Construct static value If forall a1 an then mkStatic forall a1 an Static Be sure to pass to remotable",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "mkStatic",
          "normalized": "Name-\u003eQ Exp",
          "package": "distributed-process",
          "partial": "Static",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:mkStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a \u003ccode\u003eClosure\u003c/code\u003e from a static function.  This is useful for\n making a closure for a top-level \u003ccode\u003eProcess ()\u003c/code\u003e function, because\n using \u003ccode\u003e\u003ca\u003emkClosure\u003c/a\u003e\u003c/code\u003e would require adding a dummy \u003ccode\u003e()\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.TH\"]",
          "name": "mkStaticClosure",
          "package": "distributed-process",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Control-Distributed-Process-Internal-Closure-TH.html#mkStaticClosure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:mkStaticClosure\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:mkStaticClosure\"]"
        },
        "index": {
          "description": "Make Closure from static function This is useful for making closure for top-level Process function because using mkClosure would require adding dummy argument",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "mkStaticClosure",
          "normalized": "Name-\u003eQ Exp",
          "package": "distributed-process",
          "partial": "Static Closure",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:mkStaticClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the closure, decoder, and metadata definitions for the given list\n of functions\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.TH\"]",
          "name": "remotable",
          "package": "distributed-process",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Control-Distributed-Process-Internal-Closure-TH.html#remotable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:remotable\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:remotable\"]"
        },
        "index": {
          "description": "Create the closure decoder and metadata definitions for the given list of functions",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "remotable",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "distributed-process",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:remotable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e, but parameterized by the declaration of a function\n instead of the function name. So where for \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e you'd do\n\u003c/p\u003e\u003cpre\u003e f :: T1 -\u003e T2\n f = ...\n\n remotable ['f]\n\u003c/pre\u003e\u003cp\u003ewith \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e you would instead do\n\u003c/p\u003e\u003cpre\u003e remotableDecl [\n    [d| f :: T1 -\u003e T2 ;\n        f = ...\n      |]\n  ]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e creates the function specified as well as the various\n dictionaries and static versions that \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e also creates.\n \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e is sometimes necessary when you want to refer to, say,\n \u003ccode\u003e$(mkClosure 'f)\u003c/code\u003e within the definition of \u003ccode\u003ef\u003c/code\u003e itself.\n\u003c/p\u003e\u003cp\u003eNOTE: \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e creates \u003ccode\u003e__remoteTableDecl\u003c/code\u003e instead of \u003ccode\u003e__remoteTable\u003c/code\u003e\n so that you can use both \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eremotableDecl\u003c/a\u003e\u003c/code\u003e within the same\n module.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.TH\"]",
          "name": "remotableDecl",
          "package": "distributed-process",
          "signature": "[Q [Dec]] -\u003e Q [Dec]",
          "source": "src/Control-Distributed-Process-Internal-Closure-TH.html#remotableDecl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:remotableDecl\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#v:remotableDecl\"]"
        },
        "index": {
          "description": "Like remotable but parameterized by the declaration of function instead of the function name So where for remotable you do T1 T2 remotable with remotableDecl you would instead do remotableDecl T1 T2 remotableDecl creates the function specified as well as the various dictionaries and static versions that remotable also creates remotableDecl is sometimes necessary when you want to refer to say mkClosure within the definition of itself NOTE remotableDecl creates remoteTableDecl instead of remoteTable so that you can use both remotable and remotableDecl within the same module",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "remotableDecl",
          "normalized": "[Q[Dec]]-\u003eQ[Dec]",
          "package": "distributed-process",
          "partial": "Decl",
          "signature": "[Q[Dec]]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:remotableDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "returnCP",
          "package": "distributed-process",
          "signature": "Static (SerializableDict a) -\u003e a -\u003e Closure (Process a)",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#returnCP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:returnCP\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:returnCP\"]"
        },
        "index": {
          "description": "CP version of return",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "returnCP",
          "normalized": "Static(SerializableDict a)-\u003ea-\u003eClosure(Process a)",
          "package": "distributed-process",
          "partial": "CP",
          "signature": "Static(SerializableDict a)-\u003ea-\u003eClosure(Process a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:returnCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialization dictionary for \u003ccode\u003e\u003ca\u003eProcessId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "sdictProcessId",
          "package": "distributed-process",
          "signature": "Static (SerializableDict ProcessId)",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sdictProcessId",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:sdictProcessId\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:sdictProcessId\"]"
        },
        "index": {
          "description": "Serialization dictionary for ProcessId",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "sdictProcessId",
          "package": "distributed-process",
          "partial": "Process Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:sdictProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialization dictionary for \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "sdictSendPort",
          "package": "distributed-process",
          "signature": "Static (SerializableDict a) -\u003e Static (SerializableDict (SendPort a))",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sdictSendPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:sdictSendPort\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:sdictSendPort\"]"
        },
        "index": {
          "description": "Serialization dictionary for SendPort",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "sdictSendPort",
          "normalized": "Static(SerializableDict a)-\u003eStatic(SerializableDict(SendPort a))",
          "package": "distributed-process",
          "partial": "Send Port",
          "signature": "Static(SerializableDict a)-\u003eStatic(SerializableDict(SendPort a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:sdictSendPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialization dictionary for '()'\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "sdictUnit",
          "package": "distributed-process",
          "signature": "Static (SerializableDict ())",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sdictUnit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:sdictUnit\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:sdictUnit\"]"
        },
        "index": {
          "description": "Serialization dictionary for",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "sdictUnit",
          "normalized": "Static(SerializableDict())",
          "package": "distributed-process",
          "partial": "Unit",
          "signature": "Static(SerializableDict())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:sdictUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of (\u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "seqCP",
          "package": "distributed-process",
          "signature": "Closure (Process a) -\u003e Closure (Process b) -\u003e Closure (Process b)",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#seqCP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:seqCP\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:seqCP\"]"
        },
        "index": {
          "description": "CP version of",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "seqCP",
          "normalized": "Closure(Process a)-\u003eClosure(Process b)-\u003eClosure(Process b)",
          "package": "distributed-process",
          "partial": "CP",
          "signature": "Closure(Process a)-\u003eClosure(Process b)-\u003eClosure(Process b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:seqCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of (\u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "splitCP",
          "package": "distributed-process",
          "signature": "CP a c -\u003e CP b d -\u003e CP (a, b) (c, d)",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#splitCP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:splitCP\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:splitCP\"]"
        },
        "index": {
          "description": "CP version of",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "splitCP",
          "normalized": "CP a b-\u003eCP c d-\u003eCP(a,c)(b,d)",
          "package": "distributed-process",
          "partial": "CP",
          "signature": "CP a c-\u003eCP b d-\u003eCP(a,b)(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:splitCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatic decoder, given a static serialization dictionary.\n\u003c/p\u003e\u003cp\u003eSee module documentation of \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e for an\n example.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Closure\",\"Control.Distributed.Process.Internal.Closure.BuiltIn\"]",
          "name": "staticDecode",
          "package": "distributed-process",
          "signature": "Static (SerializableDict a) -\u003e Static (ByteString -\u003e a)",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#staticDecode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:staticDecode\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:staticDecode\"]"
        },
        "index": {
          "description": "Static decoder given static serialization dictionary See module documentation of Control.Distributed.Process.Closure for an example",
          "hierarchy": "Control Distributed Process Closure",
          "module": "Control.Distributed.Process.Closure",
          "name": "staticDecode",
          "normalized": "Static(SerializableDict a)-\u003eStatic(ByteString-\u003ea)",
          "package": "distributed-process",
          "partial": "Decode",
          "signature": "Static(SerializableDict a)-\u003eStatic(ByteString-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Closure.html#v:staticDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent queue for single reader, single writer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "CQueue",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html",
          "type": "module"
        },
        "index": {
          "description": "Concurrent queue for single reader single writer",
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "CQueue",
          "package": "distributed-process",
          "partial": "CQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "BlockSpec",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#BlockSpec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "BlockSpec",
          "package": "distributed-process",
          "partial": "Block Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#t:BlockSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "CQueue",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#CQueue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "CQueue",
          "package": "distributed-process",
          "partial": "CQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#t:CQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "MatchOn",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#MatchOn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "MatchOn",
          "package": "distributed-process",
          "partial": "Match On",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#t:MatchOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "Blocking",
          "package": "distributed-process",
          "signature": "Blocking",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#BlockSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "Blocking",
          "package": "distributed-process",
          "partial": "Blocking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:Blocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "MatchChan",
          "package": "distributed-process",
          "signature": "MatchChan (STM a)",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#MatchOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "MatchChan",
          "package": "distributed-process",
          "partial": "Match Chan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:MatchChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "MatchMsg",
          "package": "distributed-process",
          "signature": "MatchMsg (m -\u003e Maybe a)",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#MatchOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "MatchMsg",
          "normalized": "MatchMsg(a-\u003eMaybe b)",
          "package": "distributed-process",
          "partial": "Match Msg",
          "signature": "MatchMsg(m-\u003eMaybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:MatchMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "NonBlocking",
          "package": "distributed-process",
          "signature": "NonBlocking",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#BlockSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "NonBlocking",
          "package": "distributed-process",
          "partial": "Non Blocking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:NonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "Timeout",
          "package": "distributed-process",
          "signature": "Timeout Int",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#BlockSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "Timeout",
          "package": "distributed-process",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDequeue an element\n\u003c/p\u003e\u003cp\u003eThe timeout (if any) is applied only to waiting for incoming messages, not\n to checking messages that have already arrived\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "dequeue",
          "package": "distributed-process",
          "signature": "CQueue m-\u003e BlockSpec-\u003e [MatchOn m a]-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Dequeue an element The timeout if any is applied only to waiting for incoming messages not to checking messages that have already arrived",
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "dequeue",
          "normalized": "CQueue a-\u003eBlockSpec-\u003e[MatchOn a b]-\u003eIO(Maybe b)",
          "package": "distributed-process",
          "signature": "CQueue m-\u003eBlockSpec-\u003e[MatchOn m a]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:dequeue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnqueue an element\n\u003c/p\u003e\u003cp\u003eEnqueue is strict.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "enqueue",
          "package": "distributed-process",
          "signature": "CQueue a -\u003e a -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#enqueue",
          "type": "function"
        },
        "index": {
          "description": "Enqueue an element Enqueue is strict",
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "enqueue",
          "normalized": "CQueue a-\u003ea-\u003eIO()",
          "package": "distributed-process",
          "signature": "CQueue a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:enqueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeak reference to a CQueue\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "mkWeakCQueue",
          "package": "distributed-process",
          "signature": "CQueue a -\u003e IO () -\u003e IO (Weak (CQueue a))",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#mkWeakCQueue",
          "type": "function"
        },
        "index": {
          "description": "Weak reference to CQueue",
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "mkWeakCQueue",
          "normalized": "CQueue a-\u003eIO()-\u003eIO(Weak(CQueue a))",
          "package": "distributed-process",
          "partial": "Weak CQueue",
          "signature": "CQueue a-\u003eIO()-\u003eIO(Weak(CQueue a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:mkWeakCQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "newCQueue",
          "package": "distributed-process",
          "signature": "IO (CQueue a)",
          "source": "src/Control-Distributed-Process-Internal-CQueue.html#newCQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal CQueue",
          "module": "Control.Distributed.Process.Internal.CQueue",
          "name": "newCQueue",
          "package": "distributed-process",
          "partial": "CQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-CQueue.html#v:newCQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "BuiltIn",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "BuiltIn",
          "package": "distributed-process",
          "partial": "Built In",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCP a b\u003c/code\u003e is a process with input of type \u003ccode\u003ea\u003c/code\u003e and output of type \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "CP",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#CP",
          "type": "type"
        },
        "index": {
          "description": "CP is process with input of type and output of type",
          "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "CP",
          "package": "distributed-process",
          "partial": "CP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#t:CP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCP\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003edelay\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "cpDelay",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Closure (Process ()) -\u003e Closure (Process ())",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#cpDelay",
          "type": "function"
        },
        "index": {
          "description": "CP version of delay",
          "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "cpDelay",
          "normalized": "ProcessId-\u003eClosure(Process())-\u003eClosure(Process())",
          "package": "distributed-process",
          "partial": "Delay",
          "signature": "ProcessId-\u003eClosure(Process())-\u003eClosure(Process())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:cpDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "remoteTable",
          "package": "distributed-process",
          "signature": "RemoteTable -\u003e RemoteTable",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#remoteTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "remoteTable",
          "normalized": "RemoteTable-\u003eRemoteTable",
          "package": "distributed-process",
          "partial": "Table",
          "signature": "RemoteTable-\u003eRemoteTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:remoteTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "sndStatic",
          "package": "distributed-process",
          "signature": "Static ((a, b) -\u003e b)",
          "source": "src/Control-Distributed-Process-Internal-Closure-BuiltIn.html#sndStatic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Closure BuiltIn",
          "module": "Control.Distributed.Process.Internal.Closure.BuiltIn",
          "name": "sndStatic",
          "normalized": "Static((a,b)-\u003eb)",
          "package": "distributed-process",
          "partial": "Static",
          "signature": "Static((a,b)-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-BuiltIn.html#v:sndStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Internal.Closure.TH",
          "name": "TH",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Closure-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Template Haskell support",
          "hierarchy": "Control Distributed Process Internal Closure TH",
          "module": "Control.Distributed.Process.Internal.Closure.TH",
          "name": "TH",
          "package": "distributed-process",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Closure-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "Messaging",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Messaging.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Messaging",
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "Messaging",
          "package": "distributed-process",
          "partial": "Messaging",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "closeImplicitReconnections",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e Identifier -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-Messaging.html#closeImplicitReconnections",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Messaging",
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "closeImplicitReconnections",
          "normalized": "LocalNode-\u003eIdentifier-\u003eIO()",
          "package": "distributed-process",
          "partial": "Implicit Reconnections",
          "signature": "LocalNode-\u003eIdentifier-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:closeImplicitReconnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "disconnect",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e Identifier -\u003e Identifier -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-Messaging.html#disconnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Messaging",
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "disconnect",
          "normalized": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eIO()",
          "package": "distributed-process",
          "signature": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea \u003ccode\u003e\u003ca\u003eimpliesDeathOf\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e is true if the death of \u003ccode\u003ea\u003c/code\u003e (for instance, a node)\n implies the death of \u003ccode\u003eb\u003c/code\u003e (for instance, a process on that node)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "impliesDeathOf",
          "package": "distributed-process",
          "signature": "Identifier -\u003e Identifier -\u003e Bool",
          "source": "src/Control-Distributed-Process-Internal-Messaging.html#impliesDeathOf",
          "type": "function"
        },
        "index": {
          "description": "impliesDeathOf is true if the death of for instance node implies the death of for instance process on that node",
          "hierarchy": "Control Distributed Process Internal Messaging",
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "impliesDeathOf",
          "normalized": "Identifier-\u003eIdentifier-\u003eBool",
          "package": "distributed-process",
          "partial": "Death Of",
          "signature": "Identifier-\u003eIdentifier-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:impliesDeathOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "sendBinary",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e Identifier -\u003e Identifier -\u003e ImplicitReconnect -\u003e a -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-Messaging.html#sendBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Messaging",
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "sendBinary",
          "normalized": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003ea-\u003eIO()",
          "package": "distributed-process",
          "partial": "Binary",
          "signature": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:sendBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "sendMessage",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e Identifier -\u003e Identifier -\u003e ImplicitReconnect -\u003e a -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-Messaging.html#sendMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Messaging",
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "sendMessage",
          "normalized": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003ea-\u003eIO()",
          "package": "distributed-process",
          "partial": "Message",
          "signature": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:sendMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "sendPayload",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e Identifier -\u003e Identifier -\u003e ImplicitReconnect -\u003e [ByteString] -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-Messaging.html#sendPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Messaging",
          "module": "Control.Distributed.Process.Internal.Messaging",
          "name": "sendPayload",
          "normalized": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003e[ByteString]-\u003eIO()",
          "package": "distributed-process",
          "partial": "Payload",
          "signature": "LocalNode-\u003eIdentifier-\u003eIdentifier-\u003eImplicitReconnect-\u003e[ByteString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Messaging.html#v:sendPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCloud Haskell primitives\n\u003c/p\u003e\u003cp\u003eWe define these in a separate module so that we don't have to rely on\n the closure combinators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "Primitives",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html",
          "type": "module"
        },
        "index": {
          "description": "Cloud Haskell primitives We define these in separate module so that we don have to rely on the closure combinators",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "Primitives",
          "package": "distributed-process",
          "partial": "Primitives",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a received message and provides two basic operations on it.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "AbstractMessage",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
          "type": "data"
        },
        "index": {
          "description": "Represents received message and provides two basic operations on it",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "AbstractMessage",
          "package": "distributed-process",
          "partial": "Abstract Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:AbstractMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou need this when using \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "Handler",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "You need this when using catches",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "Handler",
          "package": "distributed-process",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque type used in \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereceiveTimeout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "Match",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#Match",
          "type": "data"
        },
        "index": {
          "description": "Opaque type used in receiveWait and receiveTimeout",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "Match",
          "package": "distributed-process",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal exception thrown indirectly by \u003ccode\u003eexit\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "ProcessExitException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessExitException",
          "type": "data"
        },
        "index": {
          "description": "Internal exception thrown indirectly by exit",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "ProcessExitException",
          "package": "distributed-process",
          "partial": "Process Exit Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:ProcessExitException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide information about a running process\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "ProcessInfo",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
          "type": "data"
        },
        "index": {
          "description": "Provide information about running process",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "ProcessInfo",
          "package": "distributed-process",
          "partial": "Process Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:ProcessInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003eterminate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "ProcessTerminationException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#ProcessTerminationException",
          "type": "data"
        },
        "index": {
          "description": "Thrown by terminate",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "ProcessTerminationException",
          "package": "distributed-process",
          "partial": "Process Termination Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#t:ProcessTerminationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "AbstractMessage",
          "package": "distributed-process",
          "signature": "AbstractMessage",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:AbstractMessage\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:AbstractMessage\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "AbstractMessage",
          "package": "distributed-process",
          "partial": "Abstract Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:AbstractMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "Handler",
          "package": "distributed-process",
          "signature": "Handler (e -\u003e Process a)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#Handler",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:Handler\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:Handler\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "Handler",
          "normalized": "Handler(a-\u003eProcess b)",
          "package": "distributed-process",
          "partial": "Handler",
          "signature": "Handler(e-\u003eProcess a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "ProcessInfo",
          "package": "distributed-process",
          "signature": "ProcessInfo",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:ProcessInfo\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessInfo\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessInfo\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "ProcessInfo",
          "package": "distributed-process",
          "partial": "Process Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:ProcessInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "ProcessTerminationException",
          "package": "distributed-process",
          "signature": "ProcessTerminationException",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#ProcessTerminationException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:ProcessTerminationException\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessTerminationException\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "ProcessTerminationException",
          "package": "distributed-process",
          "partial": "Process Termination Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:ProcessTerminationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "bracket",
          "package": "distributed-process",
          "signature": "Process a -\u003e (a -\u003e Process b) -\u003e (a -\u003e Process c) -\u003e Process c",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#bracket",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:bracket\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:bracket\"]"
        },
        "index": {
          "description": "Lift bracket",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "bracket",
          "normalized": "Process a-\u003e(a-\u003eProcess b)-\u003e(a-\u003eProcess c)-\u003eProcess c",
          "package": "distributed-process",
          "signature": "Process a-\u003e(a-\u003eProcess b)-\u003e(a-\u003eProcess c)-\u003eProcess c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "bracket_",
          "package": "distributed-process",
          "signature": "Process a -\u003e Process b -\u003e Process c -\u003e Process c",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#bracket_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:bracket_\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:bracket_\"]"
        },
        "index": {
          "description": "Lift bracket",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "bracket_",
          "normalized": "Process a-\u003eProcess b-\u003eProcess c-\u003eProcess c",
          "package": "distributed-process",
          "signature": "Process a-\u003eProcess b-\u003eProcess c-\u003eProcess c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "catch",
          "package": "distributed-process",
          "signature": "Process a -\u003e (e -\u003e Process a) -\u003e Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#catch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catch\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:catch\"]"
        },
        "index": {
          "description": "Lift catch",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "catch",
          "normalized": "Process a-\u003e(b-\u003eProcess a)-\u003eProcess a",
          "package": "distributed-process",
          "signature": "Process a-\u003e(e-\u003eProcess a)-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatches \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e. The handler will not be applied unless its\n type matches the encoded data stored in the exception (see the \u003cem\u003ereason\u003c/em\u003e\n argument given to the \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e primitive). If the handler cannot be applied,\n the exception will be re-thrown.\n\u003c/p\u003e\u003cp\u003eTo handle \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e without regard for \u003cem\u003ereason\u003c/em\u003e, see \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n To handle multiple \u003cem\u003ereasons\u003c/em\u003e of differing types, see \u003ccode\u003e\u003ca\u003ecatchesExit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "catchExit",
          "package": "distributed-process",
          "signature": "Process b -\u003e (ProcessId -\u003e a -\u003e Process b) -\u003e Process b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#catchExit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catchExit\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:catchExit\"]"
        },
        "index": {
          "description": "Catches ProcessExitException The handler will not be applied unless its type matches the encoded data stored in the exception see the reason argument given to the exit primitive If the handler cannot be applied the exception will be re-thrown To handle ProcessExitException without regard for reason see catch To handle multiple reasons of differing types see catchesExit",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "catchExit",
          "normalized": "Process a-\u003e(ProcessId-\u003eb-\u003eProcess a)-\u003eProcess a",
          "package": "distributed-process",
          "partial": "Exit",
          "signature": "Process b-\u003e(ProcessId-\u003ea-\u003eProcess b)-\u003eProcess b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catchExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "catches",
          "package": "distributed-process",
          "signature": "Process a -\u003e [Handler a] -\u003e Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#catches",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catches\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:catches\"]"
        },
        "index": {
          "description": "Lift catches",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "catches",
          "normalized": "Process a-\u003e[Handler a]-\u003eProcess a",
          "package": "distributed-process",
          "signature": "Process a-\u003e[Handler a]-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e (almost).\n\u003c/p\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e stores the exit \u003ccode\u003ereason\u003c/code\u003e as a typed, encoded\n message, a handler must accept an input of the expected type. In order to\n handle a list of potentially different handlers (and therefore input types),\n a handler passed to \u003ccode\u003e\u003ca\u003ecatchesExit\u003c/a\u003e\u003c/code\u003e must accept \u003ccode\u003e\u003ca\u003eAbstractMessage\u003c/a\u003e\u003c/code\u003e and return\n \u003ccode\u003eMaybe\u003c/code\u003e (i.e., \u003ccode\u003eJust p\u003c/code\u003e if it handled the exit reason, otherwise \u003ccode\u003eNothing\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003emaybeHandleMessage\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eAsbtractMessage\u003c/code\u003e for more details.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "catchesExit",
          "package": "distributed-process",
          "signature": "Process b -\u003e [ProcessId -\u003e AbstractMessage -\u003e Process (Maybe b)] -\u003e Process b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#catchesExit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catchesExit\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:catchesExit\"]"
        },
        "index": {
          "description": "Lift catches almost As ProcessExitException stores the exit reason as typed encoded message handler must accept an input of the expected type In order to handle list of potentially different handlers and therefore input types handler passed to catchesExit must accept AbstractMessage and return Maybe i.e Just if it handled the exit reason otherwise Nothing See maybeHandleMessage and AsbtractMessage for more details",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "catchesExit",
          "normalized": "Process a-\u003e[ProcessId-\u003eAbstractMessage-\u003eProcess(Maybe a)]-\u003eProcess a",
          "package": "distributed-process",
          "partial": "Exit",
          "signature": "Process b-\u003e[ProcessId-\u003eAbstractMessage-\u003eProcess(Maybe b)]-\u003eProcess b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:catchesExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDie immediately - throws a \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e with the given \u003ccode\u003ereason\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "die",
          "package": "distributed-process",
          "signature": "a -\u003e Process b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#die",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:die\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:die\"]"
        },
        "index": {
          "description": "Die immediately throws ProcessExitException with the given reason",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "die",
          "normalized": "a-\u003eProcess b",
          "package": "distributed-process",
          "signature": "a-\u003eProcess b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:die"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGraceful request to exit a process. Throws \u003ccode\u003e\u003ca\u003eProcessExitException\u003c/a\u003e\u003c/code\u003e with the\n supplied \u003ccode\u003ereason\u003c/code\u003e encoded as a message. Any \u003cem\u003eexit signal\u003c/em\u003e raised in this\n manner can be handled using the \u003ccode\u003e\u003ca\u003ecatchExit\u003c/a\u003e\u003c/code\u003e family of functions.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "exit",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e a -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#exit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:exit\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:exit\"]"
        },
        "index": {
          "description": "Graceful request to exit process Throws ProcessExitException with the supplied reason encoded as message Any exit signal raised in this manner can be handled using the catchExit family of functions",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "exit",
          "normalized": "ProcessId-\u003ea-\u003eProcess()",
          "package": "distributed-process",
          "signature": "ProcessId-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a message of a specific type\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "expect",
          "package": "distributed-process",
          "signature": "Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#expect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:expect\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:expect\"]"
        },
        "index": {
          "description": "Wait for message of specific type",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "expect",
          "package": "distributed-process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e but with a timeout\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "expectTimeout",
          "package": "distributed-process",
          "signature": "Int -\u003e Process (Maybe a)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#expectTimeout",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:expectTimeout\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:expectTimeout\"]"
        },
        "index": {
          "description": "Like expect but with timeout",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "expectTimeout",
          "normalized": "Int-\u003eProcess(Maybe a)",
          "package": "distributed-process",
          "partial": "Timeout",
          "signature": "Int-\u003eProcess(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:expectTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "finally",
          "package": "distributed-process",
          "signature": "Process a -\u003e Process b -\u003e Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#finally",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:finally\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:finally\"]"
        },
        "index": {
          "description": "Lift finally",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "finally",
          "normalized": "Process a-\u003eProcess b-\u003eProcess a",
          "package": "distributed-process",
          "signature": "Process a-\u003eProcess b-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforward the message to \u003ccode\u003eProcessId\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "forward",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:forward\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:forward\"]"
        },
        "index": {
          "description": "forward the message to ProcessId",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "forward",
          "normalized": "ProcessId-\u003eProcess()",
          "package": "distributed-process",
          "signature": "ProcessId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet information about the specified process\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "getProcessInfo",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Process (Maybe ProcessInfo)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#getProcessInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:getProcessInfo\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:getProcessInfo\"]"
        },
        "index": {
          "description": "Get information about the specified process",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "getProcessInfo",
          "normalized": "ProcessId-\u003eProcess(Maybe ProcessInfo)",
          "package": "distributed-process",
          "partial": "Process Info",
          "signature": "ProcessId-\u003eProcess(Maybe ProcessInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:getProcessInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the node ID of our local node\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "getSelfNode",
          "package": "distributed-process",
          "signature": "Process NodeId",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#getSelfNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:getSelfNode\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:getSelfNode\"]"
        },
        "index": {
          "description": "Get the node ID of our local node",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "getSelfNode",
          "package": "distributed-process",
          "partial": "Self Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:getSelfNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur own process ID\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "getSelfPid",
          "package": "distributed-process",
          "signature": "Process ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#getSelfPid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:getSelfPid\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:getSelfPid\"]"
        },
        "index": {
          "description": "Our own process ID",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "getSelfPid",
          "package": "distributed-process",
          "partial": "Self Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:getSelfPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "infoLinks",
          "package": "distributed-process",
          "signature": "[ProcessId]",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoLinks\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoLinks\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoLinks\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "infoLinks",
          "normalized": "[ProcessId]",
          "package": "distributed-process",
          "partial": "Links",
          "signature": "[ProcessId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "infoMessageQueueLength",
          "package": "distributed-process",
          "signature": "Maybe Int",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoMessageQueueLength\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoMessageQueueLength\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoMessageQueueLength\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "infoMessageQueueLength",
          "package": "distributed-process",
          "partial": "Message Queue Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoMessageQueueLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "infoMonitors",
          "package": "distributed-process",
          "signature": "[(ProcessId, MonitorRef)]",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoMonitors\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoMonitors\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoMonitors\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "infoMonitors",
          "normalized": "[(ProcessId,MonitorRef)]",
          "package": "distributed-process",
          "partial": "Monitors",
          "signature": "[(ProcessId,MonitorRef)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoMonitors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "infoNode",
          "package": "distributed-process",
          "signature": "NodeId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoNode\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoNode\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoNode\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "infoNode",
          "package": "distributed-process",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "infoRegisteredNames",
          "package": "distributed-process",
          "signature": "[String]",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoRegisteredNames\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:infoRegisteredNames\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:infoRegisteredNames\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "infoRegisteredNames",
          "normalized": "[String]",
          "package": "distributed-process",
          "partial": "Registered Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:infoRegisteredNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForceful request to kill a process. Where \u003ccode\u003e\u003ca\u003eexit\u003c/a\u003e\u003c/code\u003e provides an exception\n that can be caught and handled, \u003ccode\u003e\u003ca\u003ekill\u003c/a\u003e\u003c/code\u003e throws an unexposed exception type\n which cannot be handled explicitly (by type).\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "kill",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e String -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#kill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:kill\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:kill\"]"
        },
        "index": {
          "description": "Forceful request to kill process Where exit provides an exception that can be caught and handled kill throws an unexposed exception type which cannot be handled explicitly by type",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "kill",
          "normalized": "ProcessId-\u003eString-\u003eProcess()",
          "package": "distributed-process",
          "signature": "ProcessId-\u003eString-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink to a remote process (asynchronous)\n\u003c/p\u003e\u003cp\u003eWhen process A links to process B (that is, process A calls\n \u003ccode\u003elink pidB\u003c/code\u003e) then an asynchronous exception will be thrown to process A\n when process B terminates (normally or abnormally), or when process A gets\n disconnected from process B. Although it is \u003cem\u003etechnically\u003c/em\u003e possible to catch\n these exceptions, chances are if you find yourself trying to do so you should\n probably be using \u003ccode\u003e\u003ca\u003emonitor\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e. In particular, code such as\n\u003c/p\u003e\u003cpre\u003e link pidB   -- Link to process B\n expect      -- Wait for a message from process B\n unlink pidB -- Unlink again\n\u003c/pre\u003e\u003cp\u003edoesn't quite do what one might expect: if process B sends a message to\n process A, and \u003cem\u003esubsequently terminates\u003c/em\u003e, then process A might or might not\n be terminated too, depending on whether the exception is thrown before or\n after the \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e (i.e., this code has a race condition).\n\u003c/p\u003e\u003cp\u003eLinking is all-or-nothing: A is either linked to B, or it's not. A second\n call to \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e has no effect.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e provides unidirectional linking (see \u003ccode\u003espawnSupervised\u003c/code\u003e).\n Linking makes no distinction between normal and abnormal termination of\n the remote process.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "link",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#link",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:link\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:link\"]"
        },
        "index": {
          "description": "Link to remote process asynchronous When process links to process that is process calls link pidB then an asynchronous exception will be thrown to process when process terminates normally or abnormally or when process gets disconnected from process Although it is technically possible to catch these exceptions chances are if you find yourself trying to do so you should probably be using monitor rather than link In particular code such as link pidB Link to process expect Wait for message from process unlink pidB Unlink again doesn quite do what one might expect if process sends message to process and subsequently terminates then process might or might not be terminated too depending on whether the exception is thrown before or after the unlink i.e this code has race condition Linking is all-or-nothing is either linked to or it not second call to link has no effect Note that link provides unidirectional linking see spawnSupervised Linking makes no distinction between normal and abnormal termination of the remote process",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "link",
          "normalized": "ProcessId-\u003eProcess()",
          "package": "distributed-process",
          "signature": "ProcessId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink to a node (asynchronous)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "linkNode",
          "package": "distributed-process",
          "signature": "NodeId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#linkNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:linkNode\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:linkNode\"]"
        },
        "index": {
          "description": "Link to node asynchronous",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "linkNode",
          "normalized": "NodeId-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Node",
          "signature": "NodeId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:linkNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink to a channel (asynchronous)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "linkPort",
          "package": "distributed-process",
          "signature": "SendPort a -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#linkPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:linkPort\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:linkPort\"]"
        },
        "index": {
          "description": "Link to channel asynchronous",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "linkPort",
          "normalized": "SendPort a-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Port",
          "signature": "SendPort a-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:linkPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "mask",
          "package": "distributed-process",
          "signature": "((forall a.  Process a -\u003e Process a) -\u003e Process b) -\u003e Process b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#mask",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:mask\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:mask\"]"
        },
        "index": {
          "description": "Lift mask",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "mask",
          "normalized": "((a b Process c-\u003eProcess c)-\u003eProcess d)-\u003eProcess d",
          "package": "distributed-process",
          "signature": "((forall a. Process a-\u003eProcess a)-\u003eProcess b)-\u003eProcess b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch against any message of the right type\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "match",
          "package": "distributed-process",
          "signature": "(a -\u003e Process b) -\u003e Match b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#match",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:match\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:match\"]"
        },
        "index": {
          "description": "Match against any message of the right type",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "match",
          "normalized": "(a-\u003eProcess b)-\u003eMatch b",
          "package": "distributed-process",
          "signature": "(a-\u003eProcess b)-\u003eMatch b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch against an arbitrary message. \u003ccode\u003e\u003ca\u003ematchAny\u003c/a\u003e\u003c/code\u003e removes the first available\n message from the process mailbox, and via the \u003ccode\u003e\u003ca\u003eAbstractMessage\u003c/a\u003e\u003c/code\u003e type,\n supports forwarding \u003cem\u003eor\u003c/em\u003e handling the message \u003cem\u003eif\u003c/em\u003e it is of the correct\n type. If \u003cem\u003enot\u003c/em\u003e of the right type, then the \u003ccode\u003e\u003ca\u003eAbstractMessage\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003emaybeHandleMessage\u003c/code\u003e function will not evaluate the supplied expression,\n \u003cem\u003ebut\u003c/em\u003e the message will still have been removed from the process mailbox!\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "matchAny",
          "package": "distributed-process",
          "signature": "forall b.  (AbstractMessage -\u003e Process b) -\u003e Match b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#matchAny",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchAny\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchAny\"]"
        },
        "index": {
          "description": "Match against an arbitrary message matchAny removes the first available message from the process mailbox and via the AbstractMessage type supports forwarding or handling the message if it is of the correct type If not of the right type then the AbstractMessage maybeHandleMessage function will not evaluate the supplied expression but the message will still have been removed from the process mailbox",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "matchAny",
          "normalized": "a b(AbstractMessage-\u003eProcess c)-\u003eMatch c",
          "package": "distributed-process",
          "partial": "Any",
          "signature": "forall b.(AbstractMessage-\u003eProcess b)-\u003eMatch b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch against an arbitrary message. \u003ccode\u003e\u003ca\u003ematchAnyIf\u003c/a\u003e\u003c/code\u003e will \u003cem\u003eonly\u003c/em\u003e remove the\n message from the process mailbox, \u003cem\u003eif\u003c/em\u003e the supplied condition matches. The\n success (or failure) of runtime type checks in \u003ccode\u003emaybeHandleMessage\u003c/code\u003e does not\n count here, i.e., if the condition evaluates to \u003ccode\u003eTrue\u003c/code\u003e then the message will\n be removed from the process mailbox and decoded, but that does \u003cem\u003enot\u003c/em\u003e\n guarantee that an expression passed to \u003ccode\u003emaybeHandleMessage\u003c/code\u003e will pass the\n runtime type checks and therefore be evaluated. If the types do not match\n up, then \u003ccode\u003emaybeHandleMessage\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "matchAnyIf",
          "package": "distributed-process",
          "signature": "(a -\u003e Bool) -\u003e (AbstractMessage -\u003e Process b) -\u003e Match b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#matchAnyIf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchAnyIf\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchAnyIf\"]"
        },
        "index": {
          "description": "Match against an arbitrary message matchAnyIf will only remove the message from the process mailbox if the supplied condition matches The success or failure of runtime type checks in maybeHandleMessage does not count here i.e if the condition evaluates to True then the message will be removed from the process mailbox and decoded but that does not guarantee that an expression passed to maybeHandleMessage will pass the runtime type checks and therefore be evaluated If the types do not match up then maybeHandleMessage returns Nothing",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "matchAnyIf",
          "normalized": "(a-\u003eBool)-\u003e(AbstractMessage-\u003eProcess b)-\u003eMatch b",
          "package": "distributed-process",
          "partial": "Any If",
          "signature": "(a-\u003eBool)-\u003e(AbstractMessage-\u003eProcess b)-\u003eMatch b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchAnyIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "matchChan",
          "package": "distributed-process",
          "signature": "ReceivePort a -\u003e (a -\u003e Process b) -\u003e Match b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#matchChan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchChan\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchChan\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "matchChan",
          "normalized": "ReceivePort a-\u003e(a-\u003eProcess b)-\u003eMatch b",
          "package": "distributed-process",
          "partial": "Chan",
          "signature": "ReceivePort a-\u003e(a-\u003eProcess b)-\u003eMatch b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch against any message of the right type that satisfies a predicate\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "matchIf",
          "package": "distributed-process",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e Process b) -\u003e Match b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#matchIf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchIf\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchIf\"]"
        },
        "index": {
          "description": "Match against any message of the right type that satisfies predicate",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "matchIf",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eProcess b)-\u003eMatch b",
          "package": "distributed-process",
          "partial": "If",
          "signature": "(a-\u003eBool)-\u003e(a-\u003eProcess b)-\u003eMatch b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove any message from the queue\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "matchUnknown",
          "package": "distributed-process",
          "signature": "Process b -\u003e Match b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#matchUnknown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchUnknown\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:matchUnknown\"]"
        },
        "index": {
          "description": "Remove any message from the queue",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "matchUnknown",
          "normalized": "Process a-\u003eMatch a",
          "package": "distributed-process",
          "partial": "Unknown",
          "signature": "Process b-\u003eMatch b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:matchUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle the message.\n        If the type of the message matches the type of the first argument to\n        the supplied expression, then the expression will be evaluated against\n        it. If this runtime type checking fails, then \u003ccode\u003eNothing\u003c/code\u003e will be returned\n        to indicate the fact. If the check succeeds and evaluation proceeds\n        however, the resulting value with be wrapped with \u003ccode\u003eJust\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "maybeHandleMessage",
          "package": "distributed-process",
          "signature": "(a -\u003e Process b) -\u003e Process (Maybe b)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:maybeHandleMessage\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:maybeHandleMessage\"]"
        },
        "index": {
          "description": "Handle the message If the type of the message matches the type of the first argument to the supplied expression then the expression will be evaluated against it If this runtime type checking fails then Nothing will be returned to indicate the fact If the check succeeds and evaluation proceeds however the resulting value with be wrapped with Just",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "maybeHandleMessage",
          "normalized": "(a-\u003eProcess b)-\u003eProcess(Maybe b)",
          "package": "distributed-process",
          "partial": "Handle Message",
          "signature": "(a-\u003eProcess b)-\u003eProcess(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:maybeHandleMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge a list of typed channels.\n\u003c/p\u003e\u003cp\u003eThe result port is left-biased: if there are messages available on more\n than one port, the first available message is returned.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "mergePortsBiased",
          "package": "distributed-process",
          "signature": "[ReceivePort a] -\u003e Process (ReceivePort a)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#mergePortsBiased",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:mergePortsBiased\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:mergePortsBiased\"]"
        },
        "index": {
          "description": "Merge list of typed channels The result port is left-biased if there are messages available on more than one port the first available message is returned",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "mergePortsBiased",
          "normalized": "[ReceivePort a]-\u003eProcess(ReceivePort a)",
          "package": "distributed-process",
          "partial": "Ports Biased",
          "signature": "[ReceivePort a]-\u003eProcess(ReceivePort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:mergePortsBiased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emergePortsBiased\u003c/a\u003e\u003c/code\u003e, but with a round-robin scheduler (rather than\n left-biased)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "mergePortsRR",
          "package": "distributed-process",
          "signature": "[ReceivePort a] -\u003e Process (ReceivePort a)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#mergePortsRR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:mergePortsRR\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:mergePortsRR\"]"
        },
        "index": {
          "description": "Like mergePortsBiased but with round-robin scheduler rather than left-biased",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "mergePortsRR",
          "normalized": "[ReceivePort a]-\u003eProcess(ReceivePort a)",
          "package": "distributed-process",
          "partial": "Ports RR",
          "signature": "[ReceivePort a]-\u003eProcess(ReceivePort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:mergePortsRR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonitor another process (asynchronous)\n\u003c/p\u003e\u003cp\u003eWhen process A monitors process B (that is, process A calls\n \u003ccode\u003emonitor pidB\u003c/code\u003e) then process A will receive a \u003ccode\u003eProcessMonitorNotification\u003c/code\u003e\n when process B terminates (normally or abnormally), or when process A gets\n disconnected from process B. You receive this message like any other (using\n \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e); the notification includes a reason (\u003ccode\u003eDiedNormal\u003c/code\u003e, \u003ccode\u003eDiedException\u003c/code\u003e,\n \u003ccode\u003eDiedDisconnect\u003c/code\u003e, etc.).\n\u003c/p\u003e\u003cp\u003eEvery call to \u003ccode\u003e\u003ca\u003emonitor\u003c/a\u003e\u003c/code\u003e returns a new monitor reference \u003ccode\u003e\u003ca\u003eMonitorRef\u003c/a\u003e\u003c/code\u003e; if\n multiple monitors are set up, multiple notifications will be delivered\n and monitors can be disabled individually using \u003ccode\u003e\u003ca\u003eunmonitor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "monitor",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Process MonitorRef",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#monitor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:monitor\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:monitor\"]"
        },
        "index": {
          "description": "Monitor another process asynchronous When process monitors process that is process calls monitor pidB then process will receive ProcessMonitorNotification when process terminates normally or abnormally or when process gets disconnected from process You receive this message like any other using expect the notification includes reason DiedNormal DiedException DiedDisconnect etc Every call to monitor returns new monitor reference MonitorRef if multiple monitors are set up multiple notifications will be delivered and monitors can be disabled individually using unmonitor",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "monitor",
          "normalized": "ProcessId-\u003eProcess MonitorRef",
          "package": "distributed-process",
          "signature": "ProcessId-\u003eProcess MonitorRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:monitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonitor a node (asynchronous)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "monitorNode",
          "package": "distributed-process",
          "signature": "NodeId -\u003e Process MonitorRef",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#monitorNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:monitorNode\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:monitorNode\"]"
        },
        "index": {
          "description": "Monitor node asynchronous",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "monitorNode",
          "normalized": "NodeId-\u003eProcess MonitorRef",
          "package": "distributed-process",
          "partial": "Node",
          "signature": "NodeId-\u003eProcess MonitorRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:monitorNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonitor a typed channel (asynchronous)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "monitorPort",
          "package": "distributed-process",
          "signature": "SendPort a -\u003e Process MonitorRef",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#monitorPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:monitorPort\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:monitorPort\"]"
        },
        "index": {
          "description": "Monitor typed channel asynchronous",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "monitorPort",
          "normalized": "SendPort a-\u003eProcess MonitorRef",
          "package": "distributed-process",
          "partial": "Port",
          "signature": "SendPort a-\u003eProcess MonitorRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:monitorPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new typed channel\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "newChan",
          "package": "distributed-process",
          "signature": "Process (SendPort a, ReceivePort a)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#newChan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:newChan\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:newChan\"]"
        },
        "index": {
          "description": "Create new typed channel",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "newChan",
          "normalized": "Process(SendPort a,ReceivePort a)",
          "package": "distributed-process",
          "partial": "Chan",
          "signature": "Process(SendPort a,ReceivePort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:newChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamed send to a process in the local registry (asynchronous)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "nsend",
          "package": "distributed-process",
          "signature": "String -\u003e a -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#nsend",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:nsend\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:nsend\"]"
        },
        "index": {
          "description": "Named send to process in the local registry asynchronous",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "nsend",
          "normalized": "String-\u003ea-\u003eProcess()",
          "package": "distributed-process",
          "signature": "String-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:nsend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNamed send to a process in a remote registry (asynchronous)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "nsendRemote",
          "package": "distributed-process",
          "signature": "NodeId -\u003e String -\u003e a -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#nsendRemote",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:nsendRemote\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:nsendRemote\"]"
        },
        "index": {
          "description": "Named send to process in remote registry asynchronous",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "nsendRemote",
          "normalized": "NodeId-\u003eString-\u003ea-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Remote",
          "signature": "NodeId-\u003eString-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:nsendRemote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "onException",
          "package": "distributed-process",
          "signature": "Process a -\u003e Process b -\u003e Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#onException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:onException\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:onException\"]"
        },
        "index": {
          "description": "Lift onException",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "onException",
          "normalized": "Process a-\u003eProcess b-\u003eProcess a",
          "package": "distributed-process",
          "partial": "Exception",
          "signature": "Process a-\u003eProcess b-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a message on a typed channel\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "receiveChan",
          "package": "distributed-process",
          "signature": "ReceivePort a -\u003e Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveChan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveChan\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:receiveChan\"]"
        },
        "index": {
          "description": "Wait for message on typed channel",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "receiveChan",
          "normalized": "ReceivePort a-\u003eProcess a",
          "package": "distributed-process",
          "partial": "Chan",
          "signature": "ReceivePort a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceiveChan\u003c/a\u003e\u003c/code\u003e but with a timeout. If the timeout is 0, do a\n non-blocking check for a message.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "receiveChanTimeout",
          "package": "distributed-process",
          "signature": "Int -\u003e ReceivePort a -\u003e Process (Maybe a)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveChanTimeout",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveChanTimeout\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:receiveChanTimeout\"]"
        },
        "index": {
          "description": "Like receiveChan but with timeout If the timeout is do non-blocking check for message",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "receiveChanTimeout",
          "normalized": "Int-\u003eReceivePort a-\u003eProcess(Maybe a)",
          "package": "distributed-process",
          "partial": "Chan Timeout",
          "signature": "Int-\u003eReceivePort a-\u003eProcess(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveChanTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e but with a timeout.\n\u003c/p\u003e\u003cp\u003eIf the timeout is zero do a non-blocking check for matching messages. A\n non-zero timeout is applied only when waiting for incoming messages (that is,\n \u003cem\u003eafter\u003c/em\u003e we have checked the messages that are already in the mailbox).\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "receiveTimeout",
          "package": "distributed-process",
          "signature": "Int -\u003e [Match b] -\u003e Process (Maybe b)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveTimeout",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveTimeout\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:receiveTimeout\"]"
        },
        "index": {
          "description": "Like receiveWait but with timeout If the timeout is zero do non-blocking check for matching messages non-zero timeout is applied only when waiting for incoming messages that is after we have checked the messages that are already in the mailbox",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "receiveTimeout",
          "normalized": "Int-\u003e[Match a]-\u003eProcess(Maybe a)",
          "package": "distributed-process",
          "partial": "Timeout",
          "signature": "Int-\u003e[Match b]-\u003eProcess(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest the matches in order against each message in the queue\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "receiveWait",
          "package": "distributed-process",
          "signature": "[Match b] -\u003e Process b",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#receiveWait",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveWait\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:receiveWait\"]"
        },
        "index": {
          "description": "Test the matches in order against each message in the queue",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "receiveWait",
          "normalized": "[Match a]-\u003eProcess a",
          "package": "distributed-process",
          "partial": "Wait",
          "signature": "[Match b]-\u003eProcess b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:receiveWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloud Haskell provides the illusion of connection-less, reliable, ordered\n message passing. However, when network connections get disrupted this\n illusion cannot always be maintained. Once a network connection breaks (even\n temporarily) no further communication on that connection will be possible.\n For example, if process A sends a message to process B, and A is then\n notified (by monitor notification) that it got disconnected from B, A will\n not be able to send any further messages to B, \u003cem\u003eunless\u003c/em\u003e A explicitly\n indicates that it is acceptable to attempt to reconnect to B using the\n Cloud Haskell \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e primitive.\n\u003c/p\u003e\u003cp\u003eImportantly, when A calls \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e it acknowledges that some messages to\n B might have been lost. For instance, if A sends messages m1 and m2 to B,\n then receives a monitor notification that its connection to B has been lost,\n calls \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e and then sends m3, it is possible that B will receive m1\n and m3 but not m2.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e does not mean \u003cem\u003ereconnect now\u003c/em\u003e but rather /it is okay\n to attempt to reconnect on the next send/. In particular, if no further\n communication attempts are made to B then A can use reconnect to clean up\n its connection to B.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "reconnect",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#reconnect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reconnect\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:reconnect\"]"
        },
        "index": {
          "description": "Cloud Haskell provides the illusion of connection-less reliable ordered message passing However when network connections get disrupted this illusion cannot always be maintained Once network connection breaks even temporarily no further communication on that connection will be possible For example if process sends message to process and is then notified by monitor notification that it got disconnected from will not be able to send any further messages to unless explicitly indicates that it is acceptable to attempt to reconnect to using the Cloud Haskell reconnect primitive Importantly when calls reconnect it acknowledges that some messages to might have been lost For instance if sends messages m1 and m2 to then receives monitor notification that its connection to has been lost calls reconnect and then sends m3 it is possible that will receive m1 and m3 but not m2 Note that reconnect does not mean reconnect now but rather it is okay to attempt to reconnect on the next send In particular if no further communication attempts are made to then can use reconnect to clean up its connection to",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "reconnect",
          "normalized": "ProcessId-\u003eProcess()",
          "package": "distributed-process",
          "signature": "ProcessId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReconnect to a sendport. See \u003ccode\u003e\u003ca\u003ereconnect\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "reconnectPort",
          "package": "distributed-process",
          "signature": "SendPort a -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#reconnectPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reconnectPort\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:reconnectPort\"]"
        },
        "index": {
          "description": "Reconnect to sendport See reconnect for more information",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "reconnectPort",
          "normalized": "SendPort a-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Port",
          "signature": "SendPort a-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reconnectPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister a process with the local registry (asynchronous).\n This version will wait until a response is gotten from the\n management process. The name must not already be registered.\n The process need not be on this node.\n A bad registration will result in a \u003ccode\u003e\u003ca\u003eProcessRegistrationException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe process to be registered does not have to be local itself.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "register",
          "package": "distributed-process",
          "signature": "String -\u003e ProcessId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#register",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:register\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:register\"]"
        },
        "index": {
          "description": "Register process with the local registry asynchronous This version will wait until response is gotten from the management process The name must not already be registered The process need not be on this node bad registration will result in ProcessRegistrationException The process to be registered does not have to be local itself",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "register",
          "normalized": "String-\u003eProcessId-\u003eProcess()",
          "package": "distributed-process",
          "signature": "String-\u003eProcessId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister a process with a remote registry (asynchronous).\n\u003c/p\u003e\u003cp\u003eThe process to be registered does not have to live on the same remote node.\n Reply wil come in the form of a \u003ccode\u003e\u003ca\u003eRegisterReply\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e\u003cp\u003eSee comments in \u003ccode\u003e\u003ca\u003ewhereisRemoteAsync\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "registerRemoteAsync",
          "package": "distributed-process",
          "signature": "NodeId -\u003e String -\u003e ProcessId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#registerRemoteAsync",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:registerRemoteAsync\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:registerRemoteAsync\"]"
        },
        "index": {
          "description": "Register process with remote registry asynchronous The process to be registered does not have to live on the same remote node Reply wil come in the form of RegisterReply message See comments in whereisRemoteAsync",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "registerRemoteAsync",
          "normalized": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Remote Async",
          "signature": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:registerRemoteAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e, but will replace an existing registration.\n The name must already be registered.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "reregister",
          "package": "distributed-process",
          "signature": "String -\u003e ProcessId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#reregister",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reregister\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:reregister\"]"
        },
        "index": {
          "description": "Like register but will replace an existing registration The name must already be registered",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "reregister",
          "normalized": "String-\u003eProcessId-\u003eProcess()",
          "package": "distributed-process",
          "signature": "String-\u003eProcessId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reregister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "reregisterRemoteAsync",
          "package": "distributed-process",
          "signature": "NodeId -\u003e String -\u003e ProcessId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#reregisterRemoteAsync",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reregisterRemoteAsync\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:reregisterRemoteAsync\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "reregisterRemoteAsync",
          "normalized": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Remote Async",
          "signature": "NodeId-\u003eString-\u003eProcessId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:reregisterRemoteAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog a string\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esay message\u003c/code\u003e sends a message (time, pid of the current process, message)\n to the process registered as \u003ccode\u003elogger\u003c/code\u003e.  By default, this process simply\n sends the string to \u003ccode\u003estderr\u003c/code\u003e. Individual Cloud Haskell backends might\n replace this with a different logger process, however.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "say",
          "package": "distributed-process",
          "signature": "String -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#say",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:say\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:say\"]"
        },
        "index": {
          "description": "Log string say message sends message time pid of the current process message to the process registered as logger By default this process simply sends the string to stderr Individual Cloud Haskell backends might replace this with different logger process however",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "say",
          "normalized": "String-\u003eProcess()",
          "package": "distributed-process",
          "signature": "String-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:say"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "send",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e a -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#send",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:send\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:send\"]"
        },
        "index": {
          "description": "Send message",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "send",
          "normalized": "ProcessId-\u003ea-\u003eProcess()",
          "package": "distributed-process",
          "signature": "ProcessId-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message on a typed channel\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "sendChan",
          "package": "distributed-process",
          "signature": "SendPort a -\u003e a -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#sendChan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:sendChan\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:sendChan\"]"
        },
        "index": {
          "description": "Send message on typed channel",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "sendChan",
          "normalized": "SendPort a-\u003ea-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Chan",
          "signature": "SendPort a-\u003ea-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:sendChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsynchronous version of \u003ccode\u003espawn\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e(\u003ccode\u003espawn\u003c/code\u003e is defined in terms of \u003ccode\u003e\u003ca\u003espawnAsync\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eexpect\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "spawnAsync",
          "package": "distributed-process",
          "signature": "NodeId -\u003e Closure (Process ()) -\u003e Process SpawnRef",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#spawnAsync",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:spawnAsync\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnAsync\"]"
        },
        "index": {
          "description": "Asynchronous version of spawn spawn is defined in terms of spawnAsync and expect",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "spawnAsync",
          "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess SpawnRef",
          "package": "distributed-process",
          "partial": "Async",
          "signature": "NodeId-\u003eClosure(Process())-\u003eProcess SpawnRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:spawnAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate immediately (throws a ProcessTerminationException)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "terminate",
          "package": "distributed-process",
          "signature": "Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#terminate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:terminate\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:terminate\"]"
        },
        "index": {
          "description": "Terminate immediately throws ProcessTerminationException",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "terminate",
          "package": "distributed-process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a message to the internal (system) trace facility. If tracing is\n enabled, this will create a custom trace event. Note that several Cloud Haskell\n sub-systems also generate trace events for informational/debugging purposes,\n thus traces generated this way will not be the only output seen.\n\u003c/p\u003e\u003cp\u003eJust as with the \u003ca\u003eDebug.Trace\u003c/a\u003e module, this is a debugging/tracing facility\n for use in development, and should not be used in a production setting -\n which is why the default behaviour is to trace to the GHC eventlog. For a\n general purpose logging facility, you should consider \u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTrace events can be written to the GHC event log, a text file, or to the\n standard system logger process (see \u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e). The default behaviour for writing\n to the eventlog requires specific intervention to work, without which traces\n are silently dropped/ignored and no output will be generated.\n The GHC eventlog documentation provides information about enabling, viewing\n and working with event traces: \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/wiki/EventLog\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWhen a new local node is started, the contents of the environment variable\n \u003ccode\u003eDISTRIBUTED_PROCESS_TRACE_FILE\u003c/code\u003e are checked for a valid file path. If this\n exists and the file can be opened for writing, all trace output will be directed\n thence. If the environment variable is empty, the path invalid, or the file\n unavailable for writing - e.g., because another node has already started\n tracing to it - then the \u003ccode\u003eDISTRIBUTED_PROCESS_TRACE_CONSOLE\u003c/code\u003e environment\n variable is checked for \u003cem\u003eany\u003c/em\u003e non-empty value. If this is set, then all trace\n output will be directed to the system logger process. If neither evironment\n variable provides a valid trace configuration, all internal traces are written\n to \u003ca\u003eDebug.Trace.traceEventIO\u003c/a\u003e, which writes to the GHC eventlog.\n\u003c/p\u003e\u003cp\u003eUsers of the \u003cem\u003esimplelocalnet\u003c/em\u003e Cloud Haskell backend should also note that\n because the trace file option only supports trace output from a single node\n (so as to avoid interleaving), a file trace configured for the master node will\n prevent slaves from tracing to the file and they will fall back to using the\n console/\u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e or eventlog instead.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "trace",
          "package": "distributed-process",
          "signature": "String -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#trace",
          "type": "function"
        },
        "index": {
          "description": "Send message to the internal system trace facility If tracing is enabled this will create custom trace event Note that several Cloud Haskell sub-systems also generate trace events for informational debugging purposes thus traces generated this way will not be the only output seen Just as with the Debug.Trace module this is debugging tracing facility for use in development and should not be used in production setting which is why the default behaviour is to trace to the GHC eventlog For general purpose logging facility you should consider say Trace events can be written to the GHC event log text file or to the standard system logger process see say The default behaviour for writing to the eventlog requires specific intervention to work without which traces are silently dropped ignored and no output will be generated The GHC eventlog documentation provides information about enabling viewing and working with event traces http hackage.haskell.org trac ghc wiki EventLog When new local node is started the contents of the environment variable DISTRIBUTED PROCESS TRACE FILE are checked for valid file path If this exists and the file can be opened for writing all trace output will be directed thence If the environment variable is empty the path invalid or the file unavailable for writing e.g because another node has already started tracing to it then the DISTRIBUTED PROCESS TRACE CONSOLE environment variable is checked for any non-empty value If this is set then all trace output will be directed to the system logger process If neither evironment variable provides valid trace configuration all internal traces are written to Debug.Trace.traceEventIO which writes to the GHC eventlog Users of the simplelocalnet Cloud Haskell backend should also note that because the trace file option only supports trace output from single node so as to avoid interleaving file trace configured for the master node will prevent slaves from tracing to the file and they will fall back to using the console say or eventlog instead",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "trace",
          "normalized": "String-\u003eProcess()",
          "package": "distributed-process",
          "signature": "String-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "try",
          "package": "distributed-process",
          "signature": "Process a -\u003e Process (Either e a)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#try",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:try\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:try\"]"
        },
        "index": {
          "description": "Lift try",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "try",
          "normalized": "Process a-\u003eProcess(Either b a)",
          "package": "distributed-process",
          "signature": "Process a-\u003eProcess(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve a closure\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "unClosure",
          "package": "distributed-process",
          "signature": "Closure a -\u003e Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#unClosure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unClosure\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unClosure\"]"
        },
        "index": {
          "description": "Resolve closure",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "unClosure",
          "normalized": "Closure a-\u003eProcess a",
          "package": "distributed-process",
          "partial": "Closure",
          "signature": "Closure a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve a static value\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "unStatic",
          "package": "distributed-process",
          "signature": "Static a -\u003e Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#unStatic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unStatic\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unStatic\"]"
        },
        "index": {
          "description": "Resolve static value",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "unStatic",
          "normalized": "Static a-\u003eProcess a",
          "package": "distributed-process",
          "partial": "Static",
          "signature": "Static a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a link\n\u003c/p\u003e\u003cp\u003eThis is synchronous in the sense that once it returns you are guaranteed\n that no exception will be raised if the remote process dies. However, it is\n asynchronous in the sense that we do not wait for a response from the remote\n node.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "unlink",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#unlink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unlink\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unlink\"]"
        },
        "index": {
          "description": "Remove link This is synchronous in the sense that once it returns you are guaranteed that no exception will be raised if the remote process dies However it is asynchronous in the sense that we do not wait for response from the remote node",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "unlink",
          "normalized": "ProcessId-\u003eProcess()",
          "package": "distributed-process",
          "signature": "ProcessId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a node link\n\u003c/p\u003e\u003cp\u003eThis has the same synchronous/asynchronous nature as \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "unlinkNode",
          "package": "distributed-process",
          "signature": "NodeId -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#unlinkNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unlinkNode\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unlinkNode\"]"
        },
        "index": {
          "description": "Remove node link This has the same synchronous asynchronous nature as unlink",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "unlinkNode",
          "normalized": "NodeId-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Node",
          "signature": "NodeId-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unlinkNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a channel (send port) link\n\u003c/p\u003e\u003cp\u003eThis has the same synchronous/asynchronous nature as \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "unlinkPort",
          "package": "distributed-process",
          "signature": "SendPort a -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#unlinkPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unlinkPort\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unlinkPort\"]"
        },
        "index": {
          "description": "Remove channel send port link This has the same synchronous asynchronous nature as unlink",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "unlinkPort",
          "normalized": "SendPort a-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Port",
          "signature": "SendPort a-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unlinkPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a monitor\n\u003c/p\u003e\u003cp\u003eThis has the same synchronous/asynchronous nature as \u003ccode\u003e\u003ca\u003eunlink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "unmonitor",
          "package": "distributed-process",
          "signature": "MonitorRef -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#unmonitor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unmonitor\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unmonitor\"]"
        },
        "index": {
          "description": "Remove monitor This has the same synchronous asynchronous nature as unlink",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "unmonitor",
          "normalized": "MonitorRef-\u003eProcess()",
          "package": "distributed-process",
          "signature": "MonitorRef-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unmonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a process from the local registry (asynchronous).\n This version will wait until a response is gotten from the\n management process. The name must already be registered.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "unregister",
          "package": "distributed-process",
          "signature": "String -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#unregister",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unregister\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unregister\"]"
        },
        "index": {
          "description": "Remove process from the local registry asynchronous This version will wait until response is gotten from the management process The name must already be registered",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "unregister",
          "normalized": "String-\u003eProcess()",
          "package": "distributed-process",
          "signature": "String-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unregister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a process from a remote registry (asynchronous).\n\u003c/p\u003e\u003cp\u003eReply wil come in the form of a \u003ccode\u003e\u003ca\u003eRegisterReply\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e\u003cp\u003eSee comments in \u003ccode\u003e\u003ca\u003ewhereisRemoteAsync\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "unregisterRemoteAsync",
          "package": "distributed-process",
          "signature": "NodeId -\u003e String -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#unregisterRemoteAsync",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unregisterRemoteAsync\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:unregisterRemoteAsync\"]"
        },
        "index": {
          "description": "Remove process from remote registry asynchronous Reply wil come in the form of RegisterReply message See comments in whereisRemoteAsync",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "unregisterRemoteAsync",
          "normalized": "NodeId-\u003eString-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Remote Async",
          "signature": "NodeId-\u003eString-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:unregisterRemoteAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the local process registry\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "whereis",
          "package": "distributed-process",
          "signature": "String -\u003e Process (Maybe ProcessId)",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#whereis",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:whereis\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:whereis\"]"
        },
        "index": {
          "description": "Query the local process registry",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "whereis",
          "normalized": "String-\u003eProcess(Maybe ProcessId)",
          "package": "distributed-process",
          "signature": "String-\u003eProcess(Maybe ProcessId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:whereis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery a remote process registry (asynchronous)\n\u003c/p\u003e\u003cp\u003eReply will come in the form of a \u003ccode\u003e\u003ca\u003eWhereIsReply\u003c/a\u003e\u003c/code\u003e message.\n\u003c/p\u003e\u003cp\u003eThere is currently no synchronous version of \u003ccode\u003e\u003ca\u003ewhereisRemoteAsync\u003c/a\u003e\u003c/code\u003e: if\n you implement one yourself, be sure to take into account that the remote\n node might die or get disconnect before it can respond (i.e. you should\n use \u003ccode\u003e\u003ca\u003emonitorNode\u003c/a\u003e\u003c/code\u003e and take appropriate action when you receive a\n \u003ccode\u003eNodeMonitorNotification\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "whereisRemoteAsync",
          "package": "distributed-process",
          "signature": "NodeId -\u003e String -\u003e Process ()",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#whereisRemoteAsync",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:whereisRemoteAsync\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:whereisRemoteAsync\"]"
        },
        "index": {
          "description": "Query remote process registry asynchronous Reply will come in the form of WhereIsReply message There is currently no synchronous version of whereisRemoteAsync if you implement one yourself be sure to take into account that the remote node might die or get disconnect before it can respond i.e you should use monitorNode and take appropriate action when you receive NodeMonitorNotification",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "whereisRemoteAsync",
          "normalized": "NodeId-\u003eString-\u003eProcess()",
          "package": "distributed-process",
          "partial": "Remote Async",
          "signature": "NodeId-\u003eString-\u003eProcess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:whereisRemoteAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablishes temporary monitoring of another process.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ewithMonitor pid code\u003c/code\u003e sets up monitoring of \u003ccode\u003epid\u003c/code\u003e for the duration\n of \u003ccode\u003ecode\u003c/code\u003e.  Note: although monitoring is no longer active when\n \u003ccode\u003ewithMonitor\u003c/code\u003e returns, there might still be unreceived monitor\n messages in the queue.\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Primitives\",\"Control.Distributed.Process\"]",
          "name": "withMonitor",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e Process a -\u003e Process a",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#withMonitor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:withMonitor\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:withMonitor\"]"
        },
        "index": {
          "description": "Establishes temporary monitoring of another process withMonitor pid code sets up monitoring of pid for the duration of code Note although monitoring is no longer active when withMonitor returns there might still be unreceived monitor messages in the queue",
          "hierarchy": "Control Distributed Process Internal Primitives",
          "module": "Control.Distributed.Process.Internal.Primitives",
          "name": "withMonitor",
          "normalized": "ProcessId-\u003eProcess a-\u003eProcess a",
          "package": "distributed-process",
          "partial": "Monitor",
          "signature": "ProcessId-\u003eProcess a-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Primitives.html#v:withMonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
          "name": "StrictContainerAccessors",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-StrictContainerAccessors.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictContainerAccessors",
          "module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
          "name": "StrictContainerAccessors",
          "package": "distributed-process",
          "partial": "Strict Container Accessors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictContainerAccessors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
          "name": "mapDefault",
          "package": "distributed-process",
          "signature": "elem -\u003e key -\u003e Accessor (Map key elem) elem",
          "source": "src/Control-Distributed-Process-Internal-StrictContainerAccessors.html#mapDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictContainerAccessors",
          "module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
          "name": "mapDefault",
          "normalized": "a-\u003eb-\u003eAccessor(Map b a)a",
          "package": "distributed-process",
          "partial": "Default",
          "signature": "elem-\u003ekey-\u003eAccessor(Map key elem)elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictContainerAccessors.html#v:mapDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
          "name": "mapMaybe",
          "package": "distributed-process",
          "signature": "key -\u003e Accessor (Map key elem) (Maybe elem)",
          "source": "src/Control-Distributed-Process-Internal-StrictContainerAccessors.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictContainerAccessors",
          "module": "Control.Distributed.Process.Internal.StrictContainerAccessors",
          "name": "mapMaybe",
          "normalized": "a-\u003eAccessor(Map a b)(Maybe b)",
          "package": "distributed-process",
          "partial": "Maybe",
          "signature": "key-\u003eAccessor(Map key elem)(Maybe elem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictContainerAccessors.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSpine and element strict list\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "StrictList",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-StrictList.html",
          "type": "module"
        },
        "index": {
          "description": "Spine and element strict list",
          "hierarchy": "Control Distributed Process Internal StrictList",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "StrictList",
          "package": "distributed-process",
          "partial": "Strict List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict list\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "StrictList",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
          "type": "data"
        },
        "index": {
          "description": "Strict list",
          "hierarchy": "Control Distributed Process Internal StrictList",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "StrictList",
          "package": "distributed-process",
          "partial": "Strict List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#t:StrictList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "Append",
          "package": "distributed-process",
          "signature": "Append !(StrictList a) !(StrictList a)",
          "source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictList",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "Append",
          "package": "distributed-process",
          "partial": "Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "Cons",
          "package": "distributed-process",
          "signature": "Cons !a !(StrictList a)",
          "source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictList",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "Cons",
          "package": "distributed-process",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "Nil",
          "package": "distributed-process",
          "signature": "Nil",
          "source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictList",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "Nil",
          "package": "distributed-process",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "Snoc",
          "package": "distributed-process",
          "signature": "Snoc !(StrictList a) !a",
          "source": "src/Control-Distributed-Process-Internal-StrictList.html#StrictList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictList",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "Snoc",
          "package": "distributed-process",
          "partial": "Snoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:Snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "append",
          "package": "distributed-process",
          "signature": "StrictList a -\u003e StrictList a -\u003e StrictList a",
          "source": "src/Control-Distributed-Process-Internal-StrictList.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictList",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "append",
          "normalized": "StrictList a-\u003eStrictList a-\u003eStrictList a",
          "package": "distributed-process",
          "signature": "StrictList a-\u003eStrictList a-\u003eStrictList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "foldr",
          "package": "distributed-process",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e StrictList a -\u003e b",
          "source": "src/Control-Distributed-Process-Internal-StrictList.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictList",
          "module": "Control.Distributed.Process.Internal.StrictList",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eStrictList a-\u003eb",
          "package": "distributed-process",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eStrictList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictList.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLike Control.Concurrent.MVar.Strict but reduce to HNF, not NF\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "StrictMVar",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html",
          "type": "module"
        },
        "index": {
          "description": "Like Control.Concurrent.MVar.Strict but reduce to HNF not NF",
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "StrictMVar",
          "package": "distributed-process",
          "partial": "Strict MVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "StrictMVar",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#StrictMVar",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "StrictMVar",
          "package": "distributed-process",
          "partial": "Strict MVar",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#t:StrictMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "StrictMVar",
          "package": "distributed-process",
          "signature": "StrictMVar (MVar a)",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#StrictMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "StrictMVar",
          "package": "distributed-process",
          "partial": "Strict MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:StrictMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "mkWeakMVar",
          "package": "distributed-process",
          "signature": "StrictMVar a -\u003e IO () -\u003e IO (Weak (StrictMVar a))",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#mkWeakMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "mkWeakMVar",
          "normalized": "StrictMVar a-\u003eIO()-\u003eIO(Weak(StrictMVar a))",
          "package": "distributed-process",
          "partial": "Weak MVar",
          "signature": "StrictMVar a-\u003eIO()-\u003eIO(Weak(StrictMVar a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:mkWeakMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "modifyMVar",
          "package": "distributed-process",
          "signature": "StrictMVar a -\u003e (a -\u003e IO (a, b)) -\u003e IO b",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#modifyMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "modifyMVar",
          "normalized": "StrictMVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b",
          "package": "distributed-process",
          "partial": "MVar",
          "signature": "StrictMVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:modifyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "modifyMVar_",
          "package": "distributed-process",
          "signature": "StrictMVar a -\u003e (a -\u003e IO a) -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#modifyMVar_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "modifyMVar_",
          "normalized": "StrictMVar a-\u003e(a-\u003eIO a)-\u003eIO()",
          "package": "distributed-process",
          "partial": "MVar",
          "signature": "StrictMVar a-\u003e(a-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:modifyMVar_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "newEmptyMVar",
          "package": "distributed-process",
          "signature": "IO (StrictMVar a)",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#newEmptyMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "newEmptyMVar",
          "package": "distributed-process",
          "partial": "Empty MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:newEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "newMVar",
          "package": "distributed-process",
          "signature": "a -\u003e IO (StrictMVar a)",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#newMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "newMVar",
          "normalized": "a-\u003eIO(StrictMVar a)",
          "package": "distributed-process",
          "partial": "MVar",
          "signature": "a-\u003eIO(StrictMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:newMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "putMVar",
          "package": "distributed-process",
          "signature": "StrictMVar a -\u003e a -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#putMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "putMVar",
          "normalized": "StrictMVar a-\u003ea-\u003eIO()",
          "package": "distributed-process",
          "partial": "MVar",
          "signature": "StrictMVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:putMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "takeMVar",
          "package": "distributed-process",
          "signature": "StrictMVar a -\u003e IO a",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#takeMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "takeMVar",
          "normalized": "StrictMVar a-\u003eIO a",
          "package": "distributed-process",
          "partial": "MVar",
          "signature": "StrictMVar a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:takeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "withMVar",
          "package": "distributed-process",
          "signature": "StrictMVar a -\u003e (a -\u003e IO b) -\u003e IO b",
          "source": "src/Control-Distributed-Process-Internal-StrictMVar.html#withMVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal StrictMVar",
          "module": "Control.Distributed.Process.Internal.StrictMVar",
          "name": "withMVar",
          "normalized": "StrictMVar a-\u003e(a-\u003eIO b)-\u003eIO b",
          "package": "distributed-process",
          "partial": "MVar",
          "signature": "StrictMVar a-\u003e(a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-StrictMVar.html#v:withMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple (internal) system logging/tracing support.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "Trace",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Trace.html",
          "type": "module"
        },
        "index": {
          "description": "Simple internal system logging tracing support",
          "hierarchy": "Control Distributed Process Internal Trace",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "Trace",
          "package": "distributed-process",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "TraceArg",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Trace.html#TraceArg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Trace",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "TraceArg",
          "package": "distributed-process",
          "partial": "Trace Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#t:TraceArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequired for system tracing in the node controller\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "Tracer",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
          "type": "data"
        },
        "index": {
          "description": "Required for system tracing in the node controller",
          "hierarchy": "Control Distributed Process Internal Trace",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "Tracer",
          "package": "distributed-process",
          "partial": "Tracer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#t:Tracer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "Trace",
          "package": "distributed-process",
          "signature": "Trace a",
          "source": "src/Control-Distributed-Process-Internal-Trace.html#TraceArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Trace",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "Trace",
          "package": "distributed-process",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "TraceStr",
          "package": "distributed-process",
          "signature": "TraceStr String",
          "source": "src/Control-Distributed-Process-Internal-Trace.html#TraceArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Trace",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "TraceStr",
          "package": "distributed-process",
          "partial": "Trace Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:TraceStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "startTracing",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e IO LocalNode",
          "source": "src/Control-Distributed-Process-Internal-Trace.html#startTracing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Trace",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "startTracing",
          "normalized": "LocalNode-\u003eIO LocalNode",
          "package": "distributed-process",
          "partial": "Tracing",
          "signature": "LocalNode-\u003eIO LocalNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:startTracing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "stopTracer",
          "package": "distributed-process",
          "signature": "Tracer -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-Trace.html#stopTracer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Trace",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "stopTracer",
          "normalized": "Tracer-\u003eIO()",
          "package": "distributed-process",
          "partial": "Tracer",
          "signature": "Tracer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:stopTracer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "trace",
          "package": "distributed-process",
          "signature": "Tracer -\u003e String -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-Trace.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Trace",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "trace",
          "normalized": "Tracer-\u003eString-\u003eIO()",
          "package": "distributed-process",
          "signature": "Tracer-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "traceFormat",
          "package": "distributed-process",
          "signature": "Tracer -\u003e String -\u003e [TraceArg] -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Internal-Trace.html#traceFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Trace",
          "module": "Control.Distributed.Process.Internal.Trace",
          "name": "traceFormat",
          "normalized": "Tracer-\u003eString-\u003e[TraceArg]-\u003eIO()",
          "package": "distributed-process",
          "partial": "Format",
          "signature": "Tracer-\u003eString-\u003e[TraceArg]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Trace.html#v:traceFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes used throughout the Cloud Haskell framework\n\u003c/p\u003e\u003cp\u003eWe collect all types used internally in a single module because\n many of these data types are mutually recursive and cannot be split across\n modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Types",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types used throughout the Cloud Haskell framework We collect all types used internally in single module because many of these data types are mutually recursive and cannot be split across modules",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Types",
          "package": "distributed-process",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronius) reply from \u003ccode\u003espawn\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidSpawn",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidSpawn",
          "type": "data"
        },
        "index": {
          "description": "Asynchronius reply from spawn",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidSpawn",
          "package": "distributed-process",
          "partial": "Did Spawn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidSpawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronous) reply from unlinkNode\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkNode",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkNode",
          "type": "newtype"
        },
        "index": {
          "description": "Asynchronous reply from unlinkNode",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkNode",
          "package": "distributed-process",
          "partial": "Did Unlink Node",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidUnlinkNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronous) reply from unlinkPort\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkPort",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkPort",
          "type": "newtype"
        },
        "index": {
          "description": "Asynchronous reply from unlinkPort",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkPort",
          "package": "distributed-process",
          "partial": "Did Unlink Port",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidUnlinkPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronous) reply from unlink\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkProcess",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkProcess",
          "type": "newtype"
        },
        "index": {
          "description": "Asynchronous reply from unlink",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkProcess",
          "package": "distributed-process",
          "partial": "Did Unlink Process",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidUnlinkProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronous) reply from unmonitor\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnmonitor",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidUnmonitor",
          "type": "newtype"
        },
        "index": {
          "description": "Asynchronous reply from unmonitor",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnmonitor",
          "package": "distributed-process",
          "partial": "Did Unmonitor",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DidUnmonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhy did a process die?\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DiedReason",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
          "type": "data"
        },
        "index": {
          "description": "Why did process die",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DiedReason",
          "package": "distributed-process",
          "partial": "Died Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:DiedReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of all kinds of identifiers\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Identifier",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Identifier",
          "type": "data"
        },
        "index": {
          "description": "Union of all kinds of identifiers",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Identifier",
          "package": "distributed-process",
          "partial": "Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ImplicitReconnect",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ImplicitReconnect",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ImplicitReconnect",
          "package": "distributed-process",
          "partial": "Implicit Reconnect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ImplicitReconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal nodes\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNode",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
          "type": "data"
        },
        "index": {
          "description": "Local nodes",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNode",
          "package": "distributed-process",
          "partial": "Local Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal node state\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNodeState",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
          "type": "data"
        },
        "index": {
          "description": "Local node state",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNodeState",
          "package": "distributed-process",
          "partial": "Local Node State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalNodeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcesses running on our local node\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcess",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
          "type": "data"
        },
        "index": {
          "description": "Processes running on our local node",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcess",
          "package": "distributed-process",
          "partial": "Local Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA local process ID consists of a seed which distinguishes processes from\n different instances of the same local node and a counter\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcessId",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessId",
          "type": "data"
        },
        "index": {
          "description": "local process ID consists of seed which distinguishes processes from different instances of the same local node and counter",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcessId",
          "package": "distributed-process",
          "partial": "Local Process Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal process state\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcessState",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
          "type": "data"
        },
        "index": {
          "description": "Local process state",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcessState",
          "package": "distributed-process",
          "partial": "Local Process State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalProcessState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalSendPortId",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalSendPortId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalSendPortId",
          "package": "distributed-process",
          "partial": "Local Send Port Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:LocalSendPortId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages consist of their typeRep fingerprint and their encoding\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Message",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Message",
          "type": "data"
        },
        "index": {
          "description": "Messages consist of their typeRep fingerprint and their encoding",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Message",
          "package": "distributed-process",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonitorRef is opaque for regular Cloud Haskell processes\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "MonitorRef",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
          "type": "data"
        },
        "index": {
          "description": "MonitorRef is opaque for regular Cloud Haskell processes",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "MonitorRef",
          "package": "distributed-process",
          "partial": "Monitor Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:MonitorRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages to the node controller\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NCMsg",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NCMsg",
          "type": "data"
        },
        "index": {
          "description": "Messages to the node controller",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NCMsg",
          "package": "distributed-process",
          "partial": "NCMsg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:NCMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode identifier\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeId",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeId",
          "type": "newtype"
        },
        "index": {
          "description": "Node identifier",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeId",
          "package": "distributed-process",
          "partial": "Node Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown when a linked node dies\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeLinkException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeLinkException",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown when linked node dies",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeLinkException",
          "package": "distributed-process",
          "partial": "Node Link Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:NodeLinkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage sent by node monitors\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeMonitorNotification",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeMonitorNotification",
          "type": "data"
        },
        "index": {
          "description": "Message sent by node monitors",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeMonitorNotification",
          "package": "distributed-process",
          "partial": "Node Monitor Notification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:NodeMonitorNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown when a linked channel (port) dies\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "PortLinkException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#PortLinkException",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown when linked channel port dies",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "PortLinkException",
          "package": "distributed-process",
          "partial": "Port Link Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:PortLinkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage sent by channel (port) monitors\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "PortMonitorNotification",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#PortMonitorNotification",
          "type": "data"
        },
        "index": {
          "description": "Message sent by channel port monitors",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "PortMonitorNotification",
          "package": "distributed-process",
          "partial": "Port Monitor Notification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:PortMonitorNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Cloud Haskell \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Process",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Process",
          "type": "newtype"
        },
        "index": {
          "description": "The Cloud Haskell Process type",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Process",
          "package": "distributed-process",
          "partial": "Process",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal exception thrown indirectly by \u003ccode\u003eexit\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessExitException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessExitException",
          "type": "data"
        },
        "index": {
          "description": "Internal exception thrown indirectly by exit",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessExitException",
          "package": "distributed-process",
          "partial": "Process Exit Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessExitException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess identifier\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessId",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
          "type": "data"
        },
        "index": {
          "description": "Process identifier",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessId",
          "package": "distributed-process",
          "partial": "Process Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide information about a running process\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessInfo",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
          "type": "data"
        },
        "index": {
          "description": "Provide information about running process",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessInfo",
          "package": "distributed-process",
          "partial": "Process Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessInfoNone",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfoNone",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessInfoNone",
          "package": "distributed-process",
          "partial": "Process Info None",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessInfoNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExceptions thrown when a linked process dies\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessLinkException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessLinkException",
          "type": "data"
        },
        "index": {
          "description": "Exceptions thrown when linked process dies",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessLinkException",
          "package": "distributed-process",
          "partial": "Process Link Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessLinkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage sent by process monitors\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessMonitorNotification",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessMonitorNotification",
          "type": "data"
        },
        "index": {
          "description": "Message sent by process monitors",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessMonitorNotification",
          "package": "distributed-process",
          "partial": "Process Monitor Notification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessMonitorNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown when a process attempts to register\n a process under an already-registered name or to\n unregister a name that hasn't been registered\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessRegistrationException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessRegistrationException",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown when process attempts to register process under an already-registered name or to unregister name that hasn been registered",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessRegistrationException",
          "package": "distributed-process",
          "partial": "Process Registration Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessRegistrationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignals to the node controller (see \u003ccode\u003e\u003ca\u003eNCMsg\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessSignal",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "data"
        },
        "index": {
          "description": "Signals to the node controller see NCMsg",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessSignal",
          "package": "distributed-process",
          "partial": "Process Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ProcessSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe receive end of a typed channel (not serializable)\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e implements \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. This is especially useful when merging receive ports.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ReceivePort",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ReceivePort",
          "type": "newtype"
        },
        "index": {
          "description": "The receive end of typed channel not serializable Note that ReceivePort implements Functor Applicative Alternative and Monad This is especially useful when merging receive ports",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ReceivePort",
          "package": "distributed-process",
          "partial": "Receive Port",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:ReceivePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronous) reply from \u003ccode\u003eregister\u003c/code\u003e and \u003ccode\u003eunregister\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "RegisterReply",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#RegisterReply",
          "type": "data"
        },
        "index": {
          "description": "Asynchronous reply from register and unregister",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "RegisterReply",
          "package": "distributed-process",
          "partial": "Register Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:RegisterReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe send send of a typed channel (serializable)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPort",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SendPort",
          "type": "newtype"
        },
        "index": {
          "description": "The send send of typed channel serializable",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPort",
          "package": "distributed-process",
          "partial": "Send Port",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:SendPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA send port is identified by a SendPortId.\n\u003c/p\u003e\u003cp\u003eYou cannot send directly to a SendPortId; instead, use \u003ccode\u003enewChan\u003c/code\u003e\n to create a SendPort.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPortId",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
          "type": "data"
        },
        "index": {
          "description": "send port is identified by SendPortId You cannot send directly to SendPortId instead use newChan to create SendPort",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPortId",
          "package": "distributed-process",
          "partial": "Send Port Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:SendPortId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSpawnRef\u003c/a\u003e\u003c/code\u003e are used to return pids of spawned processes\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SpawnRef",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SpawnRef",
          "type": "newtype"
        },
        "index": {
          "description": "SpawnRef are used to return pids of spawned processes",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SpawnRef",
          "package": "distributed-process",
          "partial": "Spawn Ref",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:SpawnRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequired for system tracing in the node controller\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Tracer",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
          "type": "data"
        },
        "index": {
          "description": "Required for system tracing in the node controller",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Tracer",
          "package": "distributed-process",
          "partial": "Tracer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:Tracer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "TypedChannel",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#TypedChannel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "TypedChannel",
          "package": "distributed-process",
          "partial": "Typed Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:TypedChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronous) reply from \u003ccode\u003ewhereis\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "WhereIsReply",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#WhereIsReply",
          "type": "data"
        },
        "index": {
          "description": "Asynchronous reply from whereis",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "WhereIsReply",
          "package": "distributed-process",
          "partial": "Where Is Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#t:WhereIsReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "DidSpawn",
          "package": "distributed-process",
          "signature": "DidSpawn SpawnRef ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidSpawn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidSpawn\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DidSpawn\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidSpawn",
          "package": "distributed-process",
          "partial": "Did Spawn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidSpawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkNode",
          "package": "distributed-process",
          "signature": "DidUnlinkNode NodeId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkNode",
          "package": "distributed-process",
          "partial": "Did Unlink Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidUnlinkNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkPort",
          "package": "distributed-process",
          "signature": "DidUnlinkPort SendPortId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkPort",
          "package": "distributed-process",
          "partial": "Did Unlink Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidUnlinkPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkProcess",
          "package": "distributed-process",
          "signature": "DidUnlinkProcess ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidUnlinkProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnlinkProcess",
          "package": "distributed-process",
          "partial": "Did Unlink Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidUnlinkProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnmonitor",
          "package": "distributed-process",
          "signature": "DidUnmonitor MonitorRef",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidUnmonitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DidUnmonitor",
          "package": "distributed-process",
          "partial": "Did Unmonitor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DidUnmonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Died",
          "package": "distributed-process",
          "signature": "Died Identifier !DiedReason",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Died",
          "package": "distributed-process",
          "partial": "Died",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Died"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe got disconnected from the process node\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "DiedDisconnect",
          "package": "distributed-process",
          "signature": "DiedDisconnect",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedDisconnect\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedDisconnect\"]"
        },
        "index": {
          "description": "We got disconnected from the process node",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DiedDisconnect",
          "package": "distributed-process",
          "partial": "Died Disconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedDisconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process exited with an exception\n (provided as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e because \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e does not implement \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "DiedException",
          "package": "distributed-process",
          "signature": "DiedException !String",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedException\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedException\"]"
        },
        "index": {
          "description": "The process exited with an exception provided as String because Exception does not implement Binary",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DiedException",
          "package": "distributed-process",
          "partial": "Died Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process node died\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "DiedNodeDown",
          "package": "distributed-process",
          "signature": "DiedNodeDown",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedNodeDown\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedNodeDown\"]"
        },
        "index": {
          "description": "The process node died",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DiedNodeDown",
          "package": "distributed-process",
          "partial": "Died Node Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedNodeDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal termination\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "DiedNormal",
          "package": "distributed-process",
          "signature": "DiedNormal",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedNormal\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedNormal\"]"
        },
        "index": {
          "description": "Normal termination",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DiedNormal",
          "package": "distributed-process",
          "partial": "Died Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid (process\u003cem\u003enode\u003c/em\u003echannel) identifier\n\u003c/p\u003e",
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "DiedUnknownId",
          "package": "distributed-process",
          "signature": "DiedUnknownId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedUnknownId\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:DiedUnknownId\"]"
        },
        "index": {
          "description": "Invalid process node channel identifier",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "DiedUnknownId",
          "package": "distributed-process",
          "partial": "Died Unknown Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:DiedUnknownId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "EventLogTracer",
          "package": "distributed-process",
          "signature": "EventLogTracer !(String -\u003e IO ())",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "EventLogTracer",
          "normalized": "EventLogTracer(String-\u003eIO())",
          "package": "distributed-process",
          "partial": "Event Log Tracer",
          "signature": "EventLogTracer(String-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:EventLogTracer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Exit",
          "package": "distributed-process",
          "signature": "Exit !ProcessId !Message",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Exit",
          "package": "distributed-process",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "GetInfo",
          "package": "distributed-process",
          "signature": "GetInfo !ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "GetInfo",
          "package": "distributed-process",
          "partial": "Get Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:GetInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "InactiveTracer",
          "package": "distributed-process",
          "signature": "InactiveTracer",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "InactiveTracer",
          "package": "distributed-process",
          "partial": "Inactive Tracer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:InactiveTracer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Kill",
          "package": "distributed-process",
          "signature": "Kill !ProcessId !String",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Kill",
          "package": "distributed-process",
          "partial": "Kill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Link",
          "package": "distributed-process",
          "signature": "Link !Identifier",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Link",
          "package": "distributed-process",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNode",
          "package": "distributed-process",
          "signature": "LocalNode",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNode",
          "package": "distributed-process",
          "partial": "Local Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNodeState",
          "package": "distributed-process",
          "signature": "LocalNodeState",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNodeState",
          "package": "distributed-process",
          "partial": "Local Node State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalNodeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNodeTracer",
          "package": "distributed-process",
          "signature": "LocalNodeTracer !LocalNode",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalNodeTracer",
          "package": "distributed-process",
          "partial": "Local Node Tracer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalNodeTracer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcess",
          "package": "distributed-process",
          "signature": "LocalProcess",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcess",
          "package": "distributed-process",
          "partial": "Local Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcessId",
          "package": "distributed-process",
          "signature": "LocalProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcessId",
          "package": "distributed-process",
          "partial": "Local Process Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcessState",
          "package": "distributed-process",
          "signature": "LocalProcessState",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LocalProcessState",
          "package": "distributed-process",
          "partial": "Local Process State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LocalProcessState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LogFileTracer",
          "package": "distributed-process",
          "signature": "LogFileTracer !ThreadId !(TQueue String) !Handle",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Tracer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "LogFileTracer",
          "package": "distributed-process",
          "partial": "Log File Tracer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:LogFileTracer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Message",
          "package": "distributed-process",
          "signature": "Message",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Message",
          "package": "distributed-process",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Monitor",
          "package": "distributed-process",
          "signature": "Monitor !MonitorRef",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Monitor",
          "package": "distributed-process",
          "partial": "Monitor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Monitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "MonitorRef",
          "package": "distributed-process",
          "signature": "MonitorRef",
          "source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "MonitorRef",
          "package": "distributed-process",
          "partial": "Monitor Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:MonitorRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NCMsg",
          "package": "distributed-process",
          "signature": "NCMsg",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NCMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NCMsg",
          "package": "distributed-process",
          "partial": "NCMsg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NCMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NamedSend",
          "package": "distributed-process",
          "signature": "NamedSend !String !Message",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NamedSend",
          "package": "distributed-process",
          "partial": "Named Send",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NamedSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NoImplicitReconnect",
          "package": "distributed-process",
          "signature": "NoImplicitReconnect",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ImplicitReconnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NoImplicitReconnect",
          "package": "distributed-process",
          "partial": "No Implicit Reconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NoImplicitReconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeId",
          "package": "distributed-process",
          "signature": "NodeId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeId",
          "package": "distributed-process",
          "partial": "Node Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeIdentifier",
          "package": "distributed-process",
          "signature": "NodeIdentifier !NodeId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeIdentifier",
          "package": "distributed-process",
          "partial": "Node Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "NodeLinkException",
          "package": "distributed-process",
          "signature": "NodeLinkException !NodeId !DiedReason",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeLinkException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeLinkException\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:NodeLinkException\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeLinkException",
          "package": "distributed-process",
          "partial": "Node Link Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeLinkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "NodeMonitorNotification",
          "package": "distributed-process",
          "signature": "NodeMonitorNotification !MonitorRef !NodeId !DiedReason",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeMonitorNotification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeMonitorNotification\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:NodeMonitorNotification\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "NodeMonitorNotification",
          "package": "distributed-process",
          "partial": "Node Monitor Notification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:NodeMonitorNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "PortLinkException",
          "package": "distributed-process",
          "signature": "PortLinkException !SendPortId !DiedReason",
          "source": "src/Control-Distributed-Process-Internal-Types.html#PortLinkException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:PortLinkException\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:PortLinkException\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "PortLinkException",
          "package": "distributed-process",
          "partial": "Port Link Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:PortLinkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "PortMonitorNotification",
          "package": "distributed-process",
          "signature": "PortMonitorNotification !MonitorRef !SendPortId !DiedReason",
          "source": "src/Control-Distributed-Process-Internal-Types.html#PortMonitorNotification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:PortMonitorNotification\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:PortMonitorNotification\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "PortMonitorNotification",
          "package": "distributed-process",
          "partial": "Port Monitor Notification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:PortMonitorNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Process",
          "package": "distributed-process",
          "signature": "Process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Process",
          "package": "distributed-process",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessExitException",
          "package": "distributed-process",
          "signature": "ProcessExitException !ProcessId !Message",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessExitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessExitException",
          "package": "distributed-process",
          "partial": "Process Exit Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessExitException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessId",
          "package": "distributed-process",
          "signature": "ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessId",
          "package": "distributed-process",
          "partial": "Process Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessIdentifier",
          "package": "distributed-process",
          "signature": "ProcessIdentifier !ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessIdentifier",
          "package": "distributed-process",
          "partial": "Process Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessInfoNone",
          "package": "distributed-process",
          "signature": "ProcessInfoNone DiedReason",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfoNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessInfoNone",
          "package": "distributed-process",
          "partial": "Process Info None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessInfoNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "ProcessLinkException",
          "package": "distributed-process",
          "signature": "ProcessLinkException !ProcessId !DiedReason",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessLinkException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessLinkException\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessLinkException\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessLinkException",
          "package": "distributed-process",
          "partial": "Process Link Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessLinkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "ProcessMonitorNotification",
          "package": "distributed-process",
          "signature": "ProcessMonitorNotification !MonitorRef !ProcessId !DiedReason",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessMonitorNotification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessMonitorNotification\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessMonitorNotification\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessMonitorNotification",
          "package": "distributed-process",
          "partial": "Process Monitor Notification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessMonitorNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "ProcessRegistrationException",
          "package": "distributed-process",
          "signature": "ProcessRegistrationException !String",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessRegistrationException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessRegistrationException\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:ProcessRegistrationException\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ProcessRegistrationException",
          "package": "distributed-process",
          "partial": "Process Registration Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ProcessRegistrationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ReceivePort",
          "package": "distributed-process",
          "signature": "ReceivePort",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ReceivePort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ReceivePort",
          "package": "distributed-process",
          "partial": "Receive Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ReceivePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Register",
          "package": "distributed-process",
          "signature": "Register !String !NodeId !(Maybe ProcessId) !Bool",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Register",
          "package": "distributed-process",
          "partial": "Register",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "RegisterReply",
          "package": "distributed-process",
          "signature": "RegisterReply String Bool",
          "source": "src/Control-Distributed-Process-Internal-Types.html#RegisterReply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:RegisterReply\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:RegisterReply\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "RegisterReply",
          "package": "distributed-process",
          "partial": "Register Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:RegisterReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPort",
          "package": "distributed-process",
          "signature": "SendPort",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SendPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPort",
          "package": "distributed-process",
          "partial": "Send Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:SendPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPortId",
          "package": "distributed-process",
          "signature": "SendPortId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPortId",
          "package": "distributed-process",
          "partial": "Send Port Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:SendPortId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPortIdentifier",
          "package": "distributed-process",
          "signature": "SendPortIdentifier !SendPortId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SendPortIdentifier",
          "package": "distributed-process",
          "partial": "Send Port Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:SendPortIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Spawn",
          "package": "distributed-process",
          "signature": "Spawn !(Closure (Process ())) !SpawnRef",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Spawn",
          "normalized": "Spawn(Closure(Process()))SpawnRef",
          "package": "distributed-process",
          "partial": "Spawn",
          "signature": "Spawn(Closure(Process()))SpawnRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SpawnRef",
          "package": "distributed-process",
          "signature": "SpawnRef Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SpawnRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "SpawnRef",
          "package": "distributed-process",
          "partial": "Spawn Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:SpawnRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "TypedChannel",
          "package": "distributed-process",
          "signature": "TypedChannel (Weak (TQueue a))",
          "source": "src/Control-Distributed-Process-Internal-Types.html#TypedChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "TypedChannel",
          "package": "distributed-process",
          "partial": "Typed Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:TypedChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Unlink",
          "package": "distributed-process",
          "signature": "Unlink !Identifier",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Unlink",
          "package": "distributed-process",
          "partial": "Unlink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Unlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Unmonitor",
          "package": "distributed-process",
          "signature": "Unmonitor !MonitorRef",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "Unmonitor",
          "package": "distributed-process",
          "partial": "Unmonitor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:Unmonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "WhereIs",
          "package": "distributed-process",
          "signature": "WhereIs !String",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "WhereIs",
          "package": "distributed-process",
          "partial": "Where Is",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:WhereIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Distributed.Process.Internal.Types\",\"Control.Distributed.Process\"]",
          "name": "WhereIsReply",
          "package": "distributed-process",
          "signature": "WhereIsReply String (Maybe ProcessId)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#WhereIsReply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:WhereIsReply\",\"http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:WhereIsReply\"]"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "WhereIsReply",
          "package": "distributed-process",
          "partial": "Where Is Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:WhereIsReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "WithImplicitReconnect",
          "package": "distributed-process",
          "signature": "WithImplicitReconnect",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ImplicitReconnect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "WithImplicitReconnect",
          "package": "distributed-process",
          "partial": "With Implicit Reconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:WithImplicitReconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_channelCounter",
          "package": "distributed-process",
          "signature": "Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_channelCounter",
          "package": "distributed-process",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_channelCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutgoing connections\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_localConnections",
          "package": "distributed-process",
          "signature": "(Map (Identifier, Identifier) (Connection, ImplicitReconnect))",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
          "type": "function"
        },
        "index": {
          "description": "Outgoing connections",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_localConnections",
          "normalized": "(Map(Identifier,Identifier)(Connection,ImplicitReconnect))",
          "package": "distributed-process",
          "partial": "Connections",
          "signature": "(Map(Identifier,Identifier)(Connection,ImplicitReconnect))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_localConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounter to assign PIDs\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_localPidCounter",
          "package": "distributed-process",
          "signature": "Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
          "type": "function"
        },
        "index": {
          "description": "Counter to assign PIDs",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_localPidCounter",
          "package": "distributed-process",
          "partial": "Pid Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_localPidCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eunique\u003c/code\u003e value used to create PIDs (so that processes on\n restarted nodes have new PIDs)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_localPidUnique",
          "package": "distributed-process",
          "signature": "Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
          "type": "function"
        },
        "index": {
          "description": "The unique value used to create PIDs so that processes on restarted nodes have new PIDs",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_localPidUnique",
          "package": "distributed-process",
          "partial": "Pid Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_localPidUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcesses running on this node\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_localProcesses",
          "package": "distributed-process",
          "signature": "(Map LocalProcessId LocalProcess)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNodeState",
          "type": "function"
        },
        "index": {
          "description": "Processes running on this node",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_localProcesses",
          "package": "distributed-process",
          "partial": "Processes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_localProcesses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_monitorCounter",
          "package": "distributed-process",
          "signature": "Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_monitorCounter",
          "package": "distributed-process",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_monitorCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_spawnCounter",
          "package": "distributed-process",
          "signature": "Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_spawnCounter",
          "package": "distributed-process",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_spawnCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_typedChannels",
          "package": "distributed-process",
          "signature": "(Map LocalSendPortId TypedChannel)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "_typedChannels",
          "package": "distributed-process",
          "partial": "Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:_typedChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "channelCounter",
          "package": "distributed-process",
          "signature": "Accessor LocalProcessState LocalSendPortId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#channelCounter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "channelCounter",
          "package": "distributed-process",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:channelCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn any serialiable term into a message\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "createMessage",
          "package": "distributed-process",
          "signature": "a -\u003e Message",
          "source": "src/Control-Distributed-Process-Internal-Types.html#createMessage",
          "type": "function"
        },
        "index": {
          "description": "Turn any serialiable term into message",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "createMessage",
          "normalized": "a-\u003eMessage",
          "package": "distributed-process",
          "partial": "Message",
          "signature": "a-\u003eMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:createMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ctrlMsgSender",
          "package": "distributed-process",
          "signature": "Identifier",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NCMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ctrlMsgSender",
          "package": "distributed-process",
          "partial": "Msg Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ctrlMsgSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ctrlMsgSignal",
          "package": "distributed-process",
          "signature": "ProcessSignal",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NCMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "ctrlMsgSignal",
          "package": "distributed-process",
          "partial": "Msg Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:ctrlMsgSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "firstNonReservedProcessId",
          "package": "distributed-process",
          "signature": "Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#firstNonReservedProcessId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "firstNonReservedProcessId",
          "package": "distributed-process",
          "partial": "Non Reserved Process Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:firstNonReservedProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "forever'",
          "package": "distributed-process",
          "signature": "m a -\u003e m b",
          "source": "src/Control-Distributed-Process-Internal-Types.html#forever%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "forever'",
          "normalized": "a b-\u003ea c",
          "package": "distributed-process",
          "signature": "m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:forever-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localConnectionBetween",
          "package": "distributed-process",
          "signature": "Identifier -\u003e Identifier -\u003e Accessor LocalNodeState (Maybe (Connection, ImplicitReconnect))",
          "source": "src/Control-Distributed-Process-Internal-Types.html#localConnectionBetween",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localConnectionBetween",
          "normalized": "Identifier-\u003eIdentifier-\u003eAccessor LocalNodeState(Maybe(Connection,ImplicitReconnect))",
          "package": "distributed-process",
          "partial": "Connection Between",
          "signature": "Identifier-\u003eIdentifier-\u003eAccessor LocalNodeState(Maybe(Connection,ImplicitReconnect))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localConnectionBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localConnections",
          "package": "distributed-process",
          "signature": "Accessor LocalNodeState (Map (Identifier, Identifier) (Connection, ImplicitReconnect))",
          "source": "src/Control-Distributed-Process-Internal-Types.html#localConnections",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localConnections",
          "normalized": "Accessor LocalNodeState(Map(Identifier,Identifier)(Connection,ImplicitReconnect))",
          "package": "distributed-process",
          "partial": "Connections",
          "signature": "Accessor LocalNodeState(Map(Identifier,Identifier)(Connection,ImplicitReconnect))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChannel for the node controller\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localCtrlChan",
          "package": "distributed-process",
          "signature": "(Chan NCMsg)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
          "type": "function"
        },
        "index": {
          "description": "Channel for the node controller",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localCtrlChan",
          "package": "distributed-process",
          "partial": "Ctrl Chan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localCtrlChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe network endpoint associated with this node\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localEndPoint",
          "package": "distributed-process",
          "signature": "EndPoint",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
          "type": "function"
        },
        "index": {
          "description": "The network endpoint associated with this node",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localEndPoint",
          "package": "distributed-process",
          "partial": "End Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localEndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e of the node\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localNodeId",
          "package": "distributed-process",
          "signature": "NodeId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
          "type": "function"
        },
        "index": {
          "description": "NodeId of the node",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localNodeId",
          "package": "distributed-process",
          "partial": "Node Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localNodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localPidCounter",
          "package": "distributed-process",
          "signature": "Accessor LocalNodeState Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#localPidCounter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localPidCounter",
          "package": "distributed-process",
          "partial": "Pid Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localPidCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localPidUnique",
          "package": "distributed-process",
          "signature": "Accessor LocalNodeState Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#localPidUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localPidUnique",
          "package": "distributed-process",
          "partial": "Pid Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localPidUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localProcessWithId",
          "package": "distributed-process",
          "signature": "LocalProcessId -\u003e Accessor LocalNodeState (Maybe LocalProcess)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#localProcessWithId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localProcessWithId",
          "normalized": "LocalProcessId-\u003eAccessor LocalNodeState(Maybe LocalProcess)",
          "package": "distributed-process",
          "partial": "Process With Id",
          "signature": "LocalProcessId-\u003eAccessor LocalNodeState(Maybe LocalProcess)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localProcessWithId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localProcesses",
          "package": "distributed-process",
          "signature": "Accessor LocalNodeState (Map LocalProcessId LocalProcess)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#localProcesses",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localProcesses",
          "package": "distributed-process",
          "partial": "Processes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localProcesses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal node state\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localState",
          "package": "distributed-process",
          "signature": "(StrictMVar LocalNodeState)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
          "type": "function"
        },
        "index": {
          "description": "Local node state",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localState",
          "package": "distributed-process",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent active system debug/trace log\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localTracer",
          "package": "distributed-process",
          "signature": "Tracer",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
          "type": "function"
        },
        "index": {
          "description": "Current active system debug trace log",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "localTracer",
          "package": "distributed-process",
          "partial": "Tracer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:localTracer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "lpidCounter",
          "package": "distributed-process",
          "signature": "Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "lpidCounter",
          "package": "distributed-process",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:lpidCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "lpidUnique",
          "package": "distributed-process",
          "signature": "Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcessId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "lpidUnique",
          "package": "distributed-process",
          "partial": "Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:lpidUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "messageEncoding",
          "package": "distributed-process",
          "signature": "ByteString",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "messageEncoding",
          "package": "distributed-process",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:messageEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "messageFingerprint",
          "package": "distributed-process",
          "signature": "Fingerprint",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "messageFingerprint",
          "package": "distributed-process",
          "partial": "Fingerprint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:messageFingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a message\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "messageToPayload",
          "package": "distributed-process",
          "signature": "Message -\u003e [ByteString]",
          "source": "src/Control-Distributed-Process-Internal-Types.html#messageToPayload",
          "type": "function"
        },
        "index": {
          "description": "Serialize message",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "messageToPayload",
          "normalized": "Message-\u003e[ByteString]",
          "package": "distributed-process",
          "partial": "To Payload",
          "signature": "Message-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:messageToPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "monitorCounter",
          "package": "distributed-process",
          "signature": "Accessor LocalProcessState Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#monitorCounter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "monitorCounter",
          "package": "distributed-process",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:monitorCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique to distinguish multiple monitor requests by the same process\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "monitorRefCounter",
          "package": "distributed-process",
          "signature": "Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
          "type": "function"
        },
        "index": {
          "description": "Unique to distinguish multiple monitor requests by the same process",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "monitorRefCounter",
          "package": "distributed-process",
          "partial": "Ref Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:monitorRefCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the entity to be monitored\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "monitorRefIdent",
          "package": "distributed-process",
          "signature": "Identifier",
          "source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
          "type": "function"
        },
        "index": {
          "description": "ID of the entity to be monitored",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "monitorRefIdent",
          "package": "distributed-process",
          "partial": "Ref Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:monitorRefIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "nodeAddress",
          "package": "distributed-process",
          "signature": "EndPointAddress",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "nodeAddress",
          "package": "distributed-process",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:nodeAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "nodeOf",
          "package": "distributed-process",
          "signature": "Identifier -\u003e NodeId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#nodeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "nodeOf",
          "normalized": "Identifier-\u003eNodeId",
          "package": "distributed-process",
          "partial": "Of",
          "signature": "Identifier-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:nodeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "nullProcessId",
          "package": "distributed-process",
          "signature": "NodeId -\u003e ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#nullProcessId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "nullProcessId",
          "normalized": "NodeId-\u003eProcessId",
          "package": "distributed-process",
          "partial": "Process Id",
          "signature": "NodeId-\u003eProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:nullProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize a message\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "payloadToMessage",
          "package": "distributed-process",
          "signature": "[ByteString] -\u003e Message",
          "source": "src/Control-Distributed-Process-Internal-Types.html#payloadToMessage",
          "type": "function"
        },
        "index": {
          "description": "Deserialize message",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "payloadToMessage",
          "normalized": "[ByteString]-\u003eMessage",
          "package": "distributed-process",
          "partial": "To Message",
          "signature": "[ByteString]-\u003eMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:payloadToMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processId",
          "package": "distributed-process",
          "signature": "ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processId",
          "package": "distributed-process",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode-local identifier for the process\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processLocalId",
          "package": "distributed-process",
          "signature": "LocalProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
          "type": "function"
        },
        "index": {
          "description": "Node-local identifier for the process",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processLocalId",
          "package": "distributed-process",
          "partial": "Local Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processLocalId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processNode",
          "package": "distributed-process",
          "signature": "LocalNode",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processNode",
          "package": "distributed-process",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ID of the node the process is running on\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processNodeId",
          "package": "distributed-process",
          "signature": "NodeId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
          "type": "function"
        },
        "index": {
          "description": "The ID of the node the process is running on",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processNodeId",
          "package": "distributed-process",
          "partial": "Node Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processNodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processQueue",
          "package": "distributed-process",
          "signature": "(CQueue Message)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processQueue",
          "package": "distributed-process",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processState",
          "package": "distributed-process",
          "signature": "(StrictMVar LocalProcessState)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processState",
          "package": "distributed-process",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processThread",
          "package": "distributed-process",
          "signature": "ThreadId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processThread",
          "package": "distributed-process",
          "partial": "Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processWeakQ",
          "package": "distributed-process",
          "signature": "(Weak (CQueue Message))",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "processWeakQ",
          "package": "distributed-process",
          "partial": "Weak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:processWeakQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "receiveSTM",
          "package": "distributed-process",
          "signature": "STM a",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ReceivePort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "receiveSTM",
          "package": "distributed-process",
          "partial": "STM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:receiveSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuntime lookup table for supporting closures\n TODO: this should be part of the CH state, not the local endpoint state\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "remoteTable",
          "package": "distributed-process",
          "signature": "RemoteTable",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
          "type": "function"
        },
        "index": {
          "description": "Runtime lookup table for supporting closures TODO this should be part of the CH state not the local endpoint state",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "remoteTable",
          "package": "distributed-process",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:remoteTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstructor for \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e (not exported to the public API)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "runLocalProcess",
          "package": "distributed-process",
          "signature": "LocalProcess -\u003e Process a -\u003e IO a",
          "source": "src/Control-Distributed-Process-Internal-Types.html#runLocalProcess",
          "type": "function"
        },
        "index": {
          "description": "Deconstructor for Process not exported to the public API",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "runLocalProcess",
          "normalized": "LocalProcess-\u003eProcess a-\u003eIO a",
          "package": "distributed-process",
          "partial": "Local Process",
          "signature": "LocalProcess-\u003eProcess a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:runLocalProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (unique) ID of this send port\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "sendPortId",
          "package": "distributed-process",
          "signature": "SendPortId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SendPort",
          "type": "function"
        },
        "index": {
          "description": "The unique ID of this send port",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "sendPortId",
          "package": "distributed-process",
          "partial": "Port Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:sendPortId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess-local ID of the channel\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "sendPortLocalId",
          "package": "distributed-process",
          "signature": "LocalSendPortId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
          "type": "function"
        },
        "index": {
          "description": "Process-local ID of the channel",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "sendPortLocalId",
          "package": "distributed-process",
          "partial": "Port Local Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:sendPortLocalId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ID of the process that will receive messages sent on this port\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "sendPortProcessId",
          "package": "distributed-process",
          "signature": "ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
          "type": "function"
        },
        "index": {
          "description": "The ID of the process that will receive messages sent on this port",
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "sendPortProcessId",
          "package": "distributed-process",
          "partial": "Port Process Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:sendPortProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "spawnCounter",
          "package": "distributed-process",
          "signature": "Accessor LocalProcessState Int32",
          "source": "src/Control-Distributed-Process-Internal-Types.html#spawnCounter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "spawnCounter",
          "package": "distributed-process",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:spawnCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "typedChannelWithId",
          "package": "distributed-process",
          "signature": "LocalSendPortId -\u003e Accessor LocalProcessState (Maybe TypedChannel)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#typedChannelWithId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "typedChannelWithId",
          "normalized": "LocalSendPortId-\u003eAccessor LocalProcessState(Maybe TypedChannel)",
          "package": "distributed-process",
          "partial": "Channel With Id",
          "signature": "LocalSendPortId-\u003eAccessor LocalProcessState(Maybe TypedChannel)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:typedChannelWithId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "typedChannels",
          "package": "distributed-process",
          "signature": "Accessor LocalProcessState (Map LocalSendPortId TypedChannel)",
          "source": "src/Control-Distributed-Process-Internal-Types.html#typedChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "typedChannels",
          "package": "distributed-process",
          "partial": "Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:typedChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "unProcess",
          "package": "distributed-process",
          "signature": "ReaderT LocalProcess IO a",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal Types",
          "module": "Control.Distributed.Process.Internal.Types",
          "name": "unProcess",
          "package": "distributed-process",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-Types.html#v:unProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClone of Control.Concurrent.STM.TQueue with support for mkWeakTQueue\n\u003c/p\u003e\u003cp\u003eNot all functionality from the original module is available: unGetTQueue,\n peekTQueue and tryPeekTQueue are missing. In order to implement these we'd\n need to be able to touch# the write end of the queue inside unGetTQueue, but\n that means we need a version of touch# that works within the STM monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "WeakTQueue",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-WeakTQueue.html",
          "type": "module"
        },
        "index": {
          "description": "Clone of Control.Concurrent.STM.TQueue with support for mkWeakTQueue Not all functionality from the original module is available unGetTQueue peekTQueue and tryPeekTQueue are missing In order to implement these we need to be able to touch the write end of the queue inside unGetTQueue but that means we need version of touch that works within the STM monad",
          "hierarchy": "Control Distributed Process Internal WeakTQueue",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "WeakTQueue",
          "package": "distributed-process",
          "partial": "Weak TQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "TQueue",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#TQueue",
          "type": "data"
        },
        "index": {
          "description": "TQueue is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Control Distributed Process Internal WeakTQueue",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "TQueue",
          "package": "distributed-process",
          "partial": "TQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#t:TQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the supplied \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "isEmptyTQueue",
          "package": "distributed-process",
          "signature": "TQueue a -\u003e STM Bool",
          "source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#isEmptyTQueue",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the supplied TQueue is empty",
          "hierarchy": "Control Distributed Process Internal WeakTQueue",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "isEmptyTQueue",
          "normalized": "TQueue a-\u003eSTM Bool",
          "package": "distributed-process",
          "partial": "Empty TQueue",
          "signature": "TQueue a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:isEmptyTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "mkWeakTQueue",
          "package": "distributed-process",
          "signature": "TQueue a -\u003e IO () -\u003e IO (Weak (TQueue a))",
          "source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#mkWeakTQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Internal WeakTQueue",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "mkWeakTQueue",
          "normalized": "TQueue a-\u003eIO()-\u003eIO(Weak(TQueue a))",
          "package": "distributed-process",
          "partial": "Weak TQueue",
          "signature": "TQueue a-\u003eIO()-\u003eIO(Weak(TQueue a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:mkWeakTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild and returns a new instance of \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "newTQueue",
          "package": "distributed-process",
          "signature": "STM (TQueue a)",
          "source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#newTQueue",
          "type": "function"
        },
        "index": {
          "description": "Build and returns new instance of TQueue",
          "hierarchy": "Control Distributed Process Internal WeakTQueue",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "newTQueue",
          "package": "distributed-process",
          "partial": "TQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:newTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIO\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003enewTQueue\u003c/a\u003e\u003c/code\u003e.  This is useful for creating top-level\n \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e, because using\n \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e inside \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e isn't\n possible.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "newTQueueIO",
          "package": "distributed-process",
          "signature": "IO (TQueue a)",
          "source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#newTQueueIO",
          "type": "function"
        },
        "index": {
          "description": "IO version of newTQueue This is useful for creating top-level TQueue using unsafePerformIO because using atomically inside unsafePerformIO isn possible",
          "hierarchy": "Control Distributed Process Internal WeakTQueue",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "newTQueueIO",
          "package": "distributed-process",
          "partial": "TQueue IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:newTQueueIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the next value from the \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "readTQueue",
          "package": "distributed-process",
          "signature": "TQueue a -\u003e STM a",
          "source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#readTQueue",
          "type": "function"
        },
        "index": {
          "description": "Read the next value from the TQueue",
          "hierarchy": "Control Distributed Process Internal WeakTQueue",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "readTQueue",
          "normalized": "TQueue a-\u003eSTM a",
          "package": "distributed-process",
          "partial": "TQueue",
          "signature": "TQueue a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:readTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ereadTQueue\u003c/a\u003e\u003c/code\u003e which does not retry. Instead it\n returns \u003ccode\u003eNothing\u003c/code\u003e if no value is available.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "tryReadTQueue",
          "package": "distributed-process",
          "signature": "TQueue a -\u003e STM (Maybe a)",
          "source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#tryReadTQueue",
          "type": "function"
        },
        "index": {
          "description": "version of readTQueue which does not retry Instead it returns Nothing if no value is available",
          "hierarchy": "Control Distributed Process Internal WeakTQueue",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "tryReadTQueue",
          "normalized": "TQueue a-\u003eSTM(Maybe a)",
          "package": "distributed-process",
          "partial": "Read TQueue",
          "signature": "TQueue a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:tryReadTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a \u003ccode\u003e\u003ca\u003eTQueue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "writeTQueue",
          "package": "distributed-process",
          "signature": "TQueue a -\u003e a -\u003e STM ()",
          "source": "src/Control-Distributed-Process-Internal-WeakTQueue.html#writeTQueue",
          "type": "function"
        },
        "index": {
          "description": "Write value to TQueue",
          "hierarchy": "Control Distributed Process Internal WeakTQueue",
          "module": "Control.Distributed.Process.Internal.WeakTQueue",
          "name": "writeTQueue",
          "normalized": "TQueue a-\u003ea-\u003eSTM()",
          "package": "distributed-process",
          "partial": "TQueue",
          "signature": "TQueue a-\u003ea-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Internal-WeakTQueue.html#v:writeTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLocal nodes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process.Node",
          "name": "Node",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Node.html",
          "type": "module"
        },
        "index": {
          "description": "Local nodes",
          "hierarchy": "Control Distributed Process Node",
          "module": "Control.Distributed.Process.Node",
          "name": "Node",
          "package": "distributed-process",
          "partial": "Node",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal nodes\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Node",
          "name": "LocalNode",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#LocalNode",
          "type": "data"
        },
        "index": {
          "description": "Local nodes",
          "hierarchy": "Control Distributed Process Node",
          "module": "Control.Distributed.Process.Node",
          "name": "LocalNode",
          "package": "distributed-process",
          "partial": "Local Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#t:LocalNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce-close a local node\n\u003c/p\u003e\u003cp\u003eTODO: for now we just close the associated endpoint\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Node",
          "name": "closeLocalNode",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Node.html#closeLocalNode",
          "type": "function"
        },
        "index": {
          "description": "Force-close local node TODO for now we just close the associated endpoint",
          "hierarchy": "Control Distributed Process Node",
          "module": "Control.Distributed.Process.Node",
          "name": "closeLocalNode",
          "normalized": "LocalNode-\u003eIO()",
          "package": "distributed-process",
          "partial": "Local Node",
          "signature": "LocalNode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:closeLocalNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a new process on a local node\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Node",
          "name": "forkProcess",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e Process () -\u003e IO ProcessId",
          "source": "src/Control-Distributed-Process-Node.html#forkProcess",
          "type": "function"
        },
        "index": {
          "description": "Spawn new process on local node",
          "hierarchy": "Control Distributed Process Node",
          "module": "Control.Distributed.Process.Node",
          "name": "forkProcess",
          "normalized": "LocalNode-\u003eProcess()-\u003eIO ProcessId",
          "package": "distributed-process",
          "partial": "Process",
          "signature": "LocalNode-\u003eProcess()-\u003eIO ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:forkProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Node",
          "name": "initRemoteTable",
          "package": "distributed-process",
          "signature": "RemoteTable",
          "source": "src/Control-Distributed-Process-Node.html#initRemoteTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process Node",
          "module": "Control.Distributed.Process.Node",
          "name": "initRemoteTable",
          "package": "distributed-process",
          "partial": "Remote Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:initRemoteTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e of the node\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Node",
          "name": "localNodeId",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e NodeId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#localNodeId",
          "type": "function"
        },
        "index": {
          "description": "NodeId of the node",
          "hierarchy": "Control Distributed Process Node",
          "module": "Control.Distributed.Process.Node",
          "name": "localNodeId",
          "normalized": "LocalNode-\u003eNodeId",
          "package": "distributed-process",
          "partial": "Node Id",
          "signature": "LocalNode-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:localNodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new local node.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Node",
          "name": "newLocalNode",
          "package": "distributed-process",
          "signature": "Transport -\u003e RemoteTable -\u003e IO LocalNode",
          "source": "src/Control-Distributed-Process-Node.html#newLocalNode",
          "type": "function"
        },
        "index": {
          "description": "Initialize new local node",
          "hierarchy": "Control Distributed Process Node",
          "module": "Control.Distributed.Process.Node",
          "name": "newLocalNode",
          "normalized": "Transport-\u003eRemoteTable-\u003eIO LocalNode",
          "package": "distributed-process",
          "partial": "Local Node",
          "signature": "Transport-\u003eRemoteTable-\u003eIO LocalNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:newLocalNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a process on a local node and wait for it to finish\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Node",
          "name": "runProcess",
          "package": "distributed-process",
          "signature": "LocalNode -\u003e Process () -\u003e IO ()",
          "source": "src/Control-Distributed-Process-Node.html#runProcess",
          "type": "function"
        },
        "index": {
          "description": "Run process on local node and wait for it to finish",
          "hierarchy": "Control Distributed Process Node",
          "module": "Control.Distributed.Process.Node",
          "name": "runProcess",
          "normalized": "LocalNode-\u003eProcess()-\u003eIO()",
          "package": "distributed-process",
          "partial": "Process",
          "signature": "LocalNode-\u003eProcess()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Node.html#v:runProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Serializable",
          "name": "Serializable",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Serializable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Distributed Process Serializable",
          "module": "Control.Distributed.Process.Serializable",
          "name": "Serializable",
          "package": "distributed-process",
          "partial": "Serializable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process.Serializable",
          "name": "Fingerprint",
          "package": "distributed-process",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Distributed Process Serializable",
          "module": "Control.Distributed.Process.Serializable",
          "name": "Fingerprint",
          "package": "distributed-process",
          "partial": "Fingerprint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#t:Fingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObjects that can be sent across the network\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Serializable",
          "name": "Serializable",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Serializable.html#Serializable",
          "type": "class"
        },
        "index": {
          "description": "Objects that can be sent across the network",
          "hierarchy": "Control Distributed Process Serializable",
          "module": "Control.Distributed.Process.Serializable",
          "name": "Serializable",
          "package": "distributed-process",
          "partial": "Serializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#t:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReification of \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e (see \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Serializable",
          "name": "SerializableDict",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Serializable.html#SerializableDict",
          "type": "data"
        },
        "index": {
          "description": "Reification of Serializable see Control.Distributed.Process.Closure",
          "hierarchy": "Control Distributed Process Serializable",
          "module": "Control.Distributed.Process.Serializable",
          "name": "SerializableDict",
          "package": "distributed-process",
          "partial": "Serializable Dict",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#t:SerializableDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a bytestring into a fingerprint. Throws an IO exception on failure\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Serializable",
          "name": "decodeFingerprint",
          "package": "distributed-process",
          "signature": "ByteString -\u003e Fingerprint",
          "source": "src/Control-Distributed-Process-Serializable.html#decodeFingerprint",
          "type": "function"
        },
        "index": {
          "description": "Decode bytestring into fingerprint Throws an IO exception on failure",
          "hierarchy": "Control Distributed Process Serializable",
          "module": "Control.Distributed.Process.Serializable",
          "name": "decodeFingerprint",
          "normalized": "ByteString-\u003eFingerprint",
          "package": "distributed-process",
          "partial": "Fingerprint",
          "signature": "ByteString-\u003eFingerprint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:decodeFingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode type representation as a bytestring\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Serializable",
          "name": "encodeFingerprint",
          "package": "distributed-process",
          "signature": "Fingerprint -\u003e ByteString",
          "source": "src/Control-Distributed-Process-Serializable.html#encodeFingerprint",
          "type": "function"
        },
        "index": {
          "description": "Encode type representation as bytestring",
          "hierarchy": "Control Distributed Process Serializable",
          "module": "Control.Distributed.Process.Serializable",
          "name": "encodeFingerprint",
          "normalized": "Fingerprint-\u003eByteString",
          "package": "distributed-process",
          "partial": "Fingerprint",
          "signature": "Fingerprint-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:encodeFingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fingerprint of the typeRep of the argument\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Serializable",
          "name": "fingerprint",
          "package": "distributed-process",
          "signature": "a -\u003e Fingerprint",
          "source": "src/Control-Distributed-Process-Serializable.html#fingerprint",
          "type": "function"
        },
        "index": {
          "description": "The fingerprint of the typeRep of the argument",
          "hierarchy": "Control Distributed Process Serializable",
          "module": "Control.Distributed.Process.Serializable",
          "name": "fingerprint",
          "normalized": "a-\u003eFingerprint",
          "package": "distributed-process",
          "signature": "a-\u003eFingerprint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:fingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow fingerprint (for debugging purposes)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Serializable",
          "name": "showFingerprint",
          "package": "distributed-process",
          "signature": "Fingerprint -\u003e ShowS",
          "source": "src/Control-Distributed-Process-Serializable.html#showFingerprint",
          "type": "function"
        },
        "index": {
          "description": "Show fingerprint for debugging purposes",
          "hierarchy": "Control Distributed Process Serializable",
          "module": "Control.Distributed.Process.Serializable",
          "name": "showFingerprint",
          "normalized": "Fingerprint-\u003eShowS",
          "package": "distributed-process",
          "partial": "Fingerprint",
          "signature": "Fingerprint-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:showFingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of a fingerprint\n\u003c/p\u003e",
          "module": "Control.Distributed.Process.Serializable",
          "name": "sizeOfFingerprint",
          "package": "distributed-process",
          "signature": "Int",
          "source": "src/Control-Distributed-Process-Serializable.html#sizeOfFingerprint",
          "type": "function"
        },
        "index": {
          "description": "Size of fingerprint",
          "hierarchy": "Control Distributed Process Serializable",
          "module": "Control.Distributed.Process.Serializable",
          "name": "sizeOfFingerprint",
          "package": "distributed-process",
          "partial": "Of Fingerprint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process-Serializable.html#v:sizeOfFingerprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eCloud Haskell\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThis is an implementation of Cloud Haskell, as described in\n\u003cem\u003eTowards Haskell in the Cloud\u003c/em\u003e by Jeff Epstein, Andrew Black, and Simon\nPeyton Jones (\u003ca\u003ehttp://research.microsoft.com/en-us/um/people/simonpj/papers/parallel/\u003c/a\u003e),\nalthough some of the details are different. The precise message passing\nsemantics are based on \u003cem\u003eA unified semantics for future Erlang\u003c/em\u003e by Hans\nSvensson, Lars-&#197;ke Fredlund and Clara Benac Earle.\n\u003c/p\u003e\u003cp\u003eFor a detailed description of the package and other reference materials,\nplease see the distributed-process wiki page on github:\n\u003ca\u003ehttps://github.com/haskell-distributed/distributed-process/wiki\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Distributed.Process",
          "name": "Process",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process.html",
          "type": "module"
        },
        "index": {
          "description": "Cloud Haskell This is an implementation of Cloud Haskell as described in Towards Haskell in the Cloud by Jeff Epstein Andrew Black and Simon Peyton Jones http research.microsoft.com en-us um people simonpj papers parallel although some of the details are different The precise message passing semantics are based on unified semantics for future Erlang by Hans Svensson Lars ke Fredlund and Clara Benac Earle For detailed description of the package and other reference materials please see the distributed-process wiki page on github https github.com haskell-distributed distributed-process wiki",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "Process",
          "package": "distributed-process",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a received message and provides two basic operations on it.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "AbstractMessage",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#AbstractMessage",
          "type": "data"
        },
        "index": {
          "description": "Represents received message and provides two basic operations on it",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "AbstractMessage",
          "package": "distributed-process",
          "partial": "Abstract Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:AbstractMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closure is a static value and an encoded environment\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "Closure",
          "package": "distributed-process",
          "type": "data"
        },
        "index": {
          "description": "closure is static value and an encoded environment",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "Closure",
          "package": "distributed-process",
          "partial": "Closure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronius) reply from \u003ccode\u003espawn\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "DidSpawn",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DidSpawn",
          "type": "data"
        },
        "index": {
          "description": "Asynchronius reply from spawn",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "DidSpawn",
          "package": "distributed-process",
          "partial": "Did Spawn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:DidSpawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhy did a process die?\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "DiedReason",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#DiedReason",
          "type": "data"
        },
        "index": {
          "description": "Why did process die",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "DiedReason",
          "package": "distributed-process",
          "partial": "Died Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:DiedReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou need this when using \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "Handler",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "You need this when using catches",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "Handler",
          "package": "distributed-process",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque type used in \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereceiveTimeout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "Match",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#Match",
          "type": "data"
        },
        "index": {
          "description": "Opaque type used in receiveWait and receiveTimeout",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "Match",
          "package": "distributed-process",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonitorRef is opaque for regular Cloud Haskell processes\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "MonitorRef",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#MonitorRef",
          "type": "data"
        },
        "index": {
          "description": "MonitorRef is opaque for regular Cloud Haskell processes",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "MonitorRef",
          "package": "distributed-process",
          "partial": "Monitor Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:MonitorRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode identifier\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "NodeId",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeId",
          "type": "data"
        },
        "index": {
          "description": "Node identifier",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "NodeId",
          "package": "distributed-process",
          "partial": "Node Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown when a linked node dies\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "NodeLinkException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeLinkException",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown when linked node dies",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "NodeLinkException",
          "package": "distributed-process",
          "partial": "Node Link Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:NodeLinkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage sent by node monitors\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "NodeMonitorNotification",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#NodeMonitorNotification",
          "type": "data"
        },
        "index": {
          "description": "Message sent by node monitors",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "NodeMonitorNotification",
          "package": "distributed-process",
          "partial": "Node Monitor Notification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:NodeMonitorNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown when a linked channel (port) dies\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "PortLinkException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#PortLinkException",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown when linked channel port dies",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "PortLinkException",
          "package": "distributed-process",
          "partial": "Port Link Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:PortLinkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage sent by channel (port) monitors\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "PortMonitorNotification",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#PortMonitorNotification",
          "type": "data"
        },
        "index": {
          "description": "Message sent by channel port monitors",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "PortMonitorNotification",
          "package": "distributed-process",
          "partial": "Port Monitor Notification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:PortMonitorNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Cloud Haskell \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "Process",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#Process",
          "type": "data"
        },
        "index": {
          "description": "The Cloud Haskell Process type",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "Process",
          "package": "distributed-process",
          "partial": "Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess identifier\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "ProcessId",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessId",
          "type": "data"
        },
        "index": {
          "description": "Process identifier",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "ProcessId",
          "package": "distributed-process",
          "partial": "Process Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide information about a running process\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "ProcessInfo",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessInfo",
          "type": "data"
        },
        "index": {
          "description": "Provide information about running process",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "ProcessInfo",
          "package": "distributed-process",
          "partial": "Process Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExceptions thrown when a linked process dies\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "ProcessLinkException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessLinkException",
          "type": "data"
        },
        "index": {
          "description": "Exceptions thrown when linked process dies",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "ProcessLinkException",
          "package": "distributed-process",
          "partial": "Process Link Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessLinkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage sent by process monitors\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "ProcessMonitorNotification",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessMonitorNotification",
          "type": "data"
        },
        "index": {
          "description": "Message sent by process monitors",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "ProcessMonitorNotification",
          "package": "distributed-process",
          "partial": "Process Monitor Notification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessMonitorNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException thrown when a process attempts to register\n a process under an already-registered name or to\n unregister a name that hasn't been registered\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "ProcessRegistrationException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ProcessRegistrationException",
          "type": "data"
        },
        "index": {
          "description": "Exception thrown when process attempts to register process under an already-registered name or to unregister name that hasn been registered",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "ProcessRegistrationException",
          "package": "distributed-process",
          "partial": "Process Registration Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessRegistrationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003eterminate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "ProcessTerminationException",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Primitives.html#ProcessTerminationException",
          "type": "data"
        },
        "index": {
          "description": "Thrown by terminate",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "ProcessTerminationException",
          "package": "distributed-process",
          "partial": "Process Termination Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ProcessTerminationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe receive end of a typed channel (not serializable)\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e implements \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e. This is especially useful when merging receive ports.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "ReceivePort",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#ReceivePort",
          "type": "data"
        },
        "index": {
          "description": "The receive end of typed channel not serializable Note that ReceivePort implements Functor Applicative Alternative and Monad This is especially useful when merging receive ports",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "ReceivePort",
          "package": "distributed-process",
          "partial": "Receive Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:ReceivePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronous) reply from \u003ccode\u003eregister\u003c/code\u003e and \u003ccode\u003eunregister\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "RegisterReply",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#RegisterReply",
          "type": "data"
        },
        "index": {
          "description": "Asynchronous reply from register and unregister",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "RegisterReply",
          "package": "distributed-process",
          "partial": "Register Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:RegisterReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuntime dictionary for \u003ccode\u003e\u003ca\u003eunstatic\u003c/a\u003e\u003c/code\u003e lookups \n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "RemoteTable",
          "package": "distributed-process",
          "type": "data"
        },
        "index": {
          "description": "Runtime dictionary for unstatic lookups",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "RemoteTable",
          "package": "distributed-process",
          "partial": "Remote Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:RemoteTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe send send of a typed channel (serializable)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "SendPort",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SendPort",
          "type": "data"
        },
        "index": {
          "description": "The send send of typed channel serializable",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "SendPort",
          "package": "distributed-process",
          "partial": "Send Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:SendPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA send port is identified by a SendPortId.\n\u003c/p\u003e\u003cp\u003eYou cannot send directly to a SendPortId; instead, use \u003ccode\u003enewChan\u003c/code\u003e\n to create a SendPort.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "SendPortId",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SendPortId",
          "type": "data"
        },
        "index": {
          "description": "send port is identified by SendPortId You cannot send directly to SendPortId instead use newChan to create SendPort",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "SendPortId",
          "package": "distributed-process",
          "partial": "Send Port Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:SendPortId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSpawnRef\u003c/a\u003e\u003c/code\u003e are used to return pids of spawned processes\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "SpawnRef",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#SpawnRef",
          "type": "data"
        },
        "index": {
          "description": "SpawnRef are used to return pids of spawned processes",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "SpawnRef",
          "package": "distributed-process",
          "partial": "Spawn Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:SpawnRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA static value. Static is opaque; see \u003ccode\u003e\u003ca\u003estaticLabel\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estaticApply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "Static",
          "package": "distributed-process",
          "type": "data"
        },
        "index": {
          "description": "static value Static is opaque see staticLabel and staticApply",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "Static",
          "package": "distributed-process",
          "partial": "Static",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Asynchronous) reply from \u003ccode\u003ewhereis\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "WhereIsReply",
          "package": "distributed-process",
          "source": "src/Control-Distributed-Process-Internal-Types.html#WhereIsReply",
          "type": "data"
        },
        "index": {
          "description": "Asynchronous reply from whereis",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "WhereIsReply",
          "package": "distributed-process",
          "partial": "Where Is Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#t:WhereIsReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a process remotely and wait for it to reply\n\u003c/p\u003e\u003cp\u003eWe monitor the remote process: if it dies before it can send a reply, we die\n too.\n\u003c/p\u003e\u003cp\u003eFor more information about \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSerializableDict\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e, see\n \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "call",
          "package": "distributed-process",
          "signature": "Static (SerializableDict a) -\u003e NodeId -\u003e Closure (Process a) -\u003e Process a",
          "source": "src/Control-Distributed-Process.html#call",
          "type": "function"
        },
        "index": {
          "description": "Run process remotely and wait for it to reply We monitor the remote process if it dies before it can send reply we die too For more information about Static SerializableDict and Closure see Control.Distributed.Process.Closure See also spawn",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "call",
          "normalized": "Static(SerializableDict a)-\u003eNodeId-\u003eClosure(Process a)-\u003eProcess a",
          "package": "distributed-process",
          "signature": "Static(SerializableDict a)-\u003eNodeId-\u003eClosure(Process a)-\u003eProcess a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Distributed.Process",
          "name": "closure",
          "package": "distributed-process",
          "signature": "Static (ByteString -\u003e a)-\u003e ByteString-\u003e Closure a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "closure",
          "normalized": "Static(ByteString-\u003ea)-\u003eByteString-\u003eClosure a",
          "package": "distributed-process",
          "signature": "Static(ByteString-\u003ea)-\u003eByteString-\u003eClosure a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "liftIO",
          "package": "distributed-process",
          "signature": "forall a.  IO a -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Lift computation from the IO monad",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "liftIO",
          "normalized": "a b IO c-\u003ed c",
          "package": "distributed-process",
          "partial": "IO",
          "signature": "forall a. IO a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ID of the node the process is running on\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "processNodeId",
          "package": "distributed-process",
          "signature": "ProcessId -\u003e NodeId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#processNodeId",
          "type": "function"
        },
        "index": {
          "description": "The ID of the node the process is running on",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "processNodeId",
          "normalized": "ProcessId-\u003eNodeId",
          "package": "distributed-process",
          "partial": "Node Id",
          "signature": "ProcessId-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:processNodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (unique) ID of this send port\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "sendPortId",
          "package": "distributed-process",
          "signature": "SendPort a -\u003e SendPortId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#sendPortId",
          "type": "function"
        },
        "index": {
          "description": "The unique ID of this send port",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "sendPortId",
          "normalized": "SendPort a-\u003eSendPortId",
          "package": "distributed-process",
          "partial": "Port Id",
          "signature": "SendPort a-\u003eSendPortId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:sendPortId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ID of the process that will receive messages sent on this port\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "sendPortProcessId",
          "package": "distributed-process",
          "signature": "SendPortId -\u003e ProcessId",
          "source": "src/Control-Distributed-Process-Internal-Types.html#sendPortProcessId",
          "type": "function"
        },
        "index": {
          "description": "The ID of the process that will receive messages sent on this port",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "sendPortProcessId",
          "normalized": "SendPortId-\u003eProcessId",
          "package": "distributed-process",
          "partial": "Port Process Id",
          "signature": "SendPortId-\u003eProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:sendPortProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a process\n\u003c/p\u003e\u003cp\u003eFor more information about \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e, see\n \u003ca\u003eControl.Distributed.Process.Closure\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "spawn",
          "package": "distributed-process",
          "signature": "NodeId -\u003e Closure (Process ()) -\u003e Process ProcessId",
          "source": "src/Control-Distributed-Process.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "Spawn process For more information about Closure see Control.Distributed.Process.Closure See also call",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "spawn",
          "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess ProcessId",
          "package": "distributed-process",
          "signature": "NodeId-\u003eClosure(Process())-\u003eProcess ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a new process, supplying it with a new \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e and return\n the corresponding \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "spawnChannel",
          "package": "distributed-process",
          "signature": "Static (SerializableDict a) -\u003e NodeId -\u003e Closure (ReceivePort a -\u003e Process ()) -\u003e Process (SendPort a)",
          "source": "src/Control-Distributed-Process.html#spawnChannel",
          "type": "function"
        },
        "index": {
          "description": "Spawn new process supplying it with new ReceivePort and return the corresponding SendPort",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "spawnChannel",
          "normalized": "Static(SerializableDict a)-\u003eNodeId-\u003eClosure(ReceivePort a-\u003eProcess())-\u003eProcess(SendPort a)",
          "package": "distributed-process",
          "partial": "Channel",
          "signature": "Static(SerializableDict a)-\u003eNodeId-\u003eClosure(ReceivePort a-\u003eProcess())-\u003eProcess(SendPort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new typed channel, spawn a process on the local node, passing it\n the receive port, and return the send port\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "spawnChannelLocal",
          "package": "distributed-process",
          "signature": "(ReceivePort a -\u003e Process ()) -\u003e Process (SendPort a)",
          "source": "src/Control-Distributed-Process.html#spawnChannelLocal",
          "type": "function"
        },
        "index": {
          "description": "Create new typed channel spawn process on the local node passing it the receive port and return the send port",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "spawnChannelLocal",
          "normalized": "(ReceivePort a-\u003eProcess())-\u003eProcess(SendPort a)",
          "package": "distributed-process",
          "partial": "Channel Local",
          "signature": "(ReceivePort a-\u003eProcess())-\u003eProcess(SendPort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnChannelLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a process and link to it\n\u003c/p\u003e\u003cp\u003eNote that this is just the sequential composition of \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e.\n (The \u003ca\u003eUnified\u003c/a\u003e semantics that underlies Cloud Haskell does not even support\n a synchronous link operation)\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "spawnLink",
          "package": "distributed-process",
          "signature": "NodeId -\u003e Closure (Process ()) -\u003e Process ProcessId",
          "source": "src/Control-Distributed-Process.html#spawnLink",
          "type": "function"
        },
        "index": {
          "description": "Spawn process and link to it Note that this is just the sequential composition of spawn and link The Unified semantics that underlies Cloud Haskell does not even support synchronous link operation",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "spawnLink",
          "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess ProcessId",
          "package": "distributed-process",
          "partial": "Link",
          "signature": "NodeId-\u003eClosure(Process())-\u003eProcess ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a process on the local node\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "spawnLocal",
          "package": "distributed-process",
          "signature": "Process () -\u003e Process ProcessId",
          "source": "src/Control-Distributed-Process.html#spawnLocal",
          "type": "function"
        },
        "index": {
          "description": "Spawn process on the local node",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "spawnLocal",
          "normalized": "Process()-\u003eProcess ProcessId",
          "package": "distributed-process",
          "partial": "Local",
          "signature": "Process()-\u003eProcess ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawnLink\u003c/a\u003e\u003c/code\u003e, but monitor the spawned process\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "spawnMonitor",
          "package": "distributed-process",
          "signature": "NodeId -\u003e Closure (Process ()) -\u003e Process (ProcessId, MonitorRef)",
          "source": "src/Control-Distributed-Process.html#spawnMonitor",
          "type": "function"
        },
        "index": {
          "description": "Like spawnLink but monitor the spawned process",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "spawnMonitor",
          "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess(ProcessId,MonitorRef)",
          "package": "distributed-process",
          "partial": "Monitor",
          "signature": "NodeId-\u003eClosure(Process())-\u003eProcess(ProcessId,MonitorRef)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnMonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a child process, have the child link to the parent and the parent\n monitor the child\n\u003c/p\u003e",
          "module": "Control.Distributed.Process",
          "name": "spawnSupervised",
          "package": "distributed-process",
          "signature": "NodeId -\u003e Closure (Process ()) -\u003e Process (ProcessId, MonitorRef)",
          "source": "src/Control-Distributed-Process.html#spawnSupervised",
          "type": "function"
        },
        "index": {
          "description": "Spawn child process have the child link to the parent and the parent monitor the child",
          "hierarchy": "Control Distributed Process",
          "module": "Control.Distributed.Process",
          "name": "spawnSupervised",
          "normalized": "NodeId-\u003eClosure(Process())-\u003eProcess(ProcessId,MonitorRef)",
          "package": "distributed-process",
          "partial": "Supervised",
          "signature": "NodeId-\u003eClosure(Process())-\u003eProcess(ProcessId,MonitorRef)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/distributed-process/docs/Control-Distributed-Process.html#v:spawnSupervised"
      }
    }
  ]
]