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
        "word": "remote"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides Template Haskell-based tools\n and syntactic sugar for dealing with closures\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote.Call",
          "name": "Call",
          "package": "remote",
          "source": "src/Remote-Call.html",
          "type": "module"
        },
        "index": {
          "description": "Provides Template Haskell-based tools and syntactic sugar for dealing with closures",
          "hierarchy": "Remote Call",
          "module": "Remote.Call",
          "name": "Call",
          "package": "remote",
          "partial": "Call",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Call.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compile-time macro to expand a function name to its corresponding\n closure name (if such a closure exists), suitable for use with\n \u003ccode\u003espawn\u003c/code\u003e, \u003ccode\u003ecallRemote\u003c/code\u003e, etc\n In general, using the syntax \u003ccode\u003e$(mkClosure foo)\u003c/code\u003e is the same\n as addressing the closure generator by name, that is,\n \u003ccode\u003efoo__closure\u003c/code\u003e. In some cases you may need to use\n \u003ccode\u003e\u003ca\u003emkClosureRec\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Remote.Call",
          "name": "mkClosure",
          "package": "remote",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Remote-Call.html#mkClosure",
          "type": "function"
        },
        "index": {
          "description": "compile-time macro to expand function name to its corresponding closure name if such closure exists suitable for use with spawn callRemote etc In general using the syntax mkClosure foo is the same as addressing the closure generator by name that is foo closure In some cases you may need to use mkClosureRec instead",
          "hierarchy": "Remote Call",
          "module": "Remote.Call",
          "name": "mkClosure",
          "normalized": "Name-\u003eQ Exp",
          "package": "remote",
          "partial": "Closure",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Call.html#v:mkClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003emkClosure\u003c/a\u003e\u003c/code\u003e suitable for expanding closures\n of functions declared in the same module, including that\n of the function it's used in. The Rec stands for recursive.\n If you get the \u003ccode\u003eSomething is not in scope at a reify\u003c/code\u003e message\n when using mkClosure, try using this function instead.\n Using this function also turns off the static\n checks used by mkClosure, and therefore you are responsible\n for making sure that you use \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e with each function\n that may be an argument of mkClosureRec\n\u003c/p\u003e",
          "module": "Remote.Call",
          "name": "mkClosureRec",
          "package": "remote",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Remote-Call.html#mkClosureRec",
          "type": "function"
        },
        "index": {
          "description": "variant of mkClosure suitable for expanding closures of functions declared in the same module including that of the function it used in The Rec stands for recursive If you get the Something is not in scope at reify message when using mkClosure try using this function instead Using this function also turns off the static checks used by mkClosure and therefore you are responsible for making sure that you use remotable with each function that may be an argument of mkClosureRec",
          "hierarchy": "Remote Call",
          "module": "Remote.Call",
          "name": "mkClosureRec",
          "normalized": "Name-\u003eQ Exp",
          "package": "remote",
          "partial": "Closure Rec",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Call.html#v:mkClosureRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compile-time macro to provide easy invocation of closures.\n To use this, follow the following steps:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e First, enable Template Haskell in the module:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n module Main where\n import Remote.Call (remotable)\n    ...\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e Define your functions normally. Restrictions: function's type signature must be explicitly declared; no polymorphism; all parameters must implement Serializable; return value must be pure, or in one of the \u003ccode\u003e\u003ca\u003eProcessM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTaskM\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monads; probably other restrictions as well.\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e greet :: String -\u003e ProcessM ()\n greet name = say (\"Hello, \"++name)\n badFib :: Integer -\u003e Integer\n badFib 0 = 1\n badFib 1 = 1\n badFib n = badFib (n-1) + badFib (n-2)\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e Use the \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e function to automagically generate stubs and closure generators for your functions:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e $( remotable ['greet, 'badFib] )\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e may be used only once per module.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e When you call \u003ccode\u003eremoteInit\u003c/code\u003e (usually the first thing in your program), \n be sure to give it the automagically generated function lookup tables\n from all modules that use \u003ccode\u003e\u003ca\u003eremotable\u003c/a\u003e\u003c/code\u003e:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e main = remoteInit (Just \"config\") [Main.__remoteCallMetaData, OtherModule.__remoteCallMetaData] initialProcess\n\u003c/pre\u003e\u003col\u003e\u003cli\u003e Now you can invoke your functions remotely. When a function expects a closure, give it the name\n of the generated closure, rather than the name of the original function. If the function takes parameters,\n so will the closure. To start the \u003ccode\u003egreet\u003c/code\u003e function on \u003ccode\u003esomeNode\u003c/code\u003e:\n\u003c/li\u003e\u003c/ol\u003e\u003cpre\u003e spawn someNode (greet__closure \"John Baptist\")\n\u003c/pre\u003e\u003cp\u003eNote that we say \u003ccode\u003egreet__closure\u003c/code\u003e rather than just \u003ccode\u003egreet\u003c/code\u003e. If you prefer, you can use \u003ccode\u003e\u003ca\u003emkClosure\u003c/a\u003e\u003c/code\u003e instead, i.e. \u003ccode\u003e$(mkClosure 'greet)\u003c/code\u003e, which will expand to \u003ccode\u003egreet__closure\u003c/code\u003e. To calculate a Fibonacci number remotely:\n\u003c/p\u003e\u003cpre\u003e val \u003c- callRemotePure someNode (badFib__closure 5)\n\u003c/pre\u003e",
          "module": "[\"Remote.Call\",\"Remote\"]",
          "name": "remotable",
          "package": "remote",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Remote-Call.html#remotable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Call.html#v:remotable\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:remotable\"]"
        },
        "index": {
          "description": "compile-time macro to provide easy invocation of closures To use this follow the following steps First enable Template Haskell in the module LANGUAGE TemplateHaskell module Main where import Remote.Call remotable Define your functions normally Restrictions function type signature must be explicitly declared no polymorphism all parameters must implement Serializable return value must be pure or in one of the ProcessM TaskM or IO monads probably other restrictions as well greet String ProcessM greet name say Hello name badFib Integer Integer badFib badFib badFib badFib n-1 badFib n-2 Use the remotable function to automagically generate stubs and closure generators for your functions remotable greet badFib remotable may be used only once per module When you call remoteInit usually the first thing in your program be sure to give it the automagically generated function lookup tables from all modules that use remotable main remoteInit Just config Main remoteCallMetaData OtherModule remoteCallMetaData initialProcess Now you can invoke your functions remotely When function expects closure give it the name of the generated closure rather than the name of the original function If the function takes parameters so will the closure To start the greet function on someNode spawn someNode greet closure John Baptist Note that we say greet closure rather than just greet If you prefer you can use mkClosure instead i.e mkClosure greet which will expand to greet closure To calculate Fibonacci number remotely val callRemotePure someNode badFib closure",
          "hierarchy": "Remote Call",
          "module": "Remote.Call",
          "name": "remotable",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "remote",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Call.html#v:remotable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides typed channels, an alternative\n approach to interprocess messaging. Typed channels\n can be used in combination with or instead of the\n the untyped channels available in the \u003ca\u003eRemote.Process\u003c/a\u003e\n module via \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote.Channel",
          "name": "Channel",
          "package": "remote",
          "source": "src/Remote-Channel.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides typed channels an alternative approach to interprocess messaging Typed channels can be used in combination with or instead of the the untyped channels available in the Remote.Process module via send",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "Channel",
          "package": "remote",
          "partial": "Channel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Channel",
          "name": "CombinedChannelAction",
          "package": "remote",
          "source": "src/Remote-Channel.html#CombinedChannelAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "CombinedChannelAction",
          "package": "remote",
          "partial": "Combined Channel Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#t:CombinedChannelAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process holding a ReceivePort can extract messages\n from the channel, which we inserted by\n the holder(s) of the corresponding \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e.\n Critically, ReceivePorts, unlike SendPorts, are not serializable.\n This means that you can only receive messages through a channel\n on the node on which the channel was created.\n\u003c/p\u003e",
          "module": "Remote.Channel",
          "name": "ReceivePort",
          "package": "remote",
          "source": "src/Remote-Channel.html#ReceivePort",
          "type": "data"
        },
        "index": {
          "description": "process holding ReceivePort can extract messages from the channel which we inserted by the holder of the corresponding SendPort Critically ReceivePorts unlike SendPorts are not serializable This means that you can only receive messages through channel on the node on which the channel was created",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "ReceivePort",
          "package": "remote",
          "partial": "Receive Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#t:ReceivePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA channel is a unidirectional communication pipeline\n with two ends: a sending port, and a receiving port.\n This is the sending port. A process holding this\n value can insert messages into the channel. SendPorts\n themselves can also be sent to other processes.\n The other side of the channel is the \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote.Channel",
          "name": "SendPort",
          "package": "remote",
          "source": "src/Remote-Channel.html#SendPort",
          "type": "data"
        },
        "index": {
          "description": "channel is unidirectional communication pipeline with two ends sending port and receiving port This is the sending port process holding this value can insert messages into the channel SendPorts themselves can also be sent to other processes The other side of the channel is the ReceivePort",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "SendPort",
          "package": "remote",
          "partial": "Send Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#t:SendPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function lets us respond to messages on multiple channels\n by combining several \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003es into one. The resulting port\n is the sum of the input ports, and will extract messages from all\n of them in FIFO order. The input ports are specified by \n \u003ccode\u003e\u003ca\u003ecombinedChannelAction\u003c/a\u003e\u003c/code\u003e, which also gives a converter function.\n After combining the underlying receive ports can still\n be used independently, as well.\n We provide two ways to combine ports, which differ bias\n they demonstrate in returning messages when more than one\n underlying channel is nonempty. combinePortsBiased will\n check ports in the order given by its argument, and so\n if the first channel always was a message waiting, it will.\n starve the other channels. The alternative is \u003ccode\u003e\u003ca\u003ecombinePortsRR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Remote.Channel\",\"Remote\"]",
          "name": "combinePortsBiased",
          "package": "remote",
          "signature": "[CombinedChannelAction b] -\u003e ProcessM (ReceivePort b)",
          "source": "src/Remote-Channel.html#combinePortsBiased",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:combinePortsBiased\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:combinePortsBiased\"]"
        },
        "index": {
          "description": "This function lets us respond to messages on multiple channels by combining several ReceivePort into one The resulting port is the sum of the input ports and will extract messages from all of them in FIFO order The input ports are specified by combinedChannelAction which also gives converter function After combining the underlying receive ports can still be used independently as well We provide two ways to combine ports which differ bias they demonstrate in returning messages when more than one underlying channel is nonempty combinePortsBiased will check ports in the order given by its argument and so if the first channel always was message waiting it will starve the other channels The alternative is combinePortsRR",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "combinePortsBiased",
          "normalized": "[CombinedChannelAction a]-\u003eProcessM(ReceivePort a)",
          "package": "remote",
          "partial": "Ports Biased",
          "signature": "[CombinedChannelAction b]-\u003eProcessM(ReceivePort b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:combinePortsBiased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ecombinePortsBiased\u003c/a\u003e\u003c/code\u003e. This function differs from that one\n in that the order that the underlying ports are checked is rotated\n with each invocation, guaranteeing that, given enough invocations,\n every channel will have a chance to contribute a message.\n\u003c/p\u003e",
          "module": "[\"Remote.Channel\",\"Remote\"]",
          "name": "combinePortsRR",
          "package": "remote",
          "signature": "[CombinedChannelAction b] -\u003e ProcessM (ReceivePort b)",
          "source": "src/Remote-Channel.html#combinePortsRR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:combinePortsRR\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:combinePortsRR\"]"
        },
        "index": {
          "description": "See combinePortsBiased This function differs from that one in that the order that the underlying ports are checked is rotated with each invocation guaranteeing that given enough invocations every channel will have chance to contribute message",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "combinePortsRR",
          "normalized": "[CombinedChannelAction a]-\u003eProcessM(ReceivePort a)",
          "package": "remote",
          "partial": "Ports RR",
          "signature": "[CombinedChannelAction b]-\u003eProcessM(ReceivePort b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:combinePortsRR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a port and an adapter for combining ports via \u003ccode\u003e\u003ca\u003ecombinePortsBiased\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ecombinePortsRR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Remote.Channel\",\"Remote\"]",
          "name": "combinedChannelAction",
          "package": "remote",
          "signature": "ReceivePort a -\u003e (a -\u003e b) -\u003e CombinedChannelAction b",
          "source": "src/Remote-Channel.html#combinedChannelAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:combinedChannelAction\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:combinedChannelAction\"]"
        },
        "index": {
          "description": "Specifies port and an adapter for combining ports via combinePortsBiased and combinePortsRR",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "combinedChannelAction",
          "normalized": "ReceivePort a-\u003e(a-\u003eb)-\u003eCombinedChannelAction b",
          "package": "remote",
          "partial": "Channel Action",
          "signature": "ReceivePort a-\u003e(a-\u003eb)-\u003eCombinedChannelAction b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:combinedChannelAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecombinePortsBiased\u003c/a\u003e\u003c/code\u003e, with the difference that the\n the underlying ports must be of the same type, and you don't\n have the opportunity to provide an adapter function.\n\u003c/p\u003e",
          "module": "[\"Remote.Channel\",\"Remote\"]",
          "name": "mergePortsBiased",
          "package": "remote",
          "signature": "[ReceivePort a] -\u003e ProcessM (ReceivePort a)",
          "source": "src/Remote-Channel.html#mergePortsBiased",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:mergePortsBiased\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:mergePortsBiased\"]"
        },
        "index": {
          "description": "Similar to combinePortsBiased with the difference that the the underlying ports must be of the same type and you don have the opportunity to provide an adapter function",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "mergePortsBiased",
          "normalized": "[ReceivePort a]-\u003eProcessM(ReceivePort a)",
          "package": "remote",
          "partial": "Ports Biased",
          "signature": "[ReceivePort a]-\u003eProcessM(ReceivePort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:mergePortsBiased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecombinePortsRR\u003c/a\u003e\u003c/code\u003e, with the difference that the\n the underlying ports must be of the same type, and you don't\n have the opportunity to provide an adapter function.\n\u003c/p\u003e",
          "module": "[\"Remote.Channel\",\"Remote\"]",
          "name": "mergePortsRR",
          "package": "remote",
          "signature": "[ReceivePort a] -\u003e ProcessM (ReceivePort a)",
          "source": "src/Remote-Channel.html#mergePortsRR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:mergePortsRR\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:mergePortsRR\"]"
        },
        "index": {
          "description": "Similar to combinePortsRR with the difference that the the underlying ports must be of the same type and you don have the opportunity to provide an adapter function",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "mergePortsRR",
          "normalized": "[ReceivePort a]-\u003eProcessM(ReceivePort a)",
          "package": "remote",
          "partial": "Ports RR",
          "signature": "[ReceivePort a]-\u003eProcessM(ReceivePort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:mergePortsRR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new channel, and returns both the \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e thereof.\n\u003c/p\u003e",
          "module": "[\"Remote.Channel\",\"Remote\"]",
          "name": "newChannel",
          "package": "remote",
          "signature": "ProcessM (SendPort a, ReceivePort a)",
          "source": "src/Remote-Channel.html#newChannel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:newChannel\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:newChannel\"]"
        },
        "index": {
          "description": "Create new channel and returns both the SendPort and ReceivePort thereof",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "newChannel",
          "normalized": "ProcessM(SendPort a,ReceivePort a)",
          "package": "remote",
          "partial": "Channel",
          "signature": "ProcessM(SendPort a,ReceivePort a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:newChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a value from the channel, in FIFO order.\n\u003c/p\u003e",
          "module": "[\"Remote.Channel\",\"Remote\"]",
          "name": "receiveChannel",
          "package": "remote",
          "signature": "ReceivePort a -\u003e ProcessM a",
          "source": "src/Remote-Channel.html#receiveChannel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:receiveChannel\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:receiveChannel\"]"
        },
        "index": {
          "description": "Extract value from the channel in FIFO order",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "receiveChannel",
          "normalized": "ReceivePort a-\u003eProcessM a",
          "package": "remote",
          "partial": "Channel",
          "signature": "ReceivePort a-\u003eProcessM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:receiveChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new value into the channel.\n\u003c/p\u003e",
          "module": "[\"Remote.Channel\",\"Remote\"]",
          "name": "sendChannel",
          "package": "remote",
          "signature": "SendPort a -\u003e a -\u003e ProcessM ()",
          "source": "src/Remote-Channel.html#sendChannel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:sendChannel\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:sendChannel\"]"
        },
        "index": {
          "description": "Inserts new value into the channel",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "sendChannel",
          "normalized": "SendPort a-\u003ea-\u003eProcessM()",
          "package": "remote",
          "partial": "Channel",
          "signature": "SendPort a-\u003ea-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:sendChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate a channel. After calling this function, \u003ccode\u003e\u003ca\u003ereceiveChannel\u003c/a\u003e\u003c/code\u003e\n on that port (or on any combined port based on it) will either \n fail or block indefinitely, and \u003ccode\u003e\u003ca\u003esendChannel\u003c/a\u003e\u003c/code\u003e on the corresponding\n \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e will fail. Any unread messages remaining in the channel\n will be lost.\n\u003c/p\u003e",
          "module": "[\"Remote.Channel\",\"Remote\"]",
          "name": "terminateChannel",
          "package": "remote",
          "signature": "ReceivePort a -\u003e ProcessM ()",
          "source": "src/Remote-Channel.html#terminateChannel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:terminateChannel\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:terminateChannel\"]"
        },
        "index": {
          "description": "Terminate channel After calling this function receiveChannel on that port or on any combined port based on it will either fail or block indefinitely and sendChannel on the corresponding SendPort will fail Any unread messages remaining in the channel will be lost",
          "hierarchy": "Remote Channel",
          "module": "Remote.Channel",
          "name": "terminateChannel",
          "normalized": "ReceivePort a-\u003eProcessM()",
          "package": "remote",
          "partial": "Channel",
          "signature": "ReceivePort a-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Channel.html#v:terminateChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple type to represent a closure, that is, a function\n and its environment. The current implementation represents\n functions as strings, but this could be theoretically\n swapped out for the \"static\" mechanism described in the\n paper.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote.Closure",
          "name": "Closure",
          "package": "remote",
          "source": "src/Remote-Closure.html",
          "type": "module"
        },
        "index": {
          "description": "simple type to represent closure that is function and its environment The current implementation represents functions as strings but this could be theoretically swapped out for the static mechanism described in the paper",
          "hierarchy": "Remote Closure",
          "module": "Remote.Closure",
          "name": "Closure",
          "package": "remote",
          "partial": "Closure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Closure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type representing a closure, that is, a function with its environment.\n   In spirit, this is actually:\n\u003c/p\u003e\u003cpre\u003e   data Closure a where\n     Closure :: Serializable v =\u003e Static (v -\u003e a) -\u003e v -\u003e Closure a     \n\u003c/pre\u003e\u003cp\u003ewhere the Static type wraps a function with no non-static free variables.\n   We simulate this behavior by identifying top-level functions as strings.\n   See the paper for clarification.\n\u003c/p\u003e",
          "module": "Remote.Closure",
          "name": "Closure",
          "package": "remote",
          "source": "src/Remote-Closure.html#Closure",
          "type": "data"
        },
        "index": {
          "description": "data type representing closure that is function with its environment In spirit this is actually data Closure where Closure Serializable Static Closure where the Static type wraps function with no non-static free variables We simulate this behavior by identifying top-level functions as strings See the paper for clarification",
          "hierarchy": "Remote Closure",
          "module": "Remote.Closure",
          "name": "Closure",
          "package": "remote",
          "partial": "Closure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Closure.html#t:Closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Closure",
          "name": "Closure",
          "package": "remote",
          "signature": "Closure String Payload",
          "source": "src/Remote-Closure.html#Closure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Closure",
          "module": "Remote.Closure",
          "name": "Closure",
          "package": "remote",
          "partial": "Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Closure.html#v:Closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e type class and\n functions to convert to and from \u003ccode\u003e\u003ca\u003ePayload\u003c/a\u003e\u003c/code\u003es. It's implemented\n in terms of Haskell's \u003ca\u003eData.Binary\u003c/a\u003e. The message sending\n and receiving functionality in \u003ca\u003eRemote.Process\u003c/a\u003e depends on this.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote.Encoding",
          "name": "Encoding",
          "package": "remote",
          "source": "src/Remote-Encoding.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the Serializable type class and functions to convert to and from Payload It implemented in terms of Haskell Data.Binary The message sending and receiving functionality in Remote.Process depends on this",
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "Encoding",
          "package": "remote",
          "partial": "Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "DynamicPayload",
          "package": "remote",
          "source": "src/Remote-Encoding.html#DynamicPayload",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "DynamicPayload",
          "package": "remote",
          "partial": "Dynamic Payload",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#t:DynamicPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "Payload",
          "package": "remote",
          "source": "src/Remote-Encoding.html#Payload",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "Payload",
          "package": "remote",
          "partial": "Payload",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#t:Payload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "PayloadLength",
          "package": "remote",
          "source": "src/Remote-Encoding.html#PayloadLength",
          "type": "type"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "PayloadLength",
          "package": "remote",
          "partial": "Payload Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#t:PayloadLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData that can be sent as a message must implement\n this class. The class has no functions of its own,\n but instead simply requires that the type implement\n both \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e. Typeable can usually\n be derived automatically. Binary requires the put and get\n functions, which can be easily implemented by hand,\n or you can use the \u003ccode\u003e\u003ca\u003egenericGet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egenericPut\u003c/a\u003e\u003c/code\u003e flavors,\n which will work automatically for types implementing\n \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote.Encoding",
          "name": "Serializable",
          "package": "remote",
          "source": "src/Remote-Encoding.html#Serializable",
          "type": "class"
        },
        "index": {
          "description": "Data that can be sent as message must implement this class The class has no functions of its own but instead simply requires that the type implement both Typeable and Binary Typeable can usually be derived automatically Binary requires the put and get functions which can be easily implemented by hand or you can use the genericGet and genericPut flavors which will work automatically for types implementing Data",
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "Serializable",
          "package": "remote",
          "partial": "Serializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#t:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "dynamicDecodePure",
          "package": "remote",
          "signature": "DynamicPayload -\u003e Maybe a",
          "source": "src/Remote-Encoding.html#dynamicDecodePure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "dynamicDecodePure",
          "normalized": "DynamicPayload-\u003eMaybe a",
          "package": "remote",
          "partial": "Decode Pure",
          "signature": "DynamicPayload-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:dynamicDecodePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "dynamicEncodePure",
          "package": "remote",
          "signature": "a -\u003e DynamicPayload",
          "source": "src/Remote-Encoding.html#dynamicEncodePure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "dynamicEncodePure",
          "normalized": "a-\u003eDynamicPayload",
          "package": "remote",
          "partial": "Encode Pure",
          "signature": "a-\u003eDynamicPayload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:dynamicEncodePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the counterpart \u003ccode\u003e\u003ca\u003egenericPut\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Remote.Encoding\",\"Remote\"]",
          "name": "genericGet",
          "package": "remote",
          "signature": "Get a",
          "source": "src/Remote-Encoding.html#genericGet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:genericGet\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:genericGet\"]"
        },
        "index": {
          "description": "This is the counterpart genericPut",
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "genericGet",
          "package": "remote",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:genericGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData types that can be used in messaging must\n be serializable, which means that they must implement\n the \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e methods from \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e. If you\n are too lazy to write these functions yourself,\n you can delegate responsibility to this function.\n It's usually sufficient to do something like this:\n\u003c/p\u003e\u003cpre\u003e import Data.Data (Data)\n import Data.Typeable (Typeable)\n import Data.Binary (Binary, get, put)\n data MyType = MkMyType Foobar Int [(String, Waddle Baz)]\n             | MkSpatula\n                  deriving (Data, Typeable)\n instance Binary MyType where\n    put = genericPut\n    get = genericGet\n\u003c/pre\u003e",
          "module": "[\"Remote.Encoding\",\"Remote\"]",
          "name": "genericPut",
          "package": "remote",
          "signature": "a -\u003e Put",
          "source": "src/Remote-Encoding.html#genericPut",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:genericPut\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:genericPut\"]"
        },
        "index": {
          "description": "Data types that can be used in messaging must be serializable which means that they must implement the get and put methods from Binary If you are too lazy to write these functions yourself you can delegate responsibility to this function It usually sufficient to do something like this import Data.Data Data import Data.Typeable Typeable import Data.Binary Binary get put data MyType MkMyType Foobar Int String Waddle Baz MkSpatula deriving Data Typeable instance Binary MyType where put genericPut get genericGet",
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "genericPut",
          "normalized": "a-\u003ePut",
          "package": "remote",
          "partial": "Put",
          "signature": "a-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:genericPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "getDynamicPayloadType",
          "package": "remote",
          "signature": "DynamicPayload -\u003e String",
          "source": "src/Remote-Encoding.html#getDynamicPayloadType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "getDynamicPayloadType",
          "normalized": "DynamicPayload-\u003eString",
          "package": "remote",
          "partial": "Dynamic Payload Type",
          "signature": "DynamicPayload-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:getDynamicPayloadType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "getPayloadContent",
          "package": "remote",
          "signature": "Payload -\u003e ByteString",
          "source": "src/Remote-Encoding.html#getPayloadContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "getPayloadContent",
          "normalized": "Payload-\u003eByteString",
          "package": "remote",
          "partial": "Payload Content",
          "signature": "Payload-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:getPayloadContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "getPayloadType",
          "package": "remote",
          "signature": "Payload -\u003e String",
          "source": "src/Remote-Encoding.html#getPayloadType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "getPayloadType",
          "normalized": "Payload-\u003eString",
          "package": "remote",
          "partial": "Payload Type",
          "signature": "Payload-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:getPayloadType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "hGetPayload",
          "package": "remote",
          "signature": "Handle -\u003e IO Payload",
          "source": "src/Remote-Encoding.html#hGetPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "hGetPayload",
          "normalized": "Handle-\u003eIO Payload",
          "package": "remote",
          "partial": "Get Payload",
          "signature": "Handle-\u003eIO Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:hGetPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "hPutPayload",
          "package": "remote",
          "signature": "Handle -\u003e Payload -\u003e IO ()",
          "source": "src/Remote-Encoding.html#hPutPayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "hPutPayload",
          "normalized": "Handle-\u003ePayload-\u003eIO()",
          "package": "remote",
          "partial": "Put Payload",
          "signature": "Handle-\u003ePayload-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:hPutPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "payloadLength",
          "package": "remote",
          "signature": "Payload -\u003e PayloadLength",
          "source": "src/Remote-Encoding.html#payloadLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "payloadLength",
          "normalized": "Payload-\u003ePayloadLength",
          "package": "remote",
          "partial": "Length",
          "signature": "Payload-\u003ePayloadLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:payloadLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "serialDecode",
          "package": "remote",
          "signature": "Payload -\u003e IO (Maybe a)",
          "source": "src/Remote-Encoding.html#serialDecode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "serialDecode",
          "normalized": "Payload-\u003eIO(Maybe a)",
          "package": "remote",
          "partial": "Decode",
          "signature": "Payload-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:serialDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "serialDecodePure",
          "package": "remote",
          "signature": "Payload -\u003e Maybe a",
          "source": "src/Remote-Encoding.html#serialDecodePure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "serialDecodePure",
          "normalized": "Payload-\u003eMaybe a",
          "package": "remote",
          "partial": "Decode Pure",
          "signature": "Payload-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:serialDecodePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "serialEncode",
          "package": "remote",
          "signature": "a -\u003e IO Payload",
          "source": "src/Remote-Encoding.html#serialEncode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "serialEncode",
          "normalized": "a-\u003eIO Payload",
          "package": "remote",
          "partial": "Encode",
          "signature": "a-\u003eIO Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:serialEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Encoding",
          "name": "serialEncodePure",
          "package": "remote",
          "signature": "a -\u003e Payload",
          "source": "src/Remote-Encoding.html#serialEncodePure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Encoding",
          "module": "Remote.Encoding",
          "name": "serialEncodePure",
          "normalized": "a-\u003ePayload",
          "package": "remote",
          "partial": "Encode Pure",
          "signature": "a-\u003ePayload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Encoding.html#v:serialEncodePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExposes a high-level interface for starting a node of a distributed\n program, taking into account a local configuration file, command\n line arguments, and commonly-used system processes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote.Init",
          "name": "Init",
          "package": "remote",
          "source": "src/Remote-Init.html",
          "type": "module"
        },
        "index": {
          "description": "Exposes high-level interface for starting node of distributed program taking into account local configuration file command line arguments and commonly-used system processes",
          "hierarchy": "Remote Init",
          "module": "Remote.Init",
          "name": "Init",
          "package": "remote",
          "partial": "Init",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Init.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the usual way create a single node of distributed program.\n The intent is that \u003ccode\u003e\u003ca\u003eremoteInit\u003c/a\u003e\u003c/code\u003e be called in your program's \u003ccode\u003eMain.main\u003c/code\u003e\n function. A typical call takes this form:\n\u003c/p\u003e\u003cpre\u003e main = remoteInit (Just \"config\") [Main.__remoteCallMetaData] initialProcess\n\u003c/pre\u003e\u003cp\u003eThis will:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Read the configuration file \u003ccode\u003econfig\u003c/code\u003e in the current directory or, if specified, from the file whose path is given by the environment variable \u003ccode\u003eRH_CONFIG\u003c/code\u003e. If the given file does not exist or is invalid, an exception will be thrown.\n\u003c/li\u003e\u003cli\u003e Use the configuration given in the file as well as on the command-line to create a new node. The usual system processes will be started, including logging, discovery, and spawning.\n\u003c/li\u003e\u003cli\u003e Compile-time metadata, generated by \u003ccode\u003eRemote.Call.remotable\u003c/code\u003e, will used for invoking closures. Metadata from each module must be explicitly mentioned.\n\u003c/li\u003e\u003cli\u003e The function initialProcess will be called, given as a parameter a string indicating the value of the cfgRole setting of this node. initialProcess is provided by the user and provides an entrypoint for controlling node behavior on startup.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "[\"Remote.Init\",\"Remote\"]",
          "name": "remoteInit",
          "package": "remote",
          "signature": "Maybe FilePath -\u003e [RemoteCallMetaData] -\u003e (String -\u003e ProcessM ()) -\u003e IO ()",
          "source": "src/Remote-Init.html#remoteInit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Init.html#v:remoteInit\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:remoteInit\"]"
        },
        "index": {
          "description": "This is the usual way create single node of distributed program The intent is that remoteInit be called in your program Main.main function typical call takes this form main remoteInit Just config Main remoteCallMetaData initialProcess This will Read the configuration file config in the current directory or if specified from the file whose path is given by the environment variable RH CONFIG If the given file does not exist or is invalid an exception will be thrown Use the configuration given in the file as well as on the command-line to create new node The usual system processes will be started including logging discovery and spawning Compile-time metadata generated by Remote.Call.remotable will used for invoking closures Metadata from each module must be explicitly mentioned The function initialProcess will be called given as parameter string indicating the value of the cfgRole setting of this node initialProcess is provided by the user and provides an entrypoint for controlling node behavior on startup",
          "hierarchy": "Remote Init",
          "module": "Remote.Init",
          "name": "remoteInit",
          "normalized": "Maybe FilePath-\u003e[RemoteCallMetaData]-\u003e(String-\u003eProcessM())-\u003eIO()",
          "package": "remote",
          "partial": "Init",
          "signature": "Maybe FilePath-\u003e[RemoteCallMetaData]-\u003e(String-\u003eProcessM())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Init.html#v:remoteInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExposes mechanisms for a program built on the \u003ca\u003eRemote.Process\u003c/a\u003e\n framework to discover nodes on the current network. Programs\n can perform node discovery manually, or they can use \u003ca\u003eRemote.Task\u003c/a\u003e,\n which does it automatically.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote.Peer",
          "name": "Peer",
          "package": "remote",
          "source": "src/Remote-Peer.html",
          "type": "module"
        },
        "index": {
          "description": "Exposes mechanisms for program built on the Remote.Process framework to discover nodes on the current network Programs can perform node discovery manually or they can use Remote.Task which does it automatically",
          "hierarchy": "Remote Peer",
          "module": "Remote.Peer",
          "name": "Peer",
          "package": "remote",
          "partial": "Peer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Peer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreated by \u003ccode\u003eRemote.Peer.getPeers\u003c/code\u003e, this maps\n each role to a list of nodes that have that role.\n It can be examined directly or queried with\n \u003ccode\u003efindPeerByRole\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote.Peer",
          "name": "PeerInfo",
          "package": "remote",
          "source": "src/Remote-Process.html#PeerInfo",
          "type": "type"
        },
        "index": {
          "description": "Created by Remote.Peer.getPeers this maps each role to list of nodes that have that role It can be examined directly or queried with findPeerByRole",
          "hierarchy": "Remote Peer",
          "module": "Remote.Peer",
          "name": "PeerInfo",
          "package": "remote",
          "partial": "Peer Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Peer.html#t:PeerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a PeerInfo returned by getPeersDynamic or getPeersStatic,\n give a list of nodes registered as a particular role. If no nodes of\n that role are found, the empty list is returned.\n\u003c/p\u003e",
          "module": "[\"Remote.Peer\",\"Remote\"]",
          "name": "findPeerByRole",
          "package": "remote",
          "signature": "PeerInfo -\u003e String -\u003e [NodeId]",
          "source": "src/Remote-Peer.html#findPeerByRole",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Peer.html#v:findPeerByRole\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:findPeerByRole\"]"
        },
        "index": {
          "description": "Given PeerInfo returned by getPeersDynamic or getPeersStatic give list of nodes registered as particular role If no nodes of that role are found the empty list is returned",
          "hierarchy": "Remote Peer",
          "module": "Remote.Peer",
          "name": "findPeerByRole",
          "normalized": "PeerInfo-\u003eString-\u003e[NodeId]",
          "package": "remote",
          "partial": "Peer By Role",
          "signature": "PeerInfo-\u003eString-\u003e[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Peer.html#v:findPeerByRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns information about all nodes on the current network\n that this node knows about. This function combines dynamic\n and static mechanisms. See documentation on \u003ccode\u003e\u003ca\u003egetPeersStatic\u003c/a\u003e\u003c/code\u003e \n and \u003ccode\u003e\u003ca\u003egetPeersDynamic\u003c/a\u003e\u003c/code\u003e for more info. This function depends\n on the configuration values \u003ccode\u003ecfgKnownHosts\u003c/code\u003e and \u003ccode\u003ecfgPeerDiscoveryPort\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Remote.Peer\",\"Remote\"]",
          "name": "getPeers",
          "package": "remote",
          "signature": "ProcessM PeerInfo",
          "source": "src/Remote-Peer.html#getPeers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Peer.html#v:getPeers\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:getPeers\"]"
        },
        "index": {
          "description": "Returns information about all nodes on the current network that this node knows about This function combines dynamic and static mechanisms See documentation on getPeersStatic and getPeersDynamic for more info This function depends on the configuration values cfgKnownHosts and cfgPeerDiscoveryPort",
          "hierarchy": "Remote Peer",
          "module": "Remote.Peer",
          "name": "getPeers",
          "package": "remote",
          "partial": "Peers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Peer.html#v:getPeers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a PeerInfo, containing a list of known nodes ordered by role.\n This information is acquired by sending out a UDP broadcast on the\n local network; active nodes running the discovery service \n should respond with their information.\n If nodes are running outside of the local network, or if UDP broadcasts\n are disabled by firewall configuration, this won't return useful\n information; in that case, use getPeersStatic.\n This function takes a parameter indicating how long in microseconds \n to wait for hosts to respond. A number like 50000 is usually good enough,\n unless your network is highly congested or with high latency.\n\u003c/p\u003e",
          "module": "Remote.Peer",
          "name": "getPeersDynamic",
          "package": "remote",
          "signature": "Int -\u003e ProcessM PeerInfo",
          "source": "src/Remote-Peer.html#getPeersDynamic",
          "type": "function"
        },
        "index": {
          "description": "Returns PeerInfo containing list of known nodes ordered by role This information is acquired by sending out UDP broadcast on the local network active nodes running the discovery service should respond with their information If nodes are running outside of the local network or if UDP broadcasts are disabled by firewall configuration this won return useful information in that case use getPeersStatic This function takes parameter indicating how long in microseconds to wait for hosts to respond number like is usually good enough unless your network is highly congested or with high latency",
          "hierarchy": "Remote Peer",
          "module": "Remote.Peer",
          "name": "getPeersDynamic",
          "normalized": "Int-\u003eProcessM PeerInfo",
          "package": "remote",
          "partial": "Peers Dynamic",
          "signature": "Int-\u003eProcessM PeerInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Peer.html#v:getPeersDynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a PeerInfo, containing a list of known nodes ordered by role.\n This information is acquired by querying the local node registry on\n each of the hosts in the cfgKnownHosts entry in this node's config.\n Hostnames that don't respond are assumed to be down and nodes running\n on them won't be included in the results.\n\u003c/p\u003e",
          "module": "Remote.Peer",
          "name": "getPeersStatic",
          "package": "remote",
          "signature": "ProcessM PeerInfo",
          "source": "src/Remote-Peer.html#getPeersStatic",
          "type": "function"
        },
        "index": {
          "description": "Returns PeerInfo containing list of known nodes ordered by role This information is acquired by querying the local node registry on each of the hosts in the cfgKnownHosts entry in this node config Hostnames that don respond are assumed to be down and nodes running on them won be included in the results",
          "hierarchy": "Remote Peer",
          "module": "Remote.Peer",
          "name": "getPeersStatic",
          "package": "remote",
          "partial": "Peers Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Peer.html#v:getPeersStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts the discovery process, allowing this node to respond to\n queries from getPeersDynamic. You don't want to call this yourself,\n as it's called for you in \u003ccode\u003eRemote.Init.remoteInit\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Peer",
          "name": "startDiscoveryService",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Peer.html#startDiscoveryService",
          "type": "function"
        },
        "index": {
          "description": "Starts the discovery process allowing this node to respond to queries from getPeersDynamic You don want to call this yourself as it called for you in Remote.Init.remoteInit",
          "hierarchy": "Remote Peer",
          "module": "Remote.Peer",
          "name": "startDiscoveryService",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Discovery Service",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Peer.html#v:startDiscoveryService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is the core of Cloud Haskell. It provides \n processes, messages, monitoring, and configuration.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote.Process",
          "name": "Process",
          "package": "remote",
          "source": "src/Remote-Process.html",
          "type": "module"
        },
        "index": {
          "description": "This module is the core of Cloud Haskell It provides processes messages monitoring and configuration",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "Process",
          "package": "remote",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "AmSpawnOptions",
          "package": "remote",
          "source": "src/Remote-Process.html#AmSpawnOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "AmSpawnOptions",
          "package": "remote",
          "partial": "Am Spawn Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:AmSpawnOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Config structure encapsulates the user-settable configuration options for each node.\n This settings are usually read in from a configuration file or from the executable's\n command line; in either case, see \u003ccode\u003eRemote.Init.remoteInit\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadConfig\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "Config",
          "package": "remote",
          "source": "src/Remote-Process.html#Config",
          "type": "data"
        },
        "index": {
          "description": "The Config structure encapsulates the user-settable configuration options for each node This settings are usually read in from configuration file or from the executable command line in either case see Remote.Init.remoteInit and readConfig",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "Config",
          "package": "remote",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "LocalProcessId",
          "package": "remote",
          "source": "src/Remote-Process.html#LocalProcessId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LocalProcessId",
          "package": "remote",
          "partial": "Local Process Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:LocalProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpresses a current configuration of the logging\n subsystem, which determines which log messages to \n be output and where to send them when they are.\n Both processes and nodes have log configurations,\n set with \u003ccode\u003e\u003ca\u003esetLogConfig\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetNodeLogConfig\u003c/a\u003e\u003c/code\u003e\n respectively. The node log configuration is\n used for all processes that have not explicitly\n set their log configuration. Otherwise, the\n process log configuration takes priority.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "LogConfig",
          "package": "remote",
          "source": "src/Remote-Process.html#LogConfig",
          "type": "data"
        },
        "index": {
          "description": "Expresses current configuration of the logging subsystem which determines which log messages to be output and where to send them when they are Both processes and nodes have log configurations set with setLogConfig and setNodeLogConfig respectively The node log configuration is used for all processes that have not explicitly set their log configuration Otherwise the process log configuration takes priority",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LogConfig",
          "package": "remote",
          "partial": "Log Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:LogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies which log messages will be output. \n All log messages of importance below the current\n log level or not among the criterea given here\n will be suppressed. This type lets you limit\n displayed log messages to certain components.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "LogFilter",
          "package": "remote",
          "source": "src/Remote-Process.html#LogFilter",
          "type": "data"
        },
        "index": {
          "description": "Specifies which log messages will be output All log messages of importance below the current log level or not among the criterea given here will be suppressed This type lets you limit displayed log messages to certain components",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LogFilter",
          "package": "remote",
          "partial": "Log Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:LogFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the importance of a particular log entry.\n Can also be used to filter log output.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "LogLevel",
          "package": "remote",
          "source": "src/Remote-Process.html#LogLevel",
          "type": "data"
        },
        "index": {
          "description": "Specifies the importance of particular log entry Can also be used to filter log output",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LogLevel",
          "package": "remote",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the subsystem or region that is responsible for\n generating a given log entry. This is useful in conjunction\n with \u003ccode\u003e\u003ca\u003eLogFilter\u003c/a\u003e\u003c/code\u003e to limit displayed log output to the\n particular area of your program that you are currently debugging.\n The SYS, TSK, and SAY spheres are used by the framework\n for messages relating to the Process layer, the Task layer,\n and the \u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e function.\n The remainder of values are free for use at the application level.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "LogSphere",
          "package": "remote",
          "source": "src/Remote-Process.html#LogSphere",
          "type": "type"
        },
        "index": {
          "description": "Specifies the subsystem or region that is responsible for generating given log entry This is useful in conjunction with LogFilter to limit displayed log output to the particular area of your program that you are currently debugging The SYS TSK and SAY spheres are used by the framework for messages relating to the Process layer the Task layer and the say function The remainder of values are free for use at the application level",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LogSphere",
          "package": "remote",
          "partial": "Log Sphere",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:LogSphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA preference as to what is done with log messages\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "LogTarget",
          "package": "remote",
          "source": "src/Remote-Process.html#LogTarget",
          "type": "data"
        },
        "index": {
          "description": "preference as to what is done with log messages",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LogTarget",
          "package": "remote",
          "partial": "Log Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:LogTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis monad provides the state and structure for\n matching received messages from the incoming message queue.\n It's the interface between the \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e family of functions,\n and the \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e family, which together can express which\n messages can be accepted.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "MatchM",
          "package": "remote",
          "source": "src/Remote-Process.html#MatchM",
          "type": "data"
        },
        "index": {
          "description": "This monad provides the state and structure for matching received messages from the incoming message queue It the interface between the receive family of functions and the match family which together can express which messages can be accepted",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "MatchM",
          "package": "remote",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:MatchM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "Message",
          "package": "remote",
          "source": "src/Remote-Process.html#Message",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "Message",
          "package": "remote",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe different kinds of monitoring available between processes.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "MonitorAction",
          "package": "remote",
          "source": "src/Remote-Process.html#MonitorAction",
          "type": "data"
        },
        "index": {
          "description": "The different kinds of monitoring available between processes",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "MonitorAction",
          "package": "remote",
          "partial": "Monitor Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:MonitorAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "Node",
          "package": "remote",
          "source": "src/Remote-Process.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "Node",
          "package": "remote",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a node somewhere on the network. These\n can be queried from \u003ccode\u003egetPeers\u003c/code\u003e. See also \u003ccode\u003e\u003ca\u003egetSelfNode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "NodeId",
          "package": "remote",
          "source": "src/Remote-Process.html#NodeId",
          "type": "data"
        },
        "index": {
          "description": "Identifies node somewhere on the network These can be queried from getPeers See also getSelfNode",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "NodeId",
          "package": "remote",
          "partial": "Node Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "PayloadDisposition",
          "package": "remote",
          "source": "src/Remote-Process.html#PayloadDisposition",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "PayloadDisposition",
          "package": "remote",
          "partial": "Payload Disposition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:PayloadDisposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreated by \u003ccode\u003eRemote.Peer.getPeers\u003c/code\u003e, this maps\n each role to a list of nodes that have that role.\n It can be examined directly or queried with\n \u003ccode\u003efindPeerByRole\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "PeerInfo",
          "package": "remote",
          "source": "src/Remote-Process.html#PeerInfo",
          "type": "type"
        },
        "index": {
          "description": "Created by Remote.Peer.getPeers this maps each role to list of nodes that have that role It can be examined directly or queried with findPeerByRole",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "PeerInfo",
          "package": "remote",
          "partial": "Peer Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:PeerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "PortId",
          "package": "remote",
          "source": "src/Remote-Process.html#PortId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "PortId",
          "package": "remote",
          "partial": "Port Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:PortId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "Process",
          "package": "remote",
          "source": "src/Remote-Process.html#Process",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "Process",
          "package": "remote",
          "partial": "Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a process somewhere on the network. These\n are produced by the \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e family of functions and\n consumed by \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e. When a process ends, its process ID\n ceases to be valid. See also \u003ccode\u003e\u003ca\u003egetSelfPid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "ProcessId",
          "package": "remote",
          "source": "src/Remote-Process.html#ProcessId",
          "type": "data"
        },
        "index": {
          "description": "Identifies process somewhere on the network These are produced by the spawn family of functions and consumed by send When process ends its process ID ceases to be valid See also getSelfPid",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "ProcessId",
          "package": "remote",
          "partial": "Process Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:ProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad ProcessM is the core of the process layer. Functions\n in the ProcessM monad may participate in messaging and create\n additional concurrent processes. You can create\n a ProcessM context from an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e context with the \u003ccode\u003eremoteInit\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "ProcessM",
          "package": "remote",
          "source": "src/Remote-Process.html#ProcessM",
          "type": "data"
        },
        "index": {
          "description": "The monad ProcessM is the core of the process layer Functions in the ProcessM monad may participate in messaging and create additional concurrent processes You can create ProcessM context from an IO context with the remoteInit function",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "ProcessM",
          "package": "remote",
          "partial": "Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:ProcessM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main form of notification to a monitoring process that a monitored process has terminated.\n This data structure can be delivered to the monitor either as a message (if the monitor is\n of type \u003ccode\u003e\u003ca\u003eMaMonitor\u003c/a\u003e\u003c/code\u003e) or as an asynchronous exception (if the monitor is of type \u003ccode\u003e\u003ca\u003eMaLink\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMaLinkError\u003c/a\u003e\u003c/code\u003e).\n It contains the PID of the monitored process and the reason for its nofication.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "ProcessMonitorException",
          "package": "remote",
          "source": "src/Remote-Process.html#ProcessMonitorException",
          "type": "data"
        },
        "index": {
          "description": "The main form of notification to monitoring process that monitored process has terminated This data structure can be delivered to the monitor either as message if the monitor is of type MaMonitor or as an asynchronous exception if the monitor is of type MaLink or MaLinkError It contains the PID of the monitored process and the reason for its nofication",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "ProcessMonitorException",
          "package": "remote",
          "partial": "Process Monitor Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:ProcessMonitorException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown by \u003ca\u003eRemote.Process\u003c/a\u003e system services in response\n to some problem\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "ServiceException",
          "package": "remote",
          "source": "src/Remote-Process.html#ServiceException",
          "type": "data"
        },
        "index": {
          "description": "Thrown by Remote.Process system services in response to some problem",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "ServiceException",
          "package": "remote",
          "partial": "Service Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:ServiceException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePart of the notification system of process monitoring, indicating why the monitor is being notified.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "SignalReason",
          "package": "remote",
          "source": "src/Remote-Process.html#SignalReason",
          "type": "data"
        },
        "index": {
          "description": "Part of the notification system of process monitoring indicating why the monitor is being notified",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "SignalReason",
          "package": "remote",
          "partial": "Signal Reason",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:SignalReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown by various network-related functions when\n communication with a host has failed\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "TransmitException",
          "package": "remote",
          "source": "src/Remote-Process.html#TransmitException",
          "type": "data"
        },
        "index": {
          "description": "Thrown by various network-related functions when communication with host has failed",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "TransmitException",
          "package": "remote",
          "partial": "Transmit Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:TransmitException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "TransmitStatus",
          "package": "remote",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "TransmitStatus",
          "package": "remote",
          "partial": "Transmit Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:TransmitStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003ematchUnknownThrow\u003c/a\u003e\u003c/code\u003e in response to a message\n of a wrong type being received by a process\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "UnknownMessageException",
          "package": "remote",
          "source": "src/Remote-Process.html#UnknownMessageException",
          "type": "data"
        },
        "index": {
          "description": "Thrown by matchUnknownThrow in response to message of wrong type being received by process",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "UnknownMessageException",
          "package": "remote",
          "partial": "Unknown Message Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#t:UnknownMessageException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "AmSpawnOptions",
          "package": "remote",
          "signature": "AmSpawnOptions",
          "source": "src/Remote-Process.html#AmSpawnOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:AmSpawnOptions\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:AmSpawnOptions\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "AmSpawnOptions",
          "package": "remote",
          "partial": "Am Spawn Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:AmSpawnOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "Config",
          "package": "remote",
          "signature": "Config",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "Config",
          "package": "remote",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LfAll",
          "package": "remote",
          "signature": "LfAll",
          "source": "src/Remote-Process.html#LogFilter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LfAll\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LfAll\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LfAll",
          "package": "remote",
          "partial": "Lf All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LfAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LfExclude",
          "package": "remote",
          "signature": "LfExclude [LogSphere]",
          "source": "src/Remote-Process.html#LogFilter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LfExclude\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LfExclude\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LfExclude",
          "normalized": "LfExclude[LogSphere]",
          "package": "remote",
          "partial": "Lf Exclude",
          "signature": "LfExclude[LogSphere]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LfExclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LfOnly",
          "package": "remote",
          "signature": "LfOnly [LogSphere]",
          "source": "src/Remote-Process.html#LogFilter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LfOnly\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LfOnly\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LfOnly",
          "normalized": "LfOnly[LogSphere]",
          "package": "remote",
          "partial": "Lf Only",
          "signature": "LfOnly[LogSphere]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LfOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LoCritical",
          "package": "remote",
          "signature": "LoCritical",
          "source": "src/Remote-Process.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoCritical\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LoCritical\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LoCritical",
          "package": "remote",
          "partial": "Lo Critical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoCritical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LoFatal",
          "package": "remote",
          "signature": "LoFatal",
          "source": "src/Remote-Process.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoFatal\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LoFatal\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LoFatal",
          "package": "remote",
          "partial": "Lo Fatal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoFatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LoImportant",
          "package": "remote",
          "signature": "LoImportant",
          "source": "src/Remote-Process.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoImportant\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LoImportant\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LoImportant",
          "package": "remote",
          "partial": "Lo Important",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoImportant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LoInformation",
          "package": "remote",
          "signature": "LoInformation",
          "source": "src/Remote-Process.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoInformation\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LoInformation\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LoInformation",
          "package": "remote",
          "partial": "Lo Information",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoInformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-suppressible application-level emission\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LoSay",
          "package": "remote",
          "signature": "LoSay",
          "source": "src/Remote-Process.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoSay\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LoSay\"]"
        },
        "index": {
          "description": "Non-suppressible application-level emission",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LoSay",
          "package": "remote",
          "partial": "Lo Say",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoSay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default log level\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LoStandard",
          "package": "remote",
          "signature": "LoStandard",
          "source": "src/Remote-Process.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoStandard\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LoStandard\"]"
        },
        "index": {
          "description": "The default log level",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LoStandard",
          "package": "remote",
          "partial": "Lo Standard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoStandard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LoTrivial",
          "package": "remote",
          "signature": "LoTrivial",
          "source": "src/Remote-Process.html#LogLevel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoTrivial\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LoTrivial\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LoTrivial",
          "package": "remote",
          "partial": "Lo Trivial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LoTrivial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LogConfig",
          "package": "remote",
          "signature": "LogConfig",
          "source": "src/Remote-Process.html#LogConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LogConfig\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LogConfig\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LogConfig",
          "package": "remote",
          "partial": "Log Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog messages will be appended to the given file\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LtFile",
          "package": "remote",
          "signature": "LtFile FilePath",
          "source": "src/Remote-Process.html#LogTarget",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LtFile\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LtFile\"]"
        },
        "index": {
          "description": "Log messages will be appended to the given file",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LtFile",
          "package": "remote",
          "partial": "Lt File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LtFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog messages will be forwarded to the given node; please don't set up a loop\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LtForward",
          "package": "remote",
          "signature": "LtForward NodeId",
          "source": "src/Remote-Process.html#LogTarget",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LtForward\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LtForward\"]"
        },
        "index": {
          "description": "Log messages will be forwarded to the given node please don set up loop",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LtForward",
          "package": "remote",
          "partial": "Lt Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LtForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial value -- don't set this in your LogConfig!\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LtForwarded",
          "package": "remote",
          "signature": "LtForwarded",
          "source": "src/Remote-Process.html#LogTarget",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LtForwarded\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LtForwarded\"]"
        },
        "index": {
          "description": "Special value don set this in your LogConfig",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LtForwarded",
          "package": "remote",
          "partial": "Lt Forwarded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LtForwarded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages will be output to the console; the default\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "LtStdout",
          "package": "remote",
          "signature": "LtStdout",
          "source": "src/Remote-Process.html#LogTarget",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LtStdout\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:LtStdout\"]"
        },
        "index": {
          "description": "Messages will be output to the console the default",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "LtStdout",
          "package": "remote",
          "partial": "Lt Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:LtStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaLink means that the monitor process will receive an asynchronous exception of type ProcessMonitorException when the monitee terminates for any reason\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "MaLink",
          "package": "remote",
          "signature": "MaLink",
          "source": "src/Remote-Process.html#MonitorAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:MaLink\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:MaLink\"]"
        },
        "index": {
          "description": "MaLink means that the monitor process will receive an asynchronous exception of type ProcessMonitorException when the monitee terminates for any reason",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "MaLink",
          "package": "remote",
          "partial": "Ma Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:MaLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaLinkError means that the monitor process will receive an asynchronous exception of type ProcessMonitorException when the monitee terminates abnormally\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "MaLinkError",
          "package": "remote",
          "signature": "MaLinkError",
          "source": "src/Remote-Process.html#MonitorAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:MaLinkError\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:MaLinkError\"]"
        },
        "index": {
          "description": "MaLinkError means that the monitor process will receive an asynchronous exception of type ProcessMonitorException when the monitee terminates abnormally",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "MaLinkError",
          "package": "remote",
          "partial": "Ma Link Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:MaLinkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaMonitor means that the monitor process will be sent a ProcessMonitorException message when the monitee terminates for any reason.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "MaMonitor",
          "package": "remote",
          "signature": "MaMonitor",
          "source": "src/Remote-Process.html#MonitorAction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:MaMonitor\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:MaMonitor\"]"
        },
        "index": {
          "description": "MaMonitor means that the monitor process will be sent ProcessMonitorException message when the monitee terminates for any reason",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "MaMonitor",
          "package": "remote",
          "partial": "Ma Monitor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:MaMonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "PldAdmin",
          "package": "remote",
          "signature": "PldAdmin",
          "source": "src/Remote-Process.html#PayloadDisposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "PldAdmin",
          "package": "remote",
          "partial": "Pld Admin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:PldAdmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "PldUser",
          "package": "remote",
          "signature": "PldUser",
          "source": "src/Remote-Process.html#PayloadDisposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "PldUser",
          "package": "remote",
          "partial": "Pld User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:PldUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "ProcessMonitorException",
          "package": "remote",
          "signature": "ProcessMonitorException ProcessId SignalReason",
          "source": "src/Remote-Process.html#ProcessMonitorException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:ProcessMonitorException\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:ProcessMonitorException\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "ProcessMonitorException",
          "package": "remote",
          "partial": "Process Monitor Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:ProcessMonitorException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteBadFormat",
          "package": "remote",
          "signature": "QteBadFormat",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteBadFormat\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteBadFormat\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteBadFormat",
          "package": "remote",
          "partial": "Qte Bad Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteBadFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteBadNetworkMagic",
          "package": "remote",
          "signature": "QteBadNetworkMagic",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteBadNetworkMagic\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteBadNetworkMagic\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteBadNetworkMagic",
          "package": "remote",
          "partial": "Qte Bad Network Magic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteBadNetworkMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteConnectionTimeout",
          "package": "remote",
          "signature": "QteConnectionTimeout",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteConnectionTimeout\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteConnectionTimeout\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteConnectionTimeout",
          "package": "remote",
          "partial": "Qte Connection Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteConnectionTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteDispositionFailed",
          "package": "remote",
          "signature": "QteDispositionFailed",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteDispositionFailed\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteDispositionFailed\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteDispositionFailed",
          "package": "remote",
          "partial": "Qte Disposition Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteDispositionFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteEncodingError",
          "package": "remote",
          "signature": "QteEncodingError String",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteEncodingError\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteEncodingError\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteEncodingError",
          "package": "remote",
          "partial": "Qte Encoding Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteEncodingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteLoggingError",
          "package": "remote",
          "signature": "QteLoggingError",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteLoggingError\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteLoggingError\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteLoggingError",
          "package": "remote",
          "partial": "Qte Logging Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteLoggingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteNetworkError",
          "package": "remote",
          "signature": "QteNetworkError String",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteNetworkError\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteNetworkError\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteNetworkError",
          "package": "remote",
          "partial": "Qte Network Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteNetworkError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteOK",
          "package": "remote",
          "signature": "QteOK",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteOK\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteOK\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteOK",
          "package": "remote",
          "partial": "Qte OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteOther",
          "package": "remote",
          "signature": "QteOther String",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteOther\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteOther\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteOther",
          "package": "remote",
          "partial": "Qte Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QtePleaseSendBody",
          "package": "remote",
          "signature": "QtePleaseSendBody",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QtePleaseSendBody\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QtePleaseSendBody\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QtePleaseSendBody",
          "package": "remote",
          "partial": "Qte Please Send Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QtePleaseSendBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteThrottle",
          "package": "remote",
          "signature": "QteThrottle Int",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteThrottle\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteThrottle\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteThrottle",
          "package": "remote",
          "partial": "Qte Throttle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteThrottle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteUnknownCommand",
          "package": "remote",
          "signature": "QteUnknownCommand",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteUnknownCommand\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteUnknownCommand\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteUnknownCommand",
          "package": "remote",
          "partial": "Qte Unknown Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteUnknownCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "QteUnknownPid",
          "package": "remote",
          "signature": "QteUnknownPid",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteUnknownPid\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:QteUnknownPid\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "QteUnknownPid",
          "package": "remote",
          "partial": "Qte Unknown Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:QteUnknownPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "ServiceException",
          "package": "remote",
          "signature": "ServiceException String",
          "source": "src/Remote-Process.html#ServiceException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:ServiceException\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:ServiceException\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "ServiceException",
          "package": "remote",
          "partial": "Service Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:ServiceException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe monitee terminated with an uncaught exception, which is given as a string\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "SrException",
          "package": "remote",
          "signature": "SrException String",
          "source": "src/Remote-Process.html#SignalReason",
          "type": "function"
        },
        "index": {
          "description": "the monitee terminated with an uncaught exception which is given as string",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "SrException",
          "package": "remote",
          "partial": "Sr Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:SrException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSrInvalid: the monitee was not running at the time of the attempt to establish monitoring\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "SrInvalid",
          "package": "remote",
          "signature": "SrInvalid",
          "source": "src/Remote-Process.html#SignalReason",
          "type": "function"
        },
        "index": {
          "description": "SrInvalid the monitee was not running at the time of the attempt to establish monitoring",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "SrInvalid",
          "package": "remote",
          "partial": "Sr Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:SrInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe monitee is believed to have ended or be inaccessible, as the node on which its running is not responding to pings. This may indicate a network bisection or that the remote node has crashed.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "SrNoPing",
          "package": "remote",
          "signature": "SrNoPing",
          "source": "src/Remote-Process.html#SignalReason",
          "type": "function"
        },
        "index": {
          "description": "the monitee is believed to have ended or be inaccessible as the node on which its running is not responding to pings This may indicate network bisection or that the remote node has crashed",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "SrNoPing",
          "package": "remote",
          "partial": "Sr No Ping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:SrNoPing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe monitee terminated normally\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "SrNormal",
          "package": "remote",
          "signature": "SrNormal",
          "source": "src/Remote-Process.html#SignalReason",
          "type": "function"
        },
        "index": {
          "description": "the monitee terminated normally",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "SrNormal",
          "package": "remote",
          "partial": "Sr Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:SrNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "TransmitException",
          "package": "remote",
          "signature": "TransmitException TransmitStatus",
          "source": "src/Remote-Process.html#TransmitException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:TransmitException\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:TransmitException\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "TransmitException",
          "package": "remote",
          "partial": "Transmit Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:TransmitException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "UnknownMessageException",
          "package": "remote",
          "signature": "UnknownMessageException String",
          "source": "src/Remote-Process.html#UnknownMessageException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:UnknownMessageException\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:UnknownMessageException\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "UnknownMessageException",
          "package": "remote",
          "partial": "Unknown Message Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:UnknownMessageException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "amsoLink",
          "package": "remote",
          "signature": "Maybe ProcessId",
          "source": "src/Remote-Process.html#AmSpawnOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:amsoLink\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:amsoLink\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "amsoLink",
          "package": "remote",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:amsoLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "amsoMonitor",
          "package": "remote",
          "signature": "Maybe (ProcessId, MonitorAction)",
          "source": "src/Remote-Process.html#AmSpawnOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:amsoMonitor\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:amsoMonitor\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "amsoMonitor",
          "normalized": "Maybe(ProcessId,MonitorAction)",
          "package": "remote",
          "partial": "Monitor",
          "signature": "Maybe(ProcessId,MonitorAction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:amsoMonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "amsoName",
          "package": "remote",
          "signature": "Maybe String",
          "source": "src/Remote-Process.html#AmSpawnOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:amsoName\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:amsoName\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "amsoName",
          "package": "remote",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:amsoName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "amsoPaused",
          "package": "remote",
          "signature": "Bool",
          "source": "src/Remote-Process.html#AmSpawnOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:amsoPaused\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:amsoPaused\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "amsoPaused",
          "package": "remote",
          "partial": "Paused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:amsoPaused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvokes a function on a remote node. The function must be\n given by a closure. This function will block until the called\n function completes or the connection is broken.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "callRemote",
          "package": "remote",
          "signature": "NodeId -\u003e Closure (ProcessM a) -\u003e ProcessM a",
          "source": "src/Remote-Process.html#callRemote",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:callRemote\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:callRemote\"]"
        },
        "index": {
          "description": "Invokes function on remote node The function must be given by closure This function will block until the called function completes or the connection is broken",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "callRemote",
          "normalized": "NodeId-\u003eClosure(ProcessM a)-\u003eProcessM a",
          "package": "remote",
          "partial": "Remote",
          "signature": "NodeId-\u003eClosure(ProcessM a)-\u003eProcessM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:callRemote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "callRemoteIO",
          "package": "remote",
          "signature": "NodeId -\u003e Closure (IO a) -\u003e ProcessM a",
          "source": "src/Remote-Process.html#callRemoteIO",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:callRemoteIO\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:callRemoteIO\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "callRemoteIO",
          "normalized": "NodeId-\u003eClosure(IO a)-\u003eProcessM a",
          "package": "remote",
          "partial": "Remote IO",
          "signature": "NodeId-\u003eClosure(IO a)-\u003eProcessM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:callRemoteIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "callRemotePure",
          "package": "remote",
          "signature": "NodeId -\u003e Closure a -\u003e ProcessM a",
          "source": "src/Remote-Process.html#callRemotePure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:callRemotePure\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:callRemotePure\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "callRemotePure",
          "normalized": "NodeId-\u003eClosure a-\u003eProcessM a",
          "package": "remote",
          "partial": "Remote Pure",
          "signature": "NodeId-\u003eClosure a-\u003eProcessM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:callRemotePure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand-line arguments that are not part of the node configuration are placed here and can be examined by your application\n             logConfig :: LogConfig\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgArgs",
          "package": "remote",
          "signature": "[String]",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Command-line arguments that are not part of the node configuration are placed here and can be examined by your application logConfig LogConfig",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgArgs",
          "normalized": "[String]",
          "package": "remote",
          "partial": "Args",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe hostname, used as a basis for creating the name of the node. If unspecified, the OS will be queried. Since the hostname is part of the nodename, the computer must be accessible to other nodes using this name.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgHostName",
          "package": "remote",
          "signature": "HostName",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The hostname used as basis for creating the name of the node If unspecified the OS will be queried Since the hostname is part of the nodename the computer must be accessible to other nodes using this name",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgHostName",
          "package": "remote",
          "partial": "Host Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of hosts where nodes may be running. When \u003ccode\u003eRemote.Peer.getPeers\u003c/code\u003e or \u003ccode\u003eRemote.Peer.getPeerStatic\u003c/code\u003e is called, each host on this list will be queried for its nodes. Only matters if you rely on static peer discovery.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgKnownHosts",
          "package": "remote",
          "signature": "[String]",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "list of hosts where nodes may be running When Remote.Peer.getPeers or Remote.Peer.getPeerStatic is called each host on this list will be queried for its nodes Only matters if you rely on static peer discovery",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgKnownHosts",
          "normalized": "[String]",
          "package": "remote",
          "partial": "Known Hosts",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgKnownHosts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TCP port on which to listen to for new connections. If unassigned or 0, the OS will assign a free port.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgListenPort",
          "package": "remote",
          "signature": "PortId",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The TCP port on which to listen to for new connections If unassigned or the OS will assign free port",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgListenPort",
          "package": "remote",
          "partial": "Listen Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgListenPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TCP port on which to communicate with the local node registry, or to start the local node registry if it isn't already running. This defaults to 38813 and shouldn't be changed unless you have prohibitive firewall rules\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgLocalRegistryListenPort",
          "package": "remote",
          "signature": "PortId",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The TCP port on which to communicate with the local node registry or to start the local node registry if it isn already running This defaults to and shouldn be changed unless you have prohibitive firewall rules",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgLocalRegistryListenPort",
          "package": "remote",
          "partial": "Local Registry Listen Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgLocalRegistryListenPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA limit on the number of simultaneous outgoing connections per node\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgMaxOutgoing",
          "package": "remote",
          "signature": "Int",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "limit on the number of simultaneous outgoing connections per node",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgMaxOutgoing",
          "package": "remote",
          "partial": "Max Outgoing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgMaxOutgoing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unique identifying string for this network or application. Must not contain spaces. The uniqueness of this string ensures that multiple applications running on the same physical network won't accidentally communicate with each other. All nodes of your application should have the same network magic. Defaults to MAGIC\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgNetworkMagic",
          "package": "remote",
          "signature": "String",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The unique identifying string for this network or application Must not contain spaces The uniqueness of this string ensures that multiple applications running on the same physical network won accidentally communicate with each other All nodes of your application should have the same network magic Defaults to MAGIC",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgNetworkMagic",
          "package": "remote",
          "partial": "Network Magic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgNetworkMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe UDP port on which local peer discovery broadcasts are sent. Defaults to 38813, and only matters if you rely on dynamic peer discovery\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgPeerDiscoveryPort",
          "package": "remote",
          "signature": "PortId",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The UDP port on which local peer discovery broadcasts are sent Defaults to and only matters if you rely on dynamic peer discovery",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgPeerDiscoveryPort",
          "package": "remote",
          "partial": "Peer Discovery Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgPeerDiscoveryPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime in microseconds before an in-memory promise is flushed to disk. 0 to disable disk flush entirely.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgPromiseFlushDelay",
          "package": "remote",
          "signature": "Int",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Time in microseconds before an in-memory promise is flushed to disk to disable disk flush entirely",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgPromiseFlushDelay",
          "package": "remote",
          "partial": "Promise Flush Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgPromiseFlushDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepended to the filename of flushed promises.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgPromisePrefix",
          "package": "remote",
          "signature": "String",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Prepended to the filename of flushed promises",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgPromisePrefix",
          "package": "remote",
          "partial": "Promise Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgPromisePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe user-assigned role of this node determines what its initial behavior is and how it presents itself to its peers. Default to NODE\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgRole",
          "package": "remote",
          "signature": "String",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The user-assigned role of this node determines what its initial behavior is and how it presents itself to its peers Default to NODE",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgRole",
          "package": "remote",
          "partial": "Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMicroseconds to wait for a response from a system service on a remote node. If your network has high latency or congestion, you may need to increase this to avoid incorrect reports of node inaccessibility. 0 to wait indefinitely (not recommended).\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "cfgRoundtripTimeout",
          "package": "remote",
          "signature": "Int",
          "source": "src/Remote-Process.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Microseconds to wait for response from system service on remote node If your network has high latency or congestion you may need to increase this to avoid incorrect reports of node inaccessibility to wait indefinitely not recommended",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "cfgRoundtripTimeout",
          "package": "remote",
          "partial": "Roundtrip Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:cfgRoundtripTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default log configuration represents\n a starting point for setting your own\n configuration. It is:\n\u003c/p\u003e\u003cpre\u003e logLevel = LoStandard\n logTarget = LtStdout\n logFilter = LfAll\n\u003c/pre\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "defaultLogConfig",
          "package": "remote",
          "signature": "LogConfig",
          "source": "src/Remote-Process.html#defaultLogConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:defaultLogConfig\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:defaultLogConfig\"]"
        },
        "index": {
          "description": "The default log configuration represents starting point for setting your own configuration It is logLevel LoStandard logTarget LtStdout logFilter LfAll",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "defaultLogConfig",
          "package": "remote",
          "partial": "Log Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:defaultLogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "defaultSpawnOptions",
          "package": "remote",
          "signature": "AmSpawnOptions",
          "source": "src/Remote-Process.html#defaultSpawnOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:defaultSpawnOptions\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:defaultSpawnOptions\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "defaultSpawnOptions",
          "package": "remote",
          "partial": "Spawn Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:defaultSpawnOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "diffTime",
          "package": "remote",
          "signature": "UTCTime -\u003e UTCTime -\u003e Int",
          "source": "src/Remote-Process.html#diffTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "diffTime",
          "normalized": "UTCTime-\u003eUTCTime-\u003eInt",
          "package": "remote",
          "partial": "Time",
          "signature": "UTCTime-\u003eUTCTime-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:diffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "emptyConfig",
          "package": "remote",
          "signature": "Config",
          "source": "src/Remote-Process.html#emptyConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "emptyConfig",
          "package": "remote",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:emptyConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "evaluateClosure",
          "package": "remote",
          "signature": "Closure a -\u003e ProcessM (Maybe (Payload -\u003e b))",
          "source": "src/Remote-Process.html#evaluateClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "evaluateClosure",
          "normalized": "Closure a-\u003eProcessM(Maybe(Payload-\u003eb))",
          "package": "remote",
          "partial": "Closure",
          "signature": "Closure a-\u003eProcessM(Maybe(Payload-\u003eb))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:evaluateClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple way to receive messages. \n This will return the first message received\n of the specified type; if no such message\n is available, the function will block.\n Unlike the \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e family of functions,\n this function does not allow the notion\n of choice in message extraction.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "expect",
          "package": "remote",
          "signature": "ProcessM a",
          "source": "src/Remote-Process.html#expect",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:expect\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:expect\"]"
        },
        "index": {
          "description": "simple way to receive messages This will return the first message received of the specified type if no such message is available the function will block Unlike the receive family of functions this function does not allow the notion of choice in message extraction",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "expect",
          "package": "remote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a message-receive loop on the given node. You probably don't want to call this function yourself.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "forkAndListenAndDeliver",
          "package": "remote",
          "signature": "MVar Node -\u003e Config -\u003e IO ()",
          "source": "src/Remote-Process.html#forkAndListenAndDeliver",
          "type": "function"
        },
        "index": {
          "description": "Starts message-receive loop on the given node You probably don want to call this function yourself",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "forkAndListenAndDeliver",
          "normalized": "MVar Node-\u003eConfig-\u003eIO()",
          "package": "remote",
          "partial": "And Listen And Deliver",
          "signature": "MVar Node-\u003eConfig-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:forkAndListenAndDeliver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003espawnLocal\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "forkProcess",
          "package": "remote",
          "signature": "ProcessM () -\u003e ProcessM ProcessId",
          "source": "src/Remote-Process.html#forkProcess",
          "type": "function"
        },
        "index": {
          "description": "synonym for spawnLocal",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "forkProcess",
          "normalized": "ProcessM()-\u003eProcessM ProcessId",
          "package": "remote",
          "partial": "Process",
          "signature": "ProcessM()-\u003eProcessM ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:forkProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns command-line arguments provided to the\n executable, excluding any command line arguments\n that were processed by the framework.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "getCfgArgs",
          "package": "remote",
          "signature": "ProcessM [String]",
          "source": "src/Remote-Process.html#getCfgArgs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getCfgArgs\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:getCfgArgs\"]"
        },
        "index": {
          "description": "Returns command-line arguments provided to the executable excluding any command line arguments that were processed by the framework",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getCfgArgs",
          "normalized": "ProcessM[String]",
          "package": "remote",
          "partial": "Cfg Args",
          "signature": "ProcessM[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getCfgArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "getConfig",
          "package": "remote",
          "signature": "ProcessM Config",
          "source": "src/Remote-Process.html#getConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getConfig",
          "package": "remote",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the currently active log configuration\n for the current process; if the current process\n doesn't have a log configuration set, the process's\n log configuration will be returned\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "getLogConfig",
          "package": "remote",
          "signature": "ProcessM LogConfig",
          "source": "src/Remote-Process.html#getLogConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getLogConfig\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:getLogConfig\"]"
        },
        "index": {
          "description": "Gets the currently active log configuration for the current process if the current process doesn have log configuration set the process log configuration will be returned",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getLogConfig",
          "package": "remote",
          "partial": "Log Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getLogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "getLookup",
          "package": "remote",
          "signature": "ProcessM Lookup",
          "source": "src/Remote-Process.html#getLookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getLookup",
          "package": "remote",
          "partial": "Lookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "getMessagePayload",
          "package": "remote",
          "signature": "Message -\u003e Maybe a",
          "source": "src/Remote-Process.html#getMessagePayload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getMessagePayload",
          "normalized": "Message-\u003eMaybe a",
          "package": "remote",
          "partial": "Message Payload",
          "signature": "Message-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getMessagePayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "getMessageType",
          "package": "remote",
          "signature": "Message -\u003e String",
          "source": "src/Remote-Process.html#getMessageType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getMessageType",
          "normalized": "Message-\u003eString",
          "package": "remote",
          "partial": "Message Type",
          "signature": "Message-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getMessageType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "getNewMessageLocal",
          "package": "remote",
          "signature": "Node -\u003e LocalProcessId -\u003e STM (Maybe Message)",
          "source": "src/Remote-Process.html#getNewMessageLocal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getNewMessageLocal",
          "normalized": "Node-\u003eLocalProcessId-\u003eSTM(Maybe Message)",
          "package": "remote",
          "partial": "New Message Local",
          "signature": "Node-\u003eLocalProcessId-\u003eSTM(Maybe Message)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getNewMessageLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "getProcess",
          "package": "remote",
          "signature": "ProcessM Process",
          "source": "src/Remote-Process.html#getProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getProcess",
          "package": "remote",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "getQueueLength",
          "package": "remote",
          "signature": "ProcessM Int",
          "source": "src/Remote-Process.html#getQueueLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getQueueLength",
          "package": "remote",
          "partial": "Queue Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getQueueLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the node ID of the node that the current process is running on.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "getSelfNode",
          "package": "remote",
          "signature": "ProcessM NodeId",
          "source": "src/Remote-Process.html#getSelfNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getSelfNode\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:getSelfNode\"]"
        },
        "index": {
          "description": "Returns the node ID of the node that the current process is running on",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getSelfNode",
          "package": "remote",
          "partial": "Self Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getSelfNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the process ID of the current process.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "getSelfPid",
          "package": "remote",
          "signature": "ProcessM ProcessId",
          "source": "src/Remote-Process.html#getSelfPid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getSelfPid\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:getSelfPid\"]"
        },
        "index": {
          "description": "Returns the process ID of the current process",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "getSelfPid",
          "package": "remote",
          "partial": "Self Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:getSelfPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "hostFromNid",
          "package": "remote",
          "signature": "NodeId -\u003e HostName",
          "source": "src/Remote-Process.html#hostFromNid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "hostFromNid",
          "normalized": "NodeId-\u003eHostName",
          "package": "remote",
          "partial": "From Nid",
          "signature": "NodeId-\u003eHostName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:hostFromNid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e object, given the specified configuration (usually created by \u003ccode\u003e\u003ca\u003ereadConfig\u003c/a\u003e\u003c/code\u003e) and\n function metadata table (usually create by \u003ccode\u003eRemote.Call.registerCalls\u003c/code\u003e). You probably want to use\n \u003ccode\u003eRemote.Init.remoteInit\u003c/code\u003e instead of this lower-level function.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "initNode",
          "package": "remote",
          "signature": "Config -\u003e Lookup -\u003e IO (MVar Node)",
          "source": "src/Remote-Process.html#initNode",
          "type": "function"
        },
        "index": {
          "description": "Creates new Node object given the specified configuration usually created by readConfig and function metadata table usually create by Remote.Call.registerCalls You probably want to use Remote.Init.remoteInit instead of this lower-level function",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "initNode",
          "normalized": "Config-\u003eLookup-\u003eIO(MVar Node)",
          "package": "remote",
          "partial": "Node",
          "signature": "Config-\u003eLookup-\u003eIO(MVar Node)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:initNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "invokeClosure",
          "package": "remote",
          "signature": "Closure a -\u003e ProcessM (Maybe a)",
          "source": "src/Remote-Process.html#invokeClosure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:invokeClosure\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:invokeClosure\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "invokeClosure",
          "normalized": "Closure a-\u003eProcessM(Maybe a)",
          "package": "remote",
          "partial": "Closure",
          "signature": "Closure a-\u003eProcessM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:invokeClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the given process ID is associated with the current node.\n Does not examine if the process is currently running.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "isPidLocal",
          "package": "remote",
          "signature": "ProcessId -\u003e ProcessM Bool",
          "source": "src/Remote-Process.html#isPidLocal",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the given process ID is associated with the current node Does not examine if the process is currently running",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "isPidLocal",
          "normalized": "ProcessId-\u003eProcessM Bool",
          "package": "remote",
          "partial": "Pid Local",
          "signature": "ProcessId-\u003eProcessM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:isPidLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablishes bidirectional abnormal termination monitoring between the current\n process and another. Monitoring established with linkProcess\n is bidirectional and signals only in the event of abnormal termination.\n In other words, \u003ccode\u003elinkProcess a\u003c/code\u003e is equivalent to:\n\u003c/p\u003e\u003cpre\u003e monitorProcess mypid a MaLinkError\n monitorProcess a mypid MaLinkError\n\u003c/pre\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "linkProcess",
          "package": "remote",
          "signature": "ProcessId -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#linkProcess",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:linkProcess\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:linkProcess\"]"
        },
        "index": {
          "description": "Establishes bidirectional abnormal termination monitoring between the current process and another Monitoring established with linkProcess is bidirectional and signals only in the event of abnormal termination In other words linkProcess is equivalent to monitorProcess mypid MaLinkError monitorProcess mypid MaLinkError",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "linkProcess",
          "normalized": "ProcessId-\u003eProcessM()",
          "package": "remote",
          "partial": "Process",
          "signature": "ProcessId-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:linkProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "localFromPid",
          "package": "remote",
          "signature": "ProcessId -\u003e LocalProcessId",
          "source": "src/Remote-Process.html#localFromPid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "localFromPid",
          "normalized": "ProcessId-\u003eLocalProcessId",
          "package": "remote",
          "partial": "From Pid",
          "signature": "ProcessId-\u003eLocalProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:localFromPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContacts the local node registry and attempts to verify that it is alive.\n If the local node registry cannot be contacted, an exception will be thrown.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "localRegistryHello",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Process.html#localRegistryHello",
          "type": "function"
        },
        "index": {
          "description": "Contacts the local node registry and attempts to verify that it is alive If the local node registry cannot be contacted an exception will be thrown",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "localRegistryHello",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Registry Hello",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:localRegistryHello"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "localRegistryQueryNodes",
          "package": "remote",
          "signature": "NodeId -\u003e ProcessM (Maybe PeerInfo)",
          "source": "src/Remote-Process.html#localRegistryQueryNodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "localRegistryQueryNodes",
          "normalized": "NodeId-\u003eProcessM(Maybe PeerInfo)",
          "package": "remote",
          "partial": "Registry Query Nodes",
          "signature": "NodeId-\u003eProcessM(Maybe PeerInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:localRegistryQueryNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContacts the local node registry and attempts to register current node. \n You probably don't want to call this function yourself, as it's done for you in \u003ccode\u003eRemote.Init.remoteInit\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "localRegistryRegisterNode",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Process.html#localRegistryRegisterNode",
          "type": "function"
        },
        "index": {
          "description": "Contacts the local node registry and attempts to register current node You probably don want to call this function yourself as it done for you in Remote.Init.remoteInit",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "localRegistryRegisterNode",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Registry Register Node",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:localRegistryRegisterNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContacts the local node registry and attempts to unregister current node. \n You probably don't want to call this function yourself, as it's done for you in \u003ccode\u003eRemote.Init.remoteInit\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "localRegistryUnregisterNode",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Process.html#localRegistryUnregisterNode",
          "type": "function"
        },
        "index": {
          "description": "Contacts the local node registry and attempts to unregister current node You probably don want to call this function yourself as it done for you in Remote.Init.remoteInit",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "localRegistryUnregisterNode",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Registry Unregister Node",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:localRegistryUnregisterNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther filtering\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "logFilter",
          "package": "remote",
          "signature": "LogFilter",
          "source": "src/Remote-Process.html#LogConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:logFilter\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:logFilter\"]"
        },
        "index": {
          "description": "Other filtering",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "logFilter",
          "package": "remote",
          "partial": "Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:logFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lowest message priority that will be displayed\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "logLevel",
          "package": "remote",
          "signature": "LogLevel",
          "source": "src/Remote-Process.html#LogConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:logLevel\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:logLevel\"]"
        },
        "index": {
          "description": "The lowest message priority that will be displayed",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "logLevel",
          "package": "remote",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:logLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a log entry, using the process's current logging configuration.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLogSphere\u003c/a\u003e\u003c/code\u003e indicates the subsystem generating this message. SYS in the case of componentes of the framework.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLogLevel\u003c/a\u003e\u003c/code\u003e indicates the importance of the message.\n\u003c/li\u003e\u003cli\u003e The third parameter is the log message.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBoth of the first two parameters may be used to filter log output.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "logS",
          "package": "remote",
          "signature": "LogSphere -\u003e LogLevel -\u003e String -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#logS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:logS\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:logS\"]"
        },
        "index": {
          "description": "Generates log entry using the process current logging configuration LogSphere indicates the subsystem generating this message SYS in the case of componentes of the framework LogLevel indicates the importance of the message The third parameter is the log message Both of the first two parameters may be used to filter log output",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "logS",
          "normalized": "LogSphere-\u003eLogLevel-\u003eString-\u003eProcessM()",
          "package": "remote",
          "signature": "LogSphere-\u003eLogLevel-\u003eString-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:logS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere to send messages\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "logTarget",
          "package": "remote",
          "signature": "LogTarget",
          "source": "src/Remote-Process.html#LogConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:logTarget\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:logTarget\"]"
        },
        "index": {
          "description": "Where to send messages",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "logTarget",
          "package": "remote",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:logTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "makeClosure",
          "package": "remote",
          "signature": "String -\u003e v -\u003e ProcessM (Closure a)",
          "source": "src/Remote-Process.html#makeClosure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:makeClosure\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:makeClosure\"]"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "makeClosure",
          "normalized": "String-\u003ea-\u003eProcessM(Closure b)",
          "package": "remote",
          "partial": "Closure",
          "signature": "String-\u003ev-\u003eProcessM(Closure a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:makeClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "makeNodeFromHost",
          "package": "remote",
          "signature": "String -\u003e PortId -\u003e NodeId",
          "source": "src/Remote-Process.html#makeNodeFromHost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "makeNodeFromHost",
          "normalized": "String-\u003ePortId-\u003eNodeId",
          "package": "remote",
          "partial": "Node From Host",
          "signature": "String-\u003ePortId-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:makeNodeFromHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "makePayloadClosure",
          "package": "remote",
          "signature": "Closure a -\u003e Maybe (Closure Payload)",
          "source": "src/Remote-Process.html#makePayloadClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "makePayloadClosure",
          "normalized": "Closure a-\u003eMaybe(Closure Payload)",
          "package": "remote",
          "partial": "Payload Closure",
          "signature": "Closure a-\u003eMaybe(Closure Payload)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:makePayloadClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to specify a message pattern in \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e and related functions.\n Only messages containing data of type \u003cem\u003ea\u003c/em\u003e, where \u003cem\u003ea\u003c/em\u003e is the argument to the user-provided\n function in the first parameter of \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e, will be removed from the queue, at which point\n the user-provided function will be invoked.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "match",
          "package": "remote",
          "signature": "(a -\u003e ProcessM q) -\u003e MatchM q ()",
          "source": "src/Remote-Process.html#match",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:match\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:match\"]"
        },
        "index": {
          "description": "Used to specify message pattern in receiveWait and related functions Only messages containing data of type where is the argument to the user-provided function in the first parameter of match will be removed from the queue at which point the user-provided function will be invoked",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "match",
          "normalized": "(a-\u003eProcessM b)-\u003eMatchM b()",
          "package": "remote",
          "signature": "(a-\u003eProcessM q)-\u003eMatchM q()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "matchCond",
          "package": "remote",
          "signature": "(a -\u003e Maybe (ProcessM q)) -\u003e MatchM q ()",
          "source": "src/Remote-Process.html#matchCond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "matchCond",
          "normalized": "(a-\u003eMaybe(ProcessM b))-\u003eMatchM b()",
          "package": "remote",
          "partial": "Cond",
          "signature": "(a-\u003eMaybe(ProcessM q))-\u003eMatchM q()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:matchCond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e, but allows for additional criteria to be checked prior to message acceptance.\n Here, the first user-provided function operates as a filter, and the message will be accepted\n only if it returns True. Once it's been accepted, the second user-defined function is invoked,\n as in \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "matchIf",
          "package": "remote",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e ProcessM q) -\u003e MatchM q ()",
          "source": "src/Remote-Process.html#matchIf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:matchIf\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:matchIf\"]"
        },
        "index": {
          "description": "Similar to match but allows for additional criteria to be checked prior to message acceptance Here the first user-provided function operates as filter and the message will be accepted only if it returns True Once it been accepted the second user-defined function is invoked as in match",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "matchIf",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eProcessM b)-\u003eMatchM b()",
          "package": "remote",
          "partial": "If",
          "signature": "(a-\u003eBool)-\u003e(a-\u003eProcessM q)-\u003eMatchM q()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:matchIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialized version of \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e (for use with \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e and friends) for catching process down\n messages. This way processes can avoid waiting forever for a response from another process that has crashed.\n Intended to be used within a \u003ccode\u003e\u003ca\u003ewithMonitor\u003c/a\u003e\u003c/code\u003e block, e.g.:\n\u003c/p\u003e\u003cpre\u003e withMonitor apid $\n   do send apid QueryMsg\n      receiveWait \n      [\n        match (\\AnswerMsg -\u003e return \"ok\"),\n        matchProcessDown apid (return \"aborted\")   \n      ]\n\u003c/pre\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "matchProcessDown",
          "package": "remote",
          "signature": "ProcessId -\u003e ProcessM q -\u003e MatchM q ()",
          "source": "src/Remote-Process.html#matchProcessDown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:matchProcessDown\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:matchProcessDown\"]"
        },
        "index": {
          "description": "specialized version of match for use with receive receiveWait and friends for catching process down messages This way processes can avoid waiting forever for response from another process that has crashed Intended to be used within withMonitor block e.g withMonitor apid do send apid QueryMsg receiveWait match AnswerMsg return ok matchProcessDown apid return aborted",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "matchProcessDown",
          "normalized": "ProcessId-\u003eProcessM a-\u003eMatchM a()",
          "package": "remote",
          "partial": "Process Down",
          "signature": "ProcessId-\u003eProcessM q-\u003eMatchM q()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:matchProcessDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA catch-all variant of \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e that invokes user-provided code and\n will extact any message from the queue. This is useful for matching\n against messages that are not recognized. Since message matching patterns\n are evaluated in order, this function, if used, should be the last element\n in the list of matchers given to \u003ccode\u003e\u003ca\u003ereceiveWait\u003c/a\u003e\u003c/code\u003e and similar functions.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "matchUnknown",
          "package": "remote",
          "signature": "ProcessM q -\u003e MatchM q ()",
          "source": "src/Remote-Process.html#matchUnknown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:matchUnknown\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:matchUnknown\"]"
        },
        "index": {
          "description": "catch-all variant of match that invokes user-provided code and will extact any message from the queue This is useful for matching against messages that are not recognized Since message matching patterns are evaluated in order this function if used should be the last element in the list of matchers given to receiveWait and similar functions",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "matchUnknown",
          "normalized": "ProcessM a-\u003eMatchM a()",
          "package": "remote",
          "partial": "Unknown",
          "signature": "ProcessM q-\u003eMatchM q()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:matchUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ematchUnknown\u003c/a\u003e\u003c/code\u003e that throws a \u003ccode\u003e\u003ca\u003eUnknownMessageException\u003c/a\u003e\u003c/code\u003e\n if the process receives a message that isn't extracted by another message matcher.\n Equivalent to:\n\u003c/p\u003e\u003cpre\u003e matchUnknown (throw (UnknownMessageException \"...\"))\n\u003c/pre\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "matchUnknownThrow",
          "package": "remote",
          "signature": "MatchM q ()",
          "source": "src/Remote-Process.html#matchUnknownThrow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:matchUnknownThrow\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:matchUnknownThrow\"]"
        },
        "index": {
          "description": "variant of matchUnknown that throws UnknownMessageException if the process receives message that isn extracted by another message matcher Equivalent to matchUnknown throw UnknownMessageException",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "matchUnknownThrow",
          "normalized": "MatchM a()",
          "package": "remote",
          "partial": "Unknown Throw",
          "signature": "MatchM q()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:matchUnknownThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablishes unidirectional processing of another process. The format is:\n\u003c/p\u003e\u003cpre\u003e monitorProcess monitor monitee action\n\u003c/pre\u003e\u003cp\u003eHere,\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e monitor is the process that will be notified if the monitee goes down\n\u003c/li\u003e\u003cli\u003e monitee is the process that will be monitored\n\u003c/li\u003e\u003cli\u003e action determines how the monitor will be notified\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMonitoring will remain in place until one of the processes ends or until\n \u003ccode\u003e\u003ca\u003eunmonitorProcess\u003c/a\u003e\u003c/code\u003e is called. Calls to \u003ccode\u003e\u003ca\u003emonitorProcess\u003c/a\u003e\u003c/code\u003e are cumulative,\n such that calling \u003ccode\u003e\u003ca\u003emonitorProcess\u003c/a\u003e\u003c/code\u003e 3 three times on the same pair of processes\n will ensure that monitoring will stay in place until \u003ccode\u003e\u003ca\u003eunmonitorProcess\u003c/a\u003e\u003c/code\u003e is called\n three times on the same pair of processes.\n If the monitee is not currently running, the monitor will be signalled immediately.\n See also \u003ccode\u003e\u003ca\u003eMonitorAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "monitorProcess",
          "package": "remote",
          "signature": "ProcessId -\u003e ProcessId -\u003e MonitorAction -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#monitorProcess",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:monitorProcess\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:monitorProcess\"]"
        },
        "index": {
          "description": "Establishes unidirectional processing of another process The format is monitorProcess monitor monitee action Here monitor is the process that will be notified if the monitee goes down monitee is the process that will be monitored action determines how the monitor will be notified Monitoring will remain in place until one of the processes ends or until unmonitorProcess is called Calls to monitorProcess are cumulative such that calling monitorProcess three times on the same pair of processes will ensure that monitoring will stay in place until unmonitorProcess is called three times on the same pair of processes If the monitee is not currently running the monitor will be signalled immediately See also MonitorAction",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "monitorProcess",
          "normalized": "ProcessId-\u003eProcessId-\u003eMonitorAction-\u003eProcessM()",
          "package": "remote",
          "partial": "Process",
          "signature": "ProcessId-\u003eProcessId-\u003eMonitorAction-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:monitorProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the PID of a named process on a particular node.\n If no process of that name exists, or if that\n process has ended, this function returns Nothing.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "nameQuery",
          "package": "remote",
          "signature": "NodeId -\u003e String -\u003e ProcessM (Maybe ProcessId)",
          "source": "src/Remote-Process.html#nameQuery",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:nameQuery\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:nameQuery\"]"
        },
        "index": {
          "description": "Query the PID of named process on particular node If no process of that name exists or if that process has ended this function returns Nothing",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "nameQuery",
          "normalized": "NodeId-\u003eString-\u003eProcessM(Maybe ProcessId)",
          "package": "remote",
          "partial": "Query",
          "signature": "NodeId-\u003eString-\u003eProcessM(Maybe ProcessId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:nameQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003enameQuery\u003c/a\u003e\u003c/code\u003e but if the named process doesn't exist,\n it will be started from the given closure. If the process is\n already running, the closure will be ignored.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "nameQueryOrStart",
          "package": "remote",
          "signature": "NodeId -\u003e String -\u003e Closure (ProcessM ()) -\u003e ProcessM ProcessId",
          "source": "src/Remote-Process.html#nameQueryOrStart",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:nameQueryOrStart\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:nameQueryOrStart\"]"
        },
        "index": {
          "description": "Similar to nameQuery but if the named process doesn exist it will be started from the given closure If the process is already running the closure will be ignored",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "nameQueryOrStart",
          "normalized": "NodeId-\u003eString-\u003eClosure(ProcessM())-\u003eProcessM ProcessId",
          "package": "remote",
          "partial": "Query Or Start",
          "signature": "NodeId-\u003eString-\u003eClosure(ProcessM())-\u003eProcessM ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:nameQueryOrStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssigns a name to the current process. The name is local to the\n node. On each node, each process may have only one name, and each\n name may be given to only one node. If this function is called\n more than once by the same process, or called more than once\n with the name on a single node, it will throw a \u003ccode\u003e\u003ca\u003eServiceException\u003c/a\u003e\u003c/code\u003e.\n The PID of a named process can be queried later with \u003ccode\u003e\u003ca\u003enameQuery\u003c/a\u003e\u003c/code\u003e. When the\n named process ends, its name will again become available.\n One reason to use named processes is to create node-local state.\n This example lets each node have its own favorite color, which can\n be changed and queried.\n\u003c/p\u003e\u003cpre\u003e nodeFavoriteColor :: ProcessM ()\n nodeFavoriteColor =\n  do nameSet \"favorite_color\"\n     loop Blue\n  where loop color =\n      receiveWait\n         [ match (\\newcolor -\u003e return newcolor),\n           match (\\pid -\u003e send pid color \u003e\u003e return color)\n         ] \u003e\u003e= loop\n\n setFavoriteColor :: NodeId -\u003e Color -\u003e ProcessM ()\n setFavoriteColor nid color =\n  do (Just pid) \u003c- nameQuery nid \"favorite_color\"\n     send pid color\n\n getFavoriteColor :: NodeId -\u003e ProcessM Color\n getFavoriteColor nid =\n  do (Just pid) \u003c- nameQuery nid \"favorite_color\"\n     mypid \u003c- getSelfPid\n     send pid mypid\n     expect\n\u003c/pre\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "nameSet",
          "package": "remote",
          "signature": "String -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#nameSet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:nameSet\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:nameSet\"]"
        },
        "index": {
          "description": "Assigns name to the current process The name is local to the node On each node each process may have only one name and each name may be given to only one node If this function is called more than once by the same process or called more than once with the name on single node it will throw ServiceException The PID of named process can be queried later with nameQuery When the named process ends its name will again become available One reason to use named processes is to create node-local state This example lets each node have its own favorite color which can be changed and queried nodeFavoriteColor ProcessM nodeFavoriteColor do nameSet favorite color loop Blue where loop color receiveWait match newcolor return newcolor match pid send pid color return color loop setFavoriteColor NodeId Color ProcessM setFavoriteColor nid color do Just pid nameQuery nid favorite color send pid color getFavoriteColor NodeId ProcessM Color getFavoriteColor nid do Just pid nameQuery nid favorite color mypid getSelfPid send pid mypid expect",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "nameSet",
          "normalized": "String-\u003eProcessM()",
          "package": "remote",
          "partial": "Set",
          "signature": "String-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:nameSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "nodeFromPid",
          "package": "remote",
          "signature": "ProcessId -\u003e NodeId",
          "source": "src/Remote-Process.html#nodeFromPid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "nodeFromPid",
          "normalized": "ProcessId-\u003eNodeId",
          "package": "remote",
          "partial": "From Pid",
          "signature": "ProcessId-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:nodeFromPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "nullPid",
          "package": "remote",
          "signature": "ProcessId",
          "source": "src/Remote-Process.html#nullPid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "nullPid",
          "package": "remote",
          "partial": "Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:nullPid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcessM\u003c/a\u003e\u003c/code\u003e-flavoured variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "pbracket",
          "package": "remote",
          "signature": "ProcessM a -\u003e (a -\u003e ProcessM b) -\u003e (a -\u003e ProcessM c) -\u003e ProcessM c",
          "source": "src/Remote-Process.html#pbracket",
          "type": "function"
        },
        "index": {
          "description": "ProcessM flavoured variant of bracket",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "pbracket",
          "normalized": "ProcessM a-\u003e(a-\u003eProcessM b)-\u003e(a-\u003eProcessM c)-\u003eProcessM c",
          "package": "remote",
          "signature": "ProcessM a-\u003e(a-\u003eProcessM b)-\u003e(a-\u003eProcessM c)-\u003eProcessM c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:pbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "performFinalization",
          "package": "remote",
          "signature": "MVar Node -\u003e IO ()",
          "source": "src/Remote-Process.html#performFinalization",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "performFinalization",
          "normalized": "MVar Node-\u003eIO()",
          "package": "remote",
          "partial": "Finalization",
          "signature": "MVar Node-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:performFinalization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcessM\u003c/a\u003e\u003c/code\u003e-flavoured variant of \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "pfinally",
          "package": "remote",
          "signature": "ProcessM a -\u003e ProcessM b -\u003e ProcessM a",
          "source": "src/Remote-Process.html#pfinally",
          "type": "function"
        },
        "index": {
          "description": "ProcessM flavoured variant of finally",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "pfinally",
          "normalized": "ProcessM a-\u003eProcessM b-\u003eProcessM a",
          "package": "remote",
          "signature": "ProcessM a-\u003eProcessM b-\u003eProcessM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:pfinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a small message to the specified node to determine if it's alive.\n If the node cannot be reached or does not respond within a time frame, the function\n will return False.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "pingNode",
          "package": "remote",
          "signature": "NodeId -\u003e ProcessM Bool",
          "source": "src/Remote-Process.html#pingNode",
          "type": "function"
        },
        "index": {
          "description": "Sends small message to the specified node to determine if it alive If the node cannot be reached or does not respond within time frame the function will return False",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "pingNode",
          "normalized": "NodeId-\u003eProcessM Bool",
          "package": "remote",
          "partial": "Node",
          "signature": "NodeId-\u003eProcessM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:pingNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "prNodeRef",
          "package": "remote",
          "signature": "Process -\u003e MVar Node",
          "source": "src/Remote-Process.html#prNodeRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "prNodeRef",
          "normalized": "Process-\u003eMVar Node",
          "package": "remote",
          "partial": "Node Ref",
          "signature": "Process-\u003eMVar Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:prNodeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcessM\u003c/a\u003e\u003c/code\u003e-flavoured variant of \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "ptimeout",
          "package": "remote",
          "signature": "Int -\u003e ProcessM a -\u003e ProcessM (Maybe a)",
          "source": "src/Remote-Process.html#ptimeout",
          "type": "function"
        },
        "index": {
          "description": "ProcessM flavoured variant of timeout",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "ptimeout",
          "normalized": "Int-\u003eProcessM a-\u003eProcessM(Maybe a)",
          "package": "remote",
          "signature": "Int-\u003eProcessM a-\u003eProcessM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:ptimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eProcessM\u003c/a\u003e\u003c/code\u003e-flavoured variant of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "ptry",
          "package": "remote",
          "signature": "ProcessM a -\u003e ProcessM (Either e a)",
          "source": "src/Remote-Process.html#ptry",
          "type": "function"
        },
        "index": {
          "description": "ProcessM flavoured variant of try",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "ptry",
          "normalized": "ProcessM a-\u003eProcessM(Either b a)",
          "package": "remote",
          "signature": "ProcessM a-\u003eProcessM(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:ptry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads in configuration data from external sources, specifically from the command line arguments\n and a configuration file. \n The first parameter to this function determines whether command-line arguments are consulted.\n If the second parameter is not \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then it should be the name of the configuration file;\n an exception will be thrown if the specified file does not exist.\n Usually, this function shouldn't be called directly, but rather from \u003ccode\u003eRemote.Init.remoteInit\u003c/code\u003e,\n which also takes into account environment variables.\n Options set by command-line parameters have the highest precedence,\n followed by options read from a configuration file; if a configuration option is not explicitly\n specified anywhere, a reasonable default is used. The configuration file has a format, wherein\n one configuration option is specified on each line; the first token on each line is the name\n of the configuration option, followed by whitespace, followed by its value. Lines beginning with #\n are comments. Thus:\n\u003c/p\u003e\u003cpre\u003e # This is a sample configuration file\n cfgHostName host3\n cfgKnownHosts host1 host2 host3 host4\n\u003c/pre\u003e\u003cp\u003eOptions may be specified on the command line similarly. Note that command-line arguments containing spaces must be quoted.\n\u003c/p\u003e\u003cpre\u003e ./MyProgram -cfgHostName=host3 -cfgKnownHosts='host1 host2 host3 host4'\n\u003c/pre\u003e",
          "module": "Remote.Process",
          "name": "readConfig",
          "package": "remote",
          "signature": "Bool -\u003e Maybe FilePath -\u003e IO Config",
          "source": "src/Remote-Process.html#readConfig",
          "type": "function"
        },
        "index": {
          "description": "Reads in configuration data from external sources specifically from the command line arguments and configuration file The first parameter to this function determines whether command-line arguments are consulted If the second parameter is not Nothing then it should be the name of the configuration file an exception will be thrown if the specified file does not exist Usually this function shouldn be called directly but rather from Remote.Init.remoteInit which also takes into account environment variables Options set by command-line parameters have the highest precedence followed by options read from configuration file if configuration option is not explicitly specified anywhere reasonable default is used The configuration file has format wherein one configuration option is specified on each line the first token on each line is the name of the configuration option followed by whitespace followed by its value Lines beginning with are comments Thus This is sample configuration file cfgHostName host3 cfgKnownHosts host1 host2 host3 host4 Options may be specified on the command line similarly Note that command-line arguments containing spaces must be quoted MyProgram cfgHostName host3 cfgKnownHosts host1 host2 host3 host4",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "readConfig",
          "normalized": "Bool-\u003eMaybe FilePath-\u003eIO Config",
          "package": "remote",
          "partial": "Config",
          "signature": "Bool-\u003eMaybe FilePath-\u003eIO Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:readConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamines the message queue of the current process, matching each message against each of the\n provided message pattern clauses (typically provided by a function from the \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e family). If\n a message matches, the corresponding handler is invoked and its result is returned. If no\n message matches, Nothing is returned.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "receive",
          "package": "remote",
          "signature": "[MatchM q ()] -\u003e ProcessM (Maybe q)",
          "source": "src/Remote-Process.html#receive",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:receive\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:receive\"]"
        },
        "index": {
          "description": "Examines the message queue of the current process matching each message against each of the provided message pattern clauses typically provided by function from the match family If message matches the corresponding handler is invoked and its result is returned If no message matches Nothing is returned",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "receive",
          "normalized": "[MatchM a()]-\u003eProcessM(Maybe a)",
          "package": "remote",
          "signature": "[MatchM q()]-\u003eProcessM(Maybe q)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamines the message queue of the current process, matching each message against each of the\n provided message pattern clauses (typically provided by a function from the \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e family). If\n a message matches, the corresponding handler is invoked and its result is returned. If no\n message matches, the function blocks until a matching message is received, or until the\n specified time in microseconds has elapsed, at which point it will return Nothing.\n If the specified time is 0, this function is equivalent to \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "receiveTimeout",
          "package": "remote",
          "signature": "Int -\u003e [MatchM q ()] -\u003e ProcessM (Maybe q)",
          "source": "src/Remote-Process.html#receiveTimeout",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:receiveTimeout\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:receiveTimeout\"]"
        },
        "index": {
          "description": "Examines the message queue of the current process matching each message against each of the provided message pattern clauses typically provided by function from the match family If message matches the corresponding handler is invoked and its result is returned If no message matches the function blocks until matching message is received or until the specified time in microseconds has elapsed at which point it will return Nothing If the specified time is this function is equivalent to receive",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "receiveTimeout",
          "normalized": "Int-\u003e[MatchM a()]-\u003eProcessM(Maybe a)",
          "package": "remote",
          "partial": "Timeout",
          "signature": "Int-\u003e[MatchM q()]-\u003eProcessM(Maybe q)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:receiveTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamines the message queue of the current process, matching each message against each of the\n provided message pattern clauses (typically provided by a function from the \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e family). If\n a message matches, the corresponding handler is invoked and its result is returned. If no\n message matches, the function blocks until a matching message is received.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "receiveWait",
          "package": "remote",
          "signature": "[MatchM q ()] -\u003e ProcessM q",
          "source": "src/Remote-Process.html#receiveWait",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:receiveWait\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:receiveWait\"]"
        },
        "index": {
          "description": "Examines the message queue of the current process matching each message against each of the provided message pattern clauses typically provided by function from the match family If message matches the corresponding handler is invoked and its result is returned If no message matches the function blocks until matching message is received",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "receiveWait",
          "normalized": "[MatchM a()]-\u003eProcessM a",
          "package": "remote",
          "partial": "Wait",
          "signature": "[MatchM q()]-\u003eProcessM q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:receiveWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Node (created by \u003ccode\u003e\u003ca\u003einitNode\u003c/a\u003e\u003c/code\u003e), start execution of user-provided code\n by invoking the given function with the node's \u003ccode\u003e\u003ca\u003ecfgRole\u003c/a\u003e\u003c/code\u003e string.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "roleDispatch",
          "package": "remote",
          "signature": "MVar Node -\u003e (String -\u003e ProcessM ()) -\u003e IO ()",
          "source": "src/Remote-Process.html#roleDispatch",
          "type": "function"
        },
        "index": {
          "description": "Given Node created by initNode start execution of user-provided code by invoking the given function with the node cfgRole string",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "roleDispatch",
          "normalized": "MVar Node-\u003e(String-\u003eProcessM())-\u003eIO()",
          "package": "remote",
          "partial": "Dispatch",
          "signature": "MVar Node-\u003e(String-\u003eProcessM())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:roleDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "roundtripQuery",
          "package": "remote",
          "signature": "PayloadDisposition -\u003e ProcessId -\u003e a -\u003e ProcessM (Either TransmitStatus b)",
          "source": "src/Remote-Process.html#roundtripQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "roundtripQuery",
          "normalized": "PayloadDisposition-\u003eProcessId-\u003ea-\u003eProcessM(Either TransmitStatus b)",
          "package": "remote",
          "partial": "Query",
          "signature": "PayloadDisposition-\u003eProcessId-\u003ea-\u003eProcessM(Either TransmitStatus b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:roundtripQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "roundtripQueryImpl",
          "package": "remote",
          "signature": "Int -\u003e PayloadDisposition -\u003e ProcessId -\u003e a -\u003e (b -\u003e c) -\u003e [MatchM (Either TransmitStatus c) ()] -\u003e ProcessM (Either TransmitStatus c)",
          "source": "src/Remote-Process.html#roundtripQueryImpl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "roundtripQueryImpl",
          "normalized": "Int-\u003ePayloadDisposition-\u003eProcessId-\u003ea-\u003e(b-\u003ec)-\u003e[MatchM(Either TransmitStatus c)()]-\u003eProcessM(Either TransmitStatus c)",
          "package": "remote",
          "partial": "Query Impl",
          "signature": "Int-\u003ePayloadDisposition-\u003eProcessId-\u003ea-\u003e(b-\u003ec)-\u003e[MatchM(Either TransmitStatus c)()]-\u003eProcessM(Either TransmitStatus c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:roundtripQueryImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "roundtripQueryMulti",
          "package": "remote",
          "signature": "PayloadDisposition -\u003e [ProcessId] -\u003e a -\u003e ProcessM [Either TransmitStatus b]",
          "source": "src/Remote-Process.html#roundtripQueryMulti",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "roundtripQueryMulti",
          "normalized": "PayloadDisposition-\u003e[ProcessId]-\u003ea-\u003eProcessM[Either TransmitStatus b]",
          "package": "remote",
          "partial": "Query Multi",
          "signature": "PayloadDisposition-\u003e[ProcessId]-\u003ea-\u003eProcessM[Either TransmitStatus b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:roundtripQueryMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "roundtripQueryUnsafe",
          "package": "remote",
          "signature": "PayloadDisposition -\u003e ProcessId -\u003e a -\u003e ProcessM (Either TransmitStatus b)",
          "source": "src/Remote-Process.html#roundtripQueryUnsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "roundtripQueryUnsafe",
          "normalized": "PayloadDisposition-\u003eProcessId-\u003ea-\u003eProcessM(Either TransmitStatus b)",
          "package": "remote",
          "partial": "Query Unsafe",
          "signature": "PayloadDisposition-\u003eProcessId-\u003ea-\u003eProcessM(Either TransmitStatus b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:roundtripQueryUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "roundtripResponse",
          "package": "remote",
          "signature": "(a -\u003e ProcessM (b, q)) -\u003e MatchM q ()",
          "source": "src/Remote-Process.html#roundtripResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "roundtripResponse",
          "normalized": "(a-\u003eProcessM(b,c))-\u003eMatchM c()",
          "package": "remote",
          "partial": "Response",
          "signature": "(a-\u003eProcessM(b,q))-\u003eMatchM q()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:roundtripResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "roundtripResponseAsync",
          "package": "remote",
          "signature": "(a -\u003e (b -\u003e ProcessM ()) -\u003e ProcessM q) -\u003e Bool -\u003e MatchM q ()",
          "source": "src/Remote-Process.html#roundtripResponseAsync",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "roundtripResponseAsync",
          "normalized": "(a-\u003e(b-\u003eProcessM())-\u003eProcessM c)-\u003eBool-\u003eMatchM c()",
          "package": "remote",
          "partial": "Response Async",
          "signature": "(a-\u003e(b-\u003eProcessM())-\u003eProcessM q)-\u003eBool-\u003eMatchM q()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:roundtripResponseAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "runLocalProcess",
          "package": "remote",
          "signature": "MVar Node -\u003e ProcessM () -\u003e IO ProcessId",
          "source": "src/Remote-Process.html#runLocalProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "runLocalProcess",
          "normalized": "MVar Node-\u003eProcessM()-\u003eIO ProcessId",
          "package": "remote",
          "partial": "Local Process",
          "signature": "MVar Node-\u003eProcessM()-\u003eIO ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:runLocalProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the logging facility to produce non-filterable, programmatic output. Shouldn't be used\n for informational logging, but rather for application-level output.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "say",
          "package": "remote",
          "signature": "String -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#say",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:say\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:say\"]"
        },
        "index": {
          "description": "Uses the logging facility to produce non-filterable programmatic output Shouldn be used for informational logging but rather for application-level output",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "say",
          "normalized": "String-\u003eProcessM()",
          "package": "remote",
          "signature": "String-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:say"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a message to the given process. If the\n process isn't running or can't be accessed,\n this function will throw a \u003ccode\u003e\u003ca\u003eTransmitException\u003c/a\u003e\u003c/code\u003e.\n The message must implement the \u003ccode\u003e\u003ca\u003eSerializable\u003c/a\u003e\u003c/code\u003e interface.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "send",
          "package": "remote",
          "signature": "ProcessId -\u003e a -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#send",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:send\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:send\"]"
        },
        "index": {
          "description": "Sends message to the given process If the process isn running or can be accessed this function will throw TransmitException The message must implement the Serializable interface",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "send",
          "normalized": "ProcessId-\u003ea-\u003eProcessM()",
          "package": "remote",
          "signature": "ProcessId-\u003ea-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e, but in case of error returns a value rather than throw\n an exception.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "sendQuiet",
          "package": "remote",
          "signature": "ProcessId -\u003e a -\u003e ProcessM TransmitStatus",
          "source": "src/Remote-Process.html#sendQuiet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:sendQuiet\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:sendQuiet\"]"
        },
        "index": {
          "description": "Like send but in case of error returns value rather than throw an exception",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "sendQuiet",
          "normalized": "ProcessId-\u003ea-\u003eProcessM TransmitStatus",
          "package": "remote",
          "partial": "Quiet",
          "signature": "ProcessId-\u003ea-\u003eProcessM TransmitStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:sendQuiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "sendSimple",
          "package": "remote",
          "signature": "ProcessId -\u003e a -\u003e PayloadDisposition -\u003e ProcessM TransmitStatus",
          "source": "src/Remote-Process.html#sendSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "sendSimple",
          "normalized": "ProcessId-\u003ea-\u003ePayloadDisposition-\u003eProcessM TransmitStatus",
          "package": "remote",
          "partial": "Simple",
          "signature": "ProcessId-\u003ea-\u003ePayloadDisposition-\u003eProcessM TransmitStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:sendSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "setDaemonic",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Process.html#setDaemonic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "setDaemonic",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Daemonic",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:setDaemonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the process's log configuration. This overrides\n any node-level log configuration\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "setLogConfig",
          "package": "remote",
          "signature": "LogConfig -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#setLogConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:setLogConfig\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:setLogConfig\"]"
        },
        "index": {
          "description": "Set the process log configuration This overrides any node-level log configuration",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "setLogConfig",
          "normalized": "LogConfig-\u003eProcessM()",
          "package": "remote",
          "partial": "Log Config",
          "signature": "LogConfig-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:setLogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the node's log configuration\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "setNodeLogConfig",
          "package": "remote",
          "signature": "LogConfig -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#setNodeLogConfig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:setNodeLogConfig\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:setNodeLogConfig\"]"
        },
        "index": {
          "description": "Sets the node log configuration",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "setNodeLogConfig",
          "normalized": "LogConfig-\u003eProcessM()",
          "package": "remote",
          "partial": "Node Log Config",
          "signature": "LogConfig-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:setNodeLogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the log configuration of a remote node.\n May throw TransmitException\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "setRemoteNodeLogConfig",
          "package": "remote",
          "signature": "NodeId -\u003e LogConfig -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#setRemoteNodeLogConfig",
          "type": "function"
        },
        "index": {
          "description": "Sets the log configuration of remote node May throw TransmitException",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "setRemoteNodeLogConfig",
          "normalized": "NodeId-\u003eLogConfig-\u003eProcessM()",
          "package": "remote",
          "partial": "Remote Node Log Config",
          "signature": "NodeId-\u003eLogConfig-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:setRemoteNodeLogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a process running the code, given as a closure, on the specified node.\n If successful, returns the process ID of the new process. If unsuccessful,\n throw a \u003ccode\u003e\u003ca\u003eTransmitException\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "spawn",
          "package": "remote",
          "signature": "NodeId -\u003e Closure (ProcessM ()) -\u003e ProcessM ProcessId",
          "source": "src/Remote-Process.html#spawn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:spawn\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:spawn\"]"
        },
        "index": {
          "description": "Start process running the code given as closure on the specified node If successful returns the process ID of the new process If unsuccessful throw TransmitException",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "spawn",
          "normalized": "NodeId-\u003eClosure(ProcessM())-\u003eProcessM ProcessId",
          "package": "remote",
          "signature": "NodeId-\u003eClosure(ProcessM())-\u003eProcessM ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e that allows greater control over how the remote process is started.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "spawnAnd",
          "package": "remote",
          "signature": "NodeId -\u003e Closure (ProcessM ()) -\u003e AmSpawnOptions -\u003e ProcessM ProcessId",
          "source": "src/Remote-Process.html#spawnAnd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:spawnAnd\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:spawnAnd\"]"
        },
        "index": {
          "description": "variant of spawn that allows greater control over how the remote process is started",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "spawnAnd",
          "normalized": "NodeId-\u003eClosure(ProcessM())-\u003eAmSpawnOptions-\u003eProcessM ProcessId",
          "package": "remote",
          "partial": "And",
          "signature": "NodeId-\u003eClosure(ProcessM())-\u003eAmSpawnOptions-\u003eProcessM ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:spawnAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e that starts the remote process with\n bidirectoinal monitoring, as in \u003ccode\u003e\u003ca\u003elinkProcess\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "spawnLink",
          "package": "remote",
          "signature": "NodeId -\u003e Closure (ProcessM ()) -\u003e ProcessM ProcessId",
          "source": "src/Remote-Process.html#spawnLink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:spawnLink\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:spawnLink\"]"
        },
        "index": {
          "description": "variant of spawn that starts the remote process with bidirectoinal monitoring as in linkProcess",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "spawnLink",
          "normalized": "NodeId-\u003eClosure(ProcessM())-\u003eProcessM ProcessId",
          "package": "remote",
          "partial": "Link",
          "signature": "NodeId-\u003eClosure(ProcessM())-\u003eProcessM ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:spawnLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new process on the current node. Returns the new process's identifier.\n Unlike \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, this function does not need a \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "spawnLocal",
          "package": "remote",
          "signature": "ProcessM () -\u003e ProcessM ProcessId",
          "source": "src/Remote-Process.html#spawnLocal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:spawnLocal\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:spawnLocal\"]"
        },
        "index": {
          "description": "Create new process on the current node Returns the new process identifier Unlike spawn this function does not need Closure or NodeId",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "spawnLocal",
          "normalized": "ProcessM()-\u003eProcessM ProcessId",
          "package": "remote",
          "partial": "Local",
          "signature": "ProcessM()-\u003eProcessM ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:spawnLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart executing a process on the current node. This is a variation of \u003ccode\u003e\u003ca\u003espawnLocal\u003c/a\u003e\u003c/code\u003e\n which accepts two blocks of user-defined code. The first block\n is the main body of the code to run concurrently. The second block is a \u003ca\u003eprefix\u003c/a\u003e\n which is run in the new process, prior to the main body, but its completion\n is guaranteed before spawnAnd returns. Thus, the prefix code is useful for\n initializing the new process synchronously.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "spawnLocalAnd",
          "package": "remote",
          "signature": "ProcessM () -\u003e ProcessM () -\u003e ProcessM ProcessId",
          "source": "src/Remote-Process.html#spawnLocalAnd",
          "type": "function"
        },
        "index": {
          "description": "Start executing process on the current node This is variation of spawnLocal which accepts two blocks of user-defined code The first block is the main body of the code to run concurrently The second block is prefix which is run in the new process prior to the main body but its completion is guaranteed before spawnAnd returns Thus the prefix code is useful for initializing the new process synchronously",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "spawnLocalAnd",
          "normalized": "ProcessM()-\u003eProcessM()-\u003eProcessM ProcessId",
          "package": "remote",
          "partial": "Local And",
          "signature": "ProcessM()-\u003eProcessM()-\u003eProcessM ProcessId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:spawnLocalAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery host on which a node is running also needs a node registry,\n which arbitrates those nodes can responds to peer queries. If\n no registry is running, one will be automatically started\n when the framework is started, but the registry can be started\n independently, also. This function does that.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "standaloneLocalRegistry",
          "package": "remote",
          "signature": "String -\u003e IO ()",
          "source": "src/Remote-Process.html#standaloneLocalRegistry",
          "type": "function"
        },
        "index": {
          "description": "Every host on which node is running also needs node registry which arbitrates those nodes can responds to peer queries If no registry is running one will be automatically started when the framework is started but the registry can be started independently also This function does that",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "standaloneLocalRegistry",
          "normalized": "String-\u003eIO()",
          "package": "remote",
          "partial": "Local Registry",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:standaloneLocalRegistry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "startFinalizerService",
          "package": "remote",
          "signature": "ProcessM () -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#startFinalizerService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "startFinalizerService",
          "normalized": "ProcessM()-\u003eProcessM()",
          "package": "remote",
          "partial": "Finalizer Service",
          "signature": "ProcessM()-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:startFinalizerService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "startLocalRegistry",
          "package": "remote",
          "signature": "Config -\u003e Bool -\u003e IO TransmitStatus",
          "source": "src/Remote-Process.html#startLocalRegistry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "startLocalRegistry",
          "normalized": "Config-\u003eBool-\u003eIO TransmitStatus",
          "package": "remote",
          "partial": "Local Registry",
          "signature": "Config-\u003eBool-\u003eIO TransmitStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:startLocalRegistry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "startLoggingService",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Process.html#startLoggingService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "startLoggingService",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Logging Service",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:startLoggingService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "startNodeMonitorService",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Process.html#startNodeMonitorService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "startNodeMonitorService",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Node Monitor Service",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:startNodeMonitorService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "startProcessMonitorService",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Process.html#startProcessMonitorService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "startProcessMonitorService",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Process Monitor Service",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:startProcessMonitorService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "startProcessRegistryService",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Process.html#startProcessRegistryService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "startProcessRegistryService",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Process Registry Service",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:startProcessRegistryService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "startSpawnerService",
          "package": "remote",
          "signature": "ProcessM ()",
          "source": "src/Remote-Process.html#startSpawnerService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "startSpawnerService",
          "normalized": "ProcessM()",
          "package": "remote",
          "partial": "Spawner Service",
          "signature": "ProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:startSpawnerService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Process",
          "name": "suppressTransmitException",
          "package": "remote",
          "signature": "ProcessM a -\u003e ProcessM (Maybe a)",
          "source": "src/Remote-Process.html#suppressTransmitException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "suppressTransmitException",
          "normalized": "ProcessM a-\u003eProcessM(Maybe a)",
          "package": "remote",
          "partial": "Transmit Exception",
          "signature": "ProcessM a-\u003eProcessM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:suppressTransmitException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnds the current process in an orderly manner.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "terminate",
          "package": "remote",
          "signature": "ProcessM a",
          "source": "src/Remote-Process.html#terminate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:terminate\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:terminate\"]"
        },
        "index": {
          "description": "Ends the current process in an orderly manner",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "terminate",
          "package": "remote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves monitoring established by \u003ccode\u003e\u003ca\u003emonitorProcess\u003c/a\u003e\u003c/code\u003e. Note that the type of\n monitoring, given in the third parameter, must match in order for monitoring\n to be removed. If monitoring has not already been established between these\n two processes, this function takes not action.\n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "unmonitorProcess",
          "package": "remote",
          "signature": "ProcessId -\u003e ProcessId -\u003e MonitorAction -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#unmonitorProcess",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:unmonitorProcess\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:unmonitorProcess\"]"
        },
        "index": {
          "description": "Removes monitoring established by monitorProcess Note that the type of monitoring given in the third parameter must match in order for monitoring to be removed If monitoring has not already been established between these two processes this function takes not action",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "unmonitorProcess",
          "normalized": "ProcessId-\u003eProcessId-\u003eMonitorAction-\u003eProcessM()",
          "package": "remote",
          "partial": "Process",
          "signature": "ProcessId-\u003eProcessId-\u003eMonitorAction-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:unmonitorProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a remote process has been started in a paused state with \u003ccode\u003e\u003ca\u003espawnAnd\u003c/a\u003e\u003c/code\u003e ,\n it will be running but inactive until unpaused. Use this function to unpause\n such a function. It has no effect on processes that are not paused or that\n have already been unpaused.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "unpause",
          "package": "remote",
          "signature": "ProcessId -\u003e ProcessM ()",
          "source": "src/Remote-Process.html#unpause",
          "type": "function"
        },
        "index": {
          "description": "If remote process has been started in paused state with spawnAnd it will be running but inactive until unpaused Use this function to unpause such function It has no effect on processes that are not paused or that have already been unpaused",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "unpause",
          "normalized": "ProcessId-\u003eProcessM()",
          "package": "remote",
          "signature": "ProcessId-\u003eProcessM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:unpause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocks until all non-daemonic processes of the given\n node have ended. Usually called on the main thread of a program.\n\u003c/p\u003e",
          "module": "Remote.Process",
          "name": "waitForThreads",
          "package": "remote",
          "signature": "MVar Node -\u003e IO ()",
          "source": "src/Remote-Process.html#waitForThreads",
          "type": "function"
        },
        "index": {
          "description": "Blocks until all non-daemonic processes of the given node have ended Usually called on the main thread of program",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "waitForThreads",
          "normalized": "MVar Node-\u003eIO()",
          "package": "remote",
          "partial": "For Threads",
          "signature": "MVar Node-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:waitForThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablishes temporary monitoring of another process. The process to be monitored is given in the\n first parameter, and the code to run in the second. If the given process goes down while the code\n in the second parameter is running, a process down message will be sent to the current process,\n which can be handled by \u003ccode\u003e\u003ca\u003ematchProcessDown\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Remote.Process\",\"Remote\"]",
          "name": "withMonitor",
          "package": "remote",
          "signature": "ProcessId -\u003e ProcessM a -\u003e ProcessM a",
          "source": "src/Remote-Process.html#withMonitor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:withMonitor\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:withMonitor\"]"
        },
        "index": {
          "description": "Establishes temporary monitoring of another process The process to be monitored is given in the first parameter and the code to run in the second If the given process goes down while the code in the second parameter is running process down message will be sent to the current process which can be handled by matchProcessDown",
          "hierarchy": "Remote Process",
          "module": "Remote.Process",
          "name": "withMonitor",
          "normalized": "ProcessId-\u003eProcessM a-\u003eProcessM a",
          "package": "remote",
          "partial": "Monitor",
          "signature": "ProcessId-\u003eProcessM a-\u003eProcessM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Process.html#v:withMonitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRuntime metadata functions, part of the \n RPC mechanism\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote.Reg",
          "name": "Reg",
          "package": "remote",
          "source": "src/Remote-Reg.html",
          "type": "module"
        },
        "index": {
          "description": "Runtime metadata functions part of the RPC mechanism",
          "hierarchy": "Remote Reg",
          "module": "Remote.Reg",
          "name": "Reg",
          "package": "remote",
          "partial": "Reg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Reg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Reg",
          "name": "Identifier",
          "package": "remote",
          "source": "src/Remote-Reg.html#Identifier",
          "type": "type"
        },
        "index": {
          "hierarchy": "Remote Reg",
          "module": "Remote.Reg",
          "name": "Identifier",
          "package": "remote",
          "partial": "Identifier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Reg.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Reg",
          "name": "Lookup",
          "package": "remote",
          "source": "src/Remote-Reg.html#Lookup",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Reg",
          "module": "Remote.Reg",
          "name": "Lookup",
          "package": "remote",
          "partial": "Lookup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Reg.html#t:Lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData of this type is generated at compile-time\n by \u003ccode\u003eremotable\u003c/code\u003e and can be used with \u003ccode\u003e\u003ca\u003eregisterCalls\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003eremoteInit\u003c/code\u003e to create a metadata lookup table, \u003ccode\u003e\u003ca\u003eLookup\u003c/a\u003e\u003c/code\u003e.\n The name \u003ccode\u003e__remoteCallMetaData\u003c/code\u003e will be present\n in any module that uses \u003ccode\u003eremotable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote.Reg",
          "name": "RemoteCallMetaData",
          "package": "remote",
          "source": "src/Remote-Reg.html#RemoteCallMetaData",
          "type": "type"
        },
        "index": {
          "description": "Data of this type is generated at compile-time by remotable and can be used with registerCalls and remoteInit to create metadata lookup table Lookup The name remoteCallMetaData will be present in any module that uses remotable",
          "hierarchy": "Remote Reg",
          "module": "Remote.Reg",
          "name": "RemoteCallMetaData",
          "package": "remote",
          "partial": "Remote Call Meta Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Reg.html#t:RemoteCallMetaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Reg",
          "name": "empty",
          "package": "remote",
          "signature": "Lookup",
          "source": "src/Remote-Reg.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Reg",
          "module": "Remote.Reg",
          "name": "empty",
          "package": "remote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Reg.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Reg",
          "name": "getEntryByIdent",
          "package": "remote",
          "signature": "Lookup -\u003e Identifier -\u003e Maybe a",
          "source": "src/Remote-Reg.html#getEntryByIdent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Reg",
          "module": "Remote.Reg",
          "name": "getEntryByIdent",
          "normalized": "Lookup-\u003eIdentifier-\u003eMaybe a",
          "package": "remote",
          "partial": "Entry By Ident",
          "signature": "Lookup-\u003eIdentifier-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Reg.html#v:getEntryByIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Reg",
          "name": "putReg",
          "package": "remote",
          "signature": "a -\u003e Identifier -\u003e Lookup -\u003e Lookup",
          "source": "src/Remote-Reg.html#putReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Reg",
          "module": "Remote.Reg",
          "name": "putReg",
          "normalized": "a-\u003eIdentifier-\u003eLookup-\u003eLookup",
          "package": "remote",
          "partial": "Reg",
          "signature": "a-\u003eIdentifier-\u003eLookup-\u003eLookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Reg.html#v:putReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a metadata lookup table based on compile-time metadata.\n You probably don't want to call this function yourself, but instead\n use \u003ccode\u003eRemote.Init.remoteInit\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote.Reg",
          "name": "registerCalls",
          "package": "remote",
          "signature": "[RemoteCallMetaData] -\u003e Lookup",
          "source": "src/Remote-Reg.html#registerCalls",
          "type": "function"
        },
        "index": {
          "description": "Creates metadata lookup table based on compile-time metadata You probably don want to call this function yourself but instead use Remote.Init.remoteInit",
          "hierarchy": "Remote Reg",
          "module": "Remote.Reg",
          "name": "registerCalls",
          "normalized": "[RemoteCallMetaData]-\u003eLookup",
          "package": "remote",
          "partial": "Calls",
          "signature": "[RemoteCallMetaData]-\u003eLookup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Reg.html#v:registerCalls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides data dependency resolution and\n fault tolerance via \u003cem\u003epromises\u003c/em\u003e (known elsewhere as \u003cem\u003efutures\u003c/em\u003e).\n It's implemented in terms of the \u003ca\u003eRemote.Process\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote.Task",
          "name": "Task",
          "package": "remote",
          "source": "src/Remote-Task.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides data dependency resolution and fault tolerance via promises known elsewhere as futures It implemented in terms of the Remote.Process module",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "Task",
          "package": "remote",
          "partial": "Task",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specification of preference\n of where a promise should be allocated,\n among the nodes visible to the master.\n\u003c/p\u003e",
          "module": "Remote.Task",
          "name": "Locality",
          "package": "remote",
          "source": "src/Remote-Task.html#Locality",
          "type": "data"
        },
        "index": {
          "description": "specification of preference of where promise should be allocated among the nodes visible to the master",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "Locality",
          "package": "remote",
          "partial": "Locality",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#t:Locality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure that stores the important\n user-provided functions that are the namesakes\n of the MapReduce algorithm.\n The number of mapper processes can be controlled\n by the user by controlling the length of the string\n returned by mtChunkify. The number of reducer\n promises is controlled by the number of values\n values returned by shuffler.\n The user must provide their own mapper and reducer.\n For many cases, the default chunkifier (\u003ccode\u003e\u003ca\u003echunkify\u003c/a\u003e\u003c/code\u003e)\n and shuffler (\u003ccode\u003e\u003ca\u003eshuffle\u003c/a\u003e\u003c/code\u003e) are adequate.\n\u003c/p\u003e",
          "module": "Remote.Task",
          "name": "MapReduce",
          "package": "remote",
          "source": "src/Remote-Task.html#MapReduce",
          "type": "data"
        },
        "index": {
          "description": "data structure that stores the important user-provided functions that are the namesakes of the MapReduce algorithm The number of mapper processes can be controlled by the user by controlling the length of the string returned by mtChunkify The number of reducer promises is controlled by the number of values values returned by shuffler The user must provide their own mapper and reducer For many cases the default chunkifier chunkify and shuffler shuffle are adequate",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "MapReduce",
          "package": "remote",
          "partial": "Map Reduce",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#t:MapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic data type for expressing data dependence\n in the \u003ccode\u003e\u003ca\u003eTaskM\u003c/a\u003e\u003c/code\u003e monad. A Promise represents a value that\n may or may not have been computed yet; thus, it's like\n a distributed thunk (in the sense of a non-strict unit\n of evaluation). These are created by \u003ccode\u003e\u003ca\u003enewPromise\u003c/a\u003e\u003c/code\u003e and friends,\n and the underlying value can be gotten with \u003ccode\u003e\u003ca\u003ereadPromise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote.Task",
          "name": "Promise",
          "package": "remote",
          "source": "src/Remote-Task.html#Promise",
          "type": "data"
        },
        "index": {
          "description": "The basic data type for expressing data dependence in the TaskM monad Promise represents value that may or may not have been computed yet thus it like distributed thunk in the sense of non-strict unit of evaluation These are created by newPromise and friends and the underlying value can be gotten with readPromise",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "Promise",
          "package": "remote",
          "partial": "Promise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#t:Promise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Task",
          "name": "PromiseList",
          "package": "remote",
          "source": "src/Remote-Task.html#PromiseList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "PromiseList",
          "package": "remote",
          "partial": "Promise List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#t:PromiseList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Task",
          "name": "TaskException",
          "package": "remote",
          "source": "src/Remote-Task.html#TaskException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "TaskException",
          "package": "remote",
          "partial": "Task Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#t:TaskException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Task",
          "name": "TaskM",
          "package": "remote",
          "source": "src/Remote-Task.html#TaskM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "TaskM",
          "package": "remote",
          "partial": "Task",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#t:TaskM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe given nodes will be preferred\n\u003c/p\u003e",
          "module": "Remote.Task",
          "name": "LcByNode",
          "package": "remote",
          "signature": "LcByNode [NodeId]",
          "source": "src/Remote-Task.html#Locality",
          "type": "function"
        },
        "index": {
          "description": "The given nodes will be preferred",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "LcByNode",
          "normalized": "LcByNode[NodeId]",
          "package": "remote",
          "partial": "Lc By Node",
          "signature": "LcByNode[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:LcByNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNodes having the given roles will be preferred\n\u003c/p\u003e",
          "module": "Remote.Task",
          "name": "LcByRole",
          "package": "remote",
          "signature": "LcByRole [String]",
          "source": "src/Remote-Task.html#Locality",
          "type": "function"
        },
        "index": {
          "description": "Nodes having the given roles will be preferred",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "LcByRole",
          "normalized": "LcByRole[String]",
          "package": "remote",
          "partial": "Lc By Role",
          "signature": "LcByRole[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:LcByRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default preference is applied, which is for nodes having a role of NODE of WORKER\n\u003c/p\u003e",
          "module": "Remote.Task",
          "name": "LcDefault",
          "package": "remote",
          "signature": "LcDefault",
          "source": "src/Remote-Task.html#Locality",
          "type": "function"
        },
        "index": {
          "description": "The default preference is applied which is for nodes having role of NODE of WORKER",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "LcDefault",
          "package": "remote",
          "partial": "Lc Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:LcDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe promise can be placed anywhere.\n\u003c/p\u003e",
          "module": "Remote.Task",
          "name": "LcUnrestricted",
          "package": "remote",
          "signature": "LcUnrestricted",
          "source": "src/Remote-Task.html#Locality",
          "type": "function"
        },
        "index": {
          "description": "The promise can be placed anywhere",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "LcUnrestricted",
          "package": "remote",
          "partial": "Lc Unrestricted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:LcUnrestricted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "MapReduce",
          "package": "remote",
          "signature": "MapReduce",
          "source": "src/Remote-Task.html#MapReduce",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:MapReduce\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:MapReduce\"]"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "MapReduce",
          "package": "remote",
          "partial": "Map Reduce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:MapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Task",
          "name": "PlChunk",
          "package": "remote",
          "signature": "PlChunk a (Promise (PromiseList a))",
          "source": "src/Remote-Task.html#PromiseList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "PlChunk",
          "package": "remote",
          "partial": "Pl Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:PlChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Task",
          "name": "PlNil",
          "package": "remote",
          "signature": "PlNil",
          "source": "src/Remote-Task.html#PromiseList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "PlNil",
          "package": "remote",
          "partial": "Pl Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:PlNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "TaskException",
          "package": "remote",
          "signature": "TaskException String",
          "source": "src/Remote-Task.html#TaskException",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:TaskException\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:TaskException\"]"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "TaskException",
          "package": "remote",
          "partial": "Task Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:TaskException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Task",
          "name": "__remoteCallMetaData",
          "package": "remote",
          "signature": "RemoteCallMetaData",
          "source": "src/Remote-Task.html#__remoteCallMetaData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "__remoteCallMetaData",
          "package": "remote",
          "partial": "Call Meta Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:__remoteCallMetaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient way to provide the \u003ccode\u003e\u003ca\u003emtChunkify\u003c/a\u003e\u003c/code\u003e function\n as part of \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "chunkify",
          "package": "remote",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/Remote-Task.html#chunkify",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:chunkify\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:chunkify\"]"
        },
        "index": {
          "description": "convenient way to provide the mtChunkify function as part of mapReduce",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "chunkify",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "remote",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:chunkify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe MapReduce algorithm, implemented in a very\n simple form on top of the Task layer. Its\n use depends on four user-determined data types:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e input -- The data type provided as the input to the algorithm as a whole and given to the mapper.\n\u003c/li\u003e\u003cli\u003e middle1 -- The output of the mapper. This may include some \u003cem\u003ekey\u003c/em\u003e which is used by the shuffler to allocate data to reducers.\n If you use the default shuffler, \u003ccode\u003e\u003ca\u003eshuffle\u003c/a\u003e\u003c/code\u003e, this type must have the form \u003ccode\u003eOrd a =\u003e (a,b)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e middle2 -- The output of the shuffler. The default shuffler emits a type in the form \u003ccode\u003eOrd =\u003e (a,[b])\u003c/code\u003e. Each middle2 output \n by shuffler is given to a separate reducer.\n\u003c/li\u003e\u003cli\u003e result -- The output of the reducer, upon being given a bunch of middles.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "mapReduce",
          "package": "remote",
          "signature": "MapReduce ri i k m r -\u003e ri -\u003e TaskM [r]",
          "source": "src/Remote-Task.html#mapReduce",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mapReduce\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:mapReduce\"]"
        },
        "index": {
          "description": "The MapReduce algorithm implemented in very simple form on top of the Task layer Its use depends on four user-determined data types input The data type provided as the input to the algorithm as whole and given to the mapper middle1 The output of the mapper This may include some key which is used by the shuffler to allocate data to reducers If you use the default shuffler shuffle this type must have the form Ord middle2 The output of the shuffler The default shuffler emits type in the form Ord Each middle2 output by shuffler is given to separate reducer result The output of the reducer upon being given bunch of middles",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "mapReduce",
          "normalized": "MapReduce a b c d e-\u003ea-\u003eTaskM[e]",
          "package": "remote",
          "partial": "Reduce",
          "signature": "MapReduce ri i k m r-\u003eri-\u003eTaskM[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "mtChunkify",
          "package": "remote",
          "signature": "rawinput -\u003e [input]",
          "source": "src/Remote-Task.html#MapReduce",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mtChunkify\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:mtChunkify\"]"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "mtChunkify",
          "normalized": "a-\u003e[b]",
          "package": "remote",
          "partial": "Chunkify",
          "signature": "rawinput-\u003e[input]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mtChunkify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "mtMapper",
          "package": "remote",
          "signature": "input -\u003e Closure (TaskM [middle1])",
          "source": "src/Remote-Task.html#MapReduce",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mtMapper\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:mtMapper\"]"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "mtMapper",
          "normalized": "a-\u003eClosure(TaskM[b])",
          "package": "remote",
          "partial": "Mapper",
          "signature": "input-\u003eClosure(TaskM[middle])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mtMapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "mtReducer",
          "package": "remote",
          "signature": "middle2 -\u003e Closure (TaskM result)",
          "source": "src/Remote-Task.html#MapReduce",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mtReducer\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:mtReducer\"]"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "mtReducer",
          "normalized": "a-\u003eClosure(TaskM b)",
          "package": "remote",
          "partial": "Reducer",
          "signature": "middle-\u003eClosure(TaskM result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mtReducer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "mtShuffle",
          "package": "remote",
          "signature": "[middle1] -\u003e [middle2]",
          "source": "src/Remote-Task.html#MapReduce",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mtShuffle\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:mtShuffle\"]"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "mtShuffle",
          "normalized": "[a]-\u003e[a]",
          "package": "remote",
          "partial": "Shuffle",
          "signature": "[middle]-\u003e[middle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:mtShuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function (expressed here as a closure, see \u003ca\u003eRemote.Call\u003c/a\u003e)\n that computes a value, returns a token identifying that value.\n This token, a \u003ccode\u003e\u003ca\u003ePromise\u003c/a\u003e\u003c/code\u003e can be moved about even if the\n value hasn't been computed yet. The computing function \n will be started somewhere among the nodes visible to the\n current master, preferring those nodes that correspond\n to the \u003ccode\u003edefaultLocality\u003c/code\u003e. Afterwards, attempts to\n redeem the promise with \u003ccode\u003e\u003ca\u003ereadPromise\u003c/a\u003e\u003c/code\u003e will contact the node\n where the function is executing.\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "newPromise",
          "package": "remote",
          "signature": "Closure (TaskM a) -\u003e TaskM (Promise a)",
          "source": "src/Remote-Task.html#newPromise",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:newPromise\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:newPromise\"]"
        },
        "index": {
          "description": "Given function expressed here as closure see Remote.Call that computes value returns token identifying that value This token Promise can be moved about even if the value hasn been computed yet The computing function will be started somewhere among the nodes visible to the current master preferring those nodes that correspond to the defaultLocality Afterwards attempts to redeem the promise with readPromise will contact the node where the function is executing",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "newPromise",
          "normalized": "Closure(TaskM a)-\u003eTaskM(Promise a)",
          "package": "remote",
          "partial": "Promise",
          "signature": "Closure(TaskM a)-\u003eTaskM(Promise a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:newPromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003enewPromise\u003c/a\u003e\u003c/code\u003e that lets the user\n specify a \u003ccode\u003e\u003ca\u003eLocality\u003c/a\u003e\u003c/code\u003e. The other flavors of newPromise,\n such as \u003ccode\u003e\u003ca\u003enewPromiseAtRole\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enewPromiseNear\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003enewPromiseHere\u003c/a\u003e\u003c/code\u003e at just shorthand for a call to this function.\n\u003c/p\u003e",
          "module": "Remote.Task",
          "name": "newPromiseAt",
          "package": "remote",
          "signature": "Locality -\u003e Closure (TaskM a) -\u003e TaskM (Promise a)",
          "source": "src/Remote-Task.html#newPromiseAt",
          "type": "function"
        },
        "index": {
          "description": "variant of newPromise that lets the user specify Locality The other flavors of newPromise such as newPromiseAtRole newPromiseNear and newPromiseHere at just shorthand for call to this function",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "newPromiseAt",
          "normalized": "Locality-\u003eClosure(TaskM a)-\u003eTaskM(Promise a)",
          "package": "remote",
          "partial": "Promise At",
          "signature": "Locality-\u003eClosure(TaskM a)-\u003eTaskM(Promise a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:newPromiseAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003enewPromise\u003c/a\u003e\u003c/code\u003e that prefers to start\n the computing functions on some set of nodes that\n have a given role (assigned by the cfgRole configuration\n option).\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "newPromiseAtRole",
          "package": "remote",
          "signature": "String -\u003e Closure (TaskM a) -\u003e TaskM (Promise a)",
          "source": "src/Remote-Task.html#newPromiseAtRole",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:newPromiseAtRole\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:newPromiseAtRole\"]"
        },
        "index": {
          "description": "variant of newPromise that prefers to start the computing functions on some set of nodes that have given role assigned by the cfgRole configuration option",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "newPromiseAtRole",
          "normalized": "String-\u003eClosure(TaskM a)-\u003eTaskM(Promise a)",
          "package": "remote",
          "partial": "Promise At Role",
          "signature": "String-\u003eClosure(TaskM a)-\u003eTaskM(Promise a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:newPromiseAtRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003enewPromise\u003c/a\u003e\u003c/code\u003e that prefers to start\n the computing function on the same node as the caller.\n Useful if you plan to use the resulting value\n locally.\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "newPromiseHere",
          "package": "remote",
          "signature": "Closure (TaskM a) -\u003e TaskM (Promise a)",
          "source": "src/Remote-Task.html#newPromiseHere",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:newPromiseHere\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:newPromiseHere\"]"
        },
        "index": {
          "description": "variant of newPromise that prefers to start the computing function on the same node as the caller Useful if you plan to use the resulting value locally",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "newPromiseHere",
          "normalized": "Closure(TaskM a)-\u003eTaskM(Promise a)",
          "package": "remote",
          "partial": "Promise Here",
          "signature": "Closure(TaskM a)-\u003eTaskM(Promise a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:newPromiseHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003enewPromise\u003c/a\u003e\u003c/code\u003e that prefers to start\n the computing function on the same node where some\n other promise lives. The other promise is not\n evaluated.\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "newPromiseNear",
          "package": "remote",
          "signature": "Promise b -\u003e Closure (TaskM a) -\u003e TaskM (Promise a)",
          "source": "src/Remote-Task.html#newPromiseNear",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:newPromiseNear\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:newPromiseNear\"]"
        },
        "index": {
          "description": "variant of newPromise that prefers to start the computing function on the same node where some other promise lives The other promise is not evaluated",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "newPromiseNear",
          "normalized": "Promise a-\u003eClosure(TaskM b)-\u003eTaskM(Promise b)",
          "package": "remote",
          "partial": "Promise Near",
          "signature": "Promise b-\u003eClosure(TaskM a)-\u003eTaskM(Promise a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:newPromiseNear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a promise, gets the value that is being\n calculated. If the calculation has finished,\n the owning node will be contacted and the data\n moved to the current node. If the calculation\n has not finished, this function will block\n until it has. If the calculation failed\n by throwing an exception (e.g. divide by zero),\n then this function will throw an excption as well\n (a \u003ccode\u003e\u003ca\u003eTaskException\u003c/a\u003e\u003c/code\u003e). If the node owning the\n promise is not accessible, the calculation\n will be restarted.\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "readPromise",
          "package": "remote",
          "signature": "Promise a -\u003e TaskM a",
          "source": "src/Remote-Task.html#readPromise",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:readPromise\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:readPromise\"]"
        },
        "index": {
          "description": "Given promise gets the value that is being calculated If the calculation has finished the owning node will be contacted and the data moved to the current node If the calculation has not finished this function will block until it has If the calculation failed by throwing an exception e.g divide by zero then this function will throw an excption as well TaskException If the node owning the promise is not accessible the calculation will be restarted",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "readPromise",
          "normalized": "Promise a-\u003eTaskM a",
          "package": "remote",
          "partial": "Promise",
          "signature": "Promise a-\u003eTaskM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:readPromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a new context for executing a \u003ccode\u003e\u003ca\u003eTaskM\u003c/a\u003e\u003c/code\u003e environment.\n The node on which this function is run becomes a new master\n in a Task application; as a result, the application should\n only call this function once. The master will attempt to\n control all nodes that it can find; if you are going to be\n running more than one CH application on a single network,\n be sure to give each application a different network\n magic (via cfgNetworkMagic). The master TaskM environment\n created by this function can then spawn other threads,\n locally or remotely, using \u003ccode\u003e\u003ca\u003enewPromise\u003c/a\u003e\u003c/code\u003e and friends.\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "runTask",
          "package": "remote",
          "signature": "TaskM a -\u003e ProcessM a",
          "source": "src/Remote-Task.html#runTask",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:runTask\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:runTask\"]"
        },
        "index": {
          "description": "Starts new context for executing TaskM environment The node on which this function is run becomes new master in Task application as result the application should only call this function once The master will attempt to control all nodes that it can find if you are going to be running more than one CH application on single network be sure to give each application different network magic via cfgNetworkMagic The master TaskM environment created by this function can then spawn other threads locally or remotely using newPromise and friends",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "runTask",
          "normalized": "TaskM a-\u003eProcessM a",
          "package": "remote",
          "partial": "Task",
          "signature": "TaskM a-\u003eProcessM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:runTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Task",
          "name": "serialDecodeA",
          "package": "remote",
          "signature": "Payload -\u003e TaskM (Maybe a)",
          "source": "src/Remote-Task.html#serialDecodeA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "serialDecodeA",
          "normalized": "Payload-\u003eTaskM(Maybe a)",
          "package": "remote",
          "partial": "Decode",
          "signature": "Payload-\u003eTaskM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:serialDecodeA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote.Task",
          "name": "serialEncodeA",
          "package": "remote",
          "signature": "a -\u003e TaskM Payload",
          "source": "src/Remote-Task.html#serialEncodeA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "serialEncodeA",
          "normalized": "a-\u003eTaskM Payload",
          "package": "remote",
          "partial": "Encode",
          "signature": "a-\u003eTaskM Payload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:serialEncodeA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient way to provide the \u003ccode\u003e\u003ca\u003emtShuffle\u003c/a\u003e\u003c/code\u003e function\n as part of \u003ccode\u003e\u003ca\u003emapReduce\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "shuffle",
          "package": "remote",
          "signature": "[(a, b)] -\u003e [(a, [b])]",
          "source": "src/Remote-Task.html#shuffle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:shuffle\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:shuffle\"]"
        },
        "index": {
          "description": "convenient way to provide the mtShuffle function as part of mapReduce",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "shuffle",
          "normalized": "[(a,b)]-\u003e[(a,[b])]",
          "package": "remote",
          "signature": "[(a,b)]-\u003e[(a,[b])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites various kinds of messages to the\n \u003ca\u003eRemote.Process\u003c/a\u003e log.\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "tlogS",
          "package": "remote",
          "signature": "LogSphere -\u003e LogLevel -\u003e String -\u003e TaskM ()",
          "source": "src/Remote-Task.html#tlogS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:tlogS\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:tlogS\"]"
        },
        "index": {
          "description": "Writes various kinds of messages to the Remote.Process log",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "tlogS",
          "normalized": "LogSphere-\u003eLogLevel-\u003eString-\u003eTaskM()",
          "package": "remote",
          "signature": "LogSphere-\u003eLogLevel-\u003eString-\u003eTaskM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:tlogS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewPromise\u003c/a\u003e\u003c/code\u003e, but creates a promise whose\n values is already known. In other words, it puts\n a given, already-calculated value in a promise.\n Conceptually (but not syntactically, due to closures),\n you can consider it like this:\n\u003c/p\u003e\u003cpre\u003e toPromise a = newPromise (return a)\n\u003c/pre\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "toPromise",
          "package": "remote",
          "signature": "a -\u003e TaskM (Promise a)",
          "source": "src/Remote-Task.html#toPromise",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:toPromise\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:toPromise\"]"
        },
        "index": {
          "description": "Like newPromise but creates promise whose values is already known In other words it puts given already-calculated value in promise Conceptually but not syntactically due to closures you can consider it like this toPromise newPromise return",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "toPromise",
          "normalized": "a-\u003eTaskM(Promise a)",
          "package": "remote",
          "partial": "Promise",
          "signature": "a-\u003eTaskM(Promise a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:toPromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etoPromise\u003c/a\u003e\u003c/code\u003e that lets the user\n express a locality preference, i.e. some information\n about which node will become the owner of the\n new promise. These preferences will not necessarily\n be respected.\n\u003c/p\u003e",
          "module": "Remote.Task",
          "name": "toPromiseAt",
          "package": "remote",
          "signature": "Locality -\u003e a -\u003e TaskM (Promise a)",
          "source": "src/Remote-Task.html#toPromiseAt",
          "type": "function"
        },
        "index": {
          "description": "variant of toPromise that lets the user express locality preference i.e some information about which node will become the owner of the new promise These preferences will not necessarily be respected",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "toPromiseAt",
          "normalized": "Locality-\u003ea-\u003eTaskM(Promise a)",
          "package": "remote",
          "partial": "Promise At",
          "signature": "Locality-\u003ea-\u003eTaskM(Promise a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:toPromiseAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003cem\u003eimmediate promise\u003c/em\u003e, which is to say, a promise\n in name only. Unlike a regular promise (created by \u003ccode\u003e\u003ca\u003etoPromise\u003c/a\u003e\u003c/code\u003e), \n this kind of promise contains the value directly. The \n advantage is that promise redemption is very fast, requiring\n no network communication. The downside is that it the\n underlying data will be copied along with the promise.\n Useful only for small data.\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "toPromiseImm",
          "package": "remote",
          "signature": "a -\u003e TaskM (Promise a)",
          "source": "src/Remote-Task.html#toPromiseImm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:toPromiseImm\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:toPromiseImm\"]"
        },
        "index": {
          "description": "Creates an immediate promise which is to say promise in name only Unlike regular promise created by toPromise this kind of promise contains the value directly The advantage is that promise redemption is very fast requiring no network communication The downside is that it the underlying data will be copied along with the promise Useful only for small data",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "toPromiseImm",
          "normalized": "a-\u003eTaskM(Promise a)",
          "package": "remote",
          "partial": "Promise Imm",
          "signature": "a-\u003eTaskM(Promise a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:toPromiseImm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003etoPromiseAt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enewPromiseNear\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "toPromiseNear",
          "package": "remote",
          "signature": "Promise b -\u003e a -\u003e TaskM (Promise a)",
          "source": "src/Remote-Task.html#toPromiseNear",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:toPromiseNear\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:toPromiseNear\"]"
        },
        "index": {
          "description": "Similar to toPromiseAt and newPromiseNear",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "toPromiseNear",
          "normalized": "Promise a-\u003eb-\u003eTaskM(Promise b)",
          "package": "remote",
          "partial": "Promise Near",
          "signature": "Promise b-\u003ea-\u003eTaskM(Promise a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:toPromiseNear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Task-monadic version of \u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e.\n Puts text messages in the log.\n\u003c/p\u003e",
          "module": "[\"Remote.Task\",\"Remote\"]",
          "name": "tsay",
          "package": "remote",
          "signature": "String -\u003e TaskM ()",
          "source": "src/Remote-Task.html#tsay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:tsay\",\"http://hackage.haskell.org/package/remote/docs/Remote.html#v:tsay\"]"
        },
        "index": {
          "description": "Task-monadic version of say Puts text messages in the log",
          "hierarchy": "Remote Task",
          "module": "Remote.Task",
          "name": "tsay",
          "normalized": "String-\u003eTaskM()",
          "package": "remote",
          "signature": "String-\u003eTaskM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote-Task.html#v:tsay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCloud Haskell (previously Remote Haskell) is a distributed computing\n framework for Haskell. We can describe its interface\n as roughly two levels: the \u003cem\u003eprocess layer\u003c/em\u003e, consisting of\n processes, messages, and fault monitoring; and the\n \u003cem\u003etask layer\u003c/em\u003e, consisting of tasks, promises, and fault recovery.\n This summary module provides the most common interface\n functions for both layers, although advanced users might want to import names\n from the other constituent modules, as well.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Remote",
          "name": "Remote",
          "package": "remote",
          "source": "src/Remote.html",
          "type": "module"
        },
        "index": {
          "description": "Cloud Haskell previously Remote Haskell is distributed computing framework for Haskell We can describe its interface as roughly two levels the process layer consisting of processes messages and fault monitoring and the task layer consisting of tasks promises and fault recovery This summary module provides the most common interface functions for both layers although advanced users might want to import names from the other constituent modules as well",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "Remote",
          "package": "remote",
          "partial": "Remote",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote",
          "name": "AmSpawnOptions",
          "package": "remote",
          "source": "src/Remote-Process.html#AmSpawnOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "AmSpawnOptions",
          "package": "remote",
          "partial": "Am Spawn Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:AmSpawnOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type representing a closure, that is, a function with its environment.\n   In spirit, this is actually:\n\u003c/p\u003e\u003cpre\u003e   data Closure a where\n     Closure :: Serializable v =\u003e Static (v -\u003e a) -\u003e v -\u003e Closure a     \n\u003c/pre\u003e\u003cp\u003ewhere the Static type wraps a function with no non-static free variables.\n   We simulate this behavior by identifying top-level functions as strings.\n   See the paper for clarification.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "Closure",
          "package": "remote",
          "source": "src/Remote-Closure.html#Closure",
          "type": "data"
        },
        "index": {
          "description": "data type representing closure that is function with its environment In spirit this is actually data Closure where Closure Serializable Static Closure where the Static type wraps function with no non-static free variables We simulate this behavior by identifying top-level functions as strings See the paper for clarification",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "Closure",
          "package": "remote",
          "partial": "Closure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:Closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote",
          "name": "CombinedChannelAction",
          "package": "remote",
          "source": "src/Remote-Channel.html#CombinedChannelAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "CombinedChannelAction",
          "package": "remote",
          "partial": "Combined Channel Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:CombinedChannelAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpresses a current configuration of the logging\n subsystem, which determines which log messages to \n be output and where to send them when they are.\n Both processes and nodes have log configurations,\n set with \u003ccode\u003e\u003ca\u003esetLogConfig\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetNodeLogConfig\u003c/a\u003e\u003c/code\u003e\n respectively. The node log configuration is\n used for all processes that have not explicitly\n set their log configuration. Otherwise, the\n process log configuration takes priority.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "LogConfig",
          "package": "remote",
          "source": "src/Remote-Process.html#LogConfig",
          "type": "data"
        },
        "index": {
          "description": "Expresses current configuration of the logging subsystem which determines which log messages to be output and where to send them when they are Both processes and nodes have log configurations set with setLogConfig and setNodeLogConfig respectively The node log configuration is used for all processes that have not explicitly set their log configuration Otherwise the process log configuration takes priority",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "LogConfig",
          "package": "remote",
          "partial": "Log Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:LogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies which log messages will be output. \n All log messages of importance below the current\n log level or not among the criterea given here\n will be suppressed. This type lets you limit\n displayed log messages to certain components.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "LogFilter",
          "package": "remote",
          "source": "src/Remote-Process.html#LogFilter",
          "type": "data"
        },
        "index": {
          "description": "Specifies which log messages will be output All log messages of importance below the current log level or not among the criterea given here will be suppressed This type lets you limit displayed log messages to certain components",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "LogFilter",
          "package": "remote",
          "partial": "Log Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:LogFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the importance of a particular log entry.\n Can also be used to filter log output.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "LogLevel",
          "package": "remote",
          "source": "src/Remote-Process.html#LogLevel",
          "type": "data"
        },
        "index": {
          "description": "Specifies the importance of particular log entry Can also be used to filter log output",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "LogLevel",
          "package": "remote",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the subsystem or region that is responsible for\n generating a given log entry. This is useful in conjunction\n with \u003ccode\u003e\u003ca\u003eLogFilter\u003c/a\u003e\u003c/code\u003e to limit displayed log output to the\n particular area of your program that you are currently debugging.\n The SYS, TSK, and SAY spheres are used by the framework\n for messages relating to the Process layer, the Task layer,\n and the \u003ccode\u003e\u003ca\u003esay\u003c/a\u003e\u003c/code\u003e function.\n The remainder of values are free for use at the application level.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "LogSphere",
          "package": "remote",
          "source": "src/Remote-Process.html#LogSphere",
          "type": "type"
        },
        "index": {
          "description": "Specifies the subsystem or region that is responsible for generating given log entry This is useful in conjunction with LogFilter to limit displayed log output to the particular area of your program that you are currently debugging The SYS TSK and SAY spheres are used by the framework for messages relating to the Process layer the Task layer and the say function The remainder of values are free for use at the application level",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "LogSphere",
          "package": "remote",
          "partial": "Log Sphere",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:LogSphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA preference as to what is done with log messages\n\u003c/p\u003e",
          "module": "Remote",
          "name": "LogTarget",
          "package": "remote",
          "source": "src/Remote-Process.html#LogTarget",
          "type": "data"
        },
        "index": {
          "description": "preference as to what is done with log messages",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "LogTarget",
          "package": "remote",
          "partial": "Log Target",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:LogTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote",
          "name": "Lookup",
          "package": "remote",
          "source": "src/Remote-Reg.html#Lookup",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "Lookup",
          "package": "remote",
          "partial": "Lookup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:Lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure that stores the important\n user-provided functions that are the namesakes\n of the MapReduce algorithm.\n The number of mapper processes can be controlled\n by the user by controlling the length of the string\n returned by mtChunkify. The number of reducer\n promises is controlled by the number of values\n values returned by shuffler.\n The user must provide their own mapper and reducer.\n For many cases, the default chunkifier (\u003ccode\u003e\u003ca\u003echunkify\u003c/a\u003e\u003c/code\u003e)\n and shuffler (\u003ccode\u003e\u003ca\u003eshuffle\u003c/a\u003e\u003c/code\u003e) are adequate.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "MapReduce",
          "package": "remote",
          "source": "src/Remote-Task.html#MapReduce",
          "type": "data"
        },
        "index": {
          "description": "data structure that stores the important user-provided functions that are the namesakes of the MapReduce algorithm The number of mapper processes can be controlled by the user by controlling the length of the string returned by mtChunkify The number of reducer promises is controlled by the number of values values returned by shuffler The user must provide their own mapper and reducer For many cases the default chunkifier chunkify and shuffler shuffle are adequate",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "MapReduce",
          "package": "remote",
          "partial": "Map Reduce",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:MapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis monad provides the state and structure for\n matching received messages from the incoming message queue.\n It's the interface between the \u003ccode\u003e\u003ca\u003ereceive\u003c/a\u003e\u003c/code\u003e family of functions,\n and the \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e family, which together can express which\n messages can be accepted.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "MatchM",
          "package": "remote",
          "source": "src/Remote-Process.html#MatchM",
          "type": "data"
        },
        "index": {
          "description": "This monad provides the state and structure for matching received messages from the incoming message queue It the interface between the receive family of functions and the match family which together can express which messages can be accepted",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "MatchM",
          "package": "remote",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:MatchM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe different kinds of monitoring available between processes.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "MonitorAction",
          "package": "remote",
          "source": "src/Remote-Process.html#MonitorAction",
          "type": "data"
        },
        "index": {
          "description": "The different kinds of monitoring available between processes",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "MonitorAction",
          "package": "remote",
          "partial": "Monitor Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:MonitorAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a node somewhere on the network. These\n can be queried from \u003ccode\u003egetPeers\u003c/code\u003e. See also \u003ccode\u003e\u003ca\u003egetSelfNode\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote",
          "name": "NodeId",
          "package": "remote",
          "source": "src/Remote-Process.html#NodeId",
          "type": "data"
        },
        "index": {
          "description": "Identifies node somewhere on the network These can be queried from getPeers See also getSelfNode",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "NodeId",
          "package": "remote",
          "partial": "Node Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote",
          "name": "Payload",
          "package": "remote",
          "source": "src/Remote-Encoding.html#Payload",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "Payload",
          "package": "remote",
          "partial": "Payload",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:Payload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreated by \u003ccode\u003eRemote.Peer.getPeers\u003c/code\u003e, this maps\n each role to a list of nodes that have that role.\n It can be examined directly or queried with\n \u003ccode\u003efindPeerByRole\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "PeerInfo",
          "package": "remote",
          "source": "src/Remote-Process.html#PeerInfo",
          "type": "type"
        },
        "index": {
          "description": "Created by Remote.Peer.getPeers this maps each role to list of nodes that have that role It can be examined directly or queried with findPeerByRole",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "PeerInfo",
          "package": "remote",
          "partial": "Peer Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:PeerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifies a process somewhere on the network. These\n are produced by the \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e family of functions and\n consumed by \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e. When a process ends, its process ID\n ceases to be valid. See also \u003ccode\u003e\u003ca\u003egetSelfPid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Remote",
          "name": "ProcessId",
          "package": "remote",
          "source": "src/Remote-Process.html#ProcessId",
          "type": "data"
        },
        "index": {
          "description": "Identifies process somewhere on the network These are produced by the spawn family of functions and consumed by send When process ends its process ID ceases to be valid See also getSelfPid",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "ProcessId",
          "package": "remote",
          "partial": "Process Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:ProcessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad ProcessM is the core of the process layer. Functions\n in the ProcessM monad may participate in messaging and create\n additional concurrent processes. You can create\n a ProcessM context from an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e context with the \u003ccode\u003eremoteInit\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "ProcessM",
          "package": "remote",
          "source": "src/Remote-Process.html#ProcessM",
          "type": "data"
        },
        "index": {
          "description": "The monad ProcessM is the core of the process layer Functions in the ProcessM monad may participate in messaging and create additional concurrent processes You can create ProcessM context from an IO context with the remoteInit function",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "ProcessM",
          "package": "remote",
          "partial": "Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:ProcessM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main form of notification to a monitoring process that a monitored process has terminated.\n This data structure can be delivered to the monitor either as a message (if the monitor is\n of type \u003ccode\u003e\u003ca\u003eMaMonitor\u003c/a\u003e\u003c/code\u003e) or as an asynchronous exception (if the monitor is of type \u003ccode\u003e\u003ca\u003eMaLink\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMaLinkError\u003c/a\u003e\u003c/code\u003e).\n It contains the PID of the monitored process and the reason for its nofication.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "ProcessMonitorException",
          "package": "remote",
          "source": "src/Remote-Process.html#ProcessMonitorException",
          "type": "data"
        },
        "index": {
          "description": "The main form of notification to monitoring process that monitored process has terminated This data structure can be delivered to the monitor either as message if the monitor is of type MaMonitor or as an asynchronous exception if the monitor is of type MaLink or MaLinkError It contains the PID of the monitored process and the reason for its nofication",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "ProcessMonitorException",
          "package": "remote",
          "partial": "Process Monitor Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:ProcessMonitorException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic data type for expressing data dependence\n in the \u003ccode\u003e\u003ca\u003eTaskM\u003c/a\u003e\u003c/code\u003e monad. A Promise represents a value that\n may or may not have been computed yet; thus, it's like\n a distributed thunk (in the sense of a non-strict unit\n of evaluation). These are created by \u003ccode\u003e\u003ca\u003enewPromise\u003c/a\u003e\u003c/code\u003e and friends,\n and the underlying value can be gotten with \u003ccode\u003e\u003ca\u003ereadPromise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "Promise",
          "package": "remote",
          "source": "src/Remote-Task.html#Promise",
          "type": "data"
        },
        "index": {
          "description": "The basic data type for expressing data dependence in the TaskM monad Promise represents value that may or may not have been computed yet thus it like distributed thunk in the sense of non-strict unit of evaluation These are created by newPromise and friends and the underlying value can be gotten with readPromise",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "Promise",
          "package": "remote",
          "partial": "Promise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:Promise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process holding a ReceivePort can extract messages\n from the channel, which we inserted by\n the holder(s) of the corresponding \u003ccode\u003e\u003ca\u003eSendPort\u003c/a\u003e\u003c/code\u003e.\n Critically, ReceivePorts, unlike SendPorts, are not serializable.\n This means that you can only receive messages through a channel\n on the node on which the channel was created.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "ReceivePort",
          "package": "remote",
          "source": "src/Remote-Channel.html#ReceivePort",
          "type": "data"
        },
        "index": {
          "description": "process holding ReceivePort can extract messages from the channel which we inserted by the holder of the corresponding SendPort Critically ReceivePorts unlike SendPorts are not serializable This means that you can only receive messages through channel on the node on which the channel was created",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "ReceivePort",
          "package": "remote",
          "partial": "Receive Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:ReceivePort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData of this type is generated at compile-time\n by \u003ccode\u003eremotable\u003c/code\u003e and can be used with \u003ccode\u003e\u003ca\u003eregisterCalls\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003eremoteInit\u003c/code\u003e to create a metadata lookup table, \u003ccode\u003e\u003ca\u003eLookup\u003c/a\u003e\u003c/code\u003e.\n The name \u003ccode\u003e__remoteCallMetaData\u003c/code\u003e will be present\n in any module that uses \u003ccode\u003eremotable\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "RemoteCallMetaData",
          "package": "remote",
          "source": "src/Remote-Reg.html#RemoteCallMetaData",
          "type": "type"
        },
        "index": {
          "description": "Data of this type is generated at compile-time by remotable and can be used with registerCalls and remoteInit to create metadata lookup table Lookup The name remoteCallMetaData will be present in any module that uses remotable",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "RemoteCallMetaData",
          "package": "remote",
          "partial": "Remote Call Meta Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:RemoteCallMetaData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA channel is a unidirectional communication pipeline\n with two ends: a sending port, and a receiving port.\n This is the sending port. A process holding this\n value can insert messages into the channel. SendPorts\n themselves can also be sent to other processes.\n The other side of the channel is the \u003ccode\u003e\u003ca\u003eReceivePort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "SendPort",
          "package": "remote",
          "source": "src/Remote-Channel.html#SendPort",
          "type": "data"
        },
        "index": {
          "description": "channel is unidirectional communication pipeline with two ends sending port and receiving port This is the sending port process holding this value can insert messages into the channel SendPorts themselves can also be sent to other processes The other side of the channel is the ReceivePort",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "SendPort",
          "package": "remote",
          "partial": "Send Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:SendPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData that can be sent as a message must implement\n this class. The class has no functions of its own,\n but instead simply requires that the type implement\n both \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e. Typeable can usually\n be derived automatically. Binary requires the put and get\n functions, which can be easily implemented by hand,\n or you can use the \u003ccode\u003e\u003ca\u003egenericGet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egenericPut\u003c/a\u003e\u003c/code\u003e flavors,\n which will work automatically for types implementing\n \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Remote",
          "name": "Serializable",
          "package": "remote",
          "source": "src/Remote-Encoding.html#Serializable",
          "type": "class"
        },
        "index": {
          "description": "Data that can be sent as message must implement this class The class has no functions of its own but instead simply requires that the type implement both Typeable and Binary Typeable can usually be derived automatically Binary requires the put and get functions which can be easily implemented by hand or you can use the genericGet and genericPut flavors which will work automatically for types implementing Data",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "Serializable",
          "package": "remote",
          "partial": "Serializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown by \u003ca\u003eRemote.Process\u003c/a\u003e system services in response\n to some problem\n\u003c/p\u003e",
          "module": "Remote",
          "name": "ServiceException",
          "package": "remote",
          "source": "src/Remote-Process.html#ServiceException",
          "type": "data"
        },
        "index": {
          "description": "Thrown by Remote.Process system services in response to some problem",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "ServiceException",
          "package": "remote",
          "partial": "Service Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:ServiceException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote",
          "name": "TaskException",
          "package": "remote",
          "source": "src/Remote-Task.html#TaskException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "TaskException",
          "package": "remote",
          "partial": "Task Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:TaskException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote",
          "name": "TaskM",
          "package": "remote",
          "source": "src/Remote-Task.html#TaskM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "TaskM",
          "package": "remote",
          "partial": "Task",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:TaskM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown by various network-related functions when\n communication with a host has failed\n\u003c/p\u003e",
          "module": "Remote",
          "name": "TransmitException",
          "package": "remote",
          "source": "src/Remote-Process.html#TransmitException",
          "type": "data"
        },
        "index": {
          "description": "Thrown by various network-related functions when communication with host has failed",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "TransmitException",
          "package": "remote",
          "partial": "Transmit Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:TransmitException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Remote",
          "name": "TransmitStatus",
          "package": "remote",
          "source": "src/Remote-Process.html#TransmitStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "TransmitStatus",
          "package": "remote",
          "partial": "Transmit Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:TransmitStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown by \u003ccode\u003e\u003ca\u003ematchUnknownThrow\u003c/a\u003e\u003c/code\u003e in response to a message\n of a wrong type being received by a process\n\u003c/p\u003e",
          "module": "Remote",
          "name": "UnknownMessageException",
          "package": "remote",
          "source": "src/Remote-Process.html#UnknownMessageException",
          "type": "data"
        },
        "index": {
          "description": "Thrown by matchUnknownThrow in response to message of wrong type being received by process",
          "hierarchy": "Remote",
          "module": "Remote",
          "name": "UnknownMessageException",
          "package": "remote",
          "partial": "Unknown Message Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/remote/docs/Remote.html#t:UnknownMessageException"
      }
    }
  ]
]