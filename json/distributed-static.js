[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eTowards Haskell in the Cloud\u003c/em\u003e (Epstein et al, Haskell Symposium 2011) \n introduces the concept of \u003cem\u003estatic\u003c/em\u003e values: values that are known at compile\n time. In a distributed setting where all nodes are running the same \n executable, static values can be serialized simply by transmitting a code\n pointer to the value. This however requires special compiler support, which\n is not yet available in ghc. We can mimick the behaviour by keeping an \n explicit mapping (\u003ccode\u003e\u003ca\u003eRemoteTable\u003c/a\u003e\u003c/code\u003e) from labels to values (and making sure that\n all distributed nodes are using the same \u003ccode\u003e\u003ca\u003eRemoteTable\u003c/a\u003e\u003c/code\u003e). In this module\n we implement this mimickry and various extensions.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eDynamic type checking\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe paper stipulates that \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e values should have a free \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e\n instance:\n\u003c/p\u003e\u003cpre\u003e instance Binary (Static a) \n\u003c/pre\u003e\u003cp\u003eThis however is not (runtime) type safe: for instance, what would be the\n behaviour of\n\u003c/p\u003e\u003cpre\u003e f :: Static Int -\u003e Static Bool \n f = decode . encode \n\u003c/pre\u003e\u003cp\u003eFor this reason we work only with \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e terms in this module, and\n implement runtime checks\n\u003c/p\u003e\u003cpre\u003e instance Typeable a =\u003e Binary (Static a)\n\u003c/pre\u003e\u003cp\u003eThe above function \u003ccode\u003ef\u003c/code\u003e typechecks but throws an exception if executed. The\n type representation we use, however, is not the standard\n \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Typeable\u003c/a\u003e but\n \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eData.Rank1Typeable\u003c/a\u003e. This means that we\n can represent polymorphic static values (see below for an example).\n\u003c/p\u003e\u003cp\u003eSince the runtime mapping (\u003ccode\u003e\u003ca\u003eRemoteTable\u003c/a\u003e\u003c/code\u003e) contains values of different types,\n it maps labels (\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es) to \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e values. Again, we\n use the implementation from \u003ca\u003eData.Rank1Dynamic\u003c/a\u003e so that we can store \n polymorphic dynamic values.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eCompositionality\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eStatic values as described in the paper are not compositional: there is no\n way to combine two static values and get a static value out of it. This\n makes sense when interpreting static strictly as \u003cem\u003eknown at compile time\u003c/em\u003e,\n but it severely limits expressiveness. However, the main motivation for\n \u003ccode\u003estatic\u003c/code\u003e is not that they are known at compile time but rather that \n \u003cem\u003ethey provide a free\u003c/em\u003e \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e \u003cem\u003einstance\u003c/em\u003e.  We therefore provide two basic\n constructors for \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e values:\n\u003c/p\u003e\u003cpre\u003e staticLabel :: String -\u003e Static a\n staticApply :: Static (a -\u003e b) -\u003e Static a -\u003e Static b\n\u003c/pre\u003e\u003cp\u003eThe first constructor refers to a label in a \u003ccode\u003e\u003ca\u003eRemoteTable\u003c/a\u003e\u003c/code\u003e. The second \n allows to apply a static function to a static argument, and makes \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\n compositional: once we have \u003ccode\u003e\u003ca\u003estaticApply\u003c/a\u003e\u003c/code\u003e we can implement numerous derived\n combinators on \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e values (we define a few in this module; see\n \u003ccode\u003e\u003ca\u003estaticCompose\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003estaticSplit\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003estaticConst\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eClosures\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eClosures in functional programming arise when we partially apply a function.\n A closure is a code pointer together with a runtime data structure that\n represents the value of the free variables of the function. A \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\n represents these closures explicitly so that they can be serialized:\n\u003c/p\u003e\u003cpre\u003e data Closure a = Closure (Static (ByteString -\u003e a)) ByteString\n\u003c/pre\u003e\u003cp\u003eSee \u003cem\u003eTowards Haskell in the Cloud\u003c/em\u003e for the rationale behind representing\n the function closure environment in serialized (\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e) form. Any\n static value can trivially be turned into a \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003estaticClosure\u003c/a\u003e\u003c/code\u003e). \n Moreover, since \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e is now compositional, we can also define derived\n operators on \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e values (\u003ccode\u003e\u003ca\u003eclosureApplyStatic\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclosureApply\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eclosureCompose\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eclosureSplit\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eMonomorphic example\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSuppose we are working in the context of some distributed environment, with\n a monadic type \u003ccode\u003eProcess\u003c/code\u003e representing processes, \u003ccode\u003eNodeId\u003c/code\u003e representing node\n addresses and \u003ccode\u003eProcessId\u003c/code\u003e representing process addresses. Suppose further \n that we have a primitive \n\u003c/p\u003e\u003cpre\u003e sendInt :: ProcessId -\u003e Int -\u003e Process ()\n\u003c/pre\u003e\u003cp\u003eWe might want to define\n\u003c/p\u003e\u003cpre\u003e sendIntClosure :: ProcessId -\u003e Closure (Int -\u003e Process ())\n\u003c/pre\u003e\u003cp\u003eIn order to do that, we need a static version of \u003ccode\u003esend\u003c/code\u003e, and a static\n decoder for \u003ccode\u003eProcessId\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e sendIntStatic :: Static (ProcessId -\u003e Int -\u003e Process ())\n sendIntStatic = staticLabel \"$send\"\n\u003c/pre\u003e\u003cpre\u003e decodeProcessIdStatic :: Static (ByteString -\u003e Int)\n decodeProcessIdStatic = staticLabel \"$decodeProcessId\"\n\u003c/pre\u003e\u003cp\u003ewhere of course we have to make sure to use an appropriate \u003ccode\u003e\u003ca\u003eRemoteTable\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e rtable :: RemoteTable\n rtable = registerStatic \"$send\" (toDynamic sendInt)\n        . registerStatic \"$decodeProcessId\" (toDynamic (decode :: ByteString -\u003e Int))\n        $ initRemoteTable\n\u003c/pre\u003e\u003cp\u003eWe can now define \u003ccode\u003esendIntClosure\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e sendIntClosure :: ProcessId -\u003e Closure (Int -\u003e Process ())\n sendIntClosure pid = closure decoder (encode pid)\n   where\n     decoder :: Static (ByteString -\u003e Int -\u003e Process ()) \n     decoder = sendIntStatic `staticCompose` decodeProcessIdStatic\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003ePolymorphic example\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSuppose we wanted to define a primitive\n\u003c/p\u003e\u003cpre\u003e sendIntResult :: ProcessId -\u003e Closure (Process Int) -\u003e Closure (Process ())\n\u003c/pre\u003e\u003cp\u003ewhich turns a process that computes an integer into a process that computes\n the integer and then sends it someplace else.\n\u003c/p\u003e\u003cp\u003eWe can define \n\u003c/p\u003e\u003cpre\u003e bindStatic :: (Typeable a, Typeable b) =\u003e Static (Process a -\u003e (a -\u003e Process b) -\u003e Process b)\n bindStatic = staticLabel \"$bind\"\n\u003c/pre\u003e\u003cp\u003eprovided that we register this label:\n\u003c/p\u003e\u003cpre\u003e rtable :: RemoteTable\n rtable = ...\n        . registerStatic \"$bind\" ((\u003e\u003e=) :: Process ANY1 -\u003e (ANY1 -\u003e Process ANY2) -\u003e Process ANY2)\n        $ initRemoteTable\n\u003c/pre\u003e\u003cp\u003e(Note that we are using the special \u003ccode\u003e\u003ca\u003eANY1\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eANY2\u003c/a\u003e\u003c/code\u003e types from \u003ca\u003eData.Rank1Typeable\u003c/a\u003e to represent this\n polymorphic value.) Once we have a static bind we can define \n\u003c/p\u003e\u003cpre\u003e sendIntResult :: ProcessId -\u003e Closure (Process Int) -\u003e Closure (Process ())\n sendIntResult pid cl = bindStatic `closureApplyStatic` cl `closureApply` sendIntClosure pid\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eDealing with qualified types\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eIn the above we were careful to avoid qualified types. Suppose that we have\n instead\n\u003c/p\u003e\u003cpre\u003e send :: Binary a =\u003e ProcessId -\u003e a -\u003e Process ()\n\u003c/pre\u003e\u003cp\u003eIf we now want to define \u003ccode\u003esendClosure\u003c/code\u003e, analogous to \u003ccode\u003esendIntClosure\u003c/code\u003e above,\n we somehow need to include the \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e instance in the closure -- after\n all, we can ship this closure someplace else, where it needs to accept an\n \u003ccode\u003ea\u003c/code\u003e, \u003cem\u003ethen encode it\u003c/em\u003e, and send it off. In order to do this, we need to turn\n the Binary instance into an explicit dictionary:\n\u003c/p\u003e\u003cpre\u003e data BinaryDict a where\n   BinaryDict :: Binary a =\u003e BinaryDict a\n\n sendDict :: BinaryDict a -\u003e ProcessId -\u003e a -\u003e Process ()\n sendDict BinaryDict = send\n\u003c/pre\u003e\u003cp\u003eNow \u003ccode\u003esendDict\u003c/code\u003e is a normal polymorphic value:\n\u003c/p\u003e\u003cpre\u003e sendDictStatic :: Static (BinaryDict a -\u003e ProcessId -\u003e a -\u003e Process ())\n sendDictStatic = staticLabel \"$sendDict\"\n\n rtable :: RemoteTable\n rtable = ...\n        . registerStatic \"$sendDict\" (sendDict :: BinaryDict ANY -\u003e ProcessId -\u003e ANY -\u003e Process ())\n        $ initRemoteTable\n\u003c/pre\u003e\u003cp\u003eso that we can define\n\u003c/p\u003e\u003cpre\u003e sendClosure :: Static (BinaryDict a) -\u003e Process a -\u003e Closure (a -\u003e Process ())\n sendClosure dict pid = closure decoder (encode pid)\n   where\n     decoder :: Static (ByteString -\u003e a -\u003e Process ())\n     decoder = (sendDictStatic `staticApply` dict) `staticCompose` decodeProcessIdStatic \n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eWord of Caution\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eYou should not \u003cem\u003edefine\u003c/em\u003e functions on \u003ccode\u003eANY\u003c/code\u003e and co. For example, the following\n definition of \u003ccode\u003ertable\u003c/code\u003e is incorrect:\n\u003c/p\u003e\u003cpre\u003e rtable :: RemoteTable\n rtable = registerStatic \"$sdictSendPort\" sdictSendPort\n        $ initRemoteTable\n   where\n     sdictSendPort :: SerializableDict ANY -\u003e SerializableDict (SendPort ANY)\n     sdictSendPort SerializableDict = SerializableDict\n\u003c/pre\u003e\u003cp\u003eThis definition of \u003ccode\u003esdictSendPort\u003c/code\u003e ignores its argument completely, and \n constructs a \u003ccode\u003eSerializableDict\u003c/code\u003e for the \u003cem\u003emonomorphic\u003c/em\u003e type \u003ccode\u003eSendPort ANY\u003c/code\u003e,\n which isn't what you want. Instead, you should do\n\u003c/p\u003e\u003cpre\u003e rtable :: RemoteTable\n rtable = registerStatic \"$sdictSendPort\" (sdictSendPort :: SerializableDict ANY -\u003e SerializableDict (SendPort ANY))\n        $ initRemoteTable\n   where\n     sdictSendPort :: forall a. SerializableDict a -\u003e SerializableDict (SendPort a)\n     sdictSendPort SerializableDict = SerializableDict\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "module",
        "fct-source": "src/Control-Distributed-Static.html",
        "fct-type": "module",
        "title": "Static"
      },
      "index": {
        "description": "Towards Haskell in the Cloud Epstein et al Haskell Symposium introduces the concept of static values values that are known at compile time In distributed setting where all nodes are running the same executable static values can be serialized simply by transmitting code pointer to the value This however requires special compiler support which is not yet available in ghc We can mimick the behaviour by keeping an explicit mapping RemoteTable from labels to values and making sure that all distributed nodes are using the same RemoteTable In this module we implement this mimickry and various extensions Dynamic type checking The paper stipulates that Static values should have free Binary instance instance Binary Static This however is not runtime type safe for instance what would be the behaviour of Static Int Static Bool decode encode For this reason we work only with Typeable terms in this module and implement runtime checks instance Typeable Binary Static The above function typechecks but throws an exception if executed The type representation we use however is not the standard TypeRep from Data.Typeable but TypeRep from Data.Rank1Typeable This means that we can represent polymorphic static values see below for an example Since the runtime mapping RemoteTable contains values of different types it maps labels String to Dynamic values Again we use the implementation from Data.Rank1Dynamic so that we can store polymorphic dynamic values Compositionality Static values as described in the paper are not compositional there is no way to combine two static values and get static value out of it This makes sense when interpreting static strictly as known at compile time but it severely limits expressiveness However the main motivation for static is not that they are known at compile time but rather that they provide free Binary instance We therefore provide two basic constructors for Static values staticLabel String Static staticApply Static Static Static The first constructor refers to label in RemoteTable The second allows to apply static function to static argument and makes Static compositional once we have staticApply we can implement numerous derived combinators on Static values we define few in this module see staticCompose staticSplit and staticConst Closures Closures in functional programming arise when we partially apply function closure is code pointer together with runtime data structure that represents the value of the free variables of the function Closure represents these closures explicitly so that they can be serialized data Closure Closure Static ByteString ByteString See Towards Haskell in the Cloud for the rationale behind representing the function closure environment in serialized ByteString form Any static value can trivially be turned into Closure staticClosure Moreover since Static is now compositional we can also define derived operators on Closure values closureApplyStatic closureApply closureCompose closureSplit Monomorphic example Suppose we are working in the context of some distributed environment with monadic type Process representing processes NodeId representing node addresses and ProcessId representing process addresses Suppose further that we have primitive sendInt ProcessId Int Process We might want to define sendIntClosure ProcessId Closure Int Process In order to do that we need static version of send and static decoder for ProcessId sendIntStatic Static ProcessId Int Process sendIntStatic staticLabel send decodeProcessIdStatic Static ByteString Int decodeProcessIdStatic staticLabel decodeProcessId where of course we have to make sure to use an appropriate RemoteTable rtable RemoteTable rtable registerStatic send toDynamic sendInt registerStatic decodeProcessId toDynamic decode ByteString Int initRemoteTable We can now define sendIntClosure sendIntClosure ProcessId Closure Int Process sendIntClosure pid closure decoder encode pid where decoder Static ByteString Int Process decoder sendIntStatic staticCompose decodeProcessIdStatic Polymorphic example Suppose we wanted to define primitive sendIntResult ProcessId Closure Process Int Closure Process which turns process that computes an integer into process that computes the integer and then sends it someplace else We can define bindStatic Typeable Typeable Static Process Process Process bindStatic staticLabel bind provided that we register this label rtable RemoteTable rtable registerStatic bind Process ANY1 ANY1 Process ANY2 Process ANY2 initRemoteTable Note that we are using the special ANY1 and ANY2 types from Data.Rank1Typeable to represent this polymorphic value Once we have static bind we can define sendIntResult ProcessId Closure Process Int Closure Process sendIntResult pid cl bindStatic closureApplyStatic cl closureApply sendIntClosure pid Dealing with qualified types In the above we were careful to avoid qualified types Suppose that we have instead send Binary ProcessId Process If we now want to define sendClosure analogous to sendIntClosure above we somehow need to include the Binary instance in the closure after all we can ship this closure someplace else where it needs to accept an then encode it and send it off In order to do this we need to turn the Binary instance into an explicit dictionary data BinaryDict where BinaryDict Binary BinaryDict sendDict BinaryDict ProcessId Process sendDict BinaryDict send Now sendDict is normal polymorphic value sendDictStatic Static BinaryDict ProcessId Process sendDictStatic staticLabel sendDict rtable RemoteTable rtable registerStatic sendDict sendDict BinaryDict ANY ProcessId ANY Process initRemoteTable so that we can define sendClosure Static BinaryDict Process Closure Process sendClosure dict pid closure decoder encode pid where decoder Static ByteString Process decoder sendDictStatic staticApply dict staticCompose decodeProcessIdStatic Word of Caution You should not define functions on ANY and co For example the following definition of rtable is incorrect rtable RemoteTable rtable registerStatic sdictSendPort sdictSendPort initRemoteTable where sdictSendPort SerializableDict ANY SerializableDict SendPort ANY sdictSendPort SerializableDict SerializableDict This definition of sdictSendPort ignores its argument completely and constructs SerializableDict for the monomorphic type SendPort ANY which isn what you want Instead you should do rtable RemoteTable rtable registerStatic sdictSendPort sdictSendPort SerializableDict ANY SerializableDict SendPort ANY initRemoteTable where sdictSendPort forall SerializableDict SerializableDict SendPort sdictSendPort SerializableDict SerializableDict",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "Static",
        "normalized": "",
        "package": "distributed-static",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#t:Closure",
      "description": {
        "fct-descr": "\u003cp\u003eA closure is a static value and an encoded environment\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Static.html#Closure",
        "fct-type": "data",
        "title": "Closure"
      },
      "index": {
        "description": "closure is static value and an encoded environment",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "Closure",
        "normalized": "",
        "package": "distributed-static",
        "partial": "Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#t:RemoteTable",
      "description": {
        "fct-descr": "\u003cp\u003eRuntime dictionary for \u003ccode\u003e\u003ca\u003eunstatic\u003c/a\u003e\u003c/code\u003e lookups \n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Static.html#RemoteTable",
        "fct-type": "data",
        "title": "RemoteTable"
      },
      "index": {
        "description": "Runtime dictionary for unstatic lookups",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "RemoteTable",
        "normalized": "",
        "package": "distributed-static",
        "partial": "Remote Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#t:Static",
      "description": {
        "fct-descr": "\u003cp\u003eA static value. Static is opaque; see \u003ccode\u003e\u003ca\u003estaticLabel\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estaticApply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "data",
        "fct-source": "src/Control-Distributed-Static.html#Static",
        "fct-type": "data",
        "title": "Static"
      },
      "index": {
        "description": "static value Static is opaque see staticLabel and staticApply",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "Static",
        "normalized": "",
        "package": "distributed-static",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:closure",
      "description": {
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Static (ByteString -\u003e a)-\u003e ByteString-\u003e Closure a",
        "fct-type": "function",
        "title": "closure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "closure",
        "normalized": "Static(ByteString-\u003ea)-\u003eByteString-\u003eClosure a",
        "package": "distributed-static",
        "partial": "",
        "signature": "Static(ByteString-\u003ea)-\u003eByteString-\u003eClosure a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:closureApply",
      "description": {
        "fct-descr": "\u003cp\u003eClosure application\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Closure (a -\u003e b) -\u003e Closure a -\u003e Closure b",
        "fct-source": "src/Control-Distributed-Static.html#closureApply",
        "fct-type": "function",
        "title": "closureApply"
      },
      "index": {
        "description": "Closure application",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "closureApply",
        "normalized": "Closure(a-\u003eb)-\u003eClosure a-\u003eClosure b",
        "package": "distributed-static",
        "partial": "Apply",
        "signature": "Closure(a-\u003eb)-\u003eClosure a-\u003eClosure b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:closureApplyStatic",
      "description": {
        "fct-descr": "\u003cp\u003eApply a static function to a closure\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Static (a -\u003e b) -\u003e Closure a -\u003e Closure b",
        "fct-source": "src/Control-Distributed-Static.html#closureApplyStatic",
        "fct-type": "function",
        "title": "closureApplyStatic"
      },
      "index": {
        "description": "Apply static function to closure",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "closureApplyStatic",
        "normalized": "Static(a-\u003eb)-\u003eClosure a-\u003eClosure b",
        "package": "distributed-static",
        "partial": "Apply Static",
        "signature": "Static(a-\u003eb)-\u003eClosure a-\u003eClosure b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:closureCompose",
      "description": {
        "fct-descr": "\u003cp\u003eClosure composition\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Closure (b -\u003e c) -\u003e Closure (a -\u003e b) -\u003e Closure (a -\u003e c)",
        "fct-source": "src/Control-Distributed-Static.html#closureCompose",
        "fct-type": "function",
        "title": "closureCompose"
      },
      "index": {
        "description": "Closure composition",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "closureCompose",
        "normalized": "Closure(a-\u003eb)-\u003eClosure(c-\u003ea)-\u003eClosure(c-\u003eb)",
        "package": "distributed-static",
        "partial": "Compose",
        "signature": "Closure(b-\u003ec)-\u003eClosure(a-\u003eb)-\u003eClosure(a-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:closureSplit",
      "description": {
        "fct-descr": "\u003cp\u003eClosure version of (\u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Closure (a -\u003e b) -\u003e Closure (a' -\u003e b') -\u003e Closure ((a, a') -\u003e (b, b'))",
        "fct-source": "src/Control-Distributed-Static.html#closureSplit",
        "fct-type": "function",
        "title": "closureSplit"
      },
      "index": {
        "description": "Closure version of",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "closureSplit",
        "normalized": "Closure(a-\u003eb)-\u003eClosure(c-\u003ed)-\u003eClosure((a,c)-\u003e(b,d))",
        "package": "distributed-static",
        "partial": "Split",
        "signature": "Closure(a-\u003eb)-\u003eClosure(a'-\u003eb')-\u003eClosure((a,a')-\u003e(b,b'))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:initRemoteTable",
      "description": {
        "fct-descr": "\u003cp\u003eInitial remote table\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "RemoteTable",
        "fct-source": "src/Control-Distributed-Static.html#initRemoteTable",
        "fct-type": "function",
        "title": "initRemoteTable"
      },
      "index": {
        "description": "Initial remote table",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "initRemoteTable",
        "normalized": "",
        "package": "distributed-static",
        "partial": "Remote Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:registerStatic",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a static label\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "String -\u003e Dynamic -\u003e RemoteTable -\u003e RemoteTable",
        "fct-source": "src/Control-Distributed-Static.html#registerStatic",
        "fct-type": "function",
        "title": "registerStatic"
      },
      "index": {
        "description": "Register static label",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "registerStatic",
        "normalized": "String-\u003eDynamic-\u003eRemoteTable-\u003eRemoteTable",
        "package": "distributed-static",
        "partial": "Static",
        "signature": "String-\u003eDynamic-\u003eRemoteTable-\u003eRemoteTable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:staticApply",
      "description": {
        "fct-descr": "\u003cp\u003eApply two static values\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Static (a -\u003e b) -\u003e Static a -\u003e Static b",
        "fct-source": "src/Control-Distributed-Static.html#staticApply",
        "fct-type": "function",
        "title": "staticApply"
      },
      "index": {
        "description": "Apply two static values",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "staticApply",
        "normalized": "Static(a-\u003eb)-\u003eStatic a-\u003eStatic b",
        "package": "distributed-static",
        "partial": "Apply",
        "signature": "Static(a-\u003eb)-\u003eStatic a-\u003eStatic b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:staticClosure",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a static value into a closure.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Static a -\u003e Closure a",
        "fct-source": "src/Control-Distributed-Static.html#staticClosure",
        "fct-type": "function",
        "title": "staticClosure"
      },
      "index": {
        "description": "Convert static value into closure",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "staticClosure",
        "normalized": "Static a-\u003eClosure a",
        "package": "distributed-static",
        "partial": "Closure",
        "signature": "Static a-\u003eClosure a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:staticCompose",
      "description": {
        "fct-descr": "\u003cp\u003eStatic version of (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e) \n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Static (b -\u003e c) -\u003e Static (a -\u003e b) -\u003e Static (a -\u003e c)",
        "fct-source": "src/Control-Distributed-Static.html#staticCompose",
        "fct-type": "function",
        "title": "staticCompose"
      },
      "index": {
        "description": "Static version of",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "staticCompose",
        "normalized": "Static(a-\u003eb)-\u003eStatic(c-\u003ea)-\u003eStatic(c-\u003eb)",
        "package": "distributed-static",
        "partial": "Compose",
        "signature": "Static(b-\u003ec)-\u003eStatic(a-\u003eb)-\u003eStatic(a-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:staticConst",
      "description": {
        "fct-descr": "\u003cp\u003eStatic version of \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Static a -\u003e Static (b -\u003e a)",
        "fct-source": "src/Control-Distributed-Static.html#staticConst",
        "fct-type": "function",
        "title": "staticConst"
      },
      "index": {
        "description": "Static version of const",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "staticConst",
        "normalized": "Static a-\u003eStatic(b-\u003ea)",
        "package": "distributed-static",
        "partial": "Const",
        "signature": "Static a-\u003eStatic(b-\u003ea)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:staticFlip",
      "description": {
        "fct-descr": "\u003cp\u003eStatic version of \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Static (a -\u003e b -\u003e c) -\u003e Static (b -\u003e a -\u003e c)",
        "fct-source": "src/Control-Distributed-Static.html#staticFlip",
        "fct-type": "function",
        "title": "staticFlip"
      },
      "index": {
        "description": "Static version of flip",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "staticFlip",
        "normalized": "Static(a-\u003eb-\u003ec)-\u003eStatic(b-\u003ea-\u003ec)",
        "package": "distributed-static",
        "partial": "Flip",
        "signature": "Static(a-\u003eb-\u003ec)-\u003eStatic(b-\u003ea-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:staticLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a primitive static value.\n\u003c/p\u003e\u003cp\u003eIt is the responsibility of the client code to make sure the corresponding\n entry in the \u003ccode\u003e\u003ca\u003eRemoteTable\u003c/a\u003e\u003c/code\u003e has the appropriate type.\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "String -\u003e Static a",
        "fct-source": "src/Control-Distributed-Static.html#staticLabel",
        "fct-type": "function",
        "title": "staticLabel"
      },
      "index": {
        "description": "Create primitive static value It is the responsibility of the client code to make sure the corresponding entry in the RemoteTable has the appropriate type",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "staticLabel",
        "normalized": "String-\u003eStatic a",
        "package": "distributed-static",
        "partial": "Label",
        "signature": "String-\u003eStatic a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:staticSplit",
      "description": {
        "fct-descr": "\u003cp\u003eStatic version of (\u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "Static (a -\u003e b) -\u003e Static (a' -\u003e b') -\u003e Static ((a, a') -\u003e (b, b'))",
        "fct-source": "src/Control-Distributed-Static.html#staticSplit",
        "fct-type": "function",
        "title": "staticSplit"
      },
      "index": {
        "description": "Static version of",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "staticSplit",
        "normalized": "Static(a-\u003eb)-\u003eStatic(c-\u003ed)-\u003eStatic((a,c)-\u003e(b,d))",
        "package": "distributed-static",
        "partial": "Split",
        "signature": "Static(a-\u003eb)-\u003eStatic(a'-\u003eb')-\u003eStatic((a,a')-\u003e(b,b'))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:unclosure",
      "description": {
        "fct-descr": "\u003cp\u003eResolve a closure\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "RemoteTable -\u003e Closure a -\u003e Either String a",
        "fct-source": "src/Control-Distributed-Static.html#unclosure",
        "fct-type": "function",
        "title": "unclosure"
      },
      "index": {
        "description": "Resolve closure",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "unclosure",
        "normalized": "RemoteTable-\u003eClosure a-\u003eEither String a",
        "package": "distributed-static",
        "partial": "",
        "signature": "RemoteTable-\u003eClosure a-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/distributed-static/docs/Control-Distributed-Static.html#v:unstatic",
      "description": {
        "fct-descr": "\u003cp\u003eResolve a static value\n\u003c/p\u003e",
        "fct-module": "Control.Distributed.Static",
        "fct-package": "distributed-static",
        "fct-signature": "RemoteTable -\u003e Static a -\u003e Either String a",
        "fct-source": "src/Control-Distributed-Static.html#unstatic",
        "fct-type": "function",
        "title": "unstatic"
      },
      "index": {
        "description": "Resolve static value",
        "hierarchy": "Control Distributed Static",
        "module": "Control.Distributed.Static",
        "name": "unstatic",
        "normalized": "RemoteTable-\u003eStatic a-\u003eEither String a",
        "package": "distributed-static",
        "partial": "",
        "signature": "RemoteTable-\u003eStatic a-\u003eEither String a"
      }
    }
  }
]